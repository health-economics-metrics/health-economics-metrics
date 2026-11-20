# Mynegai Crynodiad

Y Mynegai Crynodiad (Wagstaff, Paci, van Doorslaer, 1991) yw'r mesur ystadegol safonol o anghydraddoldeb sy'n gysylltiedig â statws economaidd-gymdeithasol mewn newidyn iechyd, gan amrywio o -1 i 1. Mae negyddol yn golygu bod y newidyn iechyd wedi'i grynhoi ymhlith y rhai dan anfantais economaidd-gymdeithasol, mae positif yn golygu ei fod wedi'i grynhoi ymhlith y rhai mwy cefnog, ac mae sero yn golygu dim graddiant economaidd-gymdeithasol cyson — mae'n troi amheuaeth o ddosbarthiad anghyfartal yn un rhif cymaradwy.

## Pam mae hyn yn bwysig

Gall rhaglen edrych yn effeithiol yn gyfan gwbl a dal i ddarparu ei budd bron yn gyfan gwbl i bobl a oedd eisoes yn well eu byd. Dyma'n union y pryderon dosbarthu y mae [cyrhaeddiad a thegwch](../cyrhaeddiad-a-thegwch/) yn eu holrhain mewn modd disgrifiadol — cyrhaeddiad wedi'i haenu yn ôl cwintel amddifadedd, bwlch tegwch rhwng y grwpiau uchaf ac isaf — ond ni ellir cywasgu tabl haenedig i un llinell duedd, ac ni ellir ei gymharu'n hawdd rhwng dau ymyriad hollol wahanol a fesurir ar raddfeydd gwahanol. Mae'r Mynegai Crynodiad yn datrys y ddwy broblem: mae'n cael ei gyfrifo yn yr un modd ar gyfer unrhyw newidyn iechyd yn erbyn unrhyw restr economaidd-gymdeithasol, felly gall gwasanaeth iechyd gwladol olrhain a yw anghydraddoldeb gwasanaeth digidol penodol yn lledu neu'n culhau o ryddhad i ryddhad, a gall gymharu tegwch dosbarthiadol cyflwyno ap â, dyweder, rhaglen sgrinio, ar yr un raddfa normaleiddiedig.

## Y Fathemateg

```
CI = (2 / cymedr(gwerthoedd_iechyd)) × Cyff(gwerthoedd_iechyd, rhengoedd_economaidd-gymdeithasol)

Cyff(X, Y) = cymedr(X × Y) − cymedr(X) × cymedr(Y)   (cyfamrywiant poblogaeth)

rhengoedd_economaidd-gymdeithasol: rheng ffracsiynol pob person yn y
dosbarthiad economaidd-gymdeithasol, yn [0, 1] (0 = dan yr anfantais fwyaf,
1 = y mwyaf manteisiol; ar gyfer data wedi'u grwpio/bandio, yn
gonfensiynol rheng canolbwynt pob grŵp)
```

Dyma'r "fformiwla cyfamrywiant gyfleus" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Banc y Byd 2008) — y llwybr byr safonol i ymarferwyr ar gyfer cyfrifo'r Mynegai Crynodiad yn uniongyrchol o arsylwadau pâr, heb yn gyntaf lunio ac integreiddio o dan gromlin grynodiad.

## Enghraifft Waith

Sgôr iechyd da hunan-adroddedig (1 = gwaethaf, 4 = gorau) a arsylwyd ar draws pedwar chwartel economaidd-gymdeithasol o'r un maint, pob un wedi'i gynrychioli gan reng canolbwynt ei gwartel:

```
gwerthoedd_iechyd           = [1.0, 2.0, 3.0, 4.0]
rhengoedd_economaidd-gymdeithasol = [0.125, 0.375, 0.625, 0.875]

cymedr(gwerthoedd_iechyd)       = 2.5
cymedr(iechyd × rheng)          = cymedr([0.125, 0.75, 1.875, 3.5]) = 1.5625
cymedr(rhengoedd)               = 0.5

Cyff = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

Mae `0.25` positif yn golygu bod y sgôr iechyd hwn wedi'i grynhoi ymhlith y grŵp manteisiol yn economaidd-gymdeithasol — mae'r ymatebwyr â sgorau uwch yn pwyso tuag at ben cefnogach y rhestr.

## Cysylltiad Peirianneg Feddalwedd

Dyma'r un mesur anghydraddoldeb sy'n seiliedig ar gyfamrywiant a ddefnyddir mewn economeg yn gyffredinol (cefnder cyfernod Gini), ac mae'n mapio ar fesur a yw buddion cynnyrch meddalwedd wedi'u crynhoi ymhlith segmentau defnyddwyr sydd eisoes yn fanteisiol yn hytrach na'u lledaenu'n deg — estyniad uniongyrchol o [gyrhaeddiad a thegwch](../cyrhaeddiad-a-thegwch/) (dimensiwn "reach" RE-AIM) i fesur ystadegol ffurfiol yn hytrach na bwlch a ddisgrifir. Lle mae cyrhaeddiad a thegwch yn adrodd effaith fesul haen, mae'r Mynegai Crynodiad yn cywasgu'r dosbarthiad cyfan i un rhif arwyddedig, sy'n addas fel un DPA a olrheinir ar draws datganiadau — ymarferol i ddangosfwrdd, lle nad yw dadansoddiad haenedig llawn yn addas.

## Peryglon

- **Drifft yn y confensiwn arwydd**: mae'r arwydd yn dibynnu ar sut y diffinnir y newidyn iechyd a'r rheng — mae troi'r naill yn troi'r arwydd, felly rhaid datgan y confensiwn a ddefnyddir yn benodol wrth unrhyw werth a adroddir.
- **Rhengoedd ffin yn lle rhengoedd canolbwynt**: mae data economaidd-gymdeithasol wedi'u grwpio neu eu bandio (e.e. cwintelau) yn gofyn am ddefnyddio rheng ffracsiynol pob grŵp yn ei *ganolbwynt*, nid ei ffin, neu mae'r mynegai'n gam.
- **Darllen "agos at sero" fel "dim anghydraddoldeb"**: mae Mynegai Crynodiad agos at sero yn golygu "dim graddiant economaidd-gymdeithasol cyson", nid "dim anghydraddoldeb" mewn ystyr absoliwt — gall anghydraddoldebau gwrthbwysol i gyfeiriadau gwahanol ganslo ei gilydd.

## Ffynonellau

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — y llawlyfr ymarferwyr safonol, ffynhonnell y fformiwla cyfamrywiant gyfleus a ddefnyddir yma. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
