# Sozialen Return on Investment (SROI)

SROI erweidert de [ROI](../return-on-investment/) op Outcomes, déi Mäert net präisen — Wuelbefannen, sozial Verbindung, Ëmweltimpakt — andeems se mat finanzielle Proxyen monetiséiert ginn, fir *all* betraffe Stakeholder.

## Firwat et wichteg ass

Vill vun deem, wat Gesondheets- a Gemengeninterventiounen produzéieren, beréiert ni eng Budgetzeil: reduzéiert Eenzamkeet, Entlaaschtung vu pfleegende Familljen, Beschäftegungsgewënn, Wierde. SROI, gereegelt duerch déi siwe Prinzipie vu Social Value International (Stakeholder abannen, wäert wat zielt, net iwwerbehaapten, transparent sinn, verifizéieren…), produzéiert Aussoen wéi „3,20 £ u sozialem Wäert pro investéierten 1 £." D'Ufuerderunge vum UK-ëffentleche Beschaffungswiesen un de soziale Wäert maachen SROI-arteg Evidenz kommerziell relevant: Offere fir ëffentlech Verträg (och NHS) kréien Punkte fir demonstréierte sozialen Wäert.

## D'Mathematik

```
SROI-Verhältnis = PV(monetiséiert sozial Outcomes) / PV(Investitioun)

Fir all Outcome:
  Wäert = Quantitéit × finanzielle Proxy × Attribuéierung × (1 − Deadweight) × (1 − Verdrängung)

Deadweight    = wier souwisou geschitt
Attribuéierung = Undeel, deen anerer verursaachen
Verdrängung   = Notzen vun anzwousch anescht verréckelt amplaz geschaaft
Drop-off      = Zerfall vum Outcome iwwer d'Joren
```

D'Upassungsfaktore siPE d'Integritéit vun der Method: ouni se ass SROI Fiktioun mat engem Währungszeechen.

## Berechent Beispill

Eng Befriending-App, déi isoléiert eeler Erwuessen mat Fräiwëllegen verbënnt; Programmkäschten 200.000 £/Joer; 1.500 aktiv Paren.

```
Outcome: reduzéiert Eenzamkeet bei 1.500 Leit
  Proxy: Wuelbefannens-Bewäertung vun der „Entlaaschtung vun der Eenzamkeet" ≈ 1.800 £/Persoun/Joer
  Deadweight 25 % (e puer hätte souwisou Verbindung fonnt)
  Attribuéierung 80 % (e puer Credit geet un aner Servicer)

Wäert = 1.500 × 1.800 × 0,80 × 0,75 = 1.620.000 £

Outcome: reduzéiert Hausdokter-Besicher, 1.500 × 1,2 Besicher × 42 £ = 75.600 £ (fir Zueler real)

SROI = (1.620.000 + 75.600) / 200.000 ≈ 8,5 : 1
```

Bemierkt, datt d'Verhältnis zu 96 % proxy-bewäert Wuelbefannen ass an zu 4 % haart Cash. Dat ass legitimt SROI — awer et muss als sozialen Wäert presentéiert ginn, a däerf ni implizéieren, datt 1,7 Mio. £ op d'Bank ze huele sinn.

## Bezuch zur Softwareentwécklung

SROI ass de éierleche Kader fir Engineering-Aarbecht, deenen hir Beneficiairen ausserhalb vum bezuelenden Team sinn: Open-Source-Maintenance, Accessibility-Verbesserungen, Plattformaarbecht, déi vun aneren Teams verbraucht gëtt, Investitioun an Entwéckler-Communautéiten. Déi iwwerdroebar Mechanik: all Stakeholder identifizéieren, mat uginnenen Proxyen monetiséieren an Deadweight-/Attribuéierungs-Rabatter uwenden (wier dee OSS-Fix souwisou geschitt? wéi vill vum Gewënn ass Är Aarbecht géint dee vum Ökosystem?). D'Disziplin, *déi eege Impaktbehaaptungen ze diskontéieren*, ass dat, wat SROI vun enger Marketingzuel ënnerscheet.

## Falen

- **Proxy-Shopping**: déi generéisste verfügbar Wuelbefannens-Bewäertung wielen.
- **Deadweight/Attribuéierung iwwersprangen** — déi heefegst Inflatioun, déi dacks d'Verhältnis verduebelt.
- **Verhältnisvergläich iwwer Studien**: SROI-Verhältnisser si methodesensibel; nëmmen bannent engem konsequente Kader vergläichen.
- **Sozialen Wäert als cashbar Ersparnisser** engem Budgetverantwortleche presentéieren.

## Quellen

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
