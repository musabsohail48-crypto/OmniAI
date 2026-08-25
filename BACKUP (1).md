# Security + Backup Runbook

## Database
- Supabase is the system of record.
- Enable Supabase automated backups/PITR on the plan that supports your production requirements.
- Keep a second, independent periodic export of important tables (profiles, subscriptions, projects, generations).
- Encrypt backup files and restrict access to the backup storage.
- Test a restore periodically; a backup that has never been restored is not a verified backup.

## Secrets
Never commit:
- SUPABASE_SERVICE_ROLE_KEY
- OPENAI_API_KEY
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET

Only the public Supabase URL and anon key are allowed in browser code.

## Recovery
1. Create/restore the Supabase database.
2. Run `supabase/schema.sql` if rebuilding from scratch.
3. Restore data exports.
4. Re-add Vercel environment variables.
5. Redeploy.
6. Test login, generation, checkout and webhook events.

## Operational security
- Keep Vercel and Supabase accounts protected with strong unique passwords and MFA.
- Use separate development and production projects.
- Rotate provider keys if exposed.
- Review Stripe webhook logs and Supabase auth logs.
- Do not store raw payment card data. Stripe handles payment details.