# Deutschlands DiGA-Schnellverfahren

DiGA (Digitale Gesundheitsanwendungen) ist Deutschlands gesetzlicher Weg für "Apps auf Rezept" — das weltweit erste nationale System, in dem Ärzte zugelassene Gesundheits-Apps verschreiben und die gesetzliche Krankenversicherung sie erstatten muss. Es ist das führende laufende Experiment, digitale Therapeutika im nationalen Maßstab zu bezahlen.

## Warum es wichtig ist

DiGA beantwortete die Frage, die sich jedes Digital-Health-Unternehmen stellt — "wer bezahlt am Ende?" — mit Gesetzgebung (dem DVG, 2019). Das Design ist bemerkenswert:

- **Schnelle Entscheidung**: Das BfArM (die Aufsichtsbehörde) muss innerhalb von 3 Monaten entscheiden.
- **Vorläufige Listung**: Apps können sich 12 Monate lang listen lassen, *während sie noch Evidenz erzeugen* — sie erwirtschaften Umsatz während ihrer entscheidenden Studie.
- **Evidenzfrist**: einen "positiven Versorgungseffekt" (medizinischer Nutzen oder patientenrelevante strukturelle/prozedurale Verbesserung) über eine vergleichende Studie belegen — meist ein RCT — oder von der Liste genommen werden. Etwa die Hälfte der vorläufigen Einträge schafft die Umwandlung nicht.
- **Preisgestaltung**: Der Hersteller setzt den Preis im ersten Jahr frei fest; danach wird mit dem Spitzenverband der Krankenkassen verhandelt. Mittlere anfängliche 3-Monats-Preise um 500 €; leistungsbezogene Preiselemente kommen ab 2026.

Marktrealität (Forschungsstand Ende 2024): ~68 gelistete Apps, >1 Mio. kumulierte Verordnungen, ~81 % der Verordnungen aktiviert, ~234 Mio. € kumulierte Kassenausgaben — ein echter Markt, aber bescheiden gegenüber dem Hype, und die Adhärenz nach Aktivierung bleibt der Schwachpunkt.

## Die Mathematik

Das kommerzielle Modell, das jeder DiGA-Gründer durchrechnet:

```
Umsatz = Verordnungen × Aktivierungsrate × Preis pro Verordnungszeitraum
Evidenzkosten = entscheidendes RCT (typischerweise 1–3 Mio. €) innerhalb
                des 12-Monats-Fensters
Erwartungswert = P(Evidenz gelingt) × Umsatz im stationären Zustand
                 − Evidenzkosten

Bei ~50 % Umwandlungsversagen muss P ehrlich eingeschätzt werden — die
Hälfte des Feldes gibt das RCT-Geld aus und verliert die Listung.
```

## Durchgerechnetes Beispiel

Eine App zum Depressionsmanagement wird vorläufig zu 450 €/Quartal gelistet:

```
Jahr 1: 20.000 Verordnungen × 81 % Aktivierung × 450 € ≈ 7,3 Mio. € Umsatz
RCT-Kosten: 2 Mio. €, parallel laufend
Ergebnis A (Evidenz positiv): dauerhafte Listung, verhandelter Preis ~380 €,
  stationärer Zustand 60.000 Verordnungen/Jahr ≈ 18,5 Mio. €/Jahr
Ergebnis B (Evidenz scheitert): Delistung nach Monat 12; Umsatz endet.
```

Das vorläufige Jahr finanziert die Evidenzerzeugung — die Kerninnovation des Pfades. Im Gegensatz dazu hungert die traditionelle Reihenfolge (erst Evidenz, Umsatz erst Jahre später) genau die Produkte aus, die DiGA existieren lassen will.

## Bezug zur Softwareentwicklung

Das DiGA-Muster — **vorläufige Einführung mit vorab registrierter Erfolgskennzahl und automatischem Auslaufen** — lässt sich direkt für die Governance von Entwicklungswerkzeugen kopieren: das Tool 12 Monate lang an Produktivnutzer ausliefern, die Kennzahl vorab registrieren (gemessene Zeitersparnis, Vorfallreduktion), automatisch auslaufen lassen, sofern die Evidenz nicht eintrifft. Das löst das Pilot-Paradox (Tools, die Skalierung brauchen, um Wert zu beweisen, bekommen nie Skalierung), ohne unbewiesener Technik Bestandsschutz zu gewähren. Die Daten zu 81 % Aktivierung bei geringer Adhärenz tragen auch eine Produktlehre: Verordnung (oder Führungsanweisung) bringt Installationen; nur Produktqualität bringt anhaltende Nutzung — siehe [Adhärenz und Persistenz](../adhärenz-und-persistenz/).

## Fallstricke

- **Die Listung als Ziellinie behandeln** — Verordnungen brauchen das Vertrauen der Verschreibenden; viele gelistete DiGAs verzeichnen vernachlässigbares Volumen.
- **Die entscheidende Studie unterdimensionieren**, um im Umsatzjahr Geld zu sparen — die falsche Sparsamkeit, die einen Großteil der 50-Prozent-Ausfallrate erklärt.
- **Das Modell ohne den Kostenträger übertragen**: DiGA funktioniert, weil die Erstattung gesetzlich vorgeschrieben ist; eine Kopie ohne verpflichtende Zahlung ist nur ein Pilotprogramm.

## Quellen

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
