# Fad an fhanachta (LOS)

Is é fad an fhanachta líon na laethanta ó ghlacadh isteach san ospidéal go scaoileadh — príomhmhéadracht éifeachtúlachta sreafa de chúram othar cónaitheach. Is ionann meánacmhainn ghéarmhíochaine na RA agus thart ar 4–5 lá; itheann gach lá breise leaba ghann agus nochtann sé an t-othar do rioscaí a fhaightear san ospidéal.

## Cén fáth a bhfuil tábhacht leis

Tiomáineann LOS beagnach gach rud i ngeilleagar ospidéil ghéarmhíochaine: acmhainn leapacha, tréchur roghnach, sreabhadh éigeandála, foireann. Scaoileann laghdú fiú codanna de lá ar an meán ar scála acmhainn ollmhór (féach [laethanta leapa sábháilte](../laethanta-leapa-sábháilte/)). Is comhartha cáilíochta é LOS sa dá threo freisin — má tá sé rófhada is dócha go bhfuil teip próisis ann (diagnóisic mhoillithe, páipéarachas scoir, fanacht cúraim shóisialta); má tá sé róghearr d’fhéadfadh scaoileadh roimh am a bheith i gceist, rud a thaispeántar níos déanaí mar [athghlacadh](../ráta-athghlactha/).

## An mhatamaitic

```
LOS (per spell)  = discharge date − admission date
Average LOS      = occupied bed days / discharges (report mean AND median;
                   LOS is heavily right-skewed by long-stay outliers)

Comparisons require case-mix adjustment (age, diagnosis, acuity),
or you are measuring who the hospital admits, not how it performs.
```

Nascann Dlí Little na hathróga sreafa: `beds occupied = admission rate × average LOS` — an dlí céanna a rialaíonn scuaineanna bogearraí (féach [méadracht sreafa](../méadracha-sreafa/)).

## Sampla oibrithe

Glacann iontaobhas isteach 40 othar leighis éigeandála in aghaidh an lae ag meán-LOS 6.0 lá: 240 leaba áitithe go buan (40 × 6). Gearrann bogearraí comhordaithe scoir (rianú tascanna, uathoibriú cógaisíochta, áirithint iompair) eireaball neamhchliniciúil na bhfanachtaí 0.4 lá ar an meán.

```
Beds needed = 40 × 5.6 = 224 → 16 beds freed continuously
            = 16 × 365 = 5,840 bed days/year
```

Luacháil an 5,840 lá leapa de réir meicníochta (athlíonadh/dúnadh/sló) de réir [laethanta leapa sábháilte](../laethanta-leapa-sábháilte/). Tabhair faoi deara cad a bhog: ní leigheas, ach *fanacht* — bhí an t-othar oiriúnach go leighis; bhí an córas fós ag déanamh páipéarachais. Fadhb scuaineála é sin, agus tá bogearraí go maith ar fhadhbanna scuaineála.

## An nasc le hinnealtóireacht bogearraí

Is é LOS am timthrialla an ospidéil, agus tá an leabhar súgartha feabhsúcháin comhionann le obair sreafa seachadta: déan na céimeanna a ionstraimiú (glacadh isteach → cóireáil → oiriúnach go leighis → scaoilte i ndáiríre), faigh cén áit a bhailíonn an t-am (is iad na tarchuir é), bain staid fanachta in ionad acmhainn a chur leis. Is é an cohórt “oiriúnach go leighis le scaoileadh ach fós ag áitiú leapa” leagan an ospidéil de PR formheasta ach nár cumasc. Deiseanna díreacha bogearraí: ceolchoirmeacht tascanna scoir, am iompair diagnóiseach, e-oideas cógais scoir, comhtháthú tarchuir chúraim shóisialta.

## Gaistí

- **Tuairisciú meáin amháin** — tá sé de cheannas ag eisfhíorais; féadann meán atá ag titim eireaball fanachta fadtéarmaigh atá ag fás a cheilt.
- **Gan choigeartú meascáin cásanna** i dtuairimí roimh/tar éis: athraíonn tairseacha glactha isteach go séasúrach agus go hamhantrach.
- **Laghdú LOS a thagann chun solais arís mar athghlacadh** — cuir sonraí athghlactha 30 lá i bpéire le héilimh LOS i gcónaí.

## Foinsí

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
