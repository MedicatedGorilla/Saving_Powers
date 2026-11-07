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

## Part 2 — Northside campaign hub [NEXT]
- Keep the original image lightbox, photo galleries, site plans, traffic analysis, concerns, and status notes.
- Reorganize sections around a case overview, concerns, evidence, site plans, historical timeline, then actions.
- Bring the existing 8-event timeline into the Northside case rather than requiring a standalone nav destination.
- Preserve `timeline.html` links or redirect them carefully to the new `northside.html#timeline`.
- Test the native dialog image viewer and mobile timeline controls.

## Part 3 — Community Planning
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
