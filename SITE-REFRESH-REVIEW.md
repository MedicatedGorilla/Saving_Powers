# Saving Powers Editorial Redesign — Review Version 2

**Status: development preview only.** All changes are isolated to branch `site-refresh`. Do not merge without explicit approval.

## Concept
This is a full redesign, not a color tweak. It retains the original Georgia display typography, Inter-style body typography, forest-green/cream identity, circular SP mark, and neighborhood photography, while creating a much more editorial and image-led system with asymmetrical content, stronger headlines, horizontal news feeds, and simplified navigation.

## Pages
- `index.html` — immersive photographic hero, featured Northside case, two news highlights, mission and action.
- `northside.html` — fully rebuilt case page, current status, project metrics, concerns, existing site plans, nuanced traffic discussion, full photo gallery, all eight original timeline items preserved in expandable details, both current campaign flyers, document CTA.
- `news.html` — meeting details, follow-up policy coverage, official source links, participation guidance.
- `get-involved.html` — Facebook, meetings, donations, current $50 sign, contact.
- `documents.html` — 4 curated source documents and the complete original 21-entry searchable archive with preserved paths.
- `styles/site.css` — standalone mobile-responsive design system; replaces dependence on the prior `styles/refresh.css`.

## Reversion
- **Previous design, exact Git commit:** `271de7c8bb90fd16809c94812f07901f2a8e13b2`.
- **Pinned previous-design branch:** `backup/site-refresh-v1-2026-11-06`.
- **Current production backup:** `backup/pre-site-refresh-2026-11-06` at `ced5dd1bc42ed3c610217e91fcd6c7c3d1e52c95`.
- **Vercel known-good production deployment:** `dpl_BVd2jEbUrk3pzJVFkMsMr6L1jgGD`.
- If the user rejects version 2, revert `site-refresh` to the pinned v1 commit, without merging to `main`.
- Production must remain untouched.

## Review checklist
- Verify Vercel branch preview deploy is READY; confirm public branch preview alias is available without sign-in.
- Check all five pages at mobile, tablet and desktop widths; check menu, anchor redirects, navigation and focus.
- Confirm document search and all 21 archive links; verify old image and PDF paths.
- Verify no misleading legal-status claim: appeal filing remains unconfirmed; confirm current counsel status before publishing.
- Update/retire the November 9, 2026 news item once it passes.
- Check email address, donation claims, and sign instructions with group organizers.
- On release, remove preview banner, refresh time-sensitive wording and social-preview metadata.
- Do not merge without owner approval.
