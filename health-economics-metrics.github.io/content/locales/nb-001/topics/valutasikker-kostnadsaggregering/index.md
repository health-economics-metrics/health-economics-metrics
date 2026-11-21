# Valutasikker kostnadsaggregering

Å summere mange pengeposter (månedlige fakturaer, kostnader per lokasjon, flerårige tall for budsjettvirkning) med vanlige binære flyttall (`f64`) samler opp små representasjonsfeil, fordi de fleste desimalbrøker ($1 234,56, for eksempel) ikke kan representeres nøyaktig i binære flyttall. Hver enkelt feil er liten, men en stor modell som summerer hundrevis eller tusenvis av poster over flere år, kan drive med brøkdeler av en cent, og driften avhenger av *rekkefølgen* addisjonene skjer i, noe som gjør den ikke-reproduserbar. En valutaaggregering gjort med eksakt desimal- (eller heltalls-minsteenhets-)aritmetikk summerer nøyaktig, i samsvar med hvordan regnskapssystemer og dobbelt bokholderi må gå opp på centen.

## Hvorfor det er viktig

Dette er en godt dokumentert, grunnleggende klasse av programvarefeil: Goldbergs artikkel fra 1991 i ACM Computing Surveys, «What Every Computer Scientist Should Know About Floating-Point Arithmetic», er standardreferansen for nøyaktig hvorfor binære flyttall ikke kan representere de fleste desimale pengeverdier eksakt, og hvorfor det å summere mange av dem forsterker feilen. Modeller i helseøkonomi og NHS-økonomi summerer rutinemessig mange år og mange kostnadskategorier: [total eierkostnad](../total-eierkostnad/) og [budsjettvirkningsanalyse](../budsjettpåvirkningsanalyse/) aggregerer begge et stort antall `f64`-kostnadsposter over flerårige horisonter. Når en modell må gå opp på centen, og en revisjon som regner om totalsummen for hånd må få *nøyaktig* det samme tallet, må selve aritmetikken være eksakt desimal, ikke flyttall.

## Matematikken

```
Naiv aggregering:           total = Σ f64(post_i)         — rekkefølgeavhengig drift
Valutasikker aggregering:   total = Σ Decimal(post_i)      — eksakt, reproduserbar

Anvendelse av en prosentjustering (f.eks. en reservebuffer):
  justert = total × multiplikator           — eksakt Decimal-resultat, kan ha flere
                                               desimaler enn eksponenten for
                                               valutaens minsteenhet
  avrundet = avrund(justert, valutaeksponent, avrundingsregel)  — avrundingsregelen
                                               (half-up kontra half-even/
                                               bankiersavrunding) må oppgis uttrykkelig
```

Legg merke til tostrinnsdisiplinen: å gange et eksakt `Decimal`-beløp med en multiplikator kan gi flere desimaler enn valutaen faktisk bruker (tre desimaler fra et beløp med to desimaler ganger en multiplikator med to desimaler, for eksempel). Den mellomliggende presisjonen avrundes *ikke* automatisk bort; bare et eksplisitt avrundingstrinn med en oppgitt avrundingsregel bringer den ned til valutaens faktiske eksponent for minsteenheten.

## Gjennomarbeidet eksempel

Tolv identiske månedlige fakturaer på $1 234,56 hver, summert med eksakt desimalaritmetikk: $1 234,56 × 12 = **$14 814,72**, nøyaktig. Sett det opp mot å summere `f64`-literalen `1234.56` tolv ganger i IEEE-754 dobbel presisjon, som kan drive med brøkdeler av en cent avhengig av summeringsrekkefølgen: en reell, dokumentert feilklasse, ikke et problem for en modell bygd på eksakt desimal `Money`-aritmetikk.

Bruk nå en vanlig reservebuffer for budsjettvirkning på 5 % (multiplikator 1,05) på denne totalsummen på $14 814,72: $14 814,72 × 1,05 = $15 555,456, tre desimaler, fordi multiplikasjonen er eksakt og ikke automatisk avrundes til valutaens to desimaler. Eksplisitt avrundet til 2 desimaler med bankiersavrunding (half-even) blir det nøyaktig **$15 555,46**.

## Kobling til programvareutvikling

Dette er den direkte, grunnleggende lærdommen bak «finansprogramvare bruker `Decimal`, ikke `float`». Den knytter seg uttrykkelig til dette arkivets moduler [total eierkostnad](../total-eierkostnad/) og [budsjettvirkningsanalyse](../budsjettpåvirkningsanalyse/), som begge for tiden summerer vanlige flyttallskostnader. Korrekthetsargumentet krever ikke at disse modellene migreres umiddelbart, men det angir nøyaktig *når* et system må gå opp på centen og derfor ikke må bruke binære flyttall til pengearitmetikken sin. Se også [eksakt cent-fordeling av kostnader](../eksakt-cent-fordeling-av-kostnader/) for det tilhørende problemet med å dele (i stedet for å summere) totalsummer uten å miste cent.

## Fallgruver

- **Å konvertere til `float` midt i kjeden**: å dra en pengeverdi ut til et flyttall midt i en beregning (noen `Money`-biblioteker gir til og med denne konverteringsmetoden et navn som «lossy» som en uttrykkelig advarsel) kaster stilltiende bort eksaktheten for hver beregning etter det punktet.
- **«Decimal er for tregt til å bry seg med»**: å avfeie eksakt desimalaritmetikk som unødvendig overhead, når korrekthet og revisjonsspor, ikke rå gjennomstrømning, er det som teller i finansiell rapportering.
- **Å anvende en reserveprosent uten å oppgi avrundingsregelen**: half-up kontra half-even (bankiersavrunding) kan endre den siste centen; selve avrundingskonvensjonen må være et oppgitt, etterprøvbart valg. Se [kostnads-nytteanalyse](../kostnads-nytteanalyse/) for HM Treasurys Green Book-veiledning om reserver og justering for optimismebias, nettopp den typen tall dette avrundingstrinnet anvendes på.

## Kilder

- Fowler M. «Patterns of Enterprise Application Architecture.» Addison-Wesley, 2002: `Money`-mønsteret.
- Goldberg D. «What Every Computer Scientist Should Know About Floating-Point Arithmetic.» ACM Computing Surveys, 1991.
- HM Treasury, The Green Book: veiledning om optimismebias og reserver for budsjettvirkningsmodellering. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
