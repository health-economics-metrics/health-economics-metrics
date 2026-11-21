# Humankapitalmetoden kontra friksjonskostnadsmetoden

Dette er de to konkurrerende metodene for å verdsette tapt produktivitet, fra sykdom, funksjonsnedsettelse eller død, i sykdomskostnads- og kostnads-nyttestudier. Humankapitalmetoden (HCA) verdsetter all tapt produksjon over hele fraværets varighet til lønnssatsen; friksjonskostnadsmetoden (FCM) verdsetter den bare for den kortere perioden en arbeidsgiver faktisk trenger for å gjenopprette produksjonen. Valget mellom dem endrer et anslag på indirekte kostnader med to ganger eller mer.

## Hvorfor det er viktig

Indirekte (produktivitets-)kostnader er en av de mest omstridte postene i helseøkonomi, nettopp fordi de to standardmetodene er så uenige. HCA behandler hver fraværsdag som en dag med produksjon økonomien virkelig mister, verdsatt til full lønn for hele varigheten, eller, ved død eller varig funksjonsnedsettelse, for resten av yrkeslivet. FCM hevder at i en økonomi med arbeidsledighet og slakk i arbeidsmarkedet reduserer mesteparten av et langt fravær ikke egentlig nasjonal produksjon når en arbeidsgiver har opplært en erstatter eller omfordelt arbeid; bare «friksjonsperioden», tiden det tar å gjenopprette produksjonen til det tidligere nivået, representerer et reelt tap. FCM gir derfor systematisk lavere, mer konservative anslag på indirekte kostnader enn HCA, og de to metodene er ikke utbyttbare fotnoter: de er ulike økonomiske teorier om hva «tapt produktivitet» betyr. Dette er også grunnen til at [NICEs referansetilfelle](../medisinsk-teknologivurdering/) som standard utelater produktivitetskostnader og rapporterer dem, hvis i det hele tatt, som en egen sensitivitetsanalyse fra samfunnsperspektiv i stedet for å blande dem inn i referansetilfellets ICER; se [analyseperspektiv](../analyseperspektiv/).

## Matematikken

```
Humankapitalmetoden:
HCA_kostnad = dagslønn × tapte_dager

Friksjonskostnadsmetoden (forenklet, avgrenset til friksjonsperioden):
FCM_kostnad = dagslønn × min(tapte_dager, friksjonsperiode_dager)

friksjonsperiode_dager = lands-/sektorspesifikt anslag på tiden for å
                         gjenopprette produksjonen (historisk ~85 dager i
                         nederlandske iMTA-retningslinjer for kostnadsberegning;
                         varierer fra land til land og revurderes jevnlig)
```

Hele uenigheten mellom metodene ligger i `min()`: HCA avgrenser aldri `tapte_dager`, så kostnaden fortsetter å vokse gjennom hele fraværet, mens FCM begrenser de telte dagene til friksjonsperioden, uansett hvor lenge det faktiske fraværet varer.

## Gjennomarbeidet eksempel

En ansatt er borte fra jobb `tapte_dager = 180` dager og tjener `dagslønn = £150`.

**Humankapitalmetoden**:

```
HCA_kostnad = 150 × 180 = £27 000
```

**Friksjonskostnadsmetoden**, med en friksjonsperiode på `friksjonsperiode_dager = 85` (den historiske nederlandske iMTA-referansen, slik retningslinjene revurderes jevnlig):

```
FCM_kostnad = 150 × min(180, 85) = 150 × 85 = £12 750
```

FCMs £12 750 er under halvparten av HCAs £27 000 for *det samme* fraværet: valget av metode alene endrer en sykdomskostnadssak vesentlig, før noen annen antakelse er berørt.

## Kobling til programvareutvikling

Dette kartlegger direkte hvordan et team verdsetter at en utvikler slutter:

- **Kostnadsberegning av avgang i HCA-stil**: å verdsette tapet som den avgåtte utviklerens fulle lønn så lenge stillingen står ledig. Dette er den naive versjonen av de fleste modeller for avgangskostnader, og den overvurderer tapet av samme grunn som HCA overvurderer produktivitetstap: den antar at den ledige kapasiteten var fullt produktiv hele tiden og at ingenting annet tok opp slakken. Se [bemanningsstabilitet](../bemanningsstabilitet/), som kvantifiserer kjeden av rekruttering/onboarding/dekning av ledig stilling som denne metoden mater inn i.
- **Kostnadsberegning av avgang i FCM-stil**: å verdsette tapet bare for den faktiske tiden det tar å besette stillingen og få en erstatter opp i fart, ingeniørenes «friksjonsperiode». Dette er det mer forsvarlige tallet for en forretningscase, nøyaktig slik FCM er det mer konservative valget i en sykdomskostnadsstudie.
- Den underliggende disiplinen er den samme som i [alternativkostnad](../alternativkostnad/): verdsett en fortrengt ressurs etter det som faktisk går tapt, ikke etter en overskriftsvarighet ganget med en sats.

## Fallgruver

- **Å blande HCA og FCM innenfor én analyse, eller å rapportere bare den ene uten å oppgi valget.** De samme fraværsdataene kan gi en forskjell på 2x eller mer i rapportert kostnad avhengig av metode; valget må oppgis, ikke gjemmes bort.
- **Å bruke HCA i en sak fra samfunnsperspektiv uten å markere den som sensitivitetsanalyse.** NICEs referansetilfelle utelater uttrykkelig produktivitetskostnader; et HCA-anslag fra samfunnsperspektiv hører hjemme i en scenarioanalyse, ikke i overskrifts-ICER-en.
- **Å anvende en av metodene på ulønnet eller ikke-markedsmessig arbeid (f.eks. omsorgsarbeid) uten justering.** Begge metodene antar en lønnssats som stedfortreder for verdi, noe som ikke overføres rent til arbeid uten markedslønn.

## Kilder

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. «The friction cost method for measuring indirect costs of disease.» Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. «Methods for the Economic Evaluation of Health Care Programmes.» 4th ed. Oxford University Press: tema om produktivitetskostnader.
- NICE health technology evaluations manual (PMG36): referansetilfellets perspektiv og valgfri veiledning om samfunnsperspektivet. <https://www.nice.org.uk/process/pmg36>
