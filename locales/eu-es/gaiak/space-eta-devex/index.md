# SPACE eta DevEx (SPACE and DevEx)

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) eta DevEx (feedback loops, cognitive load, flow state) garatzaileen produktibitatea **dimentsio anitzekoa** neurtzeko markoak dira — arloaren erantzuna metrika bakar batek ere errealitatearekin topo egitean bizirik irauten ez duela aurkitu izanari.

## Zergatik axola duen

Bi markoek osasun-emaitzen ikerketak hamarkada lehenago ikasitako irakaspen berak kodetzen dituzte: zenbaki bakar batek (kode-lerroak; tentsio arteriala) dimentsio anitzeko errealitate bat desitxuratzen du, eta hura optimizatzeak manipulazioa sortzen du, ez hobekuntza. SPACEk gutxienez hiru dimentsiotako metrikak konbinatzea agintzen du, telemetria eta autoerrelatua nahastuz — egituraz [EQ-5D](../eq-5d/) edozein indize kalkulatu aurretik bost dimentsiotan profilatzen den moduaren berdina, eta [PROMak](../pazienteek-jakinarazitako-emaitzak/) neurri klinikoekin batera zergatik existitzen diren. Poztasuna/ongizatea ere ez da apaingarri leuna: [langileen atxikipenaren](../langileen-atxikipena/) ekonomiari elikatzen dio, non erorketa soldata osoaren hilabeteetan prezioa jartzen zaion.

## Matematika

Ezein markoa ez da formula bat; biak neurketa-diseinuak dira:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## Adibide landua

Plataforma-talde batek DevEx inbertsio bat justifikatzen du (CI azkartzea + dokumentazioaren berrikuspena) 300 garatzailerentzat:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## Software ingeniaritzarekin lotura

Dokumentu hau software aldea *da*; transferentzia osasun-ekonomiarantz doa. "Ingeniari-urte kalitate-doitua" —esperientzia-indize estandarizatu batez pisatutako denbora— [QALY](../kalitatez-doitutako-bizi-urtea/) eraikuntzaren ingeniaritza-gaitasunari aplikatzea da, eta QALYren arauak oinordetzen ditu: tresna baliozkotu batetik datozen pisuak (inkesta koherentea, puntuazio argitaratua), alderaketaren *aurretik* elikatuak, inoiz tresna gogokoena lausengatzeko doitu gabe. [SF-6D vs EQ-5D](../eq-5d/) irakaspena ere aplikatzen da: tresna ezberdinek zenbaki sistematikoki ezberdinak ematen dituzte, beraz ez alderatu inoiz DevEx indizeak saltzaileen tresnen artean.

## Tranpak

- **Metrika bakarrera kolapsatzea**: SPACE puntuazio bakarrera murrizten duten dashboardek markoak saihesteko existitzen den arazoa sortzen dute berriro.
- **Jarduera-metrikak emaitza gisa**: commit-ak, PRak eta story point-ak Activity dira — SPACEk zehazki manipulagarriena dela ohartarazten duen dimentsioa (osasun-analogoa: prozedurak zenbatzea, ez sendatzeak).
- **Inkesta-nekea eta Hawthorne efektuak**: hiruhilekoko tresna arinek astekako galdeketak gainditzen dituzte.
- **Taldeak alderatzea**: kasu-nahasketaren doikuntzarik gabeko ospitale-sailkapen-taulak bezala — testuinguru-desberdintasunek (domeinua, legacy karga, on-call) menderatzen dute.

## Iturriak

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
