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

## October 2026 final County decision and appeal preparation

* The Board voted **2–1 on September 8** to approve the application in principle, and **2–1 again on October 20** to adopt formal findings and Order **D2026-085**. These were distinct votes within the same permit case (LU-25-067), not separate permit approvals. The October 20 vote was confirmed by an attendee; the written Notice of Decision confirms the order's adoption but does not report the vote tally.
* The two-page Benton County **Notice of Decision is dated October 21, 2026**. The notice says LUBA appeals may be filed within 21 days of the decision date.
* **November 10, 2026 is a conservative working deadline ONLY IF the legally final decision date was October 20.** Counsel must confirm the signed order and controlling deadline. Do not portray the notice date alone as establishing legal finality.
* The site describes appeal **preparation**, not an appeal already filed.
* The traffic section distinguishes the earlier **990-ADT county-staff projection** from the **683 east / 364 west ADT** forecast the Board accepted from Sandow Engineering’s revised church-submitted studies. The final findings say County-retained DKS Associates reviewed them and Public Works concurred. The website explicitly avoids claiming the county "ignored its own engineers" and describes **700 ADT** as a road-class planning benchmark rather than a legal limit.
* Update site after filing status and controlling deadline are confirmed.

County meeting and findings: https://bentoncoor.portal.civicclerk.com/event/1052/files/agenda/2992
LUBA FAQ: https://www.oregon.gov/luba/pages/frequently-asked-questions.aspx

## Photos and documents

* Site photos and illustrations are in `/assets/`.
* There are **21 document archive links**, currently pointing to the former site's `https://www.savingpowers.com/Documents/...` URLs.
* PDFs are **not yet bundled**. `scripts/migrate_documents.py` can help migrate them into `documents/`; confirm all URLs work before changing hosting.
* The single-file `Saving_Powers_Local_Preview.html` is **not** part of the Vercel ZIP: it embeds images for easy offline viewing. Document links and external donation/meeting URLs still need internet.

## Updating appearance

The `index.html` includes the CSS and JavaScript; there is no build step. Mobile navigation, timeline and photo gallery are streamlined with progressive disclosure. The desktop page retains the full archive and timeline.

<!-- Redeployment trigger: 2026-10-21; no website content changes. -->
