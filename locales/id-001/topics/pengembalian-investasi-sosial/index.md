# Pengembalian Investasi Sosial (SROI)

SROI memperluas [ROI](../pengembalian-investasi/) ke hasil yang tidak ditetapkan-harga pasar — kesejahteraan, koneksi sosial, dampak lingkungan — dengan memonetisasinya dengan proksi finansial, untuk *semua* pemangku-kepentingan yang terpengaruh.

## Mengapa Ini Penting

Sebagian besar dari apa yang diproduksi intervensi kesehatan dan komunitas tidak pernah menyentuh garis-anggaran: kesepian yang berkurang, kelegaan pengasuh, keuntungan pekerjaan, martabat. SROI, diatur oleh tujuh prinsip Social Value International (libatkan pemangku-kepentingan, hargai apa yang penting, jangan mengklaim-berlebihan, bersikap transparan, verifikasi…), menghasilkan pernyataan seperti "£3,20 nilai sosial per £1 diinvestasikan". Persyaratan nilai-sosial pengadaan-publik Inggris membuat bukti gaya-SROI relevan secara komersial: proposal untuk kontrak publik (termasuk NHS) mendapat poin untuk nilai-sosial yang ditunjukkan.

## Perhitungan

```
Rasio SROI = PV(hasil sosial termoneterisasi) / PV(investasi)

Untuk setiap hasil:
  nilai = kuantitas × proksi finansial × atribusi × (1 − beban-mati) × (1 − perpindahan)

beban-mati   = akan terjadi bagaimanapun
atribusi     = bagian yang disebabkan orang lain
perpindahan  = manfaat yang dipindahkan dari tempat lain alih-alih diciptakan
peluruhan    = penurunan hasil sepanjang tahun
```

Faktor-faktor penyesuaian adalah integritas metode: tanpanya, SROI adalah fiksi dengan tanda-mata-uang.

## Contoh yang Diselesaikan

Aplikasi pertemanan yang menghubungkan orang-dewasa-lanjut-usia yang terisolasi dengan sukarelawan; biaya program £200.000/tahun; 1.500 pasangan aktif.

```
Hasil: kesepian berkurang untuk 1.500 orang
  proksi: penilaian kesejahteraan dari "kelegaan dari kesepian" ≈ £1.800/orang/tahun
  beban-mati 25% (beberapa akan menemukan koneksi bagaimanapun)
  atribusi 80% (sebagian kredit ke layanan lain)

Nilai = 1.500 × 1.800 × 0,80 × 0,75 = £1.620.000

Hasil: kunjungan dokter-umum yang berkurang, 1.500 × 1,2 kunjungan × £42 = £75.600 (nyata-bagi-pembayar)

SROI = (1.620.000 + 75.600) / 200.000 ≈ 8,5 : 1
```

Perhatikan bahwa rasionya adalah 96% kesejahteraan-termoneterisasi-proksi dan 4% kas keras. Itu adalah SROI legitimate — tetapi harus disajikan sebagai nilai-sosial, tidak pernah dibiarkan menyiratkan bahwa £1,7 juta dapat-dibank.

## Hubungan dengan Rekayasa Perangkat Lunak

SROI adalah kerangka jujur untuk pekerjaan rekayasa yang penerima-manfaatnya di luar tim-pembayar: pemeliharaan open-source, perbaikan aksesibilitas, pekerjaan-platform yang dikonsumsi tim lain, investasi komunitas-pengembang. Mekanika yang dapat ditransfer: identifikasi semua pemangku-kepentingan, monetisasi dengan proksi yang dinyatakan, dan terapkan diskon beban-mati/atribusi (apakah perbaikan-OSS itu akan terjadi bagaimanapun? berapa banyak keuntungannya adalah pekerjaan Anda vs ekosistem?). Disiplin *mendiskonkan klaim-dampak-Anda-sendiri* adalah apa yang memisahkan SROI dari angka pemasaran.

## Jebakan

- **Belanja proksi**: memilih penilaian kesejahteraan paling-murah-hati yang tersedia.
- **Melewatkan beban-mati/atribusi** — inflasi paling umum, sering menggandakan rasionya.
- **Perbandingan rasio antar studi**: rasio SROI sensitif-metode; bandingkan hanya dalam kerangka yang konsisten.
- **Menyajikan nilai-sosial sebagai penghematan-yang-dapat-dinaikan** kepada pemegang-anggaran.

## Sumber

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
