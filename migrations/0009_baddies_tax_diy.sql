-- ── Baddies Tax DIY™ Database Schema Migration ──

CREATE TABLE IF NOT EXISTS diy_returns (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  return_code TEXT UNIQUE NOT NULL,
  taxpayer_id INTEGER,
  tax_year INTEGER NOT NULL DEFAULT 2025,
  filing_status TEXT NOT NULL DEFAULT 'single', -- single, mfj, mfs, hoh, qw
  filing_path TEXT NOT NULL DEFAULT 'diy', -- diy, diy_ai_assist, pro_review, full_prep
  complexity_level INTEGER NOT NULL DEFAULT 0, -- 0..5
  status TEXT NOT NULL DEFAULT 'in_progress', -- in_progress, review_ready, pro_review, efile_pending, efiled, accepted, rejected
  adjusted_gross_income REAL DEFAULT 0,
  taxable_income REAL DEFAULT 0,
  total_tax REAL DEFAULT 0,
  total_payments REAL DEFAULT 0,
  refund_amount REAL DEFAULT 0,
  balance_due REAL DEFAULT 0,
  assigned_pro_id TEXT,
  signature_method TEXT,
  form8879_signed_at TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS diy_interview_answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  return_code TEXT NOT NULL,
  question_id TEXT NOT NULL,
  category TEXT NOT NULL, -- personal, household, income, adjustments, deductions, credits, payments, state
  answer_json TEXT NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (return_code) REFERENCES diy_returns(return_code) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS diy_documents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  return_code TEXT NOT NULL,
  doc_type TEXT NOT NULL, -- w2, 1099_nec, 1099_misc, 1098_t, ssa_1099
  file_name TEXT NOT NULL,
  parsed_facts_json TEXT NOT NULL,
  confirmed_by_user INTEGER NOT NULL DEFAULT 0,
  confidence_score REAL DEFAULT 0.95,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (return_code) REFERENCES diy_returns(return_code) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS diy_efile_transmissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  transmission_id TEXT UNIQUE NOT NULL,
  return_code TEXT NOT NULL,
  submission_type TEXT NOT NULL DEFAULT 'federal', -- federal, state
  mef_xml_hash TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'queued', -- queued, transmitted, accepted, rejected
  rejection_codes TEXT,
  acknowledged_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (return_code) REFERENCES diy_returns(return_code) ON DELETE CASCADE
);
