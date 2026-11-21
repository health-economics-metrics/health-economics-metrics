# A tökéletes információ várható értéke (EVPI)

Az EVPI az a legnagyobb összeg, amelyet egy döntéshozónak meg kell fizetnie a bizonytalanság megszüntetéséért a döntés előtt — a „futtassunk le előbb egy vizsgálatot" formális ára.

## Miért fontos

Az egészségügyi rendszerek állandóan szembesülnek a választással: bevezetni most, tökéletlen bizonyítékok alapján, vagy előbb további kutatást finanszírozni. Az EVPI számot ad a második lehetőségre. Ha az EVPI 50 000 £, és a javasolt vizsgálat 2 millió £-ba kerül, vezesd be most. Ha az EVPI 20 millió £, a vizsgálat kiváló üzlet. Ugyanez a kérdés — „kísérleteznünk kell-e ezzel a bevezetés előtt?" — minden vállalati eszközdöntésnél felmerül, és szinte senki nem árazza. Egy projekt későbbi kiterjesztésének opciójáért, az információgyűjtés opciója helyett, lásd [reálopció-értékelés](../reálopció-értékelés/).

## A matematika

Az EVPI a tökéletes előrelátással hozott és a várakozások alapján most hozott döntés közötti különbség:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = uncertain parameters (with their joint distribution)
NMB(j,θ) = net monetary benefit of option j given θ
```

Első tag: a legjobb választás kifizetésének átlaga minden lehetséges világban (mindig helyesen választasz). Második tag: az átlagosan legjobb egyetlen lehetőség kifizetése (most el kell köteleznd magad). Az EVPI ≥ 0 mindig. A populációs EVPI az érintett döntések számával szoroz. Közvetlenül a [PSA](../valószínűségi-érzékenységvizsgálat/) mintavételeiből számítható.

## Kidolgozott példa

Bevezessünk-e egy MI-dokumentációs asszisztenst 5000 klinikusnak, vagy sem. Két világ:

```
World A (p = 0.6): assistant saves 20 min/day → NMB of rollout = +£8M
World B (p = 0.4): assistant saves ~0 (workflow friction) → NMB of rollout = −£3M
NMB of "don't roll out" = £0 in both worlds.
```

Döntés most: E[NMB bevezetés] = 0,6 × 8 − 0,4 × 3 = **+3,6 M£** → bevezetés.

Tökéletes információval: az A világban a bevezetést választod (+8 M£), a B világban semmit (0 £). Várható érték = 0,6 × 8 + 0,4 × 0 = **4,8 M£**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Egy 150 000 £-ba kerülő, szigorú 3 hónapos kísérleti projekt, amely lényegében eldönti, melyik világban vagy, nyomatékosan megéri — és bármely 1,2 M£-nál drágább kísérleti projekt nem, bármilyen alapos is.

## Kapcsolat a szoftverfejlesztéssel

Az EVPI a spike, a kísérleti projekt, az A/B-teszt és a proof-of-concept gazdaságtana. Két gyakorlati szabályt ad:

- **Egy kísérleti projektet csak akkor érdemes finanszírozni, ha a döntés tényleg megváltozhat.** Ha a kísérlet eredményétől függetlenül bevezetnéd, az EVPI = 0, és a kísérleti projekt színház.
- **A kísérleti kiadást az EVPI-ben korlátozd.** Az információ értékét a döntés értéke korlátozza, amelyet tájékoztat.

A részleges EVPI (EVPPI) ezt egyetlen paraméterre terjeszti ki: „mennyit ér konkrétan a megtakarított idő számának rögzítése?" — ami megmondja, mit kell a kísérleti projektnek mérnie. Egy *konkrét* tervezett vizsgálat árazásához, a teljes bizonytalanság megszüntetése helyett, lásd [EVSI](../a-mintainformáció-várható-értéke/).

## Buktatók

- **Döntési szabály nélküli kísérleti projektek futtatása** — az olyan információ, amely nem változtathatja meg a választást, definíció szerint értéktelen.
- **Az információgyűjtés késedelmi költségének figyelmen kívül hagyása**: egy 6 hónapos kísérleti projekt 6 hónapnyi előnyt késleltet ([a késedelem költsége](../a-késedelem-költsége/)); a kísérleti projekt nettó értéke = feloldott EVPI − késedelmi költség − kísérleti költség.
- **Az EVPI előrejelzésként kezelése.** Az információérték felső korlátja, nem becslés arra, mit fog nyújtani egy konkrét vizsgálat.

## Források

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
