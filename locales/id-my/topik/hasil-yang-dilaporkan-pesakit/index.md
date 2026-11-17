# Hasil yang Dilaporkan Pesakit (PROM, PREM, MCID)

PROM adalah instrumen terstandarisasi di mana pesakit melaporkan status-kesihatan mereka sendiri (gejala, fungsi, kualiti hidup); PREM menangkap *pengalaman* perawatan. **MCID** — perbedaan minimal penting-secara-klinis — adalah perubahan-skor terkecil yang benar-benar dianggap pesakit sebagai bermanfaat: batas yang harus dilewati klaim perbaikan apa pun.

## Mengapa Ini Penting

PROM adalah mata uang efikasi utama untuk kesihatan digital: aplikasi jarang menggerakkan mortalitas, tetapi mereka dapat secara kredibel menggerakkan skor gejala tervalidasi. Instrumen yang penting sedikit dan terstandarisasi — **PHQ-9** (depresi, 0–27; pita keparahan pada 5/10/15/20), **GAD-7** (kecemasan, 0–21; pita pada 5/10/15), **EQ-5D** (utilitas untuk [QALY](../tahun-kehidupan-yang-disesuaikan-kualiti/)) — dan regulator, badan HTA, dan pembayar menerimanya justru kerana mereka dapat dibandingkan antar produk dan uji-coba. MCID adalah gerbang kejujuran: MCID PHQ-9 ≈ 5 poin, GAD-7 ≈ 4, indeks EQ-5D umumnya ~0,03–0,08 — perubahan PHQ-9 1,5-poin yang signifikan-secara-statistik pada sampel besar *nyata tetapi tidak bermakna-secara-klinis*, dan peninjau bukti akan mengatakan demikian.

## Perhitungan

```
Penilaian PROM: jumlah spesifik-instrumen (mis., PHQ-9 = Σ 9 item × 0–3)

Estimasi MCID:
  berbasis-jangkar:      perubahan skor di antara pesakit yang melaporkan "agak lebih baik"
  berbasis-distribusi:   ≈ 0,5 × SD skor dasar (heuristik kasar)

Pembingkaian kadar-respons (untuk uji-coba dan dosier):
  responden = pesakit yang membaik ≥ MCID (atau ≥50% untuk konvensi PHQ-9)
  NNT = 1 / (kadar responden_perawatan − kadar responden_kontrol)
  — lihat number-needed-to-treat.md
```

## Contoh yang Diselesaikan

Aplikasi dukungan-depresi, RCT vs daftar-tunggu, 12 minggu:

```
Perubahan PHQ-9: aplikasi −6,2 poin, kontrol −2,1 → selisih disesuaikan −4,1
Pemeriksaan MCID: 4,1 < 5 → selisih rata-rata di bawah MCID; laporkan responden sebagai gantinya:
  responden (penurunan ≥5-poin): aplikasi 48%, kontrol 22% → ARR 26%
  NNT = 1/0,26 ≈ 4 — empat pengguna dirawat per respons klinis tambahan

Jembatan ekonomi: keuntungan EQ-5D responden 0,06 bertahan 6 bulan
  = 0,03 QALY; per 1.000 pengguna: 260 responden ekstra × 0,03 = 7,8 QALY
  ≈ £156.000–£234.000 nilai kesihatan pada ambang NICE
```

Pembingkaian responden/NNT bertahan dalam tinjauan di mana selisih-rata-rata sub-MCID akan diabaikan.

## Hubungan dengan Rekayasa Perangkat Lunak

PROM adalah masalah pengumpulan-data yang secara unik diposisikan perisian untuk memecahkan: instrumen dalam-aplikasi mendapatkan kadar-penyelesaian dan kepadatan-longitudinal yang tidak pernah dicapai kertas, mengubah telemetri-produk rutin menjadi bukti kadar-HTA ([EQ-5D](../eq-5d/) adalah lima layar). Aturan rekayasa: gunakan instrumen tervalidasi *sebagaimana-tertulis* (penulisan-ulang membatalkannya — lisensi berlaku); jadwalkan pengukuran berdasarkan protokol, bukan kenyamanan keterlibatan (mengukur hanya pengguna aktif adalah bias kelangsungan-hidup — lihat [retensi](../retensi-dan-churn/)); dan kunci-versi data instrumen seperti skema apa pun — perubahan kata-kata di tengah-studi adalah korupsi data. PREM memetakan ke instrumen gaya-CSAT/NPS, dan pelajaran yang sama berlaku: terstandarisasi mengalahkan buatan-sendiri di mana pun audiensnya adalah pembayar. Untuk instrumen khusus produktivitas kerja, lihat [WPAI](../produktivitas-kerja-dan-gangguan-aktivitas/).

## Jebakan

- **Signifikansi statistik di bawah MCID** disajikan sebagai manfaat klinis — inflasi paling umum di bidang ini.
- **Regresi ke rata-rata**: pengguna mendaftar pada puncak-gejala; sebelum/sesudah lengan-tunggal sangat melebih-lebihkan — pembanding tidak dapat dinegosiasikan.
- **Belanja instrumen**: menjalankan PHQ-9, GAD-7, dan WHO-5, lalu melaporkan mana pun yang bergerak — daftarkan-sebelumnya yang primer.
- **Tekanan survei persetujuan-digital**: mendorong pengguna menuju respons-menguntungkan mengkorupsi instrumen (dan peninjau mengetahui kadar-dasarnya).

## Sumber

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
