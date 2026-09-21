# Gwireddu Buddiannau

Rheolaeth gwireddu buddiannau (BRM) yw'r ddisgyblaeth o nodi, gosod llinell sylfaen, olrhain, a *dangos tystiolaeth* fod y buddiannau a addawyd mewn achos busnes wedi'u gwireddu mewn gwirionedd ar ôl y cyflenwi. Ym maes buddsoddi cyhoeddus y DU mae'n byw o fewn **Model y Pum Achos** yn Llyfr Gwyrdd EM Trysorlys; ym myd meddygaeth, ei berthynas yw gwyliadwriaeth ôl-farchnad.

## Pam mae'n bwysig

Addewidion yw achosion busnes; archwiliad yw gwireddu buddiannau. Mae gwerthusiadau o raglenni digidol mawr yr NHS wedi canfod dro ar ôl tro fod buddiannau a ragwelwyd byth wedi'u gwireddu — a phan nad oedd y buddiannau'n rhyddhau arian parod, ni wnaethant ddim i wella sefyllfa ariannol yr ymddiriedolaeth. Ymateb y Llyfr Gwyrdd: rhaid i bob achos gwario basio **pum achos** (strategol, economaidd, masnachol, ariannol, rheolaethol), gyda gwireddu buddiannau wedi'i gynllunio yn yr achos rheolaethol *cyn cymeradwyo* — perchnogion wedi'u henwi, llinellau sylfaen wedi'u cofnodi, dyddiadau mesur wedi'u gosod. Heb hyn, mae "arbedodd y feddalwedd 30 munud fesul nyrs" yn parhau'n ffuglen gan y gwerthwr am byth.

## Y mathemateg

```
Cyfradd wireddu = buddiannau wedi'u gwireddu / buddiannau a ragwelwyd   (fesul budd, fesul cyfnod)

Y mecanwaith sy'n ei gwneud yn gyfrifadwy:
  llinell sylfaen wedi'i chofnodi CYN mynd yn fyw (fel arall ni ellir mesur y newid)
  pob budd: perchennog, metrig, ffynhonnell ddata, amserlen fesur
  rhagolwg wedi'i addasu ar gyfer tuedd optimistiaeth adeg y gwerthusiad (mandad y Llyfr Gwyrdd)
  buddiannau wedi'u dosbarthu'n arian parod / nad ydynt yn rhyddhau arian parod / ansoddol, ac wedi'u holrhain ar wahân
  (gweler cash-releasing-vs-non-cash-releasing.md)
```

## Enghraifft wedi'i gweithio

Addawodd achos busnes e-restru, y flwyddyn: gostyngiad o £450k mewn gwariant asiantaeth (arian parod), 8,000 awr o amser rheolwr ward (capasiti), cydymffurfiaeth well o ran cyfradd lenwi (ansoddol). Ddeuddeng mis ar ôl mynd yn fyw:

```
Budd                Rhagolwg   Gwireddwyd  Cyfradd  Tystiolaeth
Gwariant asiantaeth  £450,000   £287,000    64%      llyfr cyfrifon vs blwyddyn sylfaen
Oriau rheolwr        8,000      5,100       64%      sampl astudio amser-symudiad
Cydymffurfiaeth lenwi +10pp     +12pp       120%     data'r system restru

Camau gweithredu o'r adolygiad (dyna bwynt BRM):
olrheiniwyd y diffyg asiantaeth i ddwy ward na chawsant erioed eu hymgyfarwyddo → eu hymgyfarwyddo;
cofnodwyd gwall optimistiaeth 30% y model rhagolwg → ei gymhwyso i'r achos nesaf.
```

64% o wireddu — nid methiant yw hyn, ond *gwybodaeth*. Mae achosion na chânt eu mesur yn honni 100% am byth.

## Cysylltiad â pheirianneg meddalwedd

Mae sefydliadau peirianneg yn cymeradwyo buddsoddiadau platfform ar sail buddiannau a ragwelwyd, ac anaml iawn y byddant yn eu harchwilio — union batholeg y mae BRM yn ei thrwsio. Y trosiad ysgafn: mae pob cynnig uwchlaw trothwy penodol yn enwi perchnogion buddiannau, metrigau llinell sylfaen, a dyddiad adolygu T+6 mis; mae cyfraddau gwireddu'n bwydo'n ôl i mewn i ba mor fawr yw'r disgownt y mae'r sefydliad yn ei roi i ragolwg nesaf y tîm hwnnw (neu'r gwerthwr hwnnw). Dyma hefyd yr ateb i amheuaeth ynghylch offer AI: mae [canfyddiad MIT mai ni ddangosodd ~95% o beilotiaid GenAI unrhyw enillion mesuradwy i'r elw a cholled](../ai-return-on-investment/) yn ganlyniad gwireddu buddiannau — roedd gan y peilotiaid a *wnaeth* ddychwelyd gwerth, linellau budd y gellid eu holrhain a'u perchen. Mae rhagweld → mesur → ailgalibro yn union yr un ddolen â pheilotiaid a brisiwyd yn ôl [EVPI](../expected-value-of-perfect-information/), wedi'u rhedeg ar raddfa portffolio.

## Peryglon

- **Dim llinell sylfaen cyn mynd yn fyw** — yr esgeulustod marwol, na ellir ei drwsio.
- **Amddifadedd budd**: dim perchennog wedi'i enwi yn golygu na fydd unrhyw un yn casglu'r data, a bydd pob adolygiad yn dweud "ar y trywydd iawn ar y cyfan."
- **Buddiannau wedi'u cyfrif ddwywaith ar draws rhaglenni** sy'n honni'r un capasiti a ryddhawyd — cadwch gofrestr fuddiannau ar draws y portffolio.
- **Theatr wireddu**: mesur yr enillion ansoddol hawdd tra bo'r llinellau arian parod yn cael eu gadael heb eu harchwilio'n dawel.

## Ffynonellau

- HM Treasury, canllawiau'r Green Book a Model y Pum Achos. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Gwerthusiad rhaglen Global Digital Exemplar (gwersi buddiannau digidol yr NHS). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
