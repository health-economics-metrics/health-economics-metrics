# Ekonomi Unit Aplikasi Kesehatan

Aritmatika komersial produk kesehatan-konsumen: biaya akuisisi-pelanggan (CAC), nilai-seumur-hidup (LTV), pendapatan-rata-rata-per-pengguna (ARPU), penetapan-harga per-anggota-per-bulan (PMPM), dan pembedaan pasar-pemberi-kerja antara **ROI dan VOI** (nilai-atas-investasi).

## Mengapa Ini Penting

Aplikasi kesehatan menghadapi jepitan struktural: akuisisi mahal (klaim yang diregulasi, hambatan kepercayaan, biaya kepatuhan) sementara retensi adalah yang terburuk dari vertikal perangkat lunak mana pun (~90% pengabaian dalam 30 hari — lihat [retensi dan churn](../retensi-dan-churn/)). Uji kelayakan standar — **LTV:CAC ≥ 3:1** — karenanya secara brutal sulit dalam kesehatan-konsumen, itulah sebabnya industri bermigrasi menuju model B2B2C: pemberi kerja, perusahaan asuransi, dan sistem kesehatan yang membayar PMPM untuk populasi, di mana pembelinya bukan individu yang mengabaikan.

## Perhitungan

```
CAC   = pengeluaran penjualan + pemasaran / pelanggan-membayar-baru
ARPU  = pendapatan / pengguna aktif (per periode)
LTV   = ARPU × umur-rata-rata  =  ARPU / tingkat churn
Kelayakan: LTV : CAC ≥ 3, periode pengembalian ≤ 12–18 bulan

CAC efektif per pengguna-yang-dipertahankan = CAC / retensi(t)
  — pada retensi D30 4%, CAC £5 sebenarnya £125 per pengguna yang dipertahankan

Pendapatan PMPM = tarif × anggota terdaftar × bulan
  margin vendor = PMPM − biaya-melayani per anggota per bulan
  — keterlibatan membalik tanda: di bawah langganan B2C keterlibatan mendorong
    pendapatan; di bawah PMPM, anggota yang terlibat BIAYA lebih untuk dilayani
    daripada yang dorman, dan kontrak-hasil membaliknya kembali
```

## Contoh yang Diselesaikan

Aplikasi tidur B2C: £6,99/bulan, churn bulanan 18%, CAC campuran £38.

```
LTV = 6,99 / 0,18 ≈ £38,8 → LTV:CAC ≈ 1,0 — tidak layak

Beralih ke PMPM pemberi-kerja: £1,20 PMPM × 40.000 nyawa tercakup = £48rb/bulan
Biaya-melayani: infrastruktur £0,15 + dukungan £0,10 + konten £0,05
  per anggota ≈ £0,30 → margin ~75%, siklus penjualan panjang tetapi churn adalah
  tingkat-kontrak (tahunan), bukan tingkat-pengguna (harian)

Pertanyaan pemberi-kerja menggeser metrik: ROI dolar-keras (klaim
berkurang, absensi) jarang dapat ditunjukkan untuk produk kesejahteraan —
jawaban industri adalah VOI: produktivitas, daya tarik rekrutmen,
keterlibatan — yang hanya jujur ketika dilabeli sebagai VOI, tidak
dibungkus sebagai ROI (lihat return-on-investment.md dan social-return-on-investment.md).
```

## Hubungan dengan Rekayasa Perangkat Lunak

Pilihan rekayasa menetapkan kedua sisi rasio: **biaya-melayani** adalah arsitektur ([ekonomi unit cloud](../ekonomi-unit-cloud/) — margin PMPM hidup atau mati berdasarkan biaya infrastruktur per-anggota), dan **LTV** adalah rekayasa retensi (setiap titik-churn adalah pendapatan aritmatika — dokumen [retensi](../retensi-dan-churn/) memiliki kembaran-pendapatan yang persis untuk matematika QALY-nya). Khusus untuk produk kesehatan, dasbor ekonomi-unit harus membawa baris ketiga di samping LTV dan CAC: **nilai kesehatan per pengguna-yang-diperoleh** (QALY berbobot-retensi × ambang) — karena pasar pembayar dan gaya-DiGA semakin menetapkan harga berdasarkan itu, dan karena produk yang ekonomi-unit komersial dan klinisnya berbeda (menguntungkan tetapi-tidak-aktif-secara-kesehatan, atau efektif tetapi-tidak-dapat-didanai) perlu tahu masalah mana yang dimilikinya.

## Jebakan

- **LTV dari churn-kohort-dini**: churn menstabilkan ke bawah; tetapi juga ada kelangsungan-hidup — pengadopsi-dini bertahan lebih baik daripada audiens yang diskalakan. Gunakan data kohort-dewasa.
- **CAC campuran antar saluran**: CAC sosial-berbayar dan CAC rujukan-klinisi berbeda 10×, dengan profil retensi berlawanan — segmentasikan atau tersesat.
- **PMPM tanpa batas pemanfaatan**: anggota outlier-terlibat dapat membalikkan margin; modelkan distribusi, bukan rata-rata.
- **VOI disajikan sebagai ROI** kepada CFO — kegagalan kredibilitas yang dihabiskan industri kesejahteraan-pemberi-kerja satu dekade untuk mendapatkan.

## Sumber

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
