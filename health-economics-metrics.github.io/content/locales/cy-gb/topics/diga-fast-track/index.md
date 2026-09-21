# Llwybr Cyflym DiGA yr Almaen

DiGA (Digitale Gesundheitsanwendungen) yw llwybr statudol yr Almaen ar gyfer "apiau ar bresgripsiwn" — y system genedlaethol gyntaf yn y byd lle mae meddygon yn rhagnodi apiau iechyd a gymeradwywyd, a lle mae'n rhaid i yswiriant statudol eu had-dalu. Dyma'r arbrawf byw blaenllaw ym maes talu am therapiwteg ddigidol ar raddfa genedlaethol.

## Pam mae'n bwysig

Atebodd DiGA y cwestiwn y mae pob cwmni iechyd digidol yn ei ofyn — "pwy fydd yn talu go iawn?" — trwy ddeddfwriaeth (y DVG, 2019). Mae'r cynllun yn nodedig:

- **Penderfyniad cyflym**: rhaid i BfArM (y rheoleiddiwr) benderfynu o fewn 3 mis.
- **Rhestriad dros dro**: gall apiau restru am 12 mis *tra'n dal i gynhyrchu tystiolaeth* — gan ennill refeniw yn ystod eu hastudiaeth allweddol.
- **Terfyn amser tystiolaeth**: profi "effaith gofal iechyd gadarnhaol" (budd meddygol, neu welliant strwythurol/gweithdrefnol perthnasol i gleifion) trwy astudiaeth gymharol — RCT fel arfer — neu gael eich dadrestru. Mae oddeutu hanner y cofnodion dros dro yn methu trosi.
- **Prisio**: mae'r gwneuthurwr yn gosod pris blwyddyn 1 yn rhydd; yna caiff ei negodi â ffederasiwn yr yswirwyr. Mae prisiau cychwynnol 3 mis canolrifol tua €500; elfennau prisio ar sail perfformiad yn cyrraedd o 2026.

Gwiriad realiti'r farchnad (ymchwil hyd at ddiwedd 2024): ~68 o apiau wedi'u rhestru, >1M o bresgripsiynau cronnus, ~81% o bresgripsiynau wedi'u hactifadu, ~€234M o wariant yswirwyr cronnus — marchnad go iawn, ond gymedrol o'i chymharu â'r cyhoeddusrwydd, ac mae ymlyniad ar ôl actifadu'n parhau'n wendid.

## Y fathemateg

Y model masnachol y mae pob sylfaenydd DiGA yn ei redeg:

```
Refeniw = presgripsiynau × cyfradd actifadu × pris fesul cyfnod presgripsiwn
Cost tystiolaeth = RCT allweddol (fel arfer €1M–3M) o fewn y ffenestr 12 mis
Gwerth disgwyliedig = P(tystiolaeth yn llwyddo) × refeniw cyflwr sefydlog − cost tystiolaeth

Gyda methiant trosi o ~50%, rhaid asesu P yn onest — mae hanner y maes yn
gwario'r arian RCT ac yn colli'r rhestriad.
```

## Enghraifft wedi'i datrys

Mae ap rheoli iselder yn rhestru dros dro ar €450/chwarter:

```
Blwyddyn 1: 20,000 presgripsiwn × 81% actifadu × €450 ≈ €7.3M refeniw
Cost RCT: €2M, yn rhedeg ar yr un pryd
Canlyniad A (tystiolaeth gadarnhaol): rhestriad parhaol, pris wedi'i negodi ~€380,
  cyflwr sefydlog 60,000 presgripsiwn/flwyddyn ≈ €18.5M/flwyddyn
Canlyniad B (tystiolaeth yn methu): dadrestrwyd ym mis 12; mae'r refeniw'n dod i ben.
```

Mae'r flwyddyn dros dro yn ariannu cynhyrchu'r dystiolaeth — arloesedd craidd y llwybr. Cyferbynnwch y dilyniant traddodiadol (tystiolaeth yn gyntaf, refeniw flynyddoedd yn ddiweddarach), sy'n llwgu'n union y cynhyrchion y mae DiGA am iddynt fodoli.

## Cysylltiad â pheirianneg meddalwedd

Mae patrwm DiGA — **mabwysiadu dros dro â metrig llwyddiant wedi'i gofrestru ymlaen llaw a therfyniad awtomatig** — yn uniongyrchol gopïadwy ar gyfer llywodraethu offer peirianneg: cyflwynwch yr offeryn i ddefnyddwyr cynhyrchu am 12 mis, cofrestrwch y metrig ymlaen llaw (amser a arbedwyd wedi'i fesur, gostyngiad digwyddiadau), a gadewch iddo ddod i ben yn awtomatig oni bai bod y dystiolaeth yn cyrraedd. Mae'n datrys paradocs y peilot (nid yw offer sydd angen graddfa i brofi gwerth byth yn cael graddfa) heb roi deiliadaeth barhaol i dechnoleg heb ei phrofi. Mae'r data 81%-actifadu/ymlyniad isel hefyd yn cario gwers cynnyrch: mae presgripsiwn (neu fandad gweithredol) yn sicrhau gosodiadau; dim ond ansawdd cynnyrch sy'n sicrhau defnydd parhaus — gweler [ymlyniad a dyfalbarhad](../adherence-and-persistence/).

## Peryglon

- **Trin rhestriad fel y llinell derfyn** — mae presgripsiynau'n dibynnu ar ymddiriedaeth y rhagnodwr; mae llawer o DiGAs rhestredig yn gweld cyfaint dibwys.
- **Tanbweru'r astudiaeth allweddol** i arbed arian yn ystod blwyddyn y refeniw — yr esgus economaidd ffug sy'n egluro llawer o'r gyfradd fethiant o 50%.
- **Trosglwyddo'r model heb y talwr**: mae DiGA yn gweithio am fod ad-dalu'n statudol; nid yw copi heb daliad gorfodol yn ddim mwy na rhaglen beilot.

## Ffynonellau

- Dadansoddiad o farchnad DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- Tueddiadau prisio DiGA, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Cymwysiadau Iechyd Digidol. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
