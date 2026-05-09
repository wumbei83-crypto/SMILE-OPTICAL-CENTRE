import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import styles from './PartnersSection.module.css';

const logos = [
  { id: 1, name: 'ACE Medical Insurance', src: '/logos/ace.png' },
  { id: 2, name: 'APEX Health Insurance', src: '/logos/apex.png' },
  { id: 3, name: 'Cosmopolitan Health Insurance', src: '/logos/cosmopolitan.png' },
  { id: 4, name: 'Equity Health Insurance', src: '/logos/equity.png' },
  { id: 5, name: 'GHIC', src: '/logos/ghic.png' },
  { id: 6, name: 'GLICO Healthcare', src: '/logos/glico.png' },
  { id: 7, name: 'Nationwide Medical Insurance', src: '/logos/nationwide.png' },
  { id: 8, name: 'OctaPlus Health', src: '/logos/octaplus.png' },
  { id: 9, name: 'Premier Health Insurance', src: '/logos/premier.png' },
];

const MarqueeRow = ({ items, direction = 1, isHovered }) => {
  const baseX = useMotionValue(0);
  const trackRef = useRef(null);
  const [wrapWidth, setWrapWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      // The track contains 4 sets of items. We want the width of ONE set.
      // We can just get the first child's width * number of items
      const firstChild = trackRef.current.children[0];
      if (firstChild) {
        const itemWidth = firstChild.getBoundingClientRect().width;
        // Adding gap to itemWidth isn't necessary if the item width already includes it via margin, 
        // but with flex gap, we need to add the gap.
        // Let's just assume itemWidth + gap = 200 + 64 = 264.
        setWrapWidth((200 + 64) * items.length);
      }
    }
  }, [items]);

  const normalSpeed = 0.3;
  const slowSpeed = 0.02;

  useAnimationFrame((t, delta) => {
    // Default to a fallback wrapWidth if not yet calculated
    const w = wrapWidth || (264 * items.length);
    
    const speed = isHovered ? slowSpeed : normalSpeed;
    const moveBy = direction * speed * (delta / 16);

    let newX = baseX.get() + moveBy;

    if (direction === -1 && newX <= -w) {
      newX += w;
    } else if (direction === 1 && newX >= 0) {
      newX -= w;
    }

    baseX.set(newX);
  });

  return (
    <div className={styles.marqueeTrack}>
      <motion.div className={styles.marqueeInner} style={{ x: baseX }} ref={trackRef}>
        {[...items, ...items, ...items, ...items].map((logo, idx) => (
          <div key={`${logo.id}-${idx}`} className={styles.logoWrapper}>
            <div className={styles.logoContainer}>
              <img src={logo.src} alt={logo.name} className={styles.logo} />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const PartnersSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={styles.section} id="partners">
      <div className={styles.container}>
        <h2 className={styles.title}>
          PARTNER INSURANCE PROVIDERS
        </h2>
        <p className={styles.subtext}>
          We proudly accept valid health insurance cards from our esteemed partners. Enjoy priority eye care, comprehensive vision screening, and premium optical services at Smile Optical Centre in Tamale with your provider.
        </p>
        <div 
          className={styles.marqueeArea}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top Row: Right to Left */}
          <MarqueeRow items={logos} direction={-1} isHovered={isHovered} />
          
          {/* Bottom Row: Left to Right */}
          <MarqueeRow items={[...logos].reverse()} direction={1} isHovered={isHovered} />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
