# Fluxu-metrikak (Flow Metrics)

Fluxu-metrikek lana entrega-sistema batetik nola mugitzen den neurtzen dute: ziklo-denbora, lead time, emaritza, abian dagoen lana (WIP) eta fluxu-eraginkortasuna. Little-en legeak gobernatzen ditu — ospitaleko oheak eta itxaron-zerrendak gobernatzen dituen ilara-matematika bera.

## Zergatik axola duen

Entrega-denboraren zatirik handiena ez da lana — itxaronaldia da. Ezagutza-lanaren fluxu-eraginkortasuneko azterketek rutinaz aurkitzen dute elementuak igarotako denboraren **%5–15ean** bakarrik lantzen direla aktiboki; gainerakoa ilarak dira. Horrek esan nahi du azelerazio merkeena ilaren ezabatzea dela, ez kontratatzea — hain zuzen ospitaleko pazienteen fluxu-programek oheei buruz aurkitu zuten ikuspegia. [Atzerapenaren kostua](../atzerapenaren-kostua/) duen edozertarako, fluxu-metrikek atzerapen-kostua non pilatzen den lokalizatzen dute.

## Matematika

```
Ziklo-denbora   = t(amaituta) − t(hasita)
Lead time       = t(entregatuta) − t(eskatuta)     (lan aurreko ilara barne)
Emaritza        = osatutako elementuak / aldia
WIP             = hasitako baina amaitu gabeko elementuak
Fluxu-eraginkortasuna = denbora aktiboa / (aktiboa + itxarote-denbora) × 100

Little-en legea:  batez besteko WIP = emaritza × batez besteko ziklo-denbora
                  (baliokideki: ziklo-denbora = WIP / emaritza)
```

Little-en legea palanka da: emaritza finkoan, WIP murrizteak ziklo-denbora proportzionalki murrizten du. Ospitaleak ere gidatzen ditu: `okupatutako oheak = egunean sarrerak × egonaldiaren iraupena`.

## Adibide landua

Talde batek 40 elementu ditu abian eta astean 10 osatzen ditu: ziklo-denbora = 40/10 = 4 aste. WIP mugak ezartzen dituzte, WIP 15era jaitsiz: ziklo-denbora = 15/10 = **1.5 aste** — jende bera, emaritza bera, %62 entrega azkarragoa, ilara-diziplinatik soilik.

CoDrekin prezioztatuta: elementuek batez beste £3,000/aste atzerapen-kostua badute, elementu bakoitzak orain 2.5 aste gutxiago pasatzen ditu ilaran: 10 elementu/aste × 2.5 × 3,000 = **£75,000/aste atzerapen-kostu ezabatua** — ezer kostatzen ez duen politika-aldaketa batetik.

Ospitaleko ispilua: 40 sarrera/egun × 6.0 eguneko LOS = 240 ohe; LOS barruko itxarote ez-klinikoa 5.6 egunera murrizten bada, 16 ohe libratzen dira ([egonaldiaren iraupena](../egonaldiaren-iraupena/)) — lege bera, palanka bera.

## Software ingeniaritzarekin lotura

Fluxu-metrikak entrega-ingeniaritzaren eta osasun-eragiketen arteko hizkuntza partekatua dira:

- **PR azpifase-erreferentziak** (LinearB, ~8M PR): pickup-denbora elite < 7h, berrikuspena < 6h, ziklo osoa < ~26h — pickup-denbora ilara hutsa da, erasotzeko lehen gauza.
- **[Itxaron-zerrendak](../itxaron-zerrendaren-eragina/)** backlog-ak dira; **[RTT](../bidalketatik-tratamendura/)** lead time da; **[ohe-okupazioa](../aurreztutako-ohe-egunak/)** WIP da. Hobekuntzak bi norabidetan transferitzen dira: WIP mugak ↔ sarreren leuntzea; ilara-denboraren instrumentazioa ↔ bide-faseen jarraipena.
- %15etik beherako fluxu-eraginkortasuna normala da bi domeinuetan, eta biek ezkutatzen dute *jendea* lanpetuta dagoelako *lana* itxaroten dagoen bitartean — neurtu lanaren erlojua, ez langileena.

## Tranpak

- **Erabilera-gurtza**: langileen erabilera %100era bultzatzeak ilara-denborak ez-linealki lehertzen ditu (M/M/1: itxaronaldia ∝ ρ/(1−ρ)) — %95 okupatutako ospitaleak blokeatzen diren eta %95 esleitutako taldeak gelditzen diren arrazoia.
- **Banaketa okertuen gaineko batez bestekoak**: ziklo-denborak isats lodikoak dira; aurreikusi pertzentilekin (p85), ez batez bestekoekin.
- **WIP gorako lana errefusatuz murriztea** eta fluxu-hobekuntza deitzea — eskaria ez da desagertu, neurketa-mugatik kanpo ilaratu da (ospitale-bertsioa: anbulantziak ED kanpoan itxaroten).

## Iturriak

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
