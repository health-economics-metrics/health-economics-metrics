# Analisis Sensitivitas

Analisis sensitivitas deterministik (DSA) memvariasikan satu asumsi pada suatu waktu di sepanjang rentang-masuk-akal untuk melihat apakah kesimpulannya bertahan. Visualisasi standarnya adalah diagram tornado: parameter dirangking berdasarkan seberapa banyak mereka mengayunkan hasilnya.

## Mengapa Ini Penting

Setiap model ekonomi dibangun atas estimasi — waktu yang dihemat, keterserapan, biaya unit. Penilaian teknologi kesehatan menolak menerima estimasi-titik ("ROI-nya 340%") tanpa bukti bahwa kesimpulannya kuat terhadap ketidaksepakatan yang masuk-akal tentang input-inputnya. Diagram tornado memberi tahu pengambil-keputusan *asumsi mana yang harus diinterogasi*: jika kasusnya hanya berfungsi ketika parameter yang paling-diperdebatkan berada di ujung-optimistisnya, semua orang dapat langsung melihat itu.

Ini adalah kebiasaan tunggal yang paling dapat ditransfer dari ekonomi kesehatan ke kasus bisnis perangkat lunak.

## Perhitungan

Untuk setiap parameter p dengan rentang-masuk-akal [p_rendah, p_tinggi]:

```
Hasil_rendah  = model(p = p_rendah,  semua yang lain pada kasus-dasar)
Hasil_tinggi  = model(p = p_tinggi, semua yang lain pada kasus-dasar)
Ayunan(p)    = |Hasil_tinggi − Hasil_rendah|
```

Rangking parameter berdasarkan ayunan; plot batang horizontal di sekitar hasil kasus-dasar. Varian: DSA dua-arah (memvariasikan dua parameter pada grid), analisis-ambang (temukan nilai-parameter di mana keputusannya berbalik).

## Contoh yang Diselesaikan

Asisten pengkodean AI untuk 200 pengembang. Kasus dasar: lisensi £39/pengembang/bulan; 30 menit/pengembang/hari dihemat; biaya berbobot £60/jam; 220 hari kerja.

```
Manfaat tahunan kasus-dasar = 200 × 0,5j × 220 × £60 = £1.320.000
Biaya tahunan                = 200 × £39 × 12         = £93.600
Bersih kasus-dasar            = £1.226.400
```

Tornado (satu parameter pada suatu waktu):

```
Waktu dihemat 0,1–1,0 j/hari: bersih = £170.400 … £2.546.400   (ayunan £2,38 juta) ← mendominasi
Biaya berbobot £40–£80/j:     bersih = £786.400 … £1.666.400   (ayunan £0,88 juta)
Hari kerja 200–240:           bersih = £1.106.400 … £1.346.400 (ayunan £0,24 juta)
Lisensi £30–£50/bln:          bersih = £1.248.000 … £1.200.000 (ayunan £48rb)
```

Analisis-ambang: manfaat bersih mencapai nol pada sekitar **2,1 menit/hari** yang dihemat. Keputusannya tidak-sensitif terhadap harga-lisensi dan sepenuhnya bergantung pada estimasi waktu-yang-dihemat — jadi ukurlah itu, bukan sisanya. (Dan ingat bahwa hasilnya adalah kapasitas, bukan kas — lihat [pelepasan-kas vs bukan-pelepasan-kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/).)

## Hubungan dengan Rekayasa Perangkat Lunak

Insinyur sudah melakukan insting ini sebagai "bagaimana jika kita salah tentang X?" — DSA hanya membuatnya sistematis dan terlihat. Tempatkan diagram tornado di setiap proposal perkakas, rencana kapasitas, dan analisis bangun-vs-beli. Ia mengubah argumen tentang firasat siapa yang benar menjadi kesepakatan tentang parameter mana yang harus diukur — sering melalui pilot, yang nilainya sendiri dapat ditetapkan-harga (lihat [nilai harapan dari informasi sempurna](../nilai-harapan-dari-informasi-sempurna/)).

## Jebakan

- **Rentang yang dipilih untuk menyanjung**: ±10% di sekitar setiap input terlepas dari ketidakpastian aktual. Estimasi waktu-yang-dihemat layak ±80%; harga-lisensi ±10%.
- **Satu-per-satu melewatkan interaksi** — parameter yang berkorelasi (keterserapan dan waktu-yang-dihemat) memerlukan analisis dua-arah atau [analisis sensitivitas probabilistik](../analisis-sensitivitas-probabilistik/) penuh.
- **Melakukan analisis dan mengabaikannya**: jika tornado mengatakan kasusnya bergantung pada satu angka-lunak, langkah berikutnya adalah pengukuran, bukan persetujuan.

## Sumber

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
