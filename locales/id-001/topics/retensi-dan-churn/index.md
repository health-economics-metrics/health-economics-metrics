# Retensi dan Churn

Retensi mengukur fraksi kohort-pengguna mana yang masih aktif N hari setelah dimulai (kurva D1/D7/D30); churn adalah pelengkapnya. Garis-dasar brutal kesehatan-digital: **kira-kira 90% pengguna aplikasi-kesehatan mengabaikan dalam 30 hari** — retensi D30 dalam kesehatan digital berjalan ~3–4% terhadap rata-rata semua-aplikasi ~6%.

## Mengapa Ini Penting

Eysenbach menamainya pada 2005: **hukum atrisi** — kehilangan pengguna pada tingkat tinggi adalah properti intrinsik, struktural dari intervensi eHealth, bukan bug-implementasi, dengan atrisi dalam uji-coba eHealth secara rutin melebihi 50%. Konsekuensi ekonominya total: retensi mendefinisikan *jendela-perawatan* di mana manfaat apa pun dapat disampaikan, dan [ekonomi unit](../ekonomi-unit-aplikasi-kesehatan/) — CAC yang dibayar per pengguna yang bertahan 12 hari tidak menyampaikan baik LTV maupun QALY. Model ekonomi apa pun untuk produk kesehatan-konsumen yang tidak membobotkan manfaat berdasarkan kurva-retensi mendeskripsikan produk yang tidak ada.

## Perhitungan

```
Retensi_Dn = pengguna aktif pada hari n / ukuran kohort × 100
Tingkat churn = pengguna hilang dalam periode / pengguna pada awal periode × 100

Pembobotan manfaat (langkah ekonomi-kesehatan):
  manfaat harapan per pengguna-diperoleh = Σ_t retensi(t) × tingkat-manfaat(t)
  ≈ area di bawah kurva retensi × manfaat-per-waktu
  — BUKAN manfaat-uji-coba × 100% pengguna-diperoleh

Biaya per pengguna-dipertahankan-D30 = CAC / retensi D30
  (pada 4% D30, CAC £5 sebenarnya £125 per pengguna yang dipertahankan)
```

## Contoh yang Diselesaikan

Aplikasi kesehatan-mental: uji coba menunjukkan 0,02 QALY diperoleh per pengguna yang menyelesaikan 8 minggu. Kohort penerapan 100.000 unduhan, retensi D7 25%, D30 8%, minggu-8 4%:

```
Penyelesai            = 100.000 × 0,04 = 4.000
QALY disampaikan      = 4.000 × 0,02 = 80  (bukan 100.000 × 0,02 = 2.000)
Pada £20.000/QALY      = £1,6 juta nilai kesehatan (bukan £40 juta)

Nilai kesehatan per-unduhan = £16 — angka yang seharusnya menetapkan berapa yang
akan dibayar pembayar per unduhan, dan itu adalah 4% dari klaim naif.
Kasus perbaikan-retensi: menggerakkan penyelesaian minggu-8 dari 4% → 6%
menambah 40 QALY/tahun ≈ £800rb — rekayasa retensi ADALAH produksi kesehatan.
```

## Hubungan dengan Rekayasa Perangkat Lunak

Retensi adalah metrik di mana rekayasa-produk paling langsung memfabrikasi nilai kesehatan, sesuai aritmatika di atas. Praktik yang menggerakkannya bersifat umum: waktu-ke-nilai-pertama pada orientasi, desain keterlibatan-ulang, kinerja, dan yang krusial **penyelesaian dosis-terencana** — sebuah program dengan akhir terdefinisi (8 minggu, lalu kelulusan) seharusnya mengukur *penyelesaian*, bukan DAU abadi, menyelaraskan metrik dengan model klinis alih-alih model perhatian yang didanai-iklan. Analisis kelangsungan-hidup adalah toolkit yang tepat (matematika Kaplan-Meier yang sama seperti [tahun kehidupan yang diperoleh](../tahun-kehidupan-yang-diperoleh/)); segmentasikan kurva berdasarkan saluran-akuisisi, karena campuran-saluran mengubah retensi lebih banyak daripada sebagian besar fitur.

## Jebakan

- **Pencucian intention-to-treat terbalik**: uji coba melaporkan penyelesai; ekonomi penerapan harus menghitung semua yang-diperoleh (peringatan inti Eysenbach).
- **Teater retensi**: pengguna "aktif" yang digerakkan-notifikasi yang tidak pernah melakukan tindakan terapeutik (lihat [metrik keterlibatan](../metrik-keterlibatan/)).
- **Membandingkan kurva antar definisi**: "aktif" didefinisikan sebagai pembukaan vs tindakan-bermakna menggeser D30 berkali-lipat.
- **Mengabaikan siapa yang mengabaikan**: jika yang-paling-sakit mengabaikan tercepat, manfaat-per-pengguna turun seiring retensi membaik di antara yang-sehat — pasangkan kurva dengan campuran-kasus (lihat [jangkauan dan kesetaraan](../jangkauan-dan-kesetaraan/)).

## Sumber

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
