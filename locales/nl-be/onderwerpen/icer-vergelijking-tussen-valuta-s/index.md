# ICER-vergelijking tussen valuta's

Het vergelijken van een [ICER](../incrementele-kosteneffectiviteitsratio/) die in de valuta van het ene land is berekend met de [betalingsbereidheidsdrempel](../betalingsbereidheidsdrempels/) van een ander land, of het samenvoegen van kostengegevens uit een multinationale trial, vraagt om een expliciete, controleerbare stap voor valutaomrekening. Als de omrekenmethode verkeerd wordt gekozen, kan hetzelfde onderliggende bewijs een invoeringsbeslissing omkeren, terwijl er aan de klinische of kostengegevens niets is veranderd.

## Waarom het ertoe doet

De ISPOR-methodenrichtlijn voor multinationale klinische trials (Willke et al., *Health Economics*, 1998) beveelt aan om resourcekosten om te rekenen met **koopkrachtpariteit (PPP)**, niet met marktwisselkoersen, wanneer de reële economische waarde van middelen tussen landen wordt vergeleken, en marktwisselkoersen te bewaren voor waarvoor ze werkelijk bedoeld zijn: het modelleren van echte grensoverschrijdende contante betalingsstromen. Beide door elkaar halen is een van de meest voorkomende methodologische fouten in multinationale HTA, juist omdat beide voor iemand die de richtlijn niet heeft gelezen "de wisselkoers" lijken, en een spreadsheet je er niet van weerhoudt het fout te doen.

## De wiskunde

```
icer_in_lokale_valuta = omrekenen(icer_in_bronvaluta, omrekenfactor)

de omrekenfactor hoort te zijn:
  PPP-omrekenfactor      — om de reële economische waarde van middelen
                            tussen landen te vergelijken (door ISPOR
                            aanbevolen voor multinationale CEA)
  marktwisselkoers       — alleen voor werkelijke grensoverschrijdende
                            contante betalingen

invoeren als icer_in_lokale_valuta < lokale_drempel
```

De beslisregel zelf is de gewone [ICER-drempelregel](../betalingsbereidheidsdrempels/), `invoeren als ICER < λ`; de methodologische vraag van dit onderwerp gaat geheel over *welke omrekenfactor* het getal `icer_in_lokale_valuta` oplevert waarop die regel wordt toegepast.

## Uitgewerkt voorbeeld

De ICER van een geneesmiddel uit een Amerikaanse trial is $45.000/QALY. Een hypothetisch importerend land stelt zijn eigen illustratieve drempel vast op £34.000/QALY (een hypothetisch landspecifiek cijfer alleen voor dit voorbeeld: echte drempels verschillen per land en veranderen in de tijd en moeten altijd van bron en datum worden voorzien).

**Met een PPP-omrekenfactor van 0,72** (illustratief, alleen voor dit uitgewerkte voorbeeld): $45.000 × 0,72 = £32.400/QALY. £32.400 < £34.000 → **invoeren**.

**Met een marktwisselkoers van 0,79** in plaats daarvan (illustratief): $45.000 × 0,79 = £35.550/QALY. £35.550 > £34.000 → **afwijzen**.

Dezelfde onderliggende ICER van $45.000/QALY levert bij PPP-omrekening een besluit tot invoeren op en bij omrekening tegen de marktkoers een afwijzing. Dit is het concrete voorbeeld van waarom de ISPOR-richtlijn de keuze van de omrekenfactor als methodologisch verstrekkend behandelt: geen afrondingsdetail, en niet iets om impliciet te laten in een spreadsheetformule die niemand dubbel controleert.

## Verbinding met software-engineering

Dit is het gezondheidseconomische spiegelbeeld van een bekend engineeringgebied: de juistheid van i18n/l10n-prijsstelling in meerdere valuta's in commerciële software, waar een SaaS-prijspagina nooit stilzwijgend een `$`-bedrag met een `£`-prijs mag vergelijken. De garantie op typeniveau die een goed gebouwd `Money`-type biedt, namelijk vergelijkingsmethoden die weigeren ongelijke valuta's te vergelijken en eerst een expliciete omrekenstap afdwingen, is een directe software-engineeringparallel van het gezondheidseconomische methodepunt hier: vergelijk geen niet-omgerekende cijfers over valuta's heen en laat de omrekenstap niet impliciet of ongedocumenteerd.

## Valkuilen

- **Stilzwijgend bedragen in verschillende valuta's vergelijken**: ad-hoc HTA-werk in spreadsheets dat een dollarbedrag en een pondbedrag aftrekt of vergelijkt zonder eerst om te rekenen. Dat is een klasse van bugs die een echt valutabewust `Money`-type door zijn constructie opvangt in plaats van het als stille fout te laten bestaan.
- **Marktwisselkoers met PPP verwarren**: volgens de ISPOR-richtlijn de meest voorkomende methodefout in multinationale HTA. De twee getallen kunnen sterk verschillen en beantwoorden verschillende vragen (reële economische waarde versus werkelijke geldstroom).
- **De gebruikte wisselkoers of PPP-index niet dateren**: beide veranderen in de tijd, dus elke geciteerde omrekenfactor moet gedateerd zijn op dezelfde manier als waarop deze repository zijn andere referentiecijfers dateert (Green Book-koolstofwaarden, waarde van een voorkomen sterfgeval enzovoort).

## Bronnen

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
