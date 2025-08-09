// src/pages/Portfolio.jsx
import React, { useState, useEffect } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppWidget from '../components/WhatsAppWidget.jsx'
import { client, urlFor } from '../sanityClient'
import '../styles/Portfolio.css'

export default function Portfolio() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const query = `*[_type == "portfolioItem"] | order(publishedAt desc){
      _id, title, description, mainImage, projectUrl
    }`
    client.fetch(query).then(setItems).catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <main className="portfolio-page">
        <h1>Portfolio</h1>
        <p className="subtitle">
          A showcase of our recent projects—click any card to view the live site.
        </p>

        <div className="portfolio-grid container">
          {items.map(item => (
            <article key={item._id} className="portfolio-card">
              <a
                href={item.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <img
                  src={urlFor(item.mainImage).width(600).height(360).url()}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="card-content">
                  <h2>{item.title}</h2>
                  <p className="desc">{item.description}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
