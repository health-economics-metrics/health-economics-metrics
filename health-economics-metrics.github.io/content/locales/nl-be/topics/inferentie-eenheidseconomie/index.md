# Inferentie-eenheidseconomie

Inferentie-eenheidseconomie meet de kosten per individuele voorspelling of generatie van een AI-model.

## Waarom het ertoe doet

Trainingskosten zijn eenmalig, maar inferentiekosten herhalen zich oneindig, evenredig met het gebruik.

## De wiskunde

```
Kosten per inferentie = (kosten per GPU-uur × verwerkingstijd) / aantal verzoeken
```

## Uitgewerkt voorbeeld

Beeldinterpretatie-ondersteuningsmodel: GPU £2/uur, 1.000 verwerkingen/uur = £0,002 per interpretatie.

## Verbinding met software-engineering

Het AI-specifieke geval van [cloud-eenheidseconomie](../cloud-eenheidseconomie/) en een kerninput voor [rendement op AI-investering](../rendement-op-ai-investering/).

## Valkuilen

- **Batchverwerkingskortingen negeren en berekenen tegen kosten per individueel verzoek.**

## Bronnen

- a16z, cost of inference analyses.
- Hugging Face, inference optimization guides.
