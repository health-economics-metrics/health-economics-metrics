# Markov-Kohortesimulatioun

E Markov-Kohortemodell ass déi HTA-Standard-Modelléierungstechnik fir Interventiounen, deenen hir Effekter sech iwwer méi Zäitperioden (Zyklen) entfalen, net an engem eenzege Schoss. Eng hypothetesch Kohort fänkt komplett an engem Gesondheetszoustand un, a jiddwere Zyklus beweege fix Iwwergangswahrscheinlechkeeten Bruchdeeler vun der Kohort tëscht Zoustänn; Käschten a QALYs akkumuléieren all Zyklus proportional dozou, wéi vill vun der Kohort all Zoustand besetzt, a ginn op de Barwäert diskontéiert. All Softwareingenieur, deen e méijäerege digitale Gesondheets-Business-Case modelléiert — wou Notzer oder Patiente iwwer d'Zäit tëscht Zoustänn wéi „engagéiert", „ofgeflaacht" oder „churned" wiesselen — baut déiselwecht Struktur.

## Firwat et wichteg ass

Déi meescht reell Gesondheetstechnologie-Entscheedunge sinn keng Eemol-Verglächer vu Käschte an Outcome vun enger eenzeger Period. Eng chronesch Krankheet schreit fort, rezidivéiert, spréicht op Behandlung un, oder dëdert, iwwer Joren — an eng Eenzel-Period-[Käschte-Effektivitéits-Analyse](../käschte-effektivitéits-analyse/) kann dat net duerstellen. NICE-, ICER- a CADTH-Soumissioune fir Interventioune bei chroneschen Krankheeten, bewäert iwwer [Gesondheetstechnologie-Bewäertung](../gesondheetstechnologie-bewäertung/), si bal ëmmer als Markov-Kohortemodeller mat Liewenszäit-Zäithorizont gebaut, well d'Alternativ — all méiglechen Eenzelpatient-Pfad ze modelléieren — op Skala net handhabbar ass. De Kohorte-Niveau-Markov-Modell tauscht e bëssen Eenzelpersoun-Realismus (e kann net einfach Erënnerung un fréier Zoustänn duerstellen, dofir „Markov": d'Zukunft hänkt nëmmen vum aktuellen Zoustand of) géint e Modell, dat transparent, auditéierbar a séier genuch ass, fir dausende Mol an enger [probabilistescher Sensitivitéitsanalyse](../probabilistesch-sensitivitéitsanalyse/) ze lafen.

## D'Mathematik

```
Kohorten-Update vun engem Zyklus (Zeilevecteur x Iwwergangsmatrix):
  neie_Zoustand[j] = sum_i Zoustand[i] * Iwwergangsmatrix[i][j]

Käschte vun engem Zyklus:
  Zyklus_Käschten = sum_s Zoustand[s] * Käschten_pro_Zyklus[s]

QALYs vun engem Zyklus:
  Zyklus_QALYs = sum_s Zoustand[s] * Utilitéit[s] * Zyklus_Längt_Joer

Voll Simulatioun iwwer `Zyklen` Zyklen, diskontéiert mat `Diskontsaz`:
  total_diskontéiert_Käschten = sum_{t=0}^{Zyklen-1} Zyklus_Käschten(Zoustand_t)  / (1 + Diskontsaz)^t
  total_diskontéiert_QALYs    = sum_{t=0}^{Zyklen-1} Zyklus_QALYs(Zoustand_t) / (1 + Diskontsaz)^t
  wou Zoustand_0 = Ufanks-Verdeelung, Zoustand_{t+1} = advance_cohort(Zoustand_t, Iwwergangsmatrix)
```

All Zyklus op de Barwäert zréck ze diskontéieren benotzt genau d'Formel vun [Diskontéierung an Zäitpräferenz](../diskontéierung-an-zäitpräferenz/), Zyklus fir Zyklus amplaz Joer fir Joer ugewannt.

## Berechent Beispill

**Klinesch**: en 2-Zoustands-Modell — `Well` an `Dead` — wou 10 % vun der Kohort all Zyklus stierwen an `Dead` absorbéierend ass (seng Selbst-Iwwergangswahrscheinlechkeet ass 1,0; dës Selbstschleif ewechzeloossen géif d'Kohortemass no engem Zyklus an `Dead` verschwénge loossen). D'Kohort fänkt komplett als `Well` un, kascht 1.000 £ pro Zyklus, wärend `Well` (0 £, soubal `Dead`), a gewënnt 0,8 QALYs pro Joer, wärend `Well`. Simuléiert fir 3 jäerlech Zyklen mam NICE-Diskontsaz vun 3,5 %:

```
Zyklus 0: Zoustand = [1,00, 0,00] (100 % Well)
  Käschten = 1.000,00 £, QALYs = 0,800, Diskontfaktor = 1,000000
  diskontéiert: Käschten = 1.000,00 £, QALYs = 0,8000

Zyklus 1: Zoustand = [0,90, 0,10] (90 % Well, 10 % Dead)
  Käschten = 900,00 £, QALYs = 0,720, Diskontfaktor = 0,966184
  diskontéiert: Käschten = 869,57 £, QALYs = 0,6957

Zyklus 2: Zoustand = [0,81, 0,19] (81 % Well, 19 % Dead)
  Käschten = 810,00 £, QALYs = 0,648, Diskontfaktor = 0,933511
  diskontéiert: Käschten = 756,14 £, QALYs = 0,6049

Gesamt diskontéiert Käschten ≈ 2.625,71 £
Gesamt diskontéiert QALYs   ≈ 2,1006
```

All Zyklus säin Zoustand ass dee leschte Zyklus säin Zoustand, duerch d'Iwwergangsmatrix gefouert — 90 % vun de 90 %, déi bei Zyklus 1 nach `Well` sinn, bleiwen bei Zyklus 2 `Well` (0,9 × 0,9 = 0,81), während déi aner 19 % elo gestuerwe sinn (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Bemierkt, datt d'Kohort `Well` ni komplett entleert: mat konstanter 10-%-Mortalitéit pro Zyklus a ouni Re-Entrée zerfält de `Well`-Undeel geometresch, amplaz bei iergend enger endlecher Zyklus-Zuel null ze erreechen.

## Bezuch zur Softwareentwécklung

Fir wéi e Méi-Zyklus-HTA-Modell an enger richteger Bewäertung benotzt gëtt, kuckt [Gesondheetstechnologie-Bewäertung](../gesondheetstechnologie-bewäertung/) — de Referenzfall, deen regéiert, wéi en Diskontsaz, Utilitéitsquell an Zäithorizont e agereechte Markov-Modell muss benotzen.

E Markov-Kohortemodell ass strukturell eng State Machine mat probabilisteschen Iwwergäng, fir eng fix Zuel Ticks gelaf, mat diskontéiertem Wäert pro Tick. Déiselwecht Form simuléiert d'Retention/Zoustandsiwwergäng vun enger Notzerkohort iwwer d'Zäit — kuckt [DORA-Metriken](../dora-metriken/) fir d'operationell Zouverlässegkeets-Versioun vun „wéi en Undeel vum System ass dës Period an engem degradéierten Zoustand, a wat kascht dat". Konkret:

- **Retention-/Churn-Modelléierung** ass e Markov-Kohortemodell mat Zoustänn wéi „aktiv", „a Gefor", „churned": eng fix monatlech Iwwergangsmatrix, fir 12 oder 24 monatlech Zyklen gelaf, seet dir déi erwaart aktiv Notzerzuel (an den Ëmsaz) a jidderee zukünftege Mount, genau wéi `Well`/`Dead` d'erwaart Iwwerliewend seet.
- **Zouverlässegkeets- an Incident-Ökonomie**: d'Zoustänn vun engem System (gesond, degradéiert, down) kënne genau sou modelléiert ginn, mat „Käschte pro Zyklus" vum Ausfallschued, deen akkumuléiert, wärend de System an den degradéierten/down-Zoustänn ass — wat e Incident-Frequenz-Argument an en diskontéiert Käschte-Argument ëmwandelt, vergläichbar mat de Käschte vun der Zouverlässegkeetsaarbecht, déi d'Iwwergangswahrscheinlechkeeten géif änneren.
- **Absorbéierend Zoustänn als Endzoustänn**: `Dead` an engem klineschen Modell ass genau en „kënnegten Abonnement" oder „permanent offline"-Zoustand an engem Softwaremodell — béid brauchen eng explizit Selbst-Iwwergangswahrscheinlechkeet vun 1,0, soss verléiert d'Simulatioun roueg Mass.

## Falen

- **Iwwergangswahrscheinlechkeeten, déi pro Zeil net op 1 summéieren.** Eng Zeil, déi méi oder manner wéi 1 summéiert, léisst d'Kohort roueg all Zyklus Mass „leaken" oder „wuessen" — ëmmer d'Zeilsummen kontrolléieren, ier ee dem Modell säin Output traut, well näischt un der Modellstruktur selwer de Feeler flaggt.
- **Zyklus-Längt ze grob fir déi reell Krankheetsdynamik.** E jäerleche Zyklus fir e Zoustand, deen sech bannent Wochen bedeitend ännert, ënnerschätzt Iwwergäng, déi mëttels am Zyklus geschéien; eng Zyklus-Längt wielen, déi kuerz ass am Verglach dozou, wéi séier de modelléierte Prozess sech tatsächlech beweegt.
- **D'Selbstschleif vun engem absorbéierenden Zoustand vergiessen.** E absorbéierenden Zoustand (Doud, permanent Ofbroch) brauch eng Selbst-Iwwergangswahrscheinlechkeet vun exakt 1,0. Ewechzeloossen, an d'Kohortemass an deem Zoustand verdampft no engem eenzege Zyklus, wat kumulativ Käschten oder QALY-Verloscht ënnerschätzt.
- **De Modell als validéiert behandelen, well en leeft.** E Markov-Kohortemodell mat plausibel ausgesinnenden Iwwergangswahrscheinlechkeeten kann trotzdem strukturell falsch sinn (feelend Zoustänn, falsch absorbéierend Verhalen); géint bekannte epidemiologesche Benchmarks validéieren (z. B. ob d'modelléiert Iwwerliewe no 5 Joer mat publizéierte Iwwerliewenskurve passt), ier ee dem Output traut.

## Quellen

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
