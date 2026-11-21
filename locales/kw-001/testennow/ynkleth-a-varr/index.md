# Ynkleth A-Varr

Mar a re kanasow sawys dhe oberyer dasvyuwa rolyow diagnostek skonnyk, klevyon a symudh dhort an rol-gortos dhe ynkleth gweythresys moy skon — hag ynkleth a-varr yw peub-prys es ha gwell ages ynkleth diwettha, drefen bos kondysyonow heb ynkleth ow pesya.

## Perag yth yw posek

Pesyans klevyd yw an les kemmyskys a'n yeghes. Klav ow kortos gans kondysyon heb ynkleth nyns yw yn stat kadarn: kanserow a skeulya, fyllans kolon a dhegompos, iselder tanow a dheu kref. Ynkleth a-varr ytho a dhelivr dyvydennow dew-plyg — **sewyansow gwell** (moy QALY, ynkleth dhort dalleth yagh) ha menowgh **kostow ynkleth le** (ynkleth ke-sevel yw le kref ages sawya diwettha). An mekanika ma a ystyn "fordhow skonnyk" dhort jentylys oberyes dhe res klinikel hag ekonomek — hag yw an kaus downder rag perag y hwra [kost dalgh](../kost-dalgh/) dhe vedhelweyth klinikel.

## An Matematik

```
Talvos ynkleth a-varr (rag klav) =
    [Kost_diwettha − Kost_a-varr]                  (gwyskyans kost ynkleth)
  + [QALYs_a-varr − QALYs_diwettha] × λ            (gwayn yeghes × threshold)
  × P(pesyans a-bervedh an dalgh)                   (pysya probability)
```

An pysya probability yw ankenyth: nyns yw pub klav ow kortos a bes. Patromewgh an probability treuswerth rag unnys termyn (dhort data istor naturel), na ny yw an kas gwettha. Nessa diskontewgh: kostow hwithys bledhydhyow pell a dal le lemmyn ([diskontya](../diskontya-ha-preferans-termyn/)) — ha merkewgh bos an moyha ynkleth a-varr kost-*effeythus* na ny yw kost-*sawya* (gwelewgh [ekonomek lettyans](../ekonomek-lettyans/)).

## Ensampel gwrys

Backlog keres retinopati diabetek: 4,000 klav, 6 mis wosa. Gradya AI-gweresys a dhrebla tremena ha klirya an rol yn 8 seythun. Istor naturel: ~2% a'n klevyon ow kortos/bledhen a bes dhe stagyow a berygel golok.

```
Hwarvosow pesyans hwithys dre ~4 mis a skonnyans:
  4,000 × 2% × (4/12) ≈ 27 klav

Rag pub pesyans hwithys:
  gwyskyans ynkleth (terapi intravitreal erbynn laser) ≈ £4,000
  gwayn QALY (gwelesigeth gwithys) ≈ 0.8 QALY × £20,000 = £16,000

Talvos ≈ 27 × (4,000 + 16,000) ≈ £540,000 — dhort unn backlog klirys unwaith,
kyns kowntya an gwayn tremena berthek.
```

## Kolm gans ynjynnyans medhelweyth

Dew dreuswerth. Kensa, an dhirek: medhelweyth a skonnya fordhow diagnostek hag ynkleth (triage, gradya AI, routya sewyansow) a vona dre an patrom ma kowal — hag an patrom a lever pyth fordh dhe skonnya: hedna gans an kromm pesyans moyha serth, na ny yw an rol hirra. Nessa, an myrwhes ynjynnyans: **fowtys a bes ynwedh**. Fowt kachys yn dyssynyans a gost kewsel; yn produksyon a gost hwarvos; kromm kost "shift-left" (10–100× dre stag) yw patrom pesyans, ha'n versyon onest a dheg an keth gwarnyans — dyskudhans a-varr yw peub-prys kost-effeythus, na ny yw mona rydh, drefen bos kostow gwir a dhasvyuwa ha previansow ha'n moyha mater kachys na vya pesys bythkweth.

## Fowtys Kemmyn

- **Pesyans kas-gwettha tybys rag pubonan** — an pysya probability yw an diffrans ynter analys ha dadhelva.
- **Bias termyn-kelgh**: kavos klevyd skonnyk heb chanj sewyans a hevel prow mes nyns yw; ynkleth *effeythus* a-varr yw an klaym, na ny yw dyskudhans a-varr yn unnik (gwelewgh [ekonomek keres](../ekonomek-screening/)).
- **Dewblya kowntyans** gans klaymow rol-gortos ha RTT drehys war an keth skonnyans — unn wellhe fordh, unn set a browyow, dyllys unwaith.

## Fontynnow

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, towl keres golok diabetek. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
