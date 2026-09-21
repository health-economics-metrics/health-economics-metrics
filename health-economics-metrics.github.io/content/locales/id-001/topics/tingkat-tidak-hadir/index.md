# Tingkat Tidak-Hadir (DNA)

Tingkat DNA adalah persentase janji temu yang dipesan di mana pasien tidak hadir maupun membatalkan. Klinisi, ruangan, dan slotnya dibayar; tidak ada yang terjadi. Ini adalah metrik limbah paling murni dalam perawatan kesehatan — dan salah satu yang paling dapat diperbaiki-perangkat-lunak.

## Mengapa Ini Penting

Angka NHS England (2019): janji temu dokter umum yang terlewat melebihi 15 juta/tahun pada ~£30 masing-masing — lebih dari **£216 juta/tahun** — dan DNA rawat-jalan rumah sakit berjalan ~8 juta/tahun (~6,4% janji temu) pada rata-rata ~**£160** per slot yang terlewat. Karena biaya marginal pengingat adalah receh dan nilai yang dipulihkan adalah slot klinis yang berstaf penuh, pengurangan DNA memiliki beberapa aritmatika ROI terbaik dalam kesehatan digital, itulah sebabnya pengingat SMS, pemesanan-ulang yang mudah, dan pemesanan-berlebih prediktif termasuk di antara kemenangan kesehatan digital pertama yang terbukti.

## Perhitungan

```
Tingkat DNA = DNA / janji temu yang dipesan × 100

Nilai pengurangan = janji temu × ΔTingkat DNA × nilai per slot yang dipulihkan

nilai per slot yang dipulihkan: slot diisi ulang (nilai aktivitas / pengurangan
daftar-tunggu) atau tidak (waktu staf sebagian dapat digunakan kembali) — mekanisme
penting, sebagaimana dengan bed-days-saved.md.
```

## Contoh yang Diselesaikan

Sebuah departemen rawat jalan: 200.000 janji temu/tahun, tingkat DNA 8%. Layanan pengingat-plus-pemesanan-ulang (SMS dengan pemesanan-ulang satu-ketuk, info transportasi, format yang dapat diakses) memotong DNA menjadi 5,5%.

```
Slot yang dipulihkan = 200.000 × 0,025 = 5.000/tahun
Diisi ulang dari daftar tunggu pada nilai rawat-jalan rata-rata ~£160:
  5.000 × £160 = £800.000/tahun aktivitas yang dipulihkan
Biaya layanan: 200.000 × £0,40 = £80.000/tahun

Pengembalian ≈ 10:1, ditambah 5.000 pasien daftar-tunggu dilihat lebih cepat
(lihat waiting-list-impact.md dan referral-to-treatment.md).
```

Ukuran efeknya (2,5 poin) realistis: uji coba pengingat secara konsisten menunjukkan pengurangan DNA relatif 25–40%.

## Hubungan dengan Rekayasa Perangkat Lunak

- **Ini adalah masalah sistem penjadwalan**: pengingat, pemesanan-ulang mandiri, pengisian-otomatis daftar-tunggu dari pembatalan, dan model prediksi tidak-hadir yang menggerakkan pemesanan-ganda yang ditargetkan. Masing-masing adalah rekayasa perangkat lunak biasa dengan kasus ekonomi yang sangat tajam.
- **Analog rekayasanya**: tidak-hadir untuk kapasitas yang dipesan — slot CI yang dipesan-tapi-menganggur, kapasitas cloud yang dicadangkan, ruang rapat, panel wawancara. Ekonominya ditransfer: dorongan otomatis yang murah (atau pelepasan otomatis reservasi yang tidak digunakan) memulihkan kapasitas komitmen yang mahal.
- **Pratinjau etika prediksi**: model tidak-hadir yang dilatih pada data kehadiran mengkodekan kekurangan dan hambatan akses; menggunakannya untuk *menurunkan-prioritas* kemungkinan tidak-hadir memperkuat ketidaksetaraan, menggunakannya untuk *mendukung* kehadiran (bantuan transportasi, alternatif telepon) menguranginya. Lihat [jangkauan dan kesetaraan](../jangkauan-dan-kesetaraan/).

## Jebakan

- **Menghitung dibatalkan-dan-dipesan-ulang sebagai nilai yang dipulihkan dua kali.**
- **Menilai slot yang dipulihkan yang tidak diisi ulang** — slot kosong dengan pengingat terkirim tetap kosong.
- **Mengejar DNA hingga nol**: poin terakhir DNA adalah pasien yang menghadapi hambatan nyata; pendekatan punitif (pemulangan setelah N DNA) memotong metrik dengan meninggalkan pasien.

## Sumber

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
