import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/portfolioData';
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
                'GenAI Engineer',
                3000,
                'LLM Integrations',
                3000,
                'API Developer',
                3000,
                'UI Designer',
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
            <span className="highlight">{personalInfo.experience} years</span> of experience as a{' '}
            <span className="highlight">Full Stack & AI</span> engineer — shipping{' '}
            <span className="highlight">React</span>, <span className="highlight">TypeScript</span>, and{' '}
            <span className="highlight">Node</span>-backed products with LLM features, retrieval-augmented generation, and secure enterprise integrations.
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            Backend stack:{' '}
            {personalInfo.heroBackendStack.map((tech, i) => (
              <span key={tech}>
                {i > 0 && ' · '}
                <span className="highlight">{tech}</span>
              </span>
            ))}
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            AI stack:{' '}
            {personalInfo.heroAiStack.map((tech, i) => (
              <span key={tech}>
                {i > 0 && ' · '}
                <span className="highlight">{tech}</span>
              </span>
            ))}
          </motion.p>
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
