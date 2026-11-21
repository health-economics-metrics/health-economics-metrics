# Dasstunnans Kohort Markov

Patrom kohort Markov yw an teknik patromya HTA standard rag ynklethow may hwra efektys omdhisplegya dres lies termyn (kelghyow), na ny yw yn unn gwarth. Kohort hypotetik a dhallath yn unn stat yeghes kowl, ha pub kelgh sett fast a brobabilitiow treuswerth a symudh rannow a'n kohort ynter statys; kostow ha QALYs a gressa pub kelgh yn radh dhe'n kohort usi y'n pub stat, ha diskontys dhe dalvos lemmyn. Kenyver ynjynnyer medhelweyth ow patromya kas besneth yeghes nombrek aml-bledhen — may symudh devnydhyoryon po klevyon ynter statys avel "kesdhevnydhys", "dilansys" po "dilanys" dres termyn — a wra an keth strukter.

## Perag yth yw posek

An moyha dewisyansow teknologi yeghes gwir nyns yw keskomparyansow unn-gwarth a gost ha sewyans unn termyn. Kondysyon hirdermyn a besa, a dhasdhyghya, a worthyp ynkleth, po a ladh, dres bledhydhyow — ha [analys kost-effeythusnans](../analys-kost-effeythusnans/) unn-termyn na yll y diskwedhes. Arghadow NICE, ICER ha CADTH rag ynklethow klevyd-hirdermyn, apraysys dre [wertjyans teknologi yeghes](../gwerthjyans-teknologi-yeghes/), yw bys peub-prys drehys avel patromow kohort Markov gans horizon termyn bewnans, drefen bos an dewis — patromya pub fordh klav unnik — dyskarsa dhe skala. An patrom Markov kohort a dreuswerth nebes a wiryonedh nivel-unnik (ny yll diskwedhes yn es kov a statys kyns, rag henna "Markov": an termyn a dheu a dhepyn war an stat lemmyn yn unnik) rag patrom splann, awditadow, ha skonnyk lowr dhe vos ledys mylyow a weythow yn [analys ansylder probabilistek](../analys-ansylder-probabilistek/).

## An Matematik

```
Nowedhyans kohort unn kelgh (rew-vektor x matrik treuswerth):
  stat_nowydh[j] = sum_i stat[i] * matrik_treuswerth[i][j]

Kost unn kelgh:
  kost_kelgh = sum_s stat[s] * kost_rag_kelgh[s]

QALYs unn kelgh:
  qalys_kelgh = sum_s stat[s] * talvos[s] * hys_kelgh_bledhydhyow

Dasstunnans kowl dres `kelghyow` kelgh, diskontys orth `reyt_diskont`:
  kost_diskontys_oll  = sum_{t=0}^{kelghyow-1} kost_kelgh(stat_t)  / (1 + reyt_diskont)^t
  qalys_diskontys_oll = sum_{t=0}^{kelghyow-1} qalys_kelgh(stat_t) / (1 + reyt_diskont)^t
  le yw stat_0 = dasparth_dalleth, stat_{t+1} = avoncya_kohort(stat_t, matrik_treuswerth)
```

Diskontya pub kelgh dhe dalvos lemmyn a dhevnydh an fordula kowal a [diskontya ha preferans termyn](../diskontya-ha-preferans-termyn/), devnydhys kelgh-dhe-gelgh yn le bledhen-dhe-vledhen.

## Ensampel gwrys

**Klinikel**: patrom 2-stat — `Yagh` ha `Marow` — may fyth 10% a'n kohort pub kelgh ha `Marow` yw absorbyek (y brobabilita omdhreuswerth yw 1.0; dyberth an omdhrelgh a wra an mas kohort diwanya wosa unn kelgh yn `Marow`). An kohort a dhallath oll `Yagh`, a gost £1,000 pub kelgh pan yw `Yagh` (£0 pan `Marow`), ha gwayn 0.8 QALY/bledhen pan `Yagh`. Dasstunnys rag 3 kelgh bledhenyek orth diskont NICE 3.5%:

```
Kelgh 0: stat = [1.00, 0.00] (100% Yagh)
  kost = £1,000.00, qalys = 0.800, faktour diskont = 1.000000
  diskontys: kost = £1,000.00, qalys = 0.8000

Kelgh 1: stat = [0.90, 0.10] (90% Yagh, 10% Marow)
  kost = £900.00, qalys = 0.720, faktour diskont = 0.966184
  diskontys: kost = £869.57, qalys = 0.6957

Kelgh 2: stat = [0.81, 0.19] (81% Yagh, 19% Marow)
  kost = £810.00, qalys = 0.648, faktour diskont = 0.933511
  diskontys: kost = £756.14, qalys = 0.6049

Kost diskontys oll  ≈ £2,625.71
QALYs diskontys oll ≈ 2.1006
```

Stat pub kelgh yw stat an kelgh kyns dres an matrik treuswerth — 90% a'n 90% hwath `Yagh` orth kelgh 1 a bes `Yagh` orth kelgh 2 (0.9 × 0.9 = 0.81), hag an 19% aral a verwys lemmyn (0.9 × 0.1 + 0.1 × 1.0 = 0.19). Merkewgh na wra an kohort bythkweth dhiwanya `Yagh` yn tien: gans marwolieth 10% kyfrol pub kelgh ha heb dasentra, an radh `Yagh` a dhiwanya yn geometrek yn le dos dhe nul orth niver kelgh finwydhek.

## Kolm gans ynjynnyans medhelweyth

Rag fatell vydh patrom HTA aml-kelgh devnydhys y'n gwir apraisys, gwelewgh [gwerthjyans teknologi yeghes](../gwerthjyans-teknologi-yeghes/) — an kas kres a rewl pyth reyt diskont, fenten talvos, ha horizon termyn a res devnydhya patrom Markov dyllys.

Patrom kohort Markov yw strukturek peiryn-stat gans treuswerthow probabilistek, ledys rag niver fast a dhalgh, ow tiskontya talvos pub dalgh. An keth furv a dhasstunn treuswerthow synsyans/stat kohort devnydhyer dres termyn — gwelewgh [metryks DORA](../metryks-dora/) rag an versyon fydhyansri oberyes a "pyth radh a'n system yw yn stat dyskyllys an termyn ma, ha pyth a gost hemma". Yn konkrit:

- **Patromya synsyans/dilanans** yw patrom kohort Markov gans statys avel "gweythresys", "yn risk", "dilanys": matrik treuswerth miyek fast, ledys rag 12 po 24 kelgh miyek, a lever niver devnydhyoryon gweythresys ragwelys (ha mona) orth pub mis a dheu, kepar dell wra `Yagh`/`Marow` lavar gwythyoryon ragwelys.
- **Ekonomek fydhyansri ha hwarvos**: statys system (yagh, dyskyllys, kellys) a yll bos patromys yn kehaval, gans "kost rag kelgh" a drog downtime ow kressa pan wra an system dhe'n statys dyskyllys/kellys — ow treylya argyans frekwens hwarvos dhe argyans kost-diskontys keskomparadow orth kost an ober fydhyansri a wra chanjya an probabilitiow treuswerth.
- **Statys absorbyek avel statys diwedh**: `Marow` yn patrom klinikel yw yn kowal stat "sessrifyans gansellys" po "dhiskeys bys vyken" yn patrom medhelweyth — an dew a res probabilita omdhreuswerth splann a 1.0, po y kolli an simulasyon mas yn tawesek.

## Fowtys Kemmyn

- **Probabilitiow treuswerth na sommya dhe 1 rag pub rew.** Rew a sommya moy po le ages 1 a wra an kohort "dhiweni" po "kressa" mas pub kelgh yn tawesek — gwiryewgh bythkweth sommow rew kyns fydhya sewyans patrom, drefen na wra strukter an patrom y honan arwodhya an fowt.
- **Hys kelgh re vras rag dynamiks gwir an klevyd.** Kelgh bledhenyek rag kondysyon a chanj stat yn seythunyow a dhiwoeth treuswerthow a hwarva yn hanter-kelgh; dewisewgh hys kelgh berr orth fatell mars an argyans patromys.
- **Ankevi omdhrelgh stat absorbyek.** Stat absorbyek (mernans, hedhyans berthek) a res probabilita omdhreuswerth a 1.0 pur. Y asa mes hag an mas kohort y'n stat na a dhiwanya wosa unn kelgh, ow tiwoeth kostow kuntellys po koll QALY.
- **Tybya bos an patrom gwiryes drefen y hweles.** Patrom kohort Markov gans probabilitiow treuswerth hevel plausybyl a yll bos hwath kamm strukturek (statys gwag, omdhon absorbyek kamm); gwiryewgh erbynn skoodhyow epidemiologek godhvedhys (rag ensampel a vydh gwythyans patromys orth 5 bledhen kehaval dhe grommow gwythyans dyllys) kyns fydhya an sewyans.

## Fontynnow

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
