# Vercel deployment

1. Push this folder to a private GitHub repository.
2. Import the repository into Vercel.
3. Framework: Next.js. Build command: `next build`.
4. Add every variable from `.env.example` under Vercel Project → Settings → Environment Variables.
5. Set `NEXT_PUBLIC_SITE_URL` to your real Vercel/custom-domain URL.
6. Redeploy after adding variables.
7. In Supabase Auth URL settings, add your production `/auth/callback`.
8. In Stripe webhook settings, add:
   `https://YOUR-DOMAIN.com/api/stripe/webhook`
9. Use Stripe test mode first. Only switch to live keys after a successful end-to-end test.
10. Keep the GitHub repository private while secrets/config are being prepared.
