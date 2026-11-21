# Evaluasi AI Klinis (Clinical AI Evaluation)

Statistik inti kanggo ngevaluasi AI klinis utawa model diagnostik: sensitivitas, spesifisitas, AUROC, nilai prediktif, lan jumlah sing perlu diskrining. Piwulang ekonomi pusat: **AUROC sing apik banget ora ndadekake deployment efektif-biaya** — nilai gumantung titik operasi, prevalensi, lan apa sing kedadean ing hilir saben positif.

## Kenapa Iki Penting

Regulator (FDA, MHRA) menehi otorisasi AI klinis ing **titik operasi sing dikunci** — pasangan sensitivitas/spesifisitas tartamtu (contone, sistem retinopati diabetik otonom pisanan sing diresmekake FDA: sensitivitas 87.2%, spesifisitas 90.7% ing uji pivotal). Ekonom kesehatan banjur takon pitakon sing ora bisa dijawab metrik akurasi: ing prevalensi populasi deploymentmu, pira *biaya* saben deteksi, lan apa nindakake tumindak marang kuwi aji? Evaluasi ekonomi AI skrining retinopati (npj Digital Medicine 2024) nuduhake akurasi sing luwih dhuwur wae ora njamin efektivitas-biaya yen biaya rujukan diitung.

## Matematikane

```
Sensitivitas = TP / (TP + FN)        — saka sing bener-bener positif, bagian sing kecekel
Spesifisitas = TN / (TN + FP)        — saka sing bener-bener negatif, bagian sing diresiki
AUROC        = P(model nilai positif acak luwih dhuwur tinimbang negatif acak)
              0.5 kebetulan … 1.0 sampurna; ora gumantung ambang — mula
              ora cukup kanggo keputusan deployment

PPV = TP / (TP + FP)   ← gumantung prevalensi (Bayes); ambruk yen langka
NPV = TN / (TN + FN)

NNS  ≈ 1 / (prevalensi × sensitivitas)       — sing diskrining saben kasus bener sing ditemokake
Biaya saben kasus bener = biaya program / TP      — garis ngisor ekonomi
```

## Conto Petungan

Model sing padha, rong setelan — sensitivitas 90%, spesifisitas 93%:

```
Klinik spesialis (prevalensi 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 saka 4 peringatan nyata

Perawatan primer (prevalensi 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 saka 9 peringatan palsu; pemeriksaan lanjut £350 saben siji:
  biaya saben kasus bener = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 saben kasus sing ditemokake
```

Model identik, ekonomi beda banget — mula evaluasi khusus-situs dadi tema regulasi lan mula "model kita nduweni AUROC 0.95" iku wiwitan kasus ekonomi, dudu pungkasane. Deleng [ekonomi skrining](../ekonomi-skrining/) kanggo matematika program lengkap.

## Sambungan karo Rékayasa Piranti Lunak

Kanggo insinyur sing mbangun utawa tuku AI klinis: **kirimake matriks kebingungan ing prevalensi deployment**, dudu mung kurva ROC; **ayo ambang dadi keputusan ekonomi** — trade-off sens/spes kudu nyuda biaya sing dikarepake (kasus sing kelalen × biaya lalen vs alarm palsu × biaya pemeriksaan lanjut), dudu nggedhekake statistik tolok ukur; lan kenali matematika sing padha ing piranti dhewe — sistem peringatan, detektor anomali, lan pemindai keamanan iku tes diagnostik ing aliran kedadean prevalensi-rendah, kanthi kesel-peringatan minangka [NNH](../jumlah-sing-perlu-diobati/). Nganyari model sing ngobahake titik operasi mbukak maneh ekonomi (lan izin regulasi — deleng [evaluasi regulasi AI](../evaluasi-regulasi-ai/)).

## Jebakan

- **Blanja AUROC**: mbandhingake model ing AUROC nalika bakal mlaku ing siji ambang — bandhingake ing titik operasi.
- **PPV prevalensi-uji coba dikutip kanggo deployment donya nyata** — klasik; tansah etung maneh ing prevalensi lokal.
- **Bias spektrum**: model sing divalidasi ing kasus gamblang vs kontrol sehat overperform ing tengah ambigu sing nguwasani praktik.
- **Ora ana pamriksaan biaya jalur hilir**: saben positif nyetel pemeriksaan lanjut; model iku intervensi ing ekonomi *kabeh jalur*.

## Sumber

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
