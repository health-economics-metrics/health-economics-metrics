# Lan-produktibitatearen eta jardueraren narriadura (Work Productivity and Activity Impairment, WPAI)

WPAI autoerrelatuzko galdetegi baliozkotua da (Reilly, Zbrozek, Dasbach, 1993), osasun-arazo batek ordaindutako lanari eta eguneroko jarduerei zenbat eragiten dien neurtzen duena, normalean azken 7 egunetan. Galera *absentismoan* —literalki galdutako lan-denbora— eta *presentismoan* —fisikoki lanean egonda produktibitate murriztua— banatzen du, eta bigarrena izan ohi da kostu-osagai handiena eta ezkutuenak.

## Zergatik axola duen

Gaixotasun-egunen zenbaketa soilak absentismoa bakarrik ikusten du. Egunik hartzen ez duen baina baldintza kroniko batekin %60ko gaitasunez lan egiten duen kliniko edo ezagutza-langile batek zero ekarpena egiten dio absentzia-erregistroari, baina produktibitate-galera handi eta erreala sortzen du; WPAI kostu ikusezin hori azaleratzeko diseinatuta dago zehazki. Neurri berezi bat ez baina tresna baliozkotu bat denez, bere puntuazioak [pazienteek jakinarazitako emaitzen](../pazienteek-jakinarazitako-emaitzak/) ebidentzia-paketeetan eta gaixotasun-kostuaren azterlanetan erabil daitezke, berrikusleak neurria berriro baliozkotu behar izan gabe. Autoerrelatuzko tresna denez, bera ere PROM bat da, nagusiki sintomak edo bizi-kalitatea baino lanean eta jardueran zentratzeagatik bereizten dena.

## Matematika

```
Absenteeism % = hours_missed_due_to_health / (hours_missed_due_to_health + hours_worked) × 100

Presenteeism %  = self-rated 0–10 impairment while working, × 10
                  (elicited directly via questionnaire, not derived here)

Overall Work Impairment % =
    Absenteeism% + (1 − Absenteeism%/100) × Presenteeism%
    (combines the two so the total can never exceed 100%)

Productivity cost = Overall Work Impairment% / 100 × period_earnings
```

Narriadura orokorraren formula ez da nahita batura sinple bat: bi ehunekoak zuzenean gehitzeak %100 gainditu lezake, beraz presentismoa lan-denboraren *gainerako* (absente ez dagoen) zatian bakarrik aplikatzen da.

## Adibide landua

Migraina duen langile batek 40 orduko aste bat programatuta duela baina horietatik 4 ordu galtzen dituela jakinarazten du:

```
hours_missed = 4, hours_worked = 36
Absenteeism% = 4 / (4 + 36) × 100 = 10%
```

Bereizi, lanean ari den bitartean produktibitatean duen eragina WPAI galdetegian 10etik 3 gisa autoebaluatzen du, hau da, `Presenteeism% = 30%` (urrats hau galdetegiko erantzun gordina da, ez beste zenbaki batzuetatik eratorria):

```
Overall Work Impairment% = 10 + (1 − 10/100) × 30
                          = 10 + 0.9 × 30
                          = 10 + 27
                          = 37%
```

Astean 5 egun eta £800 irabazita (£160/egun):

```
Productivity cost = 37/100 × 800 = £296
```

Ohartu gaixotasun-egunen zenbaketa inozo batek galdutako 4 orduak (%10) bakarrik erregistratuko zituela: presentismo-osagaiak benetako narriadura ia hirukoizten du kontuan hartzean.

## Software ingeniaritzarekin lotura

Honek zuzenean mapatzen du ingeniaritza-taldeen osasun-metriketan:

- **Absentismoa** gaixotasun-baja eta oporrak dira — ikusgarriak, jada jarraituak, eta zati erraza.
- **Presentismoa** nekatuta edo testuinguru-aldaketaz gainkargatuta dagoen ingeniaria da, stand-up guztietan present dagoena baina gaitasun murriztuz diharduena — normalean kostu handiena eta ezkutuenak, eta langile-kopuruarentzat edo asistentzia-datuentzat ikusezina. Horren ordez, [DORAn](../dora-metrikak/) eta [fluxu-metriketan](../fluxu-metrikak/) emaritza murriztu gisa agertzen da, edo narriadura areago ugaritzen duen "interesa" duen [zor teknikoa](../zor-teknikoa/) askatzeko motelago gisa.
- Ingeniaritzaren ikasgaia klinikoaren berdina da: absentzia bakarrik neurtzeak eta "produktibitate-galera" deitzeak sistematikoki gutxiesten du benetako kostua, bertan dauden baina narriatuta dauden guztiak galtzen dituelako.

## Tranpak

- **Autoerrelatuzko oroitzapen-alborapena.** 7 eguneko oroitzapen-leihoak atzera begirako edozein autoerrelatuk dituen distortsio berak ditu.
- **0–10 presentismo-eskala benetako neurketa fisikotzat hartzea.** Ordinala da, autoebaluazioz lortua, ez magnitude fisiko baliozkotua; bertako diferentziak zorrozki lineal edo tarte gisa tratatzea modelatze-erosotasuna da, ez egitate fisiko baliozkotua.
- **WPAI bariante guztien puntuazioak batzea.** WPAIk egoera-espezifikoak diren hainbat bertsio ditu —WPAI:GH (osasun orokorra), WPAI:SHP (osasun-arazo espezifikoa) eta gaixotasun-bariante espezifikoak—, eta bariante ezberdinen puntuazioak ez dira batu edo alderatu behar tresna-bertsio bera direla egiaztatu gabe.

## Iturriak

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
