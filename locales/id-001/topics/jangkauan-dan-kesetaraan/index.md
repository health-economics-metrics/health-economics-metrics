# Jangkauan dan Kesetaraan

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance (Jangkauan, Efektivitas, Adopsi, Implementasi, Pemeliharaan) — adalah kerangka standar untuk menilai dampak *populasi* dari sebuah intervensi. Aritmatika sentralnya: **dampak kesehatan-masyarakat ≈ jangkauan × efektivitas**. Alat digital menambahkan dimensi kesetaraan: kesenjangan digital berarti jangkauan secara sistematis tidak-merata, dan penyampaian digital-pertama dapat memperlebar kesenjangan-kesehatan yang bertujuan ditutupnya.

## Mengapa Ini Penting

Tinjauan sistematis yang menerapkan RE-AIM pada mHealth menemukan tanda-tangan yang konsisten: Jangkauan dan Adopsi kuat, **Efektivitas dan Pemeliharaan lemah** — aplikasi menyebar dengan mudah dan memudar dengan cepat. Bagi sistem kesehatan nasional, ini berarti produk yang mengesankan-per-pengguna dapat menjadi investasi-populasi yang buruk, dan sebaliknya: alat yang efektivitasnya sedang yang menjangkau jutaan dapat melampaui-produksi yang cemerlang yang menjangkau ribuan (lihat aritmatika [HALE](../harapan-hidup-yang-disesuaikan-kesehatan/)). Kesetaraan bukan kendala-sampingan melainkan penggerak-nilai: eksklusi digital melacak usia, kekurangan, disabilitas, dan bahasa — persis populasi yang membawa beban paling-dapat-dirawat — sehingga pengguna-marginal yang dikecualikan sering memiliki manfaat-potensial *di-atas-rata-rata*.

## Perhitungan

```
Dampak populasi ≈ jangkauan × efektivitas
  jangkauan     = partisipan / populasi memenuhi-syarat (lihat activation-and-uptake.md)
  efektivitas   = efek dunia-nyata di antara partisipan (berbobot-retensi —
                  lihat retention-and-churn.md)

Versi terstratifikasi-kesetaraan:
  dampak_kelompok_g = jangkauan_g × efektivitas_g, dilaporkan per kuintil
  kekurangan / kelompok-usia / kelompok-bahasa
  kesenjangan kesetaraan = dampak_kuintil_atas − dampak_kuintil_bawah

Efektivitas-biaya distributif: terapkan bobot kesetaraan pada QALY berdasarkan
kelompok-penerima — satu QALY untuk yang-paling-kekurangan dihitung lebih tinggi
(perluasan HTA yang semakin mainstream).
```

## Contoh yang Diselesaikan

Program pencegahan-diabetes digital, dilaporkan dua cara:

```
Agregat: jangkauan 12%, efek 0,02 QALY/partisipan → 0,0024 QALY/orang-memenuhi-syarat

Terstratifikasi (kuintil kekurangan):
  Q1 (paling tidak-kekurangan): jangkauan 22%, efek 0,02 → 0,0044
  Q5 (paling kekurangan):       jangkauan 4%,  efek 0,025 → 0,0010

Program menyampaikan 4,4× lebih banyak kesehatan kepada yang-paling-tidak-kekurangan —
sementara efek per-partisipan Q5 LEBIH TINGGI (lebih banyak ruang-tumbuh). Sebuah
lengan digital-berbantuan (pembinaan telepon + akses komunitas) yang berbiaya
20% lebih per partisipan Q5 yang mengangkat jangkauan Q5 menjadi 12% melipatgandakan
dampak Q5 dan memperbaiki agregatnya — investasi kesetaraan ADALAH investasi
efisiensi di sini.
```

## Hubungan dengan Rekayasa Perangkat Lunak

Jangkauan secara substansial adalah artefak rekayasa: persyaratan-minimum perangkat dan OS, asumsi bandwidth, dukungan bahasa, kepatuhan aksesibilitas (WCAG), hambatan verifikasi-identitas, dan distribusi hanya-toko-aplikasi masing-masing memotong populasi dari penyebut — biasanya secara tak-terlihat, karena pengguna-yang-dikecualikan tidak pernah muncul dalam analitik. Praktik rekayasa yang menggerakkan kesetaraan: ukur *penyebutnya* (instrumenkan populasi-memenuhi-syarat, bukan hanya pengguna); anggarkan kinerja untuk perangkat lama dan konektivitas buruk; kirim jalur digital-berbantuan (telepon, SMS, kios) sebagai alur kelas-satu alih-alih saluran-malu; dan stratifikasikan setiap metrik dasbor berdasarkan dimensi kesetaraan — rata-rata yang tidak-terstratifikasi adalah di mana ketidaksetaraan bersembunyi ([keterserapan GDS](../metrik-layanan-gds/) membawa peringatan yang sama).

## Jebakan

- **Efektivitas dilaporkan pada penyelesai, dampak diklaim pada populasi** — istilah jangkauan secara diam-diam dijatuhkan.
- **Kesetaraan sebagai audit-belakangan** alih-alih input-desain; menambahkan-kembali jangkauan jauh lebih mahal daripada merancang untuknya.
- **Amnesia pemeliharaan**: dimensi mHealth paling-lemah RE-AIM — klaim dampak melampaui horizon-waktu bukti.
- **Penghematan hanya-saluran-digital** yang memindahkan biaya ke pengguna-yang-dikecualikan dan staf-garis-depan (lihat [metrik layanan GDS](../metrik-layanan-gds/)).

## Sumber

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
