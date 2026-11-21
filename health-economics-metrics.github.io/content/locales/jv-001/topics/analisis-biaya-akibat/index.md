# Analisis Biaya-Akibat (Cost-Consequence Analysis, CCA)

CCA nampilake biaya bareng **tabel asil sing dipilah** — klinis, operasional, pengalaman — tanpa nggulung dadi siji rasio utawa skor. Sing mutusake nimbang trade-off kanthi eksplisit.

## Kenapa Iki Penting

CCA iku **format ekonomi pilihan NICE kanggo umume teknologi kesehatan digital** miturut Evidence Standards Framework. Produk digital ngasilake efek heterogen (wektu dihemat, kepuasan, pangurangan DNA, keuntungan klinis cilik) sing angel digabung kanthi jujur dadi siji angka QALY. Tinimbang meksa komposit sing rapuh, CCA nuduhake buku besar lengkap. Kanggo umume kasus bisnis piranti lunak, iku format sing paling jujur lan uga paling persuasif, amarga saben pemangku kepentingan bisa nemokake baris sing gegandhengan karo keputusane dhewe.

## Matematikane

Ora ana rumus agregasi kanthi sengaja. Output-e iku tabel:

```
                          Intervensi   Pembanding   Beda
Biaya (taunan)            £X           £Y           ΔC
Asil 1 (unit alami)       …            …            Δ1
Asil 2                    …            …            Δ2
Asil kualitatif           diterangake, ora diskor
```

Saben baris njaga unit dhewe. Aturan: saben akibat ditetepake sadurunge (ora ana milih-milih sawise asil); [perspektif](../perspektif-analisis/) lan [cakrawala](../cakrawala-wektu/) sing padha ing saindhenge; ketidakpastian saben baris.

## Conto Petungan

Platform penilaian pra-operasi digital vs proses adhedhasar telpon, saben taun, siji trust:

```
                              Digital      Telpon      Beda
Biaya operasi                 £180,000     £95,000     +£85,000
Jam perawat kanggo penilaian  6,200        11,800      −5,600 jam
Pembatalan operasi ing dina   92           174         −82
Kepuasan pasien (CSAT)        4.5/5        3.9/5       +0.6
Penilaian ilang/ora lengkap   1.2%         4.8%        −3.6 pp
```

Ora ana skor tunggal — nanging keputusane gampang dipikirake: £85,000 tuku 5,600 jam perawat (≈ £15/jam, adoh ing ngisor biaya staf apa wae), 82 pembatalan sing dihindari (saben siji mbuwang slot teater regane ~£1,200), lan pengalaman sing luwih apik. Komite uga bisa ndeleng persis apa sing *ora* ditampa: ora ana klaim efek QALY utawa mortalitas.

## Sambungan karo Rékayasa Piranti Lunak

CCA iku versi formal balanced scorecard sing wis digunakake proposal platform sing apik: biaya jejer metrik DORA, skor DevEx, cacahe insiden — ora diagregasi. Disiplin ekonomi kesehatan sing kudu ditambah: **tetepake baris sadurunge** (putusake apa sing diitung sadurunge pilot, supaya ora bisa meneng-meneng nyingkirake metrik sing dadi elek), lan **tuduhake baris sing ora nguntungake** — CCA mung karo kabar apik iku marketing. Gunakake CCA nalika ora ana komposit sing bisa dipertahanake, sing kanggo piranti pangembang meh tansah.

## Jebakan

- **Akibat sing dipilih-pilih** — integritas format gumantung penetapan sadurunge.
- **Agregasi sing diselundupake**: pewarnaan utawa "skor sakabehe" ngenalake maneh bobot sewenang-wenang sing dihindari CCA.
- **Lumpuh keputusan**: CCA butuh pangambil keputusan sing gelem nimbang trade-off; pasangake karo rekomendasi lan alasane.

## Sumber

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
