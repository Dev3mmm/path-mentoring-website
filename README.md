# P.A.T.H. Website (Preparing Adolescents Through Horizons)

US-based community mentoring nonprofit. Goal: **zero recurring cost except the domain.**

## Stack (decided)
- **Plain HTML + CSS + a little vanilla JS.** No framework, no CMS, no database, no build step. Nothing to patch, expire or pay for.
- **Hosting: Cloudflare Pages** (free, unlimited bandwidth, works with a private repo, auto-deploys on `git push`). Fallback: Vercel / Netlify free.
- **Domain:** register at Cloudflare Registrar (at-cost, no renewal markup). Prefer `.org` (nonprofit trust). Client owns the account.
- **Contact / sign-up forms:** Web3Forms or Formspree free tier (emails the client; no backend).
- **Email at the domain:** Cloudflare Email Routing (free) forwarding `hello@domain.org` to the client's Gmail.
- **Analytics:** Cloudflare Web Analytics (free, no cookie banner).
- **Photos:** WebP, compressed, self-hosted in `/assets`.

## Structure
```
design-a-scrapbook/   Taped-photo collage
design-b-transit/      Transit-map concept
design-c-cinematic/    Film-title concept
design-d-foundation/   Official, institutional (recommended)
design-e-pathways/     Official, interactive pathway explorer
index.html            Chooser page for client review
```
After the client picks, the winning design becomes the site root and gets extra pages
(About, Programs, Events, Get Involved, Donate, Contact, Privacy).

## Placeholders to fill before launch
- Meeting location, city/state, phone, email
- Real photos, logo, board/mentor bios
- Whether they're a registered 501(c)(3) (affects Donate page and wording)
- Domain name
- Mentor screening / youth-safety policy page (strongly recommended for any youth program)

## Notes
- All photos in `assets/img` are AI-generated placeholders. Replace with real program photos (with written consent) before launch.
- Items marked [confirm] (safety commitments, eligibility, fees) are drafts for P.A.T.H. leadership to finalize.
