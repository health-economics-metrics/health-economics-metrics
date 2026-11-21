# Bliain saoil choigeartaithe de réir cáilíochta (QALY)

Is é QALY bliain amháin saoil a chaitear i sláinte foirfe. Cumasc sé *cá fhad* a mhaireann daoine le *cé chomh maith* a mhaireann siad, ionas go gcomhaireamh bliain i droch-shláinte mar níos lú ná QALY amháin — ag déanamh idirghabhálacha sláinte atá go hiomlán difriúil inchomparáide ar aon scála amháin.

## Cén fáth a bhfuil tábhacht leis

Is é an QALY comhairgeadra mheasúnú teicneolaíochta sláinte. Luacháiltear gnóthachain sláinte ag NICE (Sasana) ag **£20,000–£30,000 in aghaidh an QALY**: de ghnáth moltar idirghabháil a cheannaíonn QALYanna níos saoire ná an tairseach sin; de ghnáth diúltaítear dóibh siúd a cheannaíonn iad níos daoire. Is é an uimhir amháin seo an chaoi a gcuireann seirbhís sláinte náisiúnta druga ailse, athsholáthar cromáin, agus aip tréidhíochta i gcomparáid ar an ais chéanna. Má tá do bhogearraí in ann QALYanna a éileamh go hinchreidte — trí dhrochú a chosc, cóireáil a luathú, nó sábháilteacht a fheabhsú — is féidir leat a luach sláinte a phraghsáil sa chuid chéanna airgeadra leis an leigheas féin.

## An mhatamaitic

```
QALYs = Σ_i (duration_i × utility_i)

duration_i = years spent in health state i
utility_i  = quality weight of state i, anchored at 1 = perfect health, 0 = dead
             (negative values allowed for states worse than death)
```

Tagann meáchain úsáidíochta ó ionstraimí bailíochtaithe, [EQ-5D](../eq-5d/) is minice. Is é gnóthachan QALY ó idirghabháil an difríocht idir na sruthanna QALY lena cois agus hiompu, [lascainithe](../lascainiú-agus-rogha-ama/) ag 3.5%/bliain i gcás tagartha NICE.

## Sampla oibrithe

Fanann othar le cóireáil chardach i stát le húsáidíocht 0.6. Cuireann cóireáil ar ais iad go húsáidíocht 0.85.

- **Cóireáilte anois**: bliain amháin ag 0.85 = 0.85 QALY i mbliana.
- **Cóireáilte tar éis moille 6 mhí**: 0.5 × 0.6 + 0.5 × 0.85 = 0.725 QALY.
- **Caillteanas QALY in aghaidh an othair ón moill**: 0.85 − 0.725 = **0.125 QALY**.

Airgeadaithe ag tairseach NICE: 0.125 × £20,000–£30,000 = **£2,500–£3,750 de luach sláinte caillte in aghaidh an othair in aghaidh moill 6 mhí**. Má bhaineann bogearraí a luathaíonn an cosán an mhoill sin do 400 othar/bliain, is é an luach sláinte 50 QALY ≈ **£1.0–£1.5 milliún/bliain** — sula gcomhaireamh aon sábháil oibríochtúil.

## An nasc le hinnealtóireacht bogearraí

- **Cosáin níos tapúla = QALYanna níos luaithe.** Aon rud a ghiorraíonn [tarchur go cóireáil](../tarchur-go-cóireáil/) tiontaíonn sé míúsáidíocht ama feithimh i ngnóthachan sláinte, luachálta mar atá thuas.
- **Sábháilteacht = QALYanna caomhnaithe.** Is caillteanais QALY a seachnaíodh iad earráidí cógais a coscadh agus diagnóisí a caitheadh.
- **Is teimpléad deartha méadrachta é an QALY freisin**: comhshuimiú de chainníocht × cáilíocht, le meáchain cáilíochta a fuarthas ó ionstraim chaighdeánaithe. Is é an tógáil chéanna é “bliain innealtóra choigeartaithe de réir cáilíochta” (am × meáchan suirbhé DevEx) — féach [SPACE agus DevEx](../space-agus-devex/).
- Chun QALYanna a thiontú ina n-airgead do chás gnó, úsáid [sochar airgeadaíochta glan](../sochar-airgeadaíochta-glan/); chun iad a thiontú ina gcinneadh, úsáid [tairseacha toilteanais íoc](../tairseacha-toilteanais-íoc/).

## Gaistí

- **Meáchain úsáidíochta a chumadh.** Ní mór do mheáchain teacht ó ionstraimí bailíochtaithe (EQ-5D) agus tacair luacha fhoilsithe, ní ó intuition.
- **QALYanna a éileamh gan cosán cúisíoch.** Ní héileamh QALY é “feabhsaíonn ár n-aip folláine”; is ea “baintear X seachtain feithimh i stát úsáidíochta 0.6”.
- **Comhaireamh dúbailte**: éilíonn gnóthachan QALY agus sábhálacha costais an drochaithe seachanta chéanna a éileamh cúram go bhfuil siad scartha i ndáiríre.
- **Spotaí dalla cothromaíochta**: luacháiltear bliain de shíneadh saoil le QALYanna de réir úsáidíochta bunlíne, rud a fhéadfaidh daoine faoi mhíchumas a mhíbhuntáiste — an chúis a thuairiscíonn ICER (SA) an evLYG freisin (féach [bliain saoil a baineadh amach](../bliain-saoil-a-baineadh-amach/)).

## Foinsí

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
