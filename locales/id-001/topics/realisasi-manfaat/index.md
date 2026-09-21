# Realisasi Manfaat

Manajemen realisasi manfaat (BRM) adalah disiplin mengidentifikasi, menetapkan garis dasar, melacak, dan *membuktikan* bahwa manfaat yang dijanjikan dalam kasus bisnis benar-benar terwujud setelah penyampaian. Dalam investasi publik Inggris, ia berada dalam **Five Case Model** Green Book HM Treasury; dalam kedokteran, sepupunya adalah pengawasan pasca-pasar.

## Mengapa Ini Penting

Kasus bisnis adalah janji; realisasi manfaat adalah auditnya. Evaluasi program digital NHS besar berulang kali menemukan manfaat yang diperkirakan tidak pernah terwujud — dan ketika manfaat tidak melepaskan kas, mereka tidak melakukan apa pun untuk hasil akhir trust. Respons Green Book: setiap kasus pengeluaran harus melewati **lima kasus** (strategis, ekonomi, komersial, finansial, manajemen), dengan realisasi manfaat direncanakan dalam kasus manajemen *sebelum persetujuan* — pemilik dinamai, garis dasar ditangkap, tanggal pengukuran ditetapkan. Tanpa ini, "perangkat lunak menghemat 30 menit per perawat" tetap fiksi vendor selamanya.

## Perhitungan

```
Tingkat realisasi = manfaat terealisasi / manfaat diperkirakan   (per manfaat, per periode)

Mekanika yang membuatnya dapat dihitung:
  garis dasar ditangkap SEBELUM go-live (jika tidak selisihnya tidak dapat diukur)
  setiap manfaat: pemilik, metrik, sumber data, jadwal pengukuran
  perkiraan disesuaikan untuk bias optimisme pada penilaian (mandat Green Book)
  manfaat diklasifikasikan kas / non-kas / kualitatif dan dilacak terpisah
  (lihat cash-releasing-vs-non-cash-releasing.md)
```

## Contoh yang Diselesaikan

Sebuah kasus bisnis penjadwalan elektronik menjanjikan, per tahun: £450rb pengurangan pengeluaran agensi (kas), 8.000 jam manajer bangsal (kapasitas), kepatuhan tingkat-pengisian yang membaik (kualitatif). Dua belas bulan pasca-go-live:

```
Manfaat           Diperkirakan  Terealisasi  Tingkat  Bukti
Pengeluaran agensi £450.000     £287.000     64%      buku besar vs tahun dasar
Jam manajer        8.000        5.100        64%      sampel gerak-waktu
Kepatuhan pengisian +10pp       +12pp        120%     data sistem penjadwalan

Tindakan dari tinjauan (inti dari BRM):
kekurangan agensi dilacak ke dua bangsal yang tidak pernah diintegrasikan → integrasikan mereka;
kesalahan optimisme 30% model perkiraan dicatat → diterapkan pada kasus berikutnya.
```

Realisasi 64% bukanlah kegagalan — itu adalah *pengetahuan*. Kasus yang tidak diukur mengklaim 100% selamanya.

## Hubungan dengan Rekayasa Perangkat Lunak

Organisasi rekayasa menyetujui investasi platform berdasarkan manfaat yang diperkirakan dan hampir tidak pernah mengauditnya — patologi persis yang diperbaiki BRM. Port ringannya: setiap proposal di atas ambang batas menyebutkan pemilik manfaat, metrik garis dasar, dan tanggal tinjauan T+6 bulan; tingkat realisasi memberi umpan balik ke berapa banyak organisasi mendiskon perkiraan tim (atau vendor) itu berikutnya. Ini juga jawaban untuk skeptisisme perkakas-AI: [temuan MIT bahwa ~95% uji coba GenAI tidak menunjukkan pengembalian P&L terukur](../pengembalian-investasi-ai/) adalah hasil realisasi-manfaat — uji coba yang *memiliki* pengembalian memiliki garis manfaat yang dapat dilacak dan dimiliki. Perkirakan → ukur → kalibrasi ulang adalah putaran yang sama dengan uji coba yang dihargai [EVPI](../nilai-harapan-dari-informasi-sempurna/), dijalankan pada skala portofolio.

## Jebakan

- **Tidak ada garis dasar pra-go-live** — kelalaian fatal yang tidak dapat diperbaiki.
- **Manfaat yatim**: tidak ada pemilik yang dinamai berarti tidak ada yang mengumpulkan data dan setiap tinjauan mengatakan "secara umum sesuai jalur".
- **Manfaat yang dihitung ganda antar program** mengklaim kapasitas bebas yang sama — pertahankan register manfaat di seluruh portofolio.
- **Teater realisasi**: mengukur kemenangan kualitatif yang mudah sementara garis kas diam-diam tidak diperiksa.

## Sumber

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
