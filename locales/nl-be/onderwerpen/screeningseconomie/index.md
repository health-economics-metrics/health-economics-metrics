# Screeningseconomie

Screeningseconomie behandelt de Wilson-Jungner-criteria voor wanneer screening zinvol is, en de wiskunde waarom voorspellende waarde instort bij lage prevalentie.

## Waarom het ertoe doet

Zelfs een zeer nauwkeurige test genereert overweldigend veel valse positieven wanneer de onderliggende aandoening zeldzaam is, wat leidt tot alarmmoeheid en onnodige vervolgonderzoeken.

## De wiskunde

```
Positief voorspellende waarde (PPV) = (Sensitiviteit × Prevalentie) / [(Sensitiviteit × Prevalentie) + ((1−Specificiteit) × (1−Prevalentie))]
```

## Uitgewerkt voorbeeld

Een test met 95% sensitiviteit en 95% specificiteit toegepast op een aandoening met 0,1% prevalentie heeft een PPV van slechts ongeveer 2% — 98% van de positieve resultaten zijn vals.

## Verbinding met software-engineering

Direct analoog aan alarmmoeheid in monitoringsystemen: een detector met hoge nauwkeurigheid gegenereerd tegen een zeldzame gebeurtenis produceert nog steeds overwegend valse alarmen. Voor het bepalen van de omvang van een heel screeningsprogramma in plaats van één test, zie [aantal te screenen personen](../aantal-te-screenen-personen/): hoeveel mensen het hele screen-en-behandeltraject moeten doorlopen om één uitkomst te voorkomen.

## Valkuilen

- **Sensitiviteit en specificiteit citeren zonder de prevalentie te vermelden.**
- **De Wilson-Jungner-criteria negeren en screenen zonder een effectieve behandeling beschikbaar te hebben.**

## Bronnen

- Wilson JMG, Jungner G, Principles and Practice of Screening for Disease.
- UK National Screening Committee, screening criteria.
