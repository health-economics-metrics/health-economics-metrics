# Ekonomi Unit Cloud (FinOps)

Ekonomi unit cloud menerjemahkan pengeluaran cloud mentah menjadi **biaya per unit output** — per pelanggan, per transaksi, per kasus yang diselesaikan, per token. Ini adalah kemampuan FinOps yang mengubah "tagihan AWS kami £400rb/bulan" menjadi "melayani satu pasien berbiaya £0,83".

## Mengapa Ini Penting

Angka pengeluaran total tidak dapat menjawab pertanyaan yang penting: apakah produk menjadi lebih atau kurang efisien? Apakah pertumbuhan meningkatkan atau menghancurkan margin? Berapa yang harus kita tagihkan? Biaya unit menjawab ketiganya. Khusus untuk kesehatan digital, "biaya per kasus yang diselesaikan" *adalah* biaya unit layanan-kesehatan — langsung dapat dibandingkan dengan angka [National Cost Collection](../tarif-nasional-dan-biaya-unit/) yang digunakan komisioner untuk setiap layanan lain, yang menjadikannya bahasa alami untuk menetapkan harga jalur digital terhadap jalur tradisional.

## Perhitungan

```
Biaya unit = total biaya yang dialokasikan (termasuk biaya bersama/platform) / unit yang disampaikan

Dua keluarga:
  unit efisiensi-sumber-daya: biaya/GB tersimpan, biaya/jam-vCPU, biaya/token,
                             biaya/menit-build
  unit bisnis:                biaya/pelanggan, biaya/transaksi, biaya/konsultasi,
                             biaya/kasus-terselesaikan

Disiplin marginal vs rata-rata berlaku (marginal-vs-average-cost.md):
pengeluaran yang dikomitmenkan/dicadangkan membuat biaya unit marginal ≈ 0 hingga
langkah komitmen berikutnya — hargai keputusan ekspansi pada marginal, tren
efisiensi pada rata-rata.
```

## Contoh yang Diselesaikan

Layanan triase digital: pengeluaran cloud £62.000/bulan (komputasi £30rb, data £18rb, alokasi platform bersama £14rb), menangani 380.000 episode triase/bulan:

```
Biaya rata-rata per episode = 62.000 / 380.000 ≈ £0,163

Perbandingan komisioner: triase telepon ≈ £8–12/panggilan, konsultasi dokter umum ≈ £42
→ episode digital berjalan pada ~2% dari alternatif manusia termurah — ekonomi
pergeseran-saluran dari gds-service-metrics.md, dari sisi biaya.

Pemeriksaan tren: tahun lalu £0,21/episode pada 240rb episode → ekonomi skala
yang membaik (biaya platform tetap teramortisasi), layak menjadi judul di QBR.
```

## Hubungan dengan Rekayasa Perangkat Lunak

Ekonomi unit adalah tempat pilihan rekayasa menjadi terbaca-secara-finansial: arsitektur yang memangkas separuh biaya-per-episode adalah keunggulan penetapan harga; yang skala super-linear adalah bom waktu yang hanya terlihat dalam metrik ini. Praktik yang ditransfer dari penentuan-biaya kesehatan: **publikasikan aturan alokasi** (biaya bersama mendistorsi angka per-unit hingga PLICS menstandarkan penentuan biaya tingkat-pasien — alokasi biaya platform Anda memerlukan kekakuan yang sama); **pilih unit yang dipikirkan pembeli** (komisioner membeli episode, bukan vCPU); dan masukkan biaya unit ke dalam setiap model [ICER](../rasio-efektivitas-biaya-inkremental/) dan [dampak anggaran](../analisis-dampak-anggaran/) sebagai penyebut biaya otoritatif. Untuk fitur AI, unitnya adalah token — lihat [ekonomi unit inferensi](../ekonomi-unit-inferensi/).

## Jebakan

- **Mengabaikan biaya bersama**: biaya unit yang tidak menyertakan alokasi platform/keamanan/on-call meremehkan sebesar 30–50% dan runtuh saat diaudit.
- **Penyebut kesombongan**: "biaya per panggilan API" menyanjung; "biaya per episode pasien selesai" menginformasikan.
- **Penetapan harga biaya-rata-rata untuk keputusan marginal**: menagih tim biaya unit rata-rata untuk penggunaan yang secara marginal gratis mendorong teater penghindaran-limbah (lihat [tarif nasional](../tarif-nasional-dan-biaya-unit/) untuk versi NHS dari bug insentif ini).

## Sumber

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
