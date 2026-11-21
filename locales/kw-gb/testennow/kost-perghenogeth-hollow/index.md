# Kost Perghenogeth Hollow (TCO)

TCO yw kost leun system dres y vewnans: kavos po drehevel, kesunnyans, gweythresans, synsyans, skoodhyans, dyskans, ha dismeythya. An linenn-vonn anesy: **synsyans yw 50–80% a TCO medhelweyth** — ogas teyr-rann a gost oll-bewnans a dheu *wosa* delivrans.

## Perag yth yw posek

Asesyans teknologi yeghes a dhyskas pell yn-mes na ny yw pris medhegieth y gost — gweres, monitoryans ha rewlya droglamow a berth oll y'n model. Kasow busnes medhelweyth a gonta kost drehevel/lysans yn unnik a dhasober fowt pris-medhegieth naïv ha dhe-dhisprisya kost rann pub [ICER](../ratyo-kost-effeythusnans-ynkressys/) ha [efekt budjet](../analys-efekt-budjet/) may fedhons. Rag prokuryans NHS, dyssyplin TCO a wra klaym kost-effeythusnans produkt digidel onest — ha le may ma dewisyansow ankostys-hwarvedhys ow kelli.

## An Matematik

```
TCO = kost dallethva (drehevel/lysans + kesunnyans + treuslywyans data + dyskans)
    + Σ_t [oberyans + synsyans + skoodhyans + infrastrukter + gwellheansow
           + konformita/sawder]_t / (1 + r)^t
    + kost dismeythya (kuta, tennans data, ponya kesparow)

Horizon: 3–5 bledhen kenwerthus, oes-system rag infrastrukter klinikel
r: 3.5% sektor poblek (Green Book), 8–12% kenwerthus
Linennow-bonn: synsyans bledhynnyek ≈ 15–20% a gost drehevel; ~78% a
TCO oll-bewnans wosa delivrans; hepkor dismeythya ha klosyans-gwerther a'n pris y honan.
```

## Ensampel gwrys

Dyw dewisyans rag system erbynn-medhek elektronek, horizon 5 bledhen:

```
                          SaaS gwerther   Drehevel ynterel
Bledhen 0 (lysans/drehevel) £250,000      £900,000
Kesunnyans + dyskans        £180,000      £150,000
Ponya bledhynnyek (bl 1–5)  £120,000/bl   £190,000/bl  (hostya + 1.5 FTE synsyans)
Kuta/dismeythya             £60,000       £30,000

TCO heb diskont             £1,090,000    £2,030,000
```

Ervir ynjynnyans an dewisyans drehevel (£900k) o 44% yn unnik a'y TCO gwir — hag ervirow drehevel aga honan a dres fenowgh 30–40% (gwelewgh [drehevel erbynn prena](../gwil-erbynn-prena/)). Marnas an dewisyans ynterel a re *sewyansow* dyffrans yn gwir, lojik [minimya kost](../analys-minimya-kost/) a dal ha SaaS a wayn dre ~£940k.

## Kolm gans ynjynnyans medhelweyth

Ynjynnyoryon a dhisprisya data synsyans aga maes aga honan pan wrons argya rag drehevyansow: rewl synsyans 15–20%-a-gost-drehevel a styr pub system £1M a gevrys yn tawesek £150–200k/bledhen a gapasita dhe-dheu — dalgh a dal bos war an keth balans-skeus kodhys avel [dalgh teknegel](../dalgh-teknegel/). TCO yw ynwedh hanter-kost pub metrik y'n repo ma: kost rag delivrans, [ekonomek unys koloven](../ekonomek-unys-skeul/), ha dyssyplin an dynnerydh a wra HTA dhe skoodhyoryon medhegieth. Pan fo prisyans dha broduktya gwestynnys, keskomparyans TCO gans kostow ponya gwir an hen yw fenowgh an dasarghans gwella. Figur TCO liesbledhen kepar ha'n re a-ugh yw sommyans a lies linenn kost dres termyn — gwelewgh [kuntellyans kost sawys-mona](../kuntell-kost-sawys-arghans/) rag perag y tal an sommyans bos dekvedh-ewn y'n le a berthy-fluttya pan res dhe fodel kesunnya dhe'n peni, ha [dasrannans kost eksakt-sens](../dyssehtyans-kost-ewn-kans/) rag dyberthi hollow TCO dres kresow-kost heb kelli peniow.

## Fowtys Kemmyn

- **Ankerya a'n kost delivrans**: keskomparya dewisyansow orth kost bledhen-0 pan wra an rannans treylya orth bledhen 3.
- **Fugyans ober-ynterel-rydh**: synsyans ynterel kostys orth sifra drefen "an skuadron yw paydhys kyns" — gwelewgh [kost dewis](../kost-an-dewis/).
- **Disprisya kostow kuta**: kyhydhyans data, tennans kontrakt, ha ponya kesparow yw an le may ma SaaS "ankostys" ow kostya.
- **Terfynyow horizon dihevelep**: keskomparya TCO SaaS 3-bledhen erbynn amortizyans drehevel 10-bledhen (gwelewgh [horizon termyn](../horizon-termyn/)).

## Fontynnow

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
