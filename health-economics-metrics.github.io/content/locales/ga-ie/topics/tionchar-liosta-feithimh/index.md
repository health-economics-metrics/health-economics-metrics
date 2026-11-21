# Tionchar liosta feithimh

Tiontaíonn tionchar liosta feithimh acmhainn chliniciúil shábháilte ina n-othair a bhaintear den liosta feithimh (nó a bhogtar níos tapúla tríd). Laghdaíonn uaireanta sábháilte a thiontú ina sliotáin chliniciúla bhreise méid liosta feithimh iontaobhais go díreach — an bealach is inláimhsithe chun a thaispeáint do chóras sláinte cad chuige *a bhfuil* acmhainn scaoilte.

## Cén fáth a bhfuil tábhacht leis

Is é an liosta feithimh roghnach príomhdhúshlán an NHS tar éis na paindéime (is méadracht pholaitiúil náisiúnta é a mhéid), agus reáchtálann gach iontaobhas clár téarnaimh roghnaigh ina choinne. Tá cás gnó a deir “sábhálann sé 2,000 uair altra” teibí; is scéal é ceann a deir “cruthaíonn sé 4,000 sliotán coinne breise, ag feiceáil 3,800 othar ar feitheamh, ag gearradh liosta na speisialtachta 9%” ar féidir le Príomh-Oifigeach Oibríochtaí a thabhairt chuig a bhord. Is é tionchar liosta feithimh an *t-aonad cuntais* nádúrtha d’[acmhainn nach scaoileann airgead tirim](../coigilteas-a-scaoileann-airgead-tirim-vs-coigilteas-nach-scaoileann/).

## An mhatamaitic

```
Extra slots        = hours released / slot duration × utilization
Patients seen      = extra slots × (1 − DNA rate)
List reduction     = patients seen − induced new demand
Waiting-time gain  = queueing improvement from higher service rate
                     (for stable queues, cutting the backlog N by ΔN at
                     service rate μ pulls everyone forward ~ΔN/μ)
```

Luach sláinte feithimh níos giorra: caitheann othair níos lú seachtainí sa stát úsáidíochta réamhchóireála níos ísle — an uimhríocht QALY i [tarchur go cóireáil](../tarchur-go-cóireáil/).

## Sampla oibrithe

Sábhálann bogearraí doiciméadaithe comhthimpeallacha 45 nóim/lá do gach ceann de 20 altra cliniciúil. Thar 250 lá: 20 × 0.75 × 250 = 3,750 uair/bliain.

```
Slots (30 min, 85% usable) = 3,750 / 0.5 × 0.85 = 6,375 slots
Patients seen (7% DNA)     = 6,375 × 0.93       ≈ 5,929/year
```

Do speisialtacht le liosta 12,000 othar agus 24,000 coinne/bliain d’acmhainn a thagann le héileamh, laghdaíonn ~5,900 coinne bhreise meánfhanacht thart ar cheathrú — ag bogadh an iontaobhais go hábhartha i dtreo chaighdeán 18 seachtain gan fruiliú. Ag ~£160 luach scéime in aghaidh an fhreastail tá an ghníomhaíocht fiú ~£949,000/bliain (féach [taraif náisiúnta agus costais aonaid](../taraif-náisiúnta-agus-costais-aonaid/)) — ach cuir an frámaíocht *liosta feithimh* i láthair ar dtús; is é an ceann a mbainistítear an córas air.

## An nasc le hinnealtóireacht bogearraí

Is riaráiste é liosta feithimh, agus aistríonn eacnamaíocht laghdaithe riaráiste sa dá threo. Ó shláinte go bogearraí: luacháil laghdú riaráiste de réir cá fhad a fhanann *úsáideoirí* le luach, ní de réir míreanna dúnta ([costas moille](../costas-moille/) in aghaidh gach míre ar scuaine). Ó bhogearraí go sláinte: deir Dlí Little nach laghdaíonn an liosta ach má sháraíonn an ráta seirbhíse an ráta teachta — fágann gnóthachain acmhainne arna n-ionsú ag tarchuir ag ardú feithimh gan athrú, mar sin samhlaigh teachtaí freisin. Agus sa dá réimse, tosaigh de réir luacha meáite le déine (catagóirí práinne cliniciúla ↔ [modhnóirí déine](../easnamh-qaly-agus-modhnóirí-déine/)), ní chéad-isteach-chéad-amach.

## Gaistí

- **Sliotáin ≠ othair**: rátaí DNA agus blúirí neamh-inúsáidte d’am scaoilte a ligean i ndearmad.
- **Éileamh spreagtha**: meallann acmhainn bhreise infheicthe tarchuir; tá tionchar glan liosta níos lú ná an tionchar comhlán.
- **Airgead tirim a éileamh**: is luach acmhainne é tionchar liosta feithimh; is líne eile é an t-éileamh airgid tirim (seachfhoinsiú riaráiste a sheachaint) — féach [costais seachfhoinsithe inseachanta](../costais-seachfhoinsithe-seachanta/).

## Foinsí

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
