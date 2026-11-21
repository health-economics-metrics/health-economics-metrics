# Ngindhari Kunjungan Darurat (Emergency Attendance Avoidance)

Ngindhari kunjungan darurat ngetung kunjungan ED (A&E) lan rawat inap darurat sing kecegah dening intervensi hulu — aplikasi triase, pemantauan jarak adoh, bangsal virtual, pangalihan perawatan-urgen. Iku ngowahi "kita nangkep luwih awal" dadi klaim sing diregani.

## Kenapa Iki Penting

Perawatan darurat iku setelan rutin paling larang ing sistem (biaya unit kunjungan ED ing kisaran £250–£400 miturut angka National Cost Collection / PSSRU; rawat inap darurat ewonan), lan kebak-e ED nyebabake tundha ambulans lan elektif sing dibatalake. Apa wae sing kanthi aman ngrampungake permintaan ing hulu — saran perawatan-mandiri, perawatan primer dina sing padha, tanggapan komunitas — tuku kapasitas sistem ing titik paling tertekan. Iki garis manfaat standar kanggo pamriksa gejala, layanan triase gaya-111, lan [pemantauan pasien jarak adoh](../ekonomi-pemantauan-pasien-jarak-adoh/).

## Matematikane

```
Kunjungan sing dihindari = populasi × (tingkat baseline − tingkat intervensi)
Penghematan kotor        = kunjungan sing dihindari × biaya unit saben kunjungan
                           (+ rawat inap sing dihindari × biaya rawat inap, diitung kapisah)

Penghematan net          = penghematan kotor − biaya intervensi − biaya panggunaan jalur anyar
                           (permintaan sing dialihake ora gratis: panggilan 111, slot
                            dokter umum, dina bangsal virtual kabeh duwe biaya unit)
```

Klaim kausal butuh pembanding: tingkat kunjungan duwe tren lan beda-beda musiman, mula sadurunge/sawise mung ora mbuktekake apa-apa.

## Conto Petungan

Layanan pemantauan jarak adoh COPD kanggo 3,000 pasien risiko dhuwur. Evaluasi kontrol-cocok nuduhake kunjungan ED gegandhengan-eksaserbasi mudhun saka 0.9 dadi 0.7 saben pasien-taun, lan rawat inap darurat saka 0.5 dadi 0.42.

```
Kunjungan sing dihindari = 3,000 × 0.2  = 600 × £300   = £180,000
Rawat inap sing dihindari = 3,000 × 0.08 = 240 × £3,800 = £912,000
Kotor                                                    £1,092,000/taun

Biaya: layanan pemantauan £600,000; respons perawat-komunitas ekstra £150,000
Net ≈ +£342,000/taun — plus gain QALY saka eksaserbasi sing diobati luwih awal.
```

Catet garis rawat inap nguwasani: ngindhari kunjungan wae arang mbayar layanan pemantauan; ngindhari *rawat inap* iku ing ngendi dhuwite.

## Sambungan karo Rékayasa Piranti Lunak

Iki **ekonomi ngindhari-insiden**. Nilai observabilitas, deploy canary, lan sistem peringatan-dini iku "kunjungan darurat" sing dihindari — page, war room, sev-1 — saben siji duwe biaya sarat (jam-insinyur × tarif + dampak pelanggan). Aturan pemodelan sing padha ditrapake: kurangana biaya jalur hulu anyar (triase peringatan ora gratis), waspada substitusi (peringatan sing nggawe karya tanpa nyegah insiden iku kuatir kesehatan, dudu kesehatan), lan buktekake kontrafaktual nganggo kontrol (tingkat insiden tim duwe tren lan regresi menyang rata-rata, persis kaya kunjungan ED).

## Jebakan

- **Regresi menyang rata-rata**: kohort risiko dhuwur sing dipilih ing taun elek mbaik tanpa diobati; kontrol sing dicocokake utawa desain stepped-wedge iku penting.
- **Permintaan sing diinduksi pasokan**: triase digital sing gampang bisa *nambah* total kontak (ambang nggoleki bantuan luwih murah) nalika nyuda bagean ED — etung total biaya sistem.
- **Ngregani kunjungan ing biaya rata-rata** nalika biaya tetep ED ora mudhun — deleng [biaya marginal vs rata-rata](../biaya-marginal-vs-rata-rata/).

## Sumber

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
