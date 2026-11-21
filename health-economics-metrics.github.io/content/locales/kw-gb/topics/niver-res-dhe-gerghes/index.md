# Niver Res dhe Gerghes (NNS)

NNS yw an niver a dus a res bos kerghys — na ny yw trettys yn unnik — dhe lettya **unn** sewyans dhrog dres termyn holya dyllys, herwydh kuvyonoryon risk dalleth-linenn an pobel ha'n leha risk perthynek a dhrehedh dyskudhans ha ynkleth a-varr. Yw analog nivel-towl-keres NNT: NNT a wovynn pys a res bos *trettys* dhe lettya unn sewyans; NNS a wovynn pys a res tremena dres an fordh kowl *keres-ha-nessa-trettya* dhe'n dyskwedh.

## Perag yth yw posek

Rembold a dhallethas NNS yn 1998 yn arbennik may hyllo towlow keres bos keskomparys war an keth selys avel trettyansow, drefen bos leha risk perthynek keyn test keres a gudh dew dra na wra unn trettyans: risk dalleth-linenn an pobel a veu gelwys dhe vos kerghys, ha'n fakt may hyll an dhiwor oll kerghys dhegh kost an test ha'y fardel fals-pozityv, na ny yw yn unnik an nebes a dheu dhe brow. An yet kost-effeythusnans a Gussel Keres Kenedhlek an Rewlm Unys (gwelewgh [ekonomek keres](../ekonomek-screening/)) yw drehys war an dyffrans ma — towl keres gans leha risk perthynek kref yn pobel dhalleth-risk isel a yll hwath kavos NNS yn mylyow, hag y'n poynt na kost an towl rag sewyans lettys yw an govyn gwir.

## An Matematik

```
NNS = 1 / (risk_dalleth × leha_risk_perthynek)

risk_dalleth            = probabilita an sewyans y'n pobel kerghys dres
                           an termyn holya (0–1)
leha_risk_perthynek     = leha risk radh dyskudhys dre ynkleth a-varr
                           gwrys possybyl gans keres (0–1)

Kost an towl rag sewyans lettys = NNS × kost_rag_keres
```

Keskomparewgh yn dhirek gans [NNT](../niver-res-dhe-dhrettya/): NNS a blegh effeythusnans an kanel kowl keres → diagnosa → trettya yn unn niver, le may tybyr NNT seulabrys bos an klav diagnosys ha ow talleth trettya.

## Ensampel gwrys

Pobel gwarghys towl keres a'n jeves risk hwarvos dalleth-linenn 2% dres an termyn studhyans (`risk_dalleth = 0.02`), ha dyskudhans a-varr a dhrehedh 25% leha risk perthynek (`leha_risk_perthynek = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

200 den a res bos kerghys dhe lettya unn sewyans.

Orth £50 rag keres:
Kost an towl rag sewyans lettys = 200 × £50 = £10,000
```

An figyr £10,000 na a res bos pysys erbynn kost an sewyans y honan ha'n QALYs a vedhya kostya — an keth keskomparyans a wra [ekonomek lettyans](../ekonomek-lettyans/) rag towlow lettyans yn kemmyn.

## Kolm gans ynjynnyans medhelweyth

NNS yw "pys devnydhyer, hwarvos, po govynnow a res rewl dres kanel dyskudhans po triage dhe gachya unn gwir-pozityv a dal gweres" — dhirek a vri dhe systemow wolok diwar alert ha triage, le may kressa kondysyon-hedh ynkleth isel NNS yn kehaval avel hi a dhiskarr an talvos ragwelyek pozityv (gwelewgh [ekonomek keres](../ekonomek-screening/) ha [gwerthjyans AI klinikel](../gwerthjyans-ai-klinikel/)). Rewl wolok a res tretha 200 hwarvos rag pub kachya gwir a dal dhe wul yn unnik mar talvos an kachya dhe'n lyha 200 gweyth kost triage rag hwarvos — an keth aritmetik avel an ensampel yeghes a-ugh.

## Fowtys Kemmyn

- **Ankevi dhepyn risk dalleth-linenn**: an keth test po towl keres a'n jeves NNS dyffrans pur — ha kost-effeythusnans — yn pobel risk-uhel erbynn risk-isel. Na ledhewgh NNS heb lavar an pobel rag piw y veu kowntys.
- **Kowntya an dynomynador kamm**: NNS a gownt tus *kerghys*, na ny yw tus a dhasdyskudh pozityv po dalleth trettya — hi a dheg seulabrys effeythusnans an kanel kowl, ytho na dhal bythkweth bos keskomparys orth metrik kowntys yn unnik dres an re pozityv.
- **Keskomparya dres termynow holya dyffrans**: termyn holya berrha a ormens NNS yn kemmyn, drefen bos nebes hwarvosow gwelys y'n fenestri. Figuryow NNS yw keskomparadow yn unnik pan veu kowntys dres an keth hys holya.

## Fontynnow

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
