# Markovljeva kohortna simulacija

Markovljev kohortni model je standardna HTA tehnika modeliranja za intervencije čiji se učinci odvijaju kroz više vremenskih razdoblja (ciklusa), a ne jednokratno. Hipotetska kohorta počinje u potpunosti u jednom zdravstvenom stanju, a u svakom ciklusu fiksni skup vjerojatnosti prijelaza premješta dijelove kohorte među stanjima; troškovi i QALY-ji akumuliraju se u svakom ciklusu razmjerno tome koliki dio kohorte zauzima svako stanje i diskontiraju se na sadašnju vrijednost. Svaki softverski inženjer koji modelira višegodišnji poslovni slučaj digitalnog zdravlja — gdje korisnici ili pacijenti prelaze između stanja poput „angažiran”, „neaktivan” ili „otišao” kroz vrijeme — gradi istu strukturu.

## Zašto je važno

Većina stvarnih odluka o zdravstvenim tehnologijama nije jednokratna usporedba troška i ishoda jednog razdoblja. Kronično stanje napreduje, recidivira, reagira na liječenje ili ubija kroz godine — a [analiza isplativosti](../analiza-isplativosti/) jednog razdoblja to ne može prikazati. Prijave NICE-u, ICER-u i CADTH-u za intervencije kod kroničnih bolesti, ocjenjivane kroz [procjenu zdravstvenih tehnologija](../procjena-zdravstvenih-tehnologija/), gotovo su uvijek izgrađene kao Markovljevi kohortni modeli s doživotnim vremenskim horizontom, jer je alternativa — modeliranje svakog mogućeg puta pojedinačnog pacijenta — nerješiva u velikom opsegu. Markovljev model na razini kohorte žrtvuje dio realizma na razini pojedinca (ne može lako prikazati pamćenje prošlih stanja, otuda „Markov”: budućnost ovisi samo o trenutnom stanju) u zamjenu za model koji je transparentan, provjerljiv i dovoljno brz da se pokrene tisuće puta u [probabilističkoj analizi osjetljivosti](../probabilistička-analiza-osjetljivosti/).

## Matematika

```
Ažuriranje kohorte u jednom ciklusu (vektor-redak x matrica prijelaza):
  new_state[j] = sum_i state[i] * transition_matrix[i][j]

Trošak jednog ciklusa:
  cycle_cost = sum_s state[s] * cost_per_cycle[s]

QALY-ji jednog ciklusa:
  cycle_qalys = sum_s state[s] * utility[s] * cycle_length_years

Cijela simulacija kroz `cycles` ciklusa, diskontirana po `discount_rate`:
  total_discounted_cost  = sum_{t=0}^{cycles-1} cycle_cost(state_t)  / (1 + discount_rate)^t
  total_discounted_qalys = sum_{t=0}^{cycles-1} cycle_qalys(state_t) / (1 + discount_rate)^t
  gdje je state_0 = initial_distribution, state_{t+1} = advance_cohort(state_t, transition_matrix)
```

Diskontiranje svakog ciklusa na sadašnju vrijednost koristi upravo formulu iz [diskontiranja i vremenske preferencije](../diskontiranje-i-vremenska-preferencija/), primijenjenu ciklus po ciklus umjesto godinu po godinu.

## Riješeni primjer

**Klinički**: model s 2 stanja — `Well` i `Dead` — gdje 10 % kohorte umire u svakom ciklusu, a `Dead` je apsorbirajuće (vjerojatnost samoprijelaza je 1,0; izostavljanje te petlje uzrokovalo bi nestanak mase kohorte nakon jednog ciklusa u `Dead`). Kohorta počinje u potpunosti `Well`, košta 1.000 £ po ciklusu dok je `Well` (0 £ kad je `Dead`) i dobiva 0,8 QALY-ja godišnje dok je `Well`. Simulirano kroz 3 godišnja ciklusa uz NICE-ovu diskontnu stopu od 3,5 %:

```
Ciklus 0: stanje = [1.00, 0.00] (100% Well)
  trošak = £1,000.00, qalys = 0.800, faktor diskonta = 1.000000
  diskontirano: trošak = £1,000.00, qalys = 0.8000

Ciklus 1: stanje = [0.90, 0.10] (90% Well, 10% Dead)
  trošak = £900.00, qalys = 0.720, faktor diskonta = 0.966184
  diskontirano: trošak = £869.57, qalys = 0.6957

Ciklus 2: stanje = [0.81, 0.19] (81% Well, 19% Dead)
  trošak = £810.00, qalys = 0.648, faktor diskonta = 0.933511
  diskontirano: trošak = £756.14, qalys = 0.6049

Ukupni diskontirani trošak ≈ £2,625.71
Ukupni diskontirani QALY-ji ≈ 2.1006
```

Stanje svakog ciklusa je stanje prethodnog ciklusa provedeno kroz matricu prijelaza — 90 % od 90 % koji su još `Well` u ciklusu 1 ostaje `Well` u ciklusu 2 (0,9 × 0,9 = 0,81), dok je ostalih 19 % sada umrlo (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Primijetite da kohorta nikad potpuno ne isprazni `Well`: uz konstantnu smrtnost od 10 % po ciklusu i bez ponovnog ulaska, udio `Well` opada geometrijski umjesto da u bilo kojem konačnom broju ciklusa dosegne nulu.

## Veza sa softverskim inženjerstvom

Za to kako se višeciklični HTA model koristi unutar stvarne procjene, vidi [procjenu zdravstvenih tehnologija](../procjena-zdravstvenih-tehnologija/) — referentni slučaj koji određuje koju diskontnu stopu, izvor korisnosti i vremenski horizont predani Markovljev model mora koristiti.

Markovljev kohortni model strukturno je automat stanja s vjerojatnosnim prijelazima, pokrenut kroz fiksan broj otkucaja, uz diskontiranje vrijednosti svakog otkucaja. Isti oblik simulira retenciju/prijelaze stanja kohorte korisnika kroz vrijeme — vidi [DORA metrike](../dora-metrike/) za operativnu inačicu pouzdanosti „koji je dio sustava u degradiranom stanju u ovom razdoblju i koliko to košta”. Konkretno:

- **Modeliranje retencije/odljeva** je Markovljev kohortni model sa stanjima poput „aktivan”, „u riziku”, „otišao”: fiksna mjesečna matrica prijelaza, pokrenuta kroz 12 ili 24 mjesečna ciklusa, govori očekivani broj aktivnih korisnika (i prihod) u bilo kojem budućem mjesecu, jednako kao što `Well`/`Dead` govori očekivane preživjele.
- **Ekonomija pouzdanosti i incidenata**: stanja sustava (zdrav, degradiran, nedostupan) mogu se modelirati na isti način, uz „trošak po ciklusu” štete od zastoja koja se akumulira dok sustav zauzima degradirana/nedostupna stanja — pretvarajući argument o učestalosti incidenata u argument diskontiranog troška usporediv s troškom rada na pouzdanosti koji bi promijenio vjerojatnosti prijelaza.
- **Apsorbirajuća stanja kao završna stanja**: `Dead` u kliničkom modelu je upravo „otkazana pretplata” ili „trajno offline” u softverskom modelu — oba trebaju izričitu vjerojatnost samoprijelaza od 1,0, inače simulacija tiho gubi masu.

## Zamke

- **Vjerojatnosti prijelaza koje se po retku ne zbrajaju u 1.** Redak koji se zbraja u više ili manje od 1 tiho čini da kohorta svakog ciklusa „curi” ili „raste” — uvijek provjerite zbrojeve redaka prije povjerenja u izlaz modela, jer ništa u strukturi modela ne označava grešku.
- **Predugačka duljina ciklusa za stvarnu dinamiku bolesti.** Godišnji ciklus za stanje koje bitno mijenja stanje unutar tjedana podcjenjuje prijelaze koji se događaju usred ciklusa; odaberite duljinu ciklusa kratku u odnosu na to koliko brzo se modelirani proces zapravo kreće.
- **Zaboravljena petlja samoprijelaza apsorbirajućeg stanja.** Apsorbirajuće stanje (smrt, trajni prekid) treba vjerojatnost samoprijelaza točno 1,0. Izostavite je i masa kohorte u tom stanju ishlapi nakon jednog ciklusa, podcjenjujući kumulativne troškove ili gubitak QALY-ja.
- **Tretiranje modela kao validiranog jer radi.** Markovljev kohortni model s uvjerljivo izgledajućim vjerojatnostima prijelaza i dalje može biti strukturno pogrešan (stanja koja nedostaju, pogrešno apsorbirajuće ponašanje); validirajte prema poznatim epidemiološkim mjerilima (npr. odgovara li modelirano preživljenje u 5 godina objavljenim krivuljama preživljenja) prije povjerenja u izlaz.

## Izvori

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
