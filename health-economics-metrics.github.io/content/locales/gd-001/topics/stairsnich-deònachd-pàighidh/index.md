# Stairsnich deònachd pàighidh

Is e stairsneach deònachd pàighidh (WTP) an t-uachdar as motha a phàigheas neach-co-dhùnaidh gach aonad de bhuannachd slàinte – an loidhne a thionndaidheas [ICER](../co-mheas-cosg-èifeachdais-àrdachaidh/) gu co-dhùnadh gabhail ris/diùltadh.

## Carson a tha e cudromach

Is ann aig an stairsneach a sguireas eaconamas slàinte de bhith na thomhas agus a dh’fhàsas e na phoileasaidh. Tha fear aig a h-uile siostam nàiseanta, follaiseach no fillte, agus ma tha fios agad air an àireamh ionadail tha fios agad dìreach ciamar a phrìsealaicheas tu tagradh luach slàinte:

| Buidheann | Stairsneach (mar a chaidh a rannsachadh, 2024–2025) |
|---|---|
| NICE (Sasainn) | £20,000–£30,000 gach QALY; cuibheasachd stairsnich co-dhùnaidh empirigeach ≈ £24,400 (2022–24); tha atharraichean dhroch-ìre ag àrdachadh a’ mhullaich èifeachdach gu ~£36k–£51k; teicneòlasan fìor-shònraichte suas gu £100k+ |
| ICER (na SA, neo-riaghaltach) | slatan-tomhais prìse $100,000–$150,000 gach QALY/evLYG; aithris raon $50k–$200k |
| Canada (CADTH / CDA-AMC) | ≈ CAD$50,000 gach QALY stairsneach obrach |
| WHO-CHOICE (eachdraidheil, cruinneil) | 1–3× GDP gach neach gach DALY air a sheachnadh (a-nis air a dhì-mholadh mar rud ro bhorb) |
| Taobh solarachaidh empirigeach na RA (Claxton et al.) | ≈ £13,000 gach QALY air a chuir às an àite aig iomall an NHS |

## A’ mhatamataig

Bidh an stairsneach λ a’ dol a-steach do gach riaghailt co-dhùnaidh:

```
Gabh ris ma tha ICER = ΔC/ΔE < λ
Co-ionann: gabh ris ma tha NMB = λ×ΔE − ΔC > 0
```

Dà theòiridh air dè a th’ ann an λ:

- **Taobh iarrtais**: na tha comann deònach pàigheadh airson slàinte (breith luach).
- **Taobh solarachaidh**: an t-slàinte a tha am buidseat a’ toirt a-mach aig an iomall an-dràsta (meud empirigeach – ~£13k/QALY aig Claxton). Ma tha λ a thathar a’ cleachdadh airson cho-dhùnaidhean nas àirde na ìre an taobh solarachaidh, tha aontachadh teicneòlas ùr a’ cur às an àite barrachd slàinte na tha e a’ cur ris.

## Eisimpleir obrach

Tha do leigheas didseatach a’ lìbhrigeadh 0.05 QALY gach euslainteach làimhsichte aig cosgais lom (prìs às aonais countachdan) de £800.

```
ICER = 800 / 0.05 = £16,000 gach QALY
```

- Sasainn: fo £20k → so-mhaoinichte. Prìs as motha a ghabhas dìon: aig λ = £20,000, prìs_as_motha = 0.05 × 20,000 + countachdan = £1,000 + countachdan.
- Frèamadh malairteach na SA aig $150k/QALY: tha a’ phrìs stèidhichte air luach fada nas àirde.
- Stairsneach dùthcha GDP-gach-neach de $4,000: feumaidh an aon toradh cosg fo ~$200 lom.

An aon toradh, trì margaidhean, trì prìsean – is e an stairsneach *am* modail prìsidh. Is e seo prìsean stèidhichte air luach, air an ruith air ais bho λ.

## Ceangal ri einnseanaireachd bathar-bog

Tha λ fillte aig gach buidheann einnseanaireachd: an cnap-starra aig am maoinich i innealan gach uair einnsear a shàbhaladh. A bhith ga dhèanamh follaiseach – “bidh sinn a’ maoineachadh rud sam bith fo £40 gach uair einnsear creidsinneach air a shàbhaladh” – a’ comasachadh coimeas clàr-lìog de thasgaidhean àrd-ùrlair, dìreach mar a bhios clàran-lìog cosgais-gach-QALY a’ rangachadh caiteachas slàinte. Bidh leasan an taobh solarachaidh a’ gluasad cuideachd: is e do λ fèin fìor na bheir do chùl-chlàr *làithreach* a-mach aig an iomall, chan e na their an stiùireadh a tha ùine a’ cosg.

## Cunnartan

- **Siubhal stairsnich** thar uachdranasan no a bhith a’ togail mullach HST airson toradh àbhaisteach.
- **A bhith a’ làimhseachadh λ mar ùrlar prìse**: tha a bhith a’ glanadh an stairsnich riatanach, chan eil e gu leòr – faodaidh [buaidh buidseit](../anailis-buaidh-buidseit/) toradh a tha so-phàighte gach aonad a chur fodha fhathast.
- **A bhith a’ leigeil seachad gu bheil stairsnichean a’ gluasad**: bidh atharraichean dhroch-ìre NICE (2022) agus ath-sgrùdaidhean ùine ag atharrachadh λ èifeachdach; cuir ceann-latha air do thagraidhean.
- **ICER a choimeas ri stairsneach ann an airgead eadar-dhealaichte gun tionndadh an toiseach**: faic [coimeas ICER thar airgeadan](../coimeas-icer-thar-airgeadan/) – tha an dòigh tionndaidh (co-ionannachd cumhachd-ceannaich an aghaidh ìre iomlaid margaidh) cudromach gu dòigh-obrach, chan e mion-fhiosrachadh cruinnachaidh.
- **Luachadh stèidhichte air λ a mheasgachadh le traidisean VSL/VPF margaidh-obrach**: tha iad sin a’ tighinn à traidiseanan teòiridheach eadar-dhealaichte (dòigh-obrach cuingichte le buidseat slàinte an aghaidh roghainn fhoillsichte bho mhalairt cunnart-pàighidh) agus chan eil iad an-còmhnaidh co-chòrdail – airson an dòigh-obrach roghainn-fhoillsichte eile air luach a chur air beatha, faic [Luach beatha staitistigeil](../luach-beatha-staitistigeil/).

## Stòran

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
