# Eacnamaíocht cosanta

Eacnamaíocht idirghabhála sula dtarlaíonn nó sula n-éiríonn galar chun cinn. Tá an príomhthorthaí frith-intuigthe: **ní shábhálann an chuid is mó den chosc airgead** — ceannaíonn sé sláinte ar phraghas maith. Fuair anailís thábhachtach NEJM de chuid Cohen, Neumann agus Weinstein go bhfuil níos lú ná 20% d’idirghabhálacha cosanta glan-shábhála costais; tá an chuid eile costéifeachtúil ar a mhéad.

## Cén fáth a bhfuil tábhacht leis

Is é “sábhálann cosc airgead” an t-éileamh bréagach is mó a athdhéantar i mbeartas sláinte, agus scriosann eacnamaithe sláinte cásanna gnó a thógtar air. An struchtúr macánta: cosnaíonn cosc airgead anois (daonraí iomlána a scagadh, fachtóirí riosca a chóireáil i ndaoine nach mbeadh tinn riamh) agus tugann sé sláinte ar ais níos déanaí — go hiondúil ar chostas *maith* in aghaidh an QALY, ó am go ham ag sábháil, uaireanta ar phraghas uafásach. Is é an anailís a fhios cén réimeas ina bhfuil tú. Tá tábhacht tráchtála leis an idirdhealú: tugann táirge cosanta a dhíoltar mar “sábhálann sé airgead don NHS” cuireadh d’iniúchadh a theipfidh air; dá ndíolfaí é mar “ceannaíonn sé QALYanna ag £4,000” d’fhéadfadh sé an bua a fháil ar na fíricí céanna. Féach [idirghabháil níos luaithe](../idirghabháil-níos-luaithe/) don leagan laistigh de chosán. Sula gcostálann tú clár cosanta, freagraíonn [codán inchurtha le daonra](../codán-inchurtha-le-daonra/) an cheist mhéide ar dtús — cé mhéad de ualach an ghalair spriocdhírithe a d’fhéadfadh an riosca-fachtóir a dtugann an clár aghaidh air a dhíothú go réasúnta.

## An mhatamaitic

```
Net cost of prevention (per person) =
    intervention cost × everyone treated
  − downstream costs avoided × the few who would have progressed
  (both discounted — the avoided costs are years away; see
   discounting-and-time-preference.md)

Cost-saving requires: intervention cost < P(progression) × avoided cost × discount factor
Cost-effective requires only: net cost / QALYs gained < threshold
```

Paradacsa an chosc: iolraíonn costas idirghabhála thar an daonra iomlán; ní chuireann sochair ach leis an mbeagán frithfhíorúil.

## Sampla oibrithe

Aip bainistíochta hipirtheannais a thairgtear do 100,000 duine fásta i mbaol, £25/duine/bliain. Thar 10 mbliana cuireann sí cosc ar 400 stróc (gach ceann ag costáil £45,000 lascainithe, agus 3 QALY caillte).

```
Cost:    100,000 × £25 × 10 yrs (discounted ≈ ×8.3) ≈ £20.8M
Offsets: 400 × £45,000 = £18.0M
Net cost ≈ £2.8M — NOT cost-saving

QALYs gained = 400 × 3 = 1,200
Cost per QALY = 2.8M / 1,200 ≈ £2,300/QALY — outstandingly cost-effective
```

An clár céanna, an dá fhírinne: cailleann sé £2.8M in airgead tirim agus ceannaíonn sé sláinte ag deichiú cuid de thairseach NICE. Maoinigh é ar an dara uimhir; ná geall an chéad cheann riamh.

## An nasc le hinnealtóireacht bogearraí

Is eacnamaíocht cosanta é cáilíocht athraithe-ar-chlé, leis an rabhadh san áireamh. Cuireann athbhreithnithe, tástálacha agus anailís statach costas i bhfeidhm ar *gach* athrú chun saincheisteanna a ghabháil sa bheagán a d’fhéadfadh dul chun cinn go heachtraí táirgeachta. Tá cuar costais lochtanna (10–100× de réir céime) i bhfeidhm mar chostais stróic — agus mar an gcéanna leis an tsláinte, is é an chonclúid mhacánta: de ghnáth bíonn athrú-ar-chlé costéifeachtúil, ní glan-shábhála go huathoibríoch, mar nach mbeadh an chuid is mó de na saincheisteanna bratacha ina n-eachtraí riamh (fadhb an bheagáin fhrithfhíorúil). Ríomh é: costas iomlán an gheata in aghaidh na tréimhse vs eachtraí a seachnaíodh i ndáiríre × costas eachtra — an struchtúr sampla oibrithe céanna, le [NNT](../líon-is-gá-a-chóireáil/) mar an t-aonad in aghaidh an ghabhála.

## Gaistí

- **Sábhálacha costais a éileamh nuair a thacaíonn an fhianaise le costéifeachtúlacht** — earráid shainiúil abhcóideachta cosanta sa dá réimse.
- **Fritháirimh todhchaí gan lascainiú**: sochair 15 bliana amach ar phraghas aghaidhe.
- **Costais ródhiagnóise/ró-chóireála a neamhaird**: aimsíonn cosc bréag-ghalar freisin — féach [eacnamaíocht scagtha](../eacnamaíocht-scagtha/).

## Foinsí

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
