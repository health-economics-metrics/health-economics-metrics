# Tarif Nasional dan Biaya Unit

NHS membayar penyedia untuk aktivitas di bawah daftar-harga nasional berbasis-aturan — secara historis National Tariff / Payment by Results, digantikan oleh **NHS Payment Scheme (NHSPS)** pada 1 April 2023. Di balik harga-harga tersebut duduk infrastruktur penentuan-biaya-unit nasional: **National Cost Collection (NCC)** dan kompendium **PSSRU Unit Costs of Health and Social Care**.

## Mengapa Ini Penting

Ini adalah penyebut dari setiap kasus bisnis NHS yang kredibel. Ketika sebuah klaim mengatakan "satu kunjungan rawat-jalan bernilai £160" atau "satu jam-perawat Band 6 berbiaya £31", angka-angka tersebut berasal dari infrastruktur ini — dan menggunakan angka resmi alih-alih yang diciptakan adalah apa yang membuat evaluasi independen dapat dibandingkan dan tim keuangan kooperatif. Bagi vendor, tarif juga mendefinisikan sisi *pendapatan*: aktivitas yang dimungkinkan perangkat lunak Anda (klinik tambahan, tempat-tidur-terisi-ulang) dinilai pada harga skema.

## Perhitungan

```
Harga tarif per unit aktivitas (episode berkode-HRG, kunjungan rawat-jalan)
  = biaya unit rata-rata nasional (dari NCC) × Faktor Kekuatan Pasar (penyesuaian lokal)
  di bawah NHSPS: elemen tetap + variabel campuran ("pembayaran dan insentif selaras")

Biaya unit NCC = total biaya yang dilaporkan-trust dari satu jenis aktivitas / volume aktivitas
                (dibangun di atas Patient-Level Information and Costing Systems, PLICS)

Kompendium PSSRU: ~80 biaya unit standar (konsultasi dokter umum, jam-perawat per band,
kunjungan IGD…) — sumber default dalam evaluasi ekonomi Inggris.
```

## Contoh yang Diselesaikan

Perangkat lunak Anda membebaskan 1 jam/hari waktu perawat Band 6 dalam tahun kerja 250-hari:

```
Biaya Band 6 berbasis-PSSRU termasuk overhead ≈ £31/jam (periksa edisi saat ini)
Nilai kapasitas = 250 × £31 = £7.750/perawat/tahun (bukan-pelepas-kas)
```

Alternatifnya perawat menjalankan 2 janji-temu-tindak-lanjut-rawat-jalan ekstra/hari pada nilai skema ~£160: 500 × £160 = **£80.000/tahun aktivitas berdana** — perbedaan sepuluh-kali-lipat dalam nilai klaim tergantung pada penempatan-ulang, semuanya dari biaya unit resmi. Kedua klaim dapat diaudit karena penyebutnya dipublikasikan; itulah seluruh intinya.

## Hubungan dengan Rekayasa Perangkat Lunak

Ini adalah pola **buku-harga internal**. Ekonomi kesehatan Inggris berfungsi karena setiap evaluasi menggunakan biaya unit yang dipublikasikan sama; organisasi rekayasa sebagian besar tidak memiliki ini, sehingga setiap kasus bisnis menciptakan biaya sendiri untuk satu jam-insinyur, satu insiden, satu penerapan. Sebuah tim platform dapat mempublikasikan buku semacam itu persis — biaya berbobot per jam-insinyur berdasarkan tingkat, per insiden berdasarkan keparahan, per menit-build — dan mewajibkan penggunaannya di semua proposal. Sistem chargeback/showback juga mereplikasi mode-kegagalan tarif yang dikenal: penetapan-harga biaya-rata-rata mendorong manipulasi-volume, pembayaran tetap mendorong under-provision. Evolusi NHSPS dari pembayaran-aktivitas-murni menjadi tetap+variabel-campuran adalah dua puluh tahun pelajaran dalam desain insentif untuk penetapan-harga platform internal.

## Jebakan

- **Angka basi**: harga NCC, PSSRU, dan NHSPS diperbarui tahunan — beri tanggal setiap angka.
- **Harga tarif ≠ biaya**: harga adalah rata-rata nasional dengan penyesuaian; biaya marginal lokal Anda berbeda (lihat [biaya marginal vs rata-rata](../biaya-marginal-vs-rata-rata/)).
- **Menilai kapasitas pada tarif tanpa mekanisme** untuk benar-benar menyampaikan dan dibayar untuk aktivitas ekstra.

## Sumber

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
