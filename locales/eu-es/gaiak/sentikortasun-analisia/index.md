# Sentikortasun-analisia (Sensitivity Analysis)

Sentikortasun-analisi determinista (DSA) hipotesi bakarra aldiko aldatzen du tarte sinesgarri batean, ondorioa bizirik irauten duen ikusteko. Bistaratze estandarra tornado diagrama da: parametroak emaitza zenbat mugitzen duten arabera sailkatuta.

## Zergatik axola duen

Eredu ekonomiko oro estimazioen gainean eraikita dago — aurreztutako denbora, onarpena, kostu unitarioak. Osasun-teknologiaren ebaluazioak ez du puntu-estimaziorik onartzen ("ROI %340 da") ondorioa sarreren inguruko desadostasun arrazoizkoekiko sendoa dela frogatzen ez bada. Tornado diagramak erabakitzaileari *zein hipotesi galdekatu* esaten dio: kasua parametrorik eztabaidatuena bere muturreko baikorrean dagoenean bakarrik funtzionatzen badu, denek berehala ikusten dute.

Hau osasun-ekonomiatik software-negozio-kasuetara transferitzen den ohitura nabarmenena da.

## Matematika

[p_low, p_high] tarte sinesgarria duen p parametro bakoitzeko:

```
Result_low  = model(p = p_low,  all others at base case)
Result_high = model(p = p_high, all others at base case)
Swing(p)    = |Result_high − Result_low|
```

Sailkatu parametroak mugimenduaren (swing) arabera; marraztu barra horizontalak oinarri-kasuaren emaitzaren inguruan. Barianteak: bi norabideko DSA (bi parametro sareta batean aldatu), atalase-analisia (erabakia irauli egiten den parametro-balioa aurkitu).

## Adibide landua

AA kodetze-laguntzailea 200 garatzailerentzat. Oinarri-kasua: £39/gar/hilean lizentzia; 30 min/gar/egun aurreztuta; kostu osoa £60/ordu; 220 lan-egun.

```
Base-case annual benefit = 200 × 0.5h × 220 × £60 = £1,320,000
Annual cost              = 200 × £39 × 12         = £93,600
Base-case net            = £1,226,400
```

Tornadoa (aldi berean parametro bat):

```
Time saved 0.1–1.0 h/day: net = £170,400 … £2,546,400   (swing £2.38M) ← dominates
Loaded cost £40–£80/h:    net = £786,400 … £1,666,400   (swing £0.88M)
Working days 200–240:     net = £1,106,400 … £1,346,400 (swing £0.24M)
Licence £30–£50/mo:       net = £1,248,000 … £1,200,000 (swing £48k)
```

Atalase-analisia: onura garbia zero izatera iristen da egunean **2.1 minutu** inguru aurreztuta. Erabakia lizentzia-prezioarekiko sentiezina da eta erabat aurreztutako denboraren estimazioaren menpe dago — beraz neurtu hori, ez gainerakoa. (Eta gogoratu emaitza gaitasuna dela, ez dirua — ikus [dirua askatzen duena vs ez duena](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/).)

## Software ingeniaritzarekin lotura

Ingeniariek dagoeneko egiten dute intuizio hau "X-ri buruz oker bagaude?" gisa — DSAk sistematiko eta ikusgarri bihurtzen du soilik. Jarri tornado diagrama bat tresna-proposamen, gaitasun-plan eta eraiki-vs-erosi analisi guztietan. Norenak den sena zuzena den inguruko argudioak zein parametro neurtzera joan behar den inguruko akordio bihurtzen ditu — sarri pilotu baten bidez, zeinaren balioari ere prezioa jar dakiokeen (ikus [informazio perfektuaren balio itxaropenezkoa](../informazio-perfektuaren-balio-esperoa/)).

## Tranpak

- **Lausengatzeko aukeratutako tarteak**: sarrera guztien inguruko ±%10, benetako ziurgabetasuna kontuan hartu gabe. Aurreztutako denboraren estimazioek ±%80 merezi dute; lizentzia-prezioek ±%10.
- **Aldi berean bat aldatzeak elkarrekintzak galtzen ditu** — parametro korrelatuek (onarpena eta aurreztutako denbora) bi norabideko analisia edo [sentikortasun-analisi probabilistiko](../sentikortasun-analisi-probabilistikoa/) osoa behar dute.
- **Analisia egitea eta ez ikusi egitea**: tornadoak kasua zenbaki leun bakar batean oinarritzen dela esaten badu, hurrengo urratsa neurketa da, ez onespena.

## Iturriak

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
