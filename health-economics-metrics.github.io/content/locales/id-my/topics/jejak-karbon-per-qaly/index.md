# Jejak Karbon per QALY

Karbon per QALY adalah rasio efisiensi — emisi karbon suatu intervensi (atau emisi yang dihindari) dibagi QALY yang dihasilkannya. Ia sejajar langsung dengan biaya per QALY dan memungkinkan efisiensi karbon dinilai berdampingan dengan efisiensi biaya. "NMB yang disesuaikan karbon" melangkah lebih jauh: ia memonetisasi dampak karbon dengan nilai karbon non-pasar resmi dari Green Book Inggris Raya, lalu mengurangkannya dari [manfaat moneter bersih](../manfaat-moneter-bersih/) standar.

## Mengapa ini penting

NICE dan NHS England kini mengharapkan dampak lingkungan dipertimbangkan bersama biaya dan QALY. NHS memiliki komitmen publik emisi nol bersih: nol bersih untuk emisi langsung pada 2040 dan untuk seluruh jejak rantai pasok pada 2045. Panduan evaluasi teknologi kesihatan NICE (PMG36) menyebut keberlanjutan lingkungan sebagai pertimbangan yang sedang muncul dalam menilai teknologi. Bagi produk kesihatan digital, ini berarti karbon menjadi pilar keempat argumen nilai, di samping biaya, QALY, dan [dominasi pada batas efisiensi](../dominansi-dan-batas-efisiensi/) — bukan pengganti salah satunya, melainkan dimensi yang makin diharapkan dilaporkan oleh sebuah kasus bisnis yang baik.

## Matematika

```
karbon_per_qaly = total_emisi_ton_co2e / total_qaly
  (nilai negatif berarti emisi bersih yang dihindari per QALY yang diperoleh —
  untung ganda: kesihatan lebih baik dan karbon lebih sedikit)

dampak_karbon_termonetisasi = emisi_ton_co2e × harga_karbon_per_ton
  (emisi negatif × harga positif = biaya negatif, yaitu manfaat)

NMB_disesuaikan_karbon = manfaat_moneter_bersih − dampak_karbon_termonetisasi
```

Ini memperluas gagasan batas efisiensi biaya/QALY dengan sumbu kedua — karbon per QALY — dengan logika "petakan setiap alternatif dan lihat mana yang didominasi" yang sama dengan [Dominasi dan batas efisiensi](../dominansi-dan-batas-efisiensi/), tetapi diterapkan pada karbon, bukan biaya.

## Contoh yang diselesaikan

Layanan telemedisin menggantikan kunjungan tatap muka, menghilangkan 5.000 perjalanan mobil per tahun, masing-masing sekitar 8 kg CO2e — 40 ton CO2e dihindari, dinyatakan sebagai emisi negatif (−40,0 ton) — dan menghasilkan 25 QALY per tahun:

```
karbon_per_qaly = −40.0 / 25.0 = 1,6 ton CO2e dihindari per QALY yang diperoleh
```

Menggunakan harga karbon non-pasar Green Book (angka ilustratif, nilai pusat non-pasar 2023 ≈ £269/ton CO2e — Green Book memperbarui harga karbon setiap tahun, periksa kembali sebelum mengutipnya dalam analisis nyata):

```
dampak_karbon_termonetisasi = −40.0 × £269 = −£10,760
```

"Biaya" negatif −£10.760 adalah manfaat sebesar £10.760. Jika manfaat moneter bersih intervensi itu sendiri adalah £500.000:

```
NMB_disesuaikan_karbon = £500,000 − (−£10,760) = £510,760
```

Penghematan karbon menambah kekuatan argumen, bukan mengurangi — itulah untung ganda yang memang dirancang untuk ditampakkan oleh kerangka emisi negatif.

## Hubungan dengan rekayasa perisian

Ini adalah titik temu terkini dengan ekonomi AI dan cloud: jejak karbon komputasi untuk melatih dan menjalankan model AI sudah menjadi pos nyata dalam pengadaan NHS, kerana kontrak pemasok NHS di atas ambang tertentu mensyaratkan Rencana Pengurangan Karbon (Carbon Reduction Plan). [Ekonomi unit cloud](../ekonomi-unit-cloud/) sudah melacak biaya per unit keluaran komputasi; karbon per QALY adalah templat alami untuk metrik "biaya karbon per inferensi" di masa depan, yang akan memperluas modul itu dan ekonomi unit inferensi ke dimensi lingkungan, meskipun metrik itu belum ada.

## Jebakan

- **Bermain-main dengan batas sistem**: hanya menghitung emisi langsung (Cakupan 1) dan mengecualikan emisi rantai pasok (Cakupan 3), yang sering menjadi sebagian besar jejak nyata produk kesihatan digital.
- **Memakai harga karbon yang usang**: Green Book memperbarui nilai karbon non-pasar setiap tahun, sehingga angka £/ton yang dikutip harus bertanggal, bukan disajikan sebagai konstanta.
- **Menganggap "penghematan karbon" sebagai pengganti "efektivitas biaya"**: intervensi beremisi rendah tetapi bernilai rendah tetap merupakan penggunaan sumber daya NHS yang buruk. Karbon adalah pilar keempat di samping biaya dan QALY, bukan pengganti salah satunya.

## Sumber

- NHS England, "Delivering a Net Zero National Health Service" (2020, diperbarui 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (diperbarui setiap tahun; nilai pusat non-pasar ≈ £269/tCO2e, 2023 — cantumkan tanggal pada setiap kutipan). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
