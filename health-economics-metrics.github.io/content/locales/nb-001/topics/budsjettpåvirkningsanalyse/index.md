# Budsjettpåvirkningsanalyse (BIA)

Budsjettpåvirkningsanalyse estimerer nettoendringen i en betalers utgifter ved innføring av en ny intervensjon, uavhengig av kostnadseffektiviteten.

## Hvorfor det er viktig

En intervensjon kan være svært kostnadseffektiv (lav £/QALY), men likevel ikke overkommelig fordi den totale budsjettpåvirkningen er for stor.

## Matematikken

```
Budsjettpåvirkning = (Ny intervensjonskostnad × forventet volum) − (Erstattet intervensjonskostnad × forventet volum)
```

## Gjennomarbeidet eksempel

En ny behandling med en ICER på £15 000/QALY (godt under terskelen) har likevel en budsjettpåvirkning på £200 millioner/år på grunn av en stor pasientpopulasjon, noe som krever en trinnvis innføring.

## Kobling til programvareutvikling

Ligner på å vurdere om en teknisk overlegen løsning passer innenfor det årlige infrastrukturbudsjettet, uavhengig av om det er den beste arkitekturen. Å dele en publisert totalsum for budsjettvirkning på lokasjoner, kohorter eller regnskapsår, slik at delene går opp eksakt mot det publiserte tallet, er nettopp [eksakt cent-fordeling av kostnader](../eksakt-cent-fordeling-av-kostnader/); å summere de mange postene som mater totalsummen i utgangspunktet, er [valutasikker kostnadsaggregering](../valutasikker-kostnadsaggregering/).

## Fallgruver

- **Å forveksle kostnadseffektivitet med overkommelighet.**
- **Å undervurdere forventet volum for nye indikasjoner som ekspanderer.**

## Kilder

- ISPOR, budget impact analysis good practices.
- NICE, budget impact test guidance.
