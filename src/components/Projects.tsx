import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa';
import { IconType } from 'react-icons';
import './Projects.css';

const Projects: React.FC = () => {
  const projectsData: Array<{
    title: string;
    description: string;
    technologies: string[];
    date: string;
    demo: string;
    github: string;
    icon: IconType;
  }> = [
    {
      title: "Food Delivery Website",
      description: "Developed a food ordering platform with menu browsing, ordering, and real-time delivery tracking. Implemented Google OAuth and deployed using Render.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB Atlas", "Redux", "OAuth", "Render"],
      date: "May 2024",
      demo: "https://myfoodchoicefrant-1.onrender.com/",
      github: "https://github.com/bilalshaikh07/myfoodchoiceFrant",
      icon: FaCode
    },
    {
      title: "Online Learning Platform",
      description: "Collaborated with senior developers to create scalable, secure, and efficient applications. Gained practical experience in MVC architecture, database integration, and backend development.",
      technologies: [".NET Framework", "ASP.NET Core MVC", "Microsoft SQL Server"],
      date: "June 2025",
      demo: "https://drive.google.com/file/d/1qogB6Hz7suYEPEgpT7eDht2wxRliIR1p/view?usp=sharing",
      github: "https://github.com/bilalshaikh07/Online-learning-Platform-.NET-Project-",
      icon: FaCode
    },
    {
      title: "Transaction Book",
      description: "Built a secure platform for managing transaction data for cinemas, malls, and shops. Integrated user authentication and admin-level access.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB Atlas", "Redux"],
      date: "Feb 2023",
      demo: "https://drive.google.com/file/d/1jUXXUxGDaWJ19OjQlElYhEFWfv_qmcRZ/view",
      github: "#",
      icon: FaCode
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.div>

      <div className="projects-container">
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                                 <div className="project-icon">
                   {React.createElement(project.icon as React.ComponentType<any>)}
                 </div>
                <div className="project-title-section">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                                 <a href={project.demo} className="project-link demo-link">
                   {React.createElement(FaExternalLinkAlt as React.ComponentType<any>)} Live Demo
                 </a>
                 <a href={project.github} className="project-link github-link">
                   {React.createElement(FaGithub as React.ComponentType<any>)} View Code
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
