# Rujukan-menyang-Perawatan (Referral to Treatment, RTT)

Rujukan-menyang-perawatan iku wektu sing kliwat saka rujukan dokter umum nganti miwiti perawatan sing dipimpin konsultan. Konstitusi NHS nyetel standar: **92% pasien kudu miwiti perawatan ing 18 minggu**. RTT iku metrik operasional paling katon sacara politik ing NHS Inggris.

## Kenapa Iki Penting

Trust sing ora nyukupi target RTT ngadhepi pengawasan regulasi, intervensi, lan kerusakan reputasi; dhaptar tunggu nasional iku angka kaca ngarep. Saben minggu pasien ngenteni iku kesehatan sing ilang (ngenteni ing kahanan kesehatan sing luwih elek — deleng matematika QALY ing ngisor) lan asring biaya sing tambah (kondisi mundur; deleng [intervensi luwih awal](../intervensi-luwih-awal/)). Piranti lunak sing ngirit wektu ing ngendi wae ing jalur rujukan-menyang-perawatan — triase, kacepetan diagnostik, kapasitas klinik, penjadwalan — langsung nyuda akibat operasional lan finansial saka gagal standar, sebabe dampak RTT iku garis manfaat kelas-siji ing kasus bisnis digital NHS.

## Matematikane

```
Kinerja RTT = pasien sing diobati ing 18 minggu / total sing diobati × 100

Biaya kesehatan waktu-ngenteni saben pasien = durasi ngenteni × (utilitas_diobati − utilitas_ngenteni)

Pandangan jalur: RTT = Σ durasi tahap (triase rujukan → janji pisanan →
diagnostik → keputusan → perawatan) — perbaiki antrian paling dawa, dudu
tahap paling sibuk (deleng flow-metrics.md).
```

## Conto Petungan

Sawijining spesialisasi nangani 5,000 pasien jalur/taun; mean ngenteni 24 minggu; utilitas ngenteni 0.68 vs diobati 0.80.

Triase digital plus protokol langsung-menyang-tes nyingkirake 5 minggu antrian murni:

```
Gain QALY = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALY/taun
Dimonetisasi ing £20,000–£30,000/QALY (deleng willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/taun nilai kesehatan
```

— plus trust pindhah saka nglanggar dadi nyukupi standar 18-minggu, sing duwe nilai tata kelola sing ora ditangkep spreadsheet kanthi lengkap.

## Sambungan karo Rékayasa Piranti Lunak

RTT iku **metrik lead-time ing antrian multi-tahap** — versi rumah sakit saka lead time commit-menyang-produksi (deleng [metrik DORA](../metrik-dora/)). Cara perbaikan identik: instrumenake saben tahap, temokake ing ngendi wektu kalender nggenang (meh tansah serah-terima lan antrian, dudu karya klinis), lan busak kahanan ngenteni. Kemenangan piranti lunak khas: e-triase sing nuntun rujukan ing jam tinimbang batch saben minggu, push asil-diagnostik tinimbang janji tindak lanjut, lan kriteria langsung-menyang-tes otomatis. Regani perbaikan nganggo [biaya keterlambatan](../biaya-keterlambatan/) sing didenominasi ing QALY/minggu.

## Jebakan

- **Ndandani tahap sing dudu kendala** — nyuda ngenteni janji-pisanan nalika antrian diagnostik tuwuh mung mindhah genangan.
- **Dolanan**: reset jalur lan jeda jam bisa nambah RTT sing dilaporake tanpa ngobati sapa wae luwih awal; audit distribusi dhasar.
- **Ngaku kabeh perbaikan jalur** kanggo siji piranti nalika sawetara owah-owahan teka bareng — atribusi butuh pembanding.

## Sumber

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
