import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import styles from './HeroContent.module.css';

export default function HeroContent({ scrollYProgress }) {
  // Phase 1: Headline crossfade (Start immediately at scroll 0)
  // Headline 1 fades out and moves up
  const headline1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);
  const headline1Y = useTransform(scrollYProgress, [0, 0.12], [0, -60]);
  const headline1Blur = useTransform(scrollYProgress, [0.05, 0.12], ["blur(0px)", "blur(10px)"]);
  
  // Headline 2 stays hidden and low, then fades in and moves up to center
  const headline2Opacity = useTransform(scrollYProgress, [0.13, 0.22, 1], [0, 1, 1]);
  const headline2Y = useTransform(scrollYProgress, [0.13, 0.22], [60, 0]);
  const headline2Blur = useTransform(scrollYProgress, [0.13, 0.22], ["blur(10px)", "blur(0px)"]);

  // Phase 2: Subheadline crossfade (Triggers after headline)
  const subhead1Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.45], [1, 1, 0]);
  const subhead1Y = useTransform(scrollYProgress, [0.3, 0.45], [0, -40]);
  const subhead1Blur = useTransform(scrollYProgress, [0.35, 0.45], ["blur(0px)", "blur(8px)"]);

  const subhead2Opacity = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 1, 1]);
  const subhead2Y = useTransform(scrollYProgress, [0.5, 0.6], [40, 0]);
  const subhead2Blur = useTransform(scrollYProgress, [0.5, 0.6], ["blur(8px)", "blur(0px)"]);

  // Initials for social proof (replacement for broken images)
  const patientInitials = [
    { text: 'AA', color: '#FFD700' }, // Gold
    { text: 'SK', color: '#FFA0F0' }, // Pink
    { text: 'JM', color: '#D0A0FF' }  // Purple
  ];

  return (
    <div className={styles.contentContainer}>
      <div className={styles.headlineWrapper}>
        {/* Original Headline */}
        <motion.h1 
          style={{ 
            opacity: headline1Opacity, 
            y: headline1Y,
            filter: headline1Blur,
          }} 
          className={styles.headline}
        >
          COMMITTED<br/>
          TO EXCEEDING YOUR<br/>
          EXPECTATIONS
          <span className={styles.visionDots}>
            <span className={`${styles.dot} ${styles.dotBlurry}`}></span>
            <span className={`${styles.dot} ${styles.dotSolid}`}></span>
          </span><br/>
          FOR VISION CARE
        </motion.h1>

        {/* New Headline (Phase 1) */}
        <motion.h1 
          style={{ 
            opacity: headline2Opacity, 
            y: headline2Y,
            filter: headline2Blur,
          }} 
          className={`${styles.headline} ${styles.headlineNew}`}
        >
          QUALITY SIGHT,<br/>
          BETTER LIFE!
        </motion.h1>
      </div>
      
      <div className={styles.subheadWrapper}>
        {/* Original Subheadline */}
        <motion.p 
          style={{ 
            opacity: subhead1Opacity, 
            y: subhead1Y,
            filter: subhead1Blur
          }} 
          className={`subheadline ${styles.subheadline}`}
        >
          Precision Eye Care tailored to your unique needs, delivering clarity and confidence every day.
        </motion.p>
        
        {/* New Subheadline (Phase 2) */}
        <motion.div 
          style={{ 
            opacity: subhead2Opacity, 
            y: subhead2Y,
            filter: subhead2Blur
          }} 
          className={`subheadline ${styles.subheadlineNew}`}
        >
          <p><strong>Vision:</strong> Ensuring Quality Sight for a Better Life</p>
          <p><strong>Mission:</strong> Providing Quality, Precise and Sustainable Eye Care Services for All</p>
        </motion.div>
      </div>
      
      <div className={styles.ctaWrapper}>
        <div className={styles.ctaGroup}>
          <a href="#appointments" className="btn btn-dark">Book An Appointment</a>
        </div>

        {/* Insurance Badge */}
        {/* Insurance Badge - Premium Overhaul */}
        <a href="#partners" className={styles.insuranceBadge}>
          <div className={styles.badgeIcon}>
            <ShieldCheck size={22} strokeWidth={2.5} />
          </div>
          <span className={styles.badgeText}>10+ Insurance Cards Accepted</span>
          <div className={styles.badgeArrow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </a>

        {/* Social Proof */}
        <div className={styles.socialProof}>
          <div className={styles.avatars}>
            {patientInitials.map((patient, i) => (
              <div 
                key={i} 
                className={styles.avatarInitials} 
                style={{ backgroundColor: patient.color }}
              >
                {patient.text}
              </div>
            ))}
            <div className={styles.avatarMore}>+2k</div>
          </div>
          <div className={styles.proofText}>
            <div className={styles.stars}>
              {'★★★★★'.split('').map((star, i) => <span key={i} className={styles.star}>{star}</span>)}
            </div>
            <p>Trusted by <strong>2,000+</strong> patients in Tamale</p>
          </div>
        </div>
      </div>
    </div>
  );
}
