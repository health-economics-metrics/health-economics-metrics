# Jedinična ekonomija oblaka (FinOps)

Jedinična ekonomija oblaka prevodi sirovu potrošnju na oblaku u **trošak po jedinici izlaza** — po korisniku, po transakciji, po riješenom slučaju, po tokenu. To je FinOps sposobnost koja pretvara „naš AWS račun je 400 tis. £ mjesečno” u „posluživanje jednog pacijenta košta 0,83 £.”

## Zašto je važno

Ukupni iznosi potrošnje ne mogu odgovoriti na važna pitanja: postaje li proizvod učinkovitiji ili manje učinkovit? Poboljšava li rast maržu ili je uništava? Što bismo trebali naplaćivati? Jedinični troškovi odgovaraju na sva tri. Za digitalno zdravlje posebno, „trošak po riješenom slučaju” *jest* jedinični trošak zdravstvene službe — izravno usporediv s brojkama [National Cost Collection](../nacionalni-tarifni-sustav-i-jedinični-troškovi/) koje naručitelj koristi za svaku drugu uslugu, što ga čini prirodnim jezikom za određivanje cijena digitalnih puteva naspram tradicionalnih.

## Matematika

```
Jedinični trošak = ukupni alocirani trošak (uklj. zajednički/platformski troškovi) / isporučene jedinice

Dvije obitelji:
  jedinice učinkovitosti resursa: trošak/GB pohranjen, trošak/vCPU-sat, trošak/token,
                                  trošak/minuta izgradnje
  poslovne jedinice:              trošak/korisnik, trošak/transakcija, trošak/konzultacija,
                                  trošak/riješen slučaj

Vrijedi disciplina graničnog naspram prosječnog (marginal-vs-average-cost.md):
obvezana/rezervirana potrošnja čini granični jedinični trošak ≈ 0 do sljedećeg
koraka obveze — odluke o širenju cijenite graničnim, trendove učinkovitosti prosječnim.
```

## Riješeni primjer

Digitalna trijažna usluga: potrošnja na oblaku 62.000 £/mjesečno (računanje 30 tis. £, podaci 18 tis. £, alokacija zajedničke platforme 14 tis. £), obrađuje 380.000 trijažnih epizoda mjesečno:

```
Prosječni trošak po epizodi = 62,000 / 380,000 ≈ £0.163

Usporedba naručitelja: telefonska trijaža ≈ £8–12/poziv, konzultacija kod liječnika opće prakse ≈ £42
→ digitalna epizoda košta ~2% najjeftinije ljudske alternative — ekonomija
prelaska kanala iz gds-service-metrics.md, sa strane troška.

Provjera trenda: prošle godine £0.21/epizodi uz 240k epizoda → poboljšanje
ekonomije razmjera (fiksni platformski troškovi se amortiziraju), vrijedno naslova u QBR-u.
```

## Veza sa softverskim inženjerstvom

Jedinična ekonomija je mjesto gdje inženjerski izbori postaju financijski čitljivi: arhitektura koja prepolovi trošak po epizodi je cjenovna prednost; ona koja skalira superlinearno je vremenska bomba vidljiva samo u ovoj metrici. Prakse koje se prenose iz zdravstvenog troškovanja: **objavite pravila alokacije** (zajednički troškovi izobličavali su jedinične brojke dok PLICS nije standardizirao troškovanje na razini pacijenta — vaša alokacija platformskih troškova treba istu strogost); **birajte jedinice u kojima kupac razmišlja** (naručitelji kupuju epizode, a ne vCPU-ove); i unesite jedinične troškove u svaki model [ICER-a](../inkrementalni-omjer-isplativosti/) i [utjecaja na proračun](../analiza-utjecaja-na-proračun/) kao mjerodavni troškovni nazivnik. Za AI funkcionalnosti jedinica je token — vidi [jediničnu ekonomiju inferencije](../jedinična-ekonomija-inferencije/).

## Zamke

- **Zanemarivanje zajedničkih troškova**: jedinični troškovi bez alokacija platforme/sigurnosti/dežurstva podcjenjuju za 30–50 % i kolabiraju pri reviziji.
- **Nazivnici za hvalisanje**: „trošak po API pozivu” laska; „trošak po dovršenoj epizodi pacijenta” informira.
- **Određivanje cijena graničnih odluka prosječnim troškom**: naplata timovima prosječnog jediničnog troška za uporabu koja je na margini besplatna pokreće kazalište izbjegavanja rasipanja (vidi [nacionalni tarifni sustav](../nacionalni-tarifni-sustav-i-jedinični-troškovi/) za NHS-ovu inačicu ove poticajne greške).

## Izvori

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
