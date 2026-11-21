# Gwiriens Gwiskadow

Musurow gwiriens a vusur pygemmys a asent musuryansow gwiskadow gans an savon owrek klinikel (ECG rag rate kolon, polysomnografi rag kosk): **MAPE**, kesvyns konkordans, asentyans Bland–Altman — ha'n musurow oberyel a wra yet dhe sawder data bys-bewnans: **konformita termyn-gwisk** ha **kowlwrans data**.

## Perag yth yw posek

Gwiriens yw an dhalleth rag pub tra a-wartha: devis na yll previ asentyans gans musuryans daspar na yll ankera [penn-dhiwedhow nombrek](../pennow-diwedh-ha-biomarkers-nombrek/), skoodhya [fakturya RPM](../ekonomek-monitoryans-klav-a-bell/), na don klaymow klinikel. Harthow aksyptys an maes rag rate kolon: **MAPE ≤5%** (strik) po **≤10%** (leben) erbynn ECG. Poyntow daspar dhort an lyvryow: Oura Gen 3 MAPE kolon powes 1.67% (CCC 0.97); Fitbit Charge 6 MAPE ~5.5% — devisys konsumer lemmyn a dreus harth an savon klinikel, yth yw an rasyn may ma an musuryans posek rag pub devis ha pub kondysyon.

## An Matematik

```
MAPE = (1/n) Σ |musurys_i − daspar_i| / daspar_i × 100

CCC (kesvyns konkordans) = asentyans a gontyr kesvyns ha kewar
      sistemek (Pearson r ponvyes dre symudhyans le/skala)

Bland–Altman: kewar kres ± 1.96 SD harthow asentyans — a dhiskwedh
      mars yw an fowt ow tevi a'n meur a'n talvos

Yetow oberyel:
Konformita termyn-gwisk = termyn gwiskys / termyn protokol × 100
Kowlwrans data          = poyntow data gwelys / gwaytys × 100
```

Res yw derivas gwiriens **rag pub kondysyon aktivita** (powes, kerdh, kosk) ha rag pub pobel — synsyans optek PPG a dhiskrys gans artefakt kerdh, kolm teg isel, ha kroen ynkres tewl, fordh fyll dhiskwedhys yn perthynus dhe ekwita.

## Ensampel gwrys

Program ward wertual a dhewis gwiskadow monitoryans. Ymgeryn A: MAPE powes 2.1%, MAPE ober 11.4%. Ymgeryn B: powes 3.8%, ober 6.9%.

```
Devnydh: dyskudha klav ow dhiswelles tre — kewarnansow a dhalleth orth
rate kolon uhel pesys, fenowgh dres aktivita.
Penn-linenn A (2.1%) a wayn an lyver-kuhudh; B a wayn an devnydh:
orth an kondysyon perthynus dhe'n kewarnans (kerdh), fowt 11.4% A
orth rate 100 = ±11 bpm — ow kessedha oll an gwadn harth kewarnans,
ow kenertha eskelyansow fals (pub unn gelwyans nurs, ~£40) po fyllyansow.

Ekonomek kewarnans fals: 500 klav × 2 kewarnans fals ekstra/seythun × £40
= £2.08M/bledhen a gost fowt dhort dewis an niver gwiriens kabm.
```

## Kolm gans ynjynnyans medhelweyth

Ynjynnyoryon a devnydh data gwiriens ow tewis sensoryow ha *dyllas* orth drehevel feyturyow musuryans — an dhew rann a'th eus an keth dyssyplin: previewgh orth kondysyon an gweythresans, na kondysyon an demo (kehaval medhelweyth: benchmarkyow orth dha oberen produksyon, na'n re an gwerther). Termyn-gwisk ha kowlwrans yw sewyansow ynjynnyans produkt — kosoleth, bywnans bataria, dyskrifans usadow chargya, ha fyd kesstrivyans a dhetermyn mars yw yet fakturya RPM 16-yn-30-dydh kowlwrys ([ekonomek monitoryans klav a-bell](../ekonomek-monitoryans-klav-a-bell/)) ha mars yw studhow-dataset dhe analys. Perthewgh kellys avel sinal dyghtys: dyberthewgh "na wiskys," "gwiskys mes heb sinal," ha "kesstrivyans fyllys" y'n skema dhort an kensa dydh — kowlapys dhe null, y a dhefyl pub analys a-wartha.

## Fowtys Kemmyn

- **MAPE kuntellys ow kudha fyll a-ges kondysyon** — an sapp y'n ensampel gwrys.
- **Pobel gwiriens ≠ pobel gweythresans**: oos, kroen, kryjyans, tevder oll a symud fowt sensor optek; gwiryewgh demografiek an studhya.
- **Kesvyns derivys may res asentyans**: Pearson r uhel gans kewar sistemek a fyll a gallos erbynn harthow assolut — dornewgh CCC/Bland–Altman.
- **Kowlwrans ynkressys dre impyutyans**: bylyow lenwys derivys avel data gwelys.

## Fontynnow

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
