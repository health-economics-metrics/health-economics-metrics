# EQ-5D

EQ-5D je standardizirani upitnik grupe EuroQol za mjerenje kvalitete života povezane sa zdravljem. To je instrument koji daje težine korisnosti unutar većine izračuna [QALY-ja](../godina-života-prilagođena-kvaliteti/) — referentni slučaj NICE-a imenuje ga preferiranom mjerom za odrasle.

## Zašto je važno

Svaki digitalni zdravstveni proizvod koji želi tvrditi QALY-je treba korisnosti iz validiranog instrumenta, a EQ-5D je zadani izbor u Ujedinjenom Kraljevstvu i većem dijelu Europe. Dovoljno je kratak da se ugradi u aplikaciju (5 pitanja + vizualna ljestvica), što znači da softverski proizvodi mogu prikupljati ishodne podatke razine HTA-a kao nusproizvod uobičajene uporabe — strukturna prednost nad lijekovima, kojima trebaju namjenske studije.

## Matematika

EQ-5D-5L postavlja jedno pitanje u svakoj od **5 dimenzija** — pokretljivost, briga o sebi, uobičajene aktivnosti, bol/nelagoda, tjeskoba/depresija — svaka s odgovorom na **5 razina** (bez problema … ekstremni problemi), plus vizualno-analognu ljestvicu 0–100 (EQ VAS).

```
Zdravstveno stanje = 5-znamenkasti profil, npr. "21221"
Indeks korisnosti = value_set(profil)

Skup vrijednosti specifičan je za državu, izveden iz anketa opće populacije
metodom time-trade-off / diskretnog izbora. Sidra: 1 = potpuno zdravlje,
0 = smrt; stanja gora od smrti su negativna (donja granica UK 3L skupa: −0.594).
```

QALY aritmetika zatim teče kao `trajanje × korisnost`.

## Riješeni primjer

Aplikacija za mišićno-koštanu rehabilitaciju mjeri EQ-5D-5L pri uključivanju i nakon 6 mjeseci za 1.000 korisnika koji završe.

```
Prosječna korisnost na početku:  0.62
Prosječna korisnost nakon 6 mj.: 0.71
Dobitak održan (pretpostavka) 1 godinu: (0.71 − 0.62) × 1.0 = 0.09 QALY-ja po korisniku
```

Naspram promjene u kontrolnoj skupini od 0,03 (prirodni oporavak), pripisivi dobitak je 0,06 QALY-ja/korisniku. Unovčeno po 20.000–30.000 £/QALY: **1.200–1.800 £ zdravstvene vrijednosti po korisniku koji završi** — broj koji usidruje pregovore o cijeni aplikacije s platiteljem. (Minimalne klinički važne razlike za EQ-5D indeks obično su u rasponu 0,03–0,08, pa je 0,06 uvjerljivo, ali mora proći usporedbu s kontrolom; vidi [ishode koje prijavljuju pacijenti](../ishodi-koje-prijavljuju-pacijenti/).)

## Veza sa softverskim inženjerstvom

- **Instrumentirajte.** EQ-5D pri registraciji i u intervalima praćenja je nekoliko ekrana sučelja; isplata je dokaz razine HTA-a. Licenciranje se dobiva od EuroQola (obavezno, za neke namjene besplatno).
- **Koristite pravi skup vrijednosti** za državu uvođenja — isti odgovori boduju se različito u UK-u, Njemačkoj i Japanu.
- **Lekcija dizajna**: EQ-5D pokazuje kako sićušna standardizirana anketa uz objavljenu funkciju bodovanja daje usporediv jedinstveni indeks. To je obrazac i za svaki vjerodostojan indeks iskustva programera — standardizirani instrument, objavljene težine, a ne ad-hoc dojmovi. Vidi [SPACE i DevEx](../space-i-devex/).

## Zamke

- **Prije/poslije bez komparatora** — regresija prema sredini i prirodni oporavak napuhuju naivne dobitke.
- **Pristranost preživjelih**: mjerenje samo korisnika koji su ostali angažirani (vidi [zadržavanje i odljev](../zadržavanje-i-odljev/)).
- **Miješanje 3L i 5L verzija ili skupova vrijednosti** među studijama — sustavno različiti brojevi.
- **Efekti stropa** u blago pogođenim populacijama: mnogi korisnici na početku bodovaju blizu 1,0, ne ostavljajući prostora za dokazivanje dobitka.
- **Tretiranje skupa vrijednosti kao samoopravdavajućeg**: brojevi korisnosti koje skup vrijednosti vraća i sami su dobiveni od javnosti anketama time-trade-off (ili srodnim anketama temeljenim na izboru) — vidi [prikupljanje korisnosti metodom time trade-off (TTO)](../prikupljanje-korisnosti-metodom-time-trade-off/) za način.

## Izvori

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
