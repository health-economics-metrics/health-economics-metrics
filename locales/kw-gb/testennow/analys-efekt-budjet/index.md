# Analys Efekt Budjet (BIA)

BIA a estymya pyth a wra degemeryans ynkleth dhe **vudjet** peyer yn unnik dres an 1–5 bledhen nessa. Hi a worthyp *kyfarwodhyans*; analys kost-effeythusnans a worthyp *talvos*. Teknologi a yll bos talvos splann ha na ellir y baya — po pris es hag talvos isel. Gwerthjyansow dha a res an dew.

## Perag yth yw posek

Govynn an rewler arghans nyns yw bythkweth "pyth yw an ICER?" — yw "pyth a wra hemma dhe vudjet an bledhen a dheu?" Gidyans praktis da ISPOR (an standard an gwelyow) a styr: perspektiv an peyer y honan, horizon 1–5 bledhen, kasow arghans bledhenyek *heb diskontya*, kromow degemeryans realistek, ha ansylder senarionow (nyns yw probabilistek). NICE a dhesir derivadow efekt budjet gans kost-effeythusnans; produkt gans efekt budjet kenedhlek a-ugh ~£20M/bledhen yn Pow Sows a dhallath negosyans kenwerthek heb vri dhe'n ICER.

## An Matematik

```
BI_bledhen_t = Kost_senario_gans_nowydh(t) − Kost_senario_a-vodh(t)

Kost_senario(t) = Σ dres kemmyskow klav:
   pobel ankwithys(t) × degemeryans(t) × kost nett rag klav(t)

kost nett rag klav = kost ynkleth − kost kyrhes dhisplasys + kost kyrhes sordhys
```

Dewisyansow patrom pur: kressans pobel ankwithys, an kromm degemeryans (degemeryans nyns yw bythkweth skon), pyth a dhisplas an dewis nowydh, hag oll demmand a *sordh* (kavadowder es → moy devnydhyoryon).

## Ensampel gwrys

Peyer a dhelivyr 2M a dus a dhesir terapi nombrek orth £300/klav/bledhen; 1.5% a'n esely ankwithys (30,000); degemeryans 20% → 40% → 60% dres 3 bledhen; pub devnydhyer a dhisplas £120/bledhen a gyrhes aral.

```
Kost nett rag devnydhyer = 300 − 120 = £180

Bledhen 1: 30,000 × 0.20 × 180 = £1.08M
Bledhen 2: 30,000 × 0.40 × 180 = £2.16M
Bledhen 3: 30,000 × 0.60 × 180 = £3.24M
```

Hogen mar yw ICER an produkt splann £8,000/QALY, an peyer a res kavos £3.24M a *arghans nowydh* erbynn bledhen 3 — an £120 displasys yw skoodhys tanow dres linednow budjet erel ha ny vydh relasys avel arghans (gwelewgh [relasya arghans erbynn heb relasya](../sawyansow-relasya-arghans-erbynn-heb-relasya-arghans/)). Hemma yw an kaus may ma talvos pub unys ha kyfarwodhyans dew gwarthel dispar.

## Kolm gans ynjynnyans medhelweyth

BIA yw an kowdhrewl dhe'n CFO a glaym ROI pub esedh: "yw kost-effeythus rag pub displegyer, mes a yllyn ni baya an dasvlenans dres an kowethyans yn bledhen arghansek ma?" Patromewgh gradhow lisens, S-kromm degemeryans, spena arghans displasys na vydh relasys marnas pan veu kontraktys koth hedhys, ha devnydh sordhys (CI es → moy CI). Diskwedhes tabel efekt budjet 3-bledhen a-ryb ROI yw an pyth a wra arghadow ark kowethyans arghansek kredadow. Rann tomm efekt budjet dyllys dres steusow, kohortow po bledhydhyow arghansek — gans an rannow ow kesdhasserghi dhe'n figyr dyllys yn gwir — yw gwir [dyssehtyans kost ewn-kans](../dyssehtyans-kost-ewn-kans/); sommya an lies linenn a dheu dhe'n tomm yn kensa yw [kuntell kost sawys-mona](../kuntell-kost-sawys-arghans/).

## Fowtys Kemmyn

- **Hwans degemeryans skon**: efekt bledhen-1 kowntys orth degemeryans stat-kadarn.
- **Kowntya kost displasys avel arghans** pan yw kanasow skoodhys.
- **Ankevi demmand sordhys** — gwellheansow kavadowder a dhrehedh devnydh an pobel ankwithys.
- **Kemmysk horizonow/diskontya BIA ha CEA**: BIA yw horizon yn berr, heb diskontya, kewar an peyer, orth dyssynyans.

## Fontynnow

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- Praktisyow dha ISPOR: analys efekt budjet. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
