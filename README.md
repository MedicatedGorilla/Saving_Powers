# Saving Powers — Vercel-ready static website

This project preserves the look of **savingpowers-single-file-v6.html**, with a single **index.html** containing page markup, CSS, and light JavaScript. All images are separated into `assets/`, and the **21-document archive** from the old website is fully indexed. No Node, React, Next.js, or build tooling required.

## Google Drive photography — now included

The shared Google Drive photo folder was successfully read and the exact **bike leaning against the tree** photo (`Field_Photo_Background.jpg`) is now the hero image, replacing the incorrect original image. Other volunteer-supplied drone and roadside photographs have been added to a standalone gallery. All selected photos are bundled locally in `assets/` as optimized WebP, with an original-file and Drive link mapping in `photo-sources.json`. The Open Graph social-preview photo is included too.

These photos are described as views of the Powers Avenue area rather than definitive surveyed parcel boundaries. Please check with the photo contributors if you need publication permission beyond your group's existing arrangements.

## Pending PDF migration — required before domain switch

The archive lists all **21 original public-record documents** and their old-site URLs, but the **PDF bytes are not included** in this ZIP because they were not in the photo Drive folder and fetching from the original public server was unavailable in this execution environment. The links continue to use the old website for now. **Do not switch `savingpowers.com` or `www.savingpowers.com` DNS until you migrate the PDFs**, as the old-site links may then point to your new Vercel deployment instead of the old server and break.

## Hosting on Vercel

1. Create a new **GitHub repository** (private is fine), and add the **contents** of this folder to the repository root. Do not nest them inside another folder unless you set Vercel's root directory accordingly.
2. In Vercel: Add New → Project → Import Git Repository. Choose **Framework Preset: Other** (static site), **Root Directory: `./`**, **Build Command: none**, **Output Directory: `./`** (or leave detected static defaults if appropriate).
3. Deploy to the temporary `.vercel.app` preview domain and inspect layout, document links, and mobile navigation.
4. After checking all links and confirming the domain is under your control, assign `savingpowers.com` and `www.savingpowers.com` in Vercel Project → Settings → Domains and use Vercel's displayed DNS records at the current registrar.
5. Keep existing domain/DNS running until the new deployment has been fully tested; point the DNS only when ready.

## Migrate PDFs from the old site

On a Linux/macOS/Windows computer with Python 3 and network access, **from the root project directory**:

```sh
python3 scripts/migrate_documents.py --dry-run
python3 scripts/migrate_documents.py
```

The migration script downloads the old site's 21 PDFs, verifies `%PDF-` file signatures, and changes `href`s in `index.html` from `www.savingpowers.com/Documents/...` to `documents/<name>.pdf` **only after the download succeeds**. Failures retain the original working link and can be retried. The full metadata lives in `documents-manifest.json`. Some staff report PDFs are more than 20 MB each, so allow enough space/time and check repository upload size limits.

If any files are no longer served at the original domain, retrieve them from the former site owner or county and place them in `documents/` under the corresponding `local_path` in the manifest; rerun the script to update links.

## Useful maintenance notes

- `index.html`: edit page copy, style, navigation, countdown and document presentation.
- `assets/`: optimized neighborhood photos from the provided Drive, aerial visualizations, and campaign flyers; the flyers already open full-resolution files.
- `documents/`: PDFs you own and host under `savingpowers.com/documents/...` once migrated.
- `documents-manifest.json`: authoritative list of the old site's 21 document names, groupings and URLs.
- `vercel.json`: optional caching and basic security headers; no SPA catch-all rewrite.
- `photo-sources.json`: provenance links for the Drive photos used on the site. The site does not depend on Drive for image hosting.
- The countdown is currently hard-coded to `2026-10-20T08:00:00-07:00`; update or remove after the October 20 meeting. It will display zeros afterward, not invent a new date.
- Before publishing, verify current procedural status and correct any stale wording or dates. Document links do not substitute for official court/county records.

## Test before go-live

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/` (from inside the project folder) and test with your desktop and iPhone. Check the 21 PDF links (remote until you run the migration), flyer thumbnails, archive search, countdown, and contact/GoFundMe links.
