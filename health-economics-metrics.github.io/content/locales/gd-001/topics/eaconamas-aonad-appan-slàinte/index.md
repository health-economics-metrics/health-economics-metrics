# Eaconamas aonad appan slàinte

Àireamhachadh malairteach thoraidhean slàinte luchd-cleachdaidh: cosgais togail luchd-ceannach (CAC), luach fad-beatha (LTV), teachd-a-steach cuibheasach gach neach-cleachdaidh (ARPU), prìsean gach ball gach mìos (PMPM), agus an eadar-dhealachadh margaidh fastaiche eadar **ROI agus VOI** (luach air tasgadh).

## Carson a tha e cudromach

Tha appan slàinte fo bhrùthadh structarail: tha togail daor (tagraidhean riaghlaichte, cnapan-starra earbsa, cosgaisean cumail ris) fhad ’s a tha cumail an fheadhainn as miosa de dh’uidhir bhathar-bog sam bith (~90% trèigsinn taobh a-staigh 30 latha – faic [cumail is call luchd-cleachdaidh](../cumail-air-cleachdaichean-agus-call-chleachdaichean/)). Tha an deuchainn so-dhèantachd àbhaisteach – **LTV:CAC ≥ 3:1** – mar sin gu math duilich ann an slàinte luchd-cleachdaidh, is e sin carson a bhios an gnìomhachas ag imrich gu modailean B2B2C: fastaichean, àrachasan, agus siostaman slàinte a’ pàigheadh PMPM airson shluagh, far nach e an neach-ceannach an neach fa-leth a bhios a’ falbh.

## A’ mhatamataig

```
CAC   = caitheamh reic + margaidheachd / luchd-ceannach pàighte ùra
ARPU  = teachd-a-steach / luchd-cleachdaidh gnìomhach (gach ùine)
LTV   = ARPU × fad-beatha cuibheasach  =  ARPU / ìre call
So-dhèantachd: LTV : CAC ≥ 3, ùine pàighidh air ais ≤ 12–18 mìosan

CAC èifeachdach gach neach-cleachdaidh air a chumail = CAC / cumail(t)
  — aig cumail D30 4%, £5 gach stàladh = £125 gach neach-cleachdaidh air a chumail 30-latha

Teachd-a-steach PMPM = ìre × buill clàraichte × mìosan
  iomall reiceadair = PMPM − cosgais-frithealaidh gach ball gach mìos
  — bidh com-pàirteachas a’ tionndadh soidhne: fo ch-ùine-dhaoine B2C bidh com-pàirteachas
    a’ dràibheadh teachd-a-steach; fo PMPM, bidh buill a tha com-pàirteach a’ COSG barrachd
    frithealadh na an fheadhainn nach eil, agus tha cùmhnantan builean ga thilleadh a-rithist
```

## Eisimpleir obrach

App cadail B2C: £6.99/mìos, call mìosail 18%, CAC measgaichte £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — neo-so-dhèantach

Pivot gu PMPM fastaiche: £1.20 PMPM × 40,000 beatha còmhdaichte = £48k/mìos
Cosgais-frithealaidh: bun-structar £0.15 + taic £0.10 + susbaint £0.05
  gach ball ≈ £0.30 → iomall ~75%, cuairt reic fhada ach tha call aig ìre
  cùmhnaint (bliadhnail), chan e aig ìre neach-cleachdaidh (làitheil)

Tha ceist an fhastaiche ag atharrachadh a’ mheatrach: is gann gum bi ROI dollar-chruaidh
(tagraidhean nas lugha, neo-làthaireachd) so-dhearbhte airson toraidhean sunnd —
is e freagairt a’ ghnìomhachais VOI: cinneasachd, tàladh fastaidh, com-pàirteachas —
a tha onarach a-mhàin nuair a thèid ainmeachadh mar VOI, chan e air a sgeadachadh
mar ROI (faic return-on-investment.md agus social-return-on-investment.md).
```

## Ceangal ri einnseanaireachd bathar-bog

Bidh roghainnean einnseanaireachd a’ suidheachadh an dà thaobh den cho-mheas: is e **cosgais-frithealaidh** ailtireachd ([eaconamas aonad neul](../eaconamas-aonad-neul/) – tha iomall PMPM beò no marbh air cosgais bun-structair gach ball), agus is e **LTV** einnseanaireachd cumail (tha gach puing-chall na theachd-a-steach àireamhachail – tha maths QALY na sgrìobhainn [cumail](../cumail-air-cleachdaichean-agus-call-chleachdaichean/) a’ coimhead dà-dhàimh teachd-a-steach mionaideach). Airson toraidhean slàinte gu sònraichte, bu chòir don deas-bhòrd eaconamas aonad treas loidhne a ghiùlan ri taobh LTV agus CAC: **luach slàinte gach neach-cleachdaidh air a thogail** (QALY cuideam-cumail × stairsneach) – oir bidh mhargaidhean payer agus stoidhle DiGA a’ prìsealachadh air barrachd is barrachd, agus oir feumaidh toradh aig a bheil eaconamas aonad malairteach is clionaigeach a’ dealachadh (prothaideach ach neo-ghnìomhach gu slàinteil, no èifeachdach ach do-mhaoineachail) fios a bhith aige dè an duilgheadas a th’ aige.

## Cunnartan

- **LTV bho chall buidheann tràth**: bidh call a’ sòlasachadh sìos; ach cuideachd claonadh neach-mairsinn – bidh luchd-gabhail tràth a’ cumail nas fheàrr na luchd-èisteachd air sgèile. Cleachd dàta buidheann aibidh.
- **CAC measgaichte thar seanail**: tha CAC sòisealta-pàighte agus CAC iomradh-clionaigeach eadar-dhealaichte 10×, le pròifilean cumail a’ dol an aghaidh a chèile – roinn no cuir ceàrr thu.
- **PMPM gun chrìochan cleachdaidh**: faodaidh buill a tha ro-chom-pàirteach ioma-dhealaichean a thionndadh; modaileadh an sgaoileadh, chan e a’ chuibheasachd.
- **VOI air a thaisbeanadh mar ROI** do CFO – am fàilligeadh creideis a chosg gnìomhachas sunnd fastaiche deichead gus a chosnadh.

## Stòran

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
