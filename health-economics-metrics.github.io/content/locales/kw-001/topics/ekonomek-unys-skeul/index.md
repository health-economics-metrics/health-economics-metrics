# Ekonomek Unys Skeul (FinOps)

Ekonomek unys skeul a dreyl spena skeul krev dhe **gost rag unn a worrow** — rag kowsek, rag treuswerth, rag kas dhiswres, rag token. Yw an galloes FinOps a dreyl "agan bil AWS yw £400k/mis" dhe "servya unn klav a gost £0.83."

## Perag yth yw posek

Niverow spena kowl ny yll gorthyp an govynnow a vri: yw an produkt moy po le effeythus? A wra kressans gwellha po dystrowya an marja? Pyth a dal dhyn chargya? Kostow unys a worthyp an dri. Rag yeghes nombrek yn arbennik, "kost rag kas dhiswres" *yw* kost unys servis yeghes — kehaval yn kerth gans figuryow [Kuntell Kost Kenedhlek](../tariff-kenedhlek-ha-kostow-unys/) a ra kommyssyoner rag pub servis aral, hag yth yw hedna an tavas naturel rag pris-wrians fordhow nombrek erbynn tradisyonel.

## An Matematik

```
Kost unys = kost oll dyllys (gans kostow rynnys/platform) / unnys delivrys

Dew teylu:
  unnys effeythusnans kanasow: kost/GB gwithys, kost/vCPU-eur, kost/token,
                               kost/mynysenn-gwil
  unnys kenwerth:              kost/devnydhyer, kost/treuswerth, kost/kussulyans,
                               kost/kas-dhiswres

Dyskyplin marginal erbynn kres a dhevnydh (marginal-vs-average-cost.md):
spena ervirys/dhiskwedhys a wra kost unys marginal ≈ 0 bys an step
ervirans nessa — pris-gwrewgh dewisyansow ystynnans orth marginal, tuedh
effeythusnans orth kres.
```

## Ensampel gwrys

Servis triage nombrek: spena skeul £62,000/mis (kompoutya £30k, data £18k, dyll platform rynnys £14k), ow ober 380,000 kevrenn triage/mis:

```
Kost kres rag kevrenn = 62,000 / 380,000 ≈ £0.163

Keskomparyans kommyssyoner: triage pellgows ≈ £8–12/galwans, kussulyans MT ≈ £42
→ kevrenn nombrek a'n jeves ~2% a'n dewis denel es — ekonomek a dreylyans
  kanel a gds-service-metrics.md, dhort an tu kost.

Kwitthans tuedh: bledhen a-varr £0.21/kevrenn orth 240k kevrenn → ekonomek
skeul a wellha (kostow platform fast ow tiskya), gwrians penn-linenn y'n QBR.
```

## Kolm gans ynjynnyans medhelweyth

Ekonomek unys yw ple may wra dewisyansow ynjynnyans bos redyadow arghans: arkitektur a hanterha kost-rag-kevrenn yw avantach pris; unn a skaylya moy ages linear yw bom-termyn gweladow y'n metrik ma yn unnik. Praktisyow a dreuswerth dhort kostya yeghes: **dyllewgh an rewlys dyllans** (kostow rynnys a dhistorsyas figuryow rag unys erbynn PLICS a standardyas kostya klav-nivel — dha dyllans kost platform a res an keth ewnder); **dewisewgh unnys may tybyn an prener** (kommyssyoners a bren kevrennow, na ny yw vCPUs); ha **portyewgh kostow unys dhe bub patrom [ICER](../ratyo-kost-effeythusnans-ynkressys/) ha [efekt budjet](../analys-efekt-budjet/)** avel an dynomynador kost awtorita. Rag nodhow AI, an unys yw an token — gwelewgh [ekonomek unys ynferans](../ekonomek-unys-ynferans/).

## Fowtys Kemmyn

- **Ankevi kostow rynnys**: kostow unys heb dyllansow platform/sawder/on-call a dhiwoeth dre 30–50% ha a goll orth awdit.
- **Dynomynadoryow gwag**: "kost rag galwans API" a ormens; "kost rag kevrenn klav kowlwrys" a dhysk.
- **Prisya marginal orth kost kres**: chargya tymow kost unys kres rag devnydh marginal-ryb a dhri gwari hwithans-gwast (gwelewgh [tariff kenedhlek](../tariff-kenedhlek-ha-kostow-unys/) rag an versyon NHS a'n fowt ma).

## Fontynnow

- FinOps Foundation, ekonomek unys. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, dallethans ekonomek unys skeul. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
