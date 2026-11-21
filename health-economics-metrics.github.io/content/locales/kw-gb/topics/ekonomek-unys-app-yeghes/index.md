# Ekonomek Unys App Yeghes

An aritmetik kenwerthek a vroduktow yeghes konsumer: kost kuntell kuvyonor (CAC), talvos bewnans (LTV), kres arghans rag devnydhyer (ARPU), pris rag-esel-rag-mis (PMPM), ha an dyffrans a varghas an dhrefenor orth **ROI ha VOI** (talvos war investyans).

## Perag yth yw posek

Appys yeghes a'n jeves skwithyans strukturek: kuntell yw kostus (klaymow rewlys, lettyow fydhyans, kostow akord) hag a-ves synsyans yw an gwettha a bub dalgh medhelweyth (~90% dilyans a-bervedh 30 dydh — gwelewgh [synsyans ha dilanans](../synsyans-ha-kellys-devnydhyoryon/)). An previans bywadewder standard — **LTV:CAC ≥ 3:1** — yw ytho kales ankevis yn yeghes konsumer, hag yth yw rag henna bos an gwaith ow tuedha dhe batromow B2B2C: dhrefenoryon, assuryoryon ha systemow yeghes ow payya PMPM rag pobel, le na ny yw an prener an unn dilansyek.

## An Matematik

```
CAC   = spena gwerth + marghas / kuvyonoryon nowydh payya
ARPU  = mona / devnydhyoryon gweythresys (rag termyn)
LTV   = ARPU × bewnans kres  =  ARPU / ratyo dilanans
Bywadewder: LTV : CAC ≥ 3, termyn dasbayans ≤ 12–18 mis

CAC effeythus rag devnydhyer gwithys = CAC / synsyans(t)
  — orth synsyans D30 4%, £5 rag instalyans = £125 rag devnydhyer gwithys 30-dydh

Mona PMPM = reyt × esely enrolys × misyow
  marja gwerther = PMPM − kost-dhe-servya rag esel rag mis
  — kesdhevnydhyans a dreyl an arwodh: yn dann sessrifyow B2C kesdhevnydhyans
    a dhrif mona; yn dann PMPM, esely kesdhevnydhys a gost moy dhe servya
    ages dhehwyr, ha kontraktow sewyans a'n dreyl arta
```

## Ensampel gwrys

App kosk B2C: £6.99/mis, dilanans miyek 18%, CAC kemmyskys £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — na vywadow

Treylya dhe PMPM dhrefenor: £1.20 PMPM × 40,000 bewnans kovrys = £48k/mis
Kost-dhe-servya: isstrukter £0.15 + skoodhyans £0.10 + kodhow £0.05
  rag esel ≈ £0.30 → marja ~75%, kelgh gwerth hir mes dilanans yw
  nivel-kontrakt (bledhenyek), na ny yw nivel-devnydhyer (dydhyek)

Govyn an dhrefenor a dreyl an metrik: ROI arghans kales (hawlow le,
absens) yw skant dhiskwedhadow rag produktow les — gorthyp an
industri yw VOI: produktivita, tyrrya recrusya, kesdhevnydhyans —
onest yn unnik pan yw gelwys VOI, na ny yw gwiskys avel ROI
(gwelewgh return-on-investment.md ha social-return-on-investment.md).
```

## Kolm gans ynjynnyans medhelweyth

Dewisyansow ynjynnyans a settya an dew denn a'n ratyo: **kost-dhe-servya** yw arkitektur ([ekonomek unys skeul](../ekonomek-unys-skeul/) — marja PMPM a vyw po a verow war gost isstrukter rag esel), ha **LTV** yw ynjynnyans synsyans (pub poynt dilanans yw mona aritmetik — matematik QALY an dokument [synsyans](../synsyans-ha-kellys-devnydhyoryon/) a'n jeves an gevell mona kowal). Rag produktow yeghes arbennik, an dashbord ekonomek unys a res kemmeres tressa linenn a-ryb LTV ha CAC: **talvos yeghes rag devnydhyer kuvys** (QALYs synsyans-pysys × threshold) — drefen bos peyoryon ha marghasow stil DiGA ow prisya warnodho moy hag moy, ha drefen bos produkt a dhiffer y ekonomek kenwerthek ha klinikel (kusul mes yeghes-ynert, po effeythus mes na-arghansadow) a res godhvos pyth kudyn a'n jeves.

## Fowtys Kemmyn

- **LTV dhort dilanans kohort kensa**: dilanans a stabila dhe-woeles; mes ynwedh gwythyas — devnydhyoryon kensa a withi gwell ages selyow skeulys. Devnydhewgh data kohort a vo adhyskys.
- **CAC kemmyskys dres kanelyow**: CAC sosyal-paydhys ha CAC erghyans-klinikyer a dhiffer 10×, gans profilys synsyans kontrari — rannewgh po bos kamdhesys.
- **PMPM heb gwarthel devnydh**: esely a vo kesdhevnydhys dres ewn a yll tewlel marjas; patromewgh an dasparth, na ny yw an kres.
- **VOI diskwedhys avel ROI** dhe CFO — an fyll kredadowder a dhendylis diwysyans les-dhrefenor dres deg bledhen.

## Fontynnow

- Dallethyansow ekonomek unys healthtech. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- Framyow prisya PMPM rag yeghes nombrek. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
