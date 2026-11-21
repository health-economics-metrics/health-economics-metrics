# Dem Däitschland säin DiGA-Fast-Track

DiGA (Digitale Gesundheitsanwendungen) ass dem Däitschland säi gesetzleche „Apps op Rezept"-Pfad — dat éischt nationaalt System op der Welt, wou Dokteren zougelooss Gesondheets-Apps verschreiwen an déi gesetzlech Krankeversécherung se rembourséiere muss. Et ass dat féierend Live-Experiment, fir digital Therapeutika op nationaler Skala ze bezuelen.

## Firwat et wichteg ass

DiGA huet d'Fro beäntwert, déi sech all digital Gesondheetsfirma stellt — „wie bezilt dann tatsächlech?" — mat Gesetzgebung (dem DVG, 2019). Den Design ass bemierkenswäert:

- **Séier Entscheedung**: BfArM (de Regulator) muss bannent 3 Méint entscheeden.
- **Provisoresch Lëschtung**: Apps kënnen 12 Méint lang gelëscht ginn, *wärend se nach Evidenz generéieren* — Ëmsaz verdéngen während hirer Pivotal-Studie.
- **Evidenz-Delai**: e „positiven Versuergungseffekt" beweisen (medezinesche Notzen, oder patientenrelevant strukturell/prozedural Verbesserung) iwwer eng Verglächsstudie — normalerweis en RCT — oder aus der Lëscht geholl ginn. Ongeféier d'Halschent vun de provisoresche Aträg gëtt net permanent.
- **Präisser**: de Hiersteller setzt de Joer-1-Präis fräi; duerno gëtt mam Spëtzeverband vun de Krankekeese verhandelt. Mediane Ufanks-3-Méint-Präisser bei ongeféier 500 €; performancebaséiert Präiselementer kommen ab 2026.

Maartrealitéitscheck (Fuerschung bis Enn 2024): ~68 Apps gelëscht, >1 Mio. kumuléiert Verschreiwungen, ~81 % vun de Verschreiwunge aktivéiert, ~234 Mio. € kumuléiert Versécherer-Ausgaben — e reelle Maart, awer bescheiden am Verglach zum Hype, an d'Adhärenz no der Aktivéierung bleift de schwaache Punkt.

## D'Mathematik

D'kommerzielle Modell, dat all DiGA-Grënner ausrechent:

```
Ëmsaz = Verschreiwungen × Aktivéierungsquote × Präis pro Verschreiwungszäitraum
Evidenzkäschten = Pivotal-RCT (typesch 1–3 Mio. €) bannent dem 12-Méint-Fënster
Erwaarte Wäert = P(Evidenz gelingt) × Steady-State-Ëmsaz − Evidenzkäschten

Mat ~50 % Konversiounsfehlerquot muss P éierlech bewäert ginn — d'Halschent vum
Feld gëtt d'RCT-Geld aus an verléiert d'Lëschtung.
```

## Berechent Beispill

Eng Depressiouns-Management-App gëtt provisoresch zu 450 €/Quartal gelëscht:

```
Joer 1: 20.000 Verschreiwungen × 81 % Aktivéierung × 450 € ≈ 7,3 Mio. € Ëmsaz
RCT-Käschten: 2 Mio. €, parallel lafend
Resultat A (Evidenz positiv): permanent Lëschtung, verhandelte Präis ~380 €,
  Steady State 60.000 Rezepter/Joer ≈ 18,5 Mio. €/Joer
Resultat B (Evidenz feelt): am Mount 12 aus der Lëscht geholl; Ëmsaz hält op.
```

D'Provisoresch Joer finanzéiert d'Evidenzgeneratioun — d'Kärinnovatioun vum Pfad. Kontrastéiert déi traditionell Reiefolleg (Evidenz als éischt, Ëmsaz Joren drop), déi genau d'Produkter verhungere léisst, déi DiGA wëll, datt et gëtt.

## Bezuch zur Softwareentwécklung

Dem DiGA säi Muster — **provisoresch Adoptioun mat engem vireg registréierte Succès-Metrik an engem automateschen Sunset** — ass direkt fir d'Governance vun Engineering-Tools kopéierbar: d'Tool 12 Méint un Produktiounsnotzer liwweren, d'Metrik vireg registréieren (gemoossen agespuert Zäit, Incident-Reduktioun), automatesch auslafen, ausser d'Evidenz kënnt un. Et léist de Pilot-Paradox (Tools, déi Skala brauchen, fir Wäert ze beweisen, kréie ni Skala), ouni onbewisener Technologie permanent Tenure ze ginn. Déi 81-%-Aktivéierungs-/niddreg-Adhärenz-Daten droen och eng Produktlektioun: Verschreiwung (oder Exekutiv-Mandat) bréngt Installatiounen; nëmme Produktqualitéit bréngt nohalteg Notzung — kuckt [Adhärenz a Persistenz](../adhärenz-a-persistenz/).

## Falen

- **D'Lëschtung als Zillinn behandelen** — Verschreiwunge brauchen Verschreiwer-Vertrauen; vill gelëscht DiGAs gesinn vernoléissegbart Volumen.
- **Déi Pivotal-Studie ënnerdimensionéieren**, fir Geld am Ëmsazjoer ze spueren — déi falsch Ekonomie, déi vill vun der 50-%-Feelerquote erkläert.
- **D'Modell ouni de Zueler iwwerdroen**: DiGA funktionéiert, well d'Rembourséierung gesetzlech ass; eng Kopie ouni mandatéiert Zuelung ass just e Pilotprogramm.

## Quellen

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
