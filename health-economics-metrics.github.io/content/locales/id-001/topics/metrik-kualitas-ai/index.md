# Metrik Kualitas AI

Metrik untuk kebenaran output yang dihasilkan AI: akurasi terhadap kebenaran dasar, **kesetiaan/keterlandasan** (apakah setiap klaim didukung oleh konteks yang diberikan?), dan **tingkat halusinasi** (berapa fraksi output yang mengandung konten yang tidak didukung atau salah?). Dalam pengaturan kesehatan, ini bukan kehalusan kualitas — ini adalah tingkat bahaya.

## Mengapa Ini Penting

Tolok ukur domain medis telah mengukur tingkat halusinasi **di atas 60% untuk LLM tanpa landasan** pada tugas medis (beberapa model terbuka >80%), sementara pelandasan, pengambilan, dan mode penalaran memotong tingkat secara drastis (misalnya, mode pemikiran GPT-5 mengurangi halusinasi HealthBench 3,6% → 1,6% pada satu tolok ukur). Dosis yang dihalusinasikan atau kutipan yang dipalsukan dalam alur kerja klinis adalah **peristiwa informasi-palsu dengan jalur bahaya** — ini termasuk dalam lengan bahaya dari model ekonomi apa pun, dihargai seperti positif palsu dari [ekonomi skrining](../ekonomi-skrining/): setiap satu memicu biaya hilir (bertindak berdasarkan informasi yang salah, tenaga kerja verifikasi, eksposur medis-hukum, kepercayaan yang terkikis).

## Perhitungan

```
Tingkat halusinasi = output yang mengandung konten tidak didukung/palsu / total output
  intrinsik:  bertentangan dengan konteks yang diberikan
  ekstrinsik: fabrikasi yang tidak dapat diverifikasi di luar konteks

Kesetiaan (gaya RAGAS) = klaim yang didukung dalam jawaban / total klaim dalam jawaban
Presisi/recall konteks   = kualitas pengambilan yang memberi makan generator

Pembobotan ekonomi — tidak semua halusinasi berbiaya sama:
  biaya bahaya yang diharapkan = Σ atas jenis kesalahan (tingkat × P(tidak terdeteksi) ×
                       P(ditindaklanjuti) × biaya per kesalahan yang ditindaklanjuti)
  Lapisan tinjauan manusia menetapkan P(tidak terdeteksi) — dan biayanya juga
  termasuk dalam model (menit peninjau × volume).
```

## Contoh yang Diselesaikan

Asisten pengkodean klinis AI memproses 200.000 episode/tahun; audit menunjukkan 2% output mengandung kesalahan pengkodean material; pengkode manusia menangkap 85% dari itu:

```
Kesalahan yang mencapai pengiriman = 200.000 × 0,02 × 0,15 = 600/tahun
Biaya per kesalahan yang tidak tertangkap (rata-rata penagihan-salah + eksposur audit) ≈ £250
Biaya kesalahan yang diharapkan         = 600 × 250 = £150.000/tahun
Biaya tinjauan (2 menit × 200rb × £0,50/menit)  = £200.000/tahun

Kasus perbaikan: pelandasan pengambilan memotong tingkat kesalahan menjadi 0,8%
→ kesalahan tidak tertangkap 240, biaya kesalahan £60.000 (−£90rb/thn); waktu
  tinjauan juga dapat turun (pengambilan sampel alih-alih tinjauan penuh) — investasi
  kualitas terbayar sebelum klaim kecepatan apa pun.
```

## Hubungan dengan Rekayasa Perangkat Lunak

Perlakukan kualitas model seperti ekonomi cakupan pengujian, dengan disiplin tingkat kesehatan: **set evaluasi adalah uji klinis Anda** — pra-terdaftar, representatif dari campuran kasus *Anda*, disegarkan terhadap pergeseran; **pelandasan mengalahkan skala untuk tugas faktual** (pengambilan + prompting yang mewajibkan kutipan biasanya adalah pengurangan halusinasi termurah yang tersedia — bdk. [ekonomi unit inferensi](../ekonomi-unit-inferensi/) untuk overhead tokennya); dan **publikasikan titik operasi**: seperti [sensitivitas/spesifisitas](../evaluasi-ai-klinis/), "97% setia" tidak berarti apa-apa tanpa distribusi tugas dan ambang deteksi. Perhitungan lapisan tinjauan di atas adalah aritmatika [NNT/NNH](../jumlah-yang-perlu-dirawat/) yang sama seperti gerbang skrining mana pun.

## Jebakan

- **Transplantasi tolok-ukur-ke-produksi**: tingkat halusinasi sangat bergantung pada tugas; campuran kasus Anda adalah satu-satunya tolok ukur yang berarti.
- **Tinjauan manusia tanpa biaya**: "seorang klinisi memeriksa semuanya" memangkas manfaat setengah dan harus muncul di garis biaya — dan kewaspadaan menurun (kepuasan otomatisasi), jadi P(tidak terdeteksi) meningkat seiring kepercayaan.
- **Mengoptimalkan kualitas rata-rata sementara risiko ekor membawa bahaya**: satu catatan alergi yang dipalsukan lebih berat daripada seribu frasa canggung; bobot kesalahan berdasarkan konsekuensi, sesuai rumus bahaya-yang-diharapkan.

## Sumber

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
