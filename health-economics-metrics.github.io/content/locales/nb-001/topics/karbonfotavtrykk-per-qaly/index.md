# Karbonfotavtrykk per QALY

Karbon per QALY er et effektivitetsforhold: en intervensjons karbonutslipp (eller unngåtte utslipp) delt på QALY-ene den gir. Det er direkte analogt med kostnad per QALY, slik at en intervensjons karboneffektivitet kan vurderes ved siden av kostnadseffektiviteten. En «karbonjustert netto pengeverdi» går ett skritt videre: den gjør karbonpåvirkningen om til penger ved hjelp av de offisielle ikke-omsatte karbonverdiene i britiske Green Book og trekker den fra den vanlige [netto pengeverdien](../netto-pengeverdi/).

## Hvorfor det er viktig

NICE og NHS England forventer nå at miljøpåvirkning vurderes ved siden av kostnad og QALY. NHS har en offentlig netto null-forpliktelse: netto null for egne direkte utslipp innen 2040 og netto null for hele fotavtrykket i leverandørkjeden innen 2045. NICEs håndbok for evaluering av helseteknologi (PMG36) nevner miljømessig bærekraft som et fremvoksende hensyn i teknologivurdering. For et digitalt helseprodukt betyr dette at karbon er i ferd med å bli den fjerde pilaren i verdigrunnlaget, ved siden av kostnad, QALY og [dominans på effektivitetsfronten](../dominans-og-effektivitetsfronten/). Det erstatter ingen av dem, men er en dimensjon som en godt bygd forretningscase stadig oftere må rapportere.

## Matematikken

```
Karbon per QALY = totale_utslipp_tonn_co2e / totale_qaly
  (en negativ verdi betyr netto UNNGÅTTE utslipp per vunnet QALY —
  en dobbel gevinst: bedre helse og mindre karbon)

Omregnet karbonpåvirkning = utslipp_tonn_co2e × karbonverdi_per_tonn
  (negative utslipp × positiv verdi = negativ kostnad, altså en nytte)

Karbonjustert NMB = netto_pengeverdi − omregnet_karbonpåvirkning
```

Dette utvider ideen om kostnad/QALY-effektivitetsfronten med en andre akse, karbon per QALY, med den samme logikken «plott alle alternativer og se hva som er dominert» som i [dominans og effektivitetsfronten](../dominans-og-effektivitetsfronten/), men anvendt på karbon i stedet for kostnad.

## Gjennomarbeidet eksempel

En telemedisintjeneste erstatter fysiske besøk og unngår 5 000 bilturer i året på omtrent 8 kg CO2e hver: 40 tonn unngått CO2e, uttrykt som et negativt utslippstall (−40,0 tonn), og den gir 25 QALY i året:

```
Karbon per QALY = −40,0 / 25,0 = −1,6 tonn CO2e unngått per vunnet QALY
```

Med Green Books ikke-omsatte karbonverdi (illustrativt tall, sentral ikke-omsatt verdi 2023 ≈ £269/tonn CO2e; Green Book oppdaterer karbonverdiene hvert år, så kontroller på nytt før du siterer i en pågående analyse):

```
Omregnet karbonpåvirkning = −40,0 × £269 = −£10 760
```

En «kostnad» på −£10 760 er en nytte på £10 760. Hvis intervensjonens selvstendige netto pengeverdi er £500 000:

```
Karbonjustert NMB = £500 000 − (−£10 760) = £510 760
```

Karbonbesparelsen styrker saken i stedet for å svekke den: den doble gevinsten som rammen med negative utslipp skal gjøre synlig.

## Kobling til programvareutvikling

Dette er et aktuelt skjæringspunkt med KI- og skyøkonomi: karbonfotavtrykket fra beregningskraften som trengs for å trene og kjøre en KI-modell er nå en reell post i NHS' innkjøp, siden NHS-leverandøravtaler over bestemte terskler krever en Carbon Reduction Plan. [Skyens enhetsøkonomi](../skyens-enhetsøkonomi/) følger allerede kostnad per enhet beregningsutdata; karbon per QALY er den naturlige malen for et fremtidig mål «karbonkostnad per inferens» som utvider den modulen og enhetsøkonomien for inferens til miljødimensjonen, selv om det målet ennå ikke finnes.

## Fallgruver

- **Manipulering av systemgrensen**: å regne med bare direkte (Scope 1) utslipp og utelate utslipp i leverandørkjeden (Scope 3), som vanligvis utgjør størstedelen av det faktiske fotavtrykket til et digitalt helseprodukt.
- **Å bruke en utdatert karbonverdi**: Green Book oppdaterer sine ikke-omsatte karbonverdier hvert år, så ethvert sitert £/tonn-tall må dateres og ikke oppgis som en fast konstant.
- **Å behandle «karboneffektiv» som en erstatning for «kostnadseffektiv»**: en intervensjon med lave utslipp og lav verdi er fortsatt dårlig bruk av NHS-ressurser. Karbon er en fjerde pilar ved siden av kostnad og QALY, ikke en erstatning for noen av dem.

## Kilder

- NHS England, «Delivering a Net Zero National Health Service» (2020, oppdatert 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (oppdateres årlig; sentral ikke-omsatt verdi ≈ £269/tCO2e, 2023; datér ethvert sitat). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
