# Tarif Kebangsaan dan Kos Unit

NHS membayar penyedia bagi aktiviti di bawah senarai harga kebangsaan berasaskan peraturan — secara sejarah Tarif Kebangsaan / Payment by Results, digantikan oleh **Skim Pembayaran NHS (NHSPS)** pada 1 April 2023. Di sebalik harga terletak infrastruktur pengkosan unit kebangsaan: **Koleksi Kos Kebangsaan (NCC)** dan kompendium **PSSRU Unit Costs of Health and Social Care**.

## Mengapa ia penting

Ini penyebut bagi setiap kes perniagaan NHS yang boleh dipercayai. Apabila tuntutan mengatakan "kehadiran pesakit luar bernilai £160" atau "sejam jururawat Band 6 berharga £31", nombor itu datang daripada infrastruktur ini — dan menggunakan angka rasmi dan bukan yang direka ialah apa yang menjadikan penilaian bebas boleh dibandingkan dan pasukan kewangan bekerjasama. Bagi vendor, tarif juga mentakrif sisi *hasil*: aktiviti yang dibolehkan perisian anda (klinik tambahan, katil diisi semula) dinilai pada harga skim.

## Matematiknya

```
Harga tarif bagi setiap unit aktiviti (episod berkod HRG, kehadiran pesakit luar)
  = purata kos unit kebangsaan (daripada NCC) × Faktor Kuasa Pasaran (pelarasan tempatan)
  di bawah NHSPS: elemen tetap + berubah campuran ("pembayaran dan insentif sejajar")

Kos unit NCC = jumlah kos dilaporkan trust bagi jenis aktiviti / volum aktiviti
               (dibina atas Sistem Maklumat dan Pengkosan Peringkat Pesakit, PLICS)

Kompendium PSSRU: ~80 kos unit piawai (konsultasi GP, jam-jururawat mengikut band,
kehadiran ED…) — sumber lalai dalam penilaian ekonomi UK.
```

## Contoh penyelesaian

Perisian anda membebaskan 1 jam/hari masa jururawat Band 6 dalam tahun bekerja 250 hari:

```
Kos Band 6 berasaskan PSSRU termasuk overhed ≈ £31/jam (semak edisi semasa)
Nilai kapasiti = 250 × £31 = £7,750/jururawat/tahun (tidak melepaskan tunai)
```

Sebagai alternatif jururawat menjalankan 2 temujanji susulan pesakit luar tambahan/hari pada nilai skim ~£160: 500 × £160 = **£80,000/tahun aktiviti dibiayai** — perbezaan sepuluh kali ganda dalam nilai dituntut bergantung pada pengagihan semula, semuanya daripada kos unit rasmi. Kedua-dua tuntutan boleh diaudit kerana penyebut diterbitkan; itulah keseluruhan tujuan.

## Kaitan dengan kejuruteraan perisian

Ini corak **buku harga dalaman**. Ekonomi kesihatan UK berfungsi kerana setiap penilaian menggunakan kos unit diterbitkan sama; organisasi kejuruteraan kebanyakannya tiada ini, jadi setiap kes perniagaan mereka-reka kos jam-jurutera, insiden, penggunaan mereka sendiri. Pasukan platform boleh menerbitkan buku sebegitu — kos termuat setiap jam-jurutera mengikut tahap, setiap insiden mengikut keterukan, setiap minit-binaan — dan mewajibkan penggunaannya dalam semua cadangan. Sistem caj balik/tunjuk balik juga meniru mod kegagalan diketahui tarif: penetapan harga kos purata mendorong permainan volum, bayaran tetap mendorong kurang penyediaan. Evolusi NHSPS daripada bayaran aktiviti tulen kepada tetap+berubah campuran ialah dua puluh tahun pengajaran dalam reka bentuk insentif untuk penetapan harga platform dalaman.

## Perangkap

- **Angka lapuk**: harga NCC, PSSRU dan NHSPS diperbaharui setiap tahun — tarikhkan setiap nombor.
- **Harga tarif ≠ kos**: harga ialah purata kebangsaan dengan pelarasan; kos marginal tempatan anda berbeza (lihat [kos marginal lwn purata](../kos-marginal-lwn-kos-purata/)).
- **Menilai kapasiti pada tarif tanpa mekanisme** untuk benar-benar menyampaikan dan dibayar bagi aktiviti tambahan.

## Sumber

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
