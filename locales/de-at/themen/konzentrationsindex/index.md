# Konzentrationsindex

Der Konzentrationsindex (Wagstaff, Paci, van Doorslaer, 1991) ist das Standardmaß für sozioökonomisch bedingte Ungleichheit in einer Gesundheitsvariablen und reicht von −1 bis 1. Negativ bedeutet: Die Gesundheitsvariable konzentriert sich bei sozioökonomisch Benachteiligten; positiv: bei Bessergestellten; null: kein durchgängiger sozioökonomischer Gradient. Er macht aus einem Verdacht auf ungleiche Verteilung eine einzige, vergleichbare Zahl.

## Warum es wichtig ist

Ein Programm kann im Aggregat wirksam aussehen und seinen Nutzen dennoch fast ausschließlich Menschen bringen, denen es schon besser ging. Genau solche Verteilungsfragen verfolgt [Reichweite und Gerechtigkeit](../reichweite-und-gerechtigkeit/) deskriptiv — Reichweite nach Deprivationsquintil geschichtet, eine Gerechtigkeitslücke zwischen oberster und unterster Gruppe —, aber eine geschichtete Tabelle lässt sich nicht zu einer einzigen Trendlinie verdichten und kaum über zwei völlig verschiedene, auf unterschiedlichen Skalen gemessene Interventionen hinweg vergleichen. Der Konzentrationsindex löst beide Probleme: Er wird für jede Gesundheitsvariable gegen jede sozioökonomische Rangfolge gleich berechnet. So kann ein nationaler Gesundheitsdienst verfolgen, ob die Ungleichheit eines bestimmten digitalen Dienstes von Release zu Release wächst oder schrumpft, und die Verteilungsgerechtigkeit einer App-Einführung etwa mit der eines Screening-Programms auf derselben normierten Skala vergleichen.

## Die Mathematik

```
CI = (2 / Mittelwert(Gesundheitswerte)) × Kov(Gesundheitswerte, sozioökonomische_Ränge)

Kov(X, Y) = Mittelwert(X × Y) − Mittelwert(X) × Mittelwert(Y)   (Populationskovarianz)

sozioökonomische_Ränge: der fraktionale Rang jeder Person in der
sozioökonomischen Verteilung, in [0, 1] (0 = am stärksten benachteiligt,
1 = am stärksten begünstigt; bei gruppierten/klassierten Daten
üblicherweise der Mittelpunktrang jeder Gruppe)
```

Das ist die „bequeme Kovarianzformel" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Weltbank 2008) — die gängige Abkürzung für Praktiker, um den Konzentrationsindex direkt aus gepaarten Beobachtungen zu berechnen, ohne zuerst eine Konzentrationskurve zu zeichnen und zu integrieren.

## Durchgerechnetes Beispiel

Ein selbstberichteter Gesundheitswert (1 = schlechteste, 4 = beste), beobachtet über vier gleich große sozioökonomische Quartile, jedes durch seinen Quartilmittelpunktrang vertreten:

```
Gesundheitswerte           = [1,0, 2,0, 3,0, 4,0]
sozioökonomische_Ränge     = [0,125, 0,375, 0,625, 0,875]

Mittelwert(Gesundheitswerte)  = 2,5
Mittelwert(Gesundheit × Rang) = Mittelwert([0,125, 0,75, 1,875, 3,5]) = 1,5625
Mittelwert(Ränge)             = 0,5

Kov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

Ein positiver Wert von `0,25` bedeutet, dass sich dieser Gesundheitswert bei den sozioökonomisch Begünstigten konzentriert — die Befragten mit höheren Werten liegen eher am besser gestellten Ende der Rangfolge.

## Bezug zur Softwareentwicklung

Das ist dieselbe kovarianzbasierte Ungleichheitsmessung, die in der Ökonomie allgemein verwendet wird (ein Cousin des Gini-Koeffizienten). Sie lässt sich darauf übertragen, ob sich der Nutzen eines Softwareprodukts bei ohnehin begünstigten Nutzersegmenten konzentriert, statt gerecht verteilt zu sein — eine direkte Erweiterung von [Reichweite und Gerechtigkeit](../reichweite-und-gerechtigkeit/) (der „Reach"-Dimension von RE-AIM) zu einem formalen statistischen Maß statt einer beschriebenen Lücke. Wo Reichweite und Gerechtigkeit die Wirkung je Schicht berichtet, verdichtet der Konzentrationsindex die gesamte Verteilung zu einer einzigen vorzeichenbehafteten Zahl, die sich als einzelner KPI über Releases hinweg verfolgen lässt — praktisch für ein Dashboard, wo eine vollständige geschichtete Aufschlüsselung nicht passt.

## Fallstricke

- **Vorzeichenkonvention driftet**: Das Vorzeichen hängt davon ab, wie sowohl die Gesundheitsvariable als auch der Rang definiert sind — kehrt man eines um, kehrt sich das Vorzeichen um. Die verwendete Konvention muss daher bei jedem berichteten Wert ausdrücklich angegeben werden.
- **Grenzränge statt Mittelpunktränge**: Gruppierte oder klassierte sozioökonomische Daten (z. B. Quintile) erfordern den fraktionalen Rang jeder Gruppe an ihrem *Mittelpunkt*, nicht an ihrer Grenze, sonst ist der Index verzerrt.
- **„Nahe null" als „keine Ungleichheit" lesen**: Ein Konzentrationsindex nahe null bedeutet „kein durchgängiger sozioökonomischer Gradient", nicht „keine Ungleichheit" im absoluten Sinn — gegenläufige Ungleichheiten in verschiedene Richtungen können sich aufheben.

## Quellen

- Wagstaff A, Paci P, van Doorslaer E. „On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. „Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — das Standard-Handbuch für Praktiker, Quelle der hier verwendeten bequemen Kovarianzformel. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
