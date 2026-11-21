# Return on Investment vu KI

KI-ROI ass de moossbare P&L-Return, deen KI-Initiativen zougeschriwwe ka ginn. De ernüchternde Benchmark: dem MIT seng 2025-„GenAI-Divide"-Fuerschung huet festgestallt, datt trotz 30–40 Mia. $ Enterprise-GenAI-Investitioun **~95 % vun de Piloten kee moossbare P&L-Return gewisen hunn** — an déi erfollegräich 5 % hu identifizéierbar Gewunnechte gedeelt.

## Firwat et wichteg ass

Gesondheetssystemer hunn en Numm fir d'KI-Pilot-Muster: **Pilotitis** — de NHS-Kierfecht vu villverspriechenden Apps, déi éiweg pilotéiert an ni skaléiert ginn. D'MIT-Befunde passen propper op dat, wat d'Gesondheetstechnologie-Bewäertung scho weess: Wäertbehaaptungen brauche vireg spezifizéiert Endpunkten, Attributioun brauch Komparatoren, an „jiddereen fillt, datt et hëlleft" ass keng Notzenzeil. déi erfollegräich Minoritéit an de MIT-Daten huet sech op Back-Office-Automatiséierung mat verfolgbare Käschte-Baselines konzentréiert, an **kaaft Tools hunn ~67 % vun der Zäit Erfolleg, géintiwwer internen Entwécklungen bei ongeféier engem Drëttel dovun** — Prioren, déi an all KI-Investitiouns-Case gehéieren (kuckt [Build vs. Buy](../selwer-bauen-oder-kafen/)).

## D'Mathematik

```
KI-ROI = (zougeschriwwenen Notzen − Gesamt-KI-Käschten) / Gesamt-KI-Käschten

Gesamt-KI-Käschten = Lizenzen/Inferenz (kuckt inference-unit-economics.md)
                   + Integratioun + Datebereetschaft + Evaluatioun
                   + Workflow-Redesign + Gouvernance/Assurance
                   (d'Lizenz ass typesch d'Minoritéit vum Nenner)

Zougeschriwwen Notzen: géint eng Baseline oder Kontroll gemoossen, klasséiert
als Cash / Kapazitéit / Qualitéit no cash-releasing-vs-non-cash-releasing.md
```

## Berechent Beispill

Eng Spidolsgrupp setzt KI fir zwee Notzungsfäll an:

```
Notzungsfall A — Opstelle vu klineschen Bréiwer (Back Office, verfolgbar):
  Baseline: ausgelagert Transkriptioun 380k £/Joer
  Duerno:   Transkriptiounsvertrag kënnegt; Review-Zäit vu Klinikere +60k £
  KI-Käschten: 120k £/Joer all-in
  ROI = (380k − 60k − 120k) / 120k ≈ 167 % — cash-fräisetzend, auditéierbar ✓

Notzungsfall B — „KI-Copilot fir Kliniker" (breet, net verfollegt):
  Notzenbehaaptung: „spuert Zäit iwwer 4.000 Mataarbechter" — keng Baseline erfaasst
  gemoossenen P&L-Effekt: kee beweisbar
  → de 95-%-Eemer, onofhängeg dovun, ob et wierklech hëlleft
```

Den Ënnerscheed ass net d'Qualitéit vun der KI — et ass, ob den Notzen eng **Baseline, e Besëtzer an eng Budgetzeil** hat ([Benefits Realization](../benefits-realization/)).

## Bezuch zur Softwareentwécklung

Dat HTA-geformt Playbook fir KI-Investitioun: **d'Evidenz stufen wéi d'[NICE-ESF-Stufen](../nice-evidence-standards-framework/)** — Demo-Evidenz fir Tools mat niddregem Asaz, kontrolléiert Piloten virun organisatiounsweiten Ausgaben, mat vireg registréierte Rollout-Gatter (dem [DiGA](../dem-däitschland-säin-diga-fast-track/) säi Muster vun der provisorescher Lëschtung mat Delai); **Käschtevermeidung zielen, wéi d'Gesondheetsökonomie Nofroavermeidung zielt** — nëmme reell, wann sech eng spezifesch Budgetzeil beweegt; an **de Pilot selwer mam [EVPI](../erwaarte-wäert-vu-perfekter-informatioun/) bewäerten** — e Pilot, deen d'Rollout-Entscheedung net ka ännere, ass 0 £ wäert. Speziell fir de Slice vun den Entwécklertools kuckt [Produktivitéit vun Entwéckler mat KI](../produktivitéit-vun-entwéckler-mat-ki/).

## Falen

- **Notzendiffusioun**: Wäert, dee sech dënn iwwer dausende Notzer verdeelt, ass per Konstruktioun net moossbar; wiel Notzungsfäll mat konzentréierte, verfolgbare Baselines.
- **Käschtekalkulatioun nëmme mat der Lizenz**: Integratioun, Evaluatioun a Workflow-Redesign dominéieren normalerweis den echten Nenner.
- **Attributiounsdéifstall**: KI, déi zesumme mat Prozess-Redesign agesat gëtt, behaapt dat ganzt Delta.
- **Sunk-Pilot-Eskalatioun**: gescheitert Piloten verlängeren, well Stoppen e Versoen zouginn — d'Sunset-Datum muss vireg ofgemaach ginn.

## Quellen

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
