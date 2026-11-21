# Határköltség és átlagköltség

Az átlagköltség a teljes költség osztva az előállított egységek számával. A határköltség egy *további* egység előállításának költsége. A döntéseket a határköltségre kell alapozni — de a közzétett egységköltségek szinte mindig átlagok.

## Miért fontos

A digitális egészségügyi üzleti esetek leggyakoribb hibája, hogy egy megtakarított erőforrást az **átlagköltségén** értékelnek, miközben a valódi megtakarítás a **határköltség**. Egy kórházi ágynap átlagos (teljesen elnyelt) költsége 400 £ fölött van, de egy ágynap felszabadítása nem takarít meg 400 £-ot — az épület, a fűtés és a személyzeti költségek nagy része megmarad. A ténylegesen felszabaduló készpénz 50–150 £ lehet, hacsak nem szabadul fel elég ágy egy osztály bezárásához.

## A matematika

```
Average cost:  AC = TC / Q
Marginal cost: MC = dTC/dQ   (cost of one more/one fewer unit)

TC = total cost, Q = quantity
```

A fix költségek miatt kapacitáscsökkentésnél MC < AC, és MC megközelítheti a nullát, ha van tartalék kapacitás. A megtakarítási állításokhoz ezt kell használni:

```
True saving = ΔQ × MC          (small changes)
True saving = step change in TC (large changes that cross a capacity threshold, e.g. closing a ward)
```

## Kidolgozott példa

A szoftvered csökkenti az átlagos ápolási időt, évi 1000 ágynapot szabadítva fel egy trösztnél.

- **Naiv állítás**: 1000 × 400 £ átlagköltség = **400 000 £ megtakarítás**. Hibás.
- **Határköltség-alapú állítás**: az ágynaponkénti változó költség (étel, mosoda, fogyóeszközök, némi rugalmas ápolás) ≈ 120 £. Megtakarítás = 1000 × 120 £ = **120 000 £**, *plusz* a felszabadított kapacitás értéke, ha az ágyakat újra feltöltik várakozó tervezett betegekkel (bevétel a tevékenységalapú fizetés alatt, vagy a várólista csökkenése).
- **Lépcsőváltásos állítás**: ha a tröszt évi 7300 ágynapot szabadít fel (egy 20 ágyas osztály), valóban bezárhatja az osztályt: személyzet + üzemeltetés ≈ évi 1,5 millió £ valódi készpénz. Itt az átlagköltség-számítás már közelebb áll az igazsághoz.

Ugyanaz a beavatkozás, három védhető szám, attól függően, hogy a változás átlép-e egy kapacitáslépcsőt.

## Kapcsolat a szoftverfejlesztéssel

A felhőgazdaságtan a határköltség őshazája:

- Egy további CI-futás határköltsége már lefoglalt kapacitáson ≈ 0 £, miközben az átlagos futásonkénti költség (teljes platformkiadás ÷ futások) fontokban mérhető lehet. Az átlagköltséget terhelő visszaterhelési rendszerek arra ösztönzik a csapatokat, hogy alulhasználják a közös kapacitást, amely a határon valójában ingyenes.
- Fordítva, a „megtakarítottuk a számítási kapacitás 30%-át" csak akkor szabadít fel készpénzt, ha az példányokat ténylegesen leállítják vagy a foglalásokat csökkentik — ez az ágynap-csapda szoftveres megfelelője. Lásd [készpénzfelszabadító és nem készpénzfelszabadító megtakarítások](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/).

## Buktatók

- **A kapacitás átlagköltségen való értékelése** és készpénzként való bemutatása (a klasszikus).
- **A határköltség állandóságának feltételezése.** Lépcsőzetesen változik a kapacitáshatároknál (osztálybezárások, licencszintek, foglalt példányokra vállalt kötelezettségek).
- **Határköltség használata a bővítési, de átlagköltség a szűkítési döntéseknél** ugyanabban az esetben — a tényleges döntésnek megfelelően válassz.

## Források

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
