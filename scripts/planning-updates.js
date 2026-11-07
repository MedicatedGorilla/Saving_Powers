// Phase 3: Keep the dated November 9 Albany meeting information honest over time.
// The underlying HTML is neutral if JavaScript is unavailable. Do not infer outcomes.
(() => {
  const eventDate = "2026-11-09"; // City of Albany local calendar date.
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.filter(p =>
    p.type === "year" || p.type === "month" || p.type === "day"
  ).map(p => [p.type, p.value]));
  const today = values.year + "-" + values.month + "-" + values.day;
  const past = today > eventDate;
  const isToday = today === eventDate;
  const detailCard = document.querySelector("[data-planning-event]");
  const eventState = document.querySelector("[data-planning-meeting-state]");
  const pastNote = document.querySelector("[data-planning-meeting-after]");
  const teaserState = document.querySelector("[data-planning-home-state]");
  const teaserSummary = document.querySelector("[data-planning-home-summary]");
  if (detailCard) detailCard.dataset.meetingPast = String(past);
  if (eventState) eventState.textContent = past
    ? "Past meeting · November 9" : isToday
    ? "Meeting date · Today" : "Meeting scheduled · November 9";
  if (pastNote) pastNote.hidden = !past;
  if (teaserState) teaserState.textContent = past
    ? "Past meeting materials" : isToday ? "Meeting date · Today" : "Public meetings";
  if (teaserSummary) teaserSummary.textContent = past
    ? "The November 9 meeting date has passed. Find the agenda, records, and future updates from the City."
    : "November 9 at 5:15 PM. Find the agenda and official participation details.";
})();