// src/components/ContactInfo.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import './ContactInfo.css';

const socialLinks = {
  facebook: 'https://www.facebook.com/EkimeBA?mibextid=ZbWKwL',
  linkedin: 'https://www.linkedin.com/in/felix-ujor-7aa035247',
  whatsapp: 'https://wa.me/2349124271058',
  instagram: '#', // replace when ready
  youtube: '#', // replace when ready
};

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="info-item">
        <FaEnvelope className="icon" />
        <div>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@ekime.com.ng">info@ekime.com.ng</a>
        </div>
      </div>
      <div className="info-item">
        <FaPhone className="icon" />
        <div>
          <strong>Phone:</strong>{' '}
          <a href="tel:+2349124271058">+234 912 427 1058</a>
        </div>
      </div>
      <div className="info-item">
        <FaMapMarkerAlt className="icon" />
        <div>
          <strong>Address:</strong> 3 Osasu Asabor Street, Off Airport Road, Oko ADP, Benin City, Edo State
        </div>
      </div>
      <div className="info-item socials-row">
        <div className="icon-group">
          <strong>Connect:</strong>{' '}
          <a href={socialLinks.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href={socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href={socialLinks.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href={socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href={socialLinks.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}
