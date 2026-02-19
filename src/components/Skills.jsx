import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaBootstrap, FaSass,
  FaCloud, FaJs, FaCode, FaLaptopCode, FaPalette, FaTable, FaChartBar
} from 'react-icons/fa';
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
  FaHtml5: { icon: FaHtml5, color: '#E34F26' },
  FaCss3Alt: { icon: FaCss3Alt, color: '#1572B6' },
  SiMicrosoftazure: { icon: FaCloud, color: '#0089D6' },
  SiAzuredevops: { icon: FaCloud, color: '#0078D7' },
  FaGitAlt: { icon: FaGitAlt, color: '#F05032' },
  FaFigma: { icon: FaFigma, color: '#F24E1E' },
  SiVisualstudiocode: { icon: FaLaptopCode, color: '#007ACC' },
  SiTailwindcss: { icon: FaPalette, color: '#06B6D4' },
  FaBootstrap: { icon: FaBootstrap, color: '#7952B3' },
  SiMui: { icon: FaPalette, color: '#007FFF' },
  FaSass: { icon: FaSass, color: '#CC6699' },
  SiAg: { icon: FaTable, color: '#FF6900' },
  SiApacheecharts: { icon: FaChartBar, color: '#AA344D' },
  SiJest: { icon: FaCode, color: '#C21325' },
  SiPostman: { icon: FaCode, color: '#FF6C37' },
};



const Skills = ({ onHover, onLeave }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frameworks', name: 'Frameworks / Libraries' },
    { id: 'programming', name: 'Programming' },
    { id: 'cicd', name: 'CI/CD' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'uiDesigning', name: 'UI Designing' },
    { id: 'tools', name: 'Tools' }
  ];

  const getAllSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...skills.frameworks,
        ...skills.programming,
        ...skills.cicd,
        ...skills.cloud,
        ...skills.uiDesigning,
        ...skills.tools
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
            Technologies I've been working with to build amazing digital experiences
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
                className="skill-card glass-card"
                variants={skillVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: -5
                }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="skill-icon" style={{ color: iconColor }}>
                  {IconComponent && <IconComponent size={40} />}
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
