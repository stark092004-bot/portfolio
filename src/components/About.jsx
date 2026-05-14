import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaCode, FaServer, FaCheckCircle } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import profileImageDark from '../assets/Guy Stark-dark.png';
import profileImageLight from '../assets/Guy Stark.png';
import './About.css';

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Extract number from string (e.g., "5+" -> 5, "15+" -> 15)
    const numericValue = parseInt(value.replace(/\D/g, ''));

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setDisplayValue(Math.floor(numericValue * progress));
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const suffix = value.replace(/[0-9]/g, '');

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

const About = ({ onHover, onLeave }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const stats = [
    { value: '5+', label: 'Years Experience', icon: FaCode },
    { value: '10+', label: 'Core Technologies', icon: FaCheckCircle },
    { value: '25+', label: 'Projects Delivered', icon: FaServer },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate Full Stack & AI Developer with a love for creating exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-wrapper">
              <img
                src={isDark ? profileImageDark : profileImageLight}
                alt={personalInfo.name}
                className="profile-image"
              />
              <div className="image-border" />
              <div className="image-glow" />
            </div>
          </motion.div>

          <div className="about-text">
            <motion.div className="about-summary" variants={itemVariants}>
              {personalInfo.summary.map((point, index) => (
                <motion.div
                  key={index}
                  className="summary-point"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <span className="point-icon">▹</span>
                  <p>{point}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* <motion.div className="about-cta" variants={itemVariants}>
              <LightingButton
                href={resumeFile}
                download="Guy_Stark_Frontend_Developer.pptx"
                className="nav-btn"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <FaDownload />
                Download Resume
              </LightingButton>
            </motion.div> */}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <stat.icon className="stat-icon" />
              <span className="stat-value">
                <AnimatedCounter value={stat.value} duration={2.5} />
              </span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
