# Valutaveilige kostenaggregatie

Het optellen van veel geldposten (maandfacturen, kosten per locatie, meerjarige cijfers voor budgetimpact) met gewone binaire drijvendekommagetallen (`f64`) hoopt kleine representatiefouten op, omdat de meeste decimale breuken (bijvoorbeeld $1.234,56) niet exact in binaire drijvende komma zijn weer te geven. Elke afzonderlijke fout is minuscuul, maar een groot model dat honderden of duizenden posten over meerdere jaren optelt, kan met fracties van een cent afdrijven, en die afwijking hangt af van de *volgorde* van de optellingen, waardoor ze niet reproduceerbaar is. Een valutaaggregatie in exacte decimale (of gehele kleinste-eenheids-)rekenkunde telt exact op, overeenkomstig de manier waarop boekhoudsystemen en dubbel boekhouden op de cent moeten sluiten.

## Waarom het ertoe doet

Dit is een goed gedocumenteerde, fundamentele klasse van softwarebugs: het artikel van Goldberg uit 1991 in ACM Computing Surveys, "What Every Computer Scientist Should Know About Floating-Point Arithmetic", is de standaardreferentie voor precies waarom binaire drijvende komma de meeste decimale geldwaarden niet exact kan weergeven en waarom het optellen van veel ervan de fout versterkt. Modellen voor gezondheidseconomie en NHS-financiën tellen routinematig veel jaren en veel kostencategorieën op: [totale eigendomskosten](../totale-eigendomskosten/) en [budgetimpactanalyse](../budgetimpactanalyse/) aggregeren beide een groot aantal `f64`-kostenposten over meerjarige horizons. Wanneer een model op de cent moet sluiten, een audit die het totaal met de hand herberekent moet *exact* hetzelfde cijfer krijgen, moet de rekenkunde zelf exact decimaal zijn, niet drijvende komma.

## De wiskunde

```
Naïeve aggregatie:         totaal = Σ f64(post_i)         — van de volgorde afhankelijke drift
Valutaveilige aggregatie:  totaal = Σ Decimal(post_i)      — exact, reproduceerbaar

Een procentuele aanpassing toepassen (bijv. een reservebuffer):
  aangepast = totaal × vermenigvuldiger      — exact Decimal-resultaat, kan meer
                                                decimalen hebben dan de exponent
                                                van de kleinste eenheid van de valuta
  afgerond  = afronden(aangepast, valuta_exponent, afrondingsregel)  — de afrondingsregel
                                                (half-up versus half-even/
                                                bankiersafronding) moet uitdrukkelijk
                                                worden vermeld
```

Let op de tweestapsdiscipline: een exact `Decimal`-bedrag met een vermenigvuldiger vermenigvuldigen kan meer decimalen opleveren dan de valuta werkelijk gebruikt (bijvoorbeeld drie decimalen uit een bedrag met twee decimalen maal een vermenigvuldiger met twee decimalen). Die tussenliggende precisie wordt *niet* automatisch weggerond; alleen een expliciete afrondingsstap met een vermelde afrondingsregel brengt haar terug tot de werkelijke kleinste-eenheidsexponent van de valuta.

## Uitgewerkt voorbeeld

Twaalf identieke maandfacturen van elk $1.234,56, opgeteld in exacte decimale rekenkunde: $1.234,56 × 12 = **$14.814,72**, precies. Zet dit af tegen het twaalf keer optellen van de `f64`-literal `1234.56` in IEEE-754 dubbele precisie, wat afhankelijk van de optelvolgorde met fracties van een cent kan afdrijven: een reële, gedocumenteerde klasse van bugs, geen probleem voor een model dat op exacte decimale `Money`-rekenkunde is gebouwd.

Pas nu een standaardreservebuffer voor budgetimpact van 5% (vermenigvuldiger 1,05) toe op dat totaal van $14.814,72: $14.814,72 × 1,05 = $15.555,456, drie decimalen, omdat de vermenigvuldiging exact is en niet automatisch wordt afgerond op de twee decimalen van de valuta. Expliciet afgerond op 2 decimalen met bankiersafronding (half-even) geeft dat precies **$15.555,46**.

## Verbinding met software-engineering

Dit is de directe, fundamentele les achter "financiële software gebruikt `Decimal`, niet `float`". Ze sluit uitdrukkelijk aan op de modules [totale eigendomskosten](../totale-eigendomskosten/) en [budgetimpactanalyse](../budgetimpactanalyse/) van deze repository, die beide momenteel gewone drijvendekommakosten optellen. Het correctheidsargument eist niet dat die modellen meteen worden gemigreerd, maar het stelt precies vast *wanneer* een systeem op de cent moet sluiten en dus geen binaire drijvende komma voor zijn geldrekenkunde mag gebruiken. Zie ook [exacte-centen kostentoewijzing](../exacte-centen-kostentoewijzing/) voor het bijbehorende probleem van het verdelen (in plaats van optellen) van totalen zonder centen te verliezen.

## Valkuilen

- **Halverwege de keten naar `float` converteren**: een geldwaarde halverwege een berekening naar een drijvendekommagetal halen (sommige `Money`-bibliotheken geven deze conversiemethode zelfs een naam als "lossy" als uitdrukkelijke waarschuwing) gooit stilzwijgend de exactheidsgarantie weg voor elke berekening na dat punt.
- **"Decimal is te traag om je druk over te maken"**: exacte decimale rekenkunde afdoen als onnodige overhead terwijl bij financiële rapportage juistheid en controleerbaarheid, niet de ruwe doorvoer, van belang zijn.
- **Een reserve-percentage toepassen zonder de afrondingsregel te vermelden**: half-up tegenover half-even (bankiersafronding) kan de laatste cent veranderen; de afrondingsconventie zelf moet een vermelde, controleerbare keuze zijn. Zie [kosten-batenanalyse](../kosten-batenanalyse/) voor de Green Book-richtlijn van HM Treasury over correcties voor reserves en optimism bias, precies het soort cijfer waarop deze afrondingsstap wordt toegepast.

## Bronnen

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002: het `Money`-patroon.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book: richtlijnen voor optimism bias en reserves bij het modelleren van budgetimpact. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
