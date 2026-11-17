# Nilai Nyawa Statistik (VSL)

Nilai nyawa statistik (VSL) — dalam pemakaian Inggris Raya disebut "nilai kematian yang dicegah" (VPF) — adalah jumlah yang bersedia dibayar *populasi* secara kolektif untuk mengurangi risiko satu kematian statistik, diturunkan dari studi pertukaran upah-risiko (berapa upah tambahan yang diminta pekerja untuk pekerjaan yang lebih berbahaya) dan survei preferensi yang dinyatakan. Ia bukan harga nyawa individu yang teridentifikasi; ia adalah konstruksi risiko populasi, dan insinyur perisian yang membangun sistem pengurang risiko — algoritma triase, penugasan ambulans, pemantauan keselamatan — perlu tahu bahwa ia berasal dari tradisi teoretis yang berbeda dari [ambang batas kesediaan membayar](../ambang-batas-kesediaan-membayar/).

## Mengapa ini penting

VSL/VPF adalah alat standar untuk memonetisasi penurunan risiko kematian dalam analisis biaya-manfaat regulasi: keselamatan transportasi, regulasi lingkungan, dan beberapa intervensi kesihatan masyarakat menyusun kasus bisnisnya melaluinya. Green Book HM Treasury menerbitkan angka VPF yang diturunkan dari data pasar tenaga kerja dan survei Inggris Raya, dan Departemen Transportasi memakainya langsung dalam menilai keselamatan jalan. Ini tradisi penilaian yang sungguh berbeda dari metodologi QALY × ambang kesediaan membayar: pendekatan ambang menilai keuntungan kesihatan terhadap apa yang dihasilkan *anggaran kesihatan* saat ini di margin, sedangkan VSL/VPF menilai penurunan risiko terhadap apa yang diungkapkan orang di pasar tenaga kerja atau survei bahwa mereka bersedia membayarnya. Kedua kerangka tidak selalu kompatibel, dan memakai keduanya dalam satu kasus tanpa mengakuinya adalah kesalahan analisis yang umum.

## Matematika

```
Kematian yang dicegah = populasi × penurunan_risiko_per_orang
  (penurunan_risiko_per_orang adalah probabilitas, mis. 0,000001 =
   penurunan satu per sejuta dalam risiko kematian tahunan)

Manfaat_kematian_termonetisasi = kematian_dicegah × nilai_kematian_yang_dicegah
```

## Contoh yang diselesaikan

Sebuah wilayah berpenduduk 800.000 jiwa diuntungkan oleh intervensi penugasan/triase digital keselamatan jalan yang menurunkan risiko kematian tahunan setiap orang sebesar satu per sejuta (0,000001):

```
Kematian yang dicegah = 800,000 × 0.000001 = 0.8
```

Dengan nilai kematian yang dicegah Inggris Raya sebesar £2.180.000 (angka HM Treasury/DfT, harga 2023/24 — Green Book memperbaruinya setiap tahun, periksa sebelum mengutipnya dalam analisis yang berjalan):

```
Manfaat kematian termonetisasi = 0.8 × £2,180,000 = £1,744,000/tahun
```

Sedikit di bawah £1,75 juta per tahun manfaat kematian termonetisasi, dari penurunan risiko yang sebagian besar populasi terdampak tidak akan pernah menyadarinya secara individual.

## Hubungan dengan rekayasa perisian

Tim perisian kritis-keselamatan — firmware perangkat medis, perisian kendaraan otonom, sistem kendali industri — menghadapi masalah penetapan harga yang persis sama ini ketika membangun kasus biaya-manfaat investasi keselamatan: bagaimana menghargai "mencegah satu kegagalan katastrofik" ketika kegagalan itu langka, parah, dan tersebar pada populasi pengguna yang besar? VSL/VPF adalah preseden nyata, terdokumentasi terbuka, berusia puluhan tahun untuk menaruh angka pada penurunan risiko populasi yang langka dan parah — bentuk argumen yang sama dengan menghargai investasi SRE terhadap pemadaman katastrofik yang jarang, hanya dengan hasil kematian alih-alih hasil waktu henti.

## Jebakan

- **Memperlakukan VSL sebagai "harga nyawa yang teridentifikasi"**: bukan begitu. VSL/VPF adalah konstruksi populasi statistik yang diturunkan dari pertukaran penurunan risiko di antara banyak orang, bukan penilaian atas hidup atau mati individu mana pun.
- **Penghitungan ganda dengan perhitungan manfaat moneter bersih berbasis QALY**: memakai angka VSL/VPF dan perhitungan QALY × ambang terpisah dalam kasus yang sama, tanpa merekonsiliasinya, diam-diam menghitung dua kali nilai kematian yang dicegah yang sama. Pilih satu kerangka per kasus.
- **Memindahkan estimasi VSL antarkonteks tanpa penyesuaian**: VSL yang diturunkan dari pasar tenaga kerja atau data upah-risiko usia kerja di satu negara, diterapkan tanpa penyesuaian pada konteks pendapatan lain atau populasi lain (anak-anak, lansia), adalah pertanyaan metodologis yang sungguh diperdebatkan dan sudah lama — belum tuntas.

## Sumber

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — panduan tambahan Value of a Prevented Fatality (harga 2023/24; nilai Green Book diperbarui setiap tahun). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (untuk tradisi VSL Amerika Serikat, sebagai pembanding dengan angka VPF Inggris Raya di atas). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
