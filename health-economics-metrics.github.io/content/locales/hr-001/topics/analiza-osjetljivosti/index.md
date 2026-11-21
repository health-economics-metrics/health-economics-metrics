# Analiza osjetljivosti

Deterministička analiza osjetljivosti (DSA) mijenja jednu pretpostavku odjednom u uvjerljivom rasponu kako bi se vidjelo preživljava li zaključak. Standardna vizualizacija je tornado dijagram: parametri poredani prema tome koliko pomiču rezultat.

## Zašto je važno

Svaki ekonomski model izgrađen je na procjenama — ušteđeno vrijeme, prihvaćenost, jedinični troškovi. Procjena zdravstvenih tehnologija odbija prihvatiti točkovnu procjenu („ROI je 340 %”) bez dokaza da je zaključak otporan na razumno neslaganje o ulaznim podacima. Tornado dijagram govori donositelju odluke *koju pretpostavku ispitati*: ako slučaj funkcionira samo kad je najspornija vrijednost na optimističnom kraju, svi to odmah vide.

Ovo je najprenosivija navika iz zdravstvene ekonomije u poslovne slučajeve za softver.

## Matematika

Za svaki parametar p s uvjerljivim rasponom [p_low, p_high]:

```
Result_low  = model(p = p_low,  svi ostali na osnovnom slučaju)
Result_high = model(p = p_high, svi ostali na osnovnom slučaju)
Swing(p)    = |Result_high − Result_low|
```

Poredajte parametre po pomaku; nacrtajte vodoravne stupce oko rezultata osnovnog slučaja. Varijante: dvosmjerna DSA (mijenjanje dvaju parametara na mreži), analiza praga (pronalaženje vrijednosti parametra pri kojoj se odluka preokreće).

## Riješeni primjer

AI asistent za kodiranje za 200 programera. Osnovni slučaj: licenca 39 £/programer/mjesec; ušteda 30 min/programer/dan; puni trošak 60 £/sat; 220 radnih dana.

```
Godišnja korist osnovnog slučaja = 200 × 0.5h × 220 × £60 = £1,320,000
Godišnji trošak                  = 200 × £39 × 12         = £93,600
Neto osnovnog slučaja            = £1,226,400
```

Tornado (jedan parametar odjednom):

```
Ušteđeno vrijeme 0.1–1.0 h/dan: neto = £170,400 … £2,546,400   (pomak £2.38M) ← dominira
Puni trošak £40–£80/h:          neto = £786,400 … £1,666,400   (pomak £0.88M)
Radni dani 200–240:             neto = £1,106,400 … £1,346,400 (pomak £0.24M)
Licenca £30–£50/mj:             neto = £1,248,000 … £1,200,000 (pomak £48k)
```

Analiza praga: neto korist pada na nulu pri oko **2,1 minute/dan** ušteđenog vremena. Odluka je neosjetljiva na cijenu licence i u potpunosti ovisi o procjeni ušteđenog vremena — dakle mjerite to, a ne ostalo. (I zapamtite da je rezultat kapacitet, a ne gotovina — vidi [uštede koje oslobađaju gotovinu naspram onih koje je ne oslobađaju](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/).)

## Veza sa softverskim inženjerstvom

Inženjeri taj instinkt već imaju kao „što ako griješimo oko X?” — DSA ga samo čini sustavnim i vidljivim. Stavite tornado dijagram u svaki prijedlog alata, plan kapaciteta i analizu izgradi-ili-kupi. On pretvara rasprave o tome čiji je osjećaj točan u dogovore o tome koji parametar treba izmjeriti — često kroz pilot, čija se vrijednost i sama može cijeniti (vidi [očekivanu vrijednost savršene informacije](../očekivana-vrijednost-savršene-informacije/)).

## Zamke

- **Rasponi odabrani da laskaju**: ±10 % oko svakog ulaza bez obzira na stvarnu neizvjesnost. Procjene ušteđenog vremena zaslužuju ±80 %; cijene licenci ±10 %.
- **Jedan-po-jedan propušta interakcije** — korelirani parametri (prihvaćenost i ušteđeno vrijeme) trebaju dvosmjernu analizu ili punu [probabilističku analizu osjetljivosti](../probabilistička-analiza-osjetljivosti/).
- **Provesti analizu i zanemariti je**: ako tornado kaže da slučaj ovisi o jednom mekom broju, sljedeći korak je mjerenje, a ne odobrenje.

## Izvori

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
