# Retensi Tenaga Kerja

Ekonomi retensi tenaga-kerja mengukur berapa biaya perputaran-staf bagi sistem-kesehatan — perekrutan, orientasi, cakupan-lowongan — dan karenanya berapa nilai perangkat-lunak yang mengurangi kelelahan-administratif. Kelelahan dari tugas-data administratif yang berulang adalah pendorong-utama perputaran-staf dan absensi-sakit dalam NHS.

## Mengapa Ini Penting

Ketika seorang klinisi berhenti, trust membayar tiga-kali: untuk merekrut pengganti (iklan, biaya-agensi, wawancara), untuk mengorientasikannya (bulan-bulan produktivitas berkurang, supervisi), dan untuk mencakup lowongan sementara itu — biasanya dengan staf agensi atau lokum pada 2–3× tarif substantif Agenda for Change (lihat [biaya outsourcing yang dapat dihindari](../biaya-outsourcing-yang-dapat-dihindari/) dan [penghematan pelepas-kas keras](../penghematan-pelepas-kas-keras-pertahanan-defisit/)). Karena biaya-perputaran adalah kas nyata, perbaikan-retensi termasuk di antara sedikit manfaat-tenaga-kerja yang dapat dibank seorang direktur-finansial. Gesekan-administratif secara konsisten termasuk di antara pendorong yang-paling-dikutip dari kelelahan-klinis, yang menjadikannya biaya yang dapat-ditangani-perangkat-lunak.

## Perhitungan

```
Biaya per-yang-berhenti = biaya perekrutan + biaya orientasi/rampa-produktivitas
                + premium cakupan-lowongan × durasi-lowongan

Biaya perputaran tahunan = jumlah-staf × tingkat-perputaran × biaya per-yang-berhenti

Nilai perangkat-lunak  = jumlah-staf × Δtingkat-perputaran × biaya per-yang-berhenti
                   + pengurangan absensi-sakit × biaya-cakupan/hari
```

Rantai kausalnya memiliki dua tautan-terestimasi — perangkat-lunak → kelelahan/gesekan, dan kelelahan → perputaran — jadi buktikan keduanya (survei staf sebelum/sesudah; asosiasi kelelahan-atrisi yang dipublikasikan) dan jaga Δ yang diklaim tetap sederhana.

## Contoh yang Diselesaikan

Sebuah trust mempekerjakan 1.200 perawat; perputaran 11%/tahun. Biaya per-yang-berhenti:

```
Perekrutan ≈ £4.500;  orientasi/rampa ≈ £6.000
Cakupan lowongan: 4 bulan × 0,6 WTE dicakup premium-agensi ≈ £8.000
Total ≈ £18.500 per-yang-berhenti
Biaya perputaran dasar = 1.200 × 0,11 × 18.500 ≈ £2,44 juta/tahun
```

Perangkat lunak beban-dokumentasi (penilaian pra-isi-otomatis, single sign-on, dikte) dengan masuk-akal menggerakkan perputaran 1 poin-persentase:

```
Nilai = 1.200 × 0,01 × 18.500 = £222.000/tahun relevan-kas
```

Klaim 1-poin yang didukung skor-gesekan survei-staf dapat-dipercaya; klaim 4-poin tidak. Jalankan [tornado](../analisis-sensitivitas/) pada Δperputaran: ia mendominasi segalanya yang lain dalam model.

## Hubungan dengan Rekayasa Perangkat Lunak

Aritmatika-retensi rekayasa identik dan lebih-buruk-terdokumentasi: mengganti seorang insinyur-senior berbiaya 6–12 bulan gaji-berbobot (perekrutan, rampa, konteks-hilang), sehingga organisasi 200-orang pada atrisi-15% membakar jutaan tahunan dalam perputaran. Investasi pengalaman-pengembang ([SPACE dan DevEx](../space-dan-devex/)) adalah analog-langsung dari pelegaan beban-dokumentasi untuk perawat — dan seharusnya dibenarkan dengan cara yang sama: skor-gesekan terukur, efek-diklaim yang sederhana pada atrisi, biaya per-yang-berhenti dari data-finansial Anda sendiri. Disiplin ekonomi-kesehatan yang harus disalin adalah *membiayai orang-yang-berhenti secara jujur* alih-alih berdebat apakah orang "benar-benar" pergi karena perkakas.

## Jebakan

- **Mengatribusikan semua gerakan-perputaran pada intervensi Anda** — pasar-tenaga-kerja menggerakkan perputaran jauh lebih banyak daripada perangkat-lunak; gunakan kelompok-kontrol atau setidaknya penyesuaian-tren-sektor.
- **Penghitungan ganda**: penghematan-retensi dan penghematan-belanja-agensi tumpang-tindih (cakupan-lowongan *adalah* belanja-agensi); rekonsiliasikan garis-garisnya.
- **Mengabaikan jeda**: atrisi yang-digerakkan-kelelahan merespons perubahan-gesekan selama 1–2 tahun, bukan kuartal berikutnya.

## Sumber

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
