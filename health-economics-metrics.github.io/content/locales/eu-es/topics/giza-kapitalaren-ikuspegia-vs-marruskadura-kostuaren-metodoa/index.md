# Giza kapitalaren ikuspegia vs marruskadura-kostuaren metodoa (Human Capital Approach vs Friction Cost Method)

Hauek dira galdutako produktibitatea — gaixotasunagatik, ezgaitasunagatik edo heriotzagatik — balioesteko lehian dauden bi metodoak, gaixotasunaren kostuko eta kostu-onurako azterketetan. Giza Kapitalaren Ikuspegiak (HCA) galdutako irteera guztia absentziaren iraupen osoan soldata-tasan balioesten du; Marruskadura-kostuaren Metodoak (FCM) enplegatzaile batek ekoizpena berrezartzeko benetan behar duen epe laburragoan bakarrik. Haien arteko hautaketak zeharkako kostuaren estimazioa bi aldiz edo gehiagotan aldatzen du.

## Zergatik axola duen

Zeharkako kostuak (produktibitatea) osasun-ekonomiako lerro eztabaidatuenetakoak dira hain zuzen bi metodo estandarrek hain gogor desadosten direlako. HCAk absentzia-egun bakoitza ekonomiak benetan galtzen duen irteera-egun bezala tratatzen du, soldata osoan balioetsia iraupen osoan — edo, heriotza edo ezgaitasun iraunkorrean, geratzen den lan-bizitzan. FCMk argudiatzen du langabezia eta lan-merkatuko tarte librea duen ekonomia batean absentzia luze gehienek ez dutela benetan irteera nazionala murrizten, enplegatzaile batek ordezko bat trebatu edo lana birbanatu ondoren; "marruskadura-aldiak" bakarrik — ekoizpena aurreko mailara berrezartzeko denborak — adierazten du benetako galera. FCMk, beraz, HCAk baino zeharkako kostu-estimazio sistematikoki baxuagoak eta kontserbadoreagoak sortzen ditu, eta bi metodoak ez dira oin-ohar trukagarriak: "produktibitate galdua" zer den buruzko teoria ekonomiko desberdinak dira. Horregatik ere [NICEren erreferentzia-kasuak](../osasun-teknologien-ebaluazioa/) produktibitate-kostuak lehenespenez baztertzen ditu, behar izanez gero gizarte-ikuspegiko sentsibilitate-analisi bereizi gisa jakinaraziz erreferentzia-kasuko ICERrekin nahastu beharrean — ikus [azterketaren ikuspegia](../azterketaren-ikuspegia/).

## Matematika

```
Giza Kapitalaren Ikuspegia:
HCA_kostua = eguneko_soldata × galdutako_egunak

Marruskadura-kostuaren Metodoa (sinplifikatua, marruskadura-aldian mugatua):
FCM_kostua = eguneko_soldata × min(galdutako_egunak, marruskadura_egunak)

marruskadura_egunak = ekoizpena berrezartzeko denboraren herrialde/sektore-espezifikoko
                      estimazioa (historikoki ~85 egun Herbehereetako iMTA kostu-gidan;
                      herrialdearen arabera aldatzen da eta aldizka berrestimatzen da)
```

Bi metodoen arteko desadostasun osoa `min()`-ean bizi da: HCAk ez du inoiz `galdutako_egunak` mugatzen, beraz kostua absentzia osoan haziz doa, FCMk zenbatutako egunak marruskadura-aldian mugatzen dituen bitartean, benetako absentzia zein luze doan ere.

## Adibide landua

Langile bat `galdutako_egunak = 180` egunez dago lanik gabe, `eguneko_soldata = £150` irabazten duela.

**Giza Kapitalaren Ikuspegia**:

```
HCA_kostua = 150 × 180 = £27,000
```

**Marruskadura-kostuaren Metodoa**, `marruskadura_egunak = 85` marruskadura-aldia erabiliz (Herbehereetako iMTA erreferentzia historikoa, gidaren aldizkako berrestimazioaren arabera):

```
FCM_kostua = 150 × min(180, 85) = 150 × 85 = £12,750
```

FCMren £12,750 HCAren £27,000ren erdia baino gutxiago da absentzia *bererako* — metodoaren aukerak bakarrik gaixotasunaren kostuko kasu bat nabarmen aldatzen du, beste inolako hipotesirik ukitu gabe.

## Software ingeniaritzarekin lotura

Honek zuzenean ingeniari baten irteera talde batek nola balioesten duen mapatzen du:

- **HCA estiloko atrizio-kostua**: galera ingeniari irtendakoaren soldata osoa bezala balioestea rola hutsik dagoen denbora guztian. Hau da atrizio-kostu eredu gehienen bertsio inozoa, eta galera gainestimatzen du HCAk produktibitate-galera gainestimatzen duen arrazoi berberagatik — ahalmen hutsa denbora osoan guztiz produktiboa zela eta beste ezerk tartea xurgatu ez zuela suposatzen du. Ikus [langileen atxikipena](../langileen-atxikipena/), metodo honek elikatzen duen kontratazio/onboarding/hutsuneko-estaldura katea kuantifikatzen duena.
- **FCM estiloko atrizio-kostua**: galera ordezko batek ordezkatu eta martxan jartzeko benetako denboran bakarrik balioestea — ingeniaritzako "marruskadura-aldia". Negozio-kasu baterako zenbaki defendagarriagoa da, FCM gaixotasunaren kostuko azterketa batean aukera kontserbadoreagoa den bezala.
- Azpiko diziplina [aukera-kostua](../aukera-kostua/)n dagoen bera da: balioetsi ordezkatutako baliabide bat benetan galtzen denaren arabera, ez iraupen-titular bat tasa batekin biderkatuta.

## Tranpak

- **HCA eta FCM analisi bakarrean nahastea, edo bakarra aukera ez aitorrik gabe jakinaraztea.** Absentzia-datu berberek 2x+ aldea sor dezakete jakinarazitako kostuan metodoaren arabera; aukera adierazi behar da, ez lurperatu.
- **HCA gizarte-ikuspegiko kasu batean sentsibilitate-analisi gisa markatu gabe erabiltzea.** NICEren erreferentzia-kasuak esplizituki baztertzen ditu produktibitate-kostuak; gizarte-ikuspegiko HCA estimazio batek agertoki-analisian du lekua, ez ICER titularrean.
- **Edozein metodo ordaindu gabeko edo merkaturik gabeko lanari (adib. zaintza) doikuntzarik gabe aplikatzea.** Bi metodoek soldata-tasa balioaren proxy gisa suposatzen dute, eta ez da garbi transferitzen merkatu-soldatarik ez duen lanera.

## Iturriak

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
