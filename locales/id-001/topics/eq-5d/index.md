# EQ-5D

EQ-5D adalah kuesioner terstandarisasi kelompok EuroQol untuk mengukur kualitas hidup terkait-kesehatan. Ini adalah instrumen yang menghasilkan bobot utilitas di dalam sebagian besar perhitungan [QALY](../tahun-kehidupan-yang-disesuaikan-kualitas/) — kasus rujukan NICE menamainya sebagai ukuran yang disukai untuk orang dewasa.

## Mengapa Ini Penting

Produk kesehatan digital apa pun yang ingin mengklaim QALY memerlukan utilitas dari instrumen tervalidasi, dan EQ-5D adalah standar di Inggris dan sebagian besar Eropa. Ini cukup singkat untuk disematkan dalam aplikasi (5 pertanyaan + satu skala visual), yang berarti produk perangkat lunak dapat mengumpulkan data hasil tingkat-HTA sebagai efek samping dari penggunaan normal — keunggulan struktural dibandingkan obat, yang memerlukan studi khusus.

## Perhitungan

EQ-5D-5L mengajukan satu pertanyaan di masing-masing dari **5 dimensi** — mobilitas, perawatan diri, aktivitas biasa, nyeri/ketidaknyamanan, kecemasan/depresi — masing-masing dijawab pada **5 tingkat** (tidak ada masalah … masalah ekstrem), ditambah skala analog visual 0–100 (EQ VAS).

```
Kondisi kesehatan = profil 5-digit, mis. "21221"
Indeks utilitas = set_nilai(profil)

Set nilainya spesifik-negara, diturunkan dari survei time-trade-off /
pilihan-diskrit terhadap masyarakat umum. Jangkar: 1 = kesehatan penuh,
0 = mati; kondisi yang lebih buruk dari kematian bersifat negatif (lantai
set 3L Inggris: −0,594).
```

Aritmatika QALY kemudian berlanjut sebagai `durasi × utilitas`.

## Contoh yang Diselesaikan

Aplikasi rehabilitasi muskuloskeletal mengukur EQ-5D-5L pada orientasi dan pada 6 bulan untuk 1.000 pengguna yang menyelesaikan.

```
Utilitas rata-rata pada dasar:  0,62
Utilitas rata-rata pada 6 bulan: 0,71
Keuntungan bertahan (diasumsikan) 1 tahun: (0,71 − 0,62) × 1,0 = 0,09 QALY per pengguna
```

Terhadap perubahan grup-kontrol 0,03 (pemulihan alami), keuntungan teratribusi adalah 0,06 QALY/pengguna. Termoneterisasi pada £20.000–£30.000/QALY: **£1.200–£1.800 nilai kesehatan per pengguna yang menyelesaikan** — angka yang menjangkarkan negosiasi harga aplikasi dengan pembayar. (Perbedaan minimal-penting-secara-klinis untuk indeks EQ-5D umumnya dalam rentang 0,03–0,08, jadi 0,06 masuk akal tetapi harus melewati perbandingan kontrol; lihat [hasil yang dilaporkan pasien](../hasil-yang-dilaporkan-pasien/).)

## Hubungan dengan Rekayasa Perangkat Lunak

- **Instrumenkan.** EQ-5D pada pendaftaran dan pada interval tindak-lanjut adalah beberapa layar UI; imbalannya adalah bukti tingkat-HTA. Dapatkan lisensi dari EuroQol (diperlukan, gratis untuk beberapa penggunaan).
- **Gunakan set nilai yang tepat** untuk negara penerapan — jawaban yang sama menilai berbeda di Inggris vs Jerman vs Jepang.
- **Pelajaran desain**: EQ-5D menunjukkan bagaimana survei kecil terstandarisasi ditambah fungsi penilaian yang dipublikasikan menghasilkan indeks tunggal yang dapat dibandingkan. Itu adalah pola untuk indeks pengalaman-pengembang kredibel apa pun juga — instrumen terstandarisasi, bobot dipublikasikan, bukan vibe ad-hoc. Lihat [SPACE dan DevEx](../space-dan-devex/).

## Jebakan

- **Sebelum/sesudah tanpa pembanding** — regresi ke rata-rata dan pemulihan alami menggembungkan keuntungan naif.
- **Bias kelangsungan-hidup**: hanya mengukur pengguna yang tetap terlibat (lihat [retensi dan churn](../retensi-dan-churn/)).
- **Mencampur versi 3L dan 5L atau set nilai** antar studi — angka yang berbeda secara sistematis.
- **Efek plafon** pada populasi yang terpengaruh ringan: banyak pengguna mendapat skor dekat 1,0 pada dasar, tidak menyisakan ruang untuk menunjukkan keuntungan.

## Sumber

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
