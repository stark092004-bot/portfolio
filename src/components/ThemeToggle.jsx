import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme, onHover, onLeave }) => {
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="toggle-icon"
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? <FaMoon size={18} /> : <FaSun size={18} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
