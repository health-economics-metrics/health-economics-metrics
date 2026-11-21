# Anailís íogaireachta

Athraíonn anailís íogaireachta chinntitheach (DSA) toimhde amháin ag an am thar raon inchreidte féachaint an maireann an chonclúid. Is é an léiriú caighdeánach léaráid tornáidó: paraiméadair rangaithe de réir cé mhéad a luascann siad an toradh.

## Cén fáth a bhfuil tábhacht leis

Tá gach samhail eacnamaíoch tógtha ar mheastacháin — am sábháilte, glacadh, costais aonaid. Diúltaíonn measúnú teicneolaíochta sláinte meastachán pointe a ghlacadh (“tá ROI 340%”) gan fianaise go bhfuil an chonclúid láidir i gcoinne easaontais réasúnta faoi na hionchuir. Insíonn léaráid tornáidó don chinnteoir *cén toimhde le ceistiú*: mura n-oibríonn an cás ach nuair atá an paraiméadar is conspóidí ag a cheann is dóchasaí, is féidir le gach duine é sin a fheiceáil láithreach.

Is é seo an nós is inaistrithe ó eacnamaíocht sláinte go cásanna gnó bogearraí.

## An mhatamaitic

Do gach paraiméadar p le raon inchreidte [p_low, p_high]:

```
Result_low  = model(p = p_low,  all others at base case)
Result_high = model(p = p_high, all others at base case)
Swing(p)    = |Result_high − Result_low|
```

Rangaigh paraiméadair de réir luascaidh; breac barraí cothrománacha timpeall thoradh an cháis bhunúsaigh. Leaganacha: DSA débhealach (athraigh dhá pharaiméadar ar eangach), anailís tairsí (aimsigh luach an pharaiméadair ina n-iompaíonn an cinneadh).

## Sampla oibrithe

Cúntóir códaithe AI do 200 forbróir. Cás bunúsach: ceadúnas £39/forbróir/mí; 30 nóim/forbróir/lá sábháilte; costas luchtaithe £60/uair; 220 lá oibre.

```
Base-case annual benefit = 200 × 0.5h × 220 × £60 = £1,320,000
Annual cost              = 200 × £39 × 12         = £93,600
Base-case net            = £1,226,400
```

Tornáidó (paraiméadar amháin ag an am):

```
Time saved 0.1–1.0 h/day: net = £170,400 … £2,546,400   (swing £2.38M) ← dominates
Loaded cost £40–£80/h:    net = £786,400 … £1,666,400   (swing £0.88M)
Working days 200–240:     net = £1,106,400 … £1,346,400 (swing £0.24M)
Licence £30–£50/mo:       net = £1,248,000 … £1,200,000 (swing £48k)
```

Anailís tairsí: sroicheann sochar glan nialas ag thart ar **2.1 nóiméad/lá** sábháilte. Níl an cinneadh íogair do phraghas ceadúnais agus braitheann sé go hiomlán ar mheastachán an ama sábháilte — mar sin tomhais é sin, ní an chuid eile. (Agus cuimhnigh gur acmhainn é an toradh, ní airgead tirim — féach [sábhálacha a scaoileann airgead tirim vs nach scaoileann](../coigilteas-a-scaoileann-airgead-tirim-vs-coigilteas-nach-scaoileann/).)

## An nasc le hinnealtóireacht bogearraí

Déanann innealtóirí an instinn seo cheana mar “cad a tharlaíonn má táimid mícheart faoi X?” — ní dhéanann DSA ach é a chur ar bhonn córasach agus infheicthe. Cuir léaráid tornáidó i ngach togra uirlise, plean acmhainne, agus anailís tógáil-vs-ceannach. Tiontaíonn sé argóintí faoi cén instinn a bhfuil an ceart aici ina gcomhaontuithe faoin bparaiméadar ar cheart é a thomhas — go minic trí phíolótach, ar féidir a luach féin a phraghsáil (féach [luach ionchasach eolais foirfe](../luach-ionchais-faisnéise-foirfe/)).

## Gaistí

- **Raonta roghnaithe chun flaithiúlacht a dhéanamh**: ±10% timpeall gach ionchuir beag beann ar an éiginnteacht iarbhír. Tá ±80% tuillte ag meastacháin ama sábháilte; ±10% ag praghsanna ceadúnais.
- **Caillfidh paraiméadar-ag-an-am idirghníomhaíochtaí** — teastaíonn anailís dhébhealach nó [anailís íogaireachta dóchúlachta](../anailís-íogaireachta-dóchúlachta/) iomlán ó pharaiméadair chomhghaolmhara (glacadh agus am sábháilte).
- **An anailís a dhéanamh agus neamhaird a dhéanamh uirthi**: má deir an tornáidó go mbraitheann an cás ar uimhir bhog amháin, is é an chéad chéim eile tomhas, ní sínniú.

## Foinsí

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
