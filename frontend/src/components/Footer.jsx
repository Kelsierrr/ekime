import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <div className="logo-wrapper">
            <img src="/ekime1.jpg" alt="Ekime Digital Services" width={150} />
          </div>
          <p>Digital Solutions That Drive Results</p>
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/services">Copywriting</a></li>
              <li><a href="/services">Website Development</a></li>
              <li><a href="/services">App Development</a></li>
              <li><a href="/services">Digital Marketing</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3>Contact</h3>
            <ul className="contact-info">
              <li>
                <FaWhatsapp style={{ marginRight: '1px' }} />
                <span>+234 912 427 1058</span>
              </li>
              <li>
                <FaInstagram style={{ marginRight: '1px' }} />
                <span>info@ekime.com.ng</span>
              </li>
              <li>
              <FaMapMarkerAlt style={{ marginRight: '1px' }} />
                <span>Benin City, Edo State, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://www.facebook.com/EkimeBA" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/felix-ujor-7aa035247" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/@ekimeBA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/ekimeba/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://wa.me/2349124271058" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon">
              <FaWhatsapp />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Ekime Digital Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}



