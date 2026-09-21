# Penghematan Pelepas-Kas Keras (Pertahanan Defisit)

Penghematan pelepas-kas keras adalah pos-pos yang dapat secara aktif **dihapus rumah sakit dari anggaran bulan depan** karena perangkat lunak Anda. Bagi akuntan finansial yang ketat — dan bagi trust yang beroperasi dalam defisit — ini adalah satu-satunya kelas manfaat yang sepenuhnya dihitung.

## Mengapa Ini Penting

Banyak trust NHS beroperasi di bawah rencana pemulihan-defisit dengan pengawasan intens terhadap setiap garis pengeluaran. Dalam lingkungan itu, manfaat kapasitas dan perbaikan kualitas — betapapun nyatanya — tidak menutup kesenjangan; hanya kas yang menutupnya. Produk perangkat lunak yang dapat membuktikan bahwa ia menghapus garis anggaran adalah *membiayai-diri-sendiri dari perspektif CFO*, yang mengubah pengadaan: percakapan berhenti menjadi "dapatkah kita membayar ini?" dan menjadi "dapatkah kita tidak membayarnya?". Dokumen ini adalah ujung tajam-menghadap-defisit dari [penghematan pelepas-kas vs bukan-pelepas-kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/).

## Perhitungan

Target kas-keras paling andal NHS adalah **staf sementara bertarif-premium**. Trust menutup kesenjangan dengan staf "Bank" internal (dibayar dengan tarif hampir-standar) dan staf "Agensi" eksternal (sering 2–3× tarif Agenda for Change, dibatasi tetapi sering dilanggar untuk peran langka).

```
Penghematan keras = shift premium dihindari × (tarif premium − tarif substantif)
            + jam lembur dihindari × premium lembur
            + kontrak eksternal dibatalkan × nilai kontrak

Persyaratan mekanisme: sebutkan garis anggaran spesifik dan manajer yang
akan mengonfirmasi penurunannya. Jika tidak ada yang dapat menunjuk garisnya, itu bukan kas keras.
```

## Contoh yang Diselesaikan

Seorang perawat Band 6 kehilangan ~1 jam/shift untuk overhead administratif; dokumentasi secara reguler meluber melewati akhir-shift ke lembur, dan bangsal memesan cakupan-Bank ekstra untuk mengejar dokumentasi.

Perangkat lunak mengembalikan jam itu ke shift terjadwal di 300 perawat:

```
Lembur dihindari:  300 perawat × 2,5 jam lembur dibayar/minggu × £8 premium × 46 minggu
                    ≈ £276.000/tahun
Shift bank/agensi: 15 shift-pengejar/minggu × £180 premium × 52
                    ≈ £140.400/tahun
Total kas keras     ≈ £416.000/tahun terhadap biaya lisensi ~£150.000
```

Setiap pound dapat diaudit terhadap sistem penjadwalan-elektronik dan penggajian — yang persis bagaimana manfaatnya harus dibuktikan, bulanan, melalui [realisasi manfaat](../realisasi-manfaat/). (Model tenaga-kerja NHS yang dipublikasikan telah mengklaim rasio setinggi £11+ dihemat per £1 dibelanjakan pada mekanisme ini; perlakukan rasio semacam itu sebagai hipotesis untuk data penjadwalan trust *Anda*, bukan fakta yang dapat dibawa-bawa.)

## Hubungan dengan Rekayasa Perangkat Lunak

Setara rekayasa dari premium agensi adalah pembelian-darurat organisasi itu sendiri: tarif harian kontraktor yang menutupi kesenjangan penyampaian, lembur yang digerakkan insiden, kontrak dukungan-dipercepat, dan panik harga-spot cloud. Perangkat lunak produktivitas yang mengklaim kas-keras harus menargetkan garis-garis tersebut dengan disiplin yang sama — sebutkan garis anggaran, pemiliknya, dan bulan di mana ia menyusut. Segala sesuatu yang lain yang disampaikannya adalah kapasitas ([kapasitas penghasil-nilai](../kapasitas-penghasil-nilai-pembalikan-operasional/)) atau kualitas: nyata, berharga, dan berbeda.

## Jebakan

- **Menyebut kapasitas "penghematan"** — pembunuh kredibilitas instan dengan bagian keuangan; lihat taksonomi di [pelepasan-kas vs bukan-pelepasan-kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/).
- **Rasio model-vendor disajikan sebagai fakta lokal** (masalah £11:£1) — bangun ulang modelnya pada data penjadwalan trust sendiri.
- **Kebingungan satu-kali vs berulang**: kontrak yang dibatalkan menghemat nilainya sekali per tahun, bukan sekali; posisi yang dihapus hanya menghemat gaji selagi tetap dihapus.

## Sumber

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
