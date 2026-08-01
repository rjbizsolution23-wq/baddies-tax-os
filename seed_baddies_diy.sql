-- ── Baddies Tax DIY™ Seed Data ──

INSERT OR IGNORE INTO diy_returns (return_code, taxpayer_id, tax_year, filing_status, filing_path, complexity_level, status, adjusted_gross_income, taxable_income, total_tax, total_payments, refund_amount, balance_due)
VALUES 
('DIY-2025-001', 1, 2025, 'single', 'diy_ai_assist', 0, 'in_progress', 65000, 50400, 5600, 7200, 1600, 0),
('DIY-2025-002', 2, 2025, 'hoh', 'pro_review', 2, 'pro_review', 84000, 62100, 7100, 9400, 2300, 0),
('DIY-2025-003', 3, 2025, 'mfj', 'full_prep', 3, 'efile_pending', 142000, 112000, 15400, 14200, 0, 1200);

INSERT OR IGNORE INTO diy_documents (return_code, doc_type, file_name, parsed_facts_json, confirmed_by_user, confidence_score)
VALUES 
('DIY-2025-001', 'w2', 'Form_W2_Acme_Corp.pdf', '{"ein":"12-3456789","employer":"Acme Corp","wages":65000,"federal_withholding":7200,"ss_wages":65000,"ss_withholding":4030}', 1, 0.99);

INSERT OR IGNORE INTO diy_efile_transmissions (transmission_id, return_code, submission_type, mef_xml_hash, status)
VALUES
('TRX-FED-88401', 'DIY-2025-001', 'federal', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 'accepted');
