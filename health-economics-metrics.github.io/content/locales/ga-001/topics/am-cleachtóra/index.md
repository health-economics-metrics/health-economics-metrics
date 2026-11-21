# Am cleachtóra

Is é am cleachtóra an acmhainn is ganna i bhformhór na gcóras sláinte. Chun luach nóiméad sa lá a shábháil do chliniceoir a thomhas, ní mór aistriú ó mhatamaitic phá shimplí go **costas deise agus acmhainn an chórais**: laistigh de sheirbhís sláinte náisiúnta, is ceap buidéil oibríochtúil dian é am cleachtóra, ní líne costais a lúbann.

## Cén fáth a bhfuil tábhacht leis

Ní féidir leat níos mó dochtúirí teaghlaigh, comhairleoirí, nó altraí speisialaithe a dhéanamh go tapa — ritheann píblínte oiliúna 5–15 bliana, agus tá folúntais ainsealacha. Mar sin ní “pá a sheachnaítear” é uair an chloig d’am cleachtóra a shábháiltear (íoctar an cleachtóir fós); is *acmhainn cheap buidéil a scaoileadh* é, agus tá acmhainn cheap buidéil fiú an méid a tháirgeann an ceap buidéil. Is é seo an fáth go bhfuil éilimh “sábhálann sé 10 nóiméad in aghaidh an chomhairliúcháin” ar an líne is coitianta agus is mó a bhfuil praghas mícheart uirthi i sláinte dhigiteach.

## An mhatamaitic

Trí leibhéal luachála, ag méadú macántachta:

```
1. Wage basis:        hours × loaded salary rate (PSSRU unit costs)
                      — what the time costs, not what it produces
2. Output basis:      hours → appointments/procedures enabled × scheme value
                      (see national-tariff-and-unit-costs.md)
3. Bottleneck basis:  if this role gates a whole pathway, hours × value of
                      pathway throughput released (theory of constraints)
```

Lascaine blúirithe: athimlonnaítear am a shábháiltear i dtáinníní faoi bhun cuantam inúsáidte (m.sh. 3 nóiméad scaipthe ar chlinic) go dona; cuir fachtóir úsáide luaite i bhfeidhm.

## Sampla oibrithe

Sábhálann scríobh comhthimpeallach 2 nóiméad do dhochtúir teaghlaigh in aghaidh an chomhairliúcháin, 30 comhairliúchán sa lá: 60 nóiméad sa lá, nó **220 uair sa bhliain in aghaidh an dochtúra teaghlaigh** thar 220 lá oibre.

```
Wage basis:   220 × £80 (loaded GP hour, PSSRU-region) ≈ £17,600/GP/year
Output basis: 60 min/day = 5 extra 12-min consultations/day
              = 1,100 extra appointments/GP/year × £42 ≈ £46,200/GP/year
              — or the same appointments absorbed as reduced overtime and
              safer, unhurried consultations (qualitative line)
```

Thar chónaidhm 50 dochtúir teaghlaigh tá acmhainn bhonn-aschuir fiú ~£2.3M/bliain — ar choinníoll go bhfuil na nóiméid fíor (tomhaiste, ní éilithe ag díoltóir), comhdhlúite (comhairliúcháin iomlána, ní blúirí), agus athimlonnaithe (féach [sábhálacha a scaoileann airgead tirim vs nach scaoileann](../coigilteas-a-scaoileann-airgead-tirim-vs-coigilteas-nach-scaoileann/)).

## An nasc le hinnealtóireacht bogearraí

Iompraíonn am innealtóra sinsearaigh ar an mbealach céanna: is é an ceap buidéil trína sreabhann dearaí, athbhreithnithe agus eachtraí, mar sin luacháil é de réir a bhfuil an ceap buidéil á gheatáil, ní de réir tuarastail. Baineann an luacháil trí leibhéal chéanna le haon éileamh “sábhálann AI X nóiméad do gach forbróir” — déanann matamaitic pá an-bhláthú ar uimhreacha beaga; is iad na ceisteanna macánta an gcomhdhlúthaíonn nóiméid ina mbloic inúsáidte agus cad a tháirgeann an acmhainn scaoilte i ndáiríre. Féach [barrfheabhsú acmhainní iartheachtacha](../barrfheabhsú-acmhainní-iartheachtacha/) don iolraitheoir nuair is leis an duine a bhfuil gach duine eile ag fanacht leis an uair an chloig sábháilte.

## Gaistí

- **Nóiméid × tuarastal = sábhálacha** — an ataitiú canónach; is acmhainn é, agus ag an úsáid luaite amháin.
- **An fhadhb cuantaim a neamhaird**: ní hionann 12 × 5 nóiméad sábháilte agus uair an chloig saor.
- **Gach ról a luacháil mar a chéile**: tá uair an chloig den cheap buidéil cosáin fiú i bhfad níos mó ná uair an chloig de ról neamh-gheata.

## Foinsí

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
