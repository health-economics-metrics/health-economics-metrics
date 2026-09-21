# Penilaian Teknologi Kesehatan (HTA)

HTA adalah proses formal dan terinstitusionalisasi di mana sistem kesehatan memutuskan apakah sebuah teknologi — obat, perangkat, atau perangkat lunak — layak dibayar. Ia menggabungkan bukti efektivitas-klinis dengan penilaian ekonomi di bawah metodologi yang dipublikasikan dan wajib.

## Mengapa Ini Penting

Jika Anda menjual ke sistem kesehatan nasional, sebuah badan HTA dapat secara harfiah memutuskan akses pasar Anda. Mengetahui proses lokal adalah mengetahui regulator-nilai nyata Anda:

- **NICE (Inggris)**: penilaian statutori di bawah *kasus rujukan* yang ditentukan — QALY dari [EQ-5D](../eq-5d/), [perspektif](../perspektif-analisis/) NHS+PSS, [diskonto](../diskonto-dan-preferensi-waktu/) 3,5%, [PSA](../analisis-sensitivitas-probabilistik/) wajib — dinilai terhadap £20rb–£30rb/QALY dengan [modifier keparahan](../defisit-qaly-dan-modifier-keparahan/); teknologi yang sangat terspesialisasi hingga £100rb+ dengan pembobotan.
- **ICER (AS, non-pemerintah)**: laporan bukti dengan *tolok-ukur harga manfaat-kesehatan* — harga di mana produk akan efektif-biaya pada $100rb–$150rb per QALY/evLYG — digunakan sebagai leverage negosiasi; ditambah "peringatan keterjangkauan" dampak-anggaran.
- **Kanada (CADTH → CDA-AMC)**: tinjauan penggantian pada ≈CAD$50rb/QALY; secara historis meminta pemotongan harga di ~95% pengajuan.

## Perhitungan

Kekuatan HTA bukan rumus tetapi **metode yang diwajibkan**: setiap pengajuan menghitung [ICER](../rasio-efektivitas-biaya-inkremental/) yang sama di bawah aturan kasus-rujukan yang sama, sehingga hasil dapat dibandingkan antar produk dan tahun. Kasus rujukan menentukan ukuran hasil, instrumen utilitas, perspektif, seleksi pembanding, tingkat diskon, horizon waktu, dan analisis ketidakpastian — menghilangkan setiap derajat kebebasan yang dapat dimanipulasi sponsor.

## Contoh yang Diselesaikan

Sebuah terapeutik digital mengajukan ke penilaian gaya-NICE:

```
Model: ΔC = +£450/pasien, ΔE = +0,03 QALY → ICER = £15.000/QALY ✓ di bawah £20rb
Pemeriksaan kasus-rujukan:
  utilitas dari EQ-5D-5L dengan set nilai Inggris             ✓
  pembanding = jalur perawatan saat ini (bukan "tanpa perawatan") ✓
  PSA: probabilitas 71% efektif-biaya pada £20rb              ✓ (dilaporkan)
  modifier keparahan: defisit di bawah batas ×1,2             — tidak diklaim
Rekomendasi: komisioning rutin, dengan pengumpulan data dunia-nyata.
```

Analisis yang disukai sponsor sendiri menunjukkan £9.000/QALY; kasus rujukan mendorongnya menjadi £15.000 dengan memaksa pembanding yang jujur. Kesenjangan itulah *mengapa* kasus rujukan ada.

## Hubungan dengan Rekayasa Perangkat Lunak

Artefak yang dapat ditransfer adalah **kasus rujukan internal**: satu metode yang diwajibkan untuk semua kasus bisnis alat/platform — pembanding yang dinyatakan, biaya unit standar (lihat [tarif nasional dan biaya unit](../tarif-nasional-dan-biaya-unit/) untuk polanya), tingkat diskon tetap, analisis sensitivitas yang diperlukan, template standar. "Dosier gaya-AMCP untuk alat" yang diajukan ke dewan platform membuat proposal dapat dibandingkan dan manipulasi terlihat, persis seperti HTA lakukan untuk kedokteran. Mulai lebih kecil daripada NICE: template dua-halaman ditambah buku-harga yang dipublikasikan mengalahkan tidak-ada-standar-sama-sekali.

## Jebakan

- **Memperlakukan HTA sebagai formalitas setelah izin regulasi** — izin CE/UKCA/FDA mengatakan sebuah produk aman; HTA memutuskan apakah *layak dibeli*. Rintangan berbeda, bukti berbeda.
- **Membangun model ekonomi setelah uji coba** — pembangkitan bukti harus dirancang mundur dari persyaratan kasus-rujukan.
- **Mengabaikan perbedaan yurisdiksi**: ICER yang dapat didanai di AS pada $120rb/QALY gagal di NICE pada £30rb; rencanakan bukti dan penetapan harga per pasar.

## Sumber

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
