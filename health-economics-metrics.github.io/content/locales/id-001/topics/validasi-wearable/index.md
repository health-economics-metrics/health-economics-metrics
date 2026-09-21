# Validasi Wearable

Metrik validasi mengukur seberapa baik pengukuran sebuah wearable sesuai dengan standar-emas klinis (EKG untuk detak-jantung, polisomnografi untuk tidur): **MAPE**, korelasi-konkordansi, kesesuaian Bland–Altman — ditambah metrik operasional yang mengontrol kualitas-data dunia-nyata: **kepatuhan waktu-pakai** dan **kelengkapan data**.

## Mengapa Ini Penting

Validasi adalah prasyarat untuk segalanya di hilir: sebuah perangkat yang tidak dapat membuktikan kesesuaian dengan pengukuran-referensi tidak dapat menjangkarkan [titik-akhir digital](../titik-akhir-dan-biomarker-digital/), mendukung [penagihan RPM](../ekonomi-pemantauan-pasien-jarak-jauh/), atau membawa klaim klinis. Ambang yang diterima-bidang untuk detak-jantung: **MAPE ≤5%** (ketat) atau **≤10%** (longgar) terhadap EKG. Titik-referensi dari literatur: MAPE detak-jantung-istirahat Oura Gen 3 1,67% (CCC 0,97); MAPE Fitbit Charge 6 ~5,5% — perangkat-konsumen sekarang merentang batas kelas-klinis, yang persis mengapa pengukuran penting per-perangkat dan per-kondisi.

## Perhitungan

```
MAPE = (1/n) Σ |terukur_i − referensi_i| / referensi_i × 100

CCC (korelasi-konkordansi) = kesesuaian termasuk baik korelasi
      maupun bias-sistematik (r Pearson dihukum oleh pergeseran
      posisi/skala)

Bland–Altman: bias-rata-rata ± 1,96 SD batas-kesesuaian — menunjukkan apakah
      kesalahan bergantung pada besarnya nilai

Gerbang operasional:
Kepatuhan waktu-pakai = waktu dipakai / waktu protokol × 100
Kelengkapan data       = titik-data teramati / diharapkan × 100
```

Validasi harus dilaporkan **per kondisi-aktivitas** (istirahat, gerakan, tidur) dan per populasi — penginderaan-optik PPG memburuk dengan artefak-gerakan, kontak-buruk, dan warna-kulit lebih-gelap, mode-kegagalan yang terdokumentasi dan relevan-kesetaraan.

## Contoh yang Diselesaikan

Sebuah program bangsal-virtual memilih wearable pemantauan. Kandidat A: MAPE-istirahat 2,1%, MAPE-olahraga 11,4%. Kandidat B: istirahat 3,8%, olahraga 6,9%.

```
Kasus penggunaan: deteksi pasien-memburuk di rumah — peringatan terpicu
pada HR-tinggi-berkelanjutan, sering selama aktivitas.
Judul-utama Kandidat A (2,1%) memenangkan brosur; kandidat B memenangkan
kasus-penggunaan: pada kondisi-relevan-peringatan (gerakan), kesalahan
11,4% A pada HR 100 = ±11 bpm — merentang seluruh pita-ambang peringatan,
menghasilkan eskalasi-palsu (masing-masing satu panggilan-keluar-perawat, ~£40)
atau kehilangan.

Ekonomi peringatan-palsu: 500 pasien × 2 peringatan-palsu-ekstra/minggu × £40
= £2,08 juta/tahun biaya-kesalahan dari memilih angka-validasi yang salah.
```

## Hubungan dengan Rekayasa Perangkat Lunak

Insinyur mengonsumsi data-validasi ketika memilih sensor dan *memproduksinya* ketika membangun fitur-pengukuran — kedua peran membutuhkan disiplin yang sama: uji pada kondisi-penerapan, bukan kondisi-demo (analog perangkat-lunak: menandai-tolok-ukur pada beban-kerja-produksi Anda, bukan milik vendor). Waktu-pakai dan kelengkapan adalah hasil-rekayasa-produk — kenyamanan, umur-baterai, desain ritual-pengisian-daya, dan keandalan-sinkronisasi menentukan apakah gerbang-penagihan RPM 16-hari-dalam-30 terpenuhi ([ekonomi pemantauan pasien jarak jauh](../ekonomi-pemantauan-pasien-jarak-jauh/)) dan apakah dataset uji-coba dapat-dianalisis. Perlakukan ketiadaan-data sebagai sinyal-yang-dirancang: bedakan "tidak-dipakai", "dipakai tapi tidak-ada-sinyal", dan "sinkronisasi-gagal" dalam skema sejak hari pertama — dikolaps menjadi null, mereka meracuni setiap analisis-hilir.

## Jebakan

- **MAPE agregat menyembunyikan kegagalan spesifik-kondisi** — jebakan contoh-diselesaikan.
- **Populasi-validasi ≠ populasi-penerapan**: usia, warna-kulit, tremor, obesitas semuanya menggeser kesalahan-sensor-optik; periksa demografi-studi.
- **Korelasi dilaporkan di mana kesesuaian dibutuhkan**: r Pearson tinggi dengan bias-sistematik masih salah-klasifikasi terhadap ambang absolut — bersikeras pada CCC/Bland–Altman.
- **Kelengkapan digembungkan oleh imputasi**: celah-yang-diisi dilaporkan sebagai data-teramati.

## Sumber

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
