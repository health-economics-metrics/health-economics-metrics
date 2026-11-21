# Verzögerungskäschten (Cost of Delay, CoD)

Cost of Delay ass den ökonomesche Wäert, deen pro Zäiteenheet verluer geet, an där e Feature, Produkt oder Service *net* geliwwert gëtt. Et ass déi eenzeg stäerkste Bréck tëscht Software-Delivery-Metriken a Gesondheetsökonomie: et wandelt „mir hunn ze spéit geliwwert" a Währung ëm — oder a QALYs.

## Firwat et wichteg ass

Dem Reinertsen seng Reegel: „Wann dir nëmmen eng Saach quantifizéiert, quantifizéiert d'Cost of Delay." Déi meescht Organisatioune wëssen, wat e Projet kascht, awer net, wat e Mount Verzögerung kascht, an optiméieren dofir Budgeten, während se Zäitwäert verbluten. Bei Gesondheetssoftware si Enjeuen literal: all Woch, déi eng Verbesserung vum Pfad verzögert gëtt, waarden Patienten méi laang a méi schlechte Gesondheetszoustänn. CoD ass dee stäerkste mathemateschen Kader fir NHS-Stakeholder, well en d'*Absenz* vun denger Software bewäert.

## D'Mathematik

```
CoD = Notzen pro Zäiteenheet, op deen verzicht gëtt, wärend net geliwwert   (£/Woch oder QALYs/Woch)

Gesamt-Verzögerungsverloscht = CoD × Verzögerungsdauer

Fir d'Prioritéiten, kuckt wsjf-and-cd3.md: CD3 = CoD / Dauer.
```

Fir klinesch Software, an Gesondheet ewéi och a Geld denominéieren:

```
CoD_Gesondheet = betraffe Patienten pro Woch × QALY-Gewënn pro Patient
CoD_Geld       = CoD_Gesondheet × λ (Zuelungsbereetschaftsschwell, 20k–30k £/QALY)
                 + verzicht operationell Ersparnisser pro Woch
```

## Berechent Beispill

**Operationell**: Software spuert 200 £ pro Patient op engem Pfad; en Trust veraarbecht 50 esou Patienten/Woch.

```
CoD = 200 × 50 = 10.000 £/Woch
Eng 10-Wochen-Beschaffungsverzögerung kascht 200 × 50 × 10 = 100.000 £ vermeidbar Verschwendung.
```

**Klinesch**: eng Triage-Verbesserung entfernt 5 Wochen Waardezäit (Utilitéit 0,68 → 0,80 méi fréi) fir 100 Patienten/Woch:

```
QALY-Gewënn pro Patient = (5/52) × 0,12 ≈ 0,0115
CoD_Gesondheet = 100 × 0,0115 = 1,15 QALYs/Woch
CoD_Geld       = 1,15 × 20.000 £ ≈ 23.000 £/Woch u Gesondheetswäert
```

Eng 6-Méint-Deployment-Verzögerung „kascht" ~30 QALYs — d'Argument, dat en IT-Go-live-Rutsch als klinescht Evenement nei rahmt. (Benchmark fir d'Gréisst: dem Black Swan Farming seng berühmt Maersk-Analyse huet eenzel Features mat CoD ≈ 200k $/Woch fonnt, déi 38 Wochen gewaart haten.)

## Bezuch zur Softwareentwécklung

CoD ass d'Metrik, déi [DORA-Lead-Time](../dora-metriken/) an [Flow-Effizienz](../flow-metriken/) finanziell liesbar mécht: Lead Time × CoD = Geld (oder Gesondheet), dat an Schlaangen verbrannt gëtt. Notzungen:

- **Prioritéiten**: Aarbecht no CoD/Dauer rangéieren ([WSJF/CD3](../wsjf-a-cd3/)) amplaz no dem haardsten Stakeholder.
- **Prozessökonomie**: eng 2-Wochen-Release-Kadenz huet erwaart Verzögerungskäschten vu ~1 Woch × CoD pro Feature géintiwwer Continuous Delivery — de Batch bewäerten.
- **Beschaffung**: NHS-Beschaffungszyklen vu 6–18 Méint hunn eng CoD; se ze weisen ännert d'Urgenzgespréicher (kuckt [Budgetimpakt-Analyse](../budgetimpakt-analyse/) fir de Bezuelbarkeets-Géigenstéck).

## Falen

- **Lineare CoD unhuelen**: verschidden Aarbecht huet deadlineformte Wäert (reglementaresch Datumer — onendlech CoD nom Datum, null virdrun) oder zerfallenden Wäert (First-Mover-Fënsteren). Dat Dringlechkeetsprofil klasséieren, éier multiplizéiert gëtt.
- **CoD op Outputs, déi keen wëll**: Verzögerung kascht nëmmen, wann d'Saach Wäert huet; verzögert Mëll ass gratis.
- **Verzögerung an Diskontéierung duebel zielen**: [Diskontéierung](../diskontéierung-an-zäitpräferenz/) bewäert scho Zäit op méijäerege Horizonter; CoD ass déi operationell Versioun bannent dem Horizont. CoD fir Wochen/Méint, NPV-Verschiebung fir Joren.

## Quellen

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
