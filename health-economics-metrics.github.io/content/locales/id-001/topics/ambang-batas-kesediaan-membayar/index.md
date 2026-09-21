# Ambang Batas Kesediaan-Membayar

Ambang kesediaan-membayar (WTP) adalah maksimum yang akan dibayar seorang pengambil-keputusan per unit keuntungan-kesehatan — garis yang mengubah sebuah [ICER](../rasio-efektivitas-biaya-inkremental/) menjadi keputusan adopsi/penolakan.

## Mengapa Ini Penting

Ambang adalah tempat ekonomi kesehatan berhenti menjadi pengukuran dan menjadi kebijakan. Setiap sistem nasional memilikinya, eksplisit atau implisit, dan mengetahui angka-lokalnya memberi tahu Anda persis bagaimana menetapkan-harga klaim nilai-kesehatan:

| Badan | Ambang (sebagaimana diteliti, 2024–2025) |
|---|---|
| NICE (Inggris) | £20.000–£30.000 per QALY; ambang-keputusan rata-rata empiris ≈ £24.400 (2022–24); modifier keparahan menaikkan plafon-efektif menjadi ~£36rb–£51rb; teknologi sangat-terspesialisasi hingga £100rb+ |
| ICER (AS, non-pemerintah) | tolok-ukur-harga $100.000–$150.000 per QALY/evLYG; melaporkan rentang $50rb–$200rb |
| Kanada (CADTH / CDA-AMC) | ≈ CAD$50.000 per QALY ambang-kerja |
| WHO-CHOICE (historis, global) | 1–3× PDB per kapita per DALY yang dihindari (sekarang tidak-dianjurkan sebagai terlalu-tumpul) |
| Sisi-suplai empiris Inggris (Claxton et al.) | ≈ £13.000 per QALY yang benar-benar digantikan pada marjin NHS |

## Perhitungan

Ambang λ masuk ke setiap aturan keputusan:

```
Adopsi jika ICER = ΔC/ΔE < λ
Setara: adopsi jika NMB = λ×ΔE − ΔC > 0
```

Dua teori tentang apa *itu* λ:

- **Sisi-permintaan**: apa yang bersedia dibayar masyarakat untuk kesehatan (penilaian-nilai).
- **Sisi-suplai**: kesehatan yang saat ini diproduksi anggaran pada marjinnya (kuantitas empiris — ~£13rb/QALY Claxton). Jika λ yang digunakan untuk keputusan melebihi tingkat sisi-suplai, menyetujui teknologi baru menggantikan lebih banyak kesehatan daripada yang ditambahkannya.

## Contoh yang Diselesaikan

Terapeutik digital Anda menyampaikan 0,05 QALY per pasien-dirawat pada biaya bersih (harga dikurangi offset) £800.

```
ICER = 800 / 0,05 = £16.000 per QALY
```

- Inggris: di bawah £20rb → dapat-didanai. Harga maksimum yang-dapat-dipertahankan: pada λ = £20.000, harga_maks = 0,05 × 20.000 + offset = £1.000 + offset.
- Pembingkaian komersial AS pada $150rb/QALY: harga berbasis-nilai jauh lebih tinggi.
- Ambang negara PDB-per-kapita $4.000: produk yang sama harus berbiaya di bawah ~$200 bersih.

Produk yang sama, tiga pasar, tiga harga — ambangnya *adalah* model penetapan-harga. Ini adalah penetapan-harga-berbasis-nilai, dijalankan terbalik dari λ.

## Hubungan dengan Rekayasa Perangkat Lunak

Setiap organisasi rekayasa memiliki λ implisit: rintangan di mana ia mendanai perkakas per jam-insinyur yang dihemat. Membuatnya eksplisit — "kami mendanai apa pun di bawah £40 per jam-insinyur-kredibel-yang-dihemat" — memungkinkan perbandingan gaya-tabel-liga dari investasi-platform, persis seperti tabel-liga biaya-per-QALY merangking belanja-kesehatan. Pelajaran sisi-suplai juga ditransfer: λ internal sejati Anda adalah apa yang diproduksi backlog *saat-ini* Anda pada marjinnya, bukan apa yang dikatakan kepemimpinan tentang nilai waktu.

## Jebakan

- **Belanja ambang** antar yurisdiksi atau mengutip plafon-HST untuk produk biasa.
- **Memperlakukan λ sebagai lantai-harga**: melewati ambang diperlukan, tidak cukup — [dampak-anggaran](../analisis-dampak-anggaran/) masih dapat menenggelamkan produk yang terjangkau-per-unit.
- **Mengabaikan bahwa ambang bergerak**: modifier keparahan NICE (2022) dan tinjauan periodik mengubah λ efektif; beri-tanggal klaim Anda.

## Sumber

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
