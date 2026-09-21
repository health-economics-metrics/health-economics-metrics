# Perspektif Analisis

Perspektif mendefinisikan *biaya dan manfaat siapa* yang dihitung dalam analisis ekonomi: pembayar, penyedia, atau masyarakat secara keseluruhan. Intervensi yang sama dapat terlihat brilian dari satu perspektif dan buruk dari perspektif lain.

## Mengapa Ini Penting

Setiap evaluasi ekonomi harus menyatakan perspektifnya di muka, karena perspektif menentukan pos-pos mana yang ada:

- **Perspektif pembayar** (mis., komisioner NHS, perusahaan asuransi): hanya biaya yang diganti oleh pembayar.
- **Perspektif penyedia** (mis., sebuah trust rumah sakit): biaya penyampaian internal, staf, aset.
- **Perspektif masyarakat**: segalanya — termasuk waktu pasien, perjalanan, perawatan informal oleh keluarga, dan kerugian produktivitas bagi pemberi kerja.

Kasus rujukan NICE menggunakan perspektif **NHS dan Personal Social Services (PSS)** untuk biaya. Second Panel on Cost-Effectiveness AS merekomendasikan pelaporan baik analisis sektor kesehatan maupun masyarakat dengan "inventaris dampak" yang mendaftarkan apa yang termasuk.

## Perhitungan

Tidak ada rumus — aturan pelingkupan yang diterapkan sebelum perhitungan apa pun:

```
Kategori biaya/manfaat yang termasuk = f(perspektif)
```

Pemeriksaan yang berguna: bangun tabel inventaris dampak dengan satu baris per biaya/manfaat dan satu kolom per perspektif, dan tandai sel mana yang dihitung.

## Contoh yang Diselesaikan

Sebuah aplikasi pemeriksa gejala mengalihkan 10.000 kunjungan dokter umum per tahun ke perawatan mandiri.

- **Pembayar (NHS)**: menghemat 10.000 × £42 per konsultasi dokter umum = **£420.000/tahun** — sangat positif.
- **Penyedia (praktik dokter umum)**: jika praktik dibayar berdasarkan kapitasi, pendapatan mereka tidak berubah tetapi beban kerja turun — sedikit positif.
- **Masyarakat**: tambahkan waktu perjalanan dan tunggu pasien yang dihemat, katakanlah 10.000 × 2 jam × £15/jam = £300.000 nilai waktu; tetapi kurangi bahaya jika 2% salah ditenangkan dan datang kemudian, lebih sakit, pada 200 × £3.000 = £600.000 perawatan tambahan. Bersih masyarakat: 420.000 + 300.000 − 600.000 = **£120.000/tahun** — positif, tetapi didominasi oleh asumsi keselamatan.

Aplikasi yang sama, tiga jawaban berbeda. Pernyataan perspektif adalah apa yang membuat angka-angka dapat dibandingkan dan jujur.

## Hubungan dengan Rekayasa Perangkat Lunak

ROI alat dan platform juga memiliki perspektif:

- **Anggaran tim ("pembayar")**: apakah biaya lisensi sesuai dengan pusat biaya saya?
- **Organisasi platform ("penyedia")**: total biaya termasuk integrasi, dukungan, dan pemeliharaan.
- **Perusahaan ("masyarakat")**: sertakan dampak pelanggan, eksternalitas keamanan, dan waktu setiap tim yang terpengaruh.

Alat CI yang murah untuk tim pembeli tetapi mendorong pekerjaan migrasi ke 40 tim lain adalah versi perangkat lunak dari pengalihan biaya — hanya terlihat dari perspektif yang lebih luas. Nyatakan perspektif dalam setiap kasus bisnis; peninjau tidak dapat menantang asumsi yang tidak dapat mereka lihat.

## Jebakan

- **Pergantian perspektif diam-diam**: menghitung manfaat masyarakat tetapi hanya biaya pembayar membuat apa pun terlihat efektif biaya.
- **Penghitungan ganda** ketika perspektif digabungkan (mis., menghitung janji temu dokter umum yang dihemat sebagai baik penghematan pembayar maupun penghematan waktu pasien ketika angka pembayar sudah termasuk waktu staf).
- **Mengabaikan pengalihan biaya**: "penghematan" yang hanya memindahkan biaya ke pasien, perawat, atau departemen lain.

## Sumber

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
