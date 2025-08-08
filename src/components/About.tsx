import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import { IconType } from 'react-icons';
import './About.css';

const About: React.FC = () => {
  const objectives: Array<{ icon: IconType; title: string; description: string }> = [
    {
      icon: FaBullseye,
      title: "Goal-Oriented",
      description: "Seeking positions in professional environments where I can effectively utilize my knowledge and skills."
    },
    {
      icon: FaLightbulb,
      title: "Continuous Growth",
      description: "Eager to contribute to organization's objectives while developing personally and professionally."
    },
    {
      icon: FaUsers,
      title: "Team Collaboration",
      description: "Strong believer in collaborative work environments and team-based problem solving."
    },
    {
      icon: FaRocket,
      title: "Innovation Driven",
      description: "Passionate about creating innovative solutions and staying updated with latest technologies."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.div>

      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card about-card">
            <h3 className="about-subtitle">Career Objective</h3>
            <p className="about-text">
              Seeking a position in a professional, goal-oriented environment where I can effectively 
              utilize and apply my knowledge and skills. Eager to contribute to the organization's 
              objectives while continually growing and developing personally and professionally.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="objectives-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className="objective-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
                             <div className="objective-icon">
                 {React.createElement(objective.icon as React.ComponentType<any>)}
               </div>
              <h4 className="objective-title">{objective.title}</h4>
              <p className="objective-description">{objective.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
