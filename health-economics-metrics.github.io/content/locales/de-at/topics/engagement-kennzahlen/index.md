# Engagement-Kennzahlen

Engagement-Kennzahlen messen, wie viel Nutzer eine Gesundheits-App tatsächlich nutzen: DAU/MAU-Stickiness, Sitzungshäufigkeit und -dauer, Feature-Nutzung. In der digitalen Gesundheit ist Engagement keine Eitelkeit — es ist **Dosis**: die Exposition, durch die jeder klinische Effekt fließen muss.

## Warum es wichtig ist

Ein Medikament, das in der Flasche bleibt, heilt niemanden; eine App, die deinstalliert bleibt oder ungeöffnet, ist derselbe Fehlermodus. Jede gesundheitsökonomische Behauptung für ein Konsumgesundheitsprodukt multipliziert sich durch Engagement — die in Studien gezeigte Wirksamkeit wurde bei einem bestimmten Nutzungsniveau gemessen, und der reale Wert skaliert damit, wie nah die Einsatznutzung an dieses Niveau herankommt. Standard-Produkt-Referenzwerte: DAU/MAU um **20 % gilt allgemein als gesund** für mobile Apps, >25 % außergewöhnlich; Gesundheits-Apps liegen oft niedriger.

## Die Mathematik

```
Stickiness (DAU/MAU) = täglich aktive Nutzer / monatlich aktive Nutzer × 100
Sitzungskennzahlen   = Sitzungen/Nutzer/Zeitraum; Ø-Dauer = Gesamtzeit / Sitzungen
Feature-Engagement   = Nutzer mit Schlüsselaktion / aktive Nutzer

Dosis-Wirkungs-Rahmen (das gesundheitsökonomische Upgrade):
  realisierter Effekt ≈ Studieneffekt × f(tatsächliche Nutzung / Studiennutzung)
  wobei f aus Dosis-Wirkungs-Analyse stammt — siehe das Konzept
  "effektives Engagement" in adherence-and-persistence.md: genug Nutzung,
  um das beabsichtigte Ergebnis zu erreichen, was bescheiden und endlich
  sein kann
```

## Durchgerechnetes Beispiel

Die entscheidende Studie einer Blutdruck-App zeigte eine systolische Senkung um 6 mmHg bei Nutzern mit ≥4 Messungen/Woche. Im Einsatz über 50.000 registrierte Nutzer:

```
MAU 20.000 (40 %); davon mit ≥4×/Woche Protokollierung: 7.000
Nutzer mit wirksamer Dosis = 7.000 / 50.000 = 14 % der registrierten Basis

Effekt auf Bevölkerungsebene ≈ Studieneffekt, geliefert an 14 %, nicht
100 %: jedes ökonomische Modell, das "50.000 Nutzer × 6 mmHg" zitiert,
überschätzt um ~das 7-Fache.
Ehrliches Modell: 7.000 × voller Effekt + Teilanrechnung (aus Dosis-
Wirkungs-Daten, falls vorhanden) für die 13.000 Nutzer unterhalb der
Schwelle.
```

Diese Multiplikation — durch den Engagement-Trichter bis zur wirksamen Dosis — ist die mit Abstand häufigste Stelle, an der sich die Ökonomie der digitalen Gesundheit aufbläht.

## Bezug zur Softwareentwicklung

Entwickler besitzen den Engagement-Trichter, was sie zu Eigentümern einer *klinischen* Variablen macht: Onboarding-Reibung, Benachrichtigungsstrategie, Ladezeit und Offline-Robustheit bewegen alle die gelieferte Dosis. Zwei Design-Implikationen: die **klinisch bedeutsame Handlung** instrumentieren (protokollierte Messungen, abgeschlossene Lektionen), nicht Öffnungen — DAU aus Benachrichtigungs-Bounce-Sitzungen ist Dosis-Betrug; und Engagement-Ziele als *Hinlänglichkeits*-Ziele behandeln, nicht als Maximierung — eine App, die ihr Ergebnis in 5 Minuten/Woche erreicht und dann aus dem Weg geht, ist klinisch ideal und kennzahlenmäßig "schlecht" (siehe effektives Engagement bei [Adhärenz und Persistenz](../adhärenz-und-persistenz/)). Die Engagement-Arbeit selbst über das obige Bevölkerungseffekt-Modell bewerten: ein Gewinn von 2 Punkten beim Anteil wirksamer Dosis ist eine quantifizierbare QALY-Zeile.

## Fallstricke

- **Engagement als Ergebnis**: Nutzung ist ein Mittel; das Ergebnis ist der [PROM](../patientenberichtete-endpunkte/) oder klinische Endpunkt.
- **Durchschnitte über bimodale Nutzung**: Populationen von Gesundheits-Apps teilen sich in hingebungsvolle Nutzer und Geister; Mittelwerte beschreiben niemanden — nach Kohorte betrachten.
- **Dark-Pattern-Dosisinflation**: Streaks und Schuld-Benachrichtigungen heben Kennzahlen und können den ängstlichen Bevölkerungsgruppen schaden, denen Gesundheits-Apps dienen; klinische Produkte tragen klinische Ethik.
- **Herkunft von Anbieter-Referenzwerten**: die meisten veröffentlichten Engagement-Referenzwerte stammen von Analytics-Anbietern, nicht aus Peer-Review; an den eigenen Studien kalibrieren.

## Quellen

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
