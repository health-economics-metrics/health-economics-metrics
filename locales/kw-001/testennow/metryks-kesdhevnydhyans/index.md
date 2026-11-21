# Metryks Kesdhevnydhyans

Metryks kesdhevnydhyans a vusur pygen moy a dhevnydh devnydhyoryon app yeghes: stickiness DAU/MAU, frekwens ha hys sesyon, devnydh nodhow. Yn yeghes nombrek, kesdhevnydhyans nyns yw gwag — yw **dosa**: an ekspoziyans may res dhe bub efekt klinikel tevi dresto.

## Perag yth yw posek

Medhegynn a wortho yn botel a sawya nagonan; app a wortho heb instalyans po heb igeri yw an keth modh fyll. Pub klaym ekonomek yeghes rag produkt yeghes konsumer a multiplya dre gesdhevnydhyans — effeythusnans diskwedhys y'n previansow a veu musurys orth nivel devnydh nebes, ha talvos bys-gwir a skaylya gans ogas yw devnydh delivrans dhe'n nivel na. Skoodhyow produkt standard: DAU/MAU a-dro dhe **20% yw tybys yagh** rag appys symudek yn kemmyn, >25% spesyal; appys yeghes a res menowgh isella.

## An Matematik

```
Stickiness (DAU/MAU) = devnydhyoryon gweythresys dydhyek / devnydhyoryon gweythresys miyek × 100
Musurow sesyon       = sesyonow/devnydhyer/termyn; hys kres = termyn oll / sesyonow
Kesdhevnydhyans nodh = devnydhyoryon ow gul gwrians bownder / devnydhyoryon gweythresys

Framya dosa-gorthyp (an gwellheans ekonomek yeghes):
  efekt kowlwrys ≈ efekt previans × f(devnydh gwir / devnydh previans)
  le yw f diwar analys dosa-gorthyp — gwelewgh an tybyans "kesdhevnydhyans
  effeythus" yn adherence-and-persistence.md: devnydh lowr dhe sewya an
  sewyans menys, a yll bos modest ha finwydhek
```

## Ensampel gwrys

Studhyans pivotel app gwerinas a dhiskwedhas leha systolek 6 mmHg ynter devnydhyoryon ow lyvra ≥4 redyans/seythun. Yn displegyans dres 50,000 devnydhyer kovskrifys:

```
MAU 20,000 (40%); anodhans, ow lyvra ≥4×/seythun: 7,000
Devnydhyoryon dosa-effeythus = 7,000 / 50,000 = 14% a'n selys kovskrifys

Efekt nivel pobel ≈ efekt previans delivrys dhe 14%, na ny yw 100%:
kenyver patrom ekonomek ow kwoti "50,000 devnydhyer × 6 mmHg" a wor-vesur ~7×.
Patrom onest: 7,000 × efekt kowl + kreditt rann (diwar data dosa-gorthyp,
mar eus) rag an 13,000 devnydhyer a-woeles threshold.
```

An multiplyans ma — dres an kanel kesdhevnydhyans dhe'n dosa effeythus — yw an unn tyller moyha kemmyn may whrons ekonomek yeghes nombrek gorbrisya.

## Kolm gans ynjynnyans medhelweyth

Ynjynnoryon a'n jeves an kanel kesdhevnydhyans, hag ytho a'n jeves variabyl *klinikel*: kesstryf an dallethans, strateji gwarnyansow, termyn ladya, ha dyfynnus orth ke-linen a dhisplas an dosa delivrys. Dew dhyssynyans: instrumentewgh an **gwrians klinikel bownder** (redyansow lyvrys, dyskansow kowlwrys), na ny yw igeryow — DAU drehys war sesyonow bounce-gwarnyans yw gowek dosa; ha trettewgh gosow kesdhevnydhyans avel gosow *lowrder*, na ny yw ewnhe — app a dhrehedh y sewyans yn 5 mynysenn/seythun ha ow mos a'n fordh yw klinikel ewn ha metrikel "gwann" (gwelewgh kesdhevnydhyans effeythus yn [gorholedh ha perthyans](../gorholedh-ha-perthyans/)). Talvosewgh an ober kesdhevnydhyans y honan dre an patrom efekt-pobel a-ugh: gwayn 2-poynt yn rann dosa-effeythus yw linenn QALY musurys.

## Fowtys Kemmyn

- **Kesdhevnydhyans avel sewyans**: devnydh yw feth; an sewyans yw an [PROM](../sewyansow-derivys-gans-klav/) po penn diwedh klinikel.
- **Kresow dres devnydh dew-hyns**: pobel appys yeghes a rann yn devnydhyoryon gwodhek ha ysprydyon; kresow a dhiskwedh nagonan — kohortewgh an dra.
- **Ewnhe dosa dre dhark-patrom**: streaks ha gwarnyansow-kollyth a dhrehedh metryks ha yll gul drog dhe bobel pybyl a wra appys yeghes servya; produktow klinikel a'n jeves ethegieth klinikel.
- **Provenans skoodhyer-gwerther**: an moyha skoodhyow kesdhevnydhyans dyllys a dheu dhort gwerthoryon analytika, na ny yw dhort dasvyuwa kehys; kalibrewgh erbynn dha brevians dha honan.

## Fontynnow

- Skoodhyow kesdhevnydhyans app. <https://getstream.io/blog/app-retention-guide/>
- Gidyow KPI app yeghes. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. war gesdhevnydhyans effeythus. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
