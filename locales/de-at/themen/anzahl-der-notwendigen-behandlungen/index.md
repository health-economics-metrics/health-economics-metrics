# Anzahl der notwendigen Behandlungen (NNT)

NNT ist die Anzahl der Patienten, die eine Intervention erhalten müssen, damit **ein** zusätzlicher Patient über einen angegebenen Zeitraum profitiert. Es wandelt prozentuale Risikoreduktionen — die in die Irre führen — in Aufwand-pro-Nutzen-Einheiten um, über die jeder nachdenken kann.

## Warum es wichtig ist

"Senkt Herzinfarkte um 25 %!" klingt eindrucksvoll. Liegt das Ausgangsrisiko bei 4 % über 5 Jahre, beträgt die absolute Reduktion 1 Prozentpunkt, sodass **100 Menschen das Medikament 5 Jahre lang nehmen müssen, damit 1 profitiert** — und alle 100 tragen die Kosten und Nebenwirkungen. NNT ist das Gegenmittel gegen Marketing mit relativem Risiko, weshalb evidenzbasierte Medizin damit voranstellt. Statine zur Primärprävention: NNT ≈ 50–100 über 5 Jahre pro vermiedenem Herzinfarkt. Ihr Spiegelbild, **NNH** (Number Needed to Harm), zählt, wie viele behandelt werden müssen, bis eine Person geschädigt wird.

## Die Mathematik

```
ARR = Ereignisrate Kontrolle − Ereignisrate Behandlung   (absolute Risikoreduktion)
NNT = 1 / ARR

NNH = 1 / (Schadensrate_Behandlung − Schadensrate_Kontrolle)

Ökonomische Brücke:
Kosten pro vermiedenem Ereignis = NNT × Kosten pro Behandlungszyklus
```

Immer den Zeitraum und die Ausgangsbevölkerung angeben — NNT ist ohne beides bedeutungslos.

## Durchgerechnetes Beispiel

Ein Sturzvorhersagesystem in einem Krankenhaus markiert Hochrisikopatienten für Intervention (Bettsensoren, Durchsicht, Beaufsichtigung). Studie: Stürze mit Verletzung sinken von 3,2 % auf 2,4 % der Aufnahmen.

```
ARR = 0,8 Prozentpunkte → NNT = 1/0,008 = 125
   (125 Patienten müssen das Interventionspaket erhalten, um 1 verletzungsbedingten Sturz zu verhindern)

Interventionskosten ≈ 40 £/Patient → Kosten pro vermiedenem Sturz = 125 × 40 = 5.000 £
Kosten eines verletzungsbedingten Sturzes im Krankenhaus (zusätzlicher Aufenthalt,
Bildgebung, Rechtsstreit) ≈ 12.000 £
Netto: Prävention rechnet sich ~2,4:1 — und der QALY-Gewinn kommt obendrauf.
```

Beachtenswert, wie NNT die Behauptung ehrlich hält: "senkt Stürze um 25 %" und "verhindert einen Sturz pro 125 behandelten Patienten" sind dasselbe Ergebnis, unterschiedlich überzeugend dargestellt.

## Bezug zur Softwareentwicklung

NNT ist die richtige Einheit für jedes Gate oder jede Prüfung, die auf viele Elemente wirkt, um wenige zu fangen: **"Anzahl der PRs, die das KI-Review-Gate durchlaufen müssen, um einen produktionsreifen Fehler zu fangen."** Prüft das Gate 400 PRs pro echtem Fang (NNT = 400) bei je 4 Minuten Entwickleraufmerksamkeit, kostet ein Fang ~27 Entwicklerstunden — das nun mit den Vorfallkosten vergleichen, die es verhindert. NNH entspricht den Falsch-Positiven: wie viele PRs pro *falschem* Alarm, und was kostet jeder an Aufmerksamkeit und Vertrauen? Screening-artiges Tooling (Linter, Sicherheitsscanner, Anomalieerkennung) sollte mit NNT-/NNH-Rechnung ausgeliefert werden — siehe [Screening-Ökonomie](../screening-ökonomie/) dafür, warum niedrige Prävalenz diese Zahlen brutal macht. [Anzahl der notwendigen Screenings](../anzahl-der-notwendigen-screenings/) ist die analoge Kennzahl eine Ebene höher, für ein ganzes Programm aus Screening und anschließender Behandlung statt für eine Behandlung allein.

## Fallstricke

- **Kein Zeitraum**: "NNT = 50" bedeutet nichts; "NNT = 50 über 5 Jahre" ist eine Behauptung.
- **Ausgangsrisiko-Transplantation**: ein NNT, berechnet in einer Hochrisiko-Studienpopulation, bricht in einer Niedrigrisiko-Einsatzpopulation zusammen.
- **NNH ignorieren** — ein Gate mit NNT 400 und NNH 3 ist ein Ärgernisgenerator, kein Sicherheitssystem.

## Quellen

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
