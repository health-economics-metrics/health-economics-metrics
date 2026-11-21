# Aantal te screenen personen (NNS)

NNS is het aantal mensen dat gescreend, niet alleen behandeld, moet worden om **één** ongunstige uitkomst te voorkomen over een gedefinieerde follow-upperiode, gegeven het basisrisico van de populatie en de relatieve risicoreductie die vroege opsporing en behandeling bereikt. Het is het analogon van NNT op het niveau van een screeningsprogramma: NNT vraagt hoeveel mensen *behandeld* moeten worden om één uitkomst te voorkomen; NNS vraagt hoeveel mensen het hele *screen-en-dan-behandel*-traject moeten doorlopen om daar te komen.

## Waarom het ertoe doet

Rembold introduceerde NNS in 1998 specifiek zodat screeningsprogramma's op dezelfde voet als behandelingen konden worden vergeleken, omdat de relatieve risicoreductie in de kop van een screeningstest twee dingen verbergt die die van een behandeling niet verbergt: het basisrisico van de populatie die werkelijk voor screening wordt uitgenodigd, en het feit dat iedereen die wordt gescreend de kosten en de last van fout-positieven van de test draagt, niet alleen de minderheid die er later baat bij heeft. De kosteneffectiviteitspoort van het Britse National Screening Committee (zie [screeningseconomie](../screeningseconomie/)) is precies op dit onderscheid gebouwd: een screeningsprogramma met een indrukwekkende relatieve risicoreductie in een populatie met laag basisrisico kan nog steeds een NNS in de duizenden hebben, waarna de programmakosten per voorkomen uitkomst de werkelijke vraag worden.

## De wiskunde

```
NNS = 1 / (basisrisico × relatieve_risicoreductie)

basisrisico                = kans op de uitkomst in de gescreende populatie
                             over de follow-upperiode (0–1)
relatieve_risicoreductie   = proportionele risicoreductie die door
                             screeninggestuurde vroegbehandeling wordt bereikt (0–1)

Programmakosten per voorkomen uitkomst = NNS × kosten_per_screening
```

Vergelijk direct met [NNT](../aantal-te-behandelen-patiënten/): NNS vouwt de effectiviteit van de hele trechter screening → diagnose → behandeling samen in één getal, terwijl NNT er al van uitgaat dat de patiënt is gediagnosticeerd en met behandeling begint.

## Uitgewerkt voorbeeld

De doelpopulatie van een screeningsprogramma heeft een basisrisico op de gebeurtenis van 2% over de studieperiode (`basisrisico = 0,02`), en vroege opsporing bereikt een relatieve risicoreductie van 25% (`relatieve_risicoreductie = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

200 mensen moeten worden gescreend om één uitkomst te voorkomen.

Bij £50 per screening:
Programmakosten per voorkomen uitkomst = 200 × £50 = £10.000
```

Dat bedrag van £10.000 is wat moet worden afgewogen tegen de kosten van de uitkomst zelf en de QALY's die die zou hebben gekost: dezelfde vergelijking die [preventie-economie](../preventie-economie/) voor preventieprogramma's in het algemeen maakt.

## Verbinding met software-engineering

NNS is "hoeveel gebruikers, gebeurtenissen of verzoeken moeten door een detectie- of triagestroom lopen om één echt positief te vangen waarop het de moeite loont te handelen": direct relevant voor op alarmen gebaseerde monitoring- en triagesystemen, waar een doelconditie met lage prevalentie NNS opblaast op dezelfde manier als ze de positief voorspellende waarde laat instorten (zie [screeningseconomie](../screeningseconomie/) en [klinische AI-evaluatie](../klinische-ai-evaluatie/)). Een monitoringregel die 200 gebeurtenissen per echte vangst moet verwerken, is alleen de moeite waard om te draaien als de vangst minstens 200 keer de triagekosten per gebeurtenis waard is: precies dezelfde rekenkunde als in het gezondheidszorgvoorbeeld hierboven.

## Valkuilen

- **De afhankelijkheid van het basisrisico negeren**: dezelfde screeningstest of hetzelfde programma heeft in een populatie met hoog risico een heel andere NNS, en kosteneffectiviteit, dan in een populatie met laag risico. Noem nooit een NNS zonder de populatie te vermelden waarvoor die is berekend.
- **De verkeerde noemer tellen**: NNS telt *gescreende* mensen, niet mensen die positief testen of met behandeling beginnen; het bevat de effectiviteit van de hele trechter al, dus het mag nooit worden vergeleken met een maatstaf die alleen over positieven is geteld.
- **Vergelijken over follow-upperioden heen**: een kortere follow-upperiode blaast NNS doorgaans op, omdat er in het venster minder gebeurtenissen worden waargenomen. NNS-cijfers zijn alleen vergelijkbaar als ze over dezelfde follow-upduur zijn berekend.

## Bronnen

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
