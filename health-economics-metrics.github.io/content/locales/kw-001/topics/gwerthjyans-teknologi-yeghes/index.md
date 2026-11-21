# Gwerthjyans Teknologi Yeghes (HTA)

HTA yw an fordh ffurfyek, sefsys may dhewis systemow yeghes mar kwra teknologi — drog, dyvis, po medhelweyth — talvos y bayi. Hi a gesmeska skoodhyans effeythusnans klinikel gans gwerthjyans ekonomek yn dann fordh dyllys, mandatek.

## Perag yth yw posek

Mar kwerthewgh dhe servis yeghes kenedhlek, korf HTA a yll dewis yn lyterel agas hedhyans marghas. Godhvos an fordh leel yw godhvos agas rewler-talvos gwir:

- **NICE (Pow Sows)**: apraisys statutek yn dann *kas kres* dyllys — QALYs dhort [EQ-5D](../eq-5d/), [perspektiv](../perspektiv-analys/) NHS+PSS, [diskontya](../diskontya-ha-preferans-termyn/) 3.5%, [PSA](../analys-ansylder-probabilistek/) ankenyth — dyskerthys erbynn £20k–£30k/QALY gans [mowtyow sewyansedh](../diffyk-qaly-ha-chanjyoryon-ankevri/); teknologis arbennik hwath bys £100k+ gans pysya.
- **ICER (US, na-governmental)**: derivasow skoodhyans gans *skoodhyer pris prow-yeghes* — an pris may vo produkt kost-effeythus orth $100k–$150k rag QALY/evLYG — devnydhys avel leverach negosyans; ha "alertys kyfarwodhyans" efekt budjet.
- **Kanada (CADTH → CDA-AMC)**: dasvyuwa dasbayans orth ≈CAD$50k/QALY; istorek a erghis lehewyth pris yn ~95% a'n arghadow.

## An Matematik

Nerth HTA nyns yw fordula mes **fordh mandatek**: pub arghadow a gownt an keth [ICER](../ratyo-kost-effeythusnans-ynkressys/) yn dann an keth rewlys kas-kres, ytho sewyansow yw keskomparadow dres produktow ha bledhydhyow. An kas kres a styr musur sewyans, instrument talvos, perspektiv, dewis keskomparyer, reyt diskont, horizon termyn, ha analys ansylder — ow tiberthi pub gradh a rydhses a yll sponser gwari.

## Ensampel gwrys

Terapi nombrek a dhelivr dhe wertjyans stil NICE:

```
Patrom: ΔC = +£450/klav, ΔE = +0.03 QALY → ICER = £15,000/QALY ✓ a-woeles £20k
Gwiryansow kas-kres:
  talvosow dhort EQ-5D-5L gans set talvos UK            ✓
  keskomparyer = fordh gweres a-lemmyn (na ny yw "heb ynkleth") ✓
  PSA: 71% probability kost-effeythus orth £20k         ✓ (derivys)
  mowt sewyansedh: shortfall a-woeles harthow ×1.2      — nagonan klamys
Erghyans: komyssyonya rutin, gans kuntell data bys-gwir.
```

Analys dewisys gans an sponser y honan a dhiskwedhas £9,000/QALY; an kas kres a'n kefyth dhe £15,000 dre dhiankenhe an keskomparyer onest. An bwlgh na yw *perag* may ma kasow kres.

## Kolm gans ynjynnyans medhelweyth

An artifakt treuswerthadow yw an **kas kres ynterna**: unn fordh mandatek rag oll kasow besneth ark/platform — keskomparyer dyllys, kostow unys standard (gwelewgh [tariff kenedhlek ha kostow unys](../tariff-kenedhlek-ha-kostow-unys/) rag an patrom), reyt diskont fast, analys ansylder ankenyth, patrom standard. "Dosser AMCP rag arkow" dhe gussel platform a wra arghadow keskomparadow ha gwari gweladow, kepar dell wra HTA rag medhegyth. Dallethewgh byghanna ages NICE: patrom dew-folen ha lyver-prisow dyllys a dhefs ages nagonan standard.

Rag fatell yw patrom HTA aml-kelgh gwrys yn gwir kohort-orth-kelgh, gwelewgh [Dasstunnans Kohort Markov](../dasstunnans-kohort-markov/).

## Fowtys Kemmyn

- **Trettya HTA avel formalita wosa kovadhow rewlyek** — kovadhow CE/UKCA/FDA a lever bos produkt sawder; HTA a dhesyd a dal *y bryna*. Bar dyffrans, skoodhyans dyffrans.
- **Gwil an patrom ekonomek wosa an previans** — jenerya skoodhyans a res bos dyssynyes dhort ordhenansow an kas kres.
- **Ankevi dyffransow pow**: ICER a yll bos arghansys y'n US orth $120k/QALY mes a fyll orth NICE orth £30k; towlewgh skoodhyans ha prisya rag pub marghas.

## Fontynnow

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
