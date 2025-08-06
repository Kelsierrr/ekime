import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppWidget from '../components/WhatsAppWidget.jsx'
import { client, urlFor } from '../sanityClient'
import '../styles/BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const query = `*[_type == "blogPost" && slug.current == $slug][0]{
      title, mainImage, publishedAt, body
    }`
    client.fetch(query, { slug }).then(setPost).catch(console.error)
  }, [slug])

  if (!post) return <p>Loading…</p>
  return (
    <>
      <Header />
      <article className="blog-post container">
        <h1>{post.title}</h1>
        <p className="date">{new Date(post.publishedAt).toLocaleDateString()}</p>
        <img
          src={urlFor(post.mainImage).width(1200).url()}
          alt={post.title}
          className="feature-image"
        />
        <div className="body">
          <PortableText value={post.body} />
        </div>
      </article>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
