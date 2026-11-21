# Anailís costais-fóntais (CUA)

Is éard é CUA anailís costéifeachtúlachta le **toradh cineálach, meáite ar rogha** — beagnach i gcónaí an [QALY](../bliain-saoil-choigeartaithe-de-réir-cáilíochta/) (nó [DALY](../bliain-saoil-choigeartaithe-de-réir-míchumais/) seachanta). Toisc go bhfuil an t-aonad toraidh uilíoch, is féidir le CUA idirghabhálacha thar ghalair iomlán difriúla a chur i gcomparáid.

## Cén fáth a bhfuil tábhacht leis

Ní mór do sheirbhís sláinte náisiúnta roghnú idir druga ailse, aip sláinte meabhrach, agus róbat máinliachta ó bhuiséad amháin. Ní féidir le haonaid nádúrtha iad a chur i gcomparáid; is féidir le QALY. Dá bhrí sin is é CUA modh an cháis thagartha ag NICE agus ag formhór comhlachtaí HTA: is é a aschur — costas in aghaidh an QALY, a mheastar i gcoinne [tairsí](../tairseacha-toilteanais-íoc/) — an rud is gaire a bhfuil ag beartas sláinte do ráta malairte uilíoch. Más mian leat do bhogearraí a mhaoiniú *in ionad rud éigin eile*, is é CUA an réimse.

## An mhatamaitic

```
ICUR = ΔCostas / ΔQALY      (an ICER leis na QALY mar an t-aonad éifeachta)

ΔQALY = Σ (fad_i × fóntas_i)_nua − Σ (fad_i × fóntas_i)_sean
```

Fóntais ó ionstraimí bailíochtaithe ([EQ-5D](../eq-5d/)); [lascainítear](../lascainiú-agus-rogha-ama/) costais agus QALY araon ag 3.5% (cás tagartha NICE); éiginnteacht trí [PSA](../anailís-íogaireachta-dóchúlachta/).

## Sampla oibrithe

Aip CBT d’imní mheasartha vs liosta feithimh do theiripe aghaidh ar aghaidh, in aghaidh an othair:

```
Costais:  ceadúnas aipe + tacaíocht   £250
          teiripe díláraithe          −£680   (40% d’úsáideoirí nach bhfuil sé ag teastáil uathu a thuilleadh)
          ΔC = 250 − 680 = −£430 (sábhálann airgead)

QALY:  6 mhí ag fóntas 0.76 in ionad 0.68 agus iad ag fanacht
        ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALY
```

ΔC < 0 agus ΔE > 0: **tá an aip ceannasach** — níos fearr agus níos saoire, gan cóimheas de dhíth. Dá mbeadh toimhde an dílárú teiripe 10% amháin, ΔC = 250 − 170 = +£80, agus ICUR = 80 / 0.04 = **£2,000/QALY** — fós i bhfad faoi bhun £20,000. Maireann an cás fiú leis an bpríomhthoimhde gearrtha: sin cén chuma atá ar CUA láidir (agus cruthaíonn an [léaráid tornado](../anailís-íogaireachta/) é).

## An nasc le hinnealtóireacht bogearraí

Is é smaoineamh domhain CUA — *aonad comhshuite amháin, meáite ar rogha chun rudaí neamhchosúla a chur i gcomparáid* — an patrún chun infheistíochtaí innealtóireachta neamhchosúla a chur i gcomparáid (slándáil vs taithí forbróra vs iontaofacht). Is iad na roghanna macánta ceachtar comhshuite inchosanta (annamh) nó [tábla costais-iarmhairtí](../anailís-costais-iarmhairtí/) sainráite (de ghnáth). An rud a thugann CUA rabhadh ina choinne ná an comhshuite bréagach: “scór tionchair” meáite a bhfuil a mheáchain tiúnta tar éis an fhíric chun an rogha is fearr leat a bhuachan. Chaith an eacnamaíocht sláinte deich mbliana ag caighdeánú fáil fóntais go beacht ionas go dtagann meáchain roimh an gcomparáid.

## Gaistí

- **Gnóthachain fóntais faoi bhun íogaireacht na hionstraime** (féach an difríocht is lú atá tábhachtach go cliniciúil in [torthaí a thuairiscíonn othair](../torthaí-tuairiscithe-ag-othair/)) — is cleas clasaiceach é ΔE beag iolraithe ag daonraí móra.
- **Dílárú cúraim comparadóra ar iarraidh** — is minic gurb é an téarma costais is mó do tháirgí digiteacha an méid a ionadaíonn siad.
- **Scóir neamh-roghnúcháin a mhapáil go fóntais** le trasráigh gan bhailíochtú.

## Foinsí

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
