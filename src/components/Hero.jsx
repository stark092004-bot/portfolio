import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import LightingButton from './LightingButton';
import resumeFile from '../assets/resume/Yash_Jain_Resume.pdf';
import './Hero.css';

const Hero = ({ onHover, onLeave }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-gradient" />
      
      <motion.div
        className="hero-container container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div className="hero-role" variants={itemVariants}>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                3000,
                'UI Designer',
                3000,
                'Frontend Developer',
                3000,
                'Team Lead',
                3000,
                'React Specialist',
                3000,
                'Cloud Architect',
                3000,
                'Tech Lead',
                3000,
              ]}
              wrapper="span"
              speed={10}
              className="role-text"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p className="hero-tagline" variants={itemVariants}>
            {personalInfo.tagline}
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            <span className="highlight">{personalInfo.experience} years</span> of experience as a Frontend Software Engineer 
            specializing in <span className="highlight">React</span>, 
            <span className="highlight"> TypeScript</span>, and 
            <span className="highlight"> modern JavaScript</span>, 
            building scalable enterprise portals, AI-driven platforms, and secure web applications.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              hashSpy={true}
              className="hero-cta-link"
            >
              <LightingButton
                as="div"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                View My Work
                <FaArrowDown className="btn-icon" />
              </LightingButton>
            </Link>
            
            <a 
              href={resumeFile}
              download="Yash_Jain_Resume.pdf"
              className="hero-cta-link"
            >
              <LightingButton
                as="div"
                variant="secondary"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                Download Resume
                <FaDownload className="btn-icon" />
              </LightingButton>
            </a>
          </motion.div>

          {/* Social Links */}
          <div className="hero-social">
            {[
              { icon: FaGithub, link: personalInfo.social.github, label: 'GitHub' },
              { icon: FaLinkedin, link: personalInfo.social.linkedin, label: 'LinkedIn' },
              { icon: FaTwitter, link: personalInfo.social.twitter, label: 'Twitter' },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                custom={i}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hero-decoration">
          <motion.div
            className="decoration-circle circle-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="decoration-circle circle-2"
            animate={{
              y: [0, 20, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className="decoration-circle circle-3"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <motion.div
            className="scroll-mouse"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="scroll-wheel" />
          </motion.div>
          <span className="scroll-text">Scroll Down</span>
        </Link>
      </motion.div> */}
    </section>
  );
};

export default Hero;
