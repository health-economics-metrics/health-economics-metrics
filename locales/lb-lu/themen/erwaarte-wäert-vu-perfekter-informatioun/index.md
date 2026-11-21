# Erwaarte Wäert vu perfekter Informatioun (EVPI)

EVPI ass de maximale Betrag, dee en Entscheedungsdréier bezuele soll, fir Onsécherheet ze eliminéieren, éier hie entscheet — de formelle Präis vun „loosse mir fir d'éischt eng Studie maachen."

## Firwat et wichteg ass

Gesondheetssystemer stinn dauernd viru der Wiel: elo op onperfekter Evidenz adoptéieren, oder fir d'éischt méi Fuerschung finanzéieren. EVPI setzt eng Zuel op déi zweet Optioun. Wann EVPI 50.000 £ ass an déi virgeschloen Studie 2 Millioune kascht, elo adoptéieren. Wann EVPI 20 Millioune ass, ass d'Studie en Schnäppchen. Dee selwechte Fro — „sollte mir dat pilotéieren, éier mir et ausrollen?" — stellt sech bei all Enterprise-Tool-Entscheedung, a bal keen bewäert se. Fir d'Optioun ze bewäerten, e Projet méi spéit auszebauen, amplaz d'Optioun, als éischt Informatioun ze sammelen, kuckt [Real Options Valuation](../real-optiounen-bewäertung/).

## D'Mathematik

EVPI ass d'Lück tëscht Entscheedung mat perfekter Viraussiicht an Entscheedung elo no Erwaardungen:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = onséchere Parameteren (mat hirer gemeinsamer Verdeelung)
NMB(j,θ) = Nettomonetären Notzen vun der Optioun j bei θ
```

Éischten Term: Duerchschnëtt vum Best-Choix-Payoff iwwer all méiglech Welt (dir wielt ëmmer richteg). Zweeten Term: Payoff vun där eenzeger Optioun, déi am Duerchschnëtt am beschten ass (dir musst elo engagéieren). EVPI ≥ 0 ëmmer. Populatiouns-EVPI multiplizéiert mat der Zuel vun de betraffenen Entscheedungen. Direkt aus [PSA](../probabilistesch-sensitivitéitsanalyse/)-Zéiunge berechent.

## Berechent Beispill

En KI-Dokumentatiounsassistent un 5.000 Kliniker ausrollen, oder net. Zwou Welten:

```
Welt A (p = 0,6): Assistent spuert 20 Min/Dag → NMB vum Rollout = +8 Mio. £
Welt B (p = 0,4): Assistent spuert ~0 (Workflow-Reibung) → NMB vum Rollout = −3 Mio. £
NMB vun „net ausrollen" = 0 £ a béide Welten.
```

Elo entscheeden: E[NMB Rollout] = 0,6 × 8 − 0,4 × 3 = **+3,6 Mio. £** → ausrollen.

Mat perfekter Informatioun: a Welt A de Rollout wielen (+8 Mio. £), a Welt B näischt (0 £). Erwaarte Wäert = 0,6 × 8 + 0,4 × 0 = **4,8 Mio. £**.

```
EVPI = 4,8 Mio. − 3,6 Mio. = 1,2 Mio. £
```

E rigoroze 3-Méint-Pilot fir 150.000 £, dee wesentlech klärt, a wéi enger Welt een ass, ass däitlech et wäert — a all Pilot, dee méi wéi 1,2 Mio. £ kascht, ass et net, egal wéi grëndlech.

## Bezuch zur Softwareentwécklung

EVPI ass d'Ökonomie vum Spike, vum Pilot, vum A/B-Test an vum Proof-of-Concept. Si liwwert zwou praktesch Reegelen:

- **E Pilot ass nëmme wäert ze finanzéieren, wann d'Entscheedung sech wierklech kéint änneren.** Wann dir sowisou géift ausrollen, onofhängeg vum Pilotresultat, ass EVPI = 0 an de Pilot ass Theater.
- **Pilotausgaben op EVPI deckelen.** De Wäert vun Informatioun ass duerch de Wäert vun der Entscheedung begrenzt, déi se informéiert.

Partiell EVPI (EVPPI) erweidert dat op eenzel Parameteren: „wat ass et wäert, grad d'Zuel vun der gespuerter Zäit festzenagelen?" — wat seet, wat de Pilot soll moossen. Fir eng *spezifesch* virgeschloen Studie ze bewäerten amplaz all Onsécherheet ze eliminéieren, kuckt [EVSI](../erwaarte-wäert-vu-stéchprouf-informatioun/).

## Falen

- **Piloten ouni Entscheedungsreegel lafen** — Informatioun, déi d'Wiel net ka änneren, ass per Definitioun wäertlos.
- **D'Verzögerungskäschte vum Informatiounsammelen ignoréieren**: e 6-Méint-Pilot verzögert 6 Méint Notzen ([Verzögerungskäschten](../verzögerungskäschten/)); Nettowäert vum Pilot = geléist EVPI − Verzögerungskäschten − Pilotkäschten.
- **EVPI als Prognos behandelen.** Et ass eng ieweschte Grenz fir de Wäert vun Informatioun, keng Schätzung dovun, wat eng spezifesch Studie liwwert.

## Quellen

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
