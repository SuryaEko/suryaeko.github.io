-- =============================================
-- Surya Eko Personal Website — Seed Data
-- =============================================

-- PROFILE
INSERT INTO profile (name, role, location, bio, open_to_work) VALUES (
  'Surya Eko Indrawan',
  'Full-stack Developer',
  'Semarang, Jawa Tengah, Indonesia',
  'Pengembang berpengalaman dengan riwayat kerja yang kuat di industri hiburan. Memiliki keahlian teknis dalam Yii2, Python, Back-End Web Development, dan Ubuntu Server. Profesional di bidang teknik yang fokus pada solusi pengembangan yang solid.',
  true
);

-- EXPERIENCES
INSERT INTO experiences (type, company, role, start_date, end_date, is_current, location, description, sort_order) VALUES
('work', 'Visionic Indonesia', 'Full-stack Developer', '2018-01-01', NULL, true, 'Semarang, Jawa Tengah, Indonesia', 'Laravel, Yii, Vue, React, Node.js, dan pengembangan aplikasi web terintegrasi.', 1),
('work', 'IKSA', 'IT Specialist', '2018-02-01', '2022-01-01', false, 'Semarang, Jawa Tengah, Indonesia', '', 2),
('work', 'HAHO', 'IT Specialist', '2016-01-01', '2018-01-01', false, '', '', 3),
('work', 'Visionic Indonesia', 'Developer', '2015-01-01', '2016-01-01', false, 'Semarang, Jawa Tengah, Indonesia', '', 4),
('education', 'SMK N 11 Semarang', 'Siswa', '2012-01-01', '2015-01-01', false, 'Semarang', 'Web developer, mobile developer, game developer, multimedia, dan pembuat film.', 5);

-- SKILLS
INSERT INTO skills (name, category, sort_order) VALUES
('React', 'frontend', 1),
('Vue', 'frontend', 2),
('JavaScript', 'frontend', 3),
('TypeScript', 'frontend', 4),

('Laravel', 'backend', 5),
('PHP', 'backend', 6),
('Yii2', 'backend', 7),
('Node.js', 'backend', 8),
('Python', 'backend', 9),

('Ubuntu Server', 'tools', 10),
('Docker', 'tools', 11),
('GitHub', 'tools', 12),
('MySQL', 'tools', 13),
('Firebase', 'tools', 14);

-- PROJECTS (featured selection)
INSERT INTO projects (name, description, start_date, end_date, url, tech_stack, featured, sort_order) VALUES
('BAKPK Polines', 'Sistem Bagian Akademik, Kemahasiswaan, Perencanaan, dan Kerjasama (BAKPK). Fitur utama: integrasi master data Polines, implementasi pembayaran berbagai bank (Host-to-host & API), otomatisasi manajemen status mahasiswa berdasarkan pembayaran UKT.', '2021-11-01', '2022-04-01', 'https://bakpk.polines.ac.id/', ARRAY['Laravel', 'MySQL', 'API'], true, 1),

('Website Polines', 'Desain, pengembangan, dan migrasi situs utama Politeknik Negeri Semarang.', '2021-09-01', '2021-11-01', 'https://www.polines.ac.id/', ARRAY['PHP', 'MySQL', 'JavaScript'], true, 2),

('Event Certification Management — Fikri Organizer', 'Otomatisasi pembuatan sertifikat event, unggah ke Google Drive, dan pengiriman email ke peserta, panitia, pembicara, dan moderator menggunakan Google Drive API & Sendinblue API.', '2022-04-01', '2022-04-01', NULL, ARRAY['Node.js', 'Google Drive API', 'Sendinblue API'], true, 3),

('Sistem Konseling Online Upgris', 'Sistem konseling dan pelatihan untuk Universitas PGRI Semarang (Upgris).', '2021-08-01', '2021-11-01', 'https://skao.upgris.ac.id/', ARRAY['PHP', 'MySQL', 'JavaScript'], true, 4),

('Warehousing & Accounting — PT Anzaerara', 'Sistem pergudangan dan akuntansi perusahaan untuk PT Anzaerara Soeboer Group.', '2021-04-01', '2021-08-01', NULL, ARRAY['PHP', 'MySQL'], false, 5),

('PSMS Indra Karya', 'Sistem manajemen dan monitoring sanitasi.', '2021-09-01', '2021-10-01', 'https://psms.indrakarya.co.id/', ARRAY['PHP', 'MySQL'], false, 6),

('HAHO', 'Aplikasi jejaring sosial hiburan untuk merekrut talenta, kolaborasi kreatif, dan info audisi/event.', '2016-06-01', '2018-04-01', 'https://haho.co.id/', ARRAY['PHP', 'MySQL', 'Android'], true, 7),

('My Semarang Travel Guide', 'Aplikasi mobile panduan wisata multi-bahasa untuk Kota Semarang.', '2018-12-01', '2019-01-01', NULL, ARRAY['Android', 'Java'], false, 8);
