# Sroicheadh agus cothromaíocht (Reach and Equity)

Is é RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance — an creat caighdeánach chun tionchar *daonra* idirghabhála a mheas. A uimhríocht lárnach: **tionchar sláinte poiblí ≈ sroicheadh × éifeachtacht**. Cuireann uirlisí digiteacha toise cothromaíochta leis: ciallaíonn an deighilt dhigiteach go bhfuil sroicheadh neamhchothrom go córasach, agus féadann seachadadh digiteach-ar-dtús na bearnaí sláinte a leathnú a bhfuil sé i gceist aige a dhúnadh.

## Cén fáth a bhfuil tábhacht leis

Aimsíonn athbhreithnithe córasacha a chuireann RE-AIM i bhfeidhm ar mHealth síniú comhsheasmhach: Sroicheadh agus Glacadh láidir, **Éifeachtacht agus Cothabháil lag** — scaipeann aipeanna go héasca agus téann siad i léig go tapa. I gcás seirbhíse sláinte náisiúnta, ciallaíonn sé seo gur féidir le táirge atá iontach in aghaidh an úsáideora a bheith ina infheistíocht dhaonra bhocht, agus a mhalairt: is féidir le huirlis measartha éifeachtach a shroicheann na milliúin níos mó a tháirgeadh ná ceann iontach a shroicheann na mílte (féach uimhríocht [HALE](../ionchas-saoil-coigeartaithe-do-shláinte/)). Ní srian taobh í an chothromaíocht ach tiomántóir luacha: leanann eisiamh digiteach aois, díothacht, míchumas, agus teanga — go beacht na daonraí a iompraíonn an t-ualach is inchóireáilte — mar sin is minic go bhfuil poitéinseal sochair *os cionn an mheáin* ag an úsáideoir eisiata imeallach. Le haghaidh tomhas staidrimh foirmiúil ar éagothroime sláinte a bhaineann le stádas socheacnamaíoch, féach [Innéacs Comhchruinnithe](../innéacs-tiúchana/).

## An mhatamaitic

```
Population impact ≈ reach × effectiveness
  reach         = participants / eligible population (see activation-and-uptake.md)
  effectiveness = real-world effect among participants (retention-weighted —
                  see retention-and-churn.md)

Equity-stratified version:
  impact_group_g = reach_g × effectiveness_g, reported per deprivation
  quintile / age band / language group
  equity gap = impact_top quintile − impact_bottom quintile

Distributional cost-effectiveness: apply equity weights to QALYs by
recipient group — a QALY to the worst-off counts more (an increasingly
mainstream HTA extension).
```

## Sampla oibrithe

Clár digiteach um chosc diaibéitis, tuairiscithe ar dhá bhealach:

```
Aggregate: reach 12%, effect 0.02 QALYs/participant → 0.0024 QALYs/eligible person

Stratified (deprivation quintiles):
  Q1 (least deprived): reach 22%, effect 0.02 → 0.0044
  Q5 (most deprived):  reach 4%,  effect 0.025 → 0.0010

The programme delivers 4.4× more health to the least deprived —
while Q5's per-participant effect is HIGHER (more headroom). An
assisted-digital arm (phone coaching + community access) costing 20%
more per Q5 participant that lifts Q5 reach to 12% triples Q5 impact
and improves the aggregate — the equity investment IS the efficiency
investment here.
```

## An nasc le hinnealtóireacht bogearraí

Is déantán innealtóireachta go mór é an sroicheadh: ciorraíonn ceanglais urláir feiste agus OS, toimhdí bandaleithid, tacaíocht teanga, comhréireacht inrochtaineachta (WCAG), constaicí fíorú aitheantais, agus dáileadh app-store amháin daonraí ón ainmneoir — go hiondúil go dofheicthe, mar ní bhíonn úsáideoirí eisiata le feiceáil in anailísíocht riamh. Cleachtais innealtóireachta a bhogann cothromaíocht: tomhais an *t-ainmneoir* (ionstraimigh an daonra incháilithe, ní úsáideoirí amháin); buiséad feidhmíochta d’fheistí sean agus do nascacht lag; seol cosáin dhigiteacha chuidithe (guthán, SMS, ciosc) mar shreafaí príomhúla seachas cainéil náire; agus srathaigh gach méadracht deais de réir na dtoisí cothromaíochta — is é meán gan srathú an áit a bhfolaíonn éagothroime ([glacadh GDS](../méadracha-seirbhíse-gds/) a iompraíonn an rabhadh céanna).

## Gaistí

- **Éifeachtacht a thuairisciú ar chríochnaitheoirí, tionchar a éileamh ar dhaonraí** — téarmaí sroichte ligthe go ciúin.
- **Cothromaíocht mar iniúchadh iarmhachnaimh** seachas ionchur deartha; tá sroicheadh a athchóiriú i bhfad níos costasaí ná dearadh dó.
- **Dearmad cothabhála**: toise is laige mHealth RE-AIM — éilimh tionchair thar léaslíne ama na fianaise.
- **Sábhálacha cainéil digiteacha amháin** a aistríonn costais ar úsáideoirí eisiata agus ar fhoireann tosaigh (féach [méadracht seirbhíse GDS](../méadracha-seirbhíse-gds/)).

## Foinsí

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
