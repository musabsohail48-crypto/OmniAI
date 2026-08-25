# Vercel root structure — IMPORTANT

This repository itself is the Next.js project root. Do NOT move individual files out of
their folders when uploading to GitHub.

The important App Router files are:

app/page.tsx
app/layout.tsx
app/globals.css

Routes are folders under `app/`, for example:

app/dashboard/page.tsx       -> /dashboard
app/dashboard/tools/page.tsx -> /dashboard/tools
app/dashboard/templates/page.tsx -> /dashboard/templates
app/dashboard/pricing/page.tsx -> /dashboard/pricing
app/login/page.tsx            -> /login
app/signup/page.tsx           -> /signup

At Vercel:
Project Settings -> General -> Root Directory

Set Root Directory to the folder that contains BOTH:
- package.json
- app/

If package.json and app/ are at the repository root, leave Root Directory blank / `.`.

Build command: next build
Framework preset: Next.js
