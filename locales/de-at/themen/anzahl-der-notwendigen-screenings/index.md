# Anzahl der notwendigen Screenings (NNS)

NNS ist die Anzahl der Personen, die gescreent — nicht bloß behandelt — werden müssen, um über einen definierten Nachbeobachtungszeitraum **ein** unerwünschtes Ereignis zu verhindern, gegeben das Basisrisiko der Bevölkerung und die relative Risikoreduktion, die Früherkennung und Behandlung erreichen. Es ist das Analogon des NNT auf Ebene des Screening-Programms: NNT fragt, wie viele *behandelt* werden müssen, um ein Ereignis zu verhindern; NNS fragt, wie viele den gesamten Pfad *Screening-und-dann-Behandlung* durchlaufen müssen, um dorthin zu gelangen.

## Warum es wichtig ist

Rembold führte NNS 1998 gezielt ein, damit sich Screening-Programme auf derselben Grundlage wie Behandlungen vergleichen lassen, denn die Schlagzeilen-Zahl der relativen Risikoreduktion eines Screening-Tests verbirgt zwei Dinge, die die einer Behandlung nicht verbirgt: das Basisrisiko der tatsächlich zum Screening eingeladenen Bevölkerung und die Tatsache, dass alle Gescreenten die Kosten und die Last falsch-positiver Befunde des Tests tragen, nicht nur die Minderheit, die später profitiert. Das Kosteneffektivitäts-Gate des britischen National Screening Committee (siehe [Screening-Ökonomie](../screening-ökonomie/)) beruht genau auf dieser Unterscheidung — ein Screening-Programm mit beeindruckender relativer Risikoreduktion in einer Bevölkerung mit niedrigem Basisrisiko kann dennoch ein NNS in den Tausenden haben, und dann werden die Programmkosten pro verhindertem Ereignis zur eigentlichen Frage.

## Die Mathematik

```
NNS = 1 / (Basisrisiko × relative_Risikoreduktion)

Basisrisiko                = Wahrscheinlichkeit des Ereignisses in der
                             gescreenten Bevölkerung über den
                             Nachbeobachtungszeitraum (0–1)
relative_Risikoreduktion   = proportionale Risikoreduktion durch die
                             screening-gestützte Frühbehandlung (0–1)

Programmkosten pro verhindertem Ereignis = NNS × Kosten_pro_Screening
```

Direkt mit dem [NNT](../anzahl-der-notwendigen-behandlungen/) vergleichen: NNS faltet die Wirksamkeit des gesamten Trichters Screening → Diagnose → Behandlung in eine Zahl, während NNT bereits annimmt, dass der Patient diagnostiziert ist und die Behandlung beginnt.

## Durchgerechnetes Beispiel

Die Zielbevölkerung eines Screening-Programms hat ein Basisrisiko von 2 % für das Ereignis im Studienzeitraum (`Basisrisiko = 0,02`), und die Früherkennung erreicht eine relative Risikoreduktion von 25 % (`relative_Risikoreduktion = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

200 Personen müssen gescreent werden, um ein Ereignis zu verhindern.

Bei 50 £ pro Screening:
Programmkosten pro verhindertem Ereignis = 200 × 50 £ = 10.000 £
```

Diese 10.000 £ sind die Zahl, die gegen die Kosten des Ereignisses selbst und die QALYs abzuwägen ist, die es gekostet hätte — derselbe Vergleich, den die [Präventionsökonomie](../präventionsökonomie/) für Präventionsprogramme allgemein anstellt.

## Bezug zur Softwareentwicklung

NNS ist „wie viele Nutzer, Ereignisse oder Anfragen müssen einen Erkennungs- oder Triage-Ablauf durchlaufen, um einen echten Treffer zu fangen, auf den sich zu reagieren lohnt" — direkt relevant für alarmbasierte Überwachungs- und Triage-Systeme, in denen ein Zielzustand mit niedriger Prävalenz NNS auf dieselbe Weise aufbläht, wie er den positiven prädiktiven Wert einbrechen lässt (siehe [Screening-Ökonomie](../screening-ökonomie/) und [Bewertung klinischer KI](../klinische-ki-evaluation/)). Eine Überwachungsregel, die 200 Ereignisse pro echtem Treffer verarbeiten muss, lohnt sich nur, wenn der Treffer mindestens das 200-Fache der Triage-Kosten pro Ereignis wert ist — dieselbe Arithmetik wie im obigen Beispiel aus dem Gesundheitswesen.

## Fallstricke

- **Die Abhängigkeit vom Basisrisiko ignorieren**: Derselbe Screening-Test oder dasselbe Programm hat in einer Hochrisiko- und einer Niedrigrisiko-Bevölkerung ein sehr unterschiedliches NNS — und eine sehr unterschiedliche Kosteneffektivität. Nie ein NNS ohne Angabe der Bevölkerung nennen, für die es berechnet wurde.
- **Den falschen Nenner zählen**: NNS zählt *gescreente* Personen, nicht Personen mit positivem Testergebnis oder Behandlungsbeginn — es trägt die Wirksamkeit des gesamten Trichters bereits in sich und darf daher nie mit einer nur über Positive gezählten Kennzahl verglichen werden.
- **Über Nachbeobachtungszeiträume hinweg vergleichen**: Ein kürzerer Nachbeobachtungszeitraum bläht NNS in der Regel auf, weil im Fenster weniger Ereignisse beobachtet werden. NNS-Werte sind nur vergleichbar, wenn sie über dieselbe Nachbeobachtungsdauer berechnet wurden.

## Quellen

- Rembold CM. „Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
