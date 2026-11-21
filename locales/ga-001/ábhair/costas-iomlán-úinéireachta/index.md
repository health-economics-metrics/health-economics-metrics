# Costas iomlán úinéireachta (TCO)

Is é TCO costas iomlán córais thar a shaolré: éadáil nó tógáil, comhtháthú, oibriú, cothabháil, tacaíocht, oiliúint, agus dímhunú. An bunlíne mhíchompordach: **is 50–80% de TCO bogearraí é cothabháil** — tagann thart ar thrí cheathrú de chostas saoil *tar éis* seolta.

## Cén fáth a bhfuil tábhacht leis

D’fhoghlaim measúnú teicneolaíochta sláinte i bhfad ó shin nach é praghas druga a chostas — baineann riar, monatóireacht, agus bainistíocht fo-éifeachtaí go léir leis an tsamhail. Athdhéanann cásanna gnó bogearraí nach gcomhaireann ach costas tógála/ceadúnais an earráid praghas-druga naïve agus easluacháiltear go córasach taobh costais gach [ICER](../cóimheas-incriminteach-costéifeachtúlachta/) agus [tionchar buiséid](../anailís-tionchair-buiséid/) a chothaíonn siad. I soláthar NHS, is é disciplín TCO a fhágann go bhfuil éileamh costéifeachtúlachta táirge digití macánta — agus is ann a chailleann roghanna atá saor ar dhealramh.

## An mhatamaitic

```
TCO = initial cost (build/licence + integration + data migration + training)
    + Σ_t [operations + maintenance + support + infrastructure + upgrades
           + compliance/assurance]_t / (1 + r)^t
    + decommissioning cost (exit, data extraction, parallel running)

Horizon: 3–5 years commercial, system-lifetime for clinical infrastructure
r: 3.5% public sector (Green Book), 8–12% commercial
Benchmarks: annual maintenance ≈ 15–20% of build cost; ~78% of lifetime
TCO post-launch; ignore decommissioning and vendor lock-in prices itself.
```

## Sampla oibrithe

Dhá rogha do chóras e-bhreathnuithe, léaslíne 5 bliana:

```
                        Vendor SaaS     In-house build
Year 0 (licence/build)  £250,000        £900,000
Integration + training  £180,000        £150,000
Annual run (yrs 1–5)    £120,000/yr     £190,000/yr  (hosting + 1.5 FTE maint.)
Exit/decommission       £60,000         £30,000

Undiscounted TCO        £1,090,000      £2,030,000
```

Ní raibh meastachán innealtóireachta na rogha tógála (£900k) ach 44% dá fhíor-TCO — agus sáraíonn meastacháin tógála iad féin 30–40% de ghnáth (féach [tógáil vs ceannach](../tóg-nó-ceannaigh/)). Mura seachadann an rogha inmheánach *torthaí* atá difriúil go hábhartha, baineann loighic [íoslaghdú costais](../anailís-íoslaghdaithe-costais/) agus buann SaaS faoi ~£940k.

## An nasc le hinnealtóireacht bogearraí

Faigheann innealtóirí a ndáta cothabhála féin faoi mheá agus iad ag moladh tógálacha: ciallaíonn riail cothabhála bliantúil 15–20%-de-chostas-tógála go gcuireann gach córas £1M £150–200k/bliain d’acmhainn todhchaí i bhfeidhm go ciúin — dliteanas a bhaineann leis an gclár comhardaithe meabhrach céanna le [fiachas teicniúil](../fiachas-teicniúil/). Is é TCO an leath costais de gach méadracht sa stór seo freisin: costas in aghaidh an imscartha, [geilleagar aonaid scamall](../eacnamaíocht-aonad-scamall/), agus an disciplín ainmneora a chuireann HTA i bhfeidhm ar urraitheoirí drugaí. Nuair a chuirtear ceist ar phraghas do tháirge, is gnách gurb é comparáid TCO a áiríonn fíorchostais reatha an ghnáthsholáthraí an t-athfhrámú is láidre ar fáil. Is suim de go leor míreanna costais thar am é figiúr TCO il-bhliantúil cosúil leis thuas — féach [carnadh costais atá sábháilte do airgeadraí](../comhiomlánú-costais-slán-ó-thaobh-airgeadra/) cén fáth ar cheart don suim sin a bheith cruinn-deachúil seachas snámhphointe nuair is gá do shamhail réiteach go dtí an pingin, agus [leithroinnt costais cruinn-pingne](../leithdháileadh-costais-cheannta-beacha/) chun comhshuim TCO a roinnt thar ionaid chostais gan pingneacha a chailleadh.

## Gaistí

- **Ancaireacht costais seolta**: roghanna a chur i gcomparáid ag costas bliain-0 nuair a aisiompaíonn an rangú faoi bhliain 3.
- **Meancóg saothair inmheánaigh shaor**: cothabháil inmheánach costáilte ag nialas toisc “go bhfuil an fhoireann íoctha cheana” — féach [costas deise](../costas-deise/).
- **Costais scoir a neamhaird**: is ann a éiríonn SaaS “saor” costasach: easpórtáil sonraí, foirceannadh conartha, agus rith comhthreomhar.
- **Sáruithe an léaslíne chéanna**: TCO SaaS 3 bliana a chur i gcomparáid le amúchadh tógála 10 mbliana (féach [léaslíne ama](../léaslíne-ama/)).

## Foinsí

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
