# Atxikimendua eta jarraitutasuna (Adherence and Persistence)

Atxikimendua (adherence) benetako erabilera errezetatutako erabilerarekin zenbat bat datorren da (intentsitatea); jarraitutasuna (persistence) erabilerak utzi aurretik zenbat irauten duen (iraupena). Farmaciak neurri estandarizatuak ditu — **MPR** eta **PDC**, ≥%80 "atxikitzailearen" ohiko langa —, eta terapia digitalek kontzeptuak eta arazoa heredatzen dituzte: atxikimendua eraginkortasunaren eta lortutako balioaren arteko biderkatzailea da.

## Zergatik axola duen

Ordaintzaileak dagoeneko zenbaki hauetan oinarritzen dira: PDC ≥%80 AEBetako Medicare Star Ratings sisteman sartzen da, eta horrek ordaintzailearen benetako sarrerak mugitzen ditu; atxikimendua finantza-azpiegitura estrukturala da, ez metrika bigun bat. Terapia digitaletan eredua errepikatzen da: DiGA datuek errezeta-bolumen sendoak erakusten dituzte baina atxikimendu iraunkor ahula, eta emaitzetan oinarritutako DTx prezioak (2026tik aurrera Alemanian) atxikimenduaren mende dauden emaitzen arabera ordainduko dira. Osasun digitaleko ikerketaren kontzeptu-eguneratzea: **engagement eraginkorra** — nahi den emaitza lortzeko engagement *nahikoa* — eta haren ondorioa, **gutxieneko dosi eraginkorra**, esku-hartze bakoitzerako enpirikoki ezarria, "gehiago" dela suposatu beharrean.

## Matematika

```
MPR = Σ emandako hornidura-egunak / aldiko egunak × 100   (%100 gainditu dezake;
      goiz berriz hornitzeagatik gainestimatzen du)
PDC = hornidurak estalitako egunak / aldiko egunak × 100     (%100ean mugatua;
      estimatzaile kontserbadorea, CMSk nahiago duena)
Atxikimendu digitala = benetako erabilera-gertaerak / errezetatutako erabilera-gertaerak × 100
Jarraitutasuna       = hasieratik utzi arteko egunak
                       (jakinarazi % jarraitzaileak N hilabetetan; biziraupen-metodoak)

Balio-atea: lortutako emaitza ≈ eraginkortasuna × g(atxikimendua)
  non g dosi-erantzunaren funtzioa den; gutxieneko dosi eraginkorraren azpian,
  g ≈ 0 — kostua egin da, onura galdu
```

## Adibide landua

Insomnioaren aurkako TCC digitaleko produktu bat, 6 asteko 6 modulu gisa errezetatua; saiakuntza-eraginkortasuna 0.025 QALY ≥4 modulu osatzen dituztenen artean (enpirikoki ezarritako gutxieneko dosi eraginkorra):

```
1,000 errezeta £250ean → £250,000 ordaintzailearen gastua
Moduluen osatzea: ≥4 modulu %38; 1–3 modulu %34; modulurik ez %28

Lortutako QALYak = 1,000 × 0.38 × 0.025 = 9.5
QALY bakoitzeko kostua = 250,000 / 9.5 ≈ £26,300 — NICEren atalaseetan mugan

Atxikimenduaren ingeniaritzak (gogorarazpenen birdiseinua, saioak laburtzea)
≥4 moduluen osatzea %50era igotzen du: 12.5 QALY → £20,000/QALY. Produktuak
finantzaketa-atalasea gainditu zuen terapiaren edukia ukitu gabe.
```

2026ko errendimendu-prezioekin, aldaketa berak *diru-sarrerak* zuzenean mugitzen ditu: atxikimenduaren ingeniaritza ibilbide-orri komertziala bihurtzen da.

## Software ingeniaritzarekin lotura

Bi hiztegi kontzeptu bakar batera biltzen dira: software-analitikak ([aktibazioa](../aktibazioa-eta-hartzea/), [stickiness](../engagement-metrikak/), [atxikipena](../atxikipena-eta-uzte-tasa/)) eta farmazia klinikoak (MPR, PDC, jarraitutasuna) bietan esku-hartze baten esposizioa neurtzen dute; zuzendu zure produktuaren gertaerak hiztegi klinikora eta ordaintzaileek zure dashboardak irakurri ahal izango dituzte. Ingeniaritzak atxikimenduaren palankak ditu: gogorarazpenen logika (egunero egindako abisu tontoek baztertzen irakasten dute; denbora egokitzaileak ez), saioaren kostua (20 minutuko modulu bat 3×7 minutukoak baino gutxiago osatzen da) eta protokoloaren *non* uzten duten erabiltzaileek lokalizatzen duen marruskadura-telemetria. Neurtu dosi-erantzuna hasieratik: eredu ekonomiko osoa baldintzatzen duen gutxieneko dosi eraginkorraren analisiak emaitzarekin lotutako erabilera-datuak behar ditu, eta produktuak bakarrik bil ditzake.

## Tranpak

- **MPR/PDC nahastea**: MPRk puztu egiten du; zehaztu zein estimatzaile den eta erabili PDC ordaintzaileari begirako edozertarako.
- **Metrikarekiko atxikimendua, ez terapiarekikoa**: irekierak dosi gisa zenbatzea (ikus [engagement metrikak](../engagement-metrikak/)).
- **"Gehiago hobe da" engagement-helburuak** esku-hartzeak dosi finitua duenean: graduatzea arrakasta da, betiko erabilera ez.
- **Bizirauleetan oinarritutako eraginkortasun-aldarrikapenak**: atxikitzaileen emaitzek hautaketa-efektuak dituzte (atxikitzaileak desberdinak dira); estimazio kausal zintzoak randomizazioa edo doiketa kontuz egitea eskatzen du.

## Iturriak

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
