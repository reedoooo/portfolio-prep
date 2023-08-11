import React from 'react';
import styles from './Rain.css';

function RainAnimation() {
  return (
    <div className={styles.container}>
      {[...Array(9)].map((_, index) => (
        <div key={index} className={styles.rain}>
          <div className={styles.drop}></div>
          <div className={styles.waves}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.splash}></div>
          <div className={styles.particles}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RainAnimation;
