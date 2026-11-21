# Markov-kohortsimulering

En Markov-kohortmodell er den vanlige HTA-modelleringsteknikken for intervensjoner der effektene utfolder seg over flere tidsperioder (sykluser) og ikke i ett enkelt trekk. En hypotetisk kohort starter helt i én helsetilstand, og i hver syklus flytter et fast sett overgangssannsynligheter deler av kohorten mellom tilstander; kostnader og QALY påløper hver syklus i forhold til hvor stor del av kohorten som befinner seg i hver tilstand, og diskonteres tilbake til nåverdi. Enhver programvareutvikler som modellerer en flerårig forretningscase for digital helse, der brukere eller pasienter beveger seg mellom tilstander som «engasjert», «falt fra» eller «avsluttet» over tid, bygger den samme strukturen.

## Hvorfor det er viktig

De fleste reelle beslutninger om helseteknologi er ikke engangssammenligninger av kostnad og utfall i én enkelt periode. En kronisk tilstand utvikler seg, kommer tilbake, responderer på behandling eller dreper, over år, og en [kostnadseffektivitetsanalyse](../kostnadseffektivitetsanalyse/) for én periode kan ikke representere det. Innsendelser til NICE, ICER og CADTH for intervensjoner ved kroniske sykdommer, vurdert gjennom [medisinsk teknologivurdering](../medisinsk-teknologivurdering/), er nesten alltid bygd som Markov-kohortmodeller med en livslang tidshorisont, fordi alternativet, å modellere hver mulig individuell pasientbane, er uhåndterlig i stor skala. Markov-modellen på kohortnivå bytter bort litt realisme på individnivå (den kan vanskelig representere hukommelse om tidligere tilstander, derav «Markov»: fremtiden avhenger bare av den nåværende tilstanden) mot en modell som er gjennomsiktig, etterprøvbar og rask nok til å kjøres tusenvis av ganger i en [probabilistisk sensitivitetsanalyse](../probabilistisk-sensitivitetsanalyse/).

## Matematikken

```
Kohortoppdatering for én syklus (radvektor × overgangsmatrise):
  ny_tilstand[j] = sum_i tilstand[i] * overgangsmatrise[i][j]

Kostnad for én syklus:
  syklus_kostnad = sum_s tilstand[s] * kostnad_per_syklus[s]

QALY for én syklus:
  syklus_qaly = sum_s tilstand[s] * nytteverdi[s] * sykluslengde_år

Full simulering over `sykluser` sykluser, diskontert med `diskonteringsrente`:
  total_diskontert_kostnad = sum_{t=0}^{sykluser-1} syklus_kostnad(tilstand_t) / (1 + diskonteringsrente)^t
  total_diskontert_qaly    = sum_{t=0}^{sykluser-1} syklus_qaly(tilstand_t)    / (1 + diskonteringsrente)^t
  der tilstand_0 = startfordeling, tilstand_{t+1} = fremfør_kohort(tilstand_t, overgangsmatrise)
```

Å diskontere hver syklus tilbake til nåverdi bruker nøyaktig formelen fra [diskontering og tidspreferanse](../diskontering-og-tidspreferanse/), anvendt syklus for syklus i stedet for år for år.

## Gjennomarbeidet eksempel

**Klinisk**: en modell med 2 tilstander, `Frisk` og `Død`, der 10 % av kohorten dør per syklus og `Død` er absorberende (selvovergangssannsynligheten er 1,0; uten den selvløkken ville kohortmassen forsvinne etter én syklus i `Død`). Kohorten starter helt `Frisk`, koster £1 000 per syklus mens den er `Frisk` (£0 når `Død`) og vinner 0,8 QALY per år mens den er `Frisk`. Simulert over 3 årlige sykluser med NICEs diskonteringsrente på 3,5 %:

```
Syklus 0: tilstand = [1,00, 0,00] (100 % Frisk)
  kostnad = £1 000,00, qaly = 0,800, diskonteringsfaktor = 1,000000
  diskontert: kostnad = £1 000,00, qaly = 0,8000

Syklus 1: tilstand = [0,90, 0,10] (90 % Frisk, 10 % Død)
  kostnad = £900,00, qaly = 0,720, diskonteringsfaktor = 0,966184
  diskontert: kostnad = £869,57, qaly = 0,6957

Syklus 2: tilstand = [0,81, 0,19] (81 % Frisk, 19 % Død)
  kostnad = £810,00, qaly = 0,648, diskonteringsfaktor = 0,933511
  diskontert: kostnad = £756,14, qaly = 0,6049

Total diskontert kostnad ≈ £2 625,71
Totale diskonterte QALY ≈ 2,1006
```

Hver syklus' tilstand er forrige syklus' tilstand ført gjennom overgangsmatrisen: 90 % av de 90 % som fortsatt er `Frisk` i syklus 1, forblir `Frisk` i syklus 2 (0,9 × 0,9 = 0,81), mens de øvrige 19 % nå er døde (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Merk at kohorten aldri tømmer `Frisk` helt: med en konstant dødelighet på 10 % per syklus og uten gjeninntreden avtar andelen `Frisk` geometrisk i stedet for å nå null ved noe endelig antall sykluser.

## Kobling til programvareutvikling

For hvordan en flersyklusmodell i HTA brukes i en reell vurdering, se [medisinsk teknologivurdering](../medisinsk-teknologivurdering/): referansetilfellet som styrer hvilken diskonteringsrente, nyttekilde og tidshorisont en innsendt Markov-modell må bruke.

En Markov-kohortmodell er strukturelt en tilstandsmaskin med sannsynlighetsbaserte overganger, kjørt i et fast antall tikk, der verdien av hvert tikk diskonteres. Den samme formen simulerer en brukerkohorts retensjon/tilstandsoverganger over tid; se [DORA-mål](../dora-mål/) for driftssikkerhetsversjonen av «hvor stor del av systemet er i en degradert tilstand i denne perioden, og hva koster det». Konkret:

- **Retensjons-/frafallsmodellering** er en Markov-kohortmodell med tilstander som «aktiv», «i faresonen» og «avsluttet»: en fast månedlig overgangsmatrise, kjørt over 12 eller 24 månedssykluser, forteller deg forventet antall aktive brukere (og inntekt) i en hvilken som helst fremtidig måned, på samme måte som `Frisk`/`Død` forteller deg forventede overlevende.
- **Driftssikkerhet og hendelsesøkonomi**: et systems tilstander (friskt, degradert, nede) kan modelleres på samme måte, med en «kostnad per syklus» for nedetidsskade som påløper mens systemet befinner seg i tilstandene degradert/nede. Det gjør et argument om hendelsesfrekvens om til et argument om diskontert kostnad, som kan sammenlignes med kostnaden ved driftssikkerhetsarbeidet som ville endre overgangssannsynlighetene.
- **Absorberende tilstander som sluttilstander**: `Død` i en klinisk modell er nøyaktig et «kansellert abonnement» eller «varig offline» i en programvaremodell: begge trenger en eksplisitt selvovergangssannsynlighet på 1,0, ellers mister simuleringen stilltiende masse.

## Fallgruver

- **Overgangssannsynligheter som ikke summerer seg til 1 per rad.** En rad som summerer seg til mer eller mindre enn 1, får kohorten til stilltiende å «lekke» eller «vokse» masse hver syklus; kontroller alltid radsummene før du stoler på en models utdata, siden selve modellstrukturen ikke varsler om feilen.
- **For grov sykluslengde for sykdommens reelle dynamikk.** En årlig syklus for en tilstand som endrer seg betydelig i løpet av uker, undervurderer overganger som skjer midt i syklusen; velg en sykluslengde som er kort i forhold til hvor raskt den modellerte prosessen faktisk beveger seg.
- **Å glemme selvløkken til en absorberende tilstand.** En absorberende tilstand (død, varig avslutning) trenger en selvovergangssannsynlighet på nøyaktig 1,0. Utelates den, fordamper kohortmassen i den tilstanden etter én enkelt syklus og undervurderer kumulative kostnader eller QALY-tap.
- **Å anse modellen som validert fordi den kjører.** En Markov-kohortmodell med plausibelt utseende overgangssannsynligheter kan fortsatt være strukturelt feil (manglende tilstander, feil absorberende oppførsel); valider mot kjente epidemiologiske referanser (f.eks. stemmer den modellerte 5-årsoverlevelsen med publiserte overlevelseskurver) før du stoler på utdataene.

## Kilder

- Sonnenberg FA, Beck JR. «Markov models in medical decision making: a practical guide.» Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. «An introduction to Markov modelling for economic evaluation.» PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
