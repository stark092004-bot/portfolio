import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks, personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = ({ onHover, onLeave }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 50);
    };

    // Check on mount in case page is already scrolled
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled || !isHomePage ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        {isHomePage ? (
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="navbar-logo"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <motion.span className="logo-text" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              GUY
            </motion.span>
          </Link>
        ) : (
          <button
            className="navbar-logo"
            onClick={() => navigate('/')}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <motion.span className="" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </motion.span>
          </button>
        )}

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {isHomePage ? (
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  onSetActive={() => setActiveSection(link.to)}
                  className={`nav-link ${activeSection === link.to ? 'active' : ''}`}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  {link.name}
                  {activeSection === link.to && (
                    <motion.div
                      className="nav-indicator"
                      layoutId="navIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ) : (
                <button
                  className="nav-link"
                  onClick={() => navigate(`/#${link.to}`)}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {link.name}
                </button>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="nav-actions">
          <ThemeToggle
            theme={theme}
            toggleTheme={toggleTheme}
            onHover={onHover}
            onLeave={onLeave}
          />
          {/* <LightingButton
            href={resumeFile}
            download="Guy_Stark_Frontend_Developer.pptx"
            className="nav-btn"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            Resume
            <FaDownload />
          </LightingButton> */}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {isHomePage ? (
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={closeMobileMenu}
                      className="mobile-nav-link"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      className="mobile-nav-link"
                      onClick={() => { closeMobileMenu(); navigate(`/#${link.to}`); }}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                    >
                      {link.name}
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
