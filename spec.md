# Specification

## Summary
**Goal:** Restore the entire PaarWeg application (frontend and backend) to the exact state of the live Version 145, with no differences from the production site.

**Planned changes:**
- Restore all frontend pages (HomePage, AboutPage, CouplesPage, MenPage, WomenPage, PricingPage, ContactPage, LegalPage, BaselCouplesLandingPage, ZurichCouplesLandingPage) to their Version 145 state
- Restore all shared components and layout files (Layout.tsx, CalendlyInlineWidget.tsx) to Version 145
- Restore all hooks, utilities, configuration files (tailwind.config.js, index.css, App.tsx) to Version 145
- Restore backend (backend/main.mo) including all data types, CRUD operations, role-based access control, pricing entries, collections, navigation, and user profile logic to Version 145

**User-visible outcome:** The draft site is an exact replica of the live Version 145 production site, with all pages, routes, content, styling, and backend functionality identical to the live version.
