# ICER-sammenligning på tvers av valutaer

Å sammenligne en [ICER](../inkrementell-kostnadseffektivitetsratio/) beregnet i ett lands valuta med et annet lands [betalingsvillighetsterskel](../betalingsvillighetsterskler/), eller å slå sammen kostnadsdata samlet inn i en multinasjonal studie, krever et eksplisitt, etterprøvbart valutaomregningstrinn. Velges omregningsmetoden feil, kan det samme underliggende grunnlaget snu en innføringsbeslutning, selv om ingenting i de kliniske dataene eller kostnadsdataene har endret seg.

## Hvorfor det er viktig

ISPORs metodeveiledning for multinasjonale kliniske studier (Willke et al., *Health Economics*, 1998) anbefaler å omregne ressurskostnader med **kjøpekraftsparitet (PPP)**, ikke markedsvalutakurser, når den reelle økonomiske verdien av ressurser sammenlignes mellom land, og å forbeholde markedets valutakurser det de faktisk er til for: å modellere reelle kontantbetalingsstrømmer over landegrensene. Å blande de to er en av de vanligste metodefeilene i multinasjonal HTA, nettopp fordi begge ser ut som «valutakursen» for den som ikke har lest veiledningen, og et regneark hindrer deg ikke i å gjøre det feil.

## Matematikken

```
icer_i_lokal_valuta = omregn(icer_i_kildevaluta, omregningsfaktor)

omregningsfaktoren bør være:
  PPP-omregningsfaktor    — for å sammenligne den reelle økonomiske verdien
                             av ressurser mellom land (anbefalt av ISPOR
                             for multinasjonal CEA)
  markedsvalutakurs       — bare for faktiske kontantbetalinger over
                             landegrensene

innfør hvis icer_i_lokal_valuta < lokal_terskel
```

Selve beslutningsregelen er den vanlige [ICER-terskelregelen](../betalingsvillighetsterskler/), `innfør hvis ICER < λ`; det metodiske spørsmålet i dette temaet handler helt og holdent om *hvilken omregningsfaktor* som gir tallet `icer_i_lokal_valuta` som regelen anvendes på.

## Gjennomarbeidet eksempel

Et legemiddels ICER fra en amerikansk studie er $45 000/QALY. Et hypotetisk importland setter sin egen illustrative terskel til £34 000/QALY (et hypotetisk landspesifikt tall kun for dette eksempelet: reelle terskler varierer fra land til land og endrer seg over tid, og må alltid ha kilde og dato).

**Med en PPP-omregningsfaktor på 0,72** (illustrativ, kun for dette gjennomarbeidede eksempelet): $45 000 × 0,72 = £32 400/QALY. £32 400 < £34 000 → **innfør**.

**Med en markedsvalutakurs på 0,79** i stedet (illustrativ): $45 000 × 0,79 = £35 550/QALY. £35 550 > £34 000 → **avslå**.

Den samme underliggende ICER-en på $45 000/QALY gir en innføringsbeslutning ved PPP-omregning og en avslagsbeslutning ved omregning til markedskurs. Dette er det konkrete eksempelet på hvorfor ISPOR-veiledningen behandler valget av omregningsfaktor som metodisk avgjørende: ikke en avrundingsdetalj, og ikke noe man lar ligge implisitt i en regnearkformel som ingen dobbeltsjekker.

## Kobling til programvareutvikling

Dette er helseøkonomiens speilbilde av et velkjent ingeniørfelt: korrekthet i i18n/l10n-prising i flere valutaer i kommersiell programvare, der en SaaS-prisside aldri stilltiende må sammenligne et `$`-beløp med en `£`-pris. Garantien på typenivå som en velbygd `Money`-type gir, nemlig sammenligningsmetoder som nekter å sammenligne ulike valutaer og tvinger frem et eksplisitt omregningstrinn først, er en direkte programvareteknisk parallell til det helseøkonomiske metodepunktet her: ikke sammenlign uomregnede tall på tvers av valutaer, og la aldri omregningstrinnet være implisitt eller udokumentert.

## Fallgruver

- **Å sammenligne beløp i ulike valutaer stilltiende**: ad hoc HTA-arbeid i regneark som trekker fra eller sammenligner et dollarbeløp og et pundbeløp uten først å omregne. Dette er en feilklasse som en ekte valutabevisst `Money`-type fanger opp ved konstruksjon i stedet for å la den bli en stille feil.
- **Å forveksle markedsvalutakurs med PPP**: den vanligste metodefeilen i multinasjonal HTA ifølge ISPOR-veiledningen. De to tallene kan avvike betydelig og besvarer ulike spørsmål (reell økonomisk verdi mot faktisk kontantstrøm).
- **Å la være å datere valutakursen eller PPP-indeksen som er brukt**: begge endrer seg over tid, så enhver sitert omregningsfaktor må dateres på samme måte som dette arkivet datérer sine øvrige referansetall (Green Books karbonverdier, verdien av et forebygd dødsfall og så videre).

## Kilder

- Willke RJ, Glick HA, Polsky D, Schulman K. «Estimating country-specific cost-effectiveness from multinational clinical trials.» *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
