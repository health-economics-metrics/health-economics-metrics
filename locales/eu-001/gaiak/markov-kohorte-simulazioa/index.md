# Markov kohorte-simulazioa (Markov Cohort Simulation)

Markov kohorte-eredua HTAko modelatze-teknika estandarra da, efektuak denbora-aldi anitzetan (zikloetan) irekitzen diren esku-hartzeetarako, ez ukitu bakarrean. Kohorte hipotetiko bat osasun-egoera bakar batean hasten da erabat, eta ziklo bakoitzean trantsizio-probabilitate finkoen multzo batek kohortearen zatikiak egoeren artean mugitzen ditu; kostuak eta QALYak ziklo bakoitzean metatzen dira kohortearen zenbat dagoen egoera bakoitzean proportzioan, eta egungo baliora eguneratzen dira. Urte anitzeko osasun digitaleko negozio-kasu bat modelatzen duen edozein software-ingeniarik — erabiltzaileak edo pazienteak "engaged", "lapsed" edo "churned" bezalako egoeren artean mugitzen direnean — egitura bera eraikitzen ari da.

## Zergatik axola duen

Osasun-teknologien erabaki erreal gehienak ez dira aldi bakar baten kostu eta emaitzen konparaketa bakarrak. Gaixotasun kroniko batek aurrera egiten du, errepikatzen da, tratamenduari erantzuten dio, edo hiltzen du, urteetan zehar — eta aldi bakarreko [kostu-eraginkortasun analisi](../kostu-eraginkortasun-analisia/) batek ezin du hori errepresentatu. Gaixotasun kronikoen esku-hartzeetarako NICE, ICER eta CADTH aurkezpenak, [osasun-teknologien ebaluazioaren](../osasun-teknologien-ebaluazioa/) bidez ebaluatuak, ia beti Markov kohorte-eredu gisa eraikitzen dira bizitza osoko denbora-horizonterekin, alternatiba — pazienteen bide posible guztiak modelatzea — eskala handian ezinezkoa delako. Kohorte-mailako Markov ereduak indibiduo-mailako errealismo zati bat trukatzen du (ezin du erraz iraganeko egoeren memoria errepresentatu, hortik "Markov": etorkizuna egungo egoeraren mende bakarrik dago) gardena, auditagarria eta [sentsibilitate-analisi probabilistiko](../sentikortasun-analisi-probabilistikoa/) batean milaka aldiz exekutatzeko bezain azkarra den eredu baten truke.

## Matematika

```
Ziklo baten kohorte-eguneraketa (errenkada-bektorea x trantsizio-matrizea):
  egoera_berria[j] = batura_i egoera[i] * trantsizio_matrizea[i][j]

Ziklo baten kostua:
  ziklo_kostua = batura_s egoera[s] * kostua_zikloko[s]

Ziklo baten QALYak:
  ziklo_qalyak = batura_s egoera[s] * utilitatea[s] * ziklo_luzera_urteak

Simulazio osoa `zikloak` zikloetan, `eguneratze_tasa`n eguneratuta:
  kostu_eguneratua_guztira  = batura_{t=0}^{zikloak-1} ziklo_kostua(egoera_t)  / (1 + eguneratze_tasa)^t
  qaly_eguneratuak_guztira  = batura_{t=0}^{zikloak-1} ziklo_qalyak(egoera_t) / (1 + eguneratze_tasa)^t
  non egoera_0 = hasierako_banaketa, egoera_{t+1} = advance_cohort(egoera_t, trantsizio_matrizea)
```

Ziklo bakoitza egungo baliora eguneratzeak [eguneratzea eta denbora-lehentasuna](../eguneratzea-eta-denbora-lehentasuna/)ko formula bera erabiltzen du, urtez urte beharrean zikloz ziklo aplikatuta.

## Adibide landua

**Klinikoa**: 2 egoerako eredu bat — `Well` eta `Dead` — non kohortearen %10 hiltzen den ziklo bakoitzean eta `Dead` xurgatzailea den (bere auto-trantsizio probabilitatea 1.0 da; auto-begizta hori kentzeak kohorte-masa desagerraraziko luke ziklo bat `Dead`-en eman ondoren). Kohortea erabat `Well`-en hasten da, ziklo bakoitzeko £1,000 kostatzen du `Well` dagoen bitartean (£0 `Dead` denean), eta 0.8 QALY irabazten ditu urtean `Well` dagoen bitartean. NICEren %3,5eko eguneratze-tasan 3 urteko ziklotan simulatuta:

```
0. zikloa: egoera = [1.00, 0.00] (%100 Well)
  kostua = £1,000.00, qalyak = 0.800, eguneratze-faktorea = 1.000000
  eguneratua: kostua = £1,000.00, qalyak = 0.8000

1. zikloa: egoera = [0.90, 0.10] (%90 Well, %10 Dead)
  kostua = £900.00, qalyak = 0.720, eguneratze-faktorea = 0.966184
  eguneratua: kostua = £869.57, qalyak = 0.6957

2. zikloa: egoera = [0.81, 0.19] (%81 Well, %19 Dead)
  kostua = £810.00, qalyak = 0.648, eguneratze-faktorea = 0.933511
  eguneratua: kostua = £756.14, qalyak = 0.6049

Kostu eguneratua guztira  ≈ £2,625.71
QALY eguneratuak guztira  ≈ 2.1006
```

Ziklo bakoitzeko egoera aurreko zikloko egoera trantsizio-matrizetik pasatua da — 1. zikloan oraindik `Well` dagoen %90aren %90ek `Well` jarraitzen du 2. zikloan (0.9 × 0.9 = 0.81), beste %19 orain hil da (0.9 × 0.1 + 0.1 × 1.0 = 0.19). Kontuan izan kohorteak ez duela inoiz `Well` erabat husten: ziklo bakoitzeko %10eko hilkortasun konstantearekin eta berriz sartzerik gabe, `Well` frakzioa geometrikoki jaisten da, ziklo-kopuru finitu batean zerora iritsi gabe.

## Software ingeniaritzarekin lotura

HTA eredu anitzeko ziklo bat benetako ebaluazio batean nola erabiltzen den ikusteko, ikus [osasun-teknologien ebaluazioa](../osasun-teknologien-ebaluazioa/) — aurkeztutako Markov eredu batek zein eguneratze-tasa, utilitate-iturri eta denbora-horizonte erabili behar dituen gobernatzen duen erreferentzia-kasua.

Markov kohorte-eredu bat egituraz trantsizio probabilistikoak dituen egoera-makina bat da, tick-kopuru finko batean exekutatua, tick bakoitzaren balioa eguneratuz. Forma bera erabiltzaile-kohorte baten atxikipen/egoera-trantsizioak denboran simulatzen ditu — ikus [DORA metrikak](../dora-metrikak/) "sistemaren zein frakzio dago egoera degradatuan aldi honetan, eta zenbat kostatzen du" galderaren fidagarritasun operatiboaren bertsiorako. Zehazki:

- **Atxikipen/abandonuaren modelatzea** "aktiboa", "arriskuan", "abandonatua" bezalako egoerak dituen Markov kohorte-eredu bat da: hileko trantsizio-matrize finko batek, 12 edo 24 hileko ziklotan exekutatuta, etorkizuneko edozein hilabetetan erabiltzaile aktiboen kopuru esperoa (eta diru-sarrerak) esaten dizu, `Well`/`Dead`-ek bizirauleen kopuru esperoa esaten duen bezala.
- **Fidagarritasuna eta intzidentzien ekonomia**: sistema baten egoerak (osasuntsua, degradatua, erorita) modu berean modelatu daitezke, geldialdi-kalteen "zikloko kostua" sistemak degradatu/eroritako egoerak okupatzen dituen bitartean metatuz — intzidentzia-maiztasunaren argudioa trantsizio-probabilitateak aldatuko lituzkeen fidagarritasun-lanaren kostuarekin alderagarria den kostu-eguneratuaren argudio bihurtuz.
- **Egoera xurgatzaileak amaiera-egoera gisa**: eredu kliniko bateko `Dead` software-eredu bateko "bertan behera utzitako harpidetza" edo "betiko lineaz kanpo" egoera da zehazki — biek 1.0ko auto-trantsizio probabilitate esplizitua behar dute, bestela simulazioak isilean masa galtzen du.

## Tranpak

- **Errenkada bakoitzean 1era batzen ez diren trantsizio-probabilitateak.** 1 baino gehiago edo gutxiago batzen duen errenkada batek isilean kohortea "isurtzen" edo masa "hazten" du ziklo bakoitzean — egiaztatu beti errenkaden baturak ereduaren irteera fidatu aurretik, ereduaren egiturak berak errorea seinalatzen ez duelako.
- **Gaixotasunaren benetako dinamikarako ziklo-luzera lodiegia.** Asteetan egoera nabarmen aldatzen duen egoera baterako urteko ziklo batek ziklo-erdian gertatzen diren trantsizioak gutxiesten ditu; aukeratu modelatutako prozesua benetan mugitzen den abiadurarekiko ziklo-luzera laburra.
- **Egoera xurgatzaile baten auto-begizta ahaztea.** Egoera xurgatzaile batek (heriotza, etenaldi iraunkorra) zehazki 1.0ko auto-trantsizio probabilitatea behar du. Kendu eta egoera horretako kohorte-masa ziklo baten ondoren lurruntzen da, kostu metatuak edo QALY galera gutxiesten.
- **Eredua balioztatutzat hartzea exekutatzen delako.** Trantsizio-probabilitate sinesgarriak dituen Markov kohorte-eredu bat egituraz oker egon daiteke oraindik (egoerak falta, portaera xurgatzaile okerra); balioztatu epidemiologia-erreferentzia ezagunen aurka (adib. 5 urteko modelatutako biziraupena argitaratutako biziraupen-kurbekin bat al dator) irteera fidatu aurretik.

## Iturriak

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
