# Ekonomi Saringan

Ekonomi saringan mengawal nilai menguji populasi tanpa simptom. Fakta matematik teras: **pada prevalens penyakit rendah, malah ujian cemerlang menjana kebanyakannya positif palsu** — dan kos hiliran mengejarnya boleh menenggelamkan manfaat penemuan benar.

## Mengapa ia penting

Sejak 1968, kriteria Wilson–Jungner WHO telah menetapkan palang untuk saringan populasi: keadaan mesti penting, ujian boleh diterima dan tepat, rawatan berkesan mesti wujud, dan ekonomi mesti seimbang. Jawatankuasa Saringan Kebangsaan UK menerapkan analisis kos-keberkesanan formal sebelum meluluskan mana-mana program kebangsaan — dan menolak kebanyakan cadangan. Setiap pitch "AI akan menyaring semua orang untuk segala-galanya" berlanggar dengan jentera ini, dan biasanya tewas kepada aritmetik di bawah.

## Matematiknya

Nilai ramalan positif (PPV) — kebarangkalian keputusan positif itu benar — runtuh pada prevalens rendah:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]

Contoh: kepekaan 90%, kekhususan 95%, prevalens 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Sebelas daripada dua belas positif adalah palsu. Ekonomi program penuh:

```
Kos setiap kes benar ditemui = (kos saringan + kos pemeriksaan lanjut × semua positif) / positif benar
Kemudian: adakah menemui kes berbaloi dengan itu? (nilai intervensi-lebih-awal setiap kes,
          tolak bahaya pendiagnosisan-lebih — kes ditemui yang tidak akan pernah penting)
```

## Contoh penyelesaian

Saringan retina AI untuk keadaan jarang, 100,000 orang, prevalens 0.5%, sens 90%, spec 95%, imbasan £15, pemeriksaan pengesahan £400:

```
Positif benar:  100,000 × 0.005 × 0.90 = 450
Positif palsu:  100,000 × 0.995 × 0.05 = 4,975
Kos = 100,000 × 15 + (450 + 4,975) × 400 = 1.5J + 2.17J = £3.67J
Kos setiap kes benar ≈ £8,156
```

Jika rawatan awal menjimatkan £20,000 + 1 QALY bagi setiap kes, program lulus dengan mudah. Naikkan kekhususan kepada 99% (kurang penggera palsu): kos pemeriksaan jatuh kepada (450 + 995) × 400 = £0.58J, jumlah £2.08J, kos setiap kes ≈ **£4,622** — kekhususan, bukan kepekaan, di mana ekonomi saringan dimenangi pada prevalens rendah.

## Kaitan dengan kejuruteraan perisian

Analisis statik, pengimbasan keselamatan dan pengesanan anomali ialah program saringan atas pangkalan kod dan telemetri, dengan prevalens kecacatan benar selalunya jauh di bawah 1% bagi setiap peluang-amaran. Matematik sama menerangkan keletihan amaran: pengimbas 95%-spesifik pada kod berprevalens rendah menenggelamkan pasukan dalam positif palsu, dan setiap positif palsu berkos perhatian dan menghakis kepercayaan sehingga amaran sebenar diabaikan (istilah klinikal ialah *bahaya saringan*; istilah kejuruteraan ialah *kebas pager*). Penawar berpindah daripada kesihatan: naikkan kekhususan sebelum kepekaan, saring subpopulasi berprevalens lebih tinggi (penyasaran berasaskan risiko ↔ pengimbasan kod-berubah-sahaja), dan kira kos triaj dalam ekonomi alat — lihat [NNT](../bilangan-perlu-dirawat/) dan [penilaian AI klinikal](../penilaian-ai-klinikal/). Untuk menentukan saiz seluruh program saringan dan bukan satu ujian, lihat [bilangan perlu disaring](../bilangan-perlu-disaring/) — berapa ramai mesti melalui seluruh laluan saring-dan-rawat untuk mencegah satu hasil.

## Perangkap

- **Memetik kepekaan/kekhususan tanpa prevalens** — ketepatan tanpa PPV ialah pemasaran.
- **Mengabaikan pendiagnosisan-lebih**: menemui "penyakit" lembam yang tidak pernah memudaratkan mencetuskan kos dan bahaya rawatan sebenar.
- **Bias masa pimpinan**: pengesanan lebih awal tanpa hasil berubah mengembungkan kemandirian ketara — lihat [intervensi lebih awal](../intervensi-lebih-awal/).

## Sumber

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
