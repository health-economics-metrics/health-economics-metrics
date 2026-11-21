# EQ-5D

EQ-5D ass dem EuroQol-Grupp säi standardiséierte Froebou fir gesondheetsbezunn Liewensqualitéit ze moossen. Et ass d'Instrument, dat d'Utilitéitsgewiichter an de meeschte [QALY](../qualitéitsbereenegt-liewensjoer/)-Berechnunge produzéiert — dem NICE säi Referenzfall nennt et déi bevorzugt Mooss fir Erwuessen.

## Firwat et wichteg ass

All digitaalt Gesondheetsprodukt, dat QALYs behaapte wëll, brauch Utilitéite vun engem validéierten Instrument, an EQ-5D ass de Standard am UK a vill vun Europa. Et ass kuerz genuch, fir an eng App agebaut ze ginn (5 Froen + eng visuell Skala), wat heescht, datt Softwareprodukter HTA-Grad-Outcome-Daten als Niewewierkung vun der normaler Notzung kënne sammelen — e strukturelle Virdeel géintiwwer Medikamenter, déi eege Studie brauchen.

## D'Mathematik

Den EQ-5D-5L stellt eng Fro an all vu **5 Dimensiounen** — Mobilitéit, Selbstversuergung, üblech Aktivitéiten, Péng/Onbehagen, Angscht/Depressioun — jiddwer op **5 Niveauen** beäntwert (keng Problemer … extrem Problemer), plus eng visuell Analogskala vun 0–100 (EQ VAS).

```
Gesondheetszoustand = 5-Zifferen-Profil, z. B. „21221"
Utilitéitsindex = value_set(Profil)

De Value Set ass landesspezifesch, ofgeleet aus Time-Trade-Off- /
Discrete-Choice-Ëmfroen vun der Allgemengheet. Anker: 1 = voll Gesondheet,
0 = dout; Zoustänn méi schlëmm wéi den Doud si negativ (UK-3L-Set-Buedem: −0,594).
```

D'QALY-Arithmetik geet dann als `Dauer × Utilitéit` weider.

## Berechent Beispill

Eng Muskel-Skelett-Reha-App mëss EQ-5D-5L beim Onboarding an no 6 Méint bei 1.000 ofschléissende Notzer.

```
Mëttel-Utilitéit bei der Baseline:  0,62
Mëttel-Utilitéit no 6 Méint:        0,71
Gewënn bleift (ugeholl) 1 Joer: (0,71 − 0,62) × 1,0 = 0,09 QALYs pro Notzer
```

Géint eng Kontrollgrupp-Ännerung vun 0,03 (natierlech Erhuelung) ass de zougeschriwwene Gewënn 0,06 QALYs/Notzer. Bei 20.000–30.000 £/QALY monetiséiert: **1.200–1.800 £ Gesondheetswäert pro ofschléissende Notzer** — d'Zuel, déi d'Präisverhandlung vun der App mat engem Zueler verankert. (Minimal klinesch wichteg Ënnerscheeder fir den EQ-5D-Index leien allgemeng am Beräich 0,03–0,08, also ass 0,06 plausibel, muss awer de Kontrollverglach passéieren; kuckt [Patient-Reported Outcomes](../patientegemellt-outcomes/).)

## Bezuch zur Softwareentwécklung

- **Instrumentéieren.** EQ-5D bei der Aschreiwung an a Follow-up-Intervalle si e puer Écrane UI; d'Belounung ass HTA-Grad-Evidenz. D'Lizenz vum EuroQol huelen (néideg, fir verschidden Notzunge gratis).
- **De richtege Value Set** fir d'Asazland benotzen — déiselwecht Äntwerten scoren am UK anescht wéi an Däitschland oder Japan.
- **Design-Lektioun**: EQ-5D weist, wéi en winzege standardiséierte Sondage plus eng publizéiert Scoring-Funktioun en vergläichbaren eenzegen Index liwwert. Dat ass d'Muster och fir all glaubwürdegen Developer-Experience-Index — standardiséiert Instrument, publizéiert Gewiichter, net ad-hoc Stëmmungen. Kuckt [SPACE an DevEx](../space-an-devex/).

## Falen

- **Virdrun/Duerno ouni Komparator** — Regressioun zum Mëttel an natierlech Erhuelung blosen naiv Gewënn op.
- **Survivorship-Bias**: nëmmen Notzer moossen, déi engagéiert bliwwe sinn (kuckt [Retention a Churn](../retention-a-churn/)).
- **3L- a 5L-Versiounen oder Value Sets iwwer Studien vermëschen** — systematesch verschidde Zuelen.
- **Plafongeffekter** bei liicht betraffene Populatiounen: vill Notzer scoren bei der Baseline no bei 1,0, wat kee Spillraum léisst, fir Gewënn ze demonstréieren.
- **E Value Set als selbstrechtfäerdegend behandelen**: d'Utilitéitszuelen, déi e Value Set zréckgëtt, goufen selwer iwwer Time-Trade-Off- (oder verwandte choixbaséiert) Ëmfroe vun der Allgemengheet erhuewen — kuckt [Time-Trade-Off-(TTO-)Utilitéits-Elicitéierung](../time-trade-off-tto-utilitéits-erhiewung/), wéi.

## Quellen

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
