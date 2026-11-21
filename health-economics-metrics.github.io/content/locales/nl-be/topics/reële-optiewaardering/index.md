# Reële-optiewaardering

Reële-optiewaardering past de logica van de prijsstelling van financiële opties toe op reële (niet op financiële markten verhandelde) investeringsbeslissingen, specifiek de *optie om uit te breiden*: een project later uitbreiden als het slaagt, zonder daartoe verplicht te zijn. Een vereenvoudigd binomiaal model met één periode (Cox, Ross, Rubinstein, 1979) waardeert deze flexibiliteit rechtstreeks en maakt van "laten we klein beginnen en kijken" een ingeprijsd getal in plaats van een onderbuikgevoel.

## Waarom het ertoe doet

Een statische NPV-berekening prijst een project als een alles-of-nietsweddenschap: financieren of niet, op de huidige schaal, voor altijd. Echte projecten, en zeker gefaseerde uitrol van digitale gezondheid, worden zelden zo gewed: een gezondheidssysteem kan een kleine pilot financieren, kijken wat er gebeurt en alleen verder geld vastleggen als het werkt. Die flexibiliteit heeft echte waarde, en haar negeren onderwaardeert gefaseerde investeringen stelselmatig ten opzichte van eenmalige, wat precies verkeerd is voor inkoopprocessen die het veiliger ogende gefaseerde voorstel belonen. Reële-optiewaardering prijst de flexibiliteit zelf, zodat een gefaseerd voorstel eerlijk kan worden vergeleken met een alternatief met volledige commitment in plaats van gestraft te worden omdat het op een naïeve NPV-regel kleiner oogt.

## De wiskunde

```
Risiconeutrale kans op de toestand "omhoog":
  p = ((1 + risicovrije_rente) − omlaagfactor) / (omhoogfactor − omlaagfactor)

Uitbreidingsuitkering in elke toestand (bij nul begrensd — uitbreiden is optioneel):
  uitkering_omhoog = max(projectwaarde × omhoogfactor − uitbreidingskosten, 0)
  uitkering_omlaag = max(projectwaarde × omlaagfactor − uitbreidingskosten, 0)

Optiewaarde (verdisconteerde verwachte uitkering):
  optiewaarde = (p × uitkering_omhoog + (1 − p) × uitkering_omlaag) / (1 + risicovrije_rente)

Uitgebreide NPV = statische_npv + optiewaarde
```

De waarde van het project stijgt (`omhoogfactor`) of daalt (`omlaagfactor`) tegen het volgende beslismoment. Uitbreiden wordt alleen uitgeoefend als dat in die toestand winstgevend is; de ondergrens van nul bij de uitkering maakt dit tot een echte *optie* in plaats van een verplichting. Voor het prijzen van de optie om eerst informatie te verzamelen, in plaats van de optie om later uit te breiden, zie [verwachte waarde van perfecte informatie](../verwachte-waarde-van-perfecte-informatie/). Voor de kosten van wachten met die beslissing, zie [kosten van vertraging](../kosten-van-vertraging/).

## Uitgewerkt voorbeeld

Een pilot voor een digitale dienst met `projectwaarde = £1.000.000`, een mogelijke stijging naar 1,5× of daling naar 0,5× tegen het volgende beslismoment, een risicovrije rente van 8% en uitbreidingskosten van £600.000:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

uitkering_omhoog = max(1.000.000 × 1,5 − 600.000, 0) =  900.000
uitkering_omlaag = max(1.000.000 × 0,5 − 600.000, 0) = max(−100.000, 0) = 0

De ondergrens doet ertoe: de optie zou NIET worden uitgeoefend als de markt
tegenvalt — de uitbreidingskosten van £600.000 zijn hoger dan de £500.000
die het project in de omlaagtoestand waard zou zijn.

optiewaarde = (0,58 × 900.000 + 0,42 × 0) / 1,08
            = 522.000 / 1,08
            ≈ £483.333,33
```

Als je de optiewaarde optelt bij een statische NPV-basis van £200.000: uitgebreide NPV = 200.000 + 483.333,33 ≈ **£683.333,33**. Alleen de statische NPV van £200.000 rapporteren, zonder deze optiewaarde, zou de werkelijke waarde van het gefaseerde project met meer dan het dubbele onderschatten.

## Verbinding met software-engineering

Dit is de formele versie van "lever nu een minimale versie en behoud de optie om verder te investeren als het aanslaat", direct relevant voor een gefaseerde uitrol van een digitaal gezondheidsproduct, structureel parallel aan de kadering van volgordebepaling onder onzekerheid bij [kosten van vertraging](../kosten-van-vertraging/) en [WSJF/CD3](../wsjf-en-cd3/), en aanvullend op [verwachte waarde van perfecte informatie](../verwachte-waarde-van-perfecte-informatie/) en [verwachte waarde van steekproefinformatie](../verwachte-waarde-van-steekproefinformatie/): alle drie prijzen flexibiliteit of informatie onder onzekerheid, vanuit verschillende hoeken.

## Valkuilen

- **Risiconeutrale prijsstelling lenen zonder de aanname van een verhandeld activum waarop die berust**: reële-optiemodellen lenen de risiconeutrale kans uit de prijsstelling van financiële opties, die ervan uitgaat dat de onderliggende waarde een *verhandeld* activum is; voor een werkelijk niet-verhandeld reëel project is dit een modelleergemak, geen letterlijk marktfeit.
- **`omhoogfactor`/`omlaagfactor` behandelen als vrije parameters**: de binomiale omhoog/omlaag-invoer is zelf een aanname die onderbouwing vereist, geen vrije parameter die wordt gekozen om een gewenst antwoord te krijgen.
- **Alleen de optiewaarde rapporteren**: de reële-optiewaarde is *additief* aan de statische NPV van een zelfstandig project; een veelgemaakte fout is alleen de optiewaarde rapporteren en de basiscasus laten vallen, wat de zaak overdrijft als de statische NPV negatief is en haar onderschat (zoals in het uitgewerkte voorbeeld hierboven) als de statische NPV helemaal wordt weggelaten.

## Bronnen

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88: koppelt reële opties rechtstreeks aan een gezondheidseconomische beslissingscontext. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
