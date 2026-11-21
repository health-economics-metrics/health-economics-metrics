# Valószínűségi érzékenységvizsgálat (PSA)

A PSA minden bizonytalan paraméterhez valószínűségi eloszlást rendel, mindet egyszerre mintavételezi több ezerszer (Monte-Carlo), és azt a *valószínűséget* közli, hogy egy lehetőség a legjobb választás — egyetlen pontbecslés helyett.

## Miért fontos

A NICE referenciaesete *megköveteli* a PSA-t. A determinisztikus elemzés azt válaszolja meg, hogy „mi van, ha egy bemenet téves?"; a PSA azt, hogy „mindazzal együtt, amit egyszerre nem tudunk, mekkora a valószínűsége, hogy jól döntünk?" Jellegzetes kimenete, a **költséghatékonysági elfogadhatósági görbe (CEAC)** a lehetőség költséghatékonyságának valószínűségét ábrázolja a fizetési hajlandósági küszöb függvényében — az „ICER 24 000 £/QALY" mondatot „78% az esélye, hogy ez a helyes választás 30 000 £/QALY-nál" mondattá alakítva.

## A matematika

```
For each of N draws (N ≈ 10,000):
  sample every parameter θ from its distribution
    (costs ~ Gamma, probabilities ~ Beta, utilities ~ Beta, effects ~ Normal/logNormal)
  compute NMB_j(θ) = λ × Effect_j(θ) − Cost_j(θ) for each option j

CEAC_j(λ) = fraction of draws in which option j has the highest NMB at threshold λ
```

Az NMB-ről lásd [nettó pénzbeli haszon](../nettó-pénzbeli-haszon/), a λ-ról [fizetési hajlandósági küszöbök](../fizetési-hajlandósági-küszöbök/).

## Kidolgozott példa

Platformmigrációs üzleti eset. Három bizonytalan bemenet:

```
Migration cost      ~ Gamma,  mean £800k, sd £200k
Annual benefit      ~ Normal, mean £350k, sd £150k
Benefit duration    ~ Uniform, 3–6 years
```

10 000 mintavételre számítsd ki a nettó hasznot = időtartam × éves − költség (a diszkontálást az áttekinthetőségért elhagyva). Szemléltető eredmények:

```
Mean net benefit:      £775k
Probability net > 0:   0.86
5th–95th percentile:  −£180k … +£1.9M
```

A pontbecslés azt mondta: „nyilvánvalóan igen." A PSA azt mondja: „86% igen, valós farokkal, ahol 180 ezer £-nál is többet veszítünk" — és erre van valóban szüksége egy portfóliótulajdonosnak, és ez árazza a felderítő spike előzetes lefuttatásának érvét is (lásd [EVPI](../a-tökéletes-információ-várható-értéke/)).

## Kapcsolat a szoftverfejlesztéssel

A mérnökök már megbíznak a Monte-Carlóban a szállítás előrejelzésében (az áteresztőképesség-mintavételezés jobb a pontbecsléseknél). Terjeszd ki ugyanezt a gépezetet a pénzre: eloszlások a felvételre, a megtakarított időre és a fizetésre, majd közöld a „valószínűséget, hogy ez a platformbefektetés nettó pozitív", a hamis pontosságú ROI helyett. Egy CEAC-stílusú görbe — a legjobb lehetőség valószínűsége annak függvényében, hogyan értékeli a szervezet egy mérnökórát — valóban jobb lelet egy finanszírozó bizottságnak bármely egyetlen számnál.

## Buktatók

- **Szemét eloszlások**: a kitalált szórásokkal végzett PSA laborköpenybe bújtatott determinisztikus elemzés. A szórásokat adatokra vagy strukturált szakértői kikérdezésre alapozd.
- **A paraméterek közötti korreláció figyelmen kívül hagyása** (a magas felvétel általában korrelál a magas megtakarított idővel); a független mintavétel alábecsüli a farokkockázatot.
- **Csak a szimuláció átlagának közlése** — az egész lényeg az eloszlás és a döntési valószínűség.

## Források

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
