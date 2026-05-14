import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact, FaFigma, FaCloud, FaJs, FaCode, FaPalette, FaTable, FaChartBar, FaServer, FaBrain,
} from 'react-icons/fa';
import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiOpenai,
  SiLangchain,
  SiAnthropic,
  SiHuggingface,
  SiMilvus,
} from 'react-icons/si';
import { skills } from '../data/portfolioData';
import './Skills.css';

// Animated Counter Component for percentages
const AnimatedPercentage = ({ value, delay = 0, duration = 0.8 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const targetValue = parseInt(value);
    let animationFrameId;
    
    const timeoutId = setTimeout(() => {
      let startTime = null;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);

        if (progress < 1) {
          setDisplayValue(Math.floor(targetValue * progress));
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setDisplayValue(targetValue);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, value, delay, duration]);

  return <span ref={ref}>{displayValue}%</span>;
};

// Icon map with colors
const iconMap = {
  FaReact: { icon: FaReact, color: '#61DAFB' },
  SiRedux: { icon: FaCode, color: '#764ABC' },
  SiNextdotjs: { icon: FaReact, color: '#ffffff' },
  SiJavascript: { icon: FaJs, color: '#F7DF1E' },
  SiTypescript: { icon: FaCode, color: '#3178C6' },
  SiAzuredevops: { icon: FaCloud, color: '#0078D7' },
  FaFigma: { icon: FaFigma, color: '#F24E1E' },
  SiTailwindcss: { icon: FaPalette, color: '#06B6D4' },
  SiAg: { icon: FaTable, color: '#FF6900' },
  SiApacheecharts: { icon: FaChartBar, color: '#AA344D' },
  SiJest: { icon: FaCode, color: '#C21325' },
  SiNodedotjs: { icon: SiNodedotjs, color: '#339933' },
  SiExpress: { icon: SiExpress, color: '#888888' },
  SiNestjs: { icon: SiNestjs, color: '#E0234E' },
  SiGraphql: { icon: SiGraphql, color: '#E10098' },
  SiPostgresql: { icon: SiPostgresql, color: '#4169E1' },
  SiRedis: { icon: SiRedis, color: '#DC382D' },
  FaServer: { icon: FaServer, color: '#6B7280' },
  SiOpenai: { icon: SiOpenai, color: '#10A37F' },
  SiLangchain: { icon: SiLangchain, color: '#36C49B' },
  SiAnthropic: { icon: SiAnthropic, color: '#D4A574' },
  SiHuggingface: { icon: SiHuggingface, color: '#FFD21E' },
  SiMilvus: { icon: SiMilvus, color: '#00A1EA' },
  FaBrain: { icon: FaBrain, color: '#A855F7' },
};



const Skills = ({ onHover, onLeave }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frameworks', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'ai', name: 'AI & GenAI' },
    { id: 'programming', name: 'Languages' },
    { id: 'cicd', name: 'CI/CD' },
    { id: 'uiDesigning', name: 'UI Design' },
  ];

  const getAllSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...skills.frameworks,
        ...skills.backend,
        ...skills.ai,
        ...skills.programming,
        ...skills.cicd,
        ...skills.uiDesigning,
      ];
    }
    return skills[activeCategory] || [];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Frontend, backend, cloud, and modern GenAI — LLMs, RAG, agents, and the tools that ship them safely.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`tab-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.div
                  className="tab-indicator"
                  layoutId="tabIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          key={activeCategory}
        >
          {getAllSkills().map((skill, index) => {
            const iconData = iconMap[skill.icon];
            const IconComponent = iconData?.icon;
            const iconColor = iconData?.color || 'var(--accent-primary)';
            return (
              <motion.div
                key={`${skill.name}-${index}`}
                className="skill-card glass-card skill-card--compact"
                variants={skillVariants}
                whileHover={{ 
                  y: -4, 
                  scale: 1.02,
                  rotateY: 4,
                  rotateX: -3
                }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="skill-icon" style={{ color: iconColor }}>
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-progress">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
                <span className="skill-level">
                  <AnimatedPercentage value={skill.level} delay={0.5 + index * 0.1} duration={0.8} />
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
