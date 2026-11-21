# Pengekalan dan Churn

Pengekalan mengukur pecahan kohort pengguna yang masih aktif N hari selepas bermula (lengkung D1/D7/D30); churn ialah pelengkapnya. Garis asas kesihatan digital yang kejam: **kira-kira 90% pengguna aplikasi kesihatan meninggalkan dalam 30 hari** — pengekalan D30 kesihatan digital berjalan ~3–4% berbanding purata semua-aplikasi ~6%.

## Mengapa ia penting

Eysenbach menamakan ini pada 2005: **hukum atrisi** — kehilangan pengguna pada kadar tinggi ialah sifat struktur intrinsik intervensi eHealth, bukan pepijat pelaksanaan, dengan atrisi dalam percubaan eHealth lazimnya melebihi 50%. Akibat ekonominya menyeluruh: pengekalan mentakrif *tetingkap rawatan* di mana sebarang manfaat boleh disampaikan, dan [ekonomi unit](../ekonomi-unit-aplikasi-kesihatan/) — CAC dibayar bagi setiap pengguna yang kekal 12 hari tidak menyampaikan LTV mahupun QALY. Mana-mana model ekonomi untuk produk kesihatan pengguna yang tidak memberi pemberat manfaat dengan lengkung pengekalan menerangkan produk yang tidak wujud.

## Matematiknya

```
Pengekalan_Dn = pengguna aktif pada hari n / saiz kohort × 100
Kadar churn   = pengguna hilang dalam tempoh / pengguna pada permulaan tempoh × 100

Pemberatan manfaat (langkah ekonomi kesihatan):
  manfaat jangkaan setiap pengguna diperoleh = Σ_t pengekalan(t) × kadar manfaat(t)
  ≈ kawasan di bawah lengkung pengekalan × manfaat setiap masa
  — BUKAN manfaat percubaan × 100% pengguna diperoleh

Kos setiap pengguna-dikekalkan-pada-D30 = CAC / pengekalan D30
  (pada D30 4%, CAC £5 sebenarnya £125 bagi setiap pengguna dikekalkan)
```

## Contoh penyelesaian

Aplikasi kesihatan mental: percubaan menunjukkan 0.02 QALY diperoleh bagi setiap pengguna yang menamatkan 8 minggu. Kohort penggunaan 100,000 muat turun, pengekalan D7 25%, D30 8%, minggu-8 4%:

```
Penamat             = 100,000 × 0.04 = 4,000
QALY disampaikan    = 4,000 × 0.02 = 80  (bukan 100,000 × 0.02 = 2,000)
Pada £20,000/QALY   = £1.6J nilai kesihatan (bukan £40J)

Nilai kesihatan setiap muat turun = £16 — nombor yang patut menetapkan apa yang akan
dibayar pembayar bagi setiap muat turun, dan ia 4% daripada tuntutan naif.
Kes penambahbaikan pengekalan: menggerakkan penyiapan minggu-8 4% → 6% menambah
40 QALY/tahun ≈ £800k — kejuruteraan pengekalan ialah pengeluaran kesihatan.
```

## Kaitan dengan kejuruteraan perisian

Pengekalan ialah metrik di mana kejuruteraan produk paling langsung mengilangkan nilai kesihatan, menurut aritmetik di atas. Amalan yang menggerakkannya biasa: masa-ke-nilai-pertama orientasi, reka bentuk penglibatan semula, prestasi, dan yang penting **penyiapan dos terancang** — program dengan penghujung yang ditakrifkan (8 minggu, kemudian graduasi) patut mengukur *penyiapan*, bukan DAU berterusan, menyelaraskan metrik dengan model klinikal dan bukan model perhatian dibiayai-iklan. Analisis kemandirian ialah kit alat yang betul (matematik Kaplan-Meier sama seperti [tahun hayat diperoleh](../tahun-hayat-diperoleh/)); segmenkan lengkung mengikut saluran perolehan, kerana campuran saluran mengubah pengekalan lebih daripada kebanyakan ciri.

## Perangkap

- **Pencucian niat-untuk-merawat songsang**: percubaan melaporkan penamat; ekonomi penggunaan mesti mengira semua yang diperoleh (amaran teras Eysenbach).
- **Teater pengekalan**: pengguna "aktif" didorong pemberitahuan yang tidak pernah melakukan tindakan terapeutik (lihat [metrik penglibatan](../metrik-penglibatan/)).
- **Membandingkan lengkung merentas takrifan**: "aktif" ditakrifkan sebagai buka lwn tindakan bermakna menganjak D30 berganda-ganda.
- **Mengabaikan siapa yang churn**: jika yang paling sakit churn paling pantas, manfaat setiap pengguna jatuh apabila pengekalan bertambah baik dalam kalangan yang sihat — pasangkan lengkung dengan campuran-kes (lihat [capaian dan ekuiti](../capaian-dan-ekuiti/)).

## Sumber

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
