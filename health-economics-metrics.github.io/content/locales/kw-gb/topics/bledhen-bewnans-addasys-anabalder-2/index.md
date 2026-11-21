# Bledhen Bewnans Addasys-Anabalder (QALY)

QALY yw unn bledhen a vewnans bewys yn yeghes kowal. Yth unn *pes termyn* a vewa tus gans *pygemmys da* a vewons, may fo bledhen yn yeghes ankevri ow talvos le ages unn QALY — ow gul ynterventyansow yeghes dyffrans yn tien kehaval war unn skala.

## Perag yth yw posek

An QALY yw an arghans kemmyn a asesyans teknologi yeghes. NICE (Pow Sows) a dhalvos nowodhow yeghes orth **£20,000–£30,000 rag QALY**: ynterventyans a brena QALYs yn ankostys ages an harth ma yw kemmynys argemmys; unn a'ga prena ker yw kemmynys gwrthvsys. An niver unn ma yw fatell wra servis yeghes kenedhlek keskomparya medhegieth kanser, amkans pen-lyn ha'n app triage war an keth ahel. Mars yw dha medhelweyth ow kyn klamya QALYs — dre dhiwars ankevrys, drehevel tretyans, po gwellhe sawder — te a yll talvosa y dalvos yeghes yn kehaval arghans avel an medhegieth y honan.

## An Matematik

```
QALYs = Σ_i (hys_i × utilita_i)

hys_i      = bledhynyow tremenys yn stad yeghes i
utilita_i  = pwys sawder a stad i, ankerys orth 1 = yeghes kowal, 0 = marow
             (gwerthow negativ gwrys rag stadow gweth ages mernans)
```

Pwysyow utilita a dheu dhort ynstrumentow validys, an moyha [EQ-5D](../eq-5d/). *Nowodh* QALY a ynterventyans yw an dyffrans inter streymyow QALY gans ha heb, [diskontys](../diskontya-ha-preferans-termyn/) orth 3.5%/bledhen yn kas kerdhor NICE.

## Ensampel gwrys

Klav a wortha tretyans kolon yn stad gans utilita 0.6. Tretyans a'n dasset dhe utilita 0.85.

- **Tretys lemmyn**: 1 bledhen orth 0.85 = 0.85 QALY an bledhen ma.
- **Tretys wosa gortos 6 mis**: 0.5 × 0.6 + 0.5 × 0.85 = 0.725 QALY.
- **Kolli QALY rag klav dre'n gortos**: 0.85 − 0.725 = **0.125 QALY**.

Talvosys orth harth NICE: 0.125 × £20,000–£30,000 = **£2,500–£3,750 a dalvos yeghes kellys rag klav rag pub gortos 6-mis**. Mars yw medhelweyth a skonya an fordh a dhileth an gortos rag 400 klav/bledhen, an talvos yeghes yw 50 QALY ≈ **£1.0–£1.5 milvil/bledhen** — kyns kontya saw ober vyth.

## Kolm gans ynjynnyans medhelweyth

- **Fordhow skwithys = QALYs a-varr.** Pypynag tra a verra [kemmyskyans dhe dhorn tretyans](../kemmyskyans-dhe-dretyans/) a drehevel disutilita gortos yn nowodh yeghes, talvosys herwydh a-ughon.
- **Sawder = QALYs gwithys.** Fowtys medhegieth ha diagnosys kellys difygys yw kollow QALY dhe woeles.
- **An QALY yw ynwedh patroun dhe dhiserghi metrik**: kesstrywyans a liester × sawder, gans pwysyow sawder dhort ynstrument savonek. "Bledhen ynjynnyer addasys-sawder" (termyn × pwys sorvey DevEx) yw an keth drehevyans — gwelewgh [SPACE ha DevEx](../space-ha-devex/).
- Rag treylya QALYs yn mona rag kas busnes, devnydhewgh [prow arghans netto](../prow-mona-nett/); rag aga treylya yn dewisyans, devnydhewgh [harthow bodh-dhe-dhalleth](../harthow-bodh-dhe-dhalleth/).

## Fowtys Kemmyn

- **Dyski pwysyow utilita.** Res yw dhe bwysyow dos dhort ynstrumentow validys (EQ-5D) ha setyow gwerth dyllys, na dhort preder.
- **Klamya QALYs heb fordh gwraydhek.** "Dha app a wella yeghes-bewnans" nyns yw klaym QALY; "a dhileth X seythun a wortos yn stad utilita 0.6" yw.
- **Dyblans-jynnya**: klamya an nowodh QALY *ha* an sawyansow kost a'n keth dhiwars difygys a bysi gwithyans y fons gwir dyvers.
- **Gwyllyow ekwita**: QALYs a dhalvos bledhen a ystynnadh bewnans herwydh utilita dallethva, hag a yll dhiskavosa tus gans anabalder — an rasyn may ma ICER (US) ynwedh ow derivas an evLYG (gwelewgh [bledhynyow bewnans gwrys](../bledhydhyow-bewnans-gwynnys/)).

## Fontynnow

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
