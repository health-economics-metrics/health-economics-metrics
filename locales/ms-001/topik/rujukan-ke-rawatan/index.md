# Rujukan-ke-Rawatan (RTT)

Rujukan-ke-rawatan ialah masa berlalu dari rujukan GP hingga permulaan rawatan dipimpin perunding. Perlembagaan NHS menetapkan piawai: **92% pesakit patut memulakan rawatan dalam 18 minggu**. RTT ialah metrik operasi paling terpampang secara politik dalam NHS England.

## Mengapa ia penting

Trust yang terlepas sasaran RTT menghadapi penelitian kawal selia, campur tangan dan kerosakan reputasi; senarai menunggu kebangsaan ialah nombor muka depan. Setiap minggu pesakit menunggu ialah kesihatan hilang (menunggu dalam keadaan kesihatan lebih teruk — lihat matematik QALY di bawah) dan selalunya kos bertambah (keadaan merosot; lihat [intervensi lebih awal](../intervensi-lebih-awal/)). Perisian yang menjimatkan masa di mana-mana dalam laluan rujukan-ke-rawatan — triaj, kitar masa diagnostik, kapasiti klinik, penjadualan — secara langsung mengurangkan akibat operasi dan kewangan kegagalan piawai, itulah sebabnya impak RTT ialah baris manfaat kelas pertama dalam kes perniagaan digital NHS.

## Matematiknya

```
Prestasi RTT = pesakit dirawat dalam 18 minggu / jumlah dirawat × 100
Kos kesihatan masa menunggu setiap pesakit = tempoh tunggu × (utiliti_dirawat − utiliti_menunggu)

Pandangan laluan: RTT = Σ tempoh peringkat (triaj rujukan → temujanji pertama →
diagnostik → keputusan → rawatan) — baiki baris gilir paling panjang, bukan
peringkat paling sibuk (lihat flow-metrics.md).
```

## Contoh penyelesaian

Satu kepakaran merawat 5,000 pesakit laluan/tahun; purata tunggu 24 minggu; utiliti menunggu 0.68 lwn dirawat 0.80.

Triaj digital serta protokol terus-ke-ujian menghapuskan 5 minggu beratur tulen:

```
Keuntungan QALY = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALY/tahun
Dimonetisasi pada £20,000–£30,000/QALY (lihat willingness-to-pay-thresholds.md):
  ≈ £1.15J–£1.73J/tahun nilai kesihatan
```

— serta trust beralih daripada melanggar kepada memenuhi piawai 18 minggu, yang mempunyai nilai tadbir urus yang tidak sepenuhnya ditangkap hamparan mana pun.

## Kaitan dengan kejuruteraan perisian

RTT ialah **metrik masa pimpinan atas baris gilir berbilang peringkat** — versi hospital bagi masa pimpinan commit-ke-pengeluaran (lihat [metrik DORA](../metrik-dora/)). Kaedah penambahbaikan serupa: instrumenkan setiap peringkat, cari di mana masa kalendar berkumpul (hampir selalu serah-serah dan baris gilir, bukan kerja klinikal), dan singkirkan keadaan menunggu. Kemenangan perisian lazim: e-triaj yang menghalakan rujukan dalam jam dan bukan kelompok mingguan, penolakan keputusan diagnostik dan bukan temujanji susulan, dan kriteria terus-ke-ujian automatik. Nilaikan penambahbaikan dengan [kos kelewatan](../kos-kelewatan/) berdenominasi QALY/minggu.

## Perangkap

- **Menambah baik peringkat yang bukan kekangan** — memotong tunggu temujanji pertama sementara baris gilir diagnostik membesar hanya memindahkan kolam.
- **Permainan**: tetapan semula laluan dan jeda jam boleh memperbaiki RTT dilaporkan tanpa merawat sesiapa lebih awal; audit taburan asas.
- **Menuntut penambahbaikan seluruh laluan** untuk satu alat apabila beberapa perubahan mendarat bersama — atribusi memerlukan pembanding.

## Sumber

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
