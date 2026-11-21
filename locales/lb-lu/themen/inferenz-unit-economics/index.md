# Inferenz-Unit-Economics

Inferenz-Unit-Economics bewäerten KI-Features no hirer marginaler Compute: **Käschte pro Token**, opgerullt op Käschte pro Transaktioun, pro Notzer, pro klineschen Episod. Déi definéierend Dynamik: LLM-Präisser sinn bei konstanter Fäegkeet ongeféier **eng Gréisstenuerdnung all 1–2 Joer** gefall — eng Deflatiounsquote ouni Virbild an der Gesondheetstechnologie-Käschtekalkulatioun.

## Firwat et wichteg ass

Zwou Konsequenze folgen aus dem Präiskollaps. Kommerziell kann eng KI-Feature, déi haut marginal ass, an 18 Méint trivial profitabel sinn — an e Konkurrent, dee mat den haitege Käschte präist, gëtt ënnerboten. Fir ökonomesch Evaluatioun **iwwerschätzt** all Käschte-Effektivitéitsmodell fir e KI-gestëtzten klineschen Service, dee 2024-Inferenzpräisser afréiert, **déi lafend Käschte wesentlech** — d'Analys brauch Präisfall-Szenarien, wéi Medikamentmodeller mat Patentablaf a Generika-Androung ëmgoen. (Referenzpunkten aus der Fuerschung: Frontier-Output-Tokens ~15–75 $/M Mëtt 2026, Mëttelklass-Modeller eng Gréisstenuerdnung méi bëlleg, GPT-4-Niveau-Fäegkeet vun ~20 $/M 2022 erof op ~0,40 $/M; Epoch AI huet je no Fäegkeets-Meilesteen 9×–900×/Joer Réckgäng gemoss.)

## D'Mathematik

```
Käschte pro Uruff   = Input-Tokens × Input-Saz + Output-Tokens × Output-Saz
Käschte pro Eenheet = Σ Uriff pro Eenheet vum Business-Output (pro Triage-Episod,
                      pro opgestallte Bréif, pro Consultatiouns-Zesummefaassung)

Gemëscht Realitéit  = Basisuruff + Retries + RAG-Kontext (input-schwéier)
                      + Evaluatiouns-/Guardrail-Uriff (dacks 20–50 % Overhead)

Präisfall-Szenario fir méijäereg Modeller:
  Käschten_t = Käschten_0 × d^t, d ∈ {0,3, 0,5, 0,7}/Joer an der Sensitivitéitsanalys testen
```

## Berechent Beispill

E KI-Entloossungs-Zesummefaassungs-Service: duerchschnëttlech Zesummefaassung benotzt 12.000 Input-Tokens (Dossier-Kontext) + 1.200 Output, plus e Verifikatiounsduerchgang (6.000 an / 300 aus). Bei 3 $/M an, 15 $/M aus:

```
Entworf:     12.000 × 3/1M + 1.200 × 15/1M  = 0,036 $ + 0,018 $ = 0,054 $
Verifikatioun: 6.000 × 3/1M +   300 × 15/1M = 0,018 $ + 0,0045 $ ≈ 0,023 $
Pro Zesummefaassung ≈ 0,077 $ → pro 100.000 Zesummefaassungen/Joer ≈ 7.700 $

Géint ~20 gespuert Kliniker-Minutten pro Zesummefaassung (≈ 25 £) ass Inferenz
0,25 % vum geschaafene Wäert — d'Ökonomie gëtt vun allem dominéiert,
AUSSER den Tokens: Integratioun, Evaluatioun, Gouvernance, Adoptioun.
```

Déi Konklusioun — Inferenzkäschte sinn bei aktuellen Präisser selten de bindenden Constraint fir héichwäerteg klinesch Aufgaben — ass selwer de Befund, dee wäert ass, an Präis-Reuniounen matgeholl ze ginn.

## Bezuch zur Softwareentwécklung

Dat ass [Cloud-Unit-Economics](../cloud-unit-economics/) spezialiséiert fir KI, mat dräi Praxis-Notizen: **pro Business-Eenheet moossen**, net pro API-Uruff, sou datt d'Zuel direkt a [ICER](../inkrementellt-käschte-effektivitéitsverhältnis/)-/[Budgetimpakt](../budgetimpakt-analyse/)-Modeller passt; **op d'Input/Output-Asymmetrie oppassen** (Output typesch ~4× Input-Präis; RAG-Architekturen si input-schwéier — Architekturwielen si Präiswielen); an **no Aufgabestuf routen** — Modellfäegkeet un d'Aufgabeschwieregkeet upassen (bëlleg Modeller fir Klassifikatioun, Frontier fir Synthese) senkt gemëscht Käschte routinéiert 5–10× bei gläicher Qualitéit, d'Softwareversioun vum Gebrauch vun der bëllegster effektiver Interventioun ([Käschte-Minimiséierung](../käschte-minimiséierungs-analyse/), Äquivalenz beleet).

## Falen

- **Afréiert-Präis-Méijoer-Modeller** — iwwerschätzt Käschten; awer och **ugeholl-Deflatioun-Ëmsazmodeller** — e Präiskrich ass kee Kontrakt; béid als Szenario.
- **Evaluatiouns-Overhead ignoréieren**: Guardrails, Judges a Retries sinn echt Tokens, an reglementéierte Kontexter dacks d'Majoritéit.
- **Pro-Token-Myopie**: Latenz, Rate Limits a Kontextfënster-Aschränkunge droen Käschten, déi kee Token-Präis erfaasst.

## Quellen

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
