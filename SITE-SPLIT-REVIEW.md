# Saving Powers — source-preserving multi-page split (review only)

This is deliberately **not a redesign**. The current live `main` branch (merge commit `3117590e5d819a1de20c2a8d01b79a53f0a81b30`) is the source of truth.

## What is preserved verbatim
- All 14 original content `<section>` blocks copied into pages without rewriting their text, HTML structure, assets, or metadata. The only substitutions inside sections are cross-page `href="#…"` links.
- The entire original inline stylesheet (first part of `styles/site.css`) and JavaScript (first part of `scripts/site.js`) are retained.
- Original sticky navigation, fonts (Georgia / Inter stack), color variables, footer, hero photo, gallery viewer, image lightbox, timeline mobile disclosure, document search, all 21 archived PDFs, new Alliance flyer, and sign/donation CTAs.
- Original static assets and document paths remain unchanged. No frameworks, database or extra font download added.

## Where sections moved
- `index.html`: original hero, issue introduction, broader land-use context.
- `northside.html`: County decision/status, landscape photos, current + historical plans, traffic review, three concerns.
- `timeline.html`: the entire original timeline and its mobile expand/collapse function.
- `documents.html`: complete searchable public record (21 entries).
- `community.html`: complete recent Saving Powers Alliance and community news section, including uploaded crossroads flyer.
- `get-involved.html`: $50 yard signs, original posters, donation/help actions.

## Small amount of new code
- Bottom of `styles/site.css`: minimal multipage banner and navigation styling using existing colors/fonts. No original CSS removed.
- Bottom of `scripts/site.js`: redirects old `index.html#record`, `#timeline`, etc. to corresponding new pages. All old JS retained.
- Shared nav copied from production with internal anchor links replaced by page URLs.
- Shared footer, lightbox dialog and back-to-top button copied to each page.
- Per-page titles/descriptions, robots noindex on preview, correct hero preload only on homepage.
- Draft banner pages intentionally lack production canonical URL until approved.

## Rollback and separation
- Previous V3 backup: `backup/site-refresh-v3-2026-11-07` at `b4b858780ebcf44396ceb3af22062546e719c29a`.
- V2 backup: `backup/site-refresh-v2-2026-11-06` at `7890854b1cc2e3bbeeb1ac067d3a5da1895dae16`.
- V1 backup: `backup/site-refresh-v1-2026-11-06` at `271de7c8bb90fd16809c94812f07901f2a8e13b2`.
- The live site stays on `main` and must not be merged without explicit owner approval.

## Acceptance testing
- Verify all six pages on Vercel preview at mobile (390px), tablet and desktop.
- Check cross-page nav, old hash redirects, images and PDF links.
- Test native lightbox on Northside photos/plans and Get Involved campaign images (keyboard arrows, Esc, close).
- Test mobile timeline condensed/expanded behavior.
- Search documents for `traffic` and confirm filtered results.
- Inspect that the original Alliance flyer renders on Community page.
- Verify unique IDs per page, no broken references, no unintended content loss.
- Prior to production: remove preview `noindex`, add page-specific canonical URLs, and re-check legal status/date-sensitive announcements. The November 9 meeting is upcoming as of branch creation.
