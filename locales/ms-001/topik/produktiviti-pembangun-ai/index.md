# Produktiviti Pembangun AI

Metrik tentang apa yang sebenarnya dilakukan oleh bantuan pengekodan AI kepada output kejuruteraan: kadar penerimaan cadangan, pecutan kajian terkawal, daya pemprosesan PR dan pengekalan kod. Asas buktinya benar-benar bercanggah — menjadikannya kajian kes sempurna bagi perbezaan keberkesanan-lwn-keberkesanan-praktikal yang menjadi sebab ekonomi kesihatan dibina.

## Mengapa ia penting

Dua kajian terkawal yang paling kerap dipetik menunjuk ke arah bertentangan:

- **Peng et al. 2023 (RCT GitHub Copilot)**: pembangun menyiapkan tugas pelayan HTTP greenfield **55.8% lebih pantas** dengan Copilot (1j11m lwn 2j41m, n=95).
- **RCT METR 2025**: pembangun sumber terbuka berpengalaman yang bekerja pada *repositori matang mereka sendiri* **19% lebih perlahan** dengan alat AI awal-2025 (16 pembangun, 246 tugas) — sambil *percaya* mereka 20% lebih pantas.

Kedua-duanya kajian yang baik. Percanggahan itulah dapatannya: keberkesanan tugas greenfield tidak berpindah kepada keberkesanan pangkalan kod matang, dan manfaat *yang dirasai* tidak boleh menggantikan manfaat yang diukur. Perubatan mempunyai nama bagi kedua-dua fenomena (percubaan penerangan lwn pragmatik; masalah plasebo) dan jentera untuk menanganinya.

## Matematiknya

```
Kadar penerimaan  = cadangan diterima / cadangan dipaparkan
                   (telemetri GitHub purata ~30%; berbeza: SQL 45%, Python 35%, JS 28%)
Kadar pengekalan  = kod AI yang bertahan hingga cantum / kod AI diterima (~88% dilaporkan)
Pecutan           = (t_kawalan − t_AI) / t_kawalan  (daripada perbandingan terkawal SAHAJA)
Delta daya pemprosesan = Δ PR dicantum/pembangun/minggu (data lapangan GitHub/Accenture: +8.7%)

Model nilai     = pembangun × masa dijimatkan × kadar penuh × faktor penggunaan
                  — setiap sebutan memerlukan pengukuran setempat; lihat tornado dalam
                  sensitivity-analysis.md, yang mana masa dijimatkan mendominasi semua
                  parameter lain digabungkan
```

## Contoh penyelesaian

Sebuah organisasi 500 pembangun melaksanakan perintis pembantu dengan kawalan yang betul (pasukan dipadankan, 3 bulan, metrik didaftarkan awal):

```
Keputusan perintis: masa kitaran PR −18%; PR dicantum +6%; CFR tidak berubah;
              masa dijimatkan dilaporkan sendiri 45 min/hari; diukur pada peringkat tugas ≈ 15 min/hari

Nilaikan angka YANG DIUKUR: 500 × 0.25j × 220h × £60 × 0.6 penggunaan
                          ≈ £990,000/tahun kapasiti (tidak melepaskan tunai)
Kos: 500 × £39/bln × 12 ≈ £234,000/tahun
Nisbah kapasiti bersih ≈ 4:1 — boleh dibiayai, pada satu pertiga tuntutan laporan sendiri.
```

Jurang 3× antara yang dirasai dan yang diukur ialah dapatan METR yang beroperasi di dunia sebenar; membajet berdasarkan laporan sendiri akan menggandakan tiga kali baris manfaat.

## Kaitan dengan kejuruteraan perisian

Import ekonomi kesihatan untuk sesiapa yang menilai perkakas AI: jalankan **percubaan pragmatik** (pangkalan kod anda, jurutera anda, tiket sebenar — bukan tugas demo vendor); anggap **kadar penerimaan sebagai proksi, bukan hasil** (ia ialah [PPV](../penilaian-ai-klinikal/) cadangan dari sudut pandangan pembangun — penerimaan tinggi dengan pengekalan rendah ialah diagnosis berlebihan); pasangkan setiap peningkatan daya pemprosesan dengan **semakan kestabilan** (DORA 2025: AI menaikkan daya pemprosesan, menjejaskan kestabilan — intervensi yang mempunyai kesan sampingan memerlukan analisis manfaat bersih, menurut [metrik DORA](../metrik-dora/)); dan kelaskan manfaat dengan jujur sebagai kapasiti ([melepaskan tunai lwn tidak melepaskan tunai](../penjimatan-melepaskan-tunai-lwn-tidak-melepaskan-tunai/)).

## Perangkap

- **Pemindahan kajian vendor**: nombor RCT greenfield digunakan pada kerja pangkalan kod warisan — kesilapan tepat yang didedahkan oleh kajian METR.
- **Laporan sendiri sebagai pengukuran**: jurang persepsi 20 mata peratusan ialah bias terbesar yang diketahui dalam kepustakaan ini.
- **Penokokan aktiviti**: lebih banyak PR dan lebih banyak kod ialah Aktiviti, bukan hasil ([SPACE](../space-dan-devex/)); pasangkan dengan kerja semula dan CFR.
- **Mengabaikan lengkung pembelajaran**: ukuran minggu-2 menangkap kesan kebaharuan ke mana-mana arah; ukur pada keadaan mantap ([ufuk masa](../ufuk-masa/)).

## Sumber

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
