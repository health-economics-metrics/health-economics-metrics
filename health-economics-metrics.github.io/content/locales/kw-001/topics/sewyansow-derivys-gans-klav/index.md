# Sewyansow Derivys gans Klav (PROMs, PREMs, MCID)

PROMs yw instrumentys standard may tervyn klevyon aga stat yeghes aga honan (sentomow, gwrians, kwalita bewnans); PREMs a gews an *skians* kuransek. An **MCID** — diffrans klinikel a vri byghanna — yw an chanj skor byghanna a welons klevyon avel prowys: an bar a res kenyver gwellheans klamys tremena.

## Perag yth yw posek

PROMs yw an arghans effeythusnans kres rag yeghes nombrek: appys a symudh skant marwolieth, mes a yll symudh skoryow sentomow gwiryes yn kredadow. An instrumentys a vri yw nebes ha standard — **PHQ-9** (iselder, 0–27; bandys sewenyes orth 5/10/15/20), **GAD-7** (pybyl, 0–21; bandys orth 5/10/15), **EQ-5D** (talvos rag [QALYs](../bledhen-bewnans-addasys-anabalder-2/)) — ha rewlers, korfow HTA ha peyoryon a'n degemer drefen bos keskomparadow dres produktow ha previansow. An MCID yw an yet onester: MCID PHQ-9 ≈ 5 poynt, GAD-7 ≈ 4, menegva EQ-5D yn kemmyn ~0.03–0.08 — chanj 1.5-poynt PHQ-9 statystek-sinsek war sampel bras yw *gwir mes heb styr klinikel*, hag arvedhor skoodhyans a'n lavar.

## An Matematik

```
Skorya PROM: sommow arbennik instrument (rag ensampel PHQ-9 = Σ 9 elven × 0–3)

Estymasyon MCID:
  diwar ankra:       chanj skor ynter klevyon a lever "nebes gwell"
  diwar dasparth:    ≈ 0.5 × SD skoryow dalleth-linenn (heuristik krev)

Framya ratyo gorthyp (rag previansow ha dossierys):
  gorthyper = klav a wellha ≥ MCID (po ≥50% herwydh konvensyon PHQ-9)
  NNT = 1 / (ratyo gorthyper_ynkleth − ratyo gorthyper_kontrol)
  — gwelewgh number-needed-to-treat.md
```

## Ensampel gwrys

App skoodhyans iselder, RCT erbynn rol-gortos, 12 seythun:

```
Chanj PHQ-9: app −6.2 poynt, kontrol −2.1 → diffrans addasys −4.1
Gwiryans MCID: 4.1 < 5 → diffrans kres a-woeles MCID; derivewgh gorthypyoryon yn le:
  gorthypyoryon (kodh ≥5-poynt): app 48%, kontrol 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — peswar devnydhyer trettys rag pub gorthyp klinikel ekstra

Pons ekonomek: gwayn EQ-5D gorthypyoryon 0.06 gwithys 6 mis
  = 0.03 QALY; rag 1,000 devnydhyer: 260 gorthyper ekstra × 0.03 = 7.8 QALY
  ≈ £156,000–£234,000 a dalvos yeghes orth thresholdys NICE
```

An framya gorthyper/NNT a bes yn dasvyuwa le may vedhya dismyssys an diffrans kres a-woeles MCID.

## Kolm gans ynjynnyans medhelweyth

PROMs yw kudyn kuntell data may hyll medhelweyth bos yn arbennik da orth y worthyp: instrumentys y'n app a dhelivr ratyow kowlwrans ha tewder hirdermyn na gafas paper bythkweth, ow treylya telemetri produkt rutin dhe skoodhyans nivel-HTA ([EQ-5D](../eq-5d/) yw pymp skrin). Rewlys ynjynnyans: devnydhewgh an instrument gwiryes *lytheral* (dasskrifa a dhistrowya y wiryans — lisens a dhevnydh); rolewgh musur herwydh protokol, na ny yw es kesdhevnydhyans (musura devnydhyoryon gweythresys yn unnik yw bias gwythyas — gwelewgh [synsyans](../synsyans-ha-kellys-devnydhyoryon/)); ha kloesewgh versyon data instrument kepar ha kenyver schema — chanj ger yn hanter-studhyans yw lastyans data. PREMs a vapya dhe instrumentys stil CSAT/NPS, ha'n keth dyskas a dal: standard a wynn gwerth-gwrys, le may yw an arvedhor peyer. Rag instrument produktivita-ober arbennik, gwelewgh [WPAI](../lettyans-produktivita-ober-ha-aktivita/).

## Fowtys Kemmyn

- **Sinsek statystek a-woeles MCID** diskwedhys avel prow klinikel — an ormensans an moyha kemmyn y'n maes.
- **Dasvyrya dhe'n kres**: devnydhyoryon a enrol orth kribow sentomow; kyns/wosa unn-bagh a orvesur meur — keskomparyoryon yw heb dadhelva.
- **Marghasa instrument**: ledya PHQ-9, GAD-7, ha WHO-5, ha derivas an unn a symudhas — rag-skrifewgh an unn kres.
- **Nudj sondyans kensentyans nombrek**: nudjya devnydhyoryon dhe worthypow dewisek a lastya an instrument (ha'n arvedhoryon a woer an ratyow dalleth).

## Fontynnow

- Dasvyuwa estymasyon MCID (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- Dallethyans PROMs erbynn PREMs. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. lenn gwiryans PHQ-9. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
