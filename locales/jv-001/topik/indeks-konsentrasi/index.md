# Indeks Konsentrasi (Concentration Index)

Indeks Konsentrasi (Wagstaff, Paci, van Doorslaer, 1991) iku ukuran statistik standar kanggo ketimpangan sing gegandhengan karo sosial-ekonomi ing variabel kesehatan, kanthi rentang saka -1 nganti 1. Negatif tegese variabel kesehatan kumpul ing antarane sing kurang beruntung sacara sosial-ekonomi, positif tegese kumpul ing antarane sing luwih mampu, lan nol tegese ora ana gradien sosial-ekonomi sing konsisten — ngowahi dugaan babagan distribusi sing ora padha dadi siji angka sing bisa dibandhingake.

## Kenapa Iki Penting

Program bisa katon efektif ing agregat nanging tetep ngirim manfaate meh kabeh marang wong sing wis luwih mampu. Keprihatinan distributif kaya ngene persis apa sing dilacak [jangkauan lan keadilan](../jangkauan-lan-keadilan/) kanthi deskriptif — jangkauan sing distratifikasi miturut kuintil kekurangan, jurang keadilan antarane kelompok ndhuwur lan ngisor — nanging tabel stratifikasi ora bisa dipadhetake dadi siji garis tren, lan ora gampang dibandhingake ing antarane rong intervensi sing babar pisan beda sing diukur ing skala beda. Indeks Konsentrasi ngrampungake loro masalah: diitung kanthi cara sing padha kanggo variabel kesehatan apa wae marang peringkat sosial-ekonomi apa wae, saengga layanan kesehatan nasional bisa nglacak apa ketimpangan layanan digital tartamtu saya amba utawa saya sempit saben rilis, lan bisa mbandhingake keadilan distributif peluncuran aplikasi karo, umpamane, program skrining, ing skala ternormalisasi sing padha.

## Matematikane

```
CI = (2 / mean(nilai_kesehatan)) × Cov(nilai_kesehatan, peringkat_sosial-ekonomi)

Cov(X, Y) = mean(X × Y) − mean(X) × mean(Y)   (kovarians populasi)

peringkat_sosial-ekonomi: peringkat pecahan saben wong ing distribusi
sosial-ekonomi, ing [0, 1] (0 = paling kurang beruntung, 1 = paling beruntung;
kanggo data kelompok/pita, konvensional peringkat titik tengah saben kelompok)
```

Iki "rumus kovarians trep" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) — dalan cendhak praktisi standar kanggo ngitung Indeks Konsentrasi langsung saka pengamatan berpasangan, tanpa nggambar lan ngintegralake ing ngisor kurva konsentrasi dhisik.

## Conto Petungan

Skor kesehatan apik sing dilaporake dhewe (1 = paling elek, 4 = paling apik) sing diamati ing papat kuartil sosial-ekonomi sing ukurane padha, saben diwakili peringkat titik tengah kuartile:

```
nilai_kesehatan        = [1.0, 2.0, 3.0, 4.0]
peringkat_sosial-ekonomi  = [0.125, 0.375, 0.625, 0.875]

mean(nilai_kesehatan)        = 2.5
mean(kesehatan × peringkat)  = mean([0.125, 0.75, 1.875, 3.5]) = 1.5625
mean(peringkat_sosial-ekonomi)  = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

`0.25` positif tegese skor kesehatan iki kumpul ing antarane kelompok sing beruntung sacara sosial-ekonomi — responden sing skore luwih dhuwur condhong menyang pucuk peringkat sing luwih mampu.

## Sambungan karo Rékayasa Piranti Lunak

Iki pangukuran ketimpangan adhedhasar kovarians sing padha sing digunakake ing ekonomi umume (sedulure koefisien Gini), lan dipetakake ing ngukur apa manfaat produk piranti lunak kumpul ing segmen pangguna sing wis beruntung tinimbang disebar kanthi adil — perluasan langsung [jangkauan lan keadilan](../jangkauan-lan-keadilan/) (dimensi "jangkauan" RE-AIM) dadi ukuran statistik formal tinimbang jurang sing diterangake. Ing ngendi jangkauan-lan-keadilan nglaporake dampak saben strata, Indeks Konsentrasi ngepres kabeh distribusi dadi siji angka bertanda, cocog minangka siji KPI sing dilacak lintas rilis — praktis kanggo dasbor, ing ngendi rincian stratifikasi lengkap ora.

## Jebakan

- **Drift konvensi tandha**: tandha gumantung carane variabel kesehatan lan peringkat didefinisikan — mbalikake salah siji mbalikake tandha, mula konvensi sing digunakake kudu tansah dinyatakake kanthi eksplisit bareng nilai apa wae sing dilaporake.
- **Peringkat wates tinimbang peringkat titik tengah**: data sosial-ekonomi sing dikelompokake utawa dipitakake (contone kuintil) mbutuhake peringkat pecahan saben kelompok ing *titik tengah*, dudu watese, yen ora indeks bias.
- **Maca "cedhak nol" minangka "ora ana ketimpangan"**: Indeks Konsentrasi cedhak nol tegese "ora ana gradien sosial-ekonomi sing konsisten", dudu "ora ana ketimpangan" sacara mutlak — ketimpangan sing saling ngimbangi ing arah beda bisa mbatalake.

## Sumber

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
