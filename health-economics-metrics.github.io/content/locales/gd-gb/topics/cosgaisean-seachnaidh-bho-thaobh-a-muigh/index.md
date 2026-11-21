# Cosgaisean seachnaidh bho thaobh-a-muigh

Nuair nach urrainn urras na targaidean a choileanadh le comas a-staigh, ceannaichidh e comas aig prìsean prìomhach: ùine a bharrachd deireadh-seachdain dha luchd-obrach fhèin, no a’ cur obair-lannsa a-mach gu solaraichean prìobhaideach. Tha luach eaconamach bathar-bog a leigeas comas ma sgaoil a’ gabhail a-steach **cosgais seachnaidh na h-obrach prìomhaich sin**.

## Carson a tha e cudromach

Fo chuideam ath-bheothachaidh taghte, bidh urrasan gu cunbhalach a’ pàigheadh prìsean spot prìobhaideach (gu tric 1.2–1.5× prìs sgeama an NHS) no ìrean prìomhach iomairt liosta feitheimh dha an cuid chonsaltairean airson liostaichean deireadh-seachdain. Eu-coltach ri tagraidhean comais àbhaisteach, tha seachnadh a-muigh **a’ leigeil a-mach airgead**: chan eil an cunntas don t-solaraiche prìobhaideach air a thogail dha-rìribh. Tha sin ga dhèanamh mar aon de na loidhnichean buannachd as làidire do bhathar-bog a mheudaicheas tron-chur a-staigh – agus aon de na feadhainn as fhasa fianais a chur air, leis gu bheil an caitheamh a-muigh na loidhne buidseit fhaicsinneach mu thràth.

## A’ mhatamataig

```
Cosgais seachnaidh a-muigh = gnìomhachd air a thoirt a-staigh × (prìs aonaid a-muigh
                             − cosgais iomaill a-staigh gach cùis)

Cosgais iomaill a-staigh: stuthan caitheamh + luchd-obrach caochlaideach airson a’ ghnìomhachd a bharrachd
— tha an oighreachd stèidhichte air a pàigheadh mu thràth (faic marginal-vs-average-cost.md).
```

Feumaidh an tagradh gun gabh comas a-staigh a leigeadh ma sgaoil a’ ghnìomhachd a ghabhail dha-rìribh: feumaidh seiseanan theatar, leapannan agus luchd-obrach a bhith ri fhaighinn (bidh an cuingead ceangailteach a’ riaghladh – teòiridh nan cuingeadan a-rithist).

## Eisimpleir obrach

Bidh urras a’ cur 800 obair-lannsa cataract/bliadhna a-mach aig £900 gach fear: £720,000/bliadhna de chaitheamh a-muigh, an aghaidh prìs sgeama ~£750.

Bidh bathar-bog sgeidealaidh theatar (optimachadh liosta, lìonadh beàrn bho chuir dheth, lorg ùine tionndaidh) a’ togail cleachdadh theatar a-staigh gu leòr airson 500 obair-lannsa a thoirt dhachaigh:

```
Cosgais iomaill a-staigh gach cùis ≈ £350 (stuthan caitheamh + luchd-obrach sheiseanan)
Sàbhaladh = 500 × (900 − 350) = £275,000/bliadhna – a’ leigeil a-mach airgead
Cur a-mach air fhàgail: 300 × £900 = £270,000 (bha £720,000)
```

Cosgais bathar-bog £90,000/bliadhna → glan ≈ **+£185,000/bliadhna ann an airgead so-bhanca**, a bharrachd air buannachdan càileachd a-staigh agus trèanaidh bho bhith a’ cumail na h-obrach a-staigh.

## Ceangal ri einnseanaireachd bathar-bog

Is e an coimeas dìreach **prìomhachas cùmhnantaiche is chonsaltachd**: nuair nach urrainn comas einnseanaireachd a-staigh gealltanasan a choileanadh, ceannaichidh buidhnean comas a-muigh aig 1.5–3× ìrean luchdaichte a-staigh. Bu chòir do thasgaidhean àrd-ùrlair is cinneasachd a thogas tron-chur a-staigh caitheamh cùmhnantaiche seachanta a ghabhail mar gu h-àrd – ìre-latha a-muigh air a lùghdachadh le cosgais iomaill a-staigh, air a iomadachadh leis an obair air a toirt dhachaigh – oir tha e mar aon de na beagan loidhnichean a tha a’ leigeil a-mach airgead dha-rìribh ann an cùis-ghnìomhachais cinneasachd luchd-leasachaidh. Tha an aon rabhadh ann: feumaidh an comas a-staigh a bhith ann dha-rìribh agus air a sgeideal air an obair a chaidh a thoirt dhachaigh, no tha an tagradh uirsgeulach.

## Cunnartan

- **A’ tagradh toirt dhachaigh às aonais an t-slabhraidh comais slàn** – lannsairean air an saoradh ach gun àiteachan theatar (no einnseanairean air an saoradh ach gun bandwidth stiùireadh toraidh) a’ toirt dhachaigh dad.
- **A’ coimeas prìs a-muigh ri cosgais chuibheasach a-staigh** an àite cosgais iomaill – a’ lughdachadh an t-sàbhalaidh, gu neònach; ruithidh na cosgaisean stèidhichte ge bith.
- **Neo-chothromachd càileachd/toinnteachd**: gu tric is e na cùisean sìmplidh a thèid a chur a-mach; bidh an toirt dhachaigh a’ dol an sàs ann am measgachadh chùisean a-staigh agus cosgaisean aonaid.

## Stòran

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
