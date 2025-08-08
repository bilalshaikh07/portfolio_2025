import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers } from 'react-icons/fa';
import './Skills.css';

const Skills: React.FC = () => {
  const technicalSkills = [
    ".NET MVC CORE", "SQL", "JAVA PROGRAMMING", "GIT", "REACT JS", "DSA"
  ];

  const softSkills = [
    "COMMUNICATION", "PROBLEM SOLVING", "TEAM COLLABORATION", "ADAPTABILITY", "TIME MANAGEMENT"
  ];

  return (
    <section id="skills" className="section skills-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.div>

      <div className="skills-container">
        <div className="skills-grid">
          <motion.div
            className="skills-category"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="skills-card">
              <div className="skills-header">
                                 <div className="skills-icon">
                   {React.createElement(FaCode as React.ComponentType<any>)}
                 </div>
                <h3 className="skills-title">Technical Skills</h3>
              </div>
              <div className="skills-list">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="skills-category"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="skills-card">
              <div className="skills-header">
                                 <div className="skills-icon">
                   {React.createElement(FaUsers as React.ComponentType<any>)}
                 </div>
                <h3 className="skills-title">Soft Skills</h3>
              </div>
              <div className="skills-list">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
