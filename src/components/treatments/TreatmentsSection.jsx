import React from 'react';
import styles from './TreatmentsSection.module.css';
import eyeExamImg from '../../assets/images/eye-exam.png';
import laserTechImg from '../../assets/images/laser-tech.png';

const TreatmentsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          COMPREHENSIVE EYE CARE TREATMENTS IN TAMALE:
        </h2>

        <div className={styles.grid}>
          {/* Card 1: Medical Examination */}
          <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
              <h3>COMPREHENSIVE EYE EXAMS</h3>
              <span className={styles.arrow}>&rarr;</span>
            </div>
            <div className={styles.card}>
              <img
                src={eyeExamImg}
                alt="African patient undergoing a comprehensive eye examination in Tamale"
                className={styles.cardImage}
              />
              <div className={styles.overlayTextContainer}>
                <p className={styles.overlayText}>
                  PREVENTIVE GLAUCOMA &<br />CATARACT SCREENING
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Custom Lenses */}
          <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
              <h3>PREMIUM FRAMES & LENSES</h3>
              <span className={styles.arrow}>&rarr;</span>
            </div>
            <div className={`${styles.card} ${styles.purpleCard}`}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1.5rem' }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-dark)' }}>
                  <circle cx="6" cy="15" r="4"></circle>
                  <circle cx="18" cy="15" r="4"></circle>
                  <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"></path>
                  <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"></path>
                  <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"></path>
                </svg>
                <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--color-dark)', textAlign: 'center', lineHeight: '1.3' }}>
                  DESIGNER FRAMES<br/>& CUSTOM LENSES
                </div>
              </div>
              <p className={styles.purpleBottomText}>
                FIND YOUR PERFECT STYLE AND FIT
              </p>
            </div>
          </div>

          {/* Card 3: Laser Vision Correction */}
          <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
              <h3>ADVANCED VISION CORRECTION</h3>
              <span className={styles.arrow}>&rarr;</span>
            </div>
            <div className={`${styles.card} ${styles.laserCard}`}>
              <img
                src={laserTechImg}
                alt="Modern technology for refractive eye errors at Smile Optical Centre"
                className={styles.cardImage}
              />
              <div className={styles.laserContent}>
                <h4 className={styles.laserTitle}>
                  MODERN<br />TECHNOLOGIES<br />FOR REFRACTIVE<br />ERRORS
                </h4>
                <div className={styles.laserFooter}>
                  <p className={styles.laserBottomText}>
                    BOOK YOUR APPOINTMENT IN TAMALE
                  </p>
                  <a href="#appointments" className={styles.plusButton} aria-label="Book an appointment">
                    +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
