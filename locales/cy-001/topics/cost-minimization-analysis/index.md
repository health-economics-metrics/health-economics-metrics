# Dadansoddiad Lleihau Cost (CMA)

Mae CMA yn cymharu costau'n unig, ac yn dewis yr opsiwn rhataf — yn ddilys *dim ond* pan ddangoswyd bod canlyniadau'r dewisiadau amgen yn gyfwerth.

## Pam mae'n bwysig

CMA yw'r dadansoddiad symlaf a'r un a gamddefnyddir fwyaf. Mae'r hawliad cyfwerthedd yn gwneud yr holl waith: os nad yw canlyniadau'n wirioneddol wahanol (biosimilar yn erbyn ei wreiddiolyn; dau gyflenwr o'r un gwasanaeth yn bodloni'r un fanyleb), yna cost yw'r unig gwestiwn a CMA yw'r un cywir. Mae'r trylwyredd yn byw yn y broses o *brofi* cyfwerthedd yn gyntaf — fel arfer trwy astudiaeth ddi-israddoldeb gyda ffin wedi'i rhagnodi — sef yn union y cam mae prynwyr fel arfer yn ei hepgor.

## Y mathemateg

```
O gael tystiolaeth bod Effaith_A ≈ Effaith_B (o fewn ffin ragnodedig δ):
Dewiswch min(Cost_A, Cost_B)

Costau wedi'u mesur o'r un persbectif, dros yr un gorwel,
gan gynnwys costau newid/pontio.
```

Os na ellir profi cyfwerthedd yn dystiolaethol, mae CMA yn annilys — defnyddiwch [CEA](../cost-effectiveness-analysis/)/[CUA](../cost-utility-analysis/) yn lle.

## Enghraifft wedi'i gweithio

Mae ymddiriedolaeth yn dewis rhwng dau blatfform ymgynghori fideo. Mae peilot cyfochrog 3 mis yn dangos cyfraddau cwblhau o 94.1% yn erbyn 93.8%, boddhad claf 4.4 yn erbyn 4.4 — gwahaniaethau o fewn y δ o 2 bwynt canran y cytunwyd arno ymlaen llaw. Canlyniadau: cyfwerth. Costau dros 3 blynedd:

```
                     Platfform A    Platfform B
Trwyddedau            £360,000       £210,000
Integreiddio          £80,000        £150,000
Hyfforddiant/cymorth  £60,000        £90,000
Cyfanswm              £500,000       £450,000
```

Mae Platfform B yn ennill o £50,000 — *gan gynnwys* ei gost integreiddio uwch. Heb y peilot, byddai'r hawliad cyfwerthedd yn dibynnu ar daflenni gwerthwr, a byddai gwahaniaeth cyfradd gwblhau o 1 pwynt (≈ miloedd o ymgynghoriadau aflwyddiannus/blwyddyn) yn gwneud i £50,000 edrych yn ddibwys.

## Cysylltiad â pheirianneg meddalwedd

CMA yw siâp ffurfiol caffael nwyddau: dau ddarparwr CI yn bodloni'r un SLOs yn union, dau storfa gwrthrych â'r un fanyleb wydnwch. Y wers economeg-iechyd yw *trefn y camau*: profwch gyfwerthedd yn gyntaf (meincnodwch yn erbyn eich llwyth gwaith, peilotwch yn erbyn eich SLOs, gyda'r ffin wedi'i chytuno ymlaen llaw), yna cymharwch gostau cyfan gan gynnwys mudo. Mae "maen nhw fwy neu lai'r un peth, mae B yn rhatach" heb y cam cyntaf yn union sut mae sefydliadau'n prynu'r offeryn sy'n 10% rhatach a 40% gwaeth. Corolari: pan fydd gwerthwr yn dadlau am bris, gwnewch iddynt ymrwymo i gyfwerthedd — mae'n rhwymol i'r cyfeiriad arall hefyd.

## Peryglon

- **Cyfwerthedd tybiedig** — y pechod diffiniol; nid yw diffyg tystiolaeth o wahaniaeth yn dystiolaeth o gyfwerthedd (mae peilotiaid heb ddigon o bŵer yn "dangos" cyfwerthedd am ddim).
- **Hepgor costau newid** — mae mudo, ailhyfforddi, a rhedeg cyfochrog yn perthyn ar ochr y gost.
- **Cyfwerthedd ar y canlyniadau anghywir**: cyfwerth ar y metrig a fesurwyd, gwahanol ar un sy'n bwysig (hygyrchedd, cudd-oediad cynffon, allforio data).

## Ffynonellau

- Geirfa York Health Economics Consortium: dadansoddiad lleihau cost. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
