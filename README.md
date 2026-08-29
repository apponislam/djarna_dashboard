# Djarna Admin Dashboard 🚀

<p align="left">
  <a href="https://dashboard.djarna.com">
    <img src="https://img.shields.io/badge/Live_Dashboard-VISIT_SITE-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white" height="42" alt="Live Admin Dashboard" />
  </a>
  &nbsp;
  <a href="https://play.google.com/store/apps/details?id=com.mohamed.djarna">
    <img src="https://raw.githubusercontent.com/stefan-niedermann/nextcloud-deck-of-cards/master/badges/google-play-badge.svg" height="42" alt="Get it on Google Play" />
  </a>
  &nbsp;
  <a href="https://apps.apple.com/us/app/djarna/id6787214492">
    <img src="https://raw.githubusercontent.com/stefan-niedermann/nextcloud-deck-of-cards/master/badges/app-store-badge.svg" height="42" alt="Download on the App Store" />
  </a>
</p>

> 🖥️ **Live Admin Dashboard**: [https://dashboard.djarna.com](https://dashboard.djarna.com)  
> 🤖 **Android Mobile App (Google Play)**: [com.mohamed.djarna](https://play.google.com/store/apps/details?id=com.mohamed.djarna)  
> 🍏 **iOS Mobile App (Apple App Store)**: [Djarna on App Store](https://apps.apple.com/us/app/djarna/id6787214492)

A comprehensive, enterprise-grade, multi-language **Admin Management Dashboard** built for the **Djarna E-Commerce & Marketplace Services Platform**. This application empowers platform administrators to manage users, verify identities, monitor transactions, mediate buyer-seller disputes, manage product categories, configure boost packages & commissions, track real-time analytics, and control global system configurations.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture & Design System](#-architecture--design-system)
- [Key Features & Core Modules](#-key-features--core-modules)
  - [1. Executive Analytics & Dashboard](#1-executive-analytics--dashboard)
  - [2. Identity & KYC Verification System](#2-identity--kyc-verification-system)
  - [3. User Management & Access Control](#3-user-management--access-control)
  - [4. Moderation & Report Center](#4-moderation--report-center)
  - [5. Order & Transaction Management](#5-order--transaction-management)
  - [6. Dispute Resolution Center](#6-dispute-resolution-center)
  - [7. Financials, Payments & Commission Control](#7-financials-payments--commission-control)
  - [8. Boost Packs & Marketplace Promotion](#8-boost-packs--marketplace-promotion)
  - [9. Category Taxonomy & Global System Settings](#9-category-taxonomy--global-system-settings)
- [State Management & RTK Query Architecture](#-state-management--rtk-query-architecture)
- [Security & Authentication Specs](#-security--authentication-specs)
- [Internationalization (i18n) & Localization](#-internationalization-i18n--localization)
- [Tech Stack & Package Dependencies](#-tech-stack--package-dependencies)
- [Getting Started & Local Setup](#-getting-started--local-setup)
- [Environment Configuration](#-environment-configuration)
- [Available Scripts](#-available-scripts)
- [CI/CD Pipeline & Automated Deployment](#-cicd-pipeline--automated-deployment)
- [Complete Directory Tree](#-complete-directory-tree)
- [License](#-license)

## 🌐 Production & Application Links

- 🖥️ **Live Admin Dashboard**: [https://dashboard.djarna.com](https://dashboard.djarna.com)
- 🤖 **Android Mobile App (Google Play)**: [com.mohamed.djarna](https://play.google.com/store/apps/details?id=com.mohamed.djarna)
- 🍏 **iOS Mobile App (Apple App Store)**: [Djarna on App Store](https://apps.apple.com/us/app/djarna/id6787214492)

---

## 🎯 Overview

The **Djarna Admin Dashboard** serves as the central control plane for the Djarna ecosystem (Web & Mobile applications). Designed for high-volume marketplace operations, it handles everything from seller onboarding and identity verification to transaction dispute mediation and platform monetization.

### Key Highlights:
- **Live Production URL**: [https://dashboard.djarna.com](https://dashboard.djarna.com)
- **Official Mobile Applications**:
  - Google Play Store: [com.mohamed.djarna](https://play.google.com/store/apps/details?id=com.mohamed.djarna)
  - Apple App Store: [Djarna iOS App](https://apps.apple.com/us/app/djarna/id6787214492)
- **Next.js 16 (App Router)** & **React 19** architecture for high performance and optimal client hydration.
- **Automated Re-Authentication & Token Refresh**: Built-in RTK Query base query wrapper with automatic 401 handling.
- **Multilingual Support**: Real-time switching between English (`en`) and French (`fr`) powered by `next-intl`.
- **Zero-Downtime CI/CD**: Automated deployment to Hostinger VPS using GitHub Actions, SSH actions, and PM2 process reloading.

---

## 🏗 Architecture & Design System

The application relies on modular layer separation to isolate state logic, UI presentation, API querying, and localization strings.

```
┌────────────────────────────────────────────────────────┐
│             Next.js 16 App Router Layout               │
└──────────────────────────┬─────────────────────────────┘
                           │
 ┌─────────────────────────┴─────────────────────────────┐
 │    Providers (Redux, Theme, i18n, Toast Notifications)│
 └─────────────────────────┬─────────────────────────────┘
                           │
      ┌────────────────────┼────────────────────┐
      ▼                    ▼                    ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────────┐
│ Redux Toolkit │  │   i18n Engine │  │ WebSocket Engine  │
│ + RTK Query   │  │  (next-intl)  │  │ (socket.io-client)│
└───────┬───────┘  └───────┬───────┘  └─────────┬─────────┘
        │                  │                    │
        ▼                  ▼                    ▼
┌────────────────────────────────────────────────────────┐
│           Shadcn UI & Recharts Dashboard Views         │
└────────────────────────────────────────────────────────┘
```

---

## 🌟 Key Features & Core Modules

### 1. Executive Analytics & Dashboard
- **Financial & Volume KPI Widgets**: Live totals for daily/monthly revenue, net profit, total platform transactions, open dispute counts, and active reports.
- **Interactive Charting**:
  - `RevenueChart.tsx`: Multi-period revenue analysis.
  - `OrdersChart.tsx`: Order velocity and volume metrics.
  - `CategoryPerformanceChart.tsx`: Top sales categories and user demand heatmaps.
  - `FinancialOverview.tsx`: Consolidated gross profit vs. payout breakdowns.
- **Live Activity Feed**: Real-time activity log tracking user signups, report flags, boost pack purchases, and identity submissions.

### 2. Identity & KYC Verification System (`/verifications`)
- **KYC Document Inspection**: Inspect government-issued identity documents (CNI, Passport, Driving License) submitted by sellers and service providers.
- **Selfie Match Verification**: Visual audit of selfie verification photos against identity document attachments.
- **Verification Badges**: Assign or revoke the official `verifiedBadge` status to build buyer trust on the marketplace.
- **Audit Logs**: Maintain timestamped administrative review decisions (Approve, Request Re-submission, Reject with Reason).

### 3. User Management & Access Control (`/users`)
- **User Directory**: Unified listing of Buyers, Sellers, Delivery Agents, and Service Providers.
- **Status Control**: Account locking, ban mechanisms, suspension toggles, and administrative password resets (`setUserPasswordByAdmin`).
- **Profile Deep-Dive**: View user transaction history, linked listings, verified contact info (email/phone), and referral metrics (`validateReferralCode`).

### 4. Moderation & Report Center (`/reports`)
- **Listing & User Stream Filtering**: Separate queues for **Listing Reports** (scams, counterfeits, price gouging) and **User Reports** (impersonation, abusive behavior).
- **Report Lifecycle Workflow**: Transition reports through `OPEN`, `IN_REVIEW`, and `RESOLVED` statuses.
- **Diagnostic Inspector Modal**:
  - Displays reporter profiles (`photo`, `name`, `verifiedBadge`).
  - Displays reported target details (`reportedItem` title, price, images, or `reportedUser` profile).
  - Reason tags and granular complaint descriptions.

### 5. Order & Transaction Management (`/orders`)
- **Fulfillment Tracker**: Track orders across fulfillment stages (`PENDING`, `PROCESSING`, `SHIPPED`, `DELIVERED`, `CANCELLED`).
- **Order Inspector**: Review item pricing, applied commission fees, delivery addresses, and customer notes.

### 6. Dispute Resolution Center (`/disputes`)
- **Order Conflicts Hub**: Dedicated resolution dashboard for mediating buyer-seller claims (item not received, damaged items, unauthorized transactions).
- **Evidence Review**: Review buyer-seller conversation logs and uploaded photo/video proof.
- **Action Triggers**: Execute partial refunds, full order cancellations, or approve seller payout releases.

### 7. Financials, Payments & Commission Control (`/payments`, `/commission`)
- **Payment Logs**: Audit payment gateway receipts, transaction IDs, timestamped status badges, and payout schedules.
- **Commission Rates**: Configure marketplace commission percentages by category or fixed seller fee structures.
- **Payout Authorization**: Review pending seller payout requests and flag high-risk transactions.

### 8. Boost Packs & Marketplace Promotion (`/boost-packs`, `/boost-payments`)
- **Boost Package Configuration**: Create and manage seller promotion packages (e.g., Homepage Spotlight, Top of Category, Urgent Badges).
- **Transaction Logs**: Monitor boost purchases, package duration timers, active promotion slots, and revenue generated from promotion sales.

### 9. Category Taxonomy & Global System Settings (`/categories`, `/settings`)
- **Marketplace Categories**: Hierarchical category manager for adding, updating, and reordering listing categories and custom item attributes.
- **System Configuration**: Manage platform-wide maintenance mode, global support emails/phones, terms of service URLs, and SMTP integration settings.

---

## ⚡ State Management & RTK Query Architecture

The application uses **RTK Query** with tag invalidation for instant optimistic updates and automatic cache management across 11 key domain tags:

```typescript
// baseApi.ts Tag Spectrum
tagTypes: [
  "User",
  "BoostPack",
  "Settings",
  "IdentityVerification",
  "Category",
  "Dashboard",
  "Order",
  "Activity",
  "Dispute",
  "Payment",
  "Report"
]
```

### Feature Slices & APIs (`redux/features/`):
- `auth`: Authentication state, token persistence, and role decoding.
- `report`: Report stats, list filters, detail queries, and status updates.
- `users`: User queries, status toggles, and password management.
- `identity-verification`: KYC submission listings, approval actions, and audit logs.
- `order` & `payment`: Financial transaction streams and payout controls.
- `dispute`: Conflict management and resolution actions.
- `boostPack` & `boostPayment`: Seller promotion package configuration and revenue metrics.
- `category` & `settings`: Taxonomies and global system settings.

---

## 🔒 Security & Authentication Specs

- **Admin Bearer Token Authentication**: Every outgoing request through `baseApi` automatically attaches `Authorization: Bearer <TOKEN>` via `prepareHeaders`.
- **Automatic Token Refresh**: The custom `baseQueryWithReauth` wrapper detects `401 Unauthorized` or `403 Forbidden` responses on private endpoints and attempts an automatic call to `/auth/refresh-token`.
- **Session Cleanup**: If refresh fails, `logOut()` is dispatched automatically to purge persisted auth states and redirect to `/auth/login`.
- **Protected Middleware**: Public routes (`/auth/admin-login`, `/auth/forgot-password`, `/auth/reset-password`) are explicitly excluded from automatic token refresh loops.

---

## 🌐 Internationalization (i18n) & Localization

Built using **`next-intl`**, supporting multi-language operations:
- **Languages**: English (`en`) & French (`fr`).
- **Translation Files**:
  - `messages/en.json`: Comprehensive key-value mappings for English UI strings.
  - `messages/fr.json`: Comprehensive key-value mappings for French UI strings.
- **Locale Route Wrapper**: `app/[locale]/` ensures SEO-friendly language prefixing and seamless switching.

---

## 🛠 Tech Stack & Package Dependencies

### Dependencies Overview
```json
{
  "dependencies": {
    "next": "16.2.1",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "@base-ui/react": "^1.3.0",
    "lucide-react": "^1.7.0",
    "next-intl": "^4.13.0",
    "next-themes": "^0.4.6",
    "recharts": "^3.8.0",
    "redux-persist": "^6.0.0",
    "shadcn": "^4.1.1",
    "socket.io-client": "^4.8.3",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.4.0",
    "date-fns": "^4.1.0",
    "cmdk": "^1.1.1",
    "embla-carousel-react": "^8.6.0"
  }
}
```

---

## 🚀 Getting Started & Local Setup

### Prerequisites
- **Node.js**: v18.17.0 or higher
- **npm**: v9.0.0 or higher

### Local Environment Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/apponislam/djarna_dashboard.git
   cd djarna_dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root folder:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Navigate to [http://localhost:3020](http://localhost:3020).

---

## ⚙️ Environment Configuration

| Variable | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_API_URL` | String | Base URL for REST API endpoints | `https://api.djarna.com` |
| `NEXT_PUBLIC_SOCKET_URL` | String | Base URL for Socket.io websocket connection | `https://api.djarna.com` |

---

## 📜 Available Scripts

- **`npm run dev`**: Launches Next.js dev server bound to host `0.0.0.0` at port `3020`.
- **`npm run build`**: Compiles production-optimized code.
- **`npm run start`**: Runs the compiled production build on port `3020`.
- **`npm run lint`**: Executes ESLint syntax and code quality checks.

---

## 🔄 CI/CD Pipeline & Automated Deployment

Production deployments are automated via GitHub Actions in `.github/workflows/deploy.yml`.

### Deployment Workflow (`deploy.yml`):
```yaml
name: Deploy Djarna Dashboard

on:
    push:
        branches:
            - main

jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - name: Deploy to Hostinger VPS
              uses: appleboy/ssh-action@v1.2.2
              with:
                  host: ${{ secrets.HOST }}
                  username: ${{ secrets.USERNAME }}
                  key: ${{ secrets.SSH_KEY }}
                  port: ${{ secrets.PORT }}
                  script: |
                      export FNM_PATH="/root/.local/share/fnm"
                      export PATH="$FNM_PATH:$PATH"
                      eval "$(/root/.local/share/fnm/fnm env --shell bash)"

                      cd /srv/Djarna_Dashboard
                      git pull origin main
                      npm install
                      npm run build
                      pm2 restart Djarna_Dashboard
```

---

## 📂 Complete Directory Tree

```
mohameddizzy-dashboard/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions automated VPS deployment
├── app/
│   └── [locale]/                   # i18n locale wrapper route
│       ├── (appscreen)/            # General app pages
│       ├── (auth)/                 # Authentication pages (login, forgot/reset password)
│       ├── (dashboard)/            # Dashboard module pages
│       │   ├── activities/         # Platform activity logs
│       │   ├── boost-packs/        # Boost promotional packages management
│       │   ├── boost-payments/     # Seller boost payment records
│       │   ├── categories/         # Marketplace categories manager
│       │   ├── commission/         # Platform commission fee configurations
│       │   ├── disputes/           # Buyer-seller dispute resolution hub
│       │   ├── orders/             # Order fulfillment tracking
│       │   ├── payments/           # Financial payment transaction logs
│       │   ├── reports/            # Listing & User report moderation center
│       │   ├── settings/           # Global platform settings
│       │   ├── users/              # User directory & access control
│       │   ├── verifications/      # KYC & identity verification audits
│       │   ├── layout.tsx          # Dashboard layout container
│       │   └── page.tsx            # Main Analytics & KPI Overview page
│       ├── favicon.ico             # App icon
│       ├── globals.css             # Tailwind v4 theme setup & custom styles
│       └── layout.tsx              # Root HTML/Locale layout
├── components/
│   ├── dashboard/                  # Domain-specific components
│   │   ├── boost-packs/            # Boost pack modals & forms
│   │   ├── boost-payments/         # Boost payment tables
│   │   ├── commission/             # Commission rate controllers
│   │   ├── disputes/               # Dispute evidence viewers & decision modals
│   │   ├── orders/                 # Order status badges & detail drawers
│   │   ├── payments/               # Payment transaction tables
│   │   ├── reports/                # Report detail modals & status buttons
│   │   ├── settings/               # System setting forms
│   │   ├── users/                  # User profile drawers & lock toggles
│   │   ├── CategoryPerformanceChart.tsx # Category demand visualization chart
│   │   ├── FinancialOverview.tsx   # Consolidated financial analytics chart
│   │   ├── MetricCard.tsx          # Summary KPI widget component
│   │   ├── OrdersChart.tsx         # Order velocity chart component
│   │   ├── RecentActivityFeed.tsx  # Live activity feed timeline
│   │   └── RevenueChart.tsx        # Revenue analytics chart component
│   ├── layout/                     # Header, Sidebar, and Footer UI elements
│   ├── shared/                     # Reusable modal shells, tables, and pagination controls
│   └── ui/                         # Shadcn/Base-UI atomic design buttons, inputs, dialogs
├── hooks/                          # Custom React hooks (socket connections, debouncing)
├── i18n/                           # next-intl configuration & request resolvers
├── lib/                            # Helper formatters, date utilities, and API wrappers
├── messages/
│   ├── en.json                     # English translation dictionary (~33KB)
│   └── fr.json                     # French translation dictionary (~36KB)
├── Providers/                      # Redux, Next-Themes, and Toast notifications providers
├── redux/
│   ├── api/
│   │   └── baseApi.ts              # RTK Query core API config with automatic re-auth & tag invalidation
│   ├── features/
│   │   ├── activity/               # Platform activity state slice & API endpoints
│   │   ├── auth/                   # Authentication slice & login/password API endpoints
│   │   ├── boostPack/              # Boost package state & API
│   │   ├── boostPayment/           # Boost transaction state & API
│   │   ├── category/               # Marketplace taxonomy state & API
│   │   ├── dashboard/              # Executive analytics state & API
│   │   ├── dispute/                # Dispute resolution state & API
│   │   ├── identity-verification/  # KYC verification audit state & API
│   │   ├── order/                  # Order tracking state & API
│   │   ├── payment/                # Financial payment state & API
│   │   ├── report/                 # Report moderation state & API
│   │   ├── settings/               # Global settings state & API
│   │   └── users/                  # User management state & API
│   ├── hooks.ts                    # Typed Redux useDispatch and useSelector hooks
│   └── store.ts                    # Redux store assembly with Redux Persist
├── proxy.ts                        # Request proxy and middleware handlers
├── next.config.ts                  # Next.js configuration & compiler options
├── package.json                    # Project dependencies & scripts
└── README.md                       # Complete project documentation
```

---

## 📄 License

This project is proprietary and confidential software developed for **Djarna Platform**. Unauthorized copying, distribution, modification, or usage of any part of this repository is strictly prohibited. All rights reserved.
