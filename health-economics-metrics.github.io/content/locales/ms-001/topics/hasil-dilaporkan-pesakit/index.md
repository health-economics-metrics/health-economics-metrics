# Hasil Dilaporkan Pesakit (PROM, PREM, MCID)

PROM ialah instrumen piawai di mana pesakit melaporkan status kesihatan mereka sendiri (simptom, fungsi, kualiti hidup); PREM menangkap *pengalaman* penjagaan. **MCID** — perbezaan penting klinikal minimum — ialah perubahan skor terkecil yang sebenarnya dirasai pesakit sebagai bermanfaat: palang yang mesti dilepasi oleh sebarang penambahbaikan yang dituntut.

## Mengapa ia penting

PROM ialah mata wang keberkesanan utama bagi kesihatan digital: aplikasi jarang menggerakkan kematian, tetapi ia boleh menggerakkan skor simptom yang disahkan secara boleh dipercayai. Instrumen yang penting sedikit dan piawai — **PHQ-9** (kemurungan, 0–27; jalur keterukan pada 5/10/15/20), **GAD-7** (kebimbangan, 0–21; jalur pada 5/10/15), **EQ-5D** (utiliti untuk [QALY](../tahun-hayat-terlaras-kualiti/)) — dan pengawal selia, badan HTA dan pembayar menerimanya tepat kerana ia boleh dibandingkan merentas produk dan percubaan. MCID ialah get kejujuran: MCID PHQ-9 ≈ 5 mata, GAD-7 ≈ 4, indeks EQ-5D lazimnya ~0.03–0.08 — perubahan PHQ-9 1.5 mata yang signifikan secara statistik pada sampel besar ialah *benar tetapi tidak bermakna secara klinikal*, dan penyemak bukti akan mengatakannya.

## Matematiknya

```
Pemarkahan PROM: hasil tambah khusus instrumen (cth., PHQ-9 = Σ 9 item × 0–3)

Anggaran MCID:
  berasaskan sauh:     perubahan skor dalam kalangan pesakit yang melaporkan "agak lebih baik"
  berasaskan taburan:  ≈ 0.5 × SD skor garis asas (heuristik kasar)

Pembingkaian kadar respons (untuk percubaan dan dosier):
  responden = pesakit bertambah baik ≥ MCID (atau ≥50% mengikut konvensyen PHQ-9)
  NNT = 1 / (kadar responden_rawatan − kadar responden_kawalan)
  — lihat number-needed-to-treat.md
```

## Contoh penyelesaian

Aplikasi sokongan kemurungan, RCT lwn senarai menunggu, 12 minggu:

```
Perubahan PHQ-9: aplikasi −6.2 mata, kawalan −2.1 → perbezaan terlaras −4.1
Semakan MCID: 4.1 < 5 → perbezaan min di bawah MCID; laporkan responden sebaliknya:
  responden (penurunan ≥5 mata): aplikasi 48%, kawalan 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — empat pengguna dirawat bagi setiap respons klinikal tambahan

Jambatan ekonomi: keuntungan EQ-5D responden 0.06 berterusan 6 bulan
  = 0.03 QALY; bagi setiap 1,000 pengguna: 260 responden tambahan × 0.03 = 7.8 QALY
  ≈ £156,000–£234,000 nilai kesihatan pada ambang NICE
```

Pembingkaian responden/NNT bertahan dalam semakan di mana perbezaan min sub-MCID akan ditolak.

## Kaitan dengan kejuruteraan perisian

PROM ialah masalah pengumpulan data yang perisian berada pada kedudukan unik untuk menyelesaikan: instrumen dalam aplikasi mendapat kadar penyiapan dan ketumpatan membujur yang tidak pernah dicapai kertas, menukar telemetri produk rutin menjadi bukti gred HTA ([EQ-5D](../eq-5d/) ialah lima skrin). Peraturan kejuruteraan: gunakan instrumen yang disahkan *secara verbatim* (menukar perkataan membatalkannya — pelesenan terpakai); jadualkan pengukuran mengikut protokol, bukan kemudahan penglibatan (mengukur hanya pengguna aktif ialah bias survivor — lihat [pengekalan](../pengekalan-dan-churn/)); dan kunci-versi data instrumen seperti skema mana-mana — perubahan perkataan pertengahan kajian ialah kerosakan data. PREM terpeta kepada instrumen gaya CSAT/NPS, dan pengajaran sama terpakai: piawai mengalahkan buatan sendiri di mana khalayaknya pembayar. Untuk instrumen khusus-produktiviti-kerja, lihat [WPAI](../kemerosotan-produktiviti-kerja-dan-aktiviti/).

## Perangkap

- **Signifikan secara statistik di bawah MCID** dibentangkan sebagai manfaat klinikal — penggembungan paling lazim dalam bidang ini.
- **Regresi ke purata**: pengguna mendaftar pada kemuncak simptom; sebelum/selepas lengan-tunggal melebih-lebihkan dengan besar — pembanding tidak boleh dirunding.
- **Membeli-belah instrumen**: menjalankan PHQ-9, GAD-7 dan WHO-5, kemudian melaporkan mana-mana yang bergerak — daftarkan awal yang primer.
- **Tekanan tinjauan persetujuan-digital**: menggesa pengguna ke arah respons yang menyenangkan merosakkan instrumen (dan penyemak tahu kadar asas).

## Sumber

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
