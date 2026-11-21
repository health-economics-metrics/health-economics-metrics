# EQ-5D

EQ-5D yw holyador standard an bagas EuroQol rag musur kwalita bewnans kolmys dhe yeghes. Yw an instrument a dhelivr an pyssyansow talvos a-bervedh an moyha kowntyansow [QALY](../bledhen-bewnans-addasys-anabalder-2/) — kas kres NICE a'n hanow avel an musur dewisys rag oll.

## Perag yth yw posek

Kenyver produkt yeghes nombrek a vynn klamya QALYs a res talvosow dhort instrument gwiryes, hag EQ-5D yw an dyffolt yn Rewlm Unys ha lies Europa. Yw berr lowr dhe entra y'n app (5 govyn + skala wolok), hag a styr y hyll produktow medhelweyth kuntell data sewyans nivel-HTA avel sagh-efekt devnydh kemmyn — avantach strukturek orth drogow, a res studhyansow arbennik.

## An Matematik

EQ-5D-5L a wovynn unn govyn yn pub unn a **5 dimension** — kerdhes, omwith, gwrians usadow, poan/anes, pybyl/iselder — pub unn gorthypys orth **5 nivel** (nagonan lett … lettyans kefyn), ha skala analog wolok 0–100 (EQ VAS).

```
Stat yeghes = profil 5-digit, rag ensampel "21221"
Menegva talvos = set_talvos(profil)

An set talvos yw kewar dhe'n pow, dynnys dhort previansow time-trade-off /
dewis-diskret a'n pobel yn kres. Ankrow: 1 = yeghes kowl,
0 = marow; statys gwettha ages mernans yw negativ (isella set UK 3L: −0.594).
```

Aritmetik QALY a dheu nessa avel `hys × talvos`.

## Ensampel gwrys

App dasvewnans mysklys-skelet a vusur EQ-5D-5L orth an dallethans ha wosa 6 mis rag 1,000 devnydhyer a gowlwrug.

```
Talvos kres orth dalleth-linenn:  0.62
Talvos kres orth 6 mis:           0.71
Gwayn gwithys (tybyewgh) 1 bledhen: (0.71 − 0.62) × 1.0 = 0.09 QALY rag devnydhyer
```

Erbynn chanj bagas-kontrol a 0.03 (dasvewnans naturel), an gwayn attributable yw 0.06 QALY/devnydhyer. Monodhys orth £20,000–£30,000/QALY: **£1,200–£1,800 a dalvos yeghes rag devnydhyer a gowlwrug** — an niver a ankra negosyans pris an app gans peyer. (Diffransow klinikel a vri byghan rag an menegva EQ-5D yw yn kemmyn y'n bandys 0.03–0.08, ytho 0.06 yw tybyadow mes a res tremena keskomparyans kontrol; gwelewgh [sewyansow derivys gans klav](../sewyansow-derivys-gans-klav/).)

## Kolm gans ynjynnyans medhelweyth

- **Instrumentewgh.** EQ-5D orth kovskrifa ha dre intervalow holya yw nebes skrinyow UI; an dehweles yw skoodhyans nivel-HTA. Kewgh lisens dhort EuroQol (ankenyth, rydh rag nebes devnydhyow).
- **Devnydhewgh an set talvos ewn** rag an pow delivrans — an keth gorthypow a skor yn dyffrans yn UK erbynn Almayn erbynn Japan.
- **Dyskas dyssynyans**: EQ-5D a dhiskwedh fatell a re sondyans byghan standard ha fordula skorya dyllys menegva kehaval unn. Hemma yw an patrom rag pub menegva displegyer-kowethes kredadow ynwedh — instrument standard, pyssyansow dyllys, na ny yw teylu ad hoc. Gwelewgh [SPACE ha DevEx](../space-ha-devex/).

## Fowtys Kemmyn

- **Kyns/wosa heb keskomparyer** — dasvyrya dhe'n kres ha dasvewnans naturel a ormens gwaynyow es.
- **Bias gwythyas**: musura yn unnik devnydhyoryon a bes kesdhevnydhys (gwelewgh [synsyans ha dilanans](../synsyans-ha-kellys-devnydhyoryon/)).
- **Kemmysk versyonow 3L ha 5L po setys talvos** dres studhyansow — niverow systemek dyffrans.
- **Efektys gwarthel** yn pobel dhe-nebes tuchys: lies devnydhyer a skor ogas 1.0 orth dalleth-linenn, heb le dhe dhiskwedhes gwayn.
- **Trettya set talvos avel hy honan skoodhyans**: an niverow talvos a re set talvos o dynnys dhort an pobel dre sondyansow time-trade-off (po gwarthya dewis-selys) — gwelewgh [Dynnans Talvos Time Trade-Off (TTO)](../dyskudhans-utilita-kenwerth-termyn/) rag fatell.

## Fontynnow

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
