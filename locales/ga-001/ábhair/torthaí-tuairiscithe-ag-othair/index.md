# Torthaí tuairiscithe ag othair (PROMs, PREMs, MCID)

Is ionstraimí caighdeánaithe iad PROManna ina dtuairiscíonn othair a stádas sláinte féin (comharthaí, feidhm, cáilíocht saoil); gabhann PREManna an *taithí* chúraim. Is é an **MCID** — an difríocht chliniciúil thábhachtach íosta — an t-athrú scóir is lú a bhraitheann othair mar thairbheach i ndáiríre: an bheart a chaithfidh aon fheabhsú éilithe a ghlanadh.

## Cén fáth a bhfuil tábhacht leis

Is iad PROManna príomhairgeadra éifeachtachta na sláinte digití: is annamh a bhogann aipeanna básmhaireacht, ach is féidir leo scóir chomharthaí bailíochtaithe a bhogadh go hinchreidte. Is beag na hionstraimí a bhfuil tábhacht leo agus tá siad caighdeánaithe — **PHQ-9** (dúlagar, 0–27; bandaí déine ag 5/10/15/20), **GAD-7** (imní, 0–21; bandaí ag 5/10/15), **EQ-5D** (úsáidíocht do [QALYanna](../bliain-saoil-choigeartaithe-de-réir-cáilíochta/)) — agus glacann rialtóirí, comhlachtaí HTA agus íocóirí leo go beacht toisc go bhfuil siad inchomparáide thar tháirgí agus trialacha. Is é an MCID an geata macántachta: MCID PHQ-9 ≈ 5 phointe, GAD-7 ≈ 4, innéacs EQ-5D ~0.03–0.08 de ghnáth — is *fíor ach gan bhrí chliniciúil* é athrú PHQ-9 1.5 phointe atá suntasach go staidrimh ar shampla mór, agus déarfaidh athbhreithneoir fianaise amhlaidh.

## An mhatamaitic

```
PROM scoring: instrument-specific sums (e.g., PHQ-9 = Σ 9 items × 0–3)

MCID estimation:
  anchor-based:      score change among patients who report "somewhat better"
  distribution-based: ≈ 0.5 × SD of baseline scores (rough heuristic)

Response rate framing (for trials and dossiers):
  responder = patient improving ≥ MCID (or ≥50% for PHQ-9 convention)
  NNT = 1 / (responder rate_treatment − responder rate_control)
  — see number-needed-to-treat.md
```

## Sampla oibrithe

Aip tacaíochta dúlagair, RCT vs liosta feithimh, 12 seachtain:

```
PHQ-9 change: app −6.2 points, control −2.1 → adjusted difference −4.1
MCID check: 4.1 < 5 → mean difference below MCID; report responders instead:
  responders (≥5-point drop): app 48%, control 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — four users treated per additional clinical response

Economic bridge: responders' EQ-5D gain 0.06 sustained 6 months
  = 0.03 QALYs; per 1,000 users: 260 extra responders × 0.03 = 7.8 QALYs
  ≈ £156,000–£234,000 of health value at NICE thresholds
```

Maireann frámaíocht freagróra/NNT athbhreithniú nuair a bheadh an difríocht mheán fo-MCID caite i dtraipisí.

## An nasc le hinnealtóireacht bogearraí

Is fadhb bailithe sonraí iad PROManna a bhfuil bogearraí ina n-áit uathúil chun í a réiteach: faigheann ionstraimí in-aip rátaí críochnaithe agus dlús fadaimseartha nár bhain páipéar amach riamh, ag casadh teiliméadracht táirge ghnáthach ina fianaise ar chaighdeán HTA ([EQ-5D](../eq-5d/) cúig scáileán). Rialacha innealtóireachta: úsáid an ionstraim bailíochtaithe *focal ar fhocal* (cuireann athfhocal as feidhm í — baineann ceadúnú); sceidealaigh tomhas de réir prótacail, ní de réir áisiúlachta rannpháirtíochta (is claonadh marthanóra é gan úsáideoirí gníomhacha amháin a thomhas — féach [coinneáil](../coinneáil-agus-scoite/)); agus glasáil leagan sonraí ionstraime cosúil le haon scéimre — is éilliú sonraí é athrú focal i lár staidéir. Mapálann PREManna ar ionstraimí ar stíl CSAT/NPS, agus baineann an ceacht céanna: buaileann an caighdeánaithe an baile-déanta aon áit a bhfuil íocóir sa lucht éisteachta. Le haghaidh ionstraim shonrach táirgiúlachta oibre, féach [WPAI](../táirgiúlacht-oibre-agus-laghdú-gníomhaíochta/).

## Gaistí

- **Suntasacht staidrimh faoi bhun MCID** a chur i láthair mar thairbhe chliniciúil — an ataitiú is coitianta sa réimse.
- **Aischéimniú chun an mheáin**: cláraíonn úsáideoirí ag buaicphointí comharthaí; ardaíonn aon-lámh roimh/tar éis go mór — níl comparadóirí inchaibidlithe.
- **Siopadóireacht ionstraimí**: PHQ-9, GAD-7 agus WHO-5 a reáchtáil, ansin tuairisciú cibé ceann a bhog — réamhchlárúchán a dhéanamh ar an bpríomhcheann.
- **Brú suirbhé toilithe digití**: truaillíonn bogadh úsáideoirí i dtreo freagraí fabhracha an ionstraim (agus tá na rátaí bunlíne ar eolas ag athbhreithneoirí).

## Foinsí

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
