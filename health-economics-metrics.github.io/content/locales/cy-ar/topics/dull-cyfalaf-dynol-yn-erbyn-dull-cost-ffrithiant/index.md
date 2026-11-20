# Dull Cyfalaf Dynol yn erbyn Dull Cost Ffrithiant

Dyma'r ddau ddull cystadleuol o brisio cynhyrchiant a gollwyd — o salwch, anabledd neu farwolaeth — mewn astudiaethau cost salwch a chost-budd. Mae'r Dull Cyfalaf Dynol (HCA) yn prisio'r holl allbwn a gollwyd am gyfnod llawn yr absenoliaeth ar y gyfradd gyflog; mae'r Dull Cost Ffrithiant (FCM) yn ei brisio dim ond am y cyfnod byrrach y mae ei angen ar gyflogwr i adfer cynhyrchu. Mae dewis rhyngddynt yn newid amcangyfrif costau anuniongyrchol ddwywaith neu fwy.

## Pam mae hyn yn bwysig

Mae costau anuniongyrchol (cynhyrchiant) yn un o'r eitemau llinell mwyaf dadleuol mewn economeg iechyd yn union oherwydd bod y ddau ddull safonol yn anghytuno mor sydyn. Mae HCA yn trin pob diwrnod o absenoliaeth fel diwrnod o allbwn y mae'r economi yn ei golli mewn gwirionedd, wedi'i brisio ar y cyflog llawn am y cyfnod llawn — neu, ar gyfer marwolaeth neu anabledd parhaol, am weddill bywyd gwaith. Mae FCM yn dadlau, mewn economi â diweithdra a llacrwydd yn y farchnad lafur, nad yw'r rhan fwyaf o absenoliaeth hir mewn gwirionedd yn lleihau allbwn cenedlaethol unwaith y bydd cyflogwr wedi hyfforddi dirprwy neu ailddosbarthu gwaith; dim ond y "cyfnod ffrithiant" — yr amser i adfer cynhyrchu i'w lefel flaenorol — sy'n cynrychioli colled go iawn. Felly mae FCM yn cynhyrchu amcangyfrifon costau anuniongyrchol sy'n systematig is, yn fwy ceidwadol na HCA, ac nid yw'r ddau ddull yn droednodiadau cyfnewidiol: maent yn ddamcaniaethau economaidd gwahanol ynghylch beth mae "cynhyrchiant a gollwyd" yn ei olygu. Dyma hefyd pam mae [achos cyfeirio NICE](../asesiad-technoleg-iechyd/) yn eithrio costau cynhyrchiant yn ddiofyn, gan eu hadrodd, os o gwbl, fel dadansoddiad sensitifrwydd persbectif cymdeithasol ar wahân yn hytrach na'u cymysgu i ICER yr achos cyfeirio — gweler [persbectif dadansoddi](../persbectif-dadansoddi/).

## Y Fathemateg

```
Dull Cyfalaf Dynol:
Cost_HCA = cyflog_dyddiol × diwrnodau_a_gollwyd

Dull Cost Ffrithiant (ffurf symlach, wedi'i chapio ar y cyfnod ffrithiant):
Cost_FCM = cyflog_dyddiol × min(diwrnodau_a_gollwyd, diwrnodau_cyfnod_ffrithiant)

diwrnodau_cyfnod_ffrithiant = amcangyfrif sy'n benodol i wlad/sector o'r amser
                              i adfer cynhyrchu (yn hanesyddol ~85 diwrnod yng
                              nghanllawiau costio iMTA yr Iseldiroedd; yn
                              amrywio yn ôl gwlad ac yn cael ei ail-amcangyfrif
                              o bryd i'w gilydd)
```

Mae holl anghytundeb y ddau ddull yn byw yn y `min()`: nid yw HCA byth yn capio `diwrnodau_a_gollwyd`, felly mae'r gost yn dal i dyfu am yr absenoliaeth cyfan, tra bod FCM yn capio'r diwrnodau a gyfrifir ar y cyfnod ffrithiant, waeth pa mor hir y mae'r absenoliaeth gwirioneddol yn parhau.

## Enghraifft Waith

Mae gweithiwr i ffwrdd o'r gwaith am `diwrnodau_a_gollwyd = 180` diwrnod, gan ennill `cyflog_dyddiol = £150`.

**Dull Cyfalaf Dynol**:

```
Cost_HCA = 150 × 180 = £27,000
```

**Dull Cost Ffrithiant**, gan ddefnyddio cyfnod ffrithiant o `diwrnodau_cyfnod_ffrithiant = 85` (meincnod hanesyddol iMTA yr Iseldiroedd, fel ail-amcangyfrif cyfnodol y canllawiau):

```
Cost_FCM = 150 × min(180, 85) = 150 × 85 = £12,750
```

Mae £12,750 FCM yn llai na hanner £27,000 HCA ar gyfer yr *un* absenoliaeth — mae dewis y dull yn unig yn newid achos cost salwch yn sylweddol, cyn cyffwrdd ag unrhyw dybiaeth arall.

## Cysylltiad Peirianneg Feddalwedd

Mae hyn yn mapio'n uniongyrchol ar sut mae tîm yn prisio peiriannydd yn gadael:

- **Costio colli staff yn null HCA**: prisio'r golled fel cyflog llawn y peiriannydd a adawodd am gyhyd ag y mae'r rôl yn wag. Dyma fersiwn naïf y rhan fwyaf o fodelau cost colli staff, ac mae'n gorddatgan y golled am yr un rheswm ag y mae HCA yn gorddatgan colled cynhyrchiant — mae'n tybio bod y capasiti gwag yn gwbl gynhyrchiol drwy'r amser ac na wnaeth dim arall amsugno'r llacrwydd. Gweler [cadw gweithlu](../cadw-gweithlu/), sy'n meintioli'r gadwyn recriwtio/ymsefydlu/gorchudd swydd wag y mae'r dull hwn yn bwydo i mewn iddi.
- **Costio colli staff yn null FCM**: prisio'r golled dim ond am yr amser gwirioneddol i lenwi a chodi cyflymder dirprwy — "cyfnod ffrithiant" y peirianneg. Dyma'r rhif mwy amddiffynadwy ar gyfer achos busnes, yn union fel mai FCM yw'r dewis mwy ceidwadol mewn astudiaeth cost salwch.
- Yr un yw'r ddisgyblaeth sylfaenol â yn [cost cyfle](../cost-cyfle/): prisiwch adnodd a ddisodlwyd yn ôl yr hyn sy'n cael ei golli mewn gwirionedd, nid yn ôl hyd pennawd wedi'i luosi â chyfradd.

## Peryglon

- **Cymysgu HCA ac FCM o fewn un dadansoddiad, neu adrodd dim ond un heb ddatgelu'r dewis.** Gall yr un data absenoliaeth gynhyrchu gwahaniaeth 2x+ yn y gost a adroddir yn dibynnu ar y dull; rhaid datgan y dewis, nid ei gladdu.
- **Defnyddio HCA ar gyfer achos persbectif cymdeithasol heb ei nodi fel dadansoddiad sensitifrwydd.** Mae achos cyfeirio NICE yn eithrio costau cynhyrchiant yn benodol; mae amcangyfrif HCA persbectif cymdeithasol yn perthyn mewn dadansoddiad senario, nid yn yr ICER pennawd.
- **Cymhwyso'r naill ddull neu'r llall at waith di-dâl neu nad yw'n waith marchnad (e.e. gofalu) heb addasiad.** Mae'r ddau ddull yn tybio dirprwy cyfradd gyflog ar gyfer gwerth, nad yw'n trosglwyddo'n lân i waith heb gyflog marchnad.

## Ffynonellau

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — testun ar gostau cynhyrchiant.
- NICE health technology evaluations manual (PMG36) — persbectif yr achos cyfeirio a chanllawiau persbectif cymdeithasol dewisol. <https://www.nice.org.uk/process/pmg36>
