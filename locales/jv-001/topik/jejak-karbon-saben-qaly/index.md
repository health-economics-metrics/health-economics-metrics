# Jejak Karbon saben QALY (Carbon Footprint per QALY)

Karbon saben QALY iku rasio efisiensi — emisi karbon intervensi (utawa emisi sing dihindari) dibagi QALY sing diwenehake — langsung padha karo biaya saben QALY, ngidini efisiensi karbon intervensi dinilai bareng efisiensi biayane. "Manfaat moneter net sing disesuaikan karbon" luwih jauh maneh: nguangkake dampak karbon nganggo nilai karbon non-traded resmi Green Book Inggris lan ngurangi saka [manfaat moneter net](../manfaat-moneter-net/) standar.

## Kenapa Iki Penting

NICE lan NHS England saiki ngarepake dampak lingkungan dipertimbangake bareng biaya lan QALY. NHS duwe komitmen net-zero umum: net zero kanggo emisi langsung ing 2040, lan net zero kanggo jejak rantai pasok lengkap ing 2045. Manual evaluasi teknologi kesehatan NICE (PMG36) nyebut keberlanjutan lingkungan minangka pertimbangan sing muncul ing penilaian teknologi. Kanggo produk kesehatan digital, iki tegese karbon dadi pilar kaping papat ing kasus nilai, bareng biaya, QALY, lan [dominansi ing wates efisiensi](../dominansi-lan-wates-efisiensi/) — dudu pangganti apa wae, nanging dimensi sing saya dibutuhake kasus bisnis sing dibangun apik.

## Matematikane

```
Karbon saben QALY = total_emisi_ton_co2e / total_qaly
  (nilai negatif tegese emisi net DIHINDARI saben QALY sing dipikolehi — 
  menang ganda: kesehatan luwih apik lan karbon luwih murah)

Dampak karbon sing dimonetisasi = emisi_ton_co2e × nilai_karbon_saben_ton
  (emisi negatif × nilai positif = biaya negatif, yaiku manfaat)

NMB sing disesuaikan karbon = manfaat_moneter_net − dampak_karbon_sing_dimonetisasi
```

Iki nyambung gagasan wates-efisiensi biaya/QALY kanthi sumbu kapindho — karbon saben QALY — logika "plot saben pilihan lan delengen apa sing didominasi" sing padha karo [dominansi lan wates efisiensi](../dominansi-lan-wates-efisiensi/), ditrapake ing karbon tinimbang biaya.

## Conto Petungan

Layanan telehealth ngganti kunjungan langsung, ngindhari 5,000 lelungan mobil/taun kira-kira 8kg CO2e saben siji — 40 ton CO2e dihindari, dituduhake minangka angka emisi negatif (−40.0 ton), lan ngasilake 25 QALY/taun:

```
Karbon saben QALY = −40.0 / 25.0 = −1.6 ton CO2e dihindari saben QALY sing dipikolehi
```

Nganggo nilai karbon non-traded Green Book (angka ilustratif, nilai tengah non-traded 2023 ≈ £269/ton CO2e — Green Book nganyari nilai karbon saben taun, verifikasi maneh sadurunge dikutip ing analisis urip):

```
Dampak karbon sing dimonetisasi = −40.0 × £269 = −£10,760
```

"Biaya" −£10,760 iku manfaat £10,760. Yen manfaat moneter net intervensi sing mandhiri £500,000:

```
NMB sing disesuaikan karbon = £500,000 − (−£10,760) = £510,760
```

Penghematan karbon nambah kasus tinimbang nyuda — menang ganda sing dimaksudake dening pigura emisi-negatif.

## Sambungan karo Rékayasa Piranti Lunak

Iki persimpangan urip lan saiki karo ekonomi AI/cloud: jejak karbon komputasi saka nglatih lan mlakokake model AI saiki dadi item garis nyata ing pengadaan NHS, amarga kontrak pemasok NHS ing ndhuwur ambang tartamtu mbutuhake Carbon Reduction Plan. [Ekonomi unit cloud](../ekonomi-unit-cloud/) wis nglacak biaya saben unit output komputasi; karbon saben QALY iku cithakan alami kanggo metrik "biaya karbon saben inferensi" ing mangsa ngarep sing nambah modul kuwi lan ekonomi unit inferensi menyang dimensi lingkungan, sanajan metrik kuwi durung ana.

## Jebakan

- **Dolanan wates-lingkup**: mung ngetung emisi langsung (Scope 1) lan ngecualekake emisi rantai pasok (Scope 3), sing biasane mayoritas jejak nyata produk kesehatan digital.
- **Nganggo nilai karbon kadaluwarsa**: Green Book nganyari nilai karbon non-traded saben taun, mula angka £/ton apa wae sing dikutip kudu diwenehi tanggal, dudu dikutip minangka konstanta tetep.
- **Nganggep "efisien karbon" minangka pangganti "efektif biaya"**: intervensi karbon-rendah, nilai-rendah isih panggunaan sumber daya NHS sing elek. Karbon iku pilar kaping papat bareng biaya lan QALY, dudu panggantine.

## Sumber

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
