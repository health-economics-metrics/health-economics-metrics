# Manfaat Moneter Bersih (NMB)

NMB mengubah hasil efektivitas-biaya menjadi satu nilai uang: keuntungan kesehatan ditetapkan-harga pada ambang kesediaan-membayar, dikurangi biaya. Kembarannya, Manfaat Kesehatan Bersih (NHB), menyatakan aturan yang sama dalam unit kesehatan.

## Mengapa Ini Penting

Rasio ([ICER](../rasio-efektivitas-biaya-inkremental/)) canggung: mereka meledak dekat efek-nol, tidak dapat dirata-ratakan lintas pengambilan-sampel-ketidakpastian, dan tidak dapat merangking tiga atau lebih pilihan secara bersih. NMB memperbaiki semua itu — ia linear, sehingga Anda dapat merangking pilihan, merata-ratakan pengambilan-sampel Monte Carlo, dan mendekomposisi kontribusi. Ini juga bentuk matematika ekonomi-kesehatan yang sudah diketahui setiap insinyur: *nilai dikurangi biaya*.

## Perhitungan

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = efek inkremental (mis., QALY)
ΔC = biaya inkremental
λ  = ambang kesediaan-membayar (lihat willingness-to-pay-thresholds.md)

Aturan keputusan: adopsi jika NMB > 0 (setara NHB > 0).
Antar alternatif: pilih NMB tertinggi.
```

NMB > 0 ⇔ ICER < λ (ketika ΔE > 0), sehingga kedua aturan setuju — NMB hanya berperilaku lebih baik.

## Contoh yang Diselesaikan

Tiga pilihan untuk layanan diabetes, per 1.000 pasien, λ = £20.000/QALY:

```
Pilihan           ΔC          ΔE (QALY)   NMB = 20.000×ΔE − ΔC
Aplikasi + coaching £400.000  30          600.000 − 400.000 = £200.000
Hanya aplikasi     £150.000   12          240.000 − 150.000 = £90.000
Klinik ekstra      £700.000   32          640.000 − 700.000 = −£60.000
```

Klinik ekstra memperoleh QALY paling banyak tetapi menghancurkan nilai pada ambang ini (NMB < 0). Aplikasi + coaching menang. Perhatikan NMB memungkinkan Anda *merangking ketiganya sekaligus* — ICER berpasangan akan memerlukan prosedur batas dalam [dominansi dan batas efisiensi](../dominansi-dan-batas-efisiensi/), dan mencapai jawaban yang sama.

Pandangan NHB dari pemenang: 30 − 400.000/20.000 = 30 − 20 = **10 QALY bersih** — kesehatan yang diperoleh melampaui apa yang akan diproduksi uang yang sama di tempat lain.

## Hubungan dengan Rekayasa Perangkat Lunak

`(jam dihemat × tarif per-jam berbobot) − biaya alat` — kasus bisnis perkakas sehari-hari — secara harfiah adalah perhitungan NMB dengan λ = biaya insinyur berbobot. Dua peningkatan yang ditambahkan ekonomi kesehatan:

- **Jadikan λ variabel, bukan konstanta.** Plot NMB terhadap λ ("nilai satu jam-insinyur") dan tunjukkan di mana keputusan berbalik; pemangku kepentingan yang berbeda kemudian dapat menerapkan penilaian mereka sendiri tanpa mengulangi matematika Anda.
- **Pemikiran NHB**: "platform ini menghemat 5.000 jam-insinyur tetapi mengonsumsi anggaran yang akan membeli 3.000 jam-insinyur kapasitas kontraktor — bersih 2.000 jam" memaksa perbandingan biaya-peluang dalam unit kapasitas. Lihat [biaya peluang](../biaya-peluang/).

## Jebakan

- **Menyembunyikan ambang**: NMB tidak berarti apa-apa tanpa menyatakan λ; laporkan NMB pada £20rb dan £30rb, atau plot kurvanya.
- **Menggunakan NMB untuk mencuci efek kecil**: populasi besar dikalikan efek per-orang yang dapat diabaikan dapat menghasilkan NMB besar — laporkan efek per-orang di sampingnya.
- **Melupakan NMB mewarisi setiap ketidakpastian** dalam ΔC dan ΔE — pasangkan dengan [analisis sensitivitas probabilistik](../analisis-sensitivitas-probabilistik/).

## Sumber

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
