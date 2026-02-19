import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import Navbar from '../components/Navbar';
import './ProjectDetailPage.css';

const ProjectDetailPage = ({ onHover, onLeave }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => String(p.id) === id);

  if (!project) {
    return (
      <div className="pdp-page">
        <Navbar onHover={onHover} onLeave={onLeave} />
        <div className="pdp-not-found">
          <h2>Project not found</h2>
          <button className="pdp-back-btn" onClick={() => navigate('/projects')}>
            <FaArrowLeft /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pdp-page">
      <Navbar onHover={onHover} onLeave={onLeave} />

      <motion.div
        className="pdp-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back */}
        <button
          className="pdp-back-btn"
          onClick={() => navigate(-1)}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <FaArrowLeft /> Back
        </button>

        {/* Hero Image */}
        <motion.div
          className="pdp-hero"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <img src={project.image} alt={project.title} className="pdp-hero-img" />
          <div className="pdp-hero-overlay">
            <span className="pdp-category-badge">{project.category}</span>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          className="pdp-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
        >
          <span className="pdp-client">{project.client}</span>
          <h1 className="pdp-title">{project.title}</h1>
        </motion.div>

        {/* Body */}
        <div className="pdp-body">
          {/* Description */}
          <motion.div
            className="pdp-section glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.45 }}
          >
            <h2 className="pdp-section-title">Project Overview</h2>
            <p className="pdp-description">{project.description}</p>
          </motion.div>

          {/* Highlights */}
          {project.highlights?.length > 0 && (
            <motion.div
              className="pdp-section glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.45 }}
            >
              <h2 className="pdp-section-title">Key Highlights</h2>
              <ul className="pdp-highlights">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    className="pdp-highlight-item"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                  >
                    <FaCheckCircle className="pdp-highlight-icon" />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <motion.div
              className="pdp-section glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44, duration: 0.45 }}
            >
              <h2 className="pdp-section-title">Technologies Used</h2>
              <div className="pdp-tech-grid">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="pdp-tech-tag"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.48 + i * 0.05 }}
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailPage;
