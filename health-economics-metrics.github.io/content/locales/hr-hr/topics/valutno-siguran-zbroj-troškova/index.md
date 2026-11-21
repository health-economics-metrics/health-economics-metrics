# Valutno siguran zbroj troškova

Zbrajanje mnogih novčanih stavki — mjesečnih računa, troškova po lokaciji, višegodišnjih brojki utjecaja na proračun — običnim binarnim brojevima u pomičnom zarezu (`f64`) gomila male pogreške prikaza, jer se većina decimalnih razlomaka (npr. 1.234,56 $) ne može točno prikazati u binarnom pomičnom zarezu. Svaka je pojedinačna pogreška sićušna, ali veliki model koji zbraja stotine ili tisuće stavki kroz nekoliko godina može odstupiti za djeliće centa — a odstupanje ovisi o *redoslijedu* zbrajanja, zbog čega nije ponovljivo. Valutni zbroj izveden u točnoj decimalnoj (ili cjelobrojnoj aritmetici manjih jedinica) zbraja točno, u skladu s time kako se računovodstveni sustavi i knjige dvojnog knjigovodstva moraju uskladiti do centa.

## Zašto je važno

To je dobro dokumentirana, temeljna klasa softverskih grešaka: Goldbergov rad iz 1991. u ACM Computing Surveys „What Every Computer Scientist Should Know About Floating-Point Arithmetic” standardna je referenca za to zašto binarni pomični zarez ne može točno prikazati većinu decimalnih novčanih vrijednosti i zašto zbrajanje mnogih njih gomila pogrešku. Modeli zdravstvene ekonomije i financija NHS-a rutinski zbrajaju mnogo godina i mnogo kategorija troškova — [ukupni trošak vlasništva](../ukupni-trošak-vlasništva/) i [analiza utjecaja na proračun](../analiza-utjecaja-na-proračun/) oba agregiraju velik broj `f64` stavki troškova kroz višegodišnje horizonte. Kad se model mora uskladiti do centa — revizija koja ručno preračunava ukupno mora dobiti *identičnu* brojku — sama aritmetika mora biti točno decimalna, a ne u pomičnom zarezu.

## Matematika

```
Naivni zbroj:              ukupno = Σ f64(stavka_i)         — odstupanje ovisno o redoslijedu
Valutno siguran zbroj:     ukupno = Σ Decimal(stavka_i)      — točno, ponovljivo

Primjena postotne prilagodbe (npr. pričuva za nepredviđeno):
  prilagođeno = ukupno × množitelj             — točan Decimal rezultat, može imati
                                                  više decimalnih mjesta nego eksponent
                                                  manje jedinice valute
  zaokruženo  = round(prilagođeno, eksponent_valute, pravilo_zaokruživanja)  — pravilo
                                                  zaokruživanja (half-up naspram half-even/
                                                  bankarskog zaokruživanja) mora biti
                                                  izričito navedeno
```

Primijetite dvokoračnu disciplinu: množenje točnog `Decimal` iznosa množiteljem može dati više decimalnih mjesta nego što valuta zapravo koristi (tri decimale iz iznosa s dvije decimale puta množitelja s dvije decimale, npr.) — ta međupreciznost se *ne* zaokružuje automatski; samo izričit korak zaokruživanja, s navedenim pravilom, spušta je na pravi eksponent manje jedinice valute.

## Riješeni primjer

Dvanaest identičnih mjesečnih računa od po 1.234,56 $, zbrojeno u točnoj decimalnoj aritmetici: 1.234,56 $ × 12 = **14.814,72 $**, točno. Usporedite sa zbrajanjem `f64` literala `1234.56` dvanaest puta u IEEE-754 dvostrukoj preciznosti, što može odstupiti za djeliće centa ovisno o redoslijedu zbrajanja — stvarna, dokumentirana klasa greške, a ne problem za model izgrađen na točnoj decimalnoj `Money` aritmetici.

Sada primijenite standardnu pričuvu za nepredviđeno u budžetu utjecaja od 5 % (množitelj 1,05×) na tih 14.814,72 $: 14.814,72 $ × 1,05 = 15.555,456 $ — tri decimale, jer je množenje točno i ne zaokružuje se automatski na dvije decimale valute. Izričito zaokruživanje na 2 decimale bankarskim zaokruživanjem (half-even) daje točno **15.555,46 $**.

## Veza sa softverskim inženjerstvom

To je izravna, temeljna lekcija iza „financijski softver koristi `Decimal`, a ne `float`” — izričito se povezuje s modulima [ukupnog troška vlasništva](../ukupni-trošak-vlasništva/) i [analize utjecaja na proračun](../analiza-utjecaja-na-proračun/) ovog repozitorija, koji oba trenutačno zbrajaju obične troškove u pomičnom zarezu; argument ispravnosti ovdje ne zahtijeva trenutnu migraciju tih modela, ali precizno navodi *kada* se sustav mora uskladiti do centa i stoga ne smije koristiti binarni pomični zarez za svoju novčanu aritmetiku. Vidi i [raspodjelu troškova na točan cent](../raspodjela-troškova-na-točan-cent/) za pratući problem dijeljenja (umjesto zbrajanja) ukupnih iznosa bez gubitka centi.

## Zamke

- **Pretvaranje u `float` usred lanca**: izvlačenje novčane vrijednosti u broj s pomičnim zarezom usred izračuna (neke `Money` biblioteke tu metodu pretvorbe čak nazivaju nečim poput „lossy” kao izričito upozorenje) tiho odbacuje jamstvo točnosti za svaki izračun nizvodno od te točke.
- **„Decimal je prespor da bi se zamarali”**: odbacivanje točne decimalne aritmetike kao nepotrebne režije kad su za financijsko izvještavanje važni ispravnost i provjerljivost, a ne sirova propusnost.
- **Primjena postotka za nepredviđeno bez navođenja pravila zaokruživanja**: half-up naspram half-even (bankarsko zaokruživanje) može promijeniti završni cent; sama konvencija zaokruživanja mora biti navedeni, provjerljiv izbor — vidi [analizu troškova i koristi](../analiza-troškova-i-koristi/) za smjernice HM Treasury Green Booka o prilagodbama za nepredviđeno i pristranost optimizma, što je upravo vrsta brojke na koju se ovaj korak zaokruživanja primjenjuje.

## Izvori

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
