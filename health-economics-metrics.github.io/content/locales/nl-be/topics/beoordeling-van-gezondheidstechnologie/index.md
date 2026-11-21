# Beoordeling van gezondheidstechnologie (HTA)

Health technology assessment is het formele proces waarmee instanties zoals NICE, ICER (VS) en CADTH beoordelen of een nieuwe technologie de moeite waard is om te financieren.

## Waarom het ertoe doet

HTA-instanties bepalen de facto markttoegang voor nieuwe gezondheidstechnologieën in de meeste ontwikkelde gezondheidssystemen — zonder gunstige HTA-beoordeling wordt een technologie zelden op grote schaal gefinancierd.

## De wiskunde

```
HTA-aanbeveling = f(ICER versus drempel, budgetimpact, kwaliteit van bewijs, gelijkheidsoverwegingen)
```

## Uitgewerkt voorbeeld

NICE beoordeelt een nieuw diagnostisch hulpmiddel: ICER van £18.000/QALY (onder de drempel), matige budgetimpact, en degelijk klinisch bewijs leidt tot een positieve aanbeveling voor routinematig gebruik.

## Verbinding met software-engineering

Vergelijkbaar met een formeel architectuurgoedkeuringsproces dat kosten, risico en bewijs van effectiviteit beoordeelt voordat een nieuwe technologie organisatiebreed wordt goedgekeurd.

Voor hoe een multicyclisch HTA-model werkelijk wordt gesimuleerd, cohort voor cohort, cyclus voor cyclus, zie [Markov-cohortsimulatie](../markov-cohortsimulatie/).

## Valkuilen

- **Aannemen dat een positieve klinische trial automatisch leidt tot HTA-goedkeuring.**
- **Budgetimpact en kosteneffectiviteit als hetzelfde criterium behandelen.**

## Bronnen

- NICE, technology appraisal process.
- ICER (US), value assessment framework.
