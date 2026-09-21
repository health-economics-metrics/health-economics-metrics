# Defisit QALY dan Modifier Keparahan

Defisit QALY mengukur berapa banyak kesehatan-masa-depan yang diambil sebuah penyakit dari pasien dibandingkan populasi umum. NICE menggunakannya untuk menerapkan **modifier keparahan**: semakin sakit populasinya, semakin bernilai setiap QALY yang diperoleh — hingga 1,7× ambang standar.

## Mengapa Ini Penting

Sejak manual 2022 NICE, keparahan adalah pengali eksplisit pada nilai keuntungan-kesehatan, menggantikan premium akhir-hidup lama. Sebuah teknologi untuk kondisi berat dinilai terhadap ambang efektif hingga ~£51.000/QALY alih-alih £30.000. Jika perangkat lunak Anda melayani populasi yang terpengaruh-parah (gagal-jantung lanjut, penyakit-mental berat), modifier keparahan dapat menjadi perbedaan antara kasus ekonomi yang dapat-didanai dan tidak-dapat-didanai — dan Anda memerlukan matematika defisit untuk mengklaimnya.

## Perhitungan

Dua ukuran, dihitung selama sisa umur dengan standar-perawatan saat ini:

```
Defisit absolut      = QALY_populasi_umum − QALY_dengan_kondisi
Defisit proporsional = Defisit absolut / QALY_populasi_umum
```

Bobot NICE 2022 (mana pun yang memberikan bobot lebih tinggi berlaku):

```
Bobot ×1,0: absolut < 12 dan proporsional < 0,85
Bobot ×1,2: absolut ≥ 12 atau proporsional ≥ 0,85
Bobot ×1,7: absolut ≥ 18 atau proporsional ≥ 0,95
```

Bobotnya mengalikan ΔE (atau setara ambangnya): λ efektif menjadi £24rb–£36rb pada ×1,2 dan £34rb–£51rb pada ×1,7.

## Contoh yang Diselesaikan

Pasien dengan kondisi agresif, usia rata-rata 60. Populasi umum pada usia 60 mengharapkan 14,2 QALY didiskon; dengan kondisi di bawah perawatan saat ini, 2,1.

```
Defisit absolut      = 14,2 − 2,1 = 12,1  (≥ 12 → memenuhi syarat untuk ×1,2)
Defisit proporsional = 12,1 / 14,2 = 0,852 (≥ 0,85 → juga ×1,2)
```

ICER platform pemantauan Anda adalah £26.000/QALY — di atas penilaian titik-tengah standar £20rb–£30rb, batas-tepi. Dengan bobot ×1,2: ICER efektif = 26.000 / 1,2 ≈ **£21.700/QALY** — dapat-didanai dengan nyaman. Perhitungan defisit baru saja memindahkan keputusan.

## Hubungan dengan Rekayasa Perangkat Lunak

Pembobotan keparahan adalah versi formal dari sesuatu yang dilakukan organisasi rekayasa secara instingtif: membelanjakan lebih banyak per unit perbaikan pada sistem-yang-paling-buruk. Pola yang dapat ditransfer — hitung "defisit SLO" setiap layanan (seberapa jauh di bawah garis-dasar sehat yang diharapkan ia berjalan, secara absolut dan proporsional), dan bobot nilai perbaikan sesuai. Ini membenarkan, dengan aritmatika alih-alih argumen, mengapa sistem warisan yang terbakar mendapat lebih banyak investasi per jam yang dihemat daripada yang sehat. Ini juga membawa pelajaran tata-kelola yang sama: publikasikan bobot *sebelum* rapat prioritisasi, atau setiap tim akan mengklaim keparahan.

## Jebakan

- **Menghitung defisit terhadap garis-dasar yang salah**: ini diukur di bawah *standar-perawatan saat ini*, bukan riwayat-alami yang tidak-dirawat.
- **Sensitivitas usia**: defisit sangat bergantung pada usia populasi (pasien lebih muda memiliki lebih banyak QALY untuk hilang → defisit absolut lebih tinggi); gunakan distribusi usia populasi-yang-dirawat yang sebenarnya.
- **Mengasumsikan modifier berlaku di tempat lain** — ini adalah mekanisme NICE (Inggris); badan HTA lain menangani keparahan secara berbeda (atau tidak sama sekali).

## Sumber

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
