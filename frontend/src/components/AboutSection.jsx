// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container about-inner">
        <div className="about-text">
          <h2>About Ekime Digital Services</h2>
          <p>
            We are a Nigerian-based digital agency focused on helping businesses grow online through
            thoughtful design, strategic marketing, and robust development. Our work is grounded in
            clarity, efficiency, and measurable outcomes.
          </p>
          <p>
            Whether you need a website, compelling content, or a digital strategy that performs, we
            craft solutions tailored to your audience and goals.
          </p>
          <a href="/about" className="learn-more">
            Learn More
          </a>
        </div>
        <div className="about-visual">
          {/* Placeholder: could be a team photo, logo mashup, or illustration */}
          <div className="visual-box">[About Visual]</div>
        </div>
      </div>
    </section>
  );
}
