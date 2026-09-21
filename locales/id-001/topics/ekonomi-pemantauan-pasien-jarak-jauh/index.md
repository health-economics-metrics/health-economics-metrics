# Ekonomi Pemantauan Pasien Jarak Jauh

Ekonomi penggantian dan offset-biaya dari memantau pasien di rumah: di AS, tumpukan-pendapatan kode-CPT yang terdefinisi; dalam sistem kesehatan nasional, ekonomi penghindaran-admisi dan bangsal-virtual hingga substitusi **rumah-sebagai-rumah-sakit** penuh.

## Mengapa Ini Penting

RPM adalah tempat data-perangkat menjadi perawatan-kesehatan yang dapat-ditagih. Struktur Medicare AS (rata-rata nasional 2025) secara tidak biasa eksplisit:

```
99453  pengaturan & edukasi pasien       ~$19,73  satu-kali (setelah 16 hari data)
99454  penyediaan perangkat + transmisi  ~$43,03  per 30 hari — MEMERLUKAN ≥16 hari
                                              pembacaan dalam 30
99457  20 menit/bulan pertama manajemen  ~$47,87  memerlukan ≥20 menit tercatat
99458  setiap 20 menit tambahan          ~$38,49
```

Satu bulan-pasien yang patuh menumpuk menjadi sekitar **$90–130 PMPM**. Di sisi offset-biaya, program rumah-sebagai-rumah-sakit (pengecualian CMS Acute Hospital Care at Home: 300+ rumah sakit) menunjukkan ~$1.800–$3.000 dihemat per episode dibandingkan perawatan-rawat-inap dengan readmisi dan infeksi yang lebih rendah — demonstrasi paling jelas bahwa pemantauan plus perawatan-virtual dapat menggantikan sumber daya paling mahal dalam sistem, tempat-tidur-berstaf.

## Perhitungan

```
Pendapatan RPM (AS)  = terdaftar × fraksi-patuh-penagihan × tumpukan-kode PMPM
  — aturan 16-hari menjadikan kepatuhan waktu-pakai (wearable-validation.md)
    variabel pendapatan, dan aturan 20-menit menjadikan pencatatan
    waktu-klinis persyaratan rekayasa

Nilai gaya-NHS   = admisi dihindari × biaya marginal admisi
                  + hari-tempat-tidur digantikan × (biaya hari-rawat-inap − biaya hari-bangsal-virtual)
                  − biaya layanan (perangkat, platform, staf pemantauan)
  (lihat emergency-attendance-avoidance.md dan bed-days-saved.md untuk aturan
   atribusi dan biaya-marginal)
```

## Contoh yang Diselesaikan

Sebuah praktik AS mendaftarkan 400 pasien hipertensi; 70% memenuhi ambang 16-hari dalam bulan tipikal; menit manajemen tercatat untuk 60%:

```
Pendapatan bulanan ≈ 400 × [0,70 × 43,03 + 0,60 × 47,87] = 400 × 58,84 ≈ $23.500
Tahunan ≈ $282.000; biaya layanan (perangkat $12/bln, staf 0,8 FTE) ≈ $180.000
Margin ≈ $100rb/tahun — dan perhatikan tuasnya adalah tuas-rekayasa:
mengangkat kepatuhan 16-hari dari 70% → 85% menambah ~$31rb/tahun
(kenyamanan perangkat, keandalan sinkronisasi, desain pengingat).
```

Cermin NHS: bangsal-virtual 50-tempat-tidur pada okupansi 80% yang menggantikan hari-rawat-inap pada penghematan-bersih £150/hari ≈ 50 × 0,8 × 365 × 150 ≈ **£2,19 juta/tahun** bruto — terhadap platform, perangkat, dan tim perawat-komunitas yang menjaganya.

## Hubungan dengan Rekayasa Perangkat Lunak

Platform RPM adalah produk langka di mana **waktu-aktif dan keandalan-sinkronisasi berubah langsung menjadi pendapatan** (satu minggu sinkronisasi-gagal merusak gerbang-16-hari untuk sebuah kohort) dan di mana pelacakan-waktu tingkat-audit (aturan 20-menit) adalah fitur kelas-satu, bukan pemikiran-belakangan. Bangun untuk: dasbor kepatuhan per-pasien yang mengungkap bulan-penagihan-berisiko selagi masih dapat-dipulihkan; jejak data berstempel-waktu, tahan-manipulasi (audit pembayar bersifat rutin); dan penyetelan ekonomi-peringatan — setiap peringatan mengonsumsi menit tim-pemantauan, yang merupakan baik unit-yang-dapat-ditagih maupun sumber-daya-langka ([ekonomi skrining](../ekonomi-skrining/) mengatur pilihan-ambang).

## Jebakan

- **Pendaftaran ≠ pendapatan**: fraksi-patuh adalah angkanya; modelkan itu, jangan asumsikan.
- **Kode AS ditransplantasikan ke kasus NHS** — sistem kesehatan nasional membeli penghindaran-admisi, bukan tumpukan-CPT; jalankan model kedua.
- **Klaim offset pada biaya-rata-rata** untuk admisi yang biaya-tetapnya tetap ada (lihat [biaya marginal vs rata-rata](../biaya-marginal-vs-rata-rata/)).
- **Saturasi tim-pemantauan**: volume-peringatan berskala dengan pendaftaran; garis-staf adalah kendala-mengikat yang dilewatkan sebagian besar model.

## Sumber

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
