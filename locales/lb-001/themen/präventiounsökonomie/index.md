# Präventiounsökonomie

D'Ökonomie vun der Interventioun, ier eng Krankheet optrëtt oder fortschreit. D'Haaptergebnis ass kontraintuitiv: **déi meescht Präventioun spuert kee Geld** — si kaaft Gesondheet zu engem gudde Präis. Dem Cohen, Neumann a Weinstein hir bahnbriechend NEJM-Analyse huet fonnt, datt manner wéi 20 % vun de Präventiounsinterventiounen netto käschtespuerend sinn; de Rescht ass héchstens käschte-effektiv.

## Firwat et wichteg ass

„Präventioun spuert Geld" ass déi meescht widderholl falsch Behaaptung an der Gesondheetspolitik, an Business Cases, déi drop opbauen, ginn vu Gesondheetsökonomen zerfleckt. Déi éierlech Struktur: Präventioun kascht elo Geld (ganz Bevëlkerunge screenen, Risikofaktoren bei Leit behandelen, déi ni krank gi wieren) a bréngt Gesondheet méi spéit zréck — normalerweis zu engem *gudde* Käschten-pro-QALY, heiansdo mat enger Ersparnis, heiansdo zu engem schreckleche Präis. Ze wëssen, a wéi engem Regime een ass, ass d'Analyse. D'Ënnerscheedung ass kommerziell wichteg: e Präventiounsprodukt, dat als „spuert dem NHS Geld" verkaf gëtt, lued en Audit an, deen et wäert verléieren; als „kaaft QALYs fir 4.000 £" verkaf, kann et mat de selwechte Fakte gewannen. Kuckt [Méi fréi Interventioun](../méi-fréi-interventioun/) fir d'Versioun bannent dem Wee. Ier ee e Präventiounsprogramm bewäert, beäntwert den [populatiouns-attribuéierbaren Undeel](../populatiouns-attribuéierbare-undeel/) als éischt d'Gréissefro — wéi vill vun der ugezielter Krankheetslaascht de Risikofaktor, deen de Programm adresséiert, plausibel eliminéiere kéint.

## D'Mathematik

```
Nettokäschte vun der Präventioun (pro Persoun) =
    Interventiounskäschten × jiddereen, deen behandelt gëtt
  − vermeid nodeeleg Käschten × déi puer, déi fortgeschratt wieren
  (béid diskontéiert — déi vermeide Käschte sinn Joren ewech; kuckt
   discounting-and-time-preference.md)

Käschtespuerend verlaangt: Interventiounskäschten < P(Progressioun) × vermeid Käschten × Diskontfaktor
Käschte-effektiv verlaangt just: Nettokäschten / gewonnene QALYs < Schwellewäert
```

De Präventiounsparadox: Interventiounskäschte multiplizéieren sech iwwer déi ganz Bevëlkerung; Notzen fale just bei de kontrafaktesche Wéinegen un.

## Berechent Beispill

Eng App fir Bluttdrockmanagement, ugebueden 100.000 Erwuessenen mat Risiko, 25 £/Persoun/Joer. Iwwer 10 Joer verhënnert si 400 Schlaganfäll (jidderee kascht 45.000 £ diskontéiert a 3 verluerene QALYs).

```
Käschten:  100.000 × 25 £ × 10 Joer (diskontéiert ≈ ×8,3) ≈ 20,8 Mio. £
Offsets:   400 × 45.000 £ = 18,0 Mio. £
Nettokäschten ≈ 2,8 Mio. £ — NET käschtespuerend

Gewonnen QALYs = 400 × 3 = 1.200
Käschte pro QALY = 2,8 Mio. / 1.200 ≈ 2.300 £/QALY — aussergewéinlech käschte-effektiv
```

Selwecht Programm, béid Wourechten: et verléiert 2,8 Mio. £ u Cash a kaaft Gesondheet zu engem Zéngtel vum NICE-Schwellewäert. Op der zweeter Zuel finanzéieren; ni déi éischt verspriechen.

## Bezuch zur Softwareentwécklung

Shift-left-Qualitéit ass Präventiounsökonomie, Virbehalt abegraff. Reviews, Tester a statesch Analys wenden Käschten op *all* Ännerung un, fir Problemer bei de Wéinegen ze fänken, déi zu Produktiounsincidenter fortgeschratt wieren. D'Defekt-Käschtekurve (10–100× pro Phas) spillt d'Roll vun de Schlaganfallkäschten — an dem éierleche Schluss entsprécht dee vun der Gesondheet: Shift-left ass normalerweis käschte-*effektiv*, net automatesch käschte-*spuerend*, well déi meescht markéiert Problemer ni Incidenter gi wieren (de Problem vun de kontrafaktesche Wéinegen). Rechent et aus: Gesamtkäschte vum Gate pro Period géint tatsächlech vermeidenen Incidenter × Incidentkäschten — selwecht Struktur vum berechente Beispill, mat [NNT](../number-needed-to-treat/) als Eenheet pro Fang.

## Falen

- **Käschtespuerniss behaapten, wann d'Evidenz Käschte-Effektivitéit ënnerstëtzt** — den definéierende Feeler vun der Präventiounsfiirsprooch an dësen zwou Domainen.
- **Net diskontéiert zukünfteg Offsets**: Notzen 15 Joer ewech zum Nennwäert.
- **Käschte vun Iwwerdiagnos/Iwwerbehandlung ignoréieren**: Präventioun fënnt och Pseudo-Krankheet — kuckt [Ökonomie vum Screening](../ökonomie-vum-screening/).

## Quellen

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
