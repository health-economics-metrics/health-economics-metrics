# Hari Tempat Tidur yang Dihemat

Satu hari tempat tidur adalah satu pasien yang menempati satu tempat tidur rumah sakit selama satu hari. "Hari tempat tidur yang dihemat" — melalui pemulangan lebih awal, penghindaran rawat inap, atau bangsal virtual — adalah manfaat kuda-beban dari kasus bisnis digital NHS, dan yang paling sering dinilai terlalu tinggi.

## Mengapa Ini Penting

Tempat tidur adalah kendala mengikat dari perawatan akut: ketika tempat tidur penuh, bedah elektif dibatalkan, ambulans mengantre, dan unit gawat darurat menumpuk. Intervensi yang membebaskan hari-tempat-tidur karena itu membawa nilai nyata — tetapi *jenis* nilainya sepenuhnya bergantung pada apa yang terjadi pada tempat tidur yang dibebaskan. Direktur keuangan telah belajar untuk mendiskon berat klaim hari-tempat-tidur yang naif; membetulkan aritmatika ini adalah ujian kredibilitas.

## Perhitungan

```
Hari tempat tidur yang dihemat = pasien yang terpengaruh × Δ lama tinggal (atau rawat inap yang dihindari × LOS rata-rata)

Nilai bergantung pada penggunaan kapasitas yang dibebaskan:
  diisi ulang dengan aktivitas elektif → nilai = pendapatan aktivitas atau manfaat daftar-tunggu
  bangsal ditutup / dikurangi         → nilai = staf + biaya operasional yang dilepaskan (kas)
  diserap sebagai kelonggaran         → nilai ≈ hanya biaya marginal (hotel), £50–£150/hari
```

Biaya rata-rata yang sepenuhnya terserap dari satu hari-tempat-tidur akut sering dikutip di £400+ (National Cost Collection secara historis ~£350 untuk hari-tempat-tidur berlebih) — tetapi lihat [biaya marginal vs rata-rata](../biaya-marginal-vs-rata-rata/): rata-rata hampir tidak pernah menjadi penghematannya.

## Contoh yang Diselesaikan

"Bangsal virtual" pemantauan jarak jauh memungkinkan 600 pasien/tahun pulang 2 hari lebih awal: 1.200 hari tempat tidur dihemat.

- **Klaim naif**: 1.200 × £400 = £480.000. Salah kecuali bangsal ditutup.
- **Klaim jujur**: trust mengisi ulang tempat tidur dengan pasien ortopedi elektif. 1.200 hari tempat tidur ÷ 3 hari rata-rata tinggal = 400 episode elektif tambahan pada ~£6.000 pendapatan masing-masing di bawah pembayaran berbasis aktivitas = **£2,4 juta aktivitas berdana tambahan** (dikurangi biaya marginal merawat pasien-pasien tersebut), *ditambah* 400 pasien keluar dari daftar tunggu. Biaya operasional bangsal virtual (£350.000) dikurangkan terhadap ini.

Kapasitas bebas yang *digunakan kembali* sering bernilai lebih dari klaim kas naif — tetapi ini adalah jenis nilai yang berbeda dan harus dilabeli demikian ([pelepasan kas vs bukan pelepasan kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/)).

## Hubungan dengan Rekayasa Perangkat Lunak

"Hari server yang dihemat" berperilaku identik. Menonaktifkan lingkungan yang selalu-aktif hanya melepaskan kas ketika instans diterminasi atau reservasi berakhir; kapasitas yang terserap kembali ke pool bernilai biaya marginalnya (~0 pada pengeluaran yang dikomitmenkan). Disiplin paralel: untuk setiap klaim penghematan, sebutkan *mekanismenya* — diterminasi, diisi ulang dengan pekerjaan bernilai, atau menguap. Perangkat lunak yang mengurangi lama tinggal rumah sakit (koordinasi pemulangan, pemantauan jarak jauh, waktu penyelesaian diagnostik) harus memodelkan ketiga skenario dan membiarkan trust memilih per bangsal.

## Jebakan

- **Penilaian biaya-rata-rata** dari kapasitas marginal — kesalahan kanonik.
- **Penghitungan ganda**: hari tempat tidur dihemat *dan* rawat inap dihindari *dan* pengurangan daftar tunggu dari tempat tidur bebas yang sama.
- **Mengasumsikan hari yang dihemat adalah hari yang mahal**: hari yang dihemat di akhir masa tinggal adalah hari termurah (akuitas rendah).

## Sumber

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
