import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';
import { motion } from 'framer-motion';
import { theme } from '../../assets/theme';
import Particle from '../utils/Particle';
import logo from '../../assets/logo.png'; // Import the logo

const logoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    rotate: [0, 360], // Add rotation animation
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const ellipsisVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 1, 1, 0], // This makes the ellipsis fade in and out
    x: ['0%', '5%', '10%', '15%', '20%'], // Move the ellipsis to the right
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    color: [
      theme.colors.quaternary[400],
      theme.colors.quaternary[500],
      theme.colors.quaternary[600],
      theme.colors.quaternary[700],
      theme.colors.quaternary[800],
      theme.colors.quaternary[900],
    ],
    textShadow: ['0px 0px', '5px 5px', '3px 3px', '0px 0px'],
    transition: {
      duration: 6, // Increased due to more colors
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

function AnimatedSplash() {
  return (
    <motion.div
      className="splash_wrapper"
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        backgroundColor: theme.colors.quaternary[100],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} // center the contents
    >
      <motion.div
        className="logo_container"
        variants={logoVariants}
        style={{ marginRight: '20px' }}
      >
        {' '}
        {/* Add a margin to separate the logo and text */}
        <img src={logo} alt="Logo" width="150px" height="150px" />{' '}
        {/* Adjust the logo size here */}
      </motion.div>

      <motion.div>
        <h1
          style={{
            fontSize: '5rem',
            color: theme.colors.quaternary[900],
            fontWeight: 'bold',
          }}
        >
          ReedVogt.com
        </h1>
      </motion.div>

      {Particle && <Particle />}

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <motion.p
          className="loading_text"
          variants={textVariants}
          style={{
            rotateX: [0, 10, -10, 0],
            transition: {
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 4,
            },
            color: theme.colors.quaternary[500],
          }}
        >
          Loading
        </motion.p>
        <motion.span
          className="loading_ellipsis"
          variants={ellipsisVariants}
          style={{
            fontSize: 'inherit',
            marginLeft: '5px',
          }}
        >
          <motion.span>.</motion.span>
          <motion.span>.</motion.span>
          <motion.span>.</motion.span>
        </motion.span>
      </div>
    </motion.div>
  );
}

function Splash() {
  const [redirected, setRedirected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => setRedirected(true), 10000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (redirected) {
      navigate('/');
    }
  }, [redirected, navigate]);

  return redirected ? null : <AnimatedSplash />;
}

export default Splash;
