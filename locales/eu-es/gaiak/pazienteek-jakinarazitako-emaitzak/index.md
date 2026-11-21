# Pazienteek jakinarazitako emaitzak (Patient-Reported Outcomes, PROMs, PREMs, MCID)

PROMak pazienteek beren osasun-egoera (sintomak, funtzioa, bizi-kalitatea) jakinarazten duten instrumentu estandarizatuak dira; PREMek arretaren *esperientzia* jasotzen dute. **MCID** (diferentzia klinikoki garrantzitsu minimoa) pazienteek onuragarri gisa benetan hautematen duten puntuazio-aldaketarik txikiena da: edozein hobekuntza aldarrikatuk gainditu behar duen langa.

## Zergatik axola duen

PROMak osasun digitalaren eraginkortasun-moneta nagusia dira: aplikazioek ia inoiz ez dute hilkortasuna aldatzen, baina sintoma-puntuazio baliozkotuak sinesgarriki aldatu ditzakete. Axola duten instrumentuak gutxi eta estandarizatuak dira: **PHQ-9** (depresioa, 0–27; larritasun-bandak 5/10/15/20), **GAD-7** (antsietatea, 0–21; bandak 5/10/15), **EQ-5D** ([QALYetarako](../kalitatez-doitutako-bizi-urtea/) utilitatea), eta arautzaileek, HTA organoek eta ordaintzaileek onartzen dituzte, hain zuzen produktu eta saiakuntzen artean alderagarriak direlako. MCID zintzotasun-atea da: PHQ-9 MCID ≈ 5 puntu, GAD-7 ≈ 4, EQ-5D indizea ohikoki ~0,03–0,08; lagin handi batean PHQ-9ren 1,5 puntuko aldaketa estatistikoki esanguratsua *erreala baina klinikoki esanahirik gabea* da, eta ebidentzia-berrikusleek hala esango dute.

## Matematika

```
PROM scoring: instrument-specific sums (e.g., PHQ-9 = Σ 9 items × 0–3)

MCID estimation:
  anchor-based:      score change among patients who report "somewhat better"
  distribution-based: ≈ 0.5 × SD of baseline scores (rough heuristic)

Response rate framing (for trials and dossiers):
  responder = patient improving ≥ MCID (or ≥50% for PHQ-9 convention)
  NNT = 1 / (responder rate_treatment − responder rate_control)
  — see number-needed-to-treat.md
```

## Adibide landua

Depresio-laguntzako aplikazio bat, RCT itxaron-zerrendaren aurka, 12 aste:

```
PHQ-9 change: app −6.2 points, control −2.1 → adjusted difference −4.1
MCID check: 4.1 < 5 → mean difference below MCID; report responders instead:
  responders (≥5-point drop): app 48%, control 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — four users treated per additional clinical response

Economic bridge: responders' EQ-5D gain 0.06 sustained 6 months
  = 0.03 QALYs; per 1,000 users: 260 extra responders × 0.03 = 7.8 QALYs
  ≈ £156,000–£234,000 of health value at NICE thresholds
```

Erantzule/NNT marko-lanak berrikuspena gainditzen du, MCIDaren azpiko batez besteko diferentzia baztertuko zatekeen lekuan.

## Software ingeniaritzarekin lotura

PROMak softwareak konpontzeko ezin hobeto kokatuta dagoen datu-bilketako arazo bat dira: aplikazioko instrumentuek paperak inoiz lortu ez zituen osatze-tasak eta dentsitate longitudinala lortzen dituzte, ohiko produktu-telemetria HTA mailako ebidentzia bihurtuz ([EQ-5D](../eq-5d/) bost pantaila da). Ingeniaritza-arauak: erabili instrumentu baliozkotua *hitzez hitz* (berridazteak baliogabetzen du; lizentziak aplikatzen dira); programatu neurketa protokoloaren arabera, ez engagement-aren erosotasunaren arabera (erabiltzaile aktiboak soilik neurtzea biziraupen-alborapena da; ikus [atxikipena](../atxikipena-eta-uzte-tasa/)); eta blokeatu instrumentuaren datuen bertsioa edozein eskema bezala: azterketa erdian formulazioa aldatzea datuak ustelduta uztea da. PREMak CSAT/NPS motako instrumentuekin lotzen dira, eta ikasgaia bera da: estandarizatua etxekoa baino hobea da, publikoa ordaintzailea denean. Lan-produktibitatearen instrumentu zehatz baterako, ikus [WPAI](../lan-produktibitatearen-eta-jardueraren-narriadura/).

## Tranpak

- **MCIDaren azpiko esangura estatistikoa** onura kliniko gisa aurkeztea: alorreko puztura ohikoena.
- **Batez bestekora itzulera**: erabiltzaileak sintomen gailurretan izena ematen dute; besoa bakarreko aurretik/ondoren azterketak izugarri gehiegi estimatzen du, eta konparatzaileak ez dira negoziagarriak.
- **Instrumentu-erosketa**: PHQ-9, GAD-7 eta WHO-5 pasatu eta aldatu dena jakinaraztea; aurre-erregistratu lehen mailakoa.
- **Baimen digitalaren inkestaren presioa**: erabiltzaileak erantzun onuragarrietara bultzatzeak instrumentua hondatzen du (eta berrikusleek oinarrizko tasak ezagutzen dituzte).

## Iturriak

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
