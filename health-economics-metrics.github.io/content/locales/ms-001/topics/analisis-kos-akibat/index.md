# Analisis Kos-Akibat (CCA)

CCA membentangkan kos bersama **jadual terpisah semua hasil** — klinikal, operasi, pengalaman — tanpa meruntuhkannya menjadi satu nisbah atau skor. Pembuat keputusan menimbang pertukaran secara jelas.

## Mengapa ia penting

CCA ialah **format ekonomi pilihan NICE bagi kebanyakan teknologi kesihatan digital** di bawah Kerangka Piawaian Bukti. Produk digital menghasilkan kesan heterogen (masa dijimatkan, kepuasan, pengurangan DNA, keuntungan klinikal kecil) yang menentang agregasi jujur kepada satu nombor QALY. Daripada memaksa komposit yang rapuh, CCA menunjukkan lejar penuh. Bagi kebanyakan kes perniagaan perisian, ia format paling jujur sekali gus paling meyakinkan, kerana setiap pihak berkepentingan dapat mencari baris relevan keputusan mereka sendiri.

## Matematiknya

Sengaja tiada formula agregasi. Outputnya ialah jadual:

```
                          Intervensi     Pembanding   Perbezaan
Kos (tahunan)             £X             £Y           ΔC
Hasil 1 (unit semula jadi) …             …            Δ1
Hasil 2                   …              …            Δ2
Hasil kualitatif          diperihalkan, tidak diskor
```

Setiap baris mengekalkan unitnya sendiri. Peraturan: setiap akibat dipratentukan (tiada pilih-pilih selepas keputusan); [perspektif](../perspektif-analisis/) dan [ufuk](../ufuk-masa/) sama sepanjang; ketidakpastian setiap baris.

## Contoh penyelesaian

Platform penilaian praoperatif digital lwn proses berasaskan telefon, setahun, satu trust:

```
                              Digital      Telefon     Perbezaan
Kos operasi                   £180,000     £95,000     +£85,000
Jam jururawat bagi penilaian  6,200        11,800      −5,600 jam
Pembatalan pembedahan hari-H  92           174         −82
Kepuasan pesakit (CSAT)       4.5/5        3.9/5       +0.6
Penilaian hilang/tidak lengkap 1.2%        4.8%        −3.6 pp
```

Tiada skor tunggal — tetapi keputusannya mudah dihujahkan: £85,000 membeli 5,600 jam jururawat (≈ £15/jam, jauh di bawah mana-mana kos kakitangan), 82 pembatalan dielakkan (masing-masing membazirkan slot teater bernilai ~£1,200) dan pengalaman lebih baik. Jawatankuasa juga dapat melihat dengan tepat apa yang *tidak* diperoleh: tiada kesan QALY atau kematian yang dituntut.

## Kaitan dengan kejuruteraan perisian

CCA ialah versi formal kad skor seimbang yang sudah digunakan cadangan platform yang baik: kos di sebelah metrik DORA, skor DevEx, kiraan insiden — tanpa agregasi. Disiplin ekonomi kesihatan untuk ditambah: **pratentukan baris** (putuskan apa yang dikira sebelum projek perintis, supaya anda tidak boleh senyap-senyap menggugurkan metrik yang bertambah buruk), dan **tunjukkan baris yang tidak menyenangkan** — CCA dengan hanya berita baik ialah pemasaran. Gunakan CCA apabila tiada komposit yang boleh dipertahankan, yang bagi alat pembangun hampir selalu begitu.

## Perangkap

- **Akibat dipilih-pilih** — integriti format bergantung pada pratentuan.
- **Agregasi diseludup**: pengekodan warna atau "skor keseluruhan" memperkenalkan semula pemberat sewenang-wenang yang CCA wujud untuk elakkan.
- **Lumpuh keputusan**: CCA memerlukan pembuat keputusan yang sanggup menimbang pertukaran; pasangkan dengan cadangan dan penaakulannya.

## Sumber

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
