# Anailís íogaireachta dóchúlachta (PSA)

Sanntar dáileadh dóchúlachta ar gach paraiméadar éiginnte i PSA, samplálann sí iad ar fad go comhuaineach na mílte uair (Monte Carlo), agus tuairiscíonn sí an *dóchúlacht* gurb é rogha áirithe an rogha is fearr — in ionad meastachán pointe amháin.

## Cén fáth a bhfuil tábhacht leis

*Éilíonn* cás tagartha NICE PSA. Freagraíonn anailís chinntitheach “cad a tharlaíonn má tá ionchur amháin mícheart?”; freagraíonn PSA “i bhfianaise gach rud nach bhfuil ar eolas againn ag an am céanna, cé chomh dóchúil is atá sé go ndéanaimid an cinneadh ceart?” Is é a príomhaschur, an **cuar inghlacthachta costéifeachtúlachta (CEAC)**, a bhreacann an dóchúlacht go bhfuil rogha costéifeachtúil i gcoinne na tairsí toilteanais íoc — ag casadh “is é an ICER £24,000/QALY” ina “tá seans 78% gurb é seo an rogha cheart ag £30,000/QALY.”

## An mhatamaitic

```
For each of N draws (N ≈ 10,000):
  sample every parameter θ from its distribution
    (costs ~ Gamma, probabilities ~ Beta, utilities ~ Beta, effects ~ Normal/logNormal)
  compute NMB_j(θ) = λ × Effect_j(θ) − Cost_j(θ) for each option j

CEAC_j(λ) = fraction of draws in which option j has the highest NMB at threshold λ
```

Féach [sochar airgeadaíochta glan](../sochar-airgeadaíochta-glan/) le haghaidh NMB agus [tairseacha toilteanais íoc](../tairseacha-toilteanais-íoc/) le haghaidh λ.

## Sampla oibrithe

Cás gnó imirce ardáin. Trí ionchur éiginnte:

```
Migration cost      ~ Gamma,  mean £800k, sd £200k
Annual benefit      ~ Normal, mean £350k, sd £150k
Benefit duration    ~ Uniform, 3–6 years
```

Ríomh sochar glan = fad × bliantúil − costas do gach ceann de 10,000 tarraingt (lascaine fágtha ar lár ar mhaithe le soiléireacht). Torthaí léiritheacha:

```
Mean net benefit:      £775k
Probability net > 0:   0.86
5th–95th percentile:  −£180k … +£1.9M
```

Dúirt an meastachán pointe “ar ndóigh tá”. Deir an PSA “86% tá, le heireaball fíor ina gcailleann muid £180k+” — rud a theastaíonn ó úinéir punainne i ndáiríre, agus praghsálann sé an cás chun spící fionnachtana a reáchtáil ar dtús (féach [EVPI](../luach-ionchais-faisnéise-foirfe/)).

## An nasc le hinnealtóireacht bogearraí

Tá muinín ag innealtóirí as Monte Carlo cheana le haghaidh réamhaisnéis seachadta (buaileann samplú tréchur meastacháin phointe). Leathnaigh an mheicníocht chéanna go dtí airgead: dáiltí ar ghlacadh, am sábháilte, agus tuarastal, ansin tuairiscigh “an dóchúlacht go bhfuil an infheistíocht ardáin seo glan-dearfach” in ionad ROI cruinneas bréagach. Is déantán i bhfad níos fearr é cuar ar stíl CEAC — dóchúlacht a bheith ar an rogha is fearr mar fheidhm de conas a luachálann an eagraíocht uair innealtóra — do choiste maoinithe ná aon uimhir amháin.

## Gaistí

- **Dáiltí truflais**: is anailís chinntitheach i gcóta saotharlainne é PSA le diallais chaighdeánacha cumtha. Bunaigh scaipeanna ar shonraí nó ar fháil saineolaí struchtúrtha.
- **Comhghaol idir paraiméadair a neamhaird** (comhghaolaíonn glacadh ard go hiondúil le hamsábháil ard); ligeann samplú neamhspleách ríosca eireabaill as radharc.
- **Meán an insamhalta amháin a thuairisciú** — is é an dáileadh agus dóchúlacht an chinnidh an pointe iomlán.

## Foinsí

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
