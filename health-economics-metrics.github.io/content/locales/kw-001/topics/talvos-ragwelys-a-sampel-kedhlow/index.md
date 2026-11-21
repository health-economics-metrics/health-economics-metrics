# Talvos Ragwelys a Sampel Kedhlow (EVSI)

EVSI yw talvos *studhyans ervirys spesifek* — dyssynyans rydh, niver sampel rydh — kyns y vos ledys, erbynn [EVPI](../talvos-ragwelys-a-wodhvos-perfydh/), a bris dhiwarth oll ansylder yn tien. EVSI a worthyp an govyn a wra arghansoryon hwilans yn gwir: "a dal *an previans ma*, orth *an meur ma*, y gost?"

## Perag yth yw posek

EVPI a lever an gwarthel dhe bub hwilans; ny lever bythkweth mar tremena an previans a-rag dhywgh an bar. Arghansor hwilans kenedhlek ow dewis ynter previans 50-klav ha previans diwettha 500-klav a res godhvos pygen a dal *pub dyssynyans spesifek*, na ny yw yn unnik talvos pubgodhvos. EVSI a re an niver, ha drefen y skaylya gans meur an sampel, hi a asa arghansor dhe gavos an meur sampel a ewnha prow nett ragwelys yn le dhe dybya.

Hemma yw ynwedh an kaus may fydh EVSI peub-prys le po kehaval dhe EVPI: sampel finwydhek a yll dyswul ansylder yn rann yn unnik, ha studhyans usi a hevel dhe dalvos moy ages kedhlow perfydh yw arwodh bos an kowntyans kamm, na ny yw sewyans gwir.

## An Matematik

```
Kemmyn:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (gwaytyans nythys: a-ves dres sewyansow studhyans possybyl, a-berth dres
  krodh poster dhe θ wosa gweles an sewyans — usi a vydh estymys dre
  Monte Carlo nythys / dasnowydhya Bayesian dres tennow analys ansylder
  probabilistek)

Menegva-forma-dall normal (unn parametr ansyker, patrom normal-normal
kesrenys — shortkut standard, na ny yw tien rag pub patrom):
EVSI(n) = EVPI × n / (n + n0)

n  = meur sampel an studhyans ervirys
n0 = "meur sampel kehaval-kyns" — meur sampel dhelivrys a dhre an keth
     kedhlow avel an kyns a vo lemmyn, dynnys dhort an ratyo variyans data
     orth variyans kyns
ENBS(n) = EVSI(n) − Kost(n)
EVSI pobel = EVSI rag dewisyans × dewisyansow tuchys
```

An furv kemmyn yw gwaytyans nythys drefen bos sewyans studhyans a-dhelergh ansyker y honan: res yw kresya dres pub setys data a yll an studhyans dri, ha rag pub unn dasrekena an dewis gwella herwydh an krodh dasnowydhys (poster). An menegva-forma-dall normal a dreuswerth an kost kompoutya na dhe unn ratyo, ewn pan wra an parametr ansyker ha'n data normal (ogas) ha kesrenys — es, na ny yw lagh unyversel. Monte Carlo nythys kowl yw an fordh kemmyn pan na ra an tybyans sevel. Gwelewgh [analys ansylder probabilistek](../analys-ansylder-probabilistek/) rag an tennow PSA a vydh EVSI estymys dhort.

## Ensampel gwrys

War an ensampel [EVPI](../talvos-ragwelys-a-wodhvos-perfydh/) — displegya gweres dokumentya AI dhe 5,000 klinikyer, le may kavsis EVPI £1.2M — diskwedhewgh an keth EVPI omma yn pownds kowl: **EVPI = £1,200,000**.

Studhyans previans ervirys a 50 klinikyer yw war an voos. Dhort an ratyo variyans an krodh kyns orth ewnder musur an previans, an meur sampel kehaval-kyns yw `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

An previans a gost £120,000:

```
ENBS = EVSI − Kost = 480,000 − 120,000 = £360,000
```

ENBS pozitiv splann: arghansewgh an previans. Mar kwra an keth dewisyans provians dasdhos dres 3 trest rannvro kehaval, talvos an previans a skaylya:

```
EVSI pobel = 480,000 × 3 = £1,440,000
```

## Kolm gans ynjynnyans medhelweyth

EVSI yw ekonomek dewis *pygen bras* a dal bos previans po previans A/B, na ny yw yn unnik a dal y ledya hag oll:

- **Dewisyans meur-sampel avel investyans.** Beta a 50 devnydhyer ha delivrans skeulys a 5,000 devnydhyer yw "studhyansow" dyffrans gans EVSIs ha kostow dyffrans — EVSI a asa dhywgh aga keskomparya war an keth selys yn le dhe dybya "moy data yw peub-prys gwell."
- **ENBS, na ny yw EVSI yn unnik, yw an previans komyssyonya.** Studhyans gans EVSI uhel mes kost a wra moyha anodho yw arghadow gwann; an rewl dewisyans yw prow nett ragwelys sampel, kepar dell wra kas besneth nettya prow erbynn kost yn le derivas prow yn unnik.
- **Delivrans ow tiskynna yw splann.** Drefen bos EVSI(n) ow kressa gans `n/(n+n0)`, dewblya meur previans na dewblya y dalvos bythkweth — ver ffurfyek an tuedh ynjynnyans bos previans brassa a'n jeves talvos kedhlow marginal ow tiskynna.

## Fowtys Kemmyn

- **Devnydhya an menegva-forma-dall normal a-ves y dybyansow.** Yw ewn yn unnik rag ansylder unn parametr, ogas-kesrenys; patrom dewisyans nan-linear po lies parametr a res Monte Carlo nythys kowl, na ny yw an shortkut ma.
- **Keskomparya EVSI orth kost arghans yn unnik.** EVSI a res bos pysys erbynn *kost kowl* an studhyans, y gost dalgh dewisyans y honan — gwelewgh [kost dalgh](../kost-dalgh/) — na ny yw fakturen an studhyans yn unnik.
- **Trettya EVSI > EVPI avel kavans gwir.** EVSI na yll dhres EVPI dre dhyssyn; kowntyans usi a dhre hemma yw fowt patrom, na ny yw dyskudhans.

## Fontynnow

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
