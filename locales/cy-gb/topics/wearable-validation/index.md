# Dilysu Dyfeisiau Gwisgadwy

Mae metrigau dilysu'n meintioli pa mor dda y mae mesuriadau dyfais wisgadwy'n cytuno â safon aur glinigol (ECG ar gyfer cyfradd curiad y galon, polysomnograffeg ar gyfer cwsg): **MAPE**, cydberthyniad cyfateb, cytundeb Bland–Altman — ynghyd â'r metrigau gweithredol sy'n gatio ansawdd data byd-go-iawn: **cydymffurfiad amser gwisgo** a **chyflawnrwydd data**.

## Pam mae hyn yn bwysig

Dilysu yw'r rhagofyniad ar gyfer popeth sy'n dilyn: ni all dyfais na all brofi cytundeb â mesuriad cyfeirio angori [pwyntiau terfyn digidol](../digital-endpoints-and-biomarkers/), cynnal [bilio RPM](../remote-patient-monitoring-economics/), na chario honiadau clinigol. Trothwyon derbyniol y maes ar gyfer cyfradd curiad y galon: **MAPE ≤5%** (llym) neu **≤10%** (llac) yn erbyn ECG. Pwyntiau cyfeirio o'r llenyddiaeth: Oura Gen 3 MAPE cyfradd curiad y galon gorffwys 1.67% (CCC 0.97); Fitbit Charge 6 MAPE ~5.5% — mae dyfeisiau defnyddwyr bellach yn rhychwantu'r ffin radd-glinigol, a dyna'n union pam mae'r mesuriad yn bwysig fesul dyfais a fesul cyflwr.

## Y Fathemateg

```
MAPE = (1/n) Σ |wedi'i fesur_i − cyfeirnod_i| / cyfeirnod_i × 100

CCC (cydberthyniad cyfateb) = cytundeb sy'n cynnwys cydberthyniad a
      thuedd systematig fel ei gilydd (Pearson r wedi'i gosbi gan
      symudiad lleoliad/graddfa)

Bland–Altman: tuedd gymedrig ± 1.96 SD terfynau cytundeb — yn dangos
      a yw'r gwall yn dibynnu ar faint y gwerth

Gatiau gweithredol:
Cydymffurfiad amser gwisgo = amser wedi'i wisgo / amser protocol × 100
Cyflawnrwydd data          = pwyntiau data a arsylwyd / a ddisgwylir × 100
```

Rhaid adrodd dilysu **fesul cyflwr gweithgarwch** (gorffwys, symud, cwsg) a fesul poblogaeth — mae synhwyro optegol PPG yn dirywio gydag artiffact symud, cyswllt gwael, a thonau croen tywyllach, dull methu sydd wedi'i ddogfennu ac sy'n berthnasol i degwch.

## Enghraifft Waith

Mae rhaglen ward rithwir yn dewis dyfais wisgadwy monitro. Ymgeisydd A: MAPE gorffwys 2.1%, MAPE ymarfer corff 11.4%. Ymgeisydd B: gorffwys 3.8%, ymarfer corff 6.9%.

```
Achos defnydd: canfod claf sy'n dirywio gartref — mae rhybuddion yn cael
eu sbarduno gan gyfradd curiad y galon uchel parhaus, yn aml yn ystod
gweithgarwch.
Mae pennawd Ymgeisydd A (2.1%) yn ennill y daflen; mae Ymgeisydd B yn
ennill yr achos defnydd: yn y cyflwr sy'n berthnasol i'r rhybudd
(symud), mae gwall 11.4% Ymgeisydd A ar gyfradd curiad y galon o 100 =
±11 curiad/munud — yn rhychwantu band trothwy'r rhybudd cyfan, gan
gynhyrchu dwysadau ffug (pob un yn alwad-i-mewn nyrs, ~£40) neu golli
digwyddiadau.

Economeg rhybuddion ffug: 500 claf × 2 rybudd ffug ychwanegol/wythnos ×
£40 = £2.08M/blwyddyn o gost gwall o ddewis y rhif dilysu anghywir.
```

## Cysylltiad Peirianneg Feddalwedd

Mae peirianwyr yn defnyddio data dilysu wrth ddewis synwyryddion ac yn ei *gynhyrchu* wrth adeiladu nodweddion mesur — mae angen yr un disgyblaeth ar y ddwy rôl: profi yn y cyflwr defnyddio go iawn, nid y cyflwr arddangos (y cyfatebiaeth feddalwedd: meincnodi ar eich llwyth gwaith cynhyrchu, nid un y gwerthwr). Mae amser gwisgo a chyflawnrwydd yn ganlyniadau peirianneg cynnyrch — mae cysur, oes batri, dyluniad defod wefru, a dibynadwyedd cydweddu'n pennu a yw'r gât bilio RPM o 16 diwrnod ymhob 30 yn cael ei bodloni ([economeg monitro cleifion o bell](../remote-patient-monitoring-economics/)) ac a yw setiau data treialon yn ddadansoddadwy. Trinwch ddiffyg data fel signal a ddyluniwyd yn fwriadol: gwahaniaethwch rhwng "heb ei wisgo," "wedi'i wisgo ond dim signal," a "wedi methu cydweddu" yn y sgema o'r diwrnod cyntaf — os cânt eu cwympo'n null, maent yn gwenwyno pob dadansoddiad dilynol.

## Peryglon

- **MAPE cyfanredol yn cuddio methiant sy'n benodol i gyflwr** — magl yr enghraifft waith.
- **Poblogaeth ddilysu ≠ poblogaeth defnyddio**: mae oedran, ton croen, cryndod, a gordewdra i gyd yn newid gwall synhwyrydd optegol; gwiriwch ddemograffeg yr astudiaeth.
- **Cydberthyniad wedi'i adrodd lle mae angen cytundeb**: mae Pearson r uchel gyda thuedd systematig yn dal i gamddosbarthu yn erbyn trothwyon absoliwt — mynnwch CCC/Bland–Altman.
- **Cyflawnrwydd wedi'i chwyddo gan amcangyfrif diffygiol (imputation)**: bylchau wedi'u llenwi wedi'u hadrodd fel data a arsylwyd.

## Ffynonellau

- Dilysu cyfradd curiad y galon dyfeisiau gwisgadwy defnyddwyr (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Trothwyon dilysrwydd dyfeisiau gwisgadwy (safonau MAPE). <https://formative.jmir.org/2025/1/e70835>
- Astudiaethau dilysu aml-ddyfais. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
