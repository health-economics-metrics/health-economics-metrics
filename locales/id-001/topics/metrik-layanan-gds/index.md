# Metrik Layanan GDS

Government Digital Service (GDS) Service Manual Inggris mewajibkan empat KPI untuk setiap layanan digital pemerintah: **biaya per transaksi, kepuasan pengguna, tingkat penyelesaian, dan keterserapan digital**. Bersama-sama mereka adalah ekonomi minimal layanan digital publik — dan template yang diwarisi layanan digital NHS.

## Mengapa Ini Penting

Metrik GDS mengkodekan kasus bisnis pergeseran-saluran yang mendanai satu dekade digitalisasi pemerintah: Digital Efficiency Report menemukan transaksi digital ~20× lebih murah daripada telepon dan ~50× lebih murah daripada tatap-muka (angka pemerintah-lokal: web £0,15, telepon £2,83, tatap-muka £8,62). Tetapi penghematan hanya terwujud ketika orang *menyelesaikan* perjalanan digital (tingkat penyelesaian) *alih-alih* saluran yang mahal (keterserapan) — empat KPI ini adalah satu model ekonomi, bukan empat dasbor.

## Perhitungan

```
Biaya per transaksi = total biaya layanan / transaksi selesai
Tingkat penyelesaian = selesai / transaksi dimulai × 100
Keterserapan digital  = transaksi digital / semua-saluran transaksi × 100
Kepuasan pengguna     = % puas+sangat puas (5-poin, survei dalam-layanan)

Penghematan pergeseran-saluran = volume × pergeseran keterserapan × (biaya_saluran_lama − biaya_digital)
… dikurangi permintaan-gagal: (1 − tingkat penyelesaian) × biaya saluran-cadangan
```

## Contoh yang Diselesaikan

Layanan manajemen-janji-temu NHS: 2 juta transaksi/tahun, saat ini 70% telepon (£3,20/panggilan) / 30% digital (£0,25). Sebuah desain-ulang mengangkat keterserapan digital menjadi 55% dan penyelesaian dari 84% menjadi 93%:

```
Penghematan pergeseran-keterserapan = 2 juta × 0,25 × (3,20 − 0,25) = £1.475.000/tahun

Penghematan permintaan-gagal: perjalanan digital yang gagal kembali ke telepon
  sebelum: 2 juta × 0,30 × 0,16 × £3,20 = £307.200
  sesudah: 2 juta × 0,55 × 0,07 × £3,20 = £246.400
  bersih £60.800/tahun — perbaikan penyelesaian melindungi keuntungan keterserapan

Kepuasan adalah indikator utama: pengguna yang tidak puas kembali ke telepon,
jadi penurunan kepuasan memprediksi kemunduran keterserapan sebelum ia muncul.
```

## Hubungan dengan Rekayasa Perangkat Lunak

Keempat KPI ini adalah contoh tingkat-produksi dari [tabel biaya-konsekuensi](../analisis-biaya-konsekuensi/): satu metrik biaya, tiga metrik hasil, tidak pernah dilebur menjadi skor. Untuk insinyur produk, pelajaran operasionalnya: **tingkat penyelesaian adalah masalah instrumentasi-corong** (setiap titik peninggalan dapat ditemukan dan diperbaiki); **biaya per transaksi adalah [ekonomi unit cloud](../ekonomi-unit-cloud/)** ditambah biaya saluran-berbantuan-staf; **keterserapan adalah metrik kesetaraan yang menyamar** — pengguna yang tidak dapat atau tidak mau berpindah saluran secara tidak proporsional adalah lansia, difabel, dan kekurangan, jadi penutupan-saluran agresif mengubah "penghematan" menjadi bahaya-akses (lihat [jangkauan dan kesetaraan](../jangkauan-dan-kesetaraan/)). Mempublikasikan KPI (GOV.UK melakukannya, per layanan) adalah mekanisme itu sendiri: transparansi mendisiplinkan perkiraan sebagaimana audit [realisasi manfaat](../realisasi-manfaat/) lakukan.

## Jebakan

- **Keterserapan melalui paksaan**: menutup saluran telepon mengangkat keterserapan dan membuang permintaan-gagal ke staf garis-depan; ukur biaya total-sistem.
- **Penyelesaian yang diukur dari halaman-2**: memulai corong setelah titik peninggalan menyanjung tingkatnya.
- **Biaya per transaksi yang mengabaikan dukungan digital-berbantuan** dan penanganan permintaan-gagal.
- **Survei kepuasan hanya pada penyelesaian yang berhasil** — yang tidak puas sebagian besar tidak pernah mencapai survei.

## Sumber

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
