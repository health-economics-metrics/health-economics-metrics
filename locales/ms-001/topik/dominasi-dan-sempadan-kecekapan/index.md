# Dominasi dan Sempadan Kecekapan

Sesuatu pilihan **didominasi** jika pilihan lain berharga lebih murah *dan* menyampaikan lebih banyak. **Sempadan kecekapan** ialah apa yang tinggal selepas menyingkirkan pilihan yang didominasi: set pilihan di mana mendapat lebih memerlukan pembayaran lebih.

## Mengapa ia penting

Sebelum sebarang perdebatan tentang ambang atau bajet, penilaian teknologi kesihatan terlebih dahulu menyingkirkan pilihan yang tiada siapa patut pilih. Memplot setiap pilihan pada satah kos-lwn-kesan dan melukis sempadan ialah latihan lima minit yang lazimnya membunuh separuh senarai pendek. Perbandingan inkremental ([ICER](../nisbah-kos-keberkesanan-inkremental/)) kemudian dikira hanya *sepanjang sempadan*, setiap pilihan terhadap yang tidak didominasi termurah seterusnya — tidak pernah terhadap "tiada apa-apa" apabila pilihan perantaraan yang lebih baik wujud.

## Matematiknya

```
Dominasi ketat:   A mendominasi B jika Kos_A ≤ Kos_B dan Kesan_A ≥ Kesan_B
                  (dengan sekurang-kurangnya satu ketaksamaan ketat)

Dominasi lanjutan: B disingkirkan jika campuran A dan C mencapai lebih banyak kesan
                   bagi setiap paun — dikesan apabila ICER menurun semasa anda naik
                   sepanjang sempadan. ICER sempadan yang sah mesti menaik.
```

Prosedur: susun pilihan mengikut kesan; singkirkan yang didominasi secara ketat; kira ICER berpasangan antara jiran; singkirkan sebarang pilihan yang ICER-nya melebihi pilihan lebih berkesan seterusnya (dominasi lanjutan); ulang sehingga ICER menaik secara monoton.

## Contoh penyelesaian

Empat pilihan untuk mengurangkan temujanji terlepas (kesan = temujanji dipulihkan/tahun):

```
Pilihan         Kos/thn    Dipulihkan
Tiada apa-apa   £0         0
Peringatan SMS  £20,000    2,000
Panggilan telefon £120,000 2,200
SMS + triaj AI  £90,000    3,500
```

Panggilan telefon **didominasi secara ketat** oleh SMS + triaj AI (lebih mahal, memulihkan lebih sedikit). Sempadan: tiada apa-apa → SMS → SMS + AI.

```
ICER(SMS lwn tiada apa-apa) = 20,000 / 2,000  = £10 bagi setiap temujanji dipulihkan
ICER(SMS+AI lwn SMS)        = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 bagi setiap temujanji
```

ICER menaik → sempadan sah. Pada ~£160 dijimatkan bagi setiap temujanji hospital dipulihkan (lihat [kadar tidak hadir](../kadar-tidak-hadir/)), kedua-dua langkah sempadan patut diambil; cadangan bank telefon tidak patut sampai ke jawatankuasa.

## Kaitan dengan kejuruteraan perisian

Bina carta sama untuk sebarang keputusan alat: kos setahun pada satu paksi, hasil terukur (jam dijimatkan, insiden dielakkan, penggunaan dibolehkan) pada satu lagi. Titik di atas-dan-kiri sempadan disingkirkan sebelum sesiapa berhujah tentang bajet. Ini membingkai semula pemilihan vendor daripada perdebatan senarai semak ciri kepada "anda didominasi; mesyuarat tamat." Ia juga mendedahkan corak perusahaan lazim membeli pilihan termahal untuk keuntungan marginal — sah hanya jika harga inkremental bagi setiap unit inkremental ialah yang organisasi sanggup bayar dengan sedar.

## Perangkap

- **Membandingkan semuanya dengan garis asas** dan bukan dengan pilihan seterusnya pada sempadan — ini memuji pilihan mahal dengan menyembunyikan hampir-setara yang lebih murah.
- **Skor kesan satu dimensi** yang menyembunyikan apa yang penting; jika dua hasil dikira, sama ada gabungkan secara boleh dipertahankan (lihat [analisis kos-utiliti](../analisis-kos-utiliti/)) atau tunjukkan dua sempadan.
- **Melupakan ketidakpastian**: pilihan berhampiran sempadan boleh bertukar tempat di bawah [analisis kepekaan](../analisis-kepekaan/).

## Sumber

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
