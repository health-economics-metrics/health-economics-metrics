# Kerangka Piawaian Bukti NICE (ESF)

ESF ialah kerangka NICE yang menentukan **berapa banyak bukti yang diperlukan teknologi kesihatan digital, berkadar dengan risikonya**. Ia perkara paling hampir dengan jawapan rasmi kepada "apa yang perlu kami buktikan sebelum NHS membeli aplikasi kami?"

## Mengapa ia penting

ESF (dikeluarkan pertama 2019, dikemas kini 2022 untuk merangkumi AI dan algoritma suai) mengklasifikasikan teknologi kesihatan digital kepada peringkat mengikut fungsi klinikal, dengan piawaian bukti **kumulatif** — 21 piawaian merentas 5 kumpulan (faktor reka bentuk, nilai, prestasi/keberkesanan, impak ekonomi, penggunaan):

```
Peringkat A — perkhidmatan sistem, tiada hasil pesakit langsung (cth., e-penggiliran)
         → piawaian asas: kredibiliti, perlindungan data, jaminan teknikal
Peringkat B — memaklumkan, pemantauan mudah, komunikasi (cth., diari simptom)
         → + bukti manfaat pengguna, kebolehpercayaan sesuai
Peringkat C — merawat, mendiagnosis atau membimbing pengurusan klinikal secara aktif
         → + bukti keberkesanan perbandingan berkualiti tinggi (idealnya RCT)
           dan analisis ekonomi
```

Bagi bukti ekonomi, [analisis kos-akibat](../analisis-kos-akibat/) boleh diterima untuk kebanyakan peringkat; [analisis kos-utiliti](../analisis-kos-utiliti/) dijangka pada risiko tertinggi. ESF mentakrif **kos bukti kemasukan pasaran** anda — bajetkan seperti kos binaan lain.

## Matematiknya

Tiada formula — jadual keputusan. Pengiraan operatif bersifat komersial:

```
Pelaburan bukti diperlukan = f(peringkat)
  Peringkat A: dokumentasi + jaminan ≈ £10k–50k
  Peringkat B: kajian manfaat-pengguna pemerhatian/perbandingan ≈ £50k–250k
  Peringkat C: kajian perbandingan gred RCT + model ekonomi ≈ £250k–£2J+

Letakkan tuntutan produk anda dengan sengaja: menuntut "menyokong keputusan klinikal"
dan bukan "memaklumkan pesakit" menganjak anda satu peringkat dan boleh menjadikan bil 10×.
```

## Contoh penyelesaian

Pembuat aplikasi peringatan ubat mempertimbangkan menambah ciri cadangan pelarasan dos.

- Sebagai aplikasi peringatan: **Peringkat B** — kajian kohort yang menunjukkan penambahbaikan pematuhan mencukupi.
- Dengan cadangan dos: **Peringkat C** — bukti keberkesanan perbandingan (berkemungkinan RCT terhadap penjagaan biasa) serta analisis ekonomi.

Jika RCT berharga £600k dan hasil inkremental ciri dos ialah £200k/tahun, ciri itu mesti mengekalkan nilai selama 3+ tahun sebelum kos bukti pulang modal — keputusan produk yang kelihatan sama sekali berbeza sebaik peringkat ESF dihargai. Banyak pasukan menghantar produk Peringkat B dan mementaskan tuntutan Peringkat C di belakang pembiayaan.

## Kaitan dengan kejuruteraan perisian

ESF ialah corak tadbir urus paling boleh dipindahkan dalam repositori ini: **keperluan bukti berperingkat risiko untuk penerimaan alat**. Versi dalaman: pemformat kod memerlukan demo (Peringkat A); alat produktiviti yang menuntut jam dijimatkan memerlukan projek perintis terukur (Peringkat B); get AI yang menyekat penggunaan secara automatik atau menulis kod klinikal secara automatik memerlukan bukti gred percubaan terkawal sebelum pelancaran seluruh organisasi (Peringkat C). Bukti berkadar menghentikan kedua-dua mod kegagalan — birokrasi mencekik alat remeh, dan perasaan menghantar yang berakibat. Lihat juga [laluan pantas DiGA](../laluan-pantas-diga-jerman/) untuk pelengkap "penerimaan sementara dengan tarikh akhir bukti."

## Perangkap

- **Salah klasifikasi peringkat oleh angan-angan** — pengawal selia dan pembeli mengklasifikasi mengikut apa yang produk *lakukan*, bukan apa yang pemasaran katakan.
- **Bukti dibina selepas produk**: memasang RCT pada produk yang sudah dihantar tanpa instrumentasi atau ekuipois adalah perlahan dan sering mustahil.
- **Memenuhi ESF dan melupakan selebihnya**: ESF duduk bersama DTAC (keselamatan klinikal, perlindungan data, kebolehoperasian bersama) dan, bagi AI, kelulusan kawal selia — lihat [penilaian kawal selia AI](../penilaian-kawal-selia-ai/).

## Sumber

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
