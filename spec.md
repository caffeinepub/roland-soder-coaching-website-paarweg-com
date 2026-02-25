# Specification

## Summary
**Goal:** Replace the hero image on the Zurich couples landing page with an autoplaying MP4 video.

**Planned changes:**
- Copy the uploaded MP4 video (`PaarWeg_ad.mp4`) to `frontend/public/assets/videos/hero-paarberatung-zuerich.mp4`
- In `ZurichCouplesLandingPage.tsx`, replace the hero image element with an HTML5 `<video>` element that autoplays, is muted, loops, and uses `object-fit: cover` to match the existing hero layout
- Ensure the video is fully responsive and matches the dimensions of the previous hero image on all screen sizes

**User-visible outcome:** Visitors to the Zurich couples landing page will see the MP4 video playing automatically (muted, looping) in the hero section instead of a static image.
