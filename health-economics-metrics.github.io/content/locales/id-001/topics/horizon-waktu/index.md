# Horizon Waktu

Horizon waktu adalah periode di mana sebuah analisis menghitung biaya dan efek. Ia harus cukup panjang untuk menangkap semua perbedaan bermakna antara pilihan yang dibandingkan.

## Mengapa Ini Penting

Pilih horizon pendek dan Anda melewatkan manfaat-terlambat (pencegahan) dan biaya-terlambat (pemeliharaan). Pilih horizon terlalu-panjang dan segalanya tenggelam dalam ketidakpastian. Penilaian teknologi kesehatan sering menggunakan horizon **seumur-hidup** untuk perawatan dengan efek-mortalitas; [analisis dampak anggaran](../analisis-dampak-anggaran/) sengaja menggunakan horizon **1–5 tahun** yang pendek karena pertanyaannya adalah keterjangkauan, bukan nilai. Horizon adalah pilihan-pemodelan yang dinyatakan, dan horizon yang tidak-cocok adalah cara klasik untuk memanipulasi sebuah perbandingan.

## Perhitungan

Horizon adalah batas atas dari penjumlahan dalam evaluasi apa pun:

```
Nilai sekarang bersih = Σ (t = 0 … T) [ (Manfaat_t − Biaya_t) / (1 + r)^t ]

T = horizon waktu (tahun)
r = tingkat diskon (lihat discounting-and-time-preference.md)
```

Hasil seharusnya dilaporkan dengan horizon yang dinyatakan, dan idealnya ditunjukkan pada beberapa horizon.

## Contoh yang Diselesaikan

Sistem resep-elektronik berbiaya £2 juta untuk diimplementasikan dan £200.000/tahun untuk dijalankan. Ia mencegah kesalahan-obat senilai £600.000/tahun (biaya-perawatan dari bahaya yang dihindari).

Manfaat bersih berdasarkan horizon (tidak-didiskon, untuk kejelasan):

```
Horizon 1 tahun:  −2.000.000 − 200.000 + 600.000  = −£1.600.000
Horizon 3 tahun: −2.000.000 + 3 × 400.000        = −£800.000
Horizon 5 tahun: −2.000.000 + 5 × 400.000        =  £0
Horizon 10 tahun:−2.000.000 + 10 × 400.000       = +£2.000.000
```

Sistemnya "gagal" pada horizon apa pun di bawah 5 tahun dan "berhasil" pada 10. Tidak ada yang merupakan jawaban sebenarnya; laporan jujur menyatakan titik-impas dan membenarkan horizon berdasarkan umur-sistem (berapa lama sebelum penggantian?).

## Hubungan dengan Rekayasa Perangkat Lunak

- **Evaluasi alat yang diukur selama satu sprint** secara sistematis melewatkan penurunan kurva-pembelajaran (biaya di-muka) dan pemeliharaan jangka-panjang (biaya di-belakang). Pilot asisten pengkodean-AI yang diukur pada minggu-2 menangkap puncak-kebaruan, bukan kondisi-stabil.
- **Panjang kontrak ≠ horizon manfaat.** Sebuah kontrak SaaS 1-tahun masih dapat dinilai selama 5 tahun jika Anda secara realistis mengharapkan pembaruan — tetapi katakan demikian.
- **Kasus penggantian-sistem-warisan** seharusnya berjalan hingga akhir-umur-yang-kredibel dari sistem lama, bukan hingga angka-bulat yang sewenang-wenang.

## Jebakan

- **Belanja horizon**: memilih horizon mana pun yang membuat pilihan Anda menang. Daftarkan-sebelumnya horizon sebelum menghitung hasil.
- **Horizon berbeda untuk pilihan berbeda** dalam perbandingan yang sama.
- **Horizon seumur-hidup tanpa diskon atau analisis-ketidakpastian** — manfaat tahun-30 pada nilai-nominal adalah fiksi. Pasangkan horizon-panjang dengan [analisis sensitivitas](../analisis-sensitivitas/).

## Sumber

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
