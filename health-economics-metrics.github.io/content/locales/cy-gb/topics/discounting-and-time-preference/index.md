# Disgowntio a Ffafriaeth Amser

Mae disgowntio'n trosi costau a buddion yn y dyfodol yn werthoedd presennol, oherwydd bod budd heddiw'n werth mwy na'r un budd mewn pum mlynedd.

## Pam mae'n bwysig

Mae pob gwerthusiad economeg iechyd a phob achos busnes sector cyhoeddus difrifol yn disgowntio ffrydiau aml-flwyddyn. Mae Llyfr Gwyrdd Trysorlys EM y DU yn mynnu cyfradd ffafriaeth amser gymdeithasol flynyddol o 3.5%; mae achos cyfeirio NICE yn disgowntio costau ac effeithiau iechyd ill dau ar 3.5% y flwyddyn (gyda chyfradd nad yw'n achos-cyfeirio o 1.5% ar gyfer therapïau sy'n agos at iachâd â buddion dros 30+ o flynyddoedd). Os yw achos busnes eich meddalwedd yn honni "£5 miliwn o arbedion dros 10 mlynedd," bydd adolygwr cyllid yn gofyn ar unwaith am y ffigur wedi'i ddisgowntio.

## Y fathemateg

Gwerth presennol o swm yn y dyfodol:

```
PV = FV / (1 + r)^t

PV = gwerth presennol
FV = gwerth yn y dyfodol ym mlwyddyn t
r  = cyfradd ddisgownt (NICE/Llyfr Gwyrdd: 0.035)
t  = blynyddoedd o nawr
```

Ar gyfer budd blynyddol cyson B dros n mlynedd (blwydd-dal):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Enghraifft wedi'i datrys

Mae eich meddalwedd yn arbed £100,000 y flwyddyn i ymddiriedolaeth NHS am 5 mlynedd, gan ddechrau flwyddyn ar ôl go-live.

Cyfanswm heb ei ddisgowntio: £500,000.

Wedi'i ddisgowntio ar 3.5%:

```
Blwyddyn 1: 100,000 / 1.035^1 = £96,618
Blwyddyn 2: 100,000 / 1.035^2 = £93,351
Blwyddyn 3: 100,000 / 1.035^3 = £90,194
Blwyddyn 4: 100,000 / 1.035^4 = £87,144
Blwyddyn 5: 100,000 / 1.035^5 = £84,197

Cyfanswm PV ≈ £451,505
```

Y pennawd gonest yw tua £451,000, oddeutu 10% yn llai na'r swm naïf. Nawr tybiwch fod cyflenwi'n llithro flwyddyn: mae pob term yn symud flwyddyn yn ddiweddarach, ac mae'r PV yn gostwng i tua £436,000 — golwg disgowntio ar [gost oedi](../cost-of-delay/).

## Cysylltiad â pheirianneg meddalwedd

- **Mae talu dyled dechnegol i lawr a mudiadau platfform** yn addo ffrydiau budd flynyddoedd i ffwrdd; disgowntiwch nhw cyn cymharu â gwaith sy'n talu'n ôl y chwarter hwn.
- **Costau wedi'u llwytho i'r blaen, buddion wedi'u llwytho i'r cefn** yw siâp safonol mudiad. Mae disgowntio'n cosbi'r siâp hwnnw, yn gywir: mae'n prisio gwerth amser di-risg ymrwymo capasiti nawr am werth yn ddiweddarach.
- Mae honiadau **"arbedion ym mlwyddyn 5"** yn haeddu amheuaeth ddwywaith drosodd — maent wedi'u disgowntio'n drwm ac yn ansicr iawn (gweler [dadansoddiad sensitifrwydd](../sensitivity-analysis/)).

## Peryglon

- **Disgowntio costau ond nid buddion** (neu i'r gwrthwyneb) — mae'r achos cyfeirio'n disgowntio'r ddau, ar yr un gyfradd.
- **Defnyddio cyfradd fasnachol (8–12%) mewn achos sector cyhoeddus**, neu 3.5% mewn un a gefnogir gan gyfalaf menter. Paru'r gyfradd â'r penderfynwr.
- **Cymysgu disgowntio â chwyddiant.** Mae disgowntio'n berthnasol i werthoedd *real* (wedi'u haddasu ar gyfer chwyddiant); peidiwch â gwneud y ddau'n ddiarwybod.

## Ffynonellau

- Gwerthusiadau technoleg iechyd NICE: y llawlyfr (PMG36). <https://www.nice.org.uk/process/pmg36>
- Llyfr Gwyrdd Trysorlys EM, canllawiau atodol ar ddisgowntio. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
