# Analisis Minimalisasi Biaya (Cost-Minimization Analysis, CMA)

CMA mung mbandhingake biaya, lan milih pilihan paling murah — sah *mung* nalika asil alternatif wis dibuktekake padha.

## Kenapa Iki Penting

CMA iku analisis paling prasaja lan paling disalahgunakake. Klaim kesetaraan sing nindakake kabeh gaweyan: yen asil bener-bener ora beda (biosimilar vs asline; rong pemasok layanan sing padha nyukupi spesifikasi sing padha), mula biaya iku siji-sijine pitakon lan CMA bener. Kaku-e ana ing *mbuktekake* kesetaraan dhisik — biasane liwat studi non-inferioritas kanthi margin sing ditetepake sadurunge — langkah sing biasane dilewati para pembeli.

## Matematikane

```
Yen ana bukti yen Efek_A ≈ Efek_B (ing margin δ sing ditetepake sadurunge):
Pilih min(Biaya_A, Biaya_B)

Biaya diukur saka perspektif sing padha, ing cakrawala sing padha,
kalebu biaya ngalih/transisi.
```

Yen kesetaraan ora bisa dibuktekake, CMA ora sah — gunakake [CEA](../analisis-efektivitas-biaya/)/[CUA](../analisis-biaya-utilitas/) tinimbang.

## Conto Petungan

Trust milih antarane rong platform konsultasi video. Pilot paralel 3-sasi nuduhake tingkat rampung 94.1% vs 93.8%, kepuasan pasien 4.4 vs 4.4 — beda ing njero δ 2 poin persentase sing wis disepakati. Asil: padha. Biaya sajrone 3 taun:

```
                     Platform A     Platform B
Lisensi              £360,000       £210,000
Integrasi            £80,000        £150,000
Latihan/dhukungan    £60,000        £90,000
Total                £500,000       £450,000
```

Platform B menang £50,000 — *kalebu* biaya integrasine sing luwih dhuwur. Tanpa pilot, klaim kesetaraan bakal adhedhasar brosur vendor, lan beda tingkat rampung 1-poin (≈ ewonan konsultasi gagal/taun) bakal ngungkuli £50,000.

## Sambungan karo Rékayasa Piranti Lunak

CMA iku wujud formal pengadaan komoditas: rong panyedhiya CI sing nyukupi SLO identik, rong object store kanthi spesifikasi durabilitas sing padha. Piwulang ekonomi kesehatan yaiku *urutan operasi*: dhisik buktekake kesetaraan (benchmark marang beban kerjamu, pilot marang SLO-mu, kanthi margin sing disepakati sadurunge), banjur bandhingake total biaya kalebu migrasi. "Padha wae, B luwih murah" tanpa langkah pisanan iku cara organisasi tuku piranti sing 10% luwih murah lan 40% luwih elek. Akibate: nalika vendor ngaturake rega, kongkon dheweke nyatakake kesetaraan — iku ngiket ing arah liya uga.

## Jebakan

- **Kesetaraan sing dianggep** — dosa sing nemtokake; ora ana bukti beda dudu bukti kesetaraan (pilot sing kurang daya "nuduhake" kesetaraan gratis).
- **Ngilangi biaya ngalih** — migrasi, latihan ulang, lan mlaku paralel kalebu ing sisi biaya.
- **Kesetaraan ing asil sing salah**: padha ing metrik sing diukur, beda ing sing penting (aksesibilitas, latensi buntut, egress data).

## Sumber

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
