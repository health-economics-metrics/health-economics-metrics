# Léaslíne ama

Is é an léaslíne ama an tréimhse thar a gcomhairimh anailís costais agus éifeachtaí. Caithfidh sí a bheith fada go leor chun gach difríocht ghlic idir na roghanna á gcur i gcomparáid a ghabháil.

## Cén fáth a bhfuil tábhacht leis

Roghnaigh léaslíne ghearr agus caillfidh tú sochair dhéanacha (cosc) agus costais dhéanacha (cothabháil). Roghnaigh léaslíne rófhada agus báthann gach rud in éiginnteacht. Úsáideann measúnú teicneolaíochta sláinte léaslíne **saoil** go minic do chóireálacha a bhfuil éifeachtaí básmhaireachta acu; úsáideann [anailís tionchair buiséid](../anailís-tionchair-buiséid/) go d’aon ghnó léaslíne ghearr **1–5 bliana** mar is inacmhainneacht, ní luach, a ceist. Is rogha shamhaltaithe dhearbhaithe é an léaslíne, agus is bealach clasaiceach é léaslínte neamhréireacha chun comparáid a chluichiú.

## An mhatamaitic

Is é an léaslíne uasteorainn an tsuimithe in aon mheastóireacht:

```
Net present value = Σ (t = 0 … T) [ (Benefits_t − Costs_t) / (1 + r)^t ]

T = time horizon (years)
r = discount rate (see discounting-and-time-preference.md)
```

Ba cheart torthaí a thuairisciú leis an léaslíne luaite, agus a thaispeáint ar il-léaslínte go hidéalach.

## Sampla oibrithe

Cosnaíonn córas leictreonach oideas £2 mhilliún a chur i bhfeidhm agus £200,000/bliain a reáchtáil. Cuireann sé cosc ar earráidí cógais fiú £600,000/bliain (costas cóireála dochair seachanta).

Sochar glan de réir léaslíne (gan lascainiú, ar mhaithe le soiléireacht):

```
Horizon 1 year:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Horizon 3 years: −2,000,000 + 3 × 400,000        = −£800,000
Horizon 5 years: −2,000,000 + 5 × 400,000        =  £0
Horizon 10 years:−2,000,000 + 10 × 400,000       = +£2,000,000
```

“Teipeann” an córas ag aon léaslíne faoi bhun 5 bliana agus “éiríonn leis” ag 10. Ní hé ceachtar an fhíorfhreagra; luann an tuairisc mhacánta an pointe briste-cothrom agus cosnaíonn sí an léaslíne de réir shaolré an chórais (cé chomh fada roimh athsholáthar?).

## An nasc le hinnealtóireacht bogearraí

- **Meastóireachtaí uirlisí a thomhaistear thar spriont amháin** caillfidh siad an titim cuar foghlama go córasach (costais tosaigh-luchtaithe) agus cothabháil fhadtéarmach (costais deireadh-luchtaithe). Gabhann píolótaigh cúntóra códaithe AI a thomhaistear i seachtain 2 buaic na nuachta, ní an staid chobhsaí.
- **Fad conartha ≠ léaslíne sochair.** Is féidir conradh SaaS 1 bhliain a mheas thar 5 bliana fós má tá athnuachan ag súil go réalaíoch — ach abair é sin.
- **Ba cheart do chásanna athsholáthair oidhreachta** rith go deireadh saoil inchreidte an tseanchórais, ní go huimhir chruinn treallach.

## Gaistí

- **Siopadóireacht léaslíne**: an léaslíne a roghnú a thugann bua do do rogha. Réamhchláraigh an léaslíne sula ríomhann tú torthaí.
- **Léaslínte difriúla do roghanna difriúla** san aon chomparáid amháin.
- **Léaslínte saoil gan lascainiú ná anailís éiginnteachta** — is ficsean iad sochair bhliain 30 ar phraghas aghaidhe. Cuir léaslínte fada i bpéire le [anailís íogaireachta](../anailís-íogaireachta/).

## Foinsí

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
