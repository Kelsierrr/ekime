// src/components/ContactForm.jsx
import { useState, useEffect } from 'react';


export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', hp: '' });
  const [status, setStatus] = useState(''); // '', 'sending', 'sent', 'error'
  useEffect(() => {
      if (status === 'sent' || status === 'error') {
        const timer = setTimeout(() => setStatus(''), 3000);
        return () => clearTimeout(timer);
      }
    }, [status]);
  
  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '', hp: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' }}
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' }}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc', resize: 'vertical' }}
      />
      {/* honeypot field (hidden from real users) */}
      <input
        name="hp"
        value={form.hp}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex="-1"
        autoComplete="off"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          background: 'var(--color-lime)',
          border: 'none',
          padding: '0.85rem 1.5rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '600',
        }}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'sent' && <p style={{ color: 'green' }}>Message sent! Thank you.</p>}
      {status === 'sending' && <p style={{ color: 'blue' }}>Your message will be sent within 30 seconds, please wait...</p>}
      {status === 'error' && <p style={{ color: 'red' }}>Something went wrong. Try again.</p>}
    </form>
  );
}
