'use client';

import { useState } from 'react';
import { MapPin, Phone, Smartphone, Mail, Clock } from 'lucide-react';

const contactItems = [
  { Icon: MapPin,     value: 'Islamabad, Pakistan' },
  { Icon: Smartphone, value: '+92 331 555 1231' },
  { Icon: Phone,      value: '+92 937 55 1231' },
  { Icon: Mail,       value: 'info@ahmadbrothersgroup.com' },
  { Icon: Clock,      value: 'Monday – Saturday, 9:00 AM – 6:00 PM PKT' },
];

const sectors = [
  { label: 'Foods & Beverages' },
  { label: 'Mines & Minerals' },
  { label: 'New Ventures' },
];

const inputStyle = {
  background: '#f5ede0',
  border: '1px solid #c3b7a4',
  borderRadius: '6px',
  padding: '12px 16px',
  fontSize: '14px',
  color: '#2a1f0e',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
};

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    sector: '',
    message: '',
  });
  const [focused, setFocused] = useState('');
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = {
      name: e.target.name.value,
      company: e.target.company.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      sector: e.target.sector.value,
      message: e.target.message.value,
    }
    try {
      const response = await fetch('https://formspree.io/f/xwvdpnzq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const fieldStyle = (name) => ({
    ...inputStyle,
    border: focused === name ? '1px solid #c8a96e' : '1px solid #c3b7a4',
  });

  return (
    <section id="contact" style={{ background: '#e0d5c5', padding: '96px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', marginBottom: '56px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '12px', marginTop: 0 }}>
          Get in Touch
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#2a1f0e', margin: 0 }}>
          Contact Us
        </h2>
      </div>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: '45fr 55fr',
          gap: '60px',
          alignItems: 'start',
        }}
        className="contact-grid"
      >
        {/* LEFT COLUMN */}
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', color: '#2a1f0e', marginBottom: '24px', marginTop: 0 }}>
            Reach Us Directly
          </h2>

          {contactItems.map(({ Icon, value }, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '20px',
              }}
            >
              <Icon size={22} color="#1a3a2a" strokeWidth={1.75} style={{ flexShrink: 0 }} />
              <span style={{ color: '#2a1f0e', fontSize: '15px', fontWeight: 500 }}>
                {value}
              </span>
            </div>
          ))}

          <p style={{ color: '#2a1f0e', fontSize: '16px', fontWeight: 500, marginTop: '32px', marginBottom: '12px' }}>
            Our Sectors
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {sectors.map(({ label }) => (
              <span
                key={label}
                style={{
                  background: '#f5ede0',
                  color: '#1a3a2a',
                  border: '1px solid #1a3a2a',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 500,
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <form onSubmit={handleSubmit} style={{ background: '#1a3a2a', borderRadius: '12px', padding: '36px 32px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#faf7f2', marginBottom: '24px', marginTop: 0 }}>
            Send Us a Message
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <input
              name="name"
              placeholder="Full Name"
              value={form.fullName}
              onChange={set('fullName')}
              onFocus={() => setFocused('fullName')}
              onBlur={() => setFocused('')}
              style={fieldStyle('fullName')}
            />
            <input
              name="company"
              placeholder="Company Name"
              value={form.companyName}
              onChange={set('companyName')}
              onFocus={() => setFocused('companyName')}
              onBlur={() => setFocused('')}
              style={fieldStyle('companyName')}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={set('email')}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused('')}
              style={fieldStyle('email')}
            />
            <input
              name="phone"
              placeholder="Phone"
              type="tel"
              value={form.phone}
              onChange={set('phone')}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused('')}
              style={fieldStyle('phone')}
            />
          </div>

          <select
            name="sector"
            value={form.sector}
            onChange={set('sector')}
            onFocus={() => setFocused('sector')}
            onBlur={() => setFocused('')}
            style={{ ...fieldStyle('sector'), marginBottom: '16px', appearance: 'none' }}
          >
            <option value="">Select a sector</option>
            <option value="foods">Foods &amp; Beverages</option>
            <option value="mines">Mines &amp; Minerals</option>
            <option value="partnership">Partnership</option>
            <option value="general">General Inquiry</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={set('message')}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused('')}
            style={{ ...fieldStyle('message'), height: '120px', resize: 'vertical', marginBottom: '20px' }}
          />

          {status === 'success' && (
            <p style={{ color: '#c8a96e', fontSize: '14px', fontFamily: 'var(--font-inter)', marginBottom: '12px', textAlign: 'center' }}>
              Message sent! We&apos;ll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#f87171', fontSize: '14px', fontFamily: 'var(--font-inter)', marginBottom: '12px', textAlign: 'center' }}>
              Something went wrong. Please try again.
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? '#a89060' : '#c8a96e',
              color: '#1a3a2a',
              width: '100%',
              padding: '14px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '15px',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.8 : 1,
            }}
            onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#b8975e' }}
            onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = loading ? '#a89060' : '#c8a96e' }}
          >
            {loading ? 'Sending…' : 'Send Message'}
          </button>
        </form>

        <style>{`
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
