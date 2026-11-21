# DI reguliavimo vertinimas

Reguliavimo sistemos, kurios valdo dirbtinį intelektą sveikatos priežiūroje – JAV FDA „programinė įranga kaip medicinos priemonė“ (SaMD) režimas su **iš anksto nustatytais pakeitimų kontrolės planais (PCCP)** ir realaus pasaulio vertinimo programos, pavyzdžiui, NHS „AI in Health and Care Award“ – ir tai, kiek jos kainuoja bei ką ekonomiškai leidžia.

## Kodėl tai svarbu

Reguliavimas lemia ir **įrodymų kainą patenkant į rinką**, ir **kiekvieno vėlesnio modelio atnaujinimo kainą** – DI produktams antroji dažnai svarbesnė. Tradicinis FDA režimas (užrakinti modelį; po pakeitimų gauti naują patvirtinimą) nuolatinį tobulinimą darė ekonomiškai brutaliai brangų. **PCCP gairės (galutinai patvirtintos 2024 m. gruodžio mėn.)** pakeitė ekonomiką: gamintojas gali iš anksto gauti leidimą *konkrečiems* būsimiems modelio atnaujinimams – planuojamų pakeitimų aprašui, pakeitimų protokolui (kaip kiekvienas bus validuojamas) ir poveikio vertinimui – todėl patvirtinti patobulinimai pateikiami be naujos paraiškos. FDA yra leidusi daugiau nei 1 000 DI pagrįstų priemonių; FDA dabar taip pat tikrina realaus naudojimo veiksmingumo stebėseną (iš anksto nustatyti rodikliai: bazinis klaidingai teigiamų / klaidingai neigiamų rezultatų lygis, kalibravimo dreifas, srities poslinkio rodikliai).

## Matematika

PCCP yra [DORA vykdymo trukmės](../dora-rodikliai/) ekonomika, pritaikyta reguliuojamiems modeliams:

```
Cost per model update (traditional) = re-submission cost + review delay × CoD
Cost per model update (PCCP-scoped) = protocol-execution cost only

Update economics over a product life:
  N updates × (submission cost + months of review × cost-of-delay per month)
  vs one-time PCCP authoring cost + N × protocol executions
```

NHS DI apdovanojimo modeliui rodiklių rinkinys platesnis nei tikslumas: nepriklausomi realaus pasaulio vertinimai vertina klinikinį veiksmingumą, darbo eigos / diegimo poveikį ir ekonominį poveikį – tai institucionalizuotas visas [veiksmingumo → efektyvumo → ekonominio efektyvumo](../di-kūrėjų-produktyvumas/) vamzdynas.

## Išspręstas pavyzdys

Radiologijos DI tiekėjas planuoja kas ketvirtį tobulinti modelį 3 metus (12 atnaujinimų):

```
Traditional: 12 × (£80k submission + 4 months × £50k/month delayed-benefit CoD)
           = 12 × £280k = £3.36M
PCCP route:  £250k PCCP authoring + 12 × £30k protocol execution = £610k
Saving ≈ £2.75M — and patients receive each improvement ~4 months sooner:
12 × 4 months × the update's clinical benefit, a QALY line in its own right.
```

PCCP yra reguliatoriaus pripažinimas, kad **diegimo dažnis turi klinikinę vertę** – pagrindinė šio repozitorijaus priežastinė grandinė, patvirtinta reguliatoriaus.

## Ryšys su programinės įrangos inžinerija

Gerai suprojektuoti PCCP yra programinės įrangos uždavinys: iš anksto nustatyti vertinimo rinkiniai, versijuoti duomenų rinkiniai, automatizuoti validavimo vamzdynai, dreifo stebėsena – reguliuojamas nuolatinio diegimo giminaitis, kuriame „diegimo vartai“ yra validuotas protokolas, o ne kodo peržiūra. Komandos su brandžia vertinimo infrastruktūra ([DI kokybės rodikliai](../di-kokybės-rodikliai/)) PCCP gauna pigiai; komandos be jos išsiaiškina, kad reguliavimo apribojimas iš tikrųjų yra inžinerinės brandos apribojimas. Produktams, įeinantiems į NHS, lygiagretus rinkinys yra DTAC (klinikinis saugumas, duomenų apsauga, sąveikumas) ir [NICE ESF](../nice-įrodymų-standartų-sistema/) įrodymų pakopos – visa tai suplanuokite kaip patekimo į rinką [TCO](../bendroji-nuosavybės-kaina/).

## Spąstai

- **PCCP apimties plėtimo svajonės**: iš anksto leidžiami tik *nurodyti* pakeitimų tipai; architektūros pakeitimams ar naujam numatytam naudojimui vis tiek reikia visos peržiūros.
- **Nestebimas realaus pasaulio dreifas**: patvirtinimas pagal pradinį veiksmingumą ir tylus populiacijos dreifas reiškia, kad produktas veikia už patvirtintos ribos; stebėsena yra ir reguliavimo lūkestis, ir savigyna.
- **Patvirtinimo painiojimas su verte**: FDA / UKCA patvirtinimas ≠ kas nors mokės – tai [SVV](../sveikatos-technologijų-vertinimas/) kliūtis, kuri įveikiama atskirai.

## Šaltiniai

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
