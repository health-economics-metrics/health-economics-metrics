# Procjena zdravstvenih tehnologija (HTA)

HTA je formalni, institucionalizirani proces kojim zdravstveni sustavi odlučuju vrijedi li tehnologiju — lijek, uređaj ili softver — platiti. Kombinira dokaze o kliničkoj učinkovitosti s ekonomskom evaluacijom prema objavljenoj, obveznoj metodologiji.

## Zašto je važno

Ako prodajete u nacionalnu zdravstvenu službu, HTA tijelo može doslovno odlučiti o vašem pristupu tržištu. Poznavanje lokalnog procesa je poznavanje vašeg stvarnog regulatora vrijednosti:

- **NICE (Engleska)**: zakonske procjene prema definiranom *referentnom slučaju* — QALY-ji iz [EQ-5D](../eq-5d/), [perspektiva](../perspektiva-analize/) NHS+PSS, 3,5 % [diskontiranje](../diskontiranje-i-vremenska-preferencija/), obvezan [PSA](../probabilistička-analiza-osjetljivosti/) — procjenjuje se naspram 20–30 tis. £/QALY uz [modifikatore težine](../qaly-manjak-i-modifikatori-težine/); visoko specijalizirane tehnologije do 100 tis. £+ s ponderiranjem.
- **ICER (SAD, nevladin)**: izvješća o dokazima s *mjerilom cijene zdravstvene koristi* — cijenom pri kojoj bi proizvod bio isplativ uz 100–150 tis. $ po QALY-ju/evLYG-u — koristi se kao poluga pregovaranja; plus „upozorenja o pristupačnosti” iz utjecaja na proračun.
- **Kanada (CADTH → CDA-AMC)**: pregledi nadoknade pri ≈50 tis. CAD$/QALY; povijesno traže sniženje cijene u ~95 % prijava.

## Matematika

Moć HTA-a nije formula nego **propisana metoda**: svaka prijava računa isti [ICER](../inkrementalni-omjer-isplativosti/) prema istim pravilima referentnog slučaja, pa su rezultati usporedivi među proizvodima i godinama. Referentni slučaj određuje mjeru ishoda, instrument korisnosti, perspektivu, odabir komparatora, diskontnu stopu, vremenski horizont i analizu neizvjesnosti — uklanjajući svaki stupanj slobode kojim bi sponzor mogao manipulirati.

## Riješeni primjer

Digitalna terapija podnosi prijavu na evaluaciju u stilu NICE-a:

```
Model: ΔC = +£450/pacijentu, ΔE = +0.03 QALY-ja → ICER = £15,000/QALY ✓ ispod £20k
Provjere referentnog slučaja:
  korisnosti iz EQ-5D-5L s UK skupom vrijednosti          ✓
  komparator = trenutni put skrbi (ne „bez liječenja”)    ✓
  PSA: 71% vjerojatnost isplativosti pri £20k             ✓ (iskazano)
  modifikator težine: manjak ispod granica ×1.2           — nije tvrđeno
Preporuka: rutinsko naručivanje, uz prikupljanje podataka iz stvarne prakse.
```

Sponzorova vlastita preferirana analiza pokazala je 9.000 £/QALY; referentni slučaj gurnuo ga je na 15.000 £ prisiljavanjem poštenog komparatora. Taj jaz je *razlog* zašto referentni slučajevi postoje.

## Veza sa softverskim inženjerstvom

Prenosivi artefakt je **interni referentni slučaj**: jedna propisana metoda za sve poslovne slučajeve alata/platformi — deklarirani komparator, standardni jedinični troškovi (vidi [nacionalni tarifni sustav i jedinične troškove](../nacionalni-tarifni-sustav-i-jedinični-troškovi/) za obrazac), fiksna diskontna stopa, obvezna analiza osjetljivosti, standardni predložak. „AMCP dosje za alate” podnesen platformskom vijeću čini prijedloge usporedivima, a namještanje vidljivim, baš kao što HTA čini za medicinu. Počnite manje nego NICE: predložak od dvije stranice plus objavljeni cjenik bolji su od nikakvog standarda.

Za to kako se višeciklični HTA model zapravo simulira kohortu po kohortu, vidi [Markovljevu kohortnu simulaciju](../markovljeva-kohortna-simulacija/).

## Zamke

- **Tretiranje HTA-a kao formalnosti nakon regulatornog odobrenja** — CE/UKCA/FDA odobrenje kaže da je proizvod siguran; HTA odlučuje je li ga *vrijedi kupiti*. Drukčija prepreka, drukčiji dokazi.
- **Izgradnja ekonomskog modela nakon ispitivanja** — generiranje dokaza treba osmisliti unatrag od zahtjeva referentnog slučaja.
- **Zanemarivanje razlika među jurisdikcijama**: ICER koji je financiran u SAD-u uz 120 tis. $/QALY propada pred NICE-om uz 30 tis. £; planirajte dokaze i cijene po tržištu.

## Izvori

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
