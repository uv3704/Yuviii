-- ==============================================================================
-- SUPABASE POSTGRESQL SCHEMA FOR YUVRAJ SINGH RATHORE PORTFOLIO
-- Execute this script in your Supabase Project -> SQL Editor
-- ==============================================================================

-- 1. Contact Messages Table
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  topic text default 'General Inquiry',
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.messages enable row level security;

-- Allow anonymous visitors / API to insert contact messages
create policy "Allow public inserts on messages"
  on public.messages for insert
  with check (true);

-- Allow authenticated users / service role to read messages
create policy "Allow read access to messages"
  on public.messages for select
  using (true);

-- ------------------------------------------------------------------------------

-- 2. Guestbook & Peer Signatures Table
create table if not exists public.guestbook (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text default 'Visitor / Engineer',
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.guestbook enable row level security;

-- Allow public read access to guestbook entries
create policy "Allow public read on guestbook"
  on public.guestbook for select
  using (true);

-- Allow public to sign the guestbook
create policy "Allow public insert on guestbook"
  on public.guestbook for insert
  with check (true);

-- Insert sample peer endorsements
insert into public.guestbook (name, role, message)
values 
  ('Dev Lead & Mentor', 'Senior Engineering Lead', 'Strong foundational problem-solving and excellent command over Java, FastAPI, and RAG architectures.'),
  ('Collaborator', 'Full-Stack Developer', 'Clean architecture, rapid delivery, and deep knowledge of distributed backend systems.')
on conflict do nothing;

-- ------------------------------------------------------------------------------

-- 3. Project Star & Reaction Metrics Table
create table if not exists public.reactions (
  slug text primary key,
  count integer default 1 not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.reactions enable row level security;

-- Allow public read & upsert for reaction counters
create policy "Allow public read on reactions"
  on public.reactions for select
  using (true);

create policy "Allow public insert/update on reactions"
  on public.reactions for all
  using (true)
  with check (true);

-- Seed initial reaction counts
insert into public.reactions (slug, count)
values 
  ('betterbee', 48),
  ('freelancer', 36),
  ('codestorm', 42),
  ('visionx', 29),
  ('academicrecords', 31),
  ('devpulse', 27),
  ('docuforge', 24)
on conflict (slug) do nothing;
