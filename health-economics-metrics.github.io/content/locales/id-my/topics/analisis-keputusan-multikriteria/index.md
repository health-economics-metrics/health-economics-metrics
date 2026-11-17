# Analisis Keputusan Multikriteria (MCDA)

Analisis keputusan multikriteria (MCDA) adalah model penilaian jumlah berbobot yang dipakai dalam penilaian teknologi kesihatan ketika satu ambang ICER/kesediaan membayar tidak menangkap semua yang dipedulikan pengambil keputusan: kesetaraan, kebutuhan yang belum terpenuhi, inovasi, dampak anggaran, keparahan penyakit. Setiap kriteria diberi bobot yang mencerminkan kepentingannya (diperoleh dari pemangku kepentingan, berjumlah 1), setiap alternatif mendapat skor ternormalisasi per kriteria (biasanya 0–1), dan skor total adalah jumlah berbobot — bentuk matematika yang sama dengan kartu skor evaluasi pemasok perisian.

## Mengapa ini penting

MCDA dipakai dalam kerangka seperti EVIDEM dan di beberapa badan HTA untuk ubat yatim/penyakit langka, di mana pendekatan ambang biaya per QALY yang ketat dianggap terlalu sempit untuk menangkap semua yang penting bagi keputusan. Satuan tugas ISPOR MCDA Emerging Good Practices Task Force memformalkan praktik baik untuk memperoleh bobot dan skor yang dapat dipertanggungjawabkan, justru kerana keputusan berbobot yang informal mudah dibuat dan mudah dimanipulasi. Ketika sebuah teknologi kesihatan memiliki dimensi nilai yang tidak dapat diwakili satu [ambang batas kesediaan membayar](../ambang-batas-kesediaan-membayar/) — keparahan, inovasi, kesetaraan — MCDA memberi pengambil keputusan struktur yang eksplisit dan dapat diaudit untuk menggabungkannya, alih-alih penilaian yang tak terucap.

## Matematika

```
Skor MCDA = Σ_i (bobot_i × skor_i)

bobot sebaiknya berjumlah 1 (diperoleh dengan metode pemangku
kepentingan seperti swing weighting atau Analytic Hierarchy Process)
```

## Contoh yang diselesaikan

Sebuah komite HTA menilai terapi digital pada empat kriteria:

```
Kriteria                                 Bobot   Skor   Bobot × Skor
Manfaat klinis                           0.4     0.8    0.32
Dampak biaya                             0.3     0.5    0.15
Keparahan penyakit / kebutuhan belum terpenuhi  0.2  0.9  0.18
Inovasi                                  0.1     0.6    0.06
                                         ─────          ─────
                                         1.0            0.71
```

Bobotnya berjumlah 1,0 (0,4 + 0,3 + 0,2 + 0,1) dan skor MCDA adalah 0,71 (0,32 + 0,15 + 0,18 + 0,06). Komite membandingkan 0,71 dengan ambang yang disepakati sebelumnya, atau memeringkatnya terhadap teknologi pesaing yang dinilai dengan cara yang sama.

## Hubungan dengan rekayasa perisian

Ini matematika yang sama dengan kartu skor pemilihan pemasok berbobot, matriks evaluasi RFP, atau model penilaian prioritas fitur — lihat [membangun vs membeli](../membangun-vs-membeli/) untuk kasus penggunaan klasik kartu skor berbobot dalam pengadaan perisian. Layak juga dikontraskan dengan [WSJF dan CD3](../wsjf-dan-cd3/): WSJF/CD3 adalah metode prioritisasi berbasis *rasio* (biaya penundaan dibagi ukuran atau durasi pekerjaan), sedangkan MCDA adalah *jumlah* berbobot. MCDA dan WSJF/CD3 adalah dua jawaban berbeda secara struktural atas pertanyaan "bagaimana kita memeringkat opsi yang bersaing", dan mengetahui mana yang sebenarnya dituntut sebuah keputusan — nilai agregat atas kriteria independen, atau kepadatan nilai per satuan kapasitas langka — lebih penting daripada rumus mana yang tampak lebih ketat.

## Jebakan

- **Bias pengambilan bobot**: yang menetapkan bobot praktis menentukan peringkat lebih dulu, sehingga "rumus" dapat mencuci keputusan politik atau komersial menjadi perhitungan yang tampak objektif. Dokumentasikan siapa yang menetapkan bobot dan bagaimana.
- **Penghitungan ganda kriteria yang sudah tercakup di tempat lain**: menilai "efektivitas biaya" sebagai satu kriteria *dan* menilai "dampak biaya" terpisah memberi bobot uang berlebih dibanding kriteria lain tanpa ada yang bermaksud demikian.
- **Presisi semu**: skor berbobot dua desimal (0,71) mengisyaratkan ketelitian lebih besar daripada yang didukung penilaian pemangku kepentingan pada skala 0–10, dan variabilitas antarpenilai dalam penilaian itu sering tidak dilaporkan sama sekali.

## Sumber

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
