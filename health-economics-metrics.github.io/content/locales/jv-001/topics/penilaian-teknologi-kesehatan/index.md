# Penilaian Teknologi Kesehatan (Health Technology Assessment, HTA)

HTA iku proses formal lan kelembagaan sing digunakake sistem kesehatan kanggo mutusake apa teknologi — obat, piranti, utawa piranti lunak — pantes dibayar. Nggabungake bukti efektivitas klinis karo evaluasi ekonomi miturut metodologi sing diterbitake lan wajib.

## Kenapa Iki Penting

Yen sampeyan adol menyang layanan kesehatan nasional, badan HTA bisa harfiah nemtokake akses pasarmu. Ngerti proses lokal tegese ngerti regulator-nilai sing nyata:

- **NICE (Inggris)**: penilaian statutori ing *kasus acuan* sing ditetepake — QALY saka [EQ-5D](../eq-5d/), [perspektif](../perspektif-analisis/) NHS+PSS, [diskon](../diskon-lan-preferensi-wektu/) 3.5%, [PSA](../analisis-sensitivitas-probabilistik/) wajib — dinilai marang £20k–£30k/QALY kanthi [pengubah keparahan](../shortfall-qaly-lan-pengubah-keparahan/); teknologi khusus banget nganti £100k+ kanthi pembobotan.
- **ICER (AS, non-pemerintah)**: laporan bukti kanthi *tolok ukur rega manfaat-kesehatan* — rega ing ngendi produk bakal efektif-biaya ing $100k–$150k saben QALY/evLYG — dienggo minangka pengaruh negosiasi; plus "peringatan keterjangkauan" dampak anggaran.
- **Kanada (CADTH → CDA-AMC)**: review reimbursement ing ≈CAD$50k/QALY; historis njaluk pemotongan rega ing ~95% pengajuan.

## Matematikane

Kekuwatan HTA dudu rumus nanging **metode sing diamanatake**: saben pengajuan ngitung [ICER](../rasio-efektivitas-biaya-inkremental/) sing padha miturut aturan kasus-acuan sing padha, mula asil bisa dibandhingake antarane produk lan taun. Kasus acuan nemtokake ukuran asil, instrumen utilitas, perspektif, pilihan pembanding, tingkat diskon, cakrawala wektu, lan analisis ketidakpastian — nyingkirake saben derajat kebebasan sing bisa dimainake sponsor.

## Conto Petungan

Terapi digital ngirim menyang evaluasi gaya-NICE:

```
Model: ΔC = +£450/pasien, ΔE = +0.03 QALY → ICER = £15,000/QALY ✓ ing ngisor £20k
Pamriksan kasus-acuan:
  utilitas saka EQ-5D-5L karo set nilai UK               ✓
  pembanding = jalur perawatan saiki (dudu "ora ana perawatan") ✓
  PSA: 71% probabilitas efektif-biaya ing £20k            ✓ (dilaporake)
  pengubah keparahan: shortfall ing ngisor wates ×1.2     — ora diklaim
Rekomendasi: komisioning rutin, kanthi pengumpulan data donya nyata.
```

Analisis pilihan sponsor dhewe nuduhake £9,000/QALY; kasus acuan nyurung dadi £15,000 kanthi meksa pembanding sing jujur. Jurang iku *sebabe* kasus acuan ana.

## Sambungan karo Rékayasa Piranti Lunak

Artefak sing bisa dialihake yaiku **kasus acuan internal**: siji metode sing diamanatake kanggo kabeh kasus bisnis piranti/platform — pembanding sing dinyatakake, biaya unit standar (deleng [tarif nasional lan biaya unit](../tarif-nasional-lan-biaya-unit/) kanggo polane), tingkat diskon tetep, analisis sensitivitas sing dibutuhake, cithakan standar. "Dossier-AMCP kanggo piranti" sing diajukake menyang dewan platform ndadekake proposal bisa dibandhingake lan dolanan katon, persis kaya HTA nindakake kanggo kedokteran. Mulai luwih cilik tinimbang NICE: cithakan rong kaca plus dhaptar rega sing diterbitake ngungkuli ora ana standar babar pisan.

Kanggo carane model HTA multi-siklus bener-bener disimulasikake kohort-saben-siklus, deleng [simulasi kohort Markov](../simulasi-kohort-markov/).

## Jebakan

- **Nganggep HTA minangka formalitas sawise izin regulasi** — izin CE/UKCA/FDA ngomong produk aman; HTA mutusake apa *pantes dituku*. Alangan beda, bukti beda.
- **Mbangun model ekonomi sawise uji** — generasi bukti kudu dirancang mundur saka syarat kasus acuan.
- **Ngabaikake beda yurisdiksi**: ICER sing bisa didanai ing AS ing $120k/QALY gagal NICE ing £30k; rencanakake bukti lan rega saben pasar.

## Sumber

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
