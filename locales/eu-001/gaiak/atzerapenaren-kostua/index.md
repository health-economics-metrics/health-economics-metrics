# Atzerapenaren kostua (Cost of Delay, CoD)

Atzerapenaren kostua funtzionalitate, produktu edo zerbitzu bat entregatzen *ez* den denbora-unitate bakoitzeko galtzen den balio ekonomikoa da. Software-entregaren metrikak eta osasun-ekonomia lotzen dituen zubirik indartsuena da: "berandu entregatu dugu" dirura — edo QALYetara — bihurtzen du.

## Zergatik axola duen

Reinertsenen araua: "Gauza bakarra kuantifikatzen baduzu, kuantifikatu Atzerapenaren Kostua." Erakunde gehienek badakite proiektu batek zenbat kostatzen duen baina ez hilabete bateko atzerapenak zenbat kostatzen duen, beraz aurrekontuak optimizatzen dituzte denbora-balioa odoletan galtzen duten bitartean. Osasun-softwarerako, gaia literala da: bide-hobekuntza bat atzeratzen den aste bakoitzean, pazienteek denbora gehiago itxaroten dute osasun-egoera okerragoan. CoD NHSko interesdunei aurkezteko esparru matematiko indartsuena da, zure softwarearen *ezean* prezioa jartzen baitu.

## Matematika

```
CoD = entregatu gabe dagoen bitartean galdutako denbora-unitate bakoitzeko onura   (£/aste edo QALY/aste)

Atzerapen-galera osoa = CoD × atzerapenaren iraupena

Lehenespenerako, ikus wsjf-and-cd3.md: CD3 = CoD / iraupena.
```

Software klinikorako, izendatu osasunean zein diruan:

```
CoD_osasuna = astean eragindako pazienteak × pazienteko QALY irabazia
CoD_dirua   = CoD_osasuna × λ (ordaintzeko borondatearen atalasea, £20k–30k/QALY)
              + galdutako astean funtzionamendu-aurrezkiak
```

## Adibide landua

**Operatiboa**: softwareak £200 aurrezten ditu pazienteko bide batean; trust batek 50 paziente prozesatzen ditu astean.

```
CoD = 200 × 50 = £10,000/aste
10 asteko erosketa-atzerapenak 200 × 50 × 10 = £100,000 kostatzen ditu saihestu daitekeen xahuketan.
```

**Klinikoa**: triage-hobekuntza batek 5 asteko itxaronaldia kentzen du (utilitatea 0.68 → 0.80 lehenago) astean 100 pazienteri:

```
Pazienteko QALY irabazia = (5/52) × 0.12 ≈ 0.0115
CoD_osasuna = 100 × 0.0115 = 1.15 QALY/aste
CoD_dirua   = 1.15 × £20,000 ≈ £23,000/aste osasun-balio
```

6 hilabeteko hedapen-atzerapenak ~30 QALY "kostatzen" ditu — IT go-live atzerapen bat gertaera kliniko gisa birformulatzen duen argudioa. (Eskalarako erreferentzia: Black Swan Farming-en Maersk analisi ospetsuak aurkitu zuen CoD ≈ $200k/aste zuten funtzionalitate bakarrak 38 aste itxaron zituela.)

## Software ingeniaritzarekin lotura

CoD [DORA lead time](../dora-metrikak/) eta [fluxu-eraginkortasuna](../fluxu-metrikak/) finantzaz irakurgarri egiten dituen metrika da: lead time × CoD = ilaretan erretako dirua (edo osasuna). Erabilerak:

- **Lehenespena**: sailkatu lana CoD/iraupenaren arabera ([WSJF/CD3](../wsjf-eta-cd3/)) interesdun ozenaren ordez.
- **Prozesuaren ekonomia**: 2 asteko bertsio-erritmoak funtzionalitate bakoitzeko ~1 asteko × CoD atzerapen-kostu esperoa du hedapen jarraituarekin alderatuta — prezioztatu lotea.
- **Erosketak**: NHSren 6–18 hilabeteko erosketa-zikloek CoD bat dute; hura erakusteak larritasunari buruzko elkarrizketak aldatzen ditu (ikus [aurrekontu-inpaktuaren analisia](../aurrekontu-inpaktuaren-analisia/) eskuragarritasunaren kontrapartidarako).

## Tranpak

- **CoD lineala suposatzea**: lan batzuek epemugaren formako balioa dute (data erregulatzaileak — CoD infinitua datatik aurrera, zero lehenago) edo balio gutxitzailea (lehen-mugitzaileen leihoak). Sailkatu larritasun-profila biderkatu aurretik.
- **Inork nahi ez duen irteeraren CoD**: atzerapenak balioa duen gauzak bakarrik kostatzen du; atzeratutako zaborra doakoa da.
- **Atzerapena eta eguneratzea bikoiztea**: [eguneratzeak](../eguneratzea-eta-denbora-lehentasuna/) dagoeneko denbora prezioztatzen du urte anitzeko horizonteetan; CoD horizontearen barruko bertsio operatiboa da. Erabili CoD asteetarako/hilabeteetarako, NPV aldaketa urteetarako.

## Iturriak

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
