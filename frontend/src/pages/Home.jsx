// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import WhatsAppWidget from '../components/WhatsAppWidget.jsx';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <section className="contact-cta" style={{ padding: '3rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2>Have a project in mind?</h2>
            <p>Let’s build something great together. Reach out and we’ll get back to you quickly.</p>
            <a href="/contact" className="btn" style={{ marginTop: '0.5rem' }}>
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
