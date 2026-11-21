# Koolstofvoetafdruk per QALY

Koolstof per QALY is een efficiëntieverhouding: de koolstofuitstoot (of vermeden uitstoot) van een interventie gedeeld door de QALY's die deze oplevert. Dit is direct analoog aan kosten per QALY, zodat de koolstofefficiëntie van een interventie naast de kostenefficiëntie kan worden beoordeeld. Een "voor koolstof gecorrigeerd netto geldelijk voordeel" gaat een stap verder: het zet het koolstofeffect om in geld met de officiële niet-verhandelde koolstofwaarden uit het Britse Green Book en verrekent dat met het gebruikelijke [netto geldelijk voordeel](../netto-geldelijk-voordeel/).

## Waarom het ertoe doet

NICE en NHS England verwachten inmiddels dat milieueffecten naast kosten en QALY's worden meegewogen. De NHS heeft een openbare netto-nulverplichting: netto nul voor de directe emissies in 2040 en netto nul voor de volledige voetafdruk van de toeleveringsketen in 2045. Het NICE-handboek voor de evaluatie van gezondheidstechnologie (PMG36) noemt ecologische duurzaamheid als een opkomende overweging bij technologiebeoordeling. Voor een digitaal gezondheidsproduct betekent dit dat koolstof de vierde pijler van de waardeonderbouwing wordt, naast kosten, QALY's en [dominantie op de efficiëntiegrens](../dominantie-en-de-efficiëntiegrens/). Het vervangt er geen van, maar het is een dimensie waarover een goed opgebouwde businesscase steeds vaker moet rapporteren.

## De wiskunde

```
Koolstof per QALY = totale_uitstoot_ton_co2e / totale_qalys
  (een negatieve waarde betekent netto VERMEDEN uitstoot per gewonnen QALY
  — een dubbele winst: betere gezondheid en minder koolstof)

Omgerekend koolstofeffect = uitstoot_ton_co2e × koolstofwaarde_per_ton
  (negatieve uitstoot × positieve waarde = negatieve kosten, dus een voordeel)

Voor koolstof gecorrigeerd NMB = netto_geldelijk_voordeel − omgerekend_koolstofeffect
```

Dit breidt het idee van de kosten/QALY-efficiëntiegrens uit met een tweede as, koolstof per QALY, met dezelfde logica "zet alle opties uit en kijk wat gedomineerd wordt" als bij [dominantie en de efficiëntiegrens](../dominantie-en-de-efficiëntiegrens/), maar dan toegepast op koolstof in plaats van kosten.

## Uitgewerkt voorbeeld

Een telegeneeskundedienst vervangt bezoeken in persoon en vermijdt 5.000 autoritten per jaar van elk ongeveer 8 kg CO2e: 40 ton vermeden CO2e, weergegeven als negatieve uitstootwaarde (−40,0 ton), en levert 25 QALY's per jaar op:

```
Koolstof per QALY = −40,0 / 25,0 = −1,6 ton CO2e vermeden per gewonnen QALY
```

Met de niet-verhandelde koolstofwaarde uit het Green Book (illustratief cijfer, centrale niet-verhandelde waarde 2023 ≈ £269/ton CO2e; het Green Book actualiseert de koolstofwaarden jaarlijks, controleer opnieuw voordat u het in een lopende analyse citeert):

```
Omgerekend koolstofeffect = −40,0 × £269 = −£10.760
```

Een "kost" van −£10.760 is een voordeel van £10.760. Als het zelfstandige netto geldelijk voordeel van de interventie £500.000 bedraagt:

```
Voor koolstof gecorrigeerd NMB = £500.000 − (−£10.760) = £510.760
```

De koolstofbesparing voegt iets toe aan de zaak in plaats van er iets van af te halen: de dubbele winst die de kadering met negatieve uitstoot zichtbaar moet maken.

## Verbinding met software-engineering

Dit is een actueel snijvlak met de economie van AI en cloud: de koolstofvoetafdruk van de rekenkracht voor het trainen en draaien van een AI-model is inmiddels een echte post in de inkoop van de NHS, omdat NHS-leverancierscontracten boven bepaalde drempels een Carbon Reduction Plan vereisen. [Cloud-eenheidseconomie](../cloud-eenheidseconomie/) volgt al de kosten per eenheid rekenuitvoer; koolstof per QALY is het natuurlijke sjabloon voor een toekomstige maatstaf "koolstofkosten per inferentie" die die module en de eenheidseconomie van inferentie uitbreidt naar de milieudimensie, hoewel die maatstaf nog niet bestaat.

## Valkuilen

- **Manipulatie van de systeemgrens**: alleen directe (Scope 1) emissies meetellen en emissies uit de toeleveringsketen (Scope 3) weglaten, die meestal het grootste deel van de werkelijke voetafdruk van een digitaal gezondheidsproduct vormen.
- **Een verouderde koolstofwaarde gebruiken**: het Green Book werkt zijn niet-verhandelde koolstofwaarden jaarlijks bij, dus elk geciteerd £/ton-cijfer moet gedateerd zijn en niet als vaste constante worden weergegeven.
- **"Koolstofefficiënt" behandelen als vervanging van "kosteneffectief"**: een interventie met lage uitstoot en lage waarde is nog steeds een slecht gebruik van NHS-middelen. Koolstof is een vierde pijler naast kosten en QALY's, geen vervanging van een van beide.

## Bronnen

- NHS England, "Delivering a Net Zero National Health Service" (2020, bijgewerkt 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (jaarlijks bijgewerkt; centrale niet-verhandelde waarde ≈ £269/tCO2e, 2023: vermeld bij elke aanhaling de datum). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
