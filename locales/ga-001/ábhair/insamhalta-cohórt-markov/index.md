# Insamhalta cohórt Markov (Markov Cohort Simulation)

Is é samhail cohórt Markov an teicníc samhaltaithe caighdeánach HTA d’idirghabhálacha a n-éiríonn a n-éifeachtaí amach thar il-thréimhsí ama (timthriallta), ní i mbuille amháin. Tosaíonn cohórt hipitéiseach go hiomlán i stát sláinte amháin, agus gach timthriall bogann tacar seasta dóchúlachtaí aistrithe codanna den chohórt idir stáit; carnann costais agus QALYanna gach timthriall i gcomhréir leis an méid den chohórt atá i ngach stát, agus lascainítear iad ar ais go luach reatha. Tá aon innealtóir bogearraí a shamhlaíonn cás gnó sláinte digití il-bhliana — áit a mbogann úsáideoirí nó othair idir stáit ar nós “gafa”, “tréigthe”, nó “scoite” le himeacht ama — ag tógáil na struchtúir chéanna.

## Cén fáth a bhfuil tábhacht leis

Ní comparáidí aon-bhuille de chostas agus toradh tréimhse amháin is ea an chuid is mó de na fíorchinntí teicneolaíochta sláinte. Téann riocht ainsealach chun cinn, athlasann sé, freagraíonn sé do chóireáil, nó maraíonn sé, thar blianta — agus ní féidir le [anailís costéifeachtúlachta](../anailís-costéifeachtúlachta/) aon-tréimhse é sin a léiriú. Tógtar aighneachtaí NICE, ICER agus CADTH d’idirghabhálacha galair ainsealaigh, arna meas trí [mheastóireacht teicneolaíochta sláinte](../measúnú-teicneolaíochta-sláinte/), beagnach i gcónaí mar shamhlacha cohórt Markov le léaslíne ama saoil, mar go bhfuil an t-ailtéarnach — gach cosán othair aonair is féidir a shamhaltú — dochriostaithe ar scála. Malartaíonn an tsamhail cohórt-leibhéil Markov roinnt réalachais ar leibhéal an duine aonair (ní féidir léi cuimhne ar stáit san am a chuaigh thart a léiriú go héasca, mar sin “Markov”: braitheann an todhchaí ar an stát reatha amháin) ar shamhail atá trédhearcach, iniúchta agus ar leor a tapa le bheith á rith na mílte uair i [anailís íogaireachta dóchúlachta](../anailís-íogaireachta-dóchúlachta/).

## An mhatamaitic

```
One cycle's cohort update (row-vector x transition matrix):
  new_state[j] = sum_i state[i] * transition_matrix[i][j]

One cycle's cost:
  cycle_cost = sum_s state[s] * cost_per_cycle[s]

One cycle's QALYs:
  cycle_qalys = sum_s state[s] * utility[s] * cycle_length_years

Full simulation over `cycles` cycles, discounted at `discount_rate`:
  total_discounted_cost  = sum_{t=0}^{cycles-1} cycle_cost(state_t)  / (1 + discount_rate)^t
  total_discounted_qalys = sum_{t=0}^{cycles-1} cycle_qalys(state_t) / (1 + discount_rate)^t
  where state_0 = initial_distribution, state_{t+1} = advance_cohort(state_t, transition_matrix)
```

Úsáideann lascainiú gach timthrialla ar ais go luach reatha go díreach an fhoirmle [lascainiú agus rogha ama](../lascainiú-agus-rogha-ama/), curtha i bhfeidhm timthriall ar thimthriall in ionad bliain ar bhliain.

## Sampla oibrithe

**Cliniciúil**: samhail 2-stát — `Well` agus `Dead` — ina bhfaigheann 10% den chohórt bás gach timthriall agus is stát ionsúiteach é `Dead` (is 1.0 a dóchúlacht féinaistrithe; dá ndéanfaí an féinlúb sin a fhágáil ar lár, imeodh mais an chohórt tar éis timthrialla amháin i `Dead`). Tosaíonn an cohórt go hiomlán `Well`, cosnaíonn sé £1,000 in aghaidh an timthrialla agus é `Well` (£0 nuair atá sé `Dead`), agus gnóthaíonn sé 0.8 QALY in aghaidh na bliana agus é `Well`. Insamhlaithe ar feadh 3 thimthriall bliantúla ag ráta lascaine 3.5% NICE:

```
Cycle 0: state = [1.00, 0.00] (100% Well)
  cost = £1,000.00, qalys = 0.800, discount factor = 1.000000
  discounted: cost = £1,000.00, qalys = 0.8000

Cycle 1: state = [0.90, 0.10] (90% Well, 10% Dead)
  cost = £900.00, qalys = 0.720, discount factor = 0.966184
  discounted: cost = £869.57, qalys = 0.6957

Cycle 2: state = [0.81, 0.19] (81% Well, 19% Dead)
  cost = £810.00, qalys = 0.648, discount factor = 0.933511
  discounted: cost = £756.14, qalys = 0.6049

Total discounted cost  ≈ £2,625.71
Total discounted QALYs ≈ 2.1006
```

Is é stát gach timthrialla stát an timthrialla roimhe tugtha tríd an maitrís aistrithe — fanann 90% den 90% atá fós `Well` ag timthriall 1 `Well` ag timthriall 2 (0.9 × 0.9 = 0.81), agus tá an 19% eile básaithe anois (0.9 × 0.1 + 0.1 × 1.0 = 0.19). Tabhair faoi deara nach bhfolaíonn an cohórt `Well` go hiomlán riamh: le básmhaireacht seasta 10% in aghaidh an timthrialla agus gan athiontráil, laghdaíonn an chodán `Well` go geoiméadrach seachas nialas a bhaint amach ag aon líon críochta timthriallta.

## An nasc le hinnealtóireacht bogearraí

Chun a fheiceáil conas a úsáidtear samhail HTA il-timthrialla laistigh de mheastóireacht iarbhír, féach [meastóireacht teicneolaíochta sláinte](../measúnú-teicneolaíochta-sláinte/) — an cás tagartha a rialaíonn cén ráta lascaine, foinse úsáidíochta agus léaslíne ama ar gá do shamhail Markov a chur isteach a úsáid.

Is meaisín stáit é samhail cohórt Markov go struchtúrtha le haistrithe dóchúlacha, a ritear ar feadh líon seasta tic, ag lascainiú luach gach tice. Insamhlaíonn an cruth céanna aistrithe coinneála/stáit cohórt úsáideoirí le himeacht ama — féach [méadracht DORA](../méadracha-dora/) don leagan iontaofachta oibríochtúla de “cén codán den chóras atá i stát díghrádaithe an tréimhse seo, agus cad a chosnaíonn sé”. Go sonrach:

- **Samhaltú coinneála/scoite** is samhail cohórt Markov é le stáit ar nós “gníomhach”, “i mbaol”, “scoite”: insíonn maitrís aistrithe mhíosúil seasta, a ritear ar feadh 12 nó 24 timthriall míosúil, duit líon na n-úsáideoirí gníomhacha ionchasach (agus ioncam) in aon mhí amach anseo, mar a insíonn `Well`/`Dead` duit na marthanóirí ionchasacha.
- **Iontaofacht agus eacnamaíocht eachtraí**: is féidir stáit chórais (sláintiúil, díghrádaithe, síos) a shamhaltú ar an mbealach céanna, le “costas in aghaidh an timthrialla” de dhochar neamhfhónaimh ag carnadh agus an córas sna stáit dhíghrádaithe/síos — ag casadh argóint minicíochta eachtraí ina hargóint costais lascainithe inchomparáide le costas na hoibre iontaofachta a d’athródh na dóchúlachtaí aistrithe.
- **Stáit ionsúiteacha mar stáit chríochnaitheacha**: is é `Dead` i samhail chliniciúil go beacht stát “síntiús cealaithe” nó “as líne go buan” i samhail bogearraí — teastaíonn dóchúlacht féinaistrithe 1.0 sainráite ón dá cheann, nó cailleann an t-insamhalú mais go ciúin.

## Gaistí

- **Dóchúlachtaí aistrithe nach suimíonn go 1 in aghaidh na sraithe.** Cuireann sraith a shuimíonn go níos mó nó níos lú ná 1 an cohórt “ag sceitheadh” nó “ag fás” mais gach timthriall go ciúin — seiceáil suimeanna sraithe i gcónaí sula gcuireann tú muinín in aschur samhla, mar ní chuireann aon rud i struchtúr na samhla féin an earráid in iúl.
- **Fad timthrialla ró-gharbh do fhíordhinimic an ghalair.** Tá ráta bliantúil le haghaidh riocht a athraíonn stát go suntasach laistigh de sheachtainí ag easluacháil aistrithe a tharlaíonn i lár timthrialla; roghnaigh fad timthrialla gearr i gcoibhneas leis an luas a bhogann an próiseas samhaltaithe i ndáiríre.
- **Féinlúb stáit ionsúitigh a ligean i ndearmad.** Teastaíonn dóchúlacht féinaistrithe go díreach 1.0 ó stát ionsúiteach (bás, scor buan). Fág ar lár é agus imíonn mais an chohórt sa stát sin tar éis timthrialla amháin, ag easluacháil costas carnach nó caillteanas QALY.
- **An tsamhail a chaitheamh mar bhailíochtaithe toisc go ritheann sí.** Is féidir le samhail cohórt Markov le dóchúlachtaí aistrithe a bhfuil cuma réasúnta orthu a bheith mícheart go struchtúrtha (stáit ar iarraidh, iompar ionsúiteach mícheart); bailíochtaigh i gcoinne tagarmharcanna eipidéimeolaíocha aitheanta (m.sh. an gcomhfhreagraíonn marthanas samhaltaithe ag 5 bliana do chuair mharthanais fhoilsithe) sula gcuireann tú muinín san aschur.

## Foinsí

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
