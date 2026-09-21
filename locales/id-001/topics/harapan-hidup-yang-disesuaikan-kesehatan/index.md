# Harapan Hidup yang Disesuaikan-Kesehatan (HALE)

HALE adalah ringkasan tingkat-populasi: jumlah tahun yang dapat diharapkan seseorang untuk hidup *dalam kesehatan penuh*, mendiskon tahun-tahun yang dihabiskan dalam penyakit atau disabilitas. HALE global saat lahir adalah sekitar 61,9 tahun terhadap harapan hidup 73,3 (WHO, data 2019) — kemanusiaan menjalani dekade terakhirnya, rata-rata, dalam kesehatan yang kurang-dari-penuh.

## Mengapa Ini Penting

HALE adalah metrik bintang-utara kebijakan kesehatan nasional dan global — pembilang target "penuaan sehat" dan kesenjangan yang diungkapkannya (harapan hidup dikurangi HALE) adalah beban yang bertujuan ditutup oleh pencegahan, intervensi dini, dan manajemen penyakit-kronis. Strategi kesehatan digital di tingkat kementerian dibenarkan dalam istilah HALE; portofolio aplikasi, layanan skrining, dan program pemantauan pada akhirnya menggulung ke sini.

## Perhitungan

Perhitungan standarnya adalah **metode Sullivan**:

```
HALE_usia_x = Σ (orang-tahun tabel-kehidupan pada setiap usia ≥ x × proporsi dalam kesehatan penuh)
             / penyintas pada usia x

"proporsi dalam kesehatan penuh" = 1 − Σ (prevalensi_kondisi × bobot disabilitas)
```

Input: tabel kehidupan standar ditambah prevalensi dan bobot disabilitas untuk kondisi kesehatan (dari data Global Burden of Disease). HALE terkait dengan [DALY](../tahun-kehidupan-yang-disesuaikan-disabilitas/) — beban populasi DALY dan kesenjangan HALE adalah dua pandangan dari kesehatan yang hilang sama.

## Contoh yang Diselesaikan

Program hipertensi digital nasional: 500.000 terdaftar, kontrol tekanan-darah rata-rata membaik cukup untuk memotong insidensi stroke sebesar 0,2 poin persentase/tahun. Dimodelkan sepanjang umur kohort, stroke yang dihindari menghemat 15.000 tahun berbobot-disabilitas (YLD pada bobot 0,32 ditambah YLL dari stroke fatal).

```
Kontribusi HALE ≈ 15.000 tahun sehat / 500.000 orang
                  ≈ 0,03 tahun (≈ 11 hari) HALE per orang terdaftar
```

Sebelas hari terdengar kecil — tetapi pada skala populasi begitulah cara metrik nasional benar-benar bergerak: kementerian membeli jutaan keuntungan kecil-per-orang. Aritmatika ini juga menunjukkan mengapa **jangkauan mendominasi**: intervensi dua kali lebih efektif dengan sepersepuluh pendaftaran menggerakkan HALE lima kali lebih sedikit. Lihat [jangkauan dan kesetaraan](../jangkauan-dan-kesetaraan/).

## Hubungan dengan Rekayasa Perangkat Lunak

HALE adalah pola metrik kesehatan-armada: **harapan hidup-layanan × proporsi hidup itu yang dihabiskan sehat**. Sebuah tim platform dapat menghitung "harapan hidup-layanan sehat" di seluruh asetnya — tahun yang diharapkan sebuah layanan berjalan, didiskon oleh waktu yang dihabiskan dalam kondisi terdegradasi, usang, atau insiden (bobot dari defisit SLO). Ia membingkai-ulang keandalan dari ketersediaan-titik menjadi kesehatan-sepanjang-umur, dan mengarahkan perbaikan pada sistem yang menarik-turun HALE aset.

## Jebakan

- **HALE bergerak lambat dan multi-kausal** — tidak ada intervensi tunggal yang "menggerakkan HALE" secara terukur; klaim kontribusi yang dimodelkan, bukan statistik nasional.
- **Data prevalensi tertinggal** bertahun-tahun; keuntungan terbaru tidak akan muncul dalam HALE resmi.
- **Membandingkan HALE antar negara** dengan pengukuran kondisi-kesehatan yang berbeda berbahaya; gunakan secara longitudinal dalam satu sistem.

## Sumber

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
