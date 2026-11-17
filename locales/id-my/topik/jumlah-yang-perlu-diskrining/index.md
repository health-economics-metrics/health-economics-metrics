# Jumlah yang Perlu Diskrining (NNS)

NNS adalah jumlah orang yang harus diskrining — bukan hanya diobati — untuk mencegah **satu** hasil merugikan dalam periode tindak lanjut tertentu, dengan memperhitungkan risiko dasar populasi dan penurunan risiko relatif yang dicapai oleh deteksi dan pengobatan dini. Ia adalah padanan NNT pada kadar program skrining: NNT bertanya berapa banyak yang harus *diobati* untuk mencegah satu hasil; NNS bertanya berapa banyak orang yang harus menempuh seluruh jalur *skrining-lalu-pengobatan* untuk sampai ke sana.

## Mengapa ini penting

Rembold memperkenalkan NNS pada 1998 justru agar program skrining dapat dibandingkan pada dasar yang sama dengan pengobatan, kerana angka penurunan risiko relatif tajuk sebuah uji skrining menyembunyikan dua hal yang tidak disembunyikan oleh pengobatan: risiko dasar populasi yang benar-benar diundang untuk skrining, dan kenyataan bahwa setiap orang yang diskrining menanggung biaya pengujian dan beban positif palsu, bukan hanya minoritas yang kemudian diuntungkan. Gerbang efektivitas biaya Komite Skrining Nasional Inggris Raya (lihat [ekonomi skrining](../ekonomi-skrining/)) dibangun di atas pembedaan ini — program skrining dengan penurunan risiko relatif yang mengesankan pada populasi berisiko dasar rendah masih dapat memiliki NNS ribuan, dan saat itu biaya program per hasil yang dicegah menjadi pertanyaan sesungguhnya.

## Matematika

```
NNS = 1 / (risiko_dasar × penurunan_risiko_relatif)

risiko_dasar               = probabilitas hasil pada populasi yang diskrining
                             selama periode tindak lanjut (0–1)
penurunan_risiko_relatif   = penurunan risiko proporsional yang dicapai
                             pengobatan dini yang dimungkinkan skrining (0–1)

biaya_program_per_hasil_tercegah = NNS × biaya_per_skrining
```

Bandingkan langsung dengan [NNT](../jumlah-yang-perlu-dirawat/): NNS melipat efektivitas seluruh corong skrining → diagnosis → pengobatan menjadi satu angka, sedangkan NNT mengasumsikan pesakit sudah terdiagnosis dan telah memulai pengobatan.

## Contoh yang diselesaikan

Populasi sasaran sebuah program skrining memiliki risiko dasar kejadian 2% selama periode studi (`risiko_dasar = 0,02`) dan deteksi dini mencapai penurunan risiko relatif 25% (`penurunan_risiko_relatif = 0,25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

Harus mengskrining 200 orang untuk mencegah satu hasil.

Dengan £50 per skrining:
Biaya program per hasil tercegah = 200 × £50 = £10,000
```

£10.000 itu perlu ditimbang terhadap biaya hasil itu sendiri dan QALY yang akan hilang — perbandingan yang sama yang dilakukan [ekonomi pencegahan](../ekonomi-pencegahan/) untuk program pencegahan pada umumnya.

## Hubungan dengan rekayasa perisian

NNS adalah "berapa banyak pengguna, peristiwa, atau permintaan yang harus melewati alur deteksi atau triase untuk menangkap satu positif sejati yang layak ditindaklanjuti" — langsung relevan untuk sistem pemantauan dan triase berbasis peringatan, di mana kondisi sasaran yang langka menggelembungkan NNS dengan cara yang sama ia meruntuhkan nilai prediktif positif (lihat [ekonomi skrining](../ekonomi-skrining/) dan [evaluasi AI klinis](../evaluasi-ai-klinis/)). Aturan pemantauan yang harus memproses 200 peristiwa untuk setiap tangkapan nyata hanya layak dijalankan jika tangkapan itu bernilai setidaknya 200 kali biaya triase per peristiwa — aritmetika yang sama dengan contoh kesihatan di atas.

## Jebakan

- **Mengabaikan ketergantungan pada risiko dasar**: uji atau program skrining yang sama memiliki NNS — dan efektivitas biaya — yang sangat berbeda pada populasi berisiko tinggi dan rendah. Jangan pernah menyajikan NNS tanpa menyebut populasi yang dihitung.
- **Salah membaca penyebut**: NNS menghitung orang yang *diskrining*, bukan yang positif atau memulai pengobatan — ia sudah mencakup efektivitas seluruh corong, jadi jangan pernah membandingkannya dengan ukuran yang hanya menghitung yang positif.
- **Membandingkan lintas periode tindak lanjut**: periode tindak lanjut yang lebih pendek biasanya menggelembungkan NNS kerana lebih sedikit peristiwa teramati dalam jendela itu. Angka NNS hanya dapat dibandingkan bila dihitung untuk durasi tindak lanjut yang sama.

## Sumber

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
