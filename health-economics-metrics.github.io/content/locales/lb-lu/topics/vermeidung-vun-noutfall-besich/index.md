# Vermeidung vun Noutfall-Besich

D'Vermeidung vun Noutfall-Besich zielt ED-(A&E-)Besich an Noutfall-Admissiounen, déi duerch Upstream-Interventioun verhënnert ginn — Triage-Apps, Remote Monitoring, Virtual Wards, Urgent-Care-Ëmleedung. Si wandelt „mir hunn et méi fréi gefaange" an eng bezifferte Behaaptung ëm.

## Firwat et wichteg ass

Noutfallversuergung ass dat deierst Routine-Setting am System (ED-Besuchs-Stéckkäschten am Beräich 250–400 £ no National Cost Collection / PSSRU-Zuelen; eng Noutfall-Admissioun ass dausende), an ED-Iwwerfëllung kaskadéiert a Verzögerunge vun Ambulancen a gestrachen Elektivbehandlungen. Alles, wat Nofro upstream sécher léist — Selbstbetreiungs-Rot, Primärversuergung um selwechten Dag, Gemeinschaftsreaktioun — kaaft dem System Kapazitéit un sengem gestresstste Punkt. Dat ass déi Standard-Notzenzeil fir Symptom-Checker, 111-Triage-Servicer a [Remote Patient Monitoring](../ökonomie-vum-remote-patient-monitoring/).

## D'Mathematik

```
Vermeid Besich   = Populatioun × (Baseline-Quote − Interventiouns-Quote)
Brutto-Ersparnis = vermeid Besich × Stéckkäschten pro Besuch
                   (+ vermeid Admissiounen × Admissiounskäschten, getrennt gezielt)

Netto-Ersparnis  = Brutto-Ersparnis − Interventiounskäschten − Käschte vun der neier Pfadnotzung
                   (ëmgeleet Nofro ass net gratis: en 111-Uruff, e Hausdokter-Slot,
                    e Virtual-Ward-Dag hunn all Stéckkäschten)
```

Déi kausal Behaaptung brauch e Komparator: Besuchsquoten trenden a variéieren saisonal, also beweist Virdrun/Duerno eleng näischt.

## Berechent Beispill

E COPD-Remote-Monitoring-Service fir 3.000 Héichrisiko-Patienten. Eng Matched-Control-Evaluatioun weist, datt exazerbatiounsbedéngt ED-Besich vun 0,9 op 0,7 pro Patient-Joer falen, an Noutfall-Admissiounen vun 0,5 op 0,42.

```
Vermeid Besich     = 3.000 × 0,2  = 600 × 300 £   = 180.000 £
Vermeid Admissiounen = 3.000 × 0,08 = 240 × 3.800 £ = 912.000 £
Brutto                                              1.092.000 £/Joer

Käschten: Monitoring-Service 600.000 £; zousätzlech Reaktiounen vu Gemeinschaftsinfirmièren 150.000 £
Netto ≈ +342.000 £/Joer — plus d'QALY-Gewënn vu méi fréi behandelten Exazerbatiounen.
```

Bemierkt, datt d'Admissiounszeil dominéiert: Vermeidung vu Besich eleng bezilt selten e Monitoring-Service; *Admissiounsvermeidung* ass, wou d'Geld ass.

## Bezuch zur Softwareentwécklung

Dat ass **Ökonomie vun der Incident-Vermeidung**. De Wäert vun Observability, Canary-Deploys a Fréiwarnsystemer ass vermeid „Noutfall-Besich" — Pages, War Rooms, Sev-1s — jiddwer mat belaaschte Käschten (Ingenieur-Stonnen × Saz + Clientimpakt). Déiselwecht Modelléierungsreegele gëllen: d'Käschten vum neie Upstream-Pfad ofzéien (Alert-Triage ass net gratis), op Substitutioun oppassen (Alerten, déi Aarbecht schafen ouni Incidenter ze verhënneren, sinn Gesondheetsangscht, keng Gesondheet), an d'Kontrafaktum mat enger Kontroll beweisen (Incident-Quote vun Equipen trenden a regresséieren zum Mëttel, genau wéi ED-Besich).

## Falen

- **Regressioun zum Mëttel**: Héichrisiko-Kohorten, déi no engem schlechte Joer ausgewielt ginn, verbesseren sech onbehandelt; Matched Controls oder Stepped-Wedge-Designs sinn essentiell.
- **Ugebuedsinduzéiert Nofro**: einfach digital Triage kann d'*Gesamtkontakter* erhéijen (méi niddreg Schwell, fir Hëllef ze sichen), wärend den ED-Undeel fält — d'Gesamtkäschte vum System zielen.
- **Besich zu Duerchschnëttskäschte bewäerten**, wann d'ED-Fixkäschte net fale — kuckt [Grenz- vs. Duerchschnëttskäschten](../grenzkäschte-vs-duerchschnëttskäschte/).

## Quellen

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
