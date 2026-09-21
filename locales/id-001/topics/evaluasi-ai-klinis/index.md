# Evaluasi AI Klinis

Statistik inti untuk mengevaluasi model AI klinis atau diagnostik: sensitivitas, spesifisitas, AUROC, nilai prediktif, dan jumlah yang perlu diskrining. Pelajaran ekonomi utama: **AUROC yang hebat tidak membuat penerapan efektif biaya** — nilai bergantung pada titik operasi, prevalensi, dan apa yang terjadi hilir dari setiap positif.

## Mengapa Ini Penting

Regulator (FDA, MHRA) memberi izin AI klinis pada **titik operasi yang terkunci** — pasangan sensitivitas/spesifisitas tertentu (mis., sistem retinopati-diabetik otonom pertama yang disetujui FDA: sensitivitas 87,2%, spesifisitas 90,7% dalam uji coba pivotalnya). Ekonom kesehatan kemudian menanyakan pertanyaan yang tidak dapat dijawab metrik akurasi: pada prevalensi populasi penerapan Anda, berapa *biaya* setiap deteksi, dan apakah bertindak berdasarkannya sepadan? Evaluasi ekonomi AI skrining retinopati (npj Digital Medicine 2024) menunjukkan akurasi yang lebih tinggi saja tidak menjamin efektivitas biaya setelah biaya rujukan dihitung.

## Perhitungan

```
Sensitivitas = TP / (TP + FN)        — dari yang benar-benar positif, proporsi tertangkap
Spesifisitas = TN / (TN + FP)        — dari yang benar-benar negatif, proporsi terbebaskan
AUROC       = P(model mengurutkan positif acak di atas negatif acak)
              0,5 kebetulan … 1,0 sempurna; tidak bergantung ambang — dan karenanya
              tidak cukup untuk keputusan penerapan

NPP = TP / (TP + FP)   ← bergantung prevalensi (Bayes); runtuh ketika langka
NPN = TN / (TN + FN)

NPS  ≈ 1 / (prevalensi × sensitivitas)       — diskrining per kasus benar yang ditemukan
Biaya per kasus benar = biaya program / TP      — garis dasar ekonomi
```

## Contoh yang Diselesaikan

Model yang sama, dua pengaturan — sensitivitas 90%, spesifisitas 93%:

```
Klinik spesialis (prevalensi 20%):
  NPP = (0,9×0,2)/(0,9×0,2 + 0,07×0,8) = 0,18/0,236 ≈ 76%  → 3 dari 4 peringatan nyata

Perawatan primer (prevalensi 1%):
  NPP = (0,9×0,01)/(0,9×0,01 + 0,07×0,99) = 0,009/0,0783 ≈ 11,5%
  → 8 dari 9 peringatan palsu; penyelidikan pada £350 masing-masing:
  biaya per kasus benar = (0,009 + 0,0693) × 350 / 0,009 ≈ £3.045 per kasus yang ditemukan
```

Model identik, ekonomi yang sangat berbeda — mengapa evaluasi spesifik-lokasi adalah tema regulasi dan mengapa "model kami memiliki AUROC 0,95" adalah awal dari kasus ekonomi, bukan akhirnya. Lihat [ekonomi skrining](../ekonomi-skrining/) untuk aritmatika program lengkap.

## Hubungan dengan Rekayasa Perangkat Lunak

Untuk insinyur yang membangun atau membeli AI klinis: **kirim matriks kebingungan pada prevalensi penerapan**, bukan hanya kurva ROC; **biarkan ambang menjadi keputusan ekonomi** — trade-off sens/spesifisitas harus meminimalkan biaya yang diharapkan (kasus terlewat × biaya terlewat vs alarm palsu × biaya penyelidikan), bukan memaksimalkan statistik tolok ukur; dan kenali aritmatika yang sama dalam perkakas Anda sendiri — sistem peringatan, detektor anomali, dan pemindai keamanan adalah tes diagnostik atas aliran peristiwa berprevalensi rendah, dengan kelelahan-peringatan sebagai [NNH](../jumlah-yang-perlu-dirawat/). Pembaruan model yang menggeser titik operasi membuka kembali ekonominya (dan izin regulasi — lihat [evaluasi regulasi AI](../evaluasi-regulasi-ai/)).

## Jebakan

- **Belanja AUROC**: membandingkan model pada AUROC ketika mereka akan beroperasi pada satu ambang — bandingkan pada titik operasi.
- **NPP prevalensi-uji-coba dikutip untuk penerapan dunia nyata** — kesalahan klasik; selalu hitung ulang pada prevalensi lokal.
- **Bias spektrum**: model yang divalidasi pada kasus jelas vs kontrol sehat berkinerja berlebihan pada tengah ambigu yang mendominasi praktik.
- **Tidak ada penentuan biaya jalur hilir**: setiap positif memicu penyelidikan; sebuah model adalah intervensi pada ekonomi *seluruh jalur*.

## Sumber

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
