# Indeks Konsentrasi

Indeks konsentrasi (Wagstaff, Paci, van Doorslaer, 1991) adalah ukuran statistik standar ketimpangan sosial-ekonomi pada suatu variabel kesihatan. Nilainya berkisar dari −1 hingga 1: nilai negatif berarti variabel kesihatan terkonsentrasi pada kelompok yang lebih kurang beruntung secara sosial-ekonomi, nilai positif berarti terkonsentrasi pada kelompok yang lebih mampu, dan nol berarti tidak ada gradien sosial-ekonomi yang sistematis. Ia mengubah kecurigaan akan distribusi yang tidak merata menjadi satu angka yang dapat dibandingkan.

## Mengapa ini penting

Sebuah program bisa tampak efektif secara keseluruhan namun mengantarkan hampir seluruh manfaatnya kepada mereka yang sudah mampu. Itulah kekhawatiran distribusi yang dilacak [Jangkauan dan kesetaraan](../jangkauan-dan-kesetaraan/) secara deskriptif — jangkauan yang distratifikasi menurut kuintil kekurangan, kesenjangan kesetaraan antara kelompok teratas dan terbawah — tetapi tabel bertingkat tidak dapat diringkas menjadi satu garis tren, dan sulit dibandingkan antara dua ukuran yang sama sekali berbeda yang diukur pada skala berbeda. Indeks konsentrasi menyelesaikan keduanya: ia dihitung dengan cara yang sama untuk variabel kesihatan apa pun terhadap pemeringkatan sosial-ekonomi apa pun, sehingga perkhidmatan kesihatan nasional dapat melacak apakah ketimpangan layanan digital tertentu melebar atau menyempit dari rilis ke rilis, dan membandingkan keadilan distribusi peluncuran aplikasi dengan, misalnya, program skrining, pada skala yang dinormalisasi.

## Matematika

```
CI = (2 / rata-rata(nilai_kesehatan)) × Cov(nilai_kesehatan, peringkat_sosial_ekonomi)

Cov(X, Y) = rata-rata(X × Y) − rata-rata(X) × rata-rata(Y)   (kovarians populasi)

peringkat_sosial_ekonomi: peringkat pecahan setiap orang dalam distribusi
sosial-ekonomi, dalam [0, 1] (0 = paling kurang beruntung, 1 = paling
beruntung; untuk data yang dikelompokkan/berpita, biasanya dipakai peringkat
titik tengah setiap kelompok)
```

Ini adalah "rumus kovarians praktis" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Bank Dunia 2008) — jalan pintas standar para praktisi untuk menghitung indeks konsentrasi langsung dari data observasi berpasangan, tanpa menggambar lalu mengintegralkan di bawah kurva konsentrasi.

## Contoh yang diselesaikan

Skor kesihatan yang dilaporkan sendiri (1 = terburuk, 4 = terbaik) yang diamati pada empat kuartil sosial-ekonomi berukuran sama, masing-masing diwakili oleh peringkat titik tengahnya:

```
nilai_kesehatan                = [1.0, 2.0, 3.0, 4.0]
peringkat_sosial_ekonomi       = [0.125, 0.375, 0.625, 0.875]

rata-rata(nilai_kesehatan)     = 2.5
rata-rata(kesihatan × peringkat) = rata-rata([0.125, 0.75, 1.875, 3.5]) = 1.5625
rata-rata(peringkat)           = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

Nilai positif `0,25` berarti skor kesihatan ini terkonsentrasi pada kelompok yang lebih beruntung secara sosial-ekonomi — responden dengan skor lebih tinggi condong ke ujung yang lebih mampu dalam pemeringkatan.

## Hubungan dengan rekayasa perisian

Ini adalah ukuran ketimpangan berbasis kovarians, dari keluarga yang sama dengan yang dipakai dalam ekonomi pada umumnya (kerabat koefisien Gini), dan dapat diterjemahkan menjadi pengukuran apakah manfaat sebuah produk perisian terkonsentrasi pada kelompok pengguna yang sudah beruntung atau terdistribusi adil — perluasan langsung dari [Jangkauan dan kesetaraan](../jangkauan-dan-kesetaraan/) (dimensi "reach" dalam RE-AIM) menjadi ukuran statistik formal alih-alih kesenjangan yang dideskripsikan. Sementara jangkauan dan kesetaraan melaporkan dampak lapisan demi lapisan, indeks konsentrasi memadatkan seluruh distribusi menjadi satu angka bertanda, cocok sebagai KPI tunggal yang dilacak lintas rilis — praktis untuk dasbor yang tidak muat menampilkan distribusi bertingkat penuh.

## Jebakan

- **Penyimpangan konvensi tanda**: tanda bergantung pada cara variabel kesihatan dan peringkat didefinisikan; membalik salah satunya membalik tanda, jadi selalu nyatakan konvensi yang dipakai saat melaporkan nilai.
- **Memakai peringkat batas, bukan peringkat titik tengah**: data sosial-ekonomi yang dikelompokkan atau berpita (misalnya kuintil) memerlukan peringkat pecahan setiap kelompok pada *titik tengahnya*, bukan pada tepinya, jika tidak indeks menjadi bias.
- **Membaca "mendekati nol" sebagai "tidak ada ketimpangan"**: indeks konsentrasi yang mendekati nol berarti "tidak ada gradien sosial-ekonomi yang sistematis", bukan "tidak ada ketimpangan" dalam arti mutlak — ketimpangan yang berlawanan arah dapat saling meniadakan.

## Sumber

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — buku pegangan standar praktisi, sumber rumus kovarians praktis yang dipakai di sini. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
