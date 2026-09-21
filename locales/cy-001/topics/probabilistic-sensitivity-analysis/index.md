# Dadansoddiad Sensitifrwydd Tebygolyddol (PSA)

Mae PSA yn priodoli dosraniad tebygolrwydd i bob paramedr ansicr, yn samplu pob un ohonynt ar yr un pryd filoedd o weithiau (Monte Carlo), ac yn adrodd y *tebygolrwydd* mai opsiwn yw'r dewis gorau — yn hytrach nag amcangyfrif pwynt sengl.

## Pam mae hyn yn bwysig

Mae achos cyfeirio NICE yn *mynnu* PSA. Mae dadansoddiad penderfynol yn ateb "beth os yw un mewnbwn yn anghywir?"; mae PSA yn ateb "o ystyried popeth nad ydym yn ei wybod ar unwaith, pa mor debygol yw hi ein bod yn gwneud y penderfyniad cywir?" Mae ei allbwn nodedig, y **gromlin dderbynioldeb cost-effeithiolrwydd (CEAC)**, yn plotio'r tebygolrwydd bod opsiwn yn gost-effeithiol yn erbyn y trothwy parodrwydd i dalu — gan droi "mae'r ICER yn £24,000/QALY" yn "mae siawns o 78% mai dyma'r dewis cywir am £30,000/QALY."

## Y Fathemateg

```
Ar gyfer pob un o N tynnu (N ≈ 10,000):
  samplwch bob paramedr θ o'i ddosraniad
    (costau ~ Gamma, tebygolrwyddau ~ Beta, defnyddioldebau ~ Beta, effeithiau ~ Normal/logNormal)
  cyfrifwch NMB_j(θ) = λ × Effaith_j(θ) − Cost_j(θ) ar gyfer pob opsiwn j

CEAC_j(λ) = cyfran y tynniadau lle mae gan opsiwn j yr NMB uchaf ar drothwy λ
```

Gweler [budd ariannol net](../net-monetary-benefit/) am NMB a [trothwyon parodrwydd i dalu](../willingness-to-pay-thresholds/) am λ.

## Enghraifft Waith

Achos busnes ymfudo platfform. Tri mewnbwn ansicr:

```
Cost ymfudo         ~ Gamma,  cymedr £800k, sd £200k
Budd blynyddol       ~ Normal, cymedr £350k, sd £150k
Hyd y budd          ~ Unffurf, 3–6 blynedd
```

Ar gyfer pob un o 10,000 tynnu cyfrifwch fudd net = hyd × blynyddol − cost (disgowntio wedi'i hepgor er eglurder). Canlyniadau enghreifftiol:

```
Budd net cymedrig:     £775k
Tebygolrwydd net > 0:  0.86
Canradd 5fed–95fed:   −£180k … +£1.9M
```

Dywedodd yr amcangyfrif pwynt "wrth gwrs, ie." Mae'r PSA yn dweud "86% ie, gyda chynffon real lle rydym yn colli £180k+" — sef yr hyn y mae perchennog portffolio ei angen mewn gwirionedd, ac mae'n prisio'r achos dros redeg pigyn darganfod yn gyntaf (gweler [EVPI](../expected-value-of-perfect-information/)).

## Cysylltiad Peirianneg Feddalwedd

Mae peirianwyr eisoes yn ymddiried yn Monte Carlo ar gyfer rhagolygu cyflenwi (mae samplu trwybwn yn curo amcangyfrifon pwynt). Estynnwch yr un peirianwaith i arian: dosraniadau ar fabwysiadu, amser a arbedwyd, a chyflog, yna adroddwch "tebygolrwydd bod y buddsoddiad platfform hwn yn net-bositif" yn hytrach na ROI o gywirdeb ffug. Mae cromlin o'r math CEAC — tebygolrwydd o fod yr opsiwn gorau fel swyddogaeth o sut mae'r sefydliad yn prisio awr peiriannydd — yn arteffact gwirioneddol well i bwyllgor cyllido nag unrhyw rif sengl.

## Peryglon

- **Dosraniadau sbwriel**: mae PSA gyda gwyriadau safonol dyfeisiedig yn ddadansoddiad penderfynol mewn cot labordy. Seiliwch daeniadau ar ddata neu ddethol arbenigol strwythuredig.
- **Anwybyddu cydberthynas** rhwng paramedrau (mae mabwysiadu uchel fel arfer yn cydberthyn ag amser uchel a arbedwyd); mae samplu annibynnol yn tanbrisio risg cynffon.
- **Adrodd y cymedr yn unig** o'r efelychiad — pwrpas cyfan hyn yw'r dosraniad a'r tebygolrwydd penderfynu.

## Ffynonellau

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- Gwerthusiadau technoleg iechyd NICE: y llawlyfr (PMG36). <https://www.nice.org.uk/process/pmg36>
