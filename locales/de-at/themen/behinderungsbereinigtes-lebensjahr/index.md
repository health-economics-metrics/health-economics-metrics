# Behinderungsbereinigtes Lebensjahr (DALY)

Ein DALY ist ein verlorenes Jahr gesunden Lebens — das Spiegelbild des [QALY](../qualitätsadjustiertes-lebensjahr/) auf der Krankheitslast-Seite. Wo QALYs *gewonnene* Gesundheit zählen, zählen DALYs durch Krankheit *verlorene* Gesundheit; Interventionen werden nach **vermiedenen** DALYs bewertet.

## Warum es wichtig ist

Das DALY ist der Standard der globalen Gesundheit (WHO, die Global-Burden-of-Disease-Studie und die meisten Gesundheitsministerien in Ländern mit niedrigem und mittlerem Einkommen planen in DALYs). Zielt Ihre Software auf internationale Gesundheitssysteme, Geber oder WHO-nahe Programme, lautet die Wertsprache vermiedene DALYs, nicht gewonnene QALYs. Der historische WHO-CHOICE-Referenzwert: Eine Intervention, die ein DALY für weniger als das 1-Fache des BIP pro Kopf vermeidet, ist "hoch kosteneffektiv", 1–3-fach "kosteneffektiv" (die WHO rät inzwischen von starrer Anwendung dieser Bänder ab, doch sie bleiben in der Praxis allgegenwärtig).

## Die Mathematik

```
DALY = YLL + YLD

YLL (verlorene Lebensjahre)          = Todesfälle × standardmäßige Lebenserwartung im Todesalter
YLD (mit Behinderung gelebte Jahre)  = Prävalenz × Behinderungsgewicht

Behinderungsgewicht ∈ [0, 1], 0 = volle Gesundheit, 1 = gleichwertig mit Tod
(Gewichte veröffentlicht von der Global-Burden-of-Disease-Studie)
```

## Durchgerechnetes Beispiel

Eine Screening-Erinnerungsplattform in einer Region erhöht die Frühentdeckung einer Krankheit. Jährlich verhindert sie 10 vorzeitige Todesfälle (jeweils mit einem Verlust von 20 Jahren gegenüber der Standard-Lebenserwartung) und verhindert bei 200 Menschen ein Jahr mit einer Erkrankung, deren Behinderungsgewicht 0,2 beträgt.

```
Vermiedene YLL = 10 × 20    = 200
Vermiedene YLD = 200 × 0,2  = 40
Vermiedene DALYs            = 240 pro Jahr
```

Kostet der Betrieb der Plattform 600.000 $/Jahr, betragen die Kosten pro vermiedenem DALY 600.000 / 240 = **2.500 $**. In einem Land mit einem BIP pro Kopf von 8.000 $ liegt das deutlich unter dem 1-fachen BIP-Referenzwert — "hoch kosteneffektiv" im Sinne von WHO-CHOICE.

## Bezug zur Softwareentwicklung

- Digitale Gesundheit, die sich an globale Gesundheitsgeber richtet (Gavi, Global Fund, nationale Programme), sollte Wirkung als **Kosten pro vermiedenem DALY** ausdrücken — das ist die Kennzahl, in der Gutachter bereits denken.
- Das DALY ist auch eine nützliche Vorlage für *Lastenbuchhaltung* in der Softwareentwicklung: Vorfälle, instabile Builds und Legacy-Reibung sind "mit Behinderung gelebte Jahre" für eine Codebasis — ein nach Mühsal gewichtetes Lasteninventar zeigt, wo Sanierung die meisten "gesunden Entwicklungsjahre" erkauft, genauso wie GBD-Lasttabellen Gesundheitsausgaben lenken.

## Fallstricke

- **Gewonnene QALYs ≠ vermiedene DALYs zahlenmäßig** — unterschiedliche Gewichte, unterschiedliche Lebenstafeln, unterschiedliche Konventionen (DALYs verwendeten historisch Altersgewichtung und Diskontierung innerhalb des Maßes). Nicht beiläufig umrechnen.
- **BIP-Vielfache als Schwellenwerte wie einen Stempel verwenden** — die WHO selbst warnt, dass sie Budgets und Opportunitätskosten ignorieren; siehe [Zahlungsbereitschaftsschwellen](../zahlungsbereitschaftsschwellen/).
- **DALYs auf Bevölkerungsebene aus Pro-Nutzer-Wirksamkeit behaupten**, ohne mit Akzeptanz und Adhärenz zu multiplizieren — siehe [Reichweite und Gerechtigkeit](../reichweite-und-gerechtigkeit/).

## Quellen

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
