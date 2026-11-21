# Konsentrasjonsindeks

Konsentrasjonsindeksen (Wagstaff, Paci, van Doorslaer, 1991) er standardmålet på sosioøkonomisk ulikhet i en helsevariabel og går fra −1 til 1. Negativ betyr at helsevariabelen er konsentrert blant sosioøkonomisk vanskeligstilte, positiv at den er konsentrert blant de bedrestilte, og null at det ikke finnes noen konsekvent sosioøkonomisk gradient. Den gjør mistanken om ulik fordeling til ett sammenlignbart tall.

## Hvorfor det er viktig

Et program kan se effektivt ut samlet sett og likevel levere nytten nesten helt til folk som allerede hadde det bedre. Nettopp slike fordelingshensyn følger [rekkevidde og rettferdighet](../rekkevidde-og-rettferdighet/) beskrivende: rekkevidde stratifisert etter deprivasjonskvintil, et rettferdighetsgap mellom øverste og nederste gruppe. Men en stratifisert tabell lar seg ikke presse sammen til én enkelt trendlinje, og den kan ikke lett sammenlignes mellom to helt ulike intervensjoner målt på ulike skalaer. Konsentrasjonsindeksen løser begge problemene: den beregnes på samme måte for enhver helsevariabel mot enhver sosioøkonomisk rangering, slik at en nasjonal helsetjeneste kan følge med på om ulikheten i en bestemt digital tjeneste vokser eller krymper fra utgivelse til utgivelse, og kan sammenligne fordelingsrettferdigheten i en app-utrulling med for eksempel et screeningprogram på den samme normaliserte skalaen.

## Matematikken

```
CI = (2 / gjennomsnitt(helseverdier)) × Kov(helseverdier, sosioøkonomiske_rangeringer)

Kov(X, Y) = gjennomsnitt(X × Y) − gjennomsnitt(X) × gjennomsnitt(Y)   (populasjonskovarians)

sosioøkonomiske_rangeringer: hver persons brøkrang i den sosioøkonomiske
fordelingen, i [0, 1] (0 = mest vanskeligstilt, 1 = mest begunstiget;
for grupperte/klassedelte data vanligvis midtpunktsrangen til hver gruppe)
```

Dette er den «praktiske kovariansformelen» (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Verdensbanken 2008): den vanlige snarveien for praktikere for å beregne konsentrasjonsindeksen direkte fra parvise observasjoner, uten først å tegne og integrere under en konsentrasjonskurve.

## Gjennomarbeidet eksempel

En selvrapportert poengsum for god helse (1 = dårligst, 4 = best), observert over fire like store sosioøkonomiske kvartiler, hver representert ved kvartilens midtpunktsrang:

```
helseverdier                 = [1,0, 2,0, 3,0, 4,0]
sosioøkonomiske_rangeringer  = [0,125, 0,375, 0,625, 0,875]

gjennomsnitt(helseverdier)         = 2,5
gjennomsnitt(helse × rang)         = gjennomsnitt([0,125, 0,75, 1,875, 3,5]) = 1,5625
gjennomsnitt(sosioøkonomiske_rangeringer) = 0,5

Kov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

En positiv `0,25` betyr at denne helsepoengsummen er konsentrert blant den sosioøkonomisk begunstigede gruppen: respondentene med høyere poengsum heller mot den mer velstående enden av rangeringen.

## Kobling til programvareutvikling

Dette er den samme kovariansbaserte ulikhetsmålingen som brukes i økonomi generelt (en fetter av Gini-koeffisienten), og den oversettes til å måle om fordelene ved et programvareprodukt er konsentrert blant allerede begunstigede brukersegmenter i stedet for rettferdig spredt: en direkte utvidelse av [rekkevidde og rettferdighet](../rekkevidde-og-rettferdighet/) («reach»-dimensjonen i RE-AIM) til et formelt statistisk mål i stedet for et beskrevet gap. Der rekkevidde og rettferdighet rapporterer effekt per sjikt, presser konsentrasjonsindeksen hele fordelingen sammen til ett fortegnsbærende tall, egnet som én enkelt KPI som følges på tvers av utgivelser: praktisk for et dashbord, der en full stratifisert oppdeling ikke passer.

## Fallgruver

- **Drift i fortegnskonvensjonen**: fortegnet avhenger av hvordan både helsevariabelen og rangen er definert; snur du den ene, snur fortegnet. Konvensjonen som er brukt, må derfor alltid oppgis uttrykkelig sammen med enhver rapportert verdi.
- **Grenserang i stedet for midtpunktsrang**: grupperte eller klassedelte sosioøkonomiske data (f.eks. kvintiler) krever at hver gruppes brøkrang brukes i *midtpunktet*, ikke ved grensen, ellers er indeksen skjev.
- **Å lese «nær null» som «ingen ulikhet»**: en konsentrasjonsindeks nær null betyr «ingen konsekvent sosioøkonomisk gradient», ikke «ingen ulikhet» i absolutt forstand: motsatte ulikheter i ulike retninger kan oppheve hverandre.

## Kilder

- Wagstaff A, Paci P, van Doorslaer E. «On the measurement of inequalities in health.» Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. «Analyzing Health Equity Using Household Survey Data.» World Bank. 2008: standardhåndboken for praktikere, kilden til den praktiske kovariansformelen som er brukt her. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
