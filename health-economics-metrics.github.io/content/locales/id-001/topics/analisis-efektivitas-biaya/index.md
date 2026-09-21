# Analisis Efektivitas Biaya (CEA)

CEA membandingkan biaya intervensi alternatif terhadap satu hasil yang diukur dalam **unit alami** — tahun kehidupan, kasus terdeteksi, rawat inap yang dihindari, mmHg tekanan darah yang berkurang. Outputnya adalah biaya per unit hasil.

## Mengapa Ini Penting

CEA adalah perbandingan kuda-beban ketika semua pilihan menargetkan hasil yang sama. Ia menjawab "mana dari cara-cara mencapai X ini yang merupakan penggunaan uang terbaik?" — tetapi *bukan* "apakah X layak dicapai sama sekali?" (itu memerlukan [analisis biaya-manfaat](../analisis-biaya-manfaat/)) dan *bukan* "bagaimana X dibandingkan dengan prioritas yang tidak terkait?" (itu memerlukan [analisis biaya-utilitas](../analisis-biaya-utilitas/) dan hasil generik seperti QALY).

## Perhitungan

Statistik perbandingannya adalah [ICER](../rasio-efektivitas-biaya-inkremental/) dalam unit alami:

```
ICER = (Biaya_A − Biaya_B) / (Efek_A − Efek_B)
     = £ per kasus tambahan terdeteksi / rawat inap dihindari / dll.
```

Prosedur: definisikan unit hasil; hitung biaya setiap pilihan dari [perspektif](../perspektif-analisis/) yang sama selama [horizon waktu](../horizon-waktu/) yang sama; hilangkan pilihan yang didominasi ([batas efisiensi](../dominansi-dan-batas-efisiensi/)); hitung rasio inkremental di sepanjang batas.

## Contoh yang Diselesaikan

Tiga cara menemukan fibrilasi atrium yang tidak terdiagnosis dalam populasi 100.000:

```
Pilihan                    Biaya      Kasus ditemukan
Pemeriksaan nadi oportunis  £150.000   300
Peristiwa skrining apotek   £400.000   520
Skrining berbasis wearable  £900.000   610

ICER apotek vs nadi:  (400rb−150rb)/(520−300) = £1.136 per kasus tambahan
ICER wearable vs apotek: (900rb−400rb)/(610−520) = £5.556 per kasus tambahan
```

Apakah £5.556 per kasus tambahan "layak" bergantung pada nilai kasus yang ditemukan (pencegahan stroke hilir) — CEA merangking pilihan tetapi keputusan adopsi memerlukan penilaian eksternal itu. Perhatikan bagaimana biaya *rata-rata* pilihan wearable per kasus (900rb/610 = £1.475) terlihat baik; *inkremental* £5.556 adalah angka jujur untuk keputusan ekspansi.

## Hubungan dengan Rekayasa Perangkat Lunak

CEA adalah template yang tepat setiap kali pilihan berbagi satu hasil: biaya per uji yang tidak stabil dihilangkan di tiga pendekatan perbaikan; biaya per insiden dihindari di vendor observabilitas; biaya per penerapan sukses di arsitektur CI. Disiplin yang ditegakkannya — satu unit hasil yang dinyatakan, rasio inkremental (bukan rata-rata), pilihan yang didominasi dihilangkan lebih dulu — membunuh sebagian besar perbandingan vendor buruk sebelum diskusi harga dimulai.

## Jebakan

- **Membandingkan pilihan dengan hasil berbeda** ("kasus ditemukan" vs "kepuasan") dalam satu CEA — itu memerlukan [analisis biaya-konsekuensi](../analisis-biaya-konsekuensi/) atau hasil generik.
- **Rasio efektivitas-biaya rata-rata** disajikan di mana yang inkremental diperlukan (contoh wearable di atas).
- **Unit hasil yang dipilih untuk menyanjung**: "peringatan yang dihasilkan" adalah output, bukan hasil; bersikeras pada unit yang membawa nilai.

## Sumber

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
