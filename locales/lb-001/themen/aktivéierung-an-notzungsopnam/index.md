# Aktivéierung an Notzungsopnam

D'Aktivéierungsquote ass den Undeel vun den Aschreiwungen, déi den éischte sënnvolle Wäert erreechen (déi „Aha"-Aktioun — éischt Moossung protokolléiert, éischt Lektioun ofgeschloss). D'Notzungsopnam (Uptake) ass d'Bevëlkerungsversioun dovun: den Undeel vun der *berechtegter* Bevëlkerung, déi et iwwerhaapt adoptéiert. Zesumme sinn si déi éischt Paarte vum Wäerttrichter: Akquisitioun → Notzungsopnam → Aktivéierung → [Retention](../retention-a-churn/) → Outcome.

## Firwat et wichteg ass

Net aktivéiert Notzer si pur Käschten: Akquisitiounsausgaben, Bereetstellung, Support-Uewerfläch — null klineschen Wäert. Benchmarks setzen d'Aktivéierung vu Gesondheetssoftware *ënner* de branchenübergräifenden Duerchschnëtt (≈24 % géint ≈37 % bei der Aktivéierung vun neien Notzer an engem SaaS-Benchmark-Set; Ofschluss vun der Onboarding-Checklëscht ~20 %), wat méi opwänneg Onboarding (Identitéit, Aktzept, klinesch Sécherheet) reflektéiert. D'Notzungsopnam dréit den Asaz op Bevëlkerungsniveau: am [RE-AIM-Kader](../reechwäit-a-gerechtegkeet/) ass de Public-Health-Impakt ≈ Reechwäit × Wirksamkeet — eng exzellent App, déi vun 3 % vun der berechtegter Bevëlkerung adoptéiert gëtt, beweegt d'Bevëlkerungsnadel just em 3 %. Bei verschriwwenen digitalen Therapeutika ass d'Notzungsopnam-Paart an den nationalen Daten siichtbar: **~81 % vun den däitschen DiGA-Verschreiwunge ginn aktivéiert** — eng vu fënnef verschriwwenen a bezuelten Behandlunge fänkt ni un (kuckt [DiGA-Fast-Track](../dem-däitschland-säin-diga-fast-track/)).

## D'Mathematik

```
Aktivéierungsquote = Notzer, déi d'Schlësselaktioun am Fënster ofschléissen / Aschreiwungen × 100
Opnamquote         = Adoptanten / berechtegt Bevëlkerung × 100
DTx-Aléisquote     = aktivéiert Verschreiwungscoden / ausgestallte Verschreiwungen × 100

Wäerttrichter-Modell:
  berechtegt × Opnam × Aktivéierung × retentiounsgewiichtegen Notzen = Bevëlkerungswäert
  — véier Multiplikatiounen; de klengste Facteur ze verbesseren
  dominéiert normalerweis (Theory of Constraints fir Trichteren)
```

## Berechent Beispill

E Commissioner bitt 80.000 berechtegten Awunner eng Diabetes-Präventiouns-App un:

```
Invitéiert → registréiert:  80.000 → 12.000  (Opnam 15 %)
Registréiert → aktivéiert (éischt Sëtzung + Zil gesat, 7 Deeg):
  12.000 → 5.400 (45 %)
Aktivéiert → 6-Méint-Programm ofgeschloss: 5.400 → 1.600 (30 %)

Programmeffekt (Studie, Ofschléisser): 0,03 QALYs + 180 £ vermeide Käschten
Bevëlkerungswäert = 1.600 × (0,03 × 20.000 £ + 180 £) ≈ 1,25 Mio. £
Wäert pro berechtegter Persoun = 15,60 £ — géint 780 £, wann all
berechtegt Persoun ofschléisse géif.

Wou investéieren? D'Opnam ze verduebelen (15→30 %) verduebelt de
Wäert; d'Aktivéierung vun 45→65 % ze erhéijen füügt ~44 % derbäi; allebéid
schloen weider Politur vum Programminhalt, deen déi 1.600 schonn ofschléissen.
```

## Bezuch zur Softwareentwécklung

D'Aktivéierung ass déi am meeschte engineering-handhabbar Stuf vum Trichter: Reibung bei der Identitéitsverifikatioun, Aktzept-Flows, Empty-State-Design an Time-to-first-Value si Code, keng Politik (de Median vun der Time-to-Value am Gesondheetsberäich läit bei ≈ 1 Dag 7 Stonnen an de Benchmark-Daten — all Stonn dovun ass Churn-Exposition). D'Notzungsopnam ass e Verdeelungssystem-Problem: Integratioun an Iwwerweisungspfaden (de Moment vun der Verschreiwung), Invitatioune mam Segen vum Hausdokter (Vertrauen gëtt weidergeginn) an Zougänglechkeet (Sprooch, digital Kompetenzen — kuckt [Reechwäit an Equity](../reechwäit-a-gerechtegkeet/)). De Wäerttrichter-Modell hei uewen ass de Business-Case-Generator fir béides: d'Faktore multiplizéieren, de Constraint fannen, de Fix géint de Bevëlkerungswäert bewäerten, deen hien fräisetzt.

## Falen

- **Aktivéierung als Bequemlechkeet definéiert** (E-Mail verifizéiert) amplaz mat klinescher Bedeitung (éischt therapeutesch Aktioun) — blosst d'Metrik op a briecht d'Wäertkette.
- **Spiller mam Notzungsopnam-Nenner**: „vun deenen, déi de Site besicht hunn" géint déi wierklech berechtegt Bevëlkerung — Commissionere këmmeren sech ëm dat zweet.
- **Selektiounseffekter**: einfach ze aktivéierend Notzer sinn déi manner Krank a manner Benodeeleg; Trichter-Verbesserunge kënnen Equity-Lücken erweideren, während d'Duerchschnëtter besser ginn.

## Quellen

- Aktivéierungs-Benchmarks (Gesondheets-SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA-Aktivéierungsdaten, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM-Kader. <https://re-aim.org/>
