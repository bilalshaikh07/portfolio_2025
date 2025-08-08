import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Link } from 'react-scroll';
import './Hero.css';
import bilalImage from '../asset/images/bilalshaikh.jpeg';

const Hero: React.FC = () => {
  const contactInfo: Array<{ icon: IconType; text: string; link: string }> = [
    { icon: FaPhone, text: '+91 9730789125', link: 'tel:+919730789125' },
    { icon: FaEnvelope, text: 'bilalshaikh028@gmail.com', link: 'mailto:bilalshaikh028@gmail.com' },
    { icon: FaLinkedin, text: 'LinkedIn', link: 'https://www.linkedin.com/in/bilal-shaikh-661224228/' },
    { icon: FaGithub, text: 'GitHub', link: 'https://github.com/bilalshaikh07' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            BILAL SHAIKH
          </motion.h1>
          
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Software Developer
          </motion.h2>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate about creating innovative solutions and building scalable applications
          </motion.p>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                className="contact-item"
                target={contact.link.startsWith('http') ? "_blank" : undefined}
                rel={contact.link.startsWith('http') ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
                                 {React.createElement(contact.icon as React.ComponentType<any>, { className: "contact-icon" })}
                <span>{contact.text}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link to="projects" smooth={true} duration={500}>
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </Link>
            
            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="profile-image-container"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 2,
              transition: { duration: 0.3 }
            }}
          >
            <div className="profile-image-wrapper">
                             <img 
                 src={bilalImage} 
                 alt="Bilal Phakirsab Shaikh" 
                 className="profile-image"
               />
              <div className="profile-image-border"></div>
            </div>
          </motion.div>
          
          <div className="floating-elements">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="floating-element"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
