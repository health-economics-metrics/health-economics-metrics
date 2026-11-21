# Pematuhan dan Kegigihan

Pematuhan ialah sejauh mana penggunaan sebenar menepati penggunaan yang ditetapkan (keamatan); kegigihan ialah berapa lama penggunaan berterusan sebelum dihentikan (tempoh). Farmasi mempunyai ukuran piawai — **MPR** dan **PDC**, dengan ≥80% sebagai bar "patuh" lazim — dan terapeutik digital mewarisi kedua-dua konsep dan masalahnya: pematuhan ialah pengganda antara keberkesanan dan nilai yang direalisasikan.

## Mengapa ia penting

Pembayar sudah beroperasi atas angka-angka ini: PDC ≥80% menyumbang kepada Medicare Star Ratings AS, yang menggerakkan hasil pembayar sebenar — pematuhan ialah infrastruktur yang menanggung beban kewangan, bukan metrik lembut. Bagi terapeutik digital, coraknya berulang: data DiGA menunjukkan jumlah preskripsi yang kukuh tetapi pematuhan berterusan yang lemah, dan penetapan harga DTx berasaskan hasil (tiba di Jerman dari 2026) akan membayar berdasarkan hasil yang dipagari pematuhan. Peningkatan konseptual daripada penyelidikan kesihatan digital: **penglibatan berkesan** — penglibatan yang *mencukupi* untuk mencapai hasil yang dimaksudkan — dan akibat langsungnya, **dos berkesan minimum**, yang ditentukan secara empirik bagi setiap intervensi dan bukan diandaikan sebagai "lebih banyak".

## Matematiknya

```
MPR = Σ bekalan hari yang diagihkan / hari dalam tempoh × 100   (boleh melebihi 100%;
      menganggar terlebih melalui isi semula awal)
PDC = hari diliputi bekalan / hari dalam tempoh × 100     (dihadkan pada 100%;
      penganggar konservatif, pilihan CMS)
Pematuhan digital = peristiwa penggunaan sebenar / peristiwa penggunaan yang ditetapkan × 100
Kegigihan         = hari dari permulaan hingga penghentian
                    (laporkan % gigih pada N bulan; kaedah kemandirian)

Pemagaran nilai: hasil direalisasi ≈ keberkesanan × g(pematuhan)
  dengan g ialah fungsi dos-respons; di bawah dos berkesan
  minimum, g ≈ 0 — kos ditanggung, manfaat hilang
```

## Contoh penyelesaian

Produk CBT digital untuk insomnia, dipreskripsikan sebagai 6 modul dalam 6 minggu; keberkesanan percubaan 0.025 QALY dalam kalangan yang melengkapkan ≥4 modul (dos berkesan minimum yang ditentukan secara empirik):

```
1,000 preskripsi pada £250 → £250,000 perbelanjaan pembayar
Penyiapan modul: ≥4 modul 38%; 1–3 modul 34%; sifar modul 28%

QALY direalisasi = 1,000 × 0.38 × 0.025 = 9.5
Kos per QALY  = 250,000 / 9.5 ≈ £26,300 — sempadan pada ambang NICE

Kejuruteraan pematuhan (reka bentuk semula peringatan, memendekkan sesi) menaikkan
penyiapan ≥4-modul kepada 50%: 12.5 QALY → £20,000/QALY. Produk itu
melepasi ambang pembiayaan tanpa menyentuh kandungan terapi.
```

Di bawah penetapan harga berasaskan prestasi gaya 2026, peralihan yang sama menggerakkan *hasil* secara langsung — kejuruteraan pematuhan menjadi pelan hala tuju komersial.

## Kaitan dengan kejuruteraan perisian

Dua kosa kata bertemu pada satu konsep: analitik perisian ([pengaktifan](../pengaktifan-dan-pengambilan/), [kelekatan](../metrik-penglibatan/), [pengekalan](../pengekalan-dan-churn/)) dan farmasi klinikal (MPR, PDC, kegigihan) kedua-duanya mengukur pendedahan kepada sesuatu intervensi — petakan peristiwa produk anda kepada kosa kata klinikal dan pembayar boleh membaca papan pemuka anda. Kejuruteraan memiliki tuil pematuhan: logik peringatan (ping harian yang bodoh melatih pengabaian; masa adaptif tidak), kos sesi (modul 20 minit disiapkan kurang daripada 3×7 minit), dan telemetri geseran yang mengesan *di mana* dalam protokol pengguna gugur. Instrumenkan dos-respons dari hari pertama — analisis dos berkesan minimum yang memagari keseluruhan model ekonomi memerlukan data penggunaan-dikaitkan-dengan-hasil yang hanya boleh dikumpul oleh produk.

## Perangkap

- **Pencampuran MPR/PDC**: MPR menokok; nyatakan penganggar mana dan gunakan PDC untuk apa-apa yang berhadapan dengan pembayar.
- **Pematuhan kepada metrik, bukan terapi**: bukaan dikira sebagai dos (lihat [metrik penglibatan](../metrik-penglibatan/)).
- **Sasaran penglibatan "lebih banyak lebih baik"** apabila intervensi mempunyai dos terhingga — graduasi ialah kejayaan, penggunaan berterusan bukan.
- **Tuntutan keberkesanan berasaskan survivor**: hasil dalam kalangan yang patuh mengandungi kesan pemilihan (orang yang patuh berbeza); anggaran sebab-akibat yang jujur memerlukan pengrawakan atau pelarasan yang teliti.

## Sumber

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
