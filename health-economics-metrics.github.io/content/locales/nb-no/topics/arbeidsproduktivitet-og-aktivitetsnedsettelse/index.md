# Arbeidsproduktivitet og aktivitetsnedsettelse (WPAI)

WPAI er et validert selvrapporteringsskjema (Reilly, Zbrozek, Dasbach, 1993) som måler hvor mye et helseproblem påvirker lønnet arbeid og daglige aktiviteter, vanligvis over de siste 7 dagene. Det deler tapet i *fravær* (absenteeism), arbeidstid som bokstavelig talt er gått tapt, og *tilstedeværelse med nedsatt yteevne* (presenteeism), redusert produktivitet mens man fysisk er på jobb, og det siste er vanligvis den største og mest skjulte kostnadskomponenten.

## Hvorfor det er viktig

Enkle tellinger av sykedager ser bare fraværet. En kliniker eller kunnskapsarbeider som aldri tar en dag fri, men jobber med 60 % kapasitet gjennom en kronisk tilstand, bidrar med null til et fraværsregister og skaper likevel et stort, reelt produktivitetstap: WPAI er utformet nettopp for å gjøre denne usynlige kostnaden synlig. Fordi det er et validert instrument og ikke en skreddersydd undersøkelse, kan poengsummene brukes i evidenspakker om [pasientrapporterte utfall](../pasientrapporterte-utfall/) og i sykdomskostnadsstudier uten at vurdereren må validere målet på nytt. Som et selvrapporteringsinstrument er det selv en form for PROM, kjennetegnet først og fremst ved sitt fokus på arbeid og aktivitet fremfor symptomer eller livskvalitet.

## Matematikken

```
Fravær % = timer_tapt_på_grunn_av_helse / (timer_tapt_på_grunn_av_helse + arbeidede_timer) × 100

Tilstedeværelse med nedsatt yteevne %  = selvvurdert 0–10 nedsettelse under arbeid, × 10
                  (hentet direkte fra spørreskjemaet, ikke utledet her)

Samlet arbeidsnedsettelse % =
    Fravær% + (1 − Fravær%/100) × Nedsatt_yteevne%
    (kombinerer de to slik at totalen aldri kan overstige 100 %)

Produktivitetskostnad = Samlet_arbeidsnedsettelse% / 100 × inntekt_i_perioden
```

Formelen for samlet nedsettelse er med vilje ikke en enkel sum: å legge sammen de to prosentene direkte kunne overstige 100 %, så nedsatt yteevne anvendes bare på den *gjenværende* (ikke-fraværende) delen av arbeidstiden.

## Gjennomarbeidet eksempel

En ansatt med migrene er planlagt for en 40-timers uke, men går glipp av 4 timer av den:

```
tapte_timer = 4, arbeidede_timer = 36
Fravær% = 4 / (4 + 36) × 100 = 10 %
```

Vedkommende vurderer separat produktivitetseffekten under arbeid som 3 av 10 i WPAI-skjemaet, altså `Nedsatt_yteevne% = 30 %` (dette trinnet er et rått svar fra spørreskjemaet, ikke noe som er utledet fra andre tall):

```
Samlet arbeidsnedsettelse% = 10 + (1 − 10/100) × 30
                           = 10 + 0,9 × 30
                           = 10 + 27
                           = 37 %
```

Over en 5-dagers uke med inntekt på £800 (£160/dag):

```
Produktivitetskostnad = 37/100 × 800 = £296
```

Legg merke til at en naiv telling av sykedager bare ville ha registrert de 4 timene (10 %) som ble tapt: komponenten nedsatt yteevne nesten tredobler den reelle nedsettelsen når den regnes med.

## Kobling til programvareutvikling

Dette kartlegger direkte helsemål for ingeniørteam:

- **Fravær** er sykefravær og betalt ferie: synlig, allerede registrert og den enkle delen.
- **Tilstedeværelse med nedsatt yteevne** er den utbrente eller kontekstbyttesprengte utvikleren som er til stede på hvert stand-up, men opererer med redusert kapasitet: vanligvis den største og mest skjulte kostnaden, usynlig for hode- eller oppmøtedata. Den dukker i stedet opp som redusert gjennomstrømning i [DORA](../dora-mål/)- og [flytmål](../flytmål/), eller som tregere utbedring av nettopp den [tekniske gjelden](../teknisk-gjeld/) hvis «rente» forverrer nedsettelsen ytterligere.
- Ingeniørlærdommen er den samme som den kliniske: å måle bare fravær og kalle det «produktivitetstap» undervurderer systematisk den reelle kostnaden, fordi det går glipp av alle som er til stede, men nedsatt.

## Fallgruver

- **Erindringsskjevhet ved selvrapportering.** Et tilbakeblikksvindu på 7 dager er utsatt for de samme rapporteringsforvrengningene som all retrospektiv selvrapportering.
- **Å behandle 0–10-skalaen for nedsatt yteevne som en ekte fysisk måling.** Den er ordinal, hentet ut ved selvvurdering, ikke en validert fysisk størrelse; å behandle forskjeller på den som strengt lineære eller intervallskalerte er en modelleringsbekvemmelighet, ikke et validert fysisk faktum.
- **Å slå sammen poengsummer på tvers av WPAI-varianter.** WPAI har flere tilstandsspesifikke versjoner: WPAI:GH (generell helse), WPAI:SHP (spesifikt helseproblem) og sykdomsspesifikke varianter; poengsummer fra ulike varianter må ikke slås sammen eller sammenlignes uten først å sjekke at det er samme instrumentversjon.

## Kilder

- Reilly MC, Zbrozek AS, Dasbach EJ. «The validity and reproducibility of a work productivity and activity impairment instrument.» PharmacoEconomics 1993;4(5):353-65.
- WPAI-instrumentdokumentasjon, Reilly Associates: den offisielle poengreferansen. <https://www.reillyassociates.net/>
