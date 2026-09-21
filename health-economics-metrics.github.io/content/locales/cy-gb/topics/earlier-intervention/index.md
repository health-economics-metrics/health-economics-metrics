# Ymyrraeth Gynharach

Os yw capasiti a arbedwyd yn caniatáu i ymarferydd adolygu ôl-groniadau diagnostig yn gynt, mae cleifion yn symud o'r rhestr aros i driniaeth weithredol yn gyflymach — ac mae trin yn gynharach fel arfer yn rhatach ac yn well na thrin yn hwyrach, oherwydd bod cyflyrau na chânt eu trin yn gwaethygu.

## Pam mae'n bwysig

Datblygiad clefyd yw llog cyfansawdd gofal iechyd. Nid yw claf sy'n aros gyda chyflwr heb ei drin mewn cyflwr sefydlog: mae canserau'n symud i gam mwy datblygedig, mae methiant y galon yn dirywio, mae iselder ysgafn yn troi'n ddifrifol. Mae ymyrryd yn gynharach felly'n rhoi budd dwbl — **canlyniadau gwell** (mwy o QALYs, wedi'u trin o linell sylfaen iachach) a **chostau triniaeth is** yn aml (mae triniaeth cam cynnar yn llai dwys na achub cam hwyr). Y mecanwaith hwn sy'n codi "llwybrau cyflymach" o fod yn gyfleustra gweithredol i fod yn anghenraid clinigol ac economaidd — a dyma'r rheswm sylfaenol pam mae [cost oedi](../cost-of-delay/) yn berthnasol i feddalwedd glinigol.

## Y mathemateg

```
Gwerth ymyrraeth gynharach (fesul claf) =
    [Cost_hwyr − Cost_cynnar]                        (gwrthbwyso cost triniaeth)
  + [QALYs_cynnar − QALYs_hwyr] × λ                  (enillion iechyd × trothwy)
  × P(datblygiad yn ystod yr oedi)                    (pwysoli tebygolrwydd)
```

Mae'r pwysoli tebygolrwydd yn hanfodol: nid yw pob claf sy'n aros yn dirywio. Modelwch y tebygolrwydd trosglwyddo fesul uned amser (o ddata hanes naturiol), nid yr achos gwaethaf. Yna disgowntiwch: mae costau a osgowyd flynyddoedd i ffwrdd yn werth llai heddiw ([disgowntio](../discounting-and-time-preference/)) — a nodwch fod y rhan fwyaf o ymyrraeth gynnar yn gost-*effeithiol* yn hytrach na chost-*arbed* (gweler [economeg atal](../prevention-economics/)).

## Enghraifft wedi'i gweithio

Ôl-groniad sgrinio retinopathi diabetig: 4,000 o gleifion, 6 mis y tu ôl. Mae graddio â chymorth AI yn treblu'r trwybwn ac yn clirio'r ciw mewn 8 wythnos. Hanes naturiol: mae tua 2% o'r cleifion sy'n aros/y flwyddyn yn datblygu i gamau sy'n bygwth golwg tra'u bod heb eu hadolygu.

```
Digwyddiadau datblygu a osgowyd gan gyflymiad o ~4 mis:
  4,000 × 2% × (4/12) ≈ 27 o gleifion

Fesul datblygiad a osgowyd:
  gwrthbwyso triniaeth (therapi mewnwytrol vs laser) ≈ £4,000
  enillion QALY (golwg wedi'i gadw) ≈ 0.8 QALY × £20,000 = £16,000

Gwerth ≈ 27 × (4,000 + 16,000) ≈ £540,000 — o un ôl-groniad wedi'i glirio unwaith,
cyn cyfrif yr enillion trwybwn parhaol.
```

## Y cysylltiad â pheirianneg feddalwedd

Dau drosglwyddiad. Yn gyntaf, yr un amlwg: mae meddalwedd sy'n cyflymu llwybrau diagnostig a thriniaeth (trioli, graddio AI, llwybro canlyniadau) yn cynhyrchu gwerth drwy'r union fodel hwn — ac mae'r model yn dweud wrthych pa lwybr i'w gyflymu: yr un â'r gromlin ddatblygu fwyaf serth, nid y ciw hiraf. Yn ail, y drych peirianneg: mae **namau'n datblygu hefyd**. Mae nam a ddelir yn ystod dylunio'n costio sgwrs; mewn cynhyrchiad mae'n costio digwyddiad; mae'r gromlin gost "shift-left" (10–100× yn ôl cam) yn fodel datblygu, ac mae'r fersiwn onest yn cario'r un rhybudd — mae canfod yn gynnar fel arfer yn gost-effeithiol, nid arian am ddim, oherwydd bod gan adolygiadau a phrofion gostau go iawn ac ni fyddai'r rhan fwyaf o'r problemau a ddelir byth wedi datblygu.

## Peryglon

- **Tybio'r datblygiad gwaethaf posibl i bawb** — y pwysoli tebygolrwydd yw'r gwahaniaeth rhwng dadansoddiad ac eiriolaeth.
- **Rhagfarn amser-arwain (lead-time bias)**: mae canfod clefyd yn gynharach heb newid canlyniadau'n edrych fel budd ond nid yw — *ymyrraeth effeithiol* gynharach yw'r honiad, nid canfod cynharach yn unig (gweler [economeg sgrinio](../screening-economics/)).
- **Cyfrif dwbl**: gyda honiadau rhestr aros ac RTT wedi'u seilio ar yr un cyflymiad — un gwelliant llwybr, un set o fuddion, wedi'u dyrannu unwaith.

## Ffynonellau

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, rhaglen sgrinio llygaid diabetig. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
