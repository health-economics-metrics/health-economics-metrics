# Trothwyon Parodrwydd i Dalu

Trothwy parodrwydd i dalu (WTP) yw'r uchafswm y bydd penderfynwr yn ei dalu fesul uned o enillion iechyd — y llinell sy'n troi [ICER](../incremental-cost-effectiveness-ratio/) yn benderfyniad mabwysiadu/gwrthod.

## Pam mae hyn yn bwysig

Y trothwy yw lle mae economeg iechyd yn peidio â bod yn fesur ac yn dod yn bolisi. Mae gan bob system genedlaethol un, yn benodol neu'n ymhlyg, ac mae gwybod y rhif lleol yn dweud wrthych yn union sut i brisio honiad gwerth iechyd:

| Corff | Trothwy (fel yr ymchwiliwyd, 2024–2025) |
|---|---|
| NICE (Lloegr) | £20,000–£30,000 fesul QALY; trothwy penderfynu cyfartalog empirig ≈ £24,400 (2022–24); mae addasyddion difrifoldeb yn codi'r nenfwd effeithiol i ~£36k–£51k; technolegau hynod arbenigol hyd at £100k+ |
| ICER (UDA, an-lywodraethol) | Meincnodau pris $100,000–$150,000 fesul QALY/evLYG; yn adrodd amrediad o $50k–$200k |
| Canada (CADTH / CDA-AMC) | Trothwy gweithredol o ≈ CAD$50,000 fesul QALY |
| WHO-CHOICE (hanesyddol, byd-eang) | 1–3× Cynnyrch Mewnwladol Crynswth (GDP) y pen fesul DALY a osgowyd (bellach yn cael ei annog i beidio â'i ddefnyddio am ei fod yn rhy fras) |
| Ochr gyflenwi empirig y DU (Claxton et al.) | ≈ £13,000 fesul QALY a ddadleolwyd mewn gwirionedd ar ffin y GIG |

## Y Fathemateg

Mae'r trothwy λ yn rhan o bob rheol benderfynu:

```
Mabwysiadu os ICER = ΔC/ΔE < λ
Yn gyfatebol: mabwysiadu os NMB = λ×ΔE − ΔC > 0
```

Dwy ddamcaniaeth ynghylch beth *yw* λ:

- **Ochr y galw**: yr hyn y mae cymdeithas yn barod i'w dalu am iechyd (dyfarniad gwerth).
- **Ochr y cyflenwad**: yr iechyd y mae'r gyllideb yn ei gynhyrchu ar hyn o bryd ar y ffin (maint empirig — ~£13k/QALY Claxton). Os yw'r λ a ddefnyddir ar gyfer penderfyniadau'n fwy na chyfradd ochr y cyflenwad, mae cymeradwyo technoleg newydd yn dadleoli mwy o iechyd nag y mae'n ei ychwanegu.

## Enghraifft Waith

Mae eich therapiwtig digidol yn cyflawni 0.05 QALY fesul claf a drinnir am gost net (pris minws gwrthbwysiadau) o £800.

```
ICER = 800 / 0.05 = £16,000 fesul QALY
```

- Lloegr: o dan £20k → gellir ei ariannu. Y pris amddiffynadwy uchaf: pan fo λ = £20,000, pris_uchaf = 0.05 × 20,000 + gwrthbwysiadau = £1,000 + gwrthbwysiadau.
- Fframio masnachol UDA ar $150k/QALY: mae'r pris seiliedig ar werth yn llawer uwch.
- Trothwy gwlad o $4,000 CMC y pen: rhaid i'r un cynnyrch gostio o dan ~$200 net.

Yr un cynnyrch, tri marchnad, tri phris — y trothwy *yw'r* model prisio. Dyma brisio seiliedig ar werth, wedi'i redeg yn ôl o λ.

## Cysylltiad Peirianneg Feddalwedd

Mae gan bob sefydliad peirianneg λ ymhlyg: y rhwystr y mae'n ariannu offer yn ei erbyn fesul awr-beiriannydd a arbedwyd. Mae ei wneud yn benodol — "rydym yn ariannu unrhyw beth o dan £40 fesul awr-beiriannydd credadwy a arbedwyd" — yn galluogi cymharu tabl cynghrair buddsoddiadau platfform, yn union fel y mae tablau cynghrair cost-fesul-QALY yn rhestru gwariant iechyd. Mae'r wers ochr-gyflenwad hefyd yn trosglwyddo: eich gwir λ mewnol yw'r hyn y mae eich ôl-groniad *presennol* yn ei gynhyrchu ar y ffin, nid yr hyn y mae arweinwyr yn dweud yw gwerth amser.

## Peryglon

- **Siopa trothwyon** ar draws awdurdodaethau neu ddyfynnu nenfwd HST ar gyfer cynnyrch cyffredin.
- **Trin λ fel llawr pris**: mae clirio'r trothwy'n angenrheidiol, nid yn ddigonol — gall [effaith ar y gyllideb](../budget-impact-analysis/) barhau i suddo cynnyrch sy'n fforddiadwy fesul uned.
- **Anwybyddu bod trothwyon yn symud**: mae addasyddion difrifoldeb NICE (2022) ac adolygiadau cyfnodol yn newid λ effeithiol; dyddiadwch eich honiadau.

## Ffynonellau

- NICE: newidiadau i drothwyon cost-effeithiolrwydd. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Dadansoddiad empirig o drothwy NICE, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- Fframwaith Asesu Gwerth ICER 2023. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
