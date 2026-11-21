# Antall som må screenes (NNS)

NNS er antallet personer som må screenes, ikke bare behandles, for å forebygge **ett** uheldig utfall over en definert oppfølgingsperiode, gitt befolkningens grunnrisiko og den relative risikoreduksjonen som tidlig oppdagelse og behandling oppnår. Det er NNTs analog på screeningprogramnivå: NNT spør hvor mange som må *behandles* for å forebygge ett utfall; NNS spør hvor mange som må gjennom hele *screen-og-deretter-behandle*-løpet for å komme dit.

## Hvorfor det er viktig

Rembold introduserte NNS i 1998 nettopp for at screeningprogrammer skulle kunne sammenlignes på samme grunnlag som behandlinger, fordi en screeningtests overskrifts-tall for relativ risikoreduksjon skjuler to ting som en behandlings ikke skjuler: grunnrisikoen i befolkningen som faktisk inviteres til screening, og det faktum at alle som screenes bærer testens kostnad og byrden av falske positive, ikke bare mindretallet som senere har nytte av den. Den britiske National Screening Committees kostnadseffektivitetsport (se [screeningøkonomi](../screeningøkonomi/)) er bygd på nøyaktig dette skillet: et screeningprogram med en imponerende relativ risikoreduksjon i en befolkning med lav grunnrisiko kan fortsatt ha et NNS i tusenvis, og da blir programkostnaden per forebygd utfall det egentlige spørsmålet.

## Matematikken

```
NNS = 1 / (grunnrisiko × relativ_risikoreduksjon)

grunnrisiko              = sannsynligheten for utfallet i den screenede
                           befolkningen over oppfølgingsperioden (0–1)
relativ_risikoreduksjon  = proporsjonal risikoreduksjon oppnådd av
                           screeningmuliggjort tidlig behandling (0–1)

Programkostnad per forebygd utfall = NNS × kostnad_per_screening
```

Sammenlign direkte med [NNT](../antall-som-må-behandles/): NNS folder effektiviteten i hele trakten screening → diagnose → behandling sammen i ett tall, mens NNT allerede forutsetter at pasienten er diagnostisert og starter behandling.

## Gjennomarbeidet eksempel

Målgruppen for et screeningprogram har en grunnrisiko for hendelsen på 2 % over studieperioden (`grunnrisiko = 0,02`), og tidlig oppdagelse oppnår en relativ risikoreduksjon på 25 % (`relativ_risikoreduksjon = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

200 personer må screenes for å forebygge ett utfall.

Ved £50 per screening:
Programkostnad per forebygd utfall = 200 × £50 = £10 000
```

Det tallet på £10 000 er det som bør veies mot kostnaden ved selve utfallet og QALY-ene det ville ha kostet: den samme sammenligningen som [forebyggingsøkonomi](../forebyggingsøkonomi/) gjør for forebyggingsprogrammer generelt.

## Kobling til programvareutvikling

NNS er «hvor mange brukere, hendelser eller forespørsler må gå gjennom en deteksjons- eller triageflyt for å fange ett sant positivt som er verdt å handle på»: direkte relevant for alarmbaserte overvåkings- og triagesystemer, der en målbetingelse med lav forekomst blåser opp NNS på samme måte som den får positiv prediktiv verdi til å kollapse (se [screeningøkonomi](../screeningøkonomi/) og [klinisk KI-evaluering](../klinisk-ki-evaluering/)). En overvåkingsregel som må behandle 200 hendelser per ekte fangst, er bare verdt å kjøre hvis fangsten er verdt minst 200 ganger triagekostnaden per hendelse: nøyaktig den samme aritmetikken som i helseeksempelet ovenfor.

## Fallgruver

- **Å se bort fra avhengigheten av grunnrisiko**: den samme screeningtesten eller det samme programmet har et helt annet NNS, og en helt annen kostnadseffektivitet, i en høyrisikobefolkning enn i en lavrisikobefolkning. Oppgi aldri et NNS uten å nevne befolkningen det er beregnet for.
- **Å telle feil nevner**: NNS teller *screenede* personer, ikke personer som tester positivt eller starter behandling; det rommer allerede effektiviteten i hele trakten, så det må aldri sammenlignes med et mål som bare er talt over positive.
- **Å sammenligne på tvers av oppfølgingsperioder**: en kortere oppfølgingsperiode blåser vanligvis opp NNS, fordi færre hendelser observeres i vinduet. NNS-tall er bare sammenlignbare når de er beregnet over samme oppfølgingsvarighet.

## Kilder

- Rembold CM. «Number needed to screen: development of a statistic for disease screening.» BMJ. 1998;317(7154):307-12.
