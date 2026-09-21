# Metrigau Ymgysylltiad

Mae metrigau ymgysylltiad yn mesur faint mae defnyddwyr yn defnyddio ap iechyd mewn gwirionedd: gludedd DAU/MAU, amlder a hyd sesiynau, defnydd o nodweddion. Mewn iechyd digidol, nid rhywbeth i frolio amdano yw ymgysylltiad — mae'n **ddos**: yr amlygiad y mae'n rhaid i unrhyw effaith glinigol lifo drwyddo.

## Pam mae'n bwysig

Nid yw cyffur sy'n aros yn y botel yn gwella neb; mae ap sy'n aros heb ei osod neu heb ei agor yn yr un modd o fethiant. Mae pob honiad economaidd-iechyd ar gyfer cynnyrch iechyd defnyddwyr yn lluosi drwy ymgysylltiad — mesurwyd effeithiolrwydd mewn treialon ar ryw lefel ddefnydd benodol, ac mae gwerth byd-go-iawn yn graddio yn ôl pa mor agos mae'r defnydd wrth ddefnyddio'r cynnyrch mewn gwirionedd at y lefel honno. Meincnodau cynnyrch safonol: ystyrir bod gludedd DAU/MAU o gwmpas **20% yn iach** ar gyfer apiau symudol yn gyffredinol, a >25% yn eithriadol; mae apiau iechyd yn aml yn is.

## Y mathemateg

```
Gludedd (DAU/MAU)    = defnyddwyr gweithredol dyddiol / defnyddwyr gweithredol misol × 100
Metrigau sesiwn      = sesiynau/defnyddiwr/cyfnod; hyd cyfartalog = cyfanswm amser / sesiynau
Ymgysylltiad nodwedd = defnyddwyr sy'n cyflawni'r weithred allweddol / defnyddwyr gweithredol

Fframio dos-ymateb (yr uwchraddiad economeg-iechyd):
  effaith wireddwyd ≈ effaith treial × f(defnydd gwirioneddol / defnydd treial)
  lle daw f o ddadansoddiad dos-ymateb — gweler y cysyniad "ymgysylltiad
  effeithiol" yn adherence-and-persistence.md: digon o ddefnydd i
  gyflawni'r canlyniad a fwriadwyd, a all fod yn fach a chyfyngedig
```

## Enghraifft wedi'i gweithio

Dangosodd astudiaeth allweddol ap pwysedd gwaed ostyngiad systolig o 6 mmHg ymhlith defnyddwyr a gofnododd ≥4 darlleniad/wythnos. Wrth ei ddefnyddio go iawn ymhlith 50,000 o ddefnyddwyr cofrestredig:

```
MAU 20,000 (40%); o'r rheini, yn cofnodi ≥4×/wythnos: 7,000
Defnyddwyr dos-effeithiol = 7,000 / 50,000 = 14% o'r sylfaen gofrestredig

Effaith ar lefel y boblogaeth ≈ effaith y treial wedi'i chyflenwi i 14%, nid 100%:
mae unrhyw fodel economaidd sy'n dyfynnu "50,000 o ddefnyddwyr × 6 mmHg" yn
gorddweud tua 7×. Model gonest: 7,000 × yr effaith lawn + credyd rhannol
(o ddata dos-ymateb, os oes rhai) i'r 13,000 o ddefnyddwyr is-drothwy.
```

Y lluosi hwn — drwy'r twndis ymgysylltiad hyd at y dos effeithiol — yw'r man mwyaf cyffredin lle mae economeg iechyd digidol yn gorddweud.

## Y cysylltiad â pheirianneg feddalwedd

Peirianwyr sy'n berchen ar y twndis ymgysylltiad, sy'n eu gwneud yn berchnogion ar newidyn *clinigol*: mae ffrithiant ymsefydlu, strategaeth hysbysu, amser llwytho, a chydnerthedd all-lein i gyd yn symud y dos a gyflenwir. Dau oblygiad dylunio: offeryniwch y **weithred sy'n ystyrlon yn glinigol** (darlleniadau wedi'u cofnodi, gwersi wedi'u cwblhau), nid agoriadau — mae DAU wedi'i adeiladu ar sesiynau "bownsio hysbysiadau" yn dwyll dos; a thriniwch dargedau ymgysylltiad fel targedau *digonolrwydd*, nid uchafu — mae ap sy'n cyflawni ei ganlyniad mewn 5 munud/wythnos ac yn cilio o'r ffordd yn glinigol ddelfrydol ac yn "wael" yn fetrigol (gweler ymgysylltiad effeithiol yn [cydymffurfiaeth a dyfalbarhad](../adherence-and-persistence/)). Gwerthuswch y gwaith ymgysylltiad ei hun drwy'r model effaith-boblogaeth uchod: mae ennill 2 bwynt mewn cyfran dos-effeithiol yn llinell QALY y gellir ei meintioli.

## Peryglon

- **Ymgysylltiad fel canlyniad**: modd yw defnydd; y canlyniad yw'r [PROM](../patient-reported-outcomes/) neu'r pwynt terfyn clinigol.
- **Cyfartaleddau dros ddefnydd deuffurf**: mae poblogaethau apiau iechyd yn hollti'n ddefnyddwyr ymroddedig ac yn ysbrydion; nid yw cyfartaleddau'n disgrifio neb — carfaniwch nhw.
- **Chwyddo dos drwy batrymau tywyll**: mae rhediadau di-dor (streaks) a hysbysiadau euogrwydd yn codi metrigau ac yn gallu niweidio'r poblogaethau pryderus y mae apiau iechyd yn eu gwasanaethu; mae gan gynhyrchion clinigol foeseg glinigol.
- **Tarddiad meincnodau gwerthwyr**: daw'r rhan fwyaf o feincnodau ymgysylltiad cyhoeddedig o werthwyr dadansoddeg, nid adolygiad cymheiriaid; graddnodwch yn erbyn eich treialon eich hun.

## Ffynonellau

- Meincnodau ymgysylltiad ag apiau. <https://getstream.io/blog/app-retention-guide/>
- Canllawiau KPI apiau iechyd. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al., ar ymgysylltiad effeithiol. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
