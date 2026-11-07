# Community Planning — content maintenance and sources

Development route: `community.html` (site navigation: **Community Planning**). Keep this route and the existing `#community-news` anchor so previous links work.

## What's on the page
- Alliance mission and the **exact user-approved Benton County Land Use at a Crossroads flyer**. Do not redraw or replace the original image without approval.
- Public meeting spotlight: November 9, 2026, 5:15 PM, Albany Planning Commission at City Hall.
- Long-lived issue cards: Knox Butte / other Albany planning projects and discussion of possible data-center land-use rules.
- Resident participation guide: finding notices, reading documents, choosing the correct comment process.
- City Planning Division, City Council, and Commission official resource links.

## Time-sensitive editorial lifecycle
The meeting card's calendar date is in `community.html`, while `scripts/planning-updates.js` has `eventDate = "2026-11-09"`. The script interprets the current date in **America/Los_Angeles**, and changes the meeting label to **Past meeting** after November 9. It also updates the related homepage teaser. With JavaScript disabled, the neutral original text remains factual.

**This is not an automatic news service.** It does not fetch new meeting agendas, report outcomes, or assume minutes have been published. A human editor should check the official meeting page after November 9, update the item, and ideally replace the spotlight with the next verified meeting and move this meeting into an archive. When changing the spotlight, update the event date in both the HTML and the script, including the homepage teaser.

## Official information verified November 7, 2026
- City Planning Projects: https://albanyoregon.gov/planning/projects
- City Planning Division: https://albanyoregon.gov/planning (planning desk 541-917-7550)
- Planning Commission: https://albanyoregon.gov/council/groups/plc
- Official city calendar: https://albanyoregon.gov/calendar
- City Council: https://albanyoregon.gov/council
- City Council meeting materials: https://albanyoregon.gov/council/materials
- Existing City November 9 agenda link used on the approved site: https://albanyoregon.gov/mnt/html/citycouncil/bcc/archive/2026/plc_20261109_agd.pdf

## Accuracy / legal boundaries
- The November 9 agenda lists matters near Clover Ridge Road NE and a public right-of-way vacation. **Do not claim a Knox Butte hearing is scheduled** based on that agenda.
- Discussion of data-center standards does **not** establish that new regulations were adopted.
- A letter to a Council member is not necessarily the same as official testimony in an individual land-use case; follow the relevant notice's participation rules.
- Albany City planning and Benton County planning have different jurisdictions. Verify jurisdiction before directing residents to a given hearing or appeal.
- Date the last verification and update links if the City's pages change.

## QA
Check tablet, desktop and 390px mobile layouts; inspect flyer, all local links and meeting state before/on/after November 9, photo lightbox, Northside timeline, document search, and keyboard accessibility. Do not merge `site-refresh` into `main` before owner approval and full release checks.
