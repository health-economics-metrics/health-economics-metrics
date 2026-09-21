# Economeg Uned Casgliad

Mae economeg uned casgliad yn prisio nodweddion AI yn ôl eu cyfrifiadureg ymylol: **cost fesul tocyn**, wedi'i chrynhoi i gost fesul trafodiad, fesul defnyddiwr, fesul pennod glinigol. Y dynameg ddiffiniol: mae prisiau LLM wedi gostwng oddeutu **gradd maint bob 1–2 flynedd** ar allu cyson — cyfradd datchwyddiant heb gynsail mewn costio technoleg iechyd.

## Pam mae hyn yn bwysig

Mae dau ganlyniad yn dilyn cwymp y prisiau. Yn fasnachol, gall nodwedd AI sy'n ymylol heddiw fod yn broffidiol yn ddibwys mewn 18 mis — a bydd cystadleuydd sy'n prisio yn ôl costau heddiw yn cael ei danbrisio. O safbwynt gwerthuso economaidd, mae unrhyw fodel cost-effeithiolrwydd ar gyfer gwasanaeth clinigol sy'n galluogi AI ac sy'n rhewi prisiau casgliad 2024 yn **gorddatgan y gost barhaus yn sylweddol** — mae angen senarios gostyngiad pris ar y dadansoddiad, yn yr un modd ag y mae modelau cyffuriau'n trin darfodiad patent a mynediad generig. (Pwyntiau cyfeirio o'r ymchwil: tocynnau allbwn blaengar ~$15–75/M ganol 2026, modelau haen ganol gradd maint yn rhatach, gallu ar lefel GPT-4 wedi gostwng o ~$20/M yn 2022 i ~$0.40/M; mesurodd Epoch AI ostyngiadau 9×–900×/blwyddyn yn dibynnu ar y garreg filltir allu.)

## Y Fathemateg

```
Cost fesul galwad  = tocynnau mewnbwn × cyfradd mewnbwn + tocynnau allbwn × cyfradd allbwn
Cost fesul uned    = Σ galwadau fesul uned o allbwn busnes (fesul pennod driais,
                    fesul llythyr drafft, fesul crynodeb ymgynghoriad)

Realiti cymysg     = galwad sylfaenol + ailgeisiadau + cyd-destun RAG (trwm-fewnbwn)
                    + galwadau gwerthuso/gwarchodfur (gorbenion 20–50% yn aml)

Senario gostyngiad pris ar gyfer modelau aml-flwyddyn:
  cost_t = cost_0 × d^t, profwch d ∈ {0.3, 0.5, 0.7}/blwyddyn mewn dadansoddiad sensitifrwydd
```

## Enghraifft Waith

Gwasanaeth crynodeb rhyddhau AI: mae crynodeb cyfartalog yn defnyddio 12,000 tocyn mewnbwn (cyd-destun cofnod) + 1,200 allbwn, ynghyd â phas gwirio (6,000 i mewn / 300 allan). Ar $3/M i mewn, $15/M allan:

```
Drafft:  12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Gwirio:   6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Fesul crynodeb ≈ $0.077 → fesul 100,000 o grynodebau/blwyddyn ≈ $7,700

O'i gymharu ag ~20 munud-clinigwr a arbedwyd fesul crynodeb (≈ £25), mae casgliad
yn 0.25% o'r gwerth a grëwyd — mae'r economeg yn cael ei dominyddu gan bopeth
AR WAHÂN i'r tocynnau: integreiddio, gwerthuso, llywodraethu, mabwysiadu.
```

Mae'r casgliad hwnnw — anaml y mae cost casgliad yn gyfyngiad rhwymol, ar brisiau cyfredol, ar gyfer tasgau clinigol gwerth uchel — yn ganfyddiad ynddo'i hun sy'n werth ei gario i gyfarfodydd prisio.

## Cysylltiad Peirianneg Feddalwedd

Dyma [economeg uned cwmwl](../cloud-unit-economics/) wedi'i arbenigo ar gyfer AI, gyda thair nodyn ymarfer: **mesurwch fesul uned busnes**, nid fesul galwad API, fel bod y rhif yn plygio'n uniongyrchol i fodelau [ICER](../incremental-cost-effectiveness-ratio/)/[effaith cyllideb](../budget-impact-analysis/); **gwyliwch anghymesuredd mewnbwn/allbwn** (mae allbwn fel arfer ~4× pris mewnbwn; mae pensaernïaethau RAG yn fewnbwn-drwm — mae dewisiadau pensaernïol yn ddewisiadau prisio); a **llwybrwch yn ôl haen tasg** — mae paru gallu model â chymhlethdod tasg (modelau rhad ar gyfer dosbarthu, rhai blaengar ar gyfer synthesis) yn arferol yn torri cost gymysg 5–10× ar yr un ansawdd, sef fersiwn meddalwedd o ddefnyddio'r ymyriad effeithiol rhataf ([lleihau cost](../cost-minimization-analysis/), gyda chywerthedd wedi'i brofi).

## Peryglon

- **Modelau aml-flwyddyn â phris wedi'i rewi** — yn gorddatgan cost; ond hefyd **modelau refeniw sy'n tybio datchwyddiant** — nid yw rhyfel prisiau'n gontract; senariwch y ddau.
- **Anwybyddu gorbenion gwerthuso**: mae gwarchodfuriau, beirniaid, ac ailgeisiadau'n docynnau go iawn, yn aml y mwyafrif mewn lleoliadau rheoleiddiedig.
- **Myopia fesul tocyn**: mae oedi, cyfyngiadau cyfradd, a chyfyngiadau ffenestr cyd-destun yn cario costau nad yw unrhyw bris tocyn yn eu dal.

## Ffynonellau

- Epoch AI, tueddiadau pris casgliad LLM. <https://epoch.ai/data-insights/llm-inference-price-trends>
- Cymariaethau prisio LLM. <https://www.silicondata.com/blog/llm-cost-per-token>
