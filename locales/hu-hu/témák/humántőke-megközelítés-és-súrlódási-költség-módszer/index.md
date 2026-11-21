# Humántőke-megközelítés és súrlódási költség módszer

Ez a két versengő módszer az elveszett termelékenység — betegségből, fogyatékosságból vagy halálból eredő — értékelésére a betegségköltség- és költség-haszon vizsgálatokban. A humántőke-megközelítés (HCA) a kieső teljes termelést a távollét teljes időtartamára a bérrátán értékeli; a súrlódási költség módszer (FCM) csak arra a rövidebb időszakra, amely alatt a munkáltatónak ténylegesen helyre kell állítania a termelést. A kettő közötti választás a közvetett költségbecslést kétszeresére vagy még többre változtatja.

## Miért fontos

A közvetett (termelékenységi) költségek az egészséggazdaságtan egyik leginkább vitatott tételei, éppen mert a két szokásos módszer olyan élesen különbözik. A HCA minden távolléti napot olyan napnak tekint, amikor a gazdaság valóban elveszíti a kibocsátást, a teljes bér szerint, a teljes időtartamra — halál vagy tartós fogyatékosság esetén a hátralévő munkaéletre. Az FCM azt állítja, hogy munkanélküliséggel és munkaerőpiaci laza kapacitással rendelkező gazdaságban egy hosszú távollét nagy része valójában nem csökkenti a nemzeti kibocsátást, miután a munkáltató betanított egy pótlót vagy újraosztotta a munkát; csak a „súrlódási időszak" — a termelés korábbi szintre állításának ideje — jelent valódi veszteséget. Az FCM ezért rendszeresen alacsonyabb, konzervatívabb közvetett költségbecsléseket ad a HCA-nál, és a két módszer nem felcserélhető lábjegyzet: más gazdasági elméletek arról, mit jelent az „elveszett termelékenység". Ezért zárja ki alapértelmezetten a [NICE referenciaesete](../egészségügyi-technológiaértékelés/) a termelékenységi költségeket, azokat — ha egyáltalán — külön társadalmi nézőpontú érzékenységvizsgálatként közölve, nem pedig a referenciaesetbeli ICER-be keverve — lásd [elemzési nézőpont](../elemzési-nézőpont/).

## A matematika

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

A két módszer közötti teljes nézeteltérés a `min()`-ben lakik: a HCA soha nem korlátozza a `days_lost` értéket, így a költség a teljes távollét alatt nő, míg az FCM a számított napokat a súrlódási időszakra korlátozza, bármilyen hosszú is a tényleges távollét.

## Kidolgozott példa

Egy munkavállaló `days_lost = 180` napig van távol, `daily_wage = £150` napi bérrel.

**Humántőke-megközelítés**:

```
HCA_cost = 150 × 180 = £27,000
```

**Súrlódási költség módszer**, `friction_period_days = 85` súrlódási időszakkal (a történelmi holland iMTA-viszonyítási érték, az útmutató időszakos újrabecslésének megfelelően):

```
FCM_cost = 150 × min(180, 85) = 150 × 85 = £12,750
```

Az FCM 12 750 £-ja kevesebb mint fele a HCA 27 000 £-jának ugyanarra a távollétre — pusztán a módszer megválasztása lényegesen megváltoztat egy betegségköltség-esetet, bármely más feltevés érintése nélkül.

## Kapcsolat a szoftverfejlesztéssel

Ez közvetlenül megfelel annak, hogyan értékel egy csapat egy távozó mérnököt:

- **HCA-stílusú fluktuációs költségszámítás**: a veszteséget a távozó mérnök teljes fizetéseként értékelni, ameddig csak az állás betöltetlen marad. Ez a legtöbb fluktuációs költségmodell naiv változata, és ugyanazért becsüli túl a veszteséget, amiért a HCA túlbecsüli a termelékenységi veszteséget — feltételezi, hogy a betöltetlen kapacitás végig teljesen termelékeny volt, és semmi más nem nyelte el a lazaságot. Lásd [munkaerő-megtartás](../munkaerő-megtartás/), amely számszerűsíti a toborzási/beillesztési/betöltetlenségi pótlási láncot, amelybe ez a módszer beletáplál.
- **FCM-stílusú fluktuációs költségszámítás**: a veszteséget csak a pótló tényleges betöltési és bejáratási idejére értékelni — a mérnöki „súrlódási időszakra". Ez védhetőbb szám egy üzleti esethez, pontosan úgy, ahogy az FCM a konzervatívabb választás egy betegségköltség-vizsgálatban.
- Az alapul szolgáló fegyelem ugyanaz, mint az [alternatív költségben](../alternatív-költség/): a kiszorított erőforrást aszerint értékeld, mi veszett el valóban, nem egy címszerinti időtartam és egy ráta szorzata szerint.

## Buktatók

- **A HCA és az FCM keverése egy elemzésen belül, vagy csak az egyik közlése a választás feltárása nélkül.** Ugyanazok a távolléti adatok 2-szeres vagy nagyobb különbséget adhatnak a jelentett költségben a módszertől függően; a választást ki kell mondani, nem elrejteni.
- **A HCA használata társadalmi nézőpontú esethez anélkül, hogy érzékenységvizsgálatként jelölnénk.** A NICE referenciaesete kifejezetten kizárja a termelékenységi költségeket; a társadalmi nézőpontú HCA-becslés a forgatókönyv-elemzésbe tartozik, nem a címszerinti ICER-be.
- **Bármelyik módszer alkalmazása fizetetlen vagy nem piaci munkára (pl. gondozás) kiigazítás nélkül.** Mindkét módszer bérrátát feltételez az érték helyettesítőjeként, ami nem vihető át tisztán olyan munkára, amelynek nincs piaci bére.

## Források

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
