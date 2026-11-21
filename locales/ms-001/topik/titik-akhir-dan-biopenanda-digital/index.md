# Titik Akhir dan Biopenanda Digital

Biopenanda digital ialah ukuran fisiologi atau tingkah laku objektif yang dikumpul melalui penderia (kelajuan berjalan daripada telefon, tidur daripada peranti boleh pakai, gegaran daripada akselerometri). Titik akhir digital ialah ukuran sebegitu yang dinaikkan menjadi **hasil percubaan** — digunakan untuk menunjukkan kesan rawatan. Kenaikan daripada "data yang dipancarkan peranti" kepada "bukti yang diterima pengawal selia" melalui tangga pengesahan yang ditakrifkan.

## Mengapa ia penting

Titik akhir percubaan tradisional bersifat episodik (lawatan klinik setiap 3 bulan) dan mahal; titik akhir digital berterusan, ekologi (kehidupan sebenar, bukan prestasi klinik) dan murah bagi setiap pemerhatian — ia boleh mengecilkan percubaan, mengesan kesan lebih awal dan membolehkan kajian terpencar. Tangkapannya ialah pengesahan: kerangka yang diterima (sejajar FDA, tiga tonggak) memerlukan **pengesahan/pengesahan analitik** (penderia mengukur kuantiti fizikal dengan tepat), **pengesahan klinikal** (ukuran mencerminkan keadaan klinikal yang didakwanya), dan **aspek kesihatan bermakna** yang ditunjukkan (pesakit mengambil berat tentang apa yang ditangkapnya). Titik akhir tanpa ketiga-tiganya ialah telemetri, bukan bukti.

## Matematiknya

```
Pengesahan analitik: persetujuan dengan rujukan (lihat wearable-validation.md —
                     MAPE, CCC, Bland-Altman)
Pengesahan klinikal: korelasi/diskriminasi terhadap sauh klinikal
                     (kesahan kumpulan-diketahui, responsif kepada perubahan)
Ekonomi titik akhir:
  peristiwa dikesan bagi setiap pesakit-tahun (berterusan) lwn persampelan setiap lawatan
  kuasa percubaan: ukuran berterusan memotong saiz sampel apabila varians antara-lawatan
  menguasai — N ∝ σ²/Δ², dan σ² jatuh dengan persampelan padat
```

## Contoh penyelesaian

Percubaan Parkinson mempertimbangkan kelajuan berjalan daripada penderia pergelangan lwn skor dinilai klinik suku tahunan:

```
Titik akhir klinik:   4 ukuran/pesakit/tahun, hingar harian tinggi
Titik akhir digital:  ~200 ukuran pasif/pesakit/tahun

Varians anggaran perubahan tahunan jatuh ~5× dengan persampelan padat →
saiz kesan boleh dikesan pada kuasa tetap bertambah baik ~√5 ≈ 2.2×, atau
setara saiz sampel mengecil ~40–60% bagi hipotesis sama.
Pada £25,000 bagi setiap pesakit didaftarkan, memotong 200 pesakit ≈ £5J dijimatkan
setiap percubaan — kes komersial untuk pelaburan pengesahan
(sendiri mungkin £1–2J) merentas saluran paip penaja.
```

## Kaitan dengan kejuruteraan perisian

Titik akhir digital ialah disiplin kejuruteraan data yang berpakaian klinikal: **asal-usul dan pemversian** (kemas kini algoritma pertengahan kajian mengancam kebolehbandingan — masalah [PCCP](../penilaian-kawal-selia-ai/) dalam bentuk percubaan; kunci versi dan sahkan-jambatan); **reka bentuk data hilang** (jurang masa-pakai bersifat bermaklumat, bukan rawak — lihat [pengesahan boleh pakai](../pengesahan-peranti-boleh-pakai/); pilihan imputasi ialah tuntutan saintifik); dan **keputusan pembahagian tepi/awan** yang mengubah isyarat mentah apa yang masih boleh dipulihkan kemudian. Pasukan yang menganggap saluran paip pengukuran sebagai perisian terkawal selia dari hari pertama — diuji, berversi, didokumenkan — membeli kredibiliti titik akhir mereka dengan murah; menambah pengesahan ke atas saluran paip yang bergerak pantas ialah tempat program titik akhir digital mati.

## Perangkap

- **Korelasi-dengan-klinik sebagai pengesahan penuh**: memadankan ukuran klinik yang cacat membuktikan warisan, bukan kebenaran; sahkan terhadap aspek kesihatan bermakna.
- **Risiko kawal selia titik akhir baharu**: titik akhir tanpa duluan mungkin unggul secara saintifik namun menenggelamkan penyerahan — libatkan pengawal selia awal (program kelayakan wujud).
- **Ketidakpadanan penderia-populasi**: pengesahan pada pergelangan muda sihat, penggunaan pada pesakit warga emas dengan gegaran dan perbezaan pigmentasi yang tidak pernah dilihat PPG.
- **Hanyutan ciri**: melatih semula algoritma berjalan pada data baharu menakrif semula titik akhir secara senyap pertengahan kajian.

## Sumber

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
