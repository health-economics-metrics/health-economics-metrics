# Megtakarított ágynapok

Az ágynap az, amikor egy beteg egy kórházi ágyat foglal egy napig. A „megtakarított ágynapok" — korábbi elbocsátás, felvétel-elkerülés vagy virtuális osztályok révén — az NHS digitális üzleti eseteinek igáslova, és a leggyakrabban túlértékelt előny.

## Miért fontos

Az ágyak az akut ellátás kötött korlátai: amikor az ágyak megtelnek, a tervezett műtéteket lemondják, a mentők sorban állnak, és a sürgősségi osztály feltorlódik. Az ágynapokat felszabadító beavatkozások ezért valódi értéket hordoznak — de az érték *fajtája* teljes egészében attól függ, mi történik a felszabadult ággyal. A pénzügyi igazgatók megtanulták erősen diszkontálni a naiv ágynap-állításokat; ennek a számtannak a helyes elvégzése hitelességi teszt.

## A matematika

```
Bed days saved = patients affected × Δ length of stay (or admissions avoided × avg LOS)

Value depends on the use of the freed capacity:
  refilled with elective activity → value = activity income or waiting-list benefit
  ward closed / flexed down      → value = staffing + running cost released (cash)
  absorbed as slack              → value ≈ marginal (hotel) cost only, £50–£150/day
```

Egy akut ágynap átlagos teljesen elnyelt költségét gyakran 400 £ fölöttire teszik (a National Cost Collection történelmileg ~350 £-ot a többlet-ágynapokra) — de lásd [határköltség és átlagköltség](../határköltség-és-átlagköltség/): az átlag szinte soha nem a megtakarítás.

## Kidolgozott példa

Egy távfelügyeleti „virtuális osztály" évente 600 betegnek engedi meg, hogy 2 nappal korábban hazamenjen: 1200 megtakarított ágynap.

- **Naiv állítás**: 1200 × 400 £ = 480 000 £. Hibás, hacsak nem zár be egy osztály.
- **Őszinte állítás**: a tröszt az ágyakat tervezett ortopédiai betegekkel tölti fel. 1200 ágynap ÷ 3 napos átlagos ápolás = 400 további tervezett ápolási epizód, epizódonként ~6000 £ bevétellel a tevékenységalapú fizetés alatt = **2,4 M£ további finanszírozott tevékenység** (mínusz e betegek kezelésének határköltsége), *plusz* 400 beteg lekerül a várólistáról. A virtuális osztály üzemeltetési költsége (350 000 £) ezzel szemben nettósodik.

A *újrahasznosított* felszabadult kapacitás gyakran többet ér a naiv készpénzállításnál — de ez más fajta érték, és úgy kell címkézni ([készpénzfelszabadító és nem készpénzfelszabadító](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/)).

## Kapcsolat a szoftverfejlesztéssel

A „megtakarított szervernapok" azonosan viselkednek. Az állandóan futó környezetek leszerelése csak akkor szabadít fel készpénzt, ha a példányokat leállítják vagy a foglalások lejárnak; a vissza a készletbe nyelt kapacitás a határköltségét éri (~0 a vállalt kiadáson). A párhuzamos fegyelem: minden állított megtakarításnál nevezd meg a *mechanizmust* — leállítva, értékes munkával újratöltve vagy elpárolgva. Az a szoftver, amely csökkenti a kórházi ápolási időt (elbocsátás-koordináció, távfelügyelet, diagnosztikai átfutási idő), mindhárom forgatókönyvet modellezze, és hagyja, hogy a tröszt osztályonként válasszon.

## Buktatók

- **Átlagköltség-értékelés** a határkapacitásra — a kanonikus hiba.
- **Dupla számítás**: megtakarított ágynapok *és* elkerült felvételek *és* várólista-csökkenés ugyanabból a felszabadult ágyból.
- **Annak feltételezése, hogy a megtakarított napok a drága napok**: az ápolási idő végén megtakarított napok a legolcsóbbak (alacsony akuitású) napok.

## Források

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
