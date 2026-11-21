# Befektetés megtérülése (ROI)

A ROI a nettó nyereség és a befektetett pénz hányadosa. Ez az a mutató, amelyet a mérnöki munka és a pénzügy már megoszt — az egészséggazdaságtan azt a fegyelmet adja hozzá, amely egy ROI-állítást ellenállóvá tesz a vizsgálattal szemben: deklarált nézőpont, összehasonlító, horizont és előnykategóriák.

## Miért fontos

A ROI a költségvetés-felelősök közös nyelve, és a közegészségügy is használja: a mérföldkő jelentőségű Masters és munkatársai áttekintés **14,3:1-es mediánt** talált a közegészségügyi beavatkozások ROI-jára (minden 1 £ ~14 £-t térít meg a tágabb gazdaságnak és egészségügyi rendszernek) — ezt a számot széles körben használják a megelőzési kiadások melletti érvelésre. De ez a 14:1 *társadalmi, hosszú horizontú* szám; egy kórházi pénzügyi igazgató ROI-ja finanszírozói nézőpontú és 1–3 éves. A legtöbb ROI-vita valójában kinyilvánítatlan nézőpontú vita.

## A matematika

```
ROI = (Benefits − Costs) / Costs      (often × 100%)

Payback period = Costs / annual net benefit
```

Egy ROI-állítás négy deklaráció nélkül alulspecifikált:

1. **Nézőpont** — kinek az előnyei számítanak? (lásd [elemzési nézőpont](../elemzési-nézőpont/))
2. **Összehasonlító** — milyen alternatívához képest? (lásd [alternatív költség](../alternatív-költség/))
3. **Horizont** — mennyi időre, és [diszkontálva](../diszkontálás-és-időpreferencia/)?
4. **Előnyosztály** — készpénzfelszabadító, kapacitás vagy kvalitatív? (lásd [készpénzfelszabadító és nem készpénzfelszabadító](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/))

## Kidolgozott példa

E-beosztási rendszer, költsége 3 évre 500 000 £.

```
Cash-releasing:  agency shift reduction        £450,000
Capacity:        ward-manager admin time freed £600,000 (valued, not banked)
Qualitative:     staff satisfaction, safety    not monetized

Strict financial ROI  = (450,000 − 500,000)/500,000 = −10%
Economic ROI          = (1,050,000 − 500,000)/500,000 = +110%
```

Mindkét szám igaz. Az a szállító, aki „+110% ROI"-t idéz egy olyan pénzügyi igazgatónak, aki csak 450 ezer £-ot tud félretenni, elveszíti a bizalmat; mindkettő bemutatása, felcímkézve, megnyeri azt. Ugyanez a felosztás védi a belső szószólót, amikor a pénzügy két év múlva auditálja az előnyöket.

## Kapcsolat a szoftverfejlesztéssel

Minden eszközjavaslatnak van ROI-diája; szinte egyik sem deklarálja a négy paramétert. A leggyakoribb hiba a kategóriák keverése: a kapacitásnyereségek (fejlesztői percek) pénzügyi megtérülésként bemutatva. Strukturáld az MI/platform ROI-t a fenti kidolgozott példa szerint — készpénzsor, kapacitássor, kvalitatív sor —, és adj hozzá [érzékenységvizsgálatot](../érzékenységvizsgálat/) a puha számokra. Az MI ROI-jára vonatkozó eredménykimutatási realitásellenőrzéshez külön lásd [MI-befektetés megtérülése](../mi-befektetés-megtérülése/).

## Buktatók

- **Nézőpont-tisztára mosás**: évtizednyi társadalmi előny idézése egy 12 hónapos horizontú költségvetés-felelősnek.
- **Bruttó a nettó helyett**: a „3 M£-t térít" 2 M£ kiadáson 50% ROI, nem 300%.
- **Hányados-maximalizálás**: az apró nevezők látványos ROI-kat adnak triviális befektetéseken; a portfóliókat NPV vagy [nettó pénzbeli haszon](../nettó-pénzbeli-haszon/) szerint rangsorold, a ROI-t szűrőként használd.
- **Nincs előnyaudit**: a jósolt ROI [haszonrealizálás](../haszonrealizálás/) követése nélkül ígéret, nem eredmény.

## Források

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
