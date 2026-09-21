# Analisis Biaya-Konsekuensi (CCA)

CCA menyajikan biaya bersama dengan **tabel hasil yang tidak diagregasi** — klinis, operasional, eksperiensial — tanpa mengempiskannya menjadi satu rasio atau skor. Pengambil keputusan menimbang trade-off secara eksplisit.

## Mengapa Ini Penting

CCA adalah **format ekonomi yang disukai NICE untuk sebagian besar teknologi kesehatan digital** di bawah Evidence Standards Framework. Produk digital menghasilkan efek heterogen (waktu yang dihemat, kepuasan, pengurangan DNA, keuntungan klinis kecil) yang menolak agregasi jujur menjadi satu angka QALY. Alih-alih memaksa komposit yang rapuh, CCA menunjukkan buku besar lengkap. Untuk sebagian besar kasus bisnis perangkat lunak, ini adalah format paling jujur sekaligus paling persuasif, karena setiap pemangku kepentingan dapat menemukan baris relevan-keputusan mereka sendiri.

## Perhitungan

Sengaja tidak ada rumus agregasi. Outputnya adalah tabel:

```
                          Intervensi     Pembanding   Selisih
Biaya (tahunan)            £X             £Y           ΔC
Hasil 1 (unit alami)       …              …            Δ1
Hasil 2                    …              …            Δ2
Hasil kualitatif            dideskripsikan, tidak diskor
```

Setiap baris mempertahankan unitnya sendiri. Aturan: setiap konsekuensi ditentukan sebelumnya (tidak ada pilih-pilih setelah hasil); [perspektif](../perspektif-analisis/) dan [horizon](../horizon-waktu/) yang sama di seluruh; ketidakpastian per baris.

## Contoh yang Diselesaikan

Platform penilaian pra-operasi digital vs proses berbasis telepon, per tahun, satu trust:

```
                              Digital      Telepon     Selisih
Biaya operasi                 £180.000     £95.000     +£85.000
Jam perawat pada penilaian    6.200        11.800      −5.600 jam
Pembatalan bedah di-hari      92           174         −82
Kepuasan pasien (CSAT)        4,5/5        3,9/5       +0,6
Penilaian hilang/tidak lengkap 1,2%        4,8%        −3,6 pp
```

Tidak ada skor tunggal — tetapi keputusannya mudah dinalar: £85.000 membeli 5.600 jam perawat (≈ £15/jam, jauh di bawah biaya staf mana pun), 82 pembatalan yang dihindari (masing-masing membuang slot teater bernilai ~£1.200), dan pengalaman yang lebih baik. Sebuah komite juga dapat melihat persis apa yang *tidak* didapatnya: tidak ada klaim efek QALY atau mortalitas.

## Hubungan dengan Rekayasa Perangkat Lunak

CCA adalah versi formal dari scorecard seimbang yang sudah digunakan proposal platform yang baik: biaya di samping metrik DORA, skor DevEx, jumlah insiden — tidak diagregasi. Disiplin ekonomi-kesehatan yang perlu ditambahkan: **tentukan baris sebelumnya** (putuskan apa yang dihitung sebelum uji coba, sehingga Anda tidak dapat diam-diam menjatuhkan metrik yang memburuk), dan **tunjukkan baris yang tidak menguntungkan** — CCA dengan hanya berita baik adalah pemasaran. Gunakan CCA ketika tidak ada komposit yang dapat dipertahankan, yang untuk perkakas pengembang hampir selalu terjadi.

## Jebakan

- **Konsekuensi yang dipilih secara selektif** — integritas format bergantung pada penentuan sebelumnya.
- **Agregasi yang diselundupkan**: pengkodean warna atau "skor keseluruhan" memperkenalkan kembali bobot sewenang-wenang yang ada untuk dihindari CCA.
- **Kelumpuhan keputusan**: CCA membutuhkan pengambil keputusan yang bersedia menimbang trade-off; pasangkan dengan rekomendasi dan alasannya.

## Sumber

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
