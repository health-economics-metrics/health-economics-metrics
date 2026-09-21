# Lama Tinggal (LOS)

Lama tinggal adalah jumlah hari dari admisi rumah sakit hingga pemulangan — metrik efisiensi-alur inti dari perawatan rawat-inap. Rata-rata akut Inggris berkisar 4–5 hari; setiap hari berlebih mengonsumsi tempat tidur yang langka dan mengekspos pasien pada risiko yang diperoleh-di-rumah-sakit.

## Mengapa Ini Penting

LOS menggerakkan hampir segalanya dalam ekonomi rumah-sakit-akut: kapasitas tempat tidur, throughput elektif, alur darurat, staf. Mengurangi LOS rata-rata bahkan sebagian kecil dari satu hari pada skala membebaskan kapasitas yang sangat besar (lihat [hari tempat tidur yang dihemat](../hari-tempat-tidur-yang-dihemat/)). LOS juga merupakan sinyal kualitas dalam kedua arah — terlalu panjang menyarankan kegagalan proses (diagnostik tertunda, dokumen pemulangan, tunggu perawatan-sosial); terlalu pendek dapat berarti pemulangan prematur, yang muncul kemudian sebagai [readmisi](../tingkat-readmisi/).

## Perhitungan

```
LOS (per episode)  = tanggal pemulangan − tanggal admisi
LOS rata-rata      = hari-tempat-tidur terisi / pemulangan (laporkan rata-rata DAN median;
                   LOS sangat miring-kanan oleh outlier lama-tinggal)

Perbandingan memerlukan penyesuaian campuran-kasus (usia, diagnosis, akuitas),
atau Anda sedang mengukur siapa yang diadmisi rumah sakit, bukan bagaimana kinerjanya.
```

Hukum Little menghubungkan variabel alur: `tempat tidur terisi = tingkat admisi × LOS rata-rata` — hukum yang sama yang mengatur antrean perangkat lunak (lihat [metrik alur](../metrik-alur/)).

## Contoh yang Diselesaikan

Sebuah trust mengadmisi 40 pasien medis-darurat/hari pada LOS rata-rata 6,0 hari: 240 tempat tidur terisi secara permanen (40 × 6). Perangkat lunak koordinasi-pemulangan (pelacakan tugas, otomasi farmasi-untuk-dibawa, pemesanan transportasi) memotong ekor non-klinis dari masa-tinggal sebesar 0,4 hari rata-rata.

```
Tempat tidur dibutuhkan = 40 × 5,6 = 224 → 16 tempat tidur terbebaskan secara berkelanjutan
            = 16 × 365 = 5.840 hari-tempat-tidur/tahun
```

Nilai 5.840 hari-tempat-tidur berdasarkan mekanisme (isi-ulang/tutup/kelonggaran) sesuai [hari tempat tidur yang dihemat](../hari-tempat-tidur-yang-dihemat/). Perhatikan apa yang berpindah: bukan kedokteran, melainkan *tunggu* — pasien secara medis siap; sistem masih mengerjakan dokumen. Itu adalah masalah antrean, dan perangkat lunak baik dalam masalah antrean.

## Hubungan dengan Rekayasa Perangkat Lunak

LOS adalah waktu-siklus rumah sakit, dan buku pedoman perbaikannya identik dengan pekerjaan alur-penyampaian: instrumenkan tahapannya (admisi → perawatan → secara-medis-siap → benar-benar-dipulangkan), temukan di mana waktu terkumpul (itu adalah serah-terima), hilangkan status-tunggu alih-alih menambahkan kapasitas. Kohort "secara medis siap untuk pemulangan tetapi masih menempati tempat tidur" adalah versi rumah-sakit dari PR yang disetujui tetapi belum digabungkan. Peluang perangkat-lunak langsung: orkestrasi tugas pemulangan, waktu penyelesaian diagnostik, resep-elektronik obat pemulangan, integrasi rujukan perawatan-sosial.

## Jebakan

- **Pelaporan hanya-rata-rata** — outlier mendominasi; rata-rata yang menurun dapat menyembunyikan ekor lama-tinggal yang tumbuh.
- **Tidak ada penyesuaian campuran-kasus** dalam klaim sebelum/sesudah: ambang admisi berubah secara musiman dan sekuler.
- **Pengurangan LOS yang muncul-kembali sebagai readmisi** — selalu pasangkan klaim LOS dengan data readmisi 30-hari.

## Sumber

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
