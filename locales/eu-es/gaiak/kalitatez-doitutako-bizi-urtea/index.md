# Kalitatez doitutako bizi-urtea (Quality-Adjusted Life Year, QALY)

QALY osasun perfektuan bizitako urte bat da. Jendeak *zenbat denbora* bizi den eta *zein ondo* bizi den uztartzen ditu, osasun txarreko urte batek QALY bat baino gutxiago balio dezan, eta horrela erabat desberdinak diren osasun-esku-hartzeak eskala bakarrean alderagarri bihurtzen ditu.

## Zergatik axola duen

QALY osasun-teknologien ebaluazioaren moneta komuna da. NICEk (Ingalaterra) osasun-irabaziak **QALY bakoitzeko £20.000–£30.000**-n baloratzen ditu: atalase hori baino merkeago QALYak erosten dituen esku-hartzea normalean gomendatzen da; garestiago erosten dituena normalean baztertzen da. Zenbaki horren bidez konparatzen ditu osasun-zerbitzu nazional batek minbizi-sendagai bat, aldaka-ordezkapen bat eta triage-aplikazio bat ardatz berean. Zure softwareak sinesgarriki QALYak aldarrikatu ditzakeenean (okerrera egitea saihestuz, tratamendua bizkortuz edo segurtasuna hobetuz), bere osasun-balioa medikuntzaren moneta berean prezioztatu dezakezu.

## Matematika

```
QALYs = Σ_i (duration_i × utility_i)

duration_i = years spent in health state i
utility_i  = quality weight of state i, anchored at 1 = perfect health, 0 = dead
             (negative values allowed for states worse than death)
```

Utilitate-pisuak instrumentu baliozkotuetatik datoz, ohikoenik [EQ-5D](../eq-5d/)-tik. Esku-hartze baten QALY *irabazia* esku-hartzearekin eta gabe dauden QALY-fluxuen arteko diferentzia da, NICEren erreferentzia-kasuan urtean %3,5ean [eguneratua](../eguneratzea-eta-denbora-lehentasuna/).

## Adibide landua

Paziente batek bihotz-tratamendua itxaroten du 0,6ko utilitate-egoeran. Tratamenduak 0,85eko utilitatera itzultzen du.

- **Orain tratatua**: urte 1 0,85ean = 0,85 QALY urte honetan.
- **6 hilabeteko atzerapenaren ondoren tratatua**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALY.
- **Atzerapenaren ondorioz paziente bakoitzeko QALY galera**: 0,85 − 0,725 = **0,125 QALY**.

NICEren atalasean diruztatuta: 0,125 × £20.000–£30.000 = **£2.500–£3.750 osasun-balio galdu paziente bakoitzeko 6 hilabeteko atzerapen bakoitzeko**. Bidea bizkortzen duen softwareak atzerapen hori urtean 400 pazienteri kentzen badie, osasun-balioa 50 QALY ≈ **£1,0–£1,5 milioi/urte** da, eragiketa-aurrezkirik zenbatu gabe.

## Software ingeniaritzarekin lotura

- **Bide azkarragoak = QALY goiztiarragoak.** [Bidalketatik tratamendura](../bidalketatik-tratamendura/) bitarteko denbora laburtzen duen edozerk itxaron-denboraren desutilitatea osasun-irabazi bihurtzen du, goian bezala baloratuta.
- **Segurtasuna = QALYak zaindu.** Saihestutako medikazio-akatsak eta galdutako diagnostikoak saihestutako QALY galerak dira.
- **QALY metrika-diseinurako txantiloia ere bada**: kantitatea × kalitatea konposatua, kalitate-pisuak instrumentu estandarizatu batetik eskuratuta. "Kalitatez doitutako ingeniari-urtea" (denbora × DevEx inkestaren pisua) eraikuntza bera da; ikus [SPACE eta DevEx](../space-eta-devex/).
- QALYak negozio-kasu baterako dirua bihurtzeko, erabili [onura monetario garbia](../onura-monetario-garbia/); erabaki bihurtzeko, [ordaintzeko borondatearen atalaseak](../ordaintzeko-borondatearen-atalaseak/).

## Tranpak

- **Utilitate-pisuak asmatzea.** Pisuek instrumentu baliozkotuetatik (EQ-5D) eta argitaratutako balio-multzoetatik etorri behar dute, ez intuiziotik.
- **QALYak bide kausalik gabe aldarrikatzea.** "Gure aplikazioak ongizatea hobetzen du" ez da QALY aldarrikapen bat; "0,6ko utilitate-egoeran X aste itxaron kentzen ditu" bai.
- **Kontaketa bikoitza**: saihestutako okerrera egite berdinaren QALY irabazia eta kostu-aurrezkiak biak aldarrikatzeak kontuz ibiltzea eskatzen du, benetan bereiziak direla ziurtatzeko.
- **Ekitatearen itsu-guneak**: QALYek bizitza-luzapeneko urte bat oinarrizko utilitatearen arabera baloratzen dute, eta horrek ezgaitasuna duten pertsonak kaltetu ditzake; horregatik ICERek (AEB) evLYG ere jakinarazten du (ikus [irabazitako bizi-urteak](../irabazitako-bizi-urteak/)).

## Iturriak

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
