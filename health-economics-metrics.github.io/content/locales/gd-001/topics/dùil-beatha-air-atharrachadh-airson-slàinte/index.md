# Dùil-beatha air atharrachadh airson slàinte (HALE)

Is e HALE geàrr-chunntas aig ìre sluaigh: an àireamh bhliadhnaichean a dh’fhaodas neach a bhith an dùil a bhith beò *ann an làn-shlàinte*, a’ lasachadh bhliadhnaichean a chaidh a chaitheamh ann an tinneas no ciorram. Bha HALE na cruinne aig breith mu 61.9 bliadhna an aghaidh dùil-beatha de 73.3 (WHO, dàta 2019) – tha an cinne-daonna beò a dheichead mu dheireadh, air a’ chuibheasachd, ann an slàinte nas lugha na slàn.

## Carson a tha e cudromach

Is e HALE am prìomh mheatrach de phoileasaidh slàinte nàiseanta agus cruinne – an àireamhaiche targaidean “sìolachadh slàinteil” agus tha am beàrn a tha e a’ nochdadh (dùil-beatha às aonais HALE) na eallach a tha casg, eadar-theachd thràth, agus riaghladh galair-bhuan ag amas air dùnadh. Tha ro-innleachdan slàinte didseatach aig ìre ministrealachd air am fìreanachadh ann an cumhachdan HALE; bidh pasgan de dh’appaichean, seirbheisean sgrùdaidh, agus prògraman sgrùdaidh a’ cruinneachadh an seo aig a’ cheann thall.

## A’ mhatamataig

Is e an àireamhachadh àbhaisteach an **dòigh Sullivan**:

```
HALE_aois_x = Σ (bliadhnaichean-pearsa clàr-beatha aig gach aois ≥ x × cuibhreann ann an làn-shlàinte)
             / luchd-mairsinn aig aois x

“cuibhreann ann an làn-shlàinte” = 1 − Σ (coitcheannas_suidheachadh × cuideam ciorraim)
```

Cuir a-steach: clàr-beatha àbhaisteach a bharrachd air coitcheannas agus cuideaman ciorraim airson staidean slàinte (bho dhàta Eallach Galair na Cruinne). Tha HALE co-cheangailte ri [DALYs](../bliadhna-beatha-le-atharrachadh-airson-ciorraim/) – is e eallach DALY sluaigh agus beàrn HALE dà shealladh den aon slàinte a chaidh air chall.

## Eisimpleir obrach

Prògram brù-fala àrd didseatach nàiseanta: 500,000 clàraichte, bidh smachd cuibheasach air cuideam fala a’ leasachadh gu leòr gus tuiteamas stròc a ghearradh 0.2 puing sa cheud/bliadhna. Air a mhodaileadh thairis air beatha a’ bhuidheann, bidh stròcan air an seachnadh a’ sàbhaladh 15,000 bliadhna cuideamaichte-ciorraim (YLD aig cuideam 0.32 a bharrachd air YLL bho stròcan marbhtach).

```
Cur-ri HALE ≈ 15,000 bliadhna fallain / 500,000 neach
            ≈ 0.03 bliadhna (≈ 11 latha) de HALE gach neach clàraichte
```

Tha aon latha deug a’ faireachdainn beag – ach aig sgèile sluaigh is ann mar sin a ghluaiseas meatrachan nàiseanta dha-rìribh: bidh ministrealachdan a’ ceannach mhìltean de bhuannachdan beaga gach neach. Tha an àireamhachadh seo cuideachd a’ sealltainn carson a tha **ruigsinn a’ riaghladh**: gluaisidh eadar-theachd a tha dà uair cho èifeachdach le deichneamh den chlàrachadh HALE còig tursan nas lugha. Faic [ruigsinn agus co-ionannachd](../ruigsinneachd-agus-co-ionannachd/).

## Ceangal ri einnseanaireachd bathar-bog

Is e pàtran meatrach slàinte-cabhlaich a th’ ann an HALE: **beatha seirbheis ris a bheil dùil × cuibhreann dhen bheatha sin a chaidh a chaitheamh fallain**. Faodaidh sgioba àrd-ùrlair “dùil-beatha seirbheis fhallain” obrachadh a-mach thar a h-oighreachd – bliadhnaichean a tha seirbheis ris a bheil dùil ruith, air an lasachadh le ùine a chaidh a chaitheamh ann an staidean lùghdaichte, seann-fhasanta, no tachartais (cuideaman bho easbhaidh SLO). Bidh e ag ath-fhrèamadh earbsachd bho ruigsinneachd puing gu slàinte beatha, agus a’ stiùireadh leasachaidh gu na siostaman a tha a’ slaodadh HALE na h-oighreachd sìos.

## Cunnartan

- **Bidh HALE a’ gluasad gu slaodach agus ioma-adhbharach** – chan eil eadar-theachd singilte “a’ gluasad HALE” gu tomhaiste; tagair an cur-ri modaileach, chan e an staitistig nàiseanta.
- **Bidh dàta coitcheannais a’ dol air dheireadh** bliadhnaichean; cha nochd buannachdan o chionn ghoirid ann am HALE oifigeil.
- **A’ coimeas HALE thar dhùthchannan** le tomhas staid slàinte eadar-dhealaichte tha seo cunnartach; cleachd e fad-ùine taobh a-staigh aon shiostam.

## Stòran

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
