# Ranija intervencija

Ako ušteđeni kapacitet omogućuje zdravstvenom djelatniku da ranije pregleda zaostatke dijagnostike, pacijenti brže prelaze s liste čekanja na aktivno liječenje — a ranije liječenje obično je jeftinije i bolje od kasnijeg, jer neliječena stanja napreduju.

## Zašto je važno

Napredovanje bolesti je složena kamata zdravstva. Pacijent koji čeka s neliječenim stanjem nije u stabilnom stanju: tumori mijenjaju stadij, zatajenje srca dekompenzira, blaga depresija postaje teška. Raniji zahvat stoga daje dvostruku dividendu — **bolje ishode** (više QALY-ja, liječenje iz zdravije početne točke) i često **niže troškove liječenja** (liječenje u ranom stadiju manje je intenzivno od kasnog spašavanja). Taj mehanizam podiže „brže puteve” iz operativne ljubaznosti u kliničku i ekonomsku nužnost — i duboki je razlog zašto se [trošak odgode](../trošak-odgode/) primjenjuje na kliničke softvere.

## Matematika

```
Vrijednost ranije intervencije (po pacijentu) =
    [Trošak_kasno − Trošak_rano]                      (odbitak troška liječenja)
  + [QALY_rano − QALY_kasno] × λ                      (zdravstveni dobitak × prag)
  × P(napredovanje tijekom odgode)                    (ponderiranje vjerojatnošću)
```

Ponderiranje vjerojatnošću je ključno: ne napreduje svaki pacijent koji čeka. Modelirajte vjerojatnost prijelaza po jedinici vremena (iz podataka o prirodnom tijeku), a ne najgori slučaj. Zatim diskontirajte: troškovi izbjegnuti godinama unaprijed danas vrijede manje ([diskontiranje](../diskontiranje-i-vremenska-preferencija/)) — i imajte na umu da je većina rane intervencije *isplativa*, a ne *štedi trošak* (vidi [ekonomiju prevencije](../ekonomija-prevencije/)).

## Riješeni primjer

Zaostatak probira dijabetičke retinopatije: 4.000 pacijenata, 6 mjeseci kasni. AI potpomognuto ocjenjivanje utrostručuje propusnost i čisti red za 8 tjedana. Prirodni tijek: ~2 % pacijenata na čekanju godišnje napreduje do stadija opasnih za vid dok nisu pregledani.

```
Izbjegnuti događaji napredovanja ubrzanjem od ~4 mjeseca:
  4,000 × 2% × (4/12) ≈ 27 pacijenata

Po izbjegnutom napredovanju:
  odbitak liječenja (intravitrealna terapija naspram lasera) ≈ £4,000
  QALY dobitak (očuvan vid) ≈ 0.8 QALY-ja × £20,000 = £16,000

Vrijednost ≈ 27 × (4,000 + 16,000) ≈ £540,000 — iz jednog zaostatka očišćenog jednom,
prije brojanja trajnog dobitka u propusnosti.
```

## Veza sa softverskim inženjerstvom

Dva prijenosa. Prvi, očiti: softver koji ubrzava dijagnostičke i terapijske putove (trijaža, AI ocjenjivanje, usmjeravanje rezultata) unovčuje se upravo ovim modelom — a model govori koji put ubrzati: onaj s najstrmijom krivuljom napredovanja, a ne najdužim redom. Drugi, inženjersko zrcalo: **i defekti napreduju**. Bug uhvaćen u dizajnu košta razgovor; u produkciji košta incident; krivulja troška „shift-left” (10–100× po fazi) je model napredovanja, a poštena inačica nosi isto upozorenje — rano otkrivanje obično je isplativo, a ne besplatan novac, jer pregledi i testovi imaju stvarne troškove, a većina uhvaćenih problema ne bi nikad napredovala.

## Zamke

- **Pretpostavljeno najgore napredovanje za sve** — ponderiranje vjerojatnošću je razlika između analize i zagovaranja.
- **Pristranost vremena prethodenja (lead-time bias)**: ranije pronalaženje bolesti bez promjene ishoda izgleda kao korist, ali nije; tvrdnja je ranija *učinkovita intervencija*, a ne samo ranije otkrivanje (vidi [ekonomiju probira](../ekonomija-probira/)).
- **Dvostruko brojanje** s tvrdnjama o listi čekanja i RTT-u izgrađenima na istom ubrzanju — jedno poboljšanje puta, jedan skup koristi, raspodijeljen jednom.

## Izvori

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
