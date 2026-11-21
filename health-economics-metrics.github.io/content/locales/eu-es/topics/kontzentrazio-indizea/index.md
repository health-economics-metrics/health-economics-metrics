# Kontzentrazio-indizea (Concentration Index)

Kontzentrazio-indizea (Wagstaff, Paci, van Doorslaer, 1991) osasun-aldagai bateko desberdintasun sozioekonomikoaren neurri estatistiko estandarra da, −1etik 1era doana. Negatiboak esan nahi du osasun-aldagaia sozioekonomikoki desabantailan daudenen artean kontzentratzen dela, positiboak hobeto daudenen artean, eta zeroak gradiente sozioekonomiko koherenterik ez dagoela — banaketa ez-berdinari buruzko susmoa zenbaki bakar eta alderagarri bihurtzen du.

## Zergatik axola duen

Programa bat agregatuan eraginkorra ager daiteke eta, hala ere, bere onura ia osorik lehendik hobeto zeudenei ematea. Horrelako kezka banatzaileak dira [irismena eta ekitatea](../irismena-eta-ekitatea/)-k deskribatiboki jarraitzen dituenak — pobretasun-kintilaren arabera estratifikatutako irismena, goiko eta beheko taldeen arteko ekitate-hutsunea — baina taula estratifikatu batek ezin du joera-lerro bakar batean konprimitu, eta ezin da erraz alderatu eskala desberdinetan neurtutako bi esku-hartze erabat desberdinen artean. Kontzentrazio-indizeak biak konpontzen ditu: edozein osasun-aldagairentzat eta edozein sailkapen sozioekonomikoren aurka modu berean kalkulatzen da, beraz osasun-zerbitzu nazional batek jarraitu dezake zerbitzu digital jakin baten desberdintasuna zabaltzen edo murrizten ari den bertsioz bertsio, eta aplikazio baten hedapenaren ekitate banatzailea, esaterako, kribatze-programa batenarekin eskala normalizatu berean alderatu.

## Matematika

```
CI = (2 / mean(health_values)) × Cov(health_values, socioeconomic_ranks)

Cov(X, Y) = mean(X × Y) − mean(X) × mean(Y)   (populazio-kobariantza)

socioeconomic_ranks: pertsona bakoitzaren sailkapen frakzionala banaketa
sozioekonomikoan, [0, 1] tartean (0 = desabantaila handiena, 1 = abantaila handiena;
multzokatutako/bandatutako datuetarako, ohikoki talde bakoitzaren erdiko puntuaren sailkapena)
```

Hau "kobariantza-formula erosoa" da (O'Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) — Kontzentrazio-indizea behaketa parekatuetatik zuzenean kalkulatzeko praktikarien lasterbide estandarra, kontzentrazio-kurba aurretik marraztu eta integratu gabe.

## Adibide landua

Norberak jakinarazitako osasun-puntuazioa (1 = txarrena, 4 = onena) lau kuartil sozioekonomiko berdinetan behatua, bakoitza bere kuartilaren erdiko sailkapenarekin adierazita:

```
health_values        = [1.0, 2.0, 3.0, 4.0]
socioeconomic_ranks  = [0.125, 0.375, 0.625, 0.875]

mean(health_values)        = 2.5
mean(health × rank)        = mean([0.125, 0.75, 1.875, 3.5]) = 1.5625
mean(socioeconomic_ranks)  = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

`0.25` positibo batek esan nahi du osasun-puntuazio hau taldeko abantaila sozioekonomikoa dutenen artean kontzentratzen dela — puntuazio altuagoko inkestatuak sailkapenaren muturreko hobeen aldera okertzen dira.

## Software ingeniaritzarekin lotura

Hau ekonomian orokorrean erabiltzen den kobariantzan oinarritutako desberdintasun-neurketa bera da (Gini koefizientearen lehengusua), eta software-produktu baten onurak lehendik abantailan dauden erabiltzaile-segmentuetan kontzentratzen diren ala modu ekitatiboan banatzen diren neurtzera mapatzen da — [irismena eta ekitatea](../irismena-eta-ekitatea/)ren (RE-AIMen "irismen" dimentsioa) hedapen zuzena, hutsune deskribatu baten ordez neurri estatistiko formal bihurtuta. Irismena-eta-ekitateak estratu bakoitzeko inpaktua jakinarazten duen lekuan, Kontzentrazio-indizeak banaketa osoa zenbaki sinatu bakar batean konprimitzen du, bertsioen artean KPI bakar gisa jarraitzeko egokia — praktikoa dashboard batentzat, non banaketa estratifikatu osoa ez den praktikoa.

## Tranpak

- **Zeinu-konbentzioaren noraeza**: zeinua osasun-aldagaia eta sailkapena nola definitzen diren araberakoa da — bietako edozein irauliz zeinua irauli egiten da, beraz erabilitako konbentzioa beti esplizituki adierazi behar da jakinarazitako edozein baliorekin batera.
- **Muga-sailkapenak erdiko puntuaren ordez**: multzokatutako edo bandatutako datu sozioekonomikoek (adib. kintilak) talde bakoitzaren sailkapen frakzionala bere *erdiko puntuan* erabili behar dute, ez bere mugan, bestela indizea alboratua dago.
- **"Zeroren ingurua" "desberdintasunik ez" gisa irakurtzea**: zeroren inguruko Kontzentrazio-indizeak "gradiente sozioekonomiko koherenterik ez" esan nahi du, ez "desberdintasunik ez" zentzu absolutuan — norabide desberdinetako desberdintasunek elkar ezaba dezakete.

## Iturriak

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
