# Ekonomi Unit Inferensi (Inference Unit Economics)

Ekonomi unit inferensi ngregani fitur AI miturut komputasi marginale: **biaya saben token**, digulung dadi biaya saben transaksi, saben pangguna, saben episode klinis. Dinamika sing nemtokake: rega LLM wis mudhun kira-kira **siji urutan gedhene saben 1–2 taun** ing kapabilitas konstan — tingkat deflasi tanpa preseden ing penghitungan biaya teknologi kesehatan.

## Kenapa Iki Penting

Rong akibat saka ambruke rega. Sacara komersial, fitur AI sing marginal dina iki bisa untung banget ing 18 sasi — lan pesaing sing diregani ing biaya dina iki bakal didhisiki. Kanggo evaluasi ekonomi, model efektivitas-biaya apa wae kanggo layanan klinis berkemampuan-AI sing mbeku rega inferensi 2024 **sacara material nggedhekake biaya terus-terusan** — analisis butuh skenario penurunan-rega kaya model obat nangani kadaluwarsa paten lan mlebu generik. (Titik acuan saka riset: token output frontier ~$15–75/M ing pertengahan 2026, model tingkat-tengah siji urutan luwih murah, kapabilitas tingkat-GPT-4 mudhun saka ~$20/M ing 2022 dadi ~$0.40/M; Epoch AI ngukur penurunan 9×–900×/taun gumantung tonggak kapabilitas.)

## Matematikane

```
Biaya saben panggilan = token input × tarif input + token output × tarif output
Biaya saben unit      = Σ panggilan saben unit output bisnis (saben episode triase,
                        saben layang sing disusun, saben ringkesan konsultasi)

Kasunyatan campuran   = panggilan dhasar + retry + konteks RAG (abot-input)
                        + panggilan evaluasi/guardrail (asring overhead 20–50%)

Skenario penurunan-rega kanggo model pirang-pirang taun:
  biaya_t = biaya_0 × d^t, uji d ∈ {0.3, 0.5, 0.7}/taun ing analisis sensitivitas
```

## Conto Petungan

Layanan ringkesan-pulang AI: rata-rata ringkesan nganggo 12,000 token input (konteks rekam medis) + 1,200 output, plus pass verifikasi (6,000 mlebu / 300 metu). Ing $3/M mlebu, $15/M metu:

```
Draf:     12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Verifikasi: 6,000 × 3/1M +   300 × 15/1M = $0.018 + $0.0045 ≈ $0.023
Saben ringkesan ≈ $0.077 → saben 100,000 ringkesan/taun ≈ $7,700

Marang ~20 menit-dokter sing dihemat saben ringkesan (≈ £25), inferensi
mung 0.25% saka nilai sing digawe — ekonomi dikuwasani kabeh
KECUALI token: integrasi, evaluasi, tata kelola, adopsi.
```

Kesimpulan kuwi — biaya inferensi arang dadi kendala sing ngiket, ing rega saiki, kanggo tugas klinis nilai-dhuwur — dhewe temuan sing pantes digawa menyang rapat penentuan rega.

## Sambungan karo Rékayasa Piranti Lunak

Iki [ekonomi unit cloud](../ekonomi-unit-cloud/) sing dikhususake kanggo AI, kanthi telung cathetan praktik: **ukuren saben unit bisnis**, dudu saben panggilan API, supaya angka nyambung langsung menyang model [ICER](../rasio-efektivitas-biaya-inkremental/)/[dampak anggaran](../analisis-dampak-anggaran/); **waspadai asimetri input/output** (output biasane ~4× rega input; arsitektur RAG abot-input — pilihan arsitektur iku pilihan rega); lan **rute miturut tingkat tugas** — nyocokake kapabilitas model karo kangelan tugas (model murah kanggo klasifikasi, frontier kanggo sintesis) rutin nyuda biaya campuran 5–10× ing kualitas sing padha, versi piranti lunak saka nggunakake intervensi efektif paling murah ([minimalisasi-biaya](../analisis-minimalisasi-biaya/), kesetaraan dibuktekake).

## Jebakan

- **Model pirang-pirang taun rega-beku** — nggedhekake biaya; nanging uga **model pendapatan deflasi-sing-dianggep** — perang rega dudu kontrak; skenarionen loro-lorone.
- **Ngabaikake overhead evaluasi**: guardrail, hakim, lan retry iku token nyata, asring mayoritas ing setelan sing diatur.
- **Miopi saben-token**: latensi, wates tingkat, lan kendala jendhela-konteks nggawa biaya sing ora ditangkep rega token apa wae.

## Sumber

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
