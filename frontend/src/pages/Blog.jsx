import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppWidget from '../components/WhatsAppWidget.jsx'
import { client, urlFor } from '../sanityClient'
import '../styles/Blog.css'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const query = `*[_type == "blogPost"] | order(publishedAt desc){
      _id, title, slug, excerpt, mainImage, publishedAt
    }`
    client.fetch(query).then(setPosts).catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <main className="blog-page">
        <h1>Blog</h1>
        <div className="blog-grid">
          {posts.map(p => (
            <article key={p._id} className="blog-card">
              <Link to={`/blog/${p.slug.current}`}>
                <img
                  src={urlFor(p.mainImage).width(600).height(300).url()}
                  alt={p.title}
                  loading="lazy"
                />
                <h2>{p.title}</h2>
                <p className="excerpt">{p.excerpt}</p>
                <p className="date">{new Date(p.publishedAt).toLocaleDateString()}</p>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
