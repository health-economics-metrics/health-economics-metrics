# Intervensi Luwih Awal (Earlier Intervention)

Yen kapasitas sing dihemat ngidini praktisi mriksa tumpukan diagnostik luwih cepet, pasien pindhah saka dhaptar tunggu menyang perawatan aktif luwih cepet — lan ngobati luwih awal biasane luwih murah lan luwih apik tinimbang ngobati mengko, amarga kondisi sing ora diobati saya parah.

## Kenapa Iki Penting

Perkembangan penyakit iku bunga majemuk saka perawatan kesehatan. Pasien sing ngenteni kanthi kondisi sing ora diobati ora ing kahanan mapan: kanker pindhah stadium, gagal jantung dekompensasi, depresi entheng dadi abot. Intervensi luwih awal mula menehi dividen ganda — **asil luwih apik** (QALY luwih akeh, diobati saka baseline luwih sehat) lan asring **biaya perawatan luwih murah** (perawatan stadium awal kurang intensif tinimbang nylametake stadium pungkasan). Mekanisme iki sing ngunggahake "jalur luwih cepet" saka kenyamanan operasional dadi imperatif klinis lan ekonomi — lan iku alasan jero kenapa [biaya keterlambatan](../biaya-keterlambatan/) ditrapake ing piranti lunak klinis.

## Matematikane

```
Nilai intervensi luwih awal (saben pasien) =
    [Biaya_telat − Biaya_awal]                       (offset biaya perawatan)
  + [QALY_awal − QALY_telat] × λ                     (gain kesehatan × ambang)
  × P(perkembangan sajrone tundha)                    (pembobotan probabilitas)
```

Pembobotan probabilitas iku penting: ora saben pasien sing ngenteni berkembang. Modelake probabilitas transisi saben unit wektu (saka data sejarah alami), dudu kasus paling elek. Banjur diskon: biaya sing dihindari pirang-pirang taun adoh regane luwih murah dina iki ([diskon](../diskon-lan-preferensi-wektu/)) — lan elinga umume intervensi awal iku efektif-*biaya* tinimbang ngirit-*biaya* (deleng [ekonomi pencegahan](../ekonomi-pencegahan/)).

## Conto Petungan

Tumpukan skrining retinopati diabetik: 4,000 pasien, telat 6 sasi. Grading dibantu AI nglipatigakake throughput lan mbuwang antrian ing 8 minggu. Sejarah alami: ~2% pasien sing ngenteni/taun berkembang menyang stadium ngancam-paningal nalika ora diriksa.

```
Kedadean perkembangan sing dihindari saka akselerasi ~4 sasi:
  4,000 × 2% × (4/12) ≈ 27 pasien

Saben perkembangan sing dihindari:
  offset perawatan (terapi intravitreal vs laser) ≈ £4,000
  gain QALY (paningal kajaga) ≈ 0.8 QALY × £20,000 = £16,000

Nilai ≈ 27 × (4,000 + 16,000) ≈ £540,000 — saka siji tumpukan sing diresiki sepisan,
sadurunge ngetung gain throughput permanen.
```

## Sambungan karo Rékayasa Piranti Lunak

Rong transfer. Pisanan, sing gamblang: piranti lunak sing nyepetake jalur diagnostik lan perawatan (triase, grading AI, rute asil) dimonetisasi liwat model persis iki — lan model ngandhani jalur endi sing kudu dicepetake: sing kurva perkembangane paling curam, dudu antrian paling dawa. Kapindho, pantulan rékayasa: **cacat uga berkembang**. Bug sing kecekel ing desain biayane obrolan; ing produksi biayane insiden; kurva biaya "shift-left" (10–100× saben tahap) iku model perkembangan, lan versi jujur nggawa catetan sing padha — deteksi awal biasane efektif-biaya, dudu dhuwit gratis, amarga review lan tes duwe biaya nyata lan umume masalah sing kecekel ora bakal berkembang.

## Jebakan

- **Perkembangan kasus paling elek dianggep kanggo kabeh wong** — pembobotan probabilitas iku bedane antarane analisis lan advokasi.
- **Bias lead-time**: nemokake penyakit luwih awal tanpa ngowahi asil katon kaya manfaat nanging dudu; *intervensi efektif* luwih awal iku klaime, dudu deteksi luwih awal wae (deleng [ekonomi skrining](../ekonomi-skrining/)).
- **Ngetung ganda** karo klaim dhaptar-tunggu lan RTT sing dibangun ing akselerasi sing padha — siji perbaikan jalur, siji set manfaat, dialokasi sepisan.

## Sumber

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
