# Produktivitéit vun Entwéckler mat KI

Metriken dofir, wat KI-Codéierungshëllef wierklech mam Engineering-Output mécht: Akzeptanzquoten vu Virschléi, Speedups aus kontrolléierten Studien, PR-Duerchsaz a Code-Retention. D'Evidenzbasis ass wierklech widdersprécherlech — wat se zu engem perfekte Fallbeispill fir d'Ënnerscheedung tëscht Wirksamkeet (Efficacy) an Effektivitéit mécht, fir déi d'Gesondheetsökonomie gebaut gouf.

## Firwat et wichteg ass

Déi zwou meescht zitéiert kontrolléiert Studien weisen an entgéint gesate Richtungen:

- **Peng et al. 2023 (GitHub-Copilot-RCT)**: Entwéckler hunn eng Greenfield-HTTP-Server-Aufgab **55,8 % méi séier** mat Copilot ofgeschloss (1h11m vs. 2h41m, n=95).
- **METR-2025-RCT**: erfaren Open-Source-Entwéckler, déi un *hire eegene reife Repositories* geschafft hunn, waren **19 % méi lues** mat de KI-Tools vun Ufank 2025 (16 Entwéckler, 246 Aufgaben) — während si *gegleeft* hunn, 20 % méi séier ze sinn.

Béid si gutt Studien. De Widdersproch ass de Befund: Greenfield-Aufgaben-Wirksamkeet iwwerdréit sech net op d'Effektivitéit an engem reife Codebase, an *gefillten* Notzen kann gemoossenen Notzen net ersetzen. D'Medizin huet Nimm fir béid Phenomener (erklärend vs. pragmatesch Studien; de Placebo-Problem) a Mechanismen, fir se ze handhaben.

## D'Mathematik

```
Akzeptanzquote   = akzeptéiert Virschléi / ugewisen Virschléi
                   (GitHub-Telemetrie ~30 % Duerchschnëtt; variéiert: SQL 45 %, Python 35 %, JS 28 %)
Retentiounsquote = KI-Code, deen bis zum Merge iwwerlieft / akzeptéierte KI-Code (~88 % gemellt)
Speedup          = (t_Kontroll − t_KI) / t_Kontroll  (NËMMEN aus kontrolléierte Verglach)
Duerchsazdelta   = Δ gemergte PRs/Entwéckler/Woch (GitHub/Accenture-Felddaten: +8,7 %)

Wäertmodell      = Entwéckler × agespuert Zäit × belaaschte Saz × Auslaaschtungsfaktor
                   — all Terme brauch lokal Moossung; kuckt den Tornado an
                   sensitivity-analysis.md, wou d'agespuert Zäit all aner
                   Parameteren zesumme dominéiert
```

## Berechent Beispill

Eng Organisatioun mat 500 Entwéckler pilotéiert en Assistent mat enger richteger Kontroll (zesummegesate Equipen, 3 Méint, preregistréiert Metriken):

```
Pilotresultat: PR-Zyklus-Zäit −18 %; gemergte PRs +6 %; CFR onverännert;
               selbstgemellt agespuert Zäit 45 Min/Dag; gemoossen op Aufgabeniveau ≈ 15 Min/Dag

De GEMOOSSENEN Wäert bewäerten: 500 × 0,25 h × 220 d × 60 £ × 0,6 Auslaaschtung
                          ≈ 990.000 £/Joer Kapazitéit (net cash-fräisetzend)
Käschten: 500 × 39 £/Mount × 12 ≈ 234.000 £/Joer
Netto-Kapazitéitsverhältnis ≈ 4:1 — finanzéierbar, bei engem Drëttel vun der
selbstgemellter Behaaptung.
```

De 3×-Ënnerscheed tëscht gefillt a gemoossen ass de METR-Befund an der Praxis; e Budget op Basis vu Selbstmellung hätt d'Notzenzeil verdräifacht.

## Bezuch zur Softwareentwécklung

D'Importer aus der Gesondheetsökonomie fir jiddereen, deen KI-Tooling evaluéiert: **pragmatesch Studien** féieren (däi Codebase, deng Ingenieuren, richteg Tickets — keng Vendor-Demo-Aufgaben); **Akzeptanzquote als Proxy, net als Outcome** behandelen (si ass de [PPV](../evaluatioun-vu-klinescher-ki/) vun de Virschléi aus der Perspektiv vum Entwéckler — héich Akzeptanz mat niddreger Retention ass Iwwerdiagnos); all Duerchsazgewënn mat enger **Stabilitéitskontroll** paaren (DORA 2025: KI hieft den Duerchsaz, schued der Stabilitéit — eng Interventioun mat Niewewirkunge brauch eng Nettonotzen-Analys, no [DORA-Metriken](../dora-metriken/)); an de Notzen éierlech als Kapazitéit klassifizéieren ([cash-fräisetzend vs. net cash-fräisetzend](../cash-fräisetzend-vs-net-cash-fräisetzend-ersparnisser/)).

## Falen

- **Transplantatioun vun Vendor-Studien**: Greenfield-RCT-Zuelen op Legacy-Codebase-Aarbecht ugewannt — genau de Feeler, deen d'METR-Studie opgedeckt huet.
- **Selbstmellung als Moossung**: de 20-Prozentpunkten-Perzeptiounsënnerscheed ass de gréissten bekannte Bias an dëser Literatur.
- **Aktivitéits-Inflatioun**: méi PRs a méi Code si Aktivitéit, keng Outcomes ([SPACE](../space-an-devex/)); paaren mat Rework an CFR.
- **D'Léierkurv ignoréieren**: Moossunge vun der Woch 2 erfaassen Neiheetseffekter an déi eng oder aner Richtung; am Steady State moossen ([Zäithorizont](../zäithorizont/)).

## Quellen

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
