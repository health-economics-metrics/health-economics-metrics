# Jedinična ekonomija inferencije

Jedinična ekonomija inferencije cijeni AI funkcionalnosti prema njihovom graničnom računanju: **trošak po tokenu**, zbrojen u trošak po transakciji, po korisniku, po kliničkoj epizodi. Definirajuća dinamika: cijene LLM-ova padaju otprilike **za red veličine svake 1–2 godine** pri stalnoj sposobnosti — stopa deflacije bez presedana u troškovanju zdravstvenih tehnologija.

## Zašto je važno

Iz pada cijena slijede dvije posljedice. Komercijalno, AI funkcionalnost koja je danas marginalna za 18 mjeseci može biti trivijalno profitabilna — a konkurent s cijenama po današnjim troškovima bit će podrezan. Za ekonomsku evaluaciju, svaki model isplativosti za klinički servis s AI-jem koji zamrzava cijene inferencije iz 2024. **bitno precjenjuje tekući trošak** — analizi trebaju scenariji pada cijena kao što modeli lijekova obrađuju istek patenta i ulazak generika. (Referentne točke iz istraživanja: izlazni tokeni frontier modela ~15–75 $/M sredinom 2026., modeli srednjeg razreda za red veličine jeftiniji, sposobnost razine GPT-4 pala s ~20 $/M 2022. na ~0,40 $/M; Epoch AI izmjerio je padove 9×–900×/godišnje ovisno o prekretnici sposobnosti.)

## Matematika

```
Trošak po pozivu   = ulazni tokeni × ulazna cijena + izlazni tokeni × izlazna cijena
Trošak po jedinici = Σ pozivi po jedinici poslovnog izlaza (po trijažnoj epizodi,
                     po sastavljenom pismu, po sažetku konzultacije)

Stvarnost mješavine = osnovni poziv + ponovni pokušaji + RAG kontekst (puno ulaza)
                      + pozivi evaluacije/zaštitnih ograda (često 20–50% režija)

Scenarij pada cijena za višegodišnje modele:
  trošak_t = trošak_0 × d^t, testirajte d ∈ {0.3, 0.5, 0.7}/godišnje u analizi osjetljivosti
```

## Riješeni primjer

AI usluga sažetka otpusta: prosječan sažetak koristi 12.000 ulaznih tokena (kontekst zapisa) + 1.200 izlaznih, plus prolaz provjere (6.000 ul. / 300 izl.). Uz 3 $/M ulaz, 15 $/M izlaz:

```
Nacrt:     12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Provjera:   6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Po sažetku ≈ $0.077 → na 100,000 sažetaka/godišnje ≈ $7,700

Naspram ~20 ušteđenih kliničarskih minuta po sažetku (≈ £25), inferencija je
0.25% stvorene vrijednosti — ekonomijom dominira sve OSIM tokena:
integracija, evaluacija, upravljanje, prihvaćanje.
```

Taj zaključak — da trošak inferencije rijetko je obvezujuće ograničenje, pri sadašnjim cijenama, za klinički visokovrijedne zadatke — i sam je nalaz vrijedan nošenja u razgovore o cijenama.

## Veza sa softverskim inženjerstvom

To je [jedinična ekonomija oblaka](../jedinična-ekonomija-oblaka/) specijalizirana za AI, s tri napomene iz prakse: **mjerite po poslovnoj jedinici**, a ne po API pozivu, tako da se broj izravno uključuje u modele [ICER-a](../inkrementalni-omjer-isplativosti/)/[utjecaja na proračun](../analiza-utjecaja-na-proračun/); **pazite na asimetriju ulaz/izlaz** (izlaz je tipično ~4× cijena ulaza; RAG arhitekture su teške na ulazu — arhitektonski izbori su cjenovni izbori); i **usmjeravajte po razini zadatka** — usklađivanje sposobnosti modela s težinom zadatka (jeftini modeli za klasifikaciju, frontier za sintezu) rutinski smanjuje miješani trošak 5–10× pri jednakoj kvaliteti, softverska inačica korištenja najjeftinije učinkovite intervencije ([minimizacija troškova](../analiza-minimizacije-troškova/), uz dokazanu ekvivalentnost).

## Zamke

- **Višegodišnji modeli sa zamrznutim cijenama** — precjenjuju trošak; ali i **modeli prihoda s pretpostavljenom deflacijom** — cjenovni rat nije ugovor; razradite oba scenarija.
- **Zanemarivanje režije evaluacije**: zaštitne ograde, suci i ponovni pokušaji su stvarni tokeni, često većina u reguliranim okruženjima.
- **Per-token kratkovidnost**: latencija, ograničenja stope i ograničenja prozora konteksta nose troškove koje nijedna cijena tokena ne obuhvaća.

## Izvori

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
