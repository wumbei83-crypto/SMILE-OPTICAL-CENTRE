import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroVisuals from './HeroVisuals';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80px", "end end"]
  });

  return (
    <div ref={containerRef} className={styles.scrollTrack} id="home">
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <HeroContent scrollYProgress={scrollYProgress} />
          <HeroVisuals scrollYProgress={scrollYProgress} />
        </div>
      </section>
    </div>
  );
}
