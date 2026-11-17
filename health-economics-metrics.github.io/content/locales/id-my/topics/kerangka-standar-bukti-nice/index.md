# Kerangka Standar Bukti NICE (ESF)

ESF adalah kerangka NICE yang menentukan **seberapa banyak bukti yang dibutuhkan teknologi kesihatan digital, proporsional dengan risikonya**. Ini adalah hal terdekat dengan jawaban resmi untuk "apa yang harus kami buktikan sebelum NHS membeli aplikasi kami?"

## Mengapa Ini Penting

ESF (pertama kali dirilis 2019, diperbarui 2022 untuk mencakup AI dan algoritma adaptif) mengklasifikasikan teknologi kesihatan digital ke dalam kadaran berdasarkan fungsi klinis, dengan standar bukti **kumulatif** — 21 standar di 5 kelompok (faktor desain, nilai, kinerja/efektivitas, dampak ekonomi, penerapan):

```
Kadar A — layanan sistem, tanpa hasil pesakit langsung (mis., penjadwalan-elektronik)
         → standar dasar: kredibilitas, perlindungan data, jaminan teknis
Kadar B — menginformasikan, pemantauan sederhana, komunikasi (mis., buku harian gejala)
         → + bukti manfaat pengguna, keandalan yang sesuai
Kadar C — merawat, mendiagnosis, atau secara aktif memandu manajemen klinis
         → + bukti efektivitas komparatif berkualitas-tinggi (idealnya RCT)
           dan analisis ekonomi
```

Untuk bukti ekonomi, [analisis biaya-konsekuensi](../analisis-biaya-konsekuensi/) dapat diterima untuk sebagian besar kadaran; [analisis biaya-utilitas](../analisis-biaya-utilitas/) diharapkan pada risiko tertinggi. ESF mendefinisikan **biaya bukti masuk-pasar** Anda — anggarkan untuk itu seperti biaya pembangunan lainnya.

## Perhitungan

Tidak ada rumus — tabel keputusan. Perhitungan operatifnya bersifat komersial:

```
Investasi bukti yang diperlukan = f(kadar)
  Kadar A: dokumentasi + jaminan ≈ £10rb–50rb
  Kadar B: studi observasional/komparatif manfaat-pengguna ≈ £50rb–250rb
  Kadar C: studi komparatif kadar-RCT + model ekonomi ≈ £250rb–£2 juta+

Posisikan klaim produk Anda dengan sengaja: mengklaim "mendukung keputusan
klinis" alih-alih "menginformasikan pesakit" memindahkan Anda satu kadar dan dapat mengalikan tagihan 10×.
```

## Contoh yang Diselesaikan

Pembuat aplikasi pengingat-ubat mempertimbangkan menambahkan fitur rekomendasi penyesuaian-dosis.

- Sebagai aplikasi pengingat: **Kadar B** — studi kohort yang menunjukkan perbaikan kepatuhan sudah cukup.
- Dengan rekomendasi dosis: **Kadar C** — bukti efektivitas komparatif (kemungkinan RCT terhadap perawatan biasa) ditambah analisis ekonomi.

Jika RCT berbiaya £600rb dan pendapatan inkremental fitur-dosis adalah £200rb/tahun, fitur tersebut harus mempertahankan nilai selama 3+ tahun sebelum biaya bukti impas — keputusan produk yang terlihat sama sekali berbeda setelah kadar ESF ditetapkan-harga. Banyak tim mengirim produk Kadar B dan menahapkan klaim Kadar C di balik pendanaan.

## Hubungan dengan Rekayasa Perangkat Lunak

ESF adalah pola tata-kelola tunggal yang paling dapat ditransfer dalam repositori ini: **persyaratan bukti bertingkat-risiko untuk adopsi alat**. Versi internal: pemformat kode membutuhkan demo (Kadar A); alat produktivitas yang mengklaim jam-dihemat membutuhkan uji-coba terukur (Kadar B); gerbang AI yang secara otomatis memblokir penerapan atau secara otomatis menulis kode klinis membutuhkan bukti kadar-uji-coba-terkontrol sebelum peluncuran seluruh-organisasi (Kadar C). Bukti proporsional menghentikan kedua mode kegagalan — birokrasi mencekik alat sepele, dan vibe mengirim yang konsekuensial. Lihat juga [jalur cepat DiGA](../jalur-cepat-diga-jerman/) untuk pelengkap "adopsi sementara dengan tenggat bukti".

## Jebakan

- **Miskategorisasi kadar oleh pemikiran-berharap** — regulator dan pembeli mengklasifikasikan berdasarkan apa yang *dilakukan* produk, bukan apa yang dikatakan pemasaran.
- **Bukti dibangun setelah produk**: menambahkan-kembali RCT pada produk yang telah dikirim tanpa instrumentasi atau equipoise itu lambat dan sering mustahil.
- **Memenuhi ESF dan melupakan sisanya**: ESF duduk di samping DTAC (keselamatan klinis, perlindungan data, interoperabilitas) dan, untuk AI, izin regulasi — lihat [evaluasi regulasi AI](../evaluasi-regulasi-ai/).

## Sumber

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
