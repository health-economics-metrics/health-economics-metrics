# Pulangan Pelaburan (ROI)

ROI ialah nisbah keuntungan bersih kepada wang yang dilaburkan. Ia metrik yang sudah dikongsi kejuruteraan dan kewangan — ekonomi kesihatan menambah disiplin yang menjadikan tuntutan ROI bertahan terhadap penelitian: perspektif, pembanding, ufuk dan kategori manfaat yang diisytiharkan.

## Mengapa ia penting

ROI ialah lingua franca pemegang bajet, dan kesihatan awam turut menggunakannya: semakan mercu tanda Masters et al. mendapati **median ROI 14.3:1** bagi intervensi kesihatan awam (setiap £1 memulangkan ~£14 kepada ekonomi lebih luas dan sistem kesihatan) — nombor yang digunakan secara meluas untuk menghujahkan perbelanjaan pencegahan. Tetapi 14:1 itu angka *masyarakat, ufuk-panjang*; ROI CFO hospital ialah perspektif-pembayar dan 1–3 tahun. Kebanyakan pertelingkahan ROI sebenarnya pertelingkahan perspektif-tidak-diisytiharkan.

## Matematiknya

```
ROI = (Manfaat − Kos) / Kos      (selalunya × 100%)

Tempoh bayar balik = Kos / manfaat bersih tahunan
```

Tuntutan ROI tidak dinyatakan lengkap tanpa empat pengisytiharan:

1. **Perspektif** — manfaat siapa dikira? (lihat [perspektif analisis](../perspektif-analisis/))
2. **Pembanding** — berbanding alternatif apa? (lihat [kos peluang](../kos-peluang/))
3. **Ufuk** — sepanjang berapa lama, dan [didiskaun](../diskaun-dan-keutamaan-masa/)?
4. **Kelas manfaat** — melepaskan tunai, kapasiti atau kualitatif? (lihat [melepaskan tunai lwn tidak melepaskan tunai](../penjimatan-melepaskan-tunai-lwn-tidak-melepaskan-tunai/))

## Contoh penyelesaian

Sistem e-penggiliran, kos £500,000 selama 3 tahun.

```
Melepaskan tunai: pengurangan syif agensi         £450,000
Kapasiti:         masa pentadbiran pengurus wad dibebaskan £600,000 (dinilai, tidak disimpan)
Kualitatif:       kepuasan kakitangan, keselamatan tidak dimonetisasi

ROI kewangan ketat = (450,000 − 500,000)/500,000 = −10%
ROI ekonomi        = (1,050,000 − 500,000)/500,000 = +110%
```

Kedua-dua nombor benar. Vendor yang memetik "+110% ROI" kepada CFO yang hanya boleh menyimpan £450k akan hilang kepercayaan; membentangkan kedua-duanya, berlabel, memenanginya. Pecahan sama melindungi juara dalaman apabila kewangan mengaudit manfaat dua tahun kemudian.

## Kaitan dengan kejuruteraan perisian

Setiap cadangan alat mempunyai slaid ROI; hampir tiada yang mengisytiharkan empat parameter. Kegagalan paling lazim ialah pengadunan kategori: keuntungan kapasiti (minit pembangun) dibentangkan sebagai pulangan kewangan. Strukturkan ROI AI/platform seperti contoh penyelesaian di atas — baris tunai, baris kapasiti, baris kualitatif — dan tambah [analisis kepekaan](../analisis-kepekaan/) pada nombor lembut. Untuk semakan realiti P&L bagi ROI AI khususnya, lihat [pulangan pelaburan AI](../pulangan-pelaburan-ai/).

## Perangkap

- **Pencucian perspektif**: manfaat masyarakat sedekad dipetik kepada pemegang bajet dengan ufuk 12 bulan.
- **Kasar dan bukan bersih**: "memulangkan £3J" pada perbelanjaan £2J ialah ROI 50%, bukan 300%.
- **Pemaksimuman nisbah**: penyebut kecil menghasilkan ROI menakjubkan pada pelaburan remeh; pangkatkan portfolio mengikut NPV atau [manfaat monetari bersih](../manfaat-monetari-bersih/), gunakan ROI sebagai saringan.
- **Tiada audit manfaat**: ROI ramalan tanpa penjejakan [realisasi manfaat](../realisasi-manfaat/) ialah janji, bukan keputusan.

## Sumber

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
