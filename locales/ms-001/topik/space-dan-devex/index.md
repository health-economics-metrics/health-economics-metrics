# SPACE dan DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) dan DevEx (gelung maklum balas, beban kognitif, keadaan aliran) ialah kerangka untuk mengukur produktiviti pembangun **secara pelbagai dimensi** — jawapan bidang ini kepada penemuan bahawa tiada satu metrik yang bertahan bila bertemu realiti.

## Mengapa ia penting

Kedua-dua kerangka mengekodkan pengajaran sama yang diperoleh dengan susah payah oleh penyelidikan hasil kesihatan beberapa dekad lebih awal: nombor tunggal (baris kod; tekanan darah) salah mewakili realiti pelbagai dimensi, dan mengoptimumkannya menghasilkan permainan, bukan penambahbaikan. SPACE menetapkan menggabungkan metrik daripada sekurang-kurangnya tiga dimensi, mencampur telemetri dengan laporan kendiri — struktur sama seperti [EQ-5D](../eq-5d/) memprofil lima dimensi sebelum sebarang indeks dikira, dan mengapa [PROM](../hasil-dilaporkan-pesakit/) wujud bersama ukuran klinikal. Kepuasan/kesejahteraan juga bukan hiasan lembut: ia menyuap ekonomi [pengekalan tenaga kerja](../pengekalan-tenaga-kerja/), di mana atrisi dihargai dalam bulan gaji termuat.

## Matematiknya

Kedua-dua kerangka bukan formula; kedua-duanya reka bentuk pengukuran:

```
Peraturan SPACE: ≥ 3 dimensi, ≥ 1 metrik persepsi (tinjauan) + ≥ 1 metrik sistem (telemetri)

Dimensi DevEx dan pasangan contoh:
  gelung maklum balas → tempoh CI (telemetri) + "menunggu terasa perlahan" (tinjauan)
  beban kognitif      → kebolehjumpaan dokumen, masa orientasi + usaha dirasai
  keadaan aliran      → ketumpatan mesyuarat/gangguan + fokus dilaporkan sendiri

Indeks terbitan (cth., DXI DX) memetakan komposit tinjauan kepada masa:
tuntutan vendor ≈ 13 min/pembangun/minggu setiap mata indeks — anggap sebagai
penanda aras vendor untuk disahkan secara tempatan, bukan pemalar alam.
```

## Contoh penyelesaian

Pasukan platform membenarkan pelaburan DevEx (percepatan CI + rombakan dokumen) untuk 300 pembangun:

```
Garis asas: CI p75 = 28 min; tinjauan "saya hilang fokus menunggu binaan": 62% bersetuju
Selepas:    CI p75 = 9 min;  persetujuan 24%

Masa dituntut semula (telemetri): 6 binaan/hari × 19 min × 0.4 boleh guna = ~45 min/hari/pembangun
Nilai kapasiti: 300 × 0.75j × 220h × £60/j ≈ £2.97J/tahun (tidak melepaskan tunai —
lihat cash-releasing-vs-non-cash-releasing.md; faktor kebolehgunaan 0.4 ialah
diskaun pemecahan daripada practitioner-time.md)
Pengesahan persepsi ialah yang menjadikan tuntutan telemetri boleh dipercayai — salah satu
sahaja boleh dipermainkan; bersama, ia bertriangulasi.
```

## Kaitan dengan kejuruteraan perisian

Dokumen ini *ialah* sisi perisian; pemindahan berjalan ke arah ekonomi kesihatan. "Tahun jurutera terlaras kualiti" — masa berpemberat indeks pengalaman piawai — ialah binaan [QALY](../tahun-hayat-terlaras-kualiti/) yang diterapkan pada kapasiti kejuruteraan, dan ia mewarisi peraturan QALY: pemberat daripada instrumen yang disahkan (tinjauan konsisten, pemarkahan diterbitkan), dielisit *sebelum* perbandingan, tidak pernah ditala untuk memuji alat pilihan. Pengajaran [SF-6D lwn EQ-5D](../eq-5d/) juga terpakai: instrumen berbeza memberi nombor berbeza secara sistematik, jadi jangan sekali-kali membandingkan indeks DevEx merentas instrumen vendor.

## Perangkap

- **Keruntuhan satu-metrik**: papan pemuka yang mengurangkan SPACE kepada satu skor mencipta semula masalah yang kerangka wujud untuk cegah.
- **Metrik aktiviti sebagai hasil**: commit, PR dan mata cerita ialah Aktiviti — dimensi yang SPACE secara jelas amaran paling mudah dipermainkan (analogi kesihatan: mengira prosedur, bukan pemulihan).
- **Keletihan tinjauan dan kesan Hawthorne**: instrumen ringan suku tahunan mengalahkan soal siasat mingguan.
- **Membandingkan pasukan**: seperti jadual liga hospital tanpa pelarasan campuran-kes — perbezaan konteks (domain, beban warisan, on-call) mendominasi.

## Sumber

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
