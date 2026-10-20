# Saving Powers — static website update (October 19, 2026)

Static HTML/CSS/JavaScript for deployment on Vercel from `MedicatedGorilla/Saving_Powers`.

## Deploy this ZIP to the existing Git checkout

This archive has the website files **at the ZIP root**, not inside an extra `Saving_Powers` folder.

```bash
cd ~/bin/Saving_Powers
unzip -o ~/Downloads/Saving_Powers_Website_Update.zip
git status
git add -A
git commit -m "Update county meeting and mobile site"
git push origin main
```

Vercel should redeploy after `main` is updated. Inspect your `.vercel.app` preview before changing any custom-domain settings.

## County meeting status / countdown

* Before **Oct 20, 2026, 9:00 AM Pacific**: countdown to the scheduled meeting start.
* Oct 20, **9:00–11:00 AM Pacific**: `Meeting ongoing`. This is a *time-based website label*, not verified real-time meeting status.
* From **11:00 AM Pacific onward**: `Check back in a few hours` and a clear pending-verification message; no result or legal deadline is assumed.
* The status is client-side JS in `index.html`; no server, Git action, or scheduling is needed. **The post-11-AM message stays in place until a human edits the site.**
* Once a final written decision is verified, manually revise the status and appeal narrative. LUBA generally measures the notice-of-intent-to-appeal deadline from when the land-use decision becomes final, **not automatically from the meeting start**.

Official County meeting information: https://boc.bentoncountyor.gov/events/october-20-2026-board-of-commissioners-meeting/
Oregon LUBA FAQ: https://www.oregon.gov/luba/pages/frequently-asked-questions.aspx

## Photos and documents

* Site photos and illustrations are in `/assets/`.
* There are **21 document archive links**, currently pointing to the former site's `https://www.savingpowers.com/Documents/...` URLs.
* PDFs are **not yet bundled**. `scripts/migrate_documents.py` can help migrate them into `documents/`; confirm all URLs work before changing hosting.
* The single-file `Saving_Powers_Local_Preview.html` is **not** part of the Vercel ZIP: it embeds images for easy offline viewing. Document links and external donation/meeting URLs still need internet.

## Updating appearance

The `index.html` includes the CSS and JavaScript; there is no build step. Mobile navigation, timeline and photo gallery are streamlined with progressive disclosure. The desktop page retains the full archive and timeline.
