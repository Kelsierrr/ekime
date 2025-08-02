// src/pages/Contact.jsx
import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ContactInfo from '../components/ContactInfo.jsx';
import WhatsAppWidget from '../components/WhatsAppWidget.jsx';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container" style={{ padding: '3rem 0' }}>
        <h1>Contact Us</h1>
        <p>Fill out the form or reach us directly via the information below.</p>
        <div
          style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: '1fr 1fr',
            marginTop: '1rem',
          }}
        >
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
