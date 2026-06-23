'use client'

import { useState } from 'react'

const stats = [
  { value: '3+',   label: 'Business Sectors' },
  { value: '50+',   label: 'Years of Excellence' },
  { value: '8000+', label: 'Clients Served' },
  { value: 'PK',   label: 'Based in Pakistan' },
]

export default function Hero() {
  const [primaryHover, setPrimaryHover]     = useState(false)
  const [secondaryHover, setSecondaryHover] = useState(false)

  return (
    <section
      id="home"
      style={{
        width: '100%',
        minHeight: '90vh',
        backgroundColor: '#1a3a2a',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Main content ── */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 24px 60px',
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: '11px',
            color: '#c8a96e',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-inter)',
            fontWeight: 500,
            margin: '0 0 14px',
          }}
        >
          Ahmad Brothers Group
        </p>

        {/* Gold rule */}
        <div
          style={{
            width: '40px',
            height: '1px',
            backgroundColor: '#c8a96e',
            marginBottom: '36px',
          }}
        />

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 500,
            lineHeight: 1.2,
            color: '#faf7f2',
            margin: '0 0 28px',
            fontSize: 'clamp(36px, 5.5vw, 56px)',
          }}
        >
          Delivering Excellence
          <br />
          Across Industries
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: 'rgba(250, 247, 242, 0.65)',
            fontSize: '16px',
            maxWidth: '480px',
            lineHeight: 1.8,
            margin: '0 0 44px',
            fontFamily: 'var(--font-inter)',
          }}
        >
          From food &amp; beverage distribution to premium natural stone mining —{' '}
          Ahmad Brothers Group builds businesses that stand the test of time.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href="#businesses"
            style={{
              padding: '12px 28px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'var(--font-inter)',
              backgroundColor: primaryHover ? '#b8975e' : '#c8a96e',
              color: '#1a3a2a',
              textDecoration: 'none',
              border: '1px solid transparent',
              transition: 'background-color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
          >
            Explore Our Businesses
          </a>

          <a
            href="#contact"
            style={{
              padding: '12px 28px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'var(--font-inter)',
              backgroundColor: 'transparent',
              background: 'none',
              color: '#faf7f2',
              textDecoration: 'none',
              display: 'inline-block',
              border: `1px solid ${secondaryHover ? 'rgba(250,247,242,1)' : 'rgba(250,247,242,0.5)'}`,
              transition: 'border-color 0.2s',
              cursor: 'pointer',
              outline: 'none',
              boxSizing: 'border-box',
            }}
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              flex: '1 1 25%',
              minWidth: '120px',
              padding: '28px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              borderLeft: i > 0 ? '1px solid rgba(250,247,242,0.1)' : 'none',
              boxSizing: 'border-box',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '22px',
                fontWeight: 600,
                color: '#c8a96e',
                lineHeight: 1,
                display: 'block',
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: '12px',
                color: 'rgba(250,247,242,0.6)',
                fontFamily: 'var(--font-inter)',
                letterSpacing: '0.4px',
                textAlign: 'center',
                display: 'block',
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
