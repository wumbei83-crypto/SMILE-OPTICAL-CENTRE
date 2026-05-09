import React from 'react';
import styles from './StatsSection.module.css';

import slitLampImg from '../../assets/images/slit-lamp-real.jpg';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';

const StatsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftCol}>
          <p className={styles.topText}>
            Our eye care specialists in Tamale use the latest treatments to provide optimum vision care. Contact Smile Optical Centre today for comprehensive eye exams and glaucoma screening.
          </p>

          <div className={styles.cardsContainer}>
            <div className={styles.darkCard}>
              <div>
                <h3 className={styles.percent}>95%</h3>
                <p className={styles.darkSubText}>
                  OF PATIENTS<br />
                  ARE SATISFIED<br />
                  WITH TREATMENT
                </p>
              </div>
              <div className={styles.reviewsWrapper}>
                <div className={styles.avatars}>
                  <img src={avatar1} alt="Satisfied patient" className={styles.avatar} />
                  <img src={avatar2} alt="Satisfied patient" className={styles.avatar} />
                  <img src={avatar1} alt="Satisfied patient" className={styles.avatar} />
                </div>
                <span className={styles.reviewText}>31 REVIEWS</span>
              </div>
            </div>

            <div className={styles.lightCard}>
              <h3 className={styles.number}>14+</h3>
              <p className={styles.lightSubText}>
                YEARS OF<br />
                EXCELLENCE
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightCol}>
          <div className={styles.imageWrapper}>
            <img 
              src={slitLampImg} 
              alt="African female optometrist examining a patient using a slit lamp in Tamale" 
            />
          </div>
          <h2 className={styles.largeText}>
            EXPERIENCE UNMATCHED CLARITY WITH TAMALE'S LEADING OPTOMETRISTS, DELIVERING ADVANCED EYE EXAMS, CUSTOM LENSES, AND EXPERT VISION CARE FOR YOUR ENTIRE FAMILY.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
