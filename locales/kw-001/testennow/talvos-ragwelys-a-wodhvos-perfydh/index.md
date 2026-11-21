# Talvos Ragwelys a Wodhvos Perfydh (EVPI)

EVPI yw an kevrann uhella a dal dhe wrer-dhewisyans payya dhe dhiwarth ansylder kyns dewis — pris ffurfyek an "gwren previans kensa."

## Perag yth yw posek

Systemow yeghes a wynn pub prys an dewis: degemeres lemmyn war skoodhyans anperfydh, po arghansa moy hwilans kensa. EVPI a re niver dhe'n nessa dewis. Mar yw EVPI £50,000 ha'n previans ervirys a gost £2 milyon, degemerewgh lemmyn. Mar yw EVPI £20 milyon, an previans yw bargan. An keth govyn — "a dalvia dhe bregowtha hemma kyns y skaylya?" — a dheu rag pub dewisyans ark kowethyans, ha nagonan ny'n pris. Rag pris-wrians an dewis dhe ystynna towl diwettha, yn le an dewis dhe gonsyla kedhlow kensa, gwelewgh [Gwerth Dewisyow Gwir](../gwerthjyans-opsyonow-gwir/).

## An Matematik

EVPI yw an bwlgh ynter dewis gans rag-wolok perfydh ha dewis lemmyn war gwaytyansow:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = parametrow ansyker (gans aga dasparth kesradhek)
NMB(j,θ) = prow mona nett a dhewis j rag θ
```

Kensa termyn: kres a dhelivrans dewis-gwella dres pub bys possybyl (dewisewgh yn ewn pub prys). Nessa termyn: delivrans an unn dewis gwella orth kres (res yw dhewgh kesy lemmyn). EVPI ≥ 0 peub-prys. EVPI pobel a multiplya dre niver dewisyansow tuchys. Kowntys yn dhirek dhort tennow [PSA](../analys-ansylder-probabilistek/).

## Ensampel gwrys

Displegewgh gweres dokumentya AI dhe 5,000 klinikyer, po na wrewgh. Dew bys:

```
Bys A (p = 0.6): gweres a sav 20 mynysenn/dydh → NMB displegyans = +£8M
Bys B (p = 0.4): gweres a sav ~0 (kesstryf lanwes) → NMB displegyans = −£3M
NMB "na wrewgh displegya" = £0 yn an dew vys.
```

Dewisewgh lemmyn: E[NMB displegyans] = 0.6 × 8 − 0.4 × 3 = **+£3.6M** → displegewgh.

Gans godhvos perfydh: yn bys A dewisewgh displegyans (+£8M), yn bys B dewisewgh nagonan (£0). Talvos ragwelys = 0.6 × 8 + 0.4 × 0 = **£4.8M**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Previans krev a 3 mis a gostya £150,000 a worthyp yn splann pyth bys y'ma — a dal yn gwir — ha pub previans a gostya moy ages £1.2M na dal, kyn fo kowl.

## Kolm gans ynjynnyans medhelweyth

EVPI yw ekonomek an spike, an previans, an previans A/B, ha'n prov-a-kensedh. Hi a re dew rewl pragmatek:

- **Previans a dal bos arghansys yn unnik mar hyll an dewisyans chanjya yn gwir.** Mar kwrewgh displegya kyn an sewyans previans, EVPI = 0 ha'n previans yw gwari.
- **Kesewgh spena previans orth EVPI.** Talvos an kedhlow yw kesys gans talvos an dewisyans a wra kedhlowi.

EVPI rannek (EVPPI) a ystynn hemma dhe barametrow unn: "pyth a dal kavos an niver termyn-sawys yn arbennik?" — hag a lever pyth a res an previans musura. Rag prisya studhyans *spesifek* ervirys yn le dhiwarth pub ansylder, gwelewgh [EVSI](../talvos-ragwelys-a-sampel-kedhlow/).

## Fowtys Kemmyn

- **Ledya previansow heb rewl dewisyans kolmys** — kedhlow na yll chanjya an dewis yw heb talvos dre dyllans.
- **Ankevi kost dalgh kuntell kedhlow**: previans 6-mis a dalghes 6 mis a brow ([kost dalgh](../kost-dalgh/)); talvos nett an previans = EVPI dyswrys − kost dalgh − kost previans.
- **Trettya EVPI avel ragwel.** Yw harth ughel a dalvos kedhlow, na ny yw estymasyon a bys a dhelivr studhyans spesifek.

## Fontynnow

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- Gerlyver York Health Economics Consortium: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
