# Produktivitas Pengembang dengan AI

Metrik untuk apa yang sebenarnya dilakukan bantuan pengkodean AI terhadap output rekayasa: tingkat penerimaan saran, percepatan studi terkontrol, throughput PR, dan retensi kode. Basis buktinya benar-benar kontradiktif — yang menjadikannya studi kasus sempurna dalam perbedaan efikasi-vs-efektivitas yang dibangun untuk ditangani oleh ekonomi kesehatan.

## Mengapa Ini Penting

Dua studi terkontrol yang paling banyak dikutip menunjuk ke arah yang berlawanan:

- **Peng et al. 2023 (RCT GitHub Copilot)**: pengembang menyelesaikan tugas server HTTP dari awal **55,8% lebih cepat** dengan Copilot (1j11m vs 2j41m, n=95).
- **RCT METR 2025**: pengembang open-source berpengalaman yang bekerja pada *repositori matang mereka sendiri* **19% lebih lambat** dengan alat AI awal 2025 (16 pengembang, 246 tugas) — sementara *percaya* mereka 20% lebih cepat.

Keduanya adalah studi yang baik. Kontradiksi itulah temuannya: efikasi tugas-dari-awal tidak berpindah ke efektivitas basis-kode-matang, dan manfaat *yang dirasakan* tidak dapat menggantikan manfaat yang diukur. Kedokteran memiliki nama untuk kedua fenomena ini (uji coba eksplanatori vs pragmatis; masalah plasebo) dan mekanisme untuk menanganinya.

## Perhitungan

```
Tingkat penerimaan  = saran diterima / saran ditampilkan
                   (telemetri GitHub ~30% rata-rata; bervariasi: SQL 45%, Python 35%, JS 28%)
Tingkat retensi     = kode AI yang bertahan hingga merge / kode AI diterima (~88% dilaporkan)
Percepatan          = (t_kontrol − t_AI) / t_kontrol  (dari perbandingan terkontrol SAJA)
Selisih throughput  = Δ PR digabungkan/pengembang/minggu (data lapangan GitHub/Accenture: +8,7%)

Model nilai     = pengembang × waktu yang dihemat × tarif berbobot × faktor pemanfaatan
                  — setiap istilah memerlukan pengukuran lokal; lihat tornado di
                  sensitivity-analysis.md, di mana waktu-yang-dihemat mendominasi semua
                  parameter lain digabungkan
```

## Contoh yang Diselesaikan

Sebuah organisasi dengan 500 pengembang menguji coba asisten dengan kontrol yang tepat (tim yang dicocokkan, 3 bulan, metrik pra-terdaftar):

```
Hasil uji coba: waktu siklus PR −18%; PR digabungkan +6%; CFR tidak berubah;
              waktu yang dihemat laporan-mandiri 45 menit/hari; tingkat tugas terukur ≈ 15 menit/hari

Nilai angka TERUKUR: 500 × 0,25j × 220h × £60 × 0,6 pemanfaatan
                          ≈ £990.000/tahun kapasitas (tidak melepaskan kas)
Biaya: 500 × £39/bln × 12 ≈ £234.000/tahun
Rasio kapasitas bersih ≈ 4:1 — dapat didanai, sepertiga dari klaim laporan-mandiri.
```

Kesenjangan 3× antara yang dirasakan dan yang terukur adalah temuan METR yang beroperasi di dunia nyata; penganggaran berdasarkan laporan mandiri akan melipatgandakan tiga kali garis manfaat.

## Hubungan dengan Rekayasa Perangkat Lunak

Impor ekonomi kesehatan bagi siapa pun yang mengevaluasi perkakas AI: jalankan **uji coba pragmatis** (basis kode Anda, insinyur Anda, tiket nyata — bukan tugas demo vendor); perlakukan **tingkat penerimaan sebagai proksi, bukan hasil** (ini adalah [NPP](../evaluasi-ai-klinis/) dari saran dari sudut pandang pengembang — penerimaan tinggi dengan retensi rendah adalah overdiagnosis); pasangkan setiap peningkatan throughput dengan **pemeriksaan stabilitas** (DORA 2025: AI meningkatkan throughput, merusak stabilitas — intervensi dengan efek samping memerlukan analisis manfaat-bersih, sesuai [metrik DORA](../metrik-dora/)); dan klasifikasikan manfaat secara jujur sebagai kapasitas ([pelepasan kas vs bukan pelepasan kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/)).

## Jebakan

- **Transplantasi studi vendor**: angka RCT dari awal diterapkan pada pekerjaan basis-kode-legasi — kesalahan persis yang diungkap studi METR.
- **Laporan mandiri sebagai pengukuran**: kesenjangan persepsi 20 poin persentase adalah bias terbesar yang diketahui dalam literatur ini.
- **Inflasi aktivitas**: lebih banyak PR dan lebih banyak kode adalah Aktivitas, bukan hasil ([SPACE](../space-dan-devex/)); pasangkan dengan pekerjaan ulang dan CFR.
- **Mengabaikan kurva pembelajaran**: pengukuran minggu-2 menangkap efek kebaruan di kedua arah; ukur pada kondisi stabil ([horizon waktu](../horizon-waktu/)).

## Sumber

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
