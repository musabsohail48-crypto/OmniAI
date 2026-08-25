# ContentAI Toolkit

A production-oriented Next.js 14 + Supabase + Stripe + OpenAI starter for an all-in-one AI content toolkit.

## Included
- Dark neon SaaS UI matching the supplied mockup direction.
- Public marketing page with "what we provide" first.
- Login/signup required before entering the app/dashboard.
- Supabase Auth with server-side session refresh and protected routes.
- Supabase PostgreSQL schema with Row Level Security.
- AI generation API route with Zod validation and server-only OpenAI key.
- Pro/Business checkout with Stripe Checkout and a signed webhook.
- Usage limits stored server-side.
- Saved projects and generation history.
- Many ad-slot placeholders designed so ads can be added without breaking layout.
- Security headers, no exposed secrets, and webhook signature verification.
- Database backup/runbook documentation.

## Setup

1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase/schema.sql`.
3. Copy `.env.example` to `.env.local` and add credentials.
4. Install and run:
   `npm install`
   `npm run dev`
5. In Stripe, create recurring Pro and Business prices and add their Price IDs.
6. Create a Stripe webhook for `/api/stripe/webhook` and subscribe to checkout.session.completed, customer.subscription.updated, and customer.subscription.deleted.
7. In Supabase Auth, configure Site URL and Redirect URL:
   `http://localhost:3000/auth/callback`
8. Deploy the repo to Vercel and add the same environment variables in Vercel.

## Important
Payment and AI services cannot be made genuinely live without your own provider accounts/keys. The code is wired for them but deliberately does not contain fake secrets.

## Backup
See `docs/BACKUP.md`. Keep Supabase backups enabled on a suitable paid plan, export critical data regularly, and keep backups in a separate account/storage location. Never put the Supabase service-role key in client code or GitHub.