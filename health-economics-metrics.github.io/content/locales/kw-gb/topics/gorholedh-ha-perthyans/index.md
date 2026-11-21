# Gorholedh ha Perthyans

Gorholedh yw ass yw nes devnydh gwir dhe'n devnydh erviresys (kryjyans); perthyans yw pes termyn a bews an devnydh kyns hedhi (hys). Ferylyans a'n pharmasi a'n jeves musurow standard — **MPR** ha **PDC**, gans ≥80% an bar usys rag "gorholedhys" — hag an terapiow nombrek a dheg an dew vlam: gorholedh yw an multiplyer yntra effeythusnans ha talvos kowlwrys.

## Perag yth yw posek

Peyoryon a oberi dhe'n niverow ma: PDC ≥80% a re dhe Rannyow Sterenn Medicare Statys Unys, usi a symudh gwir an peyer — gorholedh yw isstrukter a bwys arghansek, na ny yw musur medhel. Rag terapiow nombrek an patrom a dhasprevi: data DiGA a dhiskwedh niver krev a erviryow gans gorholedh gwann; ha pris DTx diwar sewyans (a dheu yn Almayn dhort 2026) a bay diwar sewyansow gorholedhys. An gwellheans kensonyek a gerdhorieth yeghes nombrek: **kevrenn effeythus** — kevrenn *lowr* dhe gowlwul an sewyans yw menys — ha'y res, **an dosa lyha effeythus**, settys dre empirik rag pub ynkleth, na ny yw tybys "moy yw gwell".

## An Matematik

```
MPR = Σ dydhyow a dhelivrys supplyans / dydhyow y'n termyn × 100   (a yll
      ewa a-ugh 100%; re-vras drefen ail-lenwiow a-varr)
PDC = dydhyow kovrys gans supplyans / dydhyow y'n termyn × 100     (kesys dhe 100%;
      an estymyer kewar, dewisys gans CMS)
Gorholedh nombrek = hwarvosow devnydh gwir / hwarvosow devnydh erviresys × 100
Perthyans         = dydhyow dhort dalleth bys y hedhyans
                    (report % a bertho orth N mis; metodys perthyans)

Yetyans talvos: sewyans kowlwrys ≈ effeythusnans × g(gorholedh)
  le yw g an gwrians dosa-gorthyp; yn dann an dosa lyha effeythus,
  g ≈ 0 — kost gwrys, prow kellys
```

## Ensampel gwrys

Produkt CBT nombrek rag kodhvos-hunyow, erviresys avel 6 modul dres 6 seythun; effeythusnans previans 0.025 QALY ynter an re a gowlwrug ≥4 modul (an dosa lyha effeythus kavys dre empirik):

```
1,000 ervir orth £250 → £250,000 spena peyer
Kowlwrians modul: ≥4 modul 38%; 1–3 modul 34%; nul modul 28%

QALYs kowlwrys = 1,000 × 0.38 × 0.025 = 9.5
Kost an QALY   = 250,000 / 9.5 ≈ £26,300 — merkel orth thresholds NICE

Ynjynnyans gorholedh (dassynyans an kovadhow, yskynnans an sesyon) a
dhrehedh kowlwrians ≥4-modul dhe 50%: 12.5 QALY → £20,000/QALY. An
produkt a dremenas an threshold arghanses heb tuchya an dewisyans a'n therapi.
```

Gans pris diwar perfformyans (an stil 2026), an keth chanj a dreyl *kenhwelyow* yn kettep — ynjynnyans gorholedh a dheu bos an gwaylrew kenwerthek.

## Kolm gans ynjynnyans medhelweyth

Dew lavar a dheu warbarth war unn kevrinans: analytika medhelweyth ([gweythresans](../gweythresans-ha-degemeryans/), [glusyans](../metryks-kesdhevnydhyans/), [synsyans](../synsyans-ha-kellys-devnydhyoryon/)) ha pharmasi klinikel (MPR, PDC, perthyans) a vusur aga dew an dhisplegyans dhe ynkleth — mapya hwarvosow dha broduk dhe'n lavar klinikel ha'n peyoryon a yll redya dha dhashbordys. Ynjynnyans a'n jeves an lyvyer gorholedh: lojik an kovadhow (pingys gwag pub dydh a dhysk dismissya; termyn a vo adaptys na wra), kost sesyon (modul a 20 mynysenn a gowlwra le ages 3×7-mynysenn), ha telemetri fros a gavas *ple* y koselli an devnydhyoryon y'n protokol. Instrumentya dosa-gorthyp a'n kensa dydh — an dyskudhans dosa lyha effeythus a dhyghtyow an patrom ekonomek oll a res data devnydh kolmys dhe sewyans na yll gwytha marnas an produkt.

## Fowtys Kemmyn

- **Kemmysk MPR/PDC**: MPR a dhasgrysa; lavar pyth estymyer ha devnydh PDC rag oll tra dhe'n peyer.
- **Gorholedh dhe'n musur, na ny yw dhe'n therapi**: igeryow rekenys avel dosys (gwelewgh [metryks kevrenn](../metryks-kesdhevnydhyans/)).
- **Gosow "moy yw gwell"** pan vo dosa ynkleth finwydhek — gradhek yw sewyans, devnydh heb worfenn na ny yw.
- **Dilansow effeythusnans diwar an remnant**: sewyansow ynter an re gorholedhys a'n jeves efektys dewisyans (an re gorholedhys a dhiffer); an dybyans kawsek onest a res randomizya po addasya yn ware.

## Fontynnow

- MPR erbynn PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., kevrenn effeythus. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- Kavsyow gorholedh DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
