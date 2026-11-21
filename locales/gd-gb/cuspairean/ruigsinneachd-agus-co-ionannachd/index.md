# Ruigsinneachd agus co-ionannachd

Is e RE-AIM – Reach, Effectiveness, Adoption, Implementation, Maintenance (Ruigsinneachd, Èifeachdas, Gabhail ris, Buileachadh, Cumail suas) – am frèam àbhaisteach airson breithneachadh air buaidh *mòr-shluaigh* eadar-theachd. Is e an àireamhachd meadhanach aige: **buaidh slàinte poblach ≈ ruigsinneachd × èifeachdas**. Bidh innealan didseatach a’ cur tomhas co-ionannachd ris: tha an sgaradh didseatach a’ ciallachadh gu bheil ruigsinneachd neo-chothromach gu rianail, agus faodaidh lìbhrigeadh didseatach an toiseach na beàrnan slàinte a tha e ag amas air a dhùnadh a leudachadh.

## Carson a tha e cudromach

Lorgaidh lèirmheasan rianail a’ cur RE-AIM an sàs ann an mHealth ainm-sgrìobhte cunbhalach: Ruigsinneachd agus Gabhail ris làidir, **Èifeachdas agus Cumail suas lag** – bidh appan a’ sgaoileadh gu furasta agus a’ crìonadh luath. Do sheirbheis slàinte nàiseanta, tha seo a’ ciallachadh gum faod toradh drùidhteach gach neach-cleachdaidh a bhith na dhroch thasgadh mòr-shluaigh, agus a chaochladh: faodaidh inneal meadhanach èifeachdach a ruigeas milleanan barrachd a thoirt gu buil na fear sàr-mhath a ruigeas mìltean (faic àireamhachd [HALE](../dùil-beatha-air-atharrachadh-airson-slàinte/)). Chan e bacadh taobh a th’ ann an co-ionannachd ach draibhear luach: bidh às-dùnadh didseatach a’ leantainn aois, bochdainn, ciorram, agus cànan – dìreach na mòr-shluagh a tha a’ giùlan an eallaich as fheàrr ri làimhseachadh – agus mar sin bidh buannachd a dh’fhaodadh a bhith aig an neach-cleachdaidh iomallach a chaidh às-dùnadh gu tric *os cionn na cuibheasachd*. Airson tomhas staitistigeil foirmeil de neo-ionannachd slàinte co-cheangailte ri inbhe sòisio-eaconamach, faic [Clàr-amais cruinneachaidh](../clàr-amais-cruinneachaidh/).

## A’ mhatamataig

```
Buaidh mòr-shluaigh ≈ ruigsinneachd × èifeachdas
  ruigsinneachd = com-pàirtichean / mòr-shluagh airidh (faic activation-and-uptake.md)
  èifeachdas    = buaidh fìor-shaoghail am measg com-pàirtichean (cuideaman cumail —
                  faic retention-and-churn.md)

Dreach le sreathadh co-ionannachd:
  buaidh_buidheann_g = ruigsinneachd_g × èifeachdas_g, air aithris gach
  còigeamh bochdainn / còmhlan aoise / buidheann cànain
  beàrn co-ionannachd = buaidh_còigeamh àrd − buaidh_còigeamh ìosal

Cosg-èifeachdas cuairteachaidh: cuir cuideaman co-ionannachd air QALYan a rèir
buidheann faighteir — tha QALY don fheadhainn as miosa dheth a’ cunntadh barrachd
(leudachadh HTA a tha a’ fàs prìomh-shruthach).
```

## Eisimpleir obrach

Prògram casg tinneas an t-siùcair didseatach, air aithris ann an dà dhòigh:

```
Iomlan: ruigsinneachd 12%, buaidh 0.02 QALYs/com-pàirtiche → 0.0024 QALYs/neach airidh

Air a sreathadh (còigeamhan bochdainn):
  Q1 (as lugha bochdainn): ruigsinneachd 22%, buaidh 0.02 → 0.0044
  Q5 (as motha bochdainn): ruigsinneachd 4%,  buaidh 0.025 → 0.0010

Bidh am prògram a’ lìbhrigeadh 4.4× barrachd slàinte don fheadhainn as lugha bochdainn —
agus buaidh gach com-pàirtiche Q5 ARD NAS FHEARR (barrachd rùm). Bidh gàirdean
taic didseatach (coidseadh fòn + ruigsinneachd coimhearsnachd) a’ cosg 20%
a bharrachd gach com-pàirtiche Q5 a thogas ruigsinneachd Q5 gu 12% a’ trì-fhillteachadh
buaidh Q5 agus a’ leasachadh an iomlan — is e an tasgadh co-ionannachd AN tasgadh
èifeachdais an seo.
```

## Ceangal ri einnseanaireachd bathar-bog

Tha ruigsinneachd gu mòr na artifact einnseanaireachd: bidh riatanasan làr uidheim agus OS, beachdan bandwidth, taic cànain, co-fhreagarrachd ruigsinneachd (WCAG), cnapan-starra dearbhaidh dearbh-aithne, agus sgaoileadh app-store a-mhàin gach fear a’ gearradh mòr-shluagh a-mach às an àireamhaiche – mar as trice gu do-fhaicsinneach, oir cha nochd luchd-cleachdaidh air an às-dùnadh ann an analytics. Cleachdaidhean einnseanaireachd a ghluaiseas co-ionannachd: tomhais an *àireamhaiche* (ionnsramaich am mòr-shluagh airidh, chan e luchd-cleachdaidh a-mhàin); buidseat coileanaidh airson seann uidheaman agus ceangal dona; cuir slighean didseatach le taic (fòn, SMS, kiosk) a-mach mar shruthan prìomh-ìre seach seanailean nàire; agus sreath gach meatrach dashboard a rèir tomhasan co-ionannachd – is e cuibheasachd gun sreathadh far a bheil neo-ionannachd a’ falach ([gabhail ris GDS](../meatrachan-seirbheis-gds/) a’ giùlan an aon rabhaidh).

## Cunnartan

- **Èifeachdas air aithris air an fheadhainn a chrìochnaich, buaidh air a thagradh air mòr-shluagh** – na teirmean ruigsinneachd air an leigeil às gun fhuaim.
- **Co-ionannachd mar sgrùdadh às dèidh làimhe** seach in-chur dealbhaidh; tha ath-fhreagairt ruigsinneachd mòran nas daoire na dealbhadh air a shon.
- **Dearmad cumail suas**: an tomhas as laige aig mHealth RE-AIM – tagraidhean buaidh nas fhaide na fad-ùine na fianais.
- **Sàbhalaidhean seanail didseatach a-mhàin** a ghluaiseas cosgaisean gu luchd-cleachdaidh às-dùnte agus luchd-obrach loidhne-aghaidh (faic [meatrachan seirbheis GDS](../meatrachan-seirbheis-gds/)).

## Stòran

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
