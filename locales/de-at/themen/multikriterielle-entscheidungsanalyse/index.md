# Multikriterielle Entscheidungsanalyse (MCDA)

Die multikriterielle Entscheidungsanalyse (MCDA) ist ein Scoring-Modell mit gewichteter Summe, das in der Bewertung von Gesundheitstechnologien eingesetzt wird, wenn ein einzelner ICER-/Zahlungsbereitschaftsschwellenwert nicht alles erfasst, was einem Entscheidungsträger wichtig ist: Gerechtigkeit, ungedeckter Bedarf, Innovation, Budgetauswirkung, Krankheitsschwere. Jedes Kriterium erhält ein Gewicht, das seine Bedeutung widerspiegelt (von Stakeholdern erhoben, Gewichte summieren sich zu 1), jede Option erhält pro Kriterium einen normierten Wert (typischerweise 0–1), und der Gesamtwert ist die gewichtete Summe — dieselbe mathematische Form wie eine Bewertungsmatrix zur Softwareanbieter-Auswahl.

## Warum es wichtig ist

MCDA wird in Rahmenwerken wie EVIDEM und von einigen HTA-Stellen für Bewertungen von Arzneimitteln gegen seltene Erkrankungen eingesetzt, bei denen ein strikter Ansatz mit Kosten-pro-QALY-Schwelle als zu eng gilt, um alles Wesentliche an einer Entscheidung zu erfassen. Die ISPOR MCDA Emerging Good Practices Task Force hat Leitlinien guter Praxis für die belastbare Erhebung von Gewichten und Werten formalisiert, gerade weil sich eine informell gewichtete Entscheidung leicht konstruieren und leicht manipulieren lässt. Wenn eine Gesundheitstechnologie echte Wertdimensionen hat, die eine einzelne [Zahlungsbereitschaftsschwelle](../zahlungsbereitschaftsschwellen/) nicht abbilden kann — Schwere, Innovation, Gerechtigkeit —, gibt MCDA den Entscheidungsträgern eine explizite, prüfbare Struktur, sie zu kombinieren, statt eines unausgesprochenen Ermessensurteils.

## Die Mathematik

```
MCDA-Wert = Σ_i (Gewicht_i × Wert_i)

Die Gewichte sollten sich zu 1 summieren (erhoben mit Stakeholder-Methoden
wie Swing-Weighting oder dem Analytic Hierarchy Process)
```

## Durchgerechnetes Beispiel

Ein HTA-Ausschuss bewertet eine digitale Therapie anhand von vier Kriterien:

```
Kriterium                          Gewicht  Wert    Gewicht × Wert
Klinischer Nutzen                  0,4      0,8     0,32
Kostenwirkung                      0,3      0,5     0,15
Krankheitsschwere / ungedeckter Bedarf 0,2  0,9     0,18
Innovation                         0,1      0,6     0,06
                                    ─────                ─────
                                    1,0                  0,71
```

Die Gewichte summieren sich zu 1,0 (0,4 + 0,3 + 0,2 + 0,1), und der MCDA-Wert beträgt 0,71 (0,32 + 0,15 + 0,18 + 0,06). Der Ausschuss vergleicht 0,71 mit einer vorab vereinbarten Schwelle oder reiht die Technologie gegen konkurrierende Technologien ein, die auf dieselbe Weise bewertet wurden.

## Bezug zur Softwareentwicklung

Das ist genau dieselbe Mathematik wie bei einer gewichteten Anbieter-Auswahlmatrix, einer RFP-Bewertungsmatrix oder einem Scoring-Modell zur Funktionspriorisierung — siehe [Make or Buy](../eigenentwicklung-oder-fremdbezug/), ein klassischer Anwendungsfall einer gewichteten Bewertungsmatrix in der Software-Beschaffung. Es lohnt sich auch, den Kontrast zu [WSJF und CD3](../wsjf-und-cd3/) zu sehen: WSJF/CD3 ist eine *verhältnisbasierte* Priorisierungsmethode (Verzögerungskosten geteilt durch Aufgabengröße oder Dauer), MCDA dagegen eine gewichtete *Summe*. MCDA und WSJF/CD3 sind zwei strukturell verschiedene Antworten auf „wie reihen wir konkurrierende Optionen ein", und zu wissen, welche eine Entscheidung tatsächlich verlangt — additiver Wert über unabhängige Kriterien oder Wertdichte pro Einheit knapper Kapazität —, zählt mehr als die Frage, welche Formel rigoroser aussieht.

## Fallstricke

- **Verzerrung bei der Gewichtserhebung**: Wer die Gewichte festlegt, bestimmt die Rangfolge faktisch vorab, sodass eine „Formel" eine politische oder kommerzielle Entscheidung als objektive Berechnung waschen kann. Dokumentieren, wer die Gewichte wie festgelegt hat.
- **Doppelzählung eines bereits anderweitig erfassten Kriteriums**: „Kosteneffektivität" als ein Kriterium zu bewerten und *zusätzlich* separat die „Kostenwirkung", gewichtet Geld ohne Absicht stärker als die übrigen Kriterien.
- **Scheinpräzision**: Ein gewichteter Wert mit zwei Nachkommastellen (0,71) suggeriert mehr Strenge, als die zugrunde liegenden Stakeholder-Bewertungen auf einer Skala von 0–10 hergeben, und die Variabilität zwischen den Bewertern wird oft gar nicht berichtet.

## Quellen

- Thokala P, Devlin N, Marsh K, et al. „Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. „Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
