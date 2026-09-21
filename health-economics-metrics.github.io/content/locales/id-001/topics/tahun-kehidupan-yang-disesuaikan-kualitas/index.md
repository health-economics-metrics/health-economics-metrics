# Tahun Kehidupan yang Disesuaikan-Kualitas (QALY)

Satu QALY adalah satu tahun kehidupan yang dijalani dalam kesehatan sempurna. Ia menggabungkan *berapa lama* orang hidup dengan *seberapa baik* mereka hidup, sehingga satu tahun dalam kesehatan-buruk dihitung sebagai kurang dari satu QALY — membuat intervensi kesehatan yang sama sekali berbeda dapat dibandingkan pada satu skala.

## Mengapa Ini Penting

QALY adalah mata uang bersama penilaian teknologi kesehatan. NICE (Inggris) menghargai keuntungan-kesehatan pada **£20.000–£30.000 per QALY**: intervensi yang membeli QALY lebih murah dari ambang itu biasanya direkomendasikan; yang membelinya lebih mahal biasanya ditolak. Angka tunggal ini adalah bagaimana sistem kesehatan nasional membandingkan obat kanker, penggantian-pinggul, dan aplikasi triase pada sumbu yang sama. Jika perangkat lunak Anda dapat secara kredibel mengklaim QALY — dengan mencegah perburukan, mempercepat perawatan, atau memperbaiki keselamatan — Anda dapat menetapkan-harga nilai kesehatannya dalam mata uang yang sama dengan kedokteran itu sendiri.

## Perhitungan

```
QALY = Σ_i (durasi_i × utilitas_i)

durasi_i = tahun yang dihabiskan dalam kondisi-kesehatan i
utilitas_i  = bobot kualitas kondisi i, dijangkarkan pada 1 = kesehatan sempurna, 0 = mati
             (nilai negatif diizinkan untuk kondisi lebih buruk dari kematian)
```

Bobot utilitas berasal dari instrumen tervalidasi, paling umum [EQ-5D](../eq-5d/). *Keuntungan* QALY dari sebuah intervensi adalah selisih antara aliran QALY dengan dan tanpanya, [didiskon](../diskonto-dan-preferensi-waktu/) pada 3,5%/tahun dalam kasus rujukan NICE.

## Contoh yang Diselesaikan

Seorang pasien menunggu perawatan jantung dalam kondisi utilitas 0,6. Perawatan memulihkannya ke utilitas 0,85.

- **Dirawat sekarang**: 1 tahun pada 0,85 = 0,85 QALY tahun ini.
- **Dirawat setelah keterlambatan 6-bulan**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALY.
- **Kehilangan QALY per pasien dari keterlambatan**: 0,85 − 0,725 = **0,125 QALY**.

Termoneterisasi pada ambang NICE: 0,125 × £20.000–£30.000 = **£2.500–£3.750 nilai kesehatan hilang per pasien per keterlambatan 6-bulan**. Jika perangkat lunak yang mempercepat jalur menghilangkan keterlambatan itu untuk 400 pasien/tahun, nilai kesehatannya adalah 50 QALY ≈ **£1,0–£1,5 juta/tahun** — sebelum menghitung penghematan operasional apa pun.

## Hubungan dengan Rekayasa Perangkat Lunak

- **Jalur lebih cepat = QALY lebih cepat.** Apa pun yang memperpendek [rujukan untuk perawatan](../rujukan-untuk-perawatan/) mengubah disutilitas waktu-tunggu menjadi keuntungan-kesehatan, dinilai seperti di atas.
- **Keselamatan = QALY yang terjaga.** Kesalahan-obat yang dicegah dan diagnosis-terlewat adalah kehilangan QALY yang dihindari.
- **QALY juga template desain-metrik**: komposit kuantitas × kualitas, dengan bobot kualitas yang diperoleh dari instrumen terstandarisasi. "Tahun-insinyur yang disesuaikan-kualitas" (waktu × bobot survei-DevEx) adalah konstruksi yang sama — lihat [SPACE dan DevEx](../space-dan-devex/).
- Untuk mengubah QALY menjadi uang untuk kasus bisnis, gunakan [manfaat moneter bersih](../manfaat-moneter-bersih/); untuk mengubahnya menjadi keputusan, gunakan [ambang batas kesediaan-membayar](../ambang-batas-kesediaan-membayar/).

## Jebakan

- **Menciptakan bobot utilitas.** Bobot harus berasal dari instrumen tervalidasi (EQ-5D) dan set-nilai yang dipublikasikan, bukan intuisi.
- **Mengklaim QALY tanpa jalur kausal.** "Aplikasi kami memperbaiki kesejahteraan" bukan klaim QALY; "menghilangkan X minggu tunggu dalam kondisi utilitas 0,6" adalah.
- **Penghitungan ganda**: mengklaim baik keuntungan QALY maupun penghematan biaya dari perburukan-yang-dihindari yang sama memerlukan kehati-hatian agar keduanya benar-benar terpisah.
- **Titik-buta kesetaraan**: QALY menilai satu tahun perpanjangan-hidup berdasarkan utilitas-dasar, yang dapat merugikan orang dengan disabilitas — alasan mengapa ICER (AS) juga melaporkan evLYG (lihat [tahun kehidupan yang diperoleh](../tahun-kehidupan-yang-diperoleh/)).

## Sumber

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
