# Eacnamaíocht aonad scamall (FinOps)

Aistríonn eacnamaíocht aonad scamall caiteachas amh scamall go **costas in aghaidh an aonaid aschuir** — in aghaidh an chustaiméara, in aghaidh an idirbhirt, in aghaidh an cháis réitithe, in aghaidh an chomhartha. Is é an cumas FinOps a iompaíonn “is é £400k/mí ár mbille AWS” ina “cosnaíonn £0.83 duine othar amháin a sheirbhísiú.”

## Cén fáth a bhfuil tábhacht leis

Ní féidir le huimhreacha caiteachais iomláin na ceisteanna tábhachtacha a fhreagairt: an bhfuil an táirge ag éirí níos éifeachtúla nó níos neamhéifeachtúla? An bhfeabhsaíonn nó an scriosann fás an corrlach? Cad ba chóir dúinn a ghearradh? Freagraíonn costais aonaid na trí cheist. I gcás sláinte dhigití go sonrach, is costas aonaid seirbhíse sláinte *é* “costas in aghaidh an cháis réitithe” — inchomparáide go díreach leis na figiúirí [Bailiúchán Náisiúnta Costais](../taraif-náisiúnta-agus-costais-aonaid/) a úsáideann coimisinéir do gach seirbhís eile, rud a fhágann gurb é an teanga nádúrtha é chun bealaí digiteacha a phraghsáil i gcoinne cinn thraidisiúnta.

## An mhatamaitic

```
Costas aonaid = costas iomlán leithdháilte (lena n-áirítear costais chomhroinnte/ardáin) / aonaid seachadta

Dhá theaghlach:
  aonaid éifeachtúlachta acmhainne: costas/GB stóráilte, costas/vCPU-uair, costas/comhartha,
                             costas/nóiméad tógála
  aonaid ghnó:               costas/custaiméir, costas/idirbheart, costas/comhairliúchán,
                             costas/cás-réitithe

Baineann araíonacht imeallach vs meán (marginal-vs-average-cost.md):
déanann caiteachas tiomanta/curtha in áirithe meáncostas aonaid imeallach ≈ 0 go dtí an chéad
chéim tiomantais eile — praghsáil cinntí leathnaithe ag an imeallach, treochtaí
éifeachtúlachta ag an meán.
```

## Sampla oibrithe

Seirbhís triaiste dhigiteach: caiteachas scamall £62,000/mí (ríomhaireacht £30k, sonraí £18k, leithdháileadh ardáin chomhroinnte £14k), ag láimhseáil 380,000 eipeasóid triaiste/mí:

```
Meáncostas in aghaidh na heipeasóide = 62,000 / 380,000 ≈ £0.163

Comparáid coimisinéara: triaiste teileafóin ≈ £8–12/glao, comhairliúchán dochtúra teaghlaigh ≈ £42
→ ritheann eipeasóid dhigiteach ag ~2% den rogha dhaonna is saoire — eacnamaíocht
aistrithe cainéil gds-service-metrics.md, ón taobh costais.

Seiceáil treochta: anuraidh £0.21/eipeasóid ag 240k eipeasóid → eacnamaíocht scála
ag feabhsú (costais ardáin sheasta á n-amúchadh), fiúntach ceannlíne sa QBR.
```

## An nasc le hinnealtóireacht bogearraí

Is ann a éiríonn roghanna innealtóireachta inléite ó thaobh airgeadais: is buntáiste praghsála í ailtireacht a leathann costas in aghaidh na heipeasóide; is buama ama í ceann a scálaíonn os cionn-líneach nach bhfuil le feiceáil ach sa mhéadrach seo. Cleachtais a aistríonn ó chostáil sláinte: **foilsigh na rialacha leithdháilte** (shaobhaigh costais chomhroinnte figiúirí in aghaidh an aonaid go dtí gur chaighdeánaigh PLICS costáil ar leibhéal an othair — teastaíonn an dian chéanna ó leithdháileadh costas d’ardáin); **roghnaigh aonaid a smaoiníonn an ceannaitheoir iontu** (ceannaíonn coimisinéirí eipeasóidí, ní vCPUanna); agus cothaigh costais aonaid isteach i ngach samhail [ICER](../cóimheas-incriminteach-costéifeachtúlachta/) agus [tionchar buiséid](../anailís-tionchair-buiséid/) mar an t-ainmneoir costais údarásach. I gcás gnéithe AI, is é an comhartha an t-aonad — féach [eacnamaíocht aonad infeiriúcháin](../geilleagar-aonaid-tátail/).

## Gaistí

- **Costais chomhroinnte a neamhaird**: tugann costais aonaid a eisíonn leithdháiltí ardáin/slándála/ar-ghlao íseal-mheastachán 30–50% agus titeann siad ar iniúchadh.
- **Ainmneoirí vanity**: déanann “costas in aghaidh an ghlao API” flaitheas; cuireann “costas in aghaidh na heipeasóide othair críochnaithe” in iúl.
- **Praghsáil meáncostais ar chinntí imeallacha**: spreagann gearradh meáncostas aonaid ar fhoirne as úsáid atá saor ar an imeall amharclann seachaint dramhaíola (féach [taraif náisiúnta](../taraif-náisiúnta-agus-costais-aonaid/) don leagan NHS den fhabht dreasachta seo).

## Foinsí

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
