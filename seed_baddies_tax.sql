-- Seed Data for Baddies Tax OS™

DELETE FROM verification_items;

INSERT INTO verification_items (priority, section, brand, item, detail, status, blocking) VALUES 
('P0','legal-entity','baddies_tax','Legal Entity Confirmed — Baddies Tax Services LLC','EIN, formation in GA, registered agent, business address confirmed.', 'verified', 1),
('P0','credentials','baddies_tax','PTIN Active — Master Office Preparers','Active PTIN renewal verified with IRS tax professional portal.', 'verified', 1),
('P0','credentials','baddies_tax','EFIN Active — Service Bureau E-File Authority','Active EFIN tracking and IRS e-file application summary verified.', 'verified', 1),
('P0','compliance','baddies_tax','Circular 230 & IRC §7216 Written Policies','Written Information Security Plan (WISP) & §7216 consent forms ready.', 'verified', 1),
('P0','domains','baddies_tax','Domain Primary — baddiestaxos.com','SSL/TLS universal certificate active via Cloudflare.', 'verified', 1);

DELETE FROM offices;

INSERT INTO offices (office_code, office_name, owner_name, owner_email, phone, address, city, state, zip, efin_masked, software_seats, active_preparers, status) VALUES
('BTX-ATL-01', 'Baddies Tax Services — Atlanta HQ', 'Rick Jefferson', 'rick@baddiestax.com', '(404) 555-0199', '100 Tax Command Way', 'Atlanta', 'GA', '30303', 'XX-XXX891', 10, 5, 'active'),
('BTX-MIA-02', 'Baddies Tax Services — Miami Bureau', 'Elena Rodriguez', 'elena@baddiestax.com', '(305) 555-0144', '400 Brickell Ave', 'Miami', 'FL', '33131', 'XX-XXX412', 5, 3, 'active');

DELETE FROM credentials;

INSERT INTO credentials (professional_name, credential_type, masked_identifier, state_jurisdiction, issue_date, expiration_date, status, office_id) VALUES
('Rick Jefferson', 'PTIN', 'PXXXX8921', 'GA', '2026-01-01', '2026-12-31', 'active', 1),
('Rick Jefferson', 'EFIN', 'XX-XXX891', 'US', '2026-01-01', '2027-12-31', 'active', 1),
('Elena Rodriguez', 'EA', 'EA-00129481', 'FL', '2025-05-15', '2028-05-14', 'active', 2),
('Marcus Vance', 'CPA', 'CPA-GA-48912', 'GA', '2024-02-01', '2027-02-01', 'active', 1);
