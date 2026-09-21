# Pengembalian Investasi (ROI)

ROI adalah rasio keuntungan-bersih terhadap uang yang diinvestasikan. Ini adalah metrik yang sudah dibagi rekayasa dan keuangan — ekonomi kesehatan menambahkan disiplin yang membuat klaim ROI bertahan dari pengawasan: perspektif yang dinyatakan, pembanding, horizon, dan kategori manfaat.

## Mengapa Ini Penting

ROI adalah bahasa-bersama pemegang-anggaran, dan kesehatan-masyarakat juga menggunakannya: tinjauan bersejarah Masters et al. menemukan **ROI median 14,3:1** untuk intervensi kesehatan-masyarakat (setiap £1 mengembalikan ~£14 ke ekonomi dan sistem-kesehatan yang lebih luas) — angka yang secara luas digunakan untuk beragumen belanja-pencegahan. Tetapi 14:1 itu adalah angka *masyarakat, horizon-panjang*; ROI CFO rumah-sakit bersifat perspektif-pembayar dan 1–3 tahun. Sebagian besar perselisihan ROI sebenarnya adalah perselisihan perspektif-yang-tidak-dinyatakan.

## Perhitungan

```
ROI = (Manfaat − Biaya) / Biaya      (sering × 100%)

Periode pengembalian = Biaya / manfaat-bersih tahunan
```

Klaim ROI kurang-tersepsifikasi tanpa empat pernyataan:

1. **Perspektif** — manfaat siapa yang dihitung? (lihat [perspektif analisis](../perspektif-analisis/))
2. **Pembanding** — versus alternatif apa? (lihat [biaya peluang](../biaya-peluang/))
3. **Horizon** — selama berapa lama, dan [didiskon](../diskonto-dan-preferensi-waktu/)?
4. **Kelas manfaat** — pelepas-kas, kapasitas, atau kualitatif? (lihat [pelepasan-kas vs bukan-pelepasan-kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/))

## Contoh yang Diselesaikan

Sistem penjadwalan-elektronik, biaya £500.000 selama 3 tahun.

```
Pelepas-kas:  pengurangan shift-agensi           £450.000
Kapasitas:    waktu-administrasi manajer-bangsal yang dibebaskan £600.000 (dinilai, tidak dibank)
Kualitatif:   kepuasan staf, keselamatan          tidak termoneterisasi

ROI finansial ketat = (450.000 − 500.000)/500.000 = −10%
ROI ekonomi          = (1.050.000 − 500.000)/500.000 = +110%
```

Kedua angka itu benar. Seorang vendor yang mengutip "+110% ROI" kepada CFO yang hanya dapat mem-bank £450rb akan kehilangan kepercayaan; menyajikan keduanya, berlabel, memenangkannya. Pemisahan yang sama melindungi seorang juara-internal ketika keuangan mengaudit manfaat dua tahun kemudian.

## Hubungan dengan Rekayasa Perangkat Lunak

Setiap proposal perkakas memiliki slide ROI; hampir tidak ada yang menyatakan empat parameter. Kegagalan paling umum adalah pencampuran-kategori: keuntungan kapasitas (menit-pengembang) disajikan sebagai pengembalian finansial. Strukturkan ROI AI/platform seperti contoh-diselesaikan di atas — garis kas, garis kapasitas, garis kualitatif — dan tambahkan [analisis sensitivitas](../analisis-sensitivitas/) pada angka-angka lunak. Untuk pemeriksaan-realitas P&L khusus pada ROI AI, lihat [pengembalian investasi AI](../pengembalian-investasi-ai/).

## Jebakan

- **Pencucian perspektif**: manfaat masyarakat selama satu dekade dikutip kepada pemegang-anggaran dengan horizon 12-bulan.
- **Bruto alih-alih bersih**: "mengembalikan £3 juta" pada belanja £2 juta adalah ROI 50%, bukan 300%.
- **Maksimalisasi rasio**: penyebut kecil menghasilkan ROI spektakuler pada investasi trivial; rangking portofolio berdasarkan NPV atau [manfaat moneter bersih](../manfaat-moneter-bersih/), gunakan ROI sebagai penyaring.
- **Tidak ada audit manfaat**: ROI yang diperkirakan tanpa pelacakan [realisasi manfaat](../realisasi-manfaat/) adalah janji, bukan hasil.

## Sumber

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
