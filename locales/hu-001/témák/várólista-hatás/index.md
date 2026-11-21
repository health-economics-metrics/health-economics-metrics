# Várólista-hatás

A várólista-hatás a megtakarított klinikai kapacitást a várólistáról lekerülő (vagy gyorsabban haladó) betegekre váltja át. A megtakarított órák további rendelési időablakokká alakítása közvetlenül csökkenti a tröszt várólistájának méretét — ez a legkézzelfoghatóbb módja annak, hogy megmutassuk egy egészségügyi rendszernek, mire *való* a felszabadított kapacitás.

## Miért fontos

A tervezett ellátás várólistája az NHS pandémia utáni meghatározó kihívása (mérete nemzeti politikai mutató), és minden tröszt tervezett ellátás-helyreállítási programot futtat ellene. Az az üzleti eset, amely azt mondja, hogy „2000 ápolói órát takarít meg", elvont; az, amelyik azt, hogy „4000 további időablakot teremt, 3800 várakozó beteget lát el, a szakterület listáját 9%-kal csökkenti", történet, amelyet egy operatív igazgató elvihet az igazgatóságához. A várólista-hatás a [nem készpénzfelszabadító kapacitás](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/) természetes *elszámolási egysége*.

## A matematika

```
Extra slots        = hours released / slot duration × utilization
Patients seen      = extra slots × (1 − DNA rate)
List reduction     = patients seen − induced new demand
Waiting-time gain  = queueing improvement from higher service rate
                     (for stable queues, cutting the backlog N by ΔN at
                     service rate μ pulls everyone forward ~ΔN/μ)
```

A rövidebb várakozások egészségértéke: a betegek kevesebb hetet töltenek az alacsonyabb kezelés előtti hasznossági állapotban — a QALY-számtan a [beutalástól a kezelésig](../beutalástól-a-kezelésig/) témában.

## Kidolgozott példa

Egy ambiens dokumentációs szoftver 20 rendelői ápolónként napi 45 percet takarít meg. 250 nap alatt: 20 × 0,75 × 250 = 3750 óra/év.

```
Slots (30 min, 85% usable) = 3,750 / 0.5 × 0.85 = 6,375 slots
Patients seen (7% DNA)     = 6,375 × 0.93       ≈ 5,929/year
```

Egy 12 000 fős listájú és évi 24 000 keresletnek megfelelő kapacitású időpontú szakterületen a ~5900 további időpont nagyjából negyedével csökkenti az átlagos várakozást — a trösztöt lényegesen közelebb viszi a 18 hetes szabványhoz felvétel nélkül. Megjelenésenként ~160 £ konstrukciós értéken a tevékenység ~949 000 £/évet ér (lásd [országos tarifa és egységköltségek](../országos-tarifa-és-egységköltségek/)) — de a *várólista*-keretezést mutasd be először; azon irányítják a rendszert.

## Kapcsolat a szoftverfejlesztéssel

A várólista egy backlog, és a backlog-lebontás gazdaságtana mindkét irányban átvihető. Az egészségügyből a szoftverbe: a backlog-csökkenést aszerint értékeld, mennyit várnak a *felhasználók* az értékre, nem a lezárt tételek száma szerint (a [késedelem költsége](../a-késedelem-költsége/) sorban álló tételenként). A szoftverből az egészségügybe: a Little-törvény szerint a lista csak akkor csökken, ha a kiszolgálási ráta meghaladja az érkezési rátát — a növekvő beutalók által elnyelt kapacitásnyereségek a várakozásokat változatlanul hagyják, ezért modellezd az érkezéseket is. És mindkét területen súlyossággal súlyozott érték szerint priorizálj (klinikai sürgősségi kategóriák ↔ [súlyossági módosítók](../qaly-hiány-és-súlyossági-módosítók/)), nem érkezési sorrendben.

## Buktatók

- **Időablak ≠ beteg**: a DNA-arányok és a felszabadult idő használhatatlan töredékeinek elfelejtése.
- **Indukált kereslet**: a látható többletkapacitás beutalókat vonz; a nettó listahatás kisebb a bruttónál.
- **Készpénz állítása**: a várólista-hatás kapacitásérték; a készpénzállítás (a backlogmunka elkerült kiszervezése) más sor — lásd [elkerülhető kiszervezési költségek](../elkerülhető-kiszervezési-költségek/).

## Források

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
