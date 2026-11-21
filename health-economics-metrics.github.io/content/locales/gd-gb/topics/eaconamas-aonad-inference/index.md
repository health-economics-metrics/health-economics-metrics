# Eaconamas aonad inference

Bidh eaconamas aonad inference a’ cur prìs air feartan AI le coimpiutaireachd iomaill: **cosgais gach tòcain**, air a chruinneachadh gu cosgais gach malairt, gach neach-cleachdaidh, gach tachartas clionaigeach. An dinamaig mhìneachaidh: tha prìsean LLM air tuiteam timcheall air **òrdugh meud gach 1–2 bhliadhna** aig comas seasmhach – ìre call-prìsean gun ro-aithris ann an cosgais teicneòlais slàinte.

## Carson a tha e cudromach

Tha dà thoradh a’ leantainn bho chrìonadh prìsean. Gu malairteach, faodaidh feart AI a tha oirthireach an-diugh a bhith gu mòr prothaideach ann an 18 mìosan – agus thèid farpaiseach air a phrìsealachadh air cosgaisean an-diugh a chur fodha. Airson measadh eaconamach, bidh modail cosg-èifeachdais sam bith airson seirbheis chlionaigeach le AI a ghlaiseas prìsean inference 2024 **a’ cur barrachd air cosgais leantainneach gu mòr** – feumaidh an anailis suidheachaidhean lùghdachadh prìsean mar a làimhsicheas modailean cungaidh crìoch pàtent agus inntrigeadh seanaireach. (Puingean-iomraidh bhon rannsachadh: tòcain toraidh crìochnach ~$15–75/M ann am meadhan 2026, modailean meadhan-ìre òrdugh nas saoire, comas ìre GPT-4 sìos bho ~$20/M ann an 2022 gu ~$0.40/M; thomhais Epoch AI crìonaidhean 9×–900×/bliadhna a rèir clach-mhìle comais.)

## A’ mhatamataig

```
Cosgais gach gairm = tòcain a-steach × ìre a-steach + tòcain a-mach × ìre a-mach
Cosgais gach aonad = Σ ghairmean gach aonad toraidh gnìomhachais (gach tachartas triage,
                    gach litir air a dhreachadh, gach geàrr-chunntas co-chomhairle)

Fìrinn mheasgaichte = gairm bhunaiteach + ath-oidhirpean + co-theacsa RAG (trom air a-steach)
                    + gairmean measaidh/rèile-grèim (gu tric 20–50% overhead)

Suidheachadh lùghdachaidh prìs airson mhodailean ioma-bliadhna:
  cosgais_t = cosgais_0 × d^t, deuchainn d ∈ {0.3, 0.5, 0.7}/bliadhna ann an anailis mothachalachd
```

## Eisimpleir obrach

Seirbheis geàrr-chunntais leigeil dhachaigh AI: bidh geàrr-chunntas cuibheasach a’ cleachdadh 12,000 tòcan a-steach (co-theacsa clàir) + 1,200 a-mach, a bharrachd air pas dearbhaidh (6,000 a-steach / 300 a-mach). Aig $3/M a-steach, $15/M a-mach:

```
Dreachd:  12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Dearbhadh: 6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Gach geàrr-chunntas ≈ $0.077 → gach 100,000 geàrr-chunntas/bliadhna ≈ $7,700

An aghaidh ~20 mionaid clionaigeach air an sàbhaladh gach geàrr-chunntais (≈ £25), tha inference
0.25% den luach a chaidh a chruthachadh — tha an eaconamas air a riaghladh leis a h-uile càil
ACH na tòcain: aonachadh, measadh, riaghladh, gabhail ris.
```

Is e an co-dhùnadh sin – is gann gu bheil cosgais inference na cuingead ceangailteach, aig prìsean làithreach, airson ghnìomhan clionaigeach le luach àrd – fhèin an lorg as fhiach a ghiùlan a-steach do choinneamhan prìsidh.

## Ceangal ri einnseanaireachd bathar-bog

Is e seo [eaconamas aonad neul](../eaconamas-aonad-neul/) air a shònrachadh airson AI, le trì nòtaichean cleachdaidh: **meadaraich gach aonad gnìomhachais**, chan e gach gairm API, gus an plugadh an àireamh a-steach do mhodailean [ICER](../co-mheas-cosg-èifeachdais-àrdachaidh/)/[buaidh buidseit](../anailis-buaidh-buidseit/) gu dìreach; **thoir an aire don neo-chothromachd a-steach/a-mach** (mar as trice prìs a-mach ~4× a-steach; tha ailtireachdan RAG trom air a-steach – tha roghainnean ailtireachd nan roghainnean prìsidh); agus **slighe a rèir ìre gnìomha** – a’ maidseadh comas modail ri duilgheadas gnìomha (modailean saor airson seòrsachadh, crìochnach airson synthesis) gu cunbhalach a’ gearradh cosgais mheasgaichte 5–10× aig càileachd co-ionann, an dreach bathar-bog den eadar-theachd èifeachdach as saoire ([lùghdachadh cosgais](../anailis-lùghdachadh-cosgais/), co-ionannachd air a dhearbhadh).

## Cunnartan

- **Modailean ioma-bliadhna le prìs reòite** – a’ cur barrachd air cosgais; ach cuideachd **modailean teachd-a-steach le call-prìsean air a ghabhail ris** – chan e cùmhnant a th’ ann an cogadh prìsean; dèan suidheachadh dhen dà chuid.
- **A’ dearmad overhead measaidh**: tha rèilichean-grèim, britheamhan, agus ath-oidhirpean nan fìor thòcain, gu tric an mòr-chuid ann an suidheachaidhean riaghlaichte.
- **Miopaidh gach tòcain**: tha cosgaisean aig latency, crìochan ìre, agus cuingeadan uinneag-cho-theacsa nach glac prìs tòcain sam bith.

## Stòran

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
