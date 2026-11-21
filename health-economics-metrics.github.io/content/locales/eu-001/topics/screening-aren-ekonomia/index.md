# Screening-aren ekonomia (Screening Economics)

Screening-aren ekonomiak sintomarik gabeko populazioak probatzearen balioa gobernatzen du. Oinarrizko egitate matematikoa: **gaixotasunaren prebalentzia baxuan, proba bikainek ere gehienbat positibo faltsuak sortzen dituzte** — eta horiek jarraitzearen behe-ibilbideko kostuak benetako aurkikuntzen onura gainditu dezake.

## Zergatik axola duen

1968tik, OMEren Wilson–Jungner irizpideek populazio-screeningaren barra jarri dute: egoerak garrantzitsua izan behar du, probak onargarria eta zehatza, tratamendu eraginkorra existitu behar da eta ekonomiak orekatu behar du. UK National Screening Committee-k kostu-eraginkortasun analisi formala aplikatzen du edozein programa nazional onartu aurretik — eta proposamen gehienak baztertzen ditu. "AAk guztiei guztia screenatuko die" saltzeko bakoitzak makineria honekin egiten du topo, eta normalean beheko aritmetikaren aurka galtzen du.

## Matematika

Balio prediktibo positiboa (PPV) —emaitza positibo bat benetakoa izateko probabilitatea— prebalentzia baxuan erortzen da:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]

Example: sensitivity 90%, specificity 95%, prevalence 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Hamabi positibotatik hamaika faltsuak dira. Programaren ekonomia osoa:

```
Cost per true case found = (screening cost + workup cost × all positives) / true positives
Then: is finding a case worth that? (earlier-intervention value per case,
      minus overdiagnosis harm — cases found that would never have mattered)
```

## Adibide landua

Baldintza arraro baterako AA bidezko erretina-screeninga, 100,000 pertsona, prebalentzia %0.5, sens %90, spec %95, eskaneatzea £15, baieztapen-azterketa £400:

```
True positives:  100,000 × 0.005 × 0.90 = 450
False positives: 100,000 × 0.995 × 0.05 = 4,975
Cost = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Cost per true case ≈ £8,156
```

Tratamendu goiztiarrak kasuko £20,000 + 1 QALY aurrezten baditu, programak erraz gainditzen du. Igo espezifikotasuna %99ra (alarma faltsu gutxiago): azterketa-kostua (450 + 995) × 400 = £0.58M-ra jaisten da, guztira £2.08M, kasuko kostua ≈ **£4,622** — espezifikotasuna da, ez sentikortasuna, prebalentzia baxuan screening-aren ekonomia irabazten den lekua.

## Software ingeniaritzarekin lotura

Analisi estatikoa, segurtasun-eskaneatzea eta anomalia-detekzioa kode-oinarrien eta telemetriaren gaineko screening-programak dira, benetako akatsen prebalentzia sarri alerta-aukera bakoitzeko %1 baino askoz txikiagoa izanik. Matematika berak azaltzen du alerta-nekea: prebalentzia baxuko kodean %95 espezifikoa den eskanerrak taldeak positibo faltsuetan itotzen ditu, eta positibo faltsu bakoitzak arreta kostatzen du eta konfiantza higatzen du benetako alertak alde batera utzi arte (termino klinikoa *screening-kaltea* da; ingeniaritzakoa *pager numbness*). Sendabideak osasunetik transferitzen dira: igo espezifikotasuna sentikortasuna baino lehen, screenatu prebalentzia handiagoko azpipopulazioak (arriskuan oinarritutako helburu-jartzea ↔ aldatutako kodea bakarrik eskaneatzea), eta zenbatu triage-kostua tresnaren ekonomian — ikus [NNT](../tratatu-behar-den-kopurua/) eta [AA klinikoaren ebaluazioa](../aa-klinikoaren-ebaluazioa/). Proba bakarraren ordez screening-programa oso baten neurriak zehazteko, ikus [screenatu beharreko pertsona-kopurua](../screening-egiteko-behar-den-kopurua/) — zenbat pertsonak igaro behar duten screening-eta-tratamendu bide osotik emaitza bat prebenitzeko.

## Tranpak

- **Sentikortasuna/espezifikotasuna prebalentziarik gabe aipatzea** — PPVrik gabeko zehaztasuna marketina da.
- **Gaindiagnostikoa ez ikustea**: inoiz kalterik egingo ez zukeen gaixotasun "indolentea" aurkitzeak benetako tratamendu-kostuak eta kalteak eragiten ditu.
- **Lead-time bias**: emaitzak aldatu gabe detekzio goiztiarragoak biziraupen nabarmena puzten du — ikus [esku-hartze goiztiarragoa](../esku-hartze-goiztiarra/).

## Iturriak

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
