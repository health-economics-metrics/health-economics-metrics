# Digital Endpunkten a Biomarker

E digitale Biomarker ass eng objektiv physiologesch oder Verhalensmooss, déi iwwer Sensoren gesammelt gëtt (Gaangvitess vum Telefon, Schlof vun engem Wearable, Tremor aus Akzelerometrie). E digitalen Endpunkt ass esou eng Mooss, déi zu engem **Studien-Outcome** erhuewe gëtt — benotzt, fir Behandlungseffekter ze demonstréieren. D'Promotioun vun „Daten, déi d'Gerät emittéiert" zu „Evidenz, déi e Regulator akzeptéiert" geet iwwer eng definéiert Validatiounsleeder.

## Firwat et wichteg ass

Traditionell Studienendpunkten sinn episodesch (Klinikbesich all 3 Méint) an deier; digital Endpunkten si kontinuéierlech, ökologesch (richtegt Liewen, net Klinikleeschtung) a bëlleg pro Observatioun — si kënnen Studien verkleinern, Effekter méi fréi detektéieren an dezentraliséiert Studien erméiglechen. De Fang ass d'Validatioun: de akzeptéierte Kader (FDA-ausgeriicht, dräi Säulen) verlaangt **Verifikatioun/analytesch Validatioun** (de Sensor mëss d'kierperlech Gréisst genau), **klinesch Validatioun** (d'Mooss reflektéiert de klinesche Zoustand, deen se behaapt) an en demonstréierten **bedeitungsvollen Aspekt vun der Gesondheet** (Patienten këmmere sech ëm dat, wat et erfaasst). En Endpunkt ouni alle dräi ass Telemetrie, keng Evidenz.

## D'Mathematik

```
Analytesch Validatioun: Iwwereneestëmmung mat Referenz (kuckt wearable-validation.md —
                        MAPE, CCC, Bland-Altman)
Klinesch Validatioun:   Korrelatioun/Diskriminatioun géint klinesch Anker
                        (Known-Groups-Validitéit, Responsivitéit op Ännerung)
Endpunkt-Ökonomie:
  detektéiert Evenementer pro Patient-Joer (kontinuéierlech) vs. Probeentnahm pro Besuch
  Studien-Power: kontinuéierlech Moossen reduzéieren d'Stéchprouf, wann d'Varianz
  tëscht de Besicher dominéiert — N ∝ σ²/Δ², a σ² fält mat dichter Probeentnahm
```

## Berechent Beispill

Eng Parkinson-Studie iwwerleet Gaangvitess vun engem Handgelenk-Sensor géintiwwer véierdeljäerleche klinesch bewäertete Scores:

```
Klinik-Endpunkt:   4 Moossunge/Patient/Joer, héich Dag-zu-Dag-Rauschen
Digitale Endpunkt: ~200 passiv Moossunge/Patient/Joer

D'Varianz vun der jäerlecher Ännerungsschätzung fält ~5× bei dichter Probeentnahm →
detektéierbar Effektgréisst bei fixer Power verbessert sech ~√5 ≈ 2,2×, oder
äquivalent schrumpft d'Stéchprouf ëm ~40–60 % fir déiselwecht Hypothees.
Bei 25.000 £ pro agespaart Patient bedeit 200 Patienten manner ≈ 5 Mio. £ gespuert
pro Studie — de kommerzielle Fall fir d'Validatiounsinvestitioun
(selwer vläicht 1–2 Mio. £) iwwer d'Pipeline vun engem Sponsor.
```

## Bezuch zur Softwareentwécklung

Digital Endpunkte sinn eng Data-Engineering-Disziplin an klineschem Gewand: **Provenienz a Versionéierung** (Algorithmus-Updates mëttels an der Studie bedrohen d'Vergläichbarkeet — de [PCCP](../reglementaresch-evaluatioun-vu-ki/)-Problem a Studieform; Versioun spären a Bréck-validéieren); **Design fir fehlend Daten** (Wear-Time-Lücke si informativ, net zoufälleg — kuckt [Wearable-Validatioun](../validéierung-vu-wearables/); Imputatiounswielen sinn wëssenschaftlech Behaaptungen); an **Edge-/Cloud-Split-Entscheedungen**, déi änneren, wéi en Rohsignal spéider iwwerhaapt nach erhuelbar ass. Equipen, déi d'Messpipeline vum Dag 1 un als reglementéiert Software behandelen — getest, versionéiert, dokumentéiert — kafen d'Glaubwürdegkeet vun hiren Endpunkte bëlleg; Validatioun op eng séier gebauter Pipeline nozerüsten ass, wou digital-Endpunkt-Programmer stierwen.

## Falen

- **Korrelatioun-mat-Klinik als voll Validatioun**: e mangelhaft Klinikmooss ze treffen beweist Ierfschaft, net Wouerecht; géint dee bedeitungsvolle Gesondheetsaspekt validéieren.
- **Reglementaresch Risiko vun neien Endpunkten**: en beispilllose Endpunkt kann wëssenschaftlech iwwerleeën sinn an trotzdem eng Soumissioun versenken — fréi mat Regulatoren engagéieren (Qualifikatiounsprogramme existéieren).
- **Sensor-Populatiouns-Mismatch**: Validatioun u jonke gesonde Handgelenker, Asaz bei eelere Patienten mat Tremor an Pigmentéierungsënnerscheeder, déi de PPG ni gesinn huet.
- **Feature-Drift**: den Gaang-Algorithmus op nei Daten nei trainéieren definéiert den Endpunkt mëttels an der Studie roueg nei.

## Quellen

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
