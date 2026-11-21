# Eacnamaíocht aonad aipe sláinte

An uimhríocht tráchtála de tháirgí sláinte tomhaltóirí: costas éadála custaiméirí (CAC), luach saoil (LTV), meánioncam in aghaidh an úsáideora (ARPU), praghsáil in aghaidh an bhaill in aghaidh na míosa (PMPM), agus an idirdhealú margaidh fostóirí idir **ROI agus VOI** (luach ar infheistíocht).

## Cén fáth a bhfuil tábhacht leis

Tá brú struchtúrtha ar aipeanna sláinte: tá éadáil daor (éilimh rialáilte, bacainní muiníne, costais comhlíonta) agus is é coinneáil an ceann is measa d’aon ingearach bogearraí (~90% tréigean laistigh de 30 lá — féach [coinneáil agus sceitheadh](../coinneáil-agus-scoite/)). Dá bhrí sin tá an tástáil inmharthanachta chaighdeánach — **LTV:CAC ≥ 3:1** — brúidiúil deacair i sláinte tomhaltóirí, rud is cúis le himirce an tionscail i dtreo samhlacha B2B2C: fostóirí, árachóirí, agus córais sláinte ag íoc PMPM do dhaonraí, áit nach é an duine sceite an ceannaitheoir.

## An mhatamaitic

```
CAC   = caiteachas díolacháin + margaíochta / custaiméirí nua ag íoc
ARPU  = ioncam / úsáideoirí gníomhacha (in aghaidh na tréimhse)
LTV   = ARPU × meán-saolré  =  ARPU / ráta sceite
Inmharthanacht: LTV : CAC ≥ 3, tréimhse aisíoca ≤ 12–18 mí

CAC éifeachtach in aghaidh an úsáideora coinnithe = CAC / coinneáil(t)
  — ag 4% coinneála D30, £5 in aghaidh an tsuiteála = £125 in aghaidh an úsáideora 30-lá-coinnithe

Ioncam PMPM = ráta × baill cláraithe × míonna
  corrlach díoltóra = PMPM − costas-chun-freastal in aghaidh an bhaill in aghaidh na míosa
  — iompaíonn rannpháirtíocht an comhartha: faoi shuibscríbhinní B2C tiomáineann rannpháirtíocht
    ioncam; faoi PMPM, cosnaíonn baill rannpháirtigh NÍOS MÓ le freastal orthu ná
    cinn díomhaoin, agus iompaíonn conarthaí torthaí ar ais arís
```

## Sampla oibrithe

Aip chodlata B2C: £6.99/mí, sceitheadh míosúil 18%, CAC measctha £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — neamh-inmharthana

Pivot go PMPM fostóra: £1.20 PMPM × 40,000 saol clúdaithe = £48k/mí
Costas-chun-freastal: bonneagar £0.15 + tacaíocht £0.10 + ábhar £0.05
  in aghaidh an bhaill ≈ £0.30 → corrlach ~75%, timthriall díolacháin fada ach
  is ar leibhéal conartha (bliantúil) an sceitheadh, ní ar leibhéal úsáideora (laethúil)

Athraíonn ceist an fhostóra an méadrach: is annamh a bhíonn ROI airgid
chrua (éilimh laghdaithe, as láthair) intaispeánta do tháirgí folláine —
is é freagra an tionscail VOI: táirgiúlacht, tarraingteacht earcaíochta,
rannpháirtíocht — macánta amháin nuair a lipéadaítear mar VOI, gan é
a chóiriú mar ROI (féach return-on-investment.md agus social-return-on-investment.md).
```

## An nasc le hinnealtóireacht bogearraí

Socraíonn roghanna innealtóireachta an dá thaobh den chóimheas: is ailtireacht é **costas-chun-freastal** ([eacnamaíocht aonad scamall](../eacnamaíocht-aonad-scamall/) — maireann nó básaíonn corrlach PMPM ar chostas bonneagair in aghaidh an bhaill), agus is innealtóireacht choinneála é **LTV** (is ioncam uimhríochtúil gach pointe sceite — tá cúpla ioncam cruinn ag matamaitic QALY an doiciméid [coinneála](../coinneáil-agus-scoite/)). I gcás táirgí sláinte go sonrach, ba chóir go n-iompródh an deais eacnamaíochta aonad tríú líne taobh le LTV agus CAC: **luach sláinte in aghaidh an úsáideora a fuarthas** (QALY meáite ar choinneáil × tairseach) — mar go bpraghsálann margaí de stíl íocóra agus DiGA air níos mó agus níos mó, agus mar go gcaithfidh táirge a bhfuil a eacnamaíocht aonad tráchtála agus chliniciúil ag scoilt (brabúsach ach neamhghníomhach ó thaobh sláinte, nó éifeachtach ach neamh-inmhaoinithe) fios a bheith aige cén fhadhb atá aige.

## Gaistí

- **LTV ó sceitheadh cohóirt luath**: cobhsaíonn sceitheadh síos; ach freisin claonadh marthanóra — coinníonn glacadóirí luatha níos fearr ná lucht féachana scálaithe. Úsáid sonraí cohóirt aibí.
- **CAC measctha thar chainéil**: difríonn CAC meán sóisialta íoctha agus CAC tarchuir cliniceora 10×, le próifílí coinneála os coinne — deighilt nó déan mífhaisnéis.
- **PMPM gan caipíní úsáide**: is féidir le baill rannpháirtigh sheachtracha corrlaigh a inbhéartú; samhlaigh an dáileadh, ní an meán.
- **VOI curtha i láthair mar ROI** do CFO — an teip chreidiúnachta a chaith tionscal folláine fostóirí deich mbliana ag tuilleamh.

## Foinsí

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
