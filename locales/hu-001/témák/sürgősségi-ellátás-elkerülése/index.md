# Sürgősségi ellátás elkerülése

A sürgősségi ellátás elkerülése a lefelé irányuló beavatkozás — triázsalkalmazások, távfelügyelet, virtuális osztályok, sürgősségi ellátás átirányítása — által megelőzött sürgősségi osztályi (A&E) látogatásokat és sürgősségi felvételeket számolja. A „korábban elkaptuk" állítást költségezett állítássá alakítja.

## Miért fontos

A sürgősségi ellátás a rendszer legdrágább rutinszerű helyszíne (a sürgősségi megjelenés egységköltsége a National Cost Collection / PSSRU adatok szerint 250–400 £ között van; egy sürgősségi felvétel több ezer), és a sürgősségi osztály zsúfoltsága mentőkésésekbe és lemondott tervezett műtétekbe gyűrűzik tovább. Bármi, ami biztonságosan feloldja a keresletet lefelé — önellátási tanács, aznapi alapellátás, közösségi reagálás — kapacitást vásárol a rendszernek a legterheltebb pontján. Ez a szokásos előnysor a tünetellenőrzőknél, a 111-stílusú triázsszolgáltatásoknál és a [távoli betegfigyelésnél](../távoli-betegfigyelés-gazdaságtana/).

## A matematika

```
Avoided attendances = population × (baseline rate − intervention rate)
Gross saving        = avoided attendances × unit cost per attendance
                      (+ avoided admissions × admission cost, counted separately)

Net saving          = gross saving − intervention cost − cost of new pathway usage
                      (redirected demand isn't free: a 111 call, a GP slot,
                       a virtual-ward day all have unit costs)
```

Az oksági állításhoz összehasonlító kell: a megjelenési arányok trendeket mutatnak és szezonálisan változnak, így az előtte/utána önmagában semmit nem bizonyít.

## Kidolgozott példa

COPD-távfelügyeleti szolgáltatás 3000 nagy kockázatú betegnek. Az illesztett kontrollos értékelés szerint az exacerbációval kapcsolatos sürgősségi megjelenés 0,9-ről 0,7-re csökken betegévenként, a sürgősségi felvételek pedig 0,5-ről 0,42-re.

```
Avoided attendances = 3,000 × 0.2  = 600 × £300   = £180,000
Avoided admissions  = 3,000 × 0.08 = 240 × £3,800 = £912,000
Gross                                              £1,092,000/year

Costs: monitoring service £600,000; extra community-nurse responses £150,000
Net ≈ +£342,000/year — plus the QALY gains of exacerbations treated earlier.
```

Figyeld meg, hogy a felvételi sor dominál: a megjelenés-elkerülés önmagában ritkán téríti meg a felügyeleti szolgáltatást; a pénz a *felvétel*-elkerülésben van.

## Kapcsolat a szoftverfejlesztéssel

Ez az **incidens-elkerülés gazdaságtana**. A megfigyelhetőség, a canary telepítések és a korai figyelmeztető rendszerek értéke az elkerült „sürgősségi megjelenések" — lapozók, háborús szobák, sev-1-ek —, mindegyiknek teljes költsége van (mérnökóra × ráta + ügyfélhatás). Ugyanazok a modellezési szabályok érvényesek: nettósítsd az új lefelé irányuló útvonal költségét (a riasztások triázsa nem ingyenes), vigyázz a helyettesítéssel (azok a riasztások, amelyek munkát teremtenek az incidensek megelőzése nélkül, egészségszorongás, nem egészség), és bizonyítsd a kontrafaktuálist kontrollal (a csapatok incidensrátái trendeznek és az átlaghoz térnek vissza, pontosan úgy, mint a sürgősségi megjelenések).

## Buktatók

- **Az átlaghoz való visszatérés**: a rossz év alapján kiválasztott nagy kockázatú kohorszok kezelés nélkül is javulnak; az illesztett kontrollok vagy lépcsőzetes (stepped-wedge) tervek elengedhetetlenek.
- **Kínálat által indukált kereslet**: a könnyű digitális triázs *növelheti* az összes kontaktust (alacsonyabb küszöb a segítségkéréshez), miközben csökkenti a sürgősségi részarányt — számold az egész rendszer költségét.
- **A megjelenések átlagköltségen való értékelése**, amikor a sürgősségi fix költségek nem csökkennek — lásd [határköltség és átlagköltség](../határköltség-és-átlagköltség/).

## Források

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
