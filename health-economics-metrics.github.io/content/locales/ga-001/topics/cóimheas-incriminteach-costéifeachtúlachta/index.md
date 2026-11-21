# Cóimheas incriminteach costéifeachtúlachta (ICER)

Is é an ICER an costas breise in aghaidh gach aonaid bhreise d’éifeacht sláinte nuair a roghnaíonn tú rogha amháin thar an gcéad rogha eile is fearr. Is é uimhir cheannlíne measúnú teicneolaíochta sláinte é. (Nuair is QALYanna an t-aonad éifeachta, tugtar cóimheas incriminteach costais-fóntais, ICUR, air freisin.)

## Cén fáth a bhfuil tábhacht leis

Ní mheasann córais sláinte teicneolaíocht ina haonar riamh — i gcónaí *go hincriminteach*, i gcoinne an méid a dhéanfaí ar shlí eile. Cuireann NICE ICER teicneolaíochta i gcomparáid lena thairseach **£20,000–£30,000 in aghaidh an QALY**; tuairiscíonn institiúid ICER SAM thar $50,000–$200,000/QALY; oibríonn Ceanada go thart ar CAD$50,000/QALY. Is é, go foirmiúil, an bhfuil do tháirge “fiúntach” do sheirbhís sláinte náisiúnta an nglanann a ICER an tairseach áitiúil. Féach [tairseacha toilteanais le híoc](../tairseacha-toilteanais-íoc/).

## An mhatamaitic

```
ICER = (Costas_nua − Costas_comparadóra) / (Éifeacht_nua − Éifeacht_comparadóra)
     = ΔC / ΔE
```

Rialacha léirmhínithe:

- ΔC < 0, ΔE > 0: **tá an rogha nua ceannasach** — níos saoire agus níos fearr; níl cóimheas de dhíth.
- ΔC > 0, ΔE > 0: ríomh ICER, cuir i gcomparáid le tairseach λ; glac leis má ICER < λ.
- ΔC > 0, ΔE < 0: tá an rogha nua ceannaithe — diúltaigh.
- Iompraíonn cóimheasa go dona gar do ΔE = 0 — is fearr [sochar airgeadaíochta glan](../sochar-airgeadaíochta-glan/) le haghaidh rangaithe.

Ní mór don chomparadóir a bheith *an chéad rogha eile is fearr nach bhfuil ceannaithe*, ní “gan aon ní a dhéanamh” — féach [ceannas agus an teorainn éifeachtúlachta](../ceannas-agus-an-teorainn-éifeachtúlachta/).

## Sampla oibrithe

Seirbhís monatóireachta cianda d’othair teip chroí, in aghaidh 1,000 othar/bliain, i gcoinne gnáthchúraim:

```
Costais:   seirbhís £900,000; sábhálann glactha isteach seachanta £600,000
           ΔC = 900,000 − 600,000 = £300,000
Éifeachtaí: faigheann idirghabháil níos luaithe 25 QALY
           ΔE = 25

ICER = 300,000 / 25 = £12,000 in aghaidh an QALY
```

Tá £12,000/QALY go compordach faoi bhun thairseach £20,000 NICE — cás láidir. Tabhair faoi deara conas a bhfuil tábhacht ag an gcostas *glan*: gan an fritháireamh £600,000 bheadh an ICER £36,000/QALY agus is dócha go dteipfeadh ar an gcás. Is i bhfritháirithe costais agus cáilíocht a bhfianaise a bhuaitear agus a chailltear na hanailísí seo (féach [costais iartheachtacha seachanta](../costais-iartheachtacha-seachanta/)).

## An nasc le hinnealtóireacht bogearraí

Aistríonn araíonacht an ICER ar fad go cinntí innealtóireachta:

```
(costas rogha B − costas rogha A) / (toradh B − toradh A)
```

— costas incriminteach in aghaidh gach imlonnaithe bhreise, in aghaidh gach uair innealtóra sábháilte, in aghaidh gach teagmhais seachanta — i gcónaí i gcoinne an chéad rogha eile is fearr, ní i gcoinne gan aon ní a dhéanamh. An dá nós is fiú a ghoid: (1) *ainmnigh an comparadóir go sainráite*; cuireann formhór éilimh ROI uirlisí i gcomparáid go rúnda i gcoinne fear tuí; (2) *glan na costais ar dtús* — tá ΔC = £20k ag uirlis a chosnaíonn £100k ach a dhílárasaíonn £80k de chaiteachas atá ann cheana.

## Gaistí

- **ICER a chur i gcomparáid thar airgeadraí gan chéim thiontaithe shainráite**: ní mór ICER a ríomhadh in airgeadra tíre amháin a thiontú le modh luaite sula gcuirtear i gcomparáid le tairseach tíre eile é — féach [comparáid ICER tras-airgeadra](../comparáid-icer-tras-airgeadra/) cén fáth a bhféadfadh rogha an fhachtóra tiontaithe (cothrom cumhachta ceannaigh vs ráta malairte margaidh) an cinneadh glactha a iompú.
- **Cluichí comparadóra**: comparáid i gcoinne bonnlíne atá as dáta nó go saorga dona séanann sé ΔE agus déanann sé flaitheas ar an ICER.
- **Meáin in ionad incriminteachta**: ní hionann costas in aghaidh an QALY de chlár iomlán agus ICER a leathnaithe nó a ghlactha.
- **Adhradh meastacháin phointe**: is cóimheasa dhá dhifríocht éiginnte iad ICERanna; tuairiscigh éiginnteacht trí [PSA agus CEACanna](../anailís-íogaireachta-dóchúlachta/).
- **Tá ICERanna diúltacha débhríoch** (tugann níos saoire-agus-níos fearr vs níos costasaí-agus-níos measa an comhartha céanna) — ná tuairiscigh ICER diúltach riamh gan a rá cén cheathrú atá ann.

## Foinsí

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
