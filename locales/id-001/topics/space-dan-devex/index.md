# SPACE dan DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) dan DevEx (loop umpan-balik, beban kognitif, kondisi-alur) adalah kerangka untuk mengukur produktivitas pengembang **secara multi-dimensi** — jawaban bidang ini terhadap penemuan bahwa tidak ada metrik tunggal yang bertahan kontak dengan realitas.

## Mengapa Ini Penting

Kedua kerangka mengkodekan pelajaran yang sama yang dipelajari susah-payah oleh penelitian hasil-kesehatan puluhan tahun lebih awal: satu angka (baris kode; tekanan darah) salah-menggambarkan realitas multi-dimensi, dan mengoptimalkannya menghasilkan manipulasi, bukan perbaikan. SPACE meresepkan menggabungkan metrik dari setidaknya tiga dimensi, mencampur telemetri dengan laporan-mandiri — secara struktural identik dengan bagaimana [EQ-5D](../eq-5d/) memprofilkan lima dimensi sebelum indeks apa pun dihitung, dan mengapa [PROM](../hasil-yang-dilaporkan-pasien/) ada di samping ukuran klinis. Kepuasan/kesejahteraan juga bukan hiasan-lunak: ia memberi-makan ekonomi [retensi-tenaga-kerja](../retensi-tenaga-kerja/), di mana atrisi ditetapkan-harga dalam bulan-bulan gaji-berbobot.

## Perhitungan

Tidak ada kerangka yang merupakan rumus; keduanya adalah desain pengukuran:

```
Aturan SPACE: ≥ 3 dimensi, ≥ 1 metrik perseptual (survei) + ≥ 1 metrik sistem (telemetri)

Dimensi DevEx dan contoh pemasangan:
  loop umpan-balik  → durasi CI (telemetri) + "menunggu terasa lambat" (survei)
  beban kognitif    → kemudahan-ditemukan dokumentasi, waktu orientasi + upaya yang dirasakan
  kondisi-alur      → kepadatan rapat/interupsi + fokus laporan-mandiri

Indeks turunan (mis., DXI dari DX) memetakan komposit-survei ke waktu:
klaim vendor ≈ 13 menit/pengembang/minggu per poin-indeks — perlakukan sebagai
tolok-ukur vendor yang divalidasi secara lokal, bukan konstanta alam.
```

## Contoh yang Diselesaikan

Sebuah tim platform membenarkan investasi DevEx (percepatan CI + revisi dokumentasi) untuk 300 pengembang:

```
Dasar: p75 CI = 28 menit; survei "saya kehilangan fokus menunggu build": 62% setuju
Setelah: p75 CI = 9 menit;  persetujuan 24%

Waktu direbut-kembali (telemetri): 6 build/hari × 19 menit × 0,4 dapat-digunakan = ~45 menit/hari/pengembang
Nilai kapasitas: 300 × 0,75j × 220h × £60/j ≈ £2,97 juta/tahun (bukan-pelepas-kas —
lihat cash-releasing-vs-non-cash-releasing.md; faktor-dapat-digunakan 0,4 adalah diskon-
fragmentasi dari practitioner-time.md)
Korroborasi perseptual adalah apa yang membuat klaim-telemetri kredibel — salah satu
sendirian dapat dimanipulasi; bersama mereka melakukan triangulasi.
```

## Hubungan dengan Rekayasa Perangkat Lunak

Dokumen ini *adalah* sisi perangkat-lunak; transfernya berjalan ke arah ekonomi kesehatan. "Tahun-insinyur yang disesuaikan-kualitas" — waktu dibobotkan oleh indeks pengalaman terstandarisasi — adalah konstruksi [QALY](../tahun-kehidupan-yang-disesuaikan-kualitas/) yang diterapkan pada kapasitas rekayasa, dan ia mewarisi aturan-aturan QALY: bobot dari instrumen tervalidasi (survei konsisten, penilaian dipublikasikan), diperoleh *sebelum* perbandingan, tidak pernah disetel untuk menyanjung alat favorit. Pelajaran [SF-6D vs EQ-5D](../eq-5d/) juga berlaku: instrumen berbeda memberikan angka yang berbeda secara sistematis, jadi jangan pernah membandingkan indeks DevEx antar instrumen dari vendor berbeda.

## Jebakan

- **Kolaps metrik-tunggal**: dasbor yang mereduksi SPACE menjadi satu skor menciptakan-kembali masalah yang ada untuk dicegah kerangka ini.
- **Metrik aktivitas sebagai hasil**: commit, PR, dan story point adalah Aktivitas — dimensi yang secara eksplisit diperingatkan SPACE paling-dapat-dimanipulasi (analog kesehatan: menghitung prosedur, bukan pemulihan).
- **Kelelahan survei dan efek Hawthorne**: instrumen sentuhan-ringan triwulanan mengalahkan interogasi mingguan.
- **Membandingkan tim**: seperti tabel-liga rumah-sakit tanpa penyesuaian campuran-kasus — perbedaan konteks (domain, beban warisan, on-call) mendominasi.

## Sumber

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
