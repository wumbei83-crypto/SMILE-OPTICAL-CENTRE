import React from 'react';
import { motion, useTransform } from 'framer-motion';
import styles from './HeroVisuals.module.css';

export default function HeroVisuals({ scrollYProgress }) {
  // Phase 3: Eye image zoom (0.66 to 1.0)
  const eyeScale = useTransform(scrollYProgress, [0.66, 1], [1, 1.4]);

  return (
    <div className={styles.visualsContainer}>
      {/* Main Eye Image */}
      <div className={styles.mainEyeContainer}>
        <motion.img 
          src="/eye.jpg" 
          alt="Close up of a beautiful eye" 
          className={styles.mainEyeImage} 
          style={{ scale: eyeScale, originX: 0.5, originY: 0.5 }}
        />
      </div>

      {/* Two simple cards below the eye */}
      <div className={styles.cardsRow}>
        {/* Left Card — Dark */}
        <div className={`${styles.card} ${styles.cardDark}`}>
          <div className={styles.cardContent}>
            <p>CUTTING-EDGE DIAGNOSTIC EQUIPMENT AND TECHNOLOGY</p>
          </div>
        </div>

        {/* Right Card — Pink */}
        <div className={`${styles.card} ${styles.cardPink}`}>
          <div className={styles.cardContent}>
            <p>CARING AND PAIN-FREE TREATMENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
