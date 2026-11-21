# Inferentziaren unitate-ekonomia (Inference Unit Economics)

Inferentziaren unitate-ekonomiak AA funtzionalitateen prezioa haien konputazio marjinalaren arabera jartzen du: **token bakoitzeko kostua**, transakzio, erabiltzaile edo episodio kliniko bakoitzeko kostura batuta. Dinamika definitzailea: LLM prezioak **1–2 urtean magnitude-ordena bat** inguru jaitsi dira gaitasun konstantean — osasun-teknologien kostuen kalkuluan aurrekaririk ez duen deflazio-tasa.

## Zergatik axola duen

Prezioen erorketatik bi ondorio ateratzen dira. Komertzialki, gaur marjinala den AA funtzionalitate bat 18 hilabetera erraz errentagarria izan daiteke — eta gaurko kostuetan prezioztatutako lehiakide bat azpitik hartuko dute. Ebaluazio ekonomikorako, AA bidezko zerbitzu kliniko baten kostu-eraginkortasun eredu orok 2024ko inferentzia-prezioak izoztuz **etengabeko kostua nabarmen gainestimatzen du** — analisiak prezio-jaitsiera agertokiak behar ditu sendagai-ereduek patente-iraungipena eta generikoen sarrera kudeatzen dituzten bezala. (Ikerketako erreferentzia-puntuak: muga-mailako irteera-tokenak ~$15–75/M 2026ko erdialdean, tarteko ereduak magnitude-ordena bat merkeagoak, GPT-4 mailako gaitasuna 2022ko ~$20/M-tik ~$0.40/M-ra; Epoch AIk 9×–900×/urteko jaitsierak neurtu zituen gaitasun-mugarriaren arabera.)

## Matematika

```
Dei bakoitzeko kostua = sarrera-tokenak × sarrera-tasa + irteera-tokenak × irteera-tasa
Unitate bakoitzeko kostua = Σ deiak negozio-irteeraren unitate bakoitzeko (triage-episodio bakoitzeko,
                            idatzitako gutun bakoitzeko, kontsulta-laburpen bakoitzeko)

Errealitate nahasia  = oinarrizko deia + berriz saiatzeak + RAG testuingurua (sarrera-astuna)
                       + ebaluazio/guardrail deiak (maiz %20–50eko gainkostua)

Urte anitzeko ereduetarako prezio-jaitsiera agertokia:
  kostua_t = kostua_0 × d^t, probatu d ∈ {0.3, 0.5, 0.7}/urte sentsibilitate-analisian
```

## Adibide landua

AA alta-laburpen zerbitzu bat: batez besteko laburpenak 12.000 sarrera-token (erregistro-testuingurua) + 1.200 irteera erabiltzen ditu, gehi egiaztatze-pasada bat (6.000 sarrera / 300 irteera). $3/M sarrera, $15/M irteeran:

```
Zirriborroa: 12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Egiaztatzea:  6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Laburpen bakoitzeko ≈ $0.077 → 100,000 laburpen/urteko ≈ $7,700

Laburpen bakoitzeko ~20 klinikoaren minutu aurreztuen aurka (≈ £25), inferentzia
sortutako balioaren %0.25 da — ekonomia tokenak IZAN EZ DIREN guztiak menderatzen du:
integrazioa, ebaluazioa, gobernantza, onarpena.
```

Ondorio hori — inferentzia-kostua gutxitan da murrizketa lotesle, uneko prezioetan, balio handiko zeregin klinikoetarako — berez prezio-bileretara eraman beharreko aurkikuntza da.

## Software ingeniaritzarekin lotura

Hau AArako espezializatutako [hodei-unitateen ekonomia](../hodei-unitateen-ekonomia/) da, hiru jardunbide-oharrekin: **neurtu negozio-unitate bakoitzeko**, ez API dei bakoitzeko, zenbakia zuzenean [ICER](../kostu-eraginkortasun-gehigarriaren-ratioa/)/[aurrekontu-inpaktu](../aurrekontu-inpaktuaren-analisia/) ereduetan txerta dadin; **kontuz sarrera/irteera asimetriarekin** (irteera normalean sarreraren prezioaren ~4×; RAG arkitekturak sarrera-astunak dira — arkitektura-hautuak prezio-hautuak dira); eta **bideratu zeregin-mailaren arabera** — ereduaren gaitasuna zereginaren zailtasunari egokitzea (eredu merkeak sailkapenerako, muga-mailakoak sintesirako) rutinaz kostu nahastua 5–10× murrizten du kalitate berdinean, esku-hartze eraginkor merkeena erabiltzearen software-bertsioa ([kostu-minimizazioa](../kostu-minimizazio-analisia/), baliokidetasuna ebidentziatua).

## Tranpak

- **Prezio izoztuko urte anitzeko ereduak** — kostua gainestimatzen du; baina baita **deflazio suposatuko diru-sarrera ereduak** — prezio-gerra ez da kontratu bat; agertokiak egin biak.
- **Ebaluazio-gainkostua ez ikustea**: guardrail-ak, epaileak eta berriz saiatzeak benetako tokenak dira, maiz gehiengoa ingurune erregulatuetan.
- **Token bakoitzeko miopia**: latentziak, tasa-mugek eta testuinguru-leihoaren murrizketek token-prezio batek jasotzen ez dituen kostuak dituzte.

## Iturriak

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
