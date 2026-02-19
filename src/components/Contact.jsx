import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, 
  FaTwitter, FaPaperPlane, FaCheck 
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import LightingButton from './LightingButton';
import './Contact.css';

const Contact = ({ onHover, onLeave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalInfo.location,
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaGithub, link: personalInfo.social.github, label: 'GitHub' },
    { icon: FaLinkedin, link: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, link: personalInfo.social.twitter, label: 'Twitter' },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="info-title">Let's talk about everything!</h3>
            <p className="info-description">
              Feel free to reach out for collaborations, opportunities, or just a friendly hello!
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="contact-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  <div className="card-icon">
                    <info.icon />
                  </div>
                  <div className="card-content">
                    <span className="card-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="card-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="card-value">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>

            <LightingButton
              type="submit"
              className={`submit-btn ${isSubmitted ? 'submitted' : ''}`}
              disabled={isSubmitting || isSubmitted}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ width: '100%', marginTop: '1rem' }}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <FaCheck />
                  Message Sent!
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </LightingButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
