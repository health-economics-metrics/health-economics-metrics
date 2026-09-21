# Gwerth Disgwyliedig Gwybodaeth Berffaith (EVPI)

EVPI yw'r swm mwyaf y dylai penderfynwr ei dalu i ddileu ansicrwydd cyn penderfynu — pris ffurfiol "gadewch i ni redeg astudiaeth yn gyntaf".

## Pam mae'n bwysig

Mae systemau iechyd yn wynebu'r dewis hwn yn gyson: mabwysiadu nawr ar dystiolaeth amherffaith, neu ariannu mwy o ymchwil yn gyntaf. Mae EVPI yn rhoi rhif ar yr ail opsiwn. Os yw EVPI yn £50,000 a bod y treial arfaethedig yn costio £2 filiwn, mabwysiadwch nawr. Os yw EVPI yn £20 miliwn, mae'r treial yn fargen. Mae'r un cwestiwn — "a ddylem beilota hyn cyn ei gyflwyno'n llawn?" — yn codi ar gyfer pob penderfyniad ynghylch offer menter, ac ni fydd bron neb yn ei brisio.

## Y mathemateg

EVPI yw'r bwlch rhwng penderfynu â rhagwelediad perffaith a phenderfynu nawr ar ddisgwyliadau:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = paramedrau ansicr (gyda'u dosraniad cyd-destunol)
NMB(j,θ) = budd ariannol net opsiwn j o ystyried θ
```

Term cyntaf: cyfartaledd y taliad dewis-gorau ar draws pob byd posibl (rydych bob amser yn dewis yn gywir). Ail derm: taliad yr un opsiwn sydd orau ar gyfartaledd (mae'n rhaid ymrwymo nawr). Mae EVPI ≥ 0 bob amser. Mae EVPI poblogaeth yn lluosi yn ôl nifer y penderfyniadau yr effeithir arnynt. Wedi'i gyfrifo'n uniongyrchol o samplau [PSA](../probabilistic-sensitivity-analysis/).

## Enghraifft wedi'i gweithio

Cyflwyno cynorthwyydd dogfennu AI i 5,000 o glinigwyr, neu beidio. Dau fyd:

```
Byd A (p = 0.6): mae'r cynorthwyydd yn arbed 20 munud/dydd → NMB cyflwyno = +£8M
Byd B (p = 0.4): mae'r cynorthwyydd yn arbed ~0 (ffrithiant llif gwaith) → NMB cyflwyno = −£3M
NMB "peidio â chyflwyno" = £0 yn y ddau fyd.
```

Penderfynu nawr: E[NMB cyflwyno] = 0.6 × 8 − 0.4 × 3 = **+£3.6M** → cyflwynwch.

Gyda gwybodaeth berffaith: ym myd A dewiswch gyflwyno (+£8M), ym myd B dewiswch ddim byd (£0). Gwerth disgwyliedig = 0.6 × 8 + 0.4 × 0 = **£4.8M**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Mae peilot trylwyr 3 mis yn costio £150,000 sy'n datrys yn sylweddol pa fyd rydych ynddo yn werth chweil yn ddiamheuol — ac nid yw unrhyw beilot sy'n costio mwy na £1.2M, waeth pa mor drylwyr.

## Y cysylltiad â pheirianneg feddalwedd

EVPI yw economeg y sbeic, y peilot, y prawf A/B, a'r prawf cysyniad. Mae'n rhoi dwy reol ymarferol:

- **Dim ond yn werth ei ariannu y mae peilot os gallai'r penderfyniad newid mewn gwirionedd.** Os byddech yn cyflwyno beth bynnag y bo canlyniad y peilot, mae EVPI = 0 a'r peilot yn theatr.
- **Cyfyngwch wariant peilot at EVPI.** Mae gwerth gwybodaeth wedi'i ffinio gan werth y penderfyniad y mae'n ei lywio.

Mae EVPI rhannol (EVPPI) yn ymestyn hyn i baramedrau unigol: "beth yw ei werth i sicrhau'r union ffigwr amser a arbedwyd?" — sy'n dweud wrthych beth ddylai'r peilot ei fesur.

## Peryglon

- **Rhedeg peilotau heb reol benderfynu ynghlwm** — mae gwybodaeth na all newid y dewis yn ddiwerth yn ôl diffiniad.
- **Anwybyddu cost oedi casglu gwybodaeth**: mae peilot 6 mis yn oedi 6 mis o fudd ([cost oedi](../cost-of-delay/)); gwerth net y peilot = EVPI wedi'i ddatrys − cost oedi − cost y peilot.
- **Trin EVPI fel rhagolwg.** Mae'n derfyn uchaf ar werth gwybodaeth, nid amcangyfrif o'r hyn y bydd astudiaeth benodol yn ei gyflawni.

## Ffynonellau

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
