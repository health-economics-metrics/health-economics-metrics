# EQ-5D

EQ-5D ialah soal selidik piawai kumpulan EuroQol untuk mengukur kualiti hidup berkaitan kesihatan. Ia instrumen yang menghasilkan pemberat utiliti di dalam kebanyakan pengiraan [QALY](../tahun-hayat-terlaras-kualiti/) — kes rujukan NICE menamakannya ukuran pilihan untuk orang dewasa.

## Mengapa ia penting

Mana-mana produk kesihatan digital yang mahu menuntut QALY memerlukan utiliti daripada instrumen yang disahkan, dan EQ-5D ialah lalai di UK dan sebahagian besar Eropah. Ia cukup pendek untuk dibenamkan dalam aplikasi (5 soalan + skala visual), bermakna produk perisian boleh mengumpul data hasil gred HTA sebagai kesan sampingan penggunaan biasa — kelebihan struktur berbanding ubat, yang memerlukan kajian khusus.

## Matematiknya

EQ-5D-5L bertanya satu soalan dalam setiap **5 dimensi** — mobiliti, jaga diri, aktiviti biasa, kesakitan/ketidakselesaan, kebimbangan/kemurungan — masing-masing dijawab pada **5 tahap** (tiada masalah … masalah melampau), serta skala analog visual 0–100 (EQ VAS).

```
Keadaan kesihatan = profil 5 digit, cth. "21221"
Indeks utiliti = set_nilai(profil)

Set nilai khusus negara, diperoleh daripada tinjauan tukar ganti masa /
pilihan diskret orang awam. Sauh: 1 = kesihatan penuh,
0 = mati; keadaan lebih teruk daripada mati negatif (lantai set UK 3L: −0.594).
```

Aritmetik QALY kemudian berjalan sebagai `tempoh × utiliti`.

## Contoh penyelesaian

Aplikasi pemulihan otot-rangka mengukur EQ-5D-5L semasa orientasi dan pada 6 bulan bagi 1,000 pengguna yang menamatkan.

```
Purata utiliti pada garis asas:  0.62
Purata utiliti pada 6 bulan:     0.71
Keuntungan berterusan (andaian) 1 tahun: (0.71 − 0.62) × 1.0 = 0.09 QALY bagi setiap pengguna
```

Berbanding perubahan kumpulan kawalan 0.03 (pemulihan semula jadi), keuntungan boleh dikaitkan ialah 0.06 QALY/pengguna. Dimonetisasi pada £20,000–£30,000/QALY: **£1,200–£1,800 nilai kesihatan bagi setiap pengguna yang menamatkan** — nombor yang menyauh rundingan harga aplikasi dengan pembayar. (Perbezaan penting klinikal minimum bagi indeks EQ-5D lazimnya dalam julat 0.03–0.08, jadi 0.06 munasabah tetapi mesti lulus perbandingan kawalan; lihat [hasil dilaporkan pesakit](../hasil-dilaporkan-pesakit/).)

## Kaitan dengan kejuruteraan perisian

- **Instrumenkannya.** EQ-5D semasa pendaftaran dan pada sela susulan ialah beberapa skrin UI; ganjarannya bukti gred HTA. Dapatkan pelesenan daripada EuroQol (diperlukan, percuma bagi sesetengah kegunaan).
- **Gunakan set nilai yang betul** bagi negara penggunaan — jawapan sama diskor berbeza di UK lwn Jerman lwn Jepun.
- **Pengajaran reka bentuk**: EQ-5D menunjukkan bagaimana tinjauan piawai kecil serta fungsi pemarkahan yang diterbitkan menghasilkan indeks tunggal yang boleh dibandingkan. Itulah corak untuk mana-mana indeks pengalaman pembangun yang boleh dipercayai juga — instrumen piawai, pemberat diterbitkan, bukan perasaan ad hoc. Lihat [SPACE dan DevEx](../space-dan-devex/).

## Perangkap

- **Sebelum/selepas tanpa pembanding** — regresi ke purata dan pemulihan semula jadi mengembungkan keuntungan naif.
- **Bias survivor**: mengukur hanya pengguna yang kekal terlibat (lihat [pengekalan dan churn](../pengekalan-dan-churn/)).
- **Mencampur versi 3L dan 5L atau set nilai** merentas kajian — nombor berbeza secara sistematik.
- **Kesan siling** dalam populasi terjejas ringan: ramai pengguna skor hampir 1.0 pada garis asas, tiada ruang untuk menunjukkan keuntungan.
- **Menganggap set nilai membenarkan dirinya sendiri**: nombor utiliti yang dikembalikan set nilai sendiri dielisit daripada orang awam melalui tinjauan tukar ganti masa (atau berasaskan pilihan berkaitan) — lihat [Pengelisitan Utiliti Tukar Ganti Masa (TTO)](../pengelisitan-utiliti-tukar-ganti-masa/) untuk caranya.

## Sumber

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
