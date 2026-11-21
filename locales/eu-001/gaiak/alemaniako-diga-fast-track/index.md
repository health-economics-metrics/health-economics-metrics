# Alemaniako DiGA fast-track (Germany's DiGA Fast-Track)

DiGA (Digitale Gesundheitsanwendungen) Alemaniako "errezetaz erabiltzen diren aplikazioen" bide legala da — medikuek onartutako osasun-aplikazioak errezetatzen dituzten eta lege-aseguruak itzuli behar dituen munduko lehen sistema nazionala. Terapia digitalak eskala nazionalean ordaintzeko esperimentu bizi nagusia da.

## Zergatik axola duen

DiGAk osasun digitaleko enpresa guztiek egiten duten galderari — "nork ordainduko du benetan?" — legeriaren bidez erantzun zion (DVG, 2019). Diseinua nabarmena da:

- **Erabaki azkarra**: BfArMek (erregulatzaileak) 3 hilabeteko epean erabaki behar du.
- **Behin-behineko zerrendatzea**: aplikazioak 12 hilabetez zerrenda daitezke *oraindik ebidentzia sortzen ari diren bitartean* — diru-sarrerak lortuz beren azterketa giltzarrian.
- **Ebidentzia-epea**: "osasun-arretako efektu positiboa" frogatu (onura medikoa, edo pazienteari garrantzitsua den egiturazko/prozedurazko hobekuntza) azterketa konparatibo baten bidez — normalean RCT bat — edo zerrendatik ezabatu. Behin-behineko sarreren erdiak inguru ez dira finkatzen.
- **Prezioa**: fabrikatzaileak 1. urteko prezioa libreki ezartzen du; gero aseguratzaileen federazioarekin negoziatzen da. 3 hilabeteko hasierako prezioen mediana €500 inguru; errendimenduan oinarritutako prezio-elementuak 2026tik aurrera.

Merkatuaren errealitate-egiaztapena (2024 amaierara arteko ikerketa): ~68 aplikazio zerrendatuta, >1M errezeta metatuak, errezeten ~%81 aktibatuta, ~€234M aseguratzaileen gastu metatua — benetako merkatua, baina eskasa harrabotsaren aldean, eta aktibazioaren ondorengo atxikimendua puntu ahula izaten jarraitzen du.

## Matematika

DiGAren sortzaile guztiek exekutatzen duten eredu komertziala:

```
Diru-sarrerak = errezetak × aktibazio-tasa × errezeta-aldi bakoitzeko prezioa
Ebidentzia-kostua = RCT giltzarria (normalean €1M–3M) 12 hilabeteko leihoan
Balio esperoa = P(ebidentziak arrakasta) × egoera egonkorreko diru-sarrerak − ebidentzia-kostua

~%50eko finkatze-hutsegitearekin, P zintzoki ebaluatu behar da — arloaren erdiak
RCT dirua gastatzen du eta zerrendatzea galtzen du.
```

## Adibide landua

Depresioa kudeatzeko aplikazio bat behin-behinekoz zerrendatzen da €450/hiruhilekoan:

```
1. urtea: 20,000 errezeta × %81 aktibazioa × €450 ≈ €7.3M diru-sarrera
RCT kostua: €2M, aldi berean
A emaitza (ebidentzia positiboa): zerrendatze iraunkorra, negoziatutako prezioa ~€380,
  egoera egonkorra 60,000 errezeta/urte ≈ €18.5M/urte
B emaitza (ebidentziak huts egiten du): 12. hilabetean ezabatua; diru-sarrerak gelditzen dira.
```

Behin-behineko urteak ebidentzia sortzea finantzatzen du — bidearen berrikuntza nagusia. Alderatu sekuentzia tradizionalarekin (ebidentzia lehenik, diru-sarrerak urte batzuk geroago), DiGAk existitzea nahi dituen produktuak hain zuzen goseak jartzen dituena.

## Software ingeniaritzarekin lotura

DiGAren eredua — **behin-behineko onarpena aurrez erregistratutako arrakasta-metrikarekin eta ilunabar automatikoarekin** — zuzenean kopia daiteke ingeniaritza-tresnen gobernantzarako: bidali tresna produkzioko erabiltzaileei 12 hilabetez, aurrez erregistratu metrika (neurtutako denbora-aurrezkia, intzidentzia-murrizketa), iraungi automatikoki ebidentzia iristen ez bada. Pilotu-paradoxa konpontzen du (balioa frogatzeko eskala behar duten tresnek ez dute inoiz eskalarik lortzen) teknologia frogatu gabeari iraunkortasunik eman gabe. %81eko aktibazio/atxikimendu baxuko datuek produktu-ikasgai bat ere badakarte: errezetak (edo zuzendaritzaren aginduak) instalazioak lortzen ditu; produktuaren kalitateak bakarrik erabilera iraunkorra — ikus [atxikimendua eta jarraitutasuna](../atxikimendua-eta-jarraitutasuna/).

## Tranpak

- **Zerrendatzea helmuga gisa tratatzea** — errezetek errezetatzailearen konfiantza behar dute; zerrendatutako DiGA askok bolumen arbuiagarria dute.
- **Azterketa giltzarria gutxiegi dimentsionatzea** diru-sarreren urtean dirua aurrezteko — %50eko huts-tasa gehienaren azalpena den ekonomia faltsua.
- **Eredua ordaintzailerik gabe garraiatzea**: DiGAk funtzionatzen du itzulketa legala delako; ordainketa derrigortu gabeko kopia pilotu-programa bat besterik ez da.

## Iturriak

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
