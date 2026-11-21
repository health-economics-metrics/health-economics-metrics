# Analys Tebelder

Analys tebelder determinestek (DSA) a janj unn tybyans pub treys a-dreus drevas gwiw rag gweles mars yw an diwedh a'n sev. An dyskwedhyans savonek yw diagram tornado: parametrys rannys herwydh pygemmys a dhrevas an sewyans.

## Perag yth yw posek

Pub model ekonomek yw drehevys war ervirow — termyn sawys, degemeryans, kostow unys. Asesyans teknologi yeghes a skon degemeres ervir poynt ("ROI yw 340%") heb dustuni bos an diwedh krev orth dyvvedhyans gwiw a-dro dhe'n yntrowyow. Diagram tornado a dherivas dhe'n dewisyer *pyth tybyans dhe wul gwestyon*: mars yw an kas ow oberi yn unnik pan fo an parametrer moyha dadhelys orth y vlew-tu ervyrys, pubonan a'n gwel yn ur.

Hemma yw an usadow moyha treusdroys dhort ekonomek yeghes dhe gasow busnes medhelweyth.

## An Matematik

Rag pub parametrer p gans drevas [p_isel, p_uhel]:

```
Sewyans_isel  = model(p = p_isel,  oll an re erel orth kas-bonn)
Sewyans_uhel  = model(p = p_uhel,  oll an re erel orth kas-bonn)
Swing(p)      = |Sewyans_uhel − Sewyans_isel|
```

Rannewgh parametrys herwydh swing; tevenewgh barrys a-dreus a-dro dhe sewyans kas-bonn. Gwythresow: DSA diw-fordh (janjya dew barametrer war gres), analys harth (kavos talvos parametrer may trowla an dewisyans).

## Ensampel gwrys

Gweres kodya AI rag 200 displegyer. Kas-bonn: lysans £39/displegyer/mis; 30 mynysen/displegyer/dydh sawys; kost leun £60/our; 220 dydh oberi.

```
Prow bledhynnyek kas-bonn = 200 × 0.5h × 220 × £60 = £1,320,000
Kost bledhynnyek          = 200 × £39 × 12         = £93,600
Netto kas-bonn            = £1,226,400
```

Tornado (unn parametrer pub unn termyn):

```
Termyn sawys 0.1–1.0 h/dydh: netto = £170,400 … £2,546,400  (swing £2.38M) ← a dhominya
Kost leun £40–£80/h:         netto = £786,400 … £1,666,400  (swing £0.88M)
Dydhyow oberi 200–240:       netto = £1,106,400 … £1,346,400 (swing £0.24M)
Lysans £30–£50/mis:          netto = £1,248,000 … £1,200,000 (swing £48k)
```

Analys harth: prow netto a dhrehedh sifra orth ogas **2.1 mynysen/dydh** sawys. An dewisyans yw heb tebelder dhe brys lysans ha a dhepen yn tien a'n ervir termyn sawys — ytho musurewgh hemma, na'n re erel. (Ha perthewgh kov bos an sewyans kapasita, na ny yw arghans — gwelewgh [arghans-rydhek erbynn nag-arghans-rydhek](../sawyansow-relasya-arghans-erbynn-heb-relasya-arghans/).)

## Kolm gans ynjynnyans medhelweyth

Ynjynnyoryon a wra hemma kyns dre anyen avel "pyth mar pegh yn kabm a-dro dhe X?" — DSA a'n gwra furvel ha gwelys. Gorrewgh diagram tornado yn pub arghyans arfow, plan kapasita, hag analys gwil-erbynn-prena. Treylya a wra argyansow a biw an breder gwir yn ynnenyow a pyth parametrer dhe vusurya — fenowgh dre bilot, may hyller prisya y dalvos y honan (gwelewgh [talvos gwaytys a wodhvos perfydh](../talvos-ragwelys-a-wodhvos-perfydh/)).

## Fowtys Kemmyn

- **Dravasow dewisys dhe wul bonkyans**: ±10% a-dro dhe bub yntrow heb perthi an tebelder gwir. Ervirow termyn sawys a dal ±80%; prisyow lysans ±10%.
- **Unn-pub-termyn a gollas ynterworkyow** — parametrys kevrysys (degemeryans ha termyn sawys) a'th eus othem a analys diw-fordh po [analys tebelder probabilistek](../analys-ansylder-probabilistek/) leun.
- **Gul an analys ha'y disprisya**: mars a leveri an tornado bos an kas ow tevi war unn niver medh, an kamm nessa yw musurya, na sinya.

## Fontynnow

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
