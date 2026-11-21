# Menegva Kuntellyans

Menegva Kuntellyans (Wagstaff, Paci, van Doorslaer, 1991) yw an musur statistek standard a dhisparthek sosioekonomek yn variabyl yeghes, a dhre −1 bys 1. Negativ a styr bos an variabyl yeghes kuntellys ynter an re dhiswythus sosioekonomek, pozitiv a styr y vos kuntellys ynter an re wella-ostys, ha nul a styr nag eus gradh sosioekonomek kesson — hi a dreyl amheusyans a dhasparth anheveleb dhe unn niver kehaval.

## Perag yth yw posek

Towl a yll hevel effeythus yn kres ha hogen delivra y brow agas ollgemmys dhe dus a veu gwell-ostys seulabrys. Pryderyow dasparth a'n par ma yw an pyth a wolok [hedhyans ha kehaval](../hedhes-hag-ekwita/) yn deskrifyek — hedhyans strethys dre kwintilys diwettha, bwlgh kehaval ynter an re uhella ha'n re isella — mes tabel strethys ny yll bos kuntellys dhe unn linenn tuedh, ha ny yll bos keskomparys yn es ynter dew ynkleth dyffrans musurys war skalow dyffrans. An Menegva Kuntellyans a worthyp an dew: hi yw kowntys yn kehaval rag pub variabyl yeghes erbynn pub rankya sosioekonomek, ytho servis yeghes kenedhlek a yll holya a wra anheveleb servis nombrek spesifek ystynna po dynnya relys wosa relys, ha keskomparya justys dasparth delivrans app erbynn towl keres, rag ensampel, war an keth skala normalizys.

## An Matematik

```
CI = (2 / kres(talvosow_yeghes)) × Cov(talvosow_yeghes, rankow_sosioekonomek)

Cov(X, Y) = kres(X × Y) − kres(X) × kres(Y)   (kovariyans pobel)

rankow_sosioekonomek: rank rann pub unn dhe'n dasparth sosioekonomek,
yn [0, 1] (0 = moyha diswythus, 1 = moyha gwell-ostys;
rag data rynnys/bandys, dre usadow rank kres pub rynn)
```

Hemma yw "fordula kovariyans es" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Bank an Bys 2008) — an shortkut standard rag oberoryon dhe gowntya an Menegva Kuntellyans yn dhirek diwar gwelyansow keskevrys, heb tresa ha kesradhya dann kromm kuntellyans kyns.

## Ensampel gwrys

Skor yeghes da hunnoryes (1 = gwettha, 4 = gwella) gwelys dres peswar kwartil sosioekonomek kehaval, pub unn diskwedhys gans y rank kres-kwartil:

```
talvosow_yeghes      = [1.0, 2.0, 3.0, 4.0]
rankow_sosioekonomek = [0.125, 0.375, 0.625, 0.875]

kres(talvosow_yeghes)      = 2.5
kres(yeghes × rank)        = kres([0.125, 0.75, 1.875, 3.5]) = 1.5625
kres(rankow_sosioekonomek) = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

`0.25` pozitiv a styr bos an skor yeghes ma kuntellys ynter an bagas sosioekonomek gwell-ostys — an dhevnydhoryon uhel-skorys a hweyt dhe benn gwell-ostys an rankya.

## Kolm gans ynjynnyans medhelweyth

Hemma yw an keth musur disparth diwar kovariyans devnydhys yn ekonomek yn kemmyn (kesyn dhe gofyans Gini), hag a vapya dhe vusura a vo prowyow a'n produkt medhelweyth kuntellys ynter rannow devnydhyoryon seulabrys gwell-ostys yn le skoodhys yn kehaval — ystynnans dhirek a [hedhyans ha kehaval](../hedhes-hag-ekwita/) (dimension "hedhyans" RE-AIM) dhe vusur statistek ffurfyek yn le bwlgh deskrifys. Le may derivyr hedhyans-ha-kehaval efekt rag pub strata, an Menegva Kuntellyans a gonpresa an dasparth oll yn unn niver arwodhyes, a dal avel KPI unn holys dres relysow — kevrenn rag dashbord, le na yll dismyskans strethys kowl.

## Fowtys Kemmyn

- **Dryft konvensyon arwodh**: an arwodh a dheppyn orth fatell yw an variabyl yeghes ha'n rank diskwedhys — treylya yn unn a dreyl an arwodh, ytho an konvensyon devnydhys a res bos derivys pup-prys a-ryb pub talvos derivadys.
- **Rankow harth yn le rankow kres**: data sosioekonomek rynnys po bandys (rag ensampel kwintilys) a res devnydhya rank rann pub bagas orth y *gres*, na ny yw y harth, po'n menegva yw biasys.
- **Redya "ogas dhe nul" avel "nag eus disparth"**: Menegva Kuntellyans ogas dhe nul a styr "nag eus gradh sosioekonomek kesson", na ny yw "nag eus disparth" yn styr absolut — disparthow a dhasparth yn tuyow dyffrans a yll dhiwysya aga honan.

## Fontynnow

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — an lyver-dornlyver oberyer standard, fenten an fordula kovariyans es devnydhys omma. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
