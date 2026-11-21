# Asil sing Dilaporake Pasien (Patient-Reported Outcomes: PROM, PREM, MCID)

PROM iku instrumen standar ing ngendi pasien nglaporake status kesehatane dhewe (gejala, fungsi, kualitas urip); PREM nangkep *pengalaman* perawatan. **MCID** — beda penting klinis minimal — iku owah-owahan skor paling cilik sing bener-bener dirasakake pasien minangka migunani: bar sing kudu dilewati perbaikan apa wae sing diklaim.

## Kenapa Iki Penting

PROM iku mata uang efikasi utama kanggo kesehatan digital: aplikasi arang ngobahake mortalitas, nanging bisa kredibel ngobahake skor gejala sing wis divalidasi. Instrumen sing penting sithik lan standar — **PHQ-9** (depresi, 0–27; pita keparahan ing 5/10/15/20), **GAD-7** (kuatir, 0–21; pita ing 5/10/15), **EQ-5D** (utilitas kanggo [QALY](../taun-urip-sing-disesuaikan-kualitas/)) — lan regulator, badan HTA, lan pembayar nampa iku persis amarga bisa dibandhingake antarane produk lan uji. MCID iku gerbang kajujuran: MCID PHQ-9 ≈ 5 poin, GAD-7 ≈ 4, indeks EQ-5D biasane ~0.03–0.08 — owah-owahan PHQ-9 1.5-poin sing signifikan sacara statistik ing sampel gedhe iku *nyata nanging ora ana maknane sacara klinis*, lan reviewer bukti bakal ngomong mangkono.

## Matematikane

```
Skor PROM: jumlah khusus-instrumen (contone, PHQ-9 = Σ 9 item × 0–3)

Estimasi MCID:
  adhedhasar-jangkar:      owah-owahan skor ing antarane pasien sing nglaporake "rada luwih apik"
  adhedhasar-distribusi:   ≈ 0.5 × SD skor baseline (heuristik kasar)

Pigura tingkat respons (kanggo uji lan dossier):
  responder = pasien sing apik ≥ MCID (utawa ≥50% kanggo konvensi PHQ-9)
  NNT = 1 / (tingkat responder_perawatan − tingkat responder_kontrol)
  — deleng number-needed-to-treat.md
```

## Conto Petungan

Aplikasi dhukungan depresi, RCT vs dhaptar tunggu, 12 minggu:

```
Owah-owahan PHQ-9: app −6.2 poin, kontrol −2.1 → beda sing disetel −4.1
Pamriksan MCID: 4.1 < 5 → beda mean ing ngisor MCID; laporake responder:
  responder (mudhun ≥5-poin): app 48%, kontrol 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — papat pangguna sing diobati saben respons klinis tambahan

Jembatan ekonomi: gain EQ-5D responder 0.06 lestari 6 sasi
  = 0.03 QALY; saben 1,000 pangguna: 260 responder ekstra × 0.03 = 7.8 QALY
  ≈ £156,000–£234,000 nilai kesehatan ing ambang NICE
```

Pigura responder/NNT slamet saka review ing ngendi beda mean sub-MCID bakal ditolak.

## Sambungan karo Rékayasa Piranti Lunak

PROM iku masalah pengumpulan-data sing piranti lunak unik dipasang kanggo ngrampungake: instrumen ing-aplikasi entuk tingkat rampung lan kapadhetan longitudinal sing ora tau digayuh kertas, ngowahi telemetri produk rutin dadi bukti kelas-HTA ([EQ-5D](../eq-5d/) iku lima layar). Aturan rékayasa: gunakake instrumen sing divalidasi *verbatim* (nulis ulang mbatalake — lisensi ditrapake); jadwalake pangukuran miturut protokol, dudu kenyamanan keterlibatan (ngukur mung pangguna aktif iku bias survivorship — deleng [retensi](../retensi-lan-churn/)); lan kunci versi data instrumen kaya skema apa wae — owah-owahan tembung ing tengah studi iku kerusakan data. PREM dipetakake menyang instrumen gaya CSAT/NPS, lan piwulang padha ditrapake: standar ngungkuli gawe-dhewe ing endi wae pamirsa iku pembayar. Kanggo instrumen khusus-produktivitas-kerja, deleng [WPAI](../gangguan-produktivitas-kerja-lan-aktivitas/).

## Jebakan

- **Signifikansi statistik ing ngisor MCID** diwenehake minangka manfaat klinis — inflasi paling umum ing bidang iki.
- **Regresi menyang rata-rata**: pangguna daftar ing puncak gejala; sadurunge/sawise siji-lengen nggedhekake banget — pembanding ora bisa ditawar.
- **Blanja instrumen**: mlakokake PHQ-9, GAD-7, lan WHO-5, banjur nglaporake sing obah — daftarake primer sadurunge.
- **Tekanan survei idin-digital**: nyurung pangguna menyang respons sing nguntungake ngrusak instrumen (lan reviewer ngerti tingkat dhasar).

## Sumber

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
