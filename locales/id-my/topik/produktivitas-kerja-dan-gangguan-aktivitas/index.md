# Produktivitas Kerja dan Gangguan Aktivitas (WPAI)

WPAI adalah kuesioner laporan mandiri yang tervalidasi (Reilly, Zbrozek, Dasbach, 1993) yang mengukur seberapa besar masalah kesihatan memengaruhi pekerjaan berbayar dan aktivitas harian, biasanya dalam 7 hari terakhir. Ia memisahkan kerugian menjadi *absen* (absenteeism) — waktu kerja yang hilang secara harfiah — dan *hadir namun kinerja menurun* (presenteeism) — produktivitas yang berkurang saat secara fisik berada di tempat kerja, di mana yang kedua biasanya merupakan komponen biaya yang lebih besar dan lebih tersembunyi.

## Mengapa ini penting

Penghitungan hari cuti sakit yang sederhana hanya melihat ketidakhadiran. Seorang doktor atau pekerja pengetahuan yang tidak pernah mengambil cuti tetapi bekerja pada 60% kapasitas kerana kondisi kronis tidak menambahkan apa pun ke catatan absensi namun tetap menimbulkan kehilangan produktivitas yang besar dan nyata — WPAI dirancang justru untuk menampakkan biaya tak terlihat itu. Kerana ia instrumen tervalidasi, bukan survei sekali buat, skornya dapat dipakai dalam paket bukti [hasil yang dilaporkan pesakit](../hasil-yang-dilaporkan-pesakit/) dan studi biaya penyakit tanpa penilai perlu memvalidasi ulang ukurannya. Sebagai instrumen laporan mandiri, ia sendiri merupakan bentuk PROM, yang dibedakan terutama oleh fokusnya pada pekerjaan dan aktivitas alih-alih gejala atau kualiti hidup.

## Matematika

```
Absen % = jam_hilang_karena_kesehatan / (jam_hilang_karena_kesehatan + jam_bekerja) × 100

Hadir_namun_kinerja_menurun % = gangguan laporan mandiri 0–10 saat bekerja × 10
                  (diambil langsung dari kuesioner, tidak diturunkan di sini)

Total gangguan kerja % =
    Absen% + (1 − Absen%/100) × Hadir_menurun%
    (menggabungkan kedua bagian agar jumlahnya tak pernah melampaui 100%)

biaya_produktivitas = Total_gangguan_kerja% / 100 × pendapatan_dalam_periode
```

Rumus gangguan total sengaja bukan jumlah sederhana: menjumlahkan dua peratusan secara langsung dapat melampaui 100%, jadi hadir-namun-kinerja-menurun diterapkan hanya pada bagian *sisa* (tidak absen) dari waktu kerja.

## Contoh yang diselesaikan

Seorang pekerja yang mengalami migrain dijadwalkan bekerja 40 jam seminggu tetapi melewatkan 4 jam:

```
jam_hilang = 4, jam_bekerja = 36
Absen% = 4 / (4 + 36) × 100 = 10%
```

Ia menilai secara terpisah dampak produktivitas saat bekerja dalam kuesioner WPAI sebesar 3 dari 10, yaitu `Hadir_menurun% = 30%` (langkah ini adalah jawaban mentah kuesioner, bukan diturunkan dari angka lain):

```
Total_gangguan_kerja% = 10 + (1 − 10/100) × 30
                      = 10 + 0.9 × 30
                      = 10 + 27
                      = 37%
```

Pada minggu kerja 5 hari dengan pendapatan £800 (£160/hari):

```
biaya_produktivitas = 37/100 × 800 = £296
```

Perhatikan bahwa penghitungan hari cuti sakit yang naif hanya akan mencatat 4 jam yang hilang (10%) — komponen hadir-namun-kinerja-menurun hampir melipatgandakan tiga gangguan sebenarnya ketika diperhitungkan.

## Hubungan dengan rekayasa perisian

Ini terpetakan langsung ke metrik kesihatan tim rekayasa:

- **Absen** adalah cuti sakit dan cuti berbayar — bagian yang terlihat, sudah dilacak, dan mudah.
- **Hadir namun kinerja menurun** adalah insinyur yang kelelahan atau capek akibat peralihan konteks, hadir di setiap stand-up tetapi bekerja dengan kapasitas berkurang — biasanya biaya yang lebih besar dan lebih tersembunyi, tak terlihat dalam data jumlah orang atau kehadiran. Ia justru muncul sebagai throughput yang menurun dalam [DORA](../metrik-dora/) dan [metrik alur](../metrik-alur/), atau penyelesaian yang lebih lambat atas [utang teknis](../utang-teknis/) yang "bunga"-nya memperburuk gangguan.
- Pelajaran rekayasanya sama dengan pelajaran klinis: mengukur hanya absen lalu menyebutnya "kehilangan produktivitas" meremehkan biaya sebenarnya secara sistematis, kerana ia melewatkan semua orang yang hadir tetapi terganggu.

## Jebakan

- **Bias ingatan dalam laporan mandiri.** Jendela ingatan 7 hari tunduk pada distorsi pelaporan yang sama seperti penilaian diri retrospektif lainnya.
- **Memperlakukan skala 0–10 sebagai pengukuran fisik yang sebenarnya.** Ia skala ordinal yang diturunkan dari penilaian diri, bukan besaran fisik yang tervalidasi — memperlakukan selisih padanya sebagai linear atau skala interval secara ketat adalah kemudahan pemodelan, bukan fakta fisik yang tervalidasi.
- **Menggabungkan skor lintas varian WPAI.** WPAI memiliki beberapa versi khusus keadaan — WPAI:GH (kesihatan umum), WPAI:SHP (masalah kesihatan tertentu), dan varian khusus penyakit — dan skor dari varian berbeda tidak boleh digabungkan atau dibandingkan tanpa memeriksa lebih dulu bahwa itu versi instrumen yang sama.

## Sumber

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- Dokumentasi instrumen WPAI, Reilly Associates — rujukan penilaian resmi. <https://www.reillyassociates.net/>
