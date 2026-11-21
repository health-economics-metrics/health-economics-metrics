# Ekonomi Skrining (Screening Economics)

Ekonomi skrining ngatur nilai nguji populasi tanpa gejala. Kasunyatan matematis inti: **ing prevalensi penyakit sing kurang, sanajan tes sing apik banget ngasilake umume positif palsu** — lan biaya hilir ngoyak kuwi bisa ngluwihi manfaat saka temuan sing bener.

## Kenapa Iki Penting

Wiwit 1968, kriteria Wilson–Jungner WHO wis nyetel bar kanggo skrining populasi: kondisi kudu penting, tes bisa ditampa lan akurat, perawatan efektif kudu ana, lan ekonomi kudu imbang. UK National Screening Committee nrapake analisis efektivitas-biaya formal sadurunge nyetujoni program nasional apa wae — lan nolak umume usulan. Saben pitch "AI bakal skrining kabeh wong kanggo kabeh" mbentur mesin iki, lan biasane kalah karo aritmetika ing ngisor.

## Matematikane

Nilai prediktif positif (PPV) — probabilitas asil positif iku nyata — ambruk ing prevalensi rendah:

```
PPV = (sens × prev) / [sens × prev + (1 − spes) × (1 − prev)]

Conto: sensitivitas 90%, spesifisitas 95%, prevalensi 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Sewelas saka rolas positif iku palsu. Ekonomi program lengkap:

```
Biaya saben kasus bener sing ditemokake = (biaya skrining + biaya pemeriksaan lanjut × kabeh positif) / positif bener

Banjur: apa nemokake kasus pantes regane kuwi? (nilai intervensi-awal saben kasus,
        dikurangi cilaka overdiagnosis — kasus sing ditemokake sing ora bakal penting)
```

## Conto Petungan

Skrining retina AI kanggo kondisi langka, 100,000 wong, prevalensi 0.5%, sens 90%, spes 95%, scan £15, pemeriksaan lanjut konfirmasi £400:

```
Positif bener:  100,000 × 0.005 × 0.90 = 450
Positif palsu:  100,000 × 0.995 × 0.05 = 4,975
Biaya = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Biaya saben kasus bener ≈ £8,156
```

Yen perawatan awal ngirit £20,000 + 1 QALY saben kasus, program lulus kanthi gampang. Munggahake spesifisitas dadi 99% (alarm palsu luwih sithik): biaya pemeriksaan lanjut mudhun dadi (450 + 995) × 400 = £0.58M, total £2.08M, biaya saben kasus ≈ **£4,622** — spesifisitas, dudu sensitivitas, iku ing ngendi ekonomi skrining dimenangake ing prevalensi rendah.

## Sambungan karo Rékayasa Piranti Lunak

Analisis statis, pemindaian keamanan, lan deteksi anomali iku program skrining ing basis kode lan telemetri, kanthi prevalensi cacat-bener asring adoh ing ngisor 1% saben kesempatan-peringatan. Matematika identik nerangake kesel-peringatan: pemindai 95%-spesifik ing kode prevalensi-rendah ngelem tim ing positif palsu, lan saben positif palsu biayane perhatian lan ngikis kapercayan nganti peringatan nyata diabaikan (istilah klinis *cilaka skrining*; istilah rékayasa *pager numbness*). Obat-obatane pindhah saka kesehatan: munggahake spesifisitas sadurunge sensitivitas, skrining subpopulasi prevalensi-luwih-dhuwur (penargetan adhedhasar-risiko ↔ pemindaian kode-sing-owah-wae), lan etung biaya triase ing ekonomi piranti — deleng [NNT](../jumlah-sing-perlu-diobati/) lan [evaluasi AI klinis](../evaluasi-ai-klinis/). Kanggo ngukur kabeh program skrining tinimbang siji tes, deleng [jumlah sing perlu diskrining](../jumlah-sing-perlu-diskrining/) — pira wong sing kudu ngliwati kabeh jalur skrining-lan-ngobati kanggo nyegah siji asil.

## Jebakan

- **Ngutip sensitivitas/spesifisitas tanpa prevalensi** — akurasi tanpa PPV iku marketing.
- **Ngabaikake overdiagnosis**: nemokake "penyakit" indolen sing ora bakal ngrusak nyetel biaya lan cilaka perawatan nyata.
- **Bias lead-time**: deteksi luwih awal tanpa ngowahi asil nggedhekake kaslametan sing katon — deleng [intervensi luwih awal](../intervensi-luwih-awal/).

## Sumber

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
