# WSJF és CD3

A CD3 (Cost of Delay Divided by Duration, a késedelem költsége osztva az időtartammal) és a WSJF (Weighted Shortest Job First, súlyozott legrövidebb munka először) olyan priorizálási szabályok, amelyek a munkát **értéksűrűség** szerint ütemezik: mennyi késedelmi költséget szüntetnek meg a fogyasztott szűkös kapacitás egységére vetítve. Közös, rögzített kapacitás mellett a legmagasabb CD3 először a matematikailag optimális sorrend az összes késedelmi költség minimalizálására.

## Miért fontos

Minden backlog elosztási probléma: sok érdemes tétel, egy csővezeték. Az egészséggazdaságtan ugyanezt a problémát az egészségügyi költségvetésekre költséghatékonysági ranglistákkal oldotta meg — rangsorold a beavatkozásokat a fontonként nyert egészség szerint, és finanszírozz lefelé a listán, amíg a költségvetés kimerül. A CD3 azonos logika a szállítási kapacitásra: haszon a *korlátozott erőforrás* egységére, rangsorrendben finanszírozva. A sorrend helyes megválasztása ingyenpénz — ugyanaz a munka, ugyanaz a kapacitás, kevesebb összes késedelmi költség.

## A matematika

```
CD3  = Cost of Delay (£/week) / Duration (weeks)      — real units (Black Swan Farming)

WSJF = (user-business value + time criticality + risk reduction/opportunity
        enablement) / job size                         — SAFe's relative-scale proxy,
                                                        modified-Fibonacci scores
```

A valódi pénznemmel számolt CD3 ([késedelem költsége](../a-késedelem-költsége/)) szigorúan erősebb a WSJF egység nélküli pontjainál — a WSJF olyan a CD3-hoz, mint a többszempontú pontozás a teljes [költség-hasznosság elemzéshez](../költség-hasznosság-elemzés/): használható, ha a pénzzé tétel nem praktikus, játszható, ha a pontszámoknak nincs horgonyuk.

## Kidolgozott példa

Három funkció, egy csapat:

```
Feature   CoD (£/wk)   Duration   CD3
A         30,000       10 wks     3,000
B         12,000       2 wks      6,000
C         5,000        1 wk       5,000
```

CD3-sorrend: B, C, A. Hasonlítsd az összes késedelmi költséget a „legnagyobb CoD először" (A, B, C) sorrendhez:

```
CD3 order  (B,C,A): A waits 3 wks, C waits 2 → 30k×3 + 5k×2  = £100k delay cost
CoD order  (A,B,C): B waits 10, C waits 12   → 12k×10 + 5k×12 = £180k
```

Ugyanazok a funkciók, ugyanaz a csapat — a sorrend önmagában 80 000 £-ot takarít meg. Az intuíció: a kicsi, sürgős tételek mennek előre, mert olcsón szabadítják fel a késedelmi költségüket; a nagy tétel keveset veszít a rövid várakozással.

## Kapcsolat a szoftverfejlesztéssel

Az egészségügyi szoftverportfóliókhoz denominálj a CoD-t azokban az egységekben, amelyeket ez a repó tanít: QALY/hét × küszöb + működési £/hét, és a backlog közvetlenül összemérhetővé válik azzal, ahogy az egészségügyi rendszer mindent más rangsorol, amit vásárol. Két gyakorlati megjegyzés: (1) az időtartam a *korlátot foglaló naptári időt* jelenti, nem az erőfeszítést — egy 2 hetes eltelt idejű tétel, amely a szűk keresztmetszeti csapat 2 napját igényli, olcsóbb, mint amilyennek látszik (lásd [lefelé irányuló erőforrás-optimalizálás](../lefelé-irányuló-erőforrás-optimalizálás/)); (2) a kórházak implicit ugyanezt a szabályt futtatják, amikor a műtői listákat sürgősséggel súlyozott áteresztőképesség szerint rendezik — a klinikai priorizálási kategóriák súlyossággal súlyozott CD3-ak (lásd [QALY-hiány és súlyossági módosítók](../qaly-hiány-és-súlyossági-módosítók/)).

## Buktatók

- **WSJF pontszám-színház**: az egység nélküli Fibonacci-viták azokhoz konvergálnak, aki a leghangosabban érvel; legalább a backlog elején lévő tételeket horgonyozd valódi CoD-ba.
- **Időtartamjáték**: tételek felaprózása a CD3-rang felfújására — rendben, ha a felaprózottak önállóan szállítanak értéket, csalás, ha nem.
- **A sürgősségi profilok figyelmen kívül hagyása**: a határidő-alakú CoD (szabályozói időpontok) megtöri az állandó ráta feltevést; ezeket a dátum megvalósíthatósága szerint ütemezd, a többit CD3 szerint.
- **Újrarangsorolási forgatag**: a CD3 az elköteleződéskori sorrendi döntésekre való, nem a folyamatban lévő munka napi átrendezésére (lásd [folyammutatók](../folyammutatók/) a WIP-ről).

## Források

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
