# Analisis Minimalisasi Biaya (CMA)

CMA hanya membandingkan biaya, dan memilih pilihan termurah — sah *hanya* ketika hasil dari alternatif telah dibuktikan setara.

## Mengapa Ini Penting

CMA adalah analisis paling sederhana dan paling disalahgunakan. Klaim ekuivalensi melakukan semua pekerjaan: jika hasil benar-benar tidak berbeda (biosimilar vs originatornya; dua pemasok layanan yang sama memenuhi spesifikasi yang sama), maka biaya adalah satu-satunya pertanyaan dan CMA benar. Kekakuannya terletak pada *membuktikan* ekuivalensi terlebih dahulu — biasanya melalui studi non-inferioritas dengan margin yang ditentukan sebelumnya — yang persis merupakan langkah yang biasanya dilewati pembeli.

## Perhitungan

```
Diberikan bukti bahwa Efek_A ≈ Efek_B (dalam margin δ yang ditentukan sebelumnya):
Pilih min(Biaya_A, Biaya_B)

Biaya diukur dari perspektif yang sama, selama horizon yang sama,
termasuk biaya peralihan/transisi.
```

Jika ekuivalensi tidak dapat dibuktikan, CMA tidak valid — gunakan [CEA](../analisis-efektivitas-biaya/)/[CUA](../analisis-biaya-utilitas/) sebagai gantinya.

## Contoh yang Diselesaikan

Sebuah trust memilih antara dua platform video-konsultasi. Uji coba paralel 3-bulan menunjukkan tingkat penyelesaian 94,1% vs 93,8%, kepuasan pasien 4,4 vs 4,4 — selisih dalam δ 2 poin persentase yang disepakati sebelumnya. Hasil: setara. Biaya selama 3 tahun:

```
                     Platform A     Platform B
Lisensi              £360.000       £210.000
Integrasi            £80.000        £150.000
Pelatihan/dukungan   £60.000        £90.000
Total                £500.000       £450.000
```

Platform B menang dengan £50.000 — *termasuk* biaya integrasinya yang lebih tinggi. Tanpa uji coba, klaim ekuivalensi akan bertumpu pada brosur vendor, dan selisih tingkat-penyelesaian 1-poin (≈ ribuan konsultasi gagal/tahun) akan mengerdilkan £50.000.

## Hubungan dengan Rekayasa Perangkat Lunak

CMA adalah bentuk formal pengadaan komoditas: dua penyedia CI yang memenuhi SLO identik, dua penyimpanan objek dengan spesifikasi durabilitas yang sama. Pelajaran ekonomi-kesehatannya adalah *urutan operasi*: buktikan ekuivalensi terlebih dahulu (tolok ukur terhadap beban kerja Anda, uji coba terhadap SLO Anda, dengan margin yang disepakati sebelumnya), lalu bandingkan total biaya termasuk migrasi. "Mereka pada dasarnya sama, B lebih murah" tanpa langkah pertama adalah bagaimana organisasi membeli alat yang 10% lebih murah dan 40% lebih buruk. Konsekuensinya: ketika vendor berargumen harga, buat mereka menetapkan ekuivalensi — ini mengikat ke arah lain juga.

## Jebakan

- **Ekuivalensi yang diasumsikan** — dosa yang mendefinisikan; ketiadaan bukti perbedaan bukan bukti ekuivalensi (uji coba yang kurang bertenaga "menunjukkan" ekuivalensi secara gratis).
- **Menghilangkan biaya peralihan** — migrasi, pelatihan ulang, dan operasi paralel termasuk dalam sisi biaya.
- **Ekuivalensi pada hasil yang salah**: setara pada metrik yang diukur, berbeda pada yang penting (aksesibilitas, latensi ekor, keluaran data).

## Sumber

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
