# Probabilistička analiza osjetljivosti (PSA)

PSA svakom neizvjesnom parametru dodjeljuje distribuciju vjerojatnosti, uzorkuje ih sve istodobno tisućama puta (Monte Carlo) i iskazuje *vjerojatnost* da je neka opcija najbolji izbor — umjesto jedne točkovne procjene.

## Zašto je važno

Referentni slučaj NICE-a *zahtijeva* PSA. Deterministička analiza odgovara na „što ako je jedan ulaz pogrešan?”; PSA odgovara na „s obzirom na sve što ne znamo istodobno, koliko je vjerojatno da donosimo ispravnu odluku?” Njezin karakteristični izlaz, **krivulja prihvatljivosti isplativosti (CEAC)**, prikazuje vjerojatnost da je opcija isplativa u odnosu na prag spremnosti na plaćanje — pretvarajući „ICER je 24.000 £/QALY” u „postoji 78 % šanse da je ovo pravi izbor pri 30.000 £/QALY.”

## Matematika

```
Za svaki od N izvlačenja (N ≈ 10,000):
  uzorkuj svaki parametar θ iz njegove distribucije
    (troškovi ~ Gamma, vjerojatnosti ~ Beta, korisnosti ~ Beta, učinci ~ Normal/logNormal)
  izračunaj NMB_j(θ) = λ × Effect_j(θ) − Cost_j(θ) za svaku opciju j

CEAC_j(λ) = udio izvlačenja u kojima opcija j ima najveći NMB pri pragu λ
```

Vidi [neto novčanu korist](../neto-novčana-korist/) za NMB i [pragove spremnosti na plaćanje](../pragovi-spremnosti-na-plaćanje/) za λ.

## Riješeni primjer

Poslovni slučaj migracije platforme. Tri neizvjesna ulaza:

```
Trošak migracije      ~ Gamma,  prosjek £800k, sd £200k
Godišnja korist       ~ Normal, prosjek £350k, sd £150k
Trajanje koristi      ~ Uniform, 3–6 godina
```

Za svako od 10.000 izvlačenja izračunajte neto korist = trajanje × godišnje − trošak (diskontiranje izostavljeno radi jasnoće). Ilustrativni rezultati:

```
Prosječna neto korist:      £775k
Vjerojatnost neto > 0:      0.86
5.–95. percentil:          −£180k … +£1.9M
```

Točkovna procjena je rekla „očito da.” PSA kaže „86 % da, uz stvaran rep u kojem gubimo 180 tis. £ i više” — što je ono što vlasnik portfelja stvarno treba, a time se i cijeni slučaj za prethodni istraživački spike (vidi [EVPI](../očekivana-vrijednost-savršene-informacije/)).

## Veza sa softverskim inženjerstvom

Inženjeri već vjeruju Monte Carlu u prognoziranju isporuke (uzorkovanje propusnosti nadmašuje točkovne procjene). Proširite isti aparat na novac: distribucije za prihvaćenost, ušteđeno vrijeme i plaće, pa iskažite „vjerojatnost da je ova ulaganja u platformu neto pozitivno” umjesto ROI-ja lažne preciznosti. Krivulja u stilu CEAC-a — vjerojatnost da je neka opcija najbolja kao funkcija toga kako organizacija vrednuje inženjerski sat — doista je bolji artefakt za odbor koji odlučuje o financiranju od bilo kojeg pojedinačnog broja.

## Zamke

- **Smeće-distribucije**: PSA s izmišljenim standardnim devijacijama je deterministička analiza u laboratorijskoj kuti. Temeljite raspone na podacima ili strukturiranom prikupljanju stručnih procjena.
- **Zanemarivanje korelacije** među parametrima (visoka prihvaćenost obično korelira s visokim ušteđenim vremenom); neovisno uzorkovanje podcjenjuje rizik repa.
- **Iskazivanje samo prosjeka** simulacije — cijela poanta je distribucija i vjerojatnost odluke.

## Izvori

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
