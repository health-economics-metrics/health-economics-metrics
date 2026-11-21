# Bailíochtú ar fheistí caitheamh

Cainníochtaíonn méadrachtaí bailíochtaithe cé chomh maith agus a aontaíonn tomhais feiste caitheamh le caighdeán óir cliniciúil (ECG le haghaidh ráta croí, polasomnagrafaíocht le haghaidh codlata): **MAPE**, comhghaol comhréireachta, comhaontú Bland–Altman — móide na méadrachtaí oibríochtúla a gheatálann cáilíocht sonraí fíorshaoil: **comhlíonadh ama caithimh** agus **iomláine sonraí**.

## Cén fáth a bhfuil tábhacht leis

Is réamhchoinníoll é bailíochtú do gach rud iartheachtach: ní féidir le feiste nach bhfuil in ann comhaontú le tomhas tagartha a chruthú [críochphointí digiteacha](../críochphointí-digiteacha-agus-bithmharcóirí/) a ancaireacht, [billeáil RPM](../eacnamaíocht-monatóireachta-othar-iargúlta/) a thacú, ná éilimh chliniciúla a iompar. Tairseacha glactha an réimse do ráta croí: **MAPE ≤5%** (dian) nó **≤10%** (scaoilte) i gcoinne ECG. Pointí tagartha ón litríocht: MAPE ráta croí scíthe Oura Gen 3 1.67% (CCC 0.97); Fitbit Charge 6 MAPE ~5.5% — téann feistí tomhaltóra thar teorainn an chaighdeáin chliniciúil anois, an fáth go beacht a bhfuil tábhacht leis an tomhas in aghaidh gach feiste agus in aghaidh gach riocht.

## An mhatamaitic

```
MAPE = (1/n) Σ |measured_i − reference_i| / reference_i × 100

CCC (concordance correlation) = agreement including both correlation
      and systematic bias (Pearson r penalized by location/scale shift)

Bland–Altman: mean bias ± 1.96 SD limits of agreement — shows whether
      error depends on the value's magnitude

Operational gates:
Wear-time compliance = time worn / protocol time × 100
Data completeness    = observed data points / expected × 100
```

Ní mór bailíochtú a thuairisciú **in aghaidh gach riocht gníomhaíochta** (scíth, gluaiseacht, codladh) agus in aghaidh gach daonra — meathlaíonn braiteoireacht optúil PPG le déantán gluaiseachta, droch-theagmháil, agus tonnta craicinn níos dorcha, mód teipe doiciméadaithe ábhartha don chothromaíocht.

## Sampla oibrithe

Roghnaíonn clár bardach fíorúil feiste caitheamh monatóireachta. Iarrthóir A: MAPE scíthe 2.1%, MAPE aclaíochta 11.4%. Iarrthóir B: scíth 3.8%, aclaíocht 6.9%.

```
Use case: deteriorating-patient detection at home — alerts trigger on
sustained elevated HR, often during activity.
Candidate A's headline (2.1%) wins the brochure; candidate B wins the
use case: at the alert-relevant condition (motion), A's 11.4% error
at HR 100 = ±11 bpm — spanning the entire alert threshold band,
generating false escalations (each a nurse callout, ~£40) or misses.

False-alert economics: 500 patients × 2 extra false alerts/week × £40
= £2.08M/year of error cost from choosing the wrong validation number.
```

## An nasc le hinnealtóireacht bogearraí

Tomhlaíonn innealtóirí sonraí bailíochtaithe agus braiteoirí á roghnú acu agus *táirgeann* siad iad agus gnéithe tomhais á dtógáil acu — teastaíonn an disciplín chéanna ón dá ról: tástáil ag riocht an imscartha, ní riocht an taispeána (analach bogearraí: tagarmharcáil ar d’ualach oibre táirgeachta, ní ar cheann an díoltóra). Is torthaí innealtóireachta táirge iad am caithimh agus iomláine — cinneann compord, saol ceallraí, dearadh deasghnáthaimh luchtaithe, agus iontaofacht sioncronaithe an gcomhlíontar geata billeála RPM 16-lá-i-30 ([eacnamaíocht monatóireachta othar iargúlta](../eacnamaíocht-monatóireachta-othar-iargúlta/)) agus an bhfuil tacair sonraí trialach inanailísithe. Caith le sonraí ar iarraidh mar chomhartha deartha: idirdhealaigh “gan chaitheamh,” “caite ach gan chomhartha,” agus “teip sioncronaithe” sa scéimre ón gcéad lá — comhdhlúite i null, nimhíonn siad gach anailís iartheachtach.

## Gaistí

- **MAPE comhiomlán a cheileann teip riocht-shonrach** — gaiste an tsampla oibrithe.
- **Daonra bailíochtaithe ≠ daonra imscartha**: athraíonn aois, tonn craicinn, creathadh, murtallacht earráid braiteora optúil; seiceáil déimeagrafaic an staidéir.
- **Comhghaol tuairiscithe nuair is comhaontú a theastaíonn**: míaicmíonn Pearson r ard le claonadh córasach i gcoinne tairseacha absalóideacha fós — éiligh CCC/Bland–Altman.
- **Iomláine ata de bharr ionchuir (imputation)**: bearnaí líonta tuairiscithe mar shonraí breathnaithe.

## Foinsí

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
