# Acmhainn ghiniúna luacha (Iompú oibríochtúil)

Is é acmhainn ghiniúna luacha “sochar deise” an ama a scaoiltear: cad is féidir leis an ospidéal *a bhaint amach* anois leis na huaireanta a scaoileann do bhogearraí. Is í seo an mhéadracht is tábhachtaí do Phríomh-Oifigigh Oibríochtaí agus do Stiúrthóirí Leighis, mar labhraíonn sí in airgeadra a mbainistítear iad air — gníomhaíocht, spriocanna, agus iompú.

## Cén fáth a bhfuil tábhacht leis

Tá riaráistí ollmhóra tarchuir-go-cóireáil ag an NHS, agus tugann iontaobhais a chailleann caighdeáin náisiúnta ama feithimh aghaidh ar fhaireachas rialála agus idirghabháil (féach [tarchur go cóireáil](../tarchur-go-cóireáil/)). Tá fruiliú mall agus srianta; tá eastáit seasta. Is é an t-aon luamhán tapa tuilleadh gníomhaíochta giniúna luacha a fháil as foireann agus spás atá ann cheana. Ní “shábhálann airgead” amháin bogearraí a athghabhann am speisialtóra — *bearrann siad acmhainn*: cliniceanna nach bhféadfadh a bheith ann, measúnuithe nach bhféadfaí a sceidealú, gan fruiliú ná tógáil.

## An mhatamaitic

```
Hidden capacity created = time released → activity units enabled × scheme value

Activity units: outpatient attendances, pre-op assessments, monitoring reviews
Scheme value:   national tariff / NHS Payment Scheme prices
                (see national-tariff-and-unit-costs.md)
```

Is í seo an luacháil ar bhonn aschuir ar [am cleachtóra](../am-cleachtóra/), scálaithe go líne seirbhíse agus curtha in iúl in aonaid ghníomhaíochta a phleanálann an fhoireann oibríochtaí iontu cheana.

## Sampla oibrithe

Reáchtálann altraí speisialtóra Banda 6 cliniceanna measúnaithe réamhobráide. Athghabhann uathoibriú doiciméadaithe uair an chloig/lá do gach ceann de 25 altra; oireann 2 mheasúnú do gach uair an chloig.

```
Extra assessments = 25 nurses × 2/day × 250 days = 12,500/year
At ~£120 scheme value per pre-op assessment:
  12,500 × £120 = £1.5M/year of care capacity created
```

— gan altra amháin a fhruiliú ná seomra amháin a thógáil. (Chuir an tsamhail a luadh go forleathan a luaigh an stub seo ar dtús an figiúr ag £766,920/bliain do chohórt níos lú; is é an patrún uimhríochta céanna — scálaíonn an uimhir le hairtí × seisiúin × taraif.) An frámaíocht oibríochtúil don COO: stopann measúnú réamhobráide ina srian ar liostaí amharclainne — titeann obráidí a cealaíodh ar an lá, agus ardaíonn úsáid amharclainne, an áit a dtosaíonn an *chéad* líne sochair eile (féach [barrfheabhsú acmhainní iartheachtacha](../barrfheabhsú-acmhainní-iartheachtacha/)).

## An nasc le hinnealtóireacht bogearraí

Sábhálann an t-athfhrámú céanna éilimh táirgiúlachta forbróirí ó mhatamaitic phá: am innealtóireachta scaoilte, curtha in iúl mar *chumas seolta nach bhféadfadh an eagraíocht a íoc murach sin* — gnéithe, imirce, obair iontaofachta — luachálta ar an méid a íocann an eagraíocht as cumas den chineál sin ag an imeall (rátaí conraitheora, nó coibhéisí fruilithe iarchurtha). Múineann frámaíocht an COO rud éigin freisin faoi obair ardáin a phitseáil: cuir an sochar in iúl sna haonaid a mbainistítear an lucht éisteachta orthu. Smaoiníonn ceannairí oibríochtaí i ngníomhaíocht agus spriocanna, ní in uaireanta teibí; smaoiníonn ceannairí innealtóireachta i míreanna treochláir agus ceannlíne, ní i nóiméid sábháilte.

## Gaistí

- **Éilimh acmhainne gan éileamh**: ní tábhachtach 12,500 sliotán measúnaithe breise ach má líonann an phíblíne máinliachta iad — seiceáil an srian iartheachtach.
- **Luach taraife gan meicníocht íocaíochta**: faoi íocaíocht mheasctha, d’fhéadfadh nach dtabharfadh gníomhaíocht bhreise ioncam breise; d’fhéadfadh an luach a bheith ina laghdú liosta feithimh ina áit (féach [tionchar liosta feithimh](../tionchar-liosta-feithimh/)).
- **Acmhainn a chur i láthair mar airgead tirim** — is é seo an sochar neamh-scaoilte-airgid suaitheantais; lipéadaigh é (féach [sábhálacha a scaoileann airgead tirim vs nach scaoileann](../coigilteas-a-scaoileann-airgead-tirim-vs-coigilteas-nach-scaoileann/)).

## Foinsí

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
