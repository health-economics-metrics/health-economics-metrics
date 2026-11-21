# Beheranzko baliabideen optimizazioa (Downstream Resource Optimization)

Profesional nagusi baten — GP, erregistratzaile nagusi, aholkulari baten — ordu bat aurrezteak maiz pilaketa-atzerapenak saihesten ditu klinikoen sinadura itxaroten ari diren erizain, administrari eta terapeuten diziplina anitzeko talde (MDT) osoarentzat. Pilaketa desblokeatzearen balioa haren beheranzko guztien emaritza da.

## Zergatik axola duen

Osasun-arretak baimen-kateetan funtzionatzen du: altak aholkulariaren sinaduraren zain daude, tratamendu-planak MDT berrikuspenaren zain, deribazioak triagearen zain. Atea den rola atzeratzen denean, kostua ez da pertsona baten ordua — mendeko rol guztietako denbora ez-aktibo edo blokeatua da, gehi pazienteen denbora zalantzan (ohe-egun gehigarriak, [RTT itxaronaldi](../bidalketatik-tratamendura/) luzeagoak). Hau da murrizketen teoria bide klinikoetan aplikatua: *murrizketan* aurreztutako ordu batek sistema osoaren emaritza marjinala balio du; beste nonbait aurreztutako ordu batek askoz gutxiago.

## Matematika

```
Desblokeatzearen balioa = Σ beheranzko rolen gainean (askatutako ordu blokeatuak × unitate-kostua)
                        + bideko emaritza-irabazia × bide-osatze bakoitzeko balioa

Kontrastea: ate ez den rol batean aurreztutako ordu beraren balioa ≈ rol horren
ahalmen-balioa bakarrik (ikus practitioner-time.md).
```

Identifikatu murrizketa enpirikoki: non egiten du lanak ilara luzeena? Noren sarrera-ontzira dakar atzerapenen trazak?

## Adibide landua

Ataleko altek goizero aholkulariaren berrikuspena behar dute. Aholkulariak egunean 90 min ematen ditu sistemetan barreiatutako informazioa biltzen; berrikuspenak 14:00etarako amaitzen dira, eta egunean 6 altak berandu osatzen dira egun horretarako — bakoitzak saihestu daitekeen ohe-egun bat kostatzen du.

Alta-laburpenen dashboard batek (laborategiak, sendagaiak, banderak ikuspegi batean) bilketa 20 minutura jaisten du; berrikuspenak 11:30ean amaitzen dira:

```
Saihestutako ohe-egunak = 6 alta berantiarretatik 4 × 365 ≈ 1,460 ohe-egun/urte
Beheranzko desblokeatzea: 2 alta-koordinatzaile + farmazia + garraioa
                          arratsalde bakoitzean lehen alferrik-gero-presaka —
                          ~3 langile-ordu/egun blokeatuak askatuak ≈ 1,100 ordu/urte
```

Aholkulariaren bere 70 minutuak balioaren zatirik *txikiena* dira — metrika honen helburua. Balioetsi ohe-egunak mekanismoaren arabera (ikus [aurreztutako ohe-egunak](../aurreztutako-ohe-egunak/)) eta langile-orduak ahalmen gisa.

## Software ingeniaritzarekin lotura

Hau code review, arkitektura-onarpena eta staff engineer-aren sarrera-ontzia da. Bost ingeniarik diseinu bat onar dezakeen pertsona bakarraren zain egun bat ematen dutenean, kostua bost ingeniari-egun da gehi lanaren beraren [atzerapenaren kostuko](../atzerapenaren-kostua/) egun bat — ez berrikusle-ordu bat. Atea den rolaren zeregina konprimitzen duten tresnek (berrikuspen-testuinguru hobea, aurre-egiaztapen automatizatuak, onartzaileak behar duena biltzen duten dashboardak) sistemaren emaritza erosten dute, ez norbanakoaren erosotasuna. Neurtu jasotze/itxarote-denbora murrizketan (ikus [fluxu-metrikak](../fluxu-metrikak/)) — 14:00ko alta-aldapa-ren software-baliokidea da.

## Tranpak

- **Murrizketa ez dena optimizatzea**: atzean ezer ilaran ez dagoen rol baterako tresna ederrek ia sistema-baliorik ez dute sortzen.
- **Murrizketaren migrazioa**: aholkularia desblokeatzen duzu eta murrizketa mugitzen da (farmaziara, garraiora) — modelatu *hurrengo* murrizketa emaritza-irabazi osoak aldarrikatu aurretik.
- **Beheranzko orduak dirutzat zenbatzea**: blokeatutako denboraren askatzea ahalmena da, ohiko [birbideratze-probaren](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/) mende.

## Iturriak

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
