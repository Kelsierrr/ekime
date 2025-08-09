// src/components/WhatsAppWidget.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppWidget.css';

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/2348052054490"
      className="whatsapp-widget"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
