# NICE Evidence Standards Framework (ESF)

ESF je NICE-ov okvir koji određuje **koliko dokaza digitalna zdravstvena tehnologija treba, razmjerno svom riziku**. To je najbliže službenom odgovoru na „što moramo dokazati prije nego što NHS kupi našu aplikaciju?”

## Zašto je važno

ESF (prvi put objavljen 2019., ažuriran 2022. da obuhvati AI i prilagodljive algoritme) razvrstava digitalne zdravstvene tehnologije u razine prema kliničkoj funkciji, s **kumulativnim** standardima dokaza — 21 standard u 5 skupina (čimbenici dizajna, vrijednost, učinak/učinkovitost, ekonomski utjecaj, uvođenje):

```
Razina A — uslužni sustavi, bez izravnog ishoda za pacijenta (npr. e-raspoređivanje)
           → osnovni standardi: vjerodostojnost, zaštita podataka, tehničko jamstvo
Razina B — informiranje, jednostavno praćenje, komunikacija (npr. dnevnik simptoma)
           → + dokaz koristi za korisnika, odgovarajuća pouzdanost
Razina C — liječenje, dijagnoza ili aktivno usmjeravanje kliničkog vođenja
           → + visokokvalitetni komparativni dokazi učinkovitosti (idealno RCT)
             i ekonomska analiza
```

Za ekonomske dokaze, [analiza troškova i posljedica](../analiza-troškova-i-posljedica/) prihvatljiva je za većinu razina; [analiza troška i korisnosti](../analiza-troška-i-korisnosti/) očekuje se pri najvišem riziku. ESF definira vaš **trošak dokaza za ulazak na tržište** — budžetirajte ga kao svaki drugi trošak izgradnje.

## Matematika

Nema formula — tablica odlučivanja. Operativni izračun je komercijalni:

```
Potrebno ulaganje u dokaze = f(razina)
  Razina A: dokumentacija + jamstvo ≈ £10k–50k
  Razina B: opservacijska/komparativna studija koristi za korisnika ≈ £50k–250k
  Razina C: komparativna studija razine RCT + ekonomski model ≈ £250k–£2M+

Namjerno pozicionirajte tvrdnje proizvoda: tvrdnja „podržava kliničke
odluke” umjesto „informira pacijente” pomiče vas za razinu i može 10× povećati račun.
```

## Riješeni primjer

Proizvođač aplikacije za podsjetnik na lijekove razmatra dodavanje funkcije preporuke prilagodbe doze.

- Kao aplikacija za podsjetnike: **Razina B** — dovoljna je kohortna studija koja pokazuje poboljšanje pridržavanja.
- S preporukama doze: **Razina C** — komparativni dokazi učinkovitosti (vjerojatno RCT naspram uobičajene skrbi) plus ekonomska analiza.

Ako RCT košta 600 tis. £, a inkrementalni prihod funkcije doze je 200 tis. £/godišnje, funkcija mora zadržati vrijednost 3+ godine prije nego što se troškovi dokaza isplate — proizvodna odluka koja izgleda posve drukčije kad se ESF razina uračuna u cijenu. Mnogi timovi isporuče proizvod Razine B, a tvrdnju Razine C odgode do osiguranog financiranja.

## Veza sa softverskim inženjerstvom

ESF je najprenosiviji obrazac upravljanja u ovom repozitoriju: **zahtjevi za dokazima prema razini rizika pri usvajanju alata**. Interna inačica: formater koda treba demo (Razina A); alat za produktivnost koji tvrdi ušteđene sate treba izmjeren pilot (Razina B); AI vrata koja automatski blokiraju puštanja ili automatski pišu klinički kod trebaju dokaze razine kontroliranog ispitivanja prije uvođenja u cijeloj organizaciji (Razina C). Razmjerni dokazi sprječavaju oba načina propadanja — birokraciju koja guši trivijalne alate i dojmove koji isporučuju posljedične. Vidi i [DiGA fast-track](../njemački-diga-fast-track/) za dopunu „privremeno usvajanje s rokom za dokaze”.

## Zamke

- **Pogrešno razvrstavanje razine željenim razmišljanjem** — regulatori i kupci razvrstavaju prema onome što proizvod *radi*, a ne prema onome što marketing kaže.
- **Dokazi izgrađeni nakon proizvoda**: naknadno kačenje RCT-a na isporučeni proizvod bez instrumentacije ili ekvipoize spor je i često nemoguć.
- **Zadovoljavanje ESF-a i zaboravljanje ostatka**: ESF stoji uz DTAC (klinička sigurnost, zaštita podataka, interoperabilnost) i, za AI, regulatorno odobrenje — vidi [regulatornu evaluaciju AI-ja](../regulatorna-evaluacija-ai-ja/).

## Izvori

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
