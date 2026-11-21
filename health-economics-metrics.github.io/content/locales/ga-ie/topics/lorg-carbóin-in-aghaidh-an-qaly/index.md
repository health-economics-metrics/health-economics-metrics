# Lorg carbóin in aghaidh an QALY

Is cóimheas éifeachtúlachta é carbón in aghaidh an QALY — astaíochtaí carbóin idirghabhála (nó astaíochtaí seachanta) roinnte ar na QALY a sheachadann sí — atá cosúil go díreach le costas in aghaidh an QALY, rud a ligeann d’éifeachtúlacht carbóin idirghabhála a mheas taobh lena héifeachtúlacht costais. Téann “sochar airgeadaíochta coigeartaithe do charbón” céim níos faide, ag airgeadú tionchar an charbóin le luachanna carbóin oifigiúla neamh-trádáilte Leabhar Glas na RA agus á ghlanadh i gcoinne an [tsochair airgeadaíochta ghlain](../sochar-airgeadaíochta-glan/) caighdeánaigh.

## Cén fáth a bhfuil tábhacht leis

Tá súil ag NICE agus NHS England anois go meastar tionchar comhshaoil taobh le costas agus QALY. Tá tiomantas poiblí glan-nialais ag an NHS: glan-nialas dá astaíochtaí díreacha faoi 2040, agus glan-nialas dá lorg slabhra soláthair iomlán faoi 2045. Tagraíonn lámhleabhar NICE um meastóireachtaí teicneolaíochta sláinte (PMG36) do inbhuaine comhshaoil mar bhreithniú atá ag teacht chun cinn i measúnú teicneolaíochta. I gcás táirge sláinte digití, ciallaíonn sé seo go bhfuil carbón ag éirí ina cheathrú colún den chás luacha, taobh le costas, QALY, agus [ceannas ar an teorainn éifeachtúlachta](../ceannas-agus-an-teorainn-éifeachtúlachta/) — ní ina ionad ar aon cheann acu, ach toise a bhfuil gá níos mó ag cás gnó dea-thógtha é a thuairisciú.

## An mhatamaitic

```
Carbón in aghaidh an QALY = astaíochtaí_iomlána_tonna_co2e / qalys_iomlána
  (ciallaíonn luach diúltach astaíochtaí glana SEACHANTA in aghaidh an QALY a fuarthas
  — bua dúbailte: sláinte níos fearr agus carbón níos ísle)

Tionchar carbóin airgeadaithe = astaíochtaí_tonna_co2e × luach_carbóin_in_aghaidh_an_tonna
  (astaíochtaí diúltacha × luach dearfach = costas diúltach, ie sochar)

NMB coigeartaithe do charbón = sochar_airgeadaíochta_glan − tionchar_carbóin_airgeadaithe
```

Leathnaíonn seo smaoineamh teorann éifeachtúlachta costais/QALY le dara ais — carbón in aghaidh an QALY — an loighic chéanna “plota gach rogha agus féach cad atá cheannasach” le [ceannas agus an teorainn éifeachtúlachta](../ceannas-agus-an-teorainn-éifeachtúlachta/), curtha i bhfeidhm ar charbón in ionad costais.

## Sampla oibrithe

Cuireann seirbhís teileashláinte cuairteanna pearsanta in ionad, ag seachaint 5,000 turas gluaisteáin/bliain ag thart ar 8kg CO2e an ceann — 40 tonna CO2e seachanta, léirithe mar fhigiúr astaíochtaí diúltacha (−40.0 tonna), agus seachadann sí 25 QALY/bliain:

```
Carbón in aghaidh an QALY = −40.0 / 25.0 = −1.6 tonna CO2e seachanta in aghaidh an QALY a fuarthas
```

Ag úsáid luach carbóin neamh-trádáilte an Leabhair Ghlais (figiúr léiritheach, luach lárnach neamh-trádáilte 2023 ≈ £269/tonna CO2e — nuashonraíonn an Leabhar Glas luachanna carbóin go bliantúil, athfhíoraigh sula luann tú in anailís bheo):

```
Tionchar carbóin airgeadaithe = −40.0 × £269 = −£10,760
```

Is sochar £10,760 é “costas” −£10,760. Más é £500,000 sochar airgeadaíochta glan neamhspleách na hidirghabhála:

```
NMB coigeartaithe do charbón = £500,000 − (−£10,760) = £510,760
```

Cuireann an coigilteas carbóin leis an gcás seachas dul ó bhail air — an bua dúbailte atá i gceist ag an bhfráma astaíochtaí diúltacha a thaispeáint.

## An nasc le hinnealtóireacht bogearraí

Is trasnú beo, reatha é seo le heacnamaíocht AI/scamall: is líne fíor i soláthar an NHS anois lorg carbóin ríomhaireachta a oiliúna agus a rith samhla AI, ós rud é go n-éilíonn conarthaí soláthraithe an NHS os cionn tairseacha áirithe Plean Laghdaithe Carbóin. Rianaíonn [eacnamaíocht aonad scamall](../eacnamaíocht-aonad-scamall/) costas in aghaidh an aonaid aschuir ríomhaireachta cheana féin; is é carbón in aghaidh an QALY an teimpléad nádúrtha do mhéadrach amach anseo “costas carbóin in aghaidh an infeiriúcháin” a leathnóidh an modúl sin agus eacnamaíocht aonad infeiriúcháin isteach sa toise comhshaoil, cé nach bhfuil an méadrach sin ann go fóill.

## Gaistí

- **Cluichí teorann scóipe**: astaíochtaí díreacha (Scóip 1) amháin a chomhaireamh agus astaíochtaí slabhra soláthair (Scóip 3) a eisiamh, arb iad is mó de ghnáth i lorg iarbhír táirge sláinte digití.
- **Luach carbóin as dáta a úsáid**: nuashonraíonn an Leabhar Glas a luachanna carbóin neamh-trádáilte go bliantúil, mar sin ní mór aon fhigiúr £/tonna a luaitear a dhátú, ní a lua mar thairiseach seasta.
- **“Éifeachtúil ó thaobh carbóin” a chaitheamh mar ionadach ar “costéifeachtúil”**: is droch-úsáid ar acmhainní an NHS fós idirghabháil ísealcharbóin, ísealluacha. Is ceathrú colún é carbón taobh le costas agus QALY, ní ionadach ar cheachtar acu.

## Foinsí

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
