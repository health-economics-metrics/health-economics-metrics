# Forventet verdi av utvalgsinformasjon (EVSI)

EVSI er verdien av en *bestemt foreslått studie*, med et gitt design og en gitt utvalgsstørrelse, før den gjennomføres, til forskjell fra [EVPI](../forventet-verdi-av-perfekt-informasjon/), som priser det å fjerne all usikkerhet fullstendig. EVSI svarer på spørsmålet en forskningsfinansierer faktisk står overfor: «Er *denne* studien, i *denne* størrelsen, verdt kostnaden?»

## Hvorfor det er viktig

EVPI forteller deg taket på hva noen forskning kan være verdt; den forteller aldri om studien du har foran deg når over listen. En nasjonal forskningsfinansierer som velger mellom en pilot med 50 pasienter og en definitiv studie med 500 pasienter, må vite hvor mye *hvert enkelt design* er verdt, ikke bare verdien av allvitenhet. EVSI gir det tallet, og fordi det skalerer med utvalgsstørrelsen, kan en finansierer finne utvalgsstørrelsen som maksimerer forventet nettonytte i stedet for å gjette.

Dette er også grunnen til at EVSI alltid er mindre enn eller lik EVPI: et endelig utvalg kan bare delvis løse usikkerhet, og en studie som ser ut til å være verdt mer enn perfekt informasjon er et tegn på at beregningen er feil, ikke et ekte resultat.

## Matematikken

```
Generelt:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (nøstet forventning: ytre over mulige studieresultater, indre over den
  posteriore oppfatningen om θ etter å ha sett det resultatet — vanligvis
  estimert med nøstet Monte Carlo / bayesiansk oppdatering over trekningene
  fra den probabilistiske sensitivitetsanalysen)

Lukket normaltilnærming (én usikker parameter, konjugert normal-normal-modell
— en vanlig snarvei, ikke eksakt for enhver modell):
EVSI(n) = EVPI × n / (n + n0)

n  = den foreslåtte studiens utvalgsstørrelse
n0 = «forhåndsekvivalent utvalgsstørrelse» — størrelsen på et tenkt utvalg
     som ville bære samme informasjon som dagens forhåndsfordeling, utledet
     fra forholdet mellom datavarians og forhåndsvarians
ENBS(n) = EVSI(n) − Kostnad(n)
Populasjons-EVSI = EVSI_per_beslutning × berørte_beslutninger
```

Den generelle formen er en nøstet forventning fordi studiens fremtidige resultat selv er usikkert: du må ta gjennomsnittet over alle mulige datasett studien kan gi, og for hvert av dem regne ut den beste beslutningen på nytt gitt den oppdaterte (posteriore) oppfatningen. Den lukkede normaltilnærmingen bytter denne regnekostnaden mot ett enkelt forhold, gyldig når den usikre parameteren og dataene er (tilnærmet) normale og konjugerte: en bekvemmelighet, ikke en universell lov. Full nøstet Monte Carlo er allmennmetoden når den forutsetningen ikke holder. Se [probabilistisk sensitivitetsanalyse](../probabilistisk-sensitivitetsanalyse/) for PSA-trekningene EVSI vanligvis estimeres fra.

## Gjennomarbeidet eksempel

Med utgangspunkt i det gjennomarbeidede eksempelet for [EVPI](../forventet-verdi-av-perfekt-informasjon/), utrulling av en KI-dokumentasjonsassistent til 5 000 klinikere, der EVPI viste seg å være £1,2 mill., uttrykkes den samme EVPI-en her i hele pund: **EVPI = £1 200 000**.

En foreslått pilotstudie med 50 klinikere ligger på bordet. Fra forholdet mellom variansen i den tidligere oppfatningen og pilotens målepresisjon blir den forhåndsekvivalente utvalgsstørrelsen `n0 = 75`:

```
EVSI(50) = 1 200 000 × 50 / (50 + 75)
         = 1 200 000 × 50 / 125
         = 1 200 000 × 0,4
         = £480 000
```

Piloten koster £120 000:

```
ENBS = EVSI − Kostnad = 480 000 − 120 000 = £360 000
```

En klart positiv ENBS: finansier piloten. Hvis den samme innkjøpsbeslutningen gjentar seg ved 3 tilsvarende regionale trusts, skalerer pilotens verdi:

```
Populasjons-EVSI = 480 000 × 3 = £1 440 000
```

## Kobling til programvareutvikling

EVSI er økonomien i å velge *hvor stor* en pilot eller A/B-test bør være, ikke bare om man skal kjøre en i det hele tatt:

- **Utvalgsstørrelse som investeringsbeslutning.** En beta med 50 brukere og en trinnvis utrulling til 5 000 brukere er ulike «studier» med ulik EVSI og ulike kostnader; EVSI lar deg sammenligne dem på samme grunnlag i stedet for å falle tilbake på «mer data er alltid bedre».
- **ENBS, ikke EVSI alene, er bestillingstesten.** En studie med høy EVSI der kostnaden sluker mesteparten av den, er et svakt forslag; beslutningsregelen er forventet nettonytte av utvalget, nøyaktig slik en forretningscase stiller nytte mot kostnad i stedet for å rapportere bare nytten.
- **Avtakende grenseavkastning er eksplisitt.** Fordi EVSI(n) stiger med `n/(n+n0)`, fordobler det å doble en pilots størrelse aldri verdien: en formell versjon av ingeniørens instinkt om at et større eksperiment har avtakende marginal informasjonsverdi.

## Fallgruver

- **Å anvende normaltilnærmingen utenfor forutsetningene.** Den gjelder bare for omtrent konjugert usikkerhet i én parameter; en virkelig ikke-lineær eller flerparameters beslutningsmodell trenger full nøstet Monte Carlo, ikke denne snarveien.
- **Å sammenligne EVSI bare med kontantkostnad.** EVSI må veies mot studiens *fulle* kostnad, inkludert dens egen kostnad ved beslutningsforsinkelse (se [kostnad ved forsinkelse](../kostnad-ved-forsinkelse/)), ikke bare studiens faktura.
- **Å behandle EVSI > EVPI som et ekte funn.** EVSI kan ved konstruksjon aldri overstige EVPI; en beregning som gir dette er en modellfeil, ikke en oppdagelse.

## Kilder

- Ades AE, Lu G, Claxton K. «Expected value of sample information calculations in medical decision modeling.» Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. «The value of information and optimal clinical trial design.» Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. «When is a model-based value of information analysis feasible?» Medical Decision Making 2014.
