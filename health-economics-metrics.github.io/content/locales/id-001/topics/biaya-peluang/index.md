# Biaya Peluang

Biaya peluang adalah nilai alternatif terbaik yang Anda relakan ketika Anda mengomitmenkan sebuah sumber daya. Dalam sistem kesehatan dengan anggaran tetap, membelanjakan £1 juta untuk satu hal berarti £1 juta kesehatan yang *tidak* diproduksi di tempat lain.

## Mengapa Ini Penting

Biaya peluang adalah ide terdalam dalam ekonomi kesehatan, dan yang paling sering dilewatkan insinyur perangkat lunak. Anggaran kesehatan tetap pada tahun tertentu, sehingga teknologi baru tidak pernah didanai dari uang "ekstra" — ia menggantikan sesuatu. Pertanyaan yang sebenarnya diajukan pembayar bukan "apakah ini bagus?" tetapi "apakah ini lebih baik daripada apa yang saat ini dibeli uang yang sama?"

Inilah sebabnya ambang efektivitas-biaya ada sama sekali: ambangnya adalah estimasi kesehatan yang dibeli uang pada marjin sistem saat ini. Lihat [ambang batas kesediaan-membayar](../ambang-batas-kesediaan-membayar/).

## Perhitungan

Tidak ada rumus tunggal; biaya peluang adalah disiplin perbandingan:

```
Biaya peluang dari memilih A = nilai alternatif-terbaik-B yang direlakan
Keuntungan bersih dari A = nilai(A) − nilai(B)
```

Tolok ukur empiris: Claxton et al. (2015) memperkirakan NHS memproduksi satu QALY dengan biaya kira-kira **£13.000** pada marjinnya. Jadi £13.000 yang dibelanjakan pada teknologi yang memproduksi kurang dari satu QALY membuat bangsa *kurang* sehat, bahkan jika teknologinya "berfungsi".

## Contoh yang Diselesaikan

Anggaran transformasi sebuah trust NHS dapat mendanai persis satu dari:

- **Pilihan A**: perangkat lunak penjadwalan-elektronik — menghemat £400.000/tahun dalam pengeluaran staf-agensi.
- **Pilihan B**: perangkat lunak koordinasi-pemulangan — menghemat 2.000 hari-tempat-tidur/tahun. Pada biaya marginal sekitar £150 per hari-tempat-tidur yang benar-benar dibebaskan, itu £300.000/tahun, ditambah perawatan lebih awal untuk pasien yang menunggu.

Mendanai A berarti merelakan B. Biaya peluang A adalah £300.000 dari B plus manfaat pasien; kasus *bersih* untuk A hanyalah selisihnya, bukan judul £400.000 dari A. Kasus bisnis apa pun yang membandingkan proposal terhadap "tidak melakukan apa-apa" alih-alih alternatif terbaik melebih-lebihkan nilainya.

## Hubungan dengan Rekayasa Perangkat Lunak

Kapasitas rekayasa juga anggaran tetap — slot roadmap, bukan pound. Sebuah tim platform yang mendanai alat A yang menghemat jam-insinyur pada £500/jam ketika alat B menyampaikan hal yang sama pada £200/jam sedang menghancurkan kapasitas, persis seperti sistem kesehatan yang mendanai obat £40.000/QALY menggantikan perawatan £13.000/QALY. Disiplinnya ditransfer langsung:

- Selalu sebutkan pembanding ("versus apa?").
- Nilai waktu insinyur berdasarkan apa yang seharusnya diproduksinya, bukan hanya gaji.
- Perlakukan "kami masih punya anggaran" sebagai awal analisis, bukan akhir.

## Jebakan

- **Membandingkan terhadap tidak-ada-apa-apa.** Pembanding yang benar adalah penggunaan-terbaik-berikutnya dari uang, yang jarang "tidak melakukan apa-apa".
- **Mengasumsikan waktu yang dihemat memiliki biaya-peluang nol.** Waktu yang dihemat hanya berharga jika dipekerjakan-kembali ke sesuatu yang berharga — lihat [penghematan pelepas-kas vs bukan-pelepas-kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/).
- **Mengabaikan penggantian.** "Anggaran akan berkembang untuk menampungnya" hampir tidak pernah benar dalam sistem kesehatan nasional dalam-tahun.

## Sumber

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
