'use client'

import { useState } from 'react'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

function SocialIcon({ label, href, icon }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: '1px solid rgba(250,247,242,0.15)',
        backgroundColor: hovered ? 'rgba(200,169,110,0.15)' : 'transparent',
        color: hovered ? '#c8a96e' : 'rgba(250,247,242,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
        borderColor: hovered ? 'rgba(200,169,110,0.4)' : 'rgba(250,247,242,0.15)',
        flexShrink: 0,
      }}
    >
      {icon}
    </a>
  )
}

const navLinks = [
  { label: 'Home',       href: '#' },
  { label: 'About Us',   href: '#about' },
  { label: 'Businesses', href: '#businesses' },
  { label: 'Contact',    href: '#contact' },
]

const sectors = [
  { label: 'ABG Foods & Beverages', href: '#foods' },
  { label: 'ABG Mines & Minerals',  href: '#mines' },
  { label: 'New Ventures',          href: '#', muted: true },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a3a2a', color: '#faf7f2' }}>

      {/* ── Main body ── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '72px 40px 48px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '60px',
        }}
        className="footer-grid"
      >

        {/* Brand column */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '20px',
              fontWeight: 600,
              color: '#faf7f2',
              margin: '0 0 12px',
              letterSpacing: '-0.02em',
            }}
          >
            Ahmad Brothers Group
          </p>
          <div style={{ width: '36px', height: '1px', backgroundColor: '#c8a96e', marginBottom: '20px' }} />
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(250,247,242,0.6)',
              lineHeight: 1.8,
              margin: '0 0 28px',
              fontFamily: 'var(--font-inter)',
              maxWidth: '320px',
            }}
          >
            A diversified conglomerate headquartered in Islamabad, delivering excellence
            across food &amp; beverage distribution, manufacturing, and natural stone mining
            since 1975.
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(250,247,242,0.35)', fontFamily: 'var(--font-inter)', margin: '0 0 24px' }}>
            Islamabad, Pakistan
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {socialLinks.map(({ label, href, icon }) => (
              <SocialIcon key={label} label={label} href={href} icon={icon} />
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p
            style={{
              fontSize: '11px',
              color: '#c8a96e',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              margin: '0 0 20px',
            }}
          >
            Quick Links
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  style={{
                    fontSize: '14px',
                    color: 'rgba(250,247,242,0.65)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-inter)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#c8a96e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.65)')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <p
            style={{
              fontSize: '11px',
              color: '#c8a96e',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              margin: '0 0 20px',
            }}
          >
            Our Sectors
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {sectors.map(({ label, href, muted }) => (
              <li key={label}>
                <a
                  href={href}
                  style={{
                    fontSize: '14px',
                    color: muted ? 'rgba(250,247,242,0.3)' : 'rgba(250,247,242,0.65)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-inter)',
                    transition: 'color 0.2s',
                    cursor: muted ? 'default' : 'pointer',
                  }}
                  onMouseEnter={(e) => { if (!muted) e.currentTarget.style.color = '#c8a96e' }}
                  onMouseLeave={(e) => { if (!muted) e.currentTarget.style.color = 'rgba(250,247,242,0.65)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(250,247,242,0.08)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '24px 40px',
            display: 'flex',
            alignItems: 'center',
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
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>

    </footer>
  )
}
