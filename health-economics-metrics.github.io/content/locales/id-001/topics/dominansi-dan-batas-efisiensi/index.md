# Dominansi dan Batas Efisiensi

Sebuah pilihan **didominasi** jika pilihan lain berbiaya kurang *dan* menghasilkan lebih banyak. **Batas efisiensi** adalah yang tersisa setelah menghilangkan pilihan yang didominasi: kumpulan pilihan di mana mendapatkan lebih banyak memerlukan membayar lebih.

## Mengapa Ini Penting

Sebelum debat apa pun tentang ambang batas atau anggaran, penilaian teknologi kesehatan pertama-tama menghilangkan pilihan-pilihan yang seharusnya tidak pernah dipilih siapa pun. Memplot setiap pilihan pada bidang biaya-vs-efek dan menggambar batasnya adalah latihan lima-menit yang secara rutin membunuh separuh daftar pendek. Perbandingan inkremental ([ICER](../rasio-efektivitas-biaya-inkremental/)) kemudian dihitung hanya *di sepanjang batas*, setiap pilihan terhadap yang-tidak-didominasi-termurah-berikutnya — tidak pernah terhadap "tidak melakukan apa-apa" ketika ada pilihan menengah yang lebih baik.

## Perhitungan

```
Dominansi ketat:      A mendominasi B jika Biaya_A ≤ Biaya_B dan Efek_A ≥ Efek_B
                    (dengan setidaknya satu ketidaksamaan ketat)

Dominansi diperluas: B dikesampingkan jika campuran A dan C mencapai lebih banyak efek
                    per pound — terdeteksi ketika ICER menurun saat Anda naik
                    batas. ICER batas yang valid harus meningkat.
```

Prosedur: urutkan pilihan berdasarkan efek; hapus yang didominasi ketat; hitung ICER berpasangan antar tetangga; hapus pilihan mana pun yang ICER-nya melebihi pilihan berikutnya yang lebih-efektif (dominansi diperluas); ulangi hingga ICER meningkat secara monoton.

## Contoh yang Diselesaikan

Empat pilihan untuk mengurangi janji temu terlewat (efek = janji temu yang dipulihkan/tahun):

```
Pilihan             Biaya/thn   Dipulihkan
Tidak melakukan apa-apa £0      0
Pengingat SMS        £20.000    2.000
Panggilan telepon     £120.000  2.200
SMS + triase AI       £90.000   3.500
```

Panggilan telepon **didominasi ketat** oleh SMS + triase AI (biaya lebih, memulihkan lebih sedikit). Batas: tidak ada apa-apa → SMS → SMS + AI.

```
ICER(SMS vs tidak ada apa-apa)  = 20.000 / 2.000  = £10 per janji temu dipulihkan
ICER(SMS+AI vs SMS)             = (90.000 − 20.000) / (3.500 − 2.000) = £46,67 per janji temu
```

ICER meningkat → batas valid. Pada ~£160 dihemat per janji-temu-rumah-sakit yang dipulihkan (lihat [tingkat tidak-hadir](../tingkat-tidak-hadir/)), kedua langkah batas layak diambil; proposal bank-telepon tidak seharusnya pernah mencapai komite.

## Hubungan dengan Rekayasa Perangkat Lunak

Bangun bagan yang sama untuk keputusan perkakas apa pun: biaya per tahun pada satu sumbu, hasil terukur (jam dihemat, insiden dihindari, penerapan diaktifkan) pada yang lain. Titik-titik di atas-dan-kiri batas dihilangkan sebelum siapa pun berdebat soal anggaran. Ini membingkai-ulang seleksi vendor dari debat daftar-fitur menjadi "Anda didominasi; rapat selesai." Ini juga mengungkap pola perusahaan umum membeli pilihan paling mahal untuk keuntungan marginal — sah hanya jika harga inkremental per unit inkremental adalah yang akan dibayar organisasi secara sadar.

## Jebakan

- **Membandingkan segalanya dengan garis dasar** alih-alih dengan pilihan berikutnya pada batas — ini menyanjung pilihan mahal dengan menyembunyikan kesetaraan-dekat yang lebih murah.
- **Skor efek dimensi-tunggal** yang menyembunyikan apa yang penting; jika dua hasil dihitung, baik gabungkan secara dapat dipertahankan (lihat [analisis biaya-utilitas](../analisis-biaya-utilitas/)) atau tunjukkan dua batas.
- **Melupakan ketidakpastian**: pilihan dekat batas dapat bertukar tempat di bawah [analisis sensitivitas](../analisis-sensitivitas/).

## Sumber

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
