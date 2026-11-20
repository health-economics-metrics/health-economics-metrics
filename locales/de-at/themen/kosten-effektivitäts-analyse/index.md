# Kosten-Effektivitäts-Analyse (CEA)

Die CEA vergleicht die Kosten alternativer Interventionen gegen ein einziges, in **natürlichen Einheiten** gemessenes Ergebnis — Lebensjahre, entdeckte Fälle, vermiedene Einweisungen, mmHg Blutdrucksenkung. Ihr Ergebnis sind Kosten pro Ergebniseinheit.

## Warum es wichtig ist

Die CEA ist der Arbeitspferd-Vergleich, wenn alle Optionen dasselbe Ergebnis anstreben. Sie beantwortet "welcher dieser Wege, X zu erreichen, ist die beste Verwendung des Geldes?" — aber *nicht* "lohnt sich X überhaupt?" (das braucht die [Kosten-Nutzen-Analyse](../kosten-nutzen-analyse/)) und *nicht* "wie schneidet X im Vergleich zu unabhängigen Prioritäten ab?" (das braucht die [Kosten-Nutzwert-Analyse](../kosten-nutzwert-analyse/) und ein generisches Ergebnis wie das QALY).

## Die Mathematik

Die Vergleichsstatistik ist der [ICER](../inkrementelles-kosten-effektivitäts-verhältnis/) in natürlichen Einheiten:

```
ICER = (Kosten_A − Kosten_B) / (Effekt_A − Effekt_B)
     = £ pro zusätzlich entdecktem Fall / vermiedener Einweisung / usw.
```

Vorgehen: die Ergebniseinheit definieren; jede Option aus derselben [Perspektive](../analyseperspektive/) über denselben [Zeithorizont](../zeithorizont/) bepreisen; dominierte Optionen eliminieren ([Effizienzgrenze](../dominanz-und-die-effizienzgrenze/)); inkrementelle Verhältnisse entlang der Grenze berechnen.

## Durchgerechnetes Beispiel

Drei Wege, unentdecktes Vorhofflimmern in einer Bevölkerung von 100.000 zu finden:

```
Option                          Kosten      Gefundene Fälle
Opportunistische Pulskontrollen 150.000 £   300
Apotheken-Screening-Aktionen    400.000 £   520
Wearable-basiertes Screening    900.000 £   610

ICER Apotheke vs. Puls:    (400.000−150.000)/(520−300) = 1.136 £ pro zusätzlichem Fall
ICER Wearable vs. Apotheke: (900.000−400.000)/(610−520) = 5.556 £ pro zusätzlichem Fall
```

Ob 5.556 £ pro zusätzlichem Fall "es wert" sind, hängt vom Wert eines gefundenen Falls ab (nachgelagerte Schlaganfallprävention) — die CEA ordnet die Optionen, aber die Einführungsentscheidung braucht diese externe Bewertung. Bemerkenswert: Die *durchschnittlichen* Kosten pro Fall der Wearable-Option (900.000/610 = 1.475 £) sehen gut aus; die *inkrementellen* 5.556 £ sind die ehrliche Zahl für die Ausweitungsentscheidung.

## Bezug zur Softwareentwicklung

Die CEA ist die richtige Vorlage, immer wenn Optionen ein Ergebnis teilen: Kosten pro beseitigtem instabilem Test über drei Sanierungsansätze; Kosten pro vermiedenem Vorfall über Observability-Anbieter; Kosten pro erfolgreichem Deployment über CI-Architekturen. Die Disziplin, die sie erzwingt — eine deklarierte Ergebniseinheit, inkrementelle (nicht durchschnittliche) Verhältnisse, zuerst dominierte Optionen eliminiert — tötet die meisten schlechten Anbietervergleiche, bevor die Preisdiskussion beginnt.

## Fallstricke

- **Optionen mit unterschiedlichen Ergebnissen vergleichen** ("gefundene Fälle" vs. "Zufriedenheit") in einer CEA — dafür braucht es die [Kosten-Konsequenzen-Analyse](../kosten-konsequenzen-analyse/) oder ein generisches Ergebnis.
- **Durchschnittliche Kosten-Effektivitäts-Verhältnisse** dort präsentieren, wo inkrementelle gebraucht werden (das Wearable-Beispiel oben).
- **Ergebniseinheiten aus Schmeichelei wählen**: "erzeugte Alarme" ist ein Output, kein Ergebnis; auf Einheiten bestehen, die Wert tragen.

## Quellen

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
