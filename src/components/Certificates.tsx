import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import './Certificates.css';

const Certificates: React.FC = () => {
  const certificatesData: Array<{
    title: string;
    description: string;
    date: string;
    type: string;
    link: string;
    icon: IconType;
  }> = [
    {
      title: "Smart India Hackathon 2024",
      description: "National-level recognition for innovative problem-solving.",
      date: "Aug 2024",
      type: "Achievement",
      link: "https://drive.google.com/file/d/1sPOVROddPhgNTYSv9DmHmKEaFGmEioiC/view",
      icon: FaTrophy
    },
    {
      title: "Advanced C++ Training",
      description: "Certificate for the Completion of Advanced Cpp Training",
      date: "May 2025",
      type: "Training",
      link: "https://drive.google.com/file/d/15SthSJDND3CLWxIrlCOFHKdeplWyA1GU/view",
      icon: FaCertificate
    },
    {
      title: "RDBMS PostgreSQL Training",
      description: "Certificate for the Completion of RDBMS PostgreSQL Training",
      date: "May 2025",
      type: "Training",
      link: "https://drive.google.com/file/d/15SthSJDND3CLWxIrlCOFHKdeplWyA1GU/view?usp=drive_link",
      icon: FaCertificate
    }
  ];

  return (
    <section id="certificates" className="section certificates-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Certificates & Achievements
      </motion.div>

      <div className="certificates-container">
        <div className="certificates-grid">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="certificate-header">
                                 <div className="certificate-icon">
                   {React.createElement(certificate.icon as React.ComponentType<any>)}
                 </div>
                <div className="certificate-title-section">
                  <h3 className="certificate-title">{certificate.title}</h3>
                  <span className="certificate-type">{certificate.type}</span>
                </div>
              </div>

              <p className="certificate-description">{certificate.description}</p>
              
              <div className="certificate-meta">
                <span className="certificate-date">{certificate.date}</span>
                                 <a href={certificate.link} className="certificate-link">
                   {React.createElement(FaExternalLinkAlt as React.ComponentType<any>)} View Certificate
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
