# Djarna Admin Dashboard 🚀

A comprehensive, enterprise-grade, multi-language **Admin Management Dashboard** built for the **Djarna E-Commerce & Services Platform**. This application empowers platform administrators to manage users, verify identities, monitor marketplace transactions, handle reports and disputes, configure boost packs, track commission revenues, analyze platform analytics, and manage system settings in real time.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features & Modules](#-key-features--modules)
- [Tech Stack & Dependencies](#-tech-stack--dependencies)
- [Architecture & Design System](#-architecture--design-system)
- [API & Integration Specs](#-api--integration-specs)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [CI/CD & Deployment](#-cicd--deployment)
- [Directory Structure](#-directory-structure)
- [License](#-license)

---

## 🎯 Overview

The **Djarna Admin Dashboard** provides centralized command and control for the Djarna ecosystem. Built on **Next.js 16 (App Router)** and **React 19**, it utilizes RTK Query for state management, Socket.io for live updates, `next-intl` for seamless English/French internationalization, and Tailwind CSS v4 alongside Shadcn UI for a responsive UI.

---

## ⭐ Key Features & Modules

### 📊 1. Analytics & Profit Dashboard
- **Executive Metrics Cards**: Real-time totals for active users, monthly revenue, total orders, open disputes, and pending reports.
- **Interactive Data Charts**: Visual financial reports, revenue breakdowns, and transaction analytics built with **Recharts**.
- **Recent Platform Activity**: Live feed tracking incoming orders, user registrations, boost purchases, and status flags.

### 🚩 2. Reports & Content Moderation (`/reports`)
- **Dual Category Tracking**: Moderation streams for both **Listing Reports** (counterfeits, inappropriate content) and **User Reports** (scams, harassment).
- **Status Workflow**: Interactive report lifecycle management (`OPEN` ➔ `IN_REVIEW` ➔ `RESOLVED`).
- **Detailed Modal Inspector**: Full diagnostic view of reporters, reported items/users, proof images, and resolution note triggers.
- **Filtering & Search**: Server-side pagination, status dropdowns, type toggles, and live search term filters.

### 👤 3. User & Identity Verification Management (`/users`, `/verifications`)
- **User Management**: View, filter, lock, unlock, and manage platform user profiles (Buyers, Sellers, Partners).
- **KYC & Identity Verification**: Inspect official government ID uploads, selfie verification matches, badge assignment (`verifiedBadge`), and approve/reject verification requests.

### 💳 4. Payments, Orders & Commission Tracking (`/payments`, `/orders`, `/commission`)
- **Platform Orders**: Track order fulfillment stages, payout statuses, delivery tracking, and buyer-seller interactions.
- **Payment Operations**: Log of payment transactions, gateway integrations, invoice receipts, and refund requests.
- **Commission Management**: Configure platform commission rates, fee structures, and view accumulated commission profits.

### 🚀 5. Boost Packs & Promotions (`/boost-packs`, `/boost-payments`)
- **Promotional Packages**: Create and configure listing promotion packages (e.g., Featured, Homepage Spotlight, Urgency Badges).
- **Boost Payment Logs**: Monitor seller purchases of boost slots, payment confirmation status, and pack expiry timers.

### ⚖️ 6. Disputes & Resolution Center (`/disputes`)
- **Order Disputes**: Central hub for mediating buyer-seller order conflicts, refund requests, non-delivery claims, and item condition issues.
- **Evidence Management**: View buyer/seller chat records, submitted attachments, and initiate partial or full refunds.

### 🗂️ 7. Category & System Settings (`/categories`, `/settings`)
- **Category Tree Management**: Add, update, hide, or reorder multi-level marketplace categories and item properties.
- **Global Settings**: Configure platform maintenance mode, contact channels, policy links, and SMTP/notification configurations.

### 🌐 8. Internationalization & Themes
- **Multi-Language (i18n)**: Native English (`en`) and French (`fr`) language support configured via `next-intl`.
- **Dark/Light Mode**: Smooth theme toggling supported by `next-themes`.

---

## 🛠 Tech Stack & Dependencies

### Core Frameworks & Libraries
| Technology | Description |
| :--- | :--- |
| **Next.js 16** | App Router framework with Server Components & Client Hydration |
| **React 19** | Modern UI engine with actions, hooks, and concurrent features |
| **TypeScript 5** | Strict static typing across components, store, and API contracts |

### State & API Management
| Library | Purpose |
| :--- | :--- |
| **Redux Toolkit** | Centralized application state management |
| **RTK Query (`baseApi`)** | Data fetching, caching, tag invalidation, and automated re-fetching |
| **Redux Persist** | Client-side session and state persistence |
| **Socket.io Client** | Real-time websocket listener for live notifications & activity updates |

### UI, Styling & Utilities
| Library | Purpose |
| :--- | :--- |
| **Tailwind CSS v4** | Utility-first styling framework |
| **Shadcn UI & Base UI** | Accessible, unstyled UI component primitives |
| **Lucide React** | Modern iconography library |
| **Recharts** | Composible SVG data visualization & chart renders |
| **date-fns** | Locale-aware date formatting and manipulation |
| **sonner** | Toast notification management |
| **react-hook-form** | Form validation and state management |

---

## 🔌 API & Integration Specs

The dashboard integrates with the Djarna Backend REST API (`/api/v1`). Key API structures include:

### Auth & Security
- Headers: `Authorization: Bearer <ADMIN_TOKEN>`
- Interceptors automatically handle 401 token refresh/redirection.

### Sample API Data Endpoints
- **Report Stats**: `GET /api/v1/report/stats`
- **Report Listing**: `GET /api/v1/report?page=1&limit=10&status=OPEN&type=LISTING`
- **Report Detail**: `GET /api/v1/report/:id`
- **Update Status**: `PATCH /api/v1/report/:id/status`

---

## ⚡ Getting Started

### Prerequisites
- **Node.js**: v18.17.0 or higher
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### Step-by-Step Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/apponislam/djarna_dashboard.git
   cd djarna_dashboard
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` or `.env` file in the project root:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
   NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Access the dashboard in your browser at `http://localhost:3020`.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `next dev -H 0.0.0.0 -p 3020` | Starts dev server on all network interfaces at port 3020 |
| `npm run build` | `next build` | Compiles and optimizes the app for production deployment |
| `npm run start` | `next start -H 0.0.0.0 -p 3020` | Runs the compiled production build |
| `npm run lint` | `eslint` | Runs code quality & linting verification |

---

## 🚀 CI/CD & Deployment

The application features automated deployment configured via **GitHub Actions** (`.github/workflows/deploy.yml`).

- **Target Server**: Hostinger VPS
- **Process Manager**: PM2 (`pm2 restart Djarna_Dashboard`)
- **Deployment Flow**: On every `git push origin main`:
  1. SSH connection established with target server.
  2. Latest source code pulled from `main`.
  3. Dependencies installed (`npm install`).
  4. Production application compiled (`npm run build`).
  5. Application process reloaded zero-downtime via PM2.

---

## 📂 Directory Structure

```
mohameddizzy-dashboard/
├── .github/
│   └── workflows/        # GitHub Actions CI/CD workflows (deploy.yml)
├── app/
│   └── [locale]/         # i18n dynamic routing container
│       ├── (appscreen)/  # Authenticated general application screens
│       ├── (auth)/       # Authentication pages (login, forgot-password, reset-password)
│       ├── (dashboard)/  # Main Admin Dashboard routes (reports, users, orders, etc.)
│       ├── globals.css   # Global styles & Tailwind CSS configuration
│       └── layout.tsx    # Locale root layout
├── components/           # UI Component collection
│   ├── ui/               # Shadcn/Base-UI atomic design components
│   └── dashboard/        # Complex domain widgets, tables, modals & charts
├── hooks/                # Custom React hooks (auth, sockets, media queries)
├── i18n/                 # i18n configuration files and request resolvers
├── lib/                  # Utility helpers, constants, and formatters
├── messages/             # Localized translation JSON strings (en.json, fr.json)
├── Providers/            # React context providers (Store, Theme, i18n, Toast)
├── redux/
│   ├── api/              # RTK Query baseApi configuration & endpoint definitions
│   ├── features/         # Feature state slices (auth, report, order, user, etc.)
│   └── store.ts          # Redux Store config with persistence
├── public/               # Static images, icons, and public assets
├── proxy.ts              # Custom middleware / proxy handlers
├── next.config.ts        # Next.js configuration & compiler options
├── package.json          # Dependency specs and project scripts
└── README.md             # Complete project documentation
```

---

## 📄 License

This project is proprietary and confidential software developed for **Djarna Platform**. Unauthorized copying, distribution, or usage of any part of this repository is strictly prohibited. All rights reserved.
