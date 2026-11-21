# Raspodjela troškova na točan cent

Dijeljenje ukupnog iznosa novca — zajedničke potpore, računa za infrastrukturu, brojke utjecaja na proračun — među nekoliko primatelja naivnom postotnom aritmetikom rutinski daje dijelove koji se ne zbrajaju natrag u izvorni zbroj. Raspodjela na točan cent je rješenje: cjelobrojna/decimalna metoda koja radi u manjim jedinicama valute (centi) i jamči da se dijelovi zbrajaju u *točno* cjelinu, koliko god neravnomjerno se ona dijelila. Svaki softverski inženjer koji mora uskladiti podijeljeni zbroj do centa — obračun plaća, isplata potpora, zajednička naplata usluga — treba ovaj obrazac, a ne postotke u pomičnom zarezu.

## Zašto je važno

To je imenovan, temeljni obrazac u poslovnom softverskom inženjerstvu: *Patterns of Enterprise Application Architecture* Martina Fowlera (2002.) dokumentira `Money` i `Allocate` upravo zato što je „podijeli 100 $ na troje” problem koji naivan kod stalno rješava pogrešno, i to tiho — pogreška se pojavi tek kad netko uskladi knjige i nađe da dijelovi fale cent (ili ga imaju previše) naspram zbroja. U zdravstvenoj ekonomiji i financijama NHS-a to nije akademski: ukupni utjecaji na proračun dijele se po lokacijama, godinama ili direktoratima; zajednička infrastruktura i troškovi licenci raspoređuju se po odjelima prema broju zaposlenih ili udjelu aktivnosti. Svaka od tih podjela mora se točno uskladiti, jer financijski direktor kojem se predaju dijelovi koji se ne zbrajaju u ukupno prestaje vjerovati cijelom modelu.

## Matematika

```
Naivna (pokvarena) metoda:
  dio_i = round(ukupno × udio_i / Σ udjela)     — zaokružuje svaki dio neovisno

Točna metoda (najveći ostatak / „largest remainder allocation”):
  1. baza_i = floor(ukupno_manje_jedinice × udio_i / Σ udjela)   — samo cijele manje jedinice (centi)
  2. ostatak = ukupno_manje_jedinice − Σ baza_i                  — preostali centi, uvijek < broja primatelja
  3. podijeli po 1 dodatnu manju jedinicu `ostatak` primatelja s najvećim
     razlomljenim ostatkom iz koraka 1, dok se višak ne iscrpi

Rezultat: Σ dio_i == ukupno, uvijek, po konstrukciji.
```

Točna metoda nikad ne zaokružuje dio izolirano — zaokružuje *cijelu raspodjelu* kao jednu operaciju, što čini da invarijanta zbroja vrijedi.

## Riješeni primjer

Podijelite 100,00 $ na troje jednako (`shares = [1, 1, 1]`).

Naivna metoda: 100,00 $ ÷ 3 = 33,333… $, neovisno zaokruženo na najbliži cent daje 33,33 $ za svakog primatelja. Zbrojeno: 33,33 $ × 3 = 99,99 $ — jedan cent je nestao, a nijedna pojedinačna stavka nije dovoljno „pogrešna” da se uoči pregledom.

Točna metoda: `base` = 33,33 $ za sve troje (ukupno 9.999 manjih jedinica iz `floor(10,000 / 3) = 3,333` centi svaki), uz ostatak od 1 centa (10.000 − 9.999). Taj jedini preostali cent ide primatelju s najvećim razlomljenim ostatkom u dijeljenju — konkretan primatelj je interni detalj razrješavanja izjednačenja, a ne nešto na što bi se pozivatelj trebao oslanjati. Dva primatelja završe s 33,33 $, a jedan s 33,34 $, i tri dijela zbrajaju se u točno 100,00 $.

To je upravo aritmetika koju [analiza utjecaja na proračun](../analiza-utjecaja-na-proračun/) treba kad god se ukupni utjecaj na proračun mora podijeliti po lokacijama, kohortama ili financijskim godinama i uskladiti s objavljenim zbrojem — vidi [valutno siguran zbroj troškova](../valutno-siguran-zbroj-troškova/) za pratući problem zbrajanja mnogih takvih stavki bez odstupanja.

## Veza sa softverskim inženjerstvom

To je doslovno „Money obrazac” iz arhitekture poslovnog softvera — temeljni, imenovan obrazac za upravo ovu klasu grešaka, a ne jednokratni trik. Stvarni neuspjesi financijskog usklađivanja isporučeni su iz upravo ove klase grešaka: postotne podjele izračunane u `f64`, zaokružene po primatelju i nikad provjerene naspram izvornog zbroja. Izravno se povezuje s modulom [ukupni trošak vlasništva](../ukupni-trošak-vlasništva/) ovog repozitorija, koji trenutačno zbraja obične troškove u pomičnom zarezu kroz godine i opcije — ista disciplina točnosti vrijedi kad god se ukupni TCO ili utjecaj na proračun mora raspodijeliti, a ne samo zbrojiti.

## Zamke

- **Postotak-pa-zaokruživanje umjesto najvećeg ostatka**: raspodjela postocima u pomičnom zarezu uz neovisno zaokruživanje svakog primatelja, što gomila pogrešku zaokruživanja i rijetko se zbraja natrag u ukupno, osobito preko mnogo primatelja.
- **Zanemarivanje eksponenata manjih jedinica valute**: pretpostavka da svaka valuta ima 2 decimale — japanski jen ima 0, neke valute imaju 3 — ručno napisana postotna podjela obično zakucava 2 i tiho puca za druge valute; rutina točne raspodjele čita eksponent iz same valute (ISO 4217).
- **Ponovna raspodjela već raspodijeljenog ostatka**: ponovno pokretanje rutine raspodjele na onome što je preostalo od prethodne raspodjele, bez provjera idempotentnosti, što može dvaput odobriti isti cent istom primatelju.

## Izvori

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
