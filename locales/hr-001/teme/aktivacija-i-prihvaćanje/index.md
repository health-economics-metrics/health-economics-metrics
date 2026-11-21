# Aktivacija i prihvaćanje

Stopa aktivacije je udio registriranih koji dosegnu prvu značajnu vrijednost („aha” radnju — prvo zabilježeno očitanje, prva dovršena lekcija). Prihvaćanje (uptake) je populacijska inačica: udio *prihvatljive* populacije koji uopće usvoji proizvod. Zajedno su prva vrata lijevka vrijednosti: akvizicija → prihvaćanje → aktivacija → [zadržavanje](../zadržavanje-i-odljev/) → ishod.

## Zašto je važno

Neaktivirani korisnici su čisti trošak: potrošnja na akviziciju, provizioniranje, površina podrške — nula kliničke vrijednosti. Mjerila stavljaju aktivaciju zdravstvenog softvera *ispod* međusektorskog prosjeka (≈24 % naspram ≈37 % za aktivaciju novih korisnika u jednom skupu SaaS mjerila; dovršetak popisa uvođenja ~20 %), što odražava teže uvođenje (identitet, pristanak, klinička sigurnost). Prihvaćanje nosi populacijske uloge: u [RE-AIM okviru](../doseg-i-pravednost/), javnozdravstveni utjecaj ≈ doseg × učinkovitost — izvrsna aplikacija koju usvoji 3 % prihvatljive populacije pomiče populacijsku iglu za 3 %. Za propisane digitalne terapije vrata prihvaćanja vidljiva su u nacionalnim podacima: **~81 % njemačkih DiGA recepata se aktivira** — jedno od pet propisanih i plaćenih liječenja nikad ne počne (vidi [DiGA fast-track](../njemački-diga-fast-track/)).

## Matematika

```
Stopa aktivacije  = korisnici koji dovrše ključnu radnju u prozoru / registracije × 100
Stopa prihvaćanja = usvojitelji / prihvatljiva populacija × 100
DTx stopa ispunjenja = aktivirani kodovi recepata / izdani recepti × 100

Model vrijednosti lijevka:
  prihvatljivi × prihvaćanje × aktivacija × korist ponderirana zadržavanjem = populacijska vrijednost
  — četiri množenja; poboljšanje najmanjeg faktora obično dominira
  (teorija ograničenja za lijevke)
```

## Riješeni primjer

Naručitelj nudi aplikaciju za prevenciju dijabetesa 80.000 prihvatljivih stanovnika:

```
Pozvani → registrirani:  80,000 → 12,000  (prihvaćanje 15%)
Registrirani → aktivirani (prva sesija + postavljen cilj, 7 dana): 12,000 → 5,400 (45%)
Aktivirani → dovršen 6-mjesečni program: 5,400 → 1,600 (30%)

Učinak programa (ispitivanje, dovršitelji): 0.03 QALY-ja + £180 izbjegnutih troškova
Populacijska vrijednost = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Vrijednost po prihvatljivoj osobi = £15.6 — naspram £780 kad bi svaka prihvatljiva osoba dovršila.

Gdje uložiti? Udvostručenje prihvaćanja (15→30%) udvostručuje vrijednost; podizanje
aktivacije 45→65% dodaje ~44%; oboje nadmašuje daljnje doterivanje sadržaja
programa koji 1,600 ljudi već dovršava.
```

## Veza sa softverskim inženjerstvom

Aktivacija je najlakše inženjerski rješiva faza lijevka: trenje provjere identiteta, tokovi pristanka, dizajn praznih stanja i vrijeme do prve vrijednosti su kod, a ne politika (medijan vremena do vrijednosti u zdravstvu ≈ 1 dan 7 sati u podacima mjerila — svaki sat toga je izloženost odljevu). Prihvaćanje je problem distribucijskih sustava: integracija u putove upućivanja (trenutak recepta), pozivi koje podržava liječnik opće prakse (povjerenje se prenosi) i pristupačnost (jezik, digitalne vještine — vidi [doseg i pravednost](../doseg-i-pravednost/)). Gornji model vrijednosti lijevka je generator poslovnog slučaja za oboje: pomnožite faktore, pronađite ograničenje, cijenite popravak naspram populacijske vrijednosti koju oslobađa.

## Zamke

- **Aktivacija definirana kao pogodnost** (e-pošta potvrđena), a ne kao klinički smisao (prva terapijska radnja) — napuhuje metriku, lomi lanac vrijednosti.
- **Igre s nazivnikom prihvaćanja**: „od onih koji su posjetili stranicu” naspram uistinu prihvatljive populacije — naručitelji brinu za ovo drugo.
- **Učinci odabira**: lako aktivirani korisnici su najmanje bolesni i najmanje deprivirani; poboljšanja lijevka mogu proširiti jazove pravednosti dok poboljšavaju prosjeke.

## Izvori

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
