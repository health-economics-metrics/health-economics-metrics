# Aukera-kostua (Opportunity Cost)

Aukera-kostua baliabide bat konprometitzean uzten duzun alternatibarik onenaren balioa da. Aurrekontu finkoa duen osasun-sistema batean, milioi bat libra gauza batean gastatzeak milioi bat libra-ren osasuna beste nonbait *ez* sortzea esan nahi du.

## Zergatik axola duen

Aukera-kostua osasun-ekonomiaren ideiarik sakonena da, eta software ingeniariek gehien saltatzen dutena. Osasun-aurrekontuak finkoak dira urte jakin batean, beraz teknologia berri bat ez da inoiz "soberako" diruarekin finantzatzen: zerbait ordezkatzen du. Ordaintzaileak benetan egiten duen galdera ez da "hau ona al da?", baizik eta "hau diru berak orain erosten duena baino hobea al da?"

Horregatik existitzen dira kostu-eraginkortasunaren atalaseak: atalasea diru horrek sistema egungo ertzean erosten duen osasunaren estimazioa da. Ikus [ordaintzeko borondatearen atalaseak](../ordaintzeko-borondatearen-atalaseak/).

## Matematika

Ez dago formula bakarrik; aukera-kostua konparazio-diziplina bat da:

```
Opportunity cost of choosing A = value of best forgone alternative B
Net gain from A = value(A) − value(B)
```

Erreferentzia enpirikoa: Claxton et al. (2015) ek estimatu zuen NHSk QALY bat sortzen duela ertzean gutxi gorabehera **£13.000**-rekin. Beraz, QALY bat baino gutxiago sortzen duen teknologia batean gastatutako £13.000-k nazioa *osasuntsuago ez* egiten du, teknologiak "funtzionatzen" badu ere.

## Adibide landua

NHS trust baten eraldaketa-aurrekontuak hauetako bat zehazki finantza dezake:

- **A aukera**: e-rostering softwarea: urtean £400.000 aurrezten ditu agentzia-langileen gastuan.
- **B aukera**: alta-koordinazioko softwarea: urtean 2.000 ohe-egun aurrezten ditu. Benetan libratutako ohe-egun bakoitzeko £150 inguruko kostu marjinalarekin, urtean £300.000 da, gehi itxaroten ari diren pazienteentzako tratamendu goiztiarragoa.

A finantzatzeak B uztea esan nahi du. Aren aukera-kostua Bren £300.000 + pazientearen onura da; Aren kasu *garbia* aldea besterik ez da, ez Aren £400.000 titularra. Proposamen bat "ezer ez egitearekin" alderatzen duen edozein negozio-kasuk balioa gehiegi estimatzen du, alternatibarik onenarekin alderatu beharrean.

## Software ingeniaritzarekin lotura

Ingeniaritza-kapazitatea ere aurrekontu finkoa da: bide-orriaren tarteak, ez librak. Ingeniari-orduko £500-rekin orduak aurrezten dituen A tresna finantzatzen duen plataforma-talde batek, B tresnak berdina £200-rekin ematen duenean, kapazitatea suntsitzen ari da, zehazki £40.000/QALY-ko sendagai bat finantzatzen duen osasun-sistemak £13.000/QALY-ko arreta ordezkatzen duen bezala. Diziplina zuzenean transferitzen da:

- Izendatu beti konparatzailea ("zeren aldean?").
- Baloratu ingeniarien denbora bestela sortuko lukeenaren arabera, ez soldataren arabera soilik.
- Tratatu "aurrekontua geratzen zaigu" analisiaren hasiera gisa, ez amaiera gisa.

## Tranpak

- **Ezerekin ez konparatzea.** Konparatzaile zuzena dirua erabiltzeko hurrengo modurik onena da, eta hori gutxitan da "ezer ez egitea".
- **Aurreztutako denborak aukera-kostu nulua duela suposatzea.** Aurreztutako denbora baliotsua da soilik baliotsua den zerbaitetara birbideratzen bada; ikus [diru-sarrera sortzen duten aurrezkiak vs sortzen ez dituztenak](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/).
- **Ordezkapena alde batera uztea.** "Aurrekontua zabalduko da" ia inoiz ez da egia osasun-zerbitzu nazional batean urtean zehar.
- **Zein metodok baloratzen duen ordezkatutako baliabidea ez kontuan hartzea.** Produktibitate galerarako bereziki (gaixotasunagatik, ezgaitasunagatik edo irteten den langile batengatik), ikus [giza kapitalaren ikuspegia vs marruskadura-kostuaren metodoa](../giza-kapitalaren-ikuspegia-vs-marruskadura-kostuaren-metodoa/), ideia honen produktibitate-kostuari berariaz dagokion bertsioa.

## Iturriak

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
