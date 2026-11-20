# Cent-genaue Kostenzuordnung

Wer einen Gesamtbetrag — einen gemeinsamen Zuschuss, eine Infrastrukturrechnung, eine Budget-Impact-Zahl — mit naiver Prozentrechnung auf mehrere Empfänger aufteilt, erhält regelmäßig Teile, die sich nicht wieder zum ursprünglichen Gesamtbetrag summieren. Die cent-genaue Zuordnung ist die Lösung: ein ganzzahliges/dezimales Verfahren in kleinsten Währungseinheiten (Cent), das garantiert, dass die Teile *exakt* die Summe ergeben, egal wie ungleichmäßig sie sich teilt. Jeder Softwareentwickler, der einen aufgeteilten Gesamtbetrag auf den Cent genau abstimmen muss — Gehaltsabrechnung, Zuschussauszahlung, Umlage gemeinsamer Dienste —, braucht dieses Muster, keine Gleitkomma-Prozentsätze.

## Warum es wichtig ist

Das ist ein benanntes, grundlegendes Muster der Unternehmenssoftware-Entwicklung: Martin Fowlers *Patterns of Enterprise Application Architecture* (2002) dokumentiert `Money` und `Allocate` genau deshalb, weil „100 $ auf drei aufteilen" ein Problem ist, das naiver Code ständig falsch löst — und zwar stillschweigend: Der Fehler zeigt sich erst, wenn jemand die Bücher abstimmt und die Teile einen Cent unter (oder über) der Summe findet. In der Gesundheitsökonomie und im NHS-Finanzwesen ist das nicht akademisch: Budget-Impact-Summen werden auf Standorte, Jahre oder Direktionen aufgeteilt; gemeinsame Infrastruktur- und Lizenzkosten werden nach Mitarbeiterzahl oder Aktivitätsanteil auf Abteilungen umgelegt. Jede dieser Aufteilungen muss exakt aufgehen, denn ein Finanzdirektor, dem Teile vorgelegt werden, die sich nicht zur Summe addieren, verliert das Vertrauen in das ganze Modell.

## Die Mathematik

```
Naives (fehlerhaftes) Verfahren:
  Teil_i = runden(Summe × Anteil_i / Σ Anteile)     — rundet jeden Teil einzeln

Exaktes Verfahren (Methode des größten Rests / „Largest-Remainder-Zuteilung"):
  1. Basis_i = abrunden(Summe_Untereinheiten × Anteil_i / Σ Anteile)   — nur ganze Untereinheiten (Cent)
  2. Rest = Summe_Untereinheiten − Σ Basis_i                            — übrige Cent, stets < Anzahl der Empfänger
  3. je 1 zusätzliche Untereinheit an die `Rest` Empfänger mit dem größten
     Bruchrest aus Schritt 1 verteilen, bis der Rest aufgebraucht ist

Ergebnis: Σ Teil_i == Summe, immer, konstruktionsbedingt.
```

Das exakte Verfahren rundet nie einen Teil isoliert — es rundet die *gesamte Zuordnung* als eine Operation, und genau das erhält die Summeninvariante.

## Durchgerechnetes Beispiel

100,00 $ in drei gleiche Teile teilen (`Anteile = [1, 1, 1]`).

Naives Verfahren: 100,00 $ ÷ 3 = 33,333… $, einzeln auf den nächsten Cent gerundet ergibt 33,33 $ je Empfänger. Summiert: 33,33 $ × 3 = 99,99 $ — ein Cent ist verschwunden, und kein einzelner Posten ist so „falsch", dass man es durch Hinsehen bemerkte.

Exaktes Verfahren: `Basis` = 33,33 $ für alle drei (insgesamt 9.999 Untereinheiten aus `abrunden(10.000 / 3) = 3.333` Cent je Empfänger), es bleibt ein Rest von 1 Cent (10.000 − 9.999). Dieser eine übrige Cent geht an den Empfänger mit dem größten Bruchrest in der Division — welcher Empfänger genau, ist ein internes Detail der Gleichstandsauflösung, auf das sich ein Aufrufer nicht verlassen sollte. Zwei Empfänger erhalten 33,33 $ und einer 33,34 $, und die drei Teile summieren sich auf genau 100,00 $.

Genau diese Arithmetik braucht eine [Budget-Impact-Analyse](../budget-impact-analyse/), wann immer eine Gesamt-Budget-Impact-Zahl auf Standorte, Kohorten oder Haushaltsjahre aufgeteilt und auf die veröffentlichte Summe zurückgeführt werden muss — siehe [währungssichere Kostenaggregation](../währungssichere-kostenaggregation/) für das Schwesterproblem, viele solcher Posten ohne Drift zu summieren.

## Bezug zur Softwareentwicklung

Das ist buchstäblich „das Money-Muster" der Unternehmenssoftware-Architektur — ein grundlegendes, benanntes Muster für genau diese Fehlerklasse, kein einmaliger Trick. Reale Fehler bei Finanzabstimmungen sind genau aus dieser Fehlerklasse entstanden: in `f64` berechnete Prozentaufteilungen, je Empfänger gerundet und nie gegen die ursprüngliche Summe geprüft. Es knüpft direkt an das Modul [Gesamtbetriebskosten](../gesamtbetriebskosten/) dieses Repositorys an, das derzeit einfache Gleitkommakosten über Jahre und Optionen summiert — dieselbe Exaktheitsdisziplin gilt, wann immer eine TCO- oder Budget-Impact-Summe zugeordnet statt nur addiert werden muss.

## Fallstricke

- **Erst Prozent, dann runden, statt Largest-Remainder**: Zuordnung mit Gleitkomma-Prozentsätzen und separates Runden je Empfänger, was den Rundungsfehler verstärkt und sich selten wieder zur Summe addiert, besonders bei vielen Empfängern.
- **Untereinheiten-Exponenten der Währung ignorieren**: Annehmen, jede Währung habe 2 Nachkommastellen — der Japanische Yen hat 0, manche Währungen haben 3 —; eine selbstgebaute Prozentaufteilung codiert meist 2 fest und bricht für andere Währungen stillschweigend; eine exakte Zuordnungsroutine liest den Exponenten aus der Währung selbst (ISO 4217).
- **Einen bereits zugeordneten Rest erneut zuordnen**: die Zuordnungsroutine ohne Idempotenzprüfung erneut auf den Rest einer früheren Zuordnung laufen lassen, was denselben Cent doppelt demselben Empfänger gutschreiben kann.

## Quellen

- Fowler M. „Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — die Muster `Money` und `Allocate`.
- ISO 4217 — Norm für Währungs- und Fondscodes, die den Untereinheiten-Exponenten jeder Währung festlegt.
