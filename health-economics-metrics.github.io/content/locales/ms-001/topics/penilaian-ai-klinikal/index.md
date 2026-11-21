# Penilaian AI Klinikal

Statistik teras untuk menilai AI klinikal atau model diagnostik: kepekaan, kekhususan, AUROC, nilai ramalan dan bilangan perlu disaring. Pengajaran ekonomi utama: **AUROC yang hebat tidak menjadikan penggunaan kos-efektif** — nilai bergantung pada titik operasi, prevalens dan apa yang berlaku di hiliran setiap positif.

## Mengapa ia penting

Pengawal selia (FDA, MHRA) membenarkan AI klinikal pada **titik operasi terkunci** — pasangan kepekaan/kekhususan tertentu (cth., sistem retinopati diabetik autonomi pertama yang diluluskan FDA: kepekaan 87.2%, kekhususan 90.7% dalam percubaan utamanya). Ahli ekonomi kesihatan kemudian bertanya soalan yang tidak dapat dijawab metrik ketepatan: pada prevalens populasi penggunaan anda, berapakah *kos* setiap pengesanan, dan berbaloikah bertindak ke atasnya? Penilaian ekonomi AI saringan retinopati (npj Digital Medicine 2024) menunjukkan ketepatan lebih tinggi sahaja tidak menjamin kos-keberkesanan apabila kos rujukan dikira.

## Matematiknya

```
Kepekaan   = TP / (TP + FN)        — daripada yang benar-benar positif, bahagian yang ditangkap
Kekhususan = TN / (TN + FP)        — daripada yang benar-benar negatif, bahagian yang dibersihkan
AUROC      = P(model meletakkan positif rawak di atas negatif rawak)
              0.5 kebetulan … 1.0 sempurna; bebas ambang — dan oleh itu
              tidak mencukupi untuk keputusan penggunaan

PPV = TP / (TP + FP)   ← bergantung prevalens (Bayes); runtuh apabila jarang
NPV = TN / (TN + FN)

NNS  ≈ 1 / (prevalens × kepekaan)       — disaring bagi setiap kes benar ditemui
Kos setiap kes benar = kos program / TP      — garis bawah ekonomi
```

## Contoh penyelesaian

Model yang sama, dua tetapan — kepekaan 90%, kekhususan 93%:

```
Klinik pakar (prevalens 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 daripada 4 amaran benar

Penjagaan primer (prevalens 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 daripada 9 amaran palsu; pemeriksaan lanjut pada £350 setiap satu:
  kos setiap kes benar = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 bagi setiap kes ditemui
```

Model sama, ekonomi sangat berbeza — itulah sebabnya penilaian khusus tapak ialah tema kawal selia dan mengapa "model kami mempunyai AUROC 0.95" ialah permulaan kes ekonomi, bukan penghujungnya. Lihat [ekonomi saringan](../ekonomi-saringan/) untuk matematik program penuh.

## Kaitan dengan kejuruteraan perisian

Bagi jurutera yang membina atau membeli AI klinikal: **hantar matriks kekeliruan pada prevalens penggunaan**, bukan lengkung ROC sahaja; **jadikan ambang keputusan ekonomi** — pertukaran kepekaan/kekhususan patut meminimumkan kos jangkaan (kes terlepas × kos terlepas lwn penggera palsu × kos pemeriksaan), bukan memaksimumkan statistik penanda aras; dan kenali matematik yang sama dalam alat anda sendiri — sistem amaran, pengesan anomali dan pengimbas keselamatan ialah ujian diagnostik ke atas aliran peristiwa berprevalens rendah, dengan keletihan amaran sebagai [NNH](../bilangan-perlu-dirawat/). Kemas kini model yang menganjak titik operasi membuka semula ekonomi (dan kelulusan kawal selia — lihat [penilaian kawal selia AI](../penilaian-kawal-selia-ai/)).

## Perangkap

- **Membeli-belah AUROC**: membandingkan model pada AUROC sedangkan ia akan berjalan pada satu ambang — bandingkan pada titik operasi.
- **PPV prevalens percubaan dipetik untuk penggunaan dunia sebenar** — yang klasik; sentiasa kira semula pada prevalens tempatan.
- **Bias spektrum**: model yang disahkan pada kes jelas lwn kawalan sihat berprestasi berlebihan pada bahagian tengah samar yang menguasai amalan.
- **Tiada pengkosan laluan hiliran**: setiap positif mencetuskan pemeriksaan lanjut; model ialah intervensi ke atas ekonomi *seluruh laluan*.

## Sumber

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
