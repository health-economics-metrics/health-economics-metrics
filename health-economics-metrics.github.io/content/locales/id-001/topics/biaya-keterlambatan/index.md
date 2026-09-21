# Biaya Keterlambatan (CoD)

Biaya Keterlambatan adalah nilai ekonomi yang hilang per unit waktu di mana sebuah fitur, produk, atau layanan *tidak* disampaikan. Ini adalah jembatan tunggal terkuat antara metrik penyampaian perangkat lunak dan ekonomi kesehatan: mengubah "kami mengirim terlambat" menjadi mata uang — atau menjadi QALY.

## Mengapa Ini Penting

Aturan Reinertsen: "Jika Anda hanya mengukur satu hal, ukurlah Biaya Keterlambatan." Sebagian besar organisasi tahu berapa biaya proyek tetapi tidak tahu berapa biaya satu bulan keterlambatan, sehingga mereka mengoptimalkan anggaran sambil mengalami pendarahan nilai-waktu. Untuk perangkat lunak kesehatan, taruhannya harfiah: setiap minggu perbaikan jalur ditunda, pasien menunggu lebih lama dalam kondisi kesehatan yang lebih buruk. CoD adalah kerangka matematis terkuat untuk disajikan kepada pemangku kepentingan NHS karena ia menghargai *ketiadaan* perangkat lunak Anda.

## Perhitungan

```
CoD = manfaat per unit waktu yang hilang selagi belum disampaikan   (£/minggu atau QALY/minggu)

Total kerugian keterlambatan = CoD × durasi keterlambatan

Untuk prioritisasi, lihat wsjf-and-cd3.md: CD3 = CoD / durasi.
```

Untuk perangkat lunak klinis, nyatakan baik dalam kesehatan maupun uang:

```
CoD_kesehatan = pasien yang terpengaruh per minggu × keuntungan QALY per pasien
CoD_uang      = CoD_kesehatan × λ (ambang kesediaan-membayar, £20rb–30rb/QALY)
             + penghematan operasional per minggu yang hilang
```

## Contoh yang Diselesaikan

**Operasional**: perangkat lunak menghemat £200 per pasien pada satu jalur; trust memproses 50 pasien tersebut/minggu.

```
CoD = 200 × 50 = £10.000/minggu
Keterlambatan pengadaan 10-minggu berbiaya 200 × 50 × 10 = £100.000 dalam limbah yang dapat dihindari.
```

**Klinis**: perbaikan triase menghilangkan 5 minggu penantian (utilitas 0,68 → 0,80 lebih cepat) untuk 100 pasien/minggu:

```
Keuntungan QALY per pasien = (5/52) × 0,12 ≈ 0,0115
CoD_kesehatan = 100 × 0,0115 = 1,15 QALY/minggu
CoD_uang      = 1,15 × £20.000 ≈ £23.000/minggu nilai kesehatan
```

Keterlambatan penerapan 6-bulan "berbiaya" ~30 QALY — argumen yang membingkai ulang keterlambatan go-live TI sebagai peristiwa klinis. (Tolok ukur untuk skala: analisis Maersk terkenal dari Black Swan Farming menemukan fitur tunggal dengan CoD ≈ $200rb/minggu yang telah menunggu 38 minggu.)

## Hubungan dengan Rekayasa Perangkat Lunak

CoD adalah metrik yang membuat [waktu tunggu DORA](../metrik-dora/) dan [efisiensi alur](../metrik-alur/) terbaca-secara-finansial: waktu tunggu × CoD = uang (atau kesehatan) yang terbakar dalam antrean. Penggunaan:

- **Prioritisasi**: rangking pekerjaan berdasarkan CoD/durasi ([WSJF/CD3](../wsjf-dan-cd3/)) alih-alih pemangku kepentingan paling vokal.
- **Ekonomi proses**: kadensi rilis 2-minggu memiliki biaya keterlambatan yang diharapkan ~1 minggu × CoD per fitur dibandingkan penyampaian berkelanjutan — hargai batchnya.
- **Pengadaan**: siklus pengadaan NHS 6–18 bulan memiliki CoD; menunjukkannya mengubah percakapan urgensi (lihat [analisis dampak anggaran](../analisis-dampak-anggaran/) untuk padanan keterjangkauannya).

## Jebakan

- **Mengasumsikan CoD linear**: beberapa pekerjaan memiliki nilai berbentuk-tenggat (tanggal regulasi — CoD tak terbatas setelah tanggal, nol sebelumnya) atau nilai yang meluruh (jendela penggerak-pertama). Klasifikasikan profil urgensi sebelum mengalikan.
- **CoD pada hasil yang tidak diinginkan siapa pun**: keterlambatan hanya berbiaya jika sesuatunya bernilai; sampah yang tertunda gratis.
- **Penghitungan ganda keterlambatan dan diskon**: [diskon](../diskonto-dan-preferensi-waktu/) sudah menghargai waktu pada horizon multi-tahun; CoD adalah versi operasional dalam-horizon. Gunakan CoD untuk minggu/bulan, pergeseran NPV untuk tahun.

## Sumber

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
