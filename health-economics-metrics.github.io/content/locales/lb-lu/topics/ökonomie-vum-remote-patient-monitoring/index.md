# Ökonomie vum Remote Patient Monitoring

D'Ökonomie vun der Rembourséierung an de Käschten-Offsets beim Iwwerwaachen vu Patienten doheem: an den USA e definéierte CPT-Code-Revenue-Stack; an nationale Gesondheetsdéngschter Admissiouns-Vermeidung a Virtual-Ward-Ökonomie bis zur voller **Hospital-at-Home**-Substitutioun.

## Firwat et wichteg ass

RPM ass, wou Gerätdaten zu ofrechenbarer Gesondheetsversuergung ginn. D'US-Medicare-Struktur (nationalen Duerchschnëtt 2025) ass ongewéinlech explizit:

```
99453  Setup & Patienteschulung        ~19,73 $  eemol (no 16 Deeg Daten)
99454  Geräteversuergung + Iwwerdroung ~43,03 $  pro 30 Deeg — BRAUCH ≥16 Deeg
                                                  u Moossunge an de 30
99457  éischt 20 Min/Mount Management  ~47,87 $  brauch ≥20 protokolléiert Minutten
99458  all zousätzlech 20 Min         ~38,49 $
```

E konformt Patientemount stapelt sech op ongeféier **90–130 $ PMPM**. Op der Käschten-Offset-Säit weisen Hospital-at-Home-Programmer (CMS Acute Hospital Care at Home Waiver: 300+ Spideeler) ~1.800–3.000 $ gespuert pro Encounter am Verglach zur stationärer Versuergung, mat méi nidderegen Heiansaufnamen an Infektiounen — déi kloerst Demonstratioun, datt Monitoring plus virtuell Versuergung déi deierst Ressource vum System ersetze kënnen, dat besat Bett.

## D'Mathematik

```
RPM-Revenue (USA) = ageschriwwen × ofrechnungskonform Undeel × Code-Stack PMPM
  — d'16-Deeg-Regel mécht Dréizäit-Compliance (wearable-validation.md)
    zu enger Revenue-Variabel, an d'20-Minutten-Regel mécht
    Protokolléierung vun der klineschen Zäit zu enger Engineering-Ufuerderung

NHS-Stil-Wäert    = vermeidener Admissiounen × marginal Admissiounskäschten
                  + substituéiert Bettdeeg × (stationär − Virtual-Ward-Dagekäschten)
                  − Servicekäschten (Geräter, Plattform, Monitoring-Personal)
  (kuckt emergency-attendance-avoidance.md a bed-days-saved.md fir d'
   Attribuéierungs- a Marginalkäschte-Regelen)
```

## Berechent Beispill

Eng US-Praxis schreift 400 Hypertonie-Patienten an; 70 % erreechen d'16-Deeg-Schwell an engem typesche Mount; Managementminutten fir 60 % protokolléiert:

```
Monatlecht Revenue ≈ 400 × [0,70 × 43,03 + 0,60 × 47,87] = 400 × 58,84 ≈ 23.500 $
Jäerlech ≈ 282.000 $; Servicekäschten (Geräter 12 $/Mt., Personal 0,8 VZÄ) ≈ 180.000 $
Marge ≈ 100.000 $/Joer — a bemierkt, datt d'Hebelen Engineering-Hebele sinn:
d'16-Deeg-Compliance vun 70 % → 85 % ze hiewen bréngt ~31.000 $/Joer derbäi
(Geräkomfort, Sync-Zouverlässegkeet, Erënnerungsdesign).
```

NHS-Spigelbild: eng 50-Better-Virtual-Ward bei 80 % Belegung, déi stationär Deeg mat 150 £ Nettospueren/Dag ersetzt ≈ 50 × 0,8 × 365 × 150 ≈ **2,19 Mio. £/Joer** brutto — géint Plattform, Geräter an d'Gemengepfleegeteam, dat se besetzt.

## Bezuch zur Softwareentwécklung

RPM-Plattforme si dat rare Produit, wou **Uptime a Sync-Zouverlässegkeet sech direkt a Revenue ëmwandelen** (eng Woch gescheitert Syncs brécht dat 16-Deeg-Gat fir eng Kohort) a wou audit-reife Zäitverfolgung (d'20-Minutten-Regel) e Feature vun éischter Klass ass, keng Nodenken. Baut fir: Compliance-Dashboards pro Patient, déi gefärdeten Ofrechnungsméint opdecken, solaang se nach erholbar sinn; Datespuren mat Zäitstempel, déi manipulatiounssécher sinn (Zueler-Audite si Routine); an Tuning vun der Alarm-Ökonomie — all Alarm verbraucht d'Minutte vum Monitoring-Team, déi souwuel d'ofrechenbar Eenheet wéi och déi knapp Ressource sinn ([Ökonomie vum Screening](../ökonomie-vum-screening/) regéiert d'Auswiel vum Schwellewäert).

## Falen

- **Aschreiwung ≠ Revenue**: déi konform Undeel ass d'Zuel; modelléieren, net unhuelen.
- **US-Codes an NHS-Cases iwwerpflanzen** — nationale Gesondheetsdéngschter kafen Admissiouns-Vermeidung, keng CPT-Stacks; dat zweet Modell lafen loossen.
- **Offset-Behaaptungen zu Duerchschnëttskäschte** fir Admissiounen, deenen hir Fixkäschten bleiwen (kuckt [Grenzkäschte vs. Duerchschnëttskäschte](../grenzkäschte-vs-duerchschnëttskäschte/)).
- **Saturatioun vum Monitoring-Team**: d'Alarmvolumen skaléiert mat der Aschreiwung; d'Personalzeil ass d'bindend Contrainte, déi déi meescht Modeller auslooss.

## Quellen

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
