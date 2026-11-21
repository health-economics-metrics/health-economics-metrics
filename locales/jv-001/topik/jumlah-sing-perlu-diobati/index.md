# Jumlah sing Perlu Diobati (Number Needed to Treat, NNT)

NNT iku cacah pasien sing kudu nampa intervensi supaya **siji** pasien tambahan entuk manfaat, sajrone kerangka wektu sing dinyatakake. Ngowahi pangurangan risiko persentase — sing nyesatake — dadi unit usaha-saben-manfaat sing bisa dipikirake sapa wae.

## Kenapa Iki Penting

"Nyuda serangan jantung 25%!" kedengaran mutlak. Yen risiko dhasar 4% sajrone 5 taun, pangurangan absolut iku 1 poin persentase, mula **100 wong kudu ngombe obat 5 taun supaya 1 entuk manfaat** — lan kabeh 100 nanggung biaya lan efek samping. NNT iku penawar marketing risiko-relatif, sing sebabe kedokteran adhedhasar-bukti miwiti karo iku. Statin kanggo pencegahan primer: NNT ≈ 50–100 sajrone 5 taun saben serangan jantung sing dihindari. Pantulane, **NNH** (jumlah sing perlu cilaka), ngetung pira sing diobati saben wong sing cilaka.

## Matematikane

```
ARR = tingkat kedadean kontrol − tingkat kedadean perawatan   (pangurangan risiko absolut)
NNT = 1 / ARR
NNH = 1 / (tingkat cilaka_perawatan − tingkat cilaka_kontrol)

Jembatan ekonomi:
biaya saben kedadean sing dicegah = NNT × biaya saben kursus perawatan
```

Tansah nyatakake kerangka wektu lan populasi dhasar — NNT ora ana artine tanpa loro-lorone.

## Conto Petungan

Sistem prediksi-tiba ing rumah sakit menehi tandha pasien risiko-dhuwur kanggo intervensi (sensor amben, review, pengawasan). Uji: tiba nganggo cedera mudhun saka 3.2% dadi 2.4% saka admisi.

```
ARR = 0.8 poin persentase → NNT = 1/0.008 = 125
   (125 pasien kudu entuk bundel intervensi kanggo nyegah 1 tiba cedera)
Biaya intervensi ≈ £40/pasien → biaya saben tiba sing dicegah = 125 × 40 = £5,000
Biaya tiba cedera rawat inap (inap ekstra, pencitraan, litigasi) ≈ £12,000
Net: pencegahan mbayar ~2.4:1 — lan gain QALY ana ing ndhuwur.
```

Catet kepriye NNT njaga klaim jujur: "nyuda tiba 25%" lan "nyegah siji tiba saben 125 pasien sing diobati" iku asil sing padha, kanthi daya persuasif beda.

## Sambungan karo Rékayasa Piranti Lunak

NNT iku unit sing bener kanggo gerbang utawa pamriksan apa wae sing tumindak ing akeh item kanggo nangkep sithik: **"cacah PR sing kudu ngliwati gerbang review AI kanggo nangkep siji cacat arah-produksi."** Yen gerbang mriksa 400 PR saben tangkapan nyata (NNT = 400) ing 4 menit perhatian pangembang saben siji, siji tangkapan biayane ~27 jam-pangembang — saiki bandhingake karo biaya insiden sing dicegah. NNH dipetakake menyang positif palsu: pira PR saben tandha *palsu*, lan saben siji biayane pira ing perhatian lan kapercayan? Piranti gaya-skrining (linter, pemindai keamanan, deteksi anomali) kudu dikirim kanthi aritmetika NNT/NNH — deleng [ekonomi skrining](../ekonomi-skrining/) kenapa prevalensi rendah ndadekake angka iki kejem. [Jumlah sing perlu diskrining](../jumlah-sing-perlu-diskrining/) iku angka analog siji tingkat ing ndhuwur, kanggo kabeh program skrining-banjur-ngobati tinimbang perawatan wae.

## Jebakan

- **Ora ana kerangka wektu**: "NNT = 50" ora ana artine; "NNT = 50 sajrone 5 taun" iku klaim.
- **Transplantasi risiko-dhasar**: NNT sing diitung ing populasi uji risiko-dhuwur ambruk ing populasi deployment risiko-rendah.
- **Ngabaikake NNH** — gerbang kanthi NNT 400 lan NNH 3 iku generator gangguan, dudu sistem keslametan.

## Sumber

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
