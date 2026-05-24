create extension if not exists "uuid-ossp";

create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'admin' check (role in ('admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.menu_categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table public.menus (
  id uuid primary key default uuid_generate_v4(),
  category_id uuid references public.menu_categories(id) on delete set null,
  title text not null,
  description text not null,
  image_url text,
  menu_date date not null,
  tags text[] not null default '{}',
  portion text not null default '1 paket untuk 4-5 orang',
  is_halal boolean not null default true,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.catering_packages (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  price numeric(12,2) not null,
  cadence text not null,
  serving_info text not null,
  benefits text[] not null default '{}',
  is_featured boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.vendor_categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table public.vendors (
  id uuid primary key default uuid_generate_v4(),
  category_id uuid references public.vendor_categories(id) on delete set null,
  name text not null,
  image_url text,
  instagram_url text,
  description text not null,
  rating numeric(2,1) not null default 5.0,
  portfolio text[] not null default '{}',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.gallery (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text not null check (category in ('Catering', 'Wedding', 'Sweet Corner', 'Events', 'Behind The Scene')),
  image_url text not null,
  alt_text text,
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.inquiries (
  id uuid primary key default uuid_generate_v4(),
  inquiry_type text not null check (inquiry_type in ('wedding', 'event', 'daily_catering', 'corporate', 'vendor_collaboration', 'contact')),
  customer_name text not null,
  whatsapp text not null,
  email text,
  event_date date,
  guest_count integer,
  budget_min numeric(12,2),
  budget_max numeric(12,2),
  message text not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'proposal_sent', 'won', 'lost', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.faq (
  id uuid primary key default uuid_generate_v4(),
  question text not null,
  answer text not null,
  category text not null default 'general',
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  customer_name text not null,
  customer_role text,
  quote text not null,
  rating integer not null default 5 check (rating between 1 and 5),
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index menus_date_idx on public.menus(menu_date);
create index menus_category_idx on public.menus(category_id);
create index menus_tags_idx on public.menus using gin(tags);
create index vendors_category_idx on public.vendors(category_id);
create index gallery_category_idx on public.gallery(category);
create index inquiries_status_idx on public.inquiries(status);
create index inquiries_type_idx on public.inquiries(inquiry_type);
create index faq_category_idx on public.faq(category);

alter table public.users enable row level security;
alter table public.menu_categories enable row level security;
alter table public.menus enable row level security;
alter table public.catering_packages enable row level security;
alter table public.vendor_categories enable row level security;
alter table public.vendors enable row level security;
alter table public.gallery enable row level security;
alter table public.inquiries enable row level security;
alter table public.faq enable row level security;
alter table public.testimonials enable row level security;

create policy "Public can read published menus" on public.menus for select using (is_published = true);
create policy "Public can read active packages" on public.catering_packages for select using (is_active = true);
create policy "Public can read active vendors" on public.vendors for select using (is_active = true);
create policy "Public can read published gallery" on public.gallery for select using (is_published = true);
create policy "Public can read published faq" on public.faq for select using (is_published = true);
create policy "Public can read testimonials" on public.testimonials for select using (is_published = true);
create policy "Public can create inquiries" on public.inquiries for insert with check (true);

create policy "Admins manage users" on public.users for all using (auth.uid() = id);
create policy "Admins manage menu categories" on public.menu_categories for all using (auth.role() = 'authenticated');
create policy "Admins manage menus" on public.menus for all using (auth.role() = 'authenticated');
create policy "Admins manage packages" on public.catering_packages for all using (auth.role() = 'authenticated');
create policy "Admins manage vendor categories" on public.vendor_categories for all using (auth.role() = 'authenticated');
create policy "Admins manage vendors" on public.vendors for all using (auth.role() = 'authenticated');
create policy "Admins manage gallery" on public.gallery for all using (auth.role() = 'authenticated');
create policy "Admins manage inquiries" on public.inquiries for all using (auth.role() = 'authenticated');
create policy "Admins manage faq" on public.faq for all using (auth.role() = 'authenticated');
create policy "Admins manage testimonials" on public.testimonials for all using (auth.role() = 'authenticated');
