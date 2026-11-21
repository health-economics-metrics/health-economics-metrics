# Méadracha seirbhíse GDS

Sainordaíonn Lámhleabhar Seirbhíse Seirbhís Dhigiteach Rialtais (GDS) na RA ceithre KPI do gach seirbhís dhigiteach rialtais: **costas in aghaidh an idirbhirt, sástacht úsáideoirí, ráta críochnaithe, agus glacadh digiteach**. Le chéile is iad eacnamaíocht íosta seirbhíse dhigití poiblí iad — agus an teimpléad a oidhrítear do sheirbhísí digiteacha an NHS.

## Cén fáth a bhfuil tábhacht leis

Ionchódaíonn na méadracha GDS an cás gnó aistrithe cainéil a mhaoinigh deich mbliana digitiú rialtais: fuair an Tuarascáil Éifeachtúlachta Dhigití idirbhearta digiteacha ~20× níos saoire ná guthán agus ~50× níos saoire ná aghaidh ar aghaidh (figiúirí rialtais áitiúil: gréasán £0.15, guthán £2.83, aghaidh ar aghaidh £8.62). Ach ní thagann an coigilteas chun cinn ach nuair a *chríochnaíonn* daoine an turas digiteach (ráta críochnaithe) *in ionad* an chainéil dhaor (glacadh) — is samhail eacnamaíoch amháin iad na ceithre KPI, ní ceithre dheais.

## An mhatamaitic

```
Costas in aghaidh an idirbhirt = costas seirbhíse iomlán / idirbhearta críochnaithe
Ráta críochnaithe             = idirbhearta críochnaithe / tosaithe × 100
Glacadh digiteach             = idirbhearta digiteacha / idirbhearta gach cainéal × 100
Sástacht úsáideoirí           = % sásta+an-sásta (5 phointe, suirbhé in-seirbhíse)

Coigilteas aistrithe cainéil = méid × aistriú glactha × (costas_seanchainéal − costas_digiteach)
… lúide éileamh teipe: (1 − ráta críochnaithe) × costas cainéil cúltaca
```

## Sampla oibrithe

Seirbhís bainistíochta coinní an NHS: 2M idirbheart/bliain, 70% guthán faoi láthair (£3.20/glao) / 30% digiteach (£0.25). Ardaíonn athdhearadh glacadh digiteach go 55% agus críochnú ó 84% go 93%:

```
Coigilteas aistrithe glactha = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/bliain

Coigilteas éilimh teipe: titeann turais dhigiteacha theipthe ar ais go guthán
  roimh:   2M × 0.30 × 0.16 × £3.20 = £307,200
  tar éis: 2M × 0.55 × 0.07 × £3.20 = £246,400
  glan £60,800/bliain — cosnaíonn feabhsuithe críochnaithe na gnóthachain glactha

Is é sástacht an táscaire tosaigh: fillean úsáideoirí míshásta ar an nguthán,
mar sin réamhaisnéiseann titim sástachta lobhadh glactha sula dtagann sé chun cinn.
```

## An nasc le hinnealtóireacht bogearraí

Is sampla de ghrád táirgeachta de [thábla costais-iarmhairtí](../anailís-costais-iarmhairtí/) iad na ceithre KPI seo: méadrach costais amháin, trí mhéadrach toraidh, nár comhbhrúdh in scór riamh. I gcás innealtóirí táirge na ceachtanna oibríochtúla: **is fadhb uirlisithe tobair é an ráta críochnaithe** (is féidir gach pointe tréigin a aimsiú agus a shocrú); **is [eacnamaíocht aonad scamall](../eacnamaíocht-aonad-scamall/) móide costais cainéal cúnta foirne é costas in aghaidh an idirbhirt**; **is méadrach cothromais faoi cheilt é glacadh** — tá na húsáideoirí nach féidir leo nó nach mbeidh sásta cainéil a aistriú neamhchomhréireach aosta, faoi mhíchumas, agus díothach, mar sin iompaíonn dúnadh cainéal ionsaitheach “coigilteas” i ndochar rochtana (féach [sroicheadh agus cothromas](../sroicheadh-agus-cothromaíocht/)). Is meicníocht í foilsiú na KPI (déanann GOV.UK, in aghaidh na seirbhíse) féin: déanann trédhearcacht réamhaisnéisí a araíonú ar an mbealach céanna a dhéanann iniúchtaí [réadaithe sochar](../réadú-sochar/).

## Gaistí

- **Glacadh trí éigeantas**: ardaíonn an líne ghutháin a dhúnadh glacadh agus dumpálann sé éileamh teipe ar fhoireann ar an líne tosaigh; tomhais costas iomlán an chórais.
- **Críochnú tomhaiste ó leathanach-2**: tá an ráta flaithiúil má thosaíonn an tobar tar éis an phointe tréigin.
- **Costas in aghaidh an idirbhirt ag neamhaird ar thacaíocht dhigiteach chúnta** agus láimhseáil éilimh teipe.
- **Suirbhéanna sástachta ach amháin ag críochnú rathúil** — ní shroicheann na daoine míshásta an suirbhé den chuid is mó.

## Foinsí

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
