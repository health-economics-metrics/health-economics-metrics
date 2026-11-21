# Metrik Kualitas AI (AI Quality Metrics)

Metrik kanggo bener-ora output sing digawe AI: akurasi marang bebener dasar, **kasetyan/groundedness** (apa saben klaim didhukung konteks sing diwenehake?), lan **tingkat halusinasi** (pira bagian output sing ngemot isi sing ora didhukung utawa palsu?). Ing setelan kesehatan iki dudu kaluwihan kualitas — iku tingkat cilaka.

## Kenapa Iki Penting

Tolok ukur domain medis wis ngukur tingkat halusinasi **ing ndhuwur 60% kanggo LLM tanpa grounding** ing tugas medis (sawetara model open >80%), dene grounding, retrieval, lan mode nalar nyuda tingkat kanthi drastis (contone, mode thinking GPT-5 nyuda halusinasi HealthBench 3.6% → 1.6% ing sawijining tolok ukur). Dosis sing dihalusinasi utawa kutipan sing dikarang ing alur kerja klinis iku **kedadean informasi palsu kanthi dalan cilaka** — kuwi kalebu ing lengen cilaka saka model ekonomi apa wae, diregani kaya positif palsu ing [ekonomi skrining](../ekonomi-skrining/): saben siji ngundang biaya hilir (tumindak adhedhasar informasi salah, tenaga kerja verifikasi, paparan medico-legal, kapercayan sing ngerosi).

## Matematikane

```
Tingkat halusinasi = output sing ngemot isi ora didhukung/palsu / total output
  intrinsik:  bertentangan karo konteks sing diwenehake
  ekstrinsik: karangan sing ora bisa diverifikasi ngluwihi konteks

Kasetyan (gaya RAGAS) = klaim sing didhukung ing jawaban / total klaim ing jawaban
Presisi/recall konteks = kualitas retrieval sing nyuplai generator

Pembobotan ekonomi — ora kabeh halusinasi biayane padha:
  biaya cilaka sing dikarepake = Σ ing jinis kesalahan (tingkat × P(ora kadeteksi) ×
                       P(ditindakake) × biaya saben kesalahan sing ditindakake)
  Lapisan review manungsa nyetel P(ora kadeteksi) — lan biayane
  uga kalebu ing model (menit reviewer × volume).
```

## Conto Petungan

Asisten kode klinis AI ngolah 200,000 episode/taun; audit nuduhake 2% output ngemot kesalahan koding material; koder manungsa nyekel 85% saka kuwi:

```
Kesalahan sing tekan pangiriman = 200,000 × 0.02 × 0.15 = 600/taun
Biaya saben kesalahan sing ora kecekel (rata-rata salah-tagih + paparan audit) ≈ £250
Biaya kesalahan sing dikarepake = 600 × 250 = £150,000/taun
Biaya review (2 mnt × 200k × £0.50/mnt)  = £200,000/taun

Kasus perbaikan: grounding retrieval nyuda tingkat kesalahan dadi 0.8%
→ kesalahan sing ora kecekel 240, biaya kesalahan £60,000 (−£90k/taun); wektu
  review uga bisa mudhun (sampling tinimbang review lengkap) — investasi
  kualitas mbayar sadurunge klaim kacepetan apa wae.
```

## Sambungan karo Rékayasa Piranti Lunak

Anggep kualitas model kaya ekonomi cakupan tes, kanthi disiplin kelas kesehatan: **set evaluasi iku uji klinismu** — didaftarake sadurunge, makili campuran kasusmu, disegerake marang drift; **grounding ngungkuli skala kanggo tugas faktual** (retrieval + prompt sing mbutuhake kutipan biasane pangurangan halusinasi paling murah — bandingake [ekonomi unit inferensi](../ekonomi-unit-inferensi/) kanggo overhead token); lan **publikasi titik operasi**: kaya [sensitivitas/spesifisitas](../evaluasi-ai-klinis/), "97% setya" ora ana artine tanpa distribusi tugas lan ambang deteksi. Matematika lapisan review ing ndhuwur iku aritmetika [NNT/NNH](../jumlah-sing-perlu-diobati/) sing padha karo gerbang skrining apa wae.

## Jebakan

- **Transplantasi tolok ukur-menyang-produksi**: tingkat halusinasi beda banget miturut tugas; campuran kasusmu dhewe iku siji-sijine tolok ukur sing diitung.
- **Review manungsa sing ora diregani**: "dokter mriksa kabeh" nyuda manfaat setengah lan kudu muncul ing garis biaya — lan kewaspadaan sudo (automation complacency), mula P(ora kadeteksi) munggah karo kapercayan.
- **Ngoptimalake kualitas rata-rata nalika risiko buntut nggawa cilaka**: siji cathetan alergi sing dikarang luwih abot tinimbang sewu frasa sing kikuk; bobotana kesalahan miturut akibat, miturut rumus cilaka-sing-dikarepake.

## Sumber

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
