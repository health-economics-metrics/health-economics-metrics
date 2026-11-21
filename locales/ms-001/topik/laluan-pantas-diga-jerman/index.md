# Laluan Pantas DiGA Jerman

DiGA (Digitale Gesundheitsanwendungen) ialah laluan berkanun "aplikasi atas preskripsi" Jerman — sistem kebangsaan pertama di dunia di mana doktor mempreskripsikan aplikasi kesihatan yang diluluskan dan insurans berkanun mesti membayar balik. Ia eksperimen langsung terkemuka dalam membayar terapeutik digital pada skala kebangsaan.

## Mengapa ia penting

DiGA menjawab soalan yang ditanya setiap syarikat kesihatan digital — "siapa yang benar-benar akan membayar?" — dengan perundangan (DVG, 2019). Reka bentuknya luar biasa:

- **Keputusan pantas**: BfArM (pengawal selia) mesti membuat keputusan dalam 3 bulan.
- **Penyenaraian sementara**: aplikasi boleh disenaraikan selama 12 bulan *sambil masih menjana bukti* — memperoleh hasil semasa kajian utamanya.
- **Tarikh akhir bukti**: buktikan "kesan penjagaan kesihatan positif" (manfaat perubatan, atau penambahbaikan struktur/prosedur berkaitan pesakit) melalui kajian perbandingan — biasanya RCT — atau dinyahsenarai. Kira-kira separuh penyenaraian sementara gagal ditukar.
- **Harga**: pengilang menetapkan harga tahun-1 secara bebas; kemudian dirundingkan dengan persekutuan penanggung insurans. Median harga awal 3 bulan sekitar €500; elemen harga berasaskan prestasi tiba dari 2026.

Semakan realiti pasaran (penyelidikan hingga akhir 2024): ~68 aplikasi disenaraikan, >1J preskripsi kumulatif, ~81% preskripsi diaktifkan, ~€234J perbelanjaan penanggung insurans kumulatif — pasaran sebenar, tetapi sederhana berbanding gembar-gembur, dan pematuhan selepas pengaktifan kekal titik lemah.

## Matematiknya

Model komersial yang dijalankan setiap pengasas DiGA:

```
Hasil = preskripsi × kadar pengaktifan × harga setiap tempoh preskripsi
Kos bukti = RCT utama (lazimnya €1J–3J) dalam tetingkap 12 bulan
Nilai jangkaan = P(bukti berjaya) × hasil keadaan mantap − kos bukti

Dengan ~50% kegagalan penukaran, P mesti dinilai dengan jujur — separuh bidang
membelanjakan wang RCT dan kehilangan penyenaraian.
```

## Contoh penyelesaian

Aplikasi pengurusan kemurungan disenaraikan sementara pada €450/suku tahun:

```
Tahun 1: 20,000 preskripsi × 81% pengaktifan × €450 ≈ €7.3J hasil
Kos RCT: €2J, berjalan serentak
Hasil A (bukti positif): penyenaraian kekal, harga dirundingkan ~€380,
  keadaan mantap 60,000 preskripsi/thn ≈ €18.5J/thn
Hasil B (bukti gagal): dinyahsenarai pada bulan ke-12; hasil berhenti.
```

Tahun sementara membiayai penjanaan bukti — inovasi teras laluan itu. Bezakan dengan urutan tradisional (bukti dahulu, hasil bertahun kemudian), yang membuat kelaparan tepat produk yang DiGA mahu wujud.

## Kaitan dengan kejuruteraan perisian

Corak DiGA — **penerimaan sementara dengan metrik kejayaan didaftar awal dan penamat automatik** — boleh disalin terus untuk tadbir urus alat kejuruteraan: hantar alat kepada pengguna pengeluaran selama 12 bulan, daftarkan metrik awal (masa dijimatkan terukur, pengurangan insiden), tamat automatik kecuali bukti tiba. Ia menyelesaikan paradoks projek perintis (alat yang memerlukan skala untuk membuktikan nilai tidak pernah mendapat skala) tanpa memberi pemilikan kekal kepada teknologi tidak terbukti. Data pengaktifan-81%/pematuhan-rendah juga membawa pengajaran produk: preskripsi (atau mandat eksekutif) mendapat pemasangan; hanya kualiti produk mendapat penggunaan berterusan — lihat [pematuhan dan ketekunan](../pematuhan-dan-kegigihan/).

## Perangkap

- **Menganggap penyenaraian sebagai garisan penamat** — preskripsi memerlukan kepercayaan pempreskripsi; banyak DiGA tersenarai melihat volum yang boleh diabaikan.
- **Kurang kuasa pada kajian utama** untuk menjimatkan wang semasa tahun hasil — ekonomi palsu yang menerangkan banyak kadar kegagalan 50%.
- **Memindahkan model tanpa pembayar**: DiGA berfungsi kerana bayaran balik berkanun; salinan tanpa pembayaran yang diwajibkan hanya program perintis.

## Sumber

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
