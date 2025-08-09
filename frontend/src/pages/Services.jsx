import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppWidget from '../components/WhatsAppWidget.jsx';
import DocumentHead from '../components/DocumentHead.jsx';
import AdSlot from '../components/AdSlot.jsx';
import '../styles/Services.css';


const SITE = import.meta.env.VITE_SITE_URL || 'http://localhost:3000';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Copywriting',
      description:
        'Our expert copywriters craft compelling content that engages your audience and drives action—from website copy to blog posts, email campaigns, and social media content.',
      image: '/Copywriting_service.jpg',
      alt: 'Copywriting Service',
    },
    {
      id: 2,
      title: 'Website Development',
      description:
        'We design and develop responsive, user-friendly websites that look great on all devices. Our services include custom designs, e-commerce, CMS integration, and ongoing support.',
      image: '/web-development-service.jpg',
      alt: 'Web Development Service',
    },
    {
      id: 3,
      title: 'App Development',
      description:
        'Our team builds native and cross-platform mobile apps for iOS and Android, focusing on performance, scalability, and an outstanding user experience.',
      image: '/App-development-service.jpg',
      alt: 'App Development Service',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description:
        'From SEO and PPC to social media and email marketing, we craft data-driven campaigns that grow your brand’s reach and generate leads.',
      image: '/digital-marketing-service.jpg',
      alt: 'Digital Marketing Service',
    },
  ];

  const processSteps = [
    { number: 1, title: 'Discovery', text: 'We learn your business, goals, and audience to craft a tailored strategy.' },
    { number: 2, title: 'Planning', text: 'We outline scope, timeline, and deliverables so you know exactly what to expect.' },
    { number: 3, title: 'Execution', text: 'Our team implements with precision and attention to detail.' },
    { number: 4, title: 'Review', text: 'We present our work, gather feedback, and make adjustments as needed.' },
    { number: 5, title: 'Launch', text: 'We deploy your solution and provide ongoing support for success.' },
  ];

  return (
    <>
      <DocumentHead
        title="Ekime Digital Services — Our Services"
        description="Explore our range of digital services designed to help your business thrive online."
        url={`${SITE}/services`}
        image={`${SITE}/og/Copywriting-service.jpg`} // absolute URL
      />
      <Header />
      <main className="services-page">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            We provide comprehensive digital solutions to help your business thrive online.
          </p>

          <div className="services-grid2">
          {services.map((s) => (
               <div key={s.id} className="service-card2">
                <div className="service-image2">
                  <img src={s.image} alt={s.alt} loading="lazy" />
                </div>
                <div className="service-content">
                  <h2>{s.title}</h2>
                  <p>{s.description}</p>
                  <Link to="/contact" className="btn">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <AdSlot client="ca-pub-9731823684789613" slot="1542582657" test={false} />

          <section className="process-section">
            <h2 className="section-title">Our Process</h2>
            <div className="process-steps">
              {processSteps.map((step) => (
                <div key={step.number} className="process-step">
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
