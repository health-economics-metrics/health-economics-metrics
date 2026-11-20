# Sozialer Kapitalertrag (SROI)

SROI erweitert den [ROI](../kapitalrendite/) auf Ergebnisse, die Märkte nicht bepreisen — Wohlbefinden, soziale Bindung, Umweltwirkung —, indem es sie mit finanziellen Proxys für *alle* betroffenen Stakeholder monetarisiert.

## Warum es wichtig ist

Ein großer Teil dessen, was Gesundheits- und Gemeinschaftsinterventionen erzeugen, taucht nie in einer Budgetzeile auf: verringerte Einsamkeit, Entlastung Pflegender, Beschäftigungsgewinne, Würde. SROI, geregelt durch die sieben Prinzipien von Social Value International (Stakeholder einbeziehen, bewerten, was zählt, nicht überhöhen, transparent sein, verifizieren …), erzeugt Aussagen wie "3,20 £ sozialer Wert pro investiertem 1 £". Die Social-Value-Anforderungen der britischen öffentlichen Beschaffung machen SROI-artige Evidenz kommerziell relevant: Gebote für öffentliche Aufträge (einschließlich NHS) erhalten Punkte für nachgewiesenen sozialen Wert.

## Die Mathematik

```
SROI-Verhältnis = PV(monetarisierte soziale Ergebnisse) / PV(Investition)

Für jedes Ergebnis:
  Wert = Menge × finanzieller Proxy × Zurechnung × (1 − Mitnahmeeffekt) × (1 − Verdrängung)

Mitnahmeeffekt = wäre ohnehin passiert
Zurechnung     = Anteil, der von anderen verursacht wurde
Verdrängung    = Nutzen von anderswo verschoben statt neu geschaffen
Abklingrate    = Abnahme des Ergebnisses über die Jahre
```

Die Anpassungsfaktoren sind die Integrität der Methode: ohne sie ist SROI Fiktion mit einem Währungszeichen.

## Durchgerechnetes Beispiel

Eine Begleitungs-App, die isolierte ältere Menschen mit Freiwilligen verbindet; Programmkosten 200.000 £/Jahr; 1.500 aktive Paarungen.

```
Ergebnis: verringerte Einsamkeit für 1.500 Menschen
  Proxy: Wohlbefindensbewertung "Linderung von Einsamkeit" ≈ 1.800 £/Person/Jahr
  Mitnahmeeffekt 25 % (manche hätten ohnehin Anschluss gefunden)
  Zurechnung 80 % (etwas Anerkennung geht an andere Dienste)

Wert = 1.500 × 1.800 × 0,80 × 0,75 = 1.620.000 £

Ergebnis: weniger Hausarztbesuche, 1.500 × 1,2 Besuche × 42 £ = 75.600 £ (real beim Kostenträger)

SROI = (1.620.000 + 75.600) / 200.000 ≈ 8,5 : 1
```

Beachtenswert: Das Verhältnis besteht zu 96 % aus proxy-bewertetem Wohlbefinden und zu 4 % aus echtem Bargeld. Das ist legitimes SROI — muss aber als sozialer Wert dargestellt werden und darf nie andeuten, 1,7 Mio. £ seien bankfähig.

## Bezug zur Softwareentwicklung

SROI ist das ehrliche Rahmenwerk für Entwicklungsarbeit, deren Nutznießer außerhalb des zahlenden Teams liegen: Open-Source-Wartung, Barrierefreiheitsverbesserungen, Plattformarbeit, die von anderen Teams konsumiert wird, Investitionen in die Entwickler-Community. Die übertragbare Mechanik: alle Stakeholder identifizieren, mit benannten Proxys monetarisieren und Mitnahme-/Zurechnungsabschläge anwenden (wäre der OSS-Fix ohnehin passiert? wie viel des Gewinns stammt von der eigenen Arbeit gegenüber dem Ökosystem?). Die Disziplin, *die eigenen Wirkungsbehauptungen zu diskontieren*, unterscheidet SROI von einer Marketingzahl.

## Fallstricke

- **Proxy-Shopping**: die großzügigste verfügbare Wohlbefindensbewertung wählen.
- **Mitnahmeeffekt/Zurechnung auslassen** — die häufigste Aufblähung, oft eine Verdopplung des Verhältnisses.
- **Verhältnisvergleich zwischen Studien**: SROI-Verhältnisse sind methodenempfindlich; nur innerhalb eines konsistenten Rahmens vergleichen.
- **Sozialen Wert als bankfähige Einsparung darstellen** gegenüber einem Budgetverantwortlichen.

## Quellen

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
