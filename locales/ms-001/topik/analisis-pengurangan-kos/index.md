# Analisis Pengurangan Kos (CMA)

CMA hanya membandingkan kos, dan memilih pilihan termurah — sah *hanya* apabila hasil alternatif telah dibuktikan setara.

## Mengapa ia penting

CMA ialah analisis paling mudah dan paling disalahgunakan. Tuntutan kesetaraan melakukan semua kerja: jika hasil benar-benar tidak berbeza (biosimilar lwn asalnya; dua pembekal perkhidmatan sama yang memenuhi spesifikasi sama), maka kos satu-satunya soalan dan CMA betul. Ketegasan terletak pada *membuktikan* kesetaraan dahulu — lazimnya melalui kajian bukan-inferioriti dengan margin pratentu — langkah yang biasanya dilangkau pembeli.

## Matematiknya

```
Diberi bukti bahawa Kesan_A ≈ Kesan_B (dalam margin pratentu δ):
Pilih min(Kos_A, Kos_B)

Kos diukur dari perspektif sama, atas ufuk sama,
termasuk kos penukaran/peralihan.
```

Jika kesetaraan tidak dapat dibuktikan, CMA tidak sah — gunakan [CEA](../analisis-kos-keberkesanan/)/[CUA](../analisis-kos-utiliti/) sebaliknya.

## Contoh penyelesaian

Sebuah trust memilih antara dua platform konsultasi video. Projek perintis selari 3 bulan menunjukkan kadar penyiapan 94.1% lwn 93.8%, kepuasan pesakit 4.4 lwn 4.4 — perbezaan dalam δ yang dipersetujui lebih awal iaitu 2 mata peratusan. Hasil: setara. Kos selama 3 tahun:

```
                     Platform A     Platform B
Lesen                £360,000       £210,000
Integrasi            £80,000        £150,000
Latihan/sokongan     £60,000        £90,000
Jumlah               £500,000       £450,000
```

Platform B menang sebanyak £50,000 — *termasuk* kos integrasinya yang lebih tinggi. Tanpa projek perintis, tuntutan kesetaraan akan bergantung pada risalah vendor, dan perbezaan kadar penyiapan 1 mata (≈ beribu konsultasi gagal/tahun) akan mengatasi £50,000.

## Kaitan dengan kejuruteraan perisian

CMA ialah bentuk formal perolehan komoditi: dua pembekal CI yang memenuhi SLO sama, dua stor objek dengan spesifikasi ketahanan sama. Pengajaran ekonomi kesihatan ialah *susunan operasi*: mula-mula buktikan kesetaraan (penanda aras terhadap beban kerja anda, projek perintis terhadap SLO anda, dengan margin dipersetujui lebih awal), kemudian bandingkan jumlah kos termasuk migrasi. "Mereka pada asasnya sama, B lebih murah" tanpa langkah pertama ialah cara organisasi membeli alat yang 10% lebih murah dan 40% lebih teruk. Akibatnya: apabila vendor berhujah harga, suruh mereka menetapkan kesetaraan — ia mengikat dalam arah sebaliknya juga.

## Perangkap

- **Kesetaraan yang diandaikan** — dosa penentu; ketiadaan bukti perbezaan bukan bukti kesetaraan (projek perintis kurang kuasa "menunjukkan" kesetaraan secara percuma).
- **Meninggalkan kos penukaran** — migrasi, latihan semula dan operasi selari tergolong dalam sisi kos.
- **Kesetaraan pada hasil yang salah**: setara pada metrik yang diukur, berbeza pada satu yang penting (kebolehcapaian, kependaman ekor, egress data).

## Sumber

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
