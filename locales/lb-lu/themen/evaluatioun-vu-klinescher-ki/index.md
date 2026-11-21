# Evaluatioun vu klinescher KI

Déi zentral Statistike fir e klineschen KI- oder Diagnosemodell ze evaluéieren: Sensitivitéit, Spezifizitéit, AUROC, prädiktiv Wäerter an Number Needed to Screen. Déi zentral ökonomesch Lektioun: **en exzellenten AUROC mécht nach keen käschteeffektiven Asaz** — de Wäert hänkt vum Betriebspunkt, vun der Prävalenz a vun deem of, wat no all Positiv geschitt.

## Firwat et wichteg ass

Regulatoren (FDA, MHRA) autoriséieren klinesch KI op engem **gespaarten Betriebspunkt** — e spezifescht Sensitivitéits-/Spezifizitéits-Paar (z. B. dat éischt FDA-zertifizéiert autonomt Diabetes-Retinopathie-System: Sensitivitéit 87,2 %, Spezifizitéit 90,7 % an der Pivotal-Studie). Gesondheetsökonomen stellen dann déi Fro, op déi Genauegkeetsmetriken net äntwere kënnen: bei der Prävalenz vun denger Asazbevëlkerung, wat *kascht* all Detektioun, a lount et sech, dorop ze handelen? Eng ökonomesch Evaluatioun vu KI fir Retinopathie-Screening (npj Digital Medicine 2024) huet gewisen, datt méi héich Genauegkeet eleng keng Käschte-Effektivitéit garantéiert huet, soubal d'Iwwerweisungskäschte gezielt goufen.

## D'Mathematik

```
Sensitivitéit = TP / (TP + FN)      — vun de wierklech Positiven, Undeel erkannt
Spezifizitéit = TN / (TN + FP)      — vun de wierklech Negativen, Undeel fräigesprach
AUROC         = P(Modell rangéiert en zoufällege Positiven iwwer en zoufällege Negativen)
                0,5 Zoufall … 1,0 perfekt; schwellenonofhängeg — an dofir
                fir d'Asazentscheedung net duergaang

PPV = TP / (TP + FP)   ← prävalenzofhängeg (Bayes); brécht zesummen, wann seelen
NPV = TN / (TN + FN)

NNS  ≈ 1 / (Prävalenz × Sensitivitéit)      — gescreent pro fonnte richtegen Fall
Käschte pro richtegen Fall = Programmkäschte / TP   — de ökonomesche Bottom Line
```

## Berechent Beispill

Dee selwechte Modell, zwou Astellungen — Sensitivitéit 90 %, Spezifizitéit 93 %:

```
Spezialistenklinik (Prävalenz 20 %):
  PPV = (0,9×0,2)/(0,9×0,2 + 0,07×0,8) = 0,18/0,236 ≈ 76 %  → 3 vu 4 Alerten echt

Primärversuergung (Prävalenz 1 %):
  PPV = (0,9×0,01)/(0,9×0,01 + 0,07×0,99) = 0,009/0,0783 ≈ 11,5 %
  → 8 vu 9 Alerten falsch; Ofklärung zu 350 £ pro Fall:
  Käschte pro richtegen Fall = (0,009 + 0,0693) × 350 / 0,009 ≈ 3.045 £ pro fonnte Fall
```

Identesche Modell, radikal verschidden Ökonomie — dofir ass standortspezifesch Evaluatioun en reglementaarescht Thema a dofir ass „eise Modell huet 0,95 AUROC" den Ufank vun engem ökonomesche Fall, net säi Schluss. Kuckt [Screening-Ökonomie](../ökonomie-vum-screening/) fir déi voll Programm-Mathematik.

## Bezuch zur Softwareentwécklung

Fir Ingenieuren, déi klinesch KI bauen oder kafen: **d'Confusion-Matrix bei der Asaz-Prävalenz liwweren**, net nëmmen d'ROC-Kurv; **d'Schwell als ökonomesch Entscheedung loossen** — de Sens/Spec-Trade-off soll d'erwaart Käschte miniméieren (verpasst Fäll × Käschte vum Verpassen géint Falschalarmer × Ofklärungskäschten), net eng Benchmark-Statistik maximéieren; an déi selwecht Mathematik am eegenen Tooling erkennen — Alert-Systemer, Anomalie-Detektoren a Sécherheetsscanner sinn Diagnosetester iwwer Evenementstréim mat niddreger Prävalenz, mat Alert-Fatigue als [NNH](../number-needed-to-treat/). Modellupdates, déi de Betriebspunkt verréckelen, maachen d'Ökonomie nei op (an d'reglementaresch Zertifizéierung — kuckt [Reglementaresch Evaluatioun vu KI](../reglementaresch-evaluatioun-vu-ki/)).

## Falen

- **AUROC-Shopping**: Modeller um AUROC vergläichen, wa se bei enger Schwell lafen — beim Betriebspunkt vergläichen.
- **Studien-Prävalenz-PPV fir de Real-World-Asaz zitéiert** — de Klassiker; ëmmer bei lokaler Prävalenz nei berechnen.
- **Spektrum-Bias**: Modeller, déi un däitleche Fäll géint gesond Kontrollen validéiert goufen, performe schlecht am ambigue Mëttelfeld, dat d'Praxis dominéiert.
- **Keng Käschtekalkulatioun vum nodelegen Pfad**: all Positiv léist eng Ofklärung aus; e Modell ass eng Interventioun an d'Ökonomie vum *ganze Pfad*.

## Quellen

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
