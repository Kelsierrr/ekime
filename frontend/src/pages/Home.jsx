// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import WhatsAppWidget from '../components/WhatsAppWidget.jsx';
import DocumentHead from '../components/DocumentHead.jsx';
import AdSlot from '../components/AdSlot.jsx';
import { Link } from 'react-router-dom';

const SITE = import.meta.env.VITE_SITE_URL || 'http://localhost:3000';

export default function Home() {
  return (
    <>
    <DocumentHead
        title="Ekime Digital Services — Websites, Apps, Copy & Marketing"
        description="We build clean, modern websites and run strategies that grow your business."
        url={`${SITE}/`}
        image={`${SITE}/og/ekime1.jpg`}   // absolute URL
      />
      <Header />
      <main>
        <Hero />
        <AdSlot
  client="ca-pub-9731823684789613"
  slot="1542582657"   // your real slot id
  test={false}         // turn OFF in production
/>
        <ServicesSection />
        <AboutSection />
        <section className="contact-cta" style={{ padding: '3rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2>Have a project in mind?</h2>
            <p>Let’s build something great together. Reach out and we’ll get back to you quickly.</p>
            <Link to ="/contact" className="btn" style={{ marginTop: '0.5rem' }}>
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
