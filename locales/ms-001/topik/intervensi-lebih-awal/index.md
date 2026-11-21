# Intervensi Lebih Awal

Jika kapasiti yang dijimatkan membolehkan pengamal menyemak tunggakan diagnostik lebih awal, pesakit berpindah daripada senarai menunggu kepada rawatan aktif dengan lebih pantas — dan merawat lebih awal biasanya lebih murah dan lebih baik daripada merawat kemudian, kerana keadaan yang tidak dirawat berkembang.

## Mengapa ia penting

Perkembangan penyakit ialah faedah kompaun penjagaan kesihatan. Pesakit yang menunggu dengan keadaan tidak dirawat tidak berada dalam keadaan mantap: kanser beralih peringkat, kegagalan jantung dekompensasi, kemurungan ringan menjadi teruk. Intervensi lebih awal justeru menyampaikan dividen berganda — **hasil lebih baik** (lebih banyak QALY, dirawat daripada garis asas lebih sihat) dan selalunya **kos rawatan lebih rendah** (rawatan peringkat awal kurang intensif daripada penyelamatan peringkat lewat). Mekanisme ini yang menaikkan "laluan lebih pantas" daripada kelebihan operasi kepada keperluan klinikal dan ekonomi — dan ia sebab mendalam mengapa [kos kelewatan](../kos-kelewatan/) terpakai kepada perisian klinikal.

## Matematiknya

```
Nilai intervensi lebih awal (setiap pesakit) =
    [Kos_lewat − Kos_awal]                         (offset kos rawatan)
  + [QALY_awal − QALY_lewat] × λ                   (keuntungan kesihatan × ambang)
  × P(perkembangan semasa kelewatan)                (pemberat kebarangkalian)
```

Pemberat kebarangkalian ini penting: bukan semua pesakit yang menunggu berkembang. Modelkan kebarangkalian peralihan bagi setiap unit masa (daripada data sejarah semula jadi), bukan kes terburuk. Kemudian diskaun: kos dielakkan bertahun jauhnya bernilai kurang hari ini ([diskaun](../diskaun-dan-keutamaan-masa/)) — dan perhatikan kebanyakan intervensi awal ialah kos-*efektif* dan bukan kos-*menjimatkan* (lihat [ekonomi pencegahan](../ekonomi-pencegahan/)).

## Contoh penyelesaian

Tunggakan saringan retinopati diabetik: 4,000 pesakit, tertinggal 6 bulan. Penggredan dibantu AI melipat tigakan daya pemprosesan dan membersihkan baris gilir dalam 8 minggu. Sejarah semula jadi: ~2% pesakit menunggu/tahun berkembang ke peringkat mengancam penglihatan semasa tidak disemak.

```
Peristiwa perkembangan dielakkan oleh pecutan ~4 bulan:
  4,000 × 2% × (4/12) ≈ 27 pesakit

Bagi setiap perkembangan dielakkan:
  offset rawatan (terapi intravitreal lwn laser) ≈ £4,000
  keuntungan QALY (penglihatan dipelihara) ≈ 0.8 QALY × £20,000 = £16,000

Nilai ≈ 27 × (4,000 + 16,000) ≈ £540,000 — daripada satu tunggakan dibersihkan sekali,
sebelum mengira keuntungan daya pemprosesan kekal.
```

## Kaitan dengan kejuruteraan perisian

Dua pemindahan. Pertama, yang jelas: perisian yang memecut laluan diagnostik dan rawatan (triaj, penggredan AI, penghalaan keputusan) memonetisasi melalui model tepat ini — dan model memberitahu laluan mana untuk dipecut: yang berlengkung perkembangan paling curam, bukan baris gilir paling panjang. Kedua, cermin kejuruteraan: **kecacatan juga berkembang**. Pepijat yang ditangkap dalam reka bentuk berharga satu perbualan; dalam pengeluaran berharga satu insiden; lengkung kos "anjak-kiri" (10–100× mengikut peringkat) ialah model perkembangan, dan versi jujurnya membawa amaran sama — pengesanan awal biasanya kos-efektif, bukan wang percuma, kerana semakan dan ujian mempunyai kos sebenar dan kebanyakan isu yang ditangkap tidak akan berkembang.

## Perangkap

- **Perkembangan kes terburuk diandaikan untuk semua orang** — pemberat kebarangkalian ialah beza antara analisis dan advokasi.
- **Bias masa pimpinan**: mencari penyakit lebih awal tanpa mengubah hasil kelihatan seperti manfaat tetapi bukan; *intervensi berkesan* lebih awal ialah tuntutan, bukan pengesanan awal sahaja (lihat [ekonomi saringan](../ekonomi-saringan/)).
- **Pengiraan berganda** dengan tuntutan senarai menunggu dan RTT yang dibina atas pecutan sama — satu penambahbaikan laluan, satu set manfaat, diperuntukkan sekali.

## Sumber

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
