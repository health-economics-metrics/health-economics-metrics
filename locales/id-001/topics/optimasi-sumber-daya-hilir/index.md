# Optimasi Sumber Daya Hilir

Menghemat satu jam untuk praktisi senior — dokter umum, registrar senior, konsultan — sering mencegah keterlambatan-hambatan bagi seluruh tim multi-disiplin perawat, staf administrasi, dan terapis yang menunggu persetujuan klinis. Nilai membuka hambatan adalah throughput semua orang di hilirnya.

## Mengapa Ini Penting

Perawatan kesehatan berjalan pada rantai otorisasi: pemulangan menunggu persetujuan konsultan, rencana perawatan menunggu tinjauan tim-multi-disiplin, rujukan menunggu triase. Ketika peran gerbang tertunda, biayanya bukan satu jam satu orang — melainkan waktu menganggur atau terblokir di seluruh peran yang bergantung, ditambah waktu pasien dalam limbo ([hari-tempat-tidur](../hari-tempat-tidur-yang-dihemat/) ekstra, [tunggu RTT](../rujukan-untuk-perawatan/) lebih lama). Ini adalah teori kendala yang diterapkan pada jalur klinis: satu jam yang dihemat *pada kendala* bernilai throughput marginal seluruh sistem; satu jam yang dihemat di tempat lain bernilai jauh lebih sedikit.

## Perhitungan

```
Nilai membuka-hambatan = Σ atas peran hilir (jam terblokir yang dilepaskan × biaya unit)
                    + keuntungan throughput jalur × nilai per penyelesaian-jalur

Kontras: nilai jam yang sama yang dihemat pada peran non-gerbang ≈ hanya nilai
kapasitas peran tersebut (lihat practitioner-time.md).
```

Identifikasi kendala secara empiris: di mana pekerjaan mengantre paling lama? Kotak-masuk siapa yang menjadi akar keterlambatan?

## Contoh yang Diselesaikan

Pemulangan sebuah bangsal memerlukan tinjauan konsultan setiap pagi. Konsultan menghabiskan 90 menit/hari mengumpulkan informasi yang tersebar di sistem; tinjauan selesai pada 14:00, dan 6 pemulangan/hari selesai terlalu terlambat untuk hari itu — masing-masing berbiaya satu hari-tempat-tidur yang dapat dihindari.

Dasbor ringkasan-pemulangan (laboratorium, obat, penanda dalam satu tampilan) memotong pengumpulan menjadi 20 menit; tinjauan selesai pada 11:30:

```
Hari tempat tidur dihindari = 4 dari 6 pemulangan terlambat × 365 ≈ 1.460 hari-tempat-tidur/tahun
Pembukaan-hambatan hilir: 2 koordinator pemulangan + farmasi + transportasi
                       sebelumnya menganggur-lalu-terhimpit setiap siang —
                       ~3 jam-staf/hari waktu terblokir dilepaskan ≈ 1.100 jam/thn
```

70 menit konsultan sendiri adalah bagian *terkecil* dari nilai — inti metrik ini. Nilai hari-tempat-tidur berdasarkan mekanisme (lihat [hari tempat tidur yang dihemat](../hari-tempat-tidur-yang-dihemat/)) dan jam staf sebagai kapasitas.

## Hubungan dengan Rekayasa Perangkat Lunak

Ini adalah tinjauan kode, persetujuan arsitektur, dan kotak-masuk insinyur staf. Ketika lima insinyur menunggu sehari untuk satu orang yang dapat menyetujui sebuah desain, biayanya adalah lima insinyur-hari ditambah satu hari [biaya keterlambatan](../biaya-keterlambatan/) pada pekerjaan itu sendiri — bukan satu jam-peninjau. Perkakas yang memampatkan tugas peran-gerbang (konteks tinjauan yang lebih baik, pemeriksaan-awal otomatis, dasbor yang mengumpulkan apa yang dibutuhkan penyetuju) membeli throughput sistem, bukan kenyamanan individu. Ukur waktu ambil/tunggu pada kendala (lihat [metrik alur](../metrik-alur/)) — ini adalah setara perangkat lunak dari tebing-pemulangan pukul 14:00.

## Jebakan

- **Mengoptimalkan non-kendala**: perkakas indah untuk peran yang tidak diantre siapa pun di belakangnya menghasilkan nilai sistem mendekati-nol.
- **Migrasi kendala**: membuka konsultan dan kendala berpindah (ke farmasi, ke transportasi) — modelkan kendala *berikutnya* sebelum mengklaim keuntungan throughput penuh.
- **Menghitung jam hilir sebagai kas**: pelepasan waktu-terblokir adalah kapasitas, tunduk pada [uji-redeployment](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/) biasa.

## Sumber

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
