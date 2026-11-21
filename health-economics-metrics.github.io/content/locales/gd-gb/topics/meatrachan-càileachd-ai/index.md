# Meatrachan càileachd AI

Meatrachan airson ceartas toraidh a chaidh a ghineadh le AI: cruinneas an aghaidh na fìrinn bhunasach, **dìleas/stèidhichte** (a bheil gach tagradh a’ faighinn taic bhon cho-theacsa a chaidh a thoirt seachad?), agus **ìre hallucination** (dè a’ cho-roinn de thoraidhean anns a bheil susbaint gun taic no meallta?). Ann an suidheachaidhean slàinte chan e maitheas càileachd a tha annta – is iad ìrean cùraim.

## Carson a tha e cudromach

Tha slatan-tomhais san raon meidigeach air ìrean hallucination **os cionn 60% airson LLMan gun stèidheachadh** a thomhas air gnìomhan meidigeach (cuid de mhodailean fosgailte >80%), fhad ’s a ghearras stèidheachadh, lorg, agus modhan reusanachaidh na h-ìrean gu mòr (m.e. lùghdaich modh smaoineachaidh GPT-5 hallucinations HealthBench 3.6% → 1.6% air aon shlat-tomhais). Tha dòs meallta no luaidh dhèanta ann am sruth-obrach clionaigeach na **thachartas fiosrachaidh bhreugach le slighe cron** – buinidh e don gheàrr cronan ann am modail eaconamach sam bith, le prìs mar na meallta-adhartach aig [eaconamas sgrùdaidh](../eaconamas-sgrìonaidh/): bidh gach fear a’ cur dheth cosgais sìos an t-sruth (gnìomh air fiosrachadh ceàrr, saothair dearbhaidh, nochdadh meidigeach-laghail, earbsa air a bleith).

## A’ mhatamataig

```
Ìre hallucination = toraidhean le susbaint gun taic/meallta / làn-toraidhean
  taobh a-staigh: a’ dol an aghaidh a’ cho-theacsa a chaidh a thoirt
  taobh a-muigh:  breug nach gabh dearbhadh a-mach air a’ cho-theacsa

Dìlseachd (stoidhle RAGAS) = tagraidhean le taic san fhreagairt / làn-tagraidhean san fhreagairt
Cruinneas/ath-ghairm cho-theacsa = càileachd lorg a’ biathadh a’ ghineadair

Cuideam eaconamach – chan eil a h-uile hallucination a’ cosg an aon rud:
  cosgais cron ris a bheil dùil = Σ thairis air seòrsaichean mearachd (ìre × P(gun lorg) ×
                       P(gnìomh a dhèanamh) × cosgais gach mearachd gnìomhaichte)
  Bidh an ìre ath-sgrùdaidh daonna a’ suidheachadh P(gun lorg) – agus buinidh a cosgais
  don mhodail cuideachd (mionaidean ath-sgrùdaiche × meud).
```

## Eisimpleir obrach

Bidh cuideachadair còdachaidh chlionaigeach AI a’ làimhseachadh 200,000 tachartas/bliadhna; sealladh sgrùdaidh 2% de thoraidhean le mearachd còdachaidh bhrìghmhor; bidh còdairean daonna a’ glacadh 85% dhiubh:

```
Mearachdan a ruigeas aithris = 200,000 × 0.02 × 0.15 = 600/bliadhna
Cosgais gach mearachd gun ghlacadh (cuibheasachd mì-bhilleadh + nochdadh sgrùdaidh) ≈ £250
Cosgais mearachd ris a bheil dùil = 600 × 250 = £150,000/bliadhna
Cosgais ath-sgrùdaidh (2 mhion × 200k × £0.50/mion)  = £200,000/bliadhna

Cùis leasachaidh: bidh stèidheachadh lorg a’ gearradh ìre mearachd gu 0.8%
→ mearachdan gun ghlacadh 240, cosgais mearachd £60,000 (−£90k/bliadhna); faodaidh ùine
  ath-sgrùdaidh tuiteam cuideachd (sampaill an àite làn ath-sgrùdadh) – bidh an
  tasgadh càileachd a’ pàigheadh mus tèid tagradh luaths a dhèanamh.
```

## Ceangal ri einnseanaireachd bathar-bog

Làimhsich càileachd modail mar eaconamas còmhdachaidh deuchainn, le smachd aig ìre slàinte: **is e na seataichean measaidh do dheuchainn chlionaigeach** – clàraichte ro-làimh, riochdachail air *do* mheasgachadh chùisean, air ùrachadh an aghaidh gluasaid; **bidh stèidheachadh a’ buannachadh air sgèile** airson gnìomhan fìrinneach (is e lorg + brosnachadh a dh’fheumas luaidh mar as trice an lùghdachadh hallucination as saoire – coimeas ri [eaconamas aonad inference](../eaconamas-aonad-inference/) airson a chosgais tòcain); agus **foillsich am pòint obrachaidh**: coltach ri [mothachail/sònraichte](../measadh-ai-clionaigeach/), chan eil “97% dìleas” a’ ciallachadh dad às aonais sgaoileadh gnìomha agus stairsneach lorg. Is e an dearbh àireamhachadh [NNT/NNH](../àireamh-a-dh-fheumar-a-làimhseachadh/) a th’ ann am matamataig an ìre ath-sgrùdaidh gu h-àrd ri geata sgrùdaidh sam bith.

## Cunnartan

- **Gluasad slat-tomhais gu riochdachadh**: tha ìrean hallucination gu mòr an urra ris a’ ghnìomh; is e do mheasgachadh chùisean an aon shlat-tomhais a tha a’ cunntadh.
- **Ath-sgrùdadh daonna gun chosgais**: bidh “bidh clinigeach a’ sgrùdadh a h-uile càil” a’ gearradh a’ bhuannachd na leth agus feumaidh e nochdadh san loidhne chosgais – agus bidh dùisgeadh a’ crìonadh (sàmhchair fèin-obrachaidh), mar sin bidh P(gun lorg) ag èirigh le earbsa.
- **A’ optimeachadh càileachd cuibheasach fhad ’s a ghiùlaineas an earball an cunnart**: tha aon nòta ailleirdsidh dèanta nas truime na mìle abairt mì-chofhurtail; cuir cuideam air mearachdan a rèir builean, a rèir foirmle cron ris a bheil dùil.

## Stòran

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
