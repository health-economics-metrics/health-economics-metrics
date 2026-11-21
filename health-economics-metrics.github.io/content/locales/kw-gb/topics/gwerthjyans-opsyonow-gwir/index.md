# Gwerthjyans Opsyonow Gwir

Gwerthjyans opsyonow gwir a dhevnydh lojik prisyans opsyon arghansek dhe dhewisyansow investyans gwir (na ny yw marhas arghansek) — yn arbennik an *opsyon dhe ystynna* ragdres a-dhelergh mar sew, heb bos kevrys dhe hedna. Model binomyal unn-termyn simplys (Cox, Ross, Rubinstein, 1979) a dhalvos an fleksibleth ma yn dhirek, ow treylya "delivrewn byghan ha gwelen" a ankamma dhe niver prisys.

## Perag yth yw posek

Jorrans NPV statek a brisya ragdres avel gwari oll-po-ny-vo-tra: arghansewgh po na, orth skala hedhyw, bys vyken. Ragdresow gwir — ha'n ragdresow ynkleth yeghes digidel yn arbennik — a vydh nebes ow gweres yn fordh na: servis yeghes a yll arghansa pilot byghan, gweles pyth hwarvo, ha ny ymwrê moy arghans marnas mar sew. An fleksibleth na a'th eus talvos gwir, ha'y dhisprisya yn kefrys a dhisprisyas dhe'n ragdresow skwithys erbynn unn-shot, hag yth yw hemma a-dhelergh rag argemmys prokuryans ow gwobrena an ragdres skwithys moy sav-yagh. Gwerthjyans opsyonow gwir a vris an fleksibleth y honan, may hyller keskomparya ragdres skwithys yn ewn erbynn gwrians kevrys leun, heb y boenya rag dysky byghan war linenn NPV naïv.

## An Matematik

```
Ehangyow-risk-nowedh a stad "ughel":
  p = ((1 + ratyo_heb_risk) − faktour_isel) / (faktour_ughel − faktour_isel)

Peyth ystynnya yn pub stad (isella orth sifra — ystynna yw dewisyek):
  peyth_ughel = max(talvos_ragdres × faktour_ughel − kost_ystynnans, 0)
  peyth_isel  = max(talvos_ragdres × faktour_isel  − kost_ystynnans, 0)

Talvos an opsyon (peyth gwaytys diskontys):
  talvos_opsyon = (p × peyth_ughel + (1 − p) × peyth_isel) / (1 + ratyo_heb_risk)

NPV ystynnys = npv_statek + talvos_opsyon
```

Talvos an ragdres a sev (`faktour_ughel`) po a goedh (`faktour_isel`) erbynn an poynt dewisyans nessa. Ystynna yw gwrys yn unnik mar sew prowus yn an stad na — an isella orth sifra yw an pyth a wra hemma *opsyon* gwir na ny yw kevrys. Rag prisya an opsyon dhe gudha kuntell a-varr yn le an opsyon dhe ystynna wosa, gwelewgh [talvos gwaytys a wodhvos perfydh](../talvos-ragwelys-a-wodhvos-perfydh/). Rag kost gortos an dewisyans, gwelewgh [kost dalgh](../kost-dalgh/).

## Ensampel gwrys

Pilot servis digidel gans `talvos_ragdres = £1,000,000`, kynsedhes dhe sevel dhe 1.5× po koedha dhe 0.5× erbynn an poynt dewisyans nessa, ratyo heb-risk 8%, ha kost ystynnans £600,000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

peyth_ughel = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
peyth_isel  = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

An isella a dal: an opsyon NY'S hwra gwrys mar tisobej an marhas —
kost ystynnans £600,000 a dremen an £500,000 a dalvosa
an ragdres yn stad isel.

talvos_opsyon = (0.58 × 900,000 + 0.42 × 0) / 1.08
              = 522,000 / 1.08
              ≈ £483,333.33
```

Ow keworra talvos an opsyon dhe linenn-vonn NPV-statek a £200,000: NPV ystynnys = 200,000 + 483,333.33 ≈ **£683,333.33**. Derivas NPV statek £200,000 yn unnik, heb an talvos opsyon ma, a dhisprisya talvos gwir an ragdres skwithys dre moy ages an dhewblek.

## Kolm gans ynjynnyans medhelweyth

Hemma yw an versyon furvel a "delivrewgh versyon izel lemmyn, gwithewgh an opsyon dhe investya moy mar teu yn-rag" — dhirek perthynus dhe ynkleth ragdres produkt yeghes digidel skwithys, strukturel kehaval dhe [kost dalgh](../kost-dalgh/) ha frya-sekwans [WSJF/CD3](../wsjf-ha-cd3/) dan dowtyans, ha kowethek dhe [talvos gwaytys a wodhvos perfydh](../talvos-ragwelys-a-wodhvos-perfydh/) ha [talvos gwaytys a wodhvos sampel](../talvos-ragwelys-a-sampel-kedhlow/) — an try dhe brisya fleksibleth po kedhlow dan dowtyans, dhort ankwith dyffrans.

## Fowtys Kemmyn

- **Kemmeres prisyans risk-nowedh heb an tybyans a vowes-arghans dhe'n gwrians**: modellow opsyonow gwir a iska probabilita risk-nowedh dhort prisyans opsyon arghansek, hag a dybi an talvos yw *marghas* — rag ragdres gwir heb marghas, hemma yw sawder modell, na ny yw fakt marhas lytherel.
- **Treusa `faktour_ughel`/`faktour_isel` avel parametrys rydh**: yntrowyow binomyal ughel/isel yw tybyansow a'th eus othem a dhesedhyans, na ny yw parametrys rydh dewisys rag ri an gorthyp hwansys.
- **Derivas talvos an opsyon yn unnik**: talvos opsyonow gwir yw *ynkressek* dhe NPV statek an ragdres savonek — kabm kemmyn yw derivas yn unnik an opsyon ha gasa an kas-bonn, hag a worfowl an kas mar sew NPV statek negativ hag a dhisprisya (avel y'n ensampel a-ugh) pan vo NPV statek gesys yn tien a-ves.

## Fontynnow

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
