# Penilaian Teknologi Kesihatan (HTA)

HTA ialah proses formal dan terinstitusi yang digunakan sistem kesihatan untuk memutuskan sama ada sesuatu teknologi — ubat, peranti atau perisian — berbaloi dibayar. Ia menggabungkan bukti keberkesanan klinikal dengan penilaian ekonomi di bawah metodologi mandatori yang diterbitkan.

## Mengapa ia penting

Jika anda menjual kepada perkhidmatan kesihatan kebangsaan, badan HTA boleh secara literal menentukan akses pasaran anda. Mengetahui proses tempatan bermakna mengetahui pengawal selia-nilai sebenar anda:

- **NICE (England)**: penilaian berkanun di bawah *kes rujukan* yang ditakrifkan — QALY daripada [EQ-5D](../eq-5d/), [perspektif](../perspektif-analisis/) NHS+PSS, [diskaun](../diskaun-dan-keutamaan-masa/) 3.5%, [PSA](../analisis-kepekaan-probabilistik/) diperlukan — dinilai terhadap £20k–£30k/QALY dengan [pengubah suai keterukan](../kekurangan-qaly-dan-pengubah-suai-keterukan/); teknologi sangat khusus sehingga £100k+ dengan pemberat.
- **ICER (AS, bukan kerajaan)**: laporan bukti dengan *penanda aras harga manfaat-kesihatan* — harga di mana produk akan kos-efektif pada $100k–$150k bagi setiap QALY/evLYG — digunakan sebagai pengaruh rundingan; serta "amaran kemampuan" impak bajet.
- **Kanada (CADTH → CDA-AMC)**: semakan bayaran balik pada ≈CAD$50k/QALY; secara sejarah meminta pemotongan harga dalam ~95% penyerahan.

## Matematiknya

Kuasa HTA bukan formula tetapi **kaedah mandatori**: setiap penyerahan mengira [ICER](../nisbah-kos-keberkesanan-inkremental/) yang sama di bawah peraturan kes rujukan yang sama, jadi keputusan boleh dibandingkan merentas produk dan tahun. Kes rujukan menetapkan ukuran hasil, instrumen utiliti, perspektif, pemilihan pembanding, kadar diskaun, ufuk masa dan analisis ketidakpastian — menyingkirkan setiap darjah kebebasan yang boleh dimanipulasi penaja.

## Contoh penyelesaian

Terapeutik digital menyerahkan kepada penilaian gaya NICE:

```
Model: ΔC = +£450/pesakit, ΔE = +0.03 QALY → ICER = £15,000/QALY ✓ di bawah £20k
Semakan kes rujukan:
  utiliti daripada EQ-5D-5L dengan set nilai UK          ✓
  pembanding = laluan penjagaan semasa (bukan "tiada rawatan") ✓
  PSA: 71% kebarangkalian kos-efektif pada £20k          ✓ (dilaporkan)
  pengubah suai keterukan: kekurangan di bawah sempadan ×1.2 — tiada dituntut
Syor: pentauliahan rutin, dengan pengumpulan data dunia sebenar.
```

Analisis pilihan penaja sendiri menunjukkan £9,000/QALY; kes rujukan menolaknya ke £15,000 dengan memaksa pembanding jujur. Jurang itulah *sebab* kes rujukan wujud.

## Kaitan dengan kejuruteraan perisian

Artifak yang boleh dipindahkan ialah **kes rujukan dalaman**: satu kaedah mandatori untuk semua kes perniagaan alat/platform — pembanding diisytiharkan, kos unit piawai (lihat [tarif kebangsaan dan kos unit](../tarif-kebangsaan-dan-kos-unit/) untuk corak), kadar diskaun tetap, analisis kepekaan diperlukan, templat piawai. "Dosier AMCP untuk alat" yang diserahkan kepada majlis platform menjadikan cadangan boleh dibandingkan dan permainan kelihatan, tepat seperti HTA lakukan untuk perubatan. Mulakan lebih kecil daripada NICE: templat dua halaman serta buku harga diterbitkan mengalahkan tiada piawai langsung.

Untuk bagaimana model HTA berbilang kitaran sebenarnya disimulasi kohort-demi-kitaran, lihat [simulasi kohort Markov](../simulasi-kohort-markov/).

## Perangkap

- **Menganggap HTA formaliti selepas kelulusan kawal selia** — kelulusan CE/UKCA/FDA mengatakan produk selamat; HTA memutuskan sama ada ia *berbaloi dibeli*. Halangan berbeza, bukti berbeza.
- **Membina model ekonomi selepas percubaan** — penjanaan bukti patut direka ke belakang daripada keperluan kes rujukan.
- **Mengabaikan perbezaan bidang kuasa**: ICER yang boleh dibiayai di AS pada $120k/QALY gagal di NICE pada £30k; rancang bukti dan harga mengikut pasaran.

## Sumber

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
