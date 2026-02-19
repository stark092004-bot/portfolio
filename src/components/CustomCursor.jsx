import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      if (!isVisible) setIsVisible(true);

      // Add to trail with unique id
      trailIdRef.current += 1;
      const newTrailPoint = {
        id: trailIdRef.current,
        x: e.clientX,
        y: e.clientY,
      };

      setTrail((prevTrail) => {
        const updatedTrail = [...prevTrail, newTrailPoint];
        // Keep only the last 12 trail points
        if (updatedTrail.length > 12) {
          return updatedTrail.slice(-12);
        }
        return updatedTrail;
      });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prevTrail) => {
        if (prevTrail.length > 0) {
          return prevTrail.slice(1);
        }
        return prevTrail;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Trail dots */}
      <AnimatePresence>
        {trail.map((point, index) => {
          const opacity = (index + 1) / trail.length * 0.6;
          const scale = (index + 1) / trail.length * 0.8;
          
          return (
            <motion.div
              key={point.id}
              className="cursor-trail"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: opacity,
                scale: scale,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                left: point.x,
                top: point.y,
              }}
            />
          );
        })}
      </AnimatePresence>

      {/* Main cursor dot */}
      <div
        className="custom-cursor-container"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="cursor-dot"
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              '0 0 8px #60a5fa, 0 0 16px #3b82f6, 0 0 24px rgba(59, 130, 246, 0.6)',
              '0 0 12px #60a5fa, 0 0 24px #3b82f6, 0 0 36px rgba(59, 130, 246, 0.8)',
              '0 0 8px #60a5fa, 0 0 16px #3b82f6, 0 0 24px rgba(59, 130, 246, 0.6)',
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
