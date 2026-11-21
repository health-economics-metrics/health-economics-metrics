# Denbora-trukaketa (TTO) erabilgarritasunaren elikadura (Time Trade-Off (TTO) Utility Elicitation)

TTO osasun-egoera baten erabilgarritasun-balioa zuzenean inkestatuari ateratzeko metodo estandarra da, bat asmatu beharrean. Elikadura-metodoetako bat da —standard gamble eta aukera diskretuko esperimentuekin batera— [EQ-5D](../eq-5d/) bezalako tresnen atzean dauden balio-multzoak sortzen dituztenetako bat, eta, beraz, ondoko [QALY](../kalitatez-doitutako-bizi-urtea/) kalkulu gehienen atzekoak.

## Zergatik axola duen

QALY kalkulu bat elikatzen duen erabilgarritasun-pisu orok nonbaitetik etorri behar izan zuen. TTO horixe da: heriotza baino hobea den egoera baterako, inkestatuari galdetzen zaio osasun betean emandako zenbat urte `X` jotzen dituen baliokidetzat egoera narriatuan emandako `T` urteekin (`X < T`); erabilgarritasuna `X / T` da. Inkestatu batzuek heriotza baino okerragotzat jotzen duten egoera baterako, formula estandarrak huts egiten du (ezin ditu zero azpiko erabilgarritasunak garbi irudikatu), beraz TTO hedatua aplikatzen da. Erabilgarritasun-pisu bat emandako sarrera gisa tratatzen duen software-ingeniari edo analista batek, baliozkotutako elikadura-protokolo bat behar izan zuela jakin gabe, zalantzan jarriz gero defendatu ezin duen zenbaki batetik urrats bat dago.

## Matematika

```
Standard TTO (state better than death):
  utility = time_in_full_health / time_in_impaired_state

Extended TTO (state worse than death):
  utility = -time_traded_for_death / (total_duration - time_traded_for_death)
```

`time_in_full_health` / `time_in_impaired_state` — osasun betean emandako `X` urte, egoera narriatuan emandako `T` urteen baliokidetzat jotzen direnak. `time_traded_for_death` / `total_duration` — heriotza baino okerragoa den formulazioan, inkestatuak berehalako heriotzagatik trukatuko lituzkeen `T` urteko geratzen den bizitzako `a` urte, `T − a` urte osasun betean eta ondoren heriotza nahiago dituelarik heriotza baino okerragoa den egoeran emandako `T` urteak baino. Emaitza negatiboa da, heriotza = 0 izateko ainguratuta.

## Adibide landua

**Estandarra**: inkestatu bat 10 urtez egoera narriatuan dago eta osasun betean 7 urterekin ez du bereizketarik egiten: erabilgarritasuna = 7 / 10 = **0.7**.

**Heriotza baino okerragoa**: 10 urteko geratzen den bizitzan, inkestatuak 2 urte trukatuko lituzke berehalako heriotzagatik — 8 urte osasun betean eta ondoren heriotza nahiago ditu heriotza baino okerragoa den egoeran emandako 10 urteak baino: erabilgarritasuna = −2 / (10 − 2) = −2 / 8 = **−0.25**.

## Software ingeniaritzarekin lotura

DevEx edo konpromiso-inkesta batek jende horri aztertu gabeko 0–10 eskala batean zerbait balioesteko eskatzean topatzen duen puntu bera hemen alderantziz aplikatzen da: TTO existitzen da zehazki "jendeari balioesteko eskatu besterik ez" berez ez delako elikadura-metodo baliozkotua. Auto-balioetsitako zenbaki baten gainean indize konposatu bat eraiki aurretik —DevEx puntuazio bat, konpromiso-indize bat, neke-eskala bat—, galdetu zerk elikatu zuen eta metodo hori baliozkotua zen, osasun-ekonomialariek erabilgarritasun-pisu bati QALY batean sartu aurretik galdetzen duten galdera bera.

## Tranpak

- **Banakako balioaren orokortzea**: TTO balioak publiko orokorraren (edo pazienteen) *lagin* batetik ateratzen dira, ez zaintza erabakitzen ari den pertsonatik — inkestatu baten TTO balioa orokortzen dela balitz erabiltzea laginketa-akatsa da.
- **Egoerarako formulazio okerra**: TTO formula estandarrak egoera heriotza baino argi eta garbi hobea dela suposatzen du; inkestatu batzuek heriotza baino okerragotzat joko luketen egoera batean aplikatzeak, formulazio hedatura aldatu gabe, isilean erabilgarritasun oker (positibo) bat sortzen du.
- **Iraupen konparaezinak**: heriotza baino okerragoa den konparaziorako geratzen den bizitzako `T` iraupen ezberdinak erabiliz ateratako TTO balioak ez dira zuzenean alderagarriak, azterlanaren diseinuak `T` konstante mantendu zuela egiaztatu gabe.

## Iturriak

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
