# Metrik DORA (DORA Metrics)

Metrik DORA (DevOps Research and Assessment) iku papat ukuran kinerja panyampaian piranti lunak — frekuensi deployment, lead time kanggo owah-owahan, tingkat kegagalan owah-owahan, lan wektu pemulihan deployment gagal — plus keandalan minangka sing kalima. Iku tolok ukur panyampaian sing paling divalidasi ing bidang iki, lan saben siji duwe wacan ekonomi kesehatan langsung.

## Kenapa Iki Penting

Riset sepuluh taun DORA nyambungake metrik iki karo kinerja organisasi. Klaster laporan 2024: tim **elite** nyebar miturut kebutuhan (kaping pirang-pirang/dina), butuh kurang saka sedina saka commit menyang produksi, gagal ~5% owah-owahan, lan pulih ing kurang saka sajam; sing **kurang** nyebar saben sasi-utawa-luwih jarang, butuh sasi-sasi, gagal ~40% owah-owahan, lan pulih ing minggu-minggu. Kanggo sistem kesehatan, iki dudu angka vanity IT: nemtokake sepira cepet nilai klinis tekan pasien lan pira risiko sing digawa saben owah-owahan.

## Matematikane

```
Frekuensi deployment    = deployment produksi / wektu
Lead time kanggo owah   = t(deploy) − t(commit), median
Tingkat gagal owah      = owah-owahan gagal / total owah-owahan × 100
Wektu pemulihan (MTTR)  = t(dipulihake) − t(gagal), median
Keandalan               = pencapaian SLO (ketersediaan, latensi, kabeneran)
```

Terjemahan ekonomi kesehatan:

```
Lead time     → cost-of-delay.md: minggu ing pipeline × CoD (£ utawa QALY/minggu)
Tingkat gagal → tingkat kedadean ora becik saka owah-owahan piranti lunak: CFR × biaya saben insiden
Wektu pulih   → cilaka downtime: MTTR × (aktivitas klinis ilang + paparan keslametan)/jam
Keandalan     → diskon manfaat: layanan ing ketersediaan 99% ngirim ≈ 0.99
                saka manfaat sing dimodelake — analog piranti lunak saka kepatuhan
```

## Conto Petungan

Tim piranti lunak aliran-pasien sawijining trust, sadurunge/sawise investasi rékayasa-panyampaian:

```
                    Sadurunge   Sawise
Deploy              saben sasi  saben minggu
Lead time           6 minggu    4 dina
CFR                 25%         8%
MTTR                2 dina      2 jam
```

Tim ngirim ~30 perbaikan/taun kanthi nilai rata-rata saben perbaikan £4,000/minggu ([CoD](../biaya-keterlambatan/)). Pemotongan lead-time ~5.4 minggu narik aliran manfaat saben perbaikan maju: 30 × 5.4 × 4,000 ≈ **£648,000/taun** nilai sing dikirim luwih awal. Perbaikan CFR: 30 × (0.25 − 0.08) = ~5 owah-owahan gagal luwih sithik/taun × £15,000 biaya insiden rata-rata (downtime sistem klinis, remediasi) = **£76,500/taun**. Investasi panyampaian diregani ing mata uang sing padha karo intervensi klinis apa wae.

## Sambungan karo Rékayasa Piranti Lunak

Iki *iku* sisi piranti lunak — sambungan sing pantes dinyatakake yaiku pemetaan kosok balene: metrik DORA iku metrik operasional rumah sakit nganggo busana beda. Lead time ↔ [rujukan-menyang-perawatan](../rujukan-menyang-perawatan/); tingkat gagal owah-owahan ↔ [tingkat rawat inap ulang](../tingkat-rawat-inap-ulang/) (karya sing mantul bali); MTTR ↔ tanggap darurat; frekuensi deployment ↔ throughput klinik. Metode perbaikan pindhah ing loro arah amarga loro-lorone sistem antrian ing kendala keslametan. Catet uga temuan AI DORA 2025: adopsi AI saiki berkorelasi karo throughput luwih dhuwur nanging stabilitas *luwih elek* — intervensi kanthi efikasi lan efek samping, sing nuntut persis analisis manfaat-net sing diwulangake repositori iki (deleng [produktivitas pangembang AI](../produktivitas-pangembang-karo-ai/)).

## Jebakan

- **Dolanan metrik**: cacah deploy digedhekake nganggo rilis no-op; CFR dikurangi kanthi ora ngetung hotfix minangka kegagalan. Definisikan kedadean kanthi tepat, kaya HTA nemtokake titik pungkasan.
- **Tabel liga lintas-tim**: klaster DORA mbandhingake praktik, dudu tim kanthi profil risiko beda; tim sistem klinis ing "dhuwur" bisa optimal ing ngendi "elite" bakal ceroboh.
- **Ngoptimalake siji metrik**: kacepetan tanpa CFR/keandalan iku trade-off throughput-instabilitas — tansah laporake papat bebarengan (iku [tabel biaya-akibat](../analisis-biaya-akibat/), dudu skor).

## Sumber

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
