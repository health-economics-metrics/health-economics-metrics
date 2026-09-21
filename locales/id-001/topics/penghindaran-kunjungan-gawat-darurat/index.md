# Penghindaran Kunjungan Gawat Darurat

Penghindaran kunjungan gawat darurat menghitung kunjungan IGD (A&E) dan rawat-inap darurat yang dicegah oleh intervensi hulu — aplikasi triase, pemantauan jarak jauh, bangsal virtual, pengalihan perawatan mendesak. Ia mengubah "kami menangkapnya lebih awal" menjadi klaim yang berbiaya-ditentukan.

## Mengapa Ini Penting

Perawatan darurat adalah pengaturan rutin termahal dalam sistem (biaya unit kunjungan IGD dalam rentang £250–£400 menurut angka National Cost Collection / PSSRU; satu rawat-inap darurat berjumlah ribuan), dan kepadatan IGD mengalir bertingkat ke keterlambatan ambulans dan pembatalan elektif. Apa pun yang secara aman menyelesaikan permintaan di hulu — saran perawatan-mandiri, perawatan-primer-di-hari-yang-sama, respons komunitas — membeli kapasitas sistem pada titik paling tertekannya. Ini adalah garis manfaat standar untuk pemeriksa gejala, layanan triase gaya-111, dan [pemantauan pasien jarak jauh](../ekonomi-pemantauan-pasien-jarak-jauh/).

## Perhitungan

```
Kunjungan dihindari = populasi × (tingkat dasar − tingkat intervensi)
Penghematan bruto    = kunjungan dihindari × biaya unit per kunjungan
                      (+ rawat-inap dihindari × biaya rawat-inap, dihitung terpisah)

Penghematan bersih   = penghematan bruto − biaya intervensi − biaya penggunaan jalur baru
                      (permintaan yang dialihkan tidak gratis: panggilan 111, slot dokter
                       umum, hari bangsal-virtual semuanya memiliki biaya unit)
```

Klaim kausal memerlukan pembanding: tingkat kunjungan bertren dan bervariasi musiman, jadi sebelum/sesudah saja tidak membuktikan apa-apa.

## Contoh yang Diselesaikan

Layanan pemantauan-jarak-jauh PPOK untuk 3.000 pasien berisiko-tinggi. Evaluasi kontrol-yang-dicocokkan menunjukkan kunjungan IGD terkait-eksaserbasi turun dari 0,9 menjadi 0,7 per pasien-tahun, dan rawat-inap darurat dari 0,5 menjadi 0,42.

```
Kunjungan dihindari = 3.000 × 0,2  = 600 × £300   = £180.000
Rawat-inap dihindari = 3.000 × 0,08 = 240 × £3.800 = £912.000
Bruto                                              £1.092.000/tahun

Biaya: layanan pemantauan £600.000; respons perawat-komunitas ekstra £150.000
Bersih ≈ +£342.000/tahun — ditambah keuntungan QALY dari eksaserbasi yang dirawat lebih awal.
```

Perhatikan garis rawat-inap mendominasi: penghindaran kunjungan saja jarang membayar layanan pemantauan; penghindaran *rawat-inap* adalah di mana uangnya berada.

## Hubungan dengan Rekayasa Perangkat Lunak

Ini adalah **ekonomi penghindaran-insiden**. Nilai observabilitas, penerapan canary, dan sistem peringatan-dini adalah "kunjungan gawat darurat" yang dihindari — page, ruang-perang, sev-1 — masing-masing dengan biaya berbobot (jam-insinyur × tarif + dampak pelanggan). Aturan pemodelan yang sama berlaku: kurangi biaya jalur hulu baru (triase peringatan tidak gratis), waspadai substitusi (peringatan yang menciptakan pekerjaan tanpa mencegah insiden adalah kecemasan-kesehatan, bukan kesehatan), dan buktikan kontrafaktual dengan kontrol (tingkat insiden tim bertren dan berregresi ke rata-rata, persis seperti kunjungan IGD).

## Jebakan

- **Regresi ke rata-rata**: kohort berisiko-tinggi yang dipilih pada tahun buruk membaik tanpa-perawatan; kontrol-yang-dicocokkan atau desain wedge-bertahap sangat penting.
- **Permintaan yang diinduksi-suplai**: triase digital yang mudah dapat *meningkatkan* total kontak (ambang lebih rendah untuk mencari bantuan) sambil mengurangi pangsa IGD — hitung total biaya sistem.
- **Menilai kunjungan pada biaya rata-rata** ketika biaya tetap IGD tidak turun — lihat [biaya marginal vs rata-rata](../biaya-marginal-vs-rata-rata/).

## Sumber

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
