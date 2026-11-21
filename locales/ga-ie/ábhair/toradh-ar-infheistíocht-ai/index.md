# Toradh ar infheistíocht AI

Is é ROI AI an toradh intomhaiste P&L is inchurtha ar thionscnaimh AI. An tagarmharc dochloíte: fuair taighde “GenAI Divide” 2025 an MIT, in ainneoin $30–40B d’infheistíocht GenAI fiontair, **nach raibh toradh intomhaiste P&L i ~95% de na píolótaí** — agus bhí nósanna sainaitheanta i gcoitinne ag an 5% rathúil.

## Cén fáth a bhfuil tábhacht leis

Tá ainm ag córais sláinte ar phatrún an phíolóta AI: **pilotitis** — reilig an NHS d’aipeanna geallta a ndearnadh píolótú orthu go brách agus nár scálaíodh riamh. Mapálann torthaí an MIT go néata ar a bhfuil ar eolas ag measúnú teicneolaíochta sláinte cheana féin: teastaíonn críochphointí réamhshonraithe d’éilimh luacha, teastaíonn comparadóirí d’aitreabúid, agus ní líne sochair é “braitheann gach duine go bhfuil sé ag cabhrú”. Bhí an mionlach rathúil i sonraí an MIT dírithe ar uathoibriú oifige cúil le bonnlínte costais intrásaithe, agus **d’éirigh le huirlisí ceannaithe thart ar ~67% den am i gcomparáid le tógálacha inmheánacha ag thart ar thríú de sin** — réamhphobail ar chóir a bheith i ngach cás infheistíochta AI (féach [tóg vs ceannaigh](../tóg-nó-ceannaigh/)).

## An mhatamaitic

```
ROI AI = (sochar inchurtha − costas iomlán AI) / costas iomlán AI

Costas iomlán AI = ceadúnais/infeiriúchán (féach inference-unit-economics.md)
              + comhtháthú + ullmhacht sonraí + meastóireacht
              + athdhearadh sreabhadh oibre + rialachas/dearbhú
              (is gnách gurb é an ceadúnas mionlach an ainmneora)

Sochar inchurtha: tomhaiste i gcoinne bonnlíne nó rialaithe, aicmithe
airgead tirim / cumas / cáilíocht de réir cash-releasing-vs-non-cash-releasing.md
```

## Sampla oibrithe

Imlonnaíonn grúpa ospidéal AI do dhá chás úsáide:

```
Cás úsáide A — dréachtú litreacha cliniciúla (oifig chúil, intrásaithe):
  bonnlíne: tras-scríobh seachfhoinsithe £380k/bl
  tar éis:  conradh tras-scríofa curtha ar ceal; am athbhreithnithe cliniceora +£60k
  costas AI:  £120k/bl uile-san
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — scaoileadh airgid tirim, iniúchta ✓

Cás úsáide B — “cóphíolóta AI do chliniceoirí” (leathan, gan rianú):
  éileamh sochair: “sábhálann sé am thar 4,000 foireann” — gan bonnlíne gafa
  éifeacht tomhaiste P&L: gan aon cheann intaispeánta
  → an bucáid 95%, cibé acu a chabhraíonn sé i ndáiríre nó nach gcabhraíonn
```

Ní cáilíocht an AI an difríocht — is é an raibh **bonnlíne, úinéir, agus líne bhuiséid** ag an sochar ([réadú sochar](../réadú-sochar/)).

## An nasc le hinnealtóireacht bogearraí

Leabhar súgartha de chuid HTA d’infheistíocht AI: **céimnigh an fhianaise cosúil le [leibhéil NICE ESF](../creat-caighdeán-fianaise-nice/)** — fianaise de chaighdeán taispeána d’uirlisí ísealghearáin, píolótaí rialaithe roimh chaiteachas eagraíochta, le geataí scaipthe réamhchláraithe (patrún liostaithe sealadaigh le sprioclá [DiGA](../bealach-tapa-diga-na-gearmáine/)); **áirigh seachaint costais mar a áireann an eacnamaíocht sláinte seachaint éilimh** — fíor ach amháin nuair a bhogann líne bhuiséid shonrach; agus **cuir praghas ar an bpíolót féin le [EVPI](../luach-ionchais-faisnéise-foirfe/)** — níl luach £0 ag píolót nach féidir leis cinneadh an scaipthe a athrú. Maidir leis an slisne uirlisí forbróra go sonrach, féach [táirgiúlacht forbróirí le AI](../táirgiúlacht-forbróirí-le-ai/).

## Gaistí

- **Craobhscaoileadh sochair**: tá luach scaipthe tanaí thar na mílte úsáideoirí dothomhaiste de réir dearaidh; roghnaigh cásanna úsáide le bonnlínte tiubha intrásaithe.
- **Costáil ceadúnais amháin**: is gnách gurb iad comhtháthú, meastóireacht, agus athdhearadh sreabhadh oibre a bhíonn i gceannas ar fhíor-ainmneoir.
- **Goid aitreabúide**: éilíonn AI a imlonnaítear taobh le hathdhearadh próisis an delta iomlán.
- **Ardú píolóta báite**: píolótaí theipthe a fhadú toisc go n-admhaíonn stopadh teip — ní mór dáta luí gréine a réamhaontú.

## Foinsí

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
