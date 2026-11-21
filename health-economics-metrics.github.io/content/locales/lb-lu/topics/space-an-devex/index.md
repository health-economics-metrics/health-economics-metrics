# SPACE an DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) an DevEx (Feedback-Loops, kognitiv Belaaschtung, Flow-Zoustand) si Kadere, fir d'Entwéckler-Produktivitéit **multidimensional** ze moossen — d'Äntwert vum Feld op d'Erkenntnis, datt keng eenzel Metrik de Kontakt mat der Realitéit iwwerlieft.

## Firwat et wichteg ass

Béid Kadere kodéieren déiselwecht haart verdéngt Lektioun, déi d'Outcomes-Fuerschung an der Gesondheet Joerzéngte virdru geléiert huet: eng eenzel Zuel (Zeilen un Code; Bluttdrock) stellt eng multidimensional Realitéit falsch duer, a se ze optiméieren produzéiert Manipulatioun, keng Verbesserung. SPACE schreift vir, Metriken aus op d'mannst dräi Dimensiounen ze kombinéieren an Telemetrie mat Selbstbericht ze vermëschen — strukturell identesch dozou, wéi [EQ-5D](../eq-5d/) fënnef Dimensioune profiléiert, ier iergendeen Index berechent gëtt, an dofir, firwat et [PROMs](../patientegemellt-outcomes/) nieft klineschen Moossunge gëtt. Zefriddenheet/Wuelbefannen ass och kee mëllen Dekor: et fiddert d'Ökonomie vun der [Personalbindung](../personalbindung/), wou Ofgang a Méint beluechte Gehalt bewäert gëtt.

## D'Mathematik

Kee vun de Kadere ass eng Formel; béid si Moossungsdesigner:

```
SPACE-Regel: ≥ 3 Dimensiounen, ≥ 1 perzeptuell (Ëmfro) + ≥ 1 System-(Telemetrie-)Metrik

DevEx-Dimensiounen an Beispill-Paarungen:
  Feedback-Loops    → CI-Dauer (Telemetrie) + „Waarden fillt sech lues un" (Ëmfro)
  kognitiv Laascht  → Auffindbarkeet vun der Dokumentatioun, Onboarding-Zäit + empfonnen Opwand
  Flow-Zoustand     → Meeting-/Ënnerbriechungsdicht + selwer gemellte Fokus

Ofgeleet Indizes (z. B. dem DX säin DXI) mapen Ëmfro-Kompositen op Zäit:
Fournisseur-Behaaptung ≈ 13 Min/Entwéckler/Woch pro Indexpunkt — als Fournisseur-
Benchmark behandelen, dee lokal ze validéieren ass, net als Naturkonstant.
```

## Berechent Beispill

E Plattform-Team begrënnt eng DevEx-Investitioun (CI-Beschleunegung + Dokumentatiounsiwwerarbechtung) fir 300 Entwéckler:

```
Basis:   CI p75 = 28 Min; Ëmfro „Ech verléieren de Fokus beim Waarden op Builds": 62 % stëmmen zou
Duerno:  CI p75 = 9 Min;  Zoustëmmung 24 %

Zréckgewonne Zäit (Telemetrie): 6 Builds/Dag × 19 Min × 0,4 notzbar = ~45 Min/Dag/Entwéckler
Kapazitéitswäert: 300 × 0,75 h × 220 d × 60 £/h ≈ 2,97 Mio. £/Joer (net cash-fräisetzend —
kuckt cash-releasing-vs-non-cash-releasing.md; de Notzbarkeetsfaktor 0,4 ass de
Fragmentéierungsrabatt aus practitioner-time.md)
Perzeptuell Bestätegung mécht d'Telemetrie-Behaaptung glaubwürdeg — all eleng ass manipuléierbar;
zesummen triangulatéieren si.
```

## Bezuch zur Softwareentwécklung

Dësen Text *ass* d'Software-Säit; den Transfer geet Richtung Gesondheetsökonomie. E „qualitéitsbereenegt Ingenieursjoer" — Zäit, gewiicht mat engem standardiséierten Erfarungsindex — ass d'Konstruktioun vum [QALY](../qualitéitsbereenegt-liewensjoer/), ugewannt op Engineering-Kapazitéit, an et erbt dem QALY seng Regelen: Gewiichter aus engem validéierte Instrument (konsequent Ëmfro, publizéiert Scoring), *virum* Verglach erhuewen, ni ofgestëmmt, fir en Tool ze schmeechelen, dat bevorzugt gëtt. D'Lektioun [SF-6D vs EQ-5D](../eq-5d/) gëllt och: ënnerschiddlech Instrumenter ginn systematesch ënnerschiddlech Zuelen, dofir ni DevEx-Indizes iwwer d'Instrumenter vu verschiddene Fournisseuren hannen vergläichen.

## Falen

- **Eenzel-Metrik-Kollaps**: Dashboards, déi SPACE op ee Score reduzéieren, kreéieren nei dat Problem, dat de Kader soll verhënneren.
- **Aktivitéitsmetriken als Outcomes**: Commits, PRs a Story Points sinn Activity — d'Dimensioun, vun där SPACE explizit warnt, datt se am meeschte manipuléierbar ass (Gesondheets-Analogon: Prozeduren zielen, net Genesungen).
- **Ëmfro-Middegkeet an Hawthorne-Effekter**: véierteljäerlech liicht Instrumenter schloen wöchentlech Ausfroen.
- **Teams vergläichen**: wéi Spidolsranglëschten ouni Case-Mix-Upassung — Kontextënnerscheeder (Domän, Legacy-Laascht, Bereetschaftsdéngscht) dominéieren.

## Quellen

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
