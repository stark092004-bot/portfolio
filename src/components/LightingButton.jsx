import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './LightingButton.css';

const LightingButton = ({ 
  children, 
  onClick, 
  href, 
  download, 
  className = '', 
  style = {},
  variant = 'primary', // primary, secondary
  as = 'button', // button, a, div
  onMouseEnter: externalMouseEnter,
  onMouseLeave: externalMouseLeave,
  ...props 
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback((e) => {
    setOpacity(1);
    externalMouseEnter?.(e);
  }, [externalMouseEnter]);

  const handleMouseLeave = useCallback((e) => {
    setOpacity(0);
    externalMouseLeave?.(e);
  }, [externalMouseLeave]);

  const containerProps = {
    ref: buttonRef,
    onMouseMove: handleMouseMove,
    onFocus: () => setOpacity(1),
    onBlur: () => setOpacity(0),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: `lighting-button ${variant} ${className}`,
    style: { ...style, pointerEvents: 'auto' },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    ...props
  };

  // All overlay elements must not intercept pointer events
  const spotlightContent = (
    <>
      <div 
        className="spotlight-overlay"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
          pointerEvents: 'none',
        }}
      />
      <div 
        className="button-content relative z-10 flex items-center justify-center gap-2"
        style={{ pointerEvents: 'none' }}
      >
        {children}
      </div>
      <div 
        className="button-border"
        style={{
          opacity,
          background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, var(--accent-primary), transparent 60%)`,
          pointerEvents: 'none',
        }}
      />
    </>
  );

  // If rendering as div (for wrapping with Link or <a>)
  if (as === 'div') {
    return (
      <motion.div {...containerProps}>
        {spotlightContent}
      </motion.div>
    );
  }

  // If href is provided, render as anchor
  if (href) {
    return (
      <motion.a href={href} download={download} {...containerProps}>
        {spotlightContent}
      </motion.a>
    );
  }

  // Default: render as button
  return (
    <motion.button onClick={onClick} {...containerProps}>
      {spotlightContent}
    </motion.button>
  );
};

export default LightingButton;
