# Dadansoddiad Sensitifrwydd

Mae dadansoddiad sensitifrwydd penderfyniadol (DSA) yn amrywio un rhagdybiaeth ar y tro dros ystod gredadwy i weld a yw'r casgliad yn goroesi. Y darlun safonol yw diagram corwynt (tornado): paramedrau wedi'u rhestru yn ôl faint maen nhw'n siglo'r canlyniad.

## Pam mae'n bwysig

Mae pob model economaidd wedi'i adeiladu ar amcangyfrifon — amser a arbedwyd, defnydd, costau uned. Mae asesu technoleg iechyd yn gwrthod derbyn amcangyfrif pwynt ("mae ROI yn 340%") heb dystiolaeth fod y casgliad yn gadarn yn wyneb anghytundeb rhesymol ynghylch y mewnbynnau. Mae diagram corwynt yn dweud wrth y penderfynwr *pa ragdybiaeth i'w chroesholi*: os nad yw'r achos yn gweithio ond pan fo'r paramedr mwyaf dadleuol ar ei ben optimistaidd, gall pawb weld hynny ar unwaith.

Dyma'r arferiad mwyaf trosglwyddadwy o economeg iechyd i achosion busnes meddalwedd.

## Y fathemateg

Ar gyfer pob paramedr p ag ystod gredadwy [p_isel, p_uchel]:

```
Canlyniad_isel  = model(p = p_isel,  pob un arall ar yr achos sylfaenol)
Canlyniad_uchel = model(p = p_uchel, pob un arall ar yr achos sylfaenol)
Sigl(p)         = |Canlyniad_uchel − Canlyniad_isel|
```

Rhestrwch baramedrau yn ôl y sigl; plotiwch fariau llorweddol o amgylch canlyniad yr achos sylfaenol. Amrywiadau: DSA dwy-ffordd (amrywio dau baramedr ar grid), dadansoddiad trothwy (canfod gwerth y paramedr lle mae'r penderfyniad yn troi).

## Enghraifft wedi'i gweithio

Cynorthwyydd codio AI ar gyfer 200 o ddatblygwyr. Achos sylfaenol: trwydded £39/datblygwr/mis; 30 munud/datblygwr/dydd wedi'u harbed; cost lwythog £60/awr; 220 diwrnod gwaith.

```
Budd blynyddol yr achos sylfaenol = 200 × 0.5h × 220 × £60 = £1,320,000
Cost flynyddol                    = 200 × £39 × 12         = £93,600
Net yr achos sylfaenol             = £1,226,400
```

Corwynt (un paramedr ar y tro):

```
Amser wedi'i arbed 0.1–1.0 awr/dydd: net = £170,400 … £2,546,400   (sigl £2.38M) ← yn dominyddu
Cost lwythog £40–£80/awr:            net = £786,400 … £1,666,400   (sigl £0.88M)
Diwrnodau gwaith 200–240:            net = £1,106,400 … £1,346,400 (sigl £0.24M)
Trwydded £30–£50/mis:                net = £1,248,000 … £1,200,000 (sigl £48k)
```

Dadansoddiad trothwy: mae'r budd net yn cyrraedd sero ar tua **2.1 munud/dydd** wedi'u harbed. Nid yw'r penderfyniad yn sensitif i bris y drwydded ac mae'n dibynnu'n llwyr ar yr amcangyfrif amser-a-arbedwyd — felly mesurwch hwnnw, nid y gweddill. (A chofiwch mai capasiti yw'r canlyniad, nid arian parod — gweler [rhyddhau arian parod yn erbyn peidio â rhyddhau arian parod](../cash-releasing-vs-non-cash-releasing/).)

## Cysylltiad â Pheirianneg Meddalwedd

Mae peirianwyr eisoes yn gwneud hyn yn reddfol fel "beth os ydym yn anghywir am X?" — mae DSA jyst yn ei wneud yn systematig ac yn weladwy. Rhowch ddiagram corwynt ym mhob cynnig offer, cynllun capasiti, a dadansoddiad [adeiladu-yn-erbyn-prynu](../build-vs-buy/). Mae'n trosi dadleuon ynghylch pwy sy'n iawn yn reddfol yn gytundebau ynghylch pa baramedr i fynd i'w fesur — yn aml drwy beilot, y gellir prisio ei werth ei hun (gweler [gwerth disgwyliedig gwybodaeth berffaith](../expected-value-of-perfect-information/)).

## Peryglon

- **Ystodau wedi'u dewis i wenieithu**: ±10% o amgylch pob mewnbwn ni waeth beth yw'r ansicrwydd gwirioneddol. Mae amcangyfrifon amser-a-arbedwyd yn haeddu ±80%; prisiau trwyddedau ±10%.
- **Mae un-ar-y-tro yn methu rhyngweithiadau** — mae paramedrau cydberthynol (defnydd ac amser wedi'i arbed) angen dadansoddiad dwy-ffordd neu [ddadansoddiad sensitifrwydd tebygolegol](../probabilistic-sensitivity-analysis/) llawn.
- **Gwneud y dadansoddiad a'i anwybyddu**: os yw'r corwynt yn dweud bod yr achos yn dibynnu ar un ffigur meddal, y cam nesaf yw mesur, nid cymeradwyo.

## Ffynonellau

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
