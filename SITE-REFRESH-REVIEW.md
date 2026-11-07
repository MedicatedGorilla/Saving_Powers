# Saving Powers website refresh — review draft

This branch (`site-refresh`) is an isolated, unmerged first-pass redesign. DO NOT merge without explicit owner approval.

## Pages
- `index.html`: short Alliance landing page, primary campaign and upcoming community issues.
- `northside.html`: existing detailed Northside case (photos, site plans, traffic, concerns, timeline, posters) with separate navigation.
- `news.html`: community-news information with official government source links; time-sensitive items require review after their dates pass.
- `get-involved.html`: donation, yard sign, contact, participation.
- `documents.html`: the unchanged 21-document public record, searchable.
- `styles/refresh.css`: shared responsive design for new pages.

## Content and preservation
- Existing `assets/` and `documents/` paths retained, including two updated flyers.
- Legacy homepage fragment identifiers route to the appropriate new page using a small script.
- Links to government documents remain external; no unverified claim of a LUBA filing was added.
- Contact address standardized to `savingpowers@gmail.com` on newly written pages. Confirm organization-wide preference before production release.
- Northside case copy is deliberately retained for content accuracy; further shortening can happen in a review iteration.
- Preview ribbon marks the site as a draft.

## Required QA and release checklist
- Verify Vercel Preview deployment for branch `site-refresh`, not production.
- Browse all five pages at desktop and mobile sizes. Test header links, images, PDF links, document search, lightbox, donate links, mailto links, and legacy hash redirects.
- Confirm the November 9 planning notice is updated or archived once the meeting passes.
- Confirm date-sensitive appeal language against counsel's latest status.
- Review accessibility: keyboard access, contrast, focus, alt text, heading order.
- Confirm production `main` SHA has not changed and do not merge until explicit approval.

## Recovery point
- Git backup: `backup/pre-site-refresh-2026-11-06` at `ced5dd1bc42ed3c610217e91fcd6c7c3d1e52c95`.
- Known-good production deployment: `dpl_BVd2jEbUrk3pzJVFkMsMr6L1jgGD`.
- If a future production merge goes wrong: request a Vercel production rollback to the known-good deployment and revert the Git merge on `main` so new builds cannot restore the broken version.

## Visual identity alignment (2026-11-06)
Compared styles with the original main-branch website. The original uses Georgia serif for prominent headings/wordmark, Inter/system sans for body copy, and a forest-green/cream/moss palette (`#183f32`, `#245844`, `#f5f1e6`, `#eef1ec`). The draft originally used all-sans headings and stronger brown/rust accents. Refreshed pages now restore the serif/sans hierarchy, the classic SP roundel, forest CTAs, green metadata labels, and more visible rural hero imagery. The detailed Northside page continues to use the original production CSS and typography, preserving continuity. All changes remain preview-only.
