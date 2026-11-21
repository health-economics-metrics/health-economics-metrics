# Verwachte waarde van perfecte informatie

De verwachte waarde van perfecte informatie (EVPI) prijst hoeveel het waard zou zijn om alle onzekerheid in een beslissing weg te nemen voordat deze wordt genomen.

## Waarom het ertoe doet

EVPI vertelt u of een pilot of aanvullend onderzoek de kosten ervan waard is, voordat u het uitvoert. Voor het prijzen van de optie om een project later uit te breiden, in plaats van de optie om eerst informatie te verzamelen, zie [Reële-optiewaardering](../reële-optiewaardering/).

## De wiskunde

```
EVPI = E[max over opties(waarde bij perfecte informatie)] − max over opties(E[waarde])
```

## Uitgewerkt voorbeeld

Een besluit over het al dan niet uitrollen van een AI-triagesysteem heeft een EVPI van £2 miljoen op populatieniveau; een pilotstudie die £500.000 kost, is dus gerechtvaardigd.

## Verbinding met software-engineering

Vergelijkbaar met het prijzen van een spike of proof-of-concept vóór een grote architectuurbeslissing — is de onzekerheidsreductie de kosten van het experiment waard? Voor het prijzen van een *specifiek* voorgestelde studie in plaats van het wegnemen van alle onzekerheid, zie [EVSI](../verwachte-waarde-van-steekproefinformatie/).

## Valkuilen

- **EVPI berekenen op populatieniveau vergeten en alleen op patiëntniveau rapporteren.**
- **Pilots uitvoeren wiens kosten de EVPI overschrijden.**

## Bronnen

- Claxton K, et al., value of information methods.
- NICE DSU Technical Support Document 12.
