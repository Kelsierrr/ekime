// src/components/AdSlot.jsx
import { useEffect } from 'react';

export default function AdSlot({ client, slot, test=false }) {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', minHeight: '250px', margin: '1.5rem 0' }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
      {...(test ? { 'data-adtest': 'on' } : {})}
    />
  );
}
