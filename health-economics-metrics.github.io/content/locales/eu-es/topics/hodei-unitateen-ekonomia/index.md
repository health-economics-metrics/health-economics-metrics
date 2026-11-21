# Hodei-unitateen ekonomia (Cloud Unit Economics, FinOps)

Hodei-unitateen ekonomiak hodei-gastu gordina **irteera-unitate bakoitzeko kostu** bihurtzen du — bezeroko, transakzioko, ebatzitako kasuko, tokeneko. Hau da "gure AWS faktura £400k/hilabete da" esaldia "paziente bat zerbitzatzeak £0.83 kostatzen du" bihurtzen duen FinOps gaitasuna.

## Zergatik axola duen

Gastu osoko zenbakiek ezin dituzte axola duten galderak erantzun: produktua eraginkorragoa edo eraginkortasun gutxiagokoa bihurtzen ari al da? Hazkundeak marjina hobetzen edo suntsitzen du? Zenbat kobratu behar dugu? Unitate-kostuek hirurak erantzuten dituzte. Osasun digitalerako zehazki, "ebatzitako kasuko kostua" osasun-zerbitzu bateko unitate-kostua *da* — komisiodun batek beste zerbitzu guztietarako erabiltzen dituen [National Cost Collection](../tarifa-nazionala-eta-unitate-kostuak/) zifrekin zuzenean alderagarria, eta horrek hizkuntza naturala bihurtzen du bide digitalak tradizionalekin prezioztatzeko.

## Matematika

```
Unitate-kostua = esleitutako kostu osoa (partekatuak/plataformakoak barne) / entregatutako unitateak

Bi familia:
  baliabide-eraginkortasuneko unitateak: kostua/GB gordeta, kostua/vCPU-ordu, kostua/token,
                                          kostua/build-minutu
  negozio-unitateak:                      kostua/bezero, kostua/transakzio, kostua/kontsulta,
                                          kostua/ebatzitako-kasu

Marjinal vs batez besteko diziplina aplikatzen da (marginal-vs-average-cost.md):
konprometitutako/erreserbatutako gastuak unitate-kostu marjinala ≈ 0 bihurtzen du
hurrengo konpromiso-urratsera arte — prezioztatu hedapen-erabakiak marjinalean,
eraginkortasun-joerak batez bestekoan.
```

## Adibide landua

Triage digitaleko zerbitzu bat: hodei-gastua £62,000/hilabete (konputazioa £30k, datuak £18k, plataforma partekatuaren esleipena £14k), 380.000 triage-episodio/hilabete kudeatzen dituena:

```
Episodio bakoitzeko batez besteko kostua = 62,000 / 380,000 ≈ £0.163

Komisiodunaren konparaketa: telefono bidezko triagea ≈ £8–12/deia, GP kontsulta ≈ £42
→ episodio digitala alternatiba humano merkeenaren ~%2an dabil — gds-service-metrics.md-ren
kanal-aldaketaren ekonomia, kostuaren aldetik.

Joeraren egiaztapena: iaz £0.21/episodio 240k episodiotan → eskala-ekonomia hobetzen
(plataformaren kostu finkoak amortizatzen), QBRn titular bat merezi duena.
```

## Software ingeniaritzarekin lotura

Unitate-ekonomia ingeniaritza-hautuak finantzentzat irakurgarri bihurtzen diren lekua da: episodio bakoitzeko kostua erdira jaisten duen arkitektura prezio-abantaila da; superlinealki eskalatzen dena metrika honetan bakarrik ikusten den bonba da. Osasun-kostuen kalkulutik transferitzen diren jardunbideak: **argitaratu esleipen-arauak** (kostu partekatuek unitate-zifrak desitxuratzen zituzten PLICS-ek paziente-mailako kostuak estandarizatu arte — zure plataforma-kostuen esleipenak zehaztasun bera behar du); **aukeratu erosleak pentsatzen dituen unitateak** (komisiodunek episodioak erosten dituzte, ez vCPUak); eta elikatu unitate-kostuak [ICER](../kostu-eraginkortasun-gehigarriaren-ratioa/) eta [aurrekontu-inpaktu](../aurrekontu-inpaktuaren-analisia/) eredu guztietan kostu-izendatzaile autoritatibo gisa. AA funtzionalitateetarako unitatea tokena da — ikus [inferentziaren unitate-ekonomia](../inferentziaren-unitate-ekonomia/).

## Tranpak

- **Kostu partekatuak alde batera uztea**: plataforma/segurtasun/on-call esleipenak kanpo uzten dituzten unitate-kostuek %30–50 gutxiesten dute eta auditorian erortzen dira.
- **Izendatzaile hutsalak**: "API dei bakoitzeko kostua" lausengari; "pazientearen episodio osatu bakoitzeko kostua" informatiboa.
- **Erabaki marjinalen batez besteko kostuko prezioztapena**: marjinalki doakoa den erabilerarengatik taldeei batez besteko unitate-kostua kobratzeak xahuketa-saihestearen antzerkia bultzatzen du (ikus [tarifa nazionala](../tarifa-nazionala-eta-unitate-kostuak/) pizgarri-akats honen NHS bertsiorako).

## Iturriak

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
