# Nifer sy'n Angenrheidiol i'w Sgrinio (NNS)

NNS yw nifer y bobl y mae'n rhaid eu sgrinio — nid dim ond eu trin — i atal **un** canlyniad niweidiol dros gyfnod dilyniant diffiniedig, o ystyried risg sylfaenol y boblogaeth a'r gostyngiad risg cymharol y mae canfod a thriniaeth gynnar yn ei gyflawni. Dyma gyfatebydd lefel rhaglen sgrinio NNT: mae NNT yn gofyn faint y mae'n rhaid eu *trin* i atal un canlyniad; mae NNS yn gofyn faint y mae'n rhaid iddynt fynd drwy'r llwybr *sgrinio-ac-yna-trin* cyfan i gyrraedd yno.

## Pam mae hyn yn bwysig

Cyflwynodd Rembold NNS ym 1998 yn benodol fel y gellid cymharu rhaglenni sgrinio ar yr un sail â thriniaethau, oherwydd bod gostyngiad risg cymharol pennawd prawf sgrinio yn cuddio dau beth nad yw un triniaeth yn eu cuddio: risg sylfaenol y boblogaeth a wahoddir i sgrinio mewn gwirionedd, a'r ffaith bod pawb a sgriniwyd yn dwyn cost y prawf a baich canlyniadau positif anghywir, nid dim ond y lleiafrif sy'n mynd ymlaen i elwa. Mae porth costeffeithiolrwydd Pwyllgor Sgrinio Cenedlaethol y DU (gweler [economeg sgrinio](../economeg-sgrinio/)) wedi'i adeiladu ar yr union wahaniaeth hwn — gall rhaglen sgrinio â gostyngiad risg cymharol trawiadol mewn poblogaeth risg sylfaenol isel gael NNS yn y miloedd o hyd, ac ar yr adeg honno cost y rhaglen fesul canlyniad a atalwyd yw'r cwestiwn go iawn.

## Y Fathemateg

```
NNS = 1 / (risg_sylfaenol × gostyngiad_risg_cymharol)

risg_sylfaenol             = tebygolrwydd y canlyniad yn y boblogaeth a
                             sgriniwyd dros y cyfnod dilyniant (0–1)
gostyngiad_risg_cymharol   = gostyngiad risg cymesur a gyflawnir gan
                             driniaeth gynnar a alluogir gan sgrinio (0–1)

Cost rhaglen fesul canlyniad a atalwyd = NNS × cost_fesul_sgrin
```

Cymharwch yn uniongyrchol â [NNT](../nifer-sy-n-angenrheidiol-i-w-trin/): mae NNS yn plygu effeithiolrwydd y twndis sgrinio → diagnosis → triniaeth cyfan i un rhif, tra bod NNT eisoes yn tybio bod y claf wedi'i ddiagnosio ac yn dechrau triniaeth.

## Enghraifft Waith

Mae gan boblogaeth darged rhaglen sgrinio risg digwyddiad sylfaenol o 2% dros gyfnod yr astudiaeth (`risg_sylfaenol = 0.02`), ac mae canfod yn gynnar yn cyflawni gostyngiad risg cymharol o 25% (`gostyngiad_risg_cymharol = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

Rhaid sgrinio 200 o bobl i atal un canlyniad.

Ar £50 fesul sgrin:
Cost rhaglen fesul canlyniad a atalwyd = 200 × £50 = £10,000
```

Y ffigur £10,000 hwnnw yw'r hyn y dylid ei bwyso yn erbyn cost y canlyniad ei hun a'r QALYs y byddai wedi'u costio — yr un gymhariaeth y mae [economeg atal](../economeg-atal/) yn ei gwneud ar gyfer rhaglenni atal yn gyffredinol.

## Cysylltiad Peirianneg Feddalwedd

NNS yw "faint o ddefnyddwyr, digwyddiadau neu geisiadau y mae'n rhaid iddynt redeg drwy lif canfod neu ddosbarthu i ddal un positif gwir sy'n werth gweithredu arno" — yn uniongyrchol berthnasol i systemau monitro a dosbarthu sy'n seiliedig ar rybuddion, lle mae cyflwr targed â cyffredinrwydd isel yn chwyddo NNS yn yr un modd ag y mae'n chwalu'r gwerth rhagfynegol positif (gweler [economeg sgrinio](../economeg-sgrinio/) a [gwerthuso AI clinigol](../gwerthuso-ai-clinigol/)). Dim ond os yw'r dalfa yn werth o leiaf 200 gwaith cost dosbarthu fesul digwyddiad y mae rheol fonitro y mae'n rhaid iddi brosesu 200 digwyddiad fesul dalfa go iawn yn werth ei rhedeg — yr un rhifyddeg yn union â'r enghraifft waith gofal iechyd uchod.

## Peryglon

- **Anwybyddu dibyniaeth ar risg sylfaenol**: mae gan yr un prawf neu raglen sgrinio NNS gwahanol iawn — a chost-effeithiolrwydd — mewn poblogaeth risg uchel o'i gymharu ag un risg isel. Peidiwch byth â dyfynnu NNS heb nodi'r boblogaeth y cafodd ei gyfrifo ar ei chyfer.
- **Cyfrif y enwadur anghywir**: mae NNS yn cyfrif pobl a *sgriniwyd*, nid pobl sy'n profi'n bositif neu'n dechrau triniaeth — mae eisoes yn ymgorffori effeithiolrwydd y twndis cyfan, felly ni ddylid byth ei gymharu â metrig a gyfrifir dros bositifau yn unig.
- **Cymharu ar draws cyfnodau dilyniant**: mae cyfnod dilyniant byrrach yn gyffredinol yn chwyddo NNS, oherwydd bod llai o ddigwyddiadau'n cael eu harsylwi yn y ffenestr. Dim ond pan gânt eu cyfrifo dros yr un hyd dilyniant y mae ffigurau NNS yn gymaradwy.

## Ffynonellau

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
