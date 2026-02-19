import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTh } from 'react-icons/fa';import { projects } from '../data/portfolioData';
import './Projects.css';

const FEATURED_COUNT = 3;

const Projects = ({ onHover, onLeave }) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'enterprise', name: 'Enterprise' },
    { id: 'fintech', name: 'FinTech' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'ecommerce', name: 'E-Commerce' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const featuredProjects = filteredProjects.slice(0, FEATURED_COUNT);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of projects I've worked on, demonstrating my expertise in frontend development
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              {filter.name}
              {activeFilter === filter.id && (
                <motion.div
                  className="filter-indicator"
                  layoutId="filterIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid — Featured Only */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="popLayout">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${project.id}`}
                className="project-card glass-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -12 }}
                onClick={() => navigate(`/projects/${project.id}`)}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <span className="overlay-text">View Details</span>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-client">{project.client}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {filteredProjects.length > FEATURED_COUNT && (
          <motion.div
            className="projects-view-all"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button
              className="view-all-btn"
              onClick={() => navigate('/projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <FaTh />
              View All Projects
              <span className="view-all-count">{filteredProjects.length}</span>
              <FaArrowRight />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
