# Metrik Alur

Metrik alur mengukur bagaimana pekerjaan bergerak melalui sistem penyampaian: waktu siklus, waktu tunggu, throughput, pekerjaan-dalam-proses (WIP), dan efisiensi alur. Mereka diatur oleh Hukum Little — matematika antrean yang sama yang mengatur tempat tidur rumah sakit dan daftar tunggu.

## Mengapa Ini Penting

Sebagian besar waktu penyampaian bukanlah pekerjaan — ini adalah menunggu. Studi efisiensi-alur pekerjaan pengetahuan secara rutin menemukan item yang secara aktif dikerjakan hanya **5–15%** dari waktu berjalannya; sisanya adalah antrean. Itu berarti percepatan termurah adalah penghapusan antrean, bukan perekrutan — persis wawasan yang ditemukan program alur-pasien rumah sakit tentang tempat tidur. Untuk apa pun dengan [biaya keterlambatan](../biaya-keterlambatan/), metrik alur menemukan di mana biaya keterlambatan menumpuk.

## Perhitungan

```
Waktu siklus     = t(selesai) − t(dimulai)
Waktu tunggu     = t(disampaikan) − t(diminta)     (termasuk antrean pra-kerja)
Throughput       = item diselesaikan / periode
WIP              = item dimulai tetapi belum selesai
Efisiensi alur   = waktu aktif / (waktu aktif + waktu tunggu) × 100

Hukum Little:  WIP rata-rata = throughput × waktu siklus rata-rata
               (setara: waktu siklus = WIP / throughput)
```

Hukum Little adalah tuasnya: pada throughput tetap, memotong WIP memotong waktu siklus secara proporsional. Ini juga menjalankan rumah sakit: `tempat tidur terisi = tingkat admisi × lama tinggal rata-rata`.

## Contoh yang Diselesaikan

Sebuah tim memiliki 40 item dalam proses dan menyelesaikan 10/minggu: waktu siklus = 40/10 = 4 minggu. Mereka menerapkan batas WIP, memotong WIP menjadi 15: waktu siklus = 15/10 = **1,5 minggu** — orang yang sama, throughput yang sama, penyampaian 62% lebih cepat, murni dari disiplin antrean.

Dihargai dengan CoD: jika item rata-rata £3.000/minggu biaya keterlambatan, setiap item sekarang menghabiskan 2,5 minggu lebih sedikit dalam antrean: 10 item/minggu × 2,5 × 3.000 = **£75.000/minggu biaya keterlambatan yang dihilangkan** — dari perubahan kebijakan yang tidak berbiaya apa pun.

Cermin rumah sakit: 40 admisi/hari × 6,0 hari LOS = 240 tempat tidur; potong tunggu non-klinis di dalam LOS menjadi 5,6 hari dan 16 tempat tidur terbebaskan ([lama tinggal](../lama-tinggal/)) — hukum yang sama, tuas yang sama.

## Hubungan dengan Rekayasa Perangkat Lunak

Metrik alur adalah bahasa bersama antara rekayasa-penyampaian dan operasi-kesehatan:

- **Tolok ukur sub-tahap PR** (LinearB, ~8 juta PR): waktu ambil elite < 7j, tinjauan < 6j, siklus total < ~26j — waktu ambil adalah antrean murni, hal pertama yang diserang.
- **[Daftar tunggu](../dampak-daftar-tunggu/)** adalah backlog; **[RTT](../rujukan-untuk-perawatan/)** adalah waktu tunggu; **[okupansi tempat tidur](../hari-tempat-tidur-yang-dihemat/)** adalah WIP. Perbaikan ditransfer dalam kedua arah: batas WIP ↔ penghalusan admisi; instrumentasi waktu-antrean ↔ pelacakan tahap-jalur.
- Efisiensi alur di bawah 15% adalah normal di kedua domain, dan keduanya menyembunyikannya karena *orang* sibuk sementara *pekerjaan* menunggu — ukur jam pekerjaannya, bukan jam pekerjanya.

## Jebakan

- **Pemujaan pemanfaatan**: mendorong pemanfaatan pekerja menuju 100% meledakkan waktu antrean secara non-linear (M/M/1: tunggu ∝ ρ/(1−ρ)) — alasan mengapa rumah sakit 95%-terisi macet dan tim 95%-teralokasi terhenti.
- **Rata-rata atas distribusi miring**: waktu siklus berekor-berat; perkirakan dengan persentil (p85), bukan rata-rata.
- **Memotong WIP dengan menolak pekerjaan di hulu** dan menyebutnya perbaikan alur — permintaannya tidak menghilang, ia mengantre di luar batas pengukuran (versi rumah sakit: ambulans menunggu di luar IGD).

## Sumber

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
