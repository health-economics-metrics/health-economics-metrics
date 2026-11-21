# Metrik Perkhidmatan GDS

Manual Perkhidmatan Perkhidmatan Digital Kerajaan UK (GDS) mewajibkan empat KPI bagi setiap perkhidmatan digital kerajaan: **kos setiap transaksi, kepuasan pengguna, kadar penyiapan dan pengambilan digital**. Bersama-sama ia ekonomi minimum perkhidmatan digital awam — dan templat yang diwarisi perkhidmatan digital NHS.

## Mengapa ia penting

Metrik GDS mengekodkan kes perniagaan anjakan saluran yang membiayai sedekad pendigitalan kerajaan: Laporan Kecekapan Digital mendapati transaksi digital ~20× lebih murah daripada telefon dan ~50× lebih murah daripada bersemuka (angka kerajaan tempatan: web £0.15, telefon £2.83, bersemuka £8.62). Tetapi penjimatan hanya terhasil apabila orang *menyiapkan* perjalanan digital (kadar penyiapan) *dan bukannya* saluran mahal (pengambilan) — empat KPI ialah satu model ekonomi, bukan empat papan pemuka.

## Matematiknya

```
Kos setiap transaksi = jumlah kos perkhidmatan / transaksi siap
Kadar penyiapan      = siap / transaksi dimulakan × 100
Pengambilan digital  = transaksi digital / transaksi semua saluran × 100
Kepuasan pengguna    = % berpuas hati+sangat berpuas hati (5-mata, tinjauan dalam perkhidmatan)

Penjimatan anjakan saluran = volum × anjakan pengambilan × (kos_saluran_lama − kos_digital)
… tolak permintaan kegagalan: (1 − kadar penyiapan) × kos saluran sandaran
```

## Contoh penyelesaian

Perkhidmatan pengurusan temujanji NHS: 2J transaksi/tahun, kini 70% telefon (£3.20/panggilan) / 30% digital (£0.25). Reka bentuk semula menaikkan pengambilan digital kepada 55% dan penyiapan daripada 84% kepada 93%:

```
Penjimatan anjakan pengambilan = 2J × 0.25 × (3.20 − 0.25) = £1,475,000/tahun

Penjimatan permintaan kegagalan: perjalanan digital gagal kembali ke telefon
  sebelum: 2J × 0.30 × 0.16 × £3.20 = £307,200
  selepas: 2J × 0.55 × 0.07 × £3.20 = £246,400
  bersih £60,800/tahun — penambahbaikan penyiapan melindungi keuntungan pengambilan

Kepuasan ialah penunjuk utama: pengguna tidak berpuas hati kembali ke telefon,
jadi penurunan kepuasan meramalkan pereputan pengambilan sebelum ia muncul.
```

## Kaitan dengan kejuruteraan perisian

Empat KPI ini contoh gred pengeluaran bagi [jadual kos-akibat](../analisis-kos-akibat/): satu metrik kos, tiga metrik hasil, tidak pernah dimampatkan menjadi skor. Bagi jurutera produk, pengajaran operasi: **kadar penyiapan ialah masalah instrumentasi corong** (setiap titik terbengkalai boleh ditemui dan dibaiki); **kos setiap transaksi ialah [ekonomi unit awan](../ekonomi-unit-awan/)** serta kos saluran dibantu kakitangan; **pengambilan ialah metrik ekuiti yang menyamar** — pengguna yang tidak boleh atau tidak mahu beralih saluran secara tidak seimbang warga emas, OKU dan daif, jadi penutupan saluran agresif menukar "penjimatan" kepada bahaya akses (lihat [capaian dan ekuiti](../capaian-dan-ekuiti/)). Menerbitkan KPI (GOV.UK berbuat demikian, setiap perkhidmatan) ialah mekanisme tersendiri: ketelusan mendisiplinkan ramalan seperti audit [realisasi manfaat](../realisasi-manfaat/).

## Perangkap

- **Pengambilan melalui paksaan**: menutup talian telefon menaikkan pengambilan dan membuang permintaan kegagalan kepada kakitangan barisan hadapan; ukur kos seluruh sistem.
- **Penyiapan diukur dari halaman-2**: memulakan corong selepas titik tercicir memuji kadar.
- **Kos setiap transaksi mengabaikan sokongan digital-dibantu** dan pengendalian permintaan kegagalan.
- **Tinjauan kepuasan hanya pada penyiapan berjaya** — yang tidak berpuas hati kebanyakannya tidak pernah sampai ke tinjauan.

## Sumber

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
