# Total Biaya Kepemilikan (TCO)

TCO adalah total biaya sebuah sistem sepanjang umurnya: akuisisi atau pembangunan, integrasi, operasi, pemeliharaan, dukungan, pelatihan, dan penonaktifan. Garis-dasar yang tidak-nyaman: **pemeliharaan adalah 50–80% TCO perangkat-lunak** — kira-kira tiga-perempat biaya-seumur-hidup tiba *setelah* peluncuran.

## Mengapa Ini Penting

Penilaian teknologi kesehatan lama belajar bahwa harga sebuah obat bukan biayanya — administrasi, pemantauan, dan penanganan efek-samping semuanya termasuk dalam model. Kasus bisnis perangkat-lunak yang hanya menghitung biaya-pembangunan/lisensi mengulangi kesalahan harga-obat-naif dan secara sistematis meremehkan sisi-biaya dari setiap model [ICER](../rasio-efektivitas-biaya-inkremental/) dan [dampak-anggaran](../analisis-dampak-anggaran/) yang mereka makan. Untuk pengadaan NHS, disiplin-TCO adalah apa yang membuat klaim efektivitas-biaya sebuah produk-digital jujur — dan itulah tempat pilihan-terlihat-murah kalah.

## Perhitungan

```
TCO = biaya awal (pembangunan/lisensi + integrasi + migrasi-data + pelatihan)
    + Σ_t [operasi + pemeliharaan + dukungan + infrastruktur + peningkatan
           + kepatuhan/jaminan]_t / (1 + r)^t
    + biaya penonaktifan (keluar, ekstraksi-data, operasi-paralel)

Horizon: 3–5 tahun komersial, umur-sistem untuk infrastruktur klinis
r: 3,5% sektor-publik (Green Book), 8–12% komersial
Tolok ukur: pemeliharaan tahunan ≈ 15–20% biaya-pembangunan; ~78% TCO-seumur-hidup
pasca-peluncuran; mengabaikan penonaktifan dan penguncian-vendor menetapkan-harga dirinya sendiri.
```

## Contoh yang Diselesaikan

Dua pilihan untuk sistem observasi-elektronik, horizon 5-tahun:

```
                        SaaS Vendor     Pembangunan Internal
Tahun 0 (lisensi/bangun) £250.000       £900.000
Integrasi + pelatihan     £180.000       £150.000
Operasi tahunan (thn 1–5) £120.000/thn  £190.000/thn  (hosting + 1,5 FTE pemeliharaan)
Keluar/penonaktifan        £60.000        £30.000

TCO tidak-didiskon         £1.090.000     £2.030.000
```

Estimasi rekayasa opsi-pembangunan (£900rb) hanya 44% dari TCO sebenarnya — dan estimasi-pembangunan itu sendiri biasanya melebihi anggaran 30–40% (lihat [bangun vs beli](../membangun-vs-membeli/)). Kecuali opsi-internal menyampaikan *hasil* yang secara material berbeda, logika [minimalisasi-biaya](../analisis-minimalisasi-biaya/) berlaku dan SaaS menang sekitar £940rb.

## Hubungan dengan Rekayasa Perangkat Lunak

Insinyur meremehkan data-pemeliharaan bidang mereka sendiri ketika membela pembangunan: aturan pemeliharaan-tahunan 15–20% dari biaya-pembangunan berarti setiap sistem £1 juta secara diam-diam mengomitmenkan £150–200rb/tahun kapasitas-masa-depan — kewajiban yang termasuk dalam neraca-mental yang sama dengan [utang teknis](../utang-teknis/). TCO juga merupakan setengah-biaya dari setiap metrik dalam repositori ini: biaya per-penerapan, [ekonomi unit cloud](../ekonomi-unit-cloud/), dan disiplin-penyebut yang diterapkan HTA pada sponsor-obat. Ketika harga produk Anda ditantang, perbandingan TCO yang mencakup biaya-operasional-sebenarnya dari pemegang-saat-ini biasanya adalah pembingkaian-ulang paling-kuat yang tersedia.

## Jebakan

- **Penjangkaran biaya-peluncuran**: membandingkan pilihan berdasarkan biaya-tahun-0 ketika perangkingan berbalik pada tahun-3.
- **Kekeliruan tenaga-kerja-internal-gratis** ("timnya sudah di sini").
- **Mengabaikan biaya-keluar**: keluaran-data, penghentian-kontrak, dan operasi-paralel adalah di mana SaaS "murah" menjadi mahal.
- **Pelanggaran horizon-sama**: membandingkan TCO SaaS 3-tahun terhadap amortisasi-pembangunan 10-tahun (lihat [horizon waktu](../horizon-waktu/)).

## Sumber

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
