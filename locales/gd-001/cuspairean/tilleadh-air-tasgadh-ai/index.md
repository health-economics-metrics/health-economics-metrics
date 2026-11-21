# Tilleadh air tasgadh AI

Is e ROI AI an tilleadh P&L so-tomhaiste a ghabhas a thoirt do thoiseach-iomairtean AI. An slat-tomhais soilleir: lorg rannsachadh “GenAI Divide” 2025 aig MIT, ge bith air tasgadh GenAI iomairt de $30–40B, **nach do sheall ~95% de phìleatan tilleadh P&L so-tomhaiste** – agus bha cleachdaidhean aithnichte aig an 5% a shoirbhich.

## Carson a tha e cudromach

Tha ainm aig siostaman slàinte airson pàtran pìleat AI: **pilotitis** – cladh an NHS de dh’appaichean gealltanach air am pìleatadh gu bràth is gun a sgèileadh a-chaoidh. Tha lorgan MIT a’ freagairt gu mionaideach air na tha measadh teicneòlais slàinte a’ fiosrachadh mu thràth: feumaidh tagraidhean luach puingean-deiridh ro-shònraichte, feumaidh ìreachadh co-aoisean, agus chan e loidhne buannachd “tha a h-uile duine a’ faireachdainn gu bheil e a’ cuideachadh”. Bha am mion-chuid soirbheachail ann an dàta MIT cruinnichte ann an fèin-obrachadh cùl-oifis le bunaitean cosgais so-lorgte, agus **shoirbhich le innealan ceannaichte ~67% den ùine an aghaidh togail a-staigh aig mu thrian de sin** – ro-bheachdan a bhuineas do gach cùis tasgaidh AI (faic [togail an aghaidh ceannach](../togail-an-aghaidh-ceannach/)).

## A’ mhatamataig

```
ROI AI = (buannachd a ghabhas a thoirt dha − làn-chosgais AI) / làn-chosgais AI

Làn-chosgais AI = ceadan/inference (faic inference-unit-economics.md)
              + aonachadh + ullachadh dàta + measadh
              + ath-dhealbhadh sruth-obrach + riaghladh/dearbhadh
              (tha an cead mar as trice na mhion-chuid den roinnear)

Buannachd a ghabhas a thoirt dha: air a thomhas an aghaidh bunait no smachd, seòrsaichte
airgead / comas / càileachd a rèir cash-releasing-vs-non-cash-releasing.md
```

## Eisimpleir obrach

Tha buidheann ospadail a’ cleachdadh AI airson dà chùis cleachdaidh:

```
Cùis A – dreachd litrichean clionaigeach (cùl-oifis, so-lorg):
  bunait: tar-sgrìobhadh a-muigh £380k/bliadhna
  às dèidh: cùmhnant tar-sgrìobhaidh air a chuir dheth; ùine ath-sgrùdaidh clionaigeach +£60k
  cosgais AI: £120k/bliadhna uile-gabhaltach
  ROI = (380k − 60k − 120k) / 120k ≈ 167% – a’ leigeil a-mach airgead, so-sgrùdaidh ✓

Cùis B – “copilot AI do chlionaigeach” (farsaing, gun lorg):
  tagradh buannachd: “a’ sàbhaladh ùine thar 4,000 neach-obrach” – gun bhunait air a ghlacadh
  buaidh P&L tomhaiste: gun dad a ghabhas a shealltainn
  → am bucaid 95%, ge bith a bheil e a’ cuideachadh dha-rìribh
```

Chan e càileachd an AI an t-eadar-dhealachadh – is e am bheil aig a’ bhuannachd **bunait, sealbhadair, agus loidhne buidseit** ([coileanadh bhuannachdan](../coileanadh-bhuannachdan/)).

## Ceangal ri einnseanaireachd bathar-bog

An leabhar-cluiche air cumadh HTA airson tasgadh AI: **cuir ìrean air an fhianais coltach ri [ìrean NICE ESF](../frèam-inbhean-fianais-nice/)** – fianais ìre-deamo airson innealan le cunnart ìosal, pìleatan smachdaichte ro chaitheamh air feadh na buidhne, le geataichean sgaoilidh clàraichte ro-làimh (pàtran liostadh sealach le ceann-latha aig [DiGA](../slighe-luath-diga-na-gearmailte/)); **cunntaich seachnadh chosgaisean mar a chunntas eaconamas slàinte seachnadh iarrtais** – fìor nuair a ghluaiseas loidhne buidseit shònraichte a-mhàin; agus **cuir prìs air a’ phìleat fhèin le [EVPI](../luach-ris-a-bheil-dùil-de-fhiosrachadh-foirfe/)** – chan eil pìleat nach urrainn co-dhùnadh sgaoilidh atharrachadh a’ bhuntainn £0. Airson na sliseag innealan luchd-leasachaidh gu sònraichte, faic [cinneasachd luchd-leasachaidh le AI](../cinneasachd-luchd-leasachaidh-le-ai/).

## Cunnartan

- **Sgaoileadh buannachd**: tha luach sgaoilte tana thar mhìltean de luchd-cleachdaidh do-thomhaiste a rèir dealbhaidh; tagh cùisean cleachdaidh le bunaitean cruinn, so-lorg.
- **Cosgas a-mhàin le cead**: mar as trice bidh aonachadh, measadh agus ath-dhealbhadh sruth-obrach a’ riaghladh fìor roinnear.
- **Goid buannachd**: bidh AI air a chleachdadh còmhla ri ath-dhealbhadh pròiseas a’ gabhail an eadar-dhealachaidh gu lèir.
- **Dol am meud pìleat air a chall**: a’ leudachadh phìleatan a dh’fhàillig leis gu bheil stad ag aideachadh fàilligeadh – feumaidh ceann-latha laighe air aontachadh ro-làimh.

## Stòran

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
