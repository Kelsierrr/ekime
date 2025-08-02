// src/pages/Services.jsx
import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppWidget from '../components/WhatsAppWidget.jsx';
import ServicesSection from '../components/ServicesSection.jsx';

export default function Services() {
  return (
    <>
      <Header />
      <main className="container" style={{ padding: '3rem 0' }}>
        <h1>Our Services</h1>
        <p>We offer a suite of services to help you build, grow, and amplify your online presence.</p>
        <ServicesSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
