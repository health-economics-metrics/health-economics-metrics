# Dyskudhans Utilita Kenwerth-Termyn (TTO)

TTO yw fordh savonek dhe dhyskudha talvos utilita stad yeghes yn dhirek dhort gorthyber, yn le y dhisplegya. Yth yw unn a'n fordhow dyskudhans — ryb gwari savonek ha previow dewis diskret — a wra an setyow talvos a-dhelergh ynstrumentow kepar ha [EQ-5D](../eq-5d/), ha rakhenn a-dhelergh an moyha a jorrowes [QALY](../bledhen-bewnans-addasys-anabalder-2/) a-wartha.

## Perag yth yw posek

Pub pwys utilita a dheu dhe jorrans QALY a dhel dhort neb le. TTO yw an fordh: rag stad ervirys gwell ages mernans, gofynnys yw dhe worthyber pygemmys bledhen `X` yn yeghes kowal a gonsydra kehaval dhe `T` bledhen y'n stad anabalder (`X < T`); an utilita yw `X / T`. Rag stad may ma nebes gorthyoryon ow konsydra gweth ages mernans, an furvel savonek a dorr (na wra deskrifa utilita a-woeles sifra yn glan), ytho TTO ystynnys a'n kemmer y le. Ynjynnyer medhelweyth po dhysplegyer a gemmer pwys utilita avel yntrow res, heb godhvos y othem a brotokol dyskudhans validys dh'y wul, yw unn kamm dhort niver na yll defendya mar tegh y wetha.

## An Matematik

```
TTO savonek (stad gwell ages mernans):
  utilita = termyn_yn_yeghes_kowal / termyn_y'n_stad_anabalder

TTO ystynnys (stad gweth ages mernans):
  utilita = -termyn_kenwerthys_rag_mernans / (hys_leun - termyn_kenwerthys_rag_mernans)
```

`termyn_yn_yeghes_kowal` / `termyn_y'n_stad_anabalder` — bledhynyow `X` yn yeghes kowal a jujyas kehaval dhe `T` bledhen y'n stad anabalder. `termyn_kenwerthys_rag_mernans` / `hys_leun` — y'n furvelyans gweth-ages-mernans, bledhynyow `a` a'n bewnans `T`-bledhen gesys a wrussa an gorthyber kenwertha rag mernans dhirek, ow tevyska `T − a` bledhen yn yeghes kowal wosa mernans a-ugh `T` bledhen y'n stad gweth-ages-mernans. An sewyans yw negativ, ankerys may fo mernans = 0.

## Ensampel gwrys

**Savonek**: gorthyber yn stad anabalder rag 10 bledhen yw heb dewis gans 7 bledhen yn yeghes kowal: utilita = 7 / 10 = **0.7**.

**Gweth ages mernans**: dres bewnans gesys a 10 bledhen, an gorthyber a vensa kenwertha 2 bledhen rag mernans dhirek — a dhewisa 8 bledhen yn yeghes kowal wosa mernans a-ugh 10 bledhen y'n stad gweth-ages-mernans: utilita = −2 / (10 − 2) = −2 / 8 = **−0.25**.

## Kolm gans ynjynnyans medhelweyth

An keth poynt a dheu orth sorvey DevEx po kesdhevnydhyans pan wovynn dhe dus dhe rateya neppyth war skala 0–10 heb chekyans a dhal omma yn kemmyn: TTO yw drefen na ny yw "govynnewgh ha'n tus dhe rateya" fordh dyskudhans validys y honan. Kyns drehevel index kesunnys — skor DevEx, index kesdhevnydhyans, skala skwith-bewnans — a-uwhon niver hunnys-rateys, govynnewgh pyth a'n dyskudhas ha mars o an fordh na validys, an keth govyn a wra ekonomystyon yeghes a bwys utilita kyns may tevo y'n QALY.

## Fowtys Kemmyn

- **Jeneralya talvos unnik**: talvosow TTO yw dyskudhys dhort *sampel* a'n pobel kemmyn (po klavjiyon), na ny yw an unnik may ma y ynkleth orth dewis — devnydhya talvos TTO unn dhorthyber kepar ha mars o jeneral yw fowt sampel.
- **Furvelyans kabm rag an stad**: an furvel TTO savonek a dybi bos an stad dhieth gwell ages mernans; y dhevnydhya dhe stad a vensa nebes ow kul gweth ages mernans, heb treylya dhe'n furvelyans ystynnys, a re utilita kabm (positiv) yn tawesek.
- **Hyssow anwiw dhe geskomparya**: talvosow TTO dyskudhys gans hyssow bewnans gesys `T` dyffrans rag an keskomparyans gweth-ages-mernans na yllons bos keskomparys yn dhirek heb gwiriens bos `T` hevelep y'n dyghtyans studhya.

## Fontynnow

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
