# Ekonomija probira

Ekonomija probira upravlja vrijednošću testiranja asimptomatskih populacija. Temeljna matematička činjenica: **pri niskoj prevalenciji bolesti čak i izvrsni testovi daju uglavnom lažno pozitivne rezultate** — a nizvodni trošak njihova progona može potopiti korist od pravih nalaza.

## Zašto je važno

Od 1968. kriteriji Wilson–Jungner WHO-a postavljaju letvicu za populacijski probir: stanje mora biti važno, test prihvatljiv i točan, mora postojati učinkovito liječenje, a ekonomija mora biti u ravnoteži. Britanski National Screening Committee primjenjuje formalnu analizu isplativosti prije odobrenja svakog nacionalnog programa — i odbija većinu prijedloga. Svaki pitch „AI će probirati sve za sve” udara u taj mehanizam i obično gubi pred aritmetikom u nastavku.

## Matematika

Pozitivna prediktivna vrijednost (PPV) — vjerojatnost da je pozitivan rezultat stvaran — kolabira pri niskoj prevalenciji:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]

Primjer: osjetljivost 90%, specifičnost 95%, prevalencija 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Jedanaest od dvanaest pozitivnih je lažno. Puna ekonomija programa:

```
Trošak po pronađenom pravom slučaju = (trošak probira + trošak obrade × svi pozitivni) / pravi pozitivni
Zatim: vrijedi li pronaći slučaj za toliko? (vrijednost rane intervencije po slučaju,
       minus šteta prekomjerne dijagnoze — pronađeni slučajevi koji nikad ne bi bili važni)
```

## Riješeni primjer

AI probir mrežnice za rijetko stanje, 100.000 ljudi, prevalencija 0,5 %, sens 90 %, spec 95 %, snimka 15 £, potvrdna obrada 400 £:

```
Pravi pozitivni:   100,000 × 0.005 × 0.90 = 450
Lažni pozitivni:   100,000 × 0.995 × 0.05 = 4,975
Trošak = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Trošak po pravom slučaju ≈ £8,156
```

Ako rano liječenje štedi 20.000 £ + 1 QALY po slučaju, program lako prolazi. Podignite specifičnost na 99 % (manje lažnih uzbuna): trošak obrade pada na (450 + 995) × 400 = 0,58 mil. £, ukupno 2,08 mil. £, trošak po slučaju ≈ **4.622 £** — specifičnost, a ne osjetljivost, mjesto je gdje se ekonomija probira dobiva pri niskoj prevalenciji.

## Veza sa softverskim inženjerstvom

Statička analiza, sigurnosno skeniranje i detekcija anomalija su programi probira nad bazama koda i telemetrijom, s prevalencijom pravih defekata često znatno ispod 1 % po prilici za upozorenje. Ista matematika objašnjava zamor od upozorenja: skener specifičnosti 95 % na kodu niske prevalencije utapa timove u lažno pozitivnima, a svaki lažno pozitivan košta pažnju i nagriza povjerenje dok se stvarna upozorenja ne počnu ignorirati (klinički izraz je *šteta od probira*; inženjerski izraz je *obamrlost pagera*). Lijekovi se prenose iz zdravstva: podižite specifičnost prije osjetljivosti, probirajte podpopulacije više prevalencije (ciljanje prema riziku ↔ skeniranje samo promijenjenog koda) i uračunajte trošak trijaže u ekonomiju alata — vidi [NNT](../broj-potreban-za-liječenje/) i [kliničku evaluaciju AI-ja](../evaluacija-kliničkog-ai-ja/). Za određivanje opsega cijelog programa probira, a ne jednog testa, vidi [broj potreban za probir](../broj-potreban-za-probir/) — koliko ljudi mora proći cijeli put probira-i-liječenja da se spriječi jedan ishod.

## Zamke

- **Navođenje osjetljivosti/specifičnosti bez prevalencije** — točnost bez PPV-a je marketing.
- **Zanemarivanje prekomjerne dijagnoze**: pronalaženje indolentne „bolesti” koja nikad ne bi škodila pokreće stvarne troškove i štete liječenja.
- **Pristranost vremena prethodenja**: ranije otkrivanje bez promijenjenih ishoda napuhuje prividno preživljenje — vidi [ranu intervenciju](../ranija-intervencija/).

## Izvori

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
