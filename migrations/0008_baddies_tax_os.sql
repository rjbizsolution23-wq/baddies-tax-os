-- v8.0 Baddies Tax OS™ — Database Schema Migration
-- Complete Tax Agency-in-a-Box Operating System Data Layer

-- ── Taxpayers Extended Profile ──────────────────────────────
CREATE TABLE IF NOT EXISTS taxpayers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER UNIQUE NOT NULL,               -- Foreign key to clients table
  taxpayer_type TEXT DEFAULT 'individual',         -- individual | self_employed | business | non_profit
  filing_status TEXT,                              -- single | married_joint | married_separate | head_household | qualifying_surviving_spouse
  ssn_tin_masked TEXT,                              -- Masked identifier (e.g. XXX-XX-1234)
  dob TEXT,
  occupation TEXT,
  household_size INTEGER DEFAULT 1,
  dependents_count INTEGER DEFAULT 0,
  has_business INTEGER DEFAULT 0,
  business_entity_type TEXT,                      -- sole_prop | llc | s_corp | c_corp | partnership
  ein_masked TEXT,                                 -- Masked EIN (e.g. XX-XXX5678)
  prior_year_agi REAL,
  filing_jurisdictions TEXT,                      -- Comma-separated state codes (e.g. 'GA,NY,CA')
  preferred_preparer TEXT,
  assigned_office_id INTEGER,
  intake_completed_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);
CREATE INDEX IF NOT EXISTS idx_taxpayers_client ON taxpayers(client_id);
CREATE INDEX IF NOT EXISTS idx_taxpayers_type ON taxpayers(taxpayer_type);

-- ── Tax Cases (Prep & Resolution) ───────────────────────────
CREATE TABLE IF NOT EXISTS tax_cases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  case_number TEXT UNIQUE NOT NULL,                -- e.g. BTX-2026-8921
  client_id INTEGER NOT NULL,
  case_type TEXT NOT NULL DEFAULT 'preparation',   -- preparation | resolution | advisory | audit | notice_review
  tax_years TEXT NOT NULL,                         -- e.g. '2023,2024,2025'
  irs_notice_number TEXT,                          -- e.g. CP2000, LT11, CP504
  total_tax_debt REAL DEFAULT 0,
  resolution_strategy TEXT,                       -- installment_agreement | oic | cnc | penalty_abatement | innocent_spouse
  status TEXT NOT NULL DEFAULT 'new',              -- new | intake | docs_pending | under_review | in_progress | pending_signature | transmitted | accepted | resolved | closed
  assigned_preparer TEXT,
  assigned_reviewer TEXT,
  office_id INTEGER,
  engagement_fee REAL DEFAULT 0,
  payment_status TEXT DEFAULT 'unpaid',            -- unpaid | partial | paid | payment_plan
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);
CREATE INDEX IF NOT EXISTS idx_tax_cases_client ON tax_cases(client_id);
CREATE INDEX IF NOT EXISTS idx_tax_cases_status ON tax_cases(status);
CREATE INDEX IF NOT EXISTS idx_tax_cases_type ON tax_cases(case_type);

-- ── PTIN / EFIN Credentials ─────────────────────────────────
CREATE TABLE IF NOT EXISTS credentials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  professional_name TEXT NOT NULL,
  credential_type TEXT NOT NULL,                  -- PTIN | EFIN | EA | CPA | Attorney | State_Registration
  masked_identifier TEXT NOT NULL,                -- e.g. PXXXX1234 / XX-XXXXXX
  state_jurisdiction TEXT,
  issue_date TEXT,
  expiration_date TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',          -- active | pending_renewal | expired | suspended | under_review
  office_id INTEGER,
  evidence_url TEXT,
  verified_by TEXT,
  verified_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_cred_type ON credentials(credential_type);
CREATE INDEX IF NOT EXISTS idx_cred_expiry ON credentials(expiration_date);

-- ── Service Bureau Offices ──────────────────────────────────
CREATE TABLE IF NOT EXISTS offices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  office_code TEXT UNIQUE NOT NULL,               -- e.g. ATL-01
  office_name TEXT NOT NULL,
  owner_name TEXT NOT NULL,
  owner_email TEXT NOT NULL,
  phone TEXT,
  address TEXT, city TEXT, state TEXT, zip TEXT,
  efin_masked TEXT,
  software_seats INTEGER DEFAULT 1,
  active_preparers INTEGER DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'active',          -- active | onboarding | suspended | offboarded
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_offices_code ON offices(office_code);

-- ── Secure Intake Responses ─────────────────────────────────
CREATE TABLE IF NOT EXISTS intake_responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  form_type TEXT NOT NULL,                        -- 1040_individual | schedule_c | s_corp | irs_notice | resolution
  tax_year TEXT NOT NULL,
  payload_encrypted TEXT NOT NULL,                -- Encrypted / masked JSON intake submission
  completion_status TEXT DEFAULT 'submitted',     -- draft | submitted | verified | flagged
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);
CREATE INDEX IF NOT EXISTS idx_intake_client ON intake_responses(client_id);

-- ── Compliance Review Audit ────────────────────────────────
CREATE TABLE IF NOT EXISTS compliance_reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content_title TEXT NOT NULL,
  channel TEXT NOT NULL,                          -- funnel | email | sms | ad | social | document
  circular230_pass INTEGER DEFAULT 1,
  sec7216_consent_pass INTEGER DEFAULT 1,
  glba_pass INTEGER DEFAULT 1,
  tcpa_consent_pass INTEGER DEFAULT 1,
  claims_scan_status TEXT DEFAULT 'clean',        -- clean | flagged | rejected
  flagged_claims TEXT,                            -- JSON array of flagged sentences/phrases
  reviewed_by TEXT,
  reviewed_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_comp_review_status ON compliance_reviews(claims_scan_status);
