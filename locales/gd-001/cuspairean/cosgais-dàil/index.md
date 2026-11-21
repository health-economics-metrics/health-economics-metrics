# Cosgais dàil (CoD)

Is e Cosgais Dàil an luach eaconamach a thèid air chall gach aonad ùine nach eil feart, toradh no seirbheis *air a lìbhrigeadh*. Is e an drochaid as làidire eadar meatrachan lìbhrigidh bathar-bog agus eaconamas slàinte: bidh e a’ tionndadh “chuir sinn a-mach fadalach” gu airgead – no gu QALY.

## Carson a tha e cudromach

Riaghailt Reinertsen: “Mura tomhais thu ach aon rud, tomhais Cosgais Dàil.” Tha fios aig a’ mhòr-chuid de bhuidhnean dè a chosgas pròiseact ach chan e dè a chosgas mìos de dhàil, agus mar sin bidh iad a’ optimeachadh bhuidseatan fhad ’s a tha iad a’ call luach-ùine. Airson bathar-bog slàinte tha na cunnartan litireil: gach seachdain a thèid leasachadh slighe a chuir dheth, feitheamh euslaintich nas fhaide ann an staidean slàinte nas miosa. Is e CoD am frèam matamataigeach as làidire a ghabhas taisbeanadh do luchd-ùidh an NHS oir bidh e a’ cur prìs air *dìth* do bhathar-bog.

## A’ mhatamataig

```
CoD = buannachd gach aonad ùine a chaidh air chall fhad ’s a tha e gun lìbhrigeadh   (£/seachdain no QALY/seachdain)

Làn-chall dàil = CoD × faid na dàlach

Airson prìomhachasachadh, faic wsjf-and-cd3.md: CD3 = CoD / faid.
```

Airson bathar-bog clionaigeach, cuir ainm air slàinte a bharrachd air airgead:

```
CoD_slàinte = euslaintich air a bheil buaidh gach seachdain × buannachd QALY gach euslaintich
CoD_airgead = CoD_slàinte × λ (stairsneach deònach-pàigheadh, £20k–30k/QALY)
             + sàbhalaidhean obrachaidh gach seachdain air chall
```

## Eisimpleir obrach

**Obrachaidh**: bidh bathar-bog a’ sàbhaladh £200 gach euslaintich air slighe; bidh urras a’ làimhseachadh 50 euslainteach mar sin/seachdain.

```
CoD = 200 × 50 = £10,000/seachdain
Tha dàil solair 10-seachdainean a’ cosg 200 × 50 × 10 = £100,000 de sgudal seachanta.
```

**Clionaigeach**: bidh leasachadh triage a’ toirt air falbh 5 seachdainean de fheitheamh (goireas 0.68 → 0.80 nas tràithe) airson 100 euslainteach/seachdain:

```
Buannachd QALY gach euslaintich = (5/52) × 0.12 ≈ 0.0115
CoD_slàinte = 100 × 0.0115 = 1.15 QALY/seachdain
CoD_airgead = 1.15 × £20,000 ≈ £23,000/seachdain de luach slàinte
```

Bidh dàil cleachdaidh 6-mìosan “a’ cosg” ~30 QALY – an argamaid a dh’ath-fhrèamas slip go-live IT mar thachartas clionaigeach. (Slat-tomhais airson sgèile: lorg anailis Maersk ainmeil Black Swan Farming feartan singilte le CoD ≈ $200k/seachdain a bha air feitheamh 38 seachdainean.)

## Ceangal ri einnseanaireachd bathar-bog

Is e CoD am meatrach a nì [ùine-stiùiridh DORA](../meatrachan-dora/) agus [èifeachdas sruthaidh](../meatrachan-sruthaidh/) so-leughaidh ionmhais: ùine-stiùiridh × CoD = airgead (no slàinte) air a losgadh ann an ciudhaichean. Cleachdaidhean:

- **Prìomhachasachadh**: rangaich obair a rèir CoD/faid ([WSJF/CD3](../wsjf-agus-cd3/)) an àite neach-ùidh as àirde.
- **Eaconamas pròiseis**: tha cosgais dàil ris a bheil dùil de ~1 seachdain × CoD gach feart aig ruitheam fhoillseachaidhean 2-sheachdain an aghaidh lìbhrigeadh leantainneach – cuir prìs air a’ bhaidse.
- **Solar**: tha CoD aig cuairtean solair an NHS de 6–18 mìosan; bidh a thaisbeanadh ag atharrachadh còmhraidhean cabhaig (faic [anailis buaidh buidseit](../anailis-buaidh-buidseit/) airson a’ cho-phàirt so-phàighteachd).

## Cunnartan

- **A’ gabhail ri CoD sreathach**: tha luach cumadh-ceann-latha aig cuid de dh’obair (cinn-latha riaghlaidh – CoD gun chrìoch às dèidh a’ chinn-latha, neoni roimhe) no luach a tha a’ lobhadh (uinneagan a’ chiad ghluaiste). Seòrsaich pròifil an èiginn mus iomadaich thu.
- **CoD air toraidhean nach eil duine ag iarraidh**: chan eil dàil a’ cosg ach ma tha luach aig an rud; tha sgudal air a chur dheth an-asgaidh.
- **Dùblachadh cunntais dàil agus lasachaidh**: bidh [lasachadh](../lasachadh-agus-roghainn-ùine/) a’ prìsealachadh ùine mu thràth thar chrìochan-ùine ioma-bliadhna; is e CoD an dreach obrachaidh taobh a-staigh na crìche-ùine. Cleachd CoD airson seachdainean/mìosan, gluasad NPV airson bhliadhnaichean.

## Stòran

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
