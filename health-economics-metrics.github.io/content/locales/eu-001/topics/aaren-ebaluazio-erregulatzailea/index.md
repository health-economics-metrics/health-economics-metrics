# AAren ebaluazio erregulatzailea (AI Regulatory Evaluation)

Osasun-arretan AA gobernatzen duten esparru erregulatzaileak — FDAren Software as a Medical Device (SaMD) araubidea **Predetermined Change Control Plans (PCCP)** direlakoekin, eta mundu errealeko ebaluazio-programak, hala nola NHS AI in Health and Care Award — eta ekonomikoki zenbat kostatzen duten eta zer ahalbidetzen duten.

## Zergatik axola duen

Erregulazioak **merkatuan sartzeko ebidentzia-kostua** eta **ondorengo eredu-eguneratze bakoitzaren kostua** zehazten ditu; AA produktuetan, bigarrena maiz garrantzitsuagoa da. FDAren modu tradizionalak (eredua blokeatu; aldaketetarako berriz baimendu) etengabeko hobekuntza ekonomikoki latz bihurtzen zuen. **PCCP gidak (2024ko abenduan behin betikoa)** ekonomia aldatu zuen: fabrikatzaile batek etorkizuneko eredu-eguneratze *zehatzak* aurrez baimen ditzake — planifikatutako aldaketen deskribapena, aldaketa-protokolo bat (bakoitza nola balioztatuko den) eta inpaktu-ebaluazioa —, eta hobekuntza onartuak aurkezpen berririk gabe argitaratzen dira. 1.000 gailu baino gehiagok dute AA gaitutako FDA baimena; FDAk orain mundu errealeko errendimenduaren monitorizazioa ere aztertzen du (aurrez zehaztutako metrikak: oinarrizko FP/FN tasak, kalibrazio-noraeza, domeinu-aldaketaren adierazleak).

## Matematika

PCCP [DORA lead time](../dora-metrikak/) ekonomia da, eredu erregulatuei aplikatuta:

```
Eredu-eguneratze bakoitzaren kostua (tradizionala) = berriz aurkezteko kostua + berrikuspen-atzerapena × CoD
Eredu-eguneratze bakoitzaren kostua (PCCP barruan) = protokoloa exekutatzeko kostua bakarrik

Eguneratzeen ekonomia produktuaren bizitzan zehar:
  N eguneratze × (aurkezpen-kostua + berrikuspen-hilabeteak × atzerapenaren kostua hilabeteko)
  vs PCCP idazteko behin-betiko kostua + N × protokolo-exekuzioak
```

NHS AI Award ereduan, metrika-multzoa zehaztasuna baino zabalagoa da: mundu errealeko ebaluazio independenteek errendimendu klinikoa, lan-fluxuaren/ezarpenaren efektuak eta inpaktu ekonomikoa ebaluatzen dituzte — [eraginkortasuna → eraginkortasun errealista → kostu-eraginkortasuna](../aaren-garatzaile-produktibitatea/) kateak instituzionalizatuta.

## Adibide landua

Erradiologiako AA saltzaile batek hiruhileko eredu-hobekuntzak planifikatzen ditu 3 urtez (12 eguneratze):

```
Tradizionala: 12 × (£80k aurkezpena + 4 hilabete × £50k/hilabete atzeratutako onura CoD)
            = 12 × £280k = £3.36M
PCCP bidea:   £250k PCCP idazketa + 12 × £30k protokolo-exekuzioa = £610k
Aurrezkia ≈ £2.75M — eta pazienteek hobekuntza bakoitza ~4 hilabete lehenago jasotzen dute:
12 × 4 hilabete × eguneratzearen onura klinikoa, berez QALY lerro bat.
```

PCCP **hedapen-maiztasunak balio klinikoa duela** aitortza erregulatzailea da — biltegi honen kausa-kate nagusia, erregulatzaile batek onartua.

## Software ingeniaritzarekin lotura

PCCP ondo ingeniatzea software-arazo bat da: aurrez zehaztutako ebaluazio-multzoak, bertsionatutako datu-multzoak, balioztatze-pipeline automatizatuak, noraeza-monitorizazioa — hedapen jarraituaren lehengusu erregulatua, non "deploy gate" kode-berrikuspena beharrean protokolo balioztatu bat den. Eval azpiegitura helduak dituzten taldeek ([AAren kalitate-metrikak](../aaren-kalitate-metrikak/)) PCCPak merke lortzen dituzte; ez dutenek ikusten dute murrizketa erregulatzailea benetan ingeniaritza-heldutasunaren murrizketa dela. NHSn sartzen diren produktuetarako, pila paraleloa DTAC (segurtasun klinikoa, datuen babesa, elkarreragingarritasuna) plus [NICE ESF](../nice-ebidentzia-estandarren-esparrua/) ebidentzia-mailak dira — aurrekontuan sartu guztiak merkatuan sartzeko [TCO](../jabetzaren-kostu-osoa/) gisa.

## Tranpak

- **PCCP irismena handitzeko ametsak**: aldaketa-mota *zehaztuak* bakarrik daude aurrez baimenduta; arkitektura-aldaketek edo erabilera berriek berrikuspen osoa behar dute.
- **Mundu errealeko noraeza monitorizatu gabe**: abiarazteko errendimenduan baimena + populazio-noraeza isila = baimendutako mugatik kanpo dabilen produktua; monitorizazioa itxaropen erregulatzailea eta autobabesa da.
- **Baimena balioarekin nahastea**: FDA/UKCA baimena ≠ norbaitek ordainduko duela; hori [HTA](../osasun-teknologien-ebaluazioa/) langa da, bereizita egiten dena.

## Iturriak

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
