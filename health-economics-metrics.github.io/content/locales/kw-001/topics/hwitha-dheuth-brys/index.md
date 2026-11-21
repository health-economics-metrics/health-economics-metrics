# Hwitha Dheuth Brys

Hwitha dheuth brys a gownt gwelyansow ED (A&E) ha kemmyskow brys lettys dre ynkleth a-ugh — apps triage, wolok pell, wardow nombrek, daskasa dhe ofis brys. Hi a dreyl "ni a'n kachas a-varr" dhe glaym kostys.

## Perag yth yw posek

Kuransek brys yw an tyller kemmyn an moyha kostus y'n system (kostow unys dheuth ED yn bandys £250–£400 herwydh Kuntell Kost Kenedhlek / figuryow PSSRU; kemmyskyans brys yw mylyow), ha ED fol a dheg dhe dalghow ambulans ha govalerd dewisyek gansellys. Pub tra a sawya demmand a-ugh yn sawder — kussulyans omwitha, kuransek kensa an keth dydh, gorthyp kommunyta — a bren kanasow an system orth y poynt moyha strishys. Hemma yw an linenn prow standard rag gwiryoryon sentomow, servisow triage stil 111, ha [wolok klav pell](../ekonomek-monitoryans-klav-a-bell/).

## An Matematik

```
Dheuth hwithys = pobel × (ratyo dalleth-linenn − ratyo ynkleth)
Sawyans kowl   = dheuth hwithys × kost unys rag dheuth
                 (+ kemmyskyow hwithys × kost kemmyskyans, kowntys dispar)

Sawyans nett   = sawyans kowl − kost ynkleth − kost devnydh fordh nowydh
                 (demmand dasgonnys nyns yw rydh: galwans 111, slot GP,
                  dydh gweli nombrek oll a'n jeves kostow unys)
```

An klaym kawsek a res keskomparyer: ratyow dheuth a dhrifta ha dhiffra gans seson, ytho kyns/wosa yn unnik a brov tra vyth.

## Ensampel gwrys

Servis wolok pell COPD rag 3,000 klav a risk uhel. Gwerthjyans kontrol-metyes a dhiskwedh dheuth ED diwar gwellheans a goll dhort 0.9 dhe 0.7 rag klav-bledhen, ha kemmyskyow brys dhort 0.5 dhe 0.42.

```
Dheuth hwithys   = 3,000 × 0.2  = 600 × £300   = £180,000
Kemmyskyow hwithys = 3,000 × 0.08 = 240 × £3,800 = £912,000
Kowl                                              £1,092,000/bledhen

Kostow: servis wolok £600,000; gorthypyow nors-kommunyta ekstra £150,000
Nett ≈ +£342,000/bledhen — ha gwaynyow QALY a wellheansow trettys a-varr.
```

Merkewgh bos an linenn kemmyskyow a dhominya: hwitha dheuth yn unnik peub-prys ny bay servis wolok; hwitha *kemmyskyans* yw ple y'n mona.

## Kolm gans ynjynnyans medhelweyth

Hemma yw **ekonomek hwitha hwarvosow**. Talvos observabilita, displegyansow kanary ha systemow alert a-varr yw "dheuth brys" hwithys — pagers, stevellow-bresel, sev-1s — pub unn gans kost kowlvaghys (eurow-ynjynnyer × reyt + efekt kuvyonor). An keth rewlys modelya a dhevnydh: nettewgh kost fordh nowydh a-ugh (triage alert nyns yw rydh), gwithewgh a dhiskwedh (alertys a wra ober heb lett hwarvosow yw anken yeghes, na ny yw yeghes), ha previewgh an kontrafaktel gans kontrol (ratyow hwarvos tymow a dhrifta ha dasvyrya dhe'n kres, kepar ha dheuth ED).

## Fowtys Kemmyn

- **Dasvyrya dhe'n kres**: kohortow risk uhel dewisys war bledhen drog a wellha heb ynkleth; kontrolys metyes po dyssynyans stepped-wedge yw ankenyth.
- **Demmand drehys gans provians**: triage nombrek es a yll *kressa* kolmow kowl (leha threshold dhe hwilas gweres) ha ledhi rann ED — kowntewgh kost system kowl.
- **Talvosya dheuth orth kost kres** pan na goll kostow fast ED — gwelewgh [kost marginal erbynn kres](../kost-marginal-erbynn-kres/).

## Fontynnow

- NHS England, Kuntell Kost Kenedhlek. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
