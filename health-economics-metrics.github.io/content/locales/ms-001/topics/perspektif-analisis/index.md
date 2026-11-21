# Perspektif Analisis

Perspektif menentukan kos dan manfaat *siapa* yang dikira dalam sesuatu analisis ekonomi: pembayar, penyedia atau masyarakat keseluruhan. Intervensi yang sama boleh kelihatan cemerlang dari satu perspektif dan teruk dari perspektif lain.

## Mengapa ia penting

Setiap penilaian ekonomi mesti menyatakan perspektifnya di awal, kerana perspektif menentukan butiran baris yang wujud:

- **Perspektif pembayar** (cth., pesuruhjaya NHS, penanggung insurans): hanya kos yang dibayar balik oleh pembayar.
- **Perspektif penyedia** (cth., trust hospital): kos penyampaian dalaman, kakitangan, harta tanah.
- **Perspektif masyarakat**: segala-galanya — termasuk masa pesakit, perjalanan, penjagaan tidak formal oleh keluarga dan kehilangan produktiviti kepada majikan.

Kes rujukan NICE menggunakan perspektif **NHS dan Perkhidmatan Sosial Peribadi (PSS)** untuk kos. Panel Kedua AS mengenai Kos-Keberkesanan mengesyorkan pelaporan kedua-dua analisis sektor penjagaan kesihatan dan masyarakat dengan "inventori impak" yang menyenaraikan apa yang disertakan.

## Matematiknya

Tiada formula — peraturan pengskopan yang digunakan sebelum sebarang matematik:

```
Kategori kos/manfaat yang disertakan = f(perspektif)
```

Semakan berguna: bina jadual inventori impak dengan satu baris bagi setiap kos/manfaat dan satu lajur bagi setiap perspektif, dan tandakan sel mana yang dikira.

## Contoh penyelesaian

Aplikasi penyemak simptom mengalihkan 10,000 lawatan GP setahun kepada penjagaan kendiri.

- **Pembayar (NHS)**: menjimatkan 10,000 × £42 bagi setiap konsultasi GP = **£420,000/tahun** — sangat positif.
- **Penyedia (amalan GP)**: jika amalan dibayar secara kapitasi, pendapatan mereka tidak berubah tetapi beban kerja berkurang — sedikit positif.
- **Masyarakat**: tambah masa perjalanan dan menunggu pesakit yang dijimatkan, katakan 10,000 × 2 jam × £15/jam = £300,000 nilai masa; tetapi tolak kemudaratan jika 2% diyakinkan secara salah dan hadir kemudian, lebih sakit, pada 200 × £3,000 = £600,000 rawatan tambahan. Bersih masyarakat: 420,000 + 300,000 − 600,000 = **£120,000/tahun** — positif, tetapi dikuasai oleh andaian keselamatan.

Aplikasi yang sama, tiga jawapan berbeza. Pengisytiharan perspektif itulah yang menjadikan angka boleh dibandingkan dan jujur.

## Kaitan dengan kejuruteraan perisian

ROI alat dan platform juga mempunyai perspektif:

- **Bajet pasukan ("pembayar")**: adakah yuran lesen muat dalam pusat kos saya?
- **Organisasi platform ("penyedia")**: jumlah kos termasuk integrasi, sokongan dan penyelenggaraan.
- **Syarikat ("masyarakat")**: sertakan impak pelanggan, eksternaliti keselamatan dan masa setiap pasukan yang terjejas.

Alat CI yang murah bagi pasukan pembeli tetapi menolak kerja migrasi kepada 40 pasukan lain ialah versi perisian bagi peralihan kos — hanya kelihatan dari perspektif yang lebih luas. Nyatakan perspektif dalam setiap kes perniagaan; penyemak tidak dapat mencabar andaian yang tidak mereka lihat.

## Perangkap

- **Pertukaran perspektif secara senyap**: mengira manfaat masyarakat tetapi hanya kos pembayar menjadikan apa-apa sahaja kelihatan kos-efektif.
- **Pengiraan berganda** apabila perspektif digabungkan (cth., mengira temujanji GP yang dijimatkan sebagai penjimatan pembayar dan penjimatan masa pesakit sedangkan angka pembayar sudah termasuk masa kakitangan).
- **Mengabaikan peralihan kos**: "penjimatan" yang hanya memindahkan kos kepada pesakit, penjaga atau jabatan lain.

## Sumber

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
