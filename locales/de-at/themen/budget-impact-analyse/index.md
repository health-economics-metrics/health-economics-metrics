# Budget-Impact-Analyse (BIA)

Die BIA schätzt, was die Einführung einer Intervention mit dem **Budget** eines bestimmten Kostenträgers über die nächsten 1–5 Jahre macht. Sie beantwortet die *Erschwinglichkeit*; die Kosten-Effektivitäts-Analyse beantwortet den *Wert*. Eine Technologie kann exzellenten Wert bieten und trotzdem unerschwinglich sein — oder erschwinglich und von geringem Wert. Ernsthafte Bewertungen brauchen beides.

## Warum es wichtig ist

Die Frage des Finanzdirektors lautet nie "wie hoch ist der ICER?" — sondern "was macht das mit dem Budget nächstes Jahr?" Die Good-Practice-Leitlinie von ISPOR (der Branchenstandard) legt fest: die eigene Perspektive des Kostenträgers, ein Horizont von 1–5 Jahren, *undiskontierte* jährliche Zahlungsströme, realistische Adoptionskurven und szenariobasierte (nicht probabilistische) Unsicherheit. NICE verlangt Budget-Impact-Informationen neben der Kosteneffektivität; ein Produkt mit nationalem Budget-Impact über ~20 Mio. £/Jahr in England löst unabhängig von seinem ICER kommerzielle Verhandlungen aus.

## Die Mathematik

```
Kosten_Szenario(t) = Σ über Patientengruppen:
   förderfähige Bevölkerung(t) × Adoption(t) × Nettokosten pro Patient(t)

Nettokosten pro Patient = Kosten der Intervention − verdrängte Versorgungskosten + induzierte Versorgungskosten
```

Wichtige Modellierungsentscheidungen: Wachstum der förderfähigen Bevölkerung, die Adoptionskurve (Adoption ist nie augenblicklich), was die neue Option verdrängt, und welche Nachfrage sie *induziert* (einfacherer Zugang → mehr Nutzer).

## Durchgerechnetes Beispiel

Ein Kostenträger, der 2 Mio. Menschen abdeckt, prüft ein digitales Therapeutikum zu 300 £/Patient/Jahr; 1,5 % der Mitglieder sind förderfähig (30.000); Adoption 20 % → 40 % → 60 % über 3 Jahre; jeder Nutzer verdrängt 120 £/Jahr sonstiger Versorgung.

```
Nettokosten pro Nutzer = 300 − 120 = 180 £

Jahr 1: 30.000 × 0,20 × 180 = 1,08 Mio. £
Jahr 2: 30.000 × 0,40 × 180 = 2,16 Mio. £
Jahr 3: 30.000 × 0,60 × 180 = 3,24 Mio. £
```

Selbst wenn der ICER des Produkts hervorragende 8.000 £/QALY beträgt, muss der Kostenträger bis Jahr 3 3,24 Mio. £ an *neuem Geld* finden — die verdrängten 120 £ verteilen sich dünn über andere Budgetzeilen und werden nicht als Bargeld freigesetzt (siehe [zahlungswirksame vs. nicht zahlungswirksame Einsparungen](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/)). Deshalb sind Wert pro Einheit und Erschwinglichkeit getrennte Hürden.

## Bezug zur Softwareentwicklung

Die BIA ist genau das CFO-seitige Gegenstück zu einer Pro-Kopf-ROI-Behauptung: "Es ist kosteneffektiv pro Entwickler, aber können wir uns den organisationsweiten Rollout dieses Geschäftsjahr leisten?" Lizenzstufen modellieren, eine S-förmige Adoptionskurve, verdrängte Tooling-Ausgaben, die erst Bargeld freisetzen, wenn alte Verträge tatsächlich enden, und induzierte Nutzung (günstigere CI → mehr CI). Eine dreijährige Budget-Impact-Tabelle neben dem ROI zu präsentieren, macht einen Vorschlag für Unternehmenswerkzeuge für die Finanzabteilung glaubwürdig. Eine veröffentlichte Budget-Impact-Summe auf Standorte, Kohorten oder Haushaltsjahre aufzuteilen — so, dass die Teile exakt zur veröffentlichten Zahl abstimmen — ist genau [Cent-genaue Kostenzuordnung](../cent-genaue-kostenzuordnung/); die vielen Posten zu summieren, die diese Summe überhaupt erst speisen, ist [währungssichere Kostenaggregation](../währungssichere-kostenaggregation/).

## Fallstricke

- **Fantasie der sofortigen Adoption**: die Wirkung von Jahr 1 mit Adoption im stationären Zustand berechnet.
- **Verdrängte Kosten als Bargeld zählen**, wenn es diffuse Kapazität ist.
- **Induzierte Nachfrage ignorieren** — Zugangsverbesserungen lassen die Nutzung der förderfähigen Bevölkerung wachsen.
- **BIA- und CEA-Horizonte/Diskontierung verwechseln**: Die BIA ist absichtlich kurzhorizontig, undiskontiert und kostenträgerspezifisch.

## Quellen

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
