# Metrike angažmana

Metrike angažmana mjere koliko korisnici stvarno koriste zdravstvenu aplikaciju: DAU/MAU ljepljivost, učestalost i trajanje sesija, uporaba funkcionalnosti. U digitalnom zdravlju angažman nije hvalisanje — to je **doza**: izloženost kroz koju mora teći svaki klinički učinak.

## Zašto je važno

Lijek koji ostane u bočici nikoga ne liječi; aplikacija koja ostane neinstalirana ili neotvorena isti je način neuspjeha. Svaka zdravstveno-ekonomska tvrdnja za potrošački zdravstveni proizvod množi se kroz angažman — učinkovitost pokazana u ispitivanjima izmjerena je pri nekoj razini uporabe, a stvarna vrijednost skalira s time koliko uporaba pri uvođenju prilazi toj razini. Standardna produktna mjerila: DAU/MAU oko **20 % smatra se zdravim** za mobilne aplikacije općenito, >25 % izuzetnim; zdravstvene aplikacije često su niže.

## Matematika

```
Ljepljivost (DAU/MAU) = dnevno aktivni korisnici / mjesečno aktivni korisnici × 100
Metrike sesija        = sesije/korisniku/razdoblju; prosj. trajanje = ukupno vrijeme / sesije
Angažman funkcionalnosti = korisnici koji izvode ključnu radnju / aktivni korisnici

Okvir doza-odgovor (zdravstveno-ekonomska nadogradnja):
  ostvareni učinak ≈ učinak ispitivanja × f(stvarna uporaba / uporaba u ispitivanju)
  gdje f dolazi iz analize doza-odgovor — vidi koncept „učinkovitog
  angažmana” u adherence-and-persistence.md: dovoljno uporabe za postizanje
  željenog ishoda, što može biti skromno i konačno
```

## Riješeni primjer

Ključna studija aplikacije za krvni tlak pokazala je sniženje sistoličkog tlaka od 6 mmHg među korisnicima koji bilježe ≥4 očitanja tjedno. U uvođenju na 50.000 registriranih korisnika:

```
MAU 20,000 (40%); od njih, bilježe ≥4×/tjedan: 7,000
Korisnici s učinkovitom dozom = 7,000 / 50,000 = 14% registrirane baze

Učinak na razini populacije ≈ učinak ispitivanja isporučen 14%, a ne 100%:
svaki ekonomski model koji navodi „50,000 korisnika × 6 mmHg” precjenjuje ~7×.
Pošten model: 7,000 × puni učinak + djelomični kredit (iz podataka
doza-odgovor, ako postoje) za 13,000 korisnika ispod praga.
```

To množenje — kroz lijevak angažmana do učinkovite doze — najčešće je mjesto na kojem ekonomija digitalnog zdravlja napuhuje.

## Veza sa softverskim inženjerstvom

Inženjeri posjeduju lijevak angažmana, što ih čini vlasnicima *kliničke* varijable: trenje pri uvođenju, strategija obavijesti, vrijeme učitavanja i otpornost bez veze sve pomiču isporučenu dozu. Dvije implikacije dizajna: instrumentirajte **klinički značajnu radnju** (zabilježena očitanja, dovršene lekcije), a ne otvaranja — DAU izgrađen na sesijama od odbijanja obavijesti je prijevara s dozom; i tretirajte ciljeve angažmana kao ciljeve *dostatnosti*, a ne maksimizacije — aplikacija koja postiže ishod u 5 minuta/tjedno i ukloni se s puta klinički je idealna i metrički „slaba” (vidi učinkoviti angažman u [pridržavanju i postojanosti](../pridržavanje-i-postojanost/)). Vrednujte sam rad na angažmanu putem gornjeg modela učinka na populaciju: dobitak od 2 boda u udjelu učinkovite doze je kvantificirana QALY stavka.

## Zamke

- **Angažman kao ishod**: uporaba je sredstvo; ishod je [PROM](../ishodi-koje-prijavljuju-pacijenti/) ili klinički ishod.
- **Prosjeci preko bimodalne uporabe**: populacije zdravstvenih aplikacija dijele se na predane korisnike i duhove; prosjeci ne opisuju nikoga — podijelite u kohorte.
- **Napuhavanje doze tamnim obrascima**: nizovi i obavijesti krivnje podižu metrike i mogu naškoditi anksioznim populacijama kojima zdravstvene aplikacije služe; klinički proizvodi nose kliničku etiku.
- **Provenijencija mjerila dobavljača**: većina objavljenih mjerila angažmana dolazi od analitičkih dobavljača, a ne iz recenzije; kalibrirajte naspram vlastitih ispitivanja.

## Izvori

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
