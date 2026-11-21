# Fiachas teicniúil

Is é fiachas teicniúil costas todhchaí intuigthe cinntí áisiúla san am a caitheadh i mbunchód: an obair feabhsúcháin atá dlite (**príomhshuim**) agus an tarraingt leanúnach a chuireann sé ar sheachadadh (**ús**). Casann modhanna cainníochtaithe ar nós SQALE ó mheafar é go dliteanas costáilte.

## Cén fáth a bhfuil tábhacht leis

Gan chainníocht, is gearán é fiachas teicniúil; cainníochtaithe, is cás gnó é. Bunlínte tionscail (CAST Appmarq, 1,400 aip / 550M LOC): go stairiúil ≈ **$3.61 de phríomhshuim fiachais theicniúil in aghaidh na líne cód**, le cóimheas fiachais 15–20% de chostas atógála i mbunchóid tipiciúla, i gcomparáid le beart sláinte a úsáidtear go coitianta ≤5% (grád “A” SonarQube). Oireann an frámaíocht eacnamaíochta sláinte go beacht: is *riocht ainsealach* é fiachas — gan chóireáil, téann sé chun cinn, cuireann a “ús” le seachadadh níos moille agus rátaí lochtanna níos airde, agus iomaíonn feabhsúchán ar acmhainn i gcoinne oibre gnéithe go díreach mar a iomaíonn cosc le cóireáil.

## An mhatamaitic

```
SQALE principal   = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ defect rate × cost per defect
Paydown case  = PV(interest avoided over horizon) − remediation cost
                (discounted — see discounting-and-time-preference.md)
```

Luann an phríomhshuim an dliteanas; déanann **an t-ús** an cás infheistíochta. Is droch-thrádáil é £500k príomhshuime a íoc chun £40k/bliain d’ús a sheachaint; chun £400k/bliain, den scoth.

## Sampla oibrithe

Ciseal comhtháthaithe taifead cliniciúil 400k-LOC: príomhshuim SQALE 3,800 uair × £75 = **£285k**; TDR ≈ 12% (grád C). Ús tomhaiste: taispeánann foirne a théann i dteagmháil leis an gciseal seo amanna timthrialla 40% níos faide agus rátaí teip athraithe 2× i gcomparáid le bunlíne an eastáit. Ionsúnn an ciseal 6,000 uair forbróra/bliain:

```
Interest ≈ 6,000 × 0.40 × £75      = £180,000/year (velocity drag)
         + 12 extra failures × £8,000 = £96,000/year (rework/incidents)
         ≈ £276,000/year

Remediate the worst 30% of principal (£85k) targeting hotspots → modelled
interest reduction 60%: saves ~£166k/year. Payback ≈ 6 months.
```

Tá tábhacht ag spriocdhíriú ar pholaí te: tiúchaíonn ús fiachais san áit a mbuaicíonn minicíocht athraithe × dlús fiachais — ní cheannaíonn fiachas annamh-teagmhála a dheisiú aon rud, cosúil le riocht a chóireáil nach rachadh chun cinn riamh ([eacnamaíocht cosanta](../eacnamaíocht-cosanta/)).

## An nasc le hinnealtóireacht bogearraí

Na hallmhairí eacnamaíochta sláinte a uasghrádaíonn argóintí fiachais theicniúil: cuir an t-eastát in iúl mar **fhardal ualaigh** (ar stíl [DALY](../bliain-saoil-choigeartaithe-de-réir-míchumais/) — cá bhfuil na blianta innealtóireachta sláintiúla caillte?); cosain íocaíocht síos le matamaitic dul chun cinn, go macánta (costéifeachtúil de ghnáth, ní costas-shábhála); meáigh feabhsúchán na gcóras is measa de réir [easnamh déine](../easnamh-qaly-agus-modhnóirí-déine/); agus cuir moltaí móra feabhsúcháin isteach le hanailís fhritháirimh a mhaireann rialacha [costais iartheachtacha seachanta](../costais-iartheachtacha-seachanta/) — meáite de réir dóchúlachta, lascainithe, comhairithe uair amháin.

## Gaistí

- **Tuairisciú príomhshuime amháin**: ní chosnaíonn uimhir mhór scanrúil gan meastachán úis aon rud.
- **Figiúirí fiachais ginte ag uirlisí a thógáil go litriúil**: comhairimh SQALE sáruithe rialacha; caillfidh sé fiachas ailtireachta (an cineál costasach) agus comhaireann sé tríviachtaí.
- **Utóipeachas fiachais nialasach**: ní nialas an leibhéal fiachais is fearr — is giaráil é fiachas; is é an ráta úis an cheist.
- **“Seachnaíonn an t-athscríobh é seo ar fad”**: ní mór do mholtaí athscríbhneoireachta na rialacha fritháirimh céanna a ghlanadh — costas frithfhíorúil, dóchúlacht, lascainiú.

## Foinsí

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
