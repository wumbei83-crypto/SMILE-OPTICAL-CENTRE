import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Eye Examination/ Vision Test',
    description: 'Comprehensive eye tests in Tamale to assess your visual acuity and overall eye health.',
  },
  {
    title: 'Glaucoma Screening',
    description: 'Early detection and preventive care for glaucoma to protect your vision long-term.',
  },
  {
    title: 'Cataract Assessment',
    description: 'Expert evaluation and monitoring of cataracts to ensure clear and comfortable sight.',
  },
  {
    title: 'Low Vision Treatment',
    description: 'Specialized solutions and visual aids for patients with partial sight or severe vision loss.',
  },
  {
    title: 'Pediatric Eye Care',
    description: 'Gentle, specialized eye examinations and treatments tailored for children and infants.',
  },
  {
    title: 'Lens Prescription',
    description: 'Accurate and personalized lens prescriptions to correct refractive errors perfectly.',
  },
  {
    title: 'Contact Lens Fitting',
    description: 'Professional fitting and training for comfortable, safe, and clear contact lens wear.',
  },
  {
    title: 'Spectacle Frame Sales',
    description: 'A wide selection of stylish, durable, and premium spectacle frames to suit your face.',
  },
  {
    title: 'Lens Dispensing',
    description: 'High-quality lens dispensing services ensuring your prescription is accurately crafted.',
  },
  {
    title: 'Sunglasses Sales',
    description: 'Protective and fashionable sunglasses to shield your eyes from harmful UV rays.',
  },
  {
    title: 'Occupational / Sports Vision',
    description: 'Specialized eyewear and vision therapies designed for optimal workplace and sports performance.',
  },
  {
    title: 'Fixing (Glazing) Lenses',
    description: 'Fast and precise lens glazing and repair services to keep your glasses in perfect condition.',
  },
  {
    title: 'Sale of Optical Accessories',
    description: 'Essential optical accessories including cases, cleaning kits, and cords for your eyewear.',
  },
  {
    title: 'Clinical Referrals for Tertiary Care',
    description: 'Medically sound professional referrals to specialized tertiary institutions for advanced care.',
  }
];

const ServicesSection = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Translate horizontal container left by 80% of its total width
  // Translate horizontal container left by 85% of its total width to account for 14 cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className={styles.carouselTrack} id="services">
      <div className={styles.stickyViewport}>
        <div className={styles.container}>
          <h2 className={styles.title}>OUR SERVICES:</h2>
          
          <motion.div style={{ x }} className={styles.scrollContainer}>
            {services.map((service, index) => {
              const number = String(index + 1).padStart(2, '0');
              
              return (
                <div key={index} className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.description}</p>
                  </div>
                  <div className={styles.cardNumber}>{number}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
