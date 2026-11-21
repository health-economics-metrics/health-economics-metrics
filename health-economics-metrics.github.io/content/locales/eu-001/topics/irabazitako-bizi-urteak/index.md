# Irabazitako bizi-urteak (Life-Years Gained, LYG)

Irabazitako bizi-urteak esku-hartze bati egotz dakiokeen biziraupen gehigarria da, kalitate-doikuntzarik gabe: harekin eta hura gabeko biziraupen-kurben arteko area. Berdin-baliodun irabazitako bizi-urtea (evLYG) aldaera modernoa da, bizitza-luzapen guztia berdin kreditatzen duena.

## Zergatik axola duen

LYG osasun-emaitzarik gordinena da: zenbat denbora luzeagoan bizi dira pertsonak? Garrantzitsua da kalitate-datuak falta direnean, QALYekiko eszeptikoak diren audientziekin alderatzean, eta biziraupen-kurbak saiakuntza-irteera nagusia diren onkologian. **evLYG**ak (AEBetako ICER institutuak kostua/QALYrekin batera erabilia) arrazoi etikoa du: QALYek luzatutako bizi-urte bat pazientearen utilitatearen arabera balioesten dute, beraz ezgaitasuna duen norbaiten bizitza luzatzeak "gutxiago kontatzen du"; evLYGek luzatutako urte bakoitza utilitate finko batean balioesten du, bereizkeria hori kenduz.

## Matematika

```
LYG = batez besteko biziraupena_berria − batez besteko biziraupena_konparatzailea
    = biziraupen-kurben arteko area (denbora-horizontera mugatua)

Bizitza-luzapenaren QALY ikuspegia:  luzapena × pazientearen utilitatea
Bizitza-luzapenaren evLYG ikuspegia: luzapena × utilitate finkoa (ICERek ~0.851 erabiltzen du,
                                     AEBetako populazioaren batez besteko utilitatea)
```

Biak [eguneratzen](../eguneratzea-eta-denbora-lehentasuna/) dira eredu ekonomikoetan.

## Adibide landua

Ospitale bateko sepsiaren alerta goiztiarreko algoritmo bat: modelatzeak erakusten du antibiotiko goiztiarragoek urtean 12 heriotza saihesten dituztela; paziente horien batez besteko adinak 8 geratzen diren bizi-urte ematen ditu bakoitzeko, 0.7 utilitatean.

```
LYG   = 12 × 8            = 96 bizi-urte/urte
QALYak = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

£20,000 QALY bakoitzeko, QALY enkuadreak biziraupena £1.34M/urtean balioesten du; evLYG enkuadreak £1.63Mean. Aldea 0.7 utilitateko bizi-urte bat bizi-urte "oso" baten %70 balio duen ala ez buruzko epai etikoa da zehazki. Dosier serioek biak jakinarazten dituzte.

## Software ingeniaritzarekin lotura

- Biziraupen-analisia tresna-kutxa partekatua da: Kaplan-Meier kurbak pazienteentzat eta *zerbitzuentzat* (hutsegitera arteko denbora, abandonura arteko denbora) matematika bera dira. Fidagarritasun-inbertsio baten "irabazitako zerbitzu-urteak" = sistemaren harekin/hura gabeko biziraupen-kurben arteko area — MTTF puntu-aldarrikapenak baino enkuadre zintzoagoa.
- evLYGek ingeniaritzarako metrika-diseinuko abisu bat ere badakar: irteera "taldearen kalitate" faktore batekin haztatzen duen edozein produktibitate-metrikak sistematikoki gutxietsiko ditu talde mugatu edo borrokan ari direnen hobekuntzak — batzuetan nahita nahi duzu berdin-baliodun aldaera.

## Tranpak

- **Biziraupen mediana vs batez bestekoa**: eredu ekonomikoek batez bestekoa behar dute (kurbapeko area); saiakuntzek maiz mediana jartzen dute titular. Asko aldatzen dira banaketa okertuetan.
- **Saiakuntzako jarraipenetik haratagoko estrapolazioa** gaixotasun kronikoan modelatutako LYG menderatzen du — adierazi estrapolazio-eredua eta probatu [sentsibilitate-analisian](../sentikortasun-analisia/).
- **Saihestutako heriotzak aldarrikatzea behaketa-datuetako aurretik/ondoren hartatik** kasu-nahasketa eta joera sekularrak doitu gabe.

## Iturriak

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
