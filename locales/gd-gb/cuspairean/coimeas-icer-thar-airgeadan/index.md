# Coimeas ICER thar airgeadan

Feumaidh coimeas [ICER](../co-mheas-cosg-èifeachdais-àrdachaidh/) a chaidh àireamhachadh ann an airgead aon dùthcha ri [stairsneach deònach-pàigheadh](../stairsnich-deònachd-pàighidh/) dùthcha eile – no cruinneachadh dàta chosgaisean a chaidh a chruinneachadh thar deuchainn ioma-nàiseanta – ceum tionndaidh airgid soilleir, so-sgrùdaidh. Ma tha an dòigh tionndaidh ceàrr, faodaidh an aon fhianais bhunasach co-dhùnadh gabhail ris a thionndadh, ged nach eil dad air atharrachadh san dàta chlionaigeach no chosgais.

## Carson a tha e cudromach

Tha stiùireadh dhòighean ISPOR airson deuchainnean clionaigeach ioma-nàiseanta (Willke et al., *Health Economics*, 1998) a’ moladh cosgaisean goireasan a thionndadh le **co-ionannachd cumhachd-ceannaich (PPP)** – chan e ìrean iomlaid margaidh – nuair a thathar a’ coimeas fìor luach eaconamach nan goireasan thar dhùthchannan, agus ìrean iomlaid margaidh a ghleidheadh airson na tha iad dha-rìribh airson: modaileadh fìor shruthan pàighidh airgid thar-crìche. Is e a bhith gan measgachadh aon de na mearachdan dòigh HTA ioma-nàiseanta as cumanta, dìreach oir tha an dà chuid coltach ri “an ìre iomlaid” do neach nach do leugh an stiùireadh, agus chan eil duilleag-clàr a’ stad gad a dhèanamh ceàrr.

## A’ mhatamataig

```
icer_in_local_currency = convert(icer_in_source_currency, conversion_factor)

bu chòir don chonversion_factor a bhith:
  factar tionndaidh PPP  — airson fìor luach eaconamach nan goireasan a choimeas
                            thar dhùthchannan (ISPOR a’ moladh airson
                            CEA ioma-nàiseanta)
  ìre FX margaidh        — airson fìor phàighidhean airgid thar-crìche a-mhàin

gabh ris ma tha icer_in_local_currency < local_threshold
```

Is e an riaghailt cho-dhùnaidh fhèin an [riaghailt stairsnich ICER](../stairsnich-deònachd-pàighidh/) àbhaisteach – `adopt if ICER < λ` – tha a’ cheist dhòigh a tha an cuspair seo a’ làimhseachadh gu tur mu dheidhinn *dè am factar tionndaidh* a bheir am figear `icer_in_local_currency` don chuirear an riaghailt sin.

## Eisimpleir obrach

Is e ICER cungaidh bho dheuchainn SA $45,000/QALY. Bidh dùthaich ion-phortaidh bheachdail a’ suidheachadh a stairsneach mhìneachaidh fhèin aig £34,000/QALY (figear sònraichte do dhùthaich bheachdail don eisimpleir seo a-mhàin – tha fìor stairsnichean eadar-dhealaichte a rèir dùthcha agus ag atharrachadh thar ùine, agus feumaidh iad a bhith air an tobhta agus ceann-latha orra an-còmhnaidh).

**A’ cleachdadh factar tionndaidh PPP de 0.72** (mìneachaidh, don eisimpleir obrach seo a-mhàin): $45,000 × 0.72 = £32,400/QALY. £32,400 < £34,000 → **gabh ris**.

**A’ cleachdadh ìre iomlaid margaidh de 0.79** an àite (mìneachaidh): $45,000 × 0.79 = £35,550/QALY. £35,550 > £34,000 → **diùlt**.

Bidh an aon ICER $45,000/QALY a’ toirt co-dhùnadh gabhail ris fo thionndadh PPP agus co-dhùnadh diùltadh fo thionndadh FX margaidh. Is e seo an dealbh cruinn air carson a tha stiùireadh ISPOR a’ làimhseachadh taghadh an fhactair tionndaidh mar chùis dhòigh cudromach – chan e mion-fhiosrachadh cruinneachaidh, agus chan e rud ri fhàgail dìomhair ann am foirmle duilleag-clàr nach dèan duine dà-sgrùdadh air.

## Ceangal ri einnseanaireachd bathar-bog

Is e seo sgàthan eaconamas slàinte de raon einnseanaireachd ainmeil: ceartas prìsidh ioma-airgid i18n/l10n ann am bathar-bog malairteach, far nach bu chòir do dhuilleag prìsidh SaaS gu sàmhach suim `$` a choimeas ri prìs `£`. Is e a’ gheàrr-fhiosrachadh aig ìre-seòrsa a bheir seòrsa `Money` air a thogail gu math – dòighean coimeis a dhiùltas airgeadan neo-chothromach a choimeas, a’ sparradh ceum tionndaidh soilleir an toiseach – co-shìnte bathar-bog dìreach don phuing dhòigh eaconamas slàinte an seo: na dèan coimeas air figearan gun tionndadh thar airgeadan, agus na leig leis a’ cheum tionndaidh a bhith so-fhaicsinneach no gun sgrìobhadh.

## Cunnartan

- **A’ coimeas suimean ann an airgeadan eadar-dhealaichte gu sàmhach**: obair HTA duilleag-clàr ad hoc a bhios a’ toirt air falbh no a’ coimeas figear dolar agus figear not gun cheum tionndaidh an toiseach – clas bug a ghlacas seòrsa `Money` fìor mothachail air airgead le dealbhadh seach a bhith ga fhàgail na mhearachd shàmhach.
- **A’ measgachadh ìre iomlaid margaidh le PPP**: am mearachd dòigh HTA ioma-nàiseanta as cumanta a rèir stiùireadh ISPOR – faodaidh an dà àireamh a bhith gu math eadar-dhealaichte agus a’ freagairt cheistean eadar-dhealaichte (fìor luach eaconamach an aghaidh fìor shruth airgid).
- **Gun cheann-latha air an ìre iomlaid no clàr-amais PPP a chaidh a chleachdadh**: bidh an dà chuid a’ gluasad thar ùine, agus mar sin feumaidh factar tionndaidh sam bith a thathar a’ toirt iomradh air ceann-latha a bhith air san aon dòigh ’s a bhios an stòr seo a’ cur cinn-latha air figearan slat-tomhais eile (luachan gualain Green Book, luach bàs air a sheachnadh, agus mar sin air adhart).

## Stòran

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
