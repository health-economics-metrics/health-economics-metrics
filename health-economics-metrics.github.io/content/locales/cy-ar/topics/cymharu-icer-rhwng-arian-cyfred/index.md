# Cymharu ICER Rhwng Arian Cyfred

Mae cymharu [ICER](../cymhareb-costeffeithiolrwydd-cynyddrannol/) a gyfrifwyd yn arian cyfred un wlad â [throthwy parodrwydd i dalu](../trothwyon-parodrwydd-i-dalu/) gwlad arall — neu gyfuno data cost a gasglwyd ar draws treial amlwladol — yn gofyn am gam trosi arian cyfred penodol y gellir ei archwilio. Os caiff y dull trosi ei gam-ddewis, gall yr un dystiolaeth sylfaenol wrthdroi penderfyniad mabwysiadu, er na newidiodd dim yn y data clinigol na chost.

## Pam mae hyn yn bwysig

Mae canllawiau methodoleg ISPOR ar gyfer treialon clinigol amlwladol (Willke et al., *Health Economics*, 1998) yn argymell trosi costau adnoddau gan ddefnyddio **cydraddoldeb pŵer prynu (PPP)** — nid cyfraddau cyfnewid y farchnad — wrth gymharu gwerth economaidd gwirioneddol adnoddau ar draws gwledydd, a neilltuo cyfraddau cyfnewid tramor y farchnad ar gyfer yr hyn y maent ar ei gyfer mewn gwirionedd: modelu llifoedd taliadau arian parod trawsffiniol go iawn. Mae cymysgu'r ddau yn un o'r gwallau methodoleg HTA amlwladol mwyaf cyffredin, yn union am fod y ddau yn edrych fel "y gyfradd gyfnewid" i rywun nad yw wedi darllen y canllawiau, ac nid yw taenlen yn eich atal rhag ei wneud yn anghywir.

## Y Fathemateg

```
icer_mewn_arian_lleol = trosi(icer_mewn_arian_ffynhonnell, ffactor_trosi)

dylai'r ffactor_trosi fod:
  ffactor trosi PPP     — ar gyfer cymharu gwerth economaidd gwirioneddol
                           adnoddau ar draws gwledydd (argymhellir gan ISPOR
                           ar gyfer CEA amlwladol)
  cyfradd gyfnewid y farchnad — dim ond ar gyfer taliadau arian parod
                           trawsffiniol gwirioneddol

mabwysiadu os icer_mewn_arian_lleol < trothwy_lleol
```

Y rheol benderfynu ei hun yw'r [rheol trothwy ICER](../trothwyon-parodrwydd-i-dalu/) arferol — `mabwysiadu os ICER < λ` — mae'r cwestiwn methodolegol y mae'r testun hwn yn mynd i'r afael ag ef yn ymwneud yn gyfan gwbl â *pha ffactor trosi* sy'n cynhyrchu'r ffigur `icer_mewn_arian_lleol` y cymhwysir y rheol hwnnw ato.

## Enghraifft Waith

Mae ICER cyffur o dreial yn yr UD yn $45,000/QALY. Mae gwlad fewnforio ddamcaniaethol yn gosod ei throthwy darluniadol ei hun ar £34,000/QALY (ffigur damcaniaethol sy'n benodol i'r wlad ar gyfer yr enghraifft hon yn unig — mae trothwyon go iawn yn amrywio yn ôl gwlad ac yn newid dros amser, a rhaid eu ffynhonnellu a'u dyddio bob amser).

**Gan ddefnyddio ffactor trosi PPP o 0.72** (darluniadol, ar gyfer yr enghraifft waith hon yn unig): $45,000 × 0.72 = £32,400/QALY. £32,400 < £34,000 → **mabwysiadu**.

**Gan ddefnyddio cyfradd gyfnewid y farchnad o 0.79** yn lle hynny (darluniadol): $45,000 × 0.79 = £35,550/QALY. £35,550 > £34,000 → **gwrthod**.

Mae'r un ICER sylfaenol o $45,000/QALY yn cynhyrchu penderfyniad mabwysiadu o dan drosi PPP a phenderfyniad gwrthod o dan drosi cyfradd cyfnewid y farchnad. Dyma'r enghraifft goncrid o pam mae canllawiau ISPOR yn trin y dewis o ffactor trosi fel un sy'n arwyddocaol yn fethodolegol — nid manylyn talgrynnu, ac nid rhywbeth i'w adael yn ymhlyg mewn fformiwla taenlen nad oes neb yn ei gwirio ddwywaith.

## Cysylltiad Peirianneg Feddalwedd

Dyma gymar economeg iechyd maes peirianneg adnabyddus: cywirdeb prisio aml-arian cyfred i18n/l10n mewn meddalwedd fasnachol, lle na ddylai tudalen brisio SaaS fyth gymharu swm `$` â phris `£` yn dawel. Mae'r warant ar lefel y math y mae math `Money` wedi'i adeiladu'n dda yn ei darparu — dulliau cymharu sy'n gwrthod cymharu arian cyfred anghyfatebol, gan orfodi cam trosi penodol yn gyntaf — yn gyfochrog peirianneg feddalwedd uniongyrchol â'r pwynt methodolegol economeg iechyd yma: peidiwch â chymharu ffigurau heb eu trosi ar draws arian cyfred, a pheidiwch â gadael i'r cam trosi fod yn ymhlyg nac heb ei ddogfennu.

## Peryglon

- **Cymharu symiau mewn gwahanol arian cyfred yn dawel**: gwaith HTA ad hoc mewn taenlenni sy'n tynnu neu'n cymharu ffigur doler a ffigur punt heb gam trosi yn gyntaf — dosbarth o fygiau y mae math `Money` go iawn sy'n ymwybodol o arian cyfred yn eu dal wrth ddylunio yn hytrach na'u gadael fel gwall tawel.
- **Cymysgu cyfradd gyfnewid y farchnad â PPP**: y gwall methodoleg HTA amlwladol mwyaf cyffredin yn ôl canllawiau ISPOR — gall y ddau rif wahaniaethu'n sylweddol ac maent yn ateb cwestiynau gwahanol (gwerth economaidd gwirioneddol yn erbyn llif arian parod gwirioneddol).
- **Peidio â dyddio'r gyfradd gyfnewid na'r mynegai PPP a ddefnyddiwyd**: mae'r ddau'n symud dros amser, felly rhaid dyddio unrhyw ffactor trosi a ddyfynnir yn yr un modd ag y mae'r gadwrfa hon yn dyddio ei ffigurau meincnod eraill (gwerthoedd carbon y Llyfr Gwyrdd, gwerth marwolaeth a atalwyd, ac yn y blaen).

## Ffynonellau

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
