// src/components/ServicesSection.jsx
import React from 'react';
import './ServicesSection.css';

const services = [
  {
    title: 'Copywriting',
    description:
      'Clear, persuasive copy tailored to your brand voice to turn visitors into customers.',
    image: '/ekime3.jpg',
    alt: 'Copywriting illustration',
  },
  {
    title: 'Website & App Development',
    description:
      'Responsive, high-performance web and app experiences built to convert and scale.',
    image: '/ekime4.jpg',
    alt: 'Development illustration',
  },
  {
    title: 'Digital Marketing',
    description:
      'Strategy-driven campaigns across channels to grow awareness and generate leads.',
    image: '/ekime5.png',
    alt: 'Marketing illustration',
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-sub">
          Core services designed to position your brand and drive measurable growth.
        </p>
        <div className="cards">
          {services.map((s) => (
            <div key={s.title} className="service-card1">
              <div className="image-wrapper">
                <img src={s.image} alt={s.alt} loading="lazy" />
              </div>
              <div className="card-content">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
