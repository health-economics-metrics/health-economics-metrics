# Nilai Harapan dari Informasi Sempurna (EVPI)

EVPI adalah jumlah maksimum yang seharusnya dibayar pengambil keputusan untuk menghilangkan ketidakpastian sebelum memutuskan — harga formal dari "mari kita jalankan studi dulu".

## Mengapa Ini Penting

Sistem kesehatan terus-menerus menghadapi pilihan: mengadopsi sekarang dengan bukti yang tidak sempurna, atau mendanai lebih banyak penelitian dulu. EVPI memberikan angka pada pilihan kedua. Jika EVPI adalah £50.000 dan uji coba yang diusulkan berbiaya £2 juta, adopsi sekarang. Jika EVPI adalah £20 juta, uji cobanya murah. Pertanyaan yang sama — "haruskah kita mengujicobakan ini sebelum meluncurkannya?" — muncul untuk setiap keputusan alat perusahaan, dan hampir tidak ada yang memberi harga padanya.

## Perhitungan

EVPI adalah selisih antara memutuskan dengan pandangan-ke-depan sempurna dan memutuskan sekarang berdasarkan ekspektasi:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = parameter tidak pasti (dengan distribusi bersamanya)
NMB(j,θ) = manfaat moneter bersih pilihan j diberikan θ
```

Istilah pertama: rata-rata hasil pilihan-terbaik di setiap dunia yang mungkin (Anda selalu memilih dengan benar). Istilah kedua: hasil dari satu-satunya pilihan yang terbaik secara rata-rata (Anda harus berkomitmen sekarang). EVPI ≥ 0 selalu. EVPI populasi dikalikan dengan jumlah keputusan yang terpengaruh. Dihitung langsung dari pengambilan sampel [PSA](../analisis-sensitivitas-probabilistik/).

## Contoh yang Diselesaikan

Meluncurkan asisten dokumentasi AI ke 5.000 klinisi, atau tidak. Dua dunia:

```
Dunia A (p = 0,6): asisten menghemat 20 menit/hari → NMB peluncuran = +£8 juta
Dunia B (p = 0,4): asisten menghemat ~0 (gesekan alur kerja) → NMB peluncuran = −£3 juta
NMB "tidak meluncurkan" = £0 di kedua dunia.
```

Putuskan sekarang: E[NMB peluncuran] = 0,6 × 8 − 0,4 × 3 = **+£3,6 juta** → luncurkan.

Dengan informasi sempurna: di dunia A pilih peluncuran (+£8 juta), di dunia B pilih tidak-ada (£0). Nilai harapan = 0,6 × 8 + 0,4 × 0 = **£4,8 juta**.

```
EVPI = 4,8 juta − 3,6 juta = £1,2 juta
```

Uji coba ketat 3-bulan berbiaya £150.000 yang secara substansial menyelesaikan di dunia mana Anda berada sangat layak — dan uji coba mana pun yang berbiaya lebih dari £1,2 juta tidak layak, betapapun menyeluruhnya.

## Hubungan dengan Rekayasa Perangkat Lunak

EVPI adalah ekonomi dari spike, uji coba, uji A/B, dan bukti-konsep. Ia menghasilkan dua aturan praktis:

- **Uji coba hanya layak didanai jika keputusan benar-benar dapat berubah.** Jika Anda akan meluncurkan terlepas dari hasil uji coba, EVPI = 0 dan uji cobanya adalah teater.
- **Batasi pengeluaran uji coba pada EVPI.** Nilai informasi dibatasi oleh nilai keputusan yang diinformasikannya.

EVPI parsial (EVPPI) memperluas ini ke parameter tunggal: "berapa nilai untuk memastikan angka waktu-yang-dihemat secara spesifik?" — yang memberi tahu Anda apa yang harus diukur uji coba.

## Jebakan

- **Menjalankan uji coba tanpa aturan keputusan yang melekat** — informasi yang tidak dapat mengubah pilihan tidak bernilai berdasarkan definisi.
- **Mengabaikan biaya keterlambatan dari mengumpulkan informasi**: uji coba 6-bulan menunda 6 bulan manfaat ([biaya keterlambatan](../biaya-keterlambatan/)); nilai bersih uji coba = EVPI terselesaikan − biaya keterlambatan − biaya uji coba.
- **Memperlakukan EVPI sebagai ramalan.** Ini adalah batas atas nilai informasi, bukan estimasi apa yang akan disampaikan studi tertentu.

## Sumber

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
