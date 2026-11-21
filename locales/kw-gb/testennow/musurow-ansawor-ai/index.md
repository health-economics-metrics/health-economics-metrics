# Musurow Ansawor AI

Musurow a'n ewn a worrans gwrys gans AI: ewnder erbynn gwiryonedh dhelergh, **gwiryon/pridhyans** (a yw pub kressans skoodhys gans an kontekst provys?), ha **ratyo hallusynasyon** (pyth radh a worrow a'n jeves tra heb skoodh po fals?). Y'n tyller yeghes, ny yns na deghyow ansawor — yns ratyow drog.

## Perag yth yw posek

Skoodhyow a'n bys medhygel a vusuras ratyow hallusynasyon **a-ugh 60% rag LLMs heb pridhyans** war tasgow medhygel (nebes modelys opyn >80%), hag erbynn hedna pridhyans, daskavows ha modys resons a'n lehe yn kres (rag ensampel, modh tybyans GPT-5 a wrug ledhi HealthBench hallucynasyon 3.6% → 1.6% war unn skoodhyer). Dosa gaow po kovskrifys-nowydh y'n lenow klinikel yw **hwarvos kewar-fals gans fordh a ankenyth** — a wra perthi y'n tu drog a bub patrom ekonomek, pris-wrys kepar ha fals-pozityvys [ekonomek keres](../ekonomek-screening/): pub unn a dhegh kostow a-wartha (gwrians war kewar fowtys, lavur gwiriansek, ekspoziyans medhygel-lagh, fydhyans diwanadow).

## An Matematik

```
Ratyo hallusynasyon = worrow gans tra heb skoodh/fals / oll worrow
  ynterna:    a wra kontrari dhe'n kontekst provys
  ekstern:    gwryans a dhelergh dihwiriadow a-dryk an kontekst

Gwiryonedh (RAGAS) = kressansow skoodhys y'n gorthyp / oll kressansow y'n gorthyp
Kontekst pryzys/dasserghyans = ansawor daskavows a vwydh an jenerator

Pyssyans ekonomek — nyns yw pub hallusynasyon ken kost:
  kost drog ragwelys = Σ war ehedhow fowt (ratyo × P(disgwelys) ×
                       P(gwrys war) × kost rag fowt gwrys-war)
  An gweres a wiryans denel a settya P(disgwelys) — ha'y gost a dal
  bos y'n patrom ynwedh (mynysennow gwiryer × kyfrol).
```

## Ensampel gwrys

Gweres koth-klinikel AI a dhevnydh 200,000 kevrennow/bledhen; awdit a dhiskwedh 2% a worrow a'n jeves fowt koth materyal; kodhorion denel a dhalghenn 85% anodhans:

```
Fowtys a dhrehedh dhe uvyl = 200,000 × 0.02 × 0.15 = 600/bledhen
Kost rag pub fowt heb kachya (kamfaktura kres + ekspoziyans awdit) ≈ £250
Kost fowt ragwelys         = 600 × 250 = £150,000/bledhen
Kost gwiryans (2 min × 200k × £0.50/min)  = £200,000/bledhen

Kas gwellhe: pridhyans daskavows a dreyl an ratyo fowt dhe 0.8%
→ fowtys heb kachya 240, kost fowt £60,000 (−£90k/bl); termyn
  gwiryans a yll ynwedh ysella (mostrys yn le gwiryans kowl) — an
  investyans y'n ansawor a dal kyns pub kressans spedyans.
```

## Kolm gans ynjynnyans medhelweyth

Trewgh ansawor model kepar ha ekonomek kudhans previansow, gans dyskans a nivel yeghes: **setys gwerthjyans yw dha previans klinikel** — rag-skrifys, ledyansek a'th kesmesk kasow, nowydhys erbynn drif; **pridhyans a dhefsa orth skala** rag tasgow faktek (daskavows + promptyans a dhesir kyttrinyans yw peub-prys an ostalow hwegh a dhehesya hallusynasyon — kehaval [ekonomek unnyk a ynferans](../ekonomek-unys-ynferans/) rag y bris tokens); ha **dyllargh an poynt oberya**: kepar [synsys/spesifegedh](../gwerthjyans-ai-klinikel/), "97% gwiryon" a styr tra heb dasparth a dasganow ha'n threshold a dhedhyrans. An matematik an gwiryans a-ugh yw an keth aritmetik [NNT/NNH](../niver-res-dhe-dhrettya/) kepar ha pub yet keres.

## Fowtys Kemmyn

- **Treusplansya skoodhyer-dhe-produkt**: ratyow hallusynasyon yw gwyls diwar an tasg; dha gesmesk kasow yw an unn skoodhyer a dal.
- **Gwiryans denel heb kost**: "klinikyer a wiryow pub tra" a derri hanter an prow ha res bos y'n linenn kost — ha'n gwakstor a dhisku (kerensa awtomasyon), ytho P(disgwelys) a yskynn gans fydhyans.
- **Gwellhe ansawor kres hag a wrer drog dhe'n lost**: unn noten alergi fals a bys moy ages mil lavar dyskonvenyens; pysow fowtys herwydh sewyans, herwydh an fordhow drog ragwelys.

## Fontynnow

- Metodys ha musurow gwerthjyans hallusynasyon. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Statystykow hallusynasyon LLM medhygel. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- Musurow gwiryonedh RAG. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
