import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './Marquee.module.css';

export default function Marquee() {
  const repeatedContent = new Array(4).fill(null).map((_, i) => (
    <div key={i} className={styles.marqueeItem}>
      <span>WE'RE AN EYE CARE & OPTICAL AID CENTRE IN TAMALE WITH STATE OF THE ART EQUIPMENT & TECHNOLOGY, A CARING TOUCH AND A RE-ASSURING BELIEF IN QUALITY SIGHT.</span>
      <div className={styles.circleArrow}>
        <ArrowUpRight size={32} />
      </div>
    </div>
  ));

  return (
    <div className={styles.marqueeSection}>
      <div className="marquee-container">
        <div className="marquee-content">
          {repeatedContent}
          {repeatedContent}
        </div>
      </div>
    </div>
  );
}
