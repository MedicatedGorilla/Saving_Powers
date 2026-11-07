# Phase 4 — Documents and Get Involved review

**Branch:** `site-refresh`. **Production:** `main` untouched. **Scope:** information organization and lightweight enhancements, not a reimplementation of functional components.

## Documents
- Original `documents.html` record section and its **all 21 PDFs** remain.
- Four featured source cards (County order, evidentiary rebuttal, legal rebuttal, traffic rebuttal) retained with original URLs.
- All five archive groups preserved exactly, including their `data-search` keys, `#document-search` input and `#document-search-status` accessible live count.
- New brief “how to use the record” entry point and links to the Northside campaign and timeline.
- Topic shortcuts **Traffic**, **Legal**, **Site plans**, **Testimony**, **Clear** reuse the original `scripts/site.js` input handler: `scripts/document-tools.js` assigns a query and dispatches `input`. The search engine remains in one place.
- Additive `styles/documents.css` styles shortcuts and supporting UI. Site-wide styling unchanged.

## Get Involved
- A new four-choice entry bar routes to `#support`, `#yard-signs`, `#campaign`, and `#help`.
- Donations still go to `https://www.gofundme.com/f/protect-our-neighborhood-and-wildlife`. No new payment provider, donor storage, tracking, or checkout flow.
- Entire original sign-drive section retained, including **$50+ sign**, instruction not to donate anonymously if claiming a sign, tax-deductible receipt request and `savingpowers@gmail.com`.
- Original two campaign posters, original display and image viewer hooks retained.
- Community photo/video tips added with a mailto to the existing general contact `SavingPowersAvenue@gmail.com`. The group Facebook link and existing general contact are preserved.
- The claim that the group is “actively preparing a LUBA challenge” was replaced by durable participation copy; check current appeal filings before claiming status on the public site.
- Additive `styles/get-involved.css`; original `styles/site.css` not altered.

## Acceptance checklist
- Desktop and 390px mobile: header, cards, search controls, yard sign/photo sections, campaign posters, keyboard focus, and no horizontal overflow.
- Documents: search `traffic`, `legal`, `site plan`; verify original count updates, only matching entries appear, Clear restores 21 and no collapsed groups conceal matches unexpectedly.
- Verify local and external links, no duplicated section IDs, original files, and image viewer interaction.
- Production review: fundraiser/receipt wording, tax-deductibility verification already supplied by owner, appeal/court status, and November 9 meeting notice (handled separately in Phase 3).
- **Do not merge** until owner explicitly authorizes and Phase 5 checks pass.

## Rollback
- Phase 3 pinned at `backup/site-refresh-phase3-2026-11-07` (commit `838f404954e675fc45c5bfbeb7964bd159e04d04`).
- Existing Phase 1, original six-page split, and V3 backups remain available.

## Browser QA results — November 7, 2026
Preview tested: https://savingpowers-git-site-refresh-ty8nkrc2s4-1024.vercel.app/

**Documents page:** browser confirmed original 4 featured cards, 21 archive documents in 5 groups, correct linked source URLs, no visible desktop layout overlap. Clicking **Traffic** set search to `traffic` and showed **2 matching documents** (Greenlight rebuttal, Sandow Engineering Traffic Study). Clicking **Legal** showed **2 matching documents** (Saving Powers Final Legal Rebuttal, Northside Final Legal Arguments). **Clear** restored input to empty, the live status to **21 documents**, and all filing groups. Archive jump navigation worked. These checks exercise the new shortcut listener together with the original archive search; no replacement search engine was required.

**Get Involved page:** browser confirmed Donate, Get a sign, Share materials, Connect cards each scroll to their respective anchors. Tested support → yard-sign anchor and return to support. Original GoFundMe destination, sign instructions, two poster image URLs, Facebook group, and both contact email roles verified. No visible desktop broken images, overflow or overlaps. Payment links and email links were inspected but not submitted/used.

**Known outstanding work:** 390px real responsive browser test was not available in the browser session; must be done in Phase 5. Inherited photo viewer modal/lightbox behavior and keyboard access also require hands-on verification before launch. The November 9 meeting notice and current appeal status must be reviewed at final release. Do not merge while these release gates remain open.
