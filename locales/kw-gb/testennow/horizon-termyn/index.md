# Horizon Termyn

Horizon termyn yw an termyn may ma analys ow kontya kostow hag efektow. Res yw dhodho bos hir lowr dhe dhasskor oll an dyffransow posek inter an dewisyansow keskomparys.

## Perag yth yw posek

Dewisewgh horizon berr ha kellys prow diwedhes (ragweres) ha kostow diwedhes (synsyans). Dewisewgh horizon re hir ha pub tra a bomm yn tebelder. Asesyans teknologi yeghes a dhevnydh fenowgh horizon **oll-bewnans** rag tretyansow gans efektow mernans; [analys efekt budjet](../analys-efekt-budjet/) a dhevnydh yn avis horizon berr **1–5 bledhen** drefen y westyon yw gallos-paya, na talvos. An horizon yw dewisyans modelya derivys, ha horizonow dihevelep yw fordh kemmyn dhe wari keskomparyans.

## An Matematik

An horizon yw an harth uhella a'n sommyans yn pub gwerthjyans:

```
Talvos dhe-lemmyn netto = Σ (t = 0 … T) [ (Prow_t − Kostow_t) / (1 + r)^t ]

T = horizon termyn (bledhynyow)
r = ratyo diskont (gwelewgh discounting-and-time-preference.md)
```

Res yw derivas sewyansow gans an horizon derivys, ha yn idhel diskwedhys orth lies horizon.

## Ensampel gwrys

System erhyl-medhegieth elektronek a gost £2 milvil dhe weythresa ha £200,000/bledhen dhe ponya. A lett fowtys medhegieth gwerth £600,000/bledhen (kost tretyans a ankwith avoydys).

Prow netto herwydh horizon (heb diskont, rag splannder):

```
Horizon 1 bledhen:   −2,000,000 − 200,000 + 600,000  = −£1,600,000
Horizon 3 bledhen:   −2,000,000 + 3 × 400,000        = −£800,000
Horizon 5 bledhen:   −2,000,000 + 5 × 400,000        =  £0
Horizon 10 bledhen:  −2,000,000 + 10 × 400,000       = +£2,000,000
```

An system a "fyll" orth pub horizon a-woeles 5 bledhen ha "a sew" orth 10. Nyns yw hag unn a'n gwiryow; derivas onest a dheriv poynt-kehevelys ha jystyf an horizon dre oes an system (pygemmys termyn kyns dasplas?).

## Kolm gans ynjynnyans medhelweyth

- **Gwerthjyansow arfow musurys dres unn sprint** a fyll yn rewlys dhe weles an gwagya kurv-dyski (kostow a-rag) ha synsyans hirdermyn (kostow a-dhelergh). Previow gweres kodya AI musurys yn seythun 2 a gav nowedhyans kresek, na stad lestek.
- **Hys kontrakt ≠ horizon prow.** Kontrakt SaaS unn-bledhen a yll bos gwerthys dres 5 bledhen mar ragwaytys dasvewi yn gwir — mes leveryewgh hemma.
- **Kasow dasplas hen** a dal ponya bys yn diwedh-bewnans kredus a'n system hen, na bys yn niver kronn mympyesys.

## Fowtys Kemmyn

- **Gwerya horizon**: dewis an horizon a wra dha dewisyans dhe wayna. Ragderivewgh an horizon kyns jorra an sewyansow.
- **Horizonow dyffrans rag dewisyansow dyffrans** y'n keth keskomparyans.
- **Horizonow oll-bewnans heb diskontya po analys tebelder** — prow bledhen-30 orth gwerth fas yw fugyans. Kesunnewgh horizonow hir gans [analys tebelder](../analys-tebelder/).

## Fontynnow

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
