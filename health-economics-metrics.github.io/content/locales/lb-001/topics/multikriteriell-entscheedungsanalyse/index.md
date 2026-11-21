# Multikriteriell Entscheedungsanalyse (MCDA)

D'Multikriteriell Entscheedungsanalyse (MCDA) ass e gewiichtege Summe-Scoring-Modell, dat an der Gesondheetstechnologie-Bewäertung benotzt gëtt, wann eng eenzeg ICER-/Zuelungsbereetschaftsschwell net alles erfaasst, wat en Entscheedungsdréier interesséiert: Equity, ongedeckte Bedarf, Innovatioun, Budgetimpakt, Krankheetsschwéieregrad. All Critère kritt e Gewiicht, dat seng Wichtegkeet reflektéiert (vu Stakeholder erhuewen, Gewiichter summéieren op 1), all Optioun kritt e normaliséierte Score pro Critère (typesch 0–1), an de Gesamtscore ass déi gewiichte Zomm — déiselwecht mathematesch Form wéi eng Software-Vendor-Auswielscorecard.

## Firwat et wichteg ass

MCDA gëtt a Kaderen wéi EVIDEM benotzt, a vu verschiddenen HTA-Instanzen fir Orphan-/Seelen-Krankheeten-Bewäertungen, wou e strikte Käschte-pro-QALY-Schwell-Usaz als ze schmuel ugesi gëtt, fir alles z'erfaassen, wat bei enger Entscheedung wichteg ass. D'ISPOR-MCDA-Emerging-Good-Practices-Task-Force huet Good-Practice-Guidance fir d'verdeedegbar Erhuele vu Gewiichter a Scores formaliséiert, genau well eng informell gewiicht Entscheedung einfach ze konstruéieren an einfach ze manipuléieren ass. Wann eng Gesondheetstechnologie wierklech Wäertdimensiounen huet, déi eng eenzeg [Zuelungsbereetschaftsschwell](../zuelungsbereetschaft-schwellewäerter/) net duerstelle kann — Schwéieregrad, Innovatioun, Equity — gëtt MCDA den Entscheedungsdréier eng explizit, auditéierbar Struktur, fir se ze kombinéieren, amplaz vun engem net ausgeschwate Bauchgefill.

## D'Mathematik

```
MCDA-Score = Σ_i (Gewiicht_i × Score_i)

Gewiichter solle op 1 summéieren (erhuewen mat Stakeholder-Methoden wéi Swing
Weighting oder dem Analytic Hierarchy Process)
```

## Berechent Beispill

En HTA-Comité scoret en digitaalt Therapeutikum op véier Critèren:

```
Critère                            Gewiicht  Score   Gewiicht × Score
Klinesche Notzen                   0,4       0,8     0,32
Käschte-Impakt                     0,3       0,5     0,15
Krankheetsschwéieregrad / Bedarf   0,2       0,9     0,18
Innovatioun                        0,1       0,6     0,06
                                    ─────             ─────
                                    1,0               0,71
```

D'Gewiichter summéieren op 1,0 (0,4 + 0,3 + 0,2 + 0,1), an de MCDA-Score ass 0,71 (0,32 + 0,15 + 0,18 + 0,06). De Comité vergläicht 0,71 mat enger vireg ofgemaachter Schwell, oder rangéiert et géint konkurréierend Technologien, déi op déiselwecht Manéier gescort goufen.

## Bezuch zur Softwareentwécklung

Dat ass genau dee selwechte Mathematik wéi eng gewiicht Vendor-Auswielscorecard, eng RFP-Evaluatiounsmatrix oder en Feature-Prioritéits-Scoring-Modell — kuckt [Build vs. Buy](../selwer-bauen-oder-kafen/), e klassesche Gewiicht-Scorecard-Fall an der Software-Beschaffung. Et ass och wäert, et mat [WSJF an CD3](../wsjf-a-cd3/) ze kontrastéieren: WSJF/CD3 ass eng *Verhältnis*-baséiert Prioritéitsmethod (Cost of Delay gedeelt duerch Job-Gréisst oder Dauer), wärend MCDA eng gewiicht *Zomm* ass. MCDA a WSJF/CD3 sinn zwou strukturell verschidden Äntwerte op „wéi rangéiere mir konkurréierend Optiounen", a wëssen, wéi eng vun deenen eng bestëmmten Entscheedung tatsächlech brauch — additiven Wäert iwwer onofhängeg Critèren, géint Wäertdicht pro Eenheet knapp Kapazitéit — ass méi wichteg, wéi eng Formel méi rigoréis ausgesäit.

## Falen

- **Gewiichter-Erhuelungs-Bias**: wien d'Gewiichter setzt, bestëmmt effektiv d'Ranking, also kann eng „Formel" eng politesch oder kommerziell Entscheedung als objektiv Berechnung wäschen. Dokumentéieren, wien d'Gewiichter wéi gesat huet.
- **Duebelzielen vun engem Critère, dee scho soss iergendwou erfaasst ass**: „Käschte-Effektivitéit" als ee Critère scoren, wärend *och* separat „Käschte-Impakt" gescort gëtt, gewiicht Geld iwwer, relativ zu den anere Critèren, ouni datt dat iergendeen virgesinn huet.
- **Falsch Präzisioun**: e Score vu 0,71 mat zwou Dezimalstellen implizéiert méi Rigueur wéi déi zugrondeliegend 0–10-Stakeholder-Bewäertungen tatsächlech ënnerstëtzen, an d'Inter-Rater-Variabilitéit vun dëse Bewäertungen gëtt dacks guer net gemellt.

## Quellen

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
