# Očekivani životni vijek prilagođen zdravlju (HALE)

HALE je populacijski sažetak: broj godina koje osoba može očekivati živjeti *u punom zdravlju*, uz odbijanje godina provedenih u bolesti ili invaliditetu. Globalni HALE pri rođenju iznosio je oko 61,9 godina naspram očekivanog životnog vijeka od 73,3 (WHO, podaci za 2019.) — čovječanstvo posljednje desetljeće života u prosjeku proživi u manje nego punom zdravlju.

## Zašto je važno

HALE je sjeverna zvijezda metrika nacionalne i globalne zdravstvene politike — brojnik ciljeva „zdravog starenja”, a jaz koji otkriva (očekivani životni vijek minus HALE) je teret koji prevencija, rana intervencija i upravljanje kroničnim bolestima nastoje zatvoriti. Digitalne zdravstvene strategije na razini ministarstva opravdavaju se u HALE terminima; portfelj aplikacija, usluga probira i programa praćenja u konačnici se zbraja ovdje.

## Matematika

Standardni izračun je **Sullivanova metoda**:

```
HALE_dob_x = Σ (osobogodine tablice smrtnosti u svakoj dobi ≥ x × udio u punom zdravlju)
             / preživjeli u dobi x

"udio u punom zdravlju" = 1 − Σ (prevalencija_stanja × težina invaliditeta)
```

Ulazi: standardna tablica smrtnosti plus prevalencija i težine invaliditeta za zdravstvena stanja (iz podataka Global Burden of Disease). HALE je povezan s [DALY-jima](../godina-života-prilagođena-invaliditetu/) — populacijski teret DALY-ja i HALE jaz dva su pogleda na isto izgubljeno zdravlje.

## Riješeni primjer

Nacionalni digitalni program za hipertenziju: 500.000 uključenih, prosječna kontrola krvnog tlaka poboljšava se dovoljno da smanji incidenciju moždanog udara za 0,2 postotna boda/godišnje. Modelirano kroz životni vijek kohorte, izbjegnuti moždani udari štede 15.000 godina ponderiranih invaliditetom (YLD uz težinu 0,32 plus YLL od smrtonosnih moždanih udara).

```
HALE doprinos ≈ 15,000 zdravih godina / 500,000 ljudi
              ≈ 0.03 godine (≈ 11 dana) HALE-a po uključenoj osobi
```

Jedanaest dana zvuči malo — ali na razini populacije tako se nacionalne metrike zapravo pomiču: ministarstva kupuju milijune sićušnih dobitaka po osobi. Ta aritmetika pokazuje i zašto **doseg dominira**: intervencija dvostruko učinkovitija s desetinom upisa pomiče HALE pet puta manje. Vidi [doseg i pravednost](../doseg-i-pravednost/).

## Veza sa softverskim inženjerstvom

HALE je obrazac metrike zdravlja flote: **očekivani vijek usluge × udio tog vijeka provedenog zdravo**. Platformski tim može izračunati „očekivani zdrav vijek usluga” po cijelom svom inventaru — godine koliko se očekuje da usluga radi, diskontirane vremenom provedenim u degradiranim, zastarjelim stanjima ili stanjima incidenta (težine iz SLO manjka). To preoblikuje pouzdanost iz točkovne dostupnosti u zdravlje kroz životni vijek i usmjerava sanaciju na sustave koji vuku HALE inventara prema dolje.

## Zamke

- **HALE se pomiče sporo i višeuzročno** — nijedna pojedinačna intervencija ne „pomiče HALE” mjerljivo; tvrdite modelirani doprinos, a ne nacionalnu statistiku.
- **Podaci o prevalenciji kasne** godinama; nedavni dobitci neće se vidjeti u službenom HALE-u.
- **Uspoređivanje HALE-a među državama** s različitim mjerenjem zdravstvenih stanja je podmuklo; koristite ga longitudinalno unutar jednog sustava.

## Izvori

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
