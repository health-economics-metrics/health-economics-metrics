# Verdsetting av realopsjoner

Verdsetting av realopsjoner anvender logikken fra prising av finansielle opsjoner på reelle (ikke finansmarkedshandlede) investeringsbeslutninger, nærmere bestemt *opsjonen til å utvide* et prosjekt senere hvis det lykkes, uten å være forpliktet til det. En forenklet binomialmodell med én periode (Cox, Ross, Rubinstein, 1979) verdsetter denne fleksibiliteten direkte og gjør «la oss levere smått og se» fra en magefølelse til et innprisset tall.

## Hvorfor det er viktig

En statisk nåverdiberegning priser et prosjekt som et alt-eller-ingenting-veddemål: finansiere det eller ikke, i dagens skala, for alltid. Reelle prosjekter, og særlig trinnvise utrullinger innen digital helse, blir sjelden veddet på slik: et helsesystem kan finansiere en liten pilot, se hva som skjer, og først forplikte mer penger hvis den virker. Den fleksibiliteten har reell verdi, og å ignorere den undervurderer trinnvise investeringer systematisk i forhold til engangsinvesteringer, noe som er stikk motsatt for innkjøpsprosesser som belønner det tryggere utseende trinnvise forslaget. Verdsetting av realopsjoner priser selve fleksibiliteten, slik at et trinnvist forslag kan sammenlignes rettferdig med et alternativ med full forpliktelse i stedet for å bli straffet for å se mindre ut på en naiv nåverdilinje.

## Matematikken

```
Risikonøytral sannsynlighet for «opp»-tilstanden:
  p = ((1 + risikofri_rente) − nedfaktor) / (oppfaktor − nedfaktor)

Utvidelsesutbetaling i hver tilstand (avgrenset til null — å utvide er valgfritt):
  utbetaling_opp = max(prosjektverdi × oppfaktor − utvidelseskostnad, 0)
  utbetaling_ned = max(prosjektverdi × nedfaktor − utvidelseskostnad, 0)

Opsjonsverdi (diskontert forventet utbetaling):
  opsjonsverdi = (p × utbetaling_opp + (1 − p) × utbetaling_ned) / (1 + risikofri_rente)

Utvidet nåverdi = statisk_nåverdi + opsjonsverdi
```

Prosjektets verdi enten stiger (`oppfaktor`) eller faller (`nedfaktor`) frem til neste beslutningspunkt. Utvidelsen utøves bare hvis den er lønnsom i den tilstanden; nedre grense på null i utbetalingen er det som gjør dette til en ekte *opsjon* og ikke en forpliktelse. For å prise opsjonen til å samle informasjon først, i stedet for opsjonen til å utvide senere, se [forventet verdi av perfekt informasjon](../forventet-verdi-av-perfekt-informasjon/). For kostnaden ved å vente med den beslutningen, se [kostnad ved forsinkelse](../kostnad-ved-forsinkelse/).

## Gjennomarbeidet eksempel

En pilot for en digital tjeneste med `prosjektverdi = £1 000 000`, en mulig stigning til 1,5× eller fall til 0,5× frem til neste beslutningspunkt, en risikofri rente på 8 % og en utvidelseskostnad på £600 000:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

utbetaling_opp = max(1 000 000 × 1,5 − 600 000, 0) =  900 000
utbetaling_ned = max(1 000 000 × 0,5 − 600 000, 0) = max(−100 000, 0) = 0

Grensen betyr noe: opsjonen ville IKKE blitt utøvd hvis markedet skuffer —
utvidelseskostnaden på £600 000 overstiger de £500 000 prosjektet ville
vært verdt i ned-tilstanden.

opsjonsverdi = (0,58 × 900 000 + 0,42 × 0) / 1,08
             = 522 000 / 1,08
             ≈ £483 333,33
```

Legger man opsjonsverdien til et statisk nåverdigrunnlag på £200 000: utvidet nåverdi = 200 000 + 483 333,33 ≈ **£683 333,33**. Å rapportere bare den statiske nåverdien på £200 000, uten denne opsjonsverdien, ville undervurdert det trinnvise prosjektets reelle verdi med mer enn det dobbelte.

## Kobling til programvareutvikling

Dette er den formelle versjonen av «lever en minimumsversjon nå, behold opsjonen til å investere videre hvis den tar av»: direkte relevant for en trinnvis utrulling av et digitalt helseprodukt, strukturelt parallell til rammen for rekkefølgebestemmelse under usikkerhet i [kostnad ved forsinkelse](../kostnad-ved-forsinkelse/) og [WSJF/CD3](../wsjf-og-cd3/), og utfyller [forventet verdi av perfekt informasjon](../forventet-verdi-av-perfekt-informasjon/) og [forventet verdi av utvalgsinformasjon](../forventet-verdi-av-utvalgsinformasjon/): alle tre priser fleksibilitet eller informasjon under usikkerhet, fra ulike vinkler.

## Fallgruver

- **Å låne risikonøytral prising uten forutsetningen om en handlet eiendel som den bygger på**: realopsjonsmodeller låner risikonøytral sannsynlighet fra prising av finansielle opsjoner, som forutsetter at den underliggende verdien er en *handlet* eiendel; for et virkelig ikke-handlet reelt prosjekt er dette en modelleringsbekvemmelighet, ikke et bokstavelig markedsfaktum.
- **Å behandle `oppfaktor`/`nedfaktor` som frie parametere**: binomialens opp/ned-inndata er selv antakelser som krever begrunnelse, ikke frie parametere valgt for å gi et ønsket svar.
- **Å rapportere bare opsjonsverdien**: realopsjonsverdi er *additiv* til et frittstående prosjekts statiske nåverdi; en vanlig feil er å rapportere bare opsjonsverdien og droppe grunntilfellet, noe som overdriver saken hvis den statiske nåverdien er negativ og undervurderer den (som i eksempelet ovenfor) når den statiske nåverdien utelates helt.

## Kilder

- Cox JC, Ross SA, Rubinstein M. «Option pricing: a simplified approach.» J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. «A real options approach to watchful waiting: theory and an illustration.» Med Decis Making. 2007;27(2):178-88: knytter realopsjoner direkte til en helseøkonomisk beslutningskontekst. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
