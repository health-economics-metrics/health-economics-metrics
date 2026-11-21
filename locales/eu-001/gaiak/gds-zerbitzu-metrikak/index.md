# GDS zerbitzu-metrikak (GDS Service Metrics)

Erresuma Batuko Government Digital Service (GDS) Service Manual-ak lau KPI agintzen ditu gobernuaren zerbitzu digital guztientzat: **transakzio bakoitzeko kostua, erabiltzaileen asebetetzea, osatze-tasa eta hartze digitala**. Batera zerbitzu digital publiko baten ekonomia minimoa dira — eta NHSren zerbitzu digitalek heredatzen duten txantiloia.

## Zergatik axola duen

GDS metrikek gobernuaren digitalizazioaren hamarkada bat finantzatu zuen kanal-aldaketaren negozio-kasua kodetzen dute: Digital Efficiency Report-ek aurkitu zuen transakzio digitalak telefonoak baino ~20× merkeagoak eta aurrez aurrekoak baino ~50× merkeagoak zirela (tokiko gobernuaren zifrak: weba £0.15, telefonoa £2.83, aurrez aurrekoa £8.62). Baina aurrezkiak jendeak bide digitala *osatzen* duenean (osatze-tasa) kanal garestiaren *ordez* (hartzea) bakarrik gauzatzen dira — lau KPIak eredu ekonomiko bat dira, ez lau dashboard.

## Matematika

```
Transakzio bakoitzeko kostua = zerbitzuaren kostu osoa / osatutako transakzioak
Osatze-tasa                  = osatutakoak / hasitako transakzioak × 100
Hartze digitala              = transakzio digitalak / kanal guztietako transakzioak × 100
Erabiltzaileen asebetetzea   = % asebeteta+oso asebeteta (5 puntu, zerbitzu barruko inkesta)

Kanal-aldaketaren aurrezkia = bolumena × hartze-aldaketa × (kostua_kanal_zaharra − kostua_digitala)
… ken hutsegite-eskaria: (1 − osatze-tasa) × ordezko kanalaren kostua
```

## Adibide landua

NHSren hitzordu-kudeaketa zerbitzu bat: 2M transakzio/urte, gaur egun %70 telefonoa (£3.20/deia) / %30 digitala (£0.25). Birdiseinu batek hartze digitala %55era eta osatzea %84tik %93ra igotzen ditu:

```
Hartze-aldaketaren aurrezkia = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/urte

Hutsegite-eskariaren aurrezkia: huts egindako bide digitalak telefonora itzultzen dira
  lehen:  2M × 0.30 × 0.16 × £3.20 = £307,200
  ondoren: 2M × 0.55 × 0.07 × £3.20 = £246,400
  garbia £60,800/urte — osatze-hobekuntzek hartze-irabaziak babesten dituzte

Asebetetzea da adierazle nagusia: asebete gabeko erabiltzaileak telefonora itzultzen dira,
beraz asebetetze-jaitsiera batek hartze-higadura iragartzen du agertu aurretik.
```

## Software ingeniaritzarekin lotura

Lau KPI hauek [kostu-ondorio taula](../kostu-ondorio-analisia/) baten produkzio-mailako adibidea dira: kostu-metrika bat, hiru emaitza-metrika, inoiz puntuazio batean konprimitu gabe. Produktu-ingeniarientzat ikasgai operatiboak: **osatze-tasa inbutuaren instrumentazio-arazoa da** (abandonu-puntu guztiak aurkigarriak eta konpongarriak dira); **transakzio bakoitzeko kostua [hodei-unitateen ekonomia](../hodei-unitateen-ekonomia/) da** gehi laguntza duten kanalen kostuak; **hartzea ekitate-metrika ezkutatua da** — kanalez aldatu ezin duten edo nahi ez duten erabiltzaileak neurriz gaindi adinekoak, ezgaituak eta pobreak dira, beraz kanalen itxiera oldarkorrak "aurrezkiak" sarbide-kaltea bihurtzen ditu (ikus [irismena eta ekitatea](../irismena-eta-ekitatea/)). KPIak argitaratzea (GOV.UKk egiten du, zerbitzu bakoitzeko) berez mekanismo bat da: gardentasunak aurreikuspenak diziplinatzen ditu [onuren gauzapenaren](../onuren-gauzapena/) auditoriek bezala.

## Tranpak

- **Hartzea behartuz**: telefono-linea ixteak hartzea igotzen du eta hutsegite-eskaria lehen lerroko langileei botatzen die; neurtu sistema osoaren kostua.
- **Osatzea 2. orritik neurtua**: inbutua abandonu-puntuaren ondoren hasteak tasa lausengatzen du.
- **Transakzio bakoitzeko kostuak laguntza digitaleko laguntza eta hutsegite-eskariaren kudeaketa ez ikustea.**
- **Asebetetze-inkestak osatze arrakastatsuan bakarrik** — asebete gabeak gehienetan ez dira inkestara iristen.

## Iturriak

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
