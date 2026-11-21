# Ceannas agus an teorainn éifeachtúlachta

Tá rogha **ceannaithe** má chosnaíonn rogha eile níos lú *agus* má sheachadann sí níos mó. Is í an **teorainn éifeachtúlachta** an méid a fhágtar tar éis deireadh a chur le roghanna ceannaithe: an tacar roghanna ina n-éilíonn níos mó a fháil níos mó a íoc.

## Cén fáth a bhfuil tábhacht leis

Sula dtosaíonn aon díospóireacht faoi thairseacha nó buiséid, cuireann measúnú teicneolaíochta sláinte deireadh ar dtús leis na roghanna nár cheart d’aon duine a roghnú riamh. Is cleachtadh cúig nóiméad é gach rogha a phlota ar phlána costas-vs-éifeacht agus an teorainn a tharraingt a mharaíonn leath de ghearrliosta go rialta. Ríomhtar comparáidí incriminteacha ([ICERanna](../cóimheas-incriminteach-costéifeachtúlachta/)) ansin *feadh na teorann* amháin, gach rogha i gcoinne na cinn eile is saoire nach bhfuil ceannaithe — ní i gcoinne “gan aon ní a dhéanamh” riamh nuair atá roghanna idirmheánacha níos fearr ann.

## An mhatamaitic

```
Ceannas docht:   ceannaíonn A B má Costas_A ≤ Costas_B agus Éifeacht_A ≥ Éifeacht_B
                 (le héagothroime dhocht amháin ar a laghad)

Ceannas leathnaithe: cuirtear B as an áireamh má bhaineann meascán de A agus C níos mó éifeachta
                 amach in aghaidh an phunt — braitear nuair a laghdaíonn ICERanna de réir mar a
                 ardaíonn tú an teorainn. Ní mór d’ICERanna bailí teorann a bheith ag méadú.
```

Nós imeachta: sórtáil roghanna de réir éifeachta; bain na cinn atá ceannaithe go docht; ríomh ICERanna péire idir comharsana; bain aon rogha a sháraíonn a ICER ICER na rogha eile níos éifeachtaí (ceannas leathnaithe); déan arís go dtí go n-ardaíonn ICERanna go monatón.

## Sampla oibrithe

Ceithre rogha chun coinní caillte a laghdú (éifeacht = coinní aisghafa/bliain):

```
Rogha           Costas/bl   Aisghafa
Gan aon ní      £0          0
Meabhrúcháin SMS £20,000    2,000
Glaonna guthán   £120,000   2,200
SMS + triaiste AI £90,000   3,500
```

Tá glaonna guthán **ceannaithe go docht** ag SMS + triaiste AI (cosnaíonn níos mó, aisghabhann níos lú). Teorainn: gan aon ní → SMS → SMS + AI.

```
ICER(SMS vs gan aon ní)  = 20,000 / 2,000  = £10 in aghaidh na coinne aisghafa
ICER(SMS+AI vs SMS)      = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 in aghaidh na coinne
```

ICERanna ag méadú → teorainn bhailí. Ag ~£160 sábháilte in aghaidh na coinne ospidéil aisghafa (féach [ráta nár fhreastail](../ráta-nár-fhreastail/)), is fiú an dá chéim teorann a thógáil; níor chóir don togra banc-ghutháin an coiste a shroicheadh riamh.

## An nasc le hinnealtóireacht bogearraí

Tóg an cairt chéanna d’aon chinneadh uirlisí: costas in aghaidh na bliana ar ais amháin, toradh tomhaiste (uaireanta sábháilte, teagmhais seachanta, imlonnaithe cumasaithe) ar an ais eile. Cuirtear deireadh le pointí suas-agus-ar-chlé den teorainn sula n-argóidh aon duine faoi bhuiséad. Athfhráimeann sé seo roghnú díoltóra ó dhíospóireachtaí seicliosta gnéithe go “tá tú ceannaithe; tá an cruinniú thart.” Nochtann sé freisin an patrún coitianta fiontair a cheannaíonn an rogha is costasaí do ghnóthachan imeallach — dlisteanach amháin má tá an praghas incriminteach in aghaidh an aonaid incrimintigh ceann a n-íocfadh an eagraíocht go feasach.

## Gaistí

- **Gach rud a chur i gcomparáid leis an mbonnlíne** in ionad leis an gcéad rogha eile ar an teorainn — déanann sé seo flaitheas ar roghanna daora trí ghar-choibhéisí níos saoire a cheilt.
- **Scóir éifeachta aon-toise** a cheileann an méid a bhfuil tábhacht leis; má tá tábhacht ag dhá thoradh, cuir le chéile go hinchosanta iad (féach [anailís costais-fóntais](../anailís-costais-fóntais/)) nó taispeáin dhá theorainn.
- **Éiginnteacht a dhearmad**: is féidir le roghanna in aice na teorann áiteanna a mhalartú faoi [anailís íogaireachta](../anailís-íogaireachta/).

## Foinsí

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
