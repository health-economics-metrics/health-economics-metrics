# Reglementaresch Evaluatioun vu KI

D'Reglementéierungsrahmen, déi KI an der Gesondheetsversuergung regéieren — dem FDA säi Software-as-a-Medical-Device-Regime (SaMD) mat **Predetermined Change Control Plans (PCCPs)** a Real-World-Evaluatiounsprogrammer wéi den NHS AI in Health and Care Award — an wat si ökonomesch kaschten an erméiglechen.

## Firwat et wichteg ass

D'Reglementéierung bestëmmt souwuel d'**Evidenzkäschte fir de Maartzougang** wéi och d'**Käschte vun all spéidere Modellupdate** — bei KI-Produkter ass dat zweet dacks wichtiger. Dem FDA säin traditionelle Modus (Modell fixéieren; fir Ännerunge nei zertifizéieren) huet kontinuéierlech Verbesserung ökonomesch brutal gemaach. D'**PCCP-Guidance (finaliséiert Dezember 2024)** huet d'Ökonomie geännert: e Hiersteller kann *spezifizéiert* zukünfteg Modellupdates vireg autoriséieren — eng Beschreiwung vun de geplangten Ännerungen, e Modifikatiounsprotokoll (wéi all eng validéiert gëtt) an eng Impaktbewäertung — sou datt sanktionéiert Verbesserunge ouni nei Soumissioun erausgi kënnen. Iwwer 1.000 KI-gestëtzt Geräter hunn eng FDA-Autorisatioun; de FDA ënnersicht elo och d'Real-World-Performance-Iwwerwaachung (vireg spezifizéiert Metriken: Baseline-FP/FN-Quoten, Kalibrierungsdrift, Indikatore vum Domain-Shift).

## D'Mathematik

De PCCP ass d'Ökonomie vun der [DORA-Lead-Time](../dora-metriken/), ugewannt op reglementéiert Modeller:

```
Käschte pro Modellupdate (traditionell) = Re-Soumissiounskäschten + Review-Verzögerung × CoD
Käschte pro Modellupdate (PCCP-ofgedeckt) = nëmmen Käschte fir d'Protokollausféierung

Update-Ökonomie iwwer e Produktliewen:
  N Updates × (Soumissiounskäschten + Méint Review × Cost-of-Delay pro Mount)
  géint eemoleg PCCP-Erstellungskäschten + N × Protokollausféierungen
```

Beim NHS-AI-Award-Muster ass de Metrik-Set méi breet wéi Genauegkeet: onofhängeg Real-World-Evaluatioune bewäerten klinesch Leeschtung, Workflow-/Implementatiounseffekter an ökonomeschen Impakt — de ganze [Wirksamkeet → Effektivitéit → Käschte-Effektivitéit](../produktivitéit-vun-entwéckler-mat-ki/)-Pipeline institutionaliséiert.

## Berechent Beispill

E Radiologie-KI-Vendor plangt véierdeljäerlech Modellverbesserungen iwwer 3 Joer (12 Updates):

```
Traditionell: 12 × (80k £ Soumissioun + 4 Méint × 50k £/Mount CoD vum verzögerten Notzen)
            = 12 × 280k £ = 3,36 Mio. £
PCCP-Wee:   250k £ PCCP-Erstellung + 12 × 30k £ Protokollausféierung = 610k £
Ersparnis ≈ 2,75 Mio. £ — a Patiente kréie jidder Verbesserung ~4 Méint méi fréi:
12 × 4 Méint × de klineschen Notzen vum Update, eng QALY-Zeil fir sech.
```

De PCCP ass reglementaresch Unerkennung, datt **Deployment-Frequenz klineschen Wäert huet** — dem Repo seng zentral Kausalkette, vun engem Regulator bestätegt.

## Bezuch zur Softwareentwécklung

De PCCP gutt ze engineeren ass e Softwareproblem: vireg spezifizéiert Evaluatiounssäts, versionéiert Datesätz, automatiséiert Validatiouns-Pipelines, Drift-Monitoring — de reglementéierte Cousin vu Continuous Deployment, wou den „Deploy-Gate" e validéiert Protokoll amplaz vun engem Code-Review ass. Equipen mat reife Eval-Infrastruktur ([KI-Qualitéitsmetriken](../ki-qualitéitsmetriken/)) kréie PCCPs bëlleg; Equipen ouni entdecken, datt d'reglementaresch Aschränkung eigentlech eng Engineering-Reifegrad-Aschränkung ass. Fir Produkter, déi an den NHS akommen, ass de parallele Stack DTAC (klinesch Sécherheet, Dateschutz, Interoperabilitéit) plus [NICE-ESF](../nice-evidence-standards-framework/)-Evidenzstufen — budgetéier se all als [TCO](../gesamtbesëtzkäschten/) fir de Maartzougang.

## Falen

- **PCCP-Scope-Creep-Dreem**: nëmmen *spezifizéiert* Modifikatiounstypen sinn vireg autoriséiert; Architekturännerungen oder nei virgesinn Notzunge brauche weider eng voll Review.
- **Real-World-Drift net iwwerwaacht**: Autorisatioun bei Launch-Performance + stëll Bevëlkerungsdrift = e Produkt, dat baussent senger zertifizéierter Enveloppe performt; Monitoring ass souwuel reglementaresch Erwaardung wéi Selbstverdeedegung.
- **Zertifizéierung mat Wäert verwiesselen**: FDA-/UKCA-Zertifizéierung ≠ een bezilt dofir — dat ass d'[HTA](../gesondheetstechnologie-bewäertung/)-Hürd, déi separat läuft.

## Quellen

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
