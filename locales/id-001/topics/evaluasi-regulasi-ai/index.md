# Evaluasi Regulasi AI

Kerangka regulasi yang mengatur AI dalam perawatan kesehatan — rezim Software as a Medical Device (SaMD) FDA dengan **Predetermined Change Control Plans (PCCP)**, dan program evaluasi dunia nyata seperti NHS AI in Health and Care Award — dan apa yang mereka biayai serta mampukan secara ekonomi.

## Mengapa Ini Penting

Regulasi menentukan baik **biaya bukti untuk masuk pasar** maupun **biaya setiap pembaruan model berikutnya** — untuk produk AI, yang kedua sering lebih penting. Mode tradisional FDA (mengunci model; mengizinkan ulang untuk perubahan) membuat perbaikan berkelanjutan secara ekonomi brutal. **Panduan PCCP (difinalisasi Desember 2024)** mengubah ekonominya: produsen dapat memberi otorisasi awal untuk pembaruan model masa depan yang *ditentukan* — deskripsi modifikasi yang direncanakan, protokol modifikasi (bagaimana masing-masing akan divalidasi), dan penilaian dampak — sehingga perbaikan yang disetujui dikirim tanpa pengajuan baru. Lebih dari 1.000 perangkat berkemampuan AI memiliki otorisasi FDA; FDA sekarang juga menyelidiki pemantauan kinerja dunia nyata (metrik yang ditentukan sebelumnya: tingkat FP/FN dasar, drift kalibrasi, indikator pergeseran domain).

## Perhitungan

PCCP adalah ekonomi [waktu tunggu DORA](../metrik-dora/) yang diterapkan pada model yang diregulasi:

```
Biaya per pembaruan model (tradisional) = biaya pengajuan ulang + penundaan tinjauan × CoD
Biaya per pembaruan model (cakupan PCCP) = hanya biaya eksekusi protokol

Ekonomi pembaruan sepanjang umur produk:
  N pembaruan × (biaya pengajuan + bulan tinjauan × biaya-keterlambatan per bulan)
  vs biaya penyusunan PCCP satu kali + N × eksekusi protokol
```

Untuk pola NHS AI Award, set metriknya lebih luas dari akurasi: evaluasi dunia nyata independen menilai kinerja klinis, efek alur kerja/implementasi, dan dampak ekonomi — pipeline penuh [efikasi → efektivitas → efektivitas biaya](../produktivitas-pengembang-dengan-ai/) yang dilembagakan.

## Contoh yang Diselesaikan

Sebuah vendor AI radiologi merencanakan perbaikan model triwulanan selama 3 tahun (12 pembaruan):

```
Tradisional: 12 × (£80rb pengajuan + 4 bulan × £50rb/bulan CoD manfaat tertunda)
           = 12 × £280rb = £3,36 juta
Jalur PCCP:  £250rb penyusunan PCCP + 12 × £30rb eksekusi protokol = £610rb
Penghematan ≈ £2,75 juta — dan pasien menerima setiap perbaikan ~4 bulan lebih cepat:
12 × 4 bulan × manfaat klinis pembaruan, garis QALY tersendiri.
```

PCCP adalah pengakuan regulasi bahwa **frekuensi penerapan memiliki nilai klinis** — rantai kausal utama repositori, didukung oleh regulator.

## Hubungan dengan Rekayasa Perangkat Lunak

Merekayasa PCCP dengan baik adalah masalah perangkat lunak: rangkaian evaluasi yang ditentukan sebelumnya, dataset berversi, pipeline validasi otomatis, pemantauan drift — sepupu teregulasi dari penerapan berkelanjutan, di mana "gerbang penerapan" adalah protokol tervalidasi alih-alih tinjauan kode. Tim dengan infrastruktur evaluasi yang matang ([metrik kualitas AI](../metrik-kualitas-ai/)) mendapatkan PCCP dengan murah; tim tanpa itu menemukan bahwa kendala regulasi sebenarnya adalah kendala kematangan rekayasa. Untuk produk yang masuk NHS, tumpukan paralelnya adalah DTAC (keselamatan klinis, perlindungan data, interoperabilitas) plus tingkatan bukti [NICE ESF](../kerangka-standar-bukti-nice/) — anggarkan semuanya sebagai [TCO](../total-biaya-kepemilikan/) masuk pasar.

## Jebakan

- **Mimpi perluasan cakupan PCCP**: hanya jenis modifikasi yang *ditentukan* yang mendapat otorisasi awal; perubahan arsitektur atau penggunaan yang dimaksudkan baru tetap memerlukan tinjauan penuh.
- **Drift dunia nyata yang tidak dipantau**: otorisasi pada kinerja peluncuran + drift populasi yang diam-diam = produk yang berkinerja di luar amplopnya yang disetujui; pemantauan adalah baik ekspektasi regulasi maupun pertahanan diri.
- **Membingungkan izin dengan nilai**: izin FDA/UKCA ≠ ada yang akan membayar — itu adalah rintangan [HTA](../penilaian-teknologi-kesehatan/), dijalankan terpisah.

## Sumber

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
