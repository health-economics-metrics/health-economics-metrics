# Ekonomi Unit Inferensi

Ekonomi unit inferensi menetapkan harga fitur AI berdasarkan komputasi marginalnya: **biaya per token**, digulung menjadi biaya per transaksi, per pengguna, per episode klinis. Dinamika yang mendefinisikan: harga LLM telah turun kira-kira **satu orde besaran setiap 1–2 tahun** pada kapabilitas konstan — tingkat deflasi tanpa preseden dalam penentuan-biaya teknologi-kesehatan.

## Mengapa Ini Penting

Dua konsekuensi mengikuti dari keruntuhan harga. Secara komersial, fitur AI yang marginal hari ini dapat menjadi sepele-menguntungkan dalam 18 bulan — dan pesaing yang ditetapkan-harga pada biaya hari-ini akan dikalahkan-harga. Untuk penilaian ekonomi, model efektivitas-biaya apa pun untuk layanan klinis berkemampuan-AI yang membekukan harga-inferensi 2024 **secara material melebih-lebihkan biaya berkelanjutan** — analisis memerlukan skenario penurunan-harga sebagaimana model obat menangani kedaluwarsa paten dan masuknya generik. (Titik referensi dari penelitian: token-output ujung-tombak ~$15–75/M pada pertengahan-2026, model tingkat-menengah satu orde lebih murah, kapabilitas tingkat-GPT-4 turun dari ~$20/M pada 2022 menjadi ~$0,40/M; Epoch AI mengukur penurunan 9×–900×/tahun tergantung tonggak-kapabilitasnya.)

## Perhitungan

```
Biaya per panggilan  = token input × tarif input + token output × tarif output
Biaya per unit       = Σ panggilan per unit output-bisnis (per episode
                    triase, per surat yang dirancang, per ringkasan konsultasi)

Realitas campuran     = panggilan dasar + percobaan-ulang + konteks RAG (input-berat)
                    + panggilan evaluasi/pagar-pengaman (sering overhead 20–50%)

Skenario penurunan-harga untuk model multi-tahun:
  biaya_t = biaya_0 × d^t, uji d ∈ {0,3, 0,5, 0,7}/tahun dalam analisis sensitivitas
```

## Contoh yang Diselesaikan

Layanan ringkasan-pemulangan AI: ringkasan rata-rata menggunakan 12.000 token input (konteks catatan) + 1.200 output, ditambah satu lintasan verifikasi (6.000 input / 300 output). Pada $3/M input, $15/M output:

```
Draf:      12.000 × 3/1M + 1.200 × 15/1M  = $0,036 + $0,018 = $0,054
Verifikasi: 6.000 × 3/1M +   300 × 15/1M  = $0,018 + $0,0045 ≈ $0,023
Per ringkasan ≈ $0,077 → per 100.000 ringkasan/tahun ≈ $7.700

Terhadap ~20 menit-klinisi yang dihemat per ringkasan (≈ £25), inferensi
adalah 0,25% dari nilai yang diciptakan — ekonominya didominasi oleh segalanya
KECUALI token: integrasi, evaluasi, tata kelola, adopsi.
```

Kesimpulan itu — biaya inferensi jarang menjadi kendala mengikat, pada harga saat ini, untuk tugas klinis bernilai-tinggi — adalah temuan itu sendiri yang layak dibawa ke rapat penetapan-harga.

## Hubungan dengan Rekayasa Perangkat Lunak

Ini adalah [ekonomi unit cloud](../ekonomi-unit-cloud/) yang dikhususkan untuk AI, dengan tiga catatan praktik: **ukur per unit-bisnis**, bukan per panggilan API, sehingga angkanya masuk langsung ke model [ICER](../rasio-efektivitas-biaya-inkremental/)/[dampak anggaran](../analisis-dampak-anggaran/); **perhatikan asimetri input/output** (output biasanya ~4× harga input; arsitektur RAG bersifat input-berat — pilihan arsitektur adalah pilihan penetapan-harga); dan **rutekan berdasarkan tingkat-tugas** — mencocokkan kapabilitas model dengan kesulitan tugas (model murah untuk klasifikasi, ujung-tombak untuk sintesis) secara rutin memotong biaya campuran 5–10× pada kualitas yang sama, versi perangkat-lunak dari menggunakan intervensi efektif termurah ([minimalisasi-biaya](../analisis-minimalisasi-biaya/), ekuivalensi dibuktikan).

## Jebakan

- **Model multi-tahun harga-beku** — melebih-lebihkan biaya; tetapi juga **model pendapatan deflasi-diasumsikan** — perang harga bukan kontrak; buat skenario untuk keduanya.
- **Mengabaikan overhead evaluasi**: pagar-pengaman, hakim, dan percobaan-ulang adalah token nyata, sering mayoritas dalam pengaturan yang diregulasi.
- **Miopia per-token**: latensi, batas-tarif, dan kendala jendela-konteks membawa biaya yang tidak ditangkap harga token mana pun.

## Sumber

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
