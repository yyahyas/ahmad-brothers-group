'use client'

import { useState } from 'react'
import Image from 'next/image'

const stones = [
  {
    imageSrc: '/images/quartz.png',
    imageAlt: 'White and Rose Quartz',
    title: 'White & Rose Quartz',
    origin: 'Origin: Northern Pakistan',
    description:
      'High purity quartz crystals available in white, rose and smoky variants. Used in countertops, electronics and decorative applications worldwide.',
    tags: ['Industrial', 'Decorative', 'Export'],
  },
  {
    imageSrc: '/images/nephrite.png',
    imageAlt: 'Nephrite Jade',
    title: 'Nephrite Jade',
    origin: 'Origin: Gilgit-Baltistan, Pakistan',
    description:
      'Authentic nephrite jade of exceptional quality, prized for its deep green color and cultural significance. Sought after by collectors and craftsmen globally.',
    tags: ['Premium', 'Collectible', 'Export'],
  },
  {
    imageSrc: '/images/marble.png',
    imageAlt: 'Natural Marble',
    title: 'Natural Marble',
    origin: 'Origin: Balochistan, Pakistan',
    description:
      'Premium white and grey marble with unique natural veining patterns. Ideal for flooring, wall cladding, countertops and architectural projects.',
    tags: ['Construction', 'Luxury', 'Bulk Supply'],
  },
]

function StoneCard({ stone }) {
  const [hovered, setHovered] = useState(false)
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#cfc4b4',
        border: '0.5px solid #c3b7a4',
        borderRadius: '12px',
        padding: '32px',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{position:'relative', height:'160px', borderRadius:'8px', overflow:'hidden', marginBottom:'24px'}}>
        <Image src={stone.imageSrc} alt={stone.imageAlt} fill style={{objectFit:'cover'}} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '22px',
          fontWeight: 500,
          color: '#2a1f0e',
          margin: '0 0 8px',
          lineHeight: 1.3,
        }}
      >
        {stone.title}
      </h3>

      {/* Origin */}
      <p
        style={{
          fontSize: '12px',
          color: '#1a3a2a',
          fontFamily: 'var(--font-inter)',
          margin: '0 0 14px',
          letterSpacing: '0.3px',
        }}
      >
        {stone.origin}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: '14px',
          color: '#7a6a55',
          lineHeight: 1.8,
          margin: '0 0 20px',
          fontFamily: 'var(--font-inter)',
        }}
      >
        {stone.description}
      </p>

      {/* Button */}
      <a
        href="#contact"
        style={{
          display: 'inline-block',
          padding: '10px 24px',
          borderRadius: '4px',
          fontSize: '13px',
          fontWeight: 500,
          fontFamily: 'var(--font-inter)',
          border: '1px solid #1a3a2a',
          color: btnHovered ? '#faf7f2' : '#1a3a2a',
          backgroundColor: btnHovered ? '#1a3a2a' : 'transparent',
          textDecoration: 'none',
          transition: 'background-color 0.2s, color 0.2s',
          boxSizing: 'border-box',
        }}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
      >
        Request Sample
      </a>
    </div>
  )
}

function ComingSoonCard() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div
      style={{
        backgroundColor: 'rgba(250,247,242,0.03)',
        border: '1px dashed rgba(250,247,242,0.15)',
        borderRadius: '12px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '360px',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '22px',
          fontWeight: 500,
          color: 'rgba(250,247,242,0.4)',
          margin: '0 0 16px',
          lineHeight: 1.3,
        }}
      >
        More Stones Coming
      </h3>

      <p
        style={{
          fontSize: '14px',
          color: 'rgba(250,247,242,0.35)',
          fontFamily: 'var(--font-inter)',
          lineHeight: 1.8,
          margin: '0 0 28px',
          maxWidth: '240px',
        }}
      >
        We are continuously expanding our minerals portfolio. Contact us to inquire about specific stones.
      </p>

      <a
        href="#contact"
        style={{
          display: 'inline-block',
          padding: '10px 24px',
          borderRadius: '4px',
          fontSize: '13px',
          fontWeight: 500,
          fontFamily: 'var(--font-inter)',
          border: '1px solid #c8a96e',
          color: btnHovered ? '#1a3a2a' : '#c8a96e',
          backgroundColor: btnHovered ? '#c8a96e' : 'transparent',
          textDecoration: 'none',
          transition: 'background-color 0.2s, color 0.2s',
          boxSizing: 'border-box',
        }}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
      >
        Make an Inquiry
      </a>
    </div>
  )
}

export default function MinesMinerals() {
  return (
    <section id="mines" style={{ backgroundColor: '#1a3a2a', padding: '80px 40px', width: '100%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── Section header ── */}
        <div style={{ marginBottom: '50px' }}>
          <div
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: '#c8a96e',
              marginBottom: '24px',
            }}
          />

          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '42px',
              fontWeight: 500,
              color: '#faf7f2',
              margin: '0 0 12px',
              lineHeight: 1.2,
            }}
          >
            Mines &amp; Minerals
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: 'rgba(250,247,242,0.65)',
              fontFamily: 'var(--font-inter)',
              margin: 0,
            }}
          >
            Premium Natural Stones, Direct From Source
          </p>
        </div>

        {/* ── Stone products grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {stones.map((stone) => (
            <StoneCard key={stone.title} stone={stone} />
          ))}
          <ComingSoonCard />
        </div>

        {/* ── Bottom CTA bar ── */}
        <CtaBar />

      </div>
    </section>
  )
}

function CtaBar() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: '12px',
        padding: '32px 40px',
        marginTop: '60px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
      }}
    >
      {/* Left */}
      <div style={{ flex: '1 1 300px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            fontWeight: 500,
            color: '#c8a96e',
            margin: '0 0 10px',
            lineHeight: 1.3,
          }}
        >
          Export Ready
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: 'rgba(250,247,242,0.65)',
            fontFamily: 'var(--font-inter)',
            lineHeight: 1.8,
            margin: 0,
            maxWidth: '480px',
          }}
        >
          We ship globally. All stones come with quality certificates and full documentation
          for international trade.
        </p>
      </div>

      {/* Right */}
      <a
        href="#contact"
        style={{
          display: 'inline-block',
          flexShrink: 0,
          backgroundColor: btnHovered ? '#b8975e' : '#c8a96e',
          color: '#1a3a2a',
          padding: '14px 32px',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'var(--font-inter)',
          textDecoration: 'none',
          transition: 'background-color 0.2s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
      >
        Get Export Quote
      </a>
    </div>
  )
}
