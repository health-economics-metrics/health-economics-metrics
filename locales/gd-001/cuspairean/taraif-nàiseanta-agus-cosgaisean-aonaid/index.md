# Taraif nàiseanta agus cosgaisean aonaid

Bidh an NHS a’ pàigheadh sholaraichean airson gnìomhachd fo liosta phrìsean nàiseanta stèidhichte air riaghailtean — gu h-eachdraidheil an Taraif Nàiseanta / Pàigheadh a rèir Toraidhean, a chaidh a chur nan àite leis an **NHS Payment Scheme (NHSPS)** air 1 Giblean 2023. Air cùl nam prìsean tha bun-structar cosgais aonaid nàiseanta: an **National Cost Collection (NCC)** agus an co-chruinneachadh **PSSRU Unit Costs of Health and Social Care**.

## Carson a tha e cudromach

Is iad seo na h-ainmeachairean aig a h-uile cùis ghnìomhachais NHS earbsach. Nuair a their tagradh “tha frithealadh euslaintich-a-muigh luach £160” no “tha uair-altraim Band 6 a’ cosg £31”, thig na h-àireamhan sin bhon bhun-structar seo — agus is e a bhith a’ cleachdadh nan àireamhan oifigeil an àite fheadhainn a chaidh a chruthachadh a nì measaidhean neo-eisimeileach so-choimeasach agus a nì sgiobaidhean ionmhais co-obrachail. Do reiceadair, tha an taraif cuideachd a’ mìneachadh taobh an *teachd-a-steach*: tha gnìomhachd a tha do bhathar-bog a’ comasachadh (clionaigean a bharrachd, leapannan air an lìonadh) air a luachachadh aig prìsean na sgeama.

## A’ mhatamataig

```
Prìs taraif gach aonad gnìomhachd (spell le còd HRG, frithealadh euslaintich-a-muigh)
  = cosgais aonaid chuibheasach nàiseanta (bho NCC) × Factar Feachdan Margaidh (atharrachadh ionadail)
  fo NHSPS: eileamaidean measgaichte stèidhichte + caochlaideach (“pàigheadh co-thaobhaichte agus brosnachadh”)

Cosgais aonaid NCC = cosgais iomlan seòrsa gnìomhachd air aithris leis an trust / meud gnìomhachd
                     (air a thogail air Siostaman Fiosrachaidh is Cosgais aig Ìre Euslaintich, PLICS)

Co-chruinneachadh PSSRU: ~80 cosgais aonaid àbhaisteach (co-chomhairle GP, uair-altraim a rèir
band, frithealadh ED…) — an stòr bunaiteach ann an measaidhean eaconamach na RA.
```

## Eisimpleir obrach

Bidh do bhathar-bog a’ saoradh 1 uair/latha de ùine altraim Band 6 ann am bliadhna obrach 250 latha:

```
Cosgais Band 6 stèidhichte air PSSRU a’ gabhail a-steach overheads ≈ £31/uair (thoir sùil air an deasachadh làithreach)
Luach comais = 250 × £31 = £7,750/altram/bliadhna (gun airgead a leigeil a-mach)
```

Air an làimh eile, bidh an altram a’ ruith 2 cho-ainmeachadh leantainn euslaintich-a-muigh a bharrachd/latha aig ~£160 luach sgeama: 500 × £160 = **£80,000/bliadhna de ghnìomhachd maoinichte** — eadar-dhealachadh deich-fhillte ann an luach a thathar a’ tagradh a rèir ath-sgaoileadh, uile bho chosgaisean aonaid oifigeil. Tha an dà thagradh so-sgrùdaidh oir tha na h-ainmeachairean foillsichte; is e sin am prìomh phuing.

## Ceangal ri einnseanaireachd bathar-bog

Is e seo am pàtran **leabhar prìsean a-staigh**. Bidh eaconamas slàinte na RA ag obair oir bidh gach measadh a’ cleachdadh na h-aon chosgaisean aonaid foillsichte; tha seo gann ann am buidhnean einnseanaireachd, agus mar sin bidh gach cùis ghnìomhachais a’ cruthachadh a cosgais fhèin airson uair einnseanair, tachartas, deploy. Faodaidh sgioba àrd-ùrlair leabhar mar sin fhoillseachadh — cosgais làn-luchdaichte gach uair einnseanair a rèir ìre, gach tachartas a rèir cruaidh-chàs, gach mionaid togail — agus a chleachdadh a dhèanamh riatanach anns gach moladh. Bidh siostaman chargeback/showback cuideachd a’ ath-aithris fàilligidhean aithnichte na taraif: bidh prìsean cosgais chuibheasach a’ brosnachadh geama meud, bidh pàighidhean stèidhichte a’ brosnachadh fo-sholarachadh. Tha mean-fhàs an NHSPS bho phàigheadh gnìomhachd fìor gu measgachadh stèidhichte+caochlaideach nam fichead bliadhna de leasanan ann an dealbhadh bhrosnachaidhean airson prìsean àrd-ùrlair a-staigh.

## Cunnartan

- **Àireamhan seann-fhasanta**: bidh prìsean NCC, PSSRU, agus NHSPS ag ùrachadh gach bliadhna — cuir ceann-latha air gach àireamh.
- **Prìs taraif ≠ cosgais**: tha prìsean nan cuibheasaichean nàiseanta le atharrachaidhean; tha do chosgais iomaill ionadail eadar-dhealaichte (faic [cosgais iomaill an aghaidh cosgais cuibheasach](../cosgais-iomaill-an-aghaidh-cosgais-cuibheasach/)).
- **Comas a luachachadh aig taraif gun dòigh** gus an gnìomhachd a bharrachd a lìbhrigeadh agus a phàigheadh.

## Stòran

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
