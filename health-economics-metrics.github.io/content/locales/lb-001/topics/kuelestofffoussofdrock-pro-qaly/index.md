# Kuelestofffoussofdrock pro QALY

Kuelestoff pro QALY ass e Effizienzverhältnis — d'Kuelestoffemissioune vun enger Interventioun (oder vermeid Emissiounen) gedeelt duerch d'QALYs, déi se liwwert — direkt analog zu Käschte pro QALY, sou datt d'Kuelestoffeffizienz vun enger Interventioun nieft hirer Käschteeffizienz bewäert ka ginn. En „kuelestoffajustéierte Nettomonetären Notzen" geet ee Schrëtt weider, monetiséiert den Kuelestoffimpakt mat de offiziellen net-gehandelte Kuelestoffwäerter vum UK Green Book a verrechent en mam Standard-[Nettomonetären Notzen](../nettomonetären-notzen/).

## Firwat et wichteg ass

NICE an NHS England erwaarden elo, datt Émweltimpakt nieft Käschten a QALYs berécksiichtegt gëtt. Den NHS huet eng ëffentlech Net-Zero-Verflichtung: Net Zero fir seng direkt Emissiounen bis 2040, a Net Zero fir säi ganzen Supply-Chain-Foussofdrock bis 2045. Dem NICE säi Handbuch fir Gesondheetstechnologie-Evaluatiounen (PMG36) referenzéiert Émweltnohaltegkeet als opkomme Considératioun an der Technologiebewäertung. Fir en digitaalt Gesondheetsprodukt heescht dat, datt Kuelestoff zu enger véierter Säul vum Wäertfall gëtt, nieft Käschten, QALYs an [Dominanz op der Effizienzfrontière](../dominanz-an-effizienzfrontière/) — keen Ersatz fir ee vun deenen, awer eng Dimensioun, déi e gutt gebauten Business Case ëmmer méi muss mellen.

## D'Mathematik

```
Kuelestoff pro QALY = Gesamtemissiounen_Tonnen_CO2e / Gesamt_QALYs
  (e negative Wäert heescht Netto-Emissioune VERMEID pro gewonnene QALY — en
  Duebelgewënn: besser Gesondheet a manner Kuelestoff)

Monetiséierte Kuelestoffimpakt = Emissiounen_Tonnen_CO2e × Kuelestoffwäert_pro_Tonn
  (negativ Emissiounen × positive Wäert = eng negativ Käschte, also e Virdeel)

Kuelestoffajustéierten NMB = Nettomonetären_Notzen − monetiséierte_Kuelestoffimpakt
```

Dat erweidert d'Idee vun der Käschten/QALY-Effizienzfrontière ëm eng zweet Achs — Kuelestoff pro QALY — déiselwecht „all Optioun plotten a kucken, wat dominéiert gëtt"-Logik wéi bei [Dominanz an Effizienzfrontière](../dominanz-an-effizienzfrontière/), ugewannt op Kuelestoff amplaz vun Käschten.

## Berechent Beispill

En Telehealth-Service ersetzt Besich vir Plaz, vermeit 5.000 Autosfahrte/Joer zu ongeféier 8 kg CO2e jidderee — 40 Tonne CO2e vermeid, als negativ Emissiounszuel duergestallt (−40,0 Tonnen), a liwwert 25 QALYs/Joer:

```
Kuelestoff pro QALY = −40,0 / 25,0 = −1,6 Tonne CO2e vermeid pro gewonnene QALY
```

Mat dem net-gehandelte Kuelestoffwäert vum Green Book (illustrativ Zuel, 2023 net-gehandelte Zentralwäert ≈ 269 £/Tonn CO2e — d'Green Book aktualiséiert Kuelestoffwäerter jäerlech, nei verifizéieren, éier se an enger liewer Analyse zitéiert ginn):

```
Monetiséierte Kuelestoffimpakt = −40,0 × 269 £ = −10.760 £
```

Eng „Käschte" vu −10.760 £ ass e Virdeel vun 10.760 £. Wann dem Intervention säin eegestännegen Nettomonetären Notzen 500.000 £ ass:

```
Kuelestoffajustéierten NMB = 500.000 £ − (−10.760 £) = 510.760 £
```

D'Kuelestoffersparnis füügt dem Fall derbäi amplaz him ofzenämmen — dee Duebelgewënn, deen d'Negativ-Emissiounen-Framing sichtbar maache soll.

## Bezuch zur Softwareentwécklung

Dat ass eng aktuell Schnëttstell mat der KI-/Cloud-Ökonomie: de Compute-Kuelestofffoussofdrock vum Trainéieren a Betreiben vun engem KI-Modell ass elo eng richteg Zeil an der NHS-Beschaffung, well NHS-Liwwerantekontrakter iwwer bestëmmte Schwellen e Carbon Reduction Plan verlaangen. [Cloud-Unit-Economics](../cloud-unit-economics/) verfollegt schonn d'Käschten pro Eenheet Compute-Output; Kuelestoff pro QALY ass d'natierlecht Template fir eng zukünfteg „Kuelestoffkäschte pro Inferenz"-Metrik, déi dat Modul an d'Inferenz-Unit-Economics an d'Émweltdimensioun erweidert, och wann dës Metrik nach net existéiert.

## Falen

- **Scope-Grenz-Manipulatioun**: nëmmen direkt (Scope-1-)Emissiounen zielen an Supply-Chain-Emissiounen (Scope 3) ausschléissen, déi normalerweis de Gros vum tatsächlechen Foussofdrock vun engem digitale Gesondheetsprodukt sinn.
- **E vereelzte Kuelestoffwäert notzen**: d'Green Book aktualiséiert seng net-gehandelte Kuelestoffwäerter jäerlech, also muss all zitéiert £/Tonn-Zuel datéiert ginn, net als fixe Konstant zitéiert.
- **„Kuelestoffeffizient" als Ersatz fir „käschteeffektiv" behandelen**: eng Interventioun mat wéineg Kuelestoff a wéineg Wäert ass trotzdem e schlechte Gebrauch vun NHS-Ressourcen. Kuelestoff ass eng véiert Säul nieft Käschten a QALYs, keen Ersatz fir ee vun deenen.

## Quellen

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
