# Metrigau Llif

Mae metrigau llif yn mesur sut mae gwaith yn symud drwy system cyflenwi: amser cylchred, amser arwain, trwybwn, gwaith ar y gweill (WIP), ac effeithlonrwydd llif. Fe'u llywodraethir gan Gyfraith Little — yr un fathemateg ciwio sy'n llywodraethu gwelyau ysbyty a rhestrau aros.

## Pam mae'n bwysig

Nid gwaith yw'r rhan fwyaf o amser cyflenwi — aros ydyw. Mae astudiaethau effeithlonrwydd llif o waith gwybodaeth yn dangos yn rheolaidd fod eitemau'n cael eu gweithio arnynt yn weithredol dim ond **5–15%** o'u hamser a aeth heibio; ciwiau yw'r gweddill. Golyga hynny mai dileu ciwiau, nid recriwtio, yw'r cyflymiad rhataf — yr union fewnwelediad a ddarganfu rhaglenni llif cleifion ysbytai am welyau. Ar gyfer unrhyw beth sydd â [chost oedi](../cost-of-delay/), mae metrigau llif yn lleoli lle mae cost yr oedi'n cronni.

## Y mathemateg

```
Amser cylchred        = t(wedi gorffen) − t(wedi dechrau)
Amser arwain          = t(wedi'i ddosbarthu) − t(wedi'i ofyn)     (yn cynnwys ciw cyn-gwaith)
Trwybwn               = eitemau wedi'u cwblhau / cyfnod
WIP                   = eitemau wedi dechrau ond heb orffen
Effeithlonrwydd llif  = amser gweithredol / (amser gweithredol + amser aros) × 100

Cyfraith Little:  WIP cyfartalog = trwybwn × amser cylchred cyfartalog
                  (yn gyfwerth: amser cylchred = WIP / trwybwn)
```

Cyfraith Little yw'r lifer: ar drwybwn sefydlog, mae torri WIP yn torri amser cylchred yn gyfrannol. Mae hefyd yn rhedeg ysbytai: `gwelyau a feddiannwyd = derbyniadau/dydd × hyd arhosiad`.

## Enghraifft wedi'i gweithio

Mae gan dîm 40 eitem ar y gweill ac mae'n cwblhau 10/wythnos: amser cylchred = 40/10 = 4 wythnos. Maent yn gosod terfynau WIP, gan dorri WIP i 15: amser cylchred = 15/10 = **1.5 wythnos** — yr un bobl, yr un trwybwn, cyflenwi 62% yn gyflymach, yn llwyr o ddisgyblaeth ciwio.

Wedi'i brisio â CoD: os yw eitemau'n gyfartaledd o £3,000/wythnos o gost oedi, mae pob eitem nawr yn treulio 2.5 wythnos yn llai mewn ciw: 10 eitem/wythnos × 2.5 × 3,000 = **£75,000/wythnos o gost oedi wedi'i dileu** — o newid polisi nad yw'n costio dim.

Drych ysbyty: 40 derbyniad/dydd × 6.0 diwrnod hyd arhosiad = 240 gwely; torrwch yr aros anghlinigol o fewn hyd arhosiad i 5.6 diwrnod a bydd 16 gwely'n rhyddhau ([hyd arhosiad](../length-of-stay/)) — yr un gyfraith, yr un lifer.

## Y cysylltiad â pheirianneg feddalwedd

Metrigau llif yw'r iaith gyffredin rhwng peirianneg cyflenwi a gweithrediadau iechyd:

- **Meincnodau is-gam PR** (LinearB, ~8M PR): amser codi elît < 7 awr, adolygu < 6 awr, cylchred gyfan < ~26 awr — ciw pur yw amser codi, y peth cyntaf i'w drin.
- **[Rhestrau aros](../waiting-list-impact/)** yw ôl-groniadau; **[RTT](../referral-to-treatment/)** yw amser arwain; **[meddiannaeth gwelyau](../bed-days-saved/)** yw WIP. Mae gwelliant yn trosglwyddo i'r ddau gyfeiriad: terfynau WIP ↔ llyfnhau derbyniadau; offeryniad amser ciw ↔ tracio cam llwybr.
- Mae effeithlonrwydd llif o dan 15% yn normal yn y ddau faes, ac mae'r ddau'n ei guddio am fod *pobl* yn brysur tra bod *gwaith* yn aros — mesurwch gloc y gwaith, nid y gweithwyr.

## Peryglon

- **Addoli defnydd**: mae gyrru defnydd gweithwyr tuag at 100% yn ffrwydro amseroedd ciw'n aflinellol (M/M/1: aros ∝ ρ/(1−ρ)) — dyna pam mae ysbytai 95%-lawn yn gridloc a thimau 95%-ddyrannedig yn stolio.
- **Cyfartaleddau dros ddosraniadau anghymesur**: mae amseroedd cylchred yn gynffon-drwm; rhagolwg â phersentilau (p85), nid cyfartaleddau.
- **Torri WIP drwy wrthod gwaith ymlaen llaw** a'i alw'n welliant llif — nid diflannodd y galw, fe giwiodd y tu allan i ffin y mesur (y fersiwn ysbyty: ambiwlansys yn aros y tu allan i'r adran achosion brys).

## Ffynonellau

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
