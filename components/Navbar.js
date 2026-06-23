'use client'

import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  {
    label: 'Our Businesses',
    href: '#businesses',
    dropdown: [
      { label: 'ABG Foods & Beverages', href: '#foods' },
      { label: 'ABG Mines & Minerals', href: '#minerals' },
      { label: 'Coming Soon', href: '#businesses', muted: true },
    ],
  },
  { label: 'Products', href: '#foods' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const closeTimer = useRef(null)

  const openDropdown = () => {
    clearTimeout(closeTimer.current)
    setDropdownOpen(true)
  }

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#e0d5c5',
        borderBottom: '1px solid #c3b7a4',
        boxShadow: scrolled ? '0 2px 16px rgba(42,31,14,0.08)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Main bar */}
      <div
        style={{
          width: '100%',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
          boxSizing: 'border-box',
        }}
      >
        {/* Left: Brand */}
        <div style={{ flexShrink: 0 }}>
          <span
            style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 600,
              fontSize: '20px',
              color: '#2a1f0e',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            Ahmad Brothers Group
          </span>
        </div>

        {/* Center: Desktop nav links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: '32px' }}
        >
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                style={{ position: 'relative' }}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '15px',
                    color: dropdownOpen ? '#1a3a2a' : '#2a1f0e',
                    fontWeight: 500,
                    fontFamily: 'var(--font-inter)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                  <svg
                    width="11" height="11" viewBox="0 0 12 12" fill="none"
                    style={{
                      transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                    }}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Dropdown — always rendered, visibility toggled via opacity */}
                <div
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#e0d5c5',
                    border: '1px solid #c3b7a4',
                    borderRadius: '8px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    minWidth: '220px',
                    padding: '8px 0',
                    zIndex: 50,
                    opacity: dropdownOpen ? 1 : 0,
                    visibility: dropdownOpen ? 'visible' : 'hidden',
                    transition: 'opacity 0.15s ease, visibility 0.15s ease',
                    pointerEvents: dropdownOpen ? 'auto' : 'none',
                  }}
                >
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      style={{
                        display: 'block',
                        padding: '12px 20px',
                        fontSize: '14px',
                        color: item.muted ? '#b0a090' : '#2a1f0e',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-inter)',
                        cursor: 'pointer',
                        transition: 'color 0.15s, background-color 0.15s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#1a3a2a'
                        e.currentTarget.style.backgroundColor = '#cfc4b4'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = item.muted ? '#b0a090' : '#2a1f0e'
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#2a1f0e',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-inter)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#1a3a2a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#2a1f0e')}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Right: CTA + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
          <a
            href="#contact"
            className="hidden md:inline-block"
            style={{
              backgroundColor: '#1a3a2a',
              color: '#faf7f2',
              padding: '10px 22px',
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: 500,
              fontFamily: 'var(--font-inter)',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d5a40')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1a3a2a')}
          >
            Get in Touch
          </a>

          {/* Hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: '#2a1f0e',
              alignItems: 'center',
            }}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: '#e0d5c5',
            borderTop: '1px solid #c3b7a4',
            padding: '8px 24px 24px',
          }}
        >
          {navLinks.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                style={{
                  display: 'block',
                  padding: '13px 0',
                  fontSize: '15px',
                  color: '#2a1f0e',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-inter)',
                  borderBottom: '1px solid #c3b7a4',
                  fontWeight: 500,
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
              {link.dropdown && (
                <div style={{ paddingLeft: '16px', backgroundColor: '#cfc4b4' }}>
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      style={{
                        display: 'block',
                        padding: '11px 0',
                        fontSize: '13px',
                        color: item.muted ? '#b0a090' : '#7a6a55',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-inter)',
                        borderBottom: '1px solid #c3b7a4',
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="#contact"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              backgroundColor: '#1a3a2a',
              color: '#faf7f2',
              padding: '12px 24px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
              fontFamily: 'var(--font-inter)',
            }}
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  )
}
