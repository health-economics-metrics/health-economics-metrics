# Tahun Kehidupan yang Disesuaikan-Disabilitas (DALY)

Satu DALY adalah satu tahun kehidupan sehat yang hilang — cermin sisi-beban dari [QALY](../tahun-kehidupan-yang-disesuaikan-kualitas/). Di mana QALY menghitung kesehatan yang *diperoleh*, DALY menghitung kesehatan yang *hilang* akibat penyakit; intervensi dinilai berdasarkan DALY **yang dihindari**.

## Mengapa Ini Penting

DALY adalah standar kesehatan global (WHO, studi Global Burden of Disease, dan sebagian besar kementerian kesehatan negara berpenghasilan rendah-dan-menengah merencanakan dalam DALY). Jika perangkat lunak Anda menargetkan sistem kesehatan internasional, donor, atau program selaras-WHO, bahasa nilainya adalah DALY yang dihindari, bukan QALY yang diperoleh. Tolok ukur historis WHO-CHOICE: intervensi yang menghindari satu DALY dengan biaya kurang dari 1× PDB per kapita adalah "sangat efektif-biaya", 1–3× PDB per kapita "efektif-biaya" (WHO sekarang tidak menganjurkan penggunaan kaku pita-pita ini, tetapi tetap ada di mana-mana dalam praktik).

## Perhitungan

```
DALY = YLL + YLD

YLL (tahun kehidupan hilang)        = kematian × harapan hidup standar pada usia kematian
YLD (tahun dijalani dengan disabilitas) = prevalensi × bobot disabilitas

bobot disabilitas ∈ [0, 1], 0 = kesehatan penuh, 1 = setara kematian
(bobot dipublikasikan oleh studi Global Burden of Disease)
```

## Contoh yang Diselesaikan

Platform skrining-pengingat di suatu wilayah meningkatkan deteksi dini suatu penyakit. Setiap tahun ia mencegah 10 kematian prematur (masing-masing kehilangan 20 tahun terhadap harapan hidup standar) dan mencegah 200 orang menjalani setahun dengan kondisi yang bobot disabilitasnya 0,2.

```
YLL dihindari = 10 × 20        = 200
YLD dihindari = 200 × 0,2      = 40
DALY dihindari                = 240 per tahun
```

Jika platform berbiaya $600.000/tahun untuk dijalankan, biaya per DALY yang dihindari adalah 600.000 / 240 = **$2.500**. Di negara dengan PDB per kapita $8.000, itu jauh di bawah tolok ukur 1× PDB — "sangat efektif-biaya" dalam istilah WHO-CHOICE.

## Hubungan dengan Rekayasa Perangkat Lunak

- Kesehatan digital yang ditargetkan pada pendana kesehatan global (Gavi, Global Fund, program nasional) harus menyatakan dampak sebagai **biaya per DALY yang dihindari** — itulah metrik yang sudah dipikirkan peninjau hibah.
- DALY juga merupakan template *akuntansi-beban* yang berguna untuk rekayasa: insiden, build yang tidak stabil, dan gesekan warisan adalah "tahun dijalani dengan disabilitas" untuk basis kode — inventaris beban berbobot-kerja-berat memberi tahu Anda di mana perbaikan membeli "tahun-rekayasa sehat" paling banyak, sama seperti tabel-beban GBD mengarahkan pengeluaran kesehatan.

## Jebakan

- **QALY yang diperoleh ≠ DALY yang dihindari secara numerik** — bobot berbeda, tabel kehidupan berbeda, konvensi berbeda (DALY secara historis menggunakan pembobotan-usia dan diskon di dalam ukurannya). Jangan konversi sembarangan.
- **Menggunakan ambang kelipatan-PDB sebagai cap-karet** — WHO sendiri memperingatkan bahwa mereka mengabaikan anggaran dan biaya peluang; lihat [ambang batas kesediaan-membayar](../ambang-batas-kesediaan-membayar/).
- **Mengklaim DALY skala-populasi dari efikasi per-pengguna** tanpa mengalikan melalui keterserapan dan kepatuhan — lihat [jangkauan dan kesetaraan](../jangkauan-dan-kesetaraan/).

## Sumber

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
