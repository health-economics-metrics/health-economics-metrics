# Gewonnene Lebensjahre (LYG)

Gewonnene Lebensjahre sind das einer Intervention zurechenbare zusätzliche Überleben, ohne Qualitätsanpassung: die Fläche zwischen den Überlebenskurven mit und ohne sie. Das gleichwertig gewichtete gewonnene Lebensjahr (evLYG) ist eine moderne Variante, die jede Lebensverlängerung gleich gewichtet.

## Warum es wichtig ist

LYG ist das rohste Gesundheitsergebnis: Wie viel länger leben Menschen? Es zählt, wenn Qualitätsdaten fehlen, beim Vergleich mit QALY-skeptischem Publikum und in der Onkologie, wo Überlebenskurven das primäre Studienergebnis sind. Das **evLYG** (vom US-amerikanischen ICER-Institut neben Kosten/QALY verwendet) existiert aus einem ethischen Grund: QALYs bewerten ein zusätzliches Lebensjahr nach dem Nutzwert des Patienten, sodass die Verlängerung des Lebens einer Person mit Behinderung "weniger zählt" — evLYG bewertet jedes zusätzliche Jahr mit einem festen Nutzwert und beseitigt diese Diskriminierung.

## Die Mathematik

```
LYG = mittleres Überleben_neu − mittleres Überleben_Vergleichsoption
    = Fläche zwischen den Überlebenskurven (begrenzt auf den Zeithorizont)

QALY-Sicht der Lebensverlängerung:  Verlängerung × Patientennutzwert
evLYG-Sicht der Lebensverlängerung: Verlängerung × fester Nutzwert (ICER
                                    verwendet ~0,851, den durchschnittlichen
                                    Nutzwert der US-Bevölkerung)
```

Beide werden in ökonomischen Modellen [diskontiert](../diskontierung-und-zeitpräferenz/).

## Durchgerechnetes Beispiel

Ein Sepsis-Frühwarnalgorithmus in einem Krankenhaus: Die Modellierung zeigt, dass frühere Antibiotikagabe 12 Todesfälle/Jahr verhindert; das Durchschnittsalter dieser Patienten ergibt je 8 verbleibende Lebensjahre bei Nutzwert 0,7.

```
LYG   = 12 × 8       = 96 Lebensjahre/Jahr
QALYs = 96 × 0,7     = 67,2
evLYG = 96 × 0,851   = 81,7
```

Bei 20.000 £ pro QALY bewertet die QALY-Betrachtung das Überleben mit 1,34 Mio. £/Jahr; die evLYG-Betrachtung mit 1,63 Mio. £. Die Lücke ist genau das ethische Urteil darüber, ob ein Lebensjahr bei Nutzwert 0,7 70 % eines "vollen" wert ist. Ernsthafte Dossiers berichten beides.

## Bezug zur Softwareentwicklung

- Überlebensanalyse ist gemeinsames Werkzeug: Kaplan-Meier-Kurven für Patienten und für *Dienste* (Zeit bis zum Ausfall, Zeit bis zur Abwanderung) folgen derselben Mathematik. "Gewonnene Dienstjahre" aus einer Zuverlässigkeitsinvestition = Fläche zwischen den Überlebenskurven des Systems mit/ohne — eine ehrlichere Darstellung als Punktbehauptungen zur MTTF.
- Das evLYG trägt auch für die Softwareentwicklung eine Warnung zum Kennzahlendesign: Jede Produktivitätskennzahl, die den Output mit einem "Teamqualitäts"-Faktor gewichtet, wird Verbesserungen für eingeschränkte oder kämpfende Teams systematisch unterbewerten — manchmal will man die gleichwertig gewichtete Variante ganz bewusst.

## Fallstricke

- **Median- vs. Mittelwert-Überleben**: ökonomische Modelle brauchen den Mittelwert (Fläche unter der Kurve); Studien titeln oft mit dem Median. Bei schiefen Verteilungen unterscheiden sich beide erheblich.
- **Extrapolation über die Studiennachbeobachtung hinaus** dominiert das modellierte LYG bei chronischen Erkrankungen — das Extrapolationsmodell benennen und in der [Sensitivitätsanalyse](../sensitivitätsanalyse/) prüfen.
- **Verhinderte Todesfälle aus beobachtenden Vorher-Nachher-Daten behaupten**, ohne für Fallmix und säkulare Trends zu bereinigen.

## Quellen

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
