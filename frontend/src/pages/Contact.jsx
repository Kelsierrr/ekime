import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ContactInfo from '../components/ContactInfo.jsx';
import WhatsAppWidget from '../components/WhatsAppWidget.jsx';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-sub">
          Fill out the form or reach us directly via the information below.
        </p>
        <div className="contact-container">
          <div className="contact-form">
            <ContactForm />
          </div>
          <div className="contact-info">
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
