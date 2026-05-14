import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaTelegramPlane, FaHeart, FaArrowUp } from 'react-icons/fa';
import { personalInfo, navLinks } from '../data/portfolioData';
import './Footer.css';

const Footer = ({ onHover, onLeave }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: personalInfo.social.twitter, label: 'Twitter' },
    { icon: FaTelegramPlane, href: personalInfo.social.telegram, label: 'Telegram' },
  ];

  return (
    <footer className="footer">
      {/* Gradient Line */}
      <div className="footer-gradient-line" />
      
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="footer-logo"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </Link>
            <p className="footer-tagline">
              {personalInfo.role}
            </p>
            <p className="footer-description">
              Building full stack, cloud, and AI-powered products with modern web technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="footer-link"
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="footer-title">Get In Touch</h4>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="footer-email"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.social.telegram}
              className="footer-location"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              {personalInfo.telegram}
            </a>
            
            {/* Social Links */}
            <div className="footer-social">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} {personalInfo.name}. Built with{' '}
            <span className="heart"><FaHeart /></span> using React & Framer Motion
          </p>
          
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
