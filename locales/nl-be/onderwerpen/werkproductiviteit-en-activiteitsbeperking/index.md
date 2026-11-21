# Werkproductiviteit en activiteitsbeperking (WPAI)

WPAI is een gevalideerde vragenlijst met zelfrapportage (Reilly, Zbrozek, Dasbach, 1993) die meet hoeveel een gezondheidsprobleem betaald werk en dagelijkse activiteiten beïnvloedt, meestal over de afgelopen 7 dagen. Het splitst het verlies in *absenteïsme*, werktijd die letterlijk is gemist, en *presenteïsme*, verminderde productiviteit terwijl je fysiek op het werk bent, en het tweede is meestal de grotere, meer verborgen kostencomponent.

## Waarom het ertoe doet

Eenvoudige tellingen van ziektedagen zien alleen het absenteïsme. Een clinicus of kenniswerker die nooit een dag vrij neemt maar met een chronische aandoening op 60% van zijn capaciteit werkt, draagt niets bij aan een verzuimregister en veroorzaakt toch een groot, echt productiviteitsverlies: WPAI is specifiek ontworpen om die onzichtbare kosten zichtbaar te maken. Omdat het een gevalideerd instrument is en geen op maat gemaakte enquête, zijn de scores bruikbaar in bewijspakketten over [door de patiënt gerapporteerde uitkomsten](../door-de-patiënt-gerapporteerde-uitkomsten/) en in ziektekostenstudies zonder dat de beoordelaar de maat opnieuw hoeft te valideren. Als instrument met zelfrapportage is het zelf een vorm van PROM, vooral onderscheiden door zijn focus op werk en activiteit in plaats van symptomen of kwaliteit van leven.

## De wiskunde

```
Absenteïsme % = door_gezondheid_gemiste_uren / (door_gezondheid_gemiste_uren + gewerkte_uren) × 100

Presenteïsme %  = zelfbeoordeelde beperking 0–10 tijdens het werk, × 10
                  (rechtstreeks via de vragenlijst verkregen, hier niet afgeleid)

Totale werkbeperking % =
    Absenteïsme% + (1 − Absenteïsme%/100) × Presenteïsme%
    (combineert de twee zodat het totaal nooit boven 100% kan uitkomen)

Productiviteitskosten = Totale_werkbeperking% / 100 × inkomsten_in_de_periode
```

De formule voor de totale beperking is bewust geen eenvoudige som: de twee percentages rechtstreeks optellen zou boven 100% kunnen uitkomen, dus presenteïsme wordt alleen toegepast op het *resterende* (niet-afwezige) deel van de werktijd.

## Uitgewerkt voorbeeld

Een werknemer met migraine is voor een werkweek van 40 uur ingepland maar mist daarvan 4 uur:

```
gemiste_uren = 4, gewerkte_uren = 36
Absenteïsme% = 4 / (4 + 36) × 100 = 10%
```

Daarnaast beoordeelt de werknemer zijn productiviteitseffect tijdens het werk als 3 op 10 in de WPAI-vragenlijst, dus `Presenteïsme% = 30%` (deze stap is een ruw vragenlijstantwoord, niet iets wat uit andere getallen is afgeleid):

```
Totale werkbeperking% = 10 + (1 − 10/100) × 30
                      = 10 + 0,9 × 30
                      = 10 + 27
                      = 37%
```

Over een werkweek van 5 dagen met een inkomen van £800 (£160/dag):

```
Productiviteitskosten = 37/100 × 800 = £296
```

Merk op dat een naïeve telling van ziektedagen alleen de 4 gemiste uren (10%) zou hebben vastgelegd: de component presenteïsme verdrievoudigt de werkelijke beperking bijna zodra die wordt meegeteld.

## Verbinding met software-engineering

Dit sluit rechtstreeks aan op gezondheidsmetrieken van engineeringteams:

- **Absenteïsme** is ziekteverlof en betaald verlof: zichtbaar, al bijgehouden en het makkelijke deel.
- **Presenteïsme** is de uitgebrande of door contextwisselingen overbelaste engineer die bij elke stand-up aanwezig is maar met verminderde capaciteit werkt: meestal de grotere en meer verborgen kost, onzichtbaar voor hoofdelijke- of aanwezigheidsgegevens. Het verschijnt in plaats daarvan als verminderde doorvoer in [DORA](../dora-metrieken/)- en [stroommetrieken](../stroommetrieken/), of als tragere afhandeling van juist de [technische schuld](../technische-schuld/) waarvan de "rente" de beperking verder verergert.
- De engineeringles is dezelfde als de klinische: alleen afwezigheid meten en dat "productiviteitsverlies" noemen onderschat de werkelijke kosten stelselmatig, omdat het iedereen mist die aanwezig maar beperkt is.

## Valkuilen

- **Herinneringsbias bij zelfrapportage.** Een terugblikvenster van 7 dagen is onderhevig aan dezelfde rapportagevertekeningen als elke retrospectieve zelfrapportage.
- **De schaal van 0–10 voor presenteïsme behandelen als een echte fysieke meting.** Ze is ordinaal, verkregen via zelfbeoordeling, geen gevalideerde fysieke grootheid; verschillen erop als strikt lineair of intervalmatig behandelen is een modelleergemak, geen gevalideerd fysiek feit.
- **Scores poolen over WPAI-varianten heen.** WPAI heeft meerdere aandoeningsspecifieke versies: WPAI:GH (algemene gezondheid), WPAI:SHP (specifiek gezondheidsprobleem) en ziektespecifieke varianten; scores van verschillende varianten mogen niet worden gepoold of vergeleken zonder eerst te controleren of het dezelfde instrumentversie is.

## Bronnen

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI-instrumentdocumentatie, Reilly Associates: de officiële scorereferentie. <https://www.reillyassociates.net/>
