import { useRef, useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  FaCalendarAlt, FaExternalLinkAlt,
  FaDownload, FaArrowRight, FaTh
} from 'react-icons/fa';
import { certifications } from '../data/portfolioData';
import LightingButton from './LightingButton';
import './Certifications.css';

const gradientColors = [
  'linear-gradient(180deg, #d4a574 0%, #8b6914 50%, #1a1a2e 100%)',
  'linear-gradient(180deg, #00d4ff 0%, #0891b2 50%, #1a1a2e 100%)',
  'linear-gradient(180deg, #3b82f6 0%, #1e40af 50%, #1a1a2e 100%)',
  'linear-gradient(180deg, #ec4899 0%, #9d174d 50%, #1a1a2e 100%)',
  'linear-gradient(180deg, #10b981 0%, #047857 50%, #1a1a2e 100%)',
  'linear-gradient(180deg, #f59e0b 0%, #b45309 50%, #1a1a2e 100%)',
];

const CertCard = ({ cert, index, navigate, onHover, onLeave }) => {
  const handleDownload = (e) => {
    e.stopPropagation();
    if (!cert.certificate) return;
    const link = document.createElement('a');
    link.href = cert.certificate;
    link.download = `${cert.name.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="cert-card"
      style={{ background: gradientColors[index % gradientColors.length] }}
      onClick={() => navigate(`/certifications/${cert.code}`)}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="cert-image">
        {cert.badge ? (
          <img src={cert.badge} alt={cert.name} className="cert-badge-img" />
        ) : (
          <div className="cert-badge-visual">
            <span className="cert-seal">📜</span>
            <span className="cert-text">CERTIFICATE</span>
          </div>
        )}
      </div>
      <div className="cert-info">
        <h3 className="cert-name">{cert.name}</h3>
        <div className="cert-meta">
          <span className="cert-issuer">
            <span className="issuer-icon">🏢</span> {cert.issuer}
          </span>
          <span className="cert-date">
            <FaCalendarAlt /> {cert.code}
          </span>
        </div>
        <div className="cert-actions">
          <LightingButton
            variant="secondary"
            className="cert-view-btn"
            style={{ fontSize: '0.8rem', padding: '8px 16px' }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/certifications/${cert.code}`);
            }}
          >
            View <FaExternalLinkAlt size={12} />
          </LightingButton>
          {cert.certificate && (
            <button
              className="cert-download-btn"
              onClick={handleDownload}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <FaDownload />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Certifications = ({ onHover, onLeave }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const startX = useRef(0);
  const scrollOffset = useRef(0);
  const autoOffset = useRef(0);
  const rafRef = useRef(null);
  const lastTime = useRef(null);
  const isInteracting = useRef(false);
  const resumeTimer = useRef(null);

  // Duplicate certifications for seamless infinite scroll
  const duplicated = [...certifications, ...certifications];

  const SPEED = 40; // px per second for auto-scroll

  const getHalfWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.scrollWidth / 2;
  }, []);

  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const halfWidth = getHalfWidth();
    // Keep scrollOffset within [0, halfWidth) for seamless loop
    let total = autoOffset.current + scrollOffset.current;
    total = ((total % halfWidth) + halfWidth) % halfWidth;
    track.style.transform = `translateX(-${total}px)`;
  }, [getHalfWidth]);

  // Auto-scroll loop
  useEffect(() => {
    const tick = (timestamp) => {
      if (!isInteracting.current) {
        if (lastTime.current !== null) {
          const delta = (timestamp - lastTime.current) / 1000;
          autoOffset.current += SPEED * delta;
          const halfWidth = getHalfWidth();
          if (halfWidth > 0) {
            autoOffset.current = autoOffset.current % halfWidth;
          }
        }
        lastTime.current = timestamp;
      } else {
        lastTime.current = null;
      }
      applyTransform();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [applyTransform, getHalfWidth]);

  const pauseAuto = () => {
    isInteracting.current = true;
    clearTimeout(resumeTimer.current);
  };

  const resumeAuto = () => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      isInteracting.current = false;
    }, 1200);
  };

  // Mouse drag handlers
  const onMouseDown = (e) => {
    isDragging.current = true;
    setIsGrabbing(true);
    startX.current = e.clientX;
    pauseAuto();
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = startX.current - e.clientX;
    scrollOffset.current = dx;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsGrabbing(false);
    // Absorb drag offset into autoOffset so auto-scroll resumes from current position
    autoOffset.current = ((autoOffset.current + scrollOffset.current) % getHalfWidth() + getHalfWidth()) % getHalfWidth();
    scrollOffset.current = 0;
    resumeAuto();
  };

  // Mouse wheel horizontal scroll
  const onWheel = (e) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY) && Math.abs(e.deltaY) < 5) return;
    pauseAuto();
    const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
    autoOffset.current = ((autoOffset.current + delta) % getHalfWidth() + getHalfWidth()) % getHalfWidth();
    resumeAuto();
  };

  // Touch drag support
  const touchStartX = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    pauseAuto();
  };
  const onTouchMove = (e) => {
    const dx = touchStartX.current - e.touches[0].clientX;
    scrollOffset.current = dx;
  };
  const onTouchEnd = () => {
    autoOffset.current = ((autoOffset.current + scrollOffset.current) % getHalfWidth() + getHalfWidth()) % getHalfWidth();
    scrollOffset.current = 0;
    resumeAuto();
  };

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <motion.div
          className="certifications-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications demonstrating expertise in cloud technologies
          </p>
        </motion.div>

        {/* Continuous scroll marquee */}
        <motion.div
          className="certifications-marquee"
          ref={marqueeRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onWheel={onWheel}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ cursor: isGrabbing ? 'grabbing' : 'grab' }}
        >
          <div className="certifications-marquee-track" ref={trackRef}>
            {duplicated.map((cert, i) => (
              <CertCard
                key={`${cert.code}-${i}`}
                cert={cert}
                index={i % certifications.length}
                navigate={navigate}
                onHover={onHover}
                onLeave={onLeave}
              />
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="certs-view-all"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.button
            className="view-all-btn"
            onClick={() => navigate('/certifications')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <FaTh />
            View All Certifications
            <span className="view-all-count">{certifications.length}</span>
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
