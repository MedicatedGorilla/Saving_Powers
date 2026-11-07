# Saving Powers Alliance website — phase plan

**Production:** `main` remains unchanged; latest production commit `3117590e5d819a1de20c2a8d01b79a53f0a81b30`.
**Development:** `site-refresh` with permanent public Vercel preview.
**Rule:** Never merge into `main` without explicit owner approval.

## Philosophy
Carry forward the current site's actual Georgia/Inter typography, forest/cream colors, photography, cards, navigation, photo lightbox, searchable 21-document archive and interactive timeline. Change layout and information architecture deliberately, not by replacing functioning components.

## Part 1 — Shared foundation and Alliance homepage [IMPLEMENTED]
- Create a homepage that leads with Saving Powers Alliance rather than the October 20 county decision.
- Feature the Northside Church campaign, key record figures, rural photography and a link to full details.
- Add purpose/mission, Community Planning teasers and a simple participation CTA.
- Simplify top navigation to Home, Northside Church, Community Planning, Documents and Get Involved.
- Move the original two detailed case/land-use sections from Home to Northside without rewriting them.
- Restore old deep links `/#issue` and `/#land-use` via homepage fragment redirects.
- Keep the original full site stylesheet unchanged; new layout styles are additive in `styles/homepage.css`.
- Add `scripts/sync-shell.mjs` for one canonical header/footer source (from `index.html`) rather than maintaining six divergent copies.
- Review the homepage design and its visual continuity before moving on.

## Part 2 — Northside campaign hub [IMPLEMENTED — review pending]
- Keep the original image lightbox, photo galleries, site plans, traffic analysis, concerns, and county status notes — all content preserved.
- Organize the case as overview, status, concerns, site plans, photos, traffic evidence, timeline, broader land-use context and action.
- Embed the original eight-event interactive timeline without editing its HTML or core JavaScript. Its original mobile condensed/expanded behavior remains wired to the same IDs.
- Add an accessible, horizontally scrollable case jump navigation with stable anchors; use a dedicated additive `styles/northside.css` so site-wide CSS is not rewritten.
- Leave `timeline.html` as a standalone page for older external links, with an explicit link back to `northside.html#timeline`. Old homepage `/#timeline` now points directly to Northside.
- Add source links near the traffic comparison, key case figures and final Get Involved links.
- Browser QA for actual lightbox interaction, timeline expansion at 390px and keyboard navigation remains an explicit gate for Phase 5.

## Part 3 — Community Planning [IMPLEMENTED — review pending]
- Built a dedicated Community Planning page within the existing `community.html` route, preserving the old `#community-news` anchor and the exact approved Alliance flyer.
- Segmented the content into Public Meetings, Issues to Watch, How to Participate, and Official Resources, with clear jump navigation.
- Added a November 9 Albany Planning Commission meeting spotlight linked to the original agenda and official City calendar.
- Added cautious, source-linked cards for Knox Butte/Albany projects and data-center policy discussion; no assertion that policy is adopted or that Knox Butte is on the November 9 agenda.
- Added official Planning Division/Council/Commission resource directory and resident testimony guidance.
- Automatically switches the November 9 event into a past-meeting notice after November 9 (Oregon date) via `scripts/planning-updates.js`; homepage teaser updates in parallel.
- Styling isolated in `styles/planning.css`, leaving `styles/site.css` and original functionality untouched.
- Maintenance and source checklist: `SITE-PLANNING-EDITORIAL.md`.
- Human editor must still replace dated highlights with new verified events; responsive QA pending.

## Part 4 — Documents and Get Involved [IMPLEMENTED — review pending]
- Preserved all 21 archive entries, five filing-stage groups, four featured source cards, and the exact `scripts/site.js` archive-search handler.
- Added an introductory document guide, direct links to featured records and `#document-library`, and topic shortcuts for traffic, legal, site plans and testimony. `scripts/document-tools.js` dispatches the native search input event; it does **not** create a second filtering engine.
- Added a source-provenance note distinguishing County, applicant, and neighborhood-authored materials.
- On Get Involved, added a clear four-action menu: donate, yard signs, share materials, and connect. Existing original sign-drive instructions and original posters remain intact.
- The existing GoFundMe link, $50 donation sign offer, `savingpowers@gmail.com` sign/receipt contact, Facebook group, and `SavingPowersAvenue@gmail.com` general contact are preserved.
- Added a photos/video sharing prompt without an unrequested file upload service. Rephrased outdated pre-filing legal appeal language to avoid asserting current filing status.
- Additive page CSS lives in `styles/documents.css` and `styles/get-involved.css`. The original shared CSS/JS and content assets remain unchanged.
- Phase 4 interactive/browser QA and release review remain open.

## Part 5 — QA and release
- Real desktop, tablet and 390px mobile checks; verify menu, timeline, document search, lightbox, deep links, images, PDFs, and keyboard interactions.
- Check dates, legal-appeal claims and the November 9 Albany Planning Commission notice before release.
- Replace preview-only noindex and add appropriate canonical URLs once the site is approved for production.
- Explicit owner approval to merge; verify production deployment READY and maintain rollback.

## Rollback
- Six-page source split immediately before Part 1: `backup/site-refresh-source-split-2026-11-07` at `e6d6677e0027959fe606f479c5d7aff36e4730d4`.
- Previous experimental V3: `backup/site-refresh-v3-2026-11-07` at `b4b858780ebcf44396ceb3af22062546e719c29a`.
- Current production has its own earlier recovery deployment and branch backups.

## Maintenance
- To edit navigation or the footer across pages, edit the canonical markup in `index.html`, then run `node scripts/sync-shell.mjs` and commit updated HTML. Run `node scripts/sync-shell.mjs --check` to detect divergence.
- No new front-end framework or Vercel build settings are required.

## Phase 2 handoff QA
- All 8 original timeline events are embedded in the Northside page, and the separate timeline page retains its copy for inbound URLs.
- No status/factual copy or citation target was deleted; section wrappers were only reordered and given stable anchors.
- The case jump navigation relies on native anchor links and respects the sticky header with `scroll-padding-top`.
- Date-sensitive appeal claims are left as originally published and must be checked before production deployment.

## Phase 3 handoff QA
- Preserve legacy `community.html#community-news`, but link new homepage teasers directly to `#meetings`, `#issues`, and `#resources`.
- Flyer's original 750x1004 AVIF asset remains unchanged; image stays a clickable full-size link.
- Meeting labels automatically age, but do not auto-claim an outcome or fabricate minutes.

## Phase 4 handoff QA
- Search the 21-file Documents archive for `traffic`, `legal`, and `site plan`; verify visible counts, group expansion, status feedback, and Clear restoration (no duplicate search handler).
- Confirm Get Involved's four jump links, unchanged donor instructions, live fundraiser destination, original two campaign posters, Facebook group, and both distinctly labeled contact addresses.
- Verify production `main` remains at the earlier approved content version; no work on `site-refresh` is automatically merged.
