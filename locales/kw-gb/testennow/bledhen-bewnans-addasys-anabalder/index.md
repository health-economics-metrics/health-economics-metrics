# Bledhen Bewnans Addasys-Anabalder (DALY)

DALY yw unn bledhen kellys a vewnans yagh — myrwhes tu-bylyow an [QALY](../bledhen-bewnans-addasys-anabalder-2/). Le may kowns QALYs yeghes *gwynnys*, DALYs a gownt yeghes *kellys* dhe glevyd; ynkleth a vydh talvosys dre DALYs **hwithys**.

## Perag yth yw posek

An DALY yw standard yeghes-dhe-bys (WHO, studhyans Global Burden of Disease, ha'n moyha minystrys yeghes pow le- ha kres-arghans a dhesyns yn DALYs). Mar kwra dha vedhelweyth servrya systemow yeghes mamnans, tonyoryon, po towlow WHO-kelmys, an tavas talvos yw DALYs hwithys, na ny yw QALYs gwynnys. Skoodhyer istorek WHO-CHOICE: ynkleth a wetha DALY rag le ages 1× GDP rag pen yw "kost-effeythus kref," 1–3× GDP rag pen "kost-effeythus" (WHO lemmyn a dhiwask devnydh kales an bandys ma, mes y hwrons dos pup-prys yn praktis).

## An Matematik

```
DALY = YLL + YLD

YLL (bledhydhyow bewnans kellys)       = mernansow × gwaytyans-bewnans standard orth oys mernans
YLD (bledhydhyow bewys gans anabalder) = pewas × pys anabalder

pys anabalder ∈ [0, 1], 0 = yeghes kowl, 1 = kehaval dhe verwel
(pyssyansow dyllys gans studhyans Global Burden of Disease)
```

## Ensampel gwrys

Platform dasarghenn keres yn rannvro a ystyn dyskudhans a-varr klevyd. Pub bledhen hi a wetha 10 mernans a-varr (pub unn ow kelli 20 bledhen erbynn gwaytyans-bewnans standard) ha lett 200 den dhe vewa bledhen gans kondysyon a'n jeves pys anabalder 0.2.

```
YLL hwithys = 10 × 20        = 200
YLD hwithys = 200 × 0.2      = 40
DALYs hwithys               = 240 pub bledhen
```

Mar kost an platform $600,000/bledhen dhe oberya, kost rag DALY hwithys yw 600,000 / 240 = **$2,500**. Yn pow gans GDP rag pen a $8,000, hemma yw pell a-woeles an skoodhyer 1× GDP — "kost-effeythus kref" yn termys WHO-CHOICE.

## Kolm gans ynjynnyans medhelweyth

- Yeghes nombrek ledyes dhe arghansoryon yeghes-dhe-bys (Gavi, Global Fund, towlow kenedhlek) a dal derivas efekt avel **kost rag DALY hwithys** — an metrik a'n tybyn arvedhoryon grant seulabrys.
- An DALY yw ynwedh patrom ewnder *kownt-doll* arg rag ynjynnyans: hwarvosow, bilys flaky, ha kesstryf ankoth yw "bledhydhyow bewys gans anabalder" a godlyver — rol-doll pysys-toil a lever ple y bren dasserghyans an moyha "bledhydhyow ynjynnyans yagh," kepar dell wra tablow doll GBD ledya spena yeghes.

## Fowtys Kemmyn

- **QALYs gwynnys ≠ DALYs hwithys yn niver** — pyssyansow dyffrans, tablow-bewnans dyffrans, konvensyonow dyffrans (DALYs istorek a dhevnydhyas pysya-oys ha diskontya a-bervedh an musur). Na dreylewgh yn skon.
- **Devnydhya thresholdys multipelow GDP avel stamp rubber** — WHO y honan a warnya may tebel budjettow ha kost an dewis; gwelewgh [thresholdys parys-dhe-bayi](../harthow-bodh-dhe-dhalleth/).
- **Klamya DALYs skala-pobel dhort effeythusnans rag devnydhyer** heb multiplya dre degemeryans ha gorholedh — gwelewgh [hedhyans ha kehaval](../hedhes-hag-ekwita/).

## Fontynnow

- Registri dyllyow WHO: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. war thresholdys diwar GDP, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
