# Waktu Praktisi

Waktu praktisi adalah sumber-daya paling langka dalam sebagian besar sistem kesehatan. Mengukur nilai menghemat menit-per-hari klinisi memerlukan pergeseran dari aritmatika-gaji sederhana ke **biaya peluang dan kapasitas sistem**: dalam sistem kesehatan nasional, waktu praktisi adalah hambatan operasional kaku, bukan garis-biaya yang fleksibel.

## Mengapa Ini Penting

Anda tidak dapat dengan cepat membuat lebih banyak dokter-umum, konsultan, atau perawat-spesialis — pipeline pelatihan berjalan 5–15 tahun, dan lowongan bersifat kronis. Jadi satu jam waktu praktisi yang dihemat bukanlah "gaji yang dihindari" (praktisinya tetap dibayar); ini adalah *kapasitas-hambatan yang dilepaskan*, dan kapasitas-hambatan bernilai apa yang diproduksi hambatan tersebut. Inilah sebabnya klaim "menghemat 10 menit per konsultasi" secara bersamaan adalah garis paling umum dan paling salah-ditetapkan-harganya dalam kesehatan digital.

## Perhitungan

Tiga tingkat penilaian, dalam kejujuran yang meningkat:

```
1. Basis gaji:        jam × tarif gaji berbobot (biaya unit PSSRU)
                      — apa yang dikeluarkan waktu, bukan apa yang diproduksinya
2. Basis output:      jam → janji-temu/prosedur yang dimungkinkan × nilai skema
                      (lihat national-tariff-and-unit-costs.md)
3. Basis hambatan:    jika peran ini mengontrol seluruh jalur, jam × nilai
                      throughput jalur yang dilepaskan (teori kendala)
```

Diskon fragmentasi: waktu yang dihemat dalam serpihan di bawah kuantum-yang-dapat-digunakan (mis., 3 menit tersebar di sebuah klinik) dipekerjakan-kembali dengan buruk; terapkan faktor pemanfaatan yang dinyatakan.

## Contoh yang Diselesaikan

Penulisan-ambient menghemat dokter-umum 2 menit per konsultasi, 30 konsultasi/hari: 60 menit/hari, atau **220 jam/tahun per dokter-umum** selama 220 hari kerja.

```
Basis gaji:   220 × £80 (jam dokter-umum berbobot, wilayah PSSRU) ≈ £17.600/dokter-umum/tahun
Basis output: 60 menit/hari = 5 konsultasi 12-menit ekstra/hari
              = 1.100 janji-temu ekstra/dokter-umum/tahun × £42 ≈ £46.200/dokter-umum/tahun
              — atau janji-temu yang sama diserap sebagai lembur berkurang dan
              konsultasi yang lebih aman dan tak-terburu-buru (garis kualitatif)
```

Di seluruh federasi 50-dokter-umum, kapasitas basis-output bernilai ~£2,3 juta/tahun — asalkan menitnya nyata (terukur, bukan diklaim-vendor), terkonsolidasi (konsultasi utuh, bukan fragmen), dan dipekerjakan-kembali (lihat [pelepasan-kas vs bukan-pelepasan-kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/)).

## Hubungan dengan Rekayasa Perangkat Lunak

Waktu insinyur senior berperilaku identik: ini adalah hambatan yang melaluinya desain, tinjauan, dan insiden mengalir, jadi nilailah berdasarkan apa yang dikontrol hambatan tersebut, bukan berdasarkan gaji. Penilaian tiga-tingkat yang sama berlaku untuk klaim "AI menghemat X menit setiap pengembang" — aritmatika gaji menyanjung angka kecil; pertanyaan jujurnya adalah apakah menit terkonsolidasi menjadi blok yang dapat digunakan dan apa yang sebenarnya diproduksi kapasitas yang dilepaskan. Lihat [optimasi sumber-daya hilir](../optimasi-sumber-daya-hilir/) untuk pengali ketika jam yang dihemat milik orang yang ditunggu semua orang lain.

## Jebakan

- **Menit × gaji = penghematan** — inflasi kanonik; ini kapasitas, dan hanya pada pemanfaatan yang dinyatakan.
- **Mengabaikan masalah kuantum**: 12 × penghematan 5-menit ≠ satu jam bebas.
- **Menilai semua peran secara setara**: satu jam hambatan-jalur bernilai berkali-kali lipat satu jam peran non-gerbang.

## Sumber

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
