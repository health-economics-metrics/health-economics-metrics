# Bindung und Abwanderung

Bindung misst, welcher Anteil einer Nutzerkohorte N Tage nach Beginn noch aktiv ist (D1/D7/D30-Kurven); Abwanderung ist ihr Komplement. Die brutale Basislinie der digitalen Gesundheit: **etwa 90 % der Gesundheits-App-Nutzer geben innerhalb von 30 Tagen auf** — die D30-Bindung digitaler Gesundheit liegt bei ~3–4 % gegenüber einem App-Durchschnitt von ~6 %.

## Warum es wichtig ist

Eysenbach benannte dies 2005: das **Gesetz der Abnutzung** (law of attrition) — Nutzer in hohem Tempo zu verlieren ist eine intrinsische, strukturelle Eigenschaft von eHealth-Interventionen, kein Implementierungsfehler, mit Abnutzung in eHealth-Studien, die routinemäßig 50 % übersteigt. Die ökonomische Folge ist total: Bindung definiert das *Behandlungsfenster*, innerhalb dessen überhaupt Nutzen geliefert werden kann, und die [Einheitsökonomie](../einheitsökonomie-von-gesundheits-apps/) — CAC, bezahlt pro Nutzer, der 12 Tage bleibt, liefert weder LTV noch QALYs. Jedes ökonomische Modell für ein Konsumgesundheitsprodukt, das Nutzen nicht nach der Bindungskurve gewichtet, beschreibt ein Produkt, das nicht existiert.

## Die Mathematik

```
Bindung_Dn = an Tag n aktive Nutzer / Kohortengröße × 100
Abwanderungsrate = im Zeitraum verlorene Nutzer / Nutzer zu Zeitraumbeginn × 100

Nutzengewichtung (der gesundheitsökonomische Kniff):
  erwarteter Nutzen pro akquiriertem Nutzer = Σ_t Bindung(t) × Nutzenrate(t)
  ≈ Fläche unter der Bindungskurve × Nutzen pro Zeit
  — NICHT Studiennutzen × 100 % der akquirierten Nutzer

Kosten pro bei-D30-gebundenem Nutzer = CAC / D30-Bindung
  (bei 4 % D30 sind 5 £ CAC eigentlich 125 £ pro gebundenem Nutzer)
```

## Durchgerechnetes Beispiel

Eine Mental-Health-App: die Studie zeigte 0,02 gewonnene QALYs pro Nutzer, der 8 Wochen abschließt. Einsatzkohorte von 100.000 Downloads, Bindung D7 25 %, D30 8 %, Woche 8 4 %:

```
Abschließende Nutzer = 100.000 × 0,04 = 4.000
Gelieferte QALYs     = 4.000 × 0,02 = 80  (nicht 100.000 × 0,02 = 2.000)
Bei 20.000 £/QALY    = 1,6 Mio. £ Gesundheitswert (nicht 40 Mio. £)

Gesundheitswert pro Download = 16 £ — die Zahl, die bestimmen sollte,
was ein Kostenträger pro Download zahlt, und sie beträgt 4 % der
naiven Behauptung.
Fall für Bindungsverbesserung: Woche-8-Abschluss von 4 % auf 6 % zu
heben fügt 40 QALYs/Jahr ≈ 800.000 £ hinzu — Bindungs-Engineering IST
Gesundheitsproduktion.
```

## Bezug zur Softwareentwicklung

Bindung ist die Kennzahl, bei der Produktentwicklung gemäß obiger Rechnung am direktesten Gesundheitswert herstellt. Die Praktiken, die sie bewegen, sind gewöhnlich: Onboarding-Zeit-bis-zum-ersten-Wert, Re-Engagement-Design, Performance und entscheidend **geplanter Dosisabschluss** — ein Programm mit definiertem Ende (8 Wochen, dann Abschluss) sollte *Abschluss* messen, nicht dauerhafte DAU, und die Kennzahl so am klinischen Modell statt am werbefinanzierten Aufmerksamkeitsmodell ausrichten. Überlebensanalyse ist das richtige Werkzeug (dieselbe Kaplan-Meier-Mathematik wie bei [gewonnenen Lebensjahren](../gewonnene-lebensjahre/)); Kurven nach Akquisitionskanal segmentieren, da der Kanal-Mix die Bindung stärker verändert als die meisten Features.

## Fallstricke

- **Intention-to-treat-Reinwaschung umgekehrt**: Studien berichten über Abschließende; die Einsatzökonomie muss alle Akquirierten zählen (Eysenbachs Kernwarnung).
- **Bindungstheater**: benachrichtigungsgetriebene "aktive" Nutzer, die nie die therapeutische Handlung ausführen (siehe [Engagement-Kennzahlen](../engagement-kennzahlen/)).
- **Kurven über unterschiedliche Definitionen vergleichen**: "aktiv" definiert als Öffnung vs. bedeutsame Handlung verschiebt D30 um ein Vielfaches.
- **Ignorieren, wer abwandert**: Wandern die Kränksten am schnellsten ab, sinkt der Nutzen pro Nutzer, während die Bindung bei den Gesunden steigt — Kurven mit Fallmix kombinieren (siehe [Reichweite und Gerechtigkeit](../reichweite-und-gerechtigkeit/)).

## Quellen

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
