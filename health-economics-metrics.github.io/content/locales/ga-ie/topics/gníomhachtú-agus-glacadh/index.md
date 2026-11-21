# Gníomhachtú agus glacadh

Is é an ráta gníomhachtaithe an sciar de na daoine a chláraigh a shroicheann an chéad luach brí (an gníomh “aha” — an chéad léamh logáilte, an chéad ceacht déanta). Is í an glacadh an leagan daonra de: an sciar den daonra *incháilithe* a ghlacann leis ar chor ar bith. Le chéile, is iad geataí tosaigh an tobair luacha iad: éadáil → glacadh → gníomhachtú → [coinneáil](../coinneáil-agus-scoite/) → toradh.

## Cén fáth a bhfuil tábhacht leis

Is costas glan iad úsáideoirí nár gníomhachtaíodh: caiteachas éadála, soláthar, dromchla tacaíochta — gan aon luach cliniciúil. Cuireann tagarmharcanna gníomhachtú bogearraí cúram sláinte *faoi bhun* an mheáin trasthionscail (≈24% vs ≈37% do ghníomhachtú úsáideoirí nua in aon tacar tagarmharcanna SaaS amháin; críochnú seicliosta tosaithe ~20%), rud a léiríonn tosú níos troime (aitheantas, toiliú, sábháilteacht chliniciúil). Tá geall an daonra ag an nglacadh: sa [chreat RE-AIM](../sroicheadh-agus-cothromaíocht/), tá tionchar sláinte poiblí ≈ sroicheadh × éifeachtacht — ní bhogann aip den scoth a nglacann 3% den daonra incháilithe léi ach 3% den daonra. I gcás teiripe digití ar oideas, is léir geata an ghlactha i sonraí náisiúnta: **gníomhachtaítear ~81% d’oidis DiGA na Gearmáine** — ní thosaíonn ceann as gach cúig chóireáil a ordaíodh agus a íocadh riamh (féach [bealach tapa DiGA](../bealach-tapa-diga-na-gearmáine/)).

## An mhatamaitic

```
Gníomhachtú = úsáideoirí a chríochnaigh an gníomh tábhachtach laistigh den fhuinneog / cláruithe × 100
Glacadh     = glacadóirí / daonra incháilithe × 100
Ráta líonta DTx = cóid oideas gníomhachtaithe / oidis eisithe × 100

Samhail luacha an tobair:
  incháilithe × glacadh × gníomhachtú × sochar meáite ar choinneáil = luach an daonra
  — ceithre iolrúchán; is gnách gurb é feabhsú an fhachtóra is lú
  is tábhachtaí (teoiric na srianta do thoibreacha)
```

## Sampla oibrithe

Tairgeann coimisinéir aip um chosc diaibéiteas do 80,000 cónaitheoir incháilithe:

```
Tugtha cuireadh → cláraithe:  80,000 → 12,000  (glacadh 15%)
Cláraithe → gníomhachtaithe (an chéad seisiún + cuspóir socraithe, 7 lá): 12,000 → 5,400 (45%)
Gníomhachtaithe → clár 6 mhí críochnaithe: 5,400 → 1,600 (30%)

Éifeacht an chláir (triail, na cinn a chríochnaigh): 0.03 QALY + £180 costais seachanta
Luach an daonra = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Luach in aghaidh an duine incháilithe = £15.6 — seachas £780 dá gcríochnódh gach duine incháilithe é.

Cá háit le hinfheistiú? Dá ndúblófaí an glacadh (15→30%) dúblófaí an luach; dá n-ardófaí
an gníomhachtú 45→65% chuirfí ~44% leis; sháraíonn an dá cheann polasú breise
ar ábhar an chláir a chríochnaíonn an 1,600 cheana féin.
```

## An nasc le hinnealtóireacht bogearraí

Is é an gníomhachtú an chéim den tobar is éasca a láimhseáil go hinnealtóireachta: is cód iad frithchuimilt fíordheimhnithe aitheantais, sreafaí toilithe, dearadh na staide folamh agus an t-am go dtí an chéad luach, ní polasaí (is é meán an ama go luach i gcúram sláinte ≈ 1 lá 7 uair an chloig i sonraí tagarmhairc — is nochtadh sceithidh gach uair an chloig de). Is fadhb córas dáilte é an glacadh: comhtháthú i mbealaí tarchuir (nóiméad an oidis), cuirí a thacaíonn dochtúirí teaghlaigh leo (aistrítear muinín), agus inrochtaineacht (teanga, scileanna digiteacha — féach [sroicheadh agus cothromas](../sroicheadh-agus-cothromaíocht/)). Is é an tsamhail luacha tobair thuas gineadóir cháis ghnó an dá cheann: iolraigh na fachtóirí, aimsigh an srian, agus cuir praghas ar an réiteach i gcomparáid leis an luach daonra a scaoileann sé.

## Gaistí

- **Gníomhachtú sainithe mar áis** (ríomhphost fíoraithe) seachas brí chliniciúil (an chéad ghníomh teiripeach) — claonann sé an mhéadrach agus bristear an slabhra luacha.
- **Cluichí ainmneora glactha**: “díobh siúd a thug cuairt ar an suíomh” vs an daonra incháilithe go fírinneach — is cuma leis na coimisinéirí faoin dara ceann.
- **Éifeachtaí roghnúcháin**: is iad na húsáideoirí is éasca a ghníomhachtú iad siúd is lú tinneas agus is lú díothacht; is féidir le feabhsuithe tobair bearnaí cothromais a leathnú agus na meáin a fheabhsú.

## Foinsí

- Tagarmharcanna gníomhachtaithe (SaaS cúram sláinte). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- Sonraí gníomhachtaithe DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- Creat RE-AIM. <https://re-aim.org/>
