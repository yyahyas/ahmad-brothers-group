'use client'

import { useState } from 'react'

const businesses = [
  { label: 'Foods & Beverages',  href: '#foods' },
  { label: 'Manufacturing',      href: '#foods' },
  { label: 'Mines & Minerals',   href: '#mines' },
  { label: 'Expanding Horizons', href: '#', muted: true },
]

const company = [
  { label: 'About Us',       href: '#about' },
  { label: 'Our Vision',     href: '#about' },
  { label: 'Certifications', href: '#' },
  { label: 'Careers',        href: '#' },
  { label: 'News & Updates', href: '#' },
]

function FooterLink({ label, href, muted }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        fontSize: '13px',
        color: hovered && !muted ? '#faf7f2' : 'rgba(250,247,242,0.6)',
        textDecoration: 'none',
        marginBottom: '10px',
        fontFamily: 'var(--font-inter)',
        cursor: muted ? 'default' : 'pointer',
        transition: 'color 0.2s',
      }}
    >
      {label}
    </a>
  )
}

function ColHeading({ children }) {
  return (
    <p
      style={{
        fontSize: '12px',
        color: '#c8a96e',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        fontFamily: 'var(--font-inter)',
        fontWeight: 600,
        margin: '0 0 16px',
      }}
    >
      {children}
    </p>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a3a2a', padding: '60px 40px 30px', width: '100%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── 4-column top grid ── */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
          }}
        >

          {/* Column 1 — Brand */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '20px',
                fontWeight: 500,
                color: '#faf7f2',
                margin: '0 0 12px',
              }}
            >
              Ahmad Brothers Group
            </p>
            <div style={{ width: '30px', height: '1px', backgroundColor: '#c8a96e', margin: '12px 0' }} />
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(250,247,242,0.6)',
                lineHeight: 1.7,
                fontFamily: 'var(--font-inter)',
                margin: 0,
              }}
            >
              Delivering Excellence Across Industries
            </p>
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(250,247,242,0.5)',
                fontFamily: 'var(--font-inter)',
                marginTop: '12px',
                marginBottom: 0,
              }}
            >
              Islamabad, Pakistan
            </p>
          </div>

          {/* Column 2 — Our Businesses */}
          <div>
            <ColHeading>Our Businesses</ColHeading>
            {businesses.map(({ label, href, muted }) => (
              <FooterLink key={label} label={label} href={href} muted={muted} />
            ))}
          </div>

          {/* Column 3 — Company */}
          <div>
            <ColHeading>Company</ColHeading>
            {company.map(({ label, href }) => (
              <FooterLink key={label} label={label} href={href} />
            ))}
          </div>

          {/* Column 4 — Contact */}
          <div>
            <ColHeading>Get In Touch</ColHeading>
            <p style={{ fontSize: '13px', color: 'rgba(250,247,242,0.6)', fontFamily: 'var(--font-inter)', margin: '0 0 10px' }}>
              info@ahmadbrothersgroup.com
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(250,247,242,0.6)', fontFamily: 'var(--font-inter)', margin: '0 0 10px' }}>
              +92 331 555 1231
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(250,247,242,0.6)', fontFamily: 'var(--font-inter)', margin: '0 0 10px' }}>
              +92 937 55 1231
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(250,247,242,0.5)', fontFamily: 'var(--font-inter)', marginTop: '8px', marginBottom: 0 }}>
              Mon–Sat, 9AM–6PM PKT
            </p>
          </div>

        </div>

        {/* ── Divider ── */}
        <div style={{ marginTop: '40px', borderTop: '1px solid rgba(250,247,242,0.1)' }} />

        {/* ── Bottom bar ── */}
        <div
          style={{
            padding: '20px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(250,247,242,0.35)', fontFamily: 'var(--font-inter)', margin: 0 }}>
            © {new Date().getFullYear()} Ahmad Brothers Group. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(250,247,242,0.35)', fontFamily: 'var(--font-inter)', margin: 0 }}>
            Islamabad · Est. 1975
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
