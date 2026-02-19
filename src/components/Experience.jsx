import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    id: 1,
    period: 'August 2024 – Present',
    title: 'Senior Software Engineer',
    role: 'Full Stack Developer/Team Lead/Cloud Architect',
    company: 'Celebal Technologies Private Limited',
    tasks: [
      'Leading a team of 30+ engineers, driving architecture decisions and end-to-end delivery of enterprise-scale cloud-native applications.',
      'Designed and implemented scalable full-stack solutions using React, Node.js, and microservices architecture on Azure & AWS.',
      'Established a centralized reusable React component library to standardize UI/UX and accelerate development across teams.',
      'Setting up CI/CD pipelines and Azure cloud deployments'
    ],
    coreTech: ['React', 'Node.js', 'Express', 'NestJS', 'Azure DevOps', 'Microservices', 'Cloud-Native', 'GenAI Solutions'],
    side: 'right',
  },
  {
    id: 2,
    period: 'August 2022 – July 2024',
    title: 'Software Engineer Associate',
    role: 'Frontend Engineer',
    company: 'Celebal Technologies Private Limited',
    tasks: [
      'Delivered scalable enterprise web applications and dashboards using React, optimizing component reusability and reducing development time by 30%.',
      'Led frontend and full-stack initiatives, contributing to 2400+ billable hours and supporting multiple high-impact client projects.',
      'Designed and automated CI/CD pipelines using Azure DevOps, improving deployment speed and minimizing production errors.',
      'Actively contributed to pre-sales, solution architecture, and modernization of legacy systems into cloud-native and microservices-based architectures.'
    ],
    coreTech: ['React', 'Node.js', 'Azure DevOps', 'Azure App Service', 'Azure Blob Storage', 'AWS', 'REST APIs'],
    side: 'left',
  },
  {
    id: 3,
    period: 'February 2021 – July 2022',
    title: 'Software Engineer Intern/Trainee',
    role: 'Automation Engineer/Frontend Developer',
    company: 'Celebal Technologies Private Limited',
    tasks: [
      'Developed responsive dashboards (CRM & IoT) with role-based access control (RBAC) using React',
      'Deployed containerized applications on Azure Kubernetes Service (AKS) with CI/CD pipelines (Azure DevOps, Github, BitBucket, GitLabs & GCP).',
      'Migrated monolithic applications to microservices architecture for improved scalability.',
      'Implemented automation & monitoring solutions using UiPath, Power Automate, Tricentis Tosca, qTest, and Dynatrace.'
    ],
    coreTech: ['Azure', 'GCP', 'AWS', 'React', 'UiPath','Power Automate', 'Tricentis Tosca', 'Git'],
    side: 'right',
  },
];

const Experience = ({ onHover, onLeave }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  const cardVariants = {
    hidden: (side) => ({
      opacity: 0,
      x: side === 'left' ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: 'backOut' },
    },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            A journey through my career — building, breaking, and learning with passion.
          </p>
        </motion.div>

        <div className="timeline">
          {/* Animated Line */}
          <motion.div
            className="timeline-line"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${exp.side}`}
              custom={exp.side}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.3 + index * 0.2 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="timeline-dot"
                variants={dotVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                {index % 2 === 0 ? <FaBriefcase size={14} /> : <FaCode size={14} />}
              </motion.div>

              {/* Card */}
              <motion.div
                className="timeline-card glass-card"
                whileHover={{ y: -5, scale: 1.02 }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <span className="exp-period">{exp.period}</span>
                
                <div className="exp-header">
                  <h3 className="exp-title">{exp.title}</h3>
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-company">{exp.company}</span>
                </div>

                <div className="exp-tasks">
                  <h4 className="exp-section-title">Key Responsibilities:</h4>
                  <ul className="task-list">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx} className="task-item">
                        <span className="task-bullet">▹</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="exp-tech">
                  <h4 className="exp-section-title">Core Technologies:</h4>
                  <div className="tech-tags">
                    {exp.coreTech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
