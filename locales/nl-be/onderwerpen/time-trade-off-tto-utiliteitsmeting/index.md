# Time-trade-off-(TTO-)utiliteitsmeting

TTO is een standaardmethode om de utiliteitswaarde van een gezondheidstoestand rechtstreeks van een respondent te verkrijgen, in plaats van er een te verzinnen. Het is een van de meetmethoden, naast standard gamble en discrete-keuze-experimenten, die de waardensets produceren achter instrumenten als [EQ-5D](../eq-5d/) en daarmee achter de meeste daaropvolgende [QALY](../voor-kwaliteit-gecorrigeerd-levensjaar/)-berekeningen.

## Waarom het ertoe doet

Elk utiliteitsgewicht dat in een QALY-berekening terechtkomt, moest ergens vandaan komen. TTO is het hoe: voor een toestand die beter dan de dood wordt geacht, wordt een respondent gevraagd hoeveel jaar `X` in volledige gezondheid hij of zij gelijkwaardig zou vinden aan `T` jaar in de beperkte toestand (`X < T`); de utiliteit is `X / T`. Voor een toestand die sommige respondenten erger dan de dood vinden, gaat de standaardformule niet meer op (ze kan utiliteiten onder nul niet netjes weergeven), dus wordt in plaats daarvan een uitgebreide TTO toegepast. Een software-engineer of analist die een utiliteitsgewicht als gegeven invoer behandelt, zonder te weten dat er een gevalideerd meetprotocol voor nodig was, staat een stap verwijderd van een getal dat hij of zij niet kan verdedigen als het wordt aangevochten.

## De wiskunde

```
Standaard-TTO (toestand beter dan de dood):
  utiliteit = tijd_in_volledige_gezondheid / tijd_in_beperkte_toestand

Uitgebreide TTO (toestand slechter dan de dood):
  utiliteit = -tijd_geruild_voor_de_dood / (totale_duur - tijd_geruild_voor_de_dood)
```

`tijd_in_volledige_gezondheid` / `tijd_in_beperkte_toestand`: jaren `X` in volledige gezondheid die als gelijkwaardig aan `T` jaar in de beperkte toestand worden beoordeeld. `tijd_geruild_voor_de_dood` / `totale_duur`: in de formulering voor slechter dan de dood, de jaren `a` van een resterend leven van `T` jaar die de respondent zou ruilen voor onmiddellijke dood, omdat hij of zij `T − a` jaar in volledige gezondheid gevolgd door de dood verkiest boven `T` jaar in de toestand die slechter is dan de dood. Het resultaat is negatief, verankerd zodat dood = 0.

## Uitgewerkt voorbeeld

**Standaard**: een respondent verkeert 10 jaar in een beperkte toestand en is indifferent ten opzichte van 7 jaar in volledige gezondheid: utiliteit = 7 / 10 = **0,7**.

**Slechter dan de dood**: over een resterend leven van 10 jaar zou de respondent 2 jaar ruilen voor onmiddellijke dood; hij of zij verkiest 8 jaar in volledige gezondheid gevolgd door de dood boven 10 jaar in de toestand die slechter is dan de dood: utiliteit = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Verbinding met software-engineering

Het punt waar een DevEx- of betrokkenheidsonderzoek tegenaan loopt wanneer het mensen vraagt iets op een niet-onderzochte schaal van 0–10 te beoordelen, geldt hier omgekeerd: TTO bestaat juist omdat "vraag mensen het gewoon te beoordelen" op zichzelf geen gevalideerde meetmethode is. Vraag je, voordat je een samengestelde index (een DevEx-score, een betrokkenheidsindex, een burn-outschaal) bouwt op een zelfbeoordeeld getal, af waarmee het is verkregen en of die methode was gevalideerd: dezelfde vraag die gezondheidseconomen stellen over een utiliteitsgewicht voordat het in een QALY terechtkomt.

## Valkuilen

- **Generalisatie van individuele waarden**: TTO-waarden worden verkregen van een *steekproef* van het algemene publiek (of patiënten), niet van het individu over wiens zorg wordt beslist; de TTO-waarde van één respondent gebruiken alsof ze generaliseert, is een steekproeffout.
- **Verkeerde formulering voor de toestand**: de standaard-TTO-formule gaat ervan uit dat de toestand ondubbelzinnig beter is dan de dood; als je haar toepast op een toestand die sommige respondenten slechter dan de dood zouden vinden, zonder over te stappen op de uitgebreide formulering, levert dat stilzwijgend een onjuiste (positieve) utiliteit op.
- **Onvergelijkbare duren**: TTO-waarden die zijn verkregen met verschillende resterende levensduren `T` voor de vergelijking slechter-dan-de-dood zijn niet rechtstreeks vergelijkbaar zonder te controleren of het studieontwerp `T` constant heeft gehouden.

## Bronnen

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
