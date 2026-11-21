# Dominans ha Harth Effeythusnans

Dewis yw **dominys** mar kost dewis aral le *ha* a dhelivr moy. An **harth effeythusnans** yw an pyth a'n gedh wosa dyberth dewisyow dominys: an set a dhewisyansow may res payya moy dhe gavos moy.

## Perag yth yw posek

Kyns pub dadhel a thresholdys po budjettow, gwerthjyans teknologi yeghes a dhyberth dewisyow na dhel dhe nagonan dhe zewis. Tresa pub dewis war plan kost-erbynn-efekt ha lenwa an harth yw ober pymp-mynysenn a ladh hanter rol berr yn menowgh. Keskomparyansow ynkressys ([ICERs](../ratyo-kost-effeythusnans-ynkressys/)) a vydh kowntys yn unnik *a-hys an harth*, pub dewis erbynn an nessa kosa heb dominans — bythkweth erbynn "gwil tra vyth" pan eus dewisyow kres gwell.

## An Matematik

```
Dominans strit:     A a dhominya B mar Kost_A ≤ Kost_B ha Efekt_A ≥ Efekt_B
                    (gans unn anheveleb strit y'n lyha)

Dominans ystynnys:  B yw dyberthys mar kes A ha C a dhrehedh moy efekt
                    rag pub pownd — dyskudhys pan ICERs a gul pan yskynnir
                    an harth. ICERs harth ewn a res bos ow kressa.
```

Fordh: rankewgh dewisyow dre efekt; dyberthewgh an re dominys yn strit; kowntewgh ICERs re-ban ynter kentrevogyon; dyberthewgh pub dewis may gwarth y ICER an dewis moy effeythus nessa (dominans ystynnys); dastewgh bys may kressa ICERs yn monotonek.

## Ensampel gwrys

Peswar dewis dhe leha apoyntyansow kellys (efekt = apoyntyansow dasserghys/bledhen):

```
Dewis           Kost/bl    Dasserghys
Gul tra vyth    £0         0
Kovenegow SMS   £20,000    2,000
Galwansow       £120,000   2,200
SMS + triage AI £90,000    3,500
```

Galwansow yw **dominys yn strit** gans SMS + triage AI (kostya moy, dasserghi le). Harth: nagonan → SMS → SMS + AI.

```
ICER(SMS erbynn nagonan)  = 20,000 / 2,000  = £10 rag apoyntyans dasserghys
ICER(SMS+AI erbynn SMS)   = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 rag apoyntyans
```

ICERs ow kressa → harth ewn. Orth ~£160 sawys rag apoyntyans klavji dasserghys (gwelewgh [ratyo na-dheuth](../ratyo-na-dheuth/)), an dew step a'n harth a dal; an arghadow bank-pellgows na dal bythkweth dhe dhos dhe'n kussel.

## Kolm gans ynjynnyans medhelweyth

Gwrewgh an keth shart rag pub dewisyans ark: kost bledhenyek war unn aks, sewyans musurys (eurow sawys, hwarvosow hwithys, displegyansow possybyl) war an aral. Poyntys a-ugh-ha-kledh an harth yw dyberthys kyns nagonan dhe dadhla budjet. Hemma a dreyl dewis gwerther dhort dadhel rol-nodhow dhe "yth osta dominys; an kuntel yw gorfennys." Hi a dhiskwedh ynwedh patrom kowethyans kemmyn a bren an dewis dhrudha rag gwayn marginal — ewn yn unnik mar yw an pris ynkressys rag pub unnys ynkressys unn a wrella an kowethyans payya yn godhvos.

## Fowtys Kemmyn

- **Keskomparya pub tra orth dalleth-linenn** yn le orth an dewis nessa war an harth — hemma a ormens dewisyow kostus dre dhiyskori ogas-kehavalow es.
- **Skoryow efekt unn-dimension** a gudh an pyth a vri; mar kowns dew sewyans, kesmeskewgh yn defendyek (gwelewgh [analys kost-talvos](../analys-kost-talvos/)) po diskwedhewgh dew harth.
- **Ankevi ansylder**: dewisyow ogas an harth a yll chanjya plasow yn dann [analys ansylder](../analys-tebelder/).

## Fontynnow

- Gerlyver York Health Economics Consortium: dominans. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
