# Populatie-attribueerbare fractie (PAF)

PAF is het deel van de ziekte- of uitkomstenlast in een populatie dat toe te schrijven is aan blootstelling aan een specifieke risicofactor: het aandeel dat zou verdwijnen als de blootstelling volledig werd weggenomen. Het zet "deze risicofactor verdubbelt je kans" om in een getal op populatieniveau waar een opdrachtgever daadwerkelijk mee kan plannen: hoeveel gevallen, en hoeveel kosten, een bepaalde blootstelling werkelijk de moeite waard is om aan te pakken.

## Waarom het ertoe doet

Levin introduceerde PAF in 1953 om een smalle, concrete vraag te beantwoorden: als niemand rookte, hoeveel longkanker zou er dan verdwijnen? Dezelfde rekenkunde bepaalt nu de omvang van nationale preventieplanning overal, van tabaks- en obesitasstrategieën tot de risicofactorrangordes van het Global Burden of Disease-onderzoek van de WHO, omdat een relatief risico op zichzelf niets zegt over de impact: een risicofactor kan de kans op een zeldzame gebeurtenis verdubbelen en de ziektelast van de populatie nauwelijks bewegen, of de kans op een veelvoorkomende gebeurtenis maar licht verhogen en toch een enorm deel van de gevallen verklaren. PAF zet "risicofactor X is gevaarlijk" om in "het wegnemen van risicofactor X zou dit aantal gevallen per jaar voorkomen", het getal dat de businesscase van een preventieprogramma werkelijk nodig heeft. Zie [preventie-economie](../preventie-economie/) voor wat het kost om op dat getal te handelen zodra je het hebt.

## De wiskunde

```
PAF = prevalentie_blootgesteld × (relatief_risico − 1) / (1 + prevalentie_blootgesteld × (relatief_risico − 1))

prevalentie_blootgesteld = fractie van de populatie die aan de risicofactor is blootgesteld (0–1)
relatief_risico          = risico op de uitkomst bij blootgestelden versus niet-blootgestelden (bijv. 2,5 = 2,5×)

Toe te schrijven gevallen = totaal_gevallen × PAF
```

PAF stijgt met zowel de blootstellingsprevalentie als het relatieve risico: een matig verhoogd relatief risico (zeg 1,5×) bij een zeer gangbare blootstelling kan een grotere PAF opleveren dan een dramatisch relatief risico (zeg 5×) bij een zeldzame. Dat is de hele reden dat het bestaat als een apart getal naast het relatieve risico.

## Uitgewerkt voorbeeld

Een risicofactor komt voor bij 30% van een populatie (`prevalentie_blootgesteld = 0,3`) en verhoogt het risico op de uitkomst 2,5 keer (`relatief_risico = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0%)

Bij 1.000 gevallen/jaar in de populatie:
Toe te schrijven gevallen = 1.000 × 0,3103 ≈ 310 gevallen/jaar
```

Net minder dan een derde van de jaarlijkse last van deze uitkomst is aan de blootstelling toe te schrijven: volledig wegnemen (het theoretische plafond; geen enkele echte interventie bereikt 100% wegneming van de blootstelling) zou elk jaar ongeveer 310 van de 1.000 gevallen voorkomen.

## Verbinding met software-engineering

PAF is de epidemiologische versie van "welk deel van ons incidentenvolume is toe te schrijven aan deze ene grondoorzaak?": dezelfde soort vraag die teams stellen wanneer ze een specifieke klasse van deployments of afhankelijkheden afzetten tegen alle productie-incidenten, in plaats van elk incident als even de moeite waard om op dezelfde manier te verhelpen te behandelen. Een grondoorzaakcategorie die in een groot deel van de deployments voorkomt en slechts een matig relatief risico op een incident heeft, kan een zeldzame categorie met een hoog relatief risico overtreffen bij de vraag waar je de engineeringinspanning als eerste aan besteedt: precies het PAF-inzicht, vertaald.

## Valkuilen

- **PAF's over risicofactoren heen optellen**: PAF's voor meerdere factoren die dezelfde uitkomst beïnvloeden tellen niet op tot 100%; in totaal kunnen ze die zelfs overschrijden, omdat factoren op elkaar inwerken en causale paden delen. Behandel elke PAF als "als alleen deze factor werd weggenomen", nooit als een verdeling van het totale risico.
- **Een relatief risico tussen populaties verplaatsen**: een relatief risico dat in de ene populatie is geschat (andere basisblootstellingsprevalentie, andere confounders) levert een misleidende PAF op wanneer het wordt toegepast op de blootstellingsprevalentie van een andere populatie.
- **PAF verwarren met attribueerbaar risico bij de blootgestelden**: PAF is op populatieniveau en hangt af van de blootstellingsprevalentie; attribueerbaar risico bij de blootgestelden is op individueel niveau en doet dat niet. Ze beantwoorden verschillende vragen: haal er niet de een bij om de ander te beantwoorden.

## Bronnen

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
