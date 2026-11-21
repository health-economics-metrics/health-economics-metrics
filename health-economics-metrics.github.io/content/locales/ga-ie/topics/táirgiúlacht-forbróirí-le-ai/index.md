# Táirgiúlacht forbróirí le AI

Méadracha don ní a dhéanann cúnamh códaithe AI i ndáiríre d’aschur innealtóireachta: rátaí glactha moltaí, luasghéarú i staidéir rialaithe, tréchur PR, agus coinneáil cód. Tá an bhunús fianaise contrártha go fírinneach — rud a fhágann gur cás-staidéar foirfe é ar an idirdhealú idir éifeachtacht agus éifeachtúlacht ar tógadh an eacnamaíocht sláinte chun déileáil leis.

## Cén fáth a bhfuil tábhacht leis

Pointeálann an dá staidéar rialaithe is mó a luaitear i dtreonna os coinne a chéile:

- **Peng et al. 2023 (RCT GitHub Copilot)**: chríochnaigh forbróirí tasc freastalaí HTTP nua-thógtha **55.8% níos tapúla** le Copilot (1u11m vs 2u41m, n=95).
- **RCT METR 2025**: bhí forbróirí foinse oscailte a raibh taithí acu agus a d’oibrigh ar *a stórtha aibí féin* **19% níos moille** le huirlisí AI tús 2025 (16 fhorbróir, 246 tasc) — agus iad *ag creidiúint* go raibh siad 20% níos tapúla.

Is staidéir mhaithe iad beirt. Is é an contrárthacht an toradh: ní aistríonn éifeachtacht i dtasc nua-thógtha go héifeachtúlacht i mbunachar cód aibí, agus ní féidir le sochar *braite* teacht in ionad sochar tomhaiste. Tá ainmneacha ag an míochaine ar an dá fheiniméan (trialacha mínitheacha vs pragmatacha; fadhb an phlaicéabó) agus innealra chun déileáil leo.

## An mhatamaitic

```
Ráta glactha   = moltaí glactha / moltaí taispeánta
                 (telemeitreacht GitHub ~30% meán; athraíonn: SQL 45%, Python 35%, JS 28%)
Ráta coinneála = cód AI a mhaireann go cumasc / cód AI glactha (~88% tuairiscithe)
Luasghéarú     = (t_rialú − t_AI) / t_rialú  (ó chomparáid rialaithe AMHÁIN)
Delta tréchuir = Δ PRanna cumasctha/forbróir/seachtain (sonraí allamuigh GitHub/Accenture: +8.7%)

Samhail luacha = forbróirí × am sábháilte × ráta lódáilte × fachtóir úsáide
                 — teastaíonn tomhas áitiúil ar gach téarma; féach an tornado i
                 sensitivity-analysis.md, áit a sháraíonn am sábháilte
                 gach paraiméadar eile le chéile
```

## Sampla oibrithe

Déanann eagraíocht de 500 forbróir píolótú ar chúntóir le rialú ceart (foirne meaitseáilte, 3 mhí, méadracha réamhchláraithe):

```
Toradh an phíolóta: am timthrialla PR −18%; PRanna cumasctha +6%; CFR gan athrú;
              am sábháilte féintuairiscithe 45 nóim/lá; tomhaiste ar leibhéal tasc ≈ 15 nóim/lá

Luacháil an uimhir THOMHAISTE: 500 × 0.25u × 220l × £60 × 0.6 úsáid
                          ≈ £990,000/bliain cumas (neamh-scaoileadh airgid tirim)
Costas: 500 × £39/mí × 12 ≈ £234,000/bliain
Cóimheas cumais ghlain ≈ 4:1 — inmhaoinithe, ag aon trian den éileamh féintuairiscithe.
```

Is é an bhearna 3× idir an méid a braitheadh agus an méid a tomhaiseadh toradh METR ag oibriú sa saol fíor; dá mbuiséadófaí ar fhéintuairisciú, bheadh an líne sochair faoi thrí.

## An nasc le hinnealtóireacht bogearraí

Na hallmhairí ón eacnamaíocht sláinte do dhuine ar bith a bhfuil uirlisí AI á meas aige: reáigh **trialacha pragmatacha** (do bhunachar cód, d’innealtóirí, ticéid fhíor — ní tascanna taispeána díoltóra); caith le **ráta glactha mar sheachvótaí, ní mar thoradh** (is é [PPV](../meastóireacht-ai-cliniciúil/) na moltaí é ó thaobh an fhorbróra — is ródhiagnóis é glacadh ard le coinneáil íseal); péireáil gach buaicphointe tréchuir le **seiceáil cobhsaíochta** (DORA 2025: ardaíonn AI an tréchur, dochraíonn sé cobhsaíocht — teastaíonn anailís sochair ghlain d’idirghabháil le fo-iarmhairtí, de réir [méadracha DORA](../méadracha-dora/)); agus aicmigh an sochar go macánta mar chumas ([scaoileadh airgid tirim vs neamh-scaoileadh airgid tirim](../coigilteas-a-scaoileann-airgead-tirim-vs-coigilteas-nach-scaoileann/)).

## Gaistí

- **Trasphlandú staidéir díoltóra**: uimhreacha RCT nua-thógtha a chur i bhfeidhm ar obair bunachar cód oidhreachta — an botún díreach a nocht staidéar METR.
- **Féintuairisciú mar thomhas**: is í an bhearna braite 20 pointe chéatadáin an claonadh is mó atá ar eolas sa litríocht seo.
- **Boilsciú gníomhaíochta**: is Gníomhaíocht iad níos mó PRanna agus níos mó cód, ní torthaí ([SPACE](../space-agus-devex/)); péireáil le hathoibriú agus CFR.
- **An cúrsa foghlama a neamhaird**: gabhann tomhais seachtain a 2 éifeachtaí nuaíochta in aon treo; tomhais ag cobhsaíocht ([sprioc-am](../léaslíne-ama/)).

## Foinsí

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- Tuarascáil DORA 2025. <https://dora.dev/dora-report-2025/>
