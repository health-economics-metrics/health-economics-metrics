# Biaya Outsourcing yang Dapat Dihindari

Ketika sebuah trust tidak dapat memenuhi target dengan kapasitas internal, ia membeli kapasitas dengan tarif premium: lembur akhir pekan untuk stafnya sendiri, atau outsourcing prosedur ke penyedia swasta. Nilai ekonomi dari perangkat lunak pelepas-kapasitas mencakup **biaya yang dapat dihindari dari pekerjaan bertarif premium tersebut**.

## Mengapa Ini Penting

Di bawah tekanan pemulihan elektif, trust secara rutin membayar harga pasar sektor swasta (sering 1,2–1,5× harga skema NHS) atau tarif inisiatif-daftar-tunggu premium kepada konsultan mereka sendiri untuk daftar akhir pekan. Tidak seperti klaim kapasitas biasa, outsourcing yang dihindari **melepaskan kas**: faktur ke penyedia swasta benar-benar tidak diterbitkan. Itu menjadikannya salah satu garis manfaat terkuat yang tersedia untuk perangkat lunak yang meningkatkan throughput internal — dan salah satu yang paling mudah dibuktikan, karena pengeluaran outsourcing sudah menjadi garis anggaran yang terlihat.

## Perhitungan

```
Biaya outsourcing yang dapat dihindari = aktivitas yang dipindahkan ke internal × (harga unit outsourcing
                             − biaya marginal internal per kasus)

Biaya marginal internal: bahan habis pakai + staf variabel untuk aktivitas tambahan
— aset tetap sudah dibayar (lihat marginal-vs-average-cost.md).
```

Klaim ini memerlukan kapasitas internal yang dilepaskan untuk benar-benar menyerap aktivitas: sesi teater, tempat tidur, dan staf semuanya harus tersedia (kendala yang mengikat mengatur — teori kendala lagi).

## Contoh yang Diselesaikan

Sebuah trust mengoutsourcingkan 800 prosedur katarak/tahun pada £900 masing-masing: £720.000/tahun pengeluaran eksternal, dibandingkan dengan harga skema ~£750.

Perangkat lunak penjadwalan teater (optimasi daftar, pengisian celah dari pembatalan, pelacakan waktu perputaran) meningkatkan pemanfaatan teater internal cukup untuk memulangkan 500 prosedur:

```
Biaya marginal internal per kasus ≈ £350 (bahan habis pakai + staf sesi)
Penghematan = 500 × (900 − 350) = £275.000/tahun — melepaskan kas
Outsourcing yang tersisa: 300 × £900 = £270.000 (dulu £720.000)
```

Biaya perangkat lunak £90.000/tahun → bersih ≈ **+£185.000/tahun dalam kas yang dapat dibank**, ditambah manfaat kualitas internal dan pelatihan dari mempertahankan pekerjaan secara internal.

## Hubungan dengan Rekayasa Perangkat Lunak

Analog langsungnya adalah **premium kontraktor dan konsultasi**: ketika kapasitas rekayasa internal tidak dapat memenuhi komitmen, organisasi membeli kapasitas eksternal pada 1,5–3× tarif internal berbobot. Investasi platform dan produktivitas yang meningkatkan throughput internal harus mengklaim pengeluaran kontraktor yang dihindari persis seperti di atas — tarif harian eksternal dikurangi biaya marginal internal, dikalikan pekerjaan yang dipulangkan — karena ini adalah salah satu dari sedikit garis yang benar-benar melepaskan kas dalam kasus bisnis produktivitas pengembang. Peringatan yang sama berlaku: kapasitas internal harus benar-benar ada dan dijadwalkan ke pekerjaan yang dipulangkan, atau klaimnya adalah fiksi.

## Jebakan

- **Mengklaim pemulangan tanpa rantai kapasitas penuh** — ahli bedah dibebaskan tetapi tidak ada slot teater (atau insinyur dibebaskan tetapi tidak ada bandwidth manajemen produk) tidak memulangkan apa pun.
- **Membandingkan harga outsourcing dengan biaya rata-rata internal** alih-alih biaya marginal — meremehkan penghematan, anehnya; biaya tetap berjalan bagaimanapun caranya.
- **Asimetri kualitas/kompleksitas**: kasus yang dioutsourcingkan sering yang sederhana; memulangkannya mengubah campuran kasus internal dan biaya unit.

## Sumber

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
