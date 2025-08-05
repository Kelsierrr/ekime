import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppWidget from '../components/WhatsAppWidget.jsx';
import '../styles/About.css';

export default function About() {
  return (
    <>
      <Header />
      <main className="about-page">
        <div className="container">
          <h1 className="section-title">About Us</h1>

          <div className="about-content">
            <div className="about-text">
              <p>
                Ekime Digital Services is a leading digital agency based in Benin City, Edo State, Nigeria.
                We specialize in providing comprehensive digital solutions that drive results for businesses of
                all sizes.
              </p>
              <p>
                Our team of experienced professionals is dedicated to delivering high-quality services in
                copywriting, web and app development, and digital marketing. We work closely with our clients to
                understand their unique needs and develop customized strategies that help them achieve their goals.
              </p>
              <p>
                At Ekime Digital Services, we believe in the power of digital transformation to drive business
                growth. Our mission is to help businesses leverage the latest digital technologies and strategies
                to reach their target audience, increase engagement, and drive conversions.
              </p>
              <p>
                Whether you're looking to establish your online presence, enhance your digital marketing efforts,
                or develop a custom web or mobile application, we have the expertise and experience to help you
                succeed.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/about-image.jpg"
                alt="Passion Led Us Here"
                className="rounded-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="team-section">
            <h2>Meet Our Founder</h2>
            <div className="founder-spotlight">
              <div className="founder-card">
                <img
                  src="/founder.jpg"
                  alt="Felix Ujor"
                  className="founder-image"
                  loading="lazy"
                />
                <div className="founder-info">
                  <h3>Felix Ujor</h3>
                  <p className="founder-title">Founder &amp; CEO</p>
                  <p className="founder-description">
                    Felix is the visionary behind Ekime Digital Services. With years of experience in
                    digital marketing, web development, and business strategy, he leads our team in
                    delivering exceptional results for our clients. His passion for innovation and
                    commitment to excellence drives everything we do at Ekime Digital Services.
                  </p>
                  <div className="founder-contact">
                    <p>
                      <strong>Email:</strong> <a href="mailto:info@ekime.com.ng">info@ekime.com.ng</a>
                    </p>
                    <p>
                      <strong>Phone:</strong> <a href="tel:+2349124271058">+234 912 427 1058</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
