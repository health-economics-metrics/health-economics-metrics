# Realoptionsbewertung

Die Realoptionsbewertung wendet die Logik der Finanz-Optionspreisbildung auf reale (nicht an Finanzmärkten gehandelte) Investitionsentscheidungen an — konkret auf die *Erweiterungsoption*, ein Projekt später auszubauen, wenn es erfolgreich ist, ohne dazu verpflichtet zu sein. Ein vereinfachtes einperiodiges Binomialmodell (Cox, Ross, Rubinstein, 1979) bewertet diese Flexibilität direkt und macht aus „lasst uns klein starten und sehen" von einer Ahnung eine eingepreiste Zahl.

## Warum es wichtig ist

Eine statische Kapitalwertberechnung bepreist ein Projekt als Alles-oder-nichts-Wette: finanzieren oder nicht, im heutigen Umfang, für immer. Reale Projekte — und insbesondere gestufte Einführungen digitaler Gesundheitsangebote — sind selten so ausgelegt: Ein Gesundheitssystem kann einen kleinen Piloten finanzieren, abwarten, was geschieht, und nur bei Erfolg weiteres Geld zusagen. Diese Flexibilität hat echten Wert, und sie zu ignorieren unterbewertet gestufte Investitionen systematisch gegenüber einmaligen — genau verkehrt für Beschaffungsprozesse, die den sicherer aussehenden gestuften Vorschlag belohnen. Die Realoptionsbewertung bepreist die Flexibilität selbst, sodass ein gestufter Vorschlag fair mit einer Alternative voller Festlegung verglichen werden kann, statt dafür bestraft zu werden, auf einer naiven Kapitalwertzeile kleiner auszusehen.

## Die Mathematik

```
Risikoneutrale Wahrscheinlichkeit des „Aufwärts"-Zustands:
  p = ((1 + risikofreier_Zins) − Abwärtsfaktor) / (Aufwärtsfaktor − Abwärtsfaktor)

Erweiterungsauszahlung in jedem Zustand (bei null begrenzt — Erweitern ist optional):
  Auszahlung_auf = max(Projektwert × Aufwärtsfaktor − Erweiterungskosten, 0)
  Auszahlung_ab  = max(Projektwert × Abwärtsfaktor  − Erweiterungskosten, 0)

Optionswert (abgezinste erwartete Auszahlung):
  Optionswert = (p × Auszahlung_auf + (1 − p) × Auszahlung_ab) / (1 + risikofreier_Zins)

Erweiterter Kapitalwert = statischer_Kapitalwert + Optionswert
```

Der Wert des Projekts steigt (`Aufwärtsfaktor`) oder fällt (`Abwärtsfaktor`) bis zum nächsten Entscheidungszeitpunkt. Erweitert wird nur, wenn es in diesem Zustand profitabel ist — die Begrenzung der Auszahlung bei null macht dies zu einer echten *Option* statt einer Verpflichtung. Zur Bepreisung der Option, zuerst Information zu sammeln, statt später zu erweitern, siehe [Erwarteter Wert perfekter Information](../erwarteter-wert-perfekter-information/). Zu den Kosten des Wartens auf diese Entscheidung siehe [Verzögerungskosten](../verzögerungskosten/).

## Durchgerechnetes Beispiel

Ein digitaler Pilotdienst mit `Projektwert = 1.000.000 £`, einem möglichen Anstieg auf das 1,5-Fache oder Absinken auf das 0,5-Fache bis zum nächsten Entscheidungszeitpunkt, einem risikofreien Zins von 8 % und Erweiterungskosten von 600.000 £:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

Auszahlung_auf = max(1.000.000 × 1,5 − 600.000, 0) =  900.000
Auszahlung_ab  = max(1.000.000 × 0,5 − 600.000, 0) = max(−100.000, 0) = 0

Die Begrenzung zählt: Die Option würde NICHT ausgeübt, wenn der Markt
enttäuscht — die Erweiterungskosten von 600.000 £ übersteigen die 500.000 £,
die das Projekt im Abwärtszustand wert wäre.

Optionswert = (0,58 × 900.000 + 0,42 × 0) / 1,08
            = 522.000 / 1,08
            ≈ 483.333,33 £
```

Addiert man den Optionswert zu einem statischen Kapitalwert von 200.000 £: erweiterter Kapitalwert = 200.000 + 483.333,33 ≈ **683.333,33 £**. Würde man nur den statischen Kapitalwert von 200.000 £ ohne diesen Optionswert berichten, unterschätzte man den wahren Wert des gestuften Projekts um mehr als das Doppelte.

## Bezug zur Softwareentwicklung

Das ist die formale Fassung von „jetzt eine Minimalversion ausliefern und die Option behalten, weiter zu investieren, wenn sie einschlägt" — direkt relevant für eine gestufte Einführung eines digitalen Gesundheitsprodukts, strukturell parallel zur Sequenzierung unter Unsicherheit bei [Verzögerungskosten](../verzögerungskosten/) und [WSJF/CD3](../wsjf-und-cd3/), und ergänzend zu [Erwartetem Wert perfekter Information](../erwarteter-wert-perfekter-information/) und [Erwartetem Wert von Stichprobeninformation](../erwarteter-wert-von-stichprobeninformation/) — alle drei bepreisen Flexibilität oder Information unter Unsicherheit, aus verschiedenen Blickwinkeln.

## Fallstricke

- **Risikoneutrale Bewertung ohne die Annahme eines gehandelten Vermögenswerts übernehmen**: Realoptionsmodelle entlehnen die risikoneutrale Wahrscheinlichkeit der Finanz-Optionspreisbildung, die voraussetzt, dass der zugrunde liegende Wert ein *gehandelter* Vermögenswert ist — für ein wirklich nicht gehandeltes reales Projekt ist das eine Modellierungsbequemlichkeit, keine buchstäbliche Marktrealität.
- **`Aufwärtsfaktor`/`Abwärtsfaktor` als freie Parameter behandeln**: Die binomialen Auf-/Ab-Eingaben sind selbst Annahmen, die einer Begründung bedürfen, keine frei wählbaren Parameter, die so gesetzt werden, dass sie ein gewünschtes Ergebnis liefern.
- **Nur den Optionswert berichten**: Der Realoptionswert ist *additiv* zum statischen Kapitalwert eines eigenständigen Projekts — ein häufiger Fehler ist, nur den Optionswert zu berichten und den Basisfall wegzulassen, was den Fall überhöht, wenn der statische Kapitalwert negativ ist, und ihn (wie im obigen Beispiel) unterschätzt, wenn der statische Kapitalwert ganz fehlt.

## Quellen

- Cox JC, Ross SA, Rubinstein M. „Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. „A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — verbindet Realoptionen direkt mit einem gesundheitsökonomischen Entscheidungskontext. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
