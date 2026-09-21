# Dadansoddiad Cost-Cyfleustod (CUA)

Mae CUA yn ddadansoddiad cost-effeithiolrwydd sydd â **chanlyniad generig, wedi'i bwysoli yn ôl dewisiadau** — bron bob amser y [QALY](../quality-adjusted-life-year/) (neu [DALY](../disability-adjusted-life-year/) a osgowyd). Am fod uned y canlyniad yn gyffredinol, gall CUA gymharu ymyriadau ar draws clefydau hollol wahanol.

## Pam mae'n bwysig

Rhaid i wasanaeth iechyd cenedlaethol ddewis rhwng cyffur canser, ap iechyd meddwl, a robot llawfeddygol o'r un gyllideb. Ni all unedau naturiol eu cymharu; gall QALYs. CUA felly yw'r dull achos-cyfeirio yn NICE ac yn y rhan fwyaf o gyrff HTA: mae ei allbwn — cost fesul QALY, wedi'i farnu yn erbyn [trothwy](../willingness-to-pay-thresholds/) — yr agosaf peth sydd gan bolisi iechyd at gyfradd gyfnewid gyffredinol. Os ydych am i'ch meddalwedd gael ei hariannu *yn lle rhywbeth arall*, CUA yw'r arena.

## Y fathemateg

```
ICUR = ΔCost / ΔQALYs      (yr ICER gyda QALYs fel uned effaith)

ΔQALYs = Σ (hyd_i × defnyddioldeb_i)_newydd − Σ (hyd_i × defnyddioldeb_i)_hen
```

Defnyddioldebau o offerynnau dilys ([EQ-5D](../eq-5d/)); costau a QALYs ill dau wedi'u [disgowntio](../discounting-and-time-preference/) ar 3.5% (achos cyfeirio NICE); ansicrwydd trwy [PSA](../probabilistic-sensitivity-analysis/).

## Enghraifft wedi'i datrys

Ap CBT ar gyfer pryder cymedrol o'i gymharu â rhestr aros am therapi wyneb yn wyneb, fesul claf:

```
Costau: trwydded ap + cymorth        £250
        therapi wedi'i ddadleoli      −£680   (nid oes angen mwyach ar 40% o ddefnyddwyr)
        ΔC = 250 − 680 = −£430 (yn arbed arian)

QALYs:  6 mis ar ddefnyddioldeb 0.76 yn lle 0.68 wrth aros
        ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALYs
```

ΔC < 0 ac ΔE > 0: mae'r ap yn **trechu** — yn well ac yn rhatach, heb angen cymhareb. Pe bai'r dybiaeth dadleoli therapi ddim ond yn 10%, ΔC = 250 − 170 = +£80, a ICUR = 80 / 0.04 = **£2,000/QALY** — dal ymhell islaw £20,000. Mae'r achos yn goroesi hyd yn oed pan dorrir y dybiaeth allweddol yn ddifrifol: dyna sut olwg sydd ar CUA cadarn (ac mae'r [diagram tornado](../sensitivity-analysis/) yn ei brofi).

## Cysylltiad â pheirianneg meddalwedd

Syniad dwfn CUA — *un uned gyfansawdd, wedi'i phwysoli yn ôl dewisiadau, i gymharu pethau annhebyg* — yw'r patrwm ar gyfer cymharu buddsoddiadau peirianneg annhebyg (diogelwch yn erbyn profiad datblygwyr yn erbyn dibynadwyedd). Y dewisiadau gonest yw naill ai uned gyfansawdd amddiffynadwy (prin) neu [dabl cost-canlyniad](../cost-consequence-analysis/) esboniadwy (arferol). Yr hyn y mae CUA yn rhybuddio yn ei erbyn yw'r cyfansoddyn ffug: "sgôr effaith" wedi'i phwysoli lle mae'r pwysau wedi'u tiwnio ar ôl y ffaith i wneud i'r opsiwn a ffefrir ennill. Treuliodd economeg iechyd ddegawdau'n safoni sut i ddwyn allan ddefnyddioldeb yn union fel bod y pwysau'n dod cyn y gymhariaeth.

## Peryglon

- **Enillion defnyddioldeb sydd islaw sensitifrwydd yr offeryn** (gweler y gwahaniaeth lleiaf sy'n glinigol arwyddocaol yn [canlyniadau a adroddir gan gleifion](../patient-reported-outcomes/)) — mae ΔE bach wedi'i luosi â phoblogaethau mawr yn dric golchi clasurol.
- **Methu â chyfrif dadleoliad gofal cymharydd** — y term cost mwyaf ar gyfer cynhyrchion digidol yn aml yw'r hyn y maent yn ei ddisodli.
- **Mapio sgoriau nad ydynt yn ddewisiadau i ddefnyddioldebau** gan ddefnyddio croesgysylltiadau heb eu dilysu.

## Ffynonellau

- Geirfa Consortiwm Economeg Iechyd Efrog: dadansoddiad cost-cyfleustod. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- Gwerthusiadau technoleg iechyd NICE: y llawlyfr (PMG36). <https://www.nice.org.uk/process/pmg36>
