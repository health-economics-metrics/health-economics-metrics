# Cumail air cleachdaichean agus call chleachdaichean

Bidh cumail a’ tomhas dè a’ chuibhreann de bhuidheann chleachdaichean a tha fhathast gnìomhach N làithean às dèidh dhaibh tòiseachadh (lùban D1/D7/D30); is e call an taobh eile. Is e bunait gheur slàinte didseatach: **timcheall air 90% de luchd-cleachdaidh appan slàinte a’ trèigsinn taobh a-staigh 30 latha** – bidh cumail D30 ann an slàinte didseatach timcheall air 3–4% an aghaidh cuibheasach de ~6% airson a h-uile app.

## Carson a tha e cudromach

Dh’ainmich Eysenbach seo ann an 2005: **lagh an ìsleachaidh** – tha call luchd-cleachdaidh aig ìrean àrda na fheart bunaiteach, structarail de eadar-theachdan eHealth, chan e meang cur-an-gnìomh, le ìsleachadh ann an deuchainnean eHealth gu cunbhalach nas àirde na 50%. Tha a’ bhuaidh eaconamach iomlan: bidh cumail a’ mìneachadh an *uinneag làimhseachaidh* anns an urrainnear buannachd sam bith a lìbhrigeadh, agus [eaconamas aonad](../eaconamas-aonad-appan-slàinte/) – chan eil CAC a chaidh a phàigheadh airson neach-cleachdaidh a dh’fhuirich 12 latha a’ lìbhrigeadh LTV no QALYan. Tha modail eaconamach sam bith airson toradh slàinte luchd-cleachdaidh nach cuir cuideam air buannachdan a rèir lùb a’ chumail a’ toirt cunntas air toradh nach eil ann.

## A’ mhatamataig

```
Retention_Dn = users active on day n / cohort size × 100
Churn rate   = users lost in period / users at period start × 100

Benefit weighting (the health-economics move):
  expected benefit per acquired user = Σ_t retention(t) × benefit rate(t)
  ≈ area under the retention curve × per-time benefit
  — NOT trial benefit × 100% of acquired users

Cost per retained-at-D30 user = CAC / D30 retention
  (at 4% D30, a £5 CAC is really £125 per retained user)
```

## Eisimpleir obrach

Aplacaid slàinte-inntinn: sheall deuchainn 0.02 QALY air am buannachadh gach neach-cleachdaidh a chrìochnaich 8 seachdainean. Buidheann cleachdaidh de 100,000 luchdachadh sìos, cumail D7 25%, D30 8%, seachdain 8 4%:

```
Completers          = 100,000 × 0.04 = 4,000
QALYs delivered     = 4,000 × 0.02 = 80  (not 100,000 × 0.02 = 2,000)
At £20,000/QALY     = £1.6M of health value (not £40M)

Per-download health value = £16 — the number that should set what a
payer will pay per download, and it is 4% of the naive claim.
Retention improvement case: moving week-8 completion 4% → 6% adds
40 QALYs/year ≈ £800k — retention engineering IS health production.
```

## Ceangal ri einnseanaireachd bathar-bog

Is e cumail am meatrach far a bheil einnseanaireachd toraidh a’ dèanamh luach slàinte gu dìreach, a rèir an àireamhachd gu h-àrd. Tha na cleachdaidhean a ghluaiseas e àbhaisteach: ùine-gu-a’-chiad-luach ann an clàradh, dealbhadh ath-chom-pàirteachaidh, coileanadh, agus gu sònraichte **crìochnachadh dòs a chaidh a dhealbhadh** – bu chòir prògram aig a bheil deireadh mì-chinnteach (8 seachdainean, an uairsin ceumnachadh) *crìochnachadh* a thomhas, chan e DAU gun chrìoch, a’ co-thaobhadh a’ mheatrach ris a’ mhodal chlionaigeach seach modal aire a tha air a mhaoineachadh le sanasachd. Is e anailis mairsinneachd an trusgan ceart (an aon mhatamataig Kaplan-Meier ri [bliadhnaichean beatha air am buannachadh](../bliadhnachan-beatha-a-chaidh-a-chosnadh/)); roinn lùban a rèir sianal togail, on a bhios measgachadh shianalan ag atharrachadh cumail nas motha na a’ mhòr-chuid de fheartan.

## Cunnartan

- **Failmhearachd rùn-làimhseachaidh air an ais**: bidh deuchainnean ag aithris luchd-crìochnachaidh; feumaidh eaconamas cleachdaidh a h-uile duine a fhuaradh a chunntadh (prìomh rabhadh Eysenbach).
- **Cleasachd cumail**: luchd-cleachdaidh “gnìomhach” air am brosnachadh le brathan nach dèan an gnìomh leigheasach gu bràth (faic [meatrachan com-pàirteachais](../meatrachan-com-pàirteachais/)).
- **Coimeas lùban thar mhìneachaidhean**: tha “gnìomhach” air a mhìneachadh mar fhosgladh an aghaidh gnìomh brìghmhor ag atharrachadh D30 le iomadan.
- **A’ dearmad cò a dh’fhàgas**: ma dh’fhàgas an fheadhainn as tinne as luaithe, thèid buannachdan gach neach-cleachdaidh sìos mar a leasaicheas cumail am measg nan daoine slàn – paidhrich lùban le measgachadh cùise (faic [ruigsinneachd agus cothromachd](../ruigsinneachd-agus-co-ionannachd/)).

## Stòran

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
