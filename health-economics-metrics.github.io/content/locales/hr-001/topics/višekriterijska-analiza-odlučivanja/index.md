# Višekriterijska analiza odlučivanja (MCDA)

Višekriterijska analiza odlučivanja (MCDA) je model bodovanja ponderiranim zbrojem koji se koristi u procjeni zdravstvenih tehnologija kad jedan ICER/prag spremnosti na plaćanje ne obuhvaća sve do čega je donositelju odluke stalo: pravednost, nezadovoljena potreba, inovacija, utjecaj na proračun, težina bolesti. Svaki kriterij dobiva težinu koja odražava njegovu važnost (prikupljenu od dionika, težine zbrojene na 1), svaka opcija dobiva normaliziranu ocjenu po kriteriju (obično 0–1), a ukupni rezultat je ponderirani zbroj — isti matematički oblik kao tablica za odabir softverskog dobavljača.

## Zašto je važno

MCDA se koristi u okvirima poput EVIDEM-a i u nekim HTA tijelima za procjene lijekova za rijetke bolesti gdje se strogi pristup pragu troška po QALY-ju smatra preuskim da obuhvati sve što je važno u odluci. ISPOR-ova radna skupina MCDA Emerging Good Practices formalizirala je smjernice dobre prakse za obranjivo prikupljanje težina i ocjena, upravo zato što je neformalno ponderirana odluka lako konstruirati i lako namjestiti. Kad zdravstvena tehnologija doista ima vrijednosne dimenzije koje jedan [prag spremnosti na plaćanje](../pragovi-spremnosti-na-plaćanje/) ne može prikazati — težina, inovacija, pravednost — MCDA donositeljima odluka daje izričitu, provjerljivu strukturu za njihovo kombiniranje, umjesto neizrečene procjene.

## Matematika

```
MCDA rezultat = Σ_i (težina_i × ocjena_i)

težine bi se trebale zbrajati na 1 (prikupljene metodama dionika poput
swing ponderiranja ili Analytic Hierarchy Processa)
```

## Riješeni primjer

HTA odbor boduje digitalnu terapiju po četiri kriterija:

```
Kriterij                           Težina   Ocjena   Težina × Ocjena
Klinička korist                    0.4      0.8      0.32
Utjecaj na troškove                0.3      0.5      0.15
Težina bolesti / nezadovoljena potreba 0.2  0.9      0.18
Inovacija                          0.1      0.6      0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Težine se zbrajaju na 1,0 (0,4 + 0,3 + 0,2 + 0,1), a MCDA rezultat je 0,71 (0,32 + 0,15 + 0,18 + 0,06). Odbor uspoređuje 0,71 s unaprijed dogovorenim pragom ili ga rangira naspram konkurentskih tehnologija bodovanih na isti način.

## Veza sa softverskim inženjerstvom

To je ista matematika kao ponderirana tablica za odabir dobavljača, matrica evaluacije RFP-a ili model bodovanja prioriteta funkcionalnosti — vidi [izgradi ili kupi](../izgradi-ili-kupi/), klasičan slučaj uporabe ponderirane tablice u nabavi softvera. Vrijedi je i usporediti s [WSJF i CD3](../wsjf-i-cd3/): WSJF/CD3 je metoda prioritizacije temeljena na *omjeru* (trošak odgode podijeljen s veličinom ili trajanjem posla), dok je MCDA ponderirani *zbroj*. MCDA i WSJF/CD3 su dva strukturno različita odgovora na „kako rangirati konkurentske opcije”, a znati koji od njih odluka zapravo traži — aditivna vrijednost preko neovisnih kriterija naspram gustoće vrijednosti po jedinici oskudnog kapaciteta — važnije je od toga koja formula izgleda rigoroznije.

## Zamke

- **Pristranost pri prikupljanju težina**: tko postavlja težine, u stvarnosti unaprijed određuje rang, pa „formula” može prati političku ili komercijalnu odluku kao objektivan izračun. Dokumentirajte tko je postavio težine i kako.
- **Dvostruko brojanje kriterija već obuhvaćenog drugdje**: bodovanje „isplativosti” kao jednog kriterija dok se *također* zasebno boduje „utjecaj na troškove” precjenjuje novac naspram ostalih kriterija a da to nitko ne namjerava.
- **Lažna preciznost**: ponderirani rezultat na dvije decimale (0,71) implicira više rigoroznosti nego što temeljne ocjene dionika 0–10 doista podupiru, a varijabilnost među ocjenjivačima u tim ocjenama često se uopće ne iskazuje.

## Izvori

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
