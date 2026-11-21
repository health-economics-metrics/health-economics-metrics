# Àireamh a dh’fheumar a sgrùdadh (NNS)

Is e NNS an àireamh de dhaoine a dh’fheumar a sgrùdadh — chan ann dìreach a làimhseachadh — gus casg a chur air **aon** toradh dona thar ùine leantainn shònraichte, a’ gabhail ris a’ chunnart bhunaiteach aig an t-sluagh agus lùghdachadh cunnairt chàirdeach a choilean lorg tràth is leigheas. Is e co-aoisean NNT aig ìre prògram sgrùdaidh: tha NNT a’ faighneachd cia mheud a dh’fheumar *a làimhseachadh* gus casg a chur air aon toradh; tha NNS a’ faighneachd cia mheud a dh’fheumas a dhol tron t-slighe iomlan *sgrùdadh-agus-an uairsin-leigheas* gus sin a choileanadh.

## Carson a tha e cudromach

Thug Rembold a-steach NNS ann an 1998 gu sònraichte gus am faodte prògraman sgrùdaidh a choimeas air an aon bhonn ri leigheasan, oir tha lùghdachadh cunnairt chàirdeach cinn-naidheachd deuchainn sgrùdaidh a’ falach dà rud nach eil an fheadhainn aig leigheas: cunnart bunaiteach an t-sluaigh a thathar a’ toirt cuireadh a sgrùdadh, agus gu bheil a h-uile duine a thèid a sgrùdadh a’ giùlan cosgais na deuchainn agus eallach dearbhaidhean meallta, chan e dìreach an cuid as lugha a bhios a’ faighinn buannachd. Tha geata cosg-èifeachdais Comataidh Sgrùdaidh Nàiseanta na RA (faic [eaconamas sgrùdaidh](../eaconamas-sgrìonaidh/)) air a thogail air an eadar-dhealachadh seo — faodaidh prògram sgrùdaidh le lùghdachadh cunnairt chàirdeach drùidhteach ann an sluagh le cunnart bunaiteach ìosal NNS ann am mìltean a bhith aige, agus aig an àm sin is e cosgais a’ phrògraim gach toradh air an tèid casg a chur an fhìor cheist.

## A’ mhatamataig

```
NNS = 1 / (baseline_risk × relative_risk_reduction)

baseline_risk           = coltas an toraidh san t-sluagh air a sgrùdadh
                           thar na h-ùine leantainn (0–1)
relative_risk_reduction = lùghdachadh cunnairt co-roinneach a choilean
                           leigheas tràth a chaidh a chomasachadh le sgrùdadh (0–1)

Program cost per outcome prevented = NNS × cost_per_screen
```

Coimeas dìreach ri [NNT](../àireamh-a-dh-fheumar-a-làimhseachadh/): bidh NNS a’ pasgadh èifeachdas a’ phìob-sgrùdaidh → breithneachadh → leigheas gu lèir ann an aon àireamh, far a bheil NNT mu thràth a’ gabhail ris gu bheil an t-euslainteach air a dhearbhadh agus a’ tòiseachadh leigheas.

## Eisimpleir obrach

Tha cunnart tachartais bunaiteach 2% aig sluagh targaid prògram sgrùdaidh thar ùine na sgrùdaidh (`baseline_risk = 0.02`), agus tha lorg tràth a’ coileanadh lùghdachadh cunnairt chàirdeach 25% (`relative_risk_reduction = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

200 people must be screened to prevent one outcome.

At £50 per screen:
Programme cost per outcome prevented = 200 × £50 = £10,000
```

Is e am figear £10,000 sin a bu chòir a thomhas an aghaidh cosgais an toraidh fhèin agus na QALYan a chosgadh e — an aon choimeas a nì [eaconamas casg](../eaconamas-casg/) airson prògraman casg san fharsaingeachd.

## Ceangal ri einnseanaireachd bathar-bog

Is e NNS “cia mheud neach-cleachdaidh, tachartas, no iarrtas a dh’fheumas ruith tro shruth lorg no triage gus aon dearbh-adhartach a ghlacadh a tha airidh air gnìomh” — a tha buntainneach gu dìreach do shiostaman sgrùdaidh agus triage stèidhichte air rabhaidhean, far a bheil staid targaid le tricead ìosal a’ cur suas NNS san aon dòigh ’s a tha i a’ leagail luach ro-innse adhartach (faic [eaconamas sgrùdaidh](../eaconamas-sgrìonaidh/) agus [measadh AI clionaigeach](../measadh-ai-clionaigeach/)). Chan fhiach riaghailt sgrùdaidh a dh’fheumas 200 tachartas a ghiollachd gach glacadh fìor a ruith ach ma tha an glacadh a’ cosg co-dhiù 200 uair cosgais triage gach tachartais — an aon àireamhachadh ris an eisimpleir cùram-slàinte gu h-àrd.

## Cunnartan

- **A’ dearmad an eisimeileachd air cunnart bunaiteach**: tha NNS gu math eadar-dhealaichte — agus cosg-èifeachdas — airson an aon deuchainn no prògram sgrùdaidh ann an sluagh àrd-chunnairt an aghaidh fear ìosal-chunnairt. Na luaidh NNS gun an sluagh a dh’innse dhan deach a àireamhachadh.
- **A’ cunntadh an ainmeachair cheàrr**: bidh NNS a’ cunntadh dhaoine a *chaidh a sgrùdadh*, chan e daoine a tha adhartach no a tòisicheas leigheas — tha e a’ gabhail a-steach èifeachdas a’ phìob-sgrùdaidh gu lèir, agus mar sin cha bu chòir a choimeas ri meatrach a chaidh a chunntadh thairis air adhartach a-mhàin.
- **A’ coimeas thar ùineachan leantainn**: mar as trice bidh ùine leantainn nas giorra a’ cur suas NNS, oir thathar a’ faicinn nas lugha de thachartasan san uinneig. Chan eil figearan NNS so-choimeasach ach nuair a tha iad air an àireamhachadh thairis air an aon fhad leantainn.

## Stòran

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
