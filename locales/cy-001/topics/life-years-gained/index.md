# Blynyddoedd Bywyd a Enillwyd (LYG)

Blynyddoedd bywyd a enillwyd yw'r goroesiad ychwanegol y gellir ei briodoli i ymyriad, heb unrhyw addasiad ansawdd: yr arwynebedd rhwng y cromliniau goroesiad gydag ac heb yr ymyriad. Mae'r flwyddyn bywyd gwerth-cyfartal a enillwyd (evLYG) yn amrywiad modern sy'n rhoi credyd cyfartal i bob estyniad bywyd.

## Pam mae hyn yn bwysig

LYG yw'r canlyniad iechyd mwyaf crai: pa mor hirach y mae pobl yn byw? Mae'n bwysig pan fo data ansawdd ar goll, wrth gymharu â chynulleidfaoedd sy'n amheus o QALYs, ac mewn oncoleg lle mae cromliniau goroesiad yn brif allbwn treial. Mae'r **evLYG** (a ddefnyddir gan sefydliad ICER UDA ochr yn ochr â chost/QALY) yn bodoli am reswm moesegol: mae QALYs yn gwerthfawrogi blwyddyn o fywyd estynedig yn ôl defnyddioldeb y claf, felly mae estyn bywyd rhywun ag anabledd yn "cyfrif yn llai" — mae evLYG yn gwerthfawrogi pob blwyddyn estynedig ar ddefnyddioldeb sefydlog, gan ddileu'r gwahaniaethu hwnnw.

## Y Fathemateg

```
LYG = goroesiad cymedrig_newydd − goroesiad cymedrig_cymharydd
    = arwynebedd rhwng cromliniau goroesiad (wedi'i gyfyngu i'r gorwel amser)

Golwg QALY o estyniad bywyd:  estyniad × defnyddioldeb claf
Golwg evLYG o estyniad bywyd: estyniad × defnyddioldeb sefydlog (mae ICER yn defnyddio ~0.851,
                              cyfartaledd defnyddioldeb poblogaeth UDA)
```

Mae'r ddau wedi'u [disgowntio](../discounting-and-time-preference/) mewn modelau economaidd.

## Enghraifft Waith

Algorithm rhybudd cynnar sepsis mewn ysbyty: mae modelu'n dangos bod gwrthfiotigau cynharach yn atal 12 marwolaeth/blwyddyn; mae oedran cyfartalog y cleifion hynny'n rhoi 8 mlynedd bywyd sy'n weddill yr un ar ddefnyddioldeb 0.7.

```
LYG   = 12 × 8            = 96 blwyddyn bywyd/blwyddyn
QALYs = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

Ar £20,000 y QALY, mae fframio QALY yn gwerthfawrogi'r goroesiad ar £1.34M/blwyddyn; fframio evLYG ar £1.63M. Y bwlch yw'n union y farn foesegol ynghylch a yw blwyddyn bywyd ar ddefnyddioldeb 0.7 yn werth 70% o un "lawn". Mae dosieri difrifol yn adrodd y ddau.

## Cysylltiad Peirianneg Feddalwedd

- Mae dadansoddiad goroesiad yn becyn offer a rennir: mae cromliniau Kaplan-Meier ar gyfer cleifion ac ar gyfer *gwasanaethau* (amser-i-fethiant, amser-i-golli-cwsmeriaid) yr un fathemateg. "Blynyddoedd gwasanaeth a enillwyd" o fuddsoddiad dibynadwyedd = arwynebedd rhwng cromliniau goroesiad y system gyda/heb — fframio mwy gonest na honiadau MTTF pwynt.
- Mae'r evLYG hefyd yn cario rhybudd dylunio metrig i beirianneg: bydd unrhyw fetrig cynhyrchedd sy'n pwysoli allbwn yn ôl ffactor "ansawdd tîm" yn tanbrisio gwelliannau ar gyfer timau cyfyngedig neu sy'n cael trafferth yn systematig — weithiau rydych am ddefnyddio'r amrywiad gwerth-cyfartal yn fwriadol.

## Peryglon

- **Canolrif yn erbyn goroesiad cymedrig**: mae angen cymedr ar fodelau economaidd (arwynebedd o dan y gromlin); mae treialon yn aml yn penawdu'r canolrif. Maent yn gwahaniaethu llawer mewn dosraniadau sgiw.
- **Allosodiad y tu hwnt i ddilyniant treial** sy'n dominyddu LYG a fodelwyd mewn clefyd cronig — nodwch y model allosod a'i brofi mewn [dadansoddiad sensitifrwydd](../sensitivity-analysis/).
- **Honni marwolaethau a atalwyd o ddata arsylwadol cyn/ar ôl** heb addasu ar gyfer cymysgedd achosion a thueddiadau seciwlar.

## Ffynonellau

- Geirfa Consortiwm Economeg Iechyd Efrog: blynyddoedd bywyd a enillwyd. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-effeithiolrwydd, y QALY, a'r evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
