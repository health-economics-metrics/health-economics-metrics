# Actifadu a Derbyniad

Cyfradd actifadu yw'r gyfran o'r rhai sy'n cofrestru sy'n cyrraedd y gwerth ystyrlon cyntaf (y weithred "aha" — y darlleniad cyntaf wedi'i gofnodi, y wers gyntaf wedi'i chwblhau). Derbyniad yw'r fersiwn ar lefel poblogaeth: cyfran y boblogaeth *gymwys* sy'n mabwysiadu o gwbl. Gyda'i gilydd, dyma byrth blaen y twndis gwerth: caffael → derbyniad → actifadu → [cadw](../retention-and-churn/) → canlyniad.

## Pam mae hyn yn bwysig

Mae defnyddwyr nad ydynt wedi'u hactifadu yn gost bur: gwariant caffael, darpariaeth, arwyneb cymorth — dim gwerth clinigol o gwbl. Mae meincnodau'n dangos bod actifadu meddalwedd gofal iechyd *islaw* y cyfartaledd traws-ddiwydiant (≈24% o'i gymharu ag ≈37% ar gyfer actifadu defnyddwyr newydd mewn un set feincnodi SaaS; cwblhau rhestr wirio ymgynefino ~20%), sy'n adlewyrchu ymgynefino trymach (hunaniaeth, cydsyniad, diogelwch clinigol). Mae derbyniad yn cario'r risg ar lefel poblogaeth: yn fframwaith [RE-AIM](../reach-and-equity/), effaith iechyd y cyhoedd ≈ cyrhaeddiad × effeithiolrwydd — mae ap rhagorol a fabwysiedir gan 3% o'r boblogaeth gymwys ond yn symud y nodwydd boblogaeth 3% o werth. Ar gyfer therapiwtigau digidol a ragnodir, mae'r porth derbyniad i'w weld mewn data cenedlaethol: **mae ~81% o bresgripsiynau DiGA yr Almaen yn cael eu hactifadu** — nid yw un o bob pum triniaeth a ragnodwyd ac a dalwyd amdani byth yn dechrau (gweler [llwybr cyflym DiGA](../diga-fast-track/)).

## Y Fathemateg

```
Cyfradd actifadu = defnyddwyr sy'n cwblhau'r weithred allweddol o fewn y ffenestr / cofrestriadau × 100
Cyfradd dderbyniad = mabwysiadwyr / poblogaeth gymwys × 100
Cyfradd lenwi DTx  = codau presgripsiwn wedi'u hactifadu / presgripsiynau a ddyroddwyd × 100

Model gwerth y twndis:
  cymwys × derbyniad × actifadu × budd wedi'i bwysoli yn ôl cadw = gwerth poblogaeth
  — pedwar lluosiad; fel arfer gwella'r ffactor lleiaf sy'n
  dominyddu (theori cyfyngiadau ar gyfer twndisau)
```

## Enghraifft Waith

Mae comisiynydd yn cynnig ap atal diabetes i 80,000 o breswylwyr cymwys:

```
Gwahoddwyd → cofrestrwyd:  80,000 → 12,000  (derbyniad 15%)
Cofrestrwyd → actifadwyd (sesiwn gyntaf + gosod nod, 7 diwrnod): 12,000 → 5,400 (45%)
Actifadwyd → cwblhau'r rhaglen 6 mis: 5,400 → 1,600 (30%)

Effaith y rhaglen (treial, y rhai a gwblhaodd): 0.03 QALY + £180 o gostau a osgowyd
Gwerth poblogaeth = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Gwerth fesul person cymwys = £15.6 — o'i gymharu â £780 pe bai pob person cymwys yn cwblhau.

Ble i fuddsoddi? Mae dyblu'r derbyniad (15→30%) yn dyblu'r gwerth; mae codi
actifadu o 45→65% yn ychwanegu ~44%; mae'r ddau'n curo mireinio pellach
ar gynnwys y rhaglen y mae'r 1,600 eisoes yn ei gwblhau.
```

## Cysylltiad Peirianneg Feddalwedd

Actifadu yw'r cam mwyaf tebygol i beirianneg fynd i'r afael ag ef yn y twndis: mae ffrithiant dilysu hunaniaeth, llifau cydsyniad, dylunio cyflwr gwag, ac amser-i'r-gwerth-cyntaf yn god, nid polisi (canolrif amser-i-werth gofal iechyd ≈ 1 diwrnod 7 awr mewn data meincnodi — mae pob awr ohono'n risg colli defnyddwyr). Mae derbyniad yn broblem systemau dosbarthu: integreiddio i lwybrau atgyfeirio (y foment presgripsiwn), gwahoddiadau a gymeradwyir gan feddygon teulu (mae ymddiriedaeth yn trosglwyddo), a hygyrchedd (iaith, sgiliau digidol — gweler [cyrraedd a thegwch](../reach-and-equity/)). Mae'r model gwerth twndis uchod yn gynhyrchydd achos busnes ar gyfer y ddau: lluoswch y ffactorau, dewch o hyd i'r cyfyngiad, a phrisiwch y datrysiad yn erbyn y gwerth poblogaeth y mae'n ei ryddhau.

## Peryglon

- **Diffinio actifadu fel cyfleustra** (e-bost wedi'i ddilysu) yn hytrach nag ystyr clinigol (gweithred therapiwtig gyntaf) — mae hyn yn chwyddo'r fetrig ac yn torri'r gadwyn werth.
- **Gemau enwadur derbyniad**: "o'r rhai a ymwelodd â'r wefan" yn hytrach na'r boblogaeth gymwys wirioneddol — mae comisiynwyr yn poeni am yr olaf.
- **Effeithiau dethol**: y defnyddwyr hawsaf i'w hactifadu yw'r rhai lleiaf sâl a lleiaf difreintiedig; gall gwelliannau twndis ehangu bylchau tegwch tra'n gwella cyfartaleddau.

## Ffynonellau

- Meincnodau actifadu (SaaS gofal iechyd). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- Data actifadu DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- Fframwaith RE-AIM. <https://re-aim.org/>
