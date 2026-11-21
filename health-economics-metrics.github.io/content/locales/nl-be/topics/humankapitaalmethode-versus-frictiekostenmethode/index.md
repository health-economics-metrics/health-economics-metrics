# Humankapitaalmethode versus frictiekostenmethode

Dit zijn de twee concurrerende methoden om verloren productiviteit, door ziekte, invaliditeit of overlijden, te waarderen in ziektekosten- en kosten-batenstudies. De humankapitaalmethode (HCA) waardeert alle verloren productie over de volledige duur van de afwezigheid tegen het loonniveau; de frictiekostenmethode (FCM) waardeert die alleen voor de kortere periode die een werkgever werkelijk nodig heeft om de productie te herstellen. De keuze tussen beide verandert een schatting van indirecte kosten met een factor twee of meer.

## Waarom het ertoe doet

Indirecte (productiviteits)kosten zijn een van de meest omstreden posten in de gezondheidseconomie, juist omdat de twee standaardmethoden zo sterk van elkaar afwijken. HCA behandelt elke afwezigheidsdag als een dag productie die de economie werkelijk verliest, gewaardeerd tegen het volledige loon voor de volledige duur, of, bij overlijden of blijvende invaliditeit, voor het resterende arbeidsleven. FCM betoogt dat in een economie met werkloosheid en ruimte op de arbeidsmarkt het grootste deel van een lange afwezigheid de nationale productie niet werkelijk verlaagt zodra een werkgever een vervanger heeft opgeleid of werk heeft herverdeeld; alleen de "frictieperiode", de tijd om de productie op het eerdere niveau terug te brengen, vertegenwoordigt een reëel verlies. FCM levert daarom systematisch lagere, meer conservatieve schattingen van indirecte kosten dan HCA, en de twee methoden zijn geen uitwisselbare voetnoten: het zijn verschillende economische theorieën over wat "verloren productiviteit" betekent. Dit is ook de reden dat de [referentiecasus van NICE](../beoordeling-van-gezondheidstechnologie/) productiviteitskosten standaard uitsluit en ze, als ze al worden gerapporteerd, als aparte gevoeligheidsanalyse vanuit maatschappelijk perspectief rapporteert in plaats van ze in de ICER van de referentiecasus te mengen; zie [analyseperspectief](../analyseperspectief/).

## De wiskunde

```
Humankapitaalmethode:
HCA_kosten = dagloon × verloren_dagen

Frictiekostenmethode (vereenvoudigd, begrensd op de frictieperiode):
FCM_kosten = dagloon × min(verloren_dagen, frictieperiode_dagen)

frictieperiode_dagen = land-/sectorspecifieke schatting van de tijd om de
                       productie te herstellen (historisch ~85 dagen in de
                       Nederlandse iMTA-kostenrichtlijn; verschilt per land
                       en wordt periodiek opnieuw geschat)
```

Het hele meningsverschil tussen de twee methoden zit in de `min()`: HCA begrenst `verloren_dagen` nooit, dus de kosten blijven groeien gedurende de hele afwezigheid, terwijl FCM de getelde dagen begrenst op de frictieperiode, hoe lang de feitelijke afwezigheid ook duurt.

## Uitgewerkt voorbeeld

Een werknemer is `verloren_dagen = 180` dagen afwezig en verdient `dagloon = £150`.

**Humankapitaalmethode**:

```
HCA_kosten = 150 × 180 = £27.000
```

**Frictiekostenmethode**, met een frictieperiode van `frictieperiode_dagen = 85` (de historische Nederlandse iMTA-benchmark, zoals bij de periodieke herschatting van de richtlijn):

```
FCM_kosten = 150 × min(180, 85) = 150 × 85 = £12.750
```

De £12.750 van FCM is minder dan de helft van de £27.000 van HCA voor *dezelfde* afwezigheid: de keuze van de methode alleen verandert een ziektekostencasus al aanzienlijk, voordat enige andere aanname is aangeraakt.

## Verbinding met software-engineering

Dit sluit rechtstreeks aan op hoe een team het vertrek van een engineer waardeert:

- **Verloopkostenberekening in HCA-stijl**: het verlies waarderen als het volledige salaris van de vertrokken engineer, zolang de functie vacant blijft. Dit is de naïeve versie van de meeste verloopkostenmodellen en overschat het verlies om dezelfde reden als HCA het productiviteitsverlies overschat: het veronderstelt dat de vacante capaciteit de hele tijd volledig productief was en dat niets anders de ruimte heeft opgevangen. Zie [personeelsbehoud](../personeelsbehoud/), dat de keten van werving/onboarding/vacaturedekking kwantificeert waarin deze methode doorwerkt.
- **Verloopkostenberekening in FCM-stijl**: het verlies alleen waarderen voor de werkelijke tijd om een vervanger te vinden en in te werken: de "frictieperiode" van engineering. Dit is het verdedigbaardere getal voor een businesscase, net zoals FCM de conservatievere keuze is in een ziektekostenstudie.
- De onderliggende discipline is dezelfde als bij [opportuniteitskosten](../opportuniteitskosten/): waardeer een verdrongen middel naar wat er werkelijk verloren gaat, niet naar een kopduur maal een tarief.

## Valkuilen

- **HCA en FCM binnen één analyse mengen, of er maar één rapporteren zonder de keuze te vermelden.** Dezelfde afwezigheidsgegevens kunnen afhankelijk van de methode een verschil van 2x of meer in de gerapporteerde kosten opleveren; de keuze moet worden genoemd, niet verstopt.
- **HCA gebruiken voor een casus vanuit maatschappelijk perspectief zonder die als gevoeligheidsanalyse aan te duiden.** De referentiecasus van NICE sluit productiviteitskosten uitdrukkelijk uit; een HCA-schatting vanuit maatschappelijk perspectief hoort in een scenarioanalyse, niet in de kop-ICER.
- **Een van beide methoden toepassen op onbetaald of niet-marktgebonden werk (bijv. mantelzorg) zonder aanpassing.** Beide methoden nemen een loontarief als maatstaf voor waarde aan, wat niet netjes overdraagbaar is naar werk zonder marktloon.

## Bronnen

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press: onderwerp productiviteitskosten.
- NICE health technology evaluations manual (PMG36): perspectief van de referentiecasus en optionele richtlijnen voor het maatschappelijk perspectief. <https://www.nice.org.uk/process/pmg36>
