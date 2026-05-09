import React from 'react';
import styles from './FloatingGallery.module.css';

import gallery1 from '../../assets/images/gallery-1.jpg';
import gallery2 from '../../assets/images/gallery-2.jpg';
import gallery3 from '../../assets/images/gallery-3.jpg';
import gallery4 from '../../assets/images/gallery-4.jpg';

const FloatingGallery = () => {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        {/* Item 1 */}
        <div className={`${styles.item} ${styles.image1}`}>
          <img src={gallery1} alt="Smile Optical Centre Lab Technician" />
        </div>

        {/* Item 2 */}
        <div className={`${styles.item} ${styles.image2}`}>
          <img src={gallery2} alt="Eye Examination at Smile Optical Centre" />
        </div>

        {/* Item 3: Dark Card */}
        <div className={`${styles.item} ${styles.darkCard}`}>
          <p className={styles.cardText}>
            Experience premium eye care in a warm, professional, and welcoming environment.
          </p>
          
          <a href="tel:+233244973402" className={styles.contactPill}>
            <span className={styles.contactText}>024 497 3402</span>
            <div className={styles.arrowButton}>
              <svg 
                className={styles.arrowIcon} 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 19L19 5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 5H19V15" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Item 4 */}
        <div className={`${styles.item} ${styles.image3}`}>
          <img src={gallery3} alt="Patient Testing at Smile Optical Centre" />
        </div>

        {/* Item 5 */}
        <div className={`${styles.item} ${styles.image4}`}>
          <img src={gallery4} alt="Looking at Frames at Smile Optical Centre" />
        </div>
      </div>
    </section>
  );
};

export default FloatingGallery;
