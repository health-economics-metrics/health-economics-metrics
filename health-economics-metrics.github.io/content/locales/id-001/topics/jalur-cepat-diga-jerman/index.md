# Jalur Cepat DiGA Jerman

DiGA (Digitale Gesundheitsanwendungen) adalah jalur statutori "aplikasi atas resep" Jerman — sistem nasional pertama di dunia di mana dokter meresepkan aplikasi kesehatan yang disetujui dan asuransi statutori harus menggantinya. Ini adalah eksperimen langsung terdepan dalam membayar terapeutik digital pada skala nasional.

## Mengapa Ini Penting

DiGA menjawab pertanyaan yang diajukan setiap perusahaan kesehatan digital — "siapa yang benar-benar akan membayar?" — dengan legislasi (DVG, 2019). Desainnya luar biasa:

- **Keputusan cepat**: BfArM (regulator) harus memutuskan dalam 3 bulan.
- **Pendaftaran sementara**: aplikasi dapat terdaftar selama 12 bulan *sementara masih menghasilkan bukti* — memperoleh pendapatan selama studi pivotal mereka.
- **Tenggat bukti**: buktikan "efek perawatan-kesehatan positif" (manfaat medis, atau perbaikan struktural/prosedural yang relevan-pasien) melalui studi komparatif — biasanya RCT — atau dihapus dari daftar. Kira-kira separuh entri sementara gagal berkonversi.
- **Penetapan harga**: produsen menetapkan harga tahun-1 secara bebas; kemudian dinegosiasikan dengan federasi asuransi. Harga awal 3-bulan median sekitar €500; elemen penetapan-harga berbasis-kinerja tiba mulai 2026.

Pemeriksaan realitas pasar (penelitian hingga akhir-2024): ~68 aplikasi terdaftar, >1 juta resep kumulatif, ~81% resep diaktifkan, ~€234 juta pengeluaran asuransi kumulatif — pasar nyata, tetapi sederhana dibandingkan hype, dan kepatuhan setelah aktivasi tetap menjadi titik lemah.

## Perhitungan

Model komersial yang dijalankan setiap pendiri DiGA:

```
Pendapatan = resep × tingkat aktivasi × harga per periode resep
Biaya bukti = RCT pivotal (biasanya €1 juta–3 juta) dalam jendela 12-bulan
Nilai diharapkan = P(bukti berhasil) × pendapatan kondisi-stabil − biaya bukti

Dengan ~50% kegagalan konversi, P harus dinilai secara jujur — separuh
bidang menghabiskan uang RCT dan kehilangan pendaftaran.
```

## Contoh yang Diselesaikan

Sebuah aplikasi manajemen depresi terdaftar sementara pada €450/triwulan:

```
Tahun 1: 20.000 resep × 81% aktivasi × €450 ≈ €7,3 juta pendapatan
Biaya RCT: €2 juta, berjalan bersamaan
Hasil A (bukti positif): pendaftaran permanen, harga dinegosiasikan ~€380,
  kondisi stabil 60.000 resep/thn ≈ €18,5 juta/thn
Hasil B (bukti gagal): dihapus dari daftar pada bulan 12; pendapatan berhenti.
```

Tahun sementara membiayai pembangkitan bukti — inovasi inti jalur ini. Kontraskan dengan urutan tradisional (bukti dulu, pendapatan bertahun-tahun kemudian), yang membuat kelaparan justru produk-produk yang ingin ada DiGA.

## Hubungan dengan Rekayasa Perangkat Lunak

Pola DiGA — **adopsi sementara dengan metrik sukses yang terdaftar sebelumnya dan matahari-terbenam otomatis** — dapat langsung disalin untuk tata kelola alat rekayasa: kirim alat ke pengguna produksi selama 12 bulan, daftarkan metrik sebelumnya (waktu yang dihemat terukur, pengurangan insiden), kadaluwarsa otomatis kecuali bukti tiba. Ini memecahkan paradoks-uji-coba (alat yang membutuhkan skala untuk membuktikan nilai tidak pernah mendapat skala) tanpa memberikan masa jabatan permanen pada teknologi yang belum terbukti. Data aktivasi-81%/kepatuhan-rendah juga membawa pelajaran produk: resep (atau mandat eksekutif) mendapatkan instalasi; hanya kualitas produk yang mendapatkan penggunaan berkelanjutan — lihat [kepatuhan dan persistensi](../kepatuhan-dan-persistensi/).

## Jebakan

- **Memperlakukan pendaftaran sebagai garis finis** — resep memerlukan kepercayaan peresep; banyak DiGA terdaftar melihat volume yang dapat diabaikan.
- **Mengurangi daya studi pivotal** untuk menghemat uang selama tahun pendapatan — ekonomi palsu yang menjelaskan sebagian besar tingkat kegagalan 50%.
- **Mengangkut model tanpa pembayar**: DiGA bekerja karena penggantian bersifat statutori; salinan tanpa pembayaran wajib hanyalah program percobaan.

## Sumber

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
