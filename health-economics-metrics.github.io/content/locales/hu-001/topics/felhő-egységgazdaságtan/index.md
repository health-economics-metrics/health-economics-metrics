# Felhő-egységgazdaságtan (FinOps)

A felhő-egységgazdaságtan a nyers felhőkiadást **a kimenet egységére jutó költséggé** alakítja — ügyfelenként, tranzakciónként, megoldott esetenként, tokenenként. Ez az a FinOps-képesség, amely az „AWS-számlánk 400 ezer £/hónap" állításból „egy beteg kiszolgálása 0,83 £-ba kerül" állítást csinál.

## Miért fontos

Az összkiadási számok nem tudják megválaszolni a lényeges kérdéseket: hatékonyabb vagy kevésbé hatékony lesz a termék? A növekedés javítja vagy rombolja a árrést? Mit kell felszámítanunk? Az egységköltségek mindhárom kérdésre válaszolnak. A digitális egészségügynél különösen a „megoldott esetenkénti költség" *maga* egy egészségügyi szolgáltatási egységköltség — közvetlenül összehasonlítható azokkal a [National Cost Collection](../országos-tarifa-és-egységköltségek/) számokkal, amelyeket egy megrendelő minden más szolgáltatásnál használ, ami természetes nyelvvé teszi a digitális útvonalak hagyományosakkal szembeni árazásához.

## A matematika

```
Unit cost = total allocated cost (incl. shared/platform costs) / units delivered

Two families:
  resource-efficiency units: cost/GB stored, cost/vCPU-hour, cost/token,
                             cost/build-minute
  business units:            cost/customer, cost/transaction, cost/consultation,
                             cost/case-resolved

Marginal vs average discipline applies (marginal-vs-average-cost.md):
committed/reserved spend makes marginal unit cost ≈ 0 until the next
commitment step — price expansion decisions at marginal, efficiency
trends at average.
```

## Kidolgozott példa

Egy digitális triázsszolgáltatás: felhőkiadás 62 000 £/hó (számítás 30 ezer £, adat 18 ezer £, közös platformfelosztás 14 ezer £), havi 380 000 triázs-epizódot kezelve:

```
Average cost per episode = 62,000 / 380,000 ≈ £0.163

Commissioner comparison: telephone triage ≈ £8–12/call, GP consultation ≈ £42
→ digital episode runs at ~2% of the cheapest human alternative — the
channel-shift economics of gds-service-metrics.md, from the cost side.

Trend check: last year £0.21/episode at 240k episodes → improving scale
economics (fixed platform costs amortizing), worth a headline in the QBR.
```

## Kapcsolat a szoftverfejlesztéssel

Az egységgazdaságtan az, ahol a mérnöki döntések pénzügyileg olvashatóvá válnak: az az architektúra, amely felezi az epizódonkénti költséget, árazási előny; amelyik szuperlineárisan skálázódik, időzített bomba, amely csak ebben a mutatóban látható. Az egészségügyi költségszámításból átvihető gyakorlatok: **tedd közzé a felosztási szabályokat** (a közös költségek torzították az egységszámokat, amíg a PLICS nem szabványosította a betegszintű költségszámítást — a platformköltség-felosztásodnak ugyanilyen szigor kell); **olyan egységeket válassz, amelyekben a vevő gondolkodik** (a megrendelők epizódokat vesznek, nem vCPU-kat); és add az egységköltségeket minden [ICER](../inkrementális-költséghatékonysági-mutató/)- és [költségvetési hatás](../költségvetési-hatáselemzés/)-modellbe mint a mérvadó költségnevezőt. MI-funkcióknál az egység a token — lásd [inferencia-egységgazdaságtan](../inferencia-egységgazdaságtan/).

## Buktatók

- **A közös költségek figyelmen kívül hagyása**: a platform/biztonság/ügyelet-felosztásokat kizáró egységköltségek 30–50%-kal alábecsülnek, és az audit alatt összeomlanak.
- **Hiúsági nevezők**: a „költség API-hívásonként" hízeleg; a „költség befejezett betegepizódonként" tájékoztat.
- **Határdöntések átlagköltség-árazása**: ha a csapatoknak átlagos egységköltséget terhelnek olyan használatért, amely a határon ingyenes, az pazarlás-elkerülési színházat hajt (lásd [országos tarifa](../országos-tarifa-és-egységköltségek/) az ösztönzési hiba NHS-változatáért).

## Források

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
