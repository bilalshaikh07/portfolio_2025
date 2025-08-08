import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaStar } from 'react-icons/fa';
import { IconType } from 'react-icons';
import './Education.css';

const Education: React.FC = () => {
  const educationData: Array<{ degree: string; institution: string; period: string; score: string; icon: IconType }> = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Prof. Ram Meghe Institute of Technology and Research, Amravati",
      period: "2023 – 2025",
      score: "CGPA: 9.19/10",
      icon: FaGraduationCap
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "SBES's Institute of Technology and Management, Nanded",
      period: "2020 – 2023",
      score: "CGPA: 9.56/10",
      icon: FaUniversity
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Manik Prabhu Vidyalay, Ambulga, Nanded",
      period: "2018 – 2019",
      score: "Percentage: 76.77%",
      icon: FaGraduationCap
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Manik Prabhu Vidyalay, Ambulga, Nanded",
      period: "2016 – 2017",
      score: "Percentage: 85.60%",
      icon: FaUniversity
    }
  ];

  return (
    <section id="education" className="section education-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Education
      </motion.div>

      <div className="education-container">
        <div className="education-timeline">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="education-card">
                                 <div className="education-icon">
                   {React.createElement(education.icon as React.ComponentType<any>)}
                 </div>
                <div className="education-content">
                  <h3 className="education-degree">{education.degree}</h3>
                  <p className="education-institution">{education.institution}</p>
                  <div className="education-details">
                                         <span className="education-period">
                       {React.createElement(FaCalendarAlt as React.ComponentType<any>)} {education.period}
                     </span>
                     <span className="education-score">
                       {React.createElement(FaStar as React.ComponentType<any>)} {education.score}
                     </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
