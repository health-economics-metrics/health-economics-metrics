# Analisis Keputusan Pelbagai Kriteria (MCDA)

Analisis keputusan pelbagai kriteria (MCDA) ialah model pemarkahan hasil tambah berpemberat yang digunakan dalam penilaian teknologi kesihatan apabila satu ambang ICER/kesanggupan membayar tidak menangkap segala yang diambil berat oleh pembuat keputusan: ekuiti, keperluan tidak dipenuhi, inovasi, impak bajet, keterukan penyakit. Setiap kriteria mendapat pemberat yang mencerminkan kepentingannya (dielisit daripada pihak berkepentingan, pemberat berjumlah 1), setiap pilihan mendapat skor ternormal bagi setiap kriteria (lazimnya 0–1), dan skor keseluruhan ialah hasil tambah berpemberat — bentuk matematik sama seperti kad skor pemilihan vendor perisian.

## Mengapa ia penting

MCDA digunakan dalam kerangka seperti EVIDEM, dan oleh sesetengah badan HTA untuk penilaian penyakit yatim/jarang di mana pendekatan ambang kos-setiap-QALY yang ketat dianggap terlalu sempit untuk menangkap segala yang penting tentang keputusan. Pasukan Petugas Amalan Baik Baru Muncul MCDA ISPOR memformalkan panduan amalan baik untuk mengelisit pemberat dan skor secara boleh dipertahankan, tepat kerana keputusan berpemberat tidak formal mudah dibina dan mudah dipermainkan. Apabila teknologi kesihatan benar-benar mempunyai dimensi nilai yang tidak dapat diwakili oleh satu [ambang kesanggupan membayar](../ambang-kesanggupan-membayar/) — keterukan, inovasi, ekuiti — MCDA memberi pembuat keputusan struktur yang jelas dan boleh diaudit untuk menggabungkannya, dan bukan penghakiman yang tidak dinyatakan.

## Matematiknya

```
Skor MCDA = Σ_i (pemberat_i × skor_i)

pemberat patut berjumlah 1 (dielisit melalui kaedah pihak berkepentingan seperti
pemberatan hayun atau Proses Hierarki Analitik)
```

## Contoh penyelesaian

Jawatankuasa HTA memarkah terapeutik digital pada empat kriteria:

```
Kriteria                           Pemberat Skor   Pemberat × Skor
Manfaat klinikal                   0.4      0.8     0.32
Impak kos                          0.3      0.5     0.15
Keterukan penyakit / keperluan tidak dipenuhi 0.2 0.9 0.18
Inovasi                            0.1      0.6     0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Pemberat berjumlah 1.0 (0.4 + 0.3 + 0.2 + 0.1), dan skor MCDA ialah 0.71 (0.32 + 0.15 + 0.18 + 0.06). Jawatankuasa membandingkan 0.71 dengan ambang yang dipersetujui awal, atau memangkatkannya terhadap teknologi bersaing yang dimarkah sama.

## Kaitan dengan kejuruteraan perisian

Ini matematik yang sama seperti kad skor pemilihan vendor berpemberat, matriks penilaian RFP atau model pemarkahan pengutamaan ciri — lihat [bina lwn beli](../bina-lwn-beli/), kes penggunaan kad skor berpemberat klasik dalam perolehan perisian. Wajar juga dibezakan dengan [WSJF dan CD3](../wsjf-dan-cd3/): WSJF/CD3 ialah kaedah pengutamaan berasaskan *nisbah* (kos kelewatan dibahagi saiz kerja atau tempoh), manakala MCDA ialah *hasil tambah* berpemberat. MCDA dan WSJF/CD3 ialah dua jawapan berstruktur berbeza kepada "bagaimana kita memangkatkan pilihan bersaing," dan mengetahui yang mana keputusan tertentu sebenarnya perlukan — nilai tambahan merentas kriteria bebas, lwn ketumpatan nilai bagi setiap unit kapasiti terhad — lebih penting daripada formula mana kelihatan lebih ketat.

## Perangkap

- **Bias elisitasi pemberat**: sesiapa yang menetapkan pemberat secara berkesan menentukan pangkat lebih awal, jadi "formula" boleh mencuci keputusan politik atau komersial sebagai pengiraan objektif. Dokumenkan siapa menetapkan pemberat dan bagaimana.
- **Mengira berganda kriteria yang sudah ditangkap di tempat lain**: memarkah "kos-keberkesanan" sebagai satu kriteria sambil *juga* memarkah "impak kos" secara berasingan memberi pemberat berlebihan kepada wang berbanding kriteria lain tanpa sesiapa berniat demikian.
- **Ketepatan palsu**: skor berpemberat dua-perpuluhan (0.71) membayangkan ketegasan lebih daripada yang sebenarnya disokong penilaian pihak berkepentingan 0–10, dan kebolehubahan antara-penilai dalam penilaian itu selalunya tidak dilaporkan langsung.

## Sumber

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
