import React from 'react';
// import logo from '../../assets/images/logo.svg';
// import './LoaderLogo.scss';

const LogoLoader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="0">
          <animate
            attributeName="r"
            from="0"
            to="50"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <p>Loading...</p>
    </div>
  );
};

export default LogoLoader;
