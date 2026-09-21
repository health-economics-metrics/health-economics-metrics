# Pwyntiau Terfyn a Biofarcwyr Digidol

Mae biofarcwr digidol yn fesur ffisiolegol neu ymddygiadol gwrthrychol a gesglir trwy synwyryddion (cyflymder cerdded o ffôn, cwsg o ddyfais wisgadwy, cryndod o gyflymiadaeth). Mae pwynt terfyn digidol yn fesur o'r fath wedi'i ddyrchafu'n **ganlyniad treial** — a ddefnyddir i ddangos effaith triniaeth. Mae'r dyrchafiad o "ddata y mae'r ddyfais yn ei allyrru" i "dystiolaeth y mae rheoleiddiwr yn ei derbyn" yn rhedeg trwy ysgol ddilysu ddiffiniedig.

## Pam mae'n bwysig

Mae pwyntiau terfyn treial traddodiadol yn achlysurol (ymweliadau clinig bob 3 mis) ac yn ddrud; mae pwyntiau terfyn digidol yn barhaus, yn ecolegol (bywyd go iawn, nid perfformiad clinig), ac yn rhad fesul arsylwad — gallant grebachu treialon, canfod effeithiau'n gynharach, a galluogi astudiaethau datganoledig. Y broblem yw dilysu: mae'r fframwaith derbyniedig (wedi'i alinio â'r FDA, tri philer) yn gofyn am **wiriad/ddilysiad dadansoddol** (mae'r synhwyrydd yn mesur y maint ffisegol yn gywir), **dilysiad clinigol** (mae'r mesur yn adlewyrchu'r cyflwr clinigol y mae'n honni ei fod), a **agwedd ystyrlon o iechyd** wedi'i dangos (mae cleifion yn poeni am yr hyn y mae'n ei gasglu). Mae pwynt terfyn heb y tri yn delemetreg, nid tystiolaeth.

## Y fathemateg

```
Dilysiad dadansoddol: cytundeb â chyfeirnod (gweler wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Dilysiad clinigol:    cydberthynas/gwahaniaethu yn erbyn angorion clinigol
                       (dilysrwydd grwpiau hysbys, ymatebolrwydd i newid)
Economeg pwynt terfyn:
  digwyddiadau a ganfyddir fesul blwyddyn-claf (parhaus) yn erbyn samplo fesul ymweliad
  pŵer treial: mae mesurau parhaus yn torri maint sampl pan fo amrywiant
  rhwng-ymweliadau'n dominyddu — N ∝ σ²/Δ², a σ² yn gostwng gyda samplo dwys
```

## Enghraifft wedi'i datrys

Mae treial Parkinson yn ystyried cyflymder cerdded o synhwyrydd arddwrn o'i gymharu â sgoriau a raddiwyd gan glinig bob chwarter:

```
Pwynt terfyn clinig:  4 mesuriad/claf/flwyddyn, sŵn dydd-i-ddydd uchel
Pwynt terfyn digidol: ~200 o fesuriadau goddefol/claf/flwyddyn

Mae amrywiant yr amcangyfrif newid blynyddol yn gostwng ~5× gyda samplo dwys →
mae maint yr effaith a ganfyddir ar bŵer sefydlog yn gwella ~√5 ≈ 2.2×, neu
yn gyfatebol mae maint y sampl yn crebachu ~40–60% ar gyfer yr un hypothesis.
Ar £25,000 fesul claf a gofrestrwyd, mae torri 200 o gleifion ≈ £5M wedi'i arbed
fesul treial — yr achos masnachol dros y buddsoddiad dilysu
(sef efallai £1–2M ei hun) ar draws piblinell noddwr.
```

## Cysylltiad â pheirianneg meddalwedd

Disgyblaeth peirianneg data mewn dillad clinigol yw pwyntiau terfyn digidol: **tarddiad a fersiynu** (mae diweddariadau algorithm ganol-astudiaeth yn bygwth cymharoldeb — problem [PCCP](../ai-regulatory-evaluation/) ar ffurf treial; cloi fersiwn a phont-ddilysu); **cynllunio data coll** (mae bylchau amser-gwisgo'n wybodus, nid ar hap — gweler [dilysiad dyfeisiau gwisgadwy](../wearable-validation/); mae dewisiadau amcangyfrif yn honiadau gwyddonol); a **phenderfyniadau hollti ymyl/cwmwl** sy'n newid pa signal crai y gellir hyd yn oed ei adfer yn ddiweddarach. Mae timau sy'n trin y biblinell fesur fel meddalwedd reoledig o'r diwrnod cyntaf — wedi'i phrofi, wedi'i fersiynu, wedi'i dogfennu — yn prynu hygrededd eu pwyntiau terfyn yn rhad; ôl-osod dilysiad ar biblinell a symudodd yn gyflym yw lle mae rhaglenni pwyntiau terfyn digidol yn marw.

## Peryglon

- **Cydberthynas-â-chlinig fel dilysiad llawn**: mae cyfateb i fesur clinig diffygiol yn profi etifeddiaeth, nid gwirionedd; dilyswch yn erbyn yr agwedd ystyrlon o iechyd.
- **Risg reoleiddiol pwynt terfyn newydd**: gall pwynt terfyn digynsail fod yn well yn wyddonol ac eto suddo cyflwyniad — ymgysylltwch â rheoleiddwyr yn gynnar (mae rhaglenni cymhwyso'n bodoli).
- **Anghydweddiad synhwyrydd-poblogaeth**: dilysiad mewn arddyrnau ifanc iach, defnydd mewn cleifion oedrannus â chryndod a gwahaniaethau pigmentiad na welodd y PPG erioed.
- **Llithriad nodwedd**: mae ailhyfforddi'r algorithm cerdded ar ddata newydd yn ailddiffinio'r pwynt terfyn yn ddistaw ganol astudiaeth.

## Ffynonellau

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), adnoddau pwyntiau terfyn digidol. <https://dimesociety.org/>
