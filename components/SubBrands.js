'use client'

import { useState } from 'react'
import { Coffee, Gem, Zap, Package, ShoppingBag, Truck, Building2 } from 'lucide-react'

const cards = [
  {
    Icon: Coffee,
    title: 'ABG Foods & Beverages',
    description:
      "Pakistan's trusted food and beverage distribution network and manufacturing operations.",
    tags: ['Distribution', 'Manufacturing', 'B2B & B2C'],
    linkLabel: 'Explore Sector →',
  },
  {
    Icon: Gem,
    title: 'ABG Mines & Minerals',
    description:
      'Premium natural stones including quartz, nephrite and marble — sourced directly, supplied globally.',
    tags: ['Quartz', 'Nephrite', 'Marble', 'Export'],
    linkLabel: 'Explore Sector →',
  },
  {
    Icon: Zap,
    title: 'ABG Energy',
    description:
      'Complete energy solutions including solar installations, LPG supply, generator services and energy auditing.',
    tags: ['Solar', 'LPG', 'Generator', 'Energy Audit'],
    linkLabel: 'Explore Sector →',
  },
  {
    Icon: Package,
    title: 'ABG Packaging',
    description:
      'Full range of disposable products from cups, plates and containers to bags, straws and diapers.',
    tags: ['Disposables', 'B2B', 'Bulk Supply'],
    linkLabel: 'Explore Sector →',
  },
  {
    Icon: ShoppingBag,
    title: 'ABG Consumer Products',
    description:
      'Wide range of household, personal care and FMCG products for everyday consumers across Pakistan.',
    tags: ['Household', 'Personal Care', 'FMCG'],
    linkLabel: 'Explore Sector →',
  },
  {
    Icon: Truck,
    title: 'ABG Logistics',
    description:
      'Nationwide trucking, warehousing, last mile delivery and cold chain logistics solutions.',
    tags: ['Trucking', 'Warehousing', 'Cold Chain'],
    linkLabel: 'Explore Sector →',
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
        padding: '40px 28px',
        minHeight: '400px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: '2px',
          backgroundColor: '#c8a96e',
          width: '100%',
          marginBottom: '24px',
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '8px',
          backgroundColor: 'rgba(255,255,255,0.08)',
          marginBottom: '20px',
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
          fontSize: '20px',
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
          margin: '0 0 20px',
          fontFamily: 'var(--font-inter)',
          flex: 1,
        }}
      >
        {card.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
        {card.tags.map((tag) => (
          <span
            key={tag}
            style={{
              backgroundColor: '#1a3a2a',
              color: '#c8a96e',
              border: '0.5px solid rgba(200,169,110,0.3)',
              fontSize: '11px',
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              padding: '3px 9px',
              borderRadius: '4px',
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
  )
}

export default function SubBrands() {
  const [ctaHover, setCtaHover] = useState(false)

  return (
    <section id="businesses" style={{ backgroundColor: '#e0d5c5', padding: '80px 40px' }}>
      <style>{`
        .abg-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .abg-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .abg-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── Section header ── */}
        <div style={{ textAlign: 'center' }}>
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
          className="abg-grid"
          style={{
            display: 'grid',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}

          {/* ── Future Venture card (same grid cell as the others) ── */}
          <div
            style={{
              backgroundColor: 'rgba(26,58,42,0.6)',
              border: '1px dashed rgba(200,169,110,0.45)',
              borderRadius: '12px',
              padding: '40px 28px',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
          {/* Top accent bar */}
          <div
            style={{
              height: '2px',
              backgroundColor: 'rgba(200,169,110,0.55)',
              width: '100%',
              marginBottom: '24px',
            }}
          />

          {/* Icon */}
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255,255,255,0.07)',
              marginBottom: '20px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Building2 size={24} color="rgba(200,169,110,0.7)" strokeWidth={1.5} />
          </div>

          {/* Badge */}
          <span
            style={{
              alignSelf: 'flex-start',
              backgroundColor: 'rgba(200,169,110,0.12)',
              color: '#c8a96e',
              fontSize: '10px',
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              padding: '3px 10px',
              borderRadius: '3px',
              marginBottom: '12px',
            }}
          >
            Future Venture
          </span>

          {/* Title */}
          <h3
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '20px',
              fontWeight: 500,
              color: 'rgba(250,247,242,0.75)',
              margin: '0 0 8px',
              lineHeight: 1.3,
            }}
          >
            Real Estate
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '13px',
              color: 'rgba(250,247,242,0.55)',
              lineHeight: 1.7,
              margin: 0,
              fontFamily: 'var(--font-inter)',
            }}
          >
            Residential and commercial real estate development across Pakistan.
          </p>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
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
