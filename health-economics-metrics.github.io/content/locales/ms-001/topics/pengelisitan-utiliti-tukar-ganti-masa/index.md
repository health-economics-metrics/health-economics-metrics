# Pengelisitan Utiliti Tukar Ganti Masa (TTO)

TTO ialah kaedah piawai untuk mengelisit nilai utiliti keadaan kesihatan terus daripada responden, dan bukan mereka-rekanya. Ia salah satu kaedah elisitasi — bersama pertaruhan piawai dan eksperimen pilihan diskret — yang menghasilkan set nilai di sebalik instrumen seperti [EQ-5D](../eq-5d/), dan oleh itu di sebalik kebanyakan pengiraan [QALY](../tahun-hayat-terlaras-kualiti/) di hiliran.

## Mengapa ia penting

Setiap pemberat utiliti yang menyuap pengiraan QALY mesti datang dari suatu tempat. TTO ialah caranya: bagi keadaan yang dianggap lebih baik daripada mati, responden ditanya berapa tahun `X` dalam kesihatan penuh yang mereka anggap setara dengan `T` tahun dalam keadaan terjejas (`X < T`); utilitinya ialah `X / T`. Bagi keadaan yang sesetengah responden anggap lebih buruk daripada mati, formula piawai gagal (ia tidak dapat mewakili utiliti di bawah sifar dengan bersih), jadi TTO lanjutan terpakai. Jurutera perisian atau penganalisis yang menganggap pemberat utiliti sebagai input diberi, tanpa mengetahui ia memerlukan protokol elisitasi yang disahkan untuk menghasilkannya, ialah satu langkah dari nombor yang tidak dapat dipertahankan jika dicabar.

## Matematiknya

```
TTO piawai (keadaan lebih baik daripada mati):
  utiliti = masa_dalam_kesihatan_penuh / masa_dalam_keadaan_terjejas

TTO lanjutan (keadaan lebih buruk daripada mati):
  utiliti = -masa_ditukar_untuk_mati / (jumlah_tempoh - masa_ditukar_untuk_mati)
```

`masa_dalam_kesihatan_penuh` / `masa_dalam_keadaan_terjejas` — tahun `X` dalam kesihatan penuh yang dinilai setara dengan `T` tahun dalam keadaan terjejas. `masa_ditukar_untuk_mati` / `jumlah_tempoh` — dalam rumusan lebih-buruk-daripada-mati, `a` tahun daripada hayat berbaki `T` tahun yang responden sanggup tukar untuk mati serta-merta, lebih menyukai `T − a` tahun dalam kesihatan penuh diikuti kematian berbanding `T` tahun dalam keadaan lebih-buruk-daripada-mati. Hasilnya negatif, bersauh supaya mati = 0.

## Contoh penyelesaian

**Piawai**: responden berada dalam keadaan terjejas selama 10 tahun dan tidak berpihak dengan 7 tahun dalam kesihatan penuh: utiliti = 7 / 10 = **0.7**.

**Lebih buruk daripada mati**: dalam hayat berbaki 10 tahun, responden sanggup menukar 2 tahun untuk mati serta-merta — mereka lebih suka 8 tahun dalam kesihatan penuh diikuti kematian berbanding 10 tahun dalam keadaan lebih-buruk-daripada-mati: utiliti = −2 / (10 − 2) = −2 / 8 = **−0.25**.

## Kaitan dengan kejuruteraan perisian

Perkara sama yang dihadapi tinjauan DevEx atau penglibatan apabila meminta orang menilai sesuatu pada skala 0–10 yang tidak dikaji terpakai di sini secara songsang: TTO wujud tepat kerana "minta sahaja orang menilainya" bukan kaedah elisitasi yang disahkan dengan sendirinya. Sebelum membina indeks komposit — skor DevEx, indeks penglibatan, skala keletihan — di atas nombor yang dinilai sendiri, tanya apa yang mengelisitnya dan sama ada kaedah itu disahkan, soalan sama yang ditanya ahli ekonomi kesihatan tentang pemberat utiliti sebelum ia masuk ke dalam QALY.

## Perangkap

- **Generalisasi nilai individu**: nilai TTO dielisit daripada *sampel* orang awam (atau pesakit), bukan individu yang penjagaannya diputuskan — menggunakan nilai TTO seorang responden seolah-olah ia umum ialah ralat persampelan.
- **Rumusan salah untuk keadaan**: formula TTO piawai mengandaikan keadaan secara jelas lebih baik daripada mati; menerapkannya pada keadaan yang sesetengah responden anggap lebih buruk daripada mati, tanpa bertukar kepada rumusan lanjutan, senyap-senyap menghasilkan utiliti salah (positif).
- **Tempoh tidak setanding**: nilai TTO yang dielisit menggunakan tempoh hayat berbaki `T` berbeza bagi perbandingan lebih-buruk-daripada-mati tidak boleh dibandingkan terus tanpa menyemak reka bentuk kajian menetapkan `T` malar.

## Sumber

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
