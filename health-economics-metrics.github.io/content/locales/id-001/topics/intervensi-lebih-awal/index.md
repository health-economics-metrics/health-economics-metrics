# Intervensi Lebih Awal

Jika kapasitas yang dihemat memungkinkan praktisi meninjau backlog diagnostik lebih cepat, pasien berpindah dari daftar tunggu ke perawatan aktif lebih cepat — dan merawat lebih awal biasanya lebih murah dan lebih baik daripada merawat lebih lambat, karena kondisi yang tidak dirawat berkembang.

## Mengapa Ini Penting

Perkembangan penyakit adalah bunga majemuk dari perawatan kesehatan. Seorang pasien yang menunggu dengan kondisi tidak-terawat tidak dalam kondisi stabil: kanker bergeser stadium, gagal jantung dekompensasi, depresi ringan menjadi parah. Intervensi lebih awal karenanya menyampaikan dividen ganda — **hasil yang lebih baik** (lebih banyak QALY, dirawat dari garis dasar yang lebih sehat) dan sering **biaya perawatan yang lebih rendah** (perawatan tahap-awal kurang intensif dibandingkan penyelamatan tahap-lanjut). Mekanisme ini yang mengangkat "jalur lebih cepat" dari kemudahan operasional menjadi keharusan klinis dan ekonomi — dan ini adalah alasan mendalam mengapa [biaya keterlambatan](../biaya-keterlambatan/) berlaku untuk perangkat lunak klinis.

## Perhitungan

```
Nilai intervensi lebih awal (per pasien) =
    [Biaya_terlambat − Biaya_awal]                       (offset biaya-perawatan)
  + [QALY_awal − QALY_terlambat] × λ                      (keuntungan kesehatan × ambang)
  × P(perkembangan selama keterlambatan)                  (pembobotan probabilitas)
```

Pembobotan probabilitas sangat penting: tidak setiap pasien yang menunggu berkembang. Modelkan probabilitas transisi per unit waktu (dari data riwayat-alami), bukan skenario terburuk. Lalu diskon: biaya yang dihindari bertahun-tahun ke depan bernilai lebih rendah hari ini ([diskonto](../diskonto-dan-preferensi-waktu/)) — dan perhatikan bahwa sebagian besar intervensi awal bersifat efektif-biaya alih-alih hemat-biaya (lihat [ekonomi pencegahan](../ekonomi-pencegahan/)).

## Contoh yang Diselesaikan

Backlog skrining retinopati diabetik: 4.000 pasien, terlambat 6 bulan. Penilaian berbantuan-AI melipattigakan throughput dan membersihkan antrean dalam 8 minggu. Riwayat alami: ~2% pasien-yang-menunggu/tahun berkembang ke tahap mengancam-penglihatan selagi belum-ditinjau.

```
Peristiwa perkembangan dihindari oleh percepatan ~4-bulan:
  4.000 × 2% × (4/12) ≈ 27 pasien

Per perkembangan yang dihindari:
  offset perawatan (terapi intravitreal vs laser) ≈ £4.000
  keuntungan QALY (penglihatan terjaga) ≈ 0,8 QALY × £20.000 = £16.000

Nilai ≈ 27 × (4.000 + 16.000) ≈ £540.000 — dari satu backlog yang dibersihkan sekali,
sebelum menghitung keuntungan throughput permanen.
```

## Hubungan dengan Rekayasa Perangkat Lunak

Dua transfer. Pertama, yang jelas: perangkat lunak yang mempercepat jalur diagnostik dan perawatan (triase, penilaian AI, perutean hasil) memonetisasi melalui model persis ini — dan modelnya memberi tahu Anda jalur mana yang harus dipercepat: yang kurva perkembangannya paling curam, bukan antrean terpanjang. Kedua, cermin rekayasa: **cacat juga berkembang**. Bug yang ditangkap di desain berbiaya satu percakapan; di produksi berbiaya satu insiden; kurva biaya-cacat (10–100× berdasarkan tahap) adalah model perkembangan, dan kesimpulan jujurnya mencerminkan kesehatan — shift-left biasanya efektif-biaya, bukan otomatis hemat-biaya, karena sebagian besar masalah yang ditandai tidak akan pernah berkembang menjadi insiden (masalah beberapa-kontrafaktual).

## Jebakan

- **Perkembangan skenario-terburuk diasumsikan untuk semua orang** — pembobotan probabilitas adalah perbedaan antara analisis dan advokasi.
- **Bias waktu-utama**: menemukan penyakit lebih awal tanpa mengubah hasil terlihat seperti manfaat tetapi bukan; *intervensi efektif* yang lebih awal adalah klaimnya, bukan deteksi lebih awal saja (lihat [ekonomi skrining](../ekonomi-skrining/)).
- **Penghitungan ganda** dengan klaim daftar-tunggu dan RTT yang dibangun pada percepatan yang sama — satu perbaikan jalur, satu set manfaat, dialokasikan sekali.

## Sumber

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
