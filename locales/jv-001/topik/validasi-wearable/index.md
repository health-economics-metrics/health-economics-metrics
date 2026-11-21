# Validasi Wearable (Wearable Validation)

Metrik validasi ngukur sepira apik pangukuran wearable cocog karo standar emas klinis (ECG kanggo detak jantung, polisomnografi kanggo turu): **MAPE**, korelasi konkordansi, persetujuan Bland–Altman — plus metrik operasional sing mbatesi kualitas data donya nyata: **kepatuhan wear-time** lan **kelengkapan data**.

## Kenapa Iki Penting

Validasi iku prasyarat kanggo kabeh ing hilir: piranti sing ora bisa mbuktekake persetujuan karo pangukuran rujukan ora bisa nancepake [titik pungkasan digital](../titik-pungkasan-digital-lan-biomarker/), ndhukung [penagihan RPM](../ekonomi-pemantauan-pasien-jarak-adoh/), utawa nggawa klaim klinis. Ambang sing ditampa bidang kanggo detak jantung: **MAPE ≤5%** (ketat) utawa **≤10%** (longgar) marang ECG. Titik acuan saka literatur: Oura Gen 3 HR istirahat MAPE 1.67% (CCC 0.97); Fitbit Charge 6 MAPE ~5.5% — piranti konsumen saiki nyabrang wates kelas-klinis, sing sebabe pangukuran penting saben-piranti lan saben-kondisi.

## Matematikane

```
MAPE = (1/n) Σ |diukur_i − rujukan_i| / rujukan_i × 100

CCC (korelasi konkordansi) = persetujuan kalebu korelasi lan bias
      sistematis (Pearson r dihukum dening pergeseran lokasi/skala)

Bland–Altman: mean bias ± 1.96 SD wates persetujuan — nuduhake apa
      kesalahan gumantung ukuran nilai

Gerbang operasional:
Kepatuhan wear-time = wektu dienggo / wektu protokol × 100
Kelengkapan data    = titik data sing diamati / sing diarep-arep × 100
```

Validasi kudu dilaporake **saben kondisi aktivitas** (istirahat, gerakan, turu) lan saben populasi — penginderaan optik PPG mudhun karo artefak gerakan, kontak elek, lan warna kulit luwih peteng, mode kegagalan sing didokumentasi sing relevan-keadilan.

## Conto Petungan

Program bangsal virtual milih wearable pemantauan. Kandidat A: MAPE istirahat 2.1%, MAPE olahraga 11.4%. Kandidat B: istirahat 3.8%, olahraga 6.9%.

```
Kasus panggunaan: deteksi pasien sing saya elek ing omah — peringatan memicu ing
HR dhuwur sing terus-terusan, asring nalika aktivitas.

Judhul Kandidat A (2.1%) menang brosur; kandidat B menang kasus
panggunaan: ing kondisi sing relevan-peringatan (gerakan), kesalahan 11.4% A
ing HR 100 = ±11 bpm — nyakup kabeh pita ambang peringatan,
ngasilake eskalasi palsu (saben siji panggilan perawat, ~£40) utawa kelalen.

Ekonomi peringatan-palsu: 500 pasien × 2 peringatan palsu ekstra/minggu × £40
= £2.08M/taun biaya kesalahan saka milih angka validasi sing salah.
```

## Sambungan karo Rékayasa Piranti Lunak

Insinyur nggunakake data validasi nalika milih sensor lan *ngasilake* nalika mbangun fitur pangukuran — loro peran butuh disiplin sing padha: tes ing kondisi deployment, dudu kondisi demo (analog piranti lunak: benchmark ing beban kerja produksimu, dudu beban vendor). Wear-time lan kelengkapan iku asil rékayasa-produk — kenyamanan, umur baterei, desain ritual ngecas, lan keandalan sync nemtokake apa gerbang penagihan RPM 16-dina-ing-30 kacukupi ([ekonomi pemantauan pasien jarak adoh](../ekonomi-pemantauan-pasien-jarak-adoh/)) lan apa dataset uji bisa dianalisis. Anggep ora-ana-data minangka sinyal sing dirancang: bedakake "ora dienggo," "dienggo nanging ora ana sinyal," lan "sync gagal" ing skema wiwit dina pisanan — dicampur dadi null, kuwi ngracun saben analisis hilir.

## Jebakan

- **MAPE agregat ndhelikake kegagalan khusus-kondisi** — jebakan conto petungan.
- **Populasi validasi ≠ populasi deployment**: umur, warna kulit, tremor, obesitas kabeh nggeser kesalahan sensor optik; priksa demografi studi.
- **Korelasi dilaporake ing ngendi persetujuan dibutuhake**: Pearson r dhuwur kanthi bias sistematis isih salah-klasifikasi marang ambang absolut — keukeuh CCC/Bland–Altman.
- **Kelengkapan digedhekake imputasi**: kesenjangan sing diisi dilaporake minangka data sing diamati.

## Sumber

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
