# Analys Minimya Kost (CMA)

CMA a geskomparya kostow yn unnik, hag a dhewis an dewis kosa le — *marnas* pan veu sewyansow an dewisyow diskwedhys bos kehaval.

## Perag yth yw posek

CMA yw an analys an moyha es hag an moyha gamdhevnydhys. An klaym kehavalder a wra an ober oll: mar na dhiffer sewyansow yn gwir (biosimilar erbynn y orisyn; dew provyer a'n keth servis ow tewlel an keth spesifikasyon), kost yw an unn govyn ha CMA yw ewn. An ewnder a vyw yn *previa* kehavalder kensa — yn kemmyn dre studhyans non-inferiority gans margin rag-dyskrifys — hag hedna yw an step a skippya prenoryon.

## An Matematik

```
Skoodhys Efekt_A ≈ Efekt_B (a-bervedh margin rag-dyskrifys δ):
Dewisewgh min(Kost_A, Kost_B)

Kostow musurys dhort an keth perspektiv, dres an keth horizon,
gans kostow chanj/treuswerth.
```

Mar na ylla kehavalder bos skoodhys, CMA yw dhyvalid — devnydhewgh [CEA](../analys-kost-effeythusnans/)/[CUA](../analys-kost-talvos/) yn le.

## Ensampel gwrys

Trest a dhewis ynter dew blatform kussulyans gwydhyow. Previans parallel a 3 mis a dhiskwedh ratyow kowlwrians 94.1% erbynn 93.8%, plesyans klav 4.4 erbynn 4.4 — diffransow a-bervedh δ rag-ervirys a 2 poynt dyskyrans. Sewyansow: kehaval. Kostow dres 3 bledhen:

```
                     Platform A     Platform B
Lisensow             £360,000       £210,000
Integrans            £80,000        £150,000
Dyski/skoodhyans     £60,000        £90,000
Oll                  £500,000       £450,000
```

Platform B a wynn dre £50,000 — *ha'y gost integrans uhella*. Heb an previans, an klaym kehavalder a dhepynsa war lyvrow gwerther, ha diffrans 1-poynt yn ratyo kowlwrians (≈ mylyow kussulyansow fyllys/bledhen) a dhiskwethya £50,000.

## Kolm gans ynjynnyans medhelweyth

CMA yw an furv ffurfyek a brenas kenwerth: dew provyer CI a'n keth SLOs, dew stoer objekt gans keth spesifikasyon durabilita. An dyskas ekonomek yeghes yw an *ordyr gwrians*: kensa skoodhewgh kehavalder (benchmarkya erbynn dha lyvrow, previa erbynn dha SLOs, gans margin ervirys a-varr), nessa keskomparyewgh kostow kowl gans treuswerth. "Yns kehaval ogas, B yw es" heb an kensa step yw fatell a bren kowethyansow an ark 10% es ha 40% gwettha. Teythi: pan dheves gwerther a bris, gwrewgh dhodho ervira kehavalder — yw kolmys y'n tu aral ynwedh.

## Fowtys Kemmyn

- **Kehavalder tybys** — an pegh dyssynyek; absens skoodhyans a dhiffrans nyns yw skoodhyans a gehavalder (previansow dygalloes a "dhiskwedh" kehavalder rag nagonan).
- **Dyberth kostow chanj** — treuswerth, daskyska ha oberya parallel a dhegh dhe'n tu kost.
- **Kehavalder war an sewyansow fowtys**: kehaval war an metrik musurys, dyffrans war unn a dhegh (kavadowder, latensi lost, ekstrakt data).

## Fontynnow

- Gerlyver York Health Economics Consortium: analys minimya kost. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
