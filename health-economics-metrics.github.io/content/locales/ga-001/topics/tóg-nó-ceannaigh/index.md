# Tóg nó ceannaigh

Is comparáid struchtúrtha é tóg-nó-ceannaigh idir forbairt saincheaptha agus éadáil tráchtála, ar [TCO](../costas-iomlán-úinéireachta/) lascainithe, am seachadta, agus riosca. Tá na réamhphobail eimpíreacha aontaobhach: **sháraíonn costais thógála iarbhír réamh-mheastacháin go hiondúil faoi 30–40%**, imlonnaítear réitigh cheannaithe 40–60% níos tapúla, agus fuair taighde GenAI 2025 an MIT gur éirigh le huirlisí AI ceannaithe ~67% den am agus gur éirigh le tógálacha inmheánacha thart ar thrian chomh minic.

## Cén fáth a bhfuil tábhacht leis

Tagann córais sláinte ar an gcinneadh seo i gcónaí (“déan vs coimisiúnaigh” i dteanga an NHS), agus téann eagraíochtaí innealtóireachta mícheart go córasach i dtreo na tógála — toisc go measann tógálaithe an tógáil, ní an [TCO](../costas-iomlán-úinéireachta/), agus toisc go bhfuil tógáil níos spraíúla. Cuireann an creat eacnamaíoch iallach ar an gcomparáid mhacánta: an dá rogha praghsáilte thar an spriocam céanna, an dá cheann coigeartaithe do riosca, agus an *difríocht ama praghsáilte mar [chostas moille](../costas-moille/)* — an téarma is minice a chinneann an freagra agus is minice a fhágtar ar lár.

## An mhatamaitic

```
Cuir i gcomparáid thar an spriocam céanna 3–5 bliana, lascainithe:

NPV_rogha = PV(sochair, aistrithe ag am-go-luach) − PV(TCO)

Coigeartuithe riosca (patrún “claonadh dóchais” Leabhar Glas):
  costas tógála × 1.3–1.4        (réamhphobal sáraithe)
  am-go-luach tógála + 40–60% (réamhphobal moille imlonnaithe)
  ceannaigh: cuir seiceáil réaltachta comhtháthaithe agus costais imeachta ina ionad

Tiománaithe cinnidh, san ord a chinneann siad de ghnáth:
  1. difreáil — an é an cumas seo do tháirge, nó píobáil?
  2. am-go-luach × CoD
  3. TCO coigeartaithe do riosca
```

## Sampla oibrithe

Teastaíonn córas ríomh-thoilithe ó iontaobhas. Ceannaigh: SaaS £150k/bliain, beo i 3 mhí. Tóg: £600k measta + £120k/bliain cothabháil, beo i 12 mhí.

```
Tógáil coigeartaithe do riosca: 600k × 1.35 = £810k; am-go-luach ≈ 18 mí
TCO 5 bl:  ceannaigh = 150k × 5 = £750k
           tóg = 810k + 120k × 5 = £1,410k
Téarma moille: sábhálann digitiú toilithe £25k/mí; sroicheann an tógáil 15 mhí
            níos déanaí → CoD = 15 × 25k = £375k

Comparáid éifeachtach: £750k vs £1,785k — buaigh ceannaigh faoi ~£1M, agus is é an
téarma aonair is mó tar éis na tógála féin an costas moille nár phraghsáil aon duine.
```

Fanann tóg ceart nuair a dhéanann an cumas difreáil (algartam croí do tháirge), nuair nach gcomhlíonann aon díoltóir srian crua (sábháilteacht chliniciúil, cónaitheacht sonraí), nó nuair atá riosca faoi ghlas díoltóra ar leith agus praghsáilte.

## An nasc le hinnealtóireacht bogearraí

Tá an araíonacht eacnamaíochta sláinte inaistrithe trí fhillte: **coigeartú riosca bunaithe ar réamhphobail** (is é an t-ardú sáraithe 30–40% claonadh dóchais Leabhar Glas bogearraí — cuir i bhfeidhm go meicniúil é, áitigh ar son eisceachtaí seachas uathu); **macántacht comparadóra** (ní “faic” an rogha eile seachas tógáil, is é an ceannach is fearr atá ar fáil — féach [costas deise](../costas-deise/)); agus **tástáil choibhéise roimh chomparáid costais** (má chomhlíonann ceannaigh agus tóg an sonraíocht chéanna i ndáiríre, is [anailís íoschostais](../anailís-íoslaghdaithe-costais/) é seo agus buaigh an ceann saor; mura gcomhlíonann, ní mór an difríocht toraidh a luacháil, gan é a dhearbhú).

## Gaistí

- **Praghas liosta díoltóra a chur i gcomparáid le meastacháin tógála neamh-choigeartaithe do riosca** — flaitheas dúbailte i dtreo na tógála.
- **Saothar inmheánach gan phraghas** (“tá an fhoireann anseo cheana”).
- **Faoi ghlas gan phraghas sa dá threo**: costais imeachta díoltóra, ach freisin fachtóir bus agus tionacht cothabhála na tógála.
- **Tógálacha treoraithe ag féiniúlacht**: “tá seo lárnach dúinn” éilithe do phíobáil — tástáil difreála i gcoinne an dtabharfadh custaiméirí faoi deara.

## Foinsí

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
