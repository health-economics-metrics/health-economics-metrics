# Kos Marginal lwn Kos Purata

Kos purata ialah jumlah kos dibahagi unit yang dihasilkan. Kos marginal ialah kos menghasilkan satu unit *tambahan*. Keputusan patut dibuat atas kos marginal — tetapi kos unit yang diterbitkan hampir selalu purata.

## Mengapa ia penting

Kesilapan paling lazim dalam kes perniagaan kesihatan digital ialah menilai sumber yang dijimatkan pada kos **purata**nya sedangkan penjimatan sebenar ialah kos **marginal**. Hari katil hospital mempunyai kos purata (diserap penuh) £400+, tetapi membebaskan satu hari katil tidak menjimatkan £400 — bangunan, pemanasan dan kebanyakan kos kakitangan berterusan. Tunai yang benar-benar dilepaskan mungkin £50–£150 kecuali cukup katil dibebaskan untuk menutup wad.

## Matematiknya

```
Kos purata:   AC = TC / Q
Kos marginal: MC = dTC/dQ   (kos satu unit lebih/kurang)

TC = jumlah kos, Q = kuantiti
```

Kos tetap menjadikan MC < AC bagi pengurangan kapasiti, dan MC boleh menghampiri sifar apabila kapasiti lebihan wujud. Tuntutan penjimatan patut menggunakan:

```
Penjimatan sebenar = ΔQ × MC          (perubahan kecil)
Penjimatan sebenar = perubahan langkah dalam TC (perubahan besar yang melepasi ambang kapasiti, cth. menutup wad)
```

## Contoh penyelesaian

Perisian anda mengurangkan purata tempoh tinggal, membebaskan 1,000 hari katil/tahun di sebuah trust.

- **Tuntutan naif**: 1,000 × £400 kos purata = **£400,000 dijimatkan**. Salah.
- **Tuntutan marginal**: kos berubah bagi setiap hari katil (makanan, dobi, bahan guna habis, sedikit kelenturan kejururawatan) ≈ £120. Penjimatan = 1,000 × £120 = **£120,000**, *serta* nilai kapasiti dibebaskan jika katil diisi semula dengan pesakit elektif menunggu (pendapatan di bawah bayaran berasaskan aktiviti, atau pengurangan senarai menunggu).
- **Tuntutan perubahan langkah**: jika trust membebaskan 7,300 hari katil/tahun (wad 20 katil) ia sebenarnya boleh menutup wad: kakitangan + operasi ≈ £1.5 juta/tahun tunai sebenar. Kini matematik kos purata lebih dekat kepada benar.

Intervensi sama, tiga nombor yang boleh dipertahankan, bergantung pada sama ada perubahan melepasi langkah kapasiti.

## Kaitan dengan kejuruteraan perisian

Ekonomi awan ialah wilayah asal kos marginal:

- Kos marginal satu lagi larian CI pada kapasiti yang sudah terpelihara ≈ £0, sementara kos purata setiap larian (jumlah perbelanjaan platform ÷ larian) mungkin beberapa paun. Sistem caj balik yang membil kos purata mendorong pasukan kurang menggunakan kapasiti dikongsi yang sebenarnya percuma di margin.
- Sebaliknya, "kami menjimatkan 30% pengiraan" hanya melepaskan tunai jika instans benar-benar ditamatkan atau tempahan dikurangkan — versi perisian perangkap hari-katil. Lihat [penjimatan melepaskan tunai lwn tidak melepaskan tunai](../penjimatan-melepaskan-tunai-lwn-tidak-melepaskan-tunai/).

## Perangkap

- **Menilai kapasiti pada kos purata** dan membentangkannya sebagai tunai (yang klasik).
- **Mengandaikan kos marginal malar.** Ia berlangkah pada sempadan kapasiti (penutupan wad, peringkat lesen, komitmen instans terpelihara).
- **Menggunakan kos marginal untuk keputusan pengembangan tetapi purata untuk pengecutan** dalam kes sama — pilih mengikut keputusan sebenar.

## Sumber

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
