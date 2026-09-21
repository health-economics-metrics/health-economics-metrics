# Kerangka Standar Bukti NICE (ESF)

ESF adalah kerangka NICE yang menentukan **seberapa banyak bukti yang dibutuhkan teknologi kesehatan digital, proporsional dengan risikonya**. Ini adalah hal terdekat dengan jawaban resmi untuk "apa yang harus kami buktikan sebelum NHS membeli aplikasi kami?"

## Mengapa Ini Penting

ESF (pertama kali dirilis 2019, diperbarui 2022 untuk mencakup AI dan algoritma adaptif) mengklasifikasikan teknologi kesehatan digital ke dalam tingkatan berdasarkan fungsi klinis, dengan standar bukti **kumulatif** — 21 standar di 5 kelompok (faktor desain, nilai, kinerja/efektivitas, dampak ekonomi, penerapan):

```
Tingkat A — layanan sistem, tanpa hasil pasien langsung (mis., penjadwalan-elektronik)
         → standar dasar: kredibilitas, perlindungan data, jaminan teknis
Tingkat B — menginformasikan, pemantauan sederhana, komunikasi (mis., buku harian gejala)
         → + bukti manfaat pengguna, keandalan yang sesuai
Tingkat C — merawat, mendiagnosis, atau secara aktif memandu manajemen klinis
         → + bukti efektivitas komparatif berkualitas-tinggi (idealnya RCT)
           dan analisis ekonomi
```

Untuk bukti ekonomi, [analisis biaya-konsekuensi](../analisis-biaya-konsekuensi/) dapat diterima untuk sebagian besar tingkatan; [analisis biaya-utilitas](../analisis-biaya-utilitas/) diharapkan pada risiko tertinggi. ESF mendefinisikan **biaya bukti masuk-pasar** Anda — anggarkan untuk itu seperti biaya pembangunan lainnya.

## Perhitungan

Tidak ada rumus — tabel keputusan. Perhitungan operatifnya bersifat komersial:

```
Investasi bukti yang diperlukan = f(tingkat)
  Tingkat A: dokumentasi + jaminan ≈ £10rb–50rb
  Tingkat B: studi observasional/komparatif manfaat-pengguna ≈ £50rb–250rb
  Tingkat C: studi komparatif tingkat-RCT + model ekonomi ≈ £250rb–£2 juta+

Posisikan klaim produk Anda dengan sengaja: mengklaim "mendukung keputusan
klinis" alih-alih "menginformasikan pasien" memindahkan Anda satu tingkat dan dapat mengalikan tagihan 10×.
```

## Contoh yang Diselesaikan

Pembuat aplikasi pengingat-obat mempertimbangkan menambahkan fitur rekomendasi penyesuaian-dosis.

- Sebagai aplikasi pengingat: **Tingkat B** — studi kohort yang menunjukkan perbaikan kepatuhan sudah cukup.
- Dengan rekomendasi dosis: **Tingkat C** — bukti efektivitas komparatif (kemungkinan RCT terhadap perawatan biasa) ditambah analisis ekonomi.

Jika RCT berbiaya £600rb dan pendapatan inkremental fitur-dosis adalah £200rb/tahun, fitur tersebut harus mempertahankan nilai selama 3+ tahun sebelum biaya bukti impas — keputusan produk yang terlihat sama sekali berbeda setelah tingkat ESF ditetapkan-harga. Banyak tim mengirim produk Tingkat B dan menahapkan klaim Tingkat C di balik pendanaan.

## Hubungan dengan Rekayasa Perangkat Lunak

ESF adalah pola tata-kelola tunggal yang paling dapat ditransfer dalam repositori ini: **persyaratan bukti bertingkat-risiko untuk adopsi alat**. Versi internal: pemformat kode membutuhkan demo (Tingkat A); alat produktivitas yang mengklaim jam-dihemat membutuhkan uji-coba terukur (Tingkat B); gerbang AI yang secara otomatis memblokir penerapan atau secara otomatis menulis kode klinis membutuhkan bukti tingkat-uji-coba-terkontrol sebelum peluncuran seluruh-organisasi (Tingkat C). Bukti proporsional menghentikan kedua mode kegagalan — birokrasi mencekik alat sepele, dan vibe mengirim yang konsekuensial. Lihat juga [jalur cepat DiGA](../jalur-cepat-diga-jerman/) untuk pelengkap "adopsi sementara dengan tenggat bukti".

## Jebakan

- **Miskategorisasi tingkat oleh pemikiran-berharap** — regulator dan pembeli mengklasifikasikan berdasarkan apa yang *dilakukan* produk, bukan apa yang dikatakan pemasaran.
- **Bukti dibangun setelah produk**: menambahkan-kembali RCT pada produk yang telah dikirim tanpa instrumentasi atau equipoise itu lambat dan sering mustahil.
- **Memenuhi ESF dan melupakan sisanya**: ESF duduk di samping DTAC (keselamatan klinis, perlindungan data, interoperabilitas) dan, untuk AI, izin regulasi — lihat [evaluasi regulasi AI](../evaluasi-regulasi-ai/).

## Sumber

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
