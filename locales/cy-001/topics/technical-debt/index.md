# Dyled Dechnegol

Dyled dechnegol yw cost dybiedig y dyfodol sy'n deillio o benderfyniadau hwylus yn y gorffennol mewn cronfa god: y gwaith unioni sy'n ddyledus (**y prifswm**) a'r llusgiad parhaus y mae'n ei roi ar gyflenwi (**llog**). Mae dulliau meintioli fel SQALE yn ei drawsnewid o drosiad yn atebolrwydd wedi'i gostio.

## Pam mae'n bwysig

Heb ei meintioli, cwyn yw dyled dechnegol; wedi'i meintioli, mae'n achos busnes. Llinellau sylfaen y diwydiant (CAST Appmarq, 1,400 o apiau / 550M LOC): yn hanesyddol ≈ **$3.61 o brifswm dyled dechnegol fesul llinell god**, gyda chronfeydd cod nodweddiadol yn cario cymhareb dyled o 15–20% o gost ailadeiladu, o'i gymharu â bar iechyd a ddefnyddir yn gyffredin o ≤5% (gradd "A" SonarQube). Mae'r fframwaith economeg-iechyd yn ffitio i'r dim: mae dyled yn *gyflwr cronig* — os na chaiff ei thrin, mae'n datblygu, mae ei "llog" yn cyfansymio fel cyflenwi arafach a chyfraddau diffyg uwch, ac mae unioni'n cystadlu am gapasiti yn erbyn gwaith nodweddion yn union fel y mae atal yn cystadlu â thriniaeth.

## Y fathemateg

```
SQALE principal   = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Llog (y ffigur sy'n cyfiawnhau ad-dalu):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ defect rate × cost per defect
Paydown case  = PV(interest avoided over horizon) − remediation cost
                (wedi'i ddisgowntio — gweler discounting-and-time-preference.md)
```

Mae'r prifswm yn nodi'r atebolrwydd; mae'r llog yn gwneud yr achos buddsoddi. Mae talu prifswm o £500k i osgoi llog o £40k/flwyddyn yn fasnach wael; i osgoi £400k/flwyddyn, mae'n rhagorol.

## Enghraifft wedi'i gweithio

Haen integreiddio cofnodion clinigol 400k-LOC: prifswm SQALE 3,800 awr × £75 = **£285k**; TDR ≈ 12% (gradd C). Llog wedi'i fesur: mae timau sy'n cyffwrdd â'r haen hon yn dangos amseroedd cylchred 40% yn hirach a chyfraddau methiant-newid 2× o'u cymharu â llinell sylfaen yr ystâd. Mae'r haen yn amsugno 6,000 awr-datblygwr/flwyddyn:

```
Interest ≈ 6,000 × 0.40 × £75          = £180,000/year (llusgiad cyflymder)
         + 12 methiant ychwanegol × £8,000 = £96,000/year (ailwaith/digwyddiadau)
         ≈ £276,000/year

Unioni'r 30% gwaethaf o'r prifswm (£85k) gan dargedu mannau poeth → gostyngiad
llog wedi'i fodelu o 60%: yn arbed ~£166k/flwyddyn. Ad-daliad ≈ 6 mis.
```

Mae targedu mannau poeth yn bwysig: mae llog dyled yn crynhoi lle mae amlder newid × dwysedd dyled ar ei anterth — nid yw unioni dyled a gyffyrddir yn anaml yn prynu unrhyw beth, fel trin cyflwr na fyddai byth yn datblygu ([economeg atal](../prevention-economics/)).

## Cysylltiad â Pheirianneg Meddalwedd

Y mewnforion economeg-iechyd sy'n uwchraddio dadleuon dyled dechnegol: mynegwch yr ystâd fel **rhestr eiddo baich** (ar arddull [DALY](../disability-adjusted-life-year/) — lle mae'r blynyddoedd-peirianneg iach a gollwyd?); cyfiawnhewch ad-dalu â rhifyddeg cynnydd, yn onest (fel arfer yn gost-effeithiol, nid yn gost-arbedol); pwysolwch unioni'r systemau gwaethaf yn ôl [diffyg difrifoldeb](../qaly-shortfall-and-severity-modifiers/); a chyflwynwch gynigion unioni mawr gyda dadansoddiad gwrthbwyso sy'n goroesi rheolau [costau dilynol a osgowyd](../avoided-downstream-costs/) — wedi'u pwysoli yn ôl tebygolrwydd, wedi'u disgowntio, wedi'u cyfrif unwaith.

## Peryglon

- **Adrodd am y prifswm yn unig**: nid yw rhif mawr brawychus heb amcangyfrif llog yn cyfiawnhau dim.
- **Cymryd ffigurau dyled a gynhyrchwyd gan offer yn llythrennol**: mae SQALE yn cyfrif toriadau rheolau; mae'n methu dyled bensaernïol (y math drud) ac yn cyfrif manion.
- **Iwtopiaeth dyled-sero**: nid sero yw'r lefel ddyled optimaidd — trosoledd yw dyled; y cwestiwn yw'r gyfradd log.
- **"Mae'r ailysgrifennu'n osgoi'r cyfan"**: rhaid i gynigion ailysgrifennu glirio'r un rheolau gwrthbwyso — cost wrthffeithiol, tebygolrwydd, disgowntio.

## Ffynonellau

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
