import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import AllProjectsPage from './pages/AllProjectsPage';
import AllCertificationsPage from './pages/AllCertificationsPage';
import CertificationDetailPage from './pages/CertificationDetailPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './App.css';

function HomePage({ handleCursorEnter, handleCursorLeave, loading }) {
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ParticleBackground />
          <Navbar onHover={handleCursorEnter} onLeave={handleCursorLeave} />
          <main>
            <Hero onHover={handleCursorEnter} onLeave={handleCursorLeave} />
            <About onHover={handleCursorEnter} onLeave={handleCursorLeave} />
            <Experience onHover={handleCursorEnter} onLeave={handleCursorLeave} />
            <Skills onHover={handleCursorEnter} onLeave={handleCursorLeave} />
            <Projects onHover={handleCursorEnter} onLeave={handleCursorLeave} />
            <Certifications onHover={handleCursorEnter} onLeave={handleCursorLeave} />
            <Contact onHover={handleCursorEnter} onLeave={handleCursorLeave} />
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCursorEnter = () => setCursorVariant('hover');
  const handleCursorLeave = () => setCursorVariant('default');

  return (
    <ThemeProvider>
      <ScrollToTop />
      <CustomCursor variant={cursorVariant} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              handleCursorEnter={handleCursorEnter}
              handleCursorLeave={handleCursorLeave}
              loading={loading}
            />
          }
        />
        <Route
          path="/projects"
          element={<AllProjectsPage onHover={handleCursorEnter} onLeave={handleCursorLeave} />}
        />
        <Route
          path="/projects/:id"
          element={<ProjectDetailPage onHover={handleCursorEnter} onLeave={handleCursorLeave} />}
        />
        <Route
          path="/certifications"
          element={<AllCertificationsPage onHover={handleCursorEnter} onLeave={handleCursorLeave} />}
        />
        <Route
          path="/certifications/:code"
          element={<CertificationDetailPage onHover={handleCursorEnter} onLeave={handleCursorLeave} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

