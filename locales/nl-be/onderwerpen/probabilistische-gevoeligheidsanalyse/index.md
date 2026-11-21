# Probabilistische gevoeligheidsanalyse

Probabilistische gevoeligheidsanalyse (PSA) varieert alle onzekere parameters tegelijkertijd via Monte Carlo-simulatie om een kansverdeling van uitkomsten te produceren.

## Waarom het ertoe doet

Eenvoudige gevoeligheidsanalyse test één variabele tegelijk; PSA vangt de gecombineerde onzekerheid van alle parameters samen op.

## De wiskunde

```
Voor elke simulatie i: trek parameterwaarden uit hun verdelingen, bereken uitkomst_i
Kans op kosteneffectiviteit = aantal simulaties onder drempel / totaal aantal simulaties
```

## Uitgewerkt voorbeeld

10.000 Monte Carlo-simulaties van een nieuw diagnostisch hulpmiddel tonen dat het in 72% van de simulaties kosteneffectief is bij een drempel van £20.000/QALY — weergegeven in een kosteneffectiviteitsacceptatiecurve (CEAC).

## Verbinding met software-engineering

Vergelijkbaar met Monte Carlo-belastingtests die meerdere onzekere systeemparameters tegelijk variëren in plaats van er één per keer.

## Valkuilen

- **Correlaties tussen parameters negeren bij het samplen.**
- **De CEAC verkeerd interpreteren als een simpel percentage in plaats van een kansverdeling.**

## Bronnen

- Briggs AH, et al., Decision Modelling for Health Economic Evaluation.
- NICE DSU Technical Support Documents.
