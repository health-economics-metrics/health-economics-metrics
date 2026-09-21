# Rujukan untuk Perawatan (RTT)

Rujukan untuk perawatan adalah waktu yang berlalu dari rujukan dokter-umum hingga dimulainya perawatan yang dipimpin-konsultan. Konstitusi NHS menetapkan standarnya: **92% pasien seharusnya memulai perawatan dalam 18 minggu**. RTT adalah metrik operasional yang paling terlihat-secara-politik tunggal di NHS Inggris.

## Mengapa Ini Penting

Trust yang melewatkan target RTT menghadapi pengawasan regulasi, intervensi, dan kerusakan-reputasi; daftar-tunggu nasional adalah angka halaman-depan. Setiap minggu seorang pasien menunggu adalah kesehatan yang hilang (menunggu dalam kondisi-kesehatan yang lebih buruk — lihat aritmatika QALY di bawah) dan sering biaya yang diperoleh (kondisi memburuk; lihat [intervensi lebih awal](../intervensi-lebih-awal/)). Perangkat lunak yang menghemat waktu di mana pun dalam jalur rujukan-untuk-perawatan — triase, waktu-penyelesaian diagnostik, kapasitas klinik, penjadwalan — secara langsung memitigasi konsekuensi operasional dan finansial dari gagal memenuhi standarnya, itulah sebabnya dampak RTT adalah garis-manfaat kelas-satu dalam kasus bisnis digital NHS.

## Perhitungan

```
Kinerja RTT = pasien dirawat dalam 18 minggu / total dirawat × 100
Biaya kesehatan waktu-tunggu per pasien = durasi tunggu × (utilitas_dirawat − utilitas_menunggu)

Pandangan jalur: RTT = Σ durasi tahap (triase rujukan → janji-temu pertama →
diagnostik → keputusan → perawatan) — perbaiki antrean terpanjang, bukan
tahap tersibuk (lihat flow-metrics.md).
```

## Contoh yang Diselesaikan

Sebuah spesialisasi merawat 5.000 pasien-jalur/tahun; tunggu rata-rata 24 minggu; utilitas-tunggu 0,68 vs dirawat 0,80.

Triase digital ditambah protokol langsung-ke-tes menghilangkan 5 minggu antrean murni:

```
Keuntungan QALY = 5.000 × (5/52) × (0,80 − 0,68) = 57,7 QALY/tahun
Termoneterisasi pada £20.000–£30.000/QALY (lihat willingness-to-pay-thresholds.md):
  ≈ £1,15 juta–£1,73 juta/tahun nilai kesehatan
```

— ditambah trust berpindah dari melanggar menjadi memenuhi standar 18-minggu, yang memiliki nilai tata-kelola yang tidak sepenuhnya ditangkap spreadsheet mana pun.

## Hubungan dengan Rekayasa Perangkat Lunak

RTT adalah **metrik waktu-tunggu atas antrean multi-tahap** — versi rumah-sakit dari waktu-tunggu commit-ke-produksi (lihat [metrik DORA](../metrik-dora/)). Metode perbaikannya identik: instrumenkan setiap tahap, temukan di mana waktu-kalender terkumpul (hampir selalu serah-terima dan antrean, bukan pekerjaan klinis), dan hilangkan status-tunggu. Kemenangan perangkat-lunak tipikal: e-triase yang merutekan rujukan dalam hitungan-jam alih-alih batch mingguan, dorongan hasil-diagnostik alih-alih janji-temu tindak-lanjut, dan kriteria langsung-ke-tes otomatis. Nilai perbaikan dengan [biaya keterlambatan](../biaya-keterlambatan/) dinyatakan dalam QALY/minggu.

## Jebakan

- **Memperbaiki tahap yang bukan kendala** — memotong tunggu-janji-temu-pertama sementara antrean diagnostik tumbuh hanya memindahkan penumpukan.
- **Manipulasi**: reset-jalur dan jeda-jam dapat memperbaiki RTT yang dilaporkan tanpa merawat siapa pun lebih cepat; audit distribusi yang mendasarinya.
- **Mengklaim seluruh perbaikan-jalur** untuk satu alat ketika beberapa perubahan mendarat bersamaan — atribusi membutuhkan pembanding.

## Sumber

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
