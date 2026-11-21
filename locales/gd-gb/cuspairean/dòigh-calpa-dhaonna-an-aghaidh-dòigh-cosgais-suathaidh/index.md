# Dòigh calpa dhaonna an aghaidh dòigh cosgais suathaidh

Is iad seo an dà dhòigh a tha a’ farpais airson cinneasachd a chaidh air chall a luachadh – bho thinneas, ciorram, no bàs – ann an sgrùdaidhean cosgais-galair is cosgais-buannachd. Bidh Dòigh na Calpa Daonna (HCA) a’ luachadh a h-uile toradh a chaidh air chall airson làn fhaid na neo-làthaireachd aig ìre pàighidh; bidh Dòigh Cosgais Suathaidh (FCM) ga luachadh airson na h-ùine as giorra a dh’fheumas fastaiche dha-rìribh gus cinneasachadh ath-nuadhachadh. Bidh taghadh eatorra ag atharrachadh tuairmse cosgais neo-dhìreach le dà uair no barrachd.

## Carson a tha e cudromach

Tha cosgaisean neo-dhìreach (cinneasachd) nam measg nan loidhnichean as connspaidiche ann an eaconamas slàinte dìreach oir tha an dà dhòigh àbhaisteach a’ dol an aghaidh a chèile cho geur. Bidh HCA a’ làimhseachadh gach latha neo-làthaireachd mar latha toraidh a chailleas an eaconamaidh dha-rìribh, air a luachadh aig làn-phàigheadh airson làn-fhaid – no, airson bàs no ciorram maireannach, airson a’ bheatha obrach a tha air fhàgail. Tha FCM ag argamaid ann an eaconamaidh le cion-obrach agus slaodachd margaidh-saothair, nach lùghdaich a’ mhòr-chuid de neo-làthaireachd fhada toradh nàiseanta dha-rìribh aon uair ’s gu bheil fastaiche air ionadach a thrèanadh no obair ath-roinn; chan eil ach an “ùine suathaidh” – an ùine airson cinneasachadh ath-nuadhachadh chun na h-ìre roimhe – a’ riochdachadh call fìor. Mar sin bidh FCM a’ toirt tuairmsean cosgais neo-dhìreach gu rianail nas ìsle, nas glèidhte na HCA, agus chan e nòtaichean-bun comasach a tha anns an dà dhòigh: tha iad nan teòiridhean eaconamach eadar-dhealaichte mu na tha “cinneasachd a chaidh air chall” a’ ciallachadh. Is e sin cuideachd carson a bhios [iuchair-chùis NICE](../measadh-teicneòlais-slàinte/) a’ dùnadh a-mach cosgaisean cinneasachd gu bunaiteach, gan aithris, ma tha idir, mar anailis mothachalachd sealladh sòisealta air leth seach an measgachadh san ICER iuchair-chùis – faic [sealladh na h-anailis](../sealladh-na-h-anailis/).

## A’ mhatamataig

```
Dòigh Calpa Daonna:
HCA_cost = daily_wage × days_lost

Dòigh Cosgais Suathaidh (sìmplichte, cumadh air a chuingeachadh aig ùine suathaidh):
FCM_cost = daily_wage × min(days_lost, friction_period_days)

friction_period_days = tuairmse sònraichte do dhùthaich/roinn air ùine gu ath-nuadhachadh
                        cinneasachaidh (gu h-eachdraidheil ~85 latha ann an stiùireadh cosgaidh
                        iMTA Duitseach; ag atharrachadh a rèir dùthcha agus air ath-thomhas gu
                        h-ùineail)
```

Tha an eas-aonta slàn eadar an dà dhòigh ann an `min()`: chan eil HCA a’ cuingeachadh `days_lost` gu bràth, agus mar sin tha cosgais a’ fàs airson an neo-làthaireachd gu lèir, fhad ’s a tha FCM a’ cuingeachadh nan làithean air an cunntadh aig an ùine suathaidh, ge bith dè cho fada ’s a ruitheas an fhìor neo-làthaireachd.

## Eisimpleir obrach

Tha neach-obrach far na h-obrach airson `days_lost = 180` latha, a’ cosnadh `daily_wage = £150`.

**Dòigh Calpa Daonna**:

```
HCA_cost = 150 × 180 = £27,000
```

**Dòigh Cosgais Suathaidh**, a’ cleachdadh ùine suathaidh `friction_period_days = 85` (slat-tomhais eachdraidheil iMTA Duitseach, mar aig ath-thomhas ùineail an stiùiridh):

```
FCM_cost = 150 × min(180, 85) = 150 × 85 = £12,750
```

Tha £12,750 FCM fo leth de £27,000 HCA airson an *aon* neo-làthaireachd – bidh an taghadh dòigh a-mhàin ag atharrachadh cùis cosgais-galair gu mòr, mus tèid suathadh air barail sam bith eile.

## Ceangal ri einnseanaireachd bathar-bog

Tha seo a’ mapadh gu dìreach air mar a bhios sgioba a’ luachadh einnseanair a’ falbh:

- **Cosgadh trèigsinn stoidhle HCA**: a’ luachadh a’ chall mar làn-tuarastal an einnseanair a dh’fhalbh airson cho fada ’s a dh’fhanas an dreuchd falamh. Is e seo an dreach naïve de a’ mhòr-chuid de mhodailean cosgais trèigsinn, agus bidh e a’ cur barrachd air airson an aon adhbhar a bhios HCA a’ cur barrachd air call cinneasachd – tha e a’ gabhail ris gun robh an comas falamh làn-chinneasach an ùine gu lèir agus nach do ghabh dad eile a’ cheart. Faic [cumail luchd-obrach](../cumail-na-h-obair-lìbhrigidh/), a tha a’ meas an t-slabhraidh fastaidh/tòiseachaidh/còmhdach falamh a tha an dòigh seo a’ biathadh.
- **Cosgadh trèigsinn stoidhle FCM**: a’ luachadh a’ chall dìreach airson fìor ùine gu ath-lìonadh-agus-togail neach-ionaid – “ùine suathaidh” einnseanaireachd. Is e seo an àireamh as dìonaiche airson cùis-ghnìomhachais, dìreach mar a tha FCM an roghainn as glèidhte ann an sgrùdadh cosgais-galair.
- Is e am bun-smachd an aon rud ann an [cosgais cothrom](../cosgais-cothrom/): luachaich goireas a chaidh a chur an àite le na tha air chall dha-rìribh, chan e faid ceann-naidheachd air iomadachadh le ìre.

## Cunnartan

- **A’ measgachadh HCA agus FCM taobh a-staigh aon anailis, no ag aithris dìreach fear gun a bhith ag innse an taghaidh.** Faodaidh an aon dàta neo-làthaireachd eadar-dhealachadh 2x+ a thoirt ann an cosgais aithriseach a rèir an dòigh; feumaidh an taghadh a bhith air a ràdh, chan e air a thiodhlacadh.
- **A’ cleachdadh HCA airson cùis sealladh sòisealta gun a bhith ga chomharrachadh mar anailis mothachalachd.** Bidh iuchair-chùis NICE gu soilleir a’ dùnadh a-mach cosgaisean cinneasachd; buinidh tuairmse HCA sealladh sòisealta ann an anailis suidheachaidh, chan e an ICER ceann-naidheachd.
- **A’ cur an sàs an dà dhòigh air obair gun phàigheadh no neo-mhargaidh (m.e. cùram) gun atharrachadh.** Bidh an dà dhòigh a’ gabhail ri prosaidh ìre-phàighidh airson luach, nach gluais gu glan gu obair gun phàigheadh margaidh.

## Stòran

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
