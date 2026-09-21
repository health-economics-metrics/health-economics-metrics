# Biaya Marginal vs Rata-Rata

Biaya rata-rata adalah total biaya dibagi unit yang diproduksi. Biaya marginal adalah biaya untuk memproduksi satu unit *tambahan*. Keputusan seharusnya dibuat berdasarkan biaya marginal — tetapi biaya unit yang dipublikasikan hampir selalu rata-rata.

## Mengapa Ini Penting

Kesalahan tunggal paling umum dalam kasus bisnis kesehatan-digital adalah menilai sumber daya yang dihemat pada biaya **rata-ratanya** ketika penghematan sebenarnya adalah biaya **marginal**. Satu hari-tempat-tidur rumah sakit memiliki biaya rata-rata (sepenuhnya terserap) £400+, tetapi membebaskan satu hari-tempat-tidur tidak menghemat £400 — bangunan, pemanasan, dan sebagian besar biaya staf berlanjut. Kas yang benar-benar dilepaskan mungkin £50–£150 kecuali cukup banyak tempat tidur yang dibebaskan untuk menutup sebuah bangsal.

## Perhitungan

```
Biaya rata-rata:  BR = TB / Q
Biaya marginal:   BM = dTB/dQ   (biaya satu unit lebih/lebih sedikit)

TB = total biaya, Q = kuantitas
```

Biaya tetap membuat BM < BR untuk pengurangan kapasitas, dan BM dapat mendekati nol ketika kapasitas cadangan ada. Klaim penghematan seharusnya menggunakan:

```
Penghematan sejati = ΔQ × BM          (perubahan kecil)
Penghematan sejati = perubahan-tangga dalam TB (perubahan besar yang melewati ambang
              kapasitas, mis. menutup sebuah bangsal)
```

## Contoh yang Diselesaikan

Perangkat lunak Anda mengurangi lama-tinggal rata-rata, membebaskan 1.000 hari-tempat-tidur/tahun di sebuah trust.

- **Klaim naif**: 1.000 × £400 biaya rata-rata = **£400.000 dihemat**. Salah.
- **Klaim marginal**: biaya variabel per hari-tempat-tidur (makanan, laundry, bahan habis pakai, sedikit fleksibilitas keperawatan) ≈ £120. Penghematan = 1.000 × £120 = **£120.000**, *ditambah* nilai kapasitas yang dibebaskan jika tempat tidur diisi-ulang dengan pasien-elektif-yang-menunggu (pendapatan di bawah pembayaran berbasis-aktivitas, atau pengurangan daftar-tunggu).
- **Klaim perubahan-tangga**: jika trust membebaskan 7.300 hari-tempat-tidur/tahun (bangsal 20-tempat-tidur) ia benar-benar dapat menutup bangsal: staf + operasional ≈ £1,5 juta/tahun kas nyata. Sekarang aritmatika biaya-rata-rata lebih dekat dengan kebenaran.

Intervensi yang sama, tiga angka yang dapat dipertahankan, tergantung pada apakah perubahannya melewati langkah kapasitas.

## Hubungan dengan Rekayasa Perangkat Lunak

Ekonomi cloud adalah wilayah biaya-marginal asli:

- Biaya marginal dari satu lagi eksekusi CI pada kapasitas yang sudah-dicadangkan adalah ≈ £0, sementara biaya rata-rata per eksekusi (total pengeluaran platform ÷ eksekusi) bisa berupa pound. Sistem chargeback yang menagih biaya rata-rata mendorong tim untuk kurang-menggunakan kapasitas bersama yang sebenarnya gratis pada marjinnya.
- Sebaliknya, "kami menghemat 30% komputasi" hanya melepaskan kas jika instans benar-benar diterminasi atau reservasi dikurangi — versi perangkat-lunak dari jebakan hari-tempat-tidur. Lihat [penghematan pelepas-kas vs bukan-pelepas-kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/).

## Jebakan

- **Menilai kapasitas pada biaya rata-rata** dan menyajikannya sebagai kas (yang klasik).
- **Mengasumsikan biaya marginal konstan.** Ia melangkah pada batas kapasitas (penutupan bangsal, tingkatan lisensi, komitmen instans-cadangan).
- **Menggunakan biaya marginal untuk keputusan ekspansi tetapi rata-rata untuk kontraksi** dalam kasus yang sama — pilih sesuai keputusan sebenarnya.

## Sumber

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
