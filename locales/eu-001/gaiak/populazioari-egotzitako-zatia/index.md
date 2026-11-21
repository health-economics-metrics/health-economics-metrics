# Populazioari egotzitako zatia (Population Attributable Fraction, PAF)

PAF populazio bateko gaixotasun- edo emaitza-zamaren zer proportzio egotz dakiokeen arrisku-faktore baten esposizioari: esposizioa erabat kenduz gero desagertuko litzatekeen zatia. "Arrisku-faktore honek zure aukerak bikoizten ditu" populazio mailako zenbaki bihurtzen du, komisionatzaile batek benetan plangintza egin dezakeena: zenbat kasu eta zenbat kostu balio duen esposizio jakin bat jarraitzeak.

## Zergatik axola duen

Levinek 1953an sartu zuen PAF galdera estu eta zehatz bati erantzuteko: inork erre ez balu, zenbat birika-minbizi desagertuko litzateke? Aritmetika bera erabiltzen da gaur egun prebentzio-plangintza nazionala neurtzeko, tabako- eta gizentasun-estrategietatik OMEren Gaixotasunen Zama Globalaren azterketako arrisku-faktoreen sailkapenetaraino, arrisku erlatiboak berak ez baitu ezer esaten inpaktuaz: arrisku-faktore batek gertaera arraro baten aukerak bikoiztu eta populazioaren gaixotasun-zama ia ez aldatu dezake, edo gertaera arrunt baten aukerak apur bat bakarrik handitu eta kasuen zati handi bati erantzun. PAF da "X arrisku-faktorea arriskutsua da" hori "X arrisku-faktorea kentzeak urtean hainbeste kasu saihestuko lituzke" bihurtzen duena, prebentzio-programa baten negozio-kasuak benetan behar duen zenbakia. Ikus [prebentzioaren ekonomia](../prebentzioaren-ekonomia/) zenbaki hori eskuan dagoenean horren arabera jarduteak zenbat kostatzen duen jakiteko.

## Matematika

```
PAF = prevalence_exposed × (relative_risk − 1) / (1 + prevalence_exposed × (relative_risk − 1))

prevalence_exposed = fraction of the population exposed to the risk factor (0–1)
relative_risk      = risk of the outcome in exposed vs. unexposed people (e.g. 2.5 = 2.5×)

Cases attributable = total_cases × PAF
```

PAF handitzen da bai esposizioaren prebalentziarekin bai arrisku erlatiboarekin: esposizio oso arrunt bati lotutako arrisku erlatibo apalak (esaterako 1,5×) esposizio arraro bati lotutako arrisku erlatibo dramatikoak (esaterako 5×) baino PAF handiagoa eman dezake. Hori da arrisku erlatiboarengandik bereizitako zenbaki gisa existitzeko arrazoi osoa.

## Adibide landua

Arrisku-faktore bat populazioaren %30ean dago (`prevalence_exposed = 0.3`) eta ondorioaren arriskua 2,5 aldiz handitzen du (`relative_risk = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

With 1,000 cases/year in the population:
Cases attributable = 1,000 × 0.3103 ≈ 310 cases/year
```

Ondorio honen urteko zamaren heren bat baino apur bat gutxiago esposizioari egozten zaio: erabat ezabatzeak (muga teorikoa; ez dago esposizioaren %100 kentzen duen esku-hartze errealik) urtean 1.000 kasuetatik 310 inguru saihestuko lituzke.

## Software ingeniaritzarekin lotura

PAF "gure intzidentzia-bolumenaren zenbat egotz dakioke erro-kausa bakar honi?" galderaren bertsio epidemiologikoa da: taldeek hedapen- edo mendekotasun-klase jakin bat ekoizpeneko intzidentzia guztiekin alderatzean egiten duten galdera-forma bera, intzidentzia bakoitza era berean konpontzea merezi duela tratatu beharrean. Hedapen askotan agertzen den eta intzidentzia eragiteko arrisku erlatibo apala duen erro-kausaren kategoria batek lehentasuna har diezaioke kategoria arraro eta arrisku erlatibo handikoari ingeniaritza-ahaleginaren lehen helmuga aukeratzean: PAFren ikuspegi bera, itzulita.

## Tranpak

- **PAFak arrisku-faktoreen artean batzea**: emaitza bera eragiten duten hainbat faktoreren PAFak ez dira %100era batzen; guztira gaindi dezakete, faktoreek elkarreragiten dutelako eta bide kausalak partekatzen dituztelako. Tratatu PAF bakoitza "faktore hori bakarrik kenduko balitz" gisa, inoiz ez arrisku osoaren partizio gisa.
- **Arrisku erlatiboa populazioen artean transplantatzea**: populazio batean (oinarrizko esposizio-prebalentzia eta nahasgarri desberdinak) estimatutako arrisku erlatiboak PAF engainagarria ematen du beste populazio baten esposizio-prebalentziari aplikatzean.
- **PAF eta esposatuen arrisku egozgarria nahastea**: PAF populazio mailakoa da eta esposizio-prebalentziaren mendekoa; esposatuen arrisku egozgarria banakakoa da eta ez. Galdera desberdinei erantzuten diete: ez aipatu bata bestearen galderari erantzuteko.

## Iturriak

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
