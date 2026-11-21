# Pengesahan Peranti Boleh Pakai

Metrik pengesahan mengkuantifikasi seberapa baik ukuran peranti boleh pakai bersetuju dengan piawai emas klinikal (ECG untuk kadar jantung, polisomnografi untuk tidur): **MAPE**, korelasi konkordans, persetujuan Bland–Altman — serta metrik operasi yang memagari kualiti data dunia sebenar: **pematuhan masa-pakai** dan **kelengkapan data**.

## Mengapa ia penting

Pengesahan ialah prasyarat bagi segala yang di hiliran: peranti yang tidak dapat membuktikan persetujuan dengan ukuran rujukan tidak boleh menyauh [titik akhir digital](../titik-akhir-dan-biopenanda-digital/), menyokong [pengebilan RPM](../ekonomi-pemantauan-pesakit-jauh/) atau membawa tuntutan klinikal. Ambang diterima bidang untuk kadar jantung: **MAPE ≤5%** (ketat) atau **≤10%** (longgar) terhadap ECG. Titik rujukan daripada literatur: MAPE HR rehat Oura Gen 3 1.67% (CCC 0.97); MAPE Fitbit Charge 6 ~5.5% — peranti pengguna kini merentasi sempadan gred-klinikal, itulah sebabnya pengukuran penting bagi setiap peranti dan setiap keadaan.

## Matematiknya

```
MAPE = (1/n) Σ |diukur_i − rujukan_i| / rujukan_i × 100

CCC (korelasi konkordans) = persetujuan termasuk kedua-dua korelasi
      dan bias sistematik (r Pearson dihukum oleh anjakan lokasi/skala)

Bland–Altman: min bias ± had persetujuan 1.96 SD — menunjukkan sama ada
      ralat bergantung pada magnitud nilai

Get operasi:
Pematuhan masa-pakai = masa dipakai / masa protokol × 100
Kelengkapan data     = titik data diperhatikan / dijangka × 100
```

Pengesahan mesti dilaporkan **setiap keadaan aktiviti** (rehat, gerakan, tidur) dan setiap populasi — penderiaan optik PPG merosot dengan artifak gerakan, sentuhan buruk dan warna kulit lebih gelap, mod kegagalan relevan-ekuiti yang didokumenkan.

## Contoh penyelesaian

Program wad maya memilih peranti boleh pakai pemantauan. Calon A: MAPE rehat 2.1%, MAPE senaman 11.4%. Calon B: rehat 3.8%, senaman 6.9%.

```
Kes penggunaan: pengesanan pesakit merosot di rumah — amaran dicetuskan oleh
HR tinggi berterusan, selalunya semasa aktiviti.
Tajuk calon A (2.1%) memenangi risalah; calon B memenangi kes penggunaan:
pada keadaan relevan-amaran (gerakan), ralat 11.4% A pada HR 100 = ±11 bpm —
merentangi seluruh jalur ambang amaran, menjana eskalasi palsu (masing-masing
panggilan jururawat, ~£40) atau terlepas.

Ekonomi amaran palsu: 500 pesakit × 2 amaran palsu tambahan/minggu × £40
= £2.08J/tahun kos ralat daripada memilih nombor pengesahan yang salah.
```

## Kaitan dengan kejuruteraan perisian

Jurutera menggunakan data pengesahan apabila memilih penderia dan *menghasilkannya* apabila membina ciri pengukuran — kedua-dua peranan memerlukan disiplin sama: uji pada keadaan penggunaan, bukan keadaan demo (analogi perisian: penanda aras pada beban kerja pengeluaran anda, bukan vendor). Masa-pakai dan kelengkapan ialah hasil kejuruteraan produk — keselesaan, hayat bateri, reka bentuk ritual pengecasan dan kebolehpercayaan segerak menentukan sama ada get pengebilan RPM 16-hari-dalam-30 dipenuhi ([ekonomi pemantauan pesakit jauh](../ekonomi-pemantauan-pesakit-jauh/)) dan sama ada set data percubaan boleh dianalisis. Anggap kehilangan sebagai isyarat yang direka: bezakan "tidak dipakai," "dipakai tetapi tiada isyarat" dan "segerak gagal" dalam skema dari hari pertama — dilipat menjadi null, ia meracuni setiap analisis hiliran.

## Perangkap

- **MAPE agregat menyembunyikan kegagalan khusus-keadaan** — perangkap contoh penyelesaian.
- **Populasi pengesahan ≠ populasi penggunaan**: umur, warna kulit, gegaran, obesiti semuanya menganjak ralat penderia optik; semak demografi kajian.
- **Korelasi dilaporkan di mana persetujuan diperlukan**: r Pearson tinggi dengan bias sistematik masih salah klasifikasi terhadap ambang mutlak — berkeras pada CCC/Bland–Altman.
- **Kelengkapan dikembungkan oleh imputasi**: jurang diisi dilaporkan sebagai data diperhatikan.

## Sumber

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
