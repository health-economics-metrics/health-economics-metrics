# Pridržavanje i postojanost

Pridržavanje (adherence) je koliko stvarna uporaba odgovara propisanoj (intenzitet); postojanost (persistence) je koliko dugo uporaba traje prije prekida (trajanje). Ljekarništvo ima standardizirane mjere — **MPR** i **PDC**, uz ≥80 % kao konvencionalnu granicu „pridržavanja” — a digitalne terapije nasljeđuju i pojmove i problem: pridržavanje je množitelj između učinkovitosti i ostvarene vrijednosti.

## Zašto je važno

Platitelji već rade na tim brojevima: PDC ≥80 % ulazi u američke Medicare Star Ratings, koje pomiču stvarni prihod platitelja — pridržavanje je financijski noseća infrastruktura, a ne meka metrika. Za digitalne terapije obrazac se ponavlja: DiGA podaci pokazuju snažan opseg recepata uz slabo održano pridržavanje, a cijene digitalnih terapija temeljene na ishodima (stižu u Njemačku od 2026.) plaćat će za rezultate uvjetovane pridržavanjem. Konceptualna nadogradnja iz istraživanja digitalnog zdravlja: **učinkoviti angažman** — *dovoljan* angažman za postizanje željenog ishoda — i njegova posljedica, **minimalna učinkovita doza**, utvrđena empirijski po intervenciji, a ne pretpostavljena kao „više”.

## Matematika

```
MPR = Σ dani opskrbe izdani / dani u razdoblju × 100   (može premašiti 100%;
      precjenjuje zbog ranih ponovnih izdavanja)
PDC = dani pokriveni opskrbom / dani u razdoblju × 100 (ograničen na 100%;
      konzervativni procjenitelj, preferiran u CMS-u)
Digitalno pridržavanje = stvarni događaji uporabe / propisani događaji uporabe × 100
Postojanost            = dani od početka do prekida
                         (iskažite % postojanih u N mjeseci; metode preživljenja)

Vrednovanje vratima: ostvareni ishod ≈ učinkovitost × g(pridržavanje)
  gdje je g funkcija doza-odgovor; ispod minimalne učinkovite doze,
  g ≈ 0 — trošak nastao, korist izgubljena
```

## Riješeni primjer

Digitalni CBT proizvod za nesanicu, propisan kao 6 modula kroz 6 tjedana; učinkovitost iz ispitivanja 0,025 QALY-ja među onima koji dovrše ≥4 modula (empirijski utvrđena minimalna učinkovita doza):

```
1,000 recepata po £250 → £250,000 potrošnje platitelja
Dovršetak modula: ≥4 modula 38%; 1–3 modula 34%; nula modula 28%

Ostvareni QALY-ji = 1,000 × 0.38 × 0.025 = 9.5
Trošak po QALY-ju = 250,000 / 9.5 ≈ £26,300 — granično pri pragovima NICE-a

Inženjering pridržavanja (redizajn podsjetnika, skraćivanje sesija) podiže
dovršetak ≥4 modula na 50%: 12.5 QALY-ja → £20,000/QALY. Proizvod je prešao
prag financiranja bez diranja sadržaja terapije.
```

Uz cijene prema učinku u stilu 2026., isti pomak izravno pomiče *prihod* — inženjering pridržavanja postaje komercijalni plan razvoja.

## Veza sa softverskim inženjerstvom

Dva rječnika konvergiraju na jedan pojam: softverska analitika ([aktivacija](../aktivacija-i-prihvaćanje/), [ljepljivost](../metrike-angažmana/), [zadržavanje](../zadržavanje-i-odljev/)) i klinička farmacija (MPR, PDC, postojanost) oboje mjere izloženost intervenciji — preslikajte događaje proizvoda na klinički rječnik i platitelji mogu čitati vaše nadzorne ploče. Inženjering posjeduje poluge pridržavanja: logika podsjetnika (glupi dnevni pingovi uče odbacivanje; prilagodljivo vrijeme ne), trošak sesije (modul od 20 minuta dovršava se manje nego 3×7-minutna) i telemetrija trenja koja locira *gdje* u protokolu korisnici otpadaju. Instrumentirajte doza-odgovor od prvog dana — analiza minimalne učinkovite doze koja vrata cijelom ekonomskom modelu treba podatke o uporabi povezane s ishodom koje može prikupiti samo proizvod.

## Zamke

- **Brkanje MPR/PDC**: MPR napuhuje; navedite procjenitelja i koristite PDC za sve okrenuto platitelju.
- **Pridržavanje metrici, a ne terapiji**: otvaranja brojana kao doze (vidi [metrike angažmana](../metrike-angažmana/)).
- **Ciljevi angažmana „više je bolje”** kad intervencija ima konačnu dozu — diplomiranje je uspjeh, vječna uporaba nije.
- **Tvrdnje o učinkovitosti temeljene na preživjelima**: ishodi među onima koji se pridržavaju uključuju učinke odabira (ljudi koji se pridržavaju razlikuju se od ostalih); pošteni uzročni procjenitelj traži randomizaciju ili pažljivu prilagodbu.

## Izvori

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
