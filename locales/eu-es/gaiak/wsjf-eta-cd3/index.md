# WSJF eta CD3 (WSJF and CD3)

CD3 (Cost of Delay Divided by Duration, atzerapen-kostua iraupenarekin zatituta) eta WSJF (Weighted Shortest Job First) lana **balio-dentsitatearen** arabera programatzen duten lehentasun-arauak dira: kapazitate urria kontsumitzen den unitate bakoitzeko zenbat atzerapen-kostu kentzen den. Kapazitate partekatu eta finko batekin, CD3 handienetik hasita lan egitea da atzerapen-kostu osoa minimizatzeko sekuentzia matematikoki optimoa.

## Zergatik axola duen

Atzeratutako lan-zerrenda oro razionamendu-arazoa da: elementu baliotsu asko, pipeline bakarra. Osasun-ekonomiak arazo bera ebatzi zuen osasun-aurrekontuetarako kostu-eraginkortasunaren sailkapen-taulekin: esku-hartzeak libra bakoitzeko lortutako osasunaren arabera ordenatu, eta aurrekontua amaitu arte zerrendan behera finantzatu. CD3 entrega-kapazitaterako logika bera da: onura *baliabide mugatuaren* unitate bakoitzeko, sailkapen-ordenan finantzatuta. Sekuentziazioa ondo egitea dirua doan lortzea da: lan bera, kapazitate bera, atzerapen-kostu osoa txikiagoa.

## Matematika

```
CD3  = Cost of Delay (£/week) / Duration (weeks)      — real units (Black Swan Farming)

WSJF = (user-business value + time criticality + risk reduction/opportunity
        enablement) / job size                         — SAFe's relative-scale proxy,
                                                        modified-Fibonacci scores
```

Benetako moneta duen CD3 ([atzerapen-kostua](../atzerapenaren-kostua/)) WSJFren puntu unitaterik gabekoak baino zorrotz indartsuagoa da: WSJF eta CD3-ren arteko erlazioa irizpide anitzeko puntuazioaren eta [kostu-erabilgarritasun analisi](../kostu-utilitate-analisia/) osoaren artekoa da. Monetizazioa ezinezkoa denean erabilgarria da, eta puntuazioek ainguraketarik ez dutenean manipulagarria.

## Adibide landua

Hiru eginbide, talde bakarra:

```
Feature   CoD (£/wk)   Duration   CD3
A         30,000       10 wks     3,000
B         12,000       2 wks      6,000
C         5,000        1 wk       5,000
```

CD3 ordena: B, C, A. Alderatu atzerapen-kostu osoa "CoD handiena lehenik" (A, B, C) ordenarekin:

```
CD3 order  (B,C,A): A waits 3 wks, C waits 2 → 30k×3 + 5k×2  = £100k delay cost
CoD order  (A,B,C): B waits 10, C waits 12   → 12k×10 + 5k×12 = £180k
```

Eginbide berak, talde bera: sekuentziazioak soilik £80,000 aurrezten ditu. Intuizioa: elementu txiki eta presazkoak lehenik doaz, beren atzerapen-kostua merke askatzen dutelako; elementu handiak gutxi galtzen du denbora laburrez itxaroteagatik.

## Software ingeniaritzarekin lotura

Osasun-softwarearen zorroetarako, adierazi CoD biltegi honek irakasten dituen unitateetan: QALY/aste × atalasea + operazio-£/aste, eta zeregin-zerrenda osasun-sistemak erosten duen gainerako guztia sailkatzeko erarekin zuzenean neurgarria bihurtzen da. Bi praktika-ohar: (1) iraupenak *egutegi-denbora* esan nahi du murrizketa okupatzen duena, ez esfortzua: botila-lepoko taldearen 2 egun behar dituen 2 asteko igaro-denborako elementua dirudien baino merkeagoa da (ikus [downstream baliabideen optimizazioa](../beheranzko-baliabideen-optimizazioa/)); (2) ospitaleek arau bera inplizituki exekutatzen dute kirofanoen zerrendak urgentziaz pisatutako emaritzaren arabera ordenatzean: lehentasun klinikoaren kategoriak larritasunez pisatutako CD3 dira (ikus [QALY defizita eta larritasun-aldatzaileak](../qaly-defizita-eta-larritasun-modifikatzaileak/)).

## Tranpak

- **WSJF puntuazio-antzerkia**: Fibonacci puntu unitategabeei buruzko eztabaidak gehien oihukatzen duenarengana konbergitzen dute; ainguratu gutxienez zerrendaren goiko elementuak benetako CoDn.
- **Iraupenaren manipulazioa**: elementuak zatitzea CD3 sailkapena puztzeko: ondo dago zatiketek balioa independenteki entregatzen dutenean, iruzurra ez dutenean.
- **Urgentzia-profilak ez ikustea**: epemuga-formako CoDk (data erregulatzaileak) tasa konstantearen hipotesia hausten dute; programatu horiek dataren bideragarritasunaren arabera, eta gainerakoak CD3rekin.
- **Berrordenatze-zalaparta**: CD3 konpromisoa hartzean sekuentziazio-erabakietarako da, ez martxan dagoen lanaren eguneroko berrantolaketarako (ikus [fluxu-metrikak](../fluxu-metrikak/) WIPi buruz).

## Iturriak

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
