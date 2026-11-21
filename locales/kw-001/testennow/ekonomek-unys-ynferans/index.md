# Ekonomek Unys Ynferans

Ekonomek unys ynferans a bris nodhow AI dre aga hompoutya marginal: **kost rag token**, kuntellys dhe gost rag treuswerth, rag devnydhyer, rag kevrenn klinikel. An dhynamik a dhefsa: prisow LLM re gollas ogas **deg-plyg pub 1–2 bledhen** orth kanasow fast — reyt tiskynna heb kynsegyans yn kostya teknologi yeghes.

## Perag yth yw posek

Dew sewyans a dheu dhort kolaps an pris. Yn kenwerthek, nodh AI marginal hedhyw a yll bos hweg-wynnak yn 18 mis — ha kesstrifyor prisys war kostow hedhyw a vydh dhiwas. Rag gwerthjyans ekonomek, kenyver patrom kost-effeythusnans rag servis klinikel AI-gweythresys a rew prisow ynferans 2024 a **orvesur yn materyal kost pesyek** — an analys a res senarionow tiskynna pris kepar dell wra patromow drog dhe drettya diwedh patent ha entra generik. (Poyntys skoodhyer a'n hwilans: tokens diwedh frontyer ~$15–75/M yn kres 2026, modelys nivel-kres dyg dhe skoodhys; kanasow nivel GPT-4 dhort ~$20/M yn 2022 dhe ~$0.40/M; Epoch AI a vusuras tiskynnow 9×–900×/bledhen herwydh an poynt-kanasow.)

## An Matematik

```
Kost rag galwans = tokens ynworth × reyt ynworth + tokens ahwarth × reyt ahwarth
Kost rag unnys   = Σ galwansow rag unnys a worrow kenwerthek (rag kevrenn triage,
                   rag lyther dyllys, rag berrans kussulyans)

Gwiryonedh kemmyskys = galwans-bos + kevrennow-arta + kontekst RAG (ynworth-tew)
                       + galwansow gwerthjyans/gwarthyans (menowgh 20–50% overhead)

Senario tiskynna pris rag patromow aml-bledhen:
  kost_t = kost_0 × d^t, previewgh d ∈ {0.3, 0.5, 0.7}/bledhen yn analys ansylder
```

## Ensampel gwrys

Servis berr-dilyvrans AI: berr kres a devnydh 12,000 token ynworth (kontekst rol) + 1,200 ahwarth, ha pas gwiryans (6,000 ynworth / 300 ahwarth). Orth $3/M ynworth, $15/M ahwarth:

```
Drafta:   12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Gwiryans:  6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Rag berr ≈ $0.077 → rag 100,000 berr/bledhen ≈ $7,700

Erbynn ~20 mynysenn klinikyer sawys rag berr (≈ £25), ynferans yw
0.25% a'n talvos gwrys — an ekonomek yw dominys gans pub tra
HEPKOR an tokens: integrans, gwerthjyans, governans, degemeryans.
```

An kowlwrans na — kost ynferans yw skant an strishyans-kowlwrans, orth prisow lemmyn, rag tasgow klinikel talvos-uhel — yw yn y honan an kavans a dal bos dres-portys dhe gussulyow prisya.

## Kolm gans ynjynnyans medhelweyth

Hemma yw [ekonomek unys skeul](../ekonomek-unys-skeul/) arbennikys rag AI, gans tri nodyn praktis: **musurewgh rag unnys kenwerthek**, na ny yw rag galwans API, may fydh an niver plugyes dhe vodelys [ICER](../ratyo-kost-effeythusnans-ynkressys/)/[efekt budjet](../analys-efekt-budjet/) yn dhirek; **golewgh an anhevelebieth ynworth/ahwarth** (ahwarth peub-prys ~4× pris ynworth; arkitekturow RAG yw ynworth-tew — dewisyansow arkitektur yw dewisyansow prisya); ha **routyewgh dre stag tasg** — metya kanasow model gans kaletter tasg (modelys hweg rag klassya, frontyer rag synthesis) a ledha menowgh kost kemmyskys 5–10× orth an keth ansawor, an versyon medhelweyth a devnydhya an ynkleth effeythus kosa ([minimya kost](../analys-minimya-kost/), kehavalder skoodhys).

## Fowtys Kemmyn

- **Patromow aml-bledhen pris-kloesys** — a orvesur kost; mes ynwedh **patromow mona tiskynna-tybys** — bresel prisow nyns yw kontrakt; senariowgh an dew.
- **Ankevi overhead gwerthjyans**: gwarthyansow, brusyoryon ha dasgeryow yw tokens gwir, menowgh an moyha yn tyller rewlys.
- **Myopia rag token**: latensi, harthow reyt, ha lettyow fenestri-kontekst a'n jeves kostow na gaes prisow token.

## Fontynnow

- Epoch AI, tuedhow pris ynferans LLM. <https://epoch.ai/data-insights/llm-inference-price-trends>
- Keskomparyansow prisya LLM. <https://www.silicondata.com/blog/llm-cost-per-token>
