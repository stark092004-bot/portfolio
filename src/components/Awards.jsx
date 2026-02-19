import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTrophy, FaMedal, FaDownload, FaStar } from 'react-icons/fa';
import { awards } from '../data/portfolioData';
import './Awards.css';

const rankConfig = {
  1: { icon: FaTrophy, color: '#FFD700', label: 'Gold' },
  2: { icon: FaMedal, color: '#C0C0C0', label: 'Silver' },
  3: { icon: FaMedal, color: '#CD7F32', label: 'Bronze' },
  4: { icon: FaStar, color: 'var(--accent-primary)', label: '4th Place' },
};

const Awards = ({ onHover, onLeave }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="awards" className="awards" ref={ref}>
      <div className="container">
        <motion.div
          className="awards-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Awards & Achievements</h2>
          <p className="section-subtitle">
            Recognition earned through competitive programming, hackathons, and technical challenges.
          </p>
        </motion.div>

        <motion.div
          className="awards-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {awards.map((award) => {
            const config = rankConfig[award.rankNum] || { icon: FaStar, color: 'var(--accent-primary)', label: award.rank };
            const RankIcon = config.icon;

            return (
              <motion.div
                key={award.id}
                className="award-card glass-card"
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                {/* Rank Badge */}
                <div className="award-rank-badge" style={{ '--rank-color': config.color }}>
                  <RankIcon />
                  <span>{award.rank}</span>
                </div>

                {/* Icon */}
                <div className="award-icon-wrap" style={{ '--rank-color': config.color }}>
                  <RankIcon className="award-icon" />
                </div>

                {/* Content */}
                <div className="award-content">
                  <span className="award-year">{award.year}</span>
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-event">{award.event}</p>
                  <p className="award-desc">{award.description}</p>

                  {/* Tags */}
                  <div className="award-tags">
                    {award.tags.map((tag, i) => (
                      <span key={i} className="award-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Download Certificate */}
                  {award.certificate ? (
                    <a
                      href={award.certificate}
                      download
                      className="award-download-btn"
                      onMouseEnter={onHover}
                      onMouseLeave={onLeave}
                    >
                      <FaDownload />
                      Download Certificate
                    </a>
                  ) : (
                    <span className="award-no-cert">Certificate Coming Soon</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
