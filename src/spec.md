# Specification

## Summary
**Goal:** Expose the active theme HEX codes for the global page background and the primary booking CTA button in an admin-facing UI so they can be easily copied.

**Planned changes:**
- Add a new section on an existing admin page (e.g., `/admin/technical-status`) that displays the runtime-computed HEX value for the global page background color.
- Display the runtime-computed HEX value for the primary/CTA button color used for the “book introductory session” booking button.
- Provide an easy way to copy each HEX value (e.g., copy button and/or selectable text), with all labels in English.

**User-visible outcome:** On the admin page, an admin can view and copy the current HEX codes for the page background and the booking CTA button, reflecting the active theme (including dark mode if enabled).
