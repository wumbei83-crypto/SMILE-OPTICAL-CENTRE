import React from 'react';
import styles from './WhyChooseUsSection.module.css';

import optometristImg from '../../assets/images/optometrist.png';
import dvlaLogo from '../../assets/images/dvla-logo.png';
import hefraLogo from '../../assets/images/hefra-logo.png';
import ahpcLogo from '../../assets/images/ahpc-logo.png';
import epaLogo from '../../assets/images/epa-logo.png';
import gnfsLogo from '../../assets/images/gnfs-logo.png';

const WhyChooseUsSection = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        {/* Left Column (Grid of 4) */}
        <div className={styles.leftCol}>
          {/* Top Left */}
          <div className={styles.topLeft}>
            <h2 className={styles.title}>
              WHY CHOOSE SMILE OPTICAL CENTRE IN TAMALE?
            </h2>
          </div>

          {/* Top Right */}
          <div className={styles.topRight}>
            <p className={styles.description}>
              When you rely on our Tamale optical centre for comprehensive eye care, you can rest easy knowing your vision is in expert hands. We are a trusted provider because:
            </p>
          </div>

          {/* Bottom Left */}
          <div className={styles.bottomLeft}>
            <div className={styles.statBlock}>
              <h3 className={styles.statTitle}>14+ YEARS</h3>
              <p className={styles.statText}>
                We have been providing premium eye care for Tamale area residents
              </p>
            </div>

            <div className={styles.statBlock}>
              <h3 className={styles.statTitle}>14+ SERVICES</h3>
              <p className={styles.statText}>
                We specialize in a comprehensive range of optometry and ophthalmic services
              </p>
            </div>
          </div>

          {/* Bottom Right */}
          <div className={styles.bottomRight}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>4 SPECIALISTS</h3>
              <p className={styles.cardText}>
                Our eye care staff in Tamale are fully qualified and highly skilled (2 Optometrists & 2 Opticians).
              </p>

              <div className={styles.cardFooter}>
                
                <button className={styles.arrowButton} aria-label="View specialists">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="19" x2="19" y2="5"></line>
                    <polyline points="9 5 19 5 19 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Accreditations */}
          <div className={styles.accreditations}>
            <p className={styles.accreditationText}>
              Fully Regulated, Licensed, and Accredited By:
            </p>
            <div className={styles.accreditationLogos}>
              <div className={styles.logoItem}>
                <img src={hefraLogo} alt="HeFRA Licensed" />
                <span>Health Facilities<br />Regulatory Agency</span>
              </div>
              <div className={styles.logoItem}>
                <img src={dvlaLogo} alt="DVLA Accredited" />
                <span>Driver and Vehicle<br />Licensing Authority</span>
              </div>
              <div className={styles.logoItem}>
                <img src={ahpcLogo} alt="AHPC Accredited" />
                <span>Allied Health<br />Professions Council</span>
              </div>
              <div className={styles.logoItem}>
                <img src={epaLogo} alt="EPA Accredited" />
                <span>Environmental<br />Protection Agency</span>
              </div>
              <div className={styles.logoItem}>
                <img src={gnfsLogo} alt="Ghana National Fire Service Accredited" />
                <span>Ghana National<br />Fire Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightCol}>
          <div style={{ backgroundColor: 'var(--color-primary-pink)', padding: '3.5rem 2.5rem', borderRadius: '24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#111', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '2.2rem', marginBottom: '2rem', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: '1.2' }}>OUR PROMISE TO YOU</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.8rem', fontSize: '1.15rem', fontWeight: '600' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <span style={{ backgroundColor: '#fff', borderRadius: '50%', padding: '0.6rem', display: 'flex', color: 'var(--color-dark)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span> 
                Comprehensive Eye Exams
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <span style={{ backgroundColor: '#fff', borderRadius: '50%', padding: '0.6rem', display: 'flex', color: 'var(--color-dark)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span> 
                State-of-the-art Equipment
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <span style={{ backgroundColor: '#fff', borderRadius: '50%', padding: '0.6rem', display: 'flex', color: 'var(--color-dark)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span> 
                Wide Range of Premium Frames
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <span style={{ backgroundColor: '#fff', borderRadius: '50%', padding: '0.6rem', display: 'flex', color: 'var(--color-dark)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span> 
                Exceptional After-care Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
