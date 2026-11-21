# Verdien av et statistisk liv (VSL)

Verdien av et statistisk liv (VSL), på britisk bruk «verdien av et forebygd dødsfall» (VPF), er beløpet en *befolkning* kollektivt er villig til å betale for å redusere risikoen for ett statistisk dødsfall, utledet fra studier av avveiningen mellom lønn og risiko (hvor mye ekstra lønn arbeidstakere krever for farligere jobber) og spørreundersøkelser om uttrykte preferanser. Det er ikke prisen på livet til noe identifisert individ; det er en befolkningsrisikokonstruksjon, og en programvareutvikler som bygger risikoreduserende systemer, som triagealgoritmer, ambulansedisponering og sikkerhetsovervåking, må vite at den kommer fra en annen teoretisk tradisjon enn [betalingsvillighetsterskler](../betalingsvillighetsterskler/).

## Hvorfor det er viktig

VSL/VPF er standardverktøyet for å gjøre reduksjoner i dødelighetsrisiko om til penger i regulatorisk kostnads-nytteanalyse: trafikksikkerhet, miljøregulering og enkelte folkehelseintervensjoner kjører alle sine forretningscaser gjennom det. HM Treasurys Green Book publiserer et VPF-tall utledet fra britisk arbeidsmarkeds- og spørreundersøkelsesevidens, og Department for Transport bruker det direkte i vurdering av trafikksikkerhet. Dette er en reelt annerledes verdsettingstradisjon enn metodikken QALY × betalingsvillighetsterskel: terskeltilnærmingen verdsetter helsegevinster mot det et helse*budsjett* for øyeblikket frembringer i marginen, mens VSL/VPF verdsetter risikoreduksjon mot det folk i et arbeidsmarked eller en spørreundersøkelse avslører at de ville betale for den. De to rammeverkene lar seg ikke alltid forene, og å bruke begge i samme sak uten å erkjenne det er en vanlig analysefeil.

## Matematikken

```
Unngåtte dødsfall = befolkning × risikoreduksjon_per_person
  (risikoreduksjon_per_person er en sannsynlighet, f.eks. 0,000001 =
   reduksjon på 1 av en million i årlig dødelighetsrisiko)

Omregnet dødelighetsnytte = unngåtte_dødsfall × verdi_av_forebygd_dødsfall
```

## Gjennomarbeidet eksempel

En region med 800 000 mennesker har nytte av en digital disponerings-/triageintervensjon for trafikksikkerhet som reduserer hver persons årlige dødelighetsrisiko med 1 av en million (0,000001):

```
Unngåtte dødsfall = 800 000 × 0,000001 = 0,8
```

Med Storbritannias verdi av et forebygd dødsfall, £2 180 000 (tall fra HM Treasury/DfT, 2023/24-priser; Green Book oppdaterer det hvert år, så kontroller på nytt før du siterer i en pågående analyse):

```
Omregnet dødelighetsnytte = 0,8 × £2 180 000 = £1 744 000/år
```

Litt under £1,75 millioner i året i omregnet dødelighetsnytte, fra en risikoreduksjon de fleste av de berørte aldri ville lagt merke til individuelt.

## Kobling til programvareutvikling

Team for sikkerhetskritisk programvare, som fastvare til medisinsk utstyr, programvare til autonome kjøretøy og industrielle styringssystemer, står overfor akkurat dette prisingsproblemet når de bygger kostnads-nyttecasen for en sikkerhetsinvestering: hvordan priser du «forebygge én katastrofal feil» når feilen er sjelden, alvorlig og spredt over en stor brukerpopulasjon? VSL/VPF er et flere tiår gammelt, offentlig dokumentert presedens fra virkeligheten for å sette et tall på en sjelden, alvorlig risikoreduksjon på befolkningsnivå: den samme argumentasjonsformen som å prise en SRE-investering mot et sjeldent katastrofalt avbrudd, bare med et dødelighetsutfall i stedet for et nedetidsutfall.

## Fallgruver

- **Å behandle VSL som «prisen på et identifisert liv»**: det er det ikke. VSL/VPF er en statistisk befolkningskonstruksjon utledet fra avveininger av risikoreduksjon over mange mennesker, ikke en verdsetting av en bestemt persons liv eller død.
- **Dobbelttelling mot en QALY-basert beregning av netto pengeverdi**: å bruke et VSL/VPF-tall og en separat QALY × terskel-beregning i samme sak uten å forene dem, teller stilltiende verdien av de samme unngåtte dødsfallene to ganger. Velg ett rammeverk for en gitt sak.
- **Å flytte et VSL-anslag mellom kontekster uten justering**: et VSL utledet fra ett lands arbeidsmarked, eller fra lønns-risikodata for yrkesaktive, anvendt ujustert på en annen inntektskontekst eller en annen befolkning (barn, pensjonister), er et langvarig, virkelig omstridt metodisk spørsmål, ikke et løst.

## Kilder

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation: tilleggsveiledning om Value of a Prevented Fatality (2023/24-priser; Green Book-verdier oppdateres årlig). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, «Mortality Risk Valuation» (for den amerikanske VSL-tradisjonen, sitert til kontrast mot det britiske VPF-tallet ovenfor). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. «The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World.» J Risk Uncertain. 2003;27(1):5-76.
