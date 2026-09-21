# Costau Diweddarach a Osgowyd

Mae costau diweddarach a osgowyd (gwrthbwyso costau) yn wariant triniaeth yn y dyfodol a atalir gan weithredu cynharach neu well, wedi'i netio yn erbyn cost yr ymyriad ei hun. Gwrthbwysau yw'r mecanwaith y gall ymyriad ddod yn *drech* drwyddo — yn rhatach **ac** yn well — a hwy hefyd yw'r llinell fwyaf a gyfrifir ddwywaith, ac a orhonnir amdani, mewn economeg iechyd.

## Pam mae hyn yn bwysig

Mae bron pob cynnig gwerth iechyd digidol yn cynnwys honiad gwrthbwyso: "mae ein ap yn atal derbyniadau," "mae ein rhybuddion yn atal dirywiad," "mae ein platfform yn osgoi profion dyblyg." Pan fo gwrthbwysau'n real, maent yn trawsnewid yr economeg (gweler enghraifft waith [ICER](../incremental-cost-effectiveness-ratio/), lle mae gwrthbwyso £600k yn gwneud yr achos). Mae talwyr yn gwybod hyn — felly mae honiadau gwrthbwyso'n denu'r craffu caletaf mewn unrhyw arfarniad. Y rheolau credadwyedd isod sy'n gwahanu model y gellir ei ariannu oddi wrth farchnata.

## Y Fathemateg

```
Cost net = cost ymyriad − Σ gwrthbwysau

Rhaid i wrthbwyso dilys fod yn:
  Priodoladwy — wedi'i gysylltu'n achosol â'r ymyriad (tystiolaeth gymharydd)
  Ymylol      — mae'r arian yn wirioneddol yn peidio â chael ei wario, ar gost ymylol
                nid gyfartalog (gweler marginal-vs-average-cost.md)
  Wedi'i bwysoli- — wedi'i bwysoli gan P(byddai'r digwyddiad diweddarach wedi digwydd)
  gan debygolrwydd
  Wedi'i ddisgowntio — costau a osgowyd yn y dyfodol ar werth presennol
  Unigryw     — wedi'i gyfrif unwaith, mewn un llinell fudd
```

## Enghraifft Waith

"Yr honiad risg-mudo hwn, wedi'i wneud yn iawn": mae ap monitro clwyfau ar gyfer 5,000 o gleifion ôl-lawdriniaeth yn honni ei fod yn osgoi ailddderbyniadau sy'n gysylltiedig â haint.

```
Ailddderbyniad llinell sylfaen ar gyfer haint: 4.0% ; gyda'r ap (RCT): 3.1%
Digwyddiadau a osgowyd yn briodoladwy = 5,000 × 0.009 = 45/blwyddyn
Cost fesul cyfnod ailddderbyn (ymylol, yr ymddiriedolaeth hon): £3,200
Gwrthbwyso = 45 × 3,200 = £144,000/blwyddyn
Cost yr ap = 5,000 × £20 = £100,000/blwyddyn
Cost net = −£44,000 → yn arbed cost yn wirioneddol, gyda:
  priodoliad o RCT ✓  costio ymylol ✓  tebygolrwydd o ddata treial ✓
```

Mae'r un honiad wedi'i adeiladu ar "mae ailddderbyniadau'n costio £5,800 ar gyfartaledd, byddwn yn atal llwythi ohonynt" yn methu'r pedwar prawf ac yn haeddu'r wrthodiad y mae'n ei chael.

## Cysylltiad Peirianneg Feddalwedd

Mae "mae'r mudo hwn yn osgoi'r ailysgrifennu yn y dyfodol" yn honiad gwrthbwyso, ac mae rheolau economeg iechyd yn ei wneud yn onest:

- **Cost wrthffeithiol**: faint fyddai'r ailysgrifennu'n ei gostio mewn gwirionedd, a sut y profir hynny?
- **Tebygolrwydd**: pa mor debygol yw'r dyfodol hwnnw? (Nid 100% — mae cynhyrchion yn cael eu lladd, mae blaenoriaethau'n newid.)
- **Disgowntio**: mae ailysgrifennu a osgowyd ym mlwyddyn 4 ar ddisgownt 3.5–10% yn werth llawer llai na'r gwerth wyneb.
- **Unigrywiaeth**: peidiwch â hawlio'r un ailysgrifennu a osgowyd yn y llinell dyled dechnegol a'r llinell gadw hefyd.

`Gwerth gwrthbwyso = P(digwyddiad yn y dyfodol) × cost wrthffeithiol × ffactor disgownt` — ysgrifennwch y llinell honno yn y cynnig a gwyliwch yr amcangyfrif yn dod yn ddadleuol, sef y pwynt.

## Peryglon

- **Cyfrif dwbl** — yr un derbyniad a osgowyd wedi'i hawlio fel gwrthbwyso, diwrnodau gwely, a QALYs gyda chost ynghlwm.
- **Gwrthbwysau cost gyfartalog** ar gyfer digwyddiadau y mae eu costau sefydlog yn parhau beth bynnag.
- **Tebygolrwydd 100% distaw** ar ddigwyddiadau diweddarach nad oeddent ond yn bosibl.
- **Gwrthbwysau i gyllidebau eraill** wedi'u cyflwyno fel arbedion i'r talwr sy'n cael ei ofyn i dalu — gweler [persbectif dadansoddi](../analysis-perspective/).

## Ffynonellau

- Geirfa Consortiwm Economeg Iechyd Efrog: gwrthbwyso cost. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (anaml y mae gwrthbwysau'n fwy na chostau). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
