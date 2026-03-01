# Specification

## Summary
**Goal:** Remove redundant cost-related phrases from the ContactPage to avoid repetition.

**Planned changes:**
- In the "Wichtig zu wissen" section of ContactPage.tsx, remove the phrase "– ganz ohne Kosten" (including the em dash) wherever it appears.
- In the "Termin buchen" section of ContactPage.tsx, change "(30 Minuten – kostenlos)" to "(30 Minuten)".

**User-visible outcome:** The ContactPage no longer repeats cost qualifiers redundantly; the affected sentences read more cleanly without the removed phrases.
