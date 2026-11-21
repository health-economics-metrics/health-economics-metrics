# Anailis cosgais-fheumalachd (CUA)

Is e CUA anailis cosg-èifeachdais le **builean coitcheann, cuideam-roghainn** – cha mhòr an-còmhnaidh an [QALY](../bliadhna-beatha-le-atharrachadh-càileachd/) (no [DALY](../bliadhna-beatha-le-atharrachadh-airson-ciorraim/) air a sheachnadh). Leis gu bheil an t-aonad builean uile-choitcheann, faodaidh CUA eadar-theachdan a choimeas thar ghalaran gu tur eadar-dhealaichte.

## Carson a tha e cudromach

Feumaidh seirbheis slàinte nàiseanta taghadh eadar cungaidh aillse, app slàinte inntinn, agus robot lannsaireachd bho aon bhuidseat. Chan urrainn dha aonadan nàdarra an coimeas; faodaidh QALY. Is e CUA mar sin an dòigh iuchair-chùis aig NICE agus a’ mhòr-chuid de bhuidhnean HTA: is e an toradh aige – cosgais gach QALY, air a bhreithneachadh an aghaidh [stairsnich](../stairsnich-deònachd-pàighidh/) – an rud as fhaisge air ìre iomlaid uile-choitcheann a th’ aig poileasaidh slàinte. Ma tha thu ag iarraidh do bhathar-bog a mhaoineachadh *an àite rudeigin eile*, is e CUA an raon.

## A’ mhatamataig

```
ICUR = ΔCosgais / ΔQALY      (an ICER le QALY mar aonad buaidh)

ΔQALY = Σ (faid_i × goireas_i)_ùr − Σ (faid_i × goireas_i)_sean
```

Goireasan bho ionnstramaidean dearbhte ([EQ-5D](../eq-5d/)); cosgaisean agus QALY le chèile [air an lasachadh](../lasachadh-agus-roghainn-ùine/) aig 3.5% (iuchair-chùis NICE); mì-chinnt tro [PSA](../anailis-mothachalachd-coltachdail/).

## Eisimpleir obrach

App CBT airson iomagain mheadhanach an aghaidh liosta feitheimh airson leigheas aghaidh-ri-aghaidh, gach euslainteach:

```
Cosgaisean:  cead app + taic         £250
             leigheas air a chur an àite   −£680   (chan eil feum aig 40% de luchd-cleachdaidh air tuilleadh)
             ΔC = 250 − 680 = −£430 (a’ sàbhaladh airgead)

QALY:  6 mìosan aig goireas 0.76 an àite 0.68 fhad ’s a tha iad a’ feitheamh
       ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALY
```

ΔC < 0 agus ΔE > 0: tha an app **a’ cumail smachd** – nas fheàrr agus nas saoire, gun fheum air co-mheas. Nan robh barail cur an àite leigheis dìreach 10%, bhiodh ΔC = 250 − 170 = +£80, agus ICUR = 80 / 0.04 = **£2,000/QALY** – fhathast fada fo £20,000. Tha a’ chùis a’ mairsinn fiù ’s le prìomh bharail air a gearradh: is e sin CUA làidir (agus tha an [diagram tornado](../anailis-mothachalachd/) ga dhearbhadh).

## Ceangal ri einnseanaireachd bathar-bog

Is e prìomh bheachd CUA – *aon aonad coimeasach, cuideam-roghainn airson rudan neo-choltach a choimeas* – am pàtran airson tasgaidhean einnseanaireachd neo-choltach a choimeas (tèarainteachd an aghaidh eòlas luchd-leasachaidh an aghaidh earbsachd). Is e na roghainnean onarach aon chuid aonad co-dhèanta dìonach (tearc) no [clàr cosgais-builean](../anailis-cosgais-builean/) soilleir (àbhaisteach). Is e na tha CUA a’ rabhadh an aghaidh an co-dhèanamh meallta: “sgòr buaidh” cuideamaichte aig an deach na cuideaman a tiùnadh às dèidh làimhe gus an roghainn as fheàrr leotha a bhuannachadh. Chaith eaconamas slàinte deicheadan a’ cunbhalachadh togail goireasan dìreach gus an tig cuideaman ro an coimeas.

## Cunnartan

- **Buannachdan goireis fo mhothachalachd an ionnstraim** (faic eadar-dhealachadh clionaigeach cudromach as lugha ann am [builean aithriseach euslaintich](../builean-air-an-aithris-le-euslaintich/)) – tha ΔE beag × sluagh mòr na ruse nighidh clasaigeach.
- **A’ dìth cur an àite cùram coimeis** – is e na tha iad a’ cur an àite gu tric an teirm chosgais as motha airson toraidhean didseatach.
- **A’ mapadh sgòran nach eil roghainn gu goireasan** le crois-ghluasadan gun dearbhadh.

## Stòran

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
