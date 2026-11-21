# Kemerosotan Produktiviti Kerja dan Aktiviti (WPAI)

WPAI ialah soal selidik laporan-kendiri yang disahkan (Reilly, Zbrozek, Dasbach, 1993) yang mengukur seberapa banyak masalah kesihatan menjejaskan kerja berbayar dan aktiviti harian, biasanya sepanjang 7 hari lepas. Ia memecahkan kehilangan kepada *ketidakhadiran* — masa kerja yang secara literal terlepas — dan *presenteeisme* — produktiviti berkurang semasa hadir bekerja secara fizikal, dan yang kedua biasanya komponen kos yang lebih besar dan lebih tersembunyi.

## Mengapa ia penting

Kiraan hari sakit mudah hanya melihat ketidakhadiran. Klinisian atau pekerja pengetahuan yang tidak pernah bercuti tetapi bekerja pada kapasiti 60% sepanjang keadaan kronik menyumbang sifar kepada daftar ketidakhadiran sambil masih menjana kehilangan produktiviti yang besar dan sebenar — WPAI direka khusus untuk mendedahkan kos tidak kelihatan itu. Kerana ia instrumen yang disahkan dan bukan tinjauan tempahan, skornya boleh digunakan dalam pakej bukti [hasil dilaporkan pesakit](../hasil-dilaporkan-pesakit/) dan kajian kos-penyakit tanpa penyemak perlu mengesahkan semula ukuran itu. Sebagai instrumen laporan-kendiri, ia sendiri satu bentuk PROM, dibezakan terutamanya oleh fokusnya pada kerja dan aktiviti dan bukan simptom atau kualiti hidup.

## Matematiknya

```
Ketidakhadiran % = jam_terlepas_kerana_kesihatan / (jam_terlepas_kerana_kesihatan + jam_bekerja) × 100

Presenteeisme %  = kemerosotan dinilai-sendiri 0–10 semasa bekerja, × 10
                   (dielisit terus melalui soal selidik, tidak diterbitkan di sini)

Kemerosotan Kerja Keseluruhan % =
    Ketidakhadiran% + (1 − Ketidakhadiran%/100) × Presenteeisme%
    (menggabungkan kedua-duanya supaya jumlah tidak boleh melebihi 100%)

Kos produktiviti = Kemerosotan Kerja Keseluruhan% / 100 × pendapatan_tempoh
```

Formula kemerosotan keseluruhan sengaja bukan hasil tambah mudah: menambah kedua-dua peratusan terus boleh melebihi 100%, jadi presenteeisme hanya digunakan pada bahagian *berbaki* (tidak-tidak hadir) masa kerja.

## Contoh penyelesaian

Pekerja dengan migrain melaporkan dijadualkan untuk minggu 40 jam tetapi terlepas 4 jam daripadanya:

```
jam_terlepas = 4, jam_bekerja = 36
Ketidakhadiran% = 4 / (4 + 36) × 100 = 10%
```

Mereka secara berasingan menilai sendiri impak produktiviti semasa bekerja sebagai 3 daripada 10 pada soal selidik WPAI, iaitu `Presenteeisme% = 30%` (langkah ini jawapan soal selidik mentah, bukan diterbitkan daripada nombor lain):

```
Kemerosotan Kerja Keseluruhan% = 10 + (1 − 10/100) × 30
                                = 10 + 0.9 × 30
                                = 10 + 27
                                = 37%
```

Sepanjang minggu 5 hari berpendapatan £800 (£160/hari):

```
Kos produktiviti = 37/100 × 800 = £296
```

Perhatikan bahawa kiraan hari sakit naif hanya akan merekodkan 4 jam (10%) yang terlepas — komponen presenteeisme hampir melipat tigakan kemerosotan sebenar sebaik dikira.

## Kaitan dengan kejuruteraan perisian

Ini terpeta terus kepada metrik kesihatan pasukan kejuruteraan:

- **Ketidakhadiran** ialah cuti sakit dan PTO — kelihatan, sudah dijejak, dan bahagian mudah.
- **Presenteeisme** ialah jurutera yang keletihan atau terbeban pertukaran-konteks yang hadir dalam setiap stand-up sambil beroperasi pada kapasiti berkurang — biasanya kos lebih besar dan lebih tersembunyi, dan tidak kelihatan kepada data bilangan kakitangan atau kehadiran. Ia muncul sebagai daya pemprosesan berkurang dalam [DORA](../metrik-dora/) dan [metrik aliran](../metrik-aliran/), atau sebagai penyelesaian lebih perlahan bagi [hutang teknikal](../hutang-teknikal/) yang "faedah"nya menambah lagi kemerosotan.
- Pengajaran kejuruteraan sama seperti yang klinikal: mengukur ketidakhadiran sahaja dan memanggilnya "kehilangan produktiviti" memperkecilkan kos sebenar secara sistematik, kerana ia terlepas semua orang yang hadir tetapi terjejas.

## Perangkap

- **Bias ingatan laporan-kendiri.** Tetingkap ingatan 7 hari tertakluk kepada herotan pelaporan sama seperti mana-mana laporan-kendiri retrospektif.
- **Menganggap skala presenteeisme 0–10 sebagai ukuran fizikal sebenar.** Ia ordinal, dielisit melalui penilaian kendiri, bukan kuantiti fizikal yang disahkan — menganggap perbezaan padanya sebagai linear atau selang secara ketat ialah kemudahan pemodelan, bukan fakta fizikal yang disahkan.
- **Menggabungkan skor merentas varian WPAI.** WPAI mempunyai beberapa versi khusus-keadaan — WPAI:GH (kesihatan am), WPAI:SHP (masalah kesihatan tertentu), dan varian khusus-penyakit — dan skor daripada varian berbeza tidak patut digabungkan atau dibandingkan tanpa menyemak dahulu bahawa ia versi instrumen yang sama.

## Sumber

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
