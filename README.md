# Ahmad Brothers Group — Corporate Website

Marketing website for **Ahmad Brothers Group (ABG)**, a diversified Pakistani conglomerate based in Islamabad and established in 1975.

> **Delivering Excellence Across Industries**

The site presents the group's business sectors to B2B buyers (wholesalers, retailers, international importers) and B2C customers, with a particular focus on mineral exports.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Page Structure](#page-structure)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Design System](#design-system)
- [Contact Form](#contact-form)
- [Deployment](#deployment)
- [Content Updates](#content-updates)
- [Roadmap](#roadmap)

---

## Overview

| | |
|---|---|
| **Company** | Ahmad Brothers Group (ABG) |
| **Location** | Islamabad, Pakistan |
| **Established** | 1975 |
| **Audience** | B2B and B2C, Pakistan and international |
| **Style** | Premium corporate, clean, minimal. Emerald green and warm cream, with gold accents |

### Business sectors

The sector grid on the home page lists:

1. **ABG Foods & Beverages**: distribution network and manufacturing
2. **ABG Mines & Minerals**: natural stones (quartz, nephrite, marble) for export
3. **ABG Energy**: solar, LPG, generator services, energy auditing
4. **ABG Packaging**: disposable products, bulk supply
5. **ABG Consumer Products**: household, personal care, FMCG
6. **ABG Logistics**: trucking, warehousing, last-mile delivery, cold chain

Foods & Beverages and Mines & Minerals also have dedicated sections. Further sectors are marked as coming soon.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/postcss`), plus inline styles in components |
| Icons | [lucide-react](https://lucide.dev) |
| Fonts | Playfair Display (headings) and Inter (body), loaded with `next/font/google` |
| Forms | [Formspree](https://formspree.io) |
| Linting | ESLint 9 with `eslint-config-next` |
| Hosting | Vercel |

> **Note:** This version of Next.js has breaking changes from earlier releases. Check `node_modules/next/dist/docs/` before changing framework-level code (see `AGENTS.md`).

---

## Page Structure

The site is a single-page layout with smooth-scroll anchor navigation. `app/page.js` composes the sections in this order:

| Section | Anchor | Component |
|---|---|---|
| Navigation bar | n/a | `Navbar.js` |
| Hero | `#home` | `Hero.js` |
| Our Businesses (sector grid) | `#businesses` | `SubBrands.js` |
| Foods & Beverages | `#foods` | `FoodsBeverages.js` |
| Mines & Minerals | `#minerals` | `MinesMinerals.js` |
| About Us | `#about` | `About.js` |
| Contact | `#contact` | `Contact.js` |
| Footer (4-column) | n/a | `Footer.js` |

---

## Project Structure

```
ahmad-brothers-group/
├── app/
│   ├── layout.js          # Root layout, fonts, site metadata
│   ├── page.js            # Home page, composes all sections
│   ├── globals.css        # Global styles, Tailwind import
│   └── favicon.ico
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── SubBrands.js       # Sector grid
│   ├── FoodsBeverages.js
│   ├── MinesMinerals.js
│   ├── About.js
│   ├── Contact.js         # Contact form (Formspree)
│   └── Footer.js
├── public/
│   └── images/            # marble.png, nephrite.png, quartz.png
├── AGENTS.md              # Notes for AI coding agents
├── CLAUDE.md              # Project brief: brand, colors, audience, stack
├── next.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
├── jsconfig.json          # "@/" path alias
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 20.9 or later (required by Next.js 16)
- npm (a `package-lock.json` is included)

### Install and run

```bash
git clone https://github.com/yyahyas/ahmad-brothers-group.git
cd ahmad-brothers-group
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## Design System

Brand tokens from `CLAUDE.md`:

| Token | Hex | Usage |
|---|---|---|
| Primary Dark | `#1a3a2a` | Dark sections, headings |
| Primary Mid | `#2d5a40` | Secondary green |
| Accent Gold | `#c8a96e` | Highlights and CTAs |
| Background | `#e0d5c5` | Page background |
| Surface | `#cfc4b4` | Cards, alternating sections |
| Text Dark | `#2a1f0e` | Body text |
| Text Muted | `#7a6a55` | Secondary text |
| Border | `#c3b7a4` | Dividers and card borders |

**Principles:** light backgrounds throughout, sharp typography, generous whitespace, and gold reserved for emphasis and calls to action.

---

## Contact Form

The form in `components/Contact.js` posts to a Formspree endpoint with `fetch`. Submissions are delivered to the inbox configured in the Formspree dashboard.

To point the form at a different Formspree form, update the endpoint URL in `components/Contact.js`. To keep the endpoint out of source control, move it to an environment variable (for example `NEXT_PUBLIC_FORMSPREE_URL`) and set it in Vercel project settings. Formspree form IDs are public by design, so use Formspree's allowed-domains and spam-protection settings to limit abuse.

---

## Deployment

The target platform is [Vercel](https://vercel.com).

1. Import the GitHub repository in Vercel. The Next.js framework preset is detected automatically.
2. Use the default build settings (`npm run build`).
3. Add environment variables, if any, in **Project Settings → Environment Variables**.
4. Every push to `main` deploys to production. Other branches get preview deployments.

`.vercel/` and `.env*` are git-ignored, so local project links and secrets are never committed.

---

## Content Updates

- **Add or edit a sector card:** edit the `cards` array at the top of `components/SubBrands.js`.
- **Change brand copy:** edit the relevant file in `components/`. Content is currently defined in the components, not in a CMS.
- **Add images:** place files in `public/images/` and reference them as `/images/<file>`.
- **Navigation links:** edit the link list at the top of `components/Navbar.js`.

---

## Roadmap

- [ ] Dedicated pages for each sector
- [ ] Product catalogue for Foods & Beverages
- [ ] Mineral export enquiry flow with sample and specification requests
- [ ] Content moved to a headless CMS
- [ ] SEO metadata, Open Graph images, and sitemap
- [ ] Analytics

---

## License

Proprietary. All rights reserved by Ahmad Brothers Group.
