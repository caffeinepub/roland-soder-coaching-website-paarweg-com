# Specification

## Summary
**Goal:** Add a Zurich-focused German landing page for online couples counseling at `/paarberatung-zuerich`, accessible via direct URL but not linked from the main navigation.

**Planned changes:**
- Create a new route/page at `/paarberatung-zuerich` using the existing global `Layout` and existing UI components to match current site styling.
- Implement calm, respectful German landing page sections, including: typical couple challenges, how online counseling works at PaarWeg, PaarWeg attitude/approach, and an invitation to an initial non-binding first contact.
- Add prominent CTAs (above the fold and near the bottom) that use existing conversion paths (e.g., `/kontakt` and/or `https://calendly.com/paarweg-info`).
- Ensure the page is not added to the main header/mobile navigation.
- Add SEO metadata for the page (title, meta description, canonical URL, Open Graph tags) reflecting “Paarberatung Zürich” and the online nature of the service.
- Update `frontend/public/sitemap.xml` to include `https://www.paarweg.com/paarberatung-zuerich`.

**User-visible outcome:** Visitors can open `paarweg.com/paarberatung-zuerich` directly to read a dedicated Zurich-focused online couples counseling landing page and start an initial non-binding contact via existing contact/booking options.
