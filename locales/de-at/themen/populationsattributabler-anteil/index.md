# Populationsattributabler Anteil (PAF)

PAF ist der Anteil der Krankheits- oder Ergebnislast in einer Bevölkerung, der einer bestimmten Risikofaktor-Exposition zuzuschreiben ist — der Anteil, der verschwände, wenn die Exposition vollständig beseitigt würde. Er übersetzt „dieser Risikofaktor verdoppelt Ihre Chancen" in eine Zahl auf Bevölkerungsebene, mit der ein Kostenträger tatsächlich planen kann: wie viele Fälle und wie viele Kosten sich bei einer gegebenen Exposition wirklich zu bekämpfen lohnen.

## Warum es wichtig ist

Levin führte den PAF 1953 ein, um eine enge, konkrete Frage zu beantworten: Wenn niemand rauchte, wie viel Lungenkrebs verschwände? Dieselbe Arithmetik dimensioniert heute die nationale Präventionsplanung — von Tabak- und Adipositasstrategien bis zu den Risikofaktor-Rankings der Global-Burden-of-Disease-Studie der WHO —, denn ein relatives Risiko allein sagt nichts über die Wirkung aus: Ein Risikofaktor kann die Chancen auf ein seltenes Ereignis verdoppeln und die Krankheitslast der Bevölkerung kaum bewegen, oder die Chancen eines häufigen Ereignisses nur leicht erhöhen und trotzdem einen riesigen Anteil der Fälle ausmachen. PAF macht aus „Risikofaktor X ist gefährlich" ein „das Beseitigen von Risikofaktor X würde pro Jahr so viele Fälle verhindern" — die Zahl, die der Business Case eines Präventionsprogramms tatsächlich braucht. Siehe [Präventionsökonomie](../präventionsökonomie/), was es kostet, auf diese Zahl zu reagieren, wenn man sie hat.

## Die Mathematik

```
PAF = Prävalenz_exponiert × (relatives_Risiko − 1) / (1 + Prävalenz_exponiert × (relatives_Risiko − 1))

Prävalenz_exponiert = Anteil der Bevölkerung, der dem Risikofaktor ausgesetzt ist (0–1)
relatives_Risiko    = Risiko des Ergebnisses bei Exponierten vs. Nicht-Exponierten (z. B. 2,5 = 2,5×)

Zuschreibbare Fälle = Gesamtfälle × PAF
```

PAF steigt sowohl mit der Expositionsprävalenz als auch mit dem relativen Risiko — ein mäßig erhöhtes relatives Risiko (etwa 1,5×) bei einer sehr häufigen Exposition kann einen größeren PAF ergeben als ein dramatisches relatives Risiko (etwa 5×) bei einer seltenen. Genau deshalb existiert er als eigene Zahl neben dem relativen Risiko.

## Durchgerechnetes Beispiel

Ein Risikofaktor liegt bei 30 % einer Bevölkerung vor (`Prävalenz_exponiert = 0,3`) und erhöht das Risiko des Ergebnisses auf das 2,5-Fache (`relatives_Risiko = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0 %)

Bei 1.000 Fällen/Jahr in der Bevölkerung:
Zuschreibbare Fälle = 1.000 × 0,3103 ≈ 310 Fälle/Jahr
```

Knapp ein Drittel der jährlichen Last dieses Ergebnisses ist der Exposition zuzuschreiben — ihre vollständige Beseitigung (die theoretische Obergrenze; keine reale Intervention erreicht 100 % Expositionsbeseitigung) würde jedes Jahr rund 310 der 1.000 Fälle verhindern.

## Bezug zur Softwareentwicklung

PAF ist die epidemiologische Fassung von „welcher Anteil unseres Störfallaufkommens ist dieser einen Grundursache zuzuschreiben?" — dieselbe Frageform, die Teams stellen, wenn sie eine bestimmte Klasse von Deployments oder Abhängigkeiten gegen die gesamten Produktionsstörungen dimensionieren, statt jede Störung als gleich behebenswert zu behandeln. Eine Grundursachenkategorie, die in einem großen Anteil der Deployments auftritt und nur ein mäßiges relatives Risiko für eine Störung trägt, kann eine seltene Kategorie mit hohem relativem Risiko bei der Frage übertreffen, wo man den Entwicklungsaufwand zuerst einsetzt — genau die PAF-Einsicht, übersetzt.

## Fallstricke

- **PAFs über Risikofaktoren aufsummieren**: PAFs mehrerer Faktoren, die dasselbe Ergebnis betreffen, ergeben nicht 100 % — in der Summe können sie darüber liegen, weil Faktoren interagieren und Kausalpfade teilen. Jeden PAF als „wenn dieser Faktor allein beseitigt würde" behandeln, nie als Aufteilung des Gesamtrisikos.
- **Ein relatives Risiko auf andere Bevölkerungen übertragen**: Ein in einer Bevölkerung geschätztes relatives Risiko (andere Basis-Expositionsprävalenz, andere Störgrößen) liefert einen irreführenden PAF, wenn es auf die Expositionsprävalenz einer anderen Bevölkerung angewandt wird.
- **PAF mit dem attributablen Risiko bei den Exponierten verwechseln**: PAF gilt auf Bevölkerungsebene und hängt von der Expositionsprävalenz ab; das attributable Risiko bei den Exponierten gilt auf Individualebene und nicht. Sie beantworten verschiedene Fragen — nicht die eine nennen, um die andere zu beantworten.

## Quellen

- Levin ML. „The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. „Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
