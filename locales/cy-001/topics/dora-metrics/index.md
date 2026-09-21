# Metrigau DORA

Mae metrigau DORA (DevOps Research and Assessment) yn bedwar mesur o berfformiad cyflenwi meddalwedd — amlder defnyddio, amser arwain ar gyfer newidiadau, cyfradd methiant newid, ac amser adfer ar ôl defnyddio aflwyddiannus — ynghyd â dibynadwyedd fel pumed. Dyma feincnodau cyflenwi mwyaf dilys y maes, ac mae gan bob un ddarlleniad economeg iechyd uniongyrchol.

## Pam mae'n bwysig

Mae degawd o ymchwil DORA yn cysylltu'r metrigau hyn â pherfformiad sefydliadol. Clystyrau adroddiad 2024: mae timau **elitaidd** yn defnyddio ar alw (sawl gwaith y dydd), yn cymryd llai na diwrnod o gyflwyno i gynhyrchu, yn methu ~5% o newidiadau, ac yn adfer o fewn llai nag awr; mae perfformwyr **isel** yn defnyddio'n fisol neu'n llai aml, yn cymryd misoedd, yn methu ~40% o newidiadau, ac yn adfer mewn wythnosau. I system iechyd, nid rhifau balchder TG yw'r rhain: maent yn pennu pa mor gyflym y mae gwerth clinigol yn cyrraedd cleifion a faint o risg y mae pob newid yn ei gario.

## Y fathemateg

```
Amlder defnyddio                 = defnyddiadau cynhyrchu / amser
Amser arwain ar gyfer newidiadau = t(defnyddio) − t(cyflwyno), canolrif
Cyfradd methiant newid            = newidiadau a fethodd / cyfanswm newidiadau × 100
Amser adfer (MTTR)                = t(adferwyd) − t(methiant), canolrif
Dibynadwyedd                      = cyflawniad SLO (argaeledd, oedi, cywirdeb)
```

Cyfieithiadau economeg iechyd:

```
Amser arwain     → cost-of-delay.md: wythnosau yn y biblinell × CoD (£ neu QALYs/wythnos)
Cyfradd methiant → cyfradd digwyddiad andwyol newid meddalwedd: CFR × cost fesul digwyddiad
Amser adfer      → niwed amser segur: MTTR × (gweithgarwch clinigol a gollwyd + amlygiad diogelwch)/awr
Dibynadwyedd     → disgownt budd: mae gwasanaeth ag argaeledd 99% yn cyflawni ≈ 0.99
                    o'i fudd modelu — cyfatebiaeth feddalwedd i ymlyniad
```

## Enghraifft wedi'i datrys

Tîm meddalwedd llif cleifion ymddiriedolaeth, cyn/ar ôl buddsoddiad peirianneg cyflenwi:

```
                    Cyn         Ar ôl
Defnyddiadau        misol       wythnosol
Amser arwain        6 wythnos   4 diwrnod
CFR                 25%         8%
MTTR                2 ddiwrnod  2 awr
```

Mae'r tîm yn cyflwyno ~30 o welliannau/flwyddyn gyda gwerth cyfartalog fesul gwelliant o £4,000/wythnos ([CoD](../cost-of-delay/)). Mae toriad amser arwain o ~5.4 wythnos yn tynnu ffrwd budd pob gwelliant ymlaen: 30 × 5.4 × 4,000 ≈ **£648,000/flwyddyn** o werth wedi'i gyflwyno'n gynt. Gwelliant CFR: 30 × (0.25 − 0.08) = ~5 yn llai o newidiadau a fethodd/flwyddyn × cost digwyddiad cyfartalog o £15,000 (amser segur system glinigol, unioni) = **£76,500/flwyddyn**. Mae'r buddsoddiad cyflenwi'n cael ei brisio yn yr un arian â phob ymyriad clinigol.

## Cysylltiad â pheirianneg meddalwedd

Dyma ochr y feddalwedd ei hun — y cysylltiad sy'n werth ei nodi yw'r mapio gwrthdro: mae metrigau DORA'n fetrigau gweithredol yr ysbyty mewn dillad gwahanol. Amser arwain ↔ [atgyfeirio i driniaeth](../referral-to-treatment/); cyfradd methiant newid ↔ [cyfradd ailderbyn](../readmission-rate/) (gwaith a neidiodd yn ôl); MTTR ↔ ymateb brys; amlder defnyddio ↔ trwybwn clinig. Mae dulliau gwella'n trosglwyddo i'r ddau gyfeiriad am fod y ddau'n systemau ciwio o dan gyfyngiadau diogelwch. Nodwch hefyd ganfyddiad AI DORA 2025: mae mabwysiadu AI bellach yn cydberthyn â thrwybwn uwch ond sefydlogrwydd *gwaeth* — ymyriad ag effeithiolrwydd a sgîl-effeithiau, sy'n galw'n union am y dadansoddiad budd-net y mae'r ystorfa hon yn ei ddysgu (gweler [cynhyrchedd datblygwyr AI](../ai-developer-productivity/)).

## Peryglon

- **Gamio metrigau**: cyfrifon defnyddio wedi'u chwyddo gan ryddhadau di-weithred; CFR wedi'i ddadchwyddo trwy beidio â chyfrif atgyweiriadau brys fel methiannau. Diffiniwch ddigwyddiadau'n fanwl gywir, fel y mae HTA'n diffinio pwyntiau terfyn.
- **Tablau cynghrair traws-dîm**: mae clystyrau DORA yn cymharu arferion, nid timau â phroffiliau risg gwahanol; gall tîm systemau clinigol ar "uchel" fod yn optimal lle byddai "elitaidd" yn ddi-hid.
- **Optimeiddio un metrig**: cyflymder heb CFR/dibynadwyedd yw'r cyfnewid trwybwn-ansefydlogrwydd — adroddwch ar y pedwar bob amser gyda'i gilydd (maent yn [dabl cost-canlyniad](../cost-consequence-analysis/), nid sgôr).

## Ffynonellau

- Ymchwil ac adroddiadau DORA. <https://dora.dev/>
- Crynodeb meincnodau DORA 2024. <https://octopus.com/devops/metrics/dora-metrics/>
- Adroddiad Cyflwr Datblygu Meddalwedd â Chymorth AI, DORA 2025. <https://dora.dev/dora-report-2025/>
