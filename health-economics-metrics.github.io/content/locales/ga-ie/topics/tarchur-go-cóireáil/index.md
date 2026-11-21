# Tarchur go cóireáil (RTT)

Is é tarchur go cóireáil an t-am a chuaigh thart ó tharchur dochtúra teaghlaigh go tús cóireála faoi stiúir chomhairleora. Socraíonn Bunreacht an NHS an caighdeán: **ba cheart do 92% d’othair tosú ar chóireáil laistigh de 18 seachtain**. Is é RTT an mhéadracht oibríochtúil is infheicthe go polaitiúil in NHS Shasana.

## Cén fáth a bhfuil tábhacht leis

Tugann iontaobhais a chailleann spriocanna RTT aghaidh ar fhaireachas rialála, idirghabháil, agus damáiste clú; is uimhir leathanaigh tosaigh é an liosta feithimh náisiúnta. Is sláinte caillte gach seachtain a fhanann othar (ag fanacht i stát sláinte níos measa — féach an mhatamaitic QALY thíos) agus go minic costas gnóthaithe (téann riochtaí in olcas; féach [idirghabháil níos luaithe](../idirghabháil-níos-luaithe/)). Mhaolaíonn bogearraí a shábhálann am áit ar bith i gcosán tarchuir-go-cóireáil — tréidhíocht, am iompair diagnóiseach, acmhainn clinice, sceidealú — go díreach iarmhairtí oibríochtúla agus airgeadais theip an chaighdeáin, an fáth a bhfuil tionchar RTT ina líne sochair den chéad scoth i gcásanna gnó digiteacha an NHS.

## An mhatamaitic

```
RTT performance = patients treated within 18 weeks / total treated × 100
Waiting-time health cost per patient = wait duration × (utility_treated − utility_waiting)

Pathway view: RTT = Σ stage durations (referral triage → first appointment →
diagnostics → decision → treatment) — improve the longest queue, not the
busiest stage (see flow-metrics.md).
```

## Sampla oibrithe

Cóireálann speisialtacht 5,000 othar cosáin/bliain; meán-feithimh 24 seachtain; úsáidíocht feithimh 0.68 vs cóireáilte 0.80.

Bainfidh tréidhíocht dhigiteach móide prótacail díreach-go-tástáil 5 seachtaine de scuaineáil íon:

```
QALY gain = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALYs/year
Monetized at £20,000–£30,000/QALY (see willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/year of health value
```

— móide go n-aistrítear an t-iontaobhas ó bhriseadh go caighdeán 18 seachtain a chomhlíonadh, rud a bhfuil luach rialachais ann nach ngabhann aon scarbhileog go hiomlán.

## An nasc le hinnealtóireacht bogearraí

Is **méadracht ama seolta thar scuaine il-chéime** é RTT — leagan an ospidéil d’am seolta ó chimiú go táirgeadh (féach [méadracht DORA](../méadracha-dora/)). Tá an modh feabhsúcháin comhionann: ionstraimigh gach céim, faigh cén áit a bhailíonn am féilire (is beagnach i gcónaí tarchuir agus scuaineanna é, ní obair chliniciúil), agus bain staid fanachta. Buaiteanna bogearraí tipiciúla: e-thréidhíocht a ródaíonn tarchuir i gceann uaireanta seachas i mbaisceanna seachtainiúla, brú torthaí diagnóiseacha in ionad coinní leantacha, agus critéir uathoibrithe díreach-go-tástáil. Luacháil an feabhsú le [costas moille](../costas-moille/) ainmnithe i QALY/seachtain.

## Gaistí

- **Céim nach bhfuil sa srian a fheabhsú** — ní dhéanann feithimh an chéad choinne a ghearradh ach an linn a bhogadh agus scuaineanna diagnóiseacha ag fás.
- **Cluichíocht**: is féidir le hathshocruithe cosáin agus sosanna clog RTT tuairiscithe a fheabhsú gan aon duine a chóireáil níos luaithe; iniúch an dáileadh bunúsach.
- **Feabhsú iomlán an chosáin a éileamh** d’uirlis amháin nuair a tháinig athruithe iolracha le chéile — teastaíonn comparadóir ón gcúiseachas.

## Foinsí

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
