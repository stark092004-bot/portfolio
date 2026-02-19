import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaDownload, FaExternalLinkAlt, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
import { certifications } from '../data/portfolioData';
import Navbar from '../components/Navbar';
import './AllCertificationsPage.css';

const AllCertificationsPage = ({ onHover, onLeave }) => {
  const navigate = useNavigate();

  const handleDownload = (e, cert) => {
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
    <div className="acp-page">
      <Navbar onHover={onHover} onLeave={onLeave} />

      <motion.div
        className="acp-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="acp-header">
          <button
            className="acp-back-btn"
            onClick={() => navigate(-1)}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <FaArrowLeft /> Back
          </button>
          <div className="acp-title-group">
            <h1 className="acp-title">All Certifications</h1>
            <p className="acp-subtitle">{certifications.length} Microsoft certifications</p>
          </div>
        </div>

        {/* Grid */}
        <div className="acp-grid">
          
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.code}
              className="acp-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => navigate(`/certifications/${cert.code}`)}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ cursor: 'pointer' }}
            >
              <div className="acp-card-badge">
                {cert.badge
                  ? <img src={cert.badge} alt={cert.name} />
                  : <span className="acp-cert-seal">📜</span>
                }
              </div>
              <div className="acp-card-body">
                <div className="acp-card-meta">
                  <span className="acp-code">{cert.code}</span>
                  <span className="acp-date"><FaCalendarAlt /> {cert.date}</span>
                </div>
                <h3 className="acp-card-name">{cert.name}</h3>
                <p className="acp-card-issuer">🏢 {cert.issuer}</p>
                <p className="acp-card-desc">{cert.description}</p>
                <div className="acp-skills">
                  {cert.skills?.map((s, i) => (
                    <span key={i} className="acp-skill-tag">
                      <FaCheckCircle className="acp-skill-icon" /> {s}
                    </span>
                  ))}
                </div>
                <div className="acp-card-actions">
                  <button
                    className="acp-view-btn"
                    onClick={(e) => { e.stopPropagation(); navigate(`/certifications/${cert.code}`); }}
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                  >
                    <FaExternalLinkAlt size={12} /> View Details
                  </button>
                  {cert.certificate && (
                    <button
                      className="acp-download-btn"
                      onClick={(e) => handleDownload(e, cert)}
                      onMouseEnter={onHover}
                      onMouseLeave={onLeave}
                    >
                      <FaDownload size={12} /> Download
                    </button>
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

export default AllCertificationsPage;
