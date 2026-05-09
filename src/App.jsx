import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/hero/HeroSection';
import TreatmentsSection from './components/treatments/TreatmentsSection';
import StatsSection from './components/treatments/StatsSection';
import WhyChooseUsSection from './components/treatments/WhyChooseUsSection';
import FloatingGallery from './components/gallery/FloatingGallery';
import ServicesSection from './components/treatments/ServicesSection';
import PartnersSection from './components/partners/PartnersSection';
import AppointmentSection from './components/booking/AppointmentSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <TreatmentsSection />
      <StatsSection />
      <WhyChooseUsSection />
      <FloatingGallery />
      <AppointmentSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
