# Synsyans ha Kellys Devnydhyoryon

Synsyans a vusur pyth kannas a gohort devnydhyoryon yw hwath bywek N dydh wosa dallethva (kurvyow D1/D7/D30); kellys yw y kowlwrans. An linenn-vonn yeghes digidel krev: **ogas 90% a devnydhyoryon app yeghes a worta a-berth 30 dydh** — synsyans D30 yeghes digidel a vydh ~3–4% erbynn kres oll-app a ~6%.

## Perag yth yw posek

Eysenbach a hanwas hemma yn 2005: **lagh dhiskressans** — kelli devnydhyoryon orth ratyo uhel yw ansawor ynterel, strukturel a ynterventyansow eyeghes, na ny yw fowt gweythresans, gans diskressans yn previow eyeghes ow tremena 50% yn fenowgh. An effeyth ekonomek yw kowal: synsyans a styr an *fenester tretyans* may hyller delivra pub prow, ha'n [ekonomek unys](../ekonomek-unys-app-yeghes/) — CAC paydhys rag devnydhyer a'n gwith 12 dydh ny re LTV na QALYs. Pub model ekonomek rag produkt yeghes konsumer na bwyssy prow herwydh kurv synsyans a dhiskriv produkt na vo bythkweth.

## An Matematik

```
Synsyans_Dn = devnydhyoryon bywek dydh n / meur an kohort × 100
Ratyo kellys = devnydhyoryon kellys y'n termyn / devnydhyoryon orth dalleth × 100

Pwyssya prow (an gwari ekonomek yeghes):
  prow gwaytys rag devnydhyer kavys = Σ_t synsyans(t) × ratyo prow(t)
  ≈ ased dan an kurv synsyans × prow rag termyn
  — NA ny yw prow previ × 100% a devnydhyoryon kavys

Kost rag devnydhyer synsys orth D30 = CAC / synsyans D30
  (orth 4% D30, £5 CAC yw yn gwir £125 rag devnydhyer synsys)
```

## Ensampel gwrys

App yeghes-spyrys: previ a dhiskwedhas 0.02 QALY nowodh rag devnydhyer a gowlwras 8 seythun. Kohort gweythresans a 100,000 ellosegyans, synsyans D7 25%, D30 8%, seythun-8 4%:

```
Kowlwryoryon         = 100,000 × 0.04 = 4,000
QALY delivrys        = 4,000 × 0.02 = 80  (na ny yw 100,000 × 0.02 = 2,000)
Orth £20,000/QALY    = £1.6M a dalvos yeghes (na ny yw £40M)

Talvos yeghes rag ellosegyans = £16 — an niver a dal settya pyth a wra
paysyer pe rag ellosegyans, ha yw 4% a'n klaym naïv.
Kas gwellhe synsyans: ow movya kowlwrans seythun-8 dhort 4% → 6% a ynkres
40 QALY/bledhen ≈ £800k — ynjynnyans synsyans YW gwrians yeghes.
```

## Kolm gans ynjynnyans medhelweyth

Synsyans yw an metrik may ma ynjynnyans produkt a wra talvos yeghes dhirekka, herwydh an matematik a-ugh. An arferyow a'n movya yw kemmyn: termyn-dhe-kensa-talvos onboarding, dyskrifans dasdenna, performya, ha gwarthek **kowlwrans dosys ragdhesyghys** — program gans diwedh diskrifys (8 seythun, wosa gradyans) a dal musura *kowlwrans*, na DAU heb diwedh, ow gesarnya an metrik gans model klinikel yn le model dhevnydhyans-an-attensyon arghansys dre hysbysyow. Dyskrifans parys yw an arfow ewn (an keth matematik Kaplan-Meier avel [bledhynyow bewnans gwrys](../bledhydhyow-bewnans-gwynnys/)); strata-ewgh kurvyow herwydh kanal kavans, drefen kesmesk-kanal a janj synsyans moy ages an moyha a'n feyturyow.

## Fowtys Kemmyn

- **Dasvewans ITT a-dhelergh**: previow a dhiskwedh kowlwryoryon; ekonomek gweythresans a dal kontya pubonan kavys (an gwarnyans kresel Eysenbach).
- **Teatr synsyans**: devnydhyoryon "bywek" dre dhiskwedhyans a na wra bythkweth an ober tretyans (gwelewgh [metryks kesdhevnydhyans](../metryks-kesdhevnydhyans/)).
- **Keskomparya kurvyow a-dreus styrans**: "bywek" styrys avel igerys erbynn gweythresans styrek a janj D30 dre liesow.
- **Hepkor an re a dhehwel**: mars yw an klavha ow kelli an dhiwettha, prow rag devnydhyer a goedh pan wella synsyans yn-mysk an yagh — kevrewgh kurvyow gans kesmesk-kas (gwelewgh [hedhes ha ekwita](../hedhes-hag-ekwita/)).

## Fontynnow

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
