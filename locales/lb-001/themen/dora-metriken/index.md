# DORA-Metriken

D'DORA-Metriken (DevOps Research and Assessment) sinn véier Moossen vun der Software-Delivery-Leeschtung — Deployment-Frequenz, Lead Time fir Ännerungen, Change Failure Rate an Erholungszäit no feelgeschloenen Deployments — plus Zouverlässegkeet als fënneften. Si sinn d'am meeschte validéiert Delivery-Benchmarks vum Feld, a jidderee vun hinne gëtt et eng direkt gesondheetsökonomesch Liesung.

## Firwat et wichteg ass

Dem DORA seng Joerzéngt vun Fuerschung verbënnt dës Metriken mat Organisatiounsleeschtung. D'Cluster vum 2024-Rapport: **Elite**-Equipen deployen op Ufro (méi Mol/Dag), brauchen manner wéi ee Dag vum Commit bis an d'Produktioun, hu ~5 % feelgeschloen Ännerungen an erhuele sech an manner wéi enger Stonn; **niddreg** Performer deployen monatlech oder seelen, brauchen Méint, hu ~40 % feelgeschloen Ännerungen an erhuele sech a Wochen. Fir e Gesondheetssystem sinn dat keng IT-Vanity-Zuelen: si bestëmmen, wéi séier klineschen Wäert bei d'Patienten kënnt a wéi vill Risiko all Ännerung dréit.

## D'Mathematik

```
Deployment-Frequenz     = Produktiouns-Deployments / Zäit
Lead Time fir Ännerungen = t(Deploy) − t(Commit), Median
Change Failure Rate     = feelgeschloen Ännerungen / Ännerungen insgesamt × 100
Erholungszäit (MTTR)    = t(restauréiert) − t(Feeler), Median
Zouverlässegkeet        = SLO-Erreechung (Verfügbarkeet, Latenz, Korrektheet)
```

Gesondheetsökonomesch Iwwersetzungen:

```
Lead Time     → cost-of-delay.md: Wochen an der Pipeline × CoD (£ oder QALYs/Woch)
Feelerquote   → Adverse-Event-Quote vun der Softwareännerung: CFR × Käschte pro Incident
Erholungszäit → Ausfallschued: MTTR × (verluer klinesch Aktivitéit + Sécherheetsexpositioun)/Std.
Zouverlässegkeet → Notzendiskont: e Service bei 99 % Verfügbarkeet liwwert ≈ 0,99
                vu sengem modelléierten Notzen — dat Software-Analogon zur Adhärenz
```

## Berechent Beispill

Dem Equipe vun der Patientenfloss-Software vun engem Trust, virun/no enger Delivery-Engineering-Investitioun:

```
                    Virdrun     Duerno
Deploys             monatlech   wöchentlech
Lead Time           6 Wochen    4 Deeg
CFR                 25 %        8 %
MTTR                2 Deeg      2 Stonnen
```

D'Equipe liwwert ~30 Verbesserunge/Joer mat duerchschnëttlechem Wäert pro Verbesserung vun 4.000 £/Woch ([CoD](../verzögerungskäschten/)). D'Lead-Time-Kierzung vun ~5,4 Wochen zitt de Notzenstroum vun all Verbesserung no vir: 30 × 5,4 × 4.000 ≈ **648.000 £/Joer** u méi fréi geliwwertem Wäert. CFR-Verbesserung: 30 × (0,25 − 0,08) = ~5 manner feelgeschloen Ännerungen/Joer × 15.000 £ duerchschnëttlech Incident-Käschten (Ausfall vum klinesche System, Remediatioun) = **76.500 £/Joer**. D'Delivery-Investitioun gëtt an där selwechter Währung bewäert wéi all klinesch Interventioun.

## Bezuch zur Softwareentwécklung

Dat *ass* d'Softwaresäit — de Bezuch, deen et wäert ass ze nennen, ass d'Géigerichtung: DORA-Metriken sinn d'operationell Metriken vum Spidol a verschiddene Kleeder. Lead Time ↔ [Referral to Treatment](../iwwerweisung-bis-behandlung/); Change Failure Rate ↔ [Readmissiounsquote](../heiansaufnamquote/) (Aarbecht, déi zréckkoum); MTTR ↔ Noutfallreaktioun; Deployment-Frequenz ↔ Klinik-Duerchsaz. Verbesserungsmethoden iwwerdroen sech a béid Richtungen, well béid Schlaangesystemer ënner Sécherheetsaschränkungen sinn. Bemierkt och dem DORA 2025 säi KI-Befund: KI-Adoptioun korreléiert elo mat méi héijem Duerchsaz, awer *méi schlechter* Stabilitéit — eng Interventioun mat Wirksamkeet a Niewewirkungen, déi genau déi Nettonotzen-Analyse verlaangt, déi dëse Repo léiert (kuckt [Produktivitéit vun Entwéckler mat KI](../produktivitéit-vun-entwéckler-mat-ki/)).

## Falen

- **Metrik-Gaming**: Deploy-Zuelen opgeblose duerch No-Op-Releases; CFR gesenkt, andeems Hotfixes net als Feeler zielen. Evenementer präzis definéieren, wéi d'HTA Endpunkten definéiert.
- **Equipeiwwergräifend Ranglëschten**: DORA-Cluster vergläichen Praktiken, net Equipen mat verschiddene Risikoprofiler; eng Klinik-Systemer-Equipe bei „héich" ka optimal sinn, wou „Elite" liichtsënneg wier.
- **Eng Metrik optiméieren**: Vitesse ouni CFR/Zouverlässegkeet ass de Duerchsaz-Instabilitéits-Trade-off — ëmmer déi véier zesumme mellen (si sinn eng [Käschte-Konsequenz-Tabell](../käschte-konsequenz-analyse/), kee Score).

## Quellen

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
