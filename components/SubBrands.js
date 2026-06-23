'use client'

import { useState } from 'react'
import { Truck, Gem, Sparkles } from 'lucide-react'

const cards = [
  {
    accentColor: '#c8a96e',
    Icon: Truck,
    title: 'ABG Foods & Beverages',
    description:
      "Pakistan's trusted food and beverage distribution network and manufacturing operations, serving retailers, wholesalers and institutions nationwide.",
    tags: ['Distribution', 'Manufacturing', 'B2B & B2C'],
    linkLabel: 'Explore Sector →',
  },
  {
    accentColor: '#c8a96e',
    Icon: Gem,
    title: 'ABG Mines & Minerals',
    description:
      'Premium natural stones including quartz, nephrite and other minerals — sourced directly, supplied globally. Trusted by builders and traders across Pakistan and beyond.',
    tags: ['Quartz', 'Nephrite', 'Natural Marble', 'Export Ready'],
    linkLabel: 'Explore Sector →',
  },
  {
    accentColor: 'rgba(255,255,255,0.3)',
    Icon: Sparkles,
    title: 'Expanding Horizons',
    description:
      "Ahmad Brothers Group is actively exploring new industries and opportunities. Our vision extends beyond today — building tomorrow's leading businesses.",
    tags: ['Coming Soon', 'New Ventures'],
    linkLabel: 'Our Vision →',
  },
]

function Card({ card }) {
  const { Icon } = card
  const [hovered, setHovered] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#2d5a40' : '#1a3a2a',
        border: '0.5px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 16px 40px rgba(0,0,0,0.25)'
          : '0 4px 16px rgba(0,0,0,0.12)',
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: '3px', backgroundColor: card.accentColor, width: '100%' }} />

      {/* Card body */}
      <div style={{ padding: '32px 32px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Icon */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255,255,255,0.08)',
            marginBottom: '24px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon size={24} color="#c8a96e" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '22px',
            fontWeight: 500,
            color: '#faf7f2',
            margin: '0 0 14px',
            lineHeight: 1.3,
          }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '14px',
            color: 'rgba(250,247,242,0.65)',
            lineHeight: 1.75,
            margin: '0 0 24px',
            fontFamily: 'var(--font-inter)',
            flex: 1,
          }}
        >
          {card.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
          {card.tags.map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: 'transparent',
                color: '#c8a96e',
                border: '0.5px solid rgba(200,169,110,0.3)',
                fontSize: '11px',
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                padding: '4px 10px',
                borderRadius: '100px',
                letterSpacing: '0.2px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href="#"
          style={{
            fontSize: '13px',
            fontWeight: 500,
            fontFamily: 'var(--font-inter)',
            color: linkHovered ? '#faf7f2' : '#c8a96e',
            textDecoration: 'none',
            transition: 'color 0.2s',
            letterSpacing: '0.2px',
          }}
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
        >
          {card.linkLabel}
        </a>
      </div>
    </div>
  )
}

export default function SubBrands() {
  const [ctaHover, setCtaHover] = useState(false)

  return (
    <section id="businesses" style={{ backgroundColor: '#e0d5c5', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── Section header ── */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p
            style={{
              fontSize: '13px',
              color: '#1a3a2a',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              margin: '0 0 14px',
            }}
          >
            OUR BUSINESSES
          </p>

          <div
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: '#c8a96e',
              margin: '0 auto 28px',
            }}
          />

          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '38px',
              fontWeight: 500,
              color: '#2a1f0e',
              margin: '0 0 18px',
              lineHeight: 1.25,
            }}
          >
            Built for Excellence, Designed to Last
          </h2>

          <p
            style={{
              fontSize: '15px',
              color: '#7a6a55',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8,
              fontFamily: 'var(--font-inter)',
            }}
          >
            Ahmad Brothers Group operates across multiple high-growth industries, bringing the
            same commitment to quality and excellence to every sector.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            marginBottom: '64px',
          }}
        >
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '15px',
              color: '#7a6a55',
              fontFamily: 'var(--font-inter)',
              margin: '0 0 20px',
            }}
          >
            Interested in partnering with us?
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              backgroundColor: ctaHover ? '#2d5a40' : '#1a3a2a',
              color: '#faf7f2',
              padding: '12px 32px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'var(--font-inter)',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  )
}
