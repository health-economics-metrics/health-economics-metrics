# Concentratie-index

De concentratie-index (Wagstaff, Paci, van Doorslaer, 1991) is de standaardmaat voor sociaaleconomische ongelijkheid in een gezondheidsvariabele en loopt van −1 tot 1. Negatief betekent dat de gezondheidsvariabele geconcentreerd is bij sociaaleconomisch achtergestelden, positief dat ze geconcentreerd is bij beter gesitueerden, en nul dat er geen consistente sociaaleconomische gradiënt is. Het maakt van een vermoeden van ongelijke verdeling één vergelijkbaar getal.

## Waarom het ertoe doet

Een programma kan in totaal effectief lijken en zijn voordeel toch bijna geheel laten toekomen aan mensen die het al beter hadden. Juist dergelijke verdelingsvragen volgt [bereik en billijkheid](../bereik-en-billijkheid/) beschrijvend: bereik gestratificeerd naar deprivatiekwintiel, een billijkheidskloof tussen de hoogste en laagste groep. Maar een gestratificeerde tabel laat zich niet samenpersen tot één trendlijn en is moeilijk te vergelijken tussen twee totaal verschillende interventies die op verschillende schalen zijn gemeten. De concentratie-index lost beide problemen op: hij wordt voor elke gezondheidsvariabele op dezelfde manier berekend ten opzichte van elke sociaaleconomische rangschikking, zodat een nationale gezondheidsdienst kan volgen of de ongelijkheid van een specifieke digitale dienst van release tot release groeit of krimpt, en de verdelingsrechtvaardigheid van een app-uitrol kan vergelijken met bijvoorbeeld een screeningsprogramma op dezelfde genormaliseerde schaal.

## De wiskunde

```
CI = (2 / gemiddelde(gezondheidswaarden)) × Cov(gezondheidswaarden, sociaaleconomische_rangen)

Cov(X, Y) = gemiddelde(X × Y) − gemiddelde(X) × gemiddelde(Y)   (populatiecovariantie)

sociaaleconomische_rangen: de fractionele rang van elke persoon in de
sociaaleconomische verdeling, in [0, 1] (0 = meest achtergesteld,
1 = meest bevoordeeld; bij gegroepeerde/geklasseerde gegevens
conventioneel de middenrang van elke groep)
```

Dit is de "handige covariantieformule" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Wereldbank 2008): de gangbare sneltoets voor praktijkmensen om de concentratie-index rechtstreeks uit gepaarde waarnemingen te berekenen, zonder eerst een concentratiecurve te tekenen en eronder te integreren.

## Uitgewerkt voorbeeld

Een zelfgerapporteerde score voor goede gezondheid (1 = slechtst, 4 = best), waargenomen over vier even grote sociaaleconomische kwartielen, elk vertegenwoordigd door de middenrang van het kwartiel:

```
gezondheidswaarden            = [1,0, 2,0, 3,0, 4,0]
sociaaleconomische_rangen     = [0,125, 0,375, 0,625, 0,875]

gemiddelde(gezondheidswaarden)       = 2,5
gemiddelde(gezondheid × rang)        = gemiddelde([0,125, 0,75, 1,875, 3,5]) = 1,5625
gemiddelde(sociaaleconomische_rangen) = 0,5

Cov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

Een positieve `0,25` betekent dat deze gezondheidsscore geconcentreerd is bij de sociaaleconomisch bevoordeelde groep: de respondenten met hogere scores zitten vooral aan het gegoede einde van de rangschikking.

## Verbinding met software-engineering

Dit is dezelfde op covariantie gebaseerde ongelijkheidsmeting die in de economie algemeen wordt gebruikt (een neef van de Gini-coëfficiënt), en ze vertaalt zich naar meten of de voordelen van een softwareproduct geconcentreerd zijn bij al bevoordeelde gebruikerssegmenten in plaats van billijk gespreid: een directe uitbreiding van [bereik en billijkheid](../bereik-en-billijkheid/) (de "reach"-dimensie van RE-AIM) naar een formele statistische maat in plaats van een beschreven kloof. Waar bereik en billijkheid de impact per laag rapporteert, perst de concentratie-index de hele verdeling samen tot één getal met teken, geschikt als enkele KPI die over releases heen wordt gevolgd: praktisch voor een dashboard, waar een volledige gestratificeerde uitsplitsing niet past.

## Valkuilen

- **Verschuiving van de tekenconventie**: het teken hangt af van hoe zowel de gezondheidsvariabele als de rang is gedefinieerd; als je een van beide omkeert, keert het teken om. De gebruikte conventie moet dus bij elke gerapporteerde waarde uitdrukkelijk worden vermeld.
- **Grensrangen in plaats van middenrangen**: gegroepeerde of geklasseerde sociaaleconomische gegevens (bijv. kwintielen) vereisen dat de fractionele rang van elke groep op haar *midden* wordt gebruikt, niet op haar grens, anders is de index vertekend.
- **"Bijna nul" lezen als "geen ongelijkheid"**: een concentratie-index rond nul betekent "geen consistente sociaaleconomische gradiënt", niet "geen ongelijkheid" in absolute zin: compenserende ongelijkheden in verschillende richtingen kunnen elkaar opheffen.

## Bronnen

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008: het standaardhandboek voor praktijkmensen en bron van de hier gebruikte handige covariantieformule. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
