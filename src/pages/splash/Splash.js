import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';
import { motion } from 'framer-motion';
import { theme } from '../../assets/theme';
import Particle from '../resume/Particle';

const logoVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [0, 1, 0.8, 1],
    scale: [1, 1.3, 1.1, 1.4, 1.2, 1],
    rotateX: [0, 20, -20, 10, -10, 0],
    rotateY: [0, -20, 20, -10, 10, 0],
    boxShadow: [
      '0px 0px',
      '10px 10px',
      '15px 15px',
      '20px 20px',
      '10px 10px',
      '0px 0px',
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  },
  exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
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
      style={{ backgroundColor: theme.colors.quaternary[100] }}
    >
      <motion.div
        className="logo_container"
        variants={logoVariants}
      ></motion.div>
      {Particle && <Particle />}

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {' '}
        {/* Wrap the text and ellipsis in a flex container */}
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
            marginLeft: '5px', // Add some space between the text and the ellipsis
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
