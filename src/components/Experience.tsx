import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import './Experience.css';

const Experience: React.FC = () => {
  const experienceData: Array<{
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    technologies: string[];
    certificate?: string;
    icon: IconType;
  }> = [
    {
      title: "SOFTWARE TRAINEE INTERN",
      company: "LITSBROS PVT. LTD.",
      location: "Amravati, Maharashtra",
      period: "Jan 2025 – Jun 2025",
      description: [
        "Designed, developed, and tested web-based applications using Microsoft technologies.",
        "Worked on a real-time project utilizing .NET Framework, ASP.NET Core MVC, and Microsoft SQL Server.",
        "Collaborated with senior developers to create scalable, secure, and efficient applications.",
        "Gained practical experience in MVC architecture, database integration, and backend development."
      ],
      technologies: [".NET Framework", "ASP.NET Core MVC", "Microsoft SQL Server", "MVC Architecture"],
      certificate: "https://drive.google.com/file/d/1-aSmEAfvGfl-9WNsMVCz-hRfHEGyp0Eu/view?usp=sharing",
      icon: FaBriefcase
    },
    {
      title: "AWS CLOUD VIRTUAL INTERNSHIP",
      company: "Amazon Web Services",
      location: "Remote",
      period: "Jul 2024 – Sep 2024",
      description: [
        "Hands-on experience with AWS EC2, S3, and Lambda.",
        "Learned cloud architecture, secure deployments, and monitoring on AWS."
      ],
      technologies: ["AWS EC2", "AWS S3", "AWS Lambda", "Cloud Architecture"],
      certificate: "https://drive.google.com/file/d/1c1sjv2IHwYmIdIFTFnz2AbEKEWPnKJ15/view",
      icon: FaBriefcase
    },
    {
      title: "DATA ENGINEERING VIRTUAL INTERNSHIP",
      company: "Amazon Web Services",
      location: "Remote",
      period: "Oct 2024 – Dec 2024",
      description: [
        "Developed data pipelines using S3, Glue, Redshift, and Lambda.",
        "Gained experience in ETL processing, data wrangling, and cloud-based architecture."
      ],
      technologies: ["AWS S3", "AWS Glue", "AWS Redshift", "ETL Processing"],
      certificate: "https://drive.google.com/file/d/173boQhjQgp7jDQAlJAloeUOX9FDwhVwZ/view?usp=sharing",
      icon: FaBriefcase
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.div>

      <div className="experience-container">
        <div className="experience-timeline">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experience-card">
                <div className="experience-header">
                                     <div className="experience-icon">
                     {React.createElement(experience.icon as React.ComponentType<any>)}
                   </div>
                  <div className="experience-title-section">
                    <h3 className="experience-title">{experience.title}</h3>
                    <p className="experience-company">{experience.company}</p>
                  </div>
                </div>

                <div className="experience-details">
                  <div className="experience-meta">
                                         <span className="experience-location">
                       {React.createElement(FaMapMarkerAlt as React.ComponentType<any>)} {experience.location}
                     </span>
                     <span className="experience-period">
                       {React.createElement(FaCalendarAlt as React.ComponentType<any>)} {experience.period}
                     </span>
                  </div>

                  <div className="experience-description">
                    <ul>
                      {experience.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {experience.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {experience.certificate && (
                    <div className="experience-certificate">
                                             <a href={experience.certificate} className="certificate-link" target="_blank" rel="noopener noreferrer">
                         {React.createElement(FaExternalLinkAlt as React.ComponentType<any>)} View Certificate
                       </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
