# Itxaron-zerrendaren eragina (Waiting List Impact)

Itxaron-zerrendaren eragina aurrezitako gaitasun klinikoa itxaron-zerrendatik kendutako (edo azkarrago igarotzen diren) paziente bihurtzen du. Aurrezitako orduak kontsulta-hutsune gehigarri bihurtzeak zuzenean murrizten du trust baten itxaron-zerrendaren tamaina: askatutako gaitasuna *zertarako* den osasun-sistema bati erakusteko modurik ukigarriena.

## Zergatik axola duen

Aukerako (elektibo) itxaron-zerrenda pandemiaren osteko NHSren erronka definitzailea da (bere tamaina metrika politiko nazionala da), eta trust bakoitzak haren aurkako elektibo-berreskurapen programa bat du. "2,000 erizain-ordu aurrezten ditu" dioen negozio-kasua abstraktua da; "4,000 hitzordu-hutsune gehigarri sortzen ditu, itxaroten ari diren 3,800 paziente artatuz, espezialitatearen zerrenda %9 murriztuz" dioena Chief Operating Officer batek bere batzordera eraman dezakeen istorioa da. Itxaron-zerrendaren eragina [diru-sarrera zuzena askatzen ez duen gaitasunaren](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/) *kontu-unitate* naturala da.

## Matematika

```
Extra slots        = hours released / slot duration × utilization
Patients seen      = extra slots × (1 − DNA rate)
List reduction     = patients seen − induced new demand
Waiting-time gain  = queueing improvement from higher service rate
                     (for stable queues, cutting the backlog N by ΔN at
                     service rate μ pulls everyone forward ~ΔN/μ)
```

Itxaronaldi laburragoen osasun-balioa: pazienteek tratamendu aurreko erabilgarritasun-egoera baxuagoan aste gutxiago ematen dituzte — QALY aritmetika [deribaziotik tratamendura](../bidalketatik-tratamendura/) gaian dago.

## Adibide landua

Dokumentazio anbientaleko softwareak kontsultako 20 erizainetako bakoitzari 45 min/egun aurrezten dizkio. 250 egunetan: 20 × 0.75 × 250 = 3,750 ordu/urte.

```
Slots (30 min, 85% usable) = 3,750 / 0.5 × 0.85 = 6,375 slots
Patients seen (7% DNA)     = 6,375 × 0.93       ≈ 5,929/year
```

12,000 pazienteko zerrenda eta eskariarekin bat datorren urteko 24,000 hitzordu-gaitasuna duen espezialitate batean, ~5,900 hitzordu gehigarrik batez besteko itxaronaldiak gutxi gorabehera laurden batean murrizten dituzte — trusta nabarmen hurbilduz 18 asteko estandarrera, langilerik kontratatu gabe. Bertaratze bakoitzeko ~£160 eskema-baliorekin jarduera ~£949,000/urte balio du (ikus [tarifa nazionala eta kostu unitarioak](../tarifa-nazionala-eta-unitate-kostuak/)) — baina aurkeztu lehenik *itxaron-zerrendaren* marko hori; sistema horren arabera kudeatzen da.

## Software ingeniaritzarekin lotura

Itxaron-zerrenda atzeratutako lan-zerrenda (backlog) bat da, eta backlog-murrizketaren ekonomia bi norabideetan transferitzen da. Osasunetik softwarera: baloratu backlog-murrizketa *erabiltzaileek* baliorako itxaroten duten denboraren arabera, ez itxitako elementuen arabera (ilaran dagoen elementu bakoitzeko [atzerapen-kostua](../atzerapenaren-kostua/)). Softwaretik osasunera: Little-en Legeak dio zerrenda txikitzen dela bakarrik zerbitzu-tasa iristeen tasa baino handiagoa bada — igotzen ari diren deribazioek xurgatutako gaitasun-irabaziek itxaronaldiak aldatu gabe uzten dituzte, beraz modelatu iristeak ere. Eta bi arloetan, lehenetsi larritasunez pisatutako balioaren arabera (urgentzia klinikoko kategoriak ↔ [larritasun-aldatzaileak](../qaly-defizita-eta-larritasun-modifikatzaileak/)), ez lehen-sartu-lehen-atera ordenaren arabera.

## Tranpak

- **Hutsuneak ≠ pazienteak**: DNA tasak (bertaratu ez diren hitzorduak) eta askatutako denboraren zati ezin erabilgarriak ahaztea.
- **Eskari induzitua**: gaitasun gehigarri ikusgarriak deribazioak erakartzen ditu; zerrendaren gaineko eragin garbia gordina baino txikiagoa da.
- **Dirua aldarrikatzea**: itxaron-zerrendaren eragina gaitasun-balioa da; dirua aldarrikatzea (backlog-lanaren azpikontratazio saihestua) beste lerro bat da — ikus [saihestu daitezkeen azpikontratazio-kostuak](../saihestu-daitezkeen-azpikontratazio-kostuak/).

## Iturriak

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
