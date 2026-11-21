# Populációs attributív hányad (PAF)

A PAF egy populációban a betegség vagy kimenet terhének az a hányada, amely egy adott kockázati tényező expozíciójának tulajdonítható — az a rész, amely eltűnne, ha az expozíciót teljesen megszüntetnék. A „ez a kockázati tényező megduplázza az esélyeidet" állítást populációs szintű számmá alakítja, amely köré egy megrendelő ténylegesen tervezhet: hány esetet és mennyi költséget ér meg valójában egy adott expozíció kergetése.

## Miért fontos

Levin 1953-ban vezette be a PAF-ot egy szűk, konkrét kérdés megválaszolására: ha senki sem dohányozna, mennyi tüdőrák tűnne el? Ugyanez a számtan méretezi ma a nemzeti megelőzéstervezést a dohányzási és elhízási stratégiáktól a WHO Global Burden of Disease vizsgálat kockázati tényező-rangsoraiig, mert egy relatív kockázat önmagában semmit nem mond a hatásról — egy kockázati tényező megduplázhatja egy ritka esemény esélyét és alig mozdíthatja a populációs betegségterhet, vagy egy gyakori esemény esélyét csak kissé emelheti, mégis az esetek óriási részét magyarázhatja. A PAF az, ami a „az X kockázati tényező veszélyes" állítást „az X kockázati tényező megszüntetése évente ennyi esetet előzne meg" állítássá alakítja, ami az a szám, amelyre egy megelőzési program üzleti esetének valójában szüksége van. Lásd [a megelőzés gazdaságtana](../a-megelőzés-gazdaságtana/), mibe kerül ennek a számnak a birtokában cselekedni.

## A matematika

```
PAF = prevalence_exposed × (relative_risk − 1) / (1 + prevalence_exposed × (relative_risk − 1))

prevalence_exposed = fraction of the population exposed to the risk factor (0–1)
relative_risk      = risk of the outcome in exposed vs. unexposed people (e.g. 2.5 = 2.5×)

Cases attributable = total_cases × PAF
```

A PAF az expozíció prevalenciájával és a relatív kockázattal is nő — egy nagyon gyakori expozícióhoz kapcsolódó mérsékelten emelkedett relatív kockázat (mondjuk 1,5×) nagyobb PAF-ot adhat, mint egy ritka expozícióhoz kapcsolódó drámai relatív kockázat (mondjuk 5×). Ez az egész oka annak, hogy a relatív kockázattól elkülönülő számként létezik.

## Kidolgozott példa

Egy kockázati tényező a populáció 30%-ában van jelen (`prevalence_exposed = 0.3`), és 2,5-szeresére növeli a kimenet kockázatát (`relative_risk = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

With 1,000 cases/year in the population:
Cases attributable = 1,000 × 0.3103 ≈ 310 cases/year
```

E kimenet éves terhének valamivel kevesebb mint harmada tulajdonítható az expozíciónak — teljes megszüntetése (az elméleti plafon; egyetlen valódi beavatkozás sem éri el a 100%-os expozíciómegszüntetést) évente nagyjából 310-et előzne meg az 1000 esetből.

## Kapcsolat a szoftverfejlesztéssel

A PAF az „incidensmennyiségünk mekkora része tulajdonítható ennek az egy kiváltó oknak?" epidemiológiai változata — ugyanaz a kérdésforma, amelyet a csapatok akkor tesznek fel, amikor egy adott telepítés- vagy függőségosztályt az összes éles incidenshez mérnek, ahelyett hogy minden incidenst egyformán, ugyanúgy érdemesnek tekintenének a javításra. Egy kiváltó ok-kategória, amely a telepítések nagy részében jelen van, csak mérsékelt relatív incidens-kockázattal, megelőzhet egy ritka, nagy relatív kockázatú kategóriát abban, hogy hová fordítsák először a mérnöki erőfeszítést — pontosan a PAF-belátás, lefordítva.

## Buktatók

- **A PAF-ok összegzése a kockázati tényezők között**: ugyanazt a kimenetet érintő több tényező PAF-jai nem adnak ki 100%-ot — összesen meg is haladhatják, mert a tényezők kölcsönhatásban vannak és osztoznak az oksági útvonalakon. Minden PAF-ot úgy kezelj, mint „ha csak ez a tényező szűnne meg", soha nem a teljes kockázat felosztásaként.
- **Relatív kockázat átültetése populációk között**: az egyik populációban (eltérő alap-expozíció prevalencia, eltérő zavaró tényezők) becsült relatív kockázat félrevezető PAF-ot számít, ha egy másik populáció expozíciós prevalenciájára alkalmazzák.
- **A PAF összekeverése az expozícióban lévők attributív kockázatával**: a PAF populációs szintű és az expozíció prevalenciájától függ; az expozícióban lévők attributív kockázata egyéni szintű és nem. Különböző kérdésekre válaszolnak — ne idézd az egyiket a másik megválaszolására.

## Források

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
