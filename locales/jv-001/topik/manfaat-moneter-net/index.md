# Manfaat Moneter Net (Net Monetary Benefit, NMB)

NMB ngowahi asil efektivitas-biaya dadi siji nilai dhuwit: gain kesehatan sing diregani ing ambang kesediaan-mbayar, dikurangi biaya. Kembare, Net Health Benefit (NHB), nyatakake aturan sing padha ing unit kesehatan.

## Kenapa Iki Penting

Rasio ([ICER](../rasio-efektivitas-biaya-inkremental/)) canggung: njeblug cedhak efek nol, ora bisa dirata-rata ing draw ketidakpastian, lan ora bisa ngurutake telu pilihan utawa luwih kanthi resik. NMB ndandani kabeh kuwi — linear, mula sampeyan bisa ngurutake pilihan, ngrata-rata draw Monte Carlo, lan ngurai kontribusi. Iku uga wujud matematika ekonomi-kesehatan sing wis dingerteni saben insinyur: *nilai dikurangi biaya*.

## Matematikane

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = efek inkremental (contone, QALY)
ΔC = biaya inkremental
λ  = ambang kesediaan-mbayar (deleng willingness-to-pay-thresholds.md)

Aturan keputusan: adopsi yen NMB > 0 (setara NHB > 0).
Antarane alternatif: pilih NMB paling dhuwur.
```

NMB > 0 ⇔ ICER < λ (nalika ΔE > 0), mula loro aturan setuju — NMB mung tumindak luwih apik.

## Conto Petungan

Telung pilihan kanggo layanan diabetes, saben 1,000 pasien, λ = £20,000/QALY:

```
Pilihan          ΔC          ΔE (QALY)    NMB = 20,000×ΔE − ΔC
App + coaching   £400,000    30           600,000 − 400,000 = £200,000
App wae          £150,000    12           240,000 − 150,000 = £90,000
Klinik ekstra    £700,000    32           640,000 − 700,000 = −£60,000
```

Klinik ekstra entuk QALY paling akeh nanging ngrusak nilai ing ambang iki (NMB < 0). App + coaching menang. Catet NMB ngidini sampeyan *ngurutake kabeh telu sekaligus* — ICER berpasangan bakal butuh prosedur wates ing [dominansi lan wates efisiensi](../dominansi-lan-wates-efisiensi/), lan tekan wangsulan sing padha.

Pandangan NHB saka pemenang: 30 − 400,000/20,000 = 30 − 20 = **10 QALY net** — kesehatan sing dipikolehi ngluwihi apa sing bakal diasilake dhuwit sing padha ing panggonan liya.

## Sambungan karo Rékayasa Piranti Lunak

`(jam sing dihemat × tarif saben jam sarat) − biaya piranti` — kasus bisnis piranti saben dina — secara harfiah petungan NMB kanthi λ = biaya insinyur sarat. Rong peningkatan sing ditambahake ekonomi kesehatan:

- **Jadikake λ variabel, dudu konstanta.** Plot NMB marang λ ("nilai siji jam-insinyur") lan tuduhake ing ngendi keputusan mbalik; pemangku kepentingan beda banjur bisa nrapake regane dhewe tanpa mbaleni matematikamu.
- **Pamikiran NHB**: "platform iki ngirit 5,000 jam-insinyur nanging ngentekake anggaran sing bakal tuku 3,000 jam-insinyur kapasitas kontraktor — net 2,000 jam" meksa perbandingan biaya-peluang ing unit kapasitas. Deleng [biaya peluang](../biaya-peluang/).

## Jebakan

- **Ndhelikake ambang**: NMB ora ana artine tanpa nyatakake λ; laporake NMB ing £20k lan £30k, utawa plot kurvane.
- **Nggunakake NMB kanggo nyuci efek cilik**: populasi gedhe dikali efek saben-wong sing sepele bisa ngasilake NMB gedhe — laporake efek saben-wong jejer.
- **Lali NMB mewarisi saben ketidakpastian** ing ΔC lan ΔE — pasangake karo [analisis sensitivitas probabilistik](../analisis-sensitivitas-probabilistik/).

## Sumber

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
