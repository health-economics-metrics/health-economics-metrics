# Exacte-centen kostentoewijzing

Het verdelen van een totaalbedrag (een gedeelde subsidie, een infrastructuurfactuur, een cijfer voor budgetimpact) over meerdere ontvangers met naïeve procentenrekenkunde levert routinematig delen op die niet terugtellen tot het oorspronkelijke totaal. Exacte-centen toewijzing is de oplossing: een methode met gehele getallen/decimalen, die in de kleinste valuta-eenheden (centen) werkt en garandeert dat de delen *precies* optellen tot het geheel, hoe ongelijk het ook deelt. Elke software-engineer die een verdeeld totaal op de cent moet laten sluiten (loonadministratie, uitbetaling van subsidies, doorbelasting van gedeelde diensten) heeft dit patroon nodig, geen drijvendekomma-percentages.

## Waarom het ertoe doet

Dit is een benoemd, fundamenteel patroon in enterprise-softwareontwikkeling: *Patterns of Enterprise Application Architecture* van Martin Fowler (2002) beschrijft `Money` en `Allocate` juist omdat "verdeel $100 in drieën" een probleem is dat naïeve code voortdurend verkeerd oplost, en wel stilzwijgend: de fout komt pas aan het licht wanneer iemand de boeken afstemt en de delen een cent onder (of boven) het totaal vindt. In het werk van gezondheidseconomie en NHS-financiën is dit niet academisch: totalen voor budgetimpact worden over locaties, jaren of directies verdeeld; gedeelde infrastructuur- en licentiekosten worden naar personeelsaantal of activiteitsaandeel over afdelingen omgeslagen. Elke van die verdelingen moet exact sluiten, want een financieel directeur die delen krijgt die niet optellen tot het totaal, verliest het vertrouwen in het hele model.

## De wiskunde

```
Naïeve (foutieve) methode:
  deel_i = afronden(totaal × aandeel_i / Σ aandelen)     — rondt elk deel afzonderlijk af

Exacte methode (grootste rest / "largest remainder allocation"):
  1. basis_i = afronden_naar_beneden(totaal_kleinste_eenheden × aandeel_i / Σ aandelen)   — alleen hele kleinste eenheden (centen)
  2. rest = totaal_kleinste_eenheden − Σ basis_i                                          — overgebleven centen, altijd < aantal ontvangers
  3. verdeel 1 extra kleinste eenheid over de `rest` ontvangers met de grootste
     fractionele rest uit stap 1, tot de rest op is

Resultaat: Σ deel_i == totaal, altijd, door constructie.
```

De exacte methode rondt nooit een deel afzonderlijk af: ze rondt de *hele toewijzing* als één bewerking af, en dat maakt dat de somsinvariant standhoudt.

## Uitgewerkt voorbeeld

Verdeel $100,00 in drie gelijke delen (`aandelen = [1, 1, 1]`).

Naïeve methode: $100,00 ÷ 3 = $33,333…, afzonderlijk afgerond op de dichtstbijzijnde cent geeft $33,33 voor elke ontvanger. Opgeteld: $33,33 × 3 = $99,99: er is een cent verdwenen, en geen enkele afzonderlijke post is zo "fout" dat je het bij inspectie ziet.

Exacte methode: `basis` = $33,33 voor alle drie (9.999 kleinste eenheden in totaal uit `afronden_naar_beneden(10.000 / 3) = 3.333` cent elk), waardoor een rest van 1 cent overblijft (10.000 − 9.999). Die ene overgebleven cent gaat naar de ontvanger met de grootste fractionele rest in de deling; welke ontvanger dat precies is, is een intern detail van de beslissing bij gelijke stand, niet iets waarop een aanroeper moet vertrouwen. Twee ontvangers krijgen $33,33 en één $33,34, en de drie delen tellen precies op tot $100,00.

Dit is precies de rekenkunde die een [budgetimpactanalyse](../budgetimpactanalyse/) nodig heeft wanneer een totaalcijfer voor budgetimpact moet worden verdeeld over locaties, cohorten of boekjaren en moet worden teruggebracht op het gepubliceerde totaal. Zie [valutaveilige kostenaggregatie](../valutaveilige-kostenaggregatie/) voor het bijbehorende probleem van het zonder drift optellen van veel van zulke posten.

## Verbinding met software-engineering

Dit is letterlijk "het Money-patroon" uit enterprise-softwarearchitectuur: een fundamenteel, benoemd patroon voor precies deze klasse van bugs, geen eenmalige truc. Echte mislukkingen bij financiële afstemming zijn uit precies deze klasse van bugs in productie gegaan: procentuele verdelingen berekend in `f64`, per ontvanger afgerond en nooit gecontroleerd tegen het oorspronkelijke totaal. Het sluit direct aan op de module [totale eigendomskosten](../totale-eigendomskosten/) van deze repository, die momenteel gewone drijvendekommakosten over jaren en opties optelt; dezelfde exactheidsdiscipline geldt zodra een TCO- of budgetimpacttotaal moet worden toegewezen in plaats van alleen opgeteld.

## Valkuilen

- **Eerst procenten, dan afronden in plaats van grootste rest**: toewijzen met drijvendekomma-percentages en elke ontvanger afzonderlijk afronden, wat afrondingsfouten opstapelt en zelden terugtelt tot het totaal, vooral bij veel ontvangers.
- **Kleinste-eenheidsexponenten van valuta's negeren**: aannemen dat elke valuta 2 decimalen heeft; de Japanse yen heeft er 0, sommige valuta's hebben er 3. Een met de hand gebouwde procentuele verdeling codeert meestal 2 hard in en gaat voor andere valuta's stilzwijgend stuk; een exacte toewijzingsroutine leest de exponent uit de valuta zelf (ISO 4217).
- **Een reeds toegewezen rest opnieuw toewijzen**: de toewijzingsroutine opnieuw uitvoeren op wat is overgebleven van een eerdere toewijzing, zonder idempotentiecontroles, wat dezelfde cent tweemaal aan dezelfde ontvanger kan crediteren.

## Bronnen

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002: de patronen `Money` en `Allocate`.
- ISO 4217: norm voor valuta- en fondscodes, die de kleinste-eenheidsexponent van elke valuta definieert.
