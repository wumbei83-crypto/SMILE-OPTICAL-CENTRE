import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send message goes here
    console.log('Form submitted:', formData);
    // Reset after submission
    setFormData({ name: '', email: '', message: '' });
    alert("Thank you! Your message has been sent.");
  };

  return (
    <section className={styles.section} id="contact">
      {/* Glowing background elements for the spectacular dark aesthetic */}
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>GET IN TOUCH</h2>
          <p className={styles.subtitle}>
            We're here to help with your vision care needs. Reach out to us directly or visit our Tamale centre for priority treatment.
          </p>
        </div>

        <div className={styles.content}>
          {/* Info Panel */}
          <div className={styles.infoPanel}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MapPin className={styles.icon} size={24} />
              </div>
              <div className={styles.infoText}>
                <h3>Our Location</h3>
                <p>C5F4+VX3. Agric Traffic Light - Inside Alhaji Osman Story Building (Old Multi Credit Office)</p>
                <p className={styles.subtext}>One minute walk from the Traffic Light.</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Phone className={styles.icon} size={24} />
              </div>
              <div className={styles.infoText}>
                <h3>Phone Numbers</h3>
                <p><a href="tel:+233244973402">024 497 3402</a></p>
                <p><a href="tel:+233506391124">050 639 1124</a></p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Clock className={styles.icon} size={24} />
              </div>
              <div className={styles.infoText}>
                <h3>Operating Hours</h3>
                <p>Monday - Friday: 8:30AM to 5:00PM</p>
                <p>Saturday: 8:30AM to 3:00PM</p>
                <p className={styles.subtext}>Sunday: Closed</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Mail className={styles.icon} size={24} />
              </div>
              <div className={styles.infoText}>
                <h3>Email Address</h3>
                <p><a href="mailto:smileopticalcentre@gmail.com">smileopticalcentre@gmail.com</a></p>
              </div>
            </div>

            {/* WhatsApp Integration */}
            <a 
              href="https://wa.me/233244973402" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappCard}
            >
              <div className={styles.whatsappIconWrapper}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.whatsappIcon}>
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766 0 1.252.328 2.46.953 3.535l-1.01 3.68 3.766-.988c1.036.568 2.213.867 3.421.867l.004-.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766h-.002zm3.308 8.28c-.18.497-.978.964-1.378 1.018-.344.047-.84.09-2.31-.519-1.782-.734-2.92-2.55-3.007-2.667-.087-.117-.718-.956-.718-1.823 0-.868.452-1.298.614-1.474.162-.176.353-.22.478-.22.125 0 .251 0 .36.005.118.005.275-.044.428.324.16.386.544 1.33.593 1.428.05.099.083.214.02.34-.061.127-.094.205-.188.314-.094.11-.198.241-.282.33-.094.099-.193.208-.08.403.111.196.495.823 1.058 1.326.726.65 1.34.848 1.536.945.195.098.31.084.425-.049.115-.133.498-.58.632-.78.134-.199.268-.166.446-.1.178.066 1.124.53 1.317.627.193.097.32.146.368.228.046.082.046.474-.134.971z" />
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.032 19.982c-1.636 0-3.238-.438-4.646-1.266l-.333-.198-3.456.906.924-3.37-.217-.345c-.911-1.448-1.391-3.136-1.39-4.88 0-5.068 4.126-9.193 9.197-9.194 5.071 0 9.197 4.126 9.198 9.194 0 5.068-4.127 9.193-9.198 9.193h-.079z"/>
                </svg>
              </div>
              <div className={styles.whatsappText}>
                <h3>Chat with us on WhatsApp</h3>
                <p>024 497 3402</p>
              </div>
            </a>
          </div>

          {/* Form Panel */}
          <div className={styles.formPanel}>
            <h3 className={styles.formTitle}>Send us a Message</h3>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Full Name"
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Email Address"
                />
              </div>
              <div className={styles.inputGroup}>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="How can we help you?"
                  rows={6}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Container */}
        <div className={styles.mapContainer}>
          <iframe 
            src="https://maps.google.com/maps?q=Smile%20Optical%20Centre,%20Tamale&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Smile Optical Centre Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
