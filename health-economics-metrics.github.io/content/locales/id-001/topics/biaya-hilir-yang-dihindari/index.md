# Biaya Hilir yang Dihindari

Biaya hilir yang dihindari (offset biaya) adalah pengeluaran perawatan masa depan yang dicegah oleh tindakan yang lebih awal atau lebih baik, dikurangkan terhadap biaya intervensi itu sendiri. Offset adalah mekanisme yang membuat sebuah intervensi dapat menjadi *dominan* — lebih murah **dan** lebih baik — dan mereka juga garis yang paling sering dihitung ganda dan diklaim berlebihan dalam ekonomi kesehatan.

## Mengapa Ini Penting

Hampir setiap proposisi nilai kesehatan digital mengandung klaim offset: "aplikasi kami mencegah rawat inap," "peringatan kami mencegah perburukan," "platform kami menghindari tes duplikat." Ketika offset nyata, mereka mengubah ekonomi (lihat contoh [ICER](../rasio-efektivitas-biaya-inkremental/), di mana offset £600rb membuat kasusnya). Pembayar tahu ini — sehingga klaim offset menarik pengawasan tersulit dalam penilaian apa pun. Aturan kredibilitas di bawah ini adalah apa yang memisahkan model yang dapat didanai dari pemasaran.

## Perhitungan

```
Biaya bersih = biaya intervensi − Σ offset

Offset yang valid harus:
  Teratribusi — terkait secara kausal dengan intervensi (bukti pembanding)
  Marginal     — uang benar-benar berhenti dihabiskan, pada biaya marginal bukan
                 rata-rata (lihat marginal-vs-average-cost.md)
  Berbobot-    — dibobotkan oleh P(peristiwa hilir akan terjadi)
  probabilitas
  Didiskon     — biaya masa depan yang dihindari pada nilai sekarang
  Unik         — dihitung sekali, dalam satu garis manfaat
```

## Contoh yang Diselesaikan

"Klaim risiko-migrasi ini, dilakukan dengan benar": sebuah aplikasi pemantauan luka untuk 5.000 pasien pasca-bedah mengklaim menghindari readmisi terkait infeksi.

```
Readmisi dasar untuk infeksi: 4,0%; dengan aplikasi (RCT): 3,1%
Peristiwa yang dihindari teratribusi = 5.000 × 0,009 = 45/tahun
Biaya per episode readmisi (marginal, trust ini): £3.200
Offset = 45 × 3.200 = £144.000/tahun
Biaya aplikasi = 5.000 × £20 = £100.000/tahun
Biaya bersih = −£44.000 → benar-benar menghemat biaya, dengan:
  atribusi dari RCT ✓  penentuan biaya marginal ✓  probabilitas dari data uji coba ✓
```

Klaim yang sama dibangun di atas "readmisi berbiaya £5.800 rata-rata, kami akan mencegah banyak" gagal keempat tes dan pantas mendapatkan penolakan yang diterimanya.

## Hubungan dengan Rekayasa Perangkat Lunak

"Migrasi ini menghindari penulisan-ulang masa depan" adalah klaim offset, dan aturan ekonomi kesehatan membuatnya jujur:

- **Biaya kontrafaktual**: berapa sebenarnya biaya penulisan-ulang, dibuktikan bagaimana?
- **Probabilitas**: seberapa mungkin masa depan itu? (Bukan 100% — produk dibunuh, prioritas berubah.)
- **Diskon**: penulisan-ulang yang dihindari di tahun 4 pada diskon 3,5–10% bernilai jauh lebih rendah dari nilai nominal.
- **Keunikan**: jangan juga klaim penulisan-ulang yang sama dihindari di garis utang-teknis dan garis retensi.

`Nilai offset = P(peristiwa masa depan) × biaya kontrafaktual × faktor diskon` — tulis garis itu dalam proposal dan saksikan estimasi menjadi dapat diperdebatkan, yang adalah intinya.

## Jebakan

- **Penghitungan ganda** — penerimaan yang sama dihindari diklaim sebagai offset, hari-tempat-tidur, dan QALY dengan biaya terlampir.
- **Offset biaya-rata-rata** untuk peristiwa yang biaya tetapnya berlanjut apa pun yang terjadi.
- **Probabilitas 100% diam-diam** pada peristiwa hilir yang hanya mungkin.
- **Offset ke anggaran lain** disajikan sebagai penghematan kepada pembayar yang diminta membayar — lihat [perspektif analisis](../perspektif-analisis/).

## Sumber

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
