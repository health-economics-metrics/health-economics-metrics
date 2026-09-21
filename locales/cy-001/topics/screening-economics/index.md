# Economeg Sgrinio

Mae economeg sgrinio'n llywodraethu gwerth profi poblogaethau asymptomatig. Y ffaith fathemategol graidd: **ar gyffredinrwydd clefyd isel, mae hyd yn oed profion rhagorol yn cynhyrchu canlyniadau ffug-bositif gan mwyaf** — a gall cost ddilynol eu herlid orlethu budd y canfyddiadau gwirioneddol.

## Pam mae'n bwysig

Ers 1968, mae meini prawf Wilson–Jungner WHO wedi gosod y safon ar gyfer sgrinio poblogaeth: rhaid i'r cyflwr fod yn bwysig, y prawf yn dderbyniol ac yn gywir, rhaid bod triniaeth effeithiol ar gael, a rhaid i'r economeg fantoli. Mae UK National Screening Committee yn cymhwyso dadansoddiad cost-effeithiolrwydd ffurfiol cyn cymeradwyo unrhyw raglen genedlaethol — ac yn gwrthod y rhan fwyaf o gynigion. Mae pob cynnig "bydd AI yn sgrinio pawb am bopeth" yn taro'r peirianwaith hwn, ac fel arfer yn colli i'r rhifyddeg isod.

## Y fathemateg

Mae'r gwerth rhagfynegol positif (PPV) — y tebygolrwydd fod canlyniad positif yn wirioneddol — yn cwympo ar gyffredinrwydd isel:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]

Enghraifft: sensitifrwydd 90%, penodoldeb 95%, cyffredinrwydd 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Mae un ar ddeg allan o ddeuddeg canlyniad positif yn ffug. Economeg y rhaglen lawn:

```
Cost per true case found = (screening cost + workup cost × all positives) / true positives
Yna: a yw canfod achos yn werth hynny? (gwerth ymyrraeth gynharach fesul achos,
      minws niwed gorddiagnosis — achosion a ganfuwyd na fyddent byth wedi bod o bwys)
```

## Enghraifft wedi'i gweithio

Sgrinio retina gan AI ar gyfer cyflwr prin, 100,000 o bobl, cyffredinrwydd 0.5%, sensitifrwydd 90%, penodoldeb 95%, sgan £15, gwaith cadarnhau dilynol £400:

```
Positifau gwir:  100,000 × 0.005 × 0.90 = 450
Positifau ffug:  100,000 × 0.995 × 0.05 = 4,975
Cost = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Cost fesul achos gwir ≈ £8,156
```

Os yw triniaeth gynnar yn arbed £20,000 ynghyd ag 1 QALY fesul achos, mae'r rhaglen yn clirio'n hawdd. Codwch benodoldeb i 99% (llai o larymau ffug): mae cost y gwaith dilynol yn gostwng i (450 + 995) × 400 = £0.58M, cyfanswm £2.08M, cost fesul achos ≈ **£4,622** — penodoldeb, nid sensitifrwydd, yw lle mae economeg sgrinio'n cael ei hennill ar gyffredinrwydd isel.

## Cysylltiad â Pheirianneg Meddalwedd

Mae dadansoddi statig, sganio diogelwch, a chanfod anomaleddau yn rhaglenni sgrinio dros gronfeydd cod a thelemetreg, gyda chyffredinrwydd gwir-ddiffygion yn aml ymhell islaw 1% fesul cyfle-rhybudd. Mae'r un rhifyddeg yn union yn esbonio blinder rhybuddion: mae sganiwr sy'n 95% penodol ar god cyffredinrwydd isel yn boddi timau â chanlyniadau ffug-bositif, ac mae pob ffug-bositif yn costio sylw ac yn erydu ymddiriedaeth nes bod rhybuddion gwirioneddol yn cael eu hanwybyddu (y term clinigol yw *niwed sgrinio*; y term peirianneg yw *dideimladrwydd bipar*). Mae'r meddyginiaethau'n trosglwyddo o iechyd: codwch benodoldeb cyn sensitifrwydd, sgriniwch is-boblogaethau â chyffredinrwydd uwch (targedu ar sail risg ↔ sganio cod-wedi'i-newid-yn-unig), a chyfrifwch gost frysbennu yn economeg yr offeryn — gweler [NNT](../number-needed-to-treat/) a [gwerthuso AI clinigol](../clinical-ai-evaluation/).

## Peryglon

- **Dyfynnu sensitifrwydd/penodoldeb heb gyffredinrwydd** — cywirdeb heb PPV yw marchnata.
- **Anwybyddu gorddiagnosis**: mae canfod "clefyd" segur na fyddai byth wedi niweidio yn sbarduno costau a niwed triniaeth go iawn.
- **Rhagfarn amser-blaen**: mae canfod yn gynharach heb newid canlyniadau yn chwyddo goroesiad ymddangosiadol — gweler [ymyrraeth gynharach](../earlier-intervention/).

## Ffynonellau

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
