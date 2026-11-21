# Tratatu behar den kopurua (Number Needed to Treat, NNT)

NNT da esku-hartze bat jaso behar duten pazienteen kopurua, **paziente gehigarri batek** onura atera dezan, denbora-esparru jakin batean. Engainagarriak diren arrisku-murrizketa ehunekoak edonork arrazoitu dezakeen ahalegin-onura unitate bihurtzen ditu.

## Zergatik axola duen

"Bihotzekoak %25 murrizten ditu!" erabakigarria dirudi. Oinarrizko arriskua 5 urtean %4 bada, murrizketa absolutua ehuneko-puntu 1 da, beraz **100 pertsonak 5 urtez hartu behar dute sendagaia bat onuradun izan dadin**, eta 100ek guztiek ordaintzen dituzte kostuak eta albo-ondorioak. NNT arrisku erlatiboaren marketinaren aurkako sendagaia da, eta horregatik hasten da ebidentzian oinarritutako medikuntza horrekin. Prebentzio primarioko estatinak: NNT ≈ 50–100 5 urtean, saihestutako bihotzeko bakoitzeko. Bere ispilua, **NNH** (kaltetzeko behar den kopurua), pertsona bat kaltetzeko zenbat tratatu behar diren zenbatzen du.

## Matematika

```
ARR = control event rate − treatment event rate   (absolute risk reduction)
NNT = 1 / ARR

NNH = 1 / (harm rate_treatment − harm rate_control)

Economic bridge:
cost per event prevented = NNT × cost per treatment course
```

Adierazi beti denbora-esparrua eta oinarrizko populazioa: NNT zentzugabea da biak gabe.

## Adibide landua

Ospitale bateko erorikoen aurreikuspen-sistema batek arrisku handiko pazienteak markatzen ditu esku-hartzerako (ohe-sentsoreak, berrikuspena, zaintza). Saiakuntza: lesioa eragiten duten erorikoak sarreren %3,2tik %2,4ra jaisten dira.

```
ARR = 0.8 percentage points → NNT = 1/0.008 = 125
   (125 patients must get the intervention bundle to prevent 1 injurious fall)

Intervention cost ≈ £40/patient → cost per fall prevented = 125 × 40 = £5,000
Cost of an injurious inpatient fall (extra stay, imaging, litigation) ≈ £12,000
Net: prevention pays ~2.4:1 — and the QALY gain is on top.
```

Kontuan izan NNTk aldarrikapena zintzo mantentzen duela: "erorikoak %25 murrizten ditu" eta "erorialdi bat saihestu 125 paziente tratatuko" emaitza bera dira, modu desberdinean konbentzigarriak.

## Software ingeniaritzarekin lotura

NNT unitate egokia da gutxi harrapatzeko elementu askotan jarduten duen edozein ate edo egiaztapenerako: **"AA berrikuspen-ateatik igaro behar duten PR kopurua ekoizpenerako bidean doan akats bat harrapatzeko."** Ateak benetako harrapaketa bakoitzeko 400 PR berrikusten baditu (NNT = 400), bakoitzeko 4 minutuko garatzaile-arretarekin, harrapaketa batek ~27 garatzaile-ordu balio du; alderatu hori saihesten duen intzidentziaren kostuarekin. NNH positibo faltsuekin lotzen da: zenbat PR marka *faltsu* bakoitzeko, eta zenbat balio du bakoitzak arretan eta konfiantzan? Screening motako tresnek (linter-ak, segurtasun-eskanerrak, anomalia-detekzioa) NNT/NNH aritmetika ekarri beharko lukete; ikus [screening-aren ekonomia](../screening-aren-ekonomia/) prebalentzia txikiak zenbaki hauek zergatik egiten dituen basatiak. [Screening egiteko behar den kopurua](../screening-egiteko-behar-den-kopurua/) maila bat goragoko zifra analogoa da, tratamendu bakar baten ordez screening-eta-gero-tratamendu programa osoarentzat.

## Tranpak

- **Denbora-esparrurik gabe**: "NNT = 50" ez da ezer; "NNT = 50 5 urtean" aldarrikapen bat da.
- **Oinarrizko arriskuaren transplantea**: arrisku handiko saiakuntza-populazioan kalkulatutako NNT erortzen da arrisku txikiko hedapen-populazioan.
- **NNH alde batera uztea**: NNT 400 eta NNH 3 duen ate bat eragozpen-sortzailea da, ez segurtasun-sistema.

## Iturriak

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
