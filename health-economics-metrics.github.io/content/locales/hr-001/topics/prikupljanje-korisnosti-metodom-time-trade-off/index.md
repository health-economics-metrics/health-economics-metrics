# Prikupljanje korisnosti metodom time trade-off (TTO)

TTO je standardna metoda za izravno prikupljanje vrijednosti korisnosti zdravstvenog stanja od ispitanika, umjesto izmišljanja. Jedna je od metoda prikupljanja — uz standardnu okladu (standard gamble) i eksperimente diskretnog izbora — koje proizvode skupove vrijednosti iza instrumenata poput [EQ-5D](../eq-5d/), a time i iza većine izračuna [QALY-ja](../godina-života-prilagođena-kvaliteti/) nizvodno.

## Zašto je važno

Svaka težina korisnosti koja ulazi u izračun QALY-ja morala je odnekud doći. TTO je način: za stanje koje se smatra boljim od smrti, ispitaniku se postavlja pitanje koliko godina `X` u punom zdravlju smatra ekvivalentnima `T` godinama u oštećenom stanju (`X < T`); korisnost je `X / T`. Za stanje koje neki ispitanici smatraju gore od smrti standardna formula ne radi (ne može čisto prikazati korisnosti ispod nule), pa se primjenjuje prošireni TTO. Softverski inženjer ili analitičar koji težinu korisnosti tretira kao zadan ulaz, ne znajući da je za nju trebao validiran protokol prikupljanja, korak je udaljen od broja koji ne može obraniti ako ga netko ospori.

## Matematika

```
Standardni TTO (stanje bolje od smrti):
  korisnost = vrijeme_u_punom_zdravlju / vrijeme_u_oštećenom_stanju

Prošireni TTO (stanje gore od smrti):
  korisnost = -vrijeme_zamijenjeno_za_smrt / (ukupno_trajanje - vrijeme_zamijenjeno_za_smrt)
```

`time_in_full_health` / `time_in_impaired_state` — godine `X` u punom zdravlju procijenjene ekvivalentnima `T` godinama u oštećenom stanju. `time_traded_for_death` / `total_duration` — u formulaciji gore-od-smrti, godine `a` od preostalog života od `T` godina koje bi ispitanik zamijenio za trenutnu smrt, preferirajući `T − a` godina u punom zdravlju praćenih smrću pred `T` godina u stanju gore od smrti. Rezultat je negativan, usidren tako da je smrt = 0.

## Riješeni primjer

**Standardno**: ispitanik je u oštećenom stanju 10 godina i svejedno mu je s 7 godina u punom zdravlju: korisnost = 7 / 10 = **0,7**.

**Gore od smrti**: kroz preostali život od 10 godina, ispitanik bi zamijenio 2 godine za trenutnu smrt — preferira 8 godina u punom zdravlju praćenih smrću pred 10 godina u stanju gore od smrti: korisnost = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Veza sa softverskim inženjerstvom

Ista točka na koju nailazi DevEx ili anketa angažmana kad traži da ljudi ocijene nešto na neispitanoj ljestvici 0–10 vrijedi ovdje obrnuto: TTO postoji upravo zato što „samo ih zamolite da ocijene” nije sama po sebi validirana metoda prikupljanja. Prije izgradnje kompozitnog indeksa — DevEx rezultata, indeksa angažmana, ljestvice sagorijevanja — na samoocijenjenom broju, pitajte što ga je dobilo i je li ta metoda validirana, isto pitanje koje zdravstveni ekonomisti postavljaju težini korisnosti prije nego što uđe u QALY.

## Zamke

- **Generalizacija pojedinačne vrijednosti**: TTO vrijednosti prikupljaju se od *uzorka* opće populacije (ili pacijenata), a ne od pojedinca o čijoj se skrbi odlučuje — korištenje TTO vrijednosti jednog ispitanika kao da se generalizira pogreška je uzorkovanja.
- **Pogrešna formulacija za stanje**: standardna TTO formula pretpostavlja da je stanje nedvosmisleno bolje od smrti; primjena na stanje koje bi neki ispitanici smatrali gore od smrti, bez prelaska na prošireni oblik, tiho daje pogrešnu (pozitivnu) korisnost.
- **Neusporediva trajanja**: TTO vrijednosti prikupljene uz različita preostala trajanja života `T` za usporedbu gore-od-smrti nisu izravno usporedive bez provjere da je dizajn studije držao `T` konstantnim.

## Izvori

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
