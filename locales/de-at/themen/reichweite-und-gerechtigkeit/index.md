# Reichweite und Gerechtigkeit

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance (Reichweite, Wirksamkeit, Adoption, Implementierung, Aufrechterhaltung) — ist das Standardrahmenwerk, um die *Bevölkerungs*-Wirkung einer Intervention zu beurteilen. Seine zentrale Rechnung: **Public-Health-Wirkung ≈ Reichweite × Wirksamkeit**. Digitale Werkzeuge fügen eine Gerechtigkeitsdimension hinzu: Die digitale Kluft macht die Reichweite systematisch ungleich, und digital-first-Bereitstellung kann genau die Gesundheitslücken vergrößern, die sie schließen soll.

## Warum es wichtig ist

Systematische Übersichtsarbeiten, die RE-AIM auf mHealth anwenden, finden ein durchgängiges Muster: starke Reichweite und Adoption, **schwache Wirksamkeit und Aufrechterhaltung** — Apps verbreiten sich leicht und verblassen schnell. Für einen nationalen Gesundheitsdienst bedeutet das: ein beeindruckendes Pro-Nutzer-Produkt kann eine schlechte Bevölkerungsinvestition sein, und umgekehrt: ein bescheiden wirksames Werkzeug, das Millionen erreicht, kann ein brillantes übertreffen, das Tausende erreicht (siehe die [HALE](../gesundheitsbereinigte-lebenserwartung/)-Rechnung). Gerechtigkeit ist keine Nebenbedingung, sondern ein Werttreiber: digitale Ausgrenzung folgt Alter, Benachteiligung, Behinderung und Sprache — genau den Bevölkerungsgruppen mit der größten behandelbaren Last —, sodass der marginal ausgeschlossene Nutzer oft *überdurchschnittliches* Nutzenpotenzial hat. Für ein formales statistisches Maß sozioökonomisch bedingter gesundheitlicher Ungleichheit siehe [Konzentrationsindex](../konzentrationsindex/).

## Die Mathematik

```
Bevölkerungswirkung ≈ Reichweite × Wirksamkeit
  Reichweite   = Teilnehmer / förderfähige Bevölkerung (siehe
                 activation-and-uptake.md)
  Wirksamkeit  = Realwelteffekt unter Teilnehmern (bindungsgewichtet —
                 siehe retention-and-churn.md)

Gerechtigkeitsstratifizierte Version:
  Wirkung_Gruppe_g = Reichweite_g × Wirksamkeit_g, berichtet pro
  Benachteiligungsquintil / Altersband / Sprachgruppe
  Gerechtigkeitslücke = Wirkung_oberstes Quintil − Wirkung_unterstes Quintil

Distributive Kosteneffektivität: Gerechtigkeitsgewichte auf QALYs nach
Empfängergruppe anwenden — ein QALY für die Schlechtestgestellten zählt
mehr (eine zunehmend gängige HTA-Erweiterung).
```

## Durchgerechnetes Beispiel

Ein digitales Diabetes-Präventionsprogramm, auf zwei Arten berichtet:

```
Aggregiert: Reichweite 12 %, Effekt 0,02 QALYs/Teilnehmer →
            0,0024 QALYs/förderfähige Person

Stratifiziert (Benachteiligungsquintile):
  Q1 (am wenigsten benachteiligt): Reichweite 22 %, Effekt 0,02 → 0,0044
  Q5 (am meisten benachteiligt):   Reichweite 4 %,  Effekt 0,025 → 0,0010
```

Das Programm liefert dem am wenigsten benachteiligten Quintil 4,4-mal mehr Gesundheit — während der Effekt pro Teilnehmer bei Q5 HÖHER ist (mehr Spielraum). Ein assistiert-digitaler Arm (Telefon-Coaching + Gemeindezugang), der 20 % mehr pro Q5-Teilnehmer kostet und die Q5-Reichweite auf 12 % hebt, verdreifacht die Q5-Wirkung und verbessert das Aggregat — die Gerechtigkeitsinvestition IST hier die Effizienzinvestition.

## Bezug zur Softwareentwicklung

Reichweite ist wesentlich ein Entwicklungsartefakt: Mindestanforderungen an Gerät und Betriebssystem, Bandbreitenannahmen, Sprachunterstützung, Barrierefreiheitskonformität (WCAG), Identitätsprüfungshürden und Nur-App-Store-Vertrieb schneiden jeweils Bevölkerungsgruppen aus dem Nenner heraus — meist unsichtbar, weil ausgeschlossene Nutzer nie in der Analytik erscheinen. Entwicklungspraktiken, die Gerechtigkeit bewegen: den *Nenner* messen (die förderfähige Bevölkerung instrumentieren, nicht nur die Nutzer); Performance für alte Geräte und schlechte Konnektivität budgetieren; assistiert-digitale Pfade (Telefon, SMS, Kiosk) als erstklassige Abläufe ausliefern statt als Schamkanäle; und jede Dashboard-Kennzahl nach den Gerechtigkeitsdimensionen stratifizieren — ein unstratifizierter Durchschnitt ist, wo sich Ungerechtigkeit versteckt (die [GDS-Inanspruchnahme](../gds-servicekennzahlen/) trägt dieselbe Warnung).

## Fallstricke

- **Wirksamkeit bei Abschließenden berichtet, Wirkung für Bevölkerungen behauptet** — die Reichweite-Terme still fallen gelassen.
- **Gerechtigkeit als nachträgliche Prüfung** statt als Designeingabe; Reichweite nachträglich anzupassen ist weit teurer, als von Anfang an dafür zu designen.
- **Aufrechterhaltungs-Amnesie**: RE-AIMs schwächste mHealth-Dimension — Wirkungsbehauptungen über den Zeithorizont der Evidenz hinaus.
- **Rein-digitale-Kanal-Einsparungen**, die Kosten auf ausgeschlossene Nutzer und Frontpersonal verschieben (siehe [GDS-Servicekennzahlen](../gds-servicekennzahlen/)).

## Quellen

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
