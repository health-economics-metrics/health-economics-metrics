# Cynhyrchiant Datblygwyr AI

Metrigau ar gyfer yr hyn y mae cymorth codio AI yn ei wneud i allbwn peirianneg mewn gwirionedd: cyfraddau derbyn awgrymiadau, cyflymiadau o astudiaethau rheoledig, trwughput ceisiadau tynnu (PR), a chadw cod. Mae'r sail dystiolaeth yn wirioneddol wrthgyferbyniol — sy'n ei gwneud yn astudiaeth achos berffaith o'r gwahaniaeth rhwng effeithiolrwydd damcaniaethol ac effeithiolrwydd ymarferol y cafodd economeg iechyd ei hadeiladu i'w drin.

## Pam mae hyn yn bwysig

Mae'r ddwy astudiaeth reoledig fwyaf dyfynedig yn pwyntio i gyfeiriadau dirgroes:

- **Peng et al. 2023 (RCT GitHub Copilot)**: cwblhaodd datblygwyr dasg gweinydd HTTP maes gwyrdd **55.8% yn gynt** gyda Copilot (1a11m yn erbyn 2a41m, n=95).
- **RCT METR 2025**: roedd datblygwyr cod agored profiadol yn gweithio ar *eu storfeydd cod aeddfed eu hunain* **19% yn arafach** gyda thŵls AI o ddechrau 2025 (16 datblygwr, 246 tasg) — tra'n *credu* eu bod 20% yn gynt.

Mae'r ddwy'n astudiaethau da. Y gwrthddywediad yw'r canfyddiad: nid yw effeithiolrwydd damcaniaethol tasg maes gwyrdd yn trosglwyddo i effeithiolrwydd ymarferol cod aeddfed, ac ni all fudd *canfyddedig* gymryd lle budd wedi'i fesur. Mae gan feddygaeth enwau ar gyfer y ddau ffenomen (treialon esboniadol yn erbyn treialon pragmatig; problem y plasebo) a pheirianwaith ar gyfer eu trin.

## Y Fathemateg

```
Cyfradd dderbyn  = awgrymiadau a dderbyniwyd / awgrymiadau a ddangoswyd
                   (telemetreg GitHub ~30% ar gyfartaledd; yn amrywio: SQL 45%, Python 35%, JS 28%)
Cyfradd gadw     = cod AI sy'n goroesi hyd at uno / cod AI a dderbyniwyd (~88% wedi'i adrodd)
Cyflymiad        = (t_rheolaeth − t_AI) / t_rheolaeth  (o gymhariaeth reoledig YN UNIG)
Newid trwughput  = Δ PRs wedi'u huno/datblygwr/wythnos (data maes GitHub/Accenture: +8.7%)

Model gwerth    = datblygwyr × amser a arbedwyd × cyfradd lwythog × ffactor defnydd
                  — mae angen mesuriad lleol ar bob term; gweler y tornado yn
                  sensitivity-analysis.md, lle mae amser-a-arbedwyd yn dominyddu'r holl
                  baramedrau eraill gyda'i gilydd
```

## Enghraifft Waith

Mae sefydliad o 500 o ddatblygwyr yn treialu cynorthwyydd gyda rheolaeth briodol (timau wedi'u paru, 3 mis, metrigau wedi'u cofrestru ymlaen llaw):

```
Canlyniad y treial: amser cylch PR −18%; PRs wedi'u huno +6%; CFR heb newid;
                    amser a arbedwyd yn ôl hunanadroddiad 45 munud/diwrnod; lefel tasg wedi'i fesur ≈ 15 munud/diwrnod

Prisiwch y ffigwr WEDI'I FESUR: 500 × 0.25a × 220d × £60 × 0.6 ffactor defnydd
                          ≈ £990,000/blwyddyn o gapasiti (nid yn rhyddhau arian parod)
Cost: 500 × £39/mis × 12 ≈ £234,000/blwyddyn
Cymhareb gapasiti net ≈ 4:1 — modd ei ariannu, ar draean yr hawliad hunanadroddiedig.
```

Mae'r bwlch 3× rhwng y canfyddedig a'r mesuredig yn ganfyddiad METR ar waith yn y byd go iawn; byddai cyllidebu ar sail hunanadroddiad wedi treblu'r llinell fudd.

## Cysylltiad Peirianneg Feddalwedd

Yr hyn y mae economeg iechyd yn ei fewnforio i unrhyw un sy'n gwerthuso offer AI: cynhaliwch **dreialon pragmatig** (eich cod eich hun, eich peirianwyr eich hun, tocynnau go iawn — nid tasgau arddangos gwerthwr); trinwch **gyfradd dderbyn fel dirprwy, nid canlyniad** (dyma [PPV](../clinical-ai-evaluation/) awgrymiadau o safbwynt y datblygwr — mae derbyn uchel gyda chadw isel yn orddiagnosis); paru pob ennill trwughput â **gwiriad sefydlogrwydd** (DORA 2025: mae AI yn codi trwughput, yn niweidio sefydlogrwydd — mae angen dadansoddiad budd-net ar ymyriad sydd ag effeithiau sgil, yn ôl [metrigau DORA](../dora-metrics/)); a dosbarthu'r budd yn onest fel capasiti ([rhyddhau arian parod yn erbyn peidio â rhyddhau arian parod](../cash-releasing-vs-non-cash-releasing/)).

## Peryglon

- **Trawsblannu astudiaethau gwerthwr**: ffigurau RCT maes gwyrdd yn cael eu cymhwyso i waith cod cynhenid — yr union wall a ddatgelodd astudiaeth METR.
- **Hunanadroddiad fel mesuriad**: y bwlch 20-pwynt canran mewn canfyddiad yw'r rhagfarn fwyaf hysbys yn y llenyddiaeth hon.
- **Chwyddiant gweithgarwch**: mae mwy o PRs a mwy o god yn Weithgarwch, nid yn ganlyniadau ([SPACE](../space-and-devex/)); parwch ag ailwaith a CFR.
- **Anwybyddu'r gromlin ddysgu**: mae mesuriadau wythnos-2 yn dal effeithiau newydd-deb i'r naill gyfeiriad neu'r llall; mesurwch mewn cyflwr sefydlog ([gorwel amser](../time-horizon/)).

## Ffynonellau

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- Adroddiad DORA 2025. <https://dora.dev/dora-report-2025/>
