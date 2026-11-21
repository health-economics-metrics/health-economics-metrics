# Amaiera-puntu eta biomarkatzaile digitalak (Digital Endpoints and Biomarkers)

Biomarkatzaile digital bat sentsoreen bidez bildutako neurri fisiologiko edo jokabide objektiboa da (ibilera-abiadura telefono batetik, lo-egitea eramangarri batetik, dardara azelerometriatik). Amaiera-puntu digital bat **saiakuntza-emaitza** mailara goratutako neurri bat da — tratamendu-efektua frogatzeko erabilia. "Gailuak igortzen dituen datuetatik" "erregulatzaile batek onartzen duen ebidentziara" aldatzeak balioztatze-eskailera definitu bat zeharkatzen du.

## Zergatik axola duen

Saiakuntza-amaiera-puntu tradizionalak epeka-epekakoak dira (hiru hilean behin kontsulta) eta garestiak; amaiera-puntu digitalak jarraituak, ekologikoak (bizitza errealean, ez kontsultako errendimenduan) eta behaketa bakoitzeko merkeak dira — saiakuntzak txikitu ditzakete, efektuak lehenago detektatu eta azterketa deszentralizatuak ahalbidetu. Arazoa balioztatzea da: onartutako esparruak (FDArekin lerrokatua, hiru zutabe) **egiaztapena/balioztatze analitikoa** (sentsoreak magnitude fisikoa zehatz neurtzen du), **balioztatze klinikoa** (neurriak aldarrikatzen duen egoera klinikoa islatzen du) eta **osasunaren alderdi esanguratsua** frogatua (pazienteei axola zaie jasotzen duena) eskatzen ditu. Hirurak ez dituen amaiera-puntu bat telemetria da, ez ebidentzia.

## Matematika

```
Balioztatze analitikoa: erreferentziarekiko adostasuna (ikus wearable-validation.md —
                        MAPE, CCC, Bland-Altman)
Balioztatze klinikoa:   korrelazioa/diskriminazioa ainguratze klinikoen aurka
                        (talde ezagunen baliozkotasuna, aldaketarekiko erantzuna)
Amaiera-puntuaren ekonomia:
  paziente-urte bakoitzeko detektatutako gertaerak (jarraitua) vs bisita bakoitzeko laginketa
  saiakuntzaren ahalmena: neurri jarraituek lagin-tamaina murrizten dute bisiten arteko
  bariantzak menderatzen duenean — N ∝ σ²/Δ², eta σ² laginketa trinkoarekin jaisten da
```

## Adibide landua

Parkinsonaren saiakuntza batek eskumuturreko sentsore bateko ibilera-abiadura kontuan hartzen du hiruhilekako klinikoek emandako puntuazioen aurrean:

```
Amaiera-puntu klinikoa: 4 neurketa/paziente/urte, eguneroko zarata handia
Amaiera-puntu digitala: ~200 neurketa pasibo/paziente/urte

Urteko aldaketaren estimazioaren bariantza ~5× jaisten da laginketa trinkoarekin →
detektagarri den efektu-tamaina ahalmen finkoan ~√5 ≈ 2.2× hobetzen da, edo
baliokideki lagin-tamaina ~%40–60 txikitzen da hipotesi beraren aldera.
Matrikulatutako paziente bakoitzeko £25,000rekin, 200 paziente murrizteak ≈ £5M
aurrezten ditu saiakuntza bakoitzeko — balioztatze-inbertsioaren (berez agian £1–2M)
kasu komertziala sustatzaile baten pipeline osoan.
```

## Software ingeniaritzarekin lotura

Amaiera-puntu digitalak jantzi klinikoak daramatzan datu-ingeniaritzako diziplina dira: **jatorria eta bertsionatzea** (azterketa-erdian algoritmoen eguneratzeek alderagarritasuna mehatxatzen dute — [PCCP](../aaren-ebaluazio-erregulatzailea/) arazoa saiakuntza-formatuan; blokeatu bertsioa eta balioztatu zubia); **datu-faltaren diseinua** (eramate-denboraren hutsuneak informatiboak dira, ez ausazkoak — ikus [eramangarrien balioztapena](../wearable-en-baliozkotzea/); inputazio-hautuak aldarrikapen zientifikoak dira); eta **edge/hodei banaketa-erabakiak**, geroago zer seinale gordina berreskura daitekeen aldatzen dutenak. Neurketa-pipeline-a hasieratik software erregulatutzat tratatzen duten taldeek — probatua, bertsionatua, dokumentatua — amaiera-puntuen sinesgarritasuna merke erosten dute; azkar mugitu den pipeline bati balioztatzea berreraikitzea da amaiera-puntu digitalen programak hiltzen diren lekua.

## Tranpak

- **Kontsultarekiko korrelazioa balioztatze oso gisa**: kontsultako neurri akastun bat parekatzeak herentzia frogatzen du, ez egia; balioztatu osasun-alderdi esanguratsuaren aurka.
- **Amaiera-puntu berriaren arrisku erregulatzailea**: aurrekaririk gabeko amaiera-puntu bat zientifikoki hobea izan daiteke eta hala ere aurkezpena hondoratu — hartu erregulatzaileekin harremana goiz (kualifikazio-programak existitzen dira).
- **Sentsore-populazio desegokitasuna**: balioztatzea eskumutur gazte osasuntsuetan, hedapena dardara eta pigmentazio-desberdintasunak dituzten adinekoetan PPGk inoiz ikusi ez zituenak.
- **Ezaugarri-noraeza**: ibilera-algoritmoa datu berrietan berriz entrenatzeak isilean amaiera-puntua birdefinitzen du azterketa-erdian.

## Iturriak

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
