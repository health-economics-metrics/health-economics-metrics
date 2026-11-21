# Coigilteas a scaoileann airgead tirim vs coigilteas nach scaoileann

Laghdaíonn coigilteas a scaoileann airgead tirim fíorchaiteachas — éiríonn líne bhuiséid níos lú. Scaoileann coigilteas nach scaoileann airgead tirim am nó cumas a *athúsáidtear* seachas a chuirtear sa bhanc. Caitheann stiúrthóirí airgeadais córas sláinte leo seo mar speicis difriúla, agus ba cheart duitse freisin.

## Cén fáth a bhfuil tábhacht leis

Is é seo an tástáil mhacántachta is géire a chuirtear ar aon chás gnó digiteach i seirbhís sláinte náisiúnta. Aicmíonn creataí sochair an NHS gach sochar éilithe go sainráite mar sochar a scaoileann airgead tirim, nach scaoileann airgead tirim, nó cáilíochtúil. Níl i bhformhór “coigilteas” sláinte digití — nóiméid cliniceora sábháilte in aghaidh an othair, doiciméadú níos tapúla — ach neamh-scaoileadh airgid tirim: luachmhar, ach ní laghdaíonn siad an easnamh. Ní féidir le CFO iontaobhais atá os comhair bhearna maoinithe ach airgead tirim a chaitheamh. Féach freisin [coigilteas crua a scaoileann airgead tirim](../coigilteas-crua-a-scaoileann-airgead-tirim/).

## An mhatamaitic

```
Coigilteas a scaoileann airgead tirim = líne bhuiséid roimh − líne bhuiséid tar éis
                          (ní mór é a bheith inbhainte: conradh curtha ar ceal, barda dúnta,
                           caiteachas gníomhaireachta laghdaithe, ceannach seachanta)

Luach nach scaoileann airgead tirim = am scaoilte × costas aonaid an ama sin
                          (luacháilte ag costas deise; NÍL an t-airgead inbhainte)
```

Tuirlingíonn an teagmhas fisiciúil céanna (uair an chloig sábháilte) i gcatagóir amháin nó sa cheann eile ag brath ar cad a tharlaíonn ina dhiaidh sin:

```
uair sábháilte → shift forthama/gníomhaireachta curtha ar ceal  → scaoileadh airgid tirim
uair sábháilte → feiceann cliniceoir othar feithimh amháin eile → neamh-scaoileadh airgid tirim (cumas)
uair sábháilte → ionsúite isteach i mbán, ní athraíonn aon rud  → gan aon sochar ar chor ar bith
```

## Sampla oibrithe

Sábhálann bogearraí 30 nóiméad ar gach shift do gach duine de 100 altra. Sin 100 × 0.5 × 5 shift/seachtain × 46 seachtain ≈ 11,500 uair/bliain. Ag costas fostóra Banda 5 de ~£25/uair, is é £287,500/bliain an ceannlíne meallacach.

An scoilt mhacánta:

- Tuirlingíonn 20% den am san áit a n-íocann barda préimh bainc/gníomhaireachta faoi láthair chun dul thar fóir ar dhoiciméadú a chlúdach: 2,300 uair × £35 ráta gníomhaireachta = **£80,500 scaoileadh airgid tirim** (shifts nár áirithíodh i ndáiríre).
- Athimlonnaítear 60% chuig cúram díreach othar: 6,900 uair × £25 = **£172,500 cumas neamh-scaoilte airgid tirim** — luach fíor, tuairiscithe ar leithligh, nár glaodh “coigilteas” air riamh.
- Imíonn 20% i sosanna agus isteach in idirbhriseadh: **£0**. Ficsean a bheadh ann é a éileamh.

Tá cás gnó a chuireann £80.5k airgead tirim + £172.5k cumas i láthair creidiúnach. Diúltaíonn an chéad chuntasóir a léann cás a chuireann £287.5k “coigilteas” i láthair.

## An nasc le hinnealtóireacht bogearraí

Rialaíonn an loighic chéanna ROI cúntóra códaithe AI: is cumas neamh-scaoilte airgid tirim é “30 nóiméad in aghaidh an fhorbróra in aghaidh an lae” mura dtiteann líon ceann, caiteachas conraitheora, nó costas scamall i ndáiríre. Tuairiscigh na catagóirí ar leithligh:

- Scaoileadh airgid tirim: rannpháirtíochtaí conraitheora curtha ar ceal, ceadúnais uirlisí dícheadaithe, caiteachas scamall laghdaithe.
- Cumas: gnéithe seolta níos luaithe (luach trí [chostas moille](../costas-moille/)), riaráiste dóite síos.
- Faic: nóiméid sábháilte a bhriseann isteach i malartú comhthéacs.

Rianaigh freisin *cá ndeachaigh an t-am scaoilte i ndáiríre* — tá réadú sochar ([benefits-realization.md](../réadú-sochar/)) ann toisc go n-imíonn gnóthachain chumais éilithe go minic ar iniúchadh.

## Gaistí

- **Nóiméid a iolrú faoi thuarastal agus “coigilteas” a thabhairt air** — an peaca canónach.
- **Am scaoilte a luacháil ar mheáncostas lódáilte** nuair is úsáid íseal-luacha é úsáid imeallach an ama sin — féach [costas imeallach vs meán](../costas-imeallach-vs-meánchostas/).
- **An uair chéanna a chomhaireamh faoi dhó**: mar airgead tirim (shift seachanta) agus mar chumas (othair bhreise feicthe).

## Foinsí

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
