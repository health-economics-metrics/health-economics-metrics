# Analisis Impak Bajet (BIA)

BIA menganggar kesan penerimaan sesuatu intervensi terhadap **bajet** pembayar tertentu dalam 1–5 tahun akan datang. Ia menjawab *kemampuan*; kos-keberkesanan menjawab *nilai*. Sesuatu teknologi boleh bernilai cemerlang namun tidak mampu — atau mampu tetapi nilai buruk. Penilaian serius memerlukan kedua-duanya.

## Mengapa ia penting

Soalan pengarah kewangan tidak pernah "apakah ICER?" — tetapi "apa kesan ini kepada bajet tahun depan?" Panduan amalan baik ISPOR (piawai bidang) menetapkan: perspektif pembayar sendiri, ufuk 1–5 tahun, aliran tunai tahunan *tidak didiskaun*, lengkung pengambilan yang realistik dan ketidakpastian senario (bukan probabilistik). NICE memerlukan maklumat impak bajet bersama kos-keberkesanan; produk dengan impak bajet kebangsaan melebihi ~£20J/tahun di England mencetuskan rundingan komersial tanpa mengira ICER-nya.

## Matematiknya

```
BI_tahun_t = Kos_senario_dengan_baharu(t) − Kos_senario_semasa(t)

Kos_senario(t) = Σ merentas kumpulan pesakit:
   populasi layak(t) × pengambilan(t) × kos bersih setiap pesakit(t)

kos bersih setiap pesakit = kos intervensi − kos penjagaan disesarkan + kos penjagaan teraruh
```

Pilihan pemodelan utama: pertumbuhan populasi layak, lengkung pengambilan (penerimaan tidak pernah serta-merta), apa yang disesarkan oleh pilihan baharu dan sebarang permintaan yang *diaruh* (akses lebih mudah → lebih ramai pengguna).

## Contoh penyelesaian

Pembayar yang meliputi 2J orang mempertimbangkan terapeutik digital pada £300/pesakit/tahun; 1.5% ahli layak (30,000); pengambilan 20% → 40% → 60% dalam 3 tahun; setiap pengguna menyesarkan £120/tahun penjagaan lain.

```
Kos bersih setiap pengguna = 300 − 120 = £180

Tahun 1: 30,000 × 0.20 × 180 = £1.08J
Tahun 2: 30,000 × 0.40 × 180 = £2.16J
Tahun 3: 30,000 × 0.60 × 180 = £3.24J
```

Walaupun ICER produk itu cemerlang £8,000/QALY, pembayar mesti mencari £3.24J *wang baharu* menjelang tahun ke-3 — £120 yang disesarkan tersebar nipis merentas baris bajet lain dan tidak akan dilepaskan sebagai tunai (lihat [melepaskan tunai lwn tidak melepaskan tunai](../penjimatan-melepaskan-tunai-lwn-tidak-melepaskan-tunai/)). Inilah sebabnya nilai seunit dan kemampuan ialah dua halangan berasingan.

## Kaitan dengan kejuruteraan perisian

BIA ialah pelengkap menghadap CFO yang tepat bagi tuntutan ROI setiap kerusi: "ia kos-efektif bagi setiap pembangun, tetapi mampukah kami pelancaran seluruh organisasi tahun fiskal ini?" Modelkan peringkat lesen, lengkung-S penerimaan, perbelanjaan alat yang disesarkan yang hanya melepaskan tunai apabila kontrak lama benar-benar ditamatkan, dan penggunaan teraruh (CI lebih murah → lebih banyak CI). Membentangkan jadual impak bajet 3 tahun bersama ROI menjadikan cadangan alat perusahaan boleh dipercayai oleh kewangan. Memecahkan jumlah impak bajet yang diterbitkan merentas tapak, kohort atau tahun kewangan — dan bahagian-bahagian itu berdamai tepat dengan angka yang diterbitkan — ialah tepat [peruntukan kos sen tepat](../peruntukan-kos-sen-tepat/); menjumlahkan banyak butiran baris yang menyuap jumlah itu sejak awal ialah [rollup kos selamat mata wang](../rollup-kos-selamat-mata-wang/).

## Perangkap

- **Fantasi pengambilan serta-merta**: impak tahun 1 dikira pada penerimaan keadaan mantap.
- **Mengira kos disesarkan sebagai tunai** sedangkan ia kapasiti meresap.
- **Mengabaikan permintaan teraruh** — peningkatan akses menambah penggunaan populasi layak.
- **Mengelirukan ufuk/diskaun BIA dan CEA**: BIA berufuk pendek, tidak didiskaun, khusus pembayar secara reka bentuk.

## Sumber

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
