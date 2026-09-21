# Gwerthuso Rheoleiddiol AI

Y fframweithiau rheoleiddiol sy'n llywodraethu AI mewn gofal iechyd — cyfundrefn Meddalwedd fel Dyfais Feddygol (SaMD) FDA gyda **Chynlluniau Rheoli Newid wedi'u Pennu Ymlaen Llaw (PCCPs)**, a rhaglenni gwerthuso byd-go-iawn fel Gwobr AI mewn Iechyd a Gofal y GIG — a beth maent yn ei gostio ac yn ei alluogi'n economaidd.

## Pam mae hyn yn bwysig

Mae rheoleiddio'n pennu'r **gost dystiolaeth i fynediad i'r farchnad** a'r **gost ar gyfer pob diweddariad model dilynol** fel ei gilydd — ar gyfer cynhyrchion AI, mae'r ail yn aml yn bwysicach. Roedd modd traddodiadol FDA (cloi'r model; ail-glirio ar gyfer newidiadau) yn gwneud gwelliant parhaus yn economaidd greulon. Newidiodd **arweiniad PCCP (a gwblhawyd Rhagfyr 2024)** yr economeg: gall gweithgynhyrchydd rag-awdurdodi diweddariadau model *penodedig* yn y dyfodol — disgrifiad o addasiadau arfaethedig, protocol addasu (sut y bydd pob un yn cael ei ddilysu), ac asesiad effaith — fel bod gwelliannau a gymeradwywyd yn cael eu rhyddhau heb gyflwyniad newydd. Mae gan dros 1,000 o ddyfeisiau sy'n galluogi AI awdurdodiad FDA; mae FDA bellach hefyd yn archwilio monitro perfformiad byd-go-iawn (metrigau wedi'u pennu ymlaen llaw: cyfraddau FP/FN llinell sylfaen, drifft graddnodi, dangosyddion sifft parth).

## Y Fathemateg

Mae'r PCCP yn economeg [amser arwain DORA](../dora-metrics/) wedi'i chymhwyso i fodelau rheoleiddiedig:

```
Cost fesul diweddariad model (traddodiadol) = cost ailgyflwyno + oedi adolygu × CoD
Cost fesul diweddariad model (wedi'i gwmpasu gan PCCP) = cost gweithredu protocol yn unig

Economeg diweddaru dros oes cynnyrch:
  N diweddariad × (cost cyflwyno + misoedd o adolygu × cost-oedi fesul mis)
  yn erbyn cost ysgrifennu PCCP unwaith-am-byth + N × gweithrediadau protocol
```

Ar gyfer patrwm Gwobr AI y GIG, mae'r set fetrigau'n ehangach na chywirdeb yn unig: mae gwerthusiadau byd-go-iawn annibynnol yn asesu perfformiad clinigol, effeithiau llif gwaith/gweithredu, ac effaith economaidd — y bibell lawn [effeithiolrwydd damcaniaethol → effeithiolrwydd ymarferol → cost-effeithiolrwydd](../ai-developer-productivity/) wedi'i sefydliadoli.

## Enghraifft Waith

Mae gwerthwr AI radioleg yn cynllunio gwelliannau model chwarterol dros 3 blynedd (12 diweddariad):

```
Traddodiadol: 12 × (£80k cyflwyno + 4 mis × £50k/mis CoD budd-oedi)
           = 12 × £280k = £3.36M
Llwybr PCCP:  £250k ysgrifennu PCCP + 12 × £30k gweithredu protocol = £610k
Arbediad ≈ £2.75M — a chleifion yn derbyn pob gwelliant ~4 mis yn gynharach:
12 × 4 mis × budd clinigol y diweddariad, llinell QALY yn ei hawl ei hun.
```

Mae'r PCCP yn gydnabyddiaeth reoleiddiol bod gan **amlder defnyddio werth clinigol** — cadwyn achosol feistr y storfa hon, wedi'i chymeradwyo gan reoleiddiwr.

## Cysylltiad Peirianneg Feddalwedd

Mae peiriannu'r PCCP yn dda yn broblem feddalwedd: cyfresi gwerthuso wedi'u pennu ymlaen llaw, setiau data wedi'u fersiynu, pibellau dilysu awtomataidd, monitro drifft — y cyfnither reoleiddiedig i ddefnydd parhaus, lle mae'r "porth defnyddio" yn brotocol wedi'i ddilysu yn hytrach nag adolygiad cod. Mae timau â seilwaith gwerthuso aeddfed ([metrigau ansawdd AI](../ai-quality-metrics/)) yn cael PCCPs yn rhad; mae timau heb hynny'n darganfod bod y cyfyngiad rheoleiddiol mewn gwirionedd yn gyfyngiad aeddfedrwydd peirianneg. Ar gyfer cynhyrchion sy'n dod i mewn i'r GIG, y stac gyfochrog yw DTAC (diogelwch clinigol, diogelu data, rhyngweithredu) ynghyd â haenau tystiolaeth [NICE ESF](../nice-evidence-standards-framework/) — cyllidebwch bob un ohonynt fel [TCO](../total-cost-of-ownership/) mynediad i'r farchnad.

## Peryglon

- **Breuddwydion cwmpas-ymlusgo PCCP**: dim ond mathau addasu *penodedig* sydd wedi'u rhag-awdurdodi; mae newidiadau pensaernïol neu ddefnyddiau bwriadedig newydd yn dal angen adolygiad llawn.
- **Drifft byd-go-iawn heb ei fonitro**: perfformiad awdurdodi adeg lansio + drifft poblogaeth dawel = cynnyrch yn perfformio y tu allan i'w amlen glirio; mae monitro'n ddisgwyliad rheoleiddiol ac yn hunanamddiffyniad fel ei gilydd.
- **Drysu clirio â gwerth**: nid yw clirio FDA/UKCA yn golygu y bydd unrhyw un yn talu — dyna'r rhwystr [HTA](../health-technology-assessment/), a redir ar wahân.

## Ffynonellau

- FDA, meddalwedd dyfeisiau sy'n galluogi AI / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- Dadansoddiad arweiniad gweithredu PCCP. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- Gwasanaeth Iechyd Lloegr, gwersi o werthusiadau byd-go-iawn Gwobr AI mewn Iechyd a Gofal. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
