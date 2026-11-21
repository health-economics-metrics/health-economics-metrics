# Érzékenységvizsgálat

A determinisztikus érzékenységvizsgálat (DSA) egyszerre egy feltevést változtat egy hihető tartományban, hogy lássa, megáll-e a következtetés. A szokásos vizualizáció a tornádódiagram: a paraméterek rangsorolva aszerint, mennyit lendítenek az eredményen.

## Miért fontos

Minden gazdasági modell becsléseken nyugszik — megtakarított idő, felvétel, egységköltségek. Az egészségügyi technológiaértékelés nem fogad el pontbecslést („a ROI 340%") annak bizonyítéka nélkül, hogy a következtetés ellenáll a bemenetekről való észszerű vitának. A tornádódiagram megmondja a döntéshozónak, *melyik feltevést kell megvizsgálnia*: ha az eset csak akkor működik, ha a leginkább vitatott paraméter az optimista végén áll, azt mindenki azonnal látja.

Ez az egészséggazdaságtanból a szoftveres üzleti esetekre leginkább átvihető szokás.

## A matematika

Minden p paraméterre, amelynek hihető tartománya [p_low, p_high]:

```
Result_low  = model(p = p_low,  all others at base case)
Result_high = model(p = p_high, all others at base case)
Swing(p)    = |Result_high − Result_low|
```

Rangsorold a paramétereket a kilengés szerint; rajzolj vízszintes sávokat az alapesetbeli eredmény körül. Változatok: kétutas DSA (két paraméter változtatása rácson), küszöbelemzés (a paraméterérték megkeresése, ahol a döntés átfordul).

## Kidolgozott példa

MI-kódolássegéd 200 fejlesztőnek. Alapeset: 39 £/fejlesztő/hó licenc; 30 perc/fejlesztő/nap megtakarítás; 60 £/óra teljes költség; 220 munkanap.

```
Base-case annual benefit = 200 × 0.5h × 220 × £60 = £1,320,000
Annual cost              = 200 × £39 × 12         = £93,600
Base-case net            = £1,226,400
```

Tornádó (egyszerre egy paraméter):

```
Time saved 0.1–1.0 h/day: net = £170,400 … £2,546,400   (swing £2.38M) ← dominates
Loaded cost £40–£80/h:    net = £786,400 … £1,666,400   (swing £0.88M)
Working days 200–240:     net = £1,106,400 … £1,346,400 (swing £0.24M)
Licence £30–£50/mo:       net = £1,248,000 … £1,200,000 (swing £48k)
```

Küszöbelemzés: a nettó haszon nullára esik körülbelül **napi 2,1 perc** megtakarításnál. A döntés érzéketlen a licencárra, és teljes egészében a megtakarított idő becslésén múlik — tehát azt mérd meg, ne a többit. (És ne feledd, hogy az eredmény kapacitás, nem készpénz — lásd [készpénzfelszabadító és nem készpénzfelszabadító](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/).)

## Kapcsolat a szoftverfejlesztéssel

A mérnökök ezt az ösztönt már ismerik „mi van, ha tévedünk X-szel?" formában — a DSA csak rendszeressé és láthatóvá teszi. Tegyél tornádódiagramot minden eszközjavaslatba, kapacitástervbe és építés-vagy-vásárlás elemzésbe. Ez a vitát arról, kinek a megérzése helyes, megegyezéssé alakítja arról, melyik paramétert kell megmérni — gyakran egy kísérleti projekttel, amelynek értéke maga is árazható (lásd [a tökéletes információ várható értéke](../a-tökéletes-információ-várható-értéke/)).

## Buktatók

- **Hízelgésre választott tartományok**: ±10% minden bemenet körül a tényleges bizonytalanságtól függetlenül. A megtakarított idő becslései ±80%-ot érdemelnek; a licencárak ±10%-ot.
- **Az egyszerre egy paraméter módszer elmulasztja a kölcsönhatásokat** — a korrelált paraméterek (felvétel és megtakarított idő) kétutas elemzést vagy teljes [valószínűségi érzékenységvizsgálatot](../valószínűségi-érzékenységvizsgálat/) igényelnek.
- **Az elemzés elvégzése és figyelmen kívül hagyása**: ha a tornádó szerint az eset egyetlen puha számon múlik, a következő lépés a mérés, nem a jóváhagyás.

## Források

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
