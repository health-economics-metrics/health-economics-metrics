# Dyrannu Costau i'r Geiniog yn Union

Mae rhannu cyfanswm o arian — grant a rennir, bil seilwaith, ffigur effaith cyllideb — rhwng sawl derbynnydd gan ddefnyddio rhifyddeg canran naïf yn rheolaidd yn cynhyrchu rhannau nad ydynt yn adio'n ôl i'r cyfanswm gwreiddiol. Dyraniad i'r geiniog yn union yw'r ateb: dull cyfanrif/degol, sy'n gweithio mewn unedau arian lleiaf (ceiniogau), sy'n gwarantu bod y rhannau'n adio i'r cyfan *yn union*, ni waeth pa mor anwastad y mae'n rhannu. Mae angen y patrwm hwn, nid canrannau pwynt arnawf, ar unrhyw beiriannydd meddalwedd sy'n gorfod cysoni cyfanswm wedi'i rannu i'r geiniog — cyflogres, talu grantiau, ailgodi tâl am wasanaethau a rennir.

## Pam mae hyn yn bwysig

Mae hwn yn batrwm sylfaenol, a enwir, ym maes peirianneg meddalwedd menter: mae *Patterns of Enterprise Application Architecture* Martin Fowler (2002) yn dogfennu `Money` ac `Allocate` yn union oherwydd bod "rhannu $100 yn dair ffordd" yn broblem y mae cod naïf yn ei chael yn anghywir yn gyson, ac yn anghywir yn dawel — mae'r gwall yn ymddangos dim ond pan fydd rhywun yn cysoni'r llyfrau ac yn canfod bod y rhannau geiniog yn brin (neu'n ormod) o'r cyfanswm. Mewn gwaith economeg iechyd a chyllid y GIG nid yw hyn yn academaidd: mae cyfansymiau effaith cyllideb yn cael eu rhannu ar draws safleoedd, blynyddoedd neu gyfarwyddiaethau; mae costau seilwaith a thrwyddedu a rennir yn cael eu dosrannu ar draws adrannau yn ôl nifer staff neu gyfran gweithgarwch. Rhaid i bob un o'r rhaniadau hynny gysoni'n union, oherwydd mae cyfarwyddwr cyllid a roddir rhannau nad ydynt yn adio i'r cyfanswm yn peidio ag ymddiried yn y model cyfan.

## Y Fathemateg

```
Dull naïf (diffygiol):
  rhan_i = talgrynnu(cyfanswm × cyfran_i / Σ cyfrannau)     — talgrynnu pob rhan yn annibynnol

Dull union (gweddill mwyaf / "dyraniad gweddill mwyaf"):
  1. sylfaen_i = llawr(cyfanswm_unedau_lleiaf × cyfran_i / Σ cyfrannau)   — unedau lleiaf cyfan (ceiniogau) yn unig
  2. gweddill = cyfanswm_unedau_lleiaf − Σ sylfaen_i                      — ceiniogau dros ben, bob amser < nifer y derbynwyr
  3. dosbarthu 1 uned leiaf ychwanegol yr un i'r `gweddill` derbynnydd sydd â'r
     gweddill ffracsiynol mwyaf o gam 1, nes bod y gweddill wedi'i ddihysbyddu

Canlyniad: Σ rhan_i == cyfanswm, bob amser, trwy adeiladwaith.
```

Nid yw'r dull union byth yn talgrynnu rhan ar ei phen ei hun — mae'n talgrynnu'r *dyraniad cyfan* fel un weithred, a dyna sy'n gwneud i'r anghyfnewidiolyn cyfanswm ddal.

## Enghraifft Waith

Rhannu $100.00 yn dair ffordd gyfartal (`cyfrannau = [1, 1, 1]`).

Dull naïf: $100.00 ÷ 3 = $33.333…, wedi'i dalgrynnu'n annibynnol i'r geiniog agosaf yn rhoi $33.33 i bob derbynnydd. Wedi'i adio: $33.33 × 3 = $99.99 — mae un geiniog wedi diflannu, ac nid oes unrhyw eitem llinell unigol yn "anghywir" ddigon i'w gweld wrth archwilio.

Dull union: `sylfaen` = $33.33 i'r tri (9,999 uned leiaf i gyd o `llawr(10,000 / 3) = 3,333` ceiniog yr un), gan adael gweddill o 1 geiniog (10,000 − 9,999). Mae'r un geiniog dros ben honno'n mynd i pa bynnag dderbynnydd sydd â'r gweddill ffracsiynol mwyaf yn y rhaniad — mae'r derbynnydd penodol yn fanylyn mewnol o'r dewis wrth gydraddoldeb, nid rhywbeth y dylai galwr ddibynnu arno. Mae dau dderbynnydd yn cael $33.33 ac un yn cael $33.34, ac mae'r tair rhan yn adio i union $100.00.

Dyma'n union y rhifyddeg y mae angen [dadansoddiad effaith cyllideb](../dadansoddiad-effaith-ar-y-gyllideb/) amdani pryd bynnag y mae'n rhaid rhannu cyfanswm effaith cyllideb ar draws safleoedd, carfannau neu flynyddoedd ariannol a'i gysoni'n ôl i'r cyfanswm a gyhoeddwyd — gweler [cyfuno costau sy'n ddiogel o ran arian cyfred](../cyfuno-costau-sy-n-ddiogel-o-ran-arian-cyfred/) ar gyfer y broblem gydymaith o adio llawer o eitemau llinell o'r fath heb ddrifft.

## Cysylltiad Peirianneg Feddalwedd

Mae hwn yn llythrennol yn "batrwm Money" pensaernïaeth meddalwedd menter — patrwm sylfaenol, a enwir, ar gyfer yn union y dosbarth hwn o fygiau, nid tric untro. Mae methiannau cysoni ariannol go iawn wedi'u cludo o'r union ddosbarth hwn o fygiau: rhaniadau canran wedi'u cyfrifo mewn `f64`, wedi'u talgrynnu fesul derbynnydd, a heb eu gwirio byth yn erbyn y cyfanswm gwreiddiol. Mae'n cysylltu'n uniongyrchol â modiwl [cyfanswm cost perchnogaeth](../cyfanswm-cost-perchnogaeth/) y gadwrfa hon, sydd ar hyn o bryd yn adio costau pwynt arnawf plaen ar draws blynyddoedd ac opsiynau — mae'r un ddisgyblaeth union yn berthnasol pryd bynnag y mae'n rhaid dosrannu cyfanswm TCO neu effaith cyllideb yn hytrach na'i adio'n unig.

## Peryglon

- **Canran-yna-talgrynnu yn lle gweddill-mwyaf**: dyrannu gan ddefnyddio canrannau pwynt arnawf a thalgrynnu pob derbynnydd yn annibynnol, sy'n cyfansoddi gwall talgrynnu ac anaml yn adio'n ôl i'r cyfanswm, yn enwedig ar draws llawer o dderbynwyr.
- **Anwybyddu esbonwyr uned leiaf arian cyfred**: tybio bod gan bob arian cyfred 2 le degol — mae gan yr Yen Japaneaidd 0, mae gan rai arian cyfred 3 — mae rhaniad canran wedi'i grefftio â llaw fel arfer yn caled-godio 2 ac yn torri'n dawel ar gyfer arian cyfred eraill; mae rheolaeth ddyrannu union yn darllen yr esboniwr o'r arian cyfred ei hun (ISO 4217).
- **Ail-ddyrannu gweddill sydd eisoes wedi'i ddyrannu**: rhedeg y drefn ddyrannu eto ar yr hyn sydd ar ôl o ddyraniad blaenorol, heb wiriadau idempoteiddrwydd, a all gredydu'r un geiniog ddwywaith i'r un derbynnydd.

## Ffynonellau

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — y patrymau `Money` ac `Allocate`.
- ISO 4217 — safon cod arian cyfred a chronfeydd, sy'n diffinio esboniwr uned leiaf pob arian cyfred.
