# Diskonto dan Preferensi Waktu

Diskonto mengubah biaya dan manfaat masa depan menjadi nilai sekarang, karena manfaat hari ini bernilai lebih dari manfaat yang sama dalam lima tahun.

## Mengapa Ini Penting

Setiap penilaian ekonomi kesehatan dan setiap kasus bisnis sektor-publik yang serius mendiskon aliran multi-tahun. Green Book HM Treasury Inggris mewajibkan tingkat preferensi waktu sosial tahunan 3,5%; kasus rujukan NICE mendiskon baik biaya maupun efek kesehatan pada 3,5% per tahun (dengan tingkat bukan-rujukan 1,5% untuk terapi hampir-menyembuhkan dengan manfaat selama 30+ tahun). Jika kasus bisnis perangkat lunak Anda mengklaim "£5 juta penghematan selama 10 tahun", peninjau finansial akan segera meminta angka yang didiskon.

## Perhitungan

Nilai sekarang dari jumlah masa depan:

```
PV = FV / (1 + r)^t

PV = nilai sekarang
FV = nilai masa depan pada tahun t
r  = tingkat diskon (NICE/Green Book: 0,035)
t  = tahun dari sekarang
```

Untuk manfaat tahunan konstan B selama n tahun (anuitas):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Contoh yang Diselesaikan

Perangkat lunak Anda menghemat trust NHS £100.000 per tahun selama 5 tahun, dimulai satu tahun setelah go-live.

Total yang tidak didiskon: £500.000.

Didiskon pada 3,5%:

```
Tahun 1: 100.000 / 1,035^1 = £96.618
Tahun 2: 100.000 / 1,035^2 = £93.351
Tahun 3: 100.000 / 1,035^3 = £90.194
Tahun 4: 100.000 / 1,035^4 = £87.144
Tahun 5: 100.000 / 1,035^5 = £84.197

Total PV ≈ £451.505
```

Judul jujurnya adalah sekitar £451.000, kira-kira 10% lebih rendah dari jumlah naif. Sekarang misalkan penyampaian tertunda satu tahun: setiap istilah bergeser satu tahun lebih lambat, dan PV turun menjadi sekitar £436.000 — perspektif diskon dari [biaya keterlambatan](../biaya-keterlambatan/).

## Hubungan dengan Rekayasa Perangkat Lunak

- **Pelunasan utang-teknis dan migrasi platform** menjanjikan aliran manfaat bertahun-tahun ke depan; diskon mereka sebelum membandingkan dengan pekerjaan yang terbayar kembali kuartal ini.
- **Biaya di-muka, manfaat di-belakang** adalah bentuk standar migrasi. Diskonto menghukum bentuk itu, dengan benar: ia menghargai nilai waktu bebas-risiko dari mengomitmenkan kapasitas sekarang untuk nilai nanti.
- **Klaim "penghematan di tahun 5"** layak mendapat skeptisisme dua kali lipat — mereka baik sangat didiskon maupun sangat tidak pasti (lihat [analisis sensitivitas](../analisis-sensitivitas/)).

## Jebakan

- **Mendiskon biaya tetapi bukan manfaat** (atau sebaliknya) — kasus rujukan mendiskon keduanya, pada tingkat yang sama.
- **Menggunakan tingkat komersial (8–12%) dalam kasus sektor-publik**, atau 3,5% dalam kasus yang didukung modal-ventura. Cocokkan tingkat dengan pengambil keputusan.
- **Membingungkan diskonto dengan inflasi.** Diskonto berlaku untuk nilai *riil* (disesuaikan-inflasi); jangan lakukan keduanya secara implisit.

## Sumber

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
