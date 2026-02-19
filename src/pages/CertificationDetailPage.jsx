import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowLeft, FaDownload, FaCheckCircle,
  FaCalendarAlt, FaBuilding
} from 'react-icons/fa';
import { certifications } from '../data/portfolioData';
import Navbar from '../components/Navbar';
import LightingButton from '../components/LightingButton';
import './CertificationDetailPage.css';

const gradientColors = [
  'linear-gradient(135deg, #d4a574 0%, #8b6914 100%)',
  'linear-gradient(135deg, #00d4ff 0%, #0891b2 100%)',
  'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
  'linear-gradient(135deg, #ec4899 0%, #9d174d 100%)',
  'linear-gradient(135deg, #10b981 0%, #047857 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
];

const CertificationDetailPage = ({ onHover, onLeave }) => {
  const { code } = useParams();
  const navigate = useNavigate();

  const certIndex = certifications.findIndex(c => c.code === code);
  const cert = certifications[certIndex];

  const handleDownload = () => {
    if (!cert?.certificate) return;
    const link = document.createElement('a');
    link.href = cert.certificate;
    link.download = `${cert.name.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!cert) {
    return (
      <div className="cdp-page">
        <Navbar onHover={onHover} onLeave={onLeave} />
        <div className="cdp-not-found">
          <h2>Certification not found</h2>
          <button className="cdp-back-btn" onClick={() => navigate('/certifications')}>
            <FaArrowLeft /> Back to Certifications
          </button>
        </div>
      </div>
    );
  }

  const gradient = gradientColors[certIndex % gradientColors.length];

  return (
    <div className="cdp-page">
      <Navbar onHover={onHover} onLeave={onLeave} />

      <motion.div
        className="cdp-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button */}
        <button
          className="cdp-back-btn"
          onClick={() => navigate(-1)}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <FaArrowLeft /> Back
        </button>

        {/* Hero Banner */}
        <motion.div
          className="cdp-hero"
          style={{ background: gradient }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className="cdp-hero-inner">
            {cert.badge ? (
              <img src={cert.badge} alt={cert.name} className="cdp-badge" />
            ) : (
              <div className="cdp-badge-fallback">📜</div>
            )}
            <div className="cdp-hero-text">
              <span className="cdp-code-tag">{cert.code}</span>
              <h1 className="cdp-name">{cert.name}</h1>
              <div className="cdp-meta-row">
                <span className="cdp-meta-item">
                  <FaBuilding /> {cert.issuer}
                </span>
                {cert.date && (
                  <span className="cdp-meta-item">
                    <FaCalendarAlt /> {cert.date}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Body */}
        <div className="cdp-body">
          {/* Description */}
          {cert.description && (
            <motion.div
              className="cdp-section glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.45 }}
            >
              <h2 className="cdp-section-title">About this Certification</h2>
              <p className="cdp-description">{cert.description}</p>
            </motion.div>
          )}

          {/* Skills */}
          {cert.skills?.length > 0 && (
            <motion.div
              className="cdp-section glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45 }}
            >
              <h2 className="cdp-section-title">Key Skills Covered</h2>
              <div className="cdp-skills-grid">
                {cert.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="cdp-skill-tag"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                  >
                    <FaCheckCircle className="cdp-skill-icon" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Download */}
          <motion.div
            className="cdp-section cdp-download-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.45 }}
          >
            {cert.certificate ? (
              <LightingButton
                className="cdp-download-btn"
                onClick={handleDownload}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <FaDownload /> Download Certificate
              </LightingButton>
            ) : (
              <p className="cdp-no-cert">Certificate document not available for download</p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificationDetailPage;
