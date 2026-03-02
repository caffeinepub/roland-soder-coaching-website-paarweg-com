# Specification

## Summary
**Goal:** Update all Kennenlerntermin (introductory appointment) buttons and links across the entire application to use the correct Calendly URL: `https://calendly.com/paarweg-info/paarweg-session-90-min-klon`.

**Planned changes:**
- Replace all existing Calendly URLs used for intro/booking CTAs in HomePage.tsx, ContactPage.tsx, PricingPage.tsx, CouplesPage.tsx, MenPage.tsx, WomenPage.tsx, AboutPage.tsx, ZurichCouplesLandingPage.tsx, BaselCouplesLandingPage.tsx, SwissOnlineCouplesLandingPage.tsx, and Layout.tsx with `https://calendly.com/paarweg-info/paarweg-session-90-min-klon`
- Update any Calendly popup widget initializations (`Calendly.initPopupWidget`) to use the new URL
- Update any Calendly inline widget initializations or `data-url` attributes on booking/contact pages to use the new URL

**User-visible outcome:** All booking and introductory appointment buttons/links across the site now open the correct Calendly session at the updated URL.
