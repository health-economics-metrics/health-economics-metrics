# Iwwerweisung bis Behandlung (Referral to Treatment, RTT)

Referral to Treatment ass déi vergaange Zäit vun der Iwwerweisung duerch en Hausdokter bis zum Ufank vun der Behandlung ënner der Leedung vun engem Spezialist. D'NHS Constitution setzt de Standard: **92 % vun de Patienten sollen innerhalb vun 18 Wochen mat der Behandlung ufänken**. RTT ass déi eenzeg politesch siichtbarst operationell Metrik am englesche NHS.

## Firwat et wichteg ass

Trusts, déi d'RTT-Ziler verpassen, hunn et mat reglementarescher Kontroll, Interventioun a Reputatiounsschued ze dinn; déi national Waardelëscht ass eng Zuel op der Titelsäit. All Woch, déi e Patient waart, ass verluere Gesondheet (waarden an engem méi schlechte Gesondheetszoustand — kuckt d'QALY-Mathematik hei drënner) an dacks gewonne Käschten (Krankheeten verschlechteren sech; kuckt [Méi fréi Interventioun](../méi-fréi-interventioun/)). Software, déi iergendwou am Iwwerweisungs-bis-Behandlungs-Wee Zäit spuert — Triage, Diagnostik-Duerchlafzäit, Ambulanzkapazitéit, Planung — mildert direkt déi operationell a finanziell Konsequenze vum Verpassen vum Standard, dofir ass den RTT-Impakt eng éischtklassegt Notzenzeil an NHS-Digital-Business-Cases.

## D'Mathematik

```
RTT-Leeschtung = innerhalb vun 18 Wochen behandelt Patienten / total behandelt × 100
Gesondheetskäschte vum Waarden pro Patient = Waardedauer × (Utilitéit_behandelt − Utilitéit_waardend)

Wee-Siicht: RTT = Σ Dauer vun de Phasen (Iwwerweisungs-Triage → éischten Rendez-vous →
Diagnostik → Entscheedung → Behandlung) — déi längst Schlaang verbesseren, net déi
beschäftegst Phas (kuckt flow-metrics.md).
```

## Berechent Beispill

Eng Fachrichtung behandelt 5.000 Wee-Patienten/Joer; mëttel Waardezäit 24 Wochen; Utilitéit beim Waarden 0,68 géint 0,80 behandelt.

Digital Triage plus Direkt-zum-Test-Protokoller huelen 5 Wochen reng Waardeschlaang ewech:

```
QALY-Gewënn = 5.000 × (5/52) × (0,80 − 0,68) = 57,7 QALYs/Joer
Monetiséiert bei 20.000–30.000 £/QALY (kuckt willingness-to-pay-thresholds.md):
  ≈ 1,15 Mio.–1,73 Mio. £/Joer u Gesondheetswäert
```

— plus de Trust geet vum Verstouss zur Erfëllung vum 18-Wochen-Standard, wat e Gouvernance-Wäert huet, deen keng Tabelle ganz erfaasst.

## Bezuch zur Softwareentwécklung

RTT ass eng **Lead-Time-Metrik iwwer eng Multi-Phase-Schlaang** — d'Spidolsversioun vun der Commit-to-Production-Lead-Time (kuckt [DORA-Metriken](../dora-metriken/)). D'Verbesserungsmethod ass identesch: all Phas instrumentéieren, fannen, wou Kalennerzäit sech sammelt (bal ëmmer Iwwergaben a Schlaangen, net klinesch Aarbecht) a Waardezoustänn ewechhuelen. Typesch Software-Gewënn: E-Triage, déi Iwwerweisungen a Stonnen amplaz a wöchentleche Batches routéiert, Push vun Diagnostikresultater amplaz vu Follow-up-Rendez-vousen, an automatiséiert Direkt-zum-Test-Critèren. D'Verbesserung mat [Verzögerungskäschten](../verzögerungskäschten/) bewäerten, ausgedréckt a QALYs/Woch.

## Falen

- **Eng Phas verbesseren, déi net de Flaschenhals ass** — éischt-Rendez-vous-Waardezäiten ze kierzen, während d'Diagnostik-Schlaange wuessen, verréckelt just de Pool.
- **Manipulatioun**: Wee-Resets an d'Ustoppe vun der Auer kënnen de gemellten RTT verbesseren, ouni datt een méi fréi behandelt gëtt; déi zugrondeliegend Verdeelung auditéieren.
- **Déi ganz Wee-Verbesserung fir een Tool behaapten**, wann e puer Ännerunge zesumme geland sinn — Attribuéierung brauch e Komparator.

## Quellen

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
