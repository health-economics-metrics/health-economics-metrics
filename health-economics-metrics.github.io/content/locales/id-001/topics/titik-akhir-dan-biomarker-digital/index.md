# Titik Akhir dan Biomarker Digital

Biomarker digital adalah ukuran fisiologis atau perilaku objektif yang dikumpulkan melalui sensor (kecepatan gaya-berjalan dari telepon, tidur dari wearable, tremor dari akselerometri). Titik akhir digital adalah ukuran semacam itu yang ditingkatkan menjadi **hasil uji coba** — digunakan untuk menunjukkan efek perawatan. Promosi dari "data yang dipancarkan perangkat" menjadi "bukti yang diterima regulator" melewati tangga validasi yang ditentukan.

## Mengapa Ini Penting

Titik akhir uji coba tradisional bersifat episodik (kunjungan klinik setiap 3 bulan) dan mahal; titik akhir digital bersifat kontinu, ekologis (kehidupan nyata, bukan kinerja klinik), dan murah per pengamatan — mereka dapat menyusutkan uji coba, mendeteksi efek lebih awal, dan memungkinkan studi terdesentralisasi. Tangkapannya adalah validasi: kerangka yang diterima (selaras-FDA, tiga pilar) memerlukan **validasi verifikasi/analitis** (sensor mengukur kuantitas fisik secara akurat), **validasi klinis** (ukuran mencerminkan kondisi klinis yang diklaimnya), dan **aspek kesehatan yang bermakna** yang terbukti (pasien peduli dengan apa yang ditangkapnya). Titik akhir tanpa ketiganya adalah telemetri, bukan bukti.

## Perhitungan

```
Validasi analitis: kesesuaian dengan referensi (lihat wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Validasi klinis:   korelasi/diskriminasi terhadap jangkar klinis
                       (validitas kelompok-dikenal, responsivitas terhadap perubahan)
Ekonomi titik akhir:
  peristiwa terdeteksi per pasien-tahun (kontinu) vs pengambilan sampel per-kunjungan
  daya uji coba: ukuran kontinu memotong ukuran sampel ketika varians antar-kunjungan
  mendominasi — N ∝ σ²/Δ², dan σ² turun dengan pengambilan sampel padat
```

## Contoh yang Diselesaikan

Uji coba Parkinson mempertimbangkan kecepatan gaya-berjalan dari sensor pergelangan tangan versus skor rating-klinik triwulanan:

```
Titik akhir klinik:  4 pengukuran/pasien/tahun, kebisingan hari-ke-hari tinggi
Titik akhir digital: ~200 pengukuran pasif/pasien/tahun

Varians estimasi perubahan-tahunan turun ~5× dengan pengambilan sampel padat →
ukuran efek terdeteksi pada daya tetap membaik ~√5 ≈ 2,2×, atau
setara ukuran sampel menyusut ~40–60% untuk hipotesis yang sama.
Pada £25.000 per pasien terdaftar, mengurangi 200 pasien ≈ £5 juta dihemat
per uji coba — kasus komersial untuk investasi validasi
(mungkin £1–2 juta itu sendiri) di seluruh pipeline sponsor.
```

## Hubungan dengan Rekayasa Perangkat Lunak

Titik akhir digital adalah disiplin rekayasa-data yang mengenakan pakaian klinis: **provenansi dan pemversian** (pembaruan algoritma di tengah-studi mengancam komparabilitas — masalah [PCCP](../evaluasi-regulasi-ai/) dalam bentuk uji coba; kunci-versi dan validasi-jembatan); **desain data-hilang** (celah waktu-pakai bersifat informatif, bukan acak — lihat [validasi wearable](../validasi-wearable/); pilihan imputasi adalah klaim ilmiah); dan **keputusan pembagian edge/cloud** yang mengubah sinyal mentah apa yang bahkan dapat dipulihkan nanti. Tim yang memperlakukan pipeline pengukuran sebagai perangkat lunak teregulasi sejak hari pertama — diuji, diversi, didokumentasikan — membeli kredibilitas titik akhir mereka dengan murah; menambahkan-kembali validasi ke pipeline yang dibangun-cepat adalah tempat program titik-akhir-digital mati.

## Jebakan

- **Korelasi-dengan-klinik sebagai validasi penuh**: mencocokkan ukuran klinik yang cacat membuktikan warisan, bukan kebenaran; validasi terhadap aspek kesehatan yang bermakna.
- **Risiko regulasi titik-akhir-baru**: titik akhir yang belum pernah ada mungkin secara ilmiah unggul dan tetap menenggelamkan pengajuan — libatkan regulator sejak dini (program kualifikasi ada).
- **Ketidakcocokan sensor-populasi**: validasi pada pergelangan-tangan muda-sehat, penerapan pada pasien lanjut-usia dengan perbedaan tremor dan pigmentasi yang tidak pernah dilihat PPG.
- **Drift fitur**: melatih ulang algoritma gaya-berjalan pada data baru diam-diam mendefinisikan-ulang titik akhir di tengah-studi.

## Sumber

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
