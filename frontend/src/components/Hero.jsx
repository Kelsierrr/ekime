// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

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
            <a href="/services" className="btn">
              View Our Services
            </a>
          </div>
        </div>
        <div className="hero-visual">
          {/* Placeholder: you can replace with an illustration or graphic */}
          <div className="visual-box">[Visual Graphic]</div>
        </div>
      </div>
    </section>
  );
}
