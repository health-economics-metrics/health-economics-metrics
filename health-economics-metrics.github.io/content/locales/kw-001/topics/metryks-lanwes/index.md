# Metryks Lanwes

Metryks lanwes a vusur fatell wra ober dhe dremena dres system delivrans: termyn kelgh, termyn arweth, tremena, ober yn pregres (WIP), ha effeythusnans lanwes. Y'n rewl Lagh Little — an keth matematik gortos a rewl gwelyow klavji ha rolyow gortos.

## Perag yth yw posek

An moyha termyn delivrans nyns yw ober — yw gortos. Studhyansow effeythusnans lanwes a oberow godhvos a gav menowgh nodhow oberys yn gweythresys yn unnik **5–15%** a'ga thermyn ow kelghya; an remnant yw rewlyow. Hemma a styr bos an skonnyans gwella kosa dhe dhiwarth rewlyow, na ny yw dhe dhevnydhya — pur an kedhlow a dhyskudhas towlow lanwes klavji a-dro dhe welyow. Rag kenyver tra a'n jeves [kost dalgh](../kost-dalgh/), metryks lanwes a dhiskwedh ple y kressa kost an dalgh.

## An Matematik

```
Termyn kelgh   = t(gorfennys) − t(dallethys)
Termyn arweth  = t(delivrys) − t(govynnys)     (a-berth rewlyow kyns-ober)
Tremena        = nodhow kowlwrys / termyn
WIP            = nodhow dallethys mes heb gorfenn
Effeythusnans lanwes = termyn gweythresys / (gweythresys + gortos) × 100

Lagh Little:  WIP kres = tremena × termyn kelgh kres
              (kehaval: termyn kelgh = WIP / tremena)
```

Lagh Little yw an lever: orth tremena fast, leha WIP a leha termyn kelgh yn peub-radh. Hi a rewl klavji ynwedh: `gwelyow kemmerys = kemmyskyow/dydh × hys-kemmeres`.

## Ensampel gwrys

Tim a'n jeves 40 nodh yn pregres hag a dhiwettha 10/seythun: termyn kelgh = 40/10 = 4 seythun. Y a worrow harthow WIP, ow leha WIP dhe 15: termyn kelgh = 15/10 = **1.5 seythun** — an keth tus, an keth tremena, 62% delivrans skonnyk, diwar dyskyplin rewlyow yn unnik.

Prisys gans CoD: mar yw nodhow kres £3,000/seythun a gost dalgh, pub nodh a spen lemmyn 2.5 seythun le yn rewl: 10 nodh/seythun × 2.5 × 3,000 = **£75,000/seythun a gost dalgh dyberthys** — dhort chanj polici heb kost.

Myrwhes klavji: 40 kemmyskyow/dydh × 6.0 dydh LOS = 240 gwely; leha an gortos anglinikel a-berth LOS dhe 5.6 dydh ha 16 gwely a vydh rydh ([hys kemmeres](../hys-gortos/)) — an keth lagh, an keth lever.

## Kolm gans ynjynnyans medhelweyth

Metryks lanwes yw an tavas kemmyn ynter ynjynnyans delivrans ha oberyans yeghes:

- **Skoodhyow isstag PR** (LinearB, ~8M PR): termyn kemmeres elit < 7h, dasvyuwa < 6h, kelgh oll < ~26h — termyn kemmeres yw rewl pur, an kensa tra dhe worra warnodho.
- **[Rolyow gortos](../efekt-rol-wortos/)** yw backlogs; **[RTT](../kemmyskyans-dhe-dretyans/)** yw termyn arweth; **[degemeryans gwelyow](../dydhyow-gweli-sawys/)** yw WIP. Gwellheans a dreuswerth yn dew gyrha: harthow WIP ↔ leha kemmyskyow; instrumentya termyn rewl ↔ holya stagys fordh.
- Effeythusnans lanwes a-woeles 15% yw normal yn an dew dhomen, hag an dew a'n kudh drefen bos *tus* bysy mes *ober* ow kortos — musurewgh klok an ober, na ny yw klok an oberoryon.

## Fowtys Kemmyn

- **Gordhya devnydh**: kerdhes devnydh an oberyer dhe 100% a dhiskerdh termynow rewl yn nan-linear (M/M/1: gortos ∝ ρ/(1−ρ)) — an kaus perag y vedh klavjiow 95%-kemmerys ow stoppya ha tymow 95%-allokys ow sedha.
- **Kresow dres dasparthow skeusys**: termynow kelgh yw lost-tew; ragwelewgh gans persentilys (p85), na ny yw kresow.
- **Leha WIP dre wul tra ober a-ugh dhe nagonan** ha'y henwel gwellheans lanwes — an demmand na dhiwanas, a rewlis a-ves harth an musur (an versyon klavji: ambulansow ow kortos a-ves ED).

## Fontynnow

- Sommyans Lagh Little ha metryks lanwes. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- Skoodhyow ynjynnyans LinearB. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
