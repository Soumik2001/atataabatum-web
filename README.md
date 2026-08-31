# Atataabatum Stock Exchange

A digital exchange platform frontend — market data, order execution, portfolios, and listings, built on a single design system that carries from desktop to mobile.

> Watch, understand, trade, review — with a review step before anything binding, and a plain-language status after it.

---

## Overview

Atataabatum is a stock exchange platform covering the full trading lifecycle:

- **Market Data** — real-time prices, order books, charts, screeners
- **Trading** — order tickets, order management, portfolio tracking
- **Listings** — issuer onboarding, disclosure workflows, reviewer queue
- **Trust** — KYC, surveillance, audit trails, compliance reporting

This repo contains the **React frontend** — the Experience Layer of the platform.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router |
| Server state | TanStack Query |
| Client state | Zustand |
| HTTP | Axios |
| Charts | Lightweight Charts (TradingView) |
| Forms | React Hook Form + Zod |
| Icons | Lucide |
| Font | Inter (self-hosted via Fontsource) |

---

## Design System

| Token | Hex | Usage |
|---|---|---|
| `navy` | `#0A2342` | Base canvas — default trading view |
| `panel` | `#14396E` | Cards, tables, modules |
| `action` | `#2F80ED` | Primary buttons, links, selected state |
| `signal` | `#2E9E4F` | Gains, filled orders, verified states |
| `alert` | `#E8871E` | Warnings, pending items |
| `ice` | `#EAF1FB` | Primary text on dark surfaces |

One palette, one grid, one component set — from the desktop dashboard to the phone. Target: **WCAG 2.2 AA** platform-wide, **AAA** on body text.

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/<your-username>/atataabatum-web.git
cd atataabatum-web
npm install
```

### Environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

```env
VITE_API_BASE_URL=
VITE_WS_URL=
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/            # Router, query client, app-level config
├── assets/         # Images, static files
├── components/     # Shared design-system components (ui, layout, feedback)
├── features/       # Feature modules — markets, trade, portfolio, watchlist, auth
├── lib/            # Axios instance, formatters, socket client
├── stores/         # Global client state (Zustand)
└── types/          # Shared TypeScript types
```

Each feature owns its own components, hooks, and types — nothing forces a jump across unrelated folders to change one screen.

---

## Delivery Phases

| Phase | Scope |
|---|---|
| **1 — Foundations** | Design system, market data, watchlists, public instrument profile |
| **2 — Trading** | Onboarding, KYC, funding, order ticket, portfolio view |
| **3 — Issuers** | Listings portal, disclosure workflow, reviewer queue |
| **4 — Scale** | Open APIs, mobile app, surveillance tooling, regional market access |

Each phase ships something usable — the market can be watched before it can be traded.

---

## Branching Convention

- `main` — production-ready code
- `develop` — active integration branch
- `feature/*` — one branch per feature (e.g. `feature/order-ticket`)

Commits follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add watchlist store and row component
fix: correct tabular-nums on price column
chore: install react-router and axios
style: apply design token colors to AppShell
```

---

## License

Private and proprietary. Not for redistribution.
