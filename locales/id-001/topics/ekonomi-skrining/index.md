# Ekonomi Skrining

Ekonomi skrining mengatur nilai menguji populasi tanpa-gejala. Fakta matematis intinya: **pada prevalensi-penyakit rendah, bahkan tes yang luar-biasa menghasilkan sebagian-besar positif-palsu** — dan biaya hilir mengejar mereka dapat menenggelamkan manfaat dari temuan-benar.

## Mengapa Ini Penting

Sejak 1968, kriteria Wilson–Jungner WHO telah menetapkan tolok-ukur untuk skrining populasi: kondisinya harus penting, tesnya dapat-diterima dan akurat, perawatan-efektif harus ada, dan ekonominya harus seimbang. UK National Screening Committee menerapkan analisis efektivitas-biaya formal sebelum menyetujui program nasional apa pun — dan menolak sebagian besar proposal. Setiap pitch "AI akan menyaring semua orang untuk segalanya" bertabrakan dengan mesin ini, dan biasanya kalah terhadap aritmatika di bawah ini.

## Perhitungan

Nilai prediktif positif (PPV) — probabilitas bahwa hasil-positif adalah nyata — runtuh pada prevalensi rendah:

```
PPV = (sens × prev) / [sens × prev + (1 − spek) × (1 − prev)]

Contoh: sensitivitas 90%, spesifisitas 95%, prevalensi 0,5%:
PPV = (0,9 × 0,005) / (0,9 × 0,005 + 0,05 × 0,995)
    = 0,0045 / (0,0045 + 0,04975) ≈ 8,3%
```

Sebelas dari dua-belas positif adalah palsu. Ekonomi program penuh:

```
Biaya per kasus-benar ditemukan = (biaya skrining + biaya pengujian × semua positif) / positif-benar
Lalu: apakah menemukan satu kasus sepadan? (nilai intervensi-lebih-awal per kasus,
      dikurangi bahaya gerak-diagnosis-berlebih — kasus yang ditemukan yang tidak akan pernah penting)
```

## Contoh yang Diselesaikan

Skrining retina-AI untuk kondisi langka, 100.000 orang, prevalensi 0,5%, sens 90%, spek 95%, pemindaian £15, pengujian-konfirmasi £400:

```
Positif-benar:  100.000 × 0,005 × 0,90 = 450
Positif-palsu:  100.000 × 0,995 × 0,05 = 4.975
Biaya = 100.000 × 15 + (450 + 4.975) × 400 = 1,5 juta + 2,17 juta = £3,67 juta
Biaya per kasus-benar ≈ £8.156
```

Jika perawatan-dini menghemat £20.000 + 1 QALY per kasus, programnya lolos dengan mudah. Menaikkan spesifisitas menjadi 99% (lebih sedikit alarm-palsu): biaya pengujian turun menjadi (450 + 995) × 400 = £0,58 juta, total £2,08 juta, biaya per kasus ≈ **£4.622** — spesifisitas, bukan sensitivitas, adalah di mana ekonomi-skrining dimenangkan pada prevalensi rendah.

## Hubungan dengan Rekayasa Perangkat Lunak

Analisis statis, pemindaian keamanan, dan deteksi anomali adalah program skrining atas basis-kode dan telemetri, dengan prevalensi cacat-sejati sering jauh di bawah 1% per peluang-peringatan. Matematika yang identik menjelaskan kelelahan-peringatan: pemindai 95%-spesifik pada kode berprevalensi-rendah menenggelamkan tim dalam positif-palsu, dan setiap positif-palsu berbiaya perhatian dan mengikis kepercayaan hingga peringatan-nyata mulai diabaikan (istilah klinisnya adalah *bahaya skrining*; istilah rekayasanya adalah *mati-rasa pager*). Solusinya ditransfer dari kesehatan: naikkan spesifisitas sebelum sensitivitas, saring sub-populasi berprevalensi-lebih-tinggi (penargetan berbasis-risiko ↔ pemindaian hanya-kode-yang-diubah), dan hitung biaya-triase dalam ekonomi alat — lihat [NNT](../jumlah-yang-perlu-dirawat/) dan [evaluasi AI klinis](../evaluasi-ai-klinis/).

## Jebakan

- **Mengutip sensitivitas/spesifisitas tanpa prevalensi** — akurasi tanpa PPV adalah pemasaran.
- **Mengabaikan gerak-diagnosis-berlebih**: menemukan "penyakit" indolen yang tidak akan pernah membahayakan memicu biaya dan bahaya perawatan nyata.
- **Bias waktu-utama**: deteksi lebih awal tanpa mengubah hasil menggembungkan kelangsungan-hidup semu — lihat [intervensi lebih awal](../intervensi-lebih-awal/).

## Sumber

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
