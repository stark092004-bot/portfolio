import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import Navbar from '../components/Navbar';
import './AllProjectsPage.css';

const filters = [
  { id: 'all', name: 'All Projects' },
  { id: 'enterprise', name: 'Enterprise' },
  { id: 'fintech', name: 'FinTech' },
  { id: 'ai', name: 'AI/ML' },
  { id: 'ecommerce', name: 'E-Commerce' },
];

const AllProjectsPage = ({ onHover, onLeave }) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="all-projects-page">
      <Navbar onHover={onHover} onLeave={onLeave} />

      <motion.div
        className="all-projects-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Page Header */}
        <div className="ap-header">
          <button
            className="ap-back-btn"
            onClick={() => navigate(-1)}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <FaArrowLeft /> Back
          </button>
          <div className="ap-title-group">
            <h1 className="ap-title">All Projects</h1>
            <p className="ap-subtitle">{projects.length} projects delivered across enterprise, fintech, AI & more</p>
          </div>
        </div>

        {/* Filters */}
        <div className="ap-filters">
          {filters.map(f => (
            <button
              key={f.id}
              className={`ap-filter-btn ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              {f.name}
              {activeFilter === f.id && (
                <motion.div className="ap-filter-indicator" layoutId="apFilter" />
              )}
            </button>
          ))}
          <span className="ap-filter-count">{filtered.length} shown</span>
        </div>

        {/* Grid */}
        <div className="ap-grid">
            {filtered.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${project.id}`}
                className="ap-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                onClick={() => navigate(`/projects/${project.id}`)}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                style={{ cursor: 'pointer' }}
              >
                <div className="ap-card-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="ap-card-overlay">
                    <span>View Details</span>
                  </div>
                  <span className="ap-category-badge">{project.category}</span>
                </div>
                <div className="ap-card-body">
                  <span className="ap-client">{project.client}</span>
                  <h3 className="ap-card-title">{project.title}</h3>
                  <p className="ap-card-desc">{project.description.substring(0, 110)}...</p>
                  <div className="ap-tech-tags">
                    {project.technologies.slice(0, 4).map(t => (
                      <span key={t} className="ap-tech-tag">{t}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="ap-tech-tag more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AllProjectsPage;
