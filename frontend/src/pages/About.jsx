// src/pages/About.jsx
import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import AboutSection from '../components/AboutSection.jsx';
import WhatsAppWidget from '../components/WhatsAppWidget.jsx';

export default function About() {
  return (
    <>
      <Header />
      <main className="container" style={{ padding: '3rem 0' }}>
        <h1>About Us</h1>
        <p>
          Ekime Digital Services is a full-service digital agency based in Benin City, Nigeria.
          We specialise in copywriting, website and app development, and digital marketing to help brands
          grow with clarity and purpose.
        </p>
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
