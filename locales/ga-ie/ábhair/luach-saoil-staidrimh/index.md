# Luach saoil staidrimh (VSL)

Is é luach saoil staidrimh (VSL) — ar a dtugtar “luach básmhaireachta coiscthe” (VPF) in úsáid na RA — an méid a bhfuil *daonra* toilteanach go comhchoiteann íoc as riosca bháis staidrimh amháin a laghdú, díorthaithe ó staidéir trádála pá-riosca (cé mhéad pá breise a éilíonn oibrithe do phoist níos priacal) agus suirbhéanna roghanna ráite. Ní hé praghas saoil aon duine aitheanta é; is tógáil riosca daonra é, agus caithfidh innealtóir bogearraí a thógann córais a laghdaíonn riosca — algartaim tréidhíochta, seoladh otharcharr, monatóireacht sábháilteachta — a fháil amach go dtagann sé ó thraidisiún teoiriciúil difriúil le [tairseacha toilteanais íoc](../tairseacha-toilteanais-íoc/).

## Cén fáth a bhfuil tábhacht leis

Is é VSL/VPF an uirlis chaighdeánach chun laghduithe riosca básmhaireachta a airgeadú in anailís chostais-sochair rialála: sábháilteacht iompair, rialáil chomhshaoil, agus roinnt idirghabhálacha sláinte poiblí, ritheann siad a gcásanna gnó tríd. Foilsíonn Leabhar Glas HM Treasury figiúr VPF díorthaithe ó fhianaise mhargadh saothair agus suirbhé na RA, agus úsáideann an Roinn Iompair go díreach é i measúnú sábháilteachta bóithre. Is traidisiún luachála go fírinneach difriúil é seo ó mhodheolaíocht QALY × tairseach toilteanais íoc: luacháiltear gnóthachain sláinte le cur chuige na tairsí i gcoinne a tháirgeann *buiséad* sláinte faoi láthair ag an imeall, ach luacháiltear laghdú riosca le VSL/VPF i gcoinne an mhéid a nochtann daoine i margadh saothair nó suirbhé go n-íocfaidís as. Ní féidir an dá chreat a réiteach i gcónaí, agus is earráid anailíseach choitianta é an dá cheann a úsáid sa chás céanna gan é sin a admháil.

## An mhatamaitic

```
Deaths averted = population × risk_reduction_per_person
  (risk_reduction_per_person is a probability, e.g. 0.000001 = 1-in-a-million
   reduction in annual mortality risk)

Monetized mortality benefit = deaths_averted × value_of_prevented_fatality
```

## Sampla oibrithe

Baineann réigiún de 800,000 duine tairbhe as idirghabháil dhigiteach seolta/tréidhíochta sábháilteachta bóithre a laghdaíonn riosca básmhaireachta bliantúil gach duine 1 as milliún (0.000001):

```
Deaths averted = 800,000 × 0.000001 = 0.8
```

Ag baint úsáide as Luach Básmhaireachta Coiscthe na RA, £2,180,000 (figiúr HM Treasury/DfT, praghsanna 2023/24 — nuashonraíonn an Leabhar Glas é seo go bliantúil, athfhíoraigh sula luann tú in anailís bheo):

```
Monetized mortality benefit = 0.8 × £2,180,000 = £1,744,000/year
```

Beagán faoi bhun £1.75 milliún sa bhliain de shochar básmhaireachta airgeadaithe, ó laghdú riosca nach dtabharfadh formhór an daonra tionchair faoi deara go haonarach.

## An nasc le hinnealtóireacht bogearraí

Tugann foirne bogearraí sábháilteachta-criticiúla — firmware feiste leighis, bogearraí feithiclí uathrialacha, córais rialaithe tionsclaíocha — aghaidh ar an bhfadhb phraghsála chéanna agus iad ag tógáil an cháis chostais-sochair d’infheistíocht sábháilteachta: conas a phraghsálann tú “cosc ar theip tubaisteach amháin” nuair is annamh, dian, agus scaipthe thar dhaonra mór úsáideoirí an teip? Is réamhshampla fíorshaoil, poiblí-doiciméadaithe, deich mbliana d’aois é VSL/VPF chun uimhir a chur ar laghdú riosca annamh, dian, ar leibhéal daonra — an cruth argóna céanna le hinfheistíocht SRE a phraghsáil i gcoinne briseadh amach tubaisteach annamh, ach le toradh básmhaireachta in ionad toradh downtime.

## Gaistí

- **VSL a chaitheamh mar “phraghas saoil aitheanta”**: níl sé. Is tógáil staidrimh daonra é VSL/VPF a dhíorthaítear ó thrádálacha laghdaithe riosca thar go leor daoine, ní luacháil ar shaol ná bás aon duine ar leith.
- **Comhaireamh dúbailte i gcoinne ríomh sochair airgeadaíochta ghlain bunaithe ar QALY**: comhaireann figiúr VSL/VPF agus ríomh QALY × tairseach ar leith sa chás céanna, gan réiteach, luach na mbásanna seachanta céanna faoi dhó go ciúin. Roghnaigh creat amháin do chás ar leith.
- **Meastachán VSL a thrasphlandáil thar chomhthéacsanna gan choigeartú**: is saincheist mhodheolaíochta fhadtéarmach, fhíor-chonspóideach é VSL a dhíorthaítear ó mhargadh saothair tíre amháin, nó ó shonraí pá-riosca d’aois oibre, a chuirtear i bhfeidhm gan choigeartú ar chomhthéacs ioncaim difriúil nó daonra difriúil (leanaí, scoir-dhaoine) — ní ceann réitithe.

## Foinsí

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
