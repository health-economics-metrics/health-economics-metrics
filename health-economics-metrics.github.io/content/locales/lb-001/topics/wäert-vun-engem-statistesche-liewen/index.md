# Wäert vun engem statistesche Liewen (VSL)

Den Wäert vun engem statistesche Liewen (VSL) — am UK-Gebrauch „Wäert vun engem verhënnerten Doudesfall" (VPF) genannt — ass de Betrag, dee reng *Bevëlkerung* kollektiv bereet ass ze bezuelen, fir d'Risiko vun engem statistesche Doud ze reduzéieren, ofgeleet aus Studie zur Loun-Risiko-Ofwiegung (wéi vill zousätzlech Pai Aarbechter fir geféierlech Jobs verlaangen) an Ëmfroe mat ausgedréckte Präferenzen. Et ass net de Präis vum Liewe vun enger identifizéierter Persoun; et ass e Bevëlkerungsrisiko-Konstrukt, an e Softwareingenieur, deen risikoreduzéierend Systemer baut — Triage-Algorithmen, Ambulanz-Dispatch, Sécherheetsiwwerwaachung — muss wëssen, datt et aus enger anerer theoretescher Traditioun kënnt wéi [Zuelungsbereetschaft-Schwellewäerter](../zuelungsbereetschaft-schwellewäerter/).

## Firwat et wichteg ass

VSL/VPF ass dat Standardinstrument, fir Reduktioune vum Mortalitéitsrisiko an der reglementarescher Käschten-Notzen-Analyse ze monetiséieren: Transportsécherheet, Ëmweltreglementéierung a verschidden ëffentlech Gesondheetsinterventioune lafen hir Business Cases doduerch. Dem HM Treasury säi Green Book publizéiert eng VPF-Zuel, ofgeleet aus UK-Aarbechtsmaart- an Ëmfroevidenz, an den Department for Transport benotzt si direkt an der Bewäertung vun der Stroossesécherheet. Dat ass eng wierklech aner Bewäertungstradition wéi d'QALY × Zuelungsbereetschaft-Schwellewäert-Methodologie: d'Schwellewäert-Approche bewäert Gesondheetsgewënn géint dat, wat e Gesondheets*budget* aktuell um Rand produzéiert, während VSL/VPF Risikoreduktioun géint dat bewäert, wat Leit an engem Aarbechtsmaart oder enger Ëmfro verroden, datt si dofir géife bezuelen. Déi zwee Kadere si net ëmmer versöhnbar, a béid am selwechte Fall ze benotzen, ouni dat unzeerkennen, ass en heefegen analytesche Feeler.

## D'Mathematik

```
Vermeid Doudesfäll = Bevëlkerung × Risikoreduktioun_pro_Persoun
  (Risikoreduktioun_pro_Persoun ass eng Wahrscheinlechkeet, z. B. 0,000001 = 1-op-eng-Millioun
   Reduktioun vum jäerlechen Mortalitéitsrisiko)

Monetiséierten Mortalitéitsnotzen = vermeid_Doudesfäll × Wäert_vum_verhënnerten_Doudesfall
```

## Berechent Beispill

Eng Regioun mat 800.000 Leit profitéiert vun enger digitaler Dispatch-/Triage-Interventioun fir Stroossesécherheet, déi dem Mortalitéitsrisiko vun all Persoun jäerlech em 1 op eng Millioun (0,000001) reduzéiert:

```
Vermeid Doudesfäll = 800.000 × 0,000001 = 0,8
```

Mam UK-Wäert vum verhënnerten Doudesfall, 2.180.000 £ (HM-Treasury-/DfT-Zuel, Präisser 2023/24 — d'Green Book aktualiséiert dës jäerlech, virun der Zitatioun an enger lafender Analyse nei verifizéieren):

```
Monetiséierten Mortalitéitsnotzen = 0,8 × 2.180.000 £ = 1.744.000 £/Joer
```

Just ënner 1,75 Millioune £ pro Joer u monetiséiertem Mortalitéitsnotzen, aus enger Risikoreduktioun, déi déi meescht vun der betraffener Bevëlkerung individuell ni géif gewuer ginn.

## Bezuch zur Softwareentwécklung

Sécherheetskritesch Software-Teams — Firmware vu medizineschen Apparater, Software fir autonom Gefierer, industriell Steierungssystemer — stinn genau virun dësem Präisproblem, wa se de Käschten-Notzen-Fall fir eng Sécherheetsinvestitioun opbauen: wéi präist een „ee katastrophale Feeler verhënneren", wann de Feeler seelen, schwéier a iwwer eng grouss Notzerbevëlkerung verdeelt ass? VSL/VPF ass e Joerzéngte aalt, ëffentlech dokumentéiert real Virbild, fir eng Zuel op eng seelen, schwéier Risikoreduktioun um Bevëlkerungsniveau ze setzen — déiselwecht Form vun Argument wéi d'Bewäertung vun enger SRE-Investitioun géint e seelenen, katastrophalen Ausfall, just mat engem Mortalitéitsoutcome amplaz engem Ausfallzäit-Outcome.

## Falen

- **VSL als „de Präis vun engem identifizéierte Liewen" behandelen**: dat ass et net. VSL/VPF ass e statistescht Bevëlkerungskonstrukt, ofgeleet aus Risikoreduktiouns-Ofwiegungen iwwer vill Leit, keng Bewäertung vum Liewen oder Doud vun enger spezifescher Persoun.
- **Duebelzielung géint eng QALY-baséiert Berechnung vum nettomonetären Notzen**: eng VSL/VPF-Zuel an eng separat QALY × Schwellewäert-Berechnung am selwechte Fall ze benotzen, ouni se ofzestëmmen, zielt de Wäert vun deene selwechten vermeidenen Doudesfäll roueg zweemol. Een Kader pro Fall wielen.
- **Eng VSL-Schätzung iwwer Kontexter ouni Upassung iwwerdroen**: e VSL, deen aus dem Aarbechtsmaart vun engem Land oder aus Loun-Risiko-Daten vun Erwuessenen am Aarbechtsalter ofgeleet ass, onugepasst op en aneren Akommeskontext oder eng aner Bevëlkerung (Kanner, Rentner) ugewannt, ass e laangjärege, wierklech ëmstriddene methodologesche Problem — kee geléissten.

## Quellen

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
