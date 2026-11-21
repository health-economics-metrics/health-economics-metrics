# WSJF agus CD3

Is rialacha tosaíochta iad CD3 (Cost of Delay Divided by Duration) agus WSJF (Weighted Shortest Job First) a sceidealaíonn obair de réir **dlús luacha**: cé mhéad costais moille a bhaintear in aghaidh gach aonad d’acmhainn ghann a ídítear. Faoi acmhainn chomhroinnte, sheasta, is é CD3-is-airde-ar-dtús an seicheamh is fearr go matamaiticiúil chun costas moille iomlán a íoslaghdú.

## Cén fáth a bhfuil tábhacht leis

Is fadhb ciondála gach riaráiste: go leor míreanna fiúntacha, píblíne amháin. Réitigh eacnamaíocht sláinte an fhadhb chéanna do bhuiséid sláinte le táblaí sraithe costéifeachtúlachta — rangaigh idirghabhálacha de réir sláinte a baineadh amach in aghaidh an phuint, maoinigh síos an liosta go dtí go n-ídítear an buiséad. Is í CD3 an loighic chéanna d’acmhainn seachadta: sochar in aghaidh an aonaid den *acmhainn srianta*, maoinithe in ord rangaithe. Is airgead saor é seicheamhú ceart a fháil — an obair chéanna, an acmhainn chéanna, costas moille iomlán níos lú.

## An mhatamaitic

```
CD3  = Cost of Delay (£/week) / Duration (weeks)      — real units (Black Swan Farming)

WSJF = (user-business value + time criticality + risk reduction/opportunity
        enablement) / job size                         — SAFe's relative-scale proxy,
                                                        modified-Fibonacci scores
```

Tá CD3 le fíorairgeadra ([costas moille](../costas-moille/)) go docht níos láidre ná pointí gan aonad WSJF — is é WSJF do CD3 an rud atá scóráil il-chritéar d’[anailís costais-úsáidíochta](../anailís-costais-fóntais/) iomlán: inúsáidte nuair a bhíonn airgeadú neamhphraiticiúil, intuartha cluichíochta nuair nach bhfuil ancaire ag na scóir.

## Sampla oibrithe

Trí ghné, foireann amháin:

```
Feature   CoD (£/wk)   Duration   CD3
A         30,000       10 wks     3,000
B         12,000       2 wks      6,000
C         5,000        1 wk       5,000
```

Ord CD3: B, C, A. Déan comparáid idir costas moille iomlán agus “CoD is mó ar dtús” (A, B, C):

```
CD3 order  (B,C,A): A waits 3 wks, C waits 2 → 30k×3 + 5k×2  = £100k delay cost
CoD order  (A,B,C): B waits 10, C waits 12   → 12k×10 + 5k×12 = £180k
```

Na gnéithe céanna, an fhoireann chéanna — sábhálann seicheamhú amháin £80,000. An intuition: téann míreanna beaga práinneacha ar dtús mar scaoileann siad a gcostas moille go saor; ní chailleann an mhír mhór mórán ag fanacht go gairid.

## An nasc le hinnealtóireacht bogearraí

I gcás punanna bogearraí cúram sláinte, ainmnigh CoD sna haonaid a mhúineann an stór seo: QALY/seachtain × tairseach + £/seachtain oibríochtúil, agus bíonn an riaráiste inchomhthomhaiste go díreach leis an gcaoi a rangaíonn an córas sláinte gach rud eile a cheannaíonn sé. Dhá nóta cleachtais: (1) ciallaíonn fad *am féilire ag áitiú an srian*, ní iarracht — tá mír 2-sheachtain ama caite a theastaíonn 2 lá ón bhfoireann cheap buidéil níos saoire ná mar is cosúil (féach [barrfheabhsú acmhainní iartheachtacha](../barrfheabhsú-acmhainní-iartheachtacha/)); (2) reáchtálann ospidéil an riail chéanna go hintuigthe nuair a ordaíonn siad liostaí amharclainne de réir tréchur meáite le práinn — is CD3 meáite le déine iad catagóirí tosaíochta cliniciúla (féach [easnamh QALY agus modhnóirí déine](../easnamh-qaly-agus-modhnóirí-déine/)).

## Gaistí

- **Amharclann scóir WSJF**: téann díospóireachtaí Fibonacci gan aonad le chéile ar an té is airde a bhíonn ag argóint; ancaraigh míreanna barr-an-riaráiste ar a laghad i CoD fíor.
- **Cluichíocht fad**: míreanna a roinnt chun rang CD3 a ataitiú — ceart nuair a sheachadann na ranna luach go neamhspleách, calaois nuair nach ndéanann.
- **Próifílí práinne a neamhaird**: briseann CoD i gcruth spriocdháta (dátaí rialála) an toimhde ráta seasta; sceidealaigh iad sin de réir féidearthacht dáta, ansin CD3 an chuid eile.
- **Gluaiseacht athrangaithe**: tá CD3 do chinntí seicheamhaithe ag am an ghealltanais, ní do athmheascadh laethúil oibre ar eitilt (féach [méadrachtaí sreafa](../méadracha-sreafa/) ar WIP).

## Foinsí

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
