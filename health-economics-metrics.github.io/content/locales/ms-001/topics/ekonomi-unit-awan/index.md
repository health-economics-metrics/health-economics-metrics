# Ekonomi Unit Awan (FinOps)

Ekonomi unit awan menterjemahkan perbelanjaan awan mentah kepada **kos bagi setiap unit output** — bagi setiap pelanggan, transaksi, kes diselesaikan, token. Ia keupayaan FinOps yang menukar "bil AWS kami £400k/bulan" kepada "melayani seorang pesakit berharga £0.83."

## Mengapa ia penting

Angka perbelanjaan keseluruhan tidak dapat menjawab soalan yang penting: adakah produk semakin cekap atau kurang cekap? Adakah pertumbuhan memperbaiki atau memusnahkan margin? Apa yang patut kami caj? Kos unit menjawab ketiga-tiganya. Bagi kesihatan digital khususnya, "kos bagi setiap kes diselesaikan" *ialah* kos unit perkhidmatan kesihatan — setanding langsung dengan angka [Koleksi Kos Kebangsaan](../tarif-kebangsaan-dan-kos-unit/) yang digunakan pesuruhjaya untuk setiap perkhidmatan lain, menjadikannya bahasa semula jadi untuk menetapkan harga laluan digital berbanding yang tradisional.

## Matematiknya

```
Kos unit = jumlah kos diperuntukkan (termasuk kos dikongsi/platform) / unit disampaikan

Dua keluarga:
  unit kecekapan sumber: kos/GB disimpan, kos/jam-vCPU, kos/token,
                         kos/minit-binaan
  unit perniagaan:       kos/pelanggan, kos/transaksi, kos/konsultasi,
                         kos/kes-diselesaikan

Disiplin marginal lwn purata terpakai (marginal-vs-average-cost.md):
perbelanjaan terikat/terpelihara menjadikan kos unit marginal ≈ 0 sehingga
langkah komitmen seterusnya — harga keputusan pengembangan pada marginal,
aliran kecekapan pada purata.
```

## Contoh penyelesaian

Perkhidmatan triaj digital: perbelanjaan awan £62,000/bulan (pengiraan £30k, data £18k, peruntukan platform dikongsi £14k), mengendalikan 380,000 episod triaj/bulan:

```
Purata kos setiap episod = 62,000 / 380,000 ≈ £0.163

Perbandingan pesuruhjaya: triaj telefon ≈ £8–12/panggilan, konsultasi GP ≈ £42
→ episod digital berjalan pada ~2% alternatif manusia termurah — ekonomi
anjakan saluran gds-service-metrics.md, dari sisi kos.

Semakan aliran: tahun lepas £0.21/episod pada 240k episod → ekonomi skala
bertambah baik (kos platform tetap diamortisasi), layak jadi tajuk dalam QBR.
```

## Kaitan dengan kejuruteraan perisian

Ekonomi unit ialah tempat pilihan kejuruteraan menjadi boleh dibaca oleh kewangan: seni bina yang separuhkan kos-setiap-episod ialah kelebihan harga; yang berskala super-linear ialah bom jangka hanya kelihatan dalam metrik ini. Amalan yang boleh dipindahkan daripada pengkosan kesihatan: **terbitkan peraturan peruntukan** (kos dikongsi menyelewengkan angka setiap unit sehingga PLICS menyeragamkan pengkosan peringkat pesakit — peruntukan kos platform anda memerlukan ketegasan yang sama); **pilih unit yang difikirkan pembeli** (pesuruhjaya membeli episod, bukan vCPU); dan suapkan kos unit ke dalam setiap model [ICER](../nisbah-kos-keberkesanan-inkremental/) dan [impak bajet](../analisis-impak-bajet/) sebagai penyebut kos yang berwibawa. Bagi ciri AI, unitnya ialah token — lihat [ekonomi unit inferens](../ekonomi-unit-inferens/).

## Perangkap

- **Mengabaikan kos dikongsi**: kos unit yang mengecualikan peruntukan platform/keselamatan/on-call memperkecilkan 30–50% dan runtuh semasa audit.
- **Penyebut kesombongan**: "kos setiap panggilan API" memuji; "kos setiap episod pesakit selesai" memberi maklumat.
- **Penetapan harga kos purata bagi keputusan marginal**: mengenakan kos unit purata kepada pasukan untuk penggunaan yang percuma secara marginal mendorong teater mengelak pembaziran (lihat [tarif kebangsaan](../tarif-kebangsaan-dan-kos-unit/) untuk versi NHS pepijat insentif ini).

## Sumber

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
