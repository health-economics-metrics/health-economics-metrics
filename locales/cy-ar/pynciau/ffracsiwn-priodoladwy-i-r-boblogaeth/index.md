# Ffracsiwn Priodoladwy i'r Boblogaeth (PAF)

PAF yw cyfran baich clefyd neu ganlyniad mewn poblogaeth sy'n briodoladwy i amlygiad ffactor risg penodol — y gyfran a fyddai'n diflannu pe bai'r amlygiad yn cael ei ddileu'n llwyr. Mae'n trosi "mae'r ffactor risg hwn yn dyblu eich ods" yn rif lefel poblogaeth y gall comisiynydd gynllunio o'i gwmpas mewn gwirionedd: faint o achosion, a faint o gost, y mae amlygiad penodol yn werth mynd ar ei ôl mewn gwirionedd.

## Pam mae hyn yn bwysig

Cyflwynodd Levin PAF ym 1953 i ateb cwestiwn cul, concrid: pe na bai neb yn ysmygu, faint o ganser yr ysgyfaint fyddai'n diflannu? Mae'r un rhifyddeg bellach yn maint cynllunio atal cenedlaethol ym mhobman o strategaethau tybaco a gordewdra i restrau ffactorau risg astudiaeth Baich Clefydau Byd-eang WHO, oherwydd nid yw risg gymharol ar ei phen ei hun yn dweud dim am effaith — gall ffactor risg ddyblu ods digwyddiad prin a phrin symud baich clefyd y boblogaeth, neu godi ods digwyddiad cyffredin ychydig yn unig a dal i gyfrif am gyfran enfawr o achosion. PAF yw'r hyn sy'n troi "mae ffactor risg X yn beryglus" yn "byddai dileu ffactor risg X yn atal cymaint â hyn o achosion y flwyddyn", y rhif y mae achos busnes rhaglen atal ei angen mewn gwirionedd. Gweler [economeg atal](../economeg-atal/) am yr hyn mae'n ei gostio i weithredu ar y rhif hwnnw unwaith y bydd gennych ef.

## Y Fathemateg

```
PAF = cyffredinrwydd_amlygiad × (risg_gymharol − 1) / (1 + cyffredinrwydd_amlygiad × (risg_gymharol − 1))

cyffredinrwydd_amlygiad = ffracsiwn y boblogaeth sy'n agored i'r ffactor risg (0–1)
risg_gymharol      = risg y canlyniad mewn rhai agored o'i gymharu â rhai nad ydynt (e.e. 2.5 = 2.5×)

Achosion priodoladwy = cyfanswm_achosion × PAF
```

Mae PAF yn codi gyda cyffredinrwydd amlygiad a risg gymharol — gall risg gymharol gymedrol uwch (dyweder 1.5×) ynghlwm wrth amlygiad cyffredin iawn gynhyrchu PAF mwy na risg gymharol ddramatig (dyweder 5×) ynghlwm wrth un prin. Dyna'r rheswm cyfan pam ei fod yn bodoli fel rhif ar wahân i risg gymharol.

## Enghraifft Waith

Mae ffactor risg yn bresennol mewn 30% o boblogaeth (`cyffredinrwydd_amlygiad = 0.3`) ac yn codi risg y canlyniad 2.5 gwaith (`risg_gymharol = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

Gyda 1,000 o achosion/blwyddyn yn y boblogaeth:
Achosion priodoladwy = 1,000 × 0.3103 ≈ 310 achos/blwyddyn
```

Mae ychydig dan draean o baich blynyddol y canlyniad hwn yn briodoladwy i'r amlygiad — byddai ei ddileu'n llwyr (y nenfwd damcaniaethol; nid oes unrhyw ymyriad go iawn yn cyflawni dileu amlygiad 100%) yn atal tua 310 o'r 1,000 o achosion bob blwyddyn.

## Cysylltiad Peirianneg Feddalwedd

PAF yw fersiwn epidemiolegol "faint o'n cyfaint digwyddiadau sy'n briodoladwy i'r un prif achos hwn?" — yr un siâp o gwestiwn y mae timau'n ei ofyn wrth faint dosbarth penodol o ddefnyddio neu ddibyniaeth yn erbyn cyfanswm digwyddiadau cynhyrchu, yn hytrach na thrin pob digwyddiad fel un sydd yr un mor werth ei drwsio yn yr un modd. Gall categori prif achos sy'n bresennol mewn cyfran fawr o'r defnyddiadau gyda dim ond risg gymharol gymedrol o achosi digwyddiad ragori ar gategori prin, risg gymharol uchel o ran ble i wario ymdrech peirianneg yn gyntaf — yn union mewnwelediad PAF, wedi'i gyfieithu.

## Peryglon

- **Adio PAFs ar draws ffactorau risg**: nid yw PAFs ar gyfer ffactorau lluosog sy'n effeithio ar yr un canlyniad yn adio i 100% — gallant ragori arno'n gyfan gwbl, oherwydd bod ffactorau'n rhyngweithio ac yn rhannu llwybrau achosol. Trin pob PAF fel "pe bai'r ffactor hwn yn unig yn cael ei ddileu", byth fel rhaniad o gyfanswm y risg.
- **Trawsblannu risg gymharol ar draws poblogaethau**: mae risg gymharol a amcangyfrifwyd mewn un boblogaeth (cyffredinrwydd amlygiad sylfaenol gwahanol, cymysgwyr gwahanol) yn cyfrifo PAF camarweiniol pan gaiff ei chymhwyso at fynychder amlygiad poblogaeth wahanol.
- **Cymysgu PAF â risg briodoladwy ymhlith y rhai agored**: mae PAF ar lefel poblogaeth ac yn dibynnu ar fynychder amlygiad; mae risg briodoladwy ymhlith y rhai agored ar lefel unigolyn ac nid yw. Maent yn ateb cwestiynau gwahanol — peidiwch â dyfynnu un i ateb y llall.

## Ffynonellau

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
