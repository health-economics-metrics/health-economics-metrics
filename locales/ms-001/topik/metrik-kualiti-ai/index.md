# Metrik Kualiti AI

Metrik bagi ketepatan output yang dijana AI: ketepatan terhadap kebenaran asas, **kesetiaan/keterlandasan** (adakah setiap dakwaan disokong oleh konteks yang diberikan?), dan **kadar halusinasi** (apakah pecahan output yang mengandungi kandungan tidak disokong atau palsu?). Dalam persekitaran kesihatan, ini bukan perkara kualiti yang remeh — ia ialah kadar bahaya.

## Mengapa ia penting

Penanda aras domain perubatan telah mengukur kadar halusinasi **melebihi 60% bagi LLM tanpa landasan** pada tugas perubatan (sesetengah model terbuka >80%), manakala landasan, perolehan semula dan mod penaakulan memotong kadar dengan ketara (cth., mod berfikir GPT-5 mengurangkan halusinasi HealthBench daripada 3.6% kepada 1.6% pada satu penanda aras). Dos yang berhalusinasi atau petikan rekaan dalam aliran kerja klinikal ialah **peristiwa maklumat palsu dengan laluan bahaya** — ia tergolong dalam lengan bahaya mana-mana model ekonomi, diberi harga seperti positif palsu [ekonomi saringan](../ekonomi-saringan/): setiap satunya mencetuskan kos hiliran (bertindak atas maklumat salah, tenaga kerja pengesahan, pendedahan perubatan-undang-undang, kepercayaan yang terhakis).

## Matematiknya

```
Kadar halusinasi = output mengandungi kandungan tidak disokong/palsu / jumlah output
  intrinsik:  bercanggah dengan konteks yang diberikan
  ekstrinsik: rekaan tidak boleh disahkan di luar konteks

Kesetiaan (gaya RAGAS) = dakwaan disokong dalam jawapan / jumlah dakwaan dalam jawapan
Ketepatan/ingatan konteks   = kualiti perolehan semula yang menyuap penjana

Pemberatan ekonomi — tidak semua halusinasi berkos sama:
  kos bahaya jangkaan = Σ atas jenis ralat (kadar × P(tidak dikesan) ×
                       P(diambil tindakan) × kos bagi setiap ralat yang diambil tindakan)
  Lapisan semakan manusia menetapkan P(tidak dikesan) — dan kosnya
  juga tergolong dalam model (minit penyemak × volum).
```

## Contoh penyelesaian

Pembantu pengekodan klinikal AI memproses 200,000 episod/tahun; audit menunjukkan 2% output mengandungi ralat pengekodan material; pengekod manusia mengesan 85% daripadanya:

```
Ralat sampai ke penghantaran = 200,000 × 0.02 × 0.15 = 600/tahun
Kos setiap ralat tidak dikesan (purata silap bil + pendedahan audit) ≈ £250
Kos ralat jangkaan         = 600 × 250 = £150,000/tahun
Kos semakan (2 min × 200k × £0.50/min)  = £200,000/tahun

Kes penambahbaikan: landasan perolehan semula memotong kadar ralat kepada 0.8%
→ ralat tidak dikesan 240, kos ralat £60,000 (−£90k/tahun); masa semakan
  juga boleh jatuh (pensampelan menggantikan semakan penuh) — pelaburan
  kualiti membayar balik sebelum sebarang tuntutan kelajuan.
```

## Kaitan dengan kejuruteraan perisian

Anggap kualiti model seperti ekonomi liputan ujian, dengan disiplin gred kesihatan: **set penilaian ialah percubaan klinikal anda** — didaftarkan awal, mewakili campuran kes *anda*, disegarkan terhadap hanyutan; **landasan mengalahkan skala untuk tugas fakta** (perolehan semula + gesaan yang mewajibkan petikan biasanya pengurangan halusinasi termurah yang ada — bandingkan [ekonomi unit inferens](../ekonomi-unit-inferens/) untuk overhed tokennya); dan **terbitkan titik operasi**: seperti [kepekaan/kekhususan](../penilaian-ai-klinikal/), "97% setia" tidak bermakna tanpa taburan tugas dan ambang pengesanan. Matematik lapisan semakan di atas ialah aritmetik [NNT/NNH](../bilangan-perlu-dirawat/) yang sama seperti mana-mana pintu saringan.

## Perangkap

- **Pemindahan penanda aras ke pengeluaran**: kadar halusinasi sangat bergantung pada tugas; campuran kes anda ialah satu-satunya penanda aras yang diambil kira.
- **Semakan manusia tanpa kos**: "doktor menyemak segala-galanya" separuhkan manfaat dan mesti muncul dalam baris kos — dan kewaspadaan merosot (rasa puas hati automasi), jadi P(tidak dikesan) meningkat dengan kepercayaan.
- **Mengoptimumkan kualiti purata sementara risiko ekor menanggung bahaya**: satu nota alergi rekaan lebih berat daripada seribu frasa janggal; beratkan ralat mengikut akibat, menurut formula bahaya jangkaan.

## Sumber

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
