# Gwerthjyans AI Klinikel

Statystykow kres rag gwerthjya AI klinikel po model diagnostek: synsys, spesifegedh, AUROC, talvosow ragwelsys, ha niver res dhe gerghes. An dyskas ekonomek kres: **AUROC splann ny wra delivrans kost-effeythus** — talvos a dhepyn war an poynt oberya, an ynkleth ha pyth a hwarva a-dhelergh pub pozityv.

## Perag yth yw posek

Rewlyoryon (FDA, MHRA) a awthorya AI klinikel orth **poynt oberya hedhys** — keth synsys/spesifegedh spesifek (rag ensampel, an kensa system awtonomek retinopati-diabetek FDA-kovadhys: synsys 87.2%, spesifegedh 90.7% yn y previans pivotel). Ekonomegyon yeghes a wovynn nessa an govyn na yll musurow ewnder gorthyp: orth ynkleth poblans dha dhelivrans, pyth a gost pub dyskudhans, hag a dal gwrians warnodho? Gwerthjyans ekonomek a AI keres retinopati (npj Digital Medicine 2024) a dhiskwedhas na wrug ewnder uhelha yn unnik sawya kost-effeythusnans pan veu kostow dilyn kowntys.

## An Matematik

```
Synsys     = TP / (TP + FN)        — a'n gwir-pozitiv, an radh kachys
Spesifegedh = TN / (TN + FP)       — a'n gwir-negativ, an radh dhiwysyes
AUROC      = P(model a ra gwir-pozitiv a-ugh gwir-negativ yn unn hap)
             0.5 hap … 1.0 kowlwrys; heb threshold — ha rag henna
             dyfyk rag dewisyans delivrans

PPV = TP / (TP + FP)   ← kolmys dhe ynkleth (Bayes); a goll pan vo skant
NPV = TN / (TN + FN)

NNS  ≈ 1 / (ynkleth × synsys)              — keresys rag gwir-kas kavys
Kost rag gwir-kas = kost towl / TP          — an linenn dhiwettha ekonomek
```

## Ensampel gwrys

An keth model, dew le — synsys 90%, spesifegedh 93%:

```
Klinik arbennik (ynkleth 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 a 4 alert gwir

Kuranseth kensa (ynkleth 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 a 9 alert fals; ober-orth orth £350 kenyver:
  kost rag gwir-kas = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 rag kas kavys
```

An keth model, ekonomek dyffrans pur — hag yth yw rag henna bos gwerthjyans le-spesifek tema rewlyek ha perak y lever "agan model a'n jeves 0.95 AUROC" dallethans kas ekonomek, na ny yw y diwedh. Gwelewgh [ekonomek keres](../ekonomek-screening/) rag matematik kowl an towl.

## Kolm gans ynjynnyans medhelweyth

Rag ynjynnoryon ow gwil po pren AI klinikel: **dhelivrewgh matrix kemmysk orth an ynkleth delivrans**, na ny yw an kromm ROC yn unnik; **gwrewgh an threshold dewis ekonomek** — an dyskyr synsys/spesifegedh a dal leha kost ragwelys (kasow kellys × kost kelli erbynn alarmow fals × kost ober-orth), na ny yw ahenya statystyk skoodhyer; ha aswonnewgh an keth matematik yn dha ark: systemow alert, dyskudhoryon anormal ha skanyoryon sawder yw previansow diagnostek dres ronnow hwarvos ynkleth isel, gans skwithder alert avel [NNH](../niver-res-dhe-dhrettya/). Nowedhyansow model a dhisplas an poynt oberya a eger an ekonomek arta (ha'n kovadhow rewlyek — gwelewgh [gwerthjyans rewlyek AI](../gwerthjyans-rewlyek-ai/)).

## Fowtys Kemmyn

- **Marghas AUROC**: keskomparya modelys orth AUROC pan wrons ow ledya orth unn threshold — keskomparewgh orth an poynt oberya.
- **PPV ynkleth-previans menegys rag delivrans bys gwir** — an klassek; dasrekenewgh pup-prys orth ynkleth leel.
- **Bias spektrum**: modelys gwiryes orth kasow splann erbynn kontrolyow yagh a dhefors yn an kres ambigwys a dhefs an praktis.
- **Heb kostya an fordh a-dhelergh**: pub pozityv a dhallath ober-orth; model yw ynkleth war ekonomek *an fordh a-dro*.

## Fontynnow

- Skoodh musurow ewnder diagnostek. <https://www.medcalc.org/en/manual/roc-curves.php>
- Gwerthjyans ekonomek keres retinopati AI, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (selyow NNT). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
