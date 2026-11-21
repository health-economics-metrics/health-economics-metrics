# Luach ionchais faisnéise samplaí (EVSI)

Is é EVSI luach *staidéir shonraigh bheartaithe* — dearadh ar leith, méid samplach ar leith — sula reáchtáiltear é, i gcodarsnacht le [EVPI](../luach-ionchais-faisnéise-foirfe/), a chuireann praghas ar gach éiginnteacht a dhíchur go hiomlán. Freagraíonn EVSI an cheist a chuireann maoinitheoir taighde i ndáiríre: “an fiú *an* triail seo, ag *an* méid seo, a costas?”

## Cén fáth a bhfuil tábhacht leis

Insíonn EVPI duit an uasteorainn ar an méid is fiú aon taighde; ní insíonn sé duit riamh an nglanann an triail os do chomhair an barra. Teastaíonn ó mhaoinitheoir taighde náisiúnta atá ag roghnú idir píolót 50 othar agus triail chinntitheach 500 othar a fháil amach cé mhéad is fiú *gach dearadh ar leith*, ní hamháin luach an uile-eolais. Soláthraíonn EVSI an uimhir sin, agus toisc go scálaíonn sé le méid samplach, ligeann sé do mhaoinitheoir an méid samplach a aimsiú a uasmhéadaíonn an sochar glan ionchais seachas buille faoi thuairim a thabhairt.

Is é seo freisin an fáth a bhfuil EVSI i gcónaí níos lú ná nó cothrom le EVPI: ní féidir le sampla teoranta ach éiginnteacht a réiteach go páirteach, agus is comhartha é staidéar a bhfuil an chuma air go bhfuil níos mó luach ann ná faisnéis foirfe go bhfuil an ríomh mícheart, ní torthaí fíor.

## An mhatamaitic

```
Ginearálta:
EVSI(n) = E_sonraí[ uas_d E_θ|sonraí[NB(d,θ)] ]  −  uas_d E_θ[NB(d,θ)]
  (ionchas neadaithe: an ceann seachtrach thar thorthaí staidéir indéanta, an ceann
  istigh thar an gcreideamh iardhearcach faoi θ tar éis an toradh sin a fheiceáil —
  meastar de ghnáth trí Monte Carlo neadaithe / nuashonrú Bayesach thar tharraingtí
  anailíse íogaireachta dóchúlachta)

Comhfhogas gnáth foirm dúnta (paraiméadar éiginnte amháin, samhail
chomhchuingeach gnáth-ghnáth — aicearra caighdeánach, ní beacht do gach samhail):
EVSI(n) = EVPI × n / (n + n0)

n  = méid samplach an staidéir bheartaithe
n0 = “méid samplach coibhéiseach réamhdhearcach” — méid sampla samhlaíochta a
     iompródh an fhaisnéis chéanna leis an réamhdhearcadh reatha, díorthaithe ón
     gcóimheas idir athraitheacht sonraí agus athraitheacht réamhdhearcach
ENBS(n) = EVSI(n) − Costas(n)
EVSI daonra = EVSI in aghaidh an chinnidh × cinntí a ndeachaigh tionchar orthu
```

Is ionchas neadaithe é an fhoirm ghinearálta toisc go bhfuil toradh todhchaí staidéir féin éiginnte: ní mór duit meán a ghlacadh thar gach tacar sonraí a d’fhéadfadh an staidéar a tháirgeadh, agus do gach ceann an cinneadh is fearr a athríomh ag tabhairt an chreidimh nuashonraithe (iardhearcaigh). Malartaíonn an comhfhogas gnáth foirm dúnta an costas ríomhaireachta sin le cóimheas amháin, bailí nuair a bhíonn an paraiméadar éiginnte agus na sonraí (thart ar) dáilte go gnáth agus comhchuingeach — áis, ní dlí uilíoch. Is é Monte Carlo neadaithe iomlán an modh ilfhóinteach nuair nach bhfuil an toimhde sin fíor. Féach [anailís íogaireachta dóchúlachta](../anailís-íogaireachta-dóchúlachta/) do na tarraingtí PSA a mheastar EVSI uathu de ghnáth.

## Sampla oibrithe

Ag tógáil ar shampla oibrithe [EVPI](../luach-ionchais-faisnéise-foirfe/) — cúntóir doiciméadaithe AI a rolladh amach do 5,000 cliniceoir, áit ar aimsíodh EVPI de £1.2M — cuir in iúl an EVPI céanna anseo i bpuint iomlána: **EVPI = £1,200,000**.

Tá staidéar píolóta beartaithe de 50 cliniceoir ar an mbord. Ó chóimheas athraitheachta an chreidimh réamhdhearcaigh go beachtas tomhais an phíolóta, oibríonn an méid samplach coibhéiseach réamhdhearcach amach mar `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Cosnaíonn an píolót £120,000:

```
ENBS = EVSI − Costas = 480,000 − 120,000 = £360,000
```

ENBS dearfach soiléir: maoinigh an píolót. Má athfhillean an cinneadh soláthair céanna thar 3 iontaobhas réigiúnacha comhchosúla, scálaíonn luach an phíolóta:

```
EVSI daonra = 480,000 × 3 = £1,440,000
```

## An nasc le hinnealtóireacht bogearraí

Is é EVSI eacnamaíocht roghnú *cé chomh mór* ba chóir do phíolót nó tástáil A/B a bheith, ní hamháin cibé an rithfear ceann ar chor ar bith:

- **Cinneadh méid-samplach-mar-infheistíocht.** Is “staidéir” éagsúla iad béite 50 úsáideoir agus rolladh amach céimnithe 5,000 úsáideoir le EVSIanna éagsúla agus costais éagsúla — ligeann EVSI duit iad a chur i gcomparáid ar an mbonn céanna in ionad réamhshocrú “is fearr i gcónaí níos mó sonraí.”
- **ENBS, ní EVSI amháin, an tástáil choimisiúnaithe.** Is togra lag é staidéar le EVSI ard ach costas a itheann an chuid is mó de; is é an riail chinnidh sochar glan ionchais samplála, díreach mar a ghlanann cás gnó sochar i gcoinne costais seachas sochar amháin a thuairisciú.
- **Tá torthaí laghdaitheacha sainráite.** Toisc go n-ardaíonn EVSI(n) le `n/(n+n0)`, ní dhúbláíonn dúbailt méid píolóta a luach riamh — leagan foirmiúil de chiall innealtóireachta go bhfuil luach faisnéise imeallach laghdaitheach ag turgnamh níos mó.

## Gaistí

- **An comhfhogas gnáth a chur i bhfeidhm lasmuigh dá thoimhdí.** Ní bhailíonn sé ach d’éiginnteacht pharaiméadair amháin thart ar chomhchuingeach; teastaíonn Monte Carlo neadaithe iomlán ó shamhail chinnidh neamhlíneach nó il-pharaiméadair i ndáiríre, ní an t-aicearra seo.
- **EVSI a chur i gcomparáid le costas airgid amháin.** Ní mór EVSI a mheá i gcoinne chostas *iomlán* an staidéir, lena chostas moille cinnidh féin san áireamh — féach [costas moille](../costas-moille/) — ní hamháin sceideal an staidéir.
- **EVSI > EVPI a chaitheamh mar fhionnachtain fhíor.** Ní féidir le EVSI EVPI a shárú de réir tógála; is fabht samhaltaithe é ríomh a tháirgeann é seo, ní fionnachtain.

## Foinsí

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
