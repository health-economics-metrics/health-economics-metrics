# Harthow Bodh-dhe-Dhalleth

Harth bodh-dhe-dhalleth (WTP) yw an moyha a wra gwari-dewisyer paya rag unys a nowodh yeghes — an linenn a dreyl [ICER](../ratyo-kost-effeythusnans-ynkressys/) yn dewisyans degemeres/skonya.

## Perag yth yw posek

An harth yw an le may ma ekonomek yeghes ow hedhi bos musuryans ha dos dhe vos polisi. Pub system kenedhlek a'th eus unn, splann po ansplann, ha godhvos an niver leel a re dhiso pyth a wra prisya klaym talvos yeghes:

| Korf | Harth (herwydh hwilas, 2024–2025) |
|---|---|
| NICE (Pow Sows) | £20,000–£30,000 rag QALY; kres harth dewisyans empirek ≈ £24,400 (2022–24); chanjyoryon ankevri a ynkress an gwarth effeythus dhe ~£36k–£51k; teknologis arbennik bys dhe £100k+ |
| ICER (US, non-governmental) | $100,000–$150,000 rag QALY/evLYG linenn-bonn prisyow; derivas drevas $50k–$200k |
| Kanada (CADTH / CDA-AMC) | ≈ CAD$50,000 rag QALY harth oberi |
| WHO-CHOICE (istorek, bys) | 1–3× GDP rag den rag DALY lettys (lemmyn nyns yw erghys drefen bos re dewl) |
| Tu-provysyon empirek UK (Claxton et al.) | ≈ £13,000 rag QALY dasplasys yn gwir orth marghen NHS |

## An Matematik

An harth λ a dheu yn pub rewl dewisyans:

```
Degemerewgh mar teu ICER = ΔC/ΔE < λ
Kehaval: degemerewgh mar teu NMB = λ×ΔE − ΔC > 0
```

Dyw deori a *bo* λ:

- **Tu-govyn**: pyth a vynn an kemmynieth paya rag yeghes (dewisyans talvos).
- **Tu-provysyon**: an yeghes a wra an budjet lemmyn orth an marghen (kevrenn empirek — ~£13k/QALY Claxton). Mars yw λ devnydhys rag dewisyansow uhelha ages an ratyo tu-provysyon, degemeres teknologi nowydh a dhasplas moy yeghes ages ow keworra.

## Ensampel gwrys

Dha dhyghtyans digidel a re 0.05 QALY rag klav tretys orth kost netto (pris le gorrethow) £800.

```
ICER = 800 / 0.05 = £16,000 rag QALY
```

- Pow Sows: a-woeles £20k → arghansadow. Pris uhella defendyes: orth λ = £20,000, pris_uhella = 0.05 × 20,000 + gorrethow = £1,000 + gorrethow.
- Framya kenwerthus US orth $150k/QALY: pris-diwar-talvos yw meur uhelha.
- Harth GDP-rag-den a $4,000 pow: an keth produkt a res kostya a-woeles ~$200 netto.

An keth produkt, tri marhas, tri pris — an harth *yw* an model prisyans. Hemma yw prisyans-diwar-talvos, ow ponya yn kedrak dhort λ.

## Kolm gans ynjynnyans medhelweyth

Pub kowethyans ynjynnyans a'th eus λ ansplann: an harth may fynn arghansa arfow rag pub our ynjynnyer sawys. Y wul splann — "ni a arghans pypynag a-woeles £40 rag pub our ynjynnyer sawys kredus" — a re gweythresans keskomparyans tablow-lyga a invesyansow plattform, kepar dell wra tablow-lyga kost-rag-QALY ow rannya spena yeghes. An dyskas tu-provysyon a dreus ynwedh: dha λ ynterel gwir yw pyth a wra dha *vacklog lemmyn* orth an marghen, na pyth a lever an ledyoryon a dal an termyn.

## Fowtys Kemmyn

- **Gwerya harth** a-dreus awdurdhow po kyttya harth HST rag produkt kemmyn.
- **Dyghtya λ avel leur-pris**: tremena an harth yw res, na lowr — [efekt budjet](../analys-efekt-budjet/) a yll hwath ankwithya produkt arghansadow rag unys.
- **Ankevi bos harthow ow movya**: chanjyoryon ankevri NICE (2022) ha dasvewyansow termynnek a janj λ effeythus; dyllewgh dha glaymow.
- **Keskomparya ICER erbynn harth yn arghans dyffrans heb treylya kyns**: gwelewgh [keskomparyans ICER kroes-arghans](../keskomparyans-icer-kroes-arghans/) — an fordh treylya (parita galloes pyrna erbynn ratyo chanj marhas) yw perthynus yn fordh, na ny yw manylyn a dhasrenna.
- **Kemmeres talvosyans λ-diwar gans tradyssyon VSL/VPF marhas-lavur**: yth esons dhort tradyssyonow deori dyffrans (fordh budjet-yeghes-harthys erbynn dewis dhiskwedhys dhort kenwerth gober-risk) ha nyns yns pub prys dasyunnys — rag an fordh dewis-dhiskwedhys aral dhe dalvosa bewnans, gwelewgh [Talvos Bewnans Statistek](../talvos-bewnans-statistek/).

## Fontynnow

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
