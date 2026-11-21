# Inbertsioaren itzulkin soziala (Social Return on Investment, SROI)

SROI [ROI](../inbertsioaren-itzulkina/) merkatuek prezioa jartzen ez dioten emaitzetara hedatzen du —ongizatea, lotura soziala, ingurumen-eragina—, proxy finantzarioen bidez monetizatuz, eragindako *interesdun guztientzat*.

## Zergatik axola duen

Osasun- eta komunitate-esku-hartzeek sortzen dutenaren zati handi bat ez da inoiz aurrekontu-lerro batera iristen: bakardade murriztua, zaintzaileen arintzea, enplegu-irabaziak, duintasuna. SROIk, Social Value International-en zazpi printzipioek gobernatuta (interesdunak inplikatu, axola duena baloratu, ez gehiegi aldarrikatu, gardena izan, egiaztatu…), "£3.20 balio sozial inbertitutako £1eko" bezalako adierazpenak sortzen ditu. Erresuma Batuko erosketa publikoaren balio-sozialaren eskakizunek SROI estiloko ebidentzia komertzialki garrantzitsu bihurtzen dute: kontratu publikoetarako (NHS barne) eskaintzek puntuak lortzen dituzte frogatutako balio sozialagatik.

## Matematika

```
SROI ratio = PV(monetized social outcomes) / PV(investment)

For each outcome:
  value = quantity × financial proxy × attribution × (1 − deadweight) × (1 − displacement)

deadweight   = would have happened anyway
attribution  = share caused by others
displacement = benefit moved from elsewhere rather than created
drop-off     = decay of the outcome over years
```

Doikuntza-faktoreak dira metodoaren osotasuna: haiek gabe, SROI moneta-ikurra duen fikzioa da.

## Adibide landua

Bakarrik dauden nagusiak boluntarioekin lotzen dituen lagun-egite aplikazio bat; programaren kostua £200,000/urte; 1,500 bikote aktibo.

```
Outcome: reduced loneliness for 1,500 people
  proxy: wellbeing valuation of "relief from loneliness" ≈ £1,800/person/yr
  deadweight 25% (some would have found connection anyway)
  attribution 80% (some credit to other services)

Value = 1,500 × 1,800 × 0.80 × 0.75 = £1,620,000

Outcome: reduced GP visits, 1,500 × 1.2 visits × £42 = £75,600 (payer-real)

SROI = (1,620,000 + 75,600) / 200,000 ≈ 8.5 : 1
```

Ohartu ratioa %96 proxyz baloratutako ongizatea dela eta %4 diru gogorra. SROI zilegia da — baina balio sozial gisa aurkeztu behar da, ez da inoiz utzi behar £1.7M kutxan sartu daitekeela ulertzera.

## Software ingeniaritzarekin lotura

SROI onuradunak ordaintzen duen taldetik kanpo dauden ingeniaritza-lanerako marko zintzoa da: kode irekiaren mantentze-lanak, irisgarritasun-hobekuntzak, beste talde batzuek kontsumitutako plataforma-lana, garatzaile-komunitatearen inbertsioa. Transferitzen diren mekanikak: identifikatu interesdun guztiak, monetizatu adierazitako proxyekin, eta aplikatu deadweight/atribuzio-deskontuak (OSS konponketa hori hala ere gertatuko al zen? irabaziaren zenbat da zure lana eta zenbat ekosistemarena?). *Zure eragin-aldarrikapenak deskontatzeko* diziplinak bereizten du SROI marketin-zenbaki batetik.

## Tranpak

- **Proxy-erosketa**: eskuragarri dagoen ongizate-balioespen eskuzabalena aukeratzea.
- **Deadweight/atribuzioa saltatzea** — puzte-mota ohikoena, askotan ratioa bikoizten duena.
- **Azterlanen arteko ratio-konparaketa**: SROI ratioak metodoarekiko sentikorrak dira; alderatu marko koherente baten barruan soilik.
- **Balio soziala aurrekontu-titular bati aurrezki eskuratu daitezkeen gisa aurkeztea.**

## Iturriak

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
