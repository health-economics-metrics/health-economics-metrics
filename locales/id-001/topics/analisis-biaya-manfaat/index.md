# Analisis Biaya-Manfaat (CBA)

CBA menilai baik biaya *maupun* hasil dalam uang. Ini adalah satu-satunya jenis analisis yang dapat menjawab "apakah ini benar-benar layak dilakukan?" — bukan hanya "pilihan mana yang terbaik?" — karena manfaat yang dimoneterkan dapat dibandingkan langsung dengan biaya.

## Mengapa Ini Penting

CBA adalah standar **Green Book** HM Treasury Inggris untuk semua penilaian pengeluaran publik, termasuk kesehatan ketika hasil dapat dimoneterkan. Di mana [CEA](../analisis-efektivitas-biaya/)/[CUA](../analisis-biaya-utilitas/) berhenti pada "biaya per unit kesehatan", CBA menghargai kesehatan itu sendiri (QALY × nilai ambang) dan segalanya yang lain — waktu, perjalanan, karbon — dan melaporkan satu angka bersih. Setiap kasus bisnis digital NHS lengkap mengandung kasus ekonomi berbentuk CBA.

## Perhitungan

```
NPV (nilai sosial bersih sekarang) = Σ_t [ (Manfaat_t − Biaya_t) / (1 + r)^t ]
BCR (rasio manfaat-biaya)          = PV(manfaat) / PV(biaya)

Adopsi jika NPV > 0 (setara BCR > 1); rangking berdasarkan NPV, bukan BCR.
r = 3,5% (tingkat preferensi waktu sosial Green Book)
```

Efek kesehatan dapat masuk termoneterisasi sebagai QALY × λ (lihat [ambang batas kesediaan-membayar](../ambang-batas-kesediaan-membayar/)). Green Book juga mewajibkan **penyesuaian bias-optimisme** — menaikkan perkiraan biaya dan memangkas manfaat berdasarkan persentase berbasis bukti, karena penilaian secara sistematis terlalu cerah.

## Contoh yang Diselesaikan

Sistem rujukan-elektronik, horizon 5 tahun, diskon 3,5%:

```
Biaya:    pembangunan £1,2 juta (tahun 0), operasi £300rb/thn (tahun 1–5)
Manfaat: penghematan administrasi £250rb/thn, diagnostik duplikat dihindari £280rb/thn,
          waktu pasien dihemat 40.000 jam/thn × £15 = £600rb/thn → £1.130rb/thn

PV biaya    = 1.200rb + 300rb × 4,515 (faktor anuitas) = £2.555rb
PV manfaat  = 1.130rb × 4,515                            = £5.102rb

NPV = 5.102 − 2.555 = +£2.547rb     BCR = 2,0
```

Terapkan bias optimisme Green Book (katakanlah +40% pada biaya pembangunan, −20% pada manfaat): PV biaya ≈ £3.035rb, PV manfaat ≈ £4.082rb, NPV ≈ **+£1.047rb** — masih positif, yang merupakan inti dari penyesuaian: kasus harus bertahan dari optimismenya sendiri.

## Hubungan dengan Rekayasa Perangkat Lunak

Kasus bisnis rekayasa adalah CBA informal. Peningkatan Green Book yang layak dicuri:

- **Bias optimisme sebagai kenaikan standar** — insinyur meremehkan biaya migrasi sebagaimana andalnya kementerian meremehkan biaya infrastruktur; terapkan kenaikan yang dinyatakan alih-alih berpura-pura kali ini berbeda.
- **Moneterisasi manfaat dominan secara jujur atau tidak sama sekali** — waktu pasien/pengguna dimoneterisasi pada tarif yang dapat dipertahankan; "nilai merek" tidak.
- **NPV merangking, BCR tidak**: proyek kecil dengan BCR 5 bisa penting kurang dari yang besar dengan BCR 1,6.

## Jebakan

- **Memoneterisasi yang-tidak-dapat-dimoneterisasi** untuk menggembungkan manfaat (moral, "penyelarasan strategis") — jaga ini tetap kualitatif, sesuai [analisis biaya-konsekuensi](../analisis-biaya-konsekuensi/).
- **Menghitung transfer sebagai manfaat**: uang yang berpindah antar badan publik menjadi nol pada [perspektif](../perspektif-analisis/) masyarakat.
- **Tidak ada kontrafaktual**: manfaat diukur terhadap pilihan lakukan-minimum, bukan terhadap nol.

## Sumber

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
