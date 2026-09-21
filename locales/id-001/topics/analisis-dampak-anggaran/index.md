# Analisis Dampak Anggaran (BIA)

BIA memperkirakan apa yang dilakukan pengadopsian sebuah intervensi terhadap **anggaran** pembayar tertentu selama 1–5 tahun ke depan. Ini menjawab *keterjangkauan*; efektivitas biaya menjawab *nilai*. Sebuah teknologi bisa bernilai sangat baik dan tetap tidak terjangkau — atau terjangkau dan bernilai buruk. Penilaian yang serius memerlukan keduanya.

## Mengapa Ini Penting

Pertanyaan direktur keuangan tidak pernah "berapa ICER-nya?" — melainkan "apa yang dilakukannya terhadap anggaran tahun depan?" Panduan praktik-baik ISPOR (standar bidang) menetapkan: perspektif pembayar itu sendiri, horizon 1–5 tahun, arus kas tahunan *tidak didiskon*, kurva keterserapan yang realistis, dan ketidakpastian skenario (bukan probabilistik). NICE memerlukan informasi dampak-anggaran di samping efektivitas biaya; produk dengan dampak anggaran nasional di atas ~£20 juta/tahun di Inggris memicu negosiasi komersial terlepas dari ICER-nya.

## Perhitungan

```
BI_tahun_t = Biaya_skenario_dengan_baru(t) − Biaya_skenario_saat_ini(t)

Biaya_skenario(t) = Σ atas kelompok pasien:
   populasi memenuhi syarat(t) × keterserapan(t) × biaya bersih per pasien(t)

biaya bersih per pasien = biaya intervensi − biaya perawatan yang dipindahkan + biaya perawatan yang diinduksi
```

Pilihan pemodelan kunci: pertumbuhan populasi yang memenuhi syarat, kurva keterserapan (adopsi tidak pernah instan), apa yang digantikan oleh pilihan baru, dan permintaan apa pun yang *diinduksinya* (akses lebih mudah → lebih banyak pengguna).

## Contoh yang Diselesaikan

Seorang pembayar yang mencakup 2 juta orang mempertimbangkan terapeutik digital pada £300/pasien/tahun; 1,5% anggota memenuhi syarat (30.000); keterserapan 20% → 40% → 60% selama 3 tahun; setiap pengguna menggantikan £120/tahun perawatan lain.

```
Biaya bersih per pengguna = 300 − 120 = £180

Tahun 1: 30.000 × 0,20 × 180 = £1,08 juta
Tahun 2: 30.000 × 0,40 × 180 = £2,16 juta
Tahun 3: 30.000 × 0,60 × 180 = £3,24 juta
```

Bahkan jika ICER produk adalah £8.000/QALY yang bagus, pembayar harus menemukan £3,24 juta *uang baru* pada tahun ke-3 — £120 yang dipindahkan tersebar tipis di garis anggaran lain dan tidak akan dilepaskan sebagai kas (lihat [pelepasan kas vs bukan pelepasan kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/)). Inilah sebabnya nilai per unit dan keterjangkauan adalah rintangan terpisah.

## Hubungan dengan Rekayasa Perangkat Lunak

BIA adalah pelengkap yang menghadap-CFO persis dari klaim ROI per-kursi: "ini efektif biaya per pengembang, tetapi mampukah kita membiayai peluncuran seluruh organisasi tahun fiskal ini?" Modelkan tingkatan lisensi, kurva-S adopsi, pengeluaran perkakas yang dipindahkan yang hanya melepaskan kas ketika kontrak lama benar-benar berakhir, dan penggunaan yang diinduksi (CI lebih murah → lebih banyak CI). Menyajikan tabel dampak-anggaran 3-tahun di samping ROI adalah apa yang membuat proposal perkakas perusahaan kredibel secara finansial.

## Jebakan

- **Fantasi keterserapan instan**: dampak tahun-1 dihitung pada adopsi kondisi-stabil.
- **Menghitung biaya yang dipindahkan sebagai kas** ketika itu adalah kapasitas yang tersebar.
- **Mengabaikan permintaan yang diinduksi** — perbaikan akses meningkatkan penggunaan populasi yang memenuhi syarat.
- **Membingungkan horizon/diskon BIA dan CEA**: BIA berhorizon pendek, tidak didiskon, spesifik-pembayar sesuai desain.

## Sumber

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
