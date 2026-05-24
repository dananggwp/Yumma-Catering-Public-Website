# Yumma Catering

Production-ready Next.js 15 application for an Indonesian catering and event organizer: daily catering subscription, wedding/event inquiry, vendor directory, AI assistant, and protected admin dashboard.

## Stack

- Next.js 15 App Router
- TypeScript
- TailwindCSS
- ShadCN-style UI primitives
- Framer Motion
- Lucide Icons
- Supabase Auth, PostgreSQL, Storage
- OpenAI API chatbot
- Vercel-ready deployment

## Local Setup

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

## Supabase Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Create an admin user in Supabase Auth.
4. Create Storage buckets for menu, vendor, and gallery images.
5. Set the environment variables in Vercel.

## Routes

- `/` landing/home platform page
- `/menu` weekly and monthly menu calendar
- `/paket` catering subscription packages
- `/wedding-event` wedding, sweet corner, event inquiry, budget estimator
- `/vendor` partner vendor directory
- `/galeri` Pinterest-style gallery with lightbox
- `/tentang` brand story
- `/kontak` contact and maps
- `/admin` protected dashboard
- `/api/chat` OpenAI-powered AI assistant

## Deployment

1. Push the repo to GitHub.
2. Import into Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

The app uses server components where practical, responsive image loading, metadata, Open Graph config, `sitemap.xml`, and `robots.txt`.
