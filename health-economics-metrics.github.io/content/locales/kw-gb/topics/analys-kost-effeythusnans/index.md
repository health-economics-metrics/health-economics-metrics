# Analys Kost-Effeythusnans (CEA)

CEA a geskomparya kostow ynklethow kehaval erbynn unn sewyans musurys yn **unnys naturel** — bledhydhyow bewnans, kasow dyskudhys, kemmyskow hwithys, mmHg a wrians gwerinas dhe veu le. Y diwedh yw kost rag unnys sewyans.

## Perag yth yw posek

CEA yw an keskomparyans kres pan wra oll an dewisyow an keth sewyans. Hi a worthyp "pyth a'n fordhow ma dhe dhrehedh X yw an devnydh gwella a vona?" — mes *na ny* "a dal X dhe vos drehedhys hag oll?" (hemma a res [analys kost-prow](../analys-kost-prow/)) ha *na ny* "fatell wra X keskomparya orth kynsegyans heb kolm?" (hemma a res [analys kost-talvos](../analys-kost-talvos/) ha sewyans kemmyn avel an QALY).

## An Matematik

An statystyk keskomparya yw an [ICER](../ratyo-kost-effeythusnans-ynkressys/) yn unnys naturel:

```
ICER = (Kost_A − Kost_B) / (Efekt_A − Efekt_B)
     = £ rag kas ynwedh dyskudhys / dewis-in hwithys / h.a.
```

Fordh: dyssynyewgh an unnys sewyans; kostewgh pub dewis dhort an keth [perspektiv](../perspektiv-analys/) dres an keth [horizon termyn](../horizon-termyn/); dyberthewgh dewisyow dominys ([harth effeythusnans](../dominans-ha-harth-effeythusnans/)); kowntyewgh ratyow ynkressys a-hys an harth.

## Ensampel gwrys

Tri fordh dhe gavos fibrilasyon atriel na veu diagnostys yn pobel a 100,000:

```
Dewis                     Kost        Kasow kavys
Gwirya pols a-dro         £150,000       300
Hwarvosow keres farmasi   £400,000       520
Keres diwar gwisk         £900,000       610

ICER farmasi erbynn pols:  (400k−150k)/(520−300) = £1,136 rag kas ynwedh
ICER gwisk erbynn farmasi: (900k−400k)/(610−520) = £5,556 rag kas ynwedh
```

A vo £5,556 rag kas ynwedh "talvosek" a dhepyn war talvos kas kavys (lettya gwythres a-dhelergh) — CEA a rank an dewisyow mes an dewisyans degemeryans a res an talvos estern na. Merkewgh bos kost *kres* rag kas an dewis gwisk (900k/610 = £1,475) da ha hevel; an £5,556 *ynkressys* yw an niver onest rag an dewisyans ystynna.

## Kolm gans ynjynnyans medhelweyth

CEA yw an patrom ewn pan wra dewisyow an keth sewyans: kost rag test flaky dhiswres dres tri fordh a dhaspressa; kost rag hwarvos hwithys dres gwerthoryon observabilita; kost rag displegyans sewenys dres arkitekturow CI. An dyskyplin a arghas — unn unnys sewyans dyllys, ratyow ynkressys (na ny yw kres), dewisyow dominys dyberthys kensa — a ladh an moyha keskomparyans gwerther drog kyns dallethans an kewsel a bris.

## Fowtys Kemmyn

- **Keskomparya dewisyow gans sewyansow dyffrans** ("kasow kavys" erbynn "plesyans") yn unn CEA — hemma a res [analys kost-sewyans](../analys-kost-sewyans/) po sewyans kemmyn.
- **Ratyow kost-effeythusnans kres** diskwedhys le may res ynkressys (ensampel an gwisk a-ugh).
- **Unnys sewyans dewisys rag ormens**: "alertys jenerys" yw gwrians, na ny yw sewyans; goulewgh unnys a dheg talvos.

## Fontynnow

- CDC POLARIS: analys kost-effeythusnans. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- Gerlyver York Health Economics Consortium. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
