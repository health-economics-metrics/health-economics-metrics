# Ekonomi Unit Inferens

Ekonomi unit inferens menghargai ciri AI mengikut pengiraan marginalnya: **kos bagi setiap token**, digulung kepada kos setiap transaksi, setiap pengguna, setiap episod klinikal. Dinamik penentunya: harga LLM telah jatuh kira-kira **satu magnitud setiap 1–2 tahun** pada keupayaan malar — kadar deflasi tanpa duluan dalam pengkosan teknologi kesihatan.

## Mengapa ia penting

Dua akibat berikut daripada keruntuhan harga. Secara komersial, ciri AI yang marginal hari ini mungkin menguntungkan secara remeh dalam 18 bulan — dan pesaing yang dihargai atas kos hari ini akan dipotong harga. Bagi penilaian ekonomi, mana-mana model kos-keberkesanan untuk perkhidmatan klinikal berkuasa AI yang membekukan harga inferens 2024 **melebih-lebihkan kos berterusan secara material** — analisis memerlukan senario penurunan harga sebagaimana model ubat mengendalikan tamat paten dan kemasukan generik. (Titik rujukan daripada penyelidikan: token output sempadan ~$15–75/J pada pertengahan 2026, model peringkat tengah satu magnitud lebih murah, keupayaan peringkat-GPT-4 turun daripada ~$20/J pada 2022 kepada ~$0.40/J; Epoch AI mengukur penurunan 9×–900×/tahun bergantung pada pencapaian keupayaan.)

## Matematiknya

```
Kos setiap panggilan = token input × kadar input + token output × kadar output
Kos setiap unit      = Σ panggilan bagi setiap unit output perniagaan (setiap episod triaj,
                       setiap surat digubal, setiap ringkasan konsultasi)

Realiti campuran     = panggilan asas + cuba semula + konteks RAG (berat-input)
                       + panggilan penilaian/pagar (sering overhed 20–50%)

Senario penurunan harga untuk model berbilang tahun:
  kos_t = kos_0 × d^t, uji d ∈ {0.3, 0.5, 0.7}/tahun dalam analisis kepekaan
```

## Contoh penyelesaian

Perkhidmatan ringkasan discaj AI: purata ringkasan menggunakan 12,000 token input (konteks rekod) + 1,200 output, serta laluan pengesahan (6,000 masuk / 300 keluar). Pada $3/J masuk, $15/J keluar:

```
Draf:     12,000 × 3/1J + 1,200 × 15/1J  = $0.036 + $0.018 = $0.054
Sahkan:    6,000 × 3/1J +   300 × 15/1J  = $0.018 + $0.0045 ≈ $0.023
Setiap ringkasan ≈ $0.077 → bagi 100,000 ringkasan/tahun ≈ $7,700

Berbanding ~20 minit klinisian dijimatkan bagi setiap ringkasan (≈ £25), inferens ialah
0.25% nilai yang dicipta — ekonomi dikuasai oleh segala-galanya
KECUALI token: integrasi, penilaian, tadbir urus, penerimaan.
```

Kesimpulan itu — kos inferens jarang kekangan mengikat, pada harga semasa, bagi tugas klinikal bernilai tinggi — ialah dapatan yang patut dibawa ke mesyuarat penetapan harga.

## Kaitan dengan kejuruteraan perisian

Ini [ekonomi unit awan](../ekonomi-unit-awan/) yang dikhususkan untuk AI, dengan tiga nota amalan: **meter bagi setiap unit perniagaan**, bukan setiap panggilan API, supaya nombor itu terus masuk ke model [ICER](../nisbah-kos-keberkesanan-inkremental/)/[impak bajet](../analisis-impak-bajet/); **perhatikan ketaksimetrian input/output** (output lazimnya ~4× harga input; seni bina RAG berat-input — pilihan seni bina ialah pilihan harga); dan **halakan mengikut peringkat tugas** — memadankan keupayaan model dengan kesukaran tugas (model murah untuk klasifikasi, sempadan untuk sintesis) lazimnya memotong kos campuran 5–10× pada kualiti sama, versi perisian menggunakan intervensi berkesan termurah ([pengurangan kos](../analisis-pengurangan-kos/), kesetaraan dibuktikan).

## Perangkap

- **Model berbilang tahun harga-beku** — melebih-lebihkan kos; tetapi juga **model hasil deflasi-diandaikan** — perang harga bukan kontrak; senariokan kedua-duanya.
- **Mengabaikan overhed penilaian**: pagar, hakim dan cuba semula ialah token sebenar, selalunya majoriti dalam tetapan terkawal selia.
- **Rabun per-token**: kependaman, had kadar dan kekangan tetingkap konteks membawa kos yang tidak ditangkap oleh harga token.

## Sumber

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
