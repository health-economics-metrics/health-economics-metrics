# Gesondheetstechnologie-Bewäertung (HTA)

HTA ass de formellen, institutionaliséierte Prozess, mat deem Gesondheetssystemer entscheeden, ob eng Technologie — Medikament, Gerät oder Software — et wäert ass, bezuelt ze ginn. Si kombinéiert klinesch Wirksamkeetsevidenz mat ökonomescher Evaluatioun ënner enger publizéierter, obligatorescher Methodologie.

## Firwat et wichteg ass

Wann dir un en nationale Gesondheetsdingscht verkaaft, kann eng HTA-Instanz wuertwiertlech Ären Maartzougang entscheeden. De lokale Prozess ze kennen heescht, de richtege Wäert-Regulator ze kennen:

- **NICE (England)**: gesetzlech Bewäertunge ënnert engem definéierte *Referenzfall* — QALYs aus [EQ-5D](../eq-5d/), NHS+PSS-[Perspektiv](../analyseperspektiv/), 3,5 % [Diskontéierung](../diskontéierung-an-zäitpräferenz/), [PSA](../probabilistesch-sensitivitéitsanalyse/) erfuerdert — beurteelt géint 20k–30k £/QALY mat [Schwéieregrad-Modifikatoren](../qaly-defizit-a-schwéiergrad-modifikatoren/); héich spezialiséiert Technologien bis 100k £+ mat Gewiichtung.
- **ICER (US, net-gouvernemental)**: Evidenzrapporten mat engem *Health-Benefit-Price-Benchmark* — de Präis, bei deem e Produkt bei 100k–150k $ pro QALY/evLYG käschteeffektiv wier — als Verhandlungshiewel benotzt; plus Budgetimpakt-„Bezuelbarkeets-Alerten".
- **Kanada (CADTH → CDA-AMC)**: Rembourséierungs-Reviews bei ≈50k CAD$/QALY; huet historesch Präiskierzunge bei ~95 % vun de Soumissioune gefrot.

## D'Mathematik

D'Kraaft vun der HTA ass keng Formel, mee eng **mandatéiert Method**: all Soumissioun berechent dee selwechten [ICER](../inkrementellt-käschte-effektivitéitsverhältnis/) ënner de selwechte Referenzfall-Reegelen, sou datt Resultater iwwer Produkter a Joren vergläichbar sinn. De Referenzfall spezifizéiert Outcome-Mooss, Utilitéitsinstrument, Perspektiv, Komparator-Auswiel, Diskontsaz, Zäithorizont an Onsécherheetsanalys — an hëlt all Fräiheetsgrad ewech, dee e Sponsor kéint manipuléieren.

## Berechent Beispill

En digitaalt Therapeutikum reecht an eng NICE-Stil-Evaluatioun an:

```
Modell: ΔC = +450 £/Patient, ΔE = +0,03 QALYs → ICER = 15.000 £/QALY ✓ ënner 20k
Referenzfall-Kontrollen:
  Utilitéite vum EQ-5D-5L mat UK-Value-Set                ✓
  Komparator = aktuelle Betreiungspfad (net „keng Behandlung") ✓
  PSA: 71 % Wahrscheinlechkeet käschteeffektiv bei 20k £  ✓ (gemellt)
  Schwéieregrad-Modifikator: Shortfall ënner ×1,2-Grenzen — keen behaapt
Recommandatioun: Routine-Commissioning, mat Real-World-Datensammlung.
```

Dem Sponsor seng eege bevorzugt Analyse huet 9.000 £/QALY gewisen; de Referenzfall huet se op 15.000 £ gedréckt, andeems en de éierleche Komparator erzwong huet. Dës Lück ass, *firwat* et Referenzfäll gëtt.

## Bezuch zur Softwareentwécklung

D'iwwerdroebart Artefakt ass de **internen Referenzfall**: eng mandatéiert Method fir all Tooling-/Plattform-Business-Cases — deklaréierte Komparator, Standard-Stéckkäschten (kuckt [National Tariff a Stéckkäschten](../nationalen-tarif-a-stéckkäschten/) fir d'Muster), fixen Diskontsaz, obligatoresch Sensitivitéitsanalys, Standardtemplate. En „AMCP-Dossier fir Tools", dee bei engem Plattform-Rot ageréckt gëtt, mécht Virschléi vergläichbar a Manipulatioun siichtbar, genau wéi d'HTA et fir d'Medizin mécht. Méi kleng ufänken wéi NICE: en Zwee-Säite-Template plus e publizéierte Präis-Buch schléit kee Standard.

Fir wéi e Méi-Zyklus-HTA-Modell tatsächlech Kohort fir Zyklus simuléiert gëtt, kuckt [Markov-Kohortesimulatioun](../markov-kohortesimulatioun/).

## Falen

- **HTA als Formalitéit no der reglementarescher Zertifizéierung behandelen** — CE/UKCA/FDA-Zertifizéierung seet, datt e Produkt sécher ass; HTA entscheet, ob et *wäert ass ze kafen*. Aner Hürd, aner Evidenz.
- **Dat ökonomescht Modell no der Studie bauen** — d'Evidenzgeneratioun soll rückwärts aus de Fuerderunge vum Referenzfall designt ginn.
- **Jurisdiktiounsënnerscheeder ignoréieren**: en ICER, deen an den USA bei 120k $/QALY finanzéierbar ass, fält bei NICE bei 30k £ duerch; Evidenz a Präisser pro Maart plangen.

## Quellen

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
