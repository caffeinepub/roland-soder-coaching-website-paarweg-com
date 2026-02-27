# Specification

## Summary
**Goal:** Integrate Google Tag (G-NQHZEVRPBL) into the Zürich couples landing page, scoped exclusively to that page.

**Planned changes:**
- Add gtag.js script tag and inline initialization script for ID G-NQHZEVRPBL to `ZurichCouplesLandingPage.tsx` using the same head-injection pattern (React Helmet or equivalent) already used in `BaselCouplesLandingPage.tsx`

**User-visible outcome:** Google Analytics tracking via tag G-NQHZEVRPBL fires only when the Zürich couples landing page is visited, with no impact on any other pages.
