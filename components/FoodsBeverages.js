'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const distributionFeatures = [
  'Nationwide coverage across Pakistan',
  'Cold chain & dry goods distribution',
  'Retail & institutional supply',
  'Same day delivery in major cities',
]

const manufacturingFeatures = [
  'PSQCA & Halal certified production',
  'Private label & OEM available',
  'High capacity modern facility',
  'Strict quality control process',
]

const stats = [
  { value: '50+',  label: 'Product SKUs' },
  { value: '8',    label: 'Cities Covered' },
  { value: '200+', label: 'Retail Partners' },
  { value: '50+',  label: 'Years in Operation' },
]

function FeatureList({ items }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map((item) => (
        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <CheckCircle2
            size={16}
            color="#1a3a2a"
            strokeWidth={2}
            style={{ flexShrink: 0, marginTop: '2px' }}
          />
          <span
            style={{
              fontSize: '14px',
              color: '#5a4a35',
              fontFamily: 'var(--font-inter)',
              lineHeight: 1.6,
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function FoodsBeverages() {
  const [primaryHover, setPrimaryHover] = useState(false)
  const [secondaryHover, setSecondaryHover] = useState(false)

  return (
    <section id="foods" style={{ backgroundColor: '#e0d5c5', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── Section header (left aligned) ── */}
        <div style={{ marginBottom: '56px' }}>
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
              color: '#2a1f0e',
              margin: '0 0 12px',
              lineHeight: 1.2,
            }}
          >
            Foods &amp; Beverages
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: '#7a6a55',
              fontFamily: 'var(--font-inter)',
              margin: 0,
            }}
          >
            Distribution Network &amp; Manufacturing
          </p>
        </div>

        {/* ── Two column layout ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '0',
            marginBottom: '48px',
            border: '0.5px solid #c3b7a4',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#f5ede0',
            boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
          }}
        >
          {/* Left: Distribution */}
          <div
            style={{
              padding: '40px',
              borderRight: '1px solid #c3b7a4',
            }}
          >
            <p
              style={{
                fontSize: '11px',
                color: '#c8a96e',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                margin: '0 0 16px',
              }}
            >
              DISTRIBUTION
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '26px',
                fontWeight: 500,
                color: '#2a1f0e',
                margin: '0 0 16px',
                lineHeight: 1.3,
              }}
            >
              Nationwide Distribution Network
            </h3>

            <p
              style={{
                fontSize: '15px',
                color: '#7a6a55',
                lineHeight: 1.8,
                margin: '0 0 28px',
                fontFamily: 'var(--font-inter)',
              }}
            >
              We operate one of Pakistan's most reliable food and beverage distribution
              networks, connecting manufacturers with retailers, wholesalers, hotels,
              restaurants and institutions across the country.
            </p>

            <div style={{ marginBottom: '32px' }}>
              <FeatureList items={distributionFeatures} />
            </div>

            <a
              href="#contact"
              style={{
                display: 'inline-block',
                backgroundColor: primaryHover ? '#2d5a40' : '#1a3a2a',
                color: '#faf7f2',
                padding: '12px 28px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'var(--font-inter)',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
            >
              Become a Partner
            </a>
          </div>

          {/* Right: Manufacturing */}
          <div style={{ padding: '40px' }}>
            <p
              style={{
                fontSize: '11px',
                color: '#c8a96e',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                margin: '0 0 16px',
              }}
            >
              MANUFACTURING
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '26px',
                fontWeight: 500,
                color: '#2a1f0e',
                margin: '0 0 16px',
                lineHeight: 1.3,
              }}
            >
              In-House Production Facility
            </h3>

            <p
              style={{
                fontSize: '15px',
                color: '#7a6a55',
                lineHeight: 1.8,
                margin: '0 0 28px',
                fontFamily: 'var(--font-inter)',
              }}
            >
              Our state-of-the-art manufacturing facility produces high quality food and
              beverage products to international standards. We offer private label and OEM
              manufacturing for brands looking to scale.
            </p>

            <div style={{ marginBottom: '32px' }}>
              <FeatureList items={manufacturingFeatures} />
            </div>

            <a
              href="#contact"
              style={{
                display: 'inline-block',
                backgroundColor: secondaryHover ? '#1a3a2a' : 'transparent',
                color: secondaryHover ? '#faf7f2' : '#1a3a2a',
                padding: '12px 28px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'var(--font-inter)',
                textDecoration: 'none',
                border: '1px solid #1a3a2a',
                transition: 'background-color 0.2s, color 0.2s',
                boxSizing: 'border-box',
              }}
              onMouseEnter={() => setSecondaryHover(true)}
              onMouseLeave={() => setSecondaryHover(false)}
            >
              Request OEM Info
            </a>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div
          style={{
            backgroundColor: '#1a3a2a',
            borderRadius: '12px',
            padding: '32px 40px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                flex: '1 1 25%',
                minWidth: '120px',
                padding: '8px 20px',
                borderLeft: i > 0 ? '1px solid rgba(250,247,242,0.1)' : 'none',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '32px',
                  fontWeight: 600,
                  color: '#c8a96e',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'rgba(250,247,242,0.7)',
                  fontFamily: 'var(--font-inter)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
