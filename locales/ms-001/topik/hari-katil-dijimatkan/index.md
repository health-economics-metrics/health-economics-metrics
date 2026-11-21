# Hari Katil Dijimatkan

Hari katil ialah seorang pesakit menduduki satu katil hospital selama satu hari. "Hari katil dijimatkan" — melalui discaj lebih awal, pengelakan kemasukan atau wad maya — ialah manfaat utama kes perniagaan digital NHS, dan yang paling kerap dinilai berlebihan.

## Mengapa ia penting

Katil ialah kekangan mengikat penjagaan akut: apabila katil penuh, pembedahan elektif dibatalkan, ambulans beratur dan jabatan kecemasan sesak. Intervensi yang membebaskan hari katil justeru membawa nilai sebenar — tetapi *jenis* nilai bergantung sepenuhnya pada apa yang berlaku kepada katil yang dibebaskan. Pengarah kewangan telah belajar mendiskaun tuntutan hari katil yang naif dengan banyak; mendapatkan aritmetik ini betul ialah ujian kredibiliti.

## Matematiknya

```
Hari katil dijimatkan = pesakit terjejas × Δ tempoh tinggal (atau kemasukan dielakkan × purata LOS)

Nilai bergantung pada penggunaan kapasiti yang dibebaskan:
  diisi semula dengan aktiviti elektif → nilai = pendapatan aktiviti atau manfaat senarai menunggu
  wad ditutup / dikurangkan         → nilai = kakitangan + kos operasi dilepaskan (tunai)
  diserap sebagai kelonggaran       → nilai ≈ kos marginal (hotel) sahaja, £50–£150/hari
```

Purata kos termuat penuh bagi hari katil akut sering disebut £400+ (Koleksi Kos Kebangsaan secara sejarah ~£350 bagi hari katil berlebihan) — tetapi lihat [kos marginal lwn purata](../kos-marginal-lwn-kos-purata/): purata hampir tidak pernah menjadi penjimatan.

## Contoh penyelesaian

"Wad maya" pemantauan jauh membolehkan 600 pesakit/tahun pulang 2 hari lebih awal: 1,200 hari katil dijimatkan.

- **Tuntutan naif**: 1,200 × £400 = £480,000. Salah kecuali wad ditutup.
- **Tuntutan jujur**: trust mengisi semula katil dengan pesakit ortopedik elektif. 1,200 hari katil ÷ purata tinggal 3 hari = 400 episod elektif tambahan pada ~£6,000 pendapatan setiap satu di bawah bayaran berasaskan aktiviti = **£2.4J aktiviti dibiayai tambahan** (tolak kos marginal merawat pesakit itu), *serta* 400 pesakit keluar daripada senarai menunggu. Kos operasi wad maya (£350,000) ditolak daripada ini.

Kapasiti dibebaskan yang *digunakan semula* selalunya bernilai lebih daripada tuntutan tunai naif — tetapi ia jenis nilai yang berbeza dan mesti dilabel sedemikian ([melepaskan tunai lwn tidak melepaskan tunai](../penjimatan-melepaskan-tunai-lwn-tidak-melepaskan-tunai/)).

## Kaitan dengan kejuruteraan perisian

"Hari pelayan dijimatkan" berkelakuan serupa. Menyahtauliah persekitaran sentiasa-hidup hanya melepaskan tunai apabila instans ditamatkan atau tempahan luput; kapasiti yang diserap kembali ke dalam kolam bernilai kos marginalnya (~0 pada perbelanjaan terikat). Disiplin selari: bagi setiap penjimatan yang dituntut, namakan *mekanismenya* — ditamatkan, diisi semula dengan kerja bernilai, atau lenyap. Perisian yang mengurangkan tempoh tinggal hospital (penyelarasan discaj, pemantauan jauh, kitar masa diagnostik) patut memodelkan ketiga-tiga senario dan membiarkan trust memilih bagi setiap wad.

## Perangkap

- **Penilaian kos purata** bagi kapasiti marginal — kesilapan kanonik.
- **Pengiraan berganda**: hari katil dijimatkan *dan* kemasukan dielakkan *dan* pengurangan senarai menunggu daripada katil dibebaskan yang sama.
- **Menganggap hari dijimatkan ialah hari yang mahal**: hari yang dijimatkan di hujung tinggal ialah hari termurah (akuiti rendah).

## Sumber

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
