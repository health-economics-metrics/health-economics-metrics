# Tarifa nazionala eta unitate-kostuak (National Tariff and Unit Costs)

NHSk hornitzaileei jarduera ordaintzen die arauetan oinarritutako prezio-zerrenda nazional baten pean — historikoki National Tariff / Payment by Results, **NHS Payment Scheme (NHSPS)**k ordezkatua 2023ko apirilaren 1ean. Prezioen atzean unitate-kostuen azpiegitura nazionala dago: **National Cost Collection (NCC)** eta **PSSRU Unit Costs of Health and Social Care** konpendioa.

## Zergatik axola duen

Hauek NHSko negozio-kasu sinesgarri guztien izendatzaileak dira. Aldarrikapen batek "kanpo-kontsulta bat £160 baliorik du" edo "6. Bandako erizain-ordu batek £31 kostatzen du" dioenean, zenbaki horiek azpiegitura honetatik datoz — eta asmatutako zifren ordez zifra ofizialak erabiltzeak egiten ditu ebaluazio independenteak alderagarri eta finantza-taldeak kooperatibo. Saltzaile baterako, tarifak diru-sarreren aldea ere definitzen du: zure softwareak ahalbidetzen duen jarduerak (kontsulta gehigarriak, berriz betetako oheak) eskema-prezioetan balioesten da.

## Matematika

```
Jarduera-unitate bakoitzeko tarifa-prezioa (HRG-kodetutako epealdia, kanpo-kontsulta)
  = batez besteko unitate-kostu nazionala (NCCtik) × Market Forces Factor (tokiko doikuntza)
  NHSPSren pean: elementu finko + aldakorren nahasketa ("aligned payment and incentive")

NCC unitate-kostua = trustak jakinarazitako jarduera-motaren kostu osoa / jarduera-bolumena
                     (Patient-Level Information and Costing Systems, PLICS, gainean eraikia)

PSSRU konpendioa: ~80 unitate-kostu estandar (GP kontsulta, erizain-ordua mailaka,
ED joatea…) — Erresuma Batuko ebaluazio ekonomikoetako iturri lehenetsia.
```

## Adibide landua

Zure softwareak 6. Bandako erizain baten ordu 1/egun askatzen du 250 eguneko lan-urte batean:

```
PSSRUn oinarritutako 6. Bandako kostua gastu orokorrak barne ≈ £31/ordu (egiaztatu egungo edizioa)
Ahalmen-balioa = 250 × £31 = £7,750/erizain/urte (diru-sarrerarik sortzen ez duena)
```

Bestela erizainak 2 kanpo-kontsulta jarraipen gehigarri egiten ditu egunean ~£160 eskema-balioan: 500 × £160 = **£80,000/urte finantzatutako jarduera** — hamar aldiko aldea aldarrikatutako balioan birbideratzearen arabera, guztia unitate-kostu ofizialetatik. Bi aldarrikapenak auditagarriak dira izendatzaileak argitaratuta daudelako; hori da guztiaren helburua.

## Software ingeniaritzarekin lotura

Hau **barne prezio-liburuaren** eredua da. Erresuma Batuko osasun-ekonomiak funtzionatzen du ebaluazio guztiek argitaratutako unitate-kostu berberak erabiltzen dituztelako; ingeniaritza-erakunde gehienek hori ez dute, beraz negozio-kasu bakoitzak bere ingeniari-ordu, intzidentzia eta hedapen baten kostua asmatzen du. Plataforma-talde batek zehazki halako liburu bat argitara dezake — ingeniari-ordu bakoitzeko kostu osoa mailaka, intzidentzia bakoitzeko larritasunaren arabera, build-minutu bakoitzeko — eta proposamen guztietan erabiltzea eskatu. Chargeback/showback sistemek tarifaren hutsegite-modu ezagunak ere errepikatzen dituzte: batez besteko kostuko prezioztatzeak bolumen-manipulazioa bultzatzen du, ordainketa finkoek azpi-hornidura. NHSPSren eboluzioa jarduera-ordainketa hutsetik finko+aldakor nahasketara hogei urteko pizgarri-diseinuko ikasgaiak dira barne plataforma-prezioetarako.

## Tranpak

- **Zifra zaharkituak**: NCC, PSSRU eta NHSPS prezioak urtero eguneratzen dira — datatu zenbaki guztiak.
- **Tarifa-prezioa ≠ kostua**: prezioak doikuntzak dituzten batez besteko nazionalak dira; zure tokiko kostu marjinala desberdina da (ikus [kostu marjinala vs batez bestekoa](../kostu-marjinala-vs-batez-bestekoa/)).
- **Ahalmena tarifan balioestea** jarduera gehigarria benetan entregatzeko eta horregatik ordaintzeko mekanismorik gabe.

## Iturriak

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
