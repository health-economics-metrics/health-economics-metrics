# Ekonomek Screening

Ekonomek screening a rewl talvos a hwilas pobel heb arwodhow. An fakt matematik kresel: **orth ankevridh klevesow isel, hogen previow splann a re an moyha a bositivow fals** — ha kost a-dhelergh a helyans ervynsow na a yll gorlenwi prow an gwir kavyansow.

## Perag yth yw posek

Dhort 1968, kriteryow Wilson–Jungner a'n WHO a settyas an harth rag screening pobel: res yw bos an kondysyon posek, an previ asnydh ha kewar, tretyans effeythus a res bos, ha'n ekonomek a res bos kehevelys. An Kessedhek Screening Kenedhlek UK a dhevnydh analys kost-effeythusnans furvel kyns gwarya pub program kenedhlek — ha skonya an moyha a ragdhesyghyow. Pub pitch "AI a skrinnya pubonan rag pub tra" a dhre erbynn an jynn ma, ha fenowgh a gollas dhe'n matematik a-woeles.

## An Matematik

Talvos ragwelyek positiv (PPV) — an probabilita bos gwir an sewyans positiv — a goedh orth ankevridh isel:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]

Ensampel: sensitivita 90%, spesifikita 95%, ankevridh 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Unnek yn dewdhek a bositivow yw fals. Ekonomek program kowal:

```
Kost rag kas gwir kavys = (kost screening + kost hwilas × oll positivow) / positivow gwir
Ynwedh: a dal kavos kas an kost ma? (talvos ynterventyans a-varr rag kas,
        le kollow dres-diagnosys — kasow kavys na vensa bythkweth bos posek)
```

## Ensampel gwrys

Screening retinal AI rag kleves skant, 100,000 den, ankevridh 0.5%, sens 90%, spec 95%, skan £15, hwilas konfirmya £400:

```
Positivow gwir: 100,000 × 0.005 × 0.90 = 450
Positivow fals: 100,000 × 0.995 × 0.05 = 4,975
Kost = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Kost rag kas gwir ≈ £8,156
```

Mars a sav tretyans a-varr £20,000 + 1 QALY rag kas, an program a dremen yn esy. Drehevewgh spesifikita dhe 99% (le a gewarnansow fals): kost hwilas a goedh dhe (450 + 995) × 400 = £0.58M, hollow £2.08M, kost rag kas ≈ **£4,622** — spesifikita, na ny yw sensitivita, yw an le may gwayn ekonomek screening orth ankevridh isel.

## Kolm gans ynjynnyans medhelweyth

Dasvewyans statek, scannya sawder ha dyskudhans anomali yw programmow screening war godhow ha telemetry, gans ankevridh gwir-defekt fenowgh pell a-woeles 1% rag pub chons-kewarnans. An keth matematik a styr skwithder kewarnans: scannyer 95%-spesifik war kodh ankevridh isel a dhefrynn skuadronow yn positivow fals, ha pub unn a dhefnyth attensyon ha dismeythya fydh bys may fo kewarnansow gwir ankovys (an ger klinikel yw *kolm screening*; an ger ynjynnyans yw *numbhes pager*). An remedyow a dreus dhort yeghes: drehevewgh spesifikita kyns sensitivita, skrinnewgh isbobel ankevridh uhelha (kyrgh herwydh risk ↔ scannya kodh chanjys yn unnik), ha kontewgh kost triage yn ekonomek an arf — gwelewgh [NNT](../niver-res-dhe-dhrettya/) ha [gwerthjyans AI klinikel](../gwerthjyans-ai-klinikel/). Rag mesurya program screening kowal na ny yw unn previ, gwelewgh [niver res dhe skrinnya](../niver-res-dhe-gerghes/) — pygemmys den a res tremena oll fordh screen-ha-tretya rag lettya unn sewyans.

## Fowtys Kemmyn

- **Derivas sensitivita/spesifikita heb ankevridh** — gwiryans heb PPV yw gwerthyans.
- **Heb perthi dres-diagnosys**: kavos "kleves" lent na wrussa bythkweth drog a dhalleth kostow ha droglamow tretyans gwir.
- **Sav lead-time**: dyskudhans a-varr heb chanj sewyansow a dhrehevell dhe-ves bewnans — gwelewgh [ynterventyans a-varr](../ynkleth-a-varr/).

## Fontynnow

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
