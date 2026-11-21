# Eacnamaíocht monatóireachta othar iargúlta

Eacnamaíocht aisíocaíochta agus fritháirithe costais na monatóireachta ar othair sa bhaile: sna SA, cruach ioncaim chód CPT sainithe; i seirbhísí sláinte náisiúnta, eacnamaíocht seachana glactha isteach agus bardaí fíorúla suas go hionadú iomlán **ospidéil sa bhaile**.

## Cén fáth a bhfuil tábhacht leis

Is é RPM an áit a n-éiríonn sonraí feiste ina gcúram sláinte inbhilleáilte. Tá struchtúr Medicare na SA (meáin náisiúnta 2025) neamhghnách sainráite:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

Cruachann mí othair chomhlíontach go thart ar **$90–130 PMPM**. Ar thaobh an fhritháirithe costais, léiríonn cláir ospidéil-sa-bhaile (waiver Acute Hospital Care at Home CMS: 300+ ospidéal) ~$1,800–$3,000 sábháilte in aghaidh an teagmhais i gcomparáid le cúram othar cónaitheach le híosmhéid athghlactha agus ionfhabhtuithe — an léiriú is soiléire gur féidir monatóireacht móide cúram fíorúil an acmhainn is costasaí sa chóras, an leaba fhoirne, a ionadú.

## An mhatamaitic

```
RPM revenue (US)  = enrolled × billing-compliant fraction × code stack PMPM
  — the 16-day rule makes wear-time compliance (wearable-validation.md)
    a revenue variable, and the 20-minute rule makes clinical-time
    logging an engineering requirement

NHS-style value   = admissions avoided × marginal admission cost
                  + bed days substituted × (inpatient − virtual-ward day cost)
                  − service cost (devices, platform, monitoring staff)
  (see emergency-attendance-avoidance.md and bed-days-saved.md for the
   attribution and marginal-cost rules)
```

## Sampla oibrithe

Cláraíonn cleachtas SA 400 othar hipirtheannais; comhlíonann 70% tairseach 16 lá i ngnáthmhí; logáiltear nóiméid bainistíochta do 60%:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

Scáthán an NHS: bardach fíorúil 50 leaba ag áitíocht 80% ag ionadú laethanta othar cónaitheach ar shábháil ghlan £150/lá ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M/bliain** comhlán — i gcoinne an ardáin, feistí, agus an fhoireann altranais pobail a fhoireann é.

## An nasc le hinnealtóireacht bogearraí

Is iad ardáin RPM an táirge annamh ina n-aistríonn **uptime agus iontaofacht sioncronaithe go díreach ina n-ioncam** (briseann seachtain de shioncrónuithe teipthe geata 16 lá cohórt) agus ina bhfuil rianú ama ar chaighdeán iniúchta (riail 20 nóiméad) ina ghné den chéad scoth, ní iarmhachnamh. Tóg do: deaiseanna comhlíontachta in aghaidh an othair a thugann míonna billeála i mbaol chun solais agus iad inghnóthaithe; rianta sonraí le stampa ama, nochta-tamaill (tá iniúchtaí íocóra gnáthach); agus tiúnadh eacnamaíochta rabhaidh — itheann gach rabhadh nóiméid fhoireann na monatóireachta, atá ina n-aonad inbhilleáilte agus ina n-acmhainn ghann araon ([eacnamaíocht scagtha](../eacnamaíocht-scagtha/) a rialaíonn roghnú na tairsí).

## Gaistí

- **Cláriú ≠ ioncam**: is é an chodán comhlíontach an uimhir; samhail í, ná glac leis.
- **Cóid SA a thrasphlandáil i gcásanna NHS** — ceannaíonn seirbhísí sláinte náisiúnta seachaint glactha isteach, ní cruacha CPT; reáchtáil an dara samhail.
- **Éilimh fhritháirimh ar mheánchostas** do ghlacadh isteach a bhfuil a gcostais sheasta fós ann (féach [costas imeallach vs meánchostas](../costas-imeallach-vs-meánchostas/)).
- **Sáithiú foirne monatóireachta**: scálaíonn toirt rabhaidh le cláriú; is é líne na foirne an srian ceangailteach a fhágann formhór na samhlacha ar lár.

## Foinsí

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
