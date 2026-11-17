# Agregasi Biaya yang Aman terhadap Mata Uang

Menjumlahkan banyak butir keuangan — tagihan bulanan, biaya per lokasi, angka dampak anggaran multitahun — dengan bilangan floating-point biner biasa (`f64`) menumpuk galat representasi kecil, kerana sebagian besar pecahan desimal (seperti $1.234,56) tidak dapat direpresentasikan secara tepat dalam floating-point biner. Setiap galat sangat kecil, tetapi model besar yang menjumlahkan ratusan atau ribuan butir selama bertahun-tahun dapat menyimpang sebagian dari satu sen — dan penyimpangan itu bergantung pada *urutan* penjumlahan, sehingga tidak dapat direproduksi. Agregasi mata uang yang dilakukan dengan aritmetika desimal eksak (atau satuan terkecil berupa bilangan bulat) menjumlah dengan tepat, sejalan dengan cara sistem akuntansi dan pembukuan berpasangan harus cocok hingga ke sen.

## Mengapa ini penting

Ini adalah jenis bug perisian yang terdokumentasi baik dan mendasar: makalah Goldberg 1991 di ACM Computing Surveys, "What Every Computer Scientist Should Know About Floating-Point Arithmetic", adalah rujukan standar mengapa floating-point biner tidak dapat merepresentasikan sebagian besar jumlah desimal secara tepat dan mengapa menjumlahkan banyak di antaranya memperbesar galat. Model ekonomi kesihatan dan keuangan NHS rutin menjumlahkan beberapa tahun dan beberapa kategori biaya — baik [total biaya kepemilikan](../total-biaya-kepemilikan/) maupun [analisis dampak anggaran](../analisis-dampak-anggaran/) menjumlahkan banyak butir biaya `f64` selama bertahun-tahun. Ketika sebuah model harus cocok hingga ke sen — audit yang menghitung total dengan tangan harus mencapai angka yang *persis sama* — aritmetika itu sendiri harus berupa desimal eksak, bukan floating-point.

## Matematika

```
Agregasi naif:               total = Σ f64(butir_i)       — penyimpangan bergantung urutan
Agregasi aman mata uang:     total = Σ Decimal(butir_i)   — eksak, dapat direproduksi

Menerapkan penyesuaian peratusan (mis. kontingensi):
  disesuaikan = total × pengali      — hasil Decimal eksak, bisa memiliki lebih banyak
                                       tempat desimal daripada eksponen satuan
                                       terkecil mata uang
  dibulatkan = bulatkan(disesuaikan, eksponen_mata_uang, aturan_pembulatan)
                                     — aturan pembulatan (half-up versus
                                       half-even/pembulatan bankir) harus
                                       dinyatakan secara eksplisit
```

Perhatikan disiplin dua langkah: mengalikan `Decimal` eksak dengan pengali dapat menghasilkan lebih banyak tempat desimal daripada yang benar-benar dipakai mata uang (mis. tiga desimal dari angka dua desimal dikali pengali dua desimal) — presisi antara itu *tidak* otomatis dibuang; hanya langkah pembulatan eksplisit dengan aturan pembulatan yang dinyatakan yang menurunkannya ke eksponen satuan terkecil mata uang yang sebenarnya.

## Contoh yang diselesaikan

Dua belas tagihan bulanan identik masing-masing $1.234,56, dijumlahkan dengan aritmetika desimal eksak: $1.234,56 × 12 = **$14.814,72** persis, dibandingkan menjumlahkan konstanta `f64` `1234.56` sebanyak dua belas kali dalam presisi ganda IEEE-754, yang dapat menyimpang sebagian dari satu sen bergantung pada urutan penjumlahan — jenis bug yang nyata dan terdokumentasi, bukan masalah bagi model yang dibangun di atas aritmetika `Money` desimal eksak.

Sekarang terapkan kontingensi dampak anggaran standar 5% (pengali 1,05) pada total $14.814,72 itu: $14.814,72 × 1,05 = $15.555,456 — tiga tempat desimal, kerana perkalian bersifat eksak dan tidak otomatis dibulatkan ke dua tempat desimal mata uang. Dibulatkan secara eksplisit ke 2 desimal dengan pembulatan bankir (half-even) menghasilkan persis **$15.555,46**.

## Hubungan dengan rekayasa perisian

Ini pelajaran mendasar langsung di balik prinsip "perisian keuangan memakai `Decimal`, bukan `float`" — terkait eksplisit dengan modul [total biaya kepemilikan](../total-biaya-kepemilikan/) dan [analisis dampak anggaran](../analisis-dampak-anggaran/) di repositori ini, yang saat ini keduanya menjumlah biaya floating-point biasa. Argumen kebenaran ini tidak menuntut migrasi model-model itu segera; ia menunjukkan secara tepat *kapan* sebuah sistem harus cocok hingga ke sen dan kerananya tidak boleh memakai floating-point biner untuk aritmetika uangnya. Lihat [alokasi biaya tepat hingga sen](../alokasi-biaya-tepat-hingga-sen/) untuk masalah pendampingnya, yaitu *membagi* (bukan menjumlah) sebuah total tanpa kehilangan satu sen pun.

## Jebakan

- **Mengonversi ke `float` di tengah rantai**: mengekstrak nilai uang sebagai bilangan floating-point di tengah perhitungan (beberapa pustaka `Money` bahkan menamai metode konversi ini "lossy" sebagai peringatan tegas) diam-diam meninggalkan jaminan ketepatan untuk setiap perhitungan setelah titik itu.
- **"Decimal terlalu lambat untuk dipedulikan"**: menolak aritmetika desimal eksak sebagai beban tak perlu, padahal pelaporan keuangan membutuhkan kebenaran dan keterauditan, bukan throughput mentah.
- **Menerapkan peratusan kontingensi tanpa menyatakan aturan pembulatan**: half-up versus half-even (pembulatan bankir) dapat mengubah sen terakhir; konvensi pembulatan itu sendiri harus berupa pilihan yang dinyatakan dan dapat diaudit — lihat [analisis biaya-manfaat](../analisis-biaya-manfaat/) untuk panduan Green Book HM Treasury tentang penyesuaian kontingensi dan bias optimisme, jenis angka yang menjadi sasaran langkah pembulatan ini.

## Sumber

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — pola `Money`.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — panduan bias optimisme dan kontingensi untuk pemodelan dampak anggaran. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
