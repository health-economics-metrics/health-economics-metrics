# Budgetimpakt-Analyse (BIA)

D'BIA schätzt, wat d'Adoptioun vun enger Interventioun mat dem **Budget** vun engem spezifeschen Zueler iwwer déi nächst 1–5 Joer mécht. Si äntwert op *Bezuelbarkeet*; Käschte-Effektivitéit äntwert op *Wäert*. Eng Technologie kann exzellente Wäert sinn an trotzdem net bezuelbar — oder bezuelbar a schlechte Wäert. Eescht Bewäertunge verlaangen béides.

## Firwat et wichteg ass

D'Fro vum Finanzdirekter ass ni „wat ass den ICER?" — et ass „wat mécht dat mam Budget vum nächste Joer?" D'ISPOR-Good-Practice-Guidance (de Standard vum Feld) spezifizéiert: d'eege Perspektiv vum Zueler, en 1–5-Joer-Horizont, *net diskontéiert* jäerlech Cashflows, realistesch Opnamkurven a Szenarie- (net probabilistesch) Onsécherheet. NICE verlaangt Budgetimpakt-Informatioun nieft der Käschte-Effektivitéit; e Produkt mat nationalem Budgetimpakt iwwer ~20 Mio. £/Joer an England léist kommerziell Verhandlungen aus, onofhängeg vu sengem ICER.

## D'Mathematik

```
BI_Joer_t = Käschten_Szenario_mat_Neem(t) − Käschten_Szenario_aktuell(t)

Käschten_Szenario(t) = Σ iwwer Patientegruppen:
   berechtegt Bevëlkerung(t) × Opnam(t) × Nettokäschte pro Patient(t)

Nettokäschte pro Patient = Interventiounskäschten − verdrängt Betreiungskäschten + induzéiert Betreiungskäschten
```

Wichteg Modelléierungsentscheedungen: Wuesstem vun der berechtegter Bevëlkerung, d'Opnamkurv (Adoptioun ass ni direkt), wat déi nei Optioun verdrängt, an all Nofro, déi se *induzéiert* (méi einfachen Zougang → méi Notzer).

## Berechent Beispill

E Zueler, deen 2 Mio. Leit decket, iwwerleet en digitaalt Therapeutikum zu 300 £/Patient/Joer; 1,5 % vun de Memberen berechtegt (30.000); Opnam 20 % → 40 % → 60 % iwwer 3 Joer; all Notzer verdrängt 120 £/Joer un aner Betreiung.

```
Nettokäschte pro Notzer = 300 − 120 = 180 £

Joer 1: 30.000 × 0,20 × 180 = 1,08 Mio. £
Joer 2: 30.000 × 0,40 × 180 = 2,16 Mio. £
Joer 3: 30.000 × 0,60 × 180 = 3,24 Mio. £
```

Och wann den ICER vum Produkt e stellare 8.000 £/QALY ass, muss den Zueler bis Joer 3 3,24 Mio. £ u *neiem Geld* fannen — déi verdrängt 120 £ si dënn iwwer aner Budgetzeilen verdeelt a gi net als Cash fräigesat (kuckt [cash-fräisetzend vs. net cash-fräisetzend](../cash-fräisetzend-vs-net-cash-fräisetzend-ersparnisser/)). Dofir sinn Wäert pro Eenheet a Bezuelbarkeet separat Hürden.

## Bezuch zur Softwareentwécklung

D'BIA ass genau dat CFO-gerichtent Komplement zu enger ROI-Behaaptung pro Sëtz: „et ass käschte-effektiv pro Entwéckler, awer kënne mir eis en organisatiounsweite Rollout dëst Fiskaljoer leeschten?" Lizenzstufen, eng Adoptiouns-S-Kurv, verdrängt Tooling-Ausgaben, déi nëmmen cash-fräisetzen, wann al Kontrakter wierklech auslafen, an induzéiert Notzung (méi bëlleg CI → méi CI) modelléieren. Eng 3-Joer-Budgetimpakt-Tabell nieft dem ROI ze presentéieren mécht e Enterprise-Tooling-Virschlag finanziell glaubwürdeg. E publizéierte Budgetimpakt-Total iwwer Site, Kohorten oder Fiskaljoren opzedeelen — a mat de Deeler genau op déi publizéiert Zuel ofzeglächen — ass genau [Exact-Cents-Käschteverdeelung](../exact-cents-käschteverdeelung/); déi villen Zeilen, déi de Total fidderen, ze summéieren ass [währungssécher Käschte-Rollup](../währungssécheren-käschte-rollup/).

## Falen

- **Instant-Opnam-Fantasie**: Joer-1-Impakt bei Steady-State-Adoptioun berechent.
- **Verdrängt Käschten als Cash zielen**, wann et diffus Kapazitéit ass.
- **Induzéiert Nofro ignoréieren** — Zougangsverbesserunge loossen d'Notzung vun der berechtegter Bevëlkerung wuessen.
- **BIA- an CEA-Horizonter/Diskontéierung vermëschen**: BIA ass per Design kuerzfristeg, net diskontéiert, zuelerspezifesch.

## Quellen

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
