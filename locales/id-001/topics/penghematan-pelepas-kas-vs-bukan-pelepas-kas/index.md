# Penghematan Pelepas-Kas vs Bukan Pelepas-Kas

Penghematan pelepas-kas mengurangi pengeluaran aktual — garis anggaran menjadi lebih kecil. Penghematan bukan-pelepas-kas membebaskan waktu atau kapasitas yang *digunakan kembali* alih-alih dibank. Direktur keuangan sistem kesehatan memperlakukan ini sebagai spesies berbeda, dan Anda juga harus begitu.

## Mengapa Ini Penting

Ini adalah ujian kejujuran paling tajam yang diterapkan pada kasus bisnis digital apa pun dalam sistem kesehatan nasional. Kerangka manfaat NHS secara eksplisit mengkategorikan setiap manfaat yang diklaim sebagai pelepas-kas, bukan-pelepas-kas, atau kualitatif. Sebagian besar "penghematan" kesehatan digital — menit klinisi yang dihemat per pasien, dokumentasi yang lebih cepat — bukan pelepas-kas: berharga, tetapi tidak mengurangi defisit. CFO trust yang menghadapi kesenjangan pendanaan hanya dapat menghabiskan kas. Lihat juga [penghematan pelepas-kas keras](../penghematan-pelepas-kas-keras-pertahanan-defisit/).

## Perhitungan

```
Penghematan pelepas-kas   = garis anggaran sebelum − garis anggaran sesudah
                          (harus dapat diekstraksi: kontrak yang dibatalkan, bangsal ditutup,
                           pengeluaran agensi berkurang, pembelian dihindari)

Nilai bukan-pelepas-kas = waktu yang dibebaskan × biaya unit waktu tersebut
                          (dinilai pada biaya peluang; uangnya TIDAK dapat diekstraksi)
```

Peristiwa fisik yang sama (satu jam yang dihemat) jatuh ke salah satu kategori tergantung pada apa yang terjadi selanjutnya:

```
jam yang dihemat → shift lembur/agensi dibatalkan        → pelepas-kas
jam yang dihemat → klinisi melihat satu pasien tunggu lagi → bukan-pelepas-kas (kapasitas)
jam yang dihemat → terserap ke kelonggaran, tidak ada yang berubah → tidak ada manfaat sama sekali
```

## Contoh yang Diselesaikan

Perangkat lunak menghemat masing-masing dari 100 perawat 30 menit per shift. Itu adalah 100 × 0,5 × 5 shift/minggu × 46 minggu ≈ 11.500 jam/tahun. Pada biaya pemberi-kerja Band 5 ~£25/jam, judul yang menggoda adalah £287.500/tahun.

Pembagian jujurnya:

- 20% waktu jatuh di mana bangsal saat ini membayar premium bank/agensi untuk menutupi kelebihan dokumentasi: 2.300 jam × £35 tarif agensi = **£80.500 pelepas-kas** (shift yang benar-benar tidak dipesan).
- 60% dialokasikan kembali ke perawatan pasien langsung: 6.900 jam × £25 = **£172.500 kapasitas bukan-pelepas-kas** — nilai nyata, dilaporkan terpisah, tidak pernah disebut "penghematan".
- 20% menghilang ke istirahat dan gangguan: **£0**. Mengklaimnya akan menjadi fiksi.

Kasus bisnis yang menyajikan £80,5rb kas + £172,5rb kapasitas kredibel. Yang menyajikan £287,5rb "penghematan" ditolak oleh akuntan pertama yang membacanya.

## Hubungan dengan Rekayasa Perangkat Lunak

Logika identik mengatur ROI asisten pengkodean AI: "30 menit per pengembang per hari" adalah kapasitas bukan-pelepas-kas kecuali jumlah staf, pengeluaran kontraktor, atau biaya cloud benar-benar turun. Laporkan kategori secara terpisah:

- Pelepas-kas: keterlibatan kontraktor dibatalkan, lisensi perkakas dinonaktifkan, pengeluaran cloud berkurang.
- Kapasitas: fitur dikirim lebih cepat (nilai melalui [biaya keterlambatan](../biaya-keterlambatan/)), backlog terbakar.
- Tidak ada apa-apa: menit yang dihemat yang terfragmentasi menjadi pergantian konteks.

Juga lacak *ke mana sebenarnya waktu yang dibebaskan pergi* — realisasi manfaat ([benefits-realization.md](../realisasi-manfaat/)) ada karena klaim kenaikan kapasitas sering menguap saat diaudit.

## Jebakan

- **Mengalikan menit dengan gaji dan menyebutnya penghematan** — dosa kanonik.
- **Menilai waktu yang dibebaskan pada biaya rata-rata berbobot** ketika penggunaan marginal waktu tersebut bernilai rendah — lihat [biaya marginal vs rata-rata](../biaya-marginal-vs-rata-rata/).
- **Menghitung jam yang sama dua kali**: sebagai kas (shift dihindari) dan sebagai kapasitas (pasien tambahan dilihat).

## Sumber

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
