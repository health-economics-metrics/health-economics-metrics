# Alokasi Biaya Tepat hingga Sen

Membagi sejumlah total uang — subsidi bersama, tagihan infrastruktur, angka dampak anggaran — kepada beberapa penerima dengan aritmetika peratusan naif sering menghasilkan bagian yang jika dijumlahkan tidak kembali ke total semula. Alokasi tepat hingga sen adalah ubatnya: metode bilangan bulat/desimal yang bekerja dalam satuan terkecil mata uang (sen) dan menjamin bagian-bagian itu berjumlah *persis* total, seberapa pun tidak meratanya pembagian. Setiap insinyur perisian yang perlu membuat total yang dibagi cocok hingga ke sen — penggajian, pencairan subsidi, pembebanan layanan bersama — memerlukan pola ini, bukan peratusan floating-point.

## Mengapa ini penting

Ini pola mendasar bernama dalam rekayasa perisian perusahaan: *Patterns of Enterprise Application Architecture* karya Martin Fowler (2002) mendokumentasikan `Money` dan `Allocate` justru kerana "membagi $100 menjadi tiga" adalah masalah yang selalu salah ditangani kode naif, dan salah secara diam-diam — galat muncul ketika seseorang merekonsiliasi pembukuan dan mendapati bagian-bagian itu kurang (atau lebih) satu sen dari total. Dalam pekerjaan ekonomi kesihatan dan keuangan NHS ini bukan soal akademis: angka dampak anggaran dibagi per lokasi, tahun, atau trust; biaya infrastruktur dan lisensi bersama didistribusikan ke departemen berdasarkan jumlah staf atau proporsi aktivitas. Setiap pembagian itu harus cocok persis, kerana direktur keuangan yang menerima bagian yang tidak berjumlah total akan berhenti memercayai seluruh model.

## Matematika

```
Metode naif (keliru):
  bagian_i = bulatkan(total × proporsi_i / Σ proporsi)     — membulatkan tiap bagian terpisah

Metode eksak (sisa terbesar / "largest remainder allocation"):
  1. dasar_i = lantai(total_satuan_terkecil × proporsi_i / Σ proporsi)   — hanya satuan terkecil utuh (sen)
  2. sisa = total_satuan_terkecil − Σ dasar_i                            — sen yang tersisa, selalu < jumlah penerima
  3. beri 1 satuan terkecil tambahan kepada `sisa` penerima dengan bagian
     pecahan terbesar dari langkah 1 hingga sisa habis

Hasil: Σ bagian_i == total selalu, secara konstruksi
```

Metode eksak tidak pernah membulatkan satu bagian secara terpisah — ia membulatkan *seluruh alokasi* sebagai satu operasi, dan itulah yang membuat invarian jumlah itu benar.

## Contoh yang diselesaikan

Bagi $100,00 menjadi tiga bagian sama (`proporsi = [1, 1, 1]`).

Metode naif: $100,00 ÷ 3 = $33,333… dibulatkan terpisah ke sen terdekat menjadi $33,33 per penerima. Jumlah: $33,33 × 3 = $99,99 — satu sen hilang, dan tidak ada butir tunggal yang cukup "salah" untuk terlihat dengan mata.

Metode eksak: `dasar` = $33,33 untuk ketiganya (total 9.999 satuan terkecil dari `lantai(10.000 / 3) = 3.333` sen per penerima). Tersisa 1 sen (10.000 − 9.999). Satu sen yang tersisa itu jatuh kepada penerima dengan bagian pecahan terbesar dalam pembagian — penerima mana tepatnya adalah detail internal penentuan imbang, bukan sesuatu yang boleh diandalkan pemanggil. Dua penerima menerima $33,33 dan satu menerima $33,34, dan ketiga bagian berjumlah persis $100,00.

Inilah aritmetika yang dibutuhkan [analisis dampak anggaran](../analisis-dampak-anggaran/) setiap kali angka dampak anggaran total harus dibagi per lokasi, kelompok populasi, atau tahun fiskal dan direkonsiliasi dengan total yang dipublikasikan — lihat [agregasi biaya yang aman terhadap mata uang](../agregasi-biaya-yang-aman-terhadap-mata-uang/) untuk masalah pendampingnya, yaitu menjumlahkan banyak butir seperti itu tanpa penyimpangan.

## Hubungan dengan rekayasa perisian

Ini persis "pola Money" dari arsitektur perisian perusahaan — pola mendasar bernama untuk jenis bug ini secara khusus, bukan trik sekali pakai. Kegagalan rekonsiliasi keuangan yang nyata telah masuk ke produksi akibat bug yang sama: pembagian proporsional yang dihitung dalam `f64`, dibulatkan per penerima, dan tidak pernah diperiksa terhadap total aslinya. Ia terkait langsung dengan modul [total biaya kepemilikan](../total-biaya-kepemilikan/) repositori ini, yang saat ini menjumlah biaya floating-point biasa lintas tahun dan opsi — disiplin ketepatan yang sama berlaku ketika total TCO atau dampak anggaran harus *dialokasikan*, bukan hanya dijumlahkan.

## Jebakan

- **Peratusan lalu bulatkan alih-alih sisa terbesar**: mengalokasikan dengan peratusan floating-point dan membulatkan tiap penerima secara terpisah, yang memperbesar galat pembulatan dan jarang kembali menjumlah ke total, terutama dengan banyak penerima.
- **Mengabaikan eksponen satuan terkecil mata uang**: mengira semua mata uang punya 2 desimal — yen Jepang 0, beberapa mata uang 3; pembagian proporsional yang ditulis tangan sering menanamkan angka 2 secara kaku dan rusak diam-diam pada mata uang lain. Rutin alokasi eksak membaca eksponen dari mata uangnya sendiri (ISO 4217).
- **Mengalokasikan ulang sisa yang sudah dialokasikan**: menjalankan ulang rutin alokasi pada sisa alokasi sebelumnya tanpa pemeriksaan idempotensi, yang dapat mengkreditkan sen yang sama dua kali kepada penerima yang sama.

## Sumber

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — pola `Money` dan `Allocate`.
- ISO 4217 — standar kode mata uang dan dana, yang mendefinisikan eksponen satuan terkecil setiap mata uang.
