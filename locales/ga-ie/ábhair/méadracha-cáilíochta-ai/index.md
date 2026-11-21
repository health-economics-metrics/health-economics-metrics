# Méadracha cáilíochta AI

Méadracha d’fhíricí aschuir a ghin AI: cruinneas i gcomparáid leis an bhfírinne bhunúsach, **dílseacht/bunúsacht** (an dtacaíonn an comhthéacs a soláthraíodh le gach éileamh?), agus **ráta hallucination** (cén codán d’aschuir a bhfuil ábhar gan tacaíocht nó bréagach iontu?). I suíomhanna sláinte ní mionphointí cáilíochta iad seo — is rátaí dochair iad.

## Cén fáth a bhfuil tábhacht leis

Tá rátaí hallucination **os cionn 60% do LLManna gan bunús** tomhaiste ag tagarmharcanna sa réimse leighis ar thascanna leighis (os cionn 80% i gcás roinnt samhlacha oscailte), agus laghdaíonn bunú, aisghabháil agus modhanna réasúnaíochta na rátaí go mór (m.sh. laghdaigh mód smaointeoireachta GPT-5 hallucinations HealthBench ó 3.6% go 1.6% ar thagarmharc amháin). Is **teagmhas faisnéise bréagaí le conair dochair** é dáileog hallucinated nó citáid cumtha i sreabhadh oibre cliniciúil — baineann sé le géag na ndochar d’aon tsamhail eacnamaíoch, praghsáilte cosúil le fo-dhearfaí bréagacha [eacnamaíocht scagthástála](../eacnamaíocht-scagtha/): spreagann gach ceann costas leanúnach (gníomhú ar fhaisnéis mhícheart, saothar fíoraithe, nochtadh míochaine-dlí, muinín laghdaithe).

## An mhatamaitic

```
Ráta hallucination = aschuir ina bhfuil ábhar gan tacaíocht/bréagach / iomlán aschuir
  intreach:  codarsnaíonn leis an gcomhthéacs a soláthraíodh
  seachtrach: cumadóireacht dhochheaspartha thar an gcomhthéacs

Dílseacht (stíl RAGAS) = éilimh thacaithe sa fhreagra / iomlán éileamh sa fhreagra
Beachtas/aisghairm comhthéacs = cáilíocht aisghabhála a chothaíonn an gineadóir

Ualú eacnamaíoch — ní chosnaíonn gach hallucination mar an gcéanna:
  costas dochair ionchais = Σ thar chineálacha earráide (ráta × P(gan bhraith) ×
                       P(gníomhaithe air) × costas in aghaidh earráide gníomhaithe air)
  Socraíonn an ciseal athbhreithnithe daonna P(gan bhraith) — agus
  baineann a chostas leis an tsamhail freisin (nóiméid athbhreithnitheora × méid).
```

## Sampla oibrithe

Próiseálann cúntóir códaithe cliniciúil AI 200,000 eipeasóid/bliain; léiríonn iniúchadh go bhfuil earráid chódaithe ábhartha i 2% d’aschuir; gabhann códóirí daonna 85% díobh sin:

```
Earráidí a shroicheann aighneacht = 200,000 × 0.02 × 0.15 = 600/bliain
Costas in aghaidh earráide gan ghabháil (meán mí-bhilleála + nochtadh iniúchta) ≈ £250
Costas earráide ionchais        = 600 × 250 = £150,000/bliain
Costas athbhreithnithe (2 nóim × 200k × £0.50/nóim)  = £200,000/bliain

Cás feabhsúcháin: laghdaíonn bunú aisghabhála ráta earráide go 0.8%
→ earráidí gan ghabháil 240, costas earráide £60,000 (−£90k/bl); is féidir
  an t-am athbhreithnithe a laghdú freisin (samplú in ionad athbhreithniú iomlán) —
  íocann an t-infheistíocht cáilíochta sula ndéantar aon éileamh luais.
```

## An nasc le hinnealtóireacht bogearraí

Caith le cáilíocht samhla cosúil le heacnamaíocht chlúdach tástála, le araíonacht ar chaighdeán sláinte: **is é do thriail chliniciúil na tacair mheastóireachta** — réamhchláraithe, ionadaíoch ar *do* mheascán cásanna, athnuaite i gcoinne drift; **buaileann bunú scála i dtascanna fíorasacha** (is gnách gurb é aisghabháil + leid a éilíonn citáidí an laghdú hallucination is saoire — cf. [eacnamaíocht aonad infeiriúcháin](../geilleagar-aonaid-tátail/) don róthreoir comharthaí); agus **foilsigh an pointe oibríochta**: cosúil le [íogaireacht/sainiúlacht](../meastóireacht-ai-cliniciúil/), ní chiallaíonn “97% dílis” rud ar bith gan dáileadh an taisc agus tairseach an bhraite. Is é matamaitic an chisil athbhreithnithe thuas an uimhríocht chéanna [NNT/NNH](../líon-is-gá-a-chóireáil/) agus aon gheata scagthástála.

## Gaistí

- **Trasphlandú tagarmharc-go-táirgeadh**: braitheann rátaí hallucination go mór ar thasc; is é do mheascán cásanna an t-aon tagarmharc a bhfuil tábhacht leis.
- **Athbhreithniú daonna gan chostáil**: leathaíonn “seiceálann cliniceoir gach rud” an sochar agus ní mór dó a bheith sa líne chostais — agus cliseann airdeall (ardmheasúlacht uathoibrithe), mar sin éiríonn P(gan bhraith) níos airde de réir mar a fhásann muinín.
- **Cáilíocht mheán a fheabhsú agus an riosca eireabaill ag iompar an dochair**: sáraíonn nóta ailléirge cumtha amháin míle frása míchompordach; ualaigh earráidí de réir iarmhairte, de réir fhoirmle an dochair ionchais.

## Foinsí

- Modhanna agus méadracha meastóireachta hallucination. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Staitisticí hallucination LLM leighis. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- Méadracha dílseachta RAG. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
