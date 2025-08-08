import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import './Contact.css';

const Contact: React.FC = () => {
  const contactInfo: Array<{
    icon: IconType;
    title: string;
    value: string;
    link: string;
  }> = [
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 9730789125",
      link: "tel:+919730789125"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "bilalshaikh028 @gmail.com",
      link: "bilalshaikh028@gmail.com"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/bilal-shaikh-661224228/"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "GitHub Profile",
      link: "https://github.com/bilalshaikh07"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Maharashtra, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-card">
            <h3 className="contact-subtitle">Let's Connect!</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="contact-info-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              className="contact-info-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
                             <div className="contact-icon">
                 {React.createElement(contact.icon as React.ComponentType<any>)}
               </div>
              <div className="contact-details">
                <h4 className="contact-title">{contact.title}</h4>
                <p className="contact-value">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="contact-footer-text">
            Thank you for visiting my portfolio! Feel free to reach out for collaborations, 
            opportunities, or just to say hello.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
