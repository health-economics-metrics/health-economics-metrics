# Tempoh Tinggal (LOS)

Tempoh tinggal ialah bilangan hari dari kemasukan hospital hingga discaj — metrik kecekapan aliran teras penjagaan pesakit dalam. Purata akut UK sekitar 4–5 hari; setiap hari berlebihan menggunakan katil yang terhad dan mendedahkan pesakit kepada risiko diperoleh hospital.

## Mengapa ia penting

LOS memacu hampir segala-galanya dalam ekonomi hospital akut: kapasiti katil, daya pemprosesan elektif, aliran kecemasan, kakitangan. Mengurangkan purata LOS walaupun pecahan hari pada skala melepaskan kapasiti yang besar (lihat [hari katil dijimatkan](../hari-katil-dijimatkan/)). LOS juga isyarat kualiti dalam kedua-dua arah — terlalu panjang mencadangkan kegagalan proses (diagnostik tertangguh, kertas kerja discaj, tunggu penjagaan sosial); terlalu pendek boleh bermakna discaj pramatang, yang muncul kemudian sebagai [kemasukan semula](../kadar-kemasukan-semula/).

## Matematiknya

```
LOS (setiap episod) = tarikh discaj − tarikh kemasukan
Purata LOS          = hari katil diduduki / discaj (laporkan min DAN median;
                      LOS condong kanan berat oleh outlier tinggal-lama)

Perbandingan memerlukan pelarasan campuran-kes (umur, diagnosis, akuiti),
atau anda mengukur siapa yang dimasukkan hospital, bukan bagaimana ia berprestasi.
```

Hukum Little menghubungkan pemboleh ubah aliran: `katil diduduki = kadar kemasukan × purata LOS` — hukum sama yang mengawal baris gilir perisian (lihat [metrik aliran](../metrik-aliran/)).

## Contoh penyelesaian

Trust memasukkan 40 pesakit perubatan kecemasan/hari pada min LOS 6.0 hari: 240 katil diduduki secara kekal (40 × 6). Perisian penyelarasan discaj (penjejakan tugas, automasi farmasi-ke-bawa-pulang, tempahan pengangkutan) memotong ekor bukan-klinikal tinggal sebanyak 0.4 hari secara purata.

```
Katil diperlukan = 40 × 5.6 = 224 → 16 katil dibebaskan secara berterusan
                 = 16 × 365 = 5,840 hari katil/tahun
```

Nilaikan 5,840 hari katil mengikut mekanisme (isi semula/tutup/kelonggaran) menurut [hari katil dijimatkan](../hari-katil-dijimatkan/). Perhatikan apa yang bergerak: bukan perubatan, tetapi *menunggu* — pesakit sihat secara perubatan; sistem masih melakukan kertas kerja. Itu masalah beratur, dan perisian bagus dalam masalah beratur.

## Kaitan dengan kejuruteraan perisian

LOS ialah masa kitar hospital, dan buku main penambahbaikan sama dengan kerja aliran penyampaian: instrumenkan peringkat (kemasukan → rawatan → sihat-perubatan → sebenarnya-discaj), cari di mana masa berkumpul (ia serah-serah), singkirkan keadaan menunggu dan bukan menambah kapasiti. Kohort "sihat untuk discaj tetapi masih menduduki katil" ialah versi hospital bagi PR diluluskan tetapi tidak digabungkan. Peluang perisian langsung: orkestrasi tugas discaj, kitar masa diagnostik, preskripsi-e ubat discaj, integrasi rujukan penjagaan sosial.

## Perangkap

- **Pelaporan min sahaja** — outlier mendominasi; min yang jatuh boleh menyembunyikan ekor tinggal-lama yang membesar.
- **Tiada pelarasan campuran-kes** dalam tuntutan sebelum/selepas: ambang kemasukan berubah secara bermusim dan sekular.
- **Pengurangan LOS yang muncul semula sebagai kemasukan semula** — sentiasa pasangkan tuntutan LOS dengan data kemasukan semula 30 hari.

## Sumber

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
