# Táirgiúlacht oibre agus laghdú gníomhaíochta (WPAI)

Is ceistneoir féintuairiscithe bailíochtaithe é WPAI (Reilly, Zbrozek, Dasbach, 1993) a thomhaiseann cé mhéad a théann fadhb sláinte i bhfeidhm ar obair íoctha agus ar ghníomhaíochtaí laethúla, de ghnáth thar na 7 lá seo caite. Roinneann sé an caillteanas ina *easláithreacht* — am oibre a cailleadh go litriúil — agus *láithreacht ghalair* — táirgiúlacht laghdaithe agus tú ar an láthair go fisiciúil — agus is í an dara ceann an chomhpháirt chostais is mó agus is folaithe de ghnáth.

## Cén fáth a bhfuil tábhacht leis

Ní fheiceann gnáthchomhaireamh laethanta tinnis ach easláithreacht. Ní chuireann cliniceoir nó oibrí eolais nach dtógann lá saor riamh ach a oibríonn ag 60% acmhainne trí riocht ainsealach aon rud le clár easláithreachta fad is a ghineann sé caillteanas táirgiúlachta mór, fíor — tá WPAI deartha go sonrach chun an costas dofheicthe sin a thabhairt chun solais. Toisc gur ionstraim bhailíochtaithe é seachas suirbhé saincheaptha, is féidir a scóir a úsáid i bpacáistí fianaise [torthaí tuairiscithe ag othair](../torthaí-tuairiscithe-ag-othair/) agus staidéir chostas-tinnis gan gá don athbhreithneoir an tomhas a athbhailíochtú. Mar ionstraim fhéintuairiscithe, is cineál PROM é féin, a dhéantar a idirdhealú go príomha ag a fhócas ar obair agus gníomhaíocht seachas comharthaí nó cáilíocht saoil.

## An mhatamaitic

```
Absenteeism % = hours_missed_due_to_health / (hours_missed_due_to_health + hours_worked) × 100

Presenteeism %  = self-rated 0–10 impairment while working, × 10
                  (elicited directly via questionnaire, not derived here)

Overall Work Impairment % =
    Absenteeism% + (1 − Absenteeism%/100) × Presenteeism%
    (combines the two so the total can never exceed 100%)

Productivity cost = Overall Work Impairment% / 100 × period_earnings
```

Ní suim shimplí d’aon ghnó í an fhoirmle ar laghdú foriomlán oibre: d’fhéadfadh 100% a shárú má chuirtear an dá chéatadán le chéile go díreach, mar sin cuirtear láithreacht ghalair i bhfeidhm ar an sciar *eile* (neamh-asach) d’am oibre amháin.

## Sampla oibrithe

Tuairiscíonn fostaí le migréin go bhfuil sé sceidealaithe do sheachtain 40 uair ach go gcailleann sé 4 uair di:

```
hours_missed = 4, hours_worked = 36
Absenteeism% = 4 / (4 + 36) × 100 = 10%
```

Rátálann siad ar leithligh a dtionchar táirgiúlachta agus iad ag obair mar 3 as 10 ar cheistneoir WPAI, i.e. `Presenteeism% = 30%` (is freagra amh ceistneora an chéim seo, ní rud a dhíorthaítear ó uimhreacha eile):

```
Overall Work Impairment% = 10 + (1 − 10/100) × 30
                          = 10 + 0.9 × 30
                          = 10 + 27
                          = 37%
```

Thar sheachtain 5 lá ag tuilleamh £800 (£160/lá):

```
Productivity cost = 37/100 × 800 = £296
```

Tabhair faoi deara nach mbeadh ach na 4 uair (10%) caillte taifeadta ag comhaireamh naïve laethanta tinnis — beagnach trí oiread an fhíorlaghdaithe is ea comhpháirt na láithreachta galair nuair a chomhairítear í.

## An nasc le hinnealtóireacht bogearraí

Mapálann sé seo go díreach ar mhéadrachtaí sláinte foirne innealtóireachta:

- **Easláithreacht** is saoire tinnis agus PTO é — infheicthe, rianaithe cheana, agus an chuid éasca.
- **Láithreacht ghalair** is é an t-innealtóir dóite nó ró-ualaithe le malartú comhthéacs atá i láthair i ngach seastán suas ag oibriú ar acmhainn laghdaithe — go hiondúil an costas is mó agus is folaithe, agus dofheicthe do shonraí ceannlíne nó freastail. Taispeánann sé suas ina ionad mar thréchur laghdaithe i [DORA](../méadracha-dora/) agus [méadrachtaí sreafa](../méadracha-sreafa/), nó mar réiteach níos moille ar an [bhfiachas teicniúil](../fiachas-teicniúil/) a gcuireann a “ús” leis an laghdú a dhéanamh níos measa fós.
- Is é an ceacht innealtóireachta an ceann cliniciúil céanna: éilíonn easláithreacht amháin a thomhas agus “caillteanas táirgiúlachta” a thabhairt air costas fíor a easluacháil go córasach, mar caillfidh sé gach duine atá i láthair ach laghdaithe.

## Gaistí

- **Claonadh athghairme féintuairiscithe.** Tá fuinneog athghairme 7 lá faoi réir na saobhadh tuairiscithe céanna le haon fhéintuairisc aischéimnitheach.
- **An scála láithreachta galair 0–10 a chaitheamh mar fhíortomhas fisiciúil.** Is ordanálach é, aimsithe le féinrátáil, ní cainníocht fhisiciúil bhailíochtaithe — is áis samhaltaithe é caitheamh le difríochtaí air mar line nó eatramh go docht, ní fíric fhisiciúil bhailíochtaithe.
- **Scóir a thaisceadh thar leaganacha WPAI.** Tá roinnt leaganacha riocht-shonracha ag WPAI — WPAI:GH (sláinte ghinearálta), WPAI:SHP (fadhb sláinte shonrach), agus leaganacha galar-shonracha — agus níor cheart scóir ó leaganacha éagsúla a thaisceadh ná a chur i gcomparáid gan seiceáil ar dtús gurb ionann leagan na hionstraime.

## Foinsí

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
