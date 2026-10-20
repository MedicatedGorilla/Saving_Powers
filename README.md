# Saving Powers — October 20 vote and appeal-preparation update

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

## October 20 vote and appeal preparation

* On **October 20, 2026**, Benton County commissioners voted **2–1** in favor of Northside Church's proposal (case **LU-25-067**).
* The expired meeting countdown, live meeting-status script, and pre-meeting instructions were removed from the rendered page. The homepage and timeline now reflect the vote.
* The site emphasizes the **next three weeks as a critical organizing and fundraising period** while Saving Powers prepares a possible appeal to Oregon's Land Use Board of Appeals (LUBA).
* **Do not publish a fixed filing deadline until confirmed by counsel.** LUBA generally requires a Notice of Intent to Appeal within 21 days after a land-use decision becomes legally final, which is not necessarily the hearing date.
* The appeal messaging expresses **intent and preparation**, not a claim that a LUBA appeal has already been filed.
* The appeal/status text is static; update it manually when the written decision, legal finality, or filing status is confirmed.

Official Board meeting information: https://boc.bentoncountyor.gov/events/october-20-2026-board-of-commissioners-meeting/
Oregon LUBA FAQ: https://www.oregon.gov/luba/pages/frequently-asked-questions.aspx

## Photos and documents

* Site photos and illustrations are in `/assets/`.
* There are **21 document archive links**, currently pointing to the former site's `https://www.savingpowers.com/Documents/...` URLs.
* PDFs are **not yet bundled**. `scripts/migrate_documents.py` can help migrate them into `documents/`; confirm all URLs work before changing hosting.
* The single-file `Saving_Powers_Local_Preview.html` is **not** part of the Vercel ZIP: it embeds images for easy offline viewing. Document links and external donation/meeting URLs still need internet.

## Updating appearance

The `index.html` includes the CSS and JavaScript; there is no build step. Mobile navigation, timeline and photo gallery are streamlined with progressive disclosure. The desktop page retains the full archive and timeline.
