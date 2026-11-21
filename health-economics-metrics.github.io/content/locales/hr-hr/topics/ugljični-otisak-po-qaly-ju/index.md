# Ugljični otisak po QALY-ju

Ugljik po QALY-ju je omjer učinkovitosti — emisije ugljika intervencije (ili izbjegnute emisije) podijeljene s QALY-jima koje isporučuje — izravno analogan trošku po QALY-ju, omogućujući da se ugljična učinkovitost intervencije procjenjuje uz njezinu troškovnu učinkovitost. „Ugljično prilagođena neto novčana korist” ide korak dalje, unovčavajući utjecaj ugljika službenim netrgovanim vrijednostima ugljika iz UK Green Booka i netirajući ga naspram standardne [neto novčane koristi](../neto-novčana-korist/).

## Zašto je važno

NICE i NHS England sada očekuju da se uz trošak i QALY-je razmatra i utjecaj na okoliš. NHS ima javnu obvezu neto nule: neto nula za izravne emisije do 2040. i neto nula za cijeli otisak opskrbnog lanca do 2045. NICE-ov priručnik za procjenu zdravstvenih tehnologija (PMG36) spominje održivost okoliša kao novonastalo razmatranje u procjeni tehnologija. Za digitalni zdravstveni proizvod to znači da ugljik postaje četvrti stup vrijednosnog slučaja, uz trošak, QALY-je i [dominaciju na granici učinkovitosti](../dominacija-i-granica-učinkovitosti/) — ne zamjena za bilo koji od njih, nego dimenzija o kojoj dobro izgrađen poslovni slučaj sve češće mora izvještavati.

## Matematika

```
Ugljik po QALY-ju = ukupne_emisije_tona_co2e / ukupni_qaly
  (negativna vrijednost znači neto emisije IZBJEGNUTE po dobivenom QALY-ju —
  dvostruka pobjeda: bolje zdravlje i niži ugljik)

Unovčeni utjecaj ugljika = emisije_tona_co2e × vrijednost_ugljika_po_toni
  (negativne emisije × pozitivna vrijednost = negativan trošak, tj. korist)

Ugljično prilagođeni NMB = neto_novčana_korist − unovčeni_utjecaj_ugljika
```

To proširuje ideju granice učinkovitosti trošak/QALY drugom osi — ugljik po QALY-ju — ista logika „ucrtaj svaku opciju i vidi što je dominirano” kao u [dominaciji i granici učinkovitosti](../dominacija-i-granica-učinkovitosti/), primijenjena na ugljik umjesto troška.

## Riješeni primjer

Telezdravstvena usluga zamjenjuje osobne posjete, izbjegavajući 5.000 putovanja automobilom godišnje po otprilike 8 kg CO2e svako — 40 tona CO2e izbjegnuto, prikazano kao negativna brojka emisija (−40,0 tona), a isporučuje 25 QALY-ja godišnje:

```
Ugljik po QALY-ju = −40.0 / 25.0 = −1.6 tona CO2e izbjegnuto po dobivenom QALY-ju
```

Uz Green Bookovu netrgovanu vrijednost ugljika (ilustrativna brojka, netrgovana središnja vrijednost 2023. ≈ 269 £/toni CO2e — Green Book ažurira vrijednosti ugljika godišnje, ponovno provjerite prije navođenja u aktivnoj analizi):

```
Unovčeni utjecaj ugljika = −40.0 × £269 = −£10,760
```

„Trošak” od −10.760 £ je korist od 10.760 £. Ako je samostalna neto novčana korist intervencije 500.000 £:

```
Ugljično prilagođeni NMB = £500,000 − (−£10,760) = £510,760
```

Ušteda ugljika dodaje slučaju umjesto da mu oduzima — dvostruka pobjeda koju okvir negativnih emisija treba izvući na vidjelo.

## Veza sa softverskim inženjerstvom

To je živo, aktualno sjecište s ekonomijom AI-ja/oblaka: ugljični otisak računanja za treniranje i pokretanje AI modela sada je stvarna stavka u NHS-ovoj nabavi, budući da NHS-ovi ugovori s dobavljačima iznad određenih pragova zahtijevaju plan smanjenja ugljika. [Jedinična ekonomija oblaka](../jedinična-ekonomija-oblaka/) već prati trošak po jedinici računalnog izlaza; ugljik po QALY-ju prirodan je predložak za buduću metriku „ugljični trošak po inferenciji” koja bi proširila taj modul i jediničnu ekonomiju inferencije u ekološku dimenziju, iako ta metrika još ne postoji.

## Zamke

- **Namještanje granica opsega**: brojanje samo izravnih emisija (Scope 1) i isključivanje emisija opskrbnog lanca (Scope 3), koje su obično većina stvarnog otiska digitalnog zdravstvenog proizvoda.
- **Korištenje zastarjele vrijednosti ugljika**: Green Book ažurira svoje netrgovane vrijednosti ugljika godišnje, pa se svaka navedena brojka u £/toni mora datirati, a ne navoditi kao fiksna konstanta.
- **Tretiranje „ugljično učinkovito” kao zamjene za „isplativo”**: niskougljična intervencija niske vrijednosti i dalje je loša uporaba NHS-ovih resursa. Ugljik je četvrti stup uz trošak i QALY-je, a ne zamjena ni za jedno.

## Izvori

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
