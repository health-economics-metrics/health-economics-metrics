# Eksakt cent-fordeling av kostnader

Å dele et totalbeløp (et felles tilskudd, en infrastrukturfaktura, et tall for budsjettvirkning) mellom flere mottakere med naiv prosentregning gir rutinemessig deler som ikke summerer seg tilbake til den opprinnelige totalsummen. Eksakt cent-fordeling er løsningen: en heltalls-/desimalmetode som arbeider i de minste valutaenhetene (cent) og garanterer at delene summerer seg til *nøyaktig* helheten, uansett hvor ujevnt det deler seg. Enhver programvareutvikler som må få en delt totalsum til å gå opp på centen (lønn, utbetaling av tilskudd, viderefakturering av felles tjenester) trenger dette mønsteret, ikke flyttallsprosenter.

## Hvorfor det er viktig

Dette er et navngitt, grunnleggende mønster i utvikling av virksomhetsprogramvare: Martin Fowlers *Patterns of Enterprise Application Architecture* (2002) dokumenterer `Money` og `Allocate` nettopp fordi «del $100 på tre» er et problem naiv kode stadig løser feil, og feil i det stille: feilen dukker først opp når noen avstemmer regnskapet og finner delene en cent for lave (eller for høye) i forhold til totalsummen. I helseøkonomi og NHS-økonomiarbeid er dette ikke akademisk: totalsummer for budsjettvirkning deles på lokasjoner, år eller direktorater; felles kostnader til infrastruktur og lisenser fordeles på avdelinger etter antall ansatte eller aktivitetsandel. Enhver slik deling må gå opp eksakt, for en økonomidirektør som får delbeløp som ikke summerer seg til totalen, slutter å stole på hele modellen.

## Matematikken

```
Naiv (feilaktig) metode:
  del_i = avrund(total × andel_i / Σ andeler)     — avrunder hver del for seg

Eksakt metode (største rest / «largest remainder allocation»):
  1. basis_i = avrund_ned(total_minsteenheter × andel_i / Σ andeler)   — bare hele minsteenheter (cent)
  2. rest = total_minsteenheter − Σ basis_i                             — gjenstående cent, alltid < antall mottakere
  3. fordel 1 ekstra minsteenhet til hver av de `rest` mottakerne med den
     største brøkresten fra trinn 1, til resten er brukt opp

Resultat: Σ del_i == total, alltid, ved konstruksjon.
```

Den eksakte metoden avrunder aldri en del isolert: den avrunder *hele fordelingen* som én operasjon, og det er det som får summeinvarianten til å holde.

## Gjennomarbeidet eksempel

Del $100,00 i tre like deler (`andeler = [1, 1, 1]`).

Naiv metode: $100,00 ÷ 3 = $33,333…, avrundet for seg til nærmeste cent gir $33,33 til hver mottaker. Summert: $33,33 × 3 = $99,99: en cent har forsvunnet, og ingen enkeltpost er så «feil» at du ser det ved å se på den.

Eksakt metode: `basis` = $33,33 til alle tre (9 999 minsteenheter til sammen fra `avrund_ned(10 000 / 3) = 3 333` cent hver), noe som etterlater en rest på 1 cent (10 000 − 9 999). Den ene overskytende centen går til mottakeren med størst brøkrest i divisjonen; hvilken mottaker det er, er en intern detalj i uavgjort-regelen, ikke noe en kaller bør stole på. To mottakere ender med $33,33 og én med $33,34, og de tre delene summerer seg til nøyaktig $100,00.

Dette er nøyaktig den aritmetikken en [budsjettvirkningsanalyse](../budsjettpåvirkningsanalyse/) trenger hver gang et totalt tall for budsjettvirkning må deles på lokasjoner, kohorter eller regnskapsår og avstemmes tilbake til den publiserte totalsummen. Se [valutasikker kostnadsaggregering](../valutasikker-kostnadsaggregering/) for det tilhørende problemet med å summere mange slike poster uten drift.

## Kobling til programvareutvikling

Dette er bokstavelig talt «Money-mønsteret» fra arkitektur for virksomhetsprogramvare: et grunnleggende, navngitt mønster for nøyaktig denne feilklassen, ikke et engangstriks. Reelle feil i økonomisk avstemming har gått i produksjon fra nettopp denne feilklassen: prosentfordelinger beregnet i `f64`, avrundet per mottaker og aldri kontrollert mot den opprinnelige totalsummen. Det knytter seg direkte til dette arkivets modul [total eierkostnad](../total-eierkostnad/), som for tiden summerer vanlige flyttallskostnader over år og alternativer. Den samme eksakthetsdisiplinen gjelder hver gang en TCO- eller budsjettvirkningstotal må fordeles og ikke bare summeres.

## Fallgruver

- **Prosent-så-avrund i stedet for største rest**: å fordele med flyttallsprosenter og avrunde hver mottaker for seg, noe som forsterker avrundingsfeil og sjelden summerer seg tilbake til totalen, særlig med mange mottakere.
- **Å se bort fra valutaers eksponent for minsteenheten**: å anta at alle valutaer har 2 desimaler; japanske yen har 0, noen valutaer har 3. En hjemmesnekret prosentfordeling hardkoder vanligvis 2 og går stilltiende i stykker for andre valutaer; en eksakt fordelingsrutine leser eksponenten fra selve valutaen (ISO 4217).
- **Å omfordele en allerede fordelt rest**: å kjøre fordelingsrutinen på nytt på det som er igjen etter en tidligere fordeling, uten idempotenssjekker, noe som kan godskrive den samme centen to ganger til samme mottaker.

## Kilder

- Fowler M. «Patterns of Enterprise Application Architecture.» Addison-Wesley, 2002: `Money`- og `Allocate`-mønstrene.
- ISO 4217: standard for valuta- og fondskoder, som definerer eksponenten for minsteenheten til hver valuta.
