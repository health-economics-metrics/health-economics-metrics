# Technesch Schold

Technesch Schold sinn déi implizit zukünfteg Käschte vu bequemen Entscheedungen aus der Vergaangenheet an engem Codebase: déi geschëllt Remediatiounsaarbecht (**Principal**) an de lafenden Zuch, deen se op d'Liwwerung ausübt (**Zënsen**). Quantifizéierungsmethoden wéi SQALE maachen dovun vun enger Metapher eng bewäert Verflichtung.

## Firwat et wichteg ass

Net quantifizéiert ass Tech-Schold e Gejammer; quantifizéiert ass et e Business Case. Industrie-Basislinnen (CAST Appmarq, 1.400 Apps / 550 Mio. LOC): historesch ≈ **3,61 $ u technescher Schold-Principal pro Zeil Code**, mat typesche Codebase, déi e Scholdverhältnis vu 15–20 % vun de Rebuild-Käschte droen, géint eng gängeg benotzt Gesondheetslatte vun ≤5 % (dem SonarQube seng „A"-Note). D'gesondheetsökonomesch Rummen passt genau: Schold ass eng *chronesch Krankheet* — onbehandelt schreit se fort, hir „Zënsen" kumuléieren als méi lues Liwwerung a méi héich Defektraten, an d'Remediatioun konkurréiert ëm Kapazitéit géint Featureaarbecht, genau wéi Präventioun géint Behandlung konkurréiert.

## D'Mathematik

```
SQALE-Principal   = Σ iwwer Verstéiss (Remediatiounszäit) × Entwéckler-Käschtesaz
Technescht Scholdverhältnis (TDR) = Remediatiounskäschten / Neientwécklungskäschten × 100
                    (SonarQube-Noten: A ≤ 5 %, B ≤ 10 %, C ≤ 20 %, D ≤ 50 %)

Zënsen (d'Zuel, déi d'Ofbezuelung rechtfäerdegt):
  Zënsen/Joer = Δ Liwwergeschwindegkeet × Wäert pro Eenheet Geschwindegkeet
              + Δ Defektrate × Käschte pro Defekt
Ofbezuelungsfall = PV(vermeidene Zënsen iwwer Horizont) − Remediatiounskäschten
                   (diskontéiert — kuckt discounting-and-time-preference.md)
```

De Principal stellt d'Verflichtung fest; **Zënse** maachen den Investitiounsfall. 500.000 £ Principal ze bezuelen, fir 40.000 £/Joer Zënse ze vermeiden, ass e schlechten Deal; fir 400.000 £/Joer exzellent.

## Berechent Beispill

Eng 400k-LOC-Integratiounsschicht fir klinesch Dossieren: SQALE-Principal 3.800 Stonnen × 75 £ = **285.000 £**; TDR ≈ 12 % (Note C). Gemoosse Zënsen: Teams, déi un dëser Schicht schaffen, weisen 40 % méi laang Zyklus-Zäiten an 2× Change-Failure-Raten géintiwwer der Basislinn vum Bestand. D'Schicht absorbéiert 6.000 Entwéckler-Stonnen/Joer:

```
Zënsen ≈ 6.000 × 0,40 × 75 £        = 180.000 £/Joer (Geschwindegkeetszuch)
       + 12 zousätzlech Feeler × 8.000 £ = 96.000 £/Joer (Nuarbecht/Incidenter)
       ≈ 276.000 £/Joer

Déi schlëmmst 30 % vum Principal remediéieren (85.000 £), mat Zil op Hotspots → modelléiert
Zënsreduktioun 60 %: spuert ~166.000 £/Joer. Amortisatioun ≈ 6 Méint.
```

D'Hotspot-Zilsetzung ass wichteg: d'Scholdzënse konzentréieren sech, wou Ännerungsfrequenz × Scholddicht am héchsten ass — selte beréiert Schold remediéieren bréngt näischt, wéi eng Krankheet ze behandelen, déi ni fortgeschratt wier ([Präventiounsökonomie](../präventiounsökonomie/)).

## Bezuch zur Softwareentwécklung

D'gesondheetsökonomesch Importer, déi Tech-Schold-Argumenter upgraden: de Bestand als **Belaaschtungsinventar** ausdrécken ([DALY](../behënnerungsbereenegt-liewensjoer/)-Stil — wou sinn déi verluere gesond Ingenieursjoren?); d'Ofbezuelung mat Progressiounsmathematik begrënnen, éierlech (normalerweis käschte-effektiv, net käschtespuerend); d'Remediatioun vun de schlëmmste Systemer mam [Schwéiergrad-Defizit](../qaly-defizit-a-schwéiergrad-modifikatoren/) gewichten; a grouss Remediatiounsvirschléi mat enger Offset-Analyse aginn, déi d'Regele vun de [vermeidene nodelege Käschte](../vermeid-nodeeleg-käschten/) iwwerlieft — wahrscheinlechkeetsgewiicht, diskontéiert, eemol gezielt.

## Falen

- **Principal-only-Reporting**: eng grouss schrecklech Zuel ouni Zënsschätzung rechtfäerdegt näischt.
- **Tool-generéiert Scholdzuelen wuertwiertlech geholl**: SQALE zielt Regelverstéiss; et verpasst architektonesch Schold (déi deier Aart) a ziilt Kleeglechkeeten.
- **Schold-Null-Utopismus**: dat optimaalt Scholdniveau ass net null — Schold ass Hiewel; d'Fro ass de Zënssaz.
- **„De Rewrite vermeit alles dovun"**: Rewrite-Virschléi mussen déiselwecht Offset-Regele erfëllen — kontrafaktesch Käschten, Wahrscheinlechkeet, Diskontéierung.

## Quellen

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
