# Dampak Daftar Tunggu

Dampak daftar-tunggu mengubah kapasitas-klinis yang dihemat menjadi pasien yang dihapus dari (atau digerakkan lebih cepat melalui) daftar tunggu. Mengubah jam-yang-dihemat menjadi slot-klinik-ekstra secara langsung mengurangi ukuran daftar-tunggu sebuah trust — cara paling nyata untuk menunjukkan kepada sistem-kesehatan apa *tujuan* kapasitas yang dibebaskan.

## Mengapa Ini Penting

Daftar tunggu elektif adalah tantangan pasca-pandemi yang mendefinisikan NHS (ukurannya adalah metrik politik nasional), dan setiap trust menjalankan program pemulihan-elektif terhadapnya. Kasus bisnis yang mengatakan "menghemat 2.000 jam-perawat" bersifat abstrak; yang mengatakan "menciptakan 4.000 slot-janji-temu tambahan, melihat 3.800 pasien-menunggu, memotong daftar-spesialisasi sebesar 9%" adalah kisah yang dapat dibawa Chief Operating Officer ke dewannya. Dampak daftar-tunggu adalah *unit-akun* alami untuk [kapasitas bukan-pelepas-kas](../penghematan-pelepas-kas-vs-bukan-pelepas-kas/).

## Perhitungan

```
Slot ekstra         = jam dilepaskan / durasi-slot × pemanfaatan
Pasien terlihat      = slot ekstra × (1 − tingkat DNA)
Pengurangan daftar   = pasien terlihat − permintaan-baru yang diinduksi
Keuntungan waktu-tunggu = perbaikan-antrean dari tingkat-layanan lebih tinggi
                     (untuk antrean stabil, memotong backlog N sebesar ΔN pada
                     tingkat-layanan μ menarik semua orang maju ~ΔN/μ)
```

Nilai kesehatan dari tunggu lebih-pendek: pasien menghabiskan lebih sedikit minggu dalam kondisi-utilitas-lebih-rendah pra-perawatan — aritmatika QALY dalam [rujukan-untuk-perawatan](../rujukan-untuk-perawatan/).

## Contoh yang Diselesaikan

Perangkat lunak dokumentasi-ambient menghemat masing-masing dari 20 perawat-klinik 45 menit/hari. Selama 250 hari: 20 × 0,75 × 250 = 3.750 jam/tahun.

```
Slot (30 menit, 85% dapat-digunakan) = 3.750 / 0,5 × 0,85 = 6.375 slot
Pasien terlihat (7% DNA)             = 6.375 × 0,93       ≈ 5.929/tahun
```

Untuk sebuah spesialisasi dengan daftar 12.000-pasien dan kapasitas 24.000-janji-temu/tahun yang cocok-permintaan, ~5.900 janji-temu tambahan memotong tunggu-rata-rata sekitar seperempat — menggerakkan trust secara material menuju standar 18-minggu tanpa perekrutan. Pada nilai-skema ~£160 per kunjungan, aktivitasnya bernilai ~£949.000/tahun (lihat [tarif nasional dan biaya unit](../tarif-nasional-dan-biaya-unit/)) — tetapi sajikan pembingkaian *daftar-tunggu* dahulu; itulah yang menjadi dasar pengelolaan sistemnya.

## Hubungan dengan Rekayasa Perangkat Lunak

Daftar-tunggu adalah backlog, dan ekonomi bakar-backlog ditransfer dalam kedua arah. Dari kesehatan ke perangkat-lunak: nilai pengurangan-backlog berdasarkan berapa-lama *pengguna* menunggu nilai, bukan berdasarkan item-yang-ditutup ([biaya keterlambatan](../biaya-keterlambatan/) per item-teratre). Dari perangkat-lunak ke kesehatan: Hukum Little mengatakan daftarnya hanya menyusut jika tingkat-layanan melebihi tingkat-kedatangan — keuntungan-kapasitas yang diserap oleh rujukan-yang-meningkat membuat tunggu tak-berubah, jadi modelkan juga kedatangannya. Dan di kedua domain, prioritaskan berdasarkan nilai-berbobot-keparahan (kategori urgensi-klinis ↔ [modifier keparahan](../defisit-qaly-dan-modifier-keparahan/)), bukan pertama-datang-pertama-dilayani.

## Jebakan

- **Slot ≠ pasien**: melupakan tingkat-DNA dan fragmen-tak-dapat-digunakan dari waktu yang dilepaskan.
- **Permintaan yang diinduksi**: kapasitas-ekstra yang terlihat menarik rujukan; dampak-daftar bersih lebih kecil dari bruto.
- **Mengklaim kas**: dampak daftar-tunggu adalah nilai-kapasitas; klaim-kas (outsourcing yang dihindari dari pekerjaan-backlog) adalah garis yang berbeda — lihat [biaya outsourcing yang dapat dihindari](../biaya-outsourcing-yang-dapat-dihindari/).

## Sumber

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
