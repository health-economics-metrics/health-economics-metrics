# Kekurangan QALY dan Pengubah Suai Keterukan

Kekurangan QALY mengukur berapa banyak kesihatan masa depan yang diambil penyakit daripada pesakit berbanding populasi umum. NICE menggunakannya untuk menggunakan **pengubah suai keterukan**: semakin sakit populasi, semakin bernilai setiap QALY diperoleh — sehingga 1.7× ambang piawai.

## Mengapa ia penting

Sejak manual NICE 2022, keterukan ialah pengganda jelas pada nilai keuntungan kesihatan, menggantikan premium akhir-hayat lama. Teknologi untuk keadaan teruk dinilai terhadap ambang berkesan sehingga ~£51,000/QALY dan bukan £30,000. Jika perisian anda melayani populasi terjejas teruk (kegagalan jantung lanjut, penyakit mental teruk), pengubah suai keterukan boleh menjadi beza antara kes ekonomi boleh dibiayai dan tidak — dan anda memerlukan matematik kekurangan untuk menuntutnya.

## Matematiknya

Dua ukuran, dikira sepanjang baki hayat dengan standard penjagaan semasa:

```
Kekurangan mutlak       = QALY_populasi_umum − QALY_dengan_keadaan
Kekurangan berkadaran   = Kekurangan mutlak / QALY_populasi_umum
```

Pemberat NICE 2022 (mana-mana ukuran yang memberi pemberat lebih tinggi terpakai):

```
Pemberat ×1.0: mutlak < 12 dan berkadaran < 0.85
Pemberat ×1.2: mutlak ≥ 12 atau berkadaran ≥ 0.85
Pemberat ×1.7: mutlak ≥ 18 atau berkadaran ≥ 0.95
```

Pemberat mendarab ΔE (atau setara ambang): λ berkesan menjadi £24k–£36k pada ×1.2 dan £34k–£51k pada ×1.7.

## Contoh penyelesaian

Pesakit dengan keadaan agresif, purata umur 60. Populasi umum pada umur 60 menjangka 14.2 QALY terdiskaun; dengan keadaan itu di bawah penjagaan semasa, 2.1.

```
Kekurangan mutlak     = 14.2 − 2.1 = 12.1  (≥ 12 → layak ×1.2)
Kekurangan berkadaran = 12.1 / 14.2 = 0.852 (≥ 0.85 → juga ×1.2)
```

ICER platform pemantauan anda ialah £26,000/QALY — di atas penghakiman titik tengah piawai £20k–£30k, di sempadan. Dengan pemberat ×1.2: ICER berkesan = 26,000 / 1.2 ≈ **£21,700/QALY** — selesa boleh dibiayai. Pengiraan kekurangan baru sahaja menggerakkan keputusan.

## Kaitan dengan kejuruteraan perisian

Pemberatan keterukan ialah versi formal sesuatu yang dilakukan organisasi kejuruteraan secara naluri: membelanjakan lebih bagi setiap unit penambahbaikan pada sistem yang paling teruk. Corak yang boleh dipindahkan — kira "kekurangan SLO" setiap perkhidmatan (seberapa jauh di bawah garis asas sihat yang dijangka ia berjalan, secara mutlak dan berkadaran), dan beratkan nilai pemulihan sewajarnya. Ini membenarkan, dengan aritmetik dan bukan hujah, mengapa sistem warisan yang terbakar mendapat lebih pelaburan bagi setiap jam dijimatkan daripada yang sihat. Ia juga membawa pengajaran tadbir urus sama: terbitkan pemberat *sebelum* mesyuarat pengutamaan, atau setiap pasukan menuntut keterukan.

## Perangkap

- **Mengira kekurangan terhadap garis asas yang salah**: ia diukur di bawah *standard penjagaan semasa*, bukan sejarah semula jadi tidak dirawat.
- **Kepekaan umur**: kekurangan sangat bergantung pada umur populasi (pesakit lebih muda mempunyai lebih banyak QALY untuk hilang → kekurangan mutlak lebih tinggi); gunakan taburan umur populasi dirawat sebenar.
- **Mengandaikan pengubah suai terpakai di tempat lain** — ia mekanisme NICE (England); badan HTA lain mengendalikan keterukan secara berbeza (atau tidak langsung).

## Sumber

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
