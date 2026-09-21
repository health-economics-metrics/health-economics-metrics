# Analisis Biaya-Utilitas (CUA)

CUA adalah analisis efektivitas-biaya dengan **hasil generik yang dibobotkan-preferensi** — hampir selalu [QALY](../tahun-kehidupan-yang-disesuaikan-kualitas/) (atau [DALY](../tahun-kehidupan-yang-disesuaikan-disabilitas/) yang dihindari). Karena unit hasilnya universal, CUA dapat membandingkan intervensi lintas penyakit yang sama sekali berbeda.

## Mengapa Ini Penting

Sistem kesehatan nasional harus memilih antara obat kanker, aplikasi kesehatan mental, dan robot bedah dari satu anggaran. Unit alami tidak dapat membandingkannya; QALY bisa. CUA karenanya adalah metode kasus-rujukan di NICE dan sebagian besar badan HTA: outputnya — biaya per QALY, dinilai terhadap [ambang batas](../ambang-batas-kesediaan-membayar/) — adalah hal terdekat yang dimiliki kebijakan kesehatan dengan nilai tukar universal. Jika Anda ingin perangkat lunak Anda didanai *alih-alih hal lain*, CUA adalah arenanya.

## Perhitungan

```
ICUR = ΔBiaya / ΔQALY      (ICER dengan QALY sebagai unit efek)

ΔQALY = Σ (durasi_i × utilitas_i)_baru − Σ (durasi_i × utilitas_i)_lama
```

Utilitas dari instrumen yang divalidasi ([EQ-5D](../eq-5d/)); biaya dan QALY keduanya [didiskon](../diskonto-dan-preferensi-waktu/) pada 3,5% (kasus rujukan NICE); ketidakpastian melalui [PSA](../analisis-sensitivitas-probabilistik/).

## Contoh yang Diselesaikan

Sebuah aplikasi CBT untuk kecemasan sedang vs daftar tunggu untuk terapi tatap muka, per pasien:

```
Biaya:  lisensi + dukungan aplikasi         £250
        terapi yang digantikan               −£680   (40% pengguna tidak lagi membutuhkannya)
        ΔC = 250 − 680 = −£430 (menghemat uang)

QALY:   6 bulan pada utilitas 0,76 alih-alih 0,68 selama menunggu
        ΔE = 0,5 × (0,76 − 0,68) = +0,04 QALY
```

ΔC < 0 dan ΔE > 0: aplikasi **mendominasi** — lebih baik dan lebih murah, tidak diperlukan rasio. Jika asumsi penggantian-terapi hanya 10%, ΔC = 250 − 170 = +£80, dan ICUR = 80 / 0,04 = **£2.000/QALY** — masih jauh di bawah £20.000. Kasusnya bertahan bahkan dengan asumsi kunci yang sangat dikurangi: itulah tampilan CUA yang kuat (dan [diagram tornado](../analisis-sensitivitas/) membuktikannya).

## Hubungan dengan Rekayasa Perangkat Lunak

Ide mendalam CUA — *satu unit komposit, dibobotkan-preferensi untuk membandingkan hal-hal yang tidak sama* — adalah pola untuk membandingkan investasi rekayasa yang tidak sama (keamanan vs pengalaman-pengembang vs keandalan). Pilihan jujurnya adalah baik unit komposit yang dapat dipertahankan (langka) atau [tabel biaya-konsekuensi](../analisis-biaya-konsekuensi/) yang eksplisit (biasa). Yang diperingatkan CUA adalah komposit palsu: "skor dampak" berbobot yang bobotnya disetel setelah fakta agar pilihan yang disukai menang. Ekonomi kesehatan menghabiskan dekade untuk menstandarkan perolehan utilitas justru agar bobot mendahului perbandingan.

## Jebakan

- **Keuntungan utilitas di bawah sensitivitas instrumen** (lihat perbedaan minimal-penting-secara-klinis di [hasil yang dilaporkan pasien](../hasil-yang-dilaporkan-pasien/)) — ΔE kecil dikalikan populasi besar adalah trik pencucian klasik.
- **Penggantian perawatan pembanding yang hilang** — istilah biaya terbesar untuk produk digital sering apa yang mereka gantikan.
- **Memetakan skor non-preferensi ke utilitas** dengan crosswalk yang tidak divalidasi.

## Sumber

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
