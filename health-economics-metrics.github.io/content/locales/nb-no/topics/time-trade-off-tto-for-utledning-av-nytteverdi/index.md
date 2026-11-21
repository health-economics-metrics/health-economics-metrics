# Time trade-off (TTO) for utledning av nytteverdi

TTO er en standardmetode for å hente ut nytteverdien til en helsetilstand direkte fra en respondent, i stedet for å finne på en. Det er en av utledningsmetodene, ved siden av standard gamble og diskrete valgeksperimenter, som lager verdisettene bak instrumenter som [EQ-5D](../eq-5d/), og dermed bak de fleste nedstrøms [QALY](../kvalitetsjustert-leveår/)-beregninger.

## Hvorfor det er viktig

Hver nyttevekt som mates inn i en QALY-beregning, måtte komme fra et sted. TTO er hvordan: for en tilstand som regnes som bedre enn døden, blir en respondent spurt om hvor mange år `X` i full helse vedkommende ville regne som likeverdige med `T` år i den svekkede tilstanden (`X < T`); nytten er `X / T`. For en tilstand som enkelte respondenter regner som verre enn døden, bryter standardformelen sammen (den kan ikke representere nytteverdier under null på en ryddig måte), så en utvidet TTO brukes i stedet. En programvareutvikler eller analytiker som behandler en nyttevekt som en gitt inndata, uten å vite at den krevde en validert utledningsprotokoll for å bli til, er ett steg unna et tall vedkommende ikke kan forsvare hvis det blir utfordret.

## Matematikken

```
Standard TTO (tilstand bedre enn døden):
  nytte = tid_i_full_helse / tid_i_svekket_tilstand

Utvidet TTO (tilstand verre enn døden):
  nytte = -tid_byttet_mot_døden / (total_varighet - tid_byttet_mot_døden)
```

`tid_i_full_helse` / `tid_i_svekket_tilstand`: år `X` i full helse vurdert som likeverdige med `T` år i den svekkede tilstanden. `tid_byttet_mot_døden` / `total_varighet`: i formuleringen for verre enn døden, årene `a` av et gjenværende liv på `T` år som respondenten ville byttet mot umiddelbar død, fordi vedkommende foretrekker `T − a` år i full helse etterfulgt av døden fremfor `T` år i tilstanden som er verre enn døden. Resultatet er negativt, forankret slik at død = 0.

## Gjennomarbeidet eksempel

**Standard**: en respondent er i en svekket tilstand i 10 år og er likegyldig overfor 7 år i full helse: nytte = 7 / 10 = **0,7**.

**Verre enn døden**: over et gjenværende liv på 10 år ville respondenten byttet 2 år mot umiddelbar død; vedkommende foretrekker 8 år i full helse etterfulgt av døden fremfor 10 år i tilstanden som er verre enn døden: nytte = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Kobling til programvareutvikling

Det samme punktet som en DevEx- eller engasjementsundersøkelse støter på når den ber folk vurdere noe på en uprøvd skala fra 0–10, gjelder her omvendt: TTO finnes nettopp fordi «bare be folk vurdere det» ikke i seg selv er en validert utledningsmetode. Før du bygger en sammensatt indeks (en DevEx-score, en engasjementsindeks, en utbrenthetsskala) oppå et selvvurdert tall, spør hva som utledet det og om den metoden var validert: det samme spørsmålet helseøkonomer stiller til en nyttevekt før den går inn i en QALY.

## Fallgruver

- **Generalisering av individuelle verdier**: TTO-verdier hentes fra et *utvalg* av allmennheten (eller pasienter), ikke fra individet hvis behandling det besluttes om; å bruke én respondents TTO-verdi som om den generaliserer, er en utvalgsfeil.
- **Feil formulering for tilstanden**: standard TTO-formelen forutsetter at tilstanden er entydig bedre enn døden; anvendes den på en tilstand som enkelte respondenter ville regnet som verre enn døden, uten å bytte til den utvidede formuleringen, gir det stilltiende en feil (positiv) nytte.
- **Usammenlignbare varigheter**: TTO-verdier utledet med ulike gjenværende levetider `T` for sammenligningen verre-enn-døden er ikke direkte sammenlignbare uten å sjekke at studiedesignet holdt `T` konstant.

## Kilder

- Torrance GW. «Social preferences for health states: an empirical evaluation of three measurement techniques.» Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. «Measuring preferences for health states worse than death.» Med Decis Making. 1994;14(1):9-18.
