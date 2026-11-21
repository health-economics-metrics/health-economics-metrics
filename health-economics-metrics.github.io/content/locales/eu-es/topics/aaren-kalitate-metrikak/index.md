# AAren kalitate-metrikak (AI Quality Metrics)

AAk sortutako irteeraren zuzentasunaren metrikak: egiazko erreferentziarekiko zehaztasuna, **fidelitatea/oinarritzea** (emandako testuinguruak laguntzen al du baieztapen bakoitza?) eta **haluzinazio-tasa** (irteeren zer frakziok dute euskarririk gabeko edo faltsua den edukia?). Osasun-ingurunean hauek ez dira kalitate-xehetasunak: kalte-tasak dira.

## Zergatik axola duen

Medikuntza-domeinuko erreferentziek **oinarririk gabeko LLMetan %60 baino haluzinazio-tasa handiagoak** neurtu dituzte zeregin medikoetan (eredu ireki batzuetan >%80), eta oinarritzeak, berreskuratzeak eta arrazoitze-moduek tasak nabarmen jaisten dituzte (adib., GPT-5en thinking moduak HealthBench haluzinazioak %3,6 → %1,6 murriztu zituen erreferentzia batean). Fluxu kliniko batean dosi haluzinatu batek edo aipamen asmatu batek **kalte-bidea duen informazio faltsuko gertaera** da: edozein eredu ekonomikoren kalte-adarrean sartu behar da, [kribatzearen ekonomiaren](../screening-aren-ekonomia/) positibo faltsuen modura prezioztatuta; bakoitzak beheranzko kostua sortzen du (informazio okerraren arabera jardutea, egiaztatze-lana, arrisku medikolegala, konfiantzaren higadura).

## Matematika

```
Haluzinazio-tasa = euskarririk gabeko/faltsua den edukia duten irteerak / irteera guztiak
  intrintsekoa:  emandako testuinguruarekin kontraesanean
  estrintsekoa:  testuingurutik haratagoko asmakeria egiaztaezina

Fidelitatea (RAGAS estiloa) = erantzunean euskarria duten baieztapenak / erantzuneko baieztapen guztiak
Testuinguruaren zehaztasuna/estaldura = sorgailua elikatzen duen berreskuratzearen kalitatea

Haztapen ekonomikoa — haluzinazio guztiek ez dute kostu bera:
  kalte-kostu esperoa = Σ errore-moten gainean (tasa × P(detektatu gabe) ×
                        P(horren arabera jardun) × erroreko kostua)
  Giza berrikuspen-geruzak P(detektatu gabe) finkatzen du — eta haren kostua
  ereduan ere egon behar da (berrikusleen minutuak × bolumena).
```

## Adibide landua

AA bidezko kodetze klinikoko laguntzaile batek urtean 200.000 episodio prozesatzen ditu; auditoriak irteeren %2k kodetze-errore materiala duela erakusten du; giza kodetzaileek horien %85 harrapatzen dute:

```
Bidalketara iristen diren erroreak = 200,000 × 0.02 × 0.15 = 600/urte
Harrapatu gabeko errore bakoitzeko kostua (fakturazio okerra batez beste + auditoria-esposizioa) ≈ £250
Errore-kostu esperoa            = 600 × 250 = £150,000/urte
Berrikuspen-kostua (2 min × 200k × £0.50/min)  = £200,000/urte

Hobekuntza-kasua: berreskuratze bidezko oinarritzeak errore-tasa %0.8ra jaisten du
→ harrapatu gabeko erroreak 240, errore-kostua £60,000 (−£90k/urte); berrikuspen-denbora
  ere jaitsi daiteke (berrikuspen osoaren ordez laginketa) — kalitate-inbertsioak
  abiadura-aldarrikapenik egin aurretik ordaintzen du bere burua.
```

## Software ingeniaritzarekin lotura

Tratatu ereduaren kalitatea test-estaldura ekonomiaren modura, osasun-mailako diziplinarekin: **ebaluazio-multzoak zure saiakuntza klinikoa dira** — aurrez erregistratuak, *zure* kasu-nahasketaren ordezkariak, noraezaren aurka eguneratuak; **oinarritzeak eskala gainditzen du zeregin faktualetan** (berreskuratzea + aipamena eskatzen duten prompt-ak izan ohi dira eskura dagoen haluzinazio-murrizketarik merkeena — ikus token-gainkostua [inferentziaren unitate-ekonomian](../inferentziaren-unitate-ekonomia/)); eta **argitaratu funtzionamendu-puntua**: [sentsibilitatea/espezifikotasuna](../aa-klinikoaren-ebaluazioa/) bezala, "%97 fidela" ez du ezer esan nahi zereginaren banaketarik eta detekzio-atalaserik gabe. Goiko berrikuspen-geruzaren matematika edozein kribatze-ateren [NNT/NNH](../tratatu-behar-den-kopurua/) aritmetika bera da.

## Tranpak

- **Erreferentziatik produkziora transplantea**: haluzinazio-tasak zereginaren mende daude erabat; zure kasu-nahasketa da kontuan hartzen den erreferentzia bakarra.
- **Kostatu gabeko giza berrikuspena**: "mediku batek dena egiaztatzen du" onura erdira murrizten du eta kostu-lerroan agertu behar da — eta zaintza higatu egiten da (automatizazio-konfiantza), beraz P(detektatu gabe) konfiantzarekin igotzen da.
- **Batez besteko kalitatea optimizatzea kaltea isatsean dagoenean**: alergia-ohar asmatu batek mila esaldi traketsek baino gehiago pisatzen du; haztatu erroreak ondorioaren arabera, kalte esperoaren formularen arabera.

## Iturriak

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
