# Dadansoddi Penderfyniadau Aml-faen Prawf (MCDA)

Model sgorio cyfanswm pwysol yw dadansoddi penderfyniadau aml-faen prawf (MCDA) a ddefnyddir mewn asesu technoleg iechyd pan nad yw un trothwy ICER/parodrwydd i dalu yn dal popeth y mae penderfynwr yn poeni amdano: tegwch, angen heb ei ddiwallu, arloesedd, effaith cyllideb, difrifoldeb clefyd. Mae pob maen prawf yn cael pwysau sy'n adlewyrchu ei bwysigrwydd (wedi'i gael gan randdeiliaid, pwysau'n adio i 1), mae pob opsiwn yn cael sgôr normaleiddiedig fesul maen prawf (fel arfer 0–1), a'r sgôr gyffredinol yw'r cyfanswm pwysol — yr un siâp mathemategol â cherdyn sgorio dewis cyflenwr meddalwedd.

## Pam mae hyn yn bwysig

Defnyddir MCDA mewn fframweithiau fel EVIDEM, ac gan rai cyrff HTA ar gyfer asesiadau clefydau amddifad/prin lle ystyrir bod dull trothwy cost-fesul-QALY llym yn rhy gul i ddal popeth sy'n bwysig am benderfyniad. Ffurfiolodd Tasglu Arferion Da Datblygol MCDA ISPOR ganllawiau arfer da ar gyfer cael pwysau a sgorau mewn modd amddiffynadwy, yn union oherwydd bod penderfyniad wedi'i bwysoli'n anffurfiol yn hawdd ei lunio ac yn hawdd ei chwarae. Pan fo gan dechnoleg iechyd ddimensiynau gwerth na all un [trothwy parodrwydd i dalu](../trothwyon-parodrwydd-i-dalu/) eu cynrychioli — difrifoldeb, arloesedd, tegwch — mae MCDA yn rhoi strwythur penodol, archwiliadwy i benderfynwyr i'w cyfuno, yn hytrach na barn ddigyhoeddiad.

## Y Fathemateg

```
Sgôr MCDA = Σ_i (pwysau_i × sgôr_i)

dylai'r pwysau adio i 1 (wedi'u cael trwy ddulliau rhanddeiliaid fel
pwysoli swing neu'r Broses Hierarchaeth Ddadansoddol)
```

## Enghraifft Waith

Mae pwyllgor HTA yn sgorio therapiwtig digidol ar bedwar maen prawf:

```
Maen prawf                         Pwysau   Sgôr    Pwysau × Sgôr
Budd clinigol                      0.4      0.8     0.32
Effaith cost                       0.3      0.5     0.15
Difrifoldeb clefyd / angen heb ei ddiwallu 0.2  0.9     0.18
Arloesedd                          0.1      0.6     0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Mae'r pwysau'n adio i 1.0 (0.4 + 0.3 + 0.2 + 0.1), a sgôr MCDA yw 0.71 (0.32 + 0.15 + 0.18 + 0.06). Mae'r pwyllgor yn cymharu 0.71 â throthwy y cytunwyd arno ymlaen llaw, neu'n ei restru yn erbyn technolegau cystadleuol a sgoriwyd yn yr un modd.

## Cysylltiad Peirianneg Feddalwedd

Dyma'r un fathemateg yn union â cherdyn sgorio dewis cyflenwr pwysol, matrics gwerthuso RFP, neu fodel sgorio blaenoriaethu nodweddion — gweler [adeiladu vs prynu](../adeiladu-vs-prynu/), achos defnydd cerdyn sgorio pwysol clasurol mewn caffael meddalwedd. Mae hefyd yn werth cyferbynnu â [WSJF a CD3](../wsjf-a-cd3/): dull blaenoriaethu *cymhareb* yw WSJF/CD3 (cost oedi wedi'i rannu â maint swydd neu hyd), tra bod MCDA yn *gyfanswm* pwysol. Mae MCDA a WSJF/CD3 yn ddau ateb gwahanol yn strwythurol i "sut ydym ni'n rhestru opsiynau cystadleuol", ac mae gwybod pa un y mae penderfyniad penodol ei angen mewn gwirionedd — gwerth ychwanegol ar draws meini prawf annibynnol, yn erbyn dwysedd gwerth fesul uned o gapasiti prin — yn bwysicach na pha fformiwla sy'n edrych yn fwy trylwyr.

## Peryglon

- **Tuedd wrth gael pwysau**: mae pwy bynnag sy'n gosod y pwysau i bob pwrpas yn rhagbenderfynu'r safle, felly gall "fformiwla" olchi penderfyniad gwleidyddol neu fasnachol fel cyfrifiad gwrthrychol. Dogfennwch pwy osododd y pwysau a sut.
- **Cyfrif dwbl maen prawf a ddaliwyd eisoes mewn man arall**: mae sgorio "costeffeithiolrwydd" fel un maen prawf tra'n *hefyd* sgorio "effaith cost" ar wahân yn gorbwysoli arian o'i gymharu â'r meini prawf eraill heb i neb fwriadu hynny.
- **Manylder ffug**: mae sgôr bwysol dau le degol (0.71) yn awgrymu mwy o drylwyredd nag y gall y graddfeydd rhanddeiliaid 0–10 sylfaenol ei gynnal mewn gwirionedd, ac yn aml nid adroddir amrywioldeb rhwng graddwyr yn y graddfeydd hynny o gwbl.

## Ffynonellau

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
