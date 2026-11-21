# AA klinikoaren ebaluazioa (Clinical AI Evaluation)

AA kliniko edo diagnostiko eredu bat ebaluatzeko oinarrizko estatistikak: sentsibilitatea, espezifikotasuna, AUROC, balio predikatiboak eta kribatu beharreko kopurua. Ikasgai ekonomiko nagusia: **AUROC bikain batek ez du hedapen kostu-eraginkorra bermatzen** — balioa funtzionamendu-puntuaren, prebalentziaren eta positibo bakoitzaren ondoren gertatzen denaren araberakoa da.

## Zergatik axola duen

Erregulatzaileek (FDA, MHRA) AA klinikoa **funtzionamendu-puntu blokeatu** batean baimentzen dute — sentsibilitate/espezifikotasun bikote zehatz bat (adib., FDAk baimendutako lehen erretinopatia diabetiko autonomoaren sistema: sentsibilitatea %87,2, espezifikotasuna %90,7 bere saiakuntza giltzarrian). Osasun-ekonomialariek orduan zehaztasun-metrikek erantzun ezin duten galdera egiten dute: zure hedapen-populazioaren prebalentzian, zenbat *kostatzen* du detekzio bakoitzak, eta merezi al du horren arabera jarduteak? Erretinopatia-kribatzeko AAren ebaluazio ekonomiko batek (npj Digital Medicine 2024) erakutsi zuen zehaztasun handiagoak bakarrik ez zuela kostu-eraginkortasuna bermatzen deribazio-kostuak zenbatu ondoren.

## Matematika

```
Sentsibilitatea = TP / (TP + FN)        — benetan positiboen artean, harrapatutakoen zatia
Espezifikotasuna = TN / (TN + FP)        — benetan negatiboen artean, baztertutakoen zatia
AUROC           = P(ereduak ausazko positibo bat ausazko negatibo bat baino goragoko sailkatzea)
                  0.5 zoria … 1.0 perfektua; atalaseaz independentea — eta
                  beraz hedapen-erabakirako nahikoa ez

PPV = TP / (TP + FP)   ← prebalentziaren menpekoa (Bayes); arraroa denean erortzen da
NPV = TN / (TN + FN)

NNS  ≈ 1 / (prebalentzia × sentsibilitatea)       — benetako kasu bat aurkitzeko kribatuak
Benetako kasu bakoitzeko kostua = programaren kostua / TP      — azken emaitza ekonomikoa
```

## Adibide landua

Eredu bera, bi ingurunetan — sentsibilitatea %90, espezifikotasuna %93:

```
Espezialitate-kontsulta (prebalentzia %20):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ %76  → 4 alertatik 3 benetakoak

Lehen mailako arreta (prebalentzia %1):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ %11.5
  → 9 alertatik 8 faltsuak; azterketa £350 bakoitza:
  benetako kasu bakoitzeko kostua = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 aurkitutako kasu bakoitzeko
```

Eredu bera, ekonomia erabat desberdina — horregatik da gune-espezifikoko ebaluazioa gai erregulatzailea eta horregatik da "gure ereduak 0.95 AUROC du" kasu ekonomiko baten hasiera, ez amaiera. Ikus [kribatzearen ekonomia](../screening-aren-ekonomia/) programa osoaren matematikarako.

## Software ingeniaritzarekin lotura

AA kliniko bat eraikitzen edo erosten duten ingeniarientzat: **bidali nahasketa-matrizea hedapen-prebalentzian**, ez ROC kurba bakarrik; **utzi atalasea erabaki ekonomikoa izan dadin** — sent/esp trukeak kostu esperoa minimizatu behar du (galdutako kasuak × galdutakoaren kostua vs alarma faltsuak × azterketa-kostua), ez erreferentziako estatistika bat maximizatu; eta ezagutu matematika bera zure tresnetan — alerta-sistemak, anomalia-detektagailuak eta segurtasun-eskanerrak prebalentzia baxuko gertaera-fluxuen gaineko proba diagnostikoak dira, alerta-nekea [NNH](../tratatu-behar-den-kopurua/) delarik. Funtzionamendu-puntua mugitzen duten eredu-eguneratzeek ekonomia berriro irekitzen dute (eta baimen erregulatzailea — ikus [AAren ebaluazio erregulatzailea](../aaren-ebaluazio-erregulatzailea/)).

## Tranpak

- **AUROC erosketak**: ereduak AUROCen arabera alderatzea atalase bakar batean ibiliko direnean — alderatu funtzionamendu-puntuan.
- **Saiakuntza-prebalentziako PPV mundu errealeko hedapenerako aipatzea** — klasikoa; birkalkulatu beti tokiko prebalentzian.
- **Espektro-alborapena**: kasu begi-bistakoetan vs kontrol osasuntsuetan balioztatutako ereduek praktikan nagusi den tarte anbiguoan errendimendu hobea erakusten dute.
- **Beheranzko bidearen kostuen falta**: positibo bakoitzak azterketa abiarazten du; eredu bat *bide osoaren* ekonomiaren esku-hartzea da.

## Iturriak

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
