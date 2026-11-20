# CO₂-Fußabdruck pro QALY

CO₂ pro QALY ist ein Effizienzverhältnis — die CO₂-Emissionen (oder vermiedenen Emissionen) einer Intervention geteilt durch die QALYs, die sie liefert — und damit direkt analog zu den Kosten pro QALY. So lässt sich die Kohlenstoffeffizienz einer Intervention neben ihrer Kosteneffizienz bewerten. Ein „kohlenstoffadjustierter Nettomonetärer Nutzen" geht einen Schritt weiter: Er monetarisiert die CO₂-Wirkung mit den offiziellen nicht gehandelten Kohlenstoffwerten des britischen Green Book und verrechnet sie mit dem üblichen [nettomonetären Nutzen](../nettomonetärer-nutzen/).

## Warum es wichtig ist

NICE und NHS England erwarten inzwischen, dass Umweltauswirkungen neben Kosten und QALYs berücksichtigt werden. Der NHS hat eine öffentliche Netto-Null-Verpflichtung: Netto-Null für die direkten Emissionen bis 2040 und Netto-Null für den gesamten Lieferketten-Fußabdruck bis 2045. Das Handbuch zur Bewertung von Gesundheitstechnologien von NICE (PMG36) nennt ökologische Nachhaltigkeit als aufkommenden Gesichtspunkt bei Technologiebewertungen. Für ein digitales Gesundheitsprodukt heißt das: Kohlenstoff wird zur vierten Säule des Wertnachweises, neben Kosten, QALYs und [Dominanz auf der Effizienzgrenze](../dominanz-und-die-effizienzgrenze/) — kein Ersatz für eines davon, aber eine Dimension, die ein gut gebauter Business Case zunehmend ausweisen muss.

## Die Mathematik

```
CO₂ pro QALY = gesamte_Emissionen_Tonnen_CO2e / gesamte_QALYs
  (ein negativer Wert bedeutet netto VERMIEDENE Emissionen pro gewonnenem
  QALY — ein doppelter Gewinn: bessere Gesundheit und weniger CO₂)

Monetarisierte CO₂-Wirkung = Emissionen_Tonnen_CO2e × Kohlenstoffwert_pro_Tonne
  (negative Emissionen × positiver Wert = negative Kosten, also ein Nutzen)

Kohlenstoffadjustierter NMB = nettomonetärer_Nutzen − monetarisierte_CO₂-Wirkung
```

Das erweitert die Idee der Kosten/QALY-Effizienzgrenze um eine zweite Achse — CO₂ pro QALY — mit derselben Logik „alle Optionen eintragen und sehen, was dominiert wird" wie bei [Dominanz und Effizienzgrenze](../dominanz-und-die-effizienzgrenze/), nur auf Kohlenstoff statt auf Kosten angewandt.

## Durchgerechnetes Beispiel

Ein Telemedizin-Dienst ersetzt Präsenztermine und vermeidet 5.000 Autofahrten pro Jahr mit je etwa 8 kg CO2e — 40 Tonnen vermiedenes CO2e, als negative Emissionszahl dargestellt (−40,0 Tonnen); er liefert 25 QALYs pro Jahr:

```
CO₂ pro QALY = −40,0 / 25,0 = −1,6 Tonnen vermiedenes CO2e pro gewonnenem QALY
```

Mit dem nicht gehandelten Kohlenstoffwert des Green Book (Beispielwert, zentraler nicht gehandelter Wert 2023 ≈ 269 £/Tonne CO2e — das Green Book aktualisiert die Kohlenstoffwerte jährlich, vor Verwendung in einer laufenden Analyse neu prüfen):

```
Monetarisierte CO₂-Wirkung = −40,0 × 269 £ = −10.760 £
```

Negative „Kosten" von −10.760 £ sind ein Nutzen von 10.760 £. Beträgt der eigenständige nettomonetäre Nutzen der Intervention 500.000 £:

```
Kohlenstoffadjustierter NMB = 500.000 £ − (−10.760 £) = 510.760 £
```

Die CO₂-Einsparung stärkt den Fall, statt ihn zu schwächen — der doppelte Gewinn, den die Darstellung mit negativen Emissionen sichtbar machen soll.

## Bezug zur Softwareentwicklung

Das ist eine aktuelle Schnittstelle zur KI-/Cloud-Ökonomie: Der Rechen-CO₂-Fußabdruck beim Training und Betrieb eines KI-Modells ist inzwischen eine echte Position in der NHS-Beschaffung, da NHS-Lieferantenverträge oberhalb bestimmter Schwellen einen Carbon Reduction Plan verlangen. [Cloud-Stückökonomie](../cloud-einheitsökonomie/) erfasst bereits die Kosten pro Einheit Rechenleistung; CO₂ pro QALY ist die natürliche Vorlage für eine künftige Kennzahl „CO₂-Kosten pro Inferenz", die dieses Modul und die Stückökonomie der Inferenz in die ökologische Dimension verlängert — diese Kennzahl existiert allerdings noch nicht.

## Fallstricke

- **Manipulation der Systemgrenze**: Nur direkte Emissionen (Scope 1) zählen und Lieferkettenemissionen (Scope 3) ausschließen, die für den tatsächlichen Fußabdruck eines digitalen Gesundheitsprodukts meist den Hauptteil ausmachen.
- **Veralteten Kohlenstoffwert verwenden**: Das Green Book aktualisiert seine nicht gehandelten Kohlenstoffwerte jährlich; jeder zitierte £/Tonne-Wert muss daher datiert und nicht als feste Konstante angegeben werden.
- **„Kohlenstoffeffizient" mit „kosteneffektiv" gleichsetzen**: Eine Intervention mit niedrigem CO₂-Ausstoß und geringem Nutzen ist trotzdem ein schlechter Einsatz von NHS-Mitteln. Kohlenstoff ist eine vierte Säule neben Kosten und QALYs, kein Ersatz für eines von beiden.

## Quellen

- NHS England, „Delivering a Net Zero National Health Service" (2020, aktualisiert 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (jährlich aktualisiert; zentraler nicht gehandelter Wert ≈ 269 £/tCO2e, 2023 — jedes Zitat datieren). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
