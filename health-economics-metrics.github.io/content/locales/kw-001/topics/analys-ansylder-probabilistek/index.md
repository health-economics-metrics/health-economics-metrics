# Analys Ansylder Probabilistek (PSA)

PSA a re dasparth probabilita dhe bub parametr ansyker, a'n kemmer oll warbarth mylyow a weythow (Monte Carlo), ha derivas an *probabilita* may fo dewis an dewis gwella — yn le unn estymasyon poynt.

## Perag yth yw posek

Kas kres NICE a *res* PSA. Analys determinystek a worthyp "pyth mar yw unn kavadow kamm?"; PSA a worthyp "herwydh pub tra na wodhon warbarth, pygen kewar yw may wren an dewisyans ewn?" Y diwedh arwodhek, an **kromm degemeryadewder kost-effeythusnans (CEAC)**, a dres probabilita bos dewis kost-effeythus erbynn threshold parys-dhe-bayi — ow treylya "an ICER yw £24,000/QALY" dhe "yma 78% a hap bos hemma an dewis ewn orth £30,000/QALY."

## An Matematik

```
Rag pub unn a N tenn (N ≈ 10,000):
  kemmer pub parametr θ dhort y dhasparth
    (kostow ~ Gamma, probabilitiow ~ Beta, talvosow ~ Beta, efektys ~ Normal/logNormal)
  kowntya NMB_j(θ) = λ × Efekt_j(θ) − Kost_j(θ) rag pub dewis j

CEAC_j(λ) = radh a dennow may'n jeves dewis j an NMB uhella orth threshold λ
```

Gwelewgh [prow mona nett](../prow-mona-nett/) rag NMB ha [thresholdys parys-dhe-bayi](../harthow-bodh-dhe-dhalleth/) rag λ.

## Ensampel gwrys

Kas besneth treuswerth platform. Tri kavadow ansyker:

```
Kost treuswerth   ~ Gamma,  kres £800k, sd £200k
Prow bledhenyek   ~ Normal, kres £350k, sd £150k
Hys prow          ~ Uniform, 3–6 bledhen
```

Rag pub unn a 10,000 tenn kowntewgh prow nett = hys × bledhenyek − kost (diskont dyberthys rag splannder). Sewyansow displegyek:

```
Prow nett kres:         £775k
Probabilita nett > 0:   0.86
Persentil 5–95:        −£180k … +£1.9M
```

An estymasyon poynt a lever "yn splann yw ya." PSA a lever "86% ya, gans lost gwir may koll £180k+" — hag yw an pyth a res perghenek portfolio yn gwir, ha hi a bris an kas rag ledya spike dyskudhans kensa (gwelewgh [EVPI](../talvos-ragwelys-a-wodhvos-perfydh/)).

## Kolm gans ynjynnyans medhelweyth

Ynjynnoryon a fydh seulabrys Monte Carlo rag ragwel delivrans (sampel tremena a wynn estymasyonow poynt). Ystynnewgh an keth mekanika dhe vona: dasparthow war degemeryans, termyn sawys, ha pagyow, nessa derivewgh "probabilita bos an investyans platform ma pozitiv-nett" yn le ROI ewnder-fals. Kromm stil CEAC — probabilita bos an dewis gwella avel gwrians a fatell a dalvos an kowethyans eur-ynjynnyer — yw artifakt gwir-wellha rag kussel arghansa ages kenyver niver unn.

## Fowtys Kemmyn

- **Dasparthow fatt**: PSA gans gwyrwyr-sd dyssynyes yw analys determinystek yn lows labyras. Selyewgh an skrowyow war data po dynnans skiansek strukturek.
- **Ankevi kesradhyans** ynter parametrow (degemeryans uhel peub-prys a gesradh gans termyn-sawys uhel); sampelya dispar a ormens risk lost.
- **Derivas an kres a'n simulasyon yn unnik** — an poynt kowl yw an dasparth ha probabilita dewisyans.

## Fontynnow

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
