# Anailís costéifeachtúlachta (CEA)

Cuireann CEA costais idirghabhálacha malartacha i gcomparáid le toradh amháin a thomhaistear in **aonaid nádúrtha** — blianta saoil, cásanna braite, glacadh isteach seachanta, mmHg de laghdú ar bhrú fola. Is costas in aghaidh an aonaid toraidh a haschur.

## Cén fáth a bhfuil tábhacht leis

Is é CEA an chomparáid oibre nuair a dhíríonn gach rogha ar an toradh céanna. Freagraíonn sé “cé acu de na bealaí seo chun X a bhaint amach an úsáid airgid is fearr?” — ach *ní* “an fiú X a bhaint amach ar chor ar bith?” (teastaíonn [anailís costais is sochair](../anailís-costais-is-sochair/) chuige sin) agus *ní* “cén chaoi a gcuirtear X i gcomparáid le tosaíochtaí gan bhaint?” (teastaíonn [anailís costais-fóntais](../anailís-costais-fóntais/) agus toradh cineálach cosúil leis an QALY chuige sin).

## An mhatamaitic

Is é [ICER](../cóimheas-incriminteach-costéifeachtúlachta/) in aonaid nádúrtha an staitistic chomparáide:

```
ICER = (Costas_A − Costas_B) / (Éifeacht_A − Éifeacht_B)
     = £ in aghaidh cáis bhreise braite / glactha isteach seachanta / srl.
```

Nós imeachta: sainmhínigh an t-aonad toraidh; cuir costas ar gach rogha ón [bpeirspictíocht](../peirspictíocht-anailíse/) chéanna thar an [spriocam](../léaslíne-ama/) chéanna; deireadh a chur le roghanna cheannasacha ([teorainn éifeachtúlachta](../ceannas-agus-an-teorainn-éifeachtúlachta/)); ríomh cóimheasa incriminteacha feadh na teorann.

## Sampla oibrithe

Trí bhealach chun fibriliú atriach gan diagnóis a aimsiú i ndaonra 100,000:

```
Rogha                     Costas      Cásanna aimsithe
Seiceálacha cuisle fabhracha  £150,000       300
Imeachtaí scagthástála cógaslainne £400,000   520
Scagthástáil bunaithe ar threalamh caite £900,000 610

ICER cógaslann vs cuisle:  (400k−150k)/(520−300) = £1,136 in aghaidh cáis bhreise
ICER caite vs cógaslann:(900k−400k)/(610−520) = £5,556 in aghaidh cáis bhreise
```

Braitheann an fiú “£5,556 in aghaidh cáis bhreise” ar luach cáis aimsithe (cosc stróc iartheachtach) — rangaíonn CEA na roghanna ach teastaíonn an luacháil sheachtrach sin ón gcinneadh glactha. Tabhair faoi deara go bhfuil meáncostas *an* rogha chaite in aghaidh an cháis (900k/610 = £1,475) ceart go leor; is é an £5,556 *incriminteach* an uimhir mhacánta don chinneadh leathnaithe.

## An nasc le hinnealtóireacht bogearraí

Is é CEA an teimpléad ceart aon uair a roinneann roghanna toradh amháin: costas in aghaidh tástála scáinte curtha deireadh léi thar trí chur chuige feabhsúcháin; costas in aghaidh teagmhais seachanta thar dhíoltóirí breathnaitheachta; costas in aghaidh imlonnaithe rathúil thar ailtireachtaí CI. Maraíonn an araíonacht a fhorfheidhmíonn sé — aonad toraidh dearbhaithe amháin, cóimheasa incriminteacha (ní meán), roghanna ceannasacha deireadh a chur leo ar dtús — formhór na gcomparáidí díoltóirí olca sula dtosaíonn an plé praghsála.

## Gaistí

- **Roghanna le torthaí difriúla a chur i gcomparáid** (“cásanna aimsithe” vs “sástacht”) in CEA amháin — teastaíonn [anailís costais-iarmhairtí](../anailís-costais-iarmhairtí/) nó toradh cineálach.
- **Cóimheasa meáncostéifeachtúlachta** curtha i láthair nuair a theastaíonn cinn incriminteacha (an sampla caite thuas).
- **Aonaid toraidh a roghnaíodh le haghaidh flaithis**: is aschur é “rabhaidh ginte”, ní toradh; seas ar aonaid a iompraíonn luach.

## Foinsí

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
