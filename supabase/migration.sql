-- =============================================
-- Surya Eko Personal Website — Database Schema
-- =============================================

-- 1. PROFILE
CREATE TABLE IF NOT EXISTS profile (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  role          TEXT NOT NULL,
  location      TEXT NOT NULL,
  bio           TEXT NOT NULL DEFAULT '',
  avatar_url    TEXT,
  open_to_work  BOOLEAN NOT NULL DEFAULT true,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. EXPERIENCES (work + education)
CREATE TABLE IF NOT EXISTS experiences (
  id            SERIAL PRIMARY KEY,
  type          TEXT NOT NULL CHECK (type IN ('work', 'education')),
  company       TEXT NOT NULL,
  role          TEXT NOT NULL,
  start_date    DATE NOT NULL,
  end_date      DATE,
  is_current    BOOLEAN NOT NULL DEFAULT false,
  location      TEXT NOT NULL DEFAULT '',
  description   TEXT NOT NULL DEFAULT '',
  sort_order    INT NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. PROJECTS
CREATE TABLE IF NOT EXISTS projects (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  description   TEXT NOT NULL DEFAULT '',
  start_date    DATE NOT NULL,
  end_date      DATE,
  url           TEXT,
  tech_stack    TEXT[] NOT NULL DEFAULT '{}',
  featured      BOOLEAN NOT NULL DEFAULT false,
  sort_order    INT NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. SKILLS
CREATE TABLE IF NOT EXISTS skills (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL UNIQUE,
  category      TEXT NOT NULL CHECK (category IN ('frontend', 'backend', 'tools', 'other')),
  sort_order    INT NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_experiences_type ON experiences(type);
CREATE INDEX IF NOT EXISTS idx_experiences_sort ON experiences(sort_order);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_sort ON projects(sort_order);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);

-- =============================================
-- Row Level Security (enable public read)
-- =============================================
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Allow anonymous read access to all tables
CREATE POLICY "Allow public read on profile"
  ON profile FOR SELECT USING (true);

CREATE POLICY "Allow public read on experiences"
  ON experiences FOR SELECT USING (true);

CREATE POLICY "Allow public read on projects"
  ON projects FOR SELECT USING (true);

CREATE POLICY "Allow public read on skills"
  ON skills FOR SELECT USING (true);
