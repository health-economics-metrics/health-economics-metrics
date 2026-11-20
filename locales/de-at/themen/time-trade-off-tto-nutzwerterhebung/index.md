# Time-Trade-Off-(TTO-)Nutzwerterhebung

TTO ist ein Standardverfahren, um einen Nutzwert für einen Gesundheitszustand direkt von einem Befragten zu erheben, statt ihn zu erfinden. Es ist eines der Erhebungsverfahren — neben dem Standard Gamble und diskreten Entscheidungsexperimenten —, die die Wertesets hinter Instrumenten wie [EQ-5D](../eq-5d/) erzeugen und damit hinter den meisten nachgelagerten [QALY](../qualitätsadjustiertes-lebensjahr/)-Berechnungen.

## Warum es wichtig ist

Jedes Nutzgewicht, das in eine QALY-Berechnung eingeht, musste irgendwoher kommen. TTO ist das Wie: Für einen Zustand, der als besser als der Tod gilt, wird ein Befragter gefragt, wie viele Jahre `X` in voller Gesundheit er für gleichwertig mit `T` Jahren im beeinträchtigten Zustand hielte (`X < T`); der Nutzwert ist `X / T`. Für einen Zustand, den manche Befragte für schlimmer als den Tod halten, versagt die Standardformel (sie kann Nutzwerte unter null nicht sauber darstellen), sodass stattdessen ein erweitertes TTO zur Anwendung kommt. Ein Softwareentwickler oder Analyst, der ein Nutzgewicht als gegebene Eingabe behandelt, ohne zu wissen, dass es ein validiertes Erhebungsprotokoll brauchte, ist einen Schritt von einer Zahl entfernt, die er bei einer Anfechtung nicht verteidigen kann.

## Die Mathematik

```
Standard-TTO (Zustand besser als der Tod):
  Nutzwert = Zeit_in_voller_Gesundheit / Zeit_im_beeinträchtigten_Zustand

Erweitertes TTO (Zustand schlimmer als der Tod):
  Nutzwert = -für_den_Tod_getauschte_Zeit / (Gesamtdauer - für_den_Tod_getauschte_Zeit)
```

`Zeit_in_voller_Gesundheit` / `Zeit_im_beeinträchtigten_Zustand` — Jahre `X` in voller Gesundheit, die als gleichwertig mit `T` Jahren im beeinträchtigten Zustand beurteilt werden. `für_den_Tod_getauschte_Zeit` / `Gesamtdauer` — in der Formulierung für „schlimmer als der Tod" die Jahre `a` eines `T` Jahre langen Restlebens, die der Befragte gegen den sofortigen Tod tauschen würde, weil er `T − a` Jahre in voller Gesundheit mit anschließendem Tod gegenüber `T` Jahren im Zustand schlimmer als der Tod vorzieht. Das Ergebnis ist negativ, verankert so, dass Tod = 0.

## Durchgerechnetes Beispiel

**Standard**: Ein Befragter befindet sich 10 Jahre lang in einem beeinträchtigten Zustand und ist indifferent gegenüber 7 Jahren in voller Gesundheit: Nutzwert = 7 / 10 = **0,7**.

**Schlimmer als der Tod**: Bei einem Restleben von 10 Jahren würde der Befragte 2 Jahre gegen den sofortigen Tod tauschen — er zieht 8 Jahre in voller Gesundheit mit anschließendem Tod 10 Jahren im Zustand schlimmer als der Tod vor: Nutzwert = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Bezug zur Softwareentwicklung

Der Punkt, auf den eine DevEx- oder Engagement-Umfrage stößt, wenn sie Menschen bittet, etwas auf einer ungeprüften Skala von 0–10 zu bewerten, gilt hier umgekehrt: TTO existiert gerade deshalb, weil „einfach die Leute bewerten lassen" für sich genommen kein validiertes Erhebungsverfahren ist. Bevor man einen Verbundindex — einen DevEx-Score, einen Engagement-Index, eine Burnout-Skala — auf einer selbstbewerteten Zahl aufbaut, sollte man fragen, womit sie erhoben wurde und ob dieses Verfahren validiert ist; dieselbe Frage stellen Gesundheitsökonomen an ein Nutzgewicht, bevor es in ein QALY eingeht.

## Fallstricke

- **Verallgemeinerung von Einzelwerten**: TTO-Werte werden von einer *Stichprobe* der Allgemeinbevölkerung (oder von Patienten) erhoben, nicht von der Person, über deren Versorgung entschieden wird — den TTO-Wert eines Befragten so zu verwenden, als gelte er allgemein, ist ein Stichprobenfehler.
- **Falsche Formulierung für den Zustand**: Die Standard-TTO-Formel setzt voraus, dass der Zustand eindeutig besser als der Tod ist; wendet man sie auf einen Zustand an, den manche Befragte für schlimmer als den Tod halten, ohne zur erweiterten Formulierung zu wechseln, ergibt sich stillschweigend ein falscher (positiver) Nutzwert.
- **Unvergleichbare Dauern**: TTO-Werte, die mit unterschiedlichen Restlebensdauern `T` für den Vergleich „schlimmer als der Tod" erhoben wurden, sind nicht direkt vergleichbar, ohne zu prüfen, ob das Studiendesign `T` konstant gehalten hat.

## Quellen

- Torrance GW. „Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. „Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
