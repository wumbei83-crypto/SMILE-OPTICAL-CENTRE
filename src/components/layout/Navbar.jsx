import React from 'react';
import { Search, Phone } from 'lucide-react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Smile Optical Centre Logo" className={styles.logoImage} />
      </div>
      
      <div className={styles.menu}>
        <a href="#about">About</a>
        <a href="#partners">Insurance</a>
        <a href="#services">Services</a>
        <a href="#appointments">Appointments</a>
        <a href="#contact">Contact Us</a>
      </div>
      
      <div className={styles.actions}>
        <div className={styles.searchContainer}>
          <Search size={18} className={styles.searchIcon} />
          <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
        <a href="tel:+233244973402" className={`btn btn-dark ${styles.callBtn}`}>
          <Phone size={16} />
          <span>Call Now: 024 497 3402</span>
        </a>
      </div>
    </nav>
  );
}
