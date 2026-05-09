import React, { useState } from 'react';
import styles from './AppointmentSection.module.css';
import { X } from 'lucide-react';

const AppointmentSection = () => {
  const today = new Date();
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    sex: '',
    service: '',
    otherService: '',
    hasInsurance: 'no',
    insuranceProvider: ''
  });

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // State for calendar & time
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState('');

  // Service options
  const services = [
    'Eye Examination/ Vision Test',
    'Glaucoma Screening',
    'Cataract Assessment',
    'Low Vision Treatment',
    'Pediatric Eye Care',
    'Lens Prescription',
    'Contact Lens Fitting',
    'Spectacle Frame Sales',
    'Lens Dispensing',
    'Sunglasses Sales',
    'Occupational / Sports Vision',
    'Fixing (Glazing) Lenses',
    'Sale of Optical Accessories',
    'Other'
  ];

  // Insurance options
  const insurancePartners = [
    'ACE Medical Insurance',
    'APEX Health Insurance',
    'Cosmopolitan Health Insurance',
    'Equity Health Insurance',
    'GHIC',
    'GLICO Healthcare',
    'Nationwide Medical Insurance',
    'OctaPlus Health',
    'Premier Health Insurance'
  ];

  // Generated Time Slots (8:00 AM to 5:00 PM, every 30 mins)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 17; hour++) {
      const h = hour.toString().padStart(2, '0');
      slots.push(`${h}:00`);
      if (hour !== 17) slots.push(`${h}:30`);
    }
    return slots;
  };
  const timeSlots = generateTimeSlots();

  // Calendar logic
  const daysInMonth = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = currentMonthDate.getDay();
  
  let startDayIndex = firstDayOfMonth - 1;
  if (startDayIndex < 0) startDayIndex = 6;

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekdays = ['m', 't', 'w', 't', 'f', 's', 's'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, selectedDate, selectedTime });
    alert('Thank you! Your appointment request has been sent.');
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < startDayIndex; i++) {
      days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = selectedDate && 
                         selectedDate.getDate() === i && 
                         selectedDate.getMonth() === currentMonthDate.getMonth() && 
                         selectedDate.getFullYear() === currentMonthDate.getFullYear();
      days.push(
        <div 
          key={i} 
          className={`${styles.day} ${isSelected ? styles.selectedDay : ''}`}
          onClick={() => setSelectedDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), i))}
        >
          {String(i).padStart(2, '0')}
        </div>
      );
    }
    return days;
  };

  return (
    <section className={styles.section} id="appointments">
      <div className={styles.container}>
        
        {/* Left Column */}
        <div className={styles.leftCol}>
          <h2 className={styles.title}>BOOK AN<br/>APPOINTMENT</h2>
          <p className={styles.subtitle}>
            CONTACT US TODAY TO MAKE<br/>
            AN APPOINTMENT WITH AN EYE<br/>
            CARE SPECIALIST.
          </p>
          
          <div className={styles.contactInfo}>
            <p><strong>Location:</strong> Tamale, Ghana</p>
            <p><strong>Phone:</strong> 024 497 3402</p>
            <p><strong>Hours:</strong> Mon - Fri: 8:30 AM - 5:00 PM | Sat: 8:30 AM - 3:00 PM</p>
          </div>
        </div>

        {/* Right Column - Booking Form & Calendar */}
        <div className={styles.rightCol}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                name="name"
                placeholder="YOUR NAME" 
                className={styles.inputField} 
                required 
                onChange={handleInputChange}
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="PHONE NUMBER" 
                className={styles.inputField} 
                required 
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <label className={styles.fieldLabel}>YOUR DATE OF BIRTH</label>
                <input 
                  type="text" 
                  name="dob"
                  placeholder="DD / MM / YYYY"
                  className={styles.inputField} 
                  required 
                  onChange={handleInputChange}
                  onFocus={(e) => e.target.placeholder = "Example: 15 / 05 / 1990"}
                  onBlur={(e) => e.target.placeholder = "DD / MM / YYYY"}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.fieldLabel}>SEX</label>
                <select 
                  name="sex" 
                  className={styles.selectField} 
                  required 
                  onChange={handleInputChange}
                  value={formData.sex}
                >
                  <option value="" disabled>SELECT SEX</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <select 
                name="service" 
                className={styles.selectField} 
                required 
                onChange={handleInputChange}
                value={formData.service}
              >
                <option value="" disabled>SELECT SERVICE</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {formData.service === 'Other' && (
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  name="otherService"
                  placeholder="PLEASE SPECIFY SERVICE" 
                  className={styles.inputField} 
                  onChange={handleInputChange}
                />
              </div>
            )}

            <div className={styles.insuranceToggle}>
              <span className={styles.label}>ARE YOU USING INSURANCE?</span>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input 
                    type="radio" 
                    name="hasInsurance" 
                    value="yes" 
                    checked={formData.hasInsurance === 'yes'}
                    onChange={handleInputChange}
                  /> Yes
                </label>
                <label className={styles.radioLabel}>
                  <input 
                    type="radio" 
                    name="hasInsurance" 
                    value="no" 
                    checked={formData.hasInsurance === 'no'}
                    onChange={handleInputChange}
                  /> No
                </label>
              </div>
            </div>

            {formData.hasInsurance === 'yes' && (
              <div className={styles.formGroup}>
                <select 
                  name="insuranceProvider" 
                  className={styles.selectField} 
                  required 
                  onChange={handleInputChange}
                  value={formData.insuranceProvider}
                >
                  <option value="" disabled>SELECT INSURANCE PARTNER</option>
                  {insurancePartners.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            )}

            <div className={styles.calendarSection}>
              <div className={styles.calendarHeaderRow}>
                <span className={styles.label}>CHOOSE DATE</span>
                <div className={styles.monthNav}>
                  <button type="button" onClick={() => setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1))} className={styles.navBtn}>&lt;</button>
                  <span className={styles.monthName}>
                    {monthNames[currentMonthDate.getMonth()]} {currentMonthDate.getFullYear()}
                  </span>
                  <button type="button" onClick={() => setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1))} className={styles.navBtn}>&gt;</button>
                </div>
              </div>

              <div className={styles.calendarContainer}>
                <div className={styles.weekdays}>
                  {weekdays.map((day, idx) => (
                    <div key={idx} className={styles.weekday}>{day}</div>
                  ))}
                </div>
                <div className={styles.daysGrid}>
                  {renderCalendarDays()}
                </div>
              </div>
            </div>

            <div className={styles.timeSection}>
              <span className={styles.label}>CHOOSE TIME</span>
              <div className={styles.timeSlots}>
                {timeSlots.map(time => (
                  <div 
                    key={time}
                    className={`${styles.timeSlot} ${selectedTime === time ? styles.selectedTimeSlot : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              CONFIRM APPOINTMENT
            </button>

            <p className={styles.privacyStatement}>
              By clicking this button you accept{' '}
              <span className={styles.privacyLink} onClick={() => setShowPrivacyModal(true)}>
                Privacy Policy
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className={styles.modalOverlay} onClick={() => setShowPrivacyModal(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Privacy Policy</h2>
              <button className={styles.closeBtn} onClick={() => setShowPrivacyModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.effectiveDate}>Effective Date: January 1, 2026</p>
              
              <p className={styles.intro}>
                At Smile Optical Centre, your privacy and the security of your personal and medical information are of our utmost priority. 
                This Privacy Policy outlines how we collect, use, protect, and handle your data when you visit our website or use our services.
              </p>

              <div className={styles.policySection}>
                <h3>1. Information We Collect</h3>
                <p>
                  We may collect personal identification information including but not limited to your name, email address, phone number, 
                  and medical history when you fill out forms, book consultations, or interact with our clinic physically and online.
                </p>
              </div>

              <div className={styles.policySection}>
                <h3>2. How We Use Your Information</h3>
                <p>
                  Your details are used strictly to provide you with world-class vision care, manage your appointments, process insurance claims, 
                  and communicate important updates regarding your treatment. We will never sell or rent your personal information to third parties.
                </p>
              </div>

              <div className={styles.policySection}>
                <h3>3. Data Protection</h3>
                <p>
                  We implement a variety of premium security measures to maintain the safety of your personal information. 
                  Our systems are fully compliant with local and international healthcare data privacy regulations.
                </p>
              </div>

              <div className={styles.policySection}>
                <h3>4. WhatsApp Booking Integration</h3>
                <p>
                  When using our direct booking feature, your form details are formatted and transmitted directly to our official WhatsApp line. 
                  Please note that WhatsApp carries its own peer-to-peer and end-to-end encryption standards.
                </p>
              </div>

              <div className={styles.policySection}>
                <h3>5. Contact Us</h3>
                <p>
                  If there are any questions regarding this privacy policy, you may contact our data protection officer at <strong>smileopticalcentre@gmail.com</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AppointmentSection;
