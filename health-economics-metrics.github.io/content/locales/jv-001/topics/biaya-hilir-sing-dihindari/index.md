# Biaya Hilir sing Dihindari (Avoided Downstream Costs)

Biaya hilir sing dihindari (cost offset) iku ragad perawatan ing wektu ngarep sing kecegah dening tindakan sing luwih awal utawa luwih apik, dikurangi karo biaya intervensi dhewe. Offset iku mekanisme sing bisa ndadekake intervensi *dominan* — luwih murah **lan** luwih apik — lan uga garis sing paling akeh diitung ganda lan paling kakehan diklaim ing ekonomi kesehatan.

## Kenapa Iki Penting

Meh saben proposisi nilai kesehatan digital ngemot klaim offset: "aplikasi kita nyegah rawat inap," "pemberitahuan kita nyegah kemunduran," "platform kita ngindhari tes dobel." Yen offset nyata, ekonomine owah (deleng conto petungan [ICER](../rasio-efektivitas-biaya-inkremental/), ing ngendi offset £600k nggawe kasus). Pembayar ngerti iki — mula klaim offset narik pengawasan paling ketat ing penilaian apa wae. Aturan kredibilitas ing ngisor iki sing mbedakake model sing bisa didanai saka marketing.

## Matematikane

```
Biaya net = biaya intervensi − Σ offset

Offset sing sah kudu:
  Bisa disebabake — nduwe sambungan kausal karo intervensi (bukti pembanding)
  Marginal        — dhuwit bener-bener mandheg dibelanjakake, ing biaya marginal dudu
                 rata-rata (deleng marginal-vs-average-cost.md)
  Dibobot         — dikali P(kedadean hilir bakal kelakon)
  probabilitas
  Didiskon        — biaya sing dihindari ing mangsa ngarep ing nilai saiki
  Unik            — diitung sepisan, ing siji garis manfaat
```

## Conto Petungan

"Klaim risiko-migrasi iki, ditindakake kanthi bener": aplikasi pemantau tatu kanggo 5,000 pasien pasca-operasi ngaku ngindhari rawat inap ulang amarga infeksi.

```
Rawat inap ulang dhasar kanggo infeksi: 4.0% ; nganggo aplikasi (RCT): 3.1%
Kedadean sing dihindari sing bisa disebabake = 5,000 × 0.009 = 45/taun
Biaya saben spell rawat inap ulang (marginal, trust iki): £3,200
Offset = 45 × 3,200 = £144,000/taun
Biaya aplikasi = 5,000 × £20 = £100,000/taun
Biaya net = −£44,000 → bener-bener ngirit biaya, kanthi:
  atribusi saka RCT ✓  biaya marginal ✓  probabilitas saka data uji coba ✓
```

Klaim sing padha sing dibangun ing "rawat inap ulang biayane rata-rata £5,800, kita bakal nyegah akeh" gagal ing kabeh papat tes lan pantes ditolak.

## Sambungan karo Rékayasa Piranti Lunak

"Migrasi iki ngindhari penulisan ulang ing mangsa ngarep" iku klaim offset, lan aturan ekonomi kesehatan ndadekake jujur:

- **Biaya kontrafaktual**: penulisan ulang bener-bener regane pira, dibuktekake kepriye?
- **Probabilitas**: sepira kemungkinan masa depan kuwi? (Dudu 100% — produk dipateni, prioritas owah.)
- **Diskon**: penulisan ulang sing dihindari ing taun 4 kanthi diskon 3.5–10% regane luwih murah tinimbang rega nominal.
- **Keunikan**: aja ngaku penulisan ulang sing dihindari sing padha ing garis utang teknis lan garis retensi.

`Nilai offset = P(kedadean mangsa ngarep) × biaya kontrafaktual × faktor diskon` — tulisen baris kuwi ing proposal lan delengen perkiraane dadi bisa didebat, kuwi tujuane.

## Jebakan

- **Ngetung ganda** — rawat inap sing dihindari sing padha diklaim minangka offset, bed days, lan QALY-karo-biaya-ditempelake.
- **Offset biaya rata-rata** kanggo kedadean sing biaya tetepe terus tanpa preduli.
- **Probabilitas 100% meneng-meneng** ing kedadean hilir sing mung bisa kelakon.
- **Offset menyang anggaran liya** sing diwenehake minangka tabungan kanggo pembayar sing dijaluk mbayar — deleng [perspektif analisis](../perspektif-analisis/).

## Sumber

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
