# Käschte-Minimiséierungs-Analyse (CMA)

D'CMA vergläicht nëmmen Käschten a pickt déi bëllegst Optioun — legitim *nëmmen*, wann d'Outcomes vun den Alternativen als äquivalent bewisen goufen.

## Firwat et wichteg ass

D'CMA ass déi einfachst Analyse an déi meescht mëssbraucht. D'Äquivalenzbehaaptung mécht déi ganz Aarbecht: wann Outcomes wierklech net ënnerscheeden (e Biosimilar vs. säin Originator; zwee Liwwerante vum selwechte Service, déi dee selwechte Spec erfëllen), ass Käschte déi eenzeg Fro an d'CMA ass korrekt. D'Rigueur läit doran, d'Äquivalenz als éischt ze *beweisen* — typesch iwwer eng Net-Ënnerleeënheets-Studie mat vireg spezifizéierter Marge — genau dee Schrëtt, deen d'Keefer normalerweis iwwersprangen.

## D'Mathematik

```
Gegeben Evidenz, datt Effekt_A ≈ Effekt_B (bannent vireg spezifizéierter Marge δ):
Wiel min(Käschten_A, Käschten_B)

Käschte aus der selwechter Perspektiv, iwwer deeselwechten Horizont gemoss,
inklusiv Wiessel-/Iwwergangskäschten.
```

Wann Äquivalenz net beleet ka ginn, ass d'CMA ongülteg — amplaz [CEA](../käschte-effektivitéits-analyse/)/[CUA](../käschte-notzwäert-analyse/) benotzen.

## Berechent Beispill

En Trust wielt tëscht zwou Videokonsultatiouns-Plattformen. E 3-Méint-Parallelpilot weist Ofschlossquoten 94,1 % vs. 93,8 %, Patientenzefriddenheet 4,4 vs. 4,4 — Ënnerscheeder bannent dem vireg ofgemaachten δ vun 2 Prozentpunkten. Outcomes: äquivalent. Käschten iwwer 3 Joer:

```
                     Plattform A    Plattform B
Lizenzen             360.000 £      210.000 £
Integratioun         80.000 £       150.000 £
Training/Support     60.000 £       90.000 £
Total                500.000 £      450.000 £
```

Plattform B gewënnt ëm 50.000 £ — *och* mat senge méi héije Integratiounskäschten. Ouni de Pilot géif d'Äquivalenzbehaaptung op Vendor-Brochüren berouen, an en Ënnerscheed vun 1 Punkt bei der Ofschlossquote (≈ dausende gescheitert Consultatioune/Joer) géif 50.000 £ iwwerwiegen.

## Bezuch zur Softwareentwécklung

D'CMA ass déi formell Form vun der Commodity-Beschaffung: zwee CI-Provider mat identesche SLOs, zwee Object-Stores mam selwechte Durabilitéits-Spec. D'Lektioun aus der Gesondheetsökonomie ass d'*Reiefolleg vun den Operatiounen*: als éischt Äquivalenz beleeën (Benchmark géint deng Workload, Pilot géint deng SLOs, mat vireg ofgemaachter Marge), dann d'Gesamtkäschten inklusiv Migratioun vergläichen. „Si si praktesch dat selwecht, B ass méi bëlleg" ouni dee éischte Schrëtt ass, wéi Organisatioune dat Tool kafen, dat 10 % méi bëlleg a 40 % méi schlecht ass. Korollar: wann e Vendor iwwer de Präis argumentéiert, loossen en Äquivalenz stipuléieren — et bënnt och an déi aner Richtung.

## Falen

- **Ugeholl Äquivalenz** — d'definéierend Sënn; Feele vun Evidenz fir en Ënnerscheed ass keng Evidenz fir Äquivalenz (ënnerdimensionéiert Piloten „weisen" Äquivalenz gratis).
- **Wiesselkäschte weglooss** — Migratioun, Ëmschoulung a Parallelbetrib gehéieren op d'Käschtesäit.
- **Äquivalenz bei de falsch Outcomes**: äquivalent bei der gemoossener Metrik, anescht bei enger, déi zielt (Accessibilitéit, Tail-Latenz, Daten-Egress).

## Quellen

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
