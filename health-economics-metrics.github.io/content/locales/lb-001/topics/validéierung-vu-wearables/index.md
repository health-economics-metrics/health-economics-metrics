# Validéierung vu Wearables

Validéierungsmetriken quantifizéieren, wéi gutt d'Moossunge vun engem Wearable mat engem klineschen Goldstandard iwwereneestëmmen (EKG fir Häerzfrequenz, Polysomnographie fir Schlof): **MAPE**, Konkordanzkorrelatioun, Bland–Altman-Iwwereneestëmmung — plus d'operationell Metriken, déi d'Real-World-Datequalitéit begrenzen: **Dréizäit-Compliance** an **Datevollstännegkeet**.

## Firwat et wichteg ass

Validéierung ass d'Viraussetzung fir alles Nofolgend: en Apparat, deen keng Iwwereneestëmmung mat der Referenzmoossung beweise kann, kann keng [digital Endpunkten](../digital-endpunkten-a-biomarker/) verankeren, keng [RPM-Ofrechnung](../ökonomie-vum-remote-patient-monitoring/) ënnerstëtzen an keng klinesch Behaaptunge droen. Déi akzeptéiert Schwellewäerter vum Feld fir d'Häerzfrequenz: **MAPE ≤5 %** (streng) oder **≤10 %** (liberal) géint EKG. Referenzpunkte aus der Literatur: Oura Gen 3 Rouhéierzfrequenz-MAPE 1,67 % (CCC 0,97); Fitbit Charge 6 MAPE ~5,5 % — Konsumentegeräter iwwerspanne elo d'Grenz zur klinescher Qualitéit, genau dofir ass d'Moossung pro Gerät a pro Krankheet wichteg.

## D'Mathematik

```
MAPE = (1/n) Σ |gemooss_i − Referenz_i| / Referenz_i × 100

CCC (Konkordanzkorrelatioun) = Iwwereneestëmmung, déi souwuel Korrelatioun
      wéi och systematesche Bias abezitt (Pearson r, bestrooft duerch Location-/Scale-Shift)

Bland–Altman: mëttleren Bias ± 1,96 SD Grenze vun der Iwwereneestëmmung — weist, ob
      de Feeler vun der Gréisst vum Wäert ofhänkt

Operationell Gaten:
Dréizäit-Compliance = gedroen Zäit / Protokollzäit × 100
Datevollstännegkeet = beobachte Datepunkten / erwaart × 100
```

D'Validéierung muss **pro Aktivitéitszoustand** (Rou, Beweegung, Schlof) a pro Bevëlkerung gemellt ginn — optesch PPG-Sensorik verschlechtert sech mat Beweegungsartefakter, schlechtem Kontakt an donkelen Hauttéin, e dokumentéierte gerechtegkeetsrelevante Feelermodus.

## Berechent Beispill

E Virtual-Ward-Programm wielt e Monitoring-Wearable. Kandidat A: Rou-MAPE 2,1 %, Sport-MAPE 11,4 %. Kandidat B: Rou 3,8 %, Sport 6,9 %.

```
Usecase: Erkennung vu Patienten, déi sech doheem verschlechteren — Alarmer léisen bei
anhalend erhéijter HF aus, dacks während Aktivitéit.
Dem Kandidat A seng Schlagzeil (2,1 %) gewënnt d'Broschür; Kandidat B gewënnt den
Usecase: am alarmrelevante Zoustand (Beweegung) heescht dem A seng 11,4 % Feeler
bei HF 100 = ±11 bpm — déi ganz Alarmschwellebandbreet ofdeckend,
wat falsch Eskalatioune generéiert (all eng Pfleeg-Interventioun, ~40 £) oder Verpassten.

Ökonomie vu falsche Alarmer: 500 Patienten × 2 zousätzlech falsch Alarmer/Woch × 40 £
= 2,08 Mio. £/Joer u Feelerkäschten duerch d'Wiele vun der falscher Validéierungszuel.
```

## Bezuch zur Softwareentwécklung

Ingenieuren konsuméieren Validéierungsdaten, wa se Sensoren auswielen, an *produzéieren* se, wa se Moossfeatures bauen — béid Rolle brauchen déiselwecht Disziplin: um Deployment-Zoustand testen, net um Demo-Zoustand (de Software-Analogon: op Ärer Produktiounsworkload benchmarken, net op där vum Fournisseur). Dréizäit a Vollstännegkeet si Produkt-Engineering-Outcomes — Komfort, Batterielaafzäit, Design vum Luederitual a Sync-Zouverlässegkeet entscheeden, ob d'RPM-Ofrechnungsgat vun 16-Deeg-an-30 erfëllt gëtt ([Ökonomie vum Remote Patient Monitoring](../ökonomie-vum-remote-patient-monitoring/)) an ob Studiendatesätz analyséierbar sinn. Feelend Daten als designt Signal behandelen: „net gedroen", „gedroen awer kee Signal" a „Sync gescheitert" vun Dag eent un am Schema ënnerscheeden — zu null zesummegefall vergëfte si all nofolgend Analyse.

## Falen

- **Aggregéierte MAPE, dee bedéngungsspezifescht Versoen verstoppt** — d'Fal vum berechente Beispill.
- **Validéierungsbevëlkerung ≠ Deployment-Bevëlkerung**: Alter, Hautton, Tremor, Adipositas verréckele all de Feeler vum optesche Sensor; d'Studiendemographie préifen.
- **Korrelatioun gemellt, wou Iwwereneestëmmung gebraucht gëtt**: héich Pearson r mat systematesche Bias klasséiert trotzdem géint absolut Schwellewäerter falsch — op CCC/Bland–Altman bestoen.
- **Vollstännegkeet duerch Imputatioun opgeblosen**: opgefëllt Lächer als beobachte Daten gemellt.

## Quellen

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
