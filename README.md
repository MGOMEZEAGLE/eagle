# Eagle Network Solutions — Website

Static marketing site. **No build step.** HTML + CSS, with React/Babel and Google Fonts loaded from CDN and compiled in the browser.

## Pages
- `index.html` / `Homepage.html` — Home
- `Solutions.html` — Solutions (4 tabs)
- `About.html` — About Us (Who We Are / Our Team / Customer Reviews)
- `Contact.html` — Contact (lead-gen form)
- `Blog.html` — Blog & News

## Deploy to Vercel

This is a plain static site, so pick whichever is easiest:

**Option A — Vercel CLI (fastest)**
1. Install once: `npm i -g vercel`
2. In this folder, run: `vercel`
3. Accept the defaults. When asked for settings, there is **no build command** and the **output directory is `.` (this folder)**.

**Option B — GitHub**
1. Push this folder to a new GitHub repo.
2. In the Vercel dashboard: New Project → import the repo.
3. Framework Preset: **Other**. Build Command: leave empty. Output Directory: leave as root. Deploy.

**Option C — Drag and drop**
Some Vercel flows accept a folder drop in the dashboard. Drop this whole folder; Vercel serves it statically.

The root URL loads `index.html`. Page-to-page links use real filenames (e.g. `/Solutions.html`).

## Notes
- Replace the labeled image placeholders in `assets/` with real photos when ready.
- The contact form and newsletter are front-end only (they show a success state but do not submit anywhere yet). Wire them to your CRM/form handler when ready.
