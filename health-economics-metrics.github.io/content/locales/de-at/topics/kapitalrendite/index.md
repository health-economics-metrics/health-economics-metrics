# Kapitalrendite (ROI)

ROI ist das Verhältnis von Nettogewinn zu investiertem Geld. Es ist die Kennzahl, die Softwareentwicklung und Finanzen bereits teilen — die Gesundheitsökonomie ergänzt die Disziplin, die eine ROI-Behauptung genauer Prüfung standhalten lässt: deklarierte Perspektive, Vergleichsoption, Horizont und Nutzenkategorien.

## Warum es wichtig ist

ROI ist die lingua franca der Budgetverantwortlichen, und auch die öffentliche Gesundheit nutzt sie: Die wegweisende Übersichtsarbeit von Masters et al. fand einen **medianen ROI von 14,3:1** für Interventionen der öffentlichen Gesundheit (jedes 1 £ bringt ~14 £ für die weitere Wirtschaft und das Gesundheitssystem zurück) — eine Zahl, die weithin zur Begründung von Präventionsausgaben verwendet wird. Doch dieses 14:1 ist eine *gesellschaftliche Langfristzahl*; der ROI eines Krankenhaus-CFO ist kostenträgerbezogen und auf 1–3 Jahre angelegt. Die meisten ROI-Streitigkeiten sind eigentlich Streitigkeiten über eine nicht deklarierte Perspektive.

## Die Mathematik

```
ROI = (Nutzen − Kosten) / Kosten      (oft × 100 %)

Amortisationszeit = Kosten / jährlicher Nettonutzen
```

Eine ROI-Behauptung ist ohne vier Angaben unzureichend spezifiziert:

1. **Perspektive** — wessen Nutzen zählt? (siehe [Analyseperspektive](../analyseperspektive/))
2. **Vergleichsoption** — gegenüber welcher Alternative? (siehe [Opportunitätskosten](../opportunitätskosten/))
3. **Horizont** — über welchen Zeitraum, und [diskontiert](../diskontierung-und-zeitpräferenz/)?
4. **Nutzenklasse** — zahlungswirksam, Kapazität oder qualitativ? (siehe [zahlungswirksame vs. nicht zahlungswirksame Einsparungen](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/))

## Durchgerechnetes Beispiel

E-Rostering-System, Kosten 500.000 £ über 3 Jahre.

```
Zahlungswirksam: reduzierte Zeitarbeitsschichten        450.000 £
Kapazität:       freigesetzte Verwaltungszeit
                 der Stationsleitung                    600.000 £ (bewertet, nicht gebankt)
Qualitativ:      Mitarbeiterzufriedenheit, Sicherheit    nicht monetarisiert

Strenger finanzieller ROI = (450.000 − 500.000)/500.000 = −10 %
Ökonomischer ROI           = (1.050.000 − 500.000)/500.000 = +110 %
```

Beide Zahlen sind wahr. Ein Anbieter, der einem CFO, der nur 450.000 £ verbuchen kann, "+110 % ROI" verkündet, verliert Vertrauen; beide Zahlen benannt zu präsentieren, gewinnt es. Dieselbe Trennung schützt auch einen internen Fürsprecher, wenn die Finanzabteilung den Nutzen zwei Jahre später prüft.

## Bezug zur Softwareentwicklung

Jeder Tooling-Vorschlag hat eine ROI-Folie; fast keiner deklariert die vier Parameter. Der häufigste Fehler ist die Vermischung der Kategorien: Kapazitätsgewinne (Entwicklerminuten) als finanzielle Rendite dargestellt. KI-/Plattform-ROI wie im Beispiel oben strukturieren — Bargeldzeile, Kapazitätszeile, qualitative Zeile — und [Sensitivitätsanalyse](../sensitivitätsanalyse/) für die weichen Zahlen ergänzen. Für den speziellen Gewinn-und-Verlust-Realitätscheck bei KI-ROI siehe [Kapitalrendite von KI](../kapitalrendite-von-ki/).

## Fallstricke

- **Perspektivenwäsche**: gesellschaftlicher Nutzen über ein Jahrzehnt, zitiert gegenüber einem Budgetverantwortlichen mit 12-Monats-Horizont.
- **Brutto statt netto**: "bringt 3 Mio. £" bei 2 Mio. £ Einsatz sind 50 % ROI, nicht 300 %.
- **Verhältnis-Maximierung**: winzige Nenner erzeugen spektakuläre ROIs bei trivialen Investitionen; Portfolios nach NPV oder [Nettomonetärem Nutzen](../nettomonetärer-nutzen/) ordnen, ROI nur als Filter nutzen.
- **Keine Nutzenprüfung**: prognostizierter ROI ohne Verfolgung der [Nutzenrealisierung](../nutzenrealisierung/) ist ein Versprechen, kein Ergebnis.

## Quellen

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
