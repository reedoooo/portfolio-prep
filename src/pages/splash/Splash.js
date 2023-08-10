import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';
import LogoLoader from '../../components/Loader/LoaderLogo';
import { motion } from 'framer-motion';

const logoVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: [1, 1.5, 1],
    rotate: [0, 360],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
  exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    color: ['#ff0000', '#00ff00', '#0000ff'],
    transition: {
      delay: 1,
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

function AnimatedSplash() {
  return (
    <motion.div
      className="logo_wrapper"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div id="logo" variants={logoVariants}>
        <LogoLoader />
      </motion.div>
      <motion.p variants={textVariants}>Loading...</motion.p>
    </motion.div>
  );
}

function Splash() {
  const [redirected, setRedirected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => setRedirected(true), 5500);
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
