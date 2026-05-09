import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.col}>
            <h3 className={styles.brandName}>SMILE OPTICAL CENTRE</h3>
            <p className={styles.desc}>
              Providing comprehensive, world-class eye care treatments and premium optical services to the Tamale community.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#appointments">Book Appointment</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.links}>
              <li><a href="#services">Comprehensive Eye Exams</a></li>
              <li><a href="#services">Glaucoma Screening</a></li>
              <li><a href="#services">Laser Vision Correction</a></li>
              <li><a href="#services">Optical Shop</a></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Info</h4>
            <ul className={styles.contactList}>
              <li>C5F4+VX3. Agric Traffic Light</li>
              <li>Inside Alhaji Osman Story Building</li>
              <li>024 497 3402 | 050 639 1124</li>
              <li>smileopticalcentre@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} Smile Optical Centre. All rights reserved.
            </p>
            <p className={styles.signature}>
              Designed and Developed by <strong>ConnectHub Digital Solutions</strong>. 
              <br className={styles.mobileBreak} />
              Phone: <a href="tel:+233247647014">024 764 7014</a> | <a href="tel:+233557600439">055 760 0439</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
