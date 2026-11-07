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

## Part 3 — Community Planning [NEXT]
- Expand Cary's original requested content into a useful, maintained resource: the approved Alliance crossroads flyer, meeting announcements, Knox Butte planning projects, data-center planning discussion, City Council and Planning Department contacts.
- Distinguish dated meetings from evergreen information; after November 9, archive or update its meeting notice.
- No unsupported claim that Knox Butte is on a specific posted agenda.
- Consider migrating `community.html` to `planning.html` if worth it, preserving legacy links.

## Part 4 — Documents and Get Involved
- Preserve the searchable 21-document index; add clearer key-document previews and case-specific links.
- Consolidate donations, $50 yard signs, campaign graphics, volunteering, contacts and social sharing.
- Remove duplicate CTAs elsewhere only when it helps navigation.

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
