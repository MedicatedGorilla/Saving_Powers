#!/usr/bin/env node
/**
 * Sync the same header/navigation and footer across all static pages.
 * The canonical shared shell lives in index.html. The generated static HTML
 * remains committed and is served directly by Vercel without a build step.
 *
 *   node scripts/sync-shell.mjs         # write updated copies
 *   node scripts/sync-shell.mjs --check # CI / preflight: do not write
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pages = ["index.html", "northside.html", "timeline.html",
               "documents.html", "community.html", "get-involved.html"];
const check = process.argv.includes("--check");
function read(page) { return readFileSync(join(root, page), "utf8"); }
const headerPattern = /<header class="site-header">[\s\S]*?<\/header>/;
const footerPattern = /<footer class="site-footer">[\s\S]*?<\/footer>/;
const home = read("index.html");
const sourceHeader = home.match(headerPattern)?.[0];
const sourceFooter = home.match(footerPattern)?.[0];
if (!sourceHeader || !sourceFooter) throw Error("Missing canonical header/footer in index.html");
const cleanHeader = sourceHeader.replace(/ aria-current="page"/g, "");
let drift = 0;
for (const page of pages) {
  const old = read(page);
  if (!headerPattern.test(old) || !footerPattern.test(old))
    throw Error("Missing header/footer in " + page);
  // Timeline remains a subpage of the Northside campaign in the primary nav.
  const active = page === "timeline.html" ? "northside.html" : page;
  const navLink = new RegExp('(<a(?: class="nav-cta")?) href="' + active.replace(".", "\\.") + '"', "g");
  const newHeader = cleanHeader.replace(navLink,
    '$1 aria-current="page" href="' + active + '"');
  const next = old.replace(headerPattern, newHeader)
                  .replace(footerPattern, sourceFooter);
  if (next !== old) {
    drift++;
    if (check) console.error("Out of sync:", page);
    else { writeFileSync(join(root, page), next); console.log("Synced:", page); }
  }
}
if (check) {
  if (drift) process.exitCode = 1;
  else console.log("All shared headers and footers are synchronized.");
}
