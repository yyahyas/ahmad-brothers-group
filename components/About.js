'use client'

import { useState } from 'react'

const values = [
  {
    num: '01',
    title: 'Integrity',
    text: 'We operate with full transparency and honesty in every business relationship.',
  },
  {
    num: '02',
    title: 'Quality',
    text: 'Every product and service we deliver meets the highest standards of excellence.',
  },
  {
    num: '03',
    title: 'Innovation',
    text: 'We continuously evolve our operations to stay ahead in every industry we enter.',
  },
  {
    num: '04',
    title: 'Growth',
    text: 'We are committed to growing our business while creating value for all stakeholders.',
  },
]

const infoRows = [
  { label: 'Established',   value: '1975' },
  { label: 'Headquarters',  value: 'Islamabad, Pakistan' },
  { label: 'Sectors',       value: 'Food & Beverages, Minerals' },
  { label: 'Reach',         value: 'Nationwide + International' },
  { label: 'Status',        value: 'Actively Expanding' },
]

export default function About() {
  const [ctaHover, setCtaHover] = useState(false)

  return (
    <section id="about" style={{ backgroundColor: '#cfc4b4', padding: '80px 40px', width: '100%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── Section header (centered) ── */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            ABOUT US
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
              fontSize: '42px',
              fontWeight: 500,
              color: '#2a1f0e',
              margin: '0 0 16px',
              lineHeight: 1.2,
            }}
          >
            A Legacy of Excellence
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: '#7a6a55',
              fontFamily: 'var(--font-inter)',
              margin: 0,
            }}
          >
            Built on trust, driven by integrity, committed to growth.
          </p>
        </div>

        {/* ── Two column layout ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* ── Left column (60%) ── */}
          <div style={{ gridColumn: 'span 1' }}>
            <h3
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '26px',
                fontWeight: 500,
                color: '#2a1f0e',
                margin: '0 0 20px',
                lineHeight: 1.3,
              }}
            >
              Who We Are
            </h3>

            <p
              style={{
                fontSize: '15px',
                color: '#7a6a55',
                lineHeight: 1.9,
                margin: '0 0 20px',
                fontFamily: 'var(--font-inter)',
              }}
            >
              Ahmad Brothers Group is a diversified conglomerate headquartered in Islamabad,
              Pakistan. We operate across high-growth industries including food &amp; beverage
              distribution, manufacturing, and natural stone mining.
            </p>

            <p
              style={{
                fontSize: '15px',
                color: '#7a6a55',
                lineHeight: 1.9,
                margin: '0 0 36px',
                fontFamily: 'var(--font-inter)',
              }}
            >
              Founded on the principles of integrity, quality and long-term value creation, we
              have built lasting relationships with clients, partners and communities across
              Pakistan and internationally.
            </p>

            {/* Values 2x2 grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              {values.map((v) => (
                <div
                  key={v.num}
                  style={{
                    backgroundColor: '#1a3a2a',
                    border: '0.5px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '20px',
                  }}
                >
                  {/* Circle */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(200,169,110,0.15)',
                      border: '1px solid rgba(200,169,110,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#c8a96e',
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      {v.num}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#faf7f2',
                      margin: '0 0 6px',
                    }}
                  >
                    {v.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(250,247,242,0.65)',
                      lineHeight: 1.6,
                      margin: 0,
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column (40%) ── */}
          <div>
            <div
              style={{
                backgroundColor: '#1a3a2a',
                borderRadius: '12px',
                padding: '36px 32px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '22px',
                  fontWeight: 500,
                  color: '#faf7f2',
                  margin: '0 0 12px',
                  lineHeight: 1.3,
                }}
              >
                Ahmad Brothers Group
              </h3>

              {/* Gold line */}
              <div
                style={{
                  width: '40px',
                  height: '1px',
                  backgroundColor: '#c8a96e',
                  margin: '12px 0 20px',
                }}
              />

              {/* Info rows */}
              <div>
                {infoRows.map((row, i) => (
                  <div
                    key={row.label}
                    style={{
                      padding: '14px 0',
                      borderTop: i > 0 ? '1px solid rgba(250,247,242,0.1)' : 'none',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11px',
                        color: '#c8a96e',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-inter)',
                        marginBottom: '4px',
                      }}
                    >
                      {row.label}
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        color: '#faf7f2',
                        fontWeight: 500,
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(250,247,242,0.1)',
                }}
              >
                <p
                  style={{
                    fontSize: '13px',
                    color: 'rgba(250,247,242,0.65)',
                    fontFamily: 'var(--font-inter)',
                    margin: '0 0 0',
                  }}
                >
                  Interested in working with us?
                </p>

                <a
                  href="#contact"
                  style={{
                    display: 'block',
                    marginTop: '20px',
                    backgroundColor: ctaHover ? '#b8975e' : '#c8a96e',
                    color: '#1a3a2a',
                    padding: '12px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-inter)',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={() => setCtaHover(true)}
                  onMouseLeave={() => setCtaHover(false)}
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
