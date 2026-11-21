# AAren inbertsioaren itzulkina (AI Return on Investment)

AAren ROI AA ekimenei egotz dakiekeen P&L itzulkin neurgarria da. Erreferentzia gogorra: MITen 2025eko "GenAI Divide" ikerketak aurkitu zuen, enpresen GenAI inbertsioan 30–40 mila milioi $ egin arren, **pilotuen ~%95ek ez zuela P&L itzulkin neurgarririk** — eta arrakastatsuak izandako %5ak ohitura identifikagarriak partekatzen zituen.

## Zergatik axola duen

Osasun-sistemek izena dute AA pilotuen ereduarentzat: **pilotitis** — betiko pilotatu eta inoiz eskalatu ez diren aplikazio itxaropentsuen NHS hilerria. MITen aurkikuntzak osasun-teknologien ebaluazioak jada dakienarekin bat datoz: balio-aldarrikapenek aurrez zehaztutako amaiera-puntuak behar dituzte, egozpenak konparatzaileak behar ditu, eta "denek sentitzen dute lagun egiten duela" ez da onura-lerro bat. MIT datuetako gutxiengo arrakastatsua kostu-oinarri jarraigarriak zituen back-office automatizazioan kontzentratu zen, eta **erositako tresnek ~%67ko arrakasta-tasa izan zuten, barne eraikuntzek horren heren bat inguru** — AA inbertsio-kasu guztietan egon beharreko aurrekoak (ikus [eraiki vs erosi](../eraiki-vs-erosi/)).

## Matematika

```
AA ROI = (egotz daitekeen onura − AAren kostu osoa) / AAren kostu osoa

AAren kostu osoa = lizentziak/inferentzia (ikus inference-unit-economics.md)
                 + integrazioa + datuen prestasuna + ebaluazioa
                 + lan-fluxuaren birdiseinua + gobernantza/bermea
                 (lizentzia izan ohi da izendatzailearen gutxiengoa)

Egotz daitekeen onura: oinarri edo kontrol baten aurka neurtua, cash / ahalmena /
kalitatea sailkatuta cash-releasing-vs-non-cash-releasing.md arabera
```

## Adibide landua

Ospitale-talde batek AA hedatzen du bi erabilera-kasutan:

```
A erabilera-kasua — gutun klinikoen idazketa (back office, jarraigarria):
  oinarria: kanpoko transkripzioa £380k/urte
  ondoren:  transkripzio-kontratua bertan behera; klinikoen berrikuspen-denbora +£60k
  AAren kostua: £120k/urte guztira
  ROI = (380k − 60k − 120k) / 120k ≈ %167 — diru-sarrera sortzen duena, auditagarria ✓

B erabilera-kasua — "AA copilotoa klinikoentzat" (zabala, jarraitu gabea):
  onura-aldarrikapena: "4.000 langileren denbora aurrezten du" — oinarririk jaso gabe
  neurtutako P&L efektua: frogagarririk ez
  → %95eko poltsa, benetan lagun egiten duen ala ez kontuan hartu gabe
```

Aldea ez da AAren kalitatea: onurak **oinarri, jabe eta aurrekontu-lerro bat** zuen ala ez da ([onuren gauzapena](../onuren-gauzapena/)).

## Software ingeniaritzarekin lotura

AA inbertsiorako HTA itxurako gida: **antolatu ebidentzia [NICE ESF mailak](../nice-ebidentzia-estandarren-esparrua/) bezala** — demo-mailako ebidentzia arrisku baxuko tresnentzat, pilotu kontrolatuak erakunde osoko gastuaren aurretik, hedapen-ateak aurrez erregistratuta ([DiGAren](../alemaniako-diga-fast-track/) behin-behineko zerrendatzea epearekin eredua); **zenbatu kostu-saihestea osasun-ekonomiak eskaera-saihestea zenbatzen duen bezala** — benetakoa da aurrekontu-lerro zehatz bat mugitzen denean bakarrik; eta **prezioztatu pilotua bera [EVPIrekin](../informazio-perfektuaren-balio-esperoa/)** — hedapen-erabakia alda ezin dezakeen pilotuak £0 balio du. Garatzaile-tresnen zatirako, ikus [AAren garatzaile-produktibitatea](../aaren-garatzaile-produktibitatea/).

## Tranpak

- **Onuraren difusioa**: milaka erabiltzailetan mehe banatutako balioa neurtezina da eraikuntzaz; aukeratu oinarri kontzentratu eta jarraigarriak dituzten erabilera-kasuak.
- **Lizentzia bakarreko kostua**: integrazioak, ebaluazioak eta lan-fluxuaren birdiseinuak izendatzaile errealaren zatirik handiena izan ohi dute.
- **Egozpenaren lapurreta**: prozesuaren birdiseinuarekin batera hedatutako AAk delta osoa aldarrikatzen du.
- **Pilotu hondoratuaren eskalada**: huts egindako pilotuak luzatzea gelditzeak porrota onartzea dakarrelako; ilunabar-data aurrez adostu behar da.

## Iturriak

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
