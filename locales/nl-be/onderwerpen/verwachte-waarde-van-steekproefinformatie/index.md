# Verwachte waarde van steekproefinformatie (EVSI)

EVSI is de waarde van een *specifiek voorgestelde studie*, met een bepaald ontwerp en een bepaalde steekproefgrootte, voordat deze wordt uitgevoerd, in tegenstelling tot [EVPI](../verwachte-waarde-van-perfecte-informatie/), dat het volledig wegnemen van alle onzekerheid prijst. EVSI beantwoordt de vraag waar een financier van onderzoek werkelijk voor staat: "is *deze* trial, op *deze* omvang, de kosten waard?"

## Waarom het ertoe doet

EVPI geeft het plafond aan van wat onderzoek ooit waard zou kunnen zijn; het zegt nooit of de trial die voorligt de lat haalt. Een nationale onderzoeksfinancier die kiest tussen een pilot met 50 patiënten en een definitieve trial met 500 patiënten moet weten hoeveel *elk specifiek ontwerp* waard is, niet alleen de waarde van alwetendheid. EVSI levert dat getal en, omdat het meeschaalt met de steekproefgrootte, kan een financier de steekproefgrootte vinden die het verwachte nettovoordeel maximaliseert in plaats van te gokken.

Daarom is EVSI ook altijd kleiner dan of gelijk aan EVPI: een eindige steekproef kan onzekerheid maar gedeeltelijk oplossen, en een studie die meer waard lijkt dan perfecte informatie is een teken dat de berekening fout is, geen echt resultaat.

## De wiskunde

```
Algemeen:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (geneste verwachting: buitenste over mogelijke studieresultaten, binnenste
  over de posterieure overtuiging over θ na het zien van dat resultaat —
  meestal geschat met geneste Monte Carlo / Bayesiaanse updating over de
  trekkingen van de probabilistische gevoeligheidsanalyse)

Gesloten-vorm normale benadering (één onzekere parameter, geconjugeerd
normaal-normaal model — een gangbare sneltoets, niet voor elk model exact):
EVSI(n) = EVPI × n / (n + n0)

n  = steekproefgrootte van de voorgestelde studie
n0 = "prior-equivalente steekproefgrootte" — de omvang van een gedachte
     steekproef die dezelfde informatie zou dragen als de huidige prior,
     afgeleid uit de verhouding van datavariantie tot priorvariantie
ENBS(n) = EVSI(n) − Kosten(n)
Populatie-EVSI = EVSI_per_beslissing × getroffen_beslissingen
```

De algemene vorm is een geneste verwachting omdat het toekomstige resultaat van een studie zelf onzeker is: je moet middelen over elke mogelijke dataset die de studie zou kunnen opleveren en voor elk de beste beslissing opnieuw berekenen op basis van de bijgewerkte (posterieure) overtuiging. De gesloten-vorm normale benadering ruilt die rekenlast in voor één enkele verhouding, geldig wanneer de onzekere parameter en de data (bij benadering) normaal en geconjugeerd zijn: een gemak, geen universele wet. Volledige geneste Monte Carlo is de algemene methode wanneer die aanname niet opgaat. Zie [probabilistische gevoeligheidsanalyse](../probabilistische-gevoeligheidsanalyse/) voor de PSA-trekkingen waaruit EVSI doorgaans wordt geschat.

## Uitgewerkt voorbeeld

Voortbouwend op het uitgewerkte voorbeeld van [EVPI](../verwachte-waarde-van-perfecte-informatie/), de uitrol van een AI-documentatieassistent bij 5.000 clinici, waar EVPI £1,2 mln. bleek te zijn, wordt dezelfde EVPI hier in hele ponden uitgedrukt: **EVPI = £1.200.000**.

Er ligt een voorgestelde pilotstudie met 50 clinici. Uit de verhouding van de variantie van de eerdere overtuiging tot de meetnauwkeurigheid van de pilot volgt een prior-equivalente steekproefgrootte van `n0 = 75`:

```
EVSI(50) = 1.200.000 × 50 / (50 + 75)
         = 1.200.000 × 50 / 125
         = 1.200.000 × 0,4
         = £480.000
```

De pilot kost £120.000:

```
ENBS = EVSI − Kosten = 480.000 − 120.000 = £360.000
```

Een duidelijk positieve ENBS: financier de pilot. Als dezelfde inkoopbeslissing zich herhaalt bij 3 vergelijkbare regionale trusts, schaalt de waarde van de pilot mee:

```
Populatie-EVSI = 480.000 × 3 = £1.440.000
```

## Verbinding met software-engineering

EVSI is de economie van het kiezen *hoe groot* een pilot of A/B-test moet zijn, niet alleen of je er überhaupt een uitvoert:

- **Steekproefgrootte als investeringsbeslissing.** Een bèta met 50 gebruikers en een gefaseerde uitrol naar 5.000 gebruikers zijn verschillende "studies" met verschillende EVSI's en kosten; EVSI laat je ze op dezelfde basis vergelijken in plaats van terug te vallen op "meer data is altijd beter".
- **ENBS, niet EVSI alleen, is de opdrachttoets.** Een studie met hoge EVSI waarvan de kosten het grootste deel opslokken, is een zwak voorstel; de beslisregel is het verwachte nettovoordeel van steekproeftrekking, precies zoals een businesscase voordeel tegen kosten afzet in plaats van alleen het voordeel te rapporteren.
- **Afnemende meeropbrengst is expliciet.** Omdat EVSI(n) stijgt met `n/(n+n0)`, verdubbelt het verdubbelen van de omvang van een pilot nooit de waarde ervan: een formele versie van het engineersinstinct dat een groter experiment een afnemende marginale informatiewaarde heeft.

## Valkuilen

- **De normale benadering buiten haar aannames toepassen.** Ze geldt alleen voor bij benadering geconjugeerde onzekerheid over één parameter; een werkelijk niet-lineair of multi-parametrisch beslismodel vraagt om volledige geneste Monte Carlo, niet om deze sneltoets.
- **EVSI alleen met contante kosten vergelijken.** EVSI moet worden afgewogen tegen de *volledige* kosten van de studie, inclusief haar eigen kosten van beslisvertraging (zie [kosten van vertraging](../kosten-van-vertraging/)), niet alleen de factuur van de studie.
- **EVSI > EVPI behandelen als echte bevinding.** EVSI kan EVPI door constructie nooit overschrijden; een berekening die dat oplevert is een modelleerfout, geen ontdekking.

## Bronnen

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
