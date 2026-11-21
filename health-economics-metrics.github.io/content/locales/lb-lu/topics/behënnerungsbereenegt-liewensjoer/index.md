# Behënnerungsbereenegt Liewensjoer (DALY)

E DALY ass ee verluerent Joer vu gesondem Liewen — de Belaaschtungs-Spigel vum [QALY](../qualitéitsbereenegt-liewensjoer/). Wou QALYs *gewonnen* Gesondheet zielen, zielen DALYs Gesondheet, déi duerch Krankheet *verluer* geet; Interventioune gi mat **vermeidenen** DALYs bewäert.

## Firwat et wichteg ass

Den DALY ass de Global-Health-Standard (WHO, d'Global-Burden-of-Disease-Studie, an déi meescht Gesondheetsministèren a Länner mat niddregem a mëttlerem Akommes plangen an DALYs). Wann deng Software international Gesondheetssystemer, Spender oder WHO-ausgeriichte Programmer unzielt, ass d'Wäertsprooch vermeid DALYs, net gewonnen QALYs. Dem WHO-CHOICE säi historesche Benchmark: eng Interventioun, déi en DALY fir manner wéi 1× BIP pro Kapp vermeit, ass „héich käschteeffektiv", 1–3× BIP pro Kapp „käschteeffektiv" (d'WHO rit elo vun enger starrer Notzung vun dëse Bänner of, awer si bleiwen an der Praxis allgegenwärteg).

## D'Mathematik

```
DALY = YLL + YLD

YLL (Joer vum Liewen verluer)    = Doudesfäll × Standard-Liewenserwaardung am Alter vum Doud
YLD (Joer mat Behënnerung gelieft) = Prävalenz × Behënnerungsgewiicht

Behënnerungsgewiicht ∈ [0, 1], 0 = voll Gesondheet, 1 = gläichwäerteg mam Doud
(Gewiichter publizéiert vun der Global-Burden-of-Disease-Studie)
```

## Berechent Beispill

Eng Screening-Erënnerungs-Plattform an enger Regioun erhéicht d'Fréiherkennung vun enger Krankheet. Jäerlech verhënnert si 10 fréizäiteg Doudesfäll (jidderee verléiert 20 Joer géintiwwer der Standard-Liewenserwaardung) a verhënnert, datt 200 Leit e Joer mat engem Zoustand liewen, dem säi Behënnerungsgewiicht 0,2 ass.

```
Vermeid YLL = 10 × 20        = 200
Vermeid YLD = 200 × 0,2      = 40
Vermeid DALYs               = 240 pro Joer
```

Wann d'Plattform 600.000 $/Joer kascht, sinn d'Käschte pro vermeidenen DALY 600.000 / 240 = **2.500 $**. An engem Land mat BIP pro Kapp vun 8.000 $ ass dat wäit ënnert dem 1×-BIP-Benchmark — „héich käschteeffektiv" am WHO-CHOICE-Sënn.

## Bezuch zur Softwareentwécklung

- Digital Gesondheet, déi op Global-Health-Finanzéierer (Gavi, Global Fund, national Programmer) zielt, soll Impakt als **Käschte pro vermeidenen DALY** ausdrécken — et ass d'Metrik, an där Grant-Reviewer schonn denken.
- Den DALY ass och en nëtzlecht *Belaaschtungs-Comptabilitéits*-Template fir Engineering: Incidenter, flaky Builds a Legacy-Reibung sinn „Joer mat Behënnerung gelieft" fir e Codebase — en toil-gewiichten Belaaschtungsinventar seet, wou Remediatioun déi meescht „gesond Engineering-Joer" kaaft, esou wéi GBD-Belaaschtungstabellen Gesondheetsausgaben leeden.

## Falen

- **Gewonnen QALYs ≠ vermeid DALYs numeresch** — verschidde Gewiichter, verschidde Liewenstabellen, verschidde Konventiounen (DALYs hunn historesch Alters-Gewiichtung an Diskontéierung am Mooss benotzt). Net locker ëmrechnen.
- **BIP-Multipel-Schwellen als Gummistempel benotzen** — d'WHO selwer warnt, datt si Budgeten an Opportunitéitskäschten ignoréieren; kuckt [Zuelungsbereetschaftsschwellen](../zuelungsbereetschaft-schwellewäerter/).
- **Populatiounsskala-DALYs aus Wirksamkeet pro Notzer behaapten** ouni duerch Opnam an Adhärenz ze multiplizéieren — kuckt [Reechwäit an Equity](../reechwäit-a-gerechtegkeet/).

## Quellen

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
