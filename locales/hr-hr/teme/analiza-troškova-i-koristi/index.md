# Analiza troškova i koristi (CBA)

CBA vrednuje i troškove *i* ishode u novcu. To je jedina vrsta analize koja može odgovoriti na „vrijedi li ovo uopće činiti?” — a ne samo „koja je opcija najbolja?” — jer se unovčene koristi mogu izravno usporediti s troškovima.

## Zašto je važno

CBA je standard britanskog **Green Booka** (HM Treasury) za procjenu sve javne potrošnje, uključujući zdravstvo kad se ishodi mogu unovčiti. Gdje [CEA](../analiza-isplativosti/)/[CUA](../analiza-troška-i-korisnosti/) staju na „trošku po jedinici zdravlja”, CBA cijeni samo zdravlje (QALY × vrijednost praga) i sve ostalo — vrijeme, putovanje, ugljik — i iskazuje jedan neto iznos. Svaki potpuni NHS-ov digitalni poslovni slučaj sadrži ekonomski slučaj u obliku CBA-a.

## Matematika

```
NPV (neto sadašnja društvena vrijednost) = Σ_t [ (Koristi_t − Troškovi_t) / (1 + r)^t ]
BCR (omjer koristi i troškova)            = PV(koristi) / PV(troškova)

Usvojiti ako je NPV > 0 (ekvivalentno BCR > 1); rangirati po NPV-u, ne po BCR-u.
r = 3.5% (Green Book društvena stopa vremenske preferencije)
```

Zdravstveni učinci mogu ući unovčeni kao QALY-ji × λ (vidi [pragove spremnosti na plaćanje](../pragovi-spremnosti-na-plaćanje/)). Green Book također nalaže **prilagodbe pristranosti optimizma** — podizanje procjena troškova i smanjivanje koristi za postotke utemeljene na dokazima, jer su procjene sustavno ružičaste.

## Riješeni primjer

E-uputni sustav, horizont od 5 godina, diskont 3,5 %:

```
Troškovi: izgradnja £1.2M (godina 0), pogon £300k/god (godine 1–5)
Koristi:  administrativne uštede £250k/god, izbjegnuta duplicirana dijagnostika £280k/god,
          ušteđeno vrijeme pacijenata 40,000 sati/god × £15 = £600k/god → £1,130k/god

PV troškova = 1,200k + 300k × 4.515 (faktor anuiteta) = £2,555k
PV koristi  = 1,130k × 4.515                          = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Primijenite pristranost optimizma Green Booka (recimo +40 % na trošak izgradnje, −20 % na koristi): PV troškova ≈ 3.035 tis. £, PV koristi ≈ 4.082 tis. £, NPV ≈ **+1.047 tis. £** — i dalje pozitivno, što je smisao prilagodbe: slučajevi bi trebali preživjeti vlastiti optimizam.

## Veza sa softverskim inženjerstvom

Inženjerski poslovni slučajevi su neformalne CBA. Nadogradnje Green Booka koje vrijedi preuzeti:

- **Pristranost optimizma kao standardni uvećavajući faktor** — inženjeri podcjenjuju trošak migracije jednako pouzdano kao što ministarstva podcjenjuju trošak infrastrukture; primijenite navedeno uvećanje umjesto pretvaranja da je ovaj put drukčije.
- **Unovčite dominantnu korist pošteno ili nikako** — vrijeme pacijenta/korisnika unovčava se po obranjivim stopama; „vrijednost brenda” ne.
- **NPV rangira, BCR ne**: sićušan projekt s BCR 5 može biti manje važan od velikog s BCR 1,6.

## Zamke

- **Unovčavanje neunovčivog** radi napuhavanja koristi (moral, „strateško usklađivanje”) — držite to kvalitativnim, prema [analizi troškova i posljedica](../analiza-troškova-i-posljedica/).
- **Brojanje transfera kao koristi**: novac koji se seli među javnim tijelima daje nulu iz društvene [perspektive](../perspektiva-analize/).
- **Nema kontrafaktualnog scenarija**: koristi se mjere naspram opcije do-minimum, a ne naspram nule.

## Izvori

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
