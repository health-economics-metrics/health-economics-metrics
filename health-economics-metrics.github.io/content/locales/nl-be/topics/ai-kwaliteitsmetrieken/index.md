# AI-kwaliteitsmetrieken

AI-kwaliteitsmetrieken meten de nauwkeurigheid, betrouwbaarheid en veiligheid van modeloutput: precisie, recall, hallucinatiepercentage.

## Waarom het ertoe doet

Zelfs AI-systemen met hoge doorvoer kunnen, bij lage kwaliteit, downstream correctiekosten opleveren die de besparingen overtreffen.

## De wiskunde

```
F1-score = 2 × (precisie × recall) / (precisie + recall)
```

## Uitgewerkt voorbeeld

AI-hulpmiddel voor klinische codering: precisie 0,85, recall 0,78 = F1 0,81.

## Verbinding met software-engineering

Algemene softwarekwaliteitsmetrieken die de basis vormen voor [klinische AI-evaluatie](../klinische-ai-evaluatie/).

## Valkuilen

- **Alleen naar nauwkeurigheid kijken en klasseonbalans negeren.**

## Bronnen

- Google, ML evaluation best practices.
- Ji Z, et al., Survey of Hallucination in Natural Language Generation.
