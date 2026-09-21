# Tingkat Readmisi

Tingkat readmisi 30-hari adalah persentase pasien yang dipulangkan yang kembali sebagai darurat dalam 30 hari. Ini adalah metrik kualitas-pemulangan kanonik dari sistem kesehatan — dan ia membawa penalti finansial langsung.

## Mengapa Ini Penting

Sebuah readmisi berarti pemulangan pertama tidak bertahan: pemulangan prematur, serah-terima obat yang gagal, tidak ada tindak-lanjut, atau dukungan sosial yang hilang. Pembayar memberikan penalti secara eksplisit — Hospital Readmissions Reduction Program AS memotong hingga 3% pembayaran Medicare rumah sakit; NHS secara historis tidak membayar untuk readmisi-darurat-30-hari yang dapat-dihindari. Jadi penghindaran readmisi adalah salah satu dari sedikit kategori manfaat yang *langsung* relevan-kas bagi penyedia, bukan hanya kapasitas.

## Perhitungan

```
Tingkat readmisi = readmisi darurat dalam 30 hari / pemulangan indeks × 100

Perbandingan terstandarisasi-risiko menyesuaikan untuk campuran-kasus; program
penalti membandingkan teramati vs diharapkan untuk rumah-sakit serupa.

Nilai penghindaran = readmisi dihindari × (biaya per episode readmisi
                     + eksposur penalti per readmisi)
```

## Contoh yang Diselesaikan

Aplikasi dukungan-pemulangan gagal-jantung (pelacakan gejala, peringatan berat-badan, pengingat obat, eskalasi ke perawat): 2.000 pemulangan/tahun, tingkat readmisi dasar 18%, uji coba menunjukkan 14% dengan aplikasi.

```
Readmisi dihindari = 2.000 × (0,18 − 0,14) = 80/tahun
Biaya per episode readmisi ≈ £3.200 → £280.000/tahun biaya-perawatan dihindari
Ditambah eksposur penalti/tidak-dibayar pada episode-episode tersebut.
Biaya aplikasi: 2.000 × £60 = £120.000/tahun

Bersih ≈ +£160.000/tahun, sebelum klaim QALY apa pun untuk perburukan yang dihindari.
```

Angka yang harus dipertahankan adalah efek 4-poin-persentase: ia harus berasal dari perbandingan terkontrol, karena tingkat readmisi berayun dengan campuran-kasus dan musim.

## Hubungan dengan Rekayasa Perangkat Lunak

Readmisi adalah **tingkat kegagalan-perubahan** sistem kesehatan (lihat [metrik DORA](../metrik-dora/)): pekerjaan yang "dikirim" dan memantul kembali dalam 30 hari. Analoginya mendalam: tiket yang dibuka-kembali dan insiden-regresi menunjukkan "kualitas-pemulangan" yang buruk (verifikasi lemah, penutupan-prematur, dokumen serah-terima hilang); akuntansi gaya-penalti (tim-perbaikan membayar, bukan tim-penerima) mengubah perilaku; dan kedua bidang mempelajari pelajaran yang sama, bahwa mendorong throughput-mentah (pemulangan lebih cepat, pengiriman lebih cepat) tanpa berinvestasi dalam serah-terima hanya mengubah antrean terlihat menjadi pekerjaan-ulang tak-terlihat. "Tingkat pembukaan-kembali 30-hari" pantas berada pada dasbor tim mana pun yang merayakan waktu-siklus.

## Jebakan

- **Manipulasi melalui pelabelan-ulang**: readmisi dikodekan sebagai tinggal-observasi atau kondisi-baru; audit definisinya.
- **Semua-penyebab vs penyebab-terkait**: 30-hari semua-penyebab mencakup peristiwa yang benar-benar tidak-terkait; penalti biasanya menggunakan semua-penyebab justru karena "terkait" dapat dimanipulasi.
- **Kebutaan campuran-kasus**: rumah sakit yang melayani populasi lebih-sakit, lebih-miskin meng-readmisi lebih banyak karena alasan yang tidak diperbaiki aplikasi apa pun — sesuaikan-risiko sebelum membandingkan.

## Sumber

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
