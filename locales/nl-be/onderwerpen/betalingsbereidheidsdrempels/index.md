# Betalingsbereidheidsdrempels

Betalingsbereidheidsdrempels specificeren het maximale bedrag dat een systeem bereid is te betalen per gewonnen QALY.

## Waarom het ertoe doet

De drempel is de beslissingsgrens: interventies onder de drempel worden doorgaans gefinancierd, interventies erboven doorgaans niet.

## De wiskunde

```
Financieringsbeslissing: financier als ICER < drempel (£/QALY)
```

## Uitgewerkt voorbeeld

NICE gebruikt doorgaans £20.000–£30.000/QALY; de Verenigde Staten hanteren informeel $50.000–$150.000/QALY; Thailand gebruikt ongeveer 1× BBP per hoofd.

## Verbinding met software-engineering

Vergelijkbaar met een interne "kosten per gered incident" drempel die bepaalt welke betrouwbaarheidsinvesteringen de moeite waard zijn.

## Valkuilen

- **Drempels tussen landen vergelijken zonder rekening te houden met koopkrachtverschillen.**
- **De drempel behandelen als een harde grens in plaats van een richtlijn.**
- **Een ICER vergelijken met een drempel in een andere valuta zonder eerst om te rekenen**: zie [ICER-vergelijking tussen valuta's](../icer-vergelijking-tussen-valuta-s/); de omrekenmethode (koopkrachtpariteit vs marktwisselkoers) is methodologisch verstrekkend, geen afrondingsdetail.
- **Waardering op basis van λ vermengen met de VSL/VPF-traditie van de arbeidsmarkt**: ze komen uit verschillende theoretische tradities (door het gezondheidsbudget beperkte methodologie vs voorkeur onthuld uit afwegingen tussen loon en risico) en zijn niet altijd te verzoenen; voor de alternatieve benadering van onthulde voorkeur bij het waarderen van leven, zie [Waarde van een statistisch leven](../waarde-van-een-statistisch-leven/).

## Bronnen

- Claxton K, et al., NICE cost effectiveness threshold estimation.
- WHO-CHOICE, cost-effectiveness thresholds.
