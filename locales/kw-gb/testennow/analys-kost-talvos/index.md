# Analys Kost-Talvos (CUA)

CUA yw analys kost-effeythusnans gans **sewyans kemmyn, pysys dre dhewis** — peub-prys an [QALY](../bledhen-bewnans-addasys-anabalder-2/) (po [DALY](../bledhen-bewnans-addasys-anabalder/) hwithys). Drefen bos an unnys sewyans unyversel, CUA a yll keskomparya ynklethow dres klevydhyow pur dyffrans.

## Perag yth yw posek

Servis yeghes kenedhlek a res dewis ynter drog kanser, app yeghes brys ha robot kirurjek dhort unn budjet. Unnys naturel ny yllons aga keskomparya; QALYs a yll. CUA yw ytho an fordh kas-kres orth NICE ha'n moyha korfow HTA: y diwedh — kost rag QALY, dyskerthys erbynn [threshold](../harthow-bodh-dhe-dhalleth/) — yw an tra nessa dhe reyt chanj unyversel a'n jeves polici yeghes. Mar a vynnowgh agas medhelweyth arghansys *yn le a tra aral*, CUA yw an arena.

## An Matematik

```
ICUR = ΔKost / ΔQALYs      (an ICER gans QALYs avel unnys efekt)

ΔQALYs = Σ (hys_i × talvos_i)_nowydh − Σ (hys_i × talvos_i)_koth
```

Talvosow diwar instrumentys gwiryes ([EQ-5D](../eq-5d/)); kostow ha QALYs an dew [diskontys](../diskontya-ha-preferans-termyn/) orth 3.5% (kas-kres NICE); ansylder dre [PSA](../analys-ansylder-probabilistek/).

## Ensampel gwrys

App CBT rag gwari-bryder kres erbynn rol gortos rag terapi dhirek, rag klav:

```
Kostow:  lisens app + skoodhyans     £250
         terapi displasys            −£680   (40% a'n devnydhyoryon na res dhedha)
         ΔC = 250 − 680 = −£430 (a sav mona)

QALYs:   6 mis orth talvos 0.76 yn le 0.68 hag ow kortos
         ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALY
```

ΔC < 0 ha ΔE > 0: an app **a dhominya** — gwell ha es, heb res a ratyo. Mar nag o an tybyans displasyans terapi marnas 10%, ΔC = 250 − 170 = +£80, ha ICUR = 80 / 0.04 = **£2,000/QALY** — hwath pell a-woeles £20,000. An kas a dhiw hag yn tybyans an pyth a veu tennys: yw an pyth a'n jeves CUA krev (ha'n [diagram tornado](../analys-tebelder/) a'n previa).

## Kolm gans ynjynnyans medhelweyth

An tybyans downder a CUA — *unn unnys kompozyt, pysys dre dhewis, dhe geskomparya tus heb kehavalder* — yw an patrom rag keskomparya investyansow ynjynnyans dyffrans (sawder erbynn kevrinans displegyer erbynn fydhyansri). An dewisyow onest yw po unnys kompozyt defendyek (skant) po [tabel kost-sewyans](../analys-kost-sewyans/) splann (kemmyn). An pyth a wra CUA gwarnya erbynn yw an kompozyt fals: "skor efekt" pysys a'n pyssyansow a veu tunys wosa an hwarvos dhe wul an dewis dewisys dhe wynnya. Ekonomek yeghes a wrug dekvledhydhyow a standardya dyskwedhyans talvos yn tyller dhe'n pyssyansow dos kyns an keskomparyans.

## Fowtys Kemmyn

- **Gwayn talvos a-woeles an synsyans an instrument** (gwelewgh an diffrans klinikel byghan y'n [sewyansow derivys gans klav](../sewyansow-derivys-gans-klav/)) — ΔE byghan × pobel bras yw tro klassek a dhiwyskyans.
- **Ankevi displasyans kyrhes keskomparyer** — an kost brassa rag produktow nombrek yw menowgh pyth a wrons dhe wul le.
- **Mapya skoryow heb dewisyans dhe dalvosow** gans treuswerthadow heb gwiryans.

## Fontynnow

- Gerlyver York Health Economics Consortium: analys kost-talvos. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
