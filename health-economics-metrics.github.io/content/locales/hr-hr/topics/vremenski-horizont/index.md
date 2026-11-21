# Vremenski horizont

Vremenski horizont je razdoblje u kojem analiza broji troškove i učinke. Mora biti dovoljno dug da obuhvati sve značajne razlike među opcijama koje se uspoređuju.

## Zašto je važno

Odaberete li kratak horizont, propuštate kasne koristi (prevencija) i kasne troškove (održavanje). Odaberete li predug horizont, sve tone u neizvjesnosti. Procjena zdravstvenih tehnologija često koristi **doživotni** horizont za tretmane s učincima na smrtnost; [analiza utjecaja na proračun](../analiza-utjecaja-na-proračun/) namjerno koristi kratak horizont od **1 do 5 godina** jer je njezino pitanje pristupačnost, a ne vrijednost. Horizont je deklarirani izbor modeliranja, a neusklađeni horizonti klasičan su način manipuliranja usporedbom.

## Matematika

Horizont je gornja granica sumiranja u svakoj evaluaciji:

```
Neto sadašnja vrijednost = Σ (t = 0 … T) [ (Koristi_t − Troškovi_t) / (1 + r)^t ]

T = vremenski horizont (godine)
r = diskontna stopa (vidi diskontiranje i vremenska preferencija)
```

Rezultate treba iskazati uz naveden horizont, a idealno ih je prikazati pri više horizonata.

## Riješeni primjer

Sustav elektroničkog propisivanja košta 2 milijuna £ za uvođenje i 200.000 £ godišnje za rad. Sprječava pogreške u lijekovima vrijedne 600.000 £ godišnje (trošak liječenja izbjegnute štete).

Neto korist po horizontu (nediskontirano, radi jasnoće):

```
Horizon 1 year:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Horizon 3 years: −2,000,000 + 3 × 400,000        = −£800,000
Horizon 5 years: −2,000,000 + 5 × 400,000        =  £0
Horizon 10 years:−2,000,000 + 10 × 400,000       = +£2,000,000
```

Sustav „propada” pri svakom horizontu kraćem od 5 godina, a „uspijeva” pri 10. Nijedno nije pravi odgovor; pošteno izvješće navodi točku isplativosti i opravdava horizont životnim vijekom sustava (koliko dugo do zamjene?).

## Veza sa softverskim inženjerstvom

- **Evaluacije alata mjerene kroz jedan sprint** sustavno propuštaju pad zbog krivulje učenja (troškovi unaprijed) i dugoročno održavanje (troškovi naknadno). Pilot-projekti AI asistenata za kodiranje mjereni u 2. tjednu bilježe vrhunac novosti, a ne stabilno stanje.
- **Duljina ugovora ≠ horizont koristi.** Jednogodišnji SaaS ugovor i dalje se može procjenjivati kroz 5 godina ako realno očekujete obnovu — ali to recite.
- **Slučajevi zamjene naslijeđenih sustava** trebaju trajati do vjerodostojnog kraja životnog vijeka starog sustava, a ne do proizvoljnog okruglog broja.

## Zamke

- **Kupovina horizonta**: biranje horizonta zbog kojeg vaša opcija pobjeđuje. Registrirajte horizont prije izračuna rezultata.
- **Različiti horizonti za različite opcije** u istoj usporedbi.
- **Doživotni horizonti bez diskontiranja ili analize neizvjesnosti** — koristi u 30. godini po nominalnoj vrijednosti su fikcija. Dugi horizont uparite s [analizom osjetljivosti](../analiza-osjetljivosti/).

## Izvori

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
