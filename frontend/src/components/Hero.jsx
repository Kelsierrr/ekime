// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Digital Solutions That Drive Results</h1>
          <p>
            We build clean, modern websites, create compelling content, and execute digital
            strategies that help brands grow online.
          </p>
          <div className="hero-cta">
            <Link to="/services" className="btn">
              View Our Services
              </Link> 
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/hero-image.jpg"
            alt="Illustration of digital growth strategy"
            className="hero-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
