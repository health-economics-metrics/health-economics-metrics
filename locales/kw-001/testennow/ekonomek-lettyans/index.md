# Ekonomek Lettyans

Ekonomek ynkleth kyns klevyd dhe hwarvos po besa. An kavans penn yw gwrestel: **an moyha lettyans na sav mona** — hi a bren yeghes orth pris da. Dyskudhans NEJM selys Cohen, Neumann ha Weinstein a gavas le ages 20% a ynklethow lettyans kost-sawya nett; an remnant yw kost-effeythus orth an gwella.

## Perag yth yw posek

"Lettyans a sav mona" yw an klaym fals an moyha dasleverys yn polici yeghes, ha kasow besneth drehys warnodho yw distrowys gans ekonomegyon yeghes. An strukter onest: lettyans a gost mona lemmyn (keres pobel kowl, trettya faktours risk yn tus na vydhens klav bythkweth) ha dhasvyrya yeghes diwettha — peub-prys orth kost *da* rag QALY, ynwedh orth sawyans, nebes prys orth pris euthek. Godhvos pyth stat a'n jeves a yw an analys. An dyffrans a dal yn kenwerthek: produkt lettyans gwerthys avel "a sav mona dhe'n NHS" a wra gelwel awdit a fyll; gwerthys avel "a bren QALYs orth £4,000" a yll gwynnya war an keth fakts. Gwelewgh [ynkleth a-varr](../ynkleth-a-varr/) rag an versyon a-bervedh fordh. Kyns kostya towl lettyans, [radh attributable pobel](../radh-attributable-pobel/) a worthyp an govyn mesur kensa — pygen moy a fardel klevyd targettys a yll an faktour risk a gevtys an towl y dhyberth yn gwir.

## An Matematik

```
Kost nett lettyans (rag den) =
    kost ynkleth × oll trettys
  − kostow a-dhelergh hwithys × an nebes a vedhya bes
  (an dew diskontys — an kostow hwithys yw bledhydhyow pell; gwelewgh
   discounting-and-time-preference.md)

Kost-sawya a res: kost ynkleth < P(pesyans) × kost hwithys × faktour diskont
Kost-effeythus a res yn unnik: kost nett / QALYs gwynnys < threshold
```

An paradoks lettyans: kost ynkleth a multiplya dres an pobel kowl; prowyow a dhegh yn unnik dhe'n nebes kontrafaktel.

## Ensampel gwrys

App maynans gwerinas offrys dhe 100,000 dhegorryon a risk, £25/den/bledhen. Dres 10 bledhen hi a wra lettya 400 strokk (pub unn a gost £45,000 diskontys, ha 3 QALY kellys).

```
Kost:      100,000 × £25 × 10 bl (diskontys ≈ ×8.3) ≈ £20.8M
Gwyskyans: 400 × £45,000 = £18.0M
Kost nett ≈ £2.8M — NA kost-sawya

QALYs gwynnys = 400 × 3 = 1,200
Kost rag QALY = 2.8M / 1,200 ≈ £2,300/QALY — kost-effeythus yn splann
```

An keth towl, an dew wiryonedh: hi a goll £2.8M arghans ha bren yeghes orth deg-rann a threshold NICE. Arghansewgh war an nessa niver; na bromisewgh bythkweth an kensa.

## Kolm gans ynjynnyans medhelweyth

Kwalita shift-left yw ekonomek lettyans, gans an gwarnyans. Dasvyuwow, previansow, ha analys statek a dhevnydh kost dhe *bub* chanj dhe gachya kudynnow yn an nebes a vedhya dos dhe hwarvosow produksyon. An kromm kost-fowt (10–100× dre stag) a wra rol kostow strokk — hag an kowlwrans onest a vyrwhes yeghes: shift-left yw peub-prys kost-*effeythus*, na ny yw awtomatek kost-*sawya*, drefen bos an moyha kudynnow merkys na vedhons bythkweth hwarvosow (kudyn an nebes kontrafaktel). Kowntewgh: kost yet oll rag termyn erbynn hwarvosow hwithys yn gwir × kost hwarvos — an keth strukter ensampel, gans [NNT](../niver-res-dhe-dhrettya/) avel unnys rag kachya.

## Fowtys Kemmyn

- **Klamya sawyansow kost pan wra skoodhyans kost-effeythusnans yn unnik** — an pegh dyssynyek a hwithra lettyans yn an dew dhomen.
- **Gwyskyansow a-dhelergh heb diskontya**: prowyow 15 bledhen pell orth talvos kenedhel.
- **Ankevi kostow gor-diagnosa/gor-drettya**: lettyans a gav ynwedh pseudo-klevyd — gwelewgh [ekonomek keres](../ekonomek-screening/).

## Fontynnow

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
