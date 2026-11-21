# Jejak Karbon setiap QALY

Karbon setiap QALY ialah nisbah kecekapan — pelepasan karbon intervensi (atau pelepasan yang dielakkan) dibahagi dengan QALY yang disampaikannya — sama langsung dengan kos setiap QALY, membolehkan kecekapan karbon intervensi dinilai bersama kecekapan kosnya. "Manfaat monetari bersih terlaras karbon" melangkah lebih jauh, memonetisasi impak karbon menggunakan nilai karbon tidak diniagakan rasmi Green Book UK dan menolaknya daripada [manfaat monetari bersih](../manfaat-monetari-bersih/) piawai.

## Mengapa ia penting

NICE dan NHS England kini menjangka impak alam sekitar dipertimbangkan bersama kos dan QALY. NHS mempunyai komitmen sifar bersih awam: sifar bersih bagi pelepasan langsungnya menjelang 2040, dan sifar bersih bagi jejak rantaian bekalan penuhnya menjelang 2045. Manual penilaian teknologi kesihatan NICE (PMG36) merujuk kemampanan alam sekitar sebagai pertimbangan baru muncul dalam penilaian teknologi. Bagi produk kesihatan digital, ini bermakna karbon menjadi tonggak keempat kes nilai, bersama kos, QALY dan [dominasi pada sempadan kecekapan](../dominasi-dan-sempadan-kecekapan/) — bukan pengganti mana-mana daripadanya, tetapi dimensi yang semakin perlu dilaporkan oleh kes perniagaan yang dibina dengan baik.

## Matematiknya

```
Karbon setiap QALY = jumlah_pelepasan_tan_co2e / jumlah_qaly
  (nilai negatif bermakna pelepasan bersih DIELAKKAN bagi setiap QALY
  yang diperoleh — kemenangan berganda: kesihatan lebih baik dan karbon lebih rendah)

Impak karbon dimonetisasi = pelepasan_tan_co2e × nilai_karbon_setiap_tan
  (pelepasan negatif × nilai positif = kos negatif, iaitu manfaat)

NMB terlaras karbon = manfaat_monetari_bersih − impak_karbon_dimonetisasi
```

Ini memanjangkan idea sempadan kecekapan kos/QALY dengan paksi kedua — karbon setiap QALY — logik "plot setiap pilihan dan lihat apa yang didominasi" yang sama seperti [dominasi dan sempadan kecekapan](../dominasi-dan-sempadan-kecekapan/), diterapkan pada karbon dan bukan kos.

## Contoh penyelesaian

Perkhidmatan telekesihatan menggantikan lawatan bersemuka, mengelakkan 5,000 perjalanan kereta/tahun pada kira-kira 8kg CO2e setiap satu — 40 tan CO2e dielakkan, diwakili sebagai angka pelepasan negatif (−40.0 tan), dan ia menyampaikan 25 QALY/tahun:

```
Karbon setiap QALY = −40.0 / 25.0 = −1.6 tan CO2e dielakkan bagi setiap QALY yang diperoleh
```

Menggunakan nilai karbon tidak diniagakan Green Book (angka ilustrasi, nilai pusat tidak diniagakan 2023 ≈ £269/tan CO2e — Green Book mengemas kini nilai karbon setiap tahun, sahkan semula sebelum memetik dalam analisis sebenar):

```
Impak karbon dimonetisasi = −40.0 × £269 = −£10,760
```

"Kos" −£10,760 ialah manfaat £10,760. Jika manfaat monetari bersih berasingan intervensi ialah £500,000:

```
NMB terlaras karbon = £500,000 − (−£10,760) = £510,760
```

Penjimatan karbon menambah kepada kes dan bukan mengurangkannya — kemenangan berganda yang dimaksudkan untuk dizahirkan oleh rangka pelepasan negatif.

## Kaitan dengan kejuruteraan perisian

Ini persilangan semasa yang hidup dengan ekonomi AI/awan: jejak karbon pengiraan bagi melatih dan menjalankan model AI kini baris sebenar dalam perolehan NHS, kerana kontrak pembekal NHS melebihi ambang tertentu memerlukan Pelan Pengurangan Karbon. [Ekonomi unit awan](../ekonomi-unit-awan/) sudah menjejak kos bagi setiap unit output pengiraan; karbon setiap QALY ialah templat semula jadi bagi metrik "kos karbon setiap inferens" masa depan yang memanjangkan modul itu dan ekonomi unit inferens ke dimensi alam sekitar, walaupun metrik itu belum wujud.

## Perangkap

- **Permainan sempadan skop**: mengira hanya pelepasan langsung (Skop 1) dan mengecualikan pelepasan rantaian bekalan (Skop 3), yang biasanya majoriti jejak sebenar produk kesihatan digital.
- **Menggunakan nilai karbon lapuk**: Green Book mengemas kini nilai karbon tidak diniagakan setiap tahun, jadi sebarang angka £/tan yang dipetik mesti bertarikh, bukan dipetik sebagai pemalar tetap.
- **Menganggap "cekap karbon" sebagai pengganti "kos-efektif"**: intervensi karbon rendah, nilai rendah tetap penggunaan sumber NHS yang buruk. Karbon ialah tonggak keempat bersama kos dan QALY, bukan pengganti mana-mana.

## Sumber

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
