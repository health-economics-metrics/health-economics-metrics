# Žmogiškojo kapitalo metodas ir trinties kaštų metodas

Tai du konkuruojantys metodai prarastam produktyvumui – dėl ligos, negalios ar mirties – vertinti ligos kaštų ir sąnaudų bei naudos tyrimuose. Žmogiškojo kapitalo metodas (HCA) visą prarastą produkciją visą nebuvimo trukmę vertina darbo užmokesčio įkainiu; trinties kaštų metodas (FCM) – tik trumpesnį laikotarpį, kurio darbdaviui iš tikrųjų reikia gamybai atkurti. Pasirinkimas tarp jų keičia netiesioginių sąnaudų įvertį dvigubai ar daugiau.

## Kodėl tai svarbu

Netiesioginės (produktyvumo) sąnaudos yra viena labiausiai ginčijamų eilučių sveikatos ekonomikoje būtent todėl, kad du standartiniai metodai taip stipriai nesutaria. HCA kiekvieną nebuvimo dieną traktuoja kaip dieną produkcijos, kurią ekonomika tikrai praranda, vertinamą visu atlyginimu visą trukmę – o mirties ar nuolatinės negalios atveju – likusį darbingą gyvenimą. FCM teigia, kad ekonomikoje su nedarbu ir darbo rinkos laisvumu didžioji ilgo nebuvimo dalis iš tikrųjų nesumažina nacionalinės produkcijos, kai darbdavys apmoko pakaitalą ar perskirsto darbą; tik „trinties laikotarpis“ – laikas gamybai atkurti iki ankstesnio lygio – yra tikras nuostolis. Todėl FCM sistemingai duoda mažesnius, konservatyvesnius netiesioginių sąnaudų įverčius nei HCA, ir šie du metodai nėra keičiamos išnašos: tai skirtingos ekonominės teorijos apie tai, ką reiškia „prarastas produktyvumas“. Todėl [NICE etaloninis atvejis](../sveikatos-technologijų-vertinimas/) pagal nutylėjimą neįtraukia produktyvumo sąnaudų, pateikdamas jas, jei apskritai, kaip atskirą visuomenės perspektyvos jautrumo analizę, o ne maišydamas į etaloninio atvejo ICER – žr. [analizės perspektyva](../analizės-perspektyva/).

## Matematika

```
Human Capital Approach:
HCA_cost = daily_wage × days_lost

Friction Cost Method (simplified, capped-at-friction-period form):
FCM_cost = daily_wage × min(days_lost, friction_period_days)

friction_period_days = country/sector-specific estimate of time-to-restore
                        production (historically ~85 days in Dutch iMTA
                        costing guidance; varies by country and is
                        periodically re-estimated)
```

Visas dviejų metodų nesutarimas slypi `min()`: HCA niekada neriboja `days_lost`, todėl kaina auga visą nebuvimą, o FCM riboja skaičiuojamas dienas trinties laikotarpiu, kad ir kiek truktų faktinis nebuvimas.

## Išspręstas pavyzdys

Darbuotojas nedirba `days_lost = 180` dienų, uždirbdamas `daily_wage = £150`.

**Žmogiškojo kapitalo metodas**:

```
HCA_cost = 150 × 180 = £27,000
```

**Trinties kaštų metodas**, naudojant trinties laikotarpį `friction_period_days = 85` (istorinis Nyderlandų iMTA etalonas pagal periodinį gairių perskaičiavimą):

```
FCM_cost = 150 × min(180, 85) = 150 × 85 = £12,750
```

FCM 12 750 £ yra mažiau nei pusė HCA 27 000 £ už *tą patį* nebuvimą – vien metodo pasirinkimas esmingai keičia ligos kaštų bylą, dar neprisilietus jokios kitos prielaidos.

## Ryšys su programinės įrangos inžinerija

Tai tiesiogiai atitinka, kaip komanda vertina išeinantį inžinierių:

- **HCA stiliaus kaitos skaičiavimas**: nuostolis vertinamas kaip išėjusio inžinieriaus visas atlyginimas tiek laiko, kiek vieta lieka laisva. Tai naivi daugumos kaitos kaštų modelių versija, ir ji pervertina nuostolį dėl tos pačios priežasties, kodėl HCA pervertina produktyvumo nuostolį – ji prielaidauja, kad laisvi pajėgumai visą laiką buvo visiškai produktyvūs ir niekas kitas neužpildė spragos. Žr. [darbo jėgos išlaikymas](../darbuotojų-išlaikymas/), kuris kiekybiškai įvertina samdymo / adaptacijos / laisvos vietos dengimo grandinę, į kurią šis metodas įsilieja.
- **FCM stiliaus kaitos skaičiavimas**: nuostolis vertinamas tik faktiniam laikui, per kurį pakaitalas užpildomas ir įsibėgėja – inžinerinis „trinties laikotarpis“. Tai ginamesnis skaičius verslo bylai, lygiai kaip FCM yra konservatyvesnis pasirinkimas ligos kaštų tyrime.
- Pagrindinė disciplina ta pati, kaip [alternatyviojoje kainoje](../alternatyvioji-kaina/): išstumtą išteklių vertinkite pagal tai, kas iš tikrųjų prarandama, o ne pagal antraštinę trukmę, padaugintą iš įkainio.

## Spąstai

- **HCA ir FCM maišymas vienoje analizėje arba tik vieno pateikimas neatskleidžiant pasirinkimo.** Tie patys nebuvimo duomenys gali duoti 2× ir didesnį pateikiamų sąnaudų skirtumą, priklausomai nuo metodo; pasirinkimas turi būti nurodytas, o ne paslėptas.
- **HCA naudojimas visuomenės perspektyvos byloje nepažymint jo kaip jautrumo analizės.** NICE etaloninis atvejis aiškiai neįtraukia produktyvumo sąnaudų; visuomenės perspektyvos HCA įvertis priklauso scenarijų analizei, o ne pagrindiniam ICER.
- **Bet kurio metodo taikymas neapmokamam ar nerinkos darbui (pvz., slaugai) be koregavimo.** Abu metodai prielaidauja atlyginimo įkainį kaip vertės pakaitalą, kuris švariai neperkeliamas darbui be rinkos atlyginimo.

## Šaltiniai

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
