# Geilleagar aonaid tátail (Inference Unit Economics)

Bunaíonn geilleagar aonaid tátail praghas gnéithe AI ar a gcomhthomhaltas imcorrach ríomhaireachta: **costas in aghaidh an chomhartha**, arna rolladh suas go costas in aghaidh an idirbhirt, in aghaidh an úsáideora, in aghaidh eipeasóid chliniciúil. An dinimic shainiúil: tá praghsanna LLM tar éis titim thart ar **ord méide gach 1–2 bhliain** ag cumas seasta — ráta dífhoirgneamh gan fasach i gcostáil na teicneolaíochta sláinte.

## Cén fáth a bhfuil tábhacht leis

Leanann dhá thoradh as titim an phraghais. Go tráchtála, d’fhéadfadh gné AI atá imeallach inniu a bheith an-bhrabúsach faoi cheann 18 mí — agus déanfar iomaitheoir a bhfuil a phraghsáil bunaithe ar chostais an lae inniu a bhrú faoi bhun. I gcás meastóireachta eacnamaíche, déanann aon tsamhail costéifeachtúlachta do sheirbhís chliniciúil AI-chumasaithe a reonn praghsanna tátail 2024 **ró-mheastachán ábhartha ar an gcostas leanúnach** — teastaíonn cásanna laghdaithe praghais ón anailís, mar a láimhseálann samhlacha drugaí éag paitinne agus iontráil ghinearálta. (Pointí tagartha ón taighde: comharthaí aschuir ar an teorainn ~$15–75/M i lár 2026, samhlacha meánchéime ord méide níos saoire, cumas leibhéal GPT-4 síos ó ~$20/M in 2022 go ~$0.40/M; thomhais Epoch AI laghduithe 9×–900× sa bhliain ag brath ar chéim chumais.)

## An mhatamaitic

```
Cost per call     = input tokens × input rate + output tokens × output rate
Cost per unit     = Σ calls per unit of business output (per triage episode,
                    per drafted letter, per consultation summary)

Blended reality   = base call + retries + RAG context (input-heavy)
                    + evaluation/guardrail calls (often 20–50% overhead)

Price-decline scenario for multi-year models:
  cost_t = cost_0 × d^t, test d ∈ {0.3, 0.5, 0.7}/year in sensitivity analysis
```

## Sampla oibrithe

Úsáideann seirbhís achoimre scoir AI achoimre mheánach 12,000 comhartha ionchuir (comhthéacs taifid) + 1,200 aschur, móide pas fíoraithe (6,000 isteach / 300 amach). Ag $3/M isteach, $15/M amach:

```
Draft:   12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Verify:   6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Per summary ≈ $0.077 → per 100,000 summaries/year ≈ $7,700

Against ~20 clinician-minutes saved per summary (≈ £25), inference is
0.25% of the value created — the economics are dominated by everything
EXCEPT the tokens: integration, evaluation, governance, adoption.
```

Is é an chonclúid sin — is annamh a bhíonn costas tátail ina bhac ceangailteach, ag praghsanna reatha, do thascanna cliniciúla ardluacha — an toradh is fiú a thabhairt isteach i gcruinnithe praghsála.

## An nasc le hinnealtóireacht bogearraí

Seo [geilleagar aonaid scamall](../eacnamaíocht-aonad-scamall/) speisialaithe don AI, le trí nóta cleachtais: **méadaigh in aghaidh na haonaid ghnó**, ní in aghaidh glaoigh API, ionas go bhfreastalóidh an uimhir go díreach ar shamhlacha [ICER](../cóimheas-incriminteach-costéifeachtúlachta/)/[tionchar buiséid](../anailís-tionchair-buiséid/); **breathnaigh ar an neamhshiméadracht ionchuir/aschuir** (de ghnáth ~4× praghas an ionchuir an t-aschur; tá ailtireachtaí RAG trom ar ionchur — is roghanna praghsála iad roghanna ailtireachta); agus **seol de réir leibhéal tascanna** — comhoiriúnú cumais samhla le deacracht an taisc (samhlacha saora le haghaidh aicmithe, samhlacha ar an teorainn le haghaidh sintéise) gearrann sé costas measctha 5–10× go rialta ag cáilíocht chomhionann, leagan bogearraí d’úsáid an idirghabhála éifeachtaigh is saoire ([íoslaghdú costais](../anailís-íoslaghdaithe-costais/), coibhéis fianaithe).

## Gaistí

- **Samhlacha il-bhliana ar phraghas reoite** — ró-mheastachán costais; ach freisin **samhlacha ioncaim a thugann dífhoirgneamh dá ndeoin** — ní conradh é cogadh praghsanna; déan cásanna den dá cheann.
- **Forchostais mheastóireachta a neamhaird**: is comharthaí fíora iad cosaintí, breithiúna agus athiarrachtaí, go minic an chuid is mó i suíomhanna rialáilte.
- **Gearr-radharc in aghaidh an chomhartha**: tá costais ag bac moille, teorainneacha ráta agus srianta fuinneoige comhthéacs nach nglacann aon phraghas comhartha leo.

## Foinsí

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
