# Zuelungsbereetschaft-Schwellewäerter

E Zuelungsbereetschaft-(WTP-)Schwellewäert ass dat Maximum, dat en Entscheedungsträger pro Eenheet Gesondheetsgewënn bereet ass ze bezuelen — d'Linn, déi en [ICER](../inkrementellt-käschte-effektivitéitsverhältnis/) an eng Adoptéieren-/Oflehnen-Entscheedung ëmwandelt.

## Firwat et wichteg ass

De Schwellewäert ass, wou d'Gesondheetsökonomie ophält mat Moossung a Politik gëtt. All nationale System huet een, explizit oder implizit, an de lokalen Wäert ze kennen seet Iech genau, wéi eng Gesondheetswäert-Behaaptung ze präisen ass:

| Organ | Schwellewäert (wéi recherchéiert, 2024–2025) |
|---|---|
| NICE (England) | 20.000–30.000 £ pro QALY; empirescht duerchschnëttlechen Entscheedungsschwellewäert ≈ 24.400 £ (2022–24); Schwéiergrad-Modifikatoren hiewen déi effektiv Obergrenz op ~36.000–51.000 £; héich spezialiséiert Technologië bis 100.000 £+ |
| ICER (USA, net-gouvernemental) | 100.000–150.000 $ pro QALY/evLYG Präisbenchmarks; mellt 50.000–200.000 $ Spillraum |
| Kanada (CADTH / CDA-AMC) | ≈ 50.000 CAD$ pro QALY Aarbechtsschwellewäert |
| WHO-CHOICE (historesch, global) | 1–3× BIP pro Awunner pro vermeidenen DALY (elo als ze grob entmotivéiert) |
| Empiresch UK-Ugebotssäit (Claxton et al.) | ≈ 13.000 £ pro QALY, déi um NHS-Rand tatsächlech verdrängt gëtt |

## D'Mathematik

De Schwellewäert λ fléisst an all Entscheedungsregel:

```
Adoptéieren, wann ICER = ΔC/ΔE < λ
Äquivalent: adoptéieren, wann NMB = λ×ΔE − ΔC > 0
```

Zwou Theorië, wat λ *ass*:

- **Nofrosäit**: wat d'Gesellschaft bereet ass fir Gesondheet ze bezuelen (e Wäerturteel).
- **Ugebotssäit**: déi Gesondheet, déi de Budget aktuell um Rand produzéiert (eng empiresch Gréisst — dem Claxton seng ~13.000 £/QALY). Wann dat fir Entscheedungen benotzt λ d'Ugebotssäit-Rate iwwerschreit, verdrängt d'Genehmege vun neier Technologie méi Gesondheet, wéi se derbäibréngt.

## Berechent Beispill

Är digital Therapeutik liwwert 0,05 QALYs pro behandelte Patient bei Nettokäschte (Präis minus Offsets) vun 800 £.

```
ICER = 800 / 0,05 = 16.000 £ pro QALY
```

- England: ënner 20.000 £ → finanzéierbar. Maximalt verdeedegbare Präis: bei λ = 20.000 £, Präis_max = 0,05 × 20.000 + Offsets = 1.000 £ + Offsets.
- US-kommerziell Rummen bei 150.000 $/QALY: de wäertbaséierte Präis ass wäit méi héich.
- E Schwellewäert fir e Land mat 4.000 $ BIP pro Awunner: dat selwecht Produit däerf netto ënner ~200 $ kaschten.

Selwecht Produit, dräi Mäert, dräi Präisser — de Schwellewäert *ass* de Präismodell. Dat ass wäertbaséiert Präisfestsetzung, vun λ aus ëmgedréit gerechent.

## Bezuch zur Softwareentwécklung

All Engineering-Organisatioun huet e implizitt λ: d'Hürd, bei där se Tooling pro gespuerter Ingenieursstonn finanzéiert. Et explizit ze maachen — „mir finanzéieren alles ënner 40 £ pro glaubwürdeg gespuerter Ingenieursstonn" — erméiglecht e Ranglëschten-Verglach vun Plattforminvestitiounen, genau wéi Käschte-pro-QALY-Ranglëschte Gesondheetsausgaben ranken. D'Ugebotssäit-Lektioun iwwerdréit sech och: Äre richtegen internen λ ass dat, wat Äre *aktuelle* Backlog um Rand produzéiert, net dat, wat d'Leedung seet, datt Zäit wäert ass.

## Falen

- **Schwellewäert-Shopping** iwwer Juridictiounen oder dat HST-Plafong fir en normaalt Produit zitéieren.
- **λ als Präis-Mindestgrenz behandelen**: den Schwellewäert ze erfëllen ass néideg, net duergaange — den [Budgetimpakt](../budgetimpakt-analyse/) kann e pro Eenheet bezuelbart Produit trotzdeem versenken.
- **Ignoréieren, datt Schwellewäerter sech bewegen**: dem NICE seng Schwéiergrad-Modifikatoren (2022) a periodesch Iwwerpréifunge verännere dat effektivt λ; Är Behaaptungen datéieren.
- **E ICER géint e Schwellewäert an enger anerer Währung vergläichen, ouni virdru ëmzerechnen**: kuckt [ICER-Verglach iwwer Währungen](../icer-verglach-iwwer-währungen/) — d'Ëmrechnungsmethod (Kafkraaftparitéit géint Mäertwiesselkurs) ass methodologesch konsequent, keen Ofrondungsdetail.
- **λ-baséiert Bewäertung mat der Aarbechtsmaart-VSL/VPF-Traditioun vermëschen**: dës kommen aus ënnerschiddlechen theoreteschen Traditiounen (Methodologie bei engem Gesondheetsbudget als Begrenzung géint offenbart Präferenz aus Loun-Risiko-Ofwiegungen) a sinn net ëmmer versöhnbar — fir den alternative Revealed-Preference-Usaz zur Bewäertung vum Liewe kuckt [Wäert vun engem statistesche Liewen](../wäert-vun-engem-statistesche-liewen/).

## Quellen

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
