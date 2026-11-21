# Kostu-minimizazio analisia (Cost-Minimization Analysis, CMA)

CMAk kostuak bakarrik alderatzen ditu, eta aukerarik merkeena hautatzen du — legitimoa alternatiben emaitzak baliokideak direla frogatu denean *bakarrik*.

## Zergatik axola duen

CMA analisirik sinpleena eta gehien gehiegikeriatzen dena da. Baliokidetasun-aldarrikapenak egiten du lan guztia: emaitzak benetan ez badira desberdinak (biosimilar bat eta bere jatorrizkoa; zerbitzu bera espezifikazio berean betetzen duten bi hornitzaile), kostua da galdera bakarra eta CMA zuzena da. Zorroztasuna baliokidetasuna *frogatzean* datza lehenengo — normalean aurrez zehaztutako marjina duen ez-gutxiagotasun azterketa baten bidez — erosleek normalean saltatzen duten urratsa hain zuzen.

## Matematika

```
Efektua_A ≈ Efektua_B dela ebidentzia emanda (aurrez zehaztutako δ marjinaren barruan):
Hautatu min(Kostua_A, Kostua_B)

Kostuak ikuspegi berdinetik neurtuak, horizonte berean,
aldaketa/trantsizio-kostuak barne.
```

Baliokidetasuna ebidentziatu ezin bada, CMA baliogabea da — erabili [CEA](../kostu-eraginkortasun-analisia/)/[CUA](../kostu-utilitate-analisia/) horren ordez.

## Adibide landua

Trust batek bi bideo-kontsulta plataformaren artean aukeratzen du. 3 hilabeteko pilotu paralelo batek betetze-tasak %94,1 vs %93,8 erakusten ditu, pazientearen asebetetzea 4.4 vs 4.4 — aldeak aurrez adostutako 2 puntu-portzentuko δren barruan. Emaitzak: baliokideak. 3 urteko kostuak:

```
                     A plataforma   B plataforma
Lizentziak           £360,000       £210,000
Integrazioa          £80,000        £150,000
Prestakuntza/laguntza £60,000       £90,000
Guztira              £500,000       £450,000
```

B plataformak £50,000 irabazten ditu — bere integrazio-kostu handiagoa *barne*. Pilotuik gabe, baliokidetasun-aldarrikapena saltzailearen liburuxketan oinarrituko litzateke, eta 1 puntuko betetze-tasaren aldeak (≈ milaka kontsulta hutsegin urtean) £50,000 gaindituko lituzke.

## Software ingeniaritzarekin lotura

CMA commodity-erosketaren forma formala da: SLO berdinak betetzen dituzten bi CI hornitzaile, iraunkortasun-espezifikazio bera duten bi objektu-biltegi. Osasun-ekonomiako ikasgaia *eragiketen ordena* da: lehenik baliokidetasuna ebidentziatu (neurtu zure lan-kargaren aurka, pilotatu zure SLOen aurka, marjina aurrez adostuta), gero kostu osoak alderatu migrazioa barne. Lehen urratsik gabeko "funtsean berdinak dira, B merkeagoa da" da erakundeek %10 merkeagoa eta %40 okerragoa den tresna erosten duten modua. Ondorioa: saltzaile batek prezioa argudiatzen duenean, behartu baliokidetasuna estipulatzera — beste noranzkoan ere loteslea da.

## Tranpak

- **Baliokidetasun suposatua** — bekatu definitzailea; aldearen ebidentziarik eza ez da baliokidetasunaren ebidentzia (ahalmen gutxiko pilotuek baliokidetasuna "erakusten" dute debalde).
- **Aldaketa-kostuak ez sartzea** — migrazioa, birprestakuntza eta funtzionamendu paraleloa kostu-aldean daude.
- **Emaitza okerretan baliokidetasuna**: neurtutako metrikan baliokideak, axola duen batean desberdinak (irisgarritasuna, latentzia-isatsa, datuen irteera).

## Iturriak

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
