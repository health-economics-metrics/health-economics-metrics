# Kepatuhan dan Persistensi

Kepatuhan adalah sejauh mana penggunaan aktual sesuai dengan penggunaan yang diresepkan (intensitas); persistensi adalah lama waktu penggunaan berlanjut sebelum dihentikan (durasi). Farmasi memiliki ukuran standar — **MPR** dan **PDC**, dengan ≥80% sebagai patokan konvensional "patuh" — dan terapeutik digital mewarisi baik konsep maupun masalahnya: kepatuhan adalah pengali antara efikasi dan nilai yang terealisasi.

## Mengapa Ini Penting

Pembayar sudah beroperasi dengan angka-angka ini: PDC ≥80% memberi masukan pada Medicare Star Ratings AS, yang menggerakkan pendapatan pembayar nyata — kepatuhan adalah infrastruktur finansial yang menopang beban, bukan metrik lunak. Untuk terapeutik digital pola ini berulang: data DiGA menunjukkan volume resep yang kuat dengan kepatuhan berkelanjutan yang lemah, dan penetapan harga DTx berbasis hasil (tiba di Jerman mulai 2026) akan membayar berdasarkan hasil yang digerbangi kepatuhan. Peningkatan konseptual dari penelitian kesehatan digital: **keterlibatan efektif** — keterlibatan yang *cukup* untuk mencapai hasil yang dimaksud — dan konsekuensinya, **dosis efektif minimum**, ditetapkan secara empiris per intervensi alih-alih diasumsikan sebagai "lebih banyak lebih baik".

## Perhitungan

```
MPR = Σ hari pasokan yang disalurkan / hari dalam periode × 100   (dapat melebihi 100%;
      melebih-lebihkan melalui pengisian ulang dini)
PDC = hari yang tercakup oleh pasokan / hari dalam periode × 100     (dibatasi 100%;
      estimator konservatif, disukai CMS)
Kepatuhan digital = peristiwa penggunaan aktual / peristiwa penggunaan yang diresepkan × 100
Persistensi       = hari dari inisiasi hingga penghentian
                    (laporkan % persisten pada N bulan; metode kelangsungan hidup)

Penggerbangan nilai: hasil terealisasi ≈ efikasi × g(kepatuhan)
  di mana g adalah fungsi dosis-respons; di bawah dosis efektif
  minimum, g ≈ 0 — biaya dikeluarkan, manfaat hilang
```

## Contoh yang Diselesaikan

Sebuah produk CBT digital untuk insomnia, diresepkan sebagai 6 modul selama 6 minggu; efikasi uji coba 0,025 QALY di antara yang menyelesaikan ≥4 modul (dosis efektif minimum yang ditetapkan secara empiris):

```
1.000 resep pada £250 → £250.000 pengeluaran pembayar
Penyelesaian modul: ≥4 modul 38%; 1–3 modul 34%; nol modul 28%

QALY terealisasi = 1.000 × 0,38 × 0,025 = 9,5
Biaya per QALY  = 250.000 / 9,5 ≈ £26.300 — marginal pada ambang batas NICE

Rekayasa kepatuhan (desain ulang pengingat, pemendekan sesi) meningkatkan
penyelesaian ≥4 modul menjadi 50%: 12,5 QALY → £20.000/QALY. Produk
melewati ambang pendanaan tanpa menyentuh konten terapi.
```

Di bawah penetapan harga berbasis kinerja gaya 2026, pergeseran yang sama menggerakkan *pendapatan* secara langsung — rekayasa kepatuhan menjadi peta jalan komersial.

## Hubungan dengan Rekayasa Perangkat Lunak

Dua kosakata bertemu pada satu konsep: analitik perangkat lunak ([aktivasi](../aktivasi-dan-keterserapan/), [kelengketan](../metrik-keterlibatan/), [retensi](../retensi-dan-churn/)) dan farmasi klinis (MPR, PDC, persistensi) sama-sama mengukur paparan terhadap suatu intervensi — petakan peristiwa produk Anda ke kosakata klinis dan pembayar dapat membaca dasbor Anda. Rekayasa memegang tuas kepatuhan: logika pengingat (dering harian yang bodoh melatih penolakan; waktu adaptif tidak), biaya sesi (modul 20 menit selesai lebih sedikit daripada 3×7 menit), dan telemetri gesekan yang menemukan *di mana* dalam protokol pengguna berhenti. Instrumenkan dosis-respons sejak hari pertama — analisis dosis-efektif-minimum yang menggerbangi seluruh model ekonomi memerlukan data penggunaan-terkait-hasil yang hanya dapat dikumpulkan oleh produk.

## Jebakan

- **Kebingungan MPR/PDC**: MPR melebih-lebihkan; nyatakan estimator mana dan gunakan PDC untuk apa pun yang menghadap pembayar.
- **Kepatuhan pada metrik, bukan terapi**: pembukaan dihitung sebagai dosis (lihat [metrik keterlibatan](../metrik-keterlibatan/)).
- **Target keterlibatan "lebih banyak lebih baik"** di mana intervensi memiliki dosis terbatas — kelulusan adalah kesuksesan, penggunaan abadi bukan.
- **Klaim efikasi berbasis penyintas**: hasil di antara yang patuh mencakup efek seleksi (orang yang patuh berbeda); estimasi kausal yang jujur memerlukan randomisasi atau penyesuaian yang cermat.

## Sumber

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
