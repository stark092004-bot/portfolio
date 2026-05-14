import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    id: 1,
    period: 'March 2025 – March 2026',
    title: 'Senior Software Engineer',
    role: 'Full Stack · AI · Team Lead · Cloud',
    company: 'Celebal Technologies Private Limited',
    tasks: [
      'Lead cloud-native delivery with React, Node.js, and Azure/AWS — including LLM features and RAG pipelines.',
      'Own shared React libraries, CI/CD on Azure DevOps, and safe GenAI rollout (evals, guardrails, observability).',
      'Mentor engineers and align delivery with client priorities.',
    ],
    coreTech: ['React', 'Node.js', 'NestJS', 'Azure OpenAI', 'LangChain', 'RAG', 'Azure', 'AWS'],
    side: 'right',
  },
  {
    id: 2,
    period: 'March 2024 – February 2025',
    title: 'Software Engineer',
    role: 'Full Stack Developer',
    company: 'Celebal Technologies Private Limited',
    tasks: [
      'Ship enterprise React apps and Node APIs; prototype AI-assisted UX and OpenAI/Azure OpenAI integrations.',
      'Automate releases with Azure DevOps; support pre-sales and modernization work.',
    ],
    coreTech: ['React', 'Node.js', 'OpenAI API', 'Azure DevOps', 'REST', 'Azure'],
    side: 'left',
  },
  {
    id: 3,
    period: 'March 2023 – February 2024',
    title: 'Software Engineer Associate',
    role: 'Frontend · Full Stack',
    company: 'Celebal Technologies Private Limited',
    tasks: [
      'Build dashboards and portals in React with reusable components.',
      'Improve CI/CD reliability and contribute to microservices rollouts.',
    ],
    coreTech: ['React', 'TypeScript', 'Azure DevOps', 'REST APIs'],
    side: 'right',
  },
  {
    id: 4,
    period: 'March 2022 – February 2023',
    title: 'Developer Trainee',
    role: 'Frontend · Automation',
    company: 'Celebal Technologies Private Limited',
    tasks: [
      'Deliver React modules with RBAC; deploy services to AKS with pipelines.',
      'Support test automation (UiPath, Tosca) and cloud fundamentals.',
    ],
    coreTech: ['React', 'Azure', 'AKS', 'UiPath', 'Git'],
    side: 'left',
  },
  {
    id: 5,
    period: 'March 2021 – February 2022',
    title: 'Software Engineer Intern',
    role: 'Trainee Developer',
    company: 'Celebal Technologies Private Limited',
    tasks: [
      'Learn delivery practices; fix UI bugs and small features in React apps.',
      'Assist with RPA demos, docs, and basic Azure/Git workflows.',
    ],
    coreTech: ['React', 'JavaScript', 'Git', 'Azure basics'],
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
