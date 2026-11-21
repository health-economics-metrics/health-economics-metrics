# Dobivene godine života (LYG)

Dobivene godine života su dodatno preživljenje pripisivo intervenciji, bez prilagodbe kvaliteti: površina između krivulja preživljenja s njom i bez nje. Godina života jednake vrijednosti (evLYG) moderna je varijanta koja svako produljenje života priznaje jednako.

## Zašto je važno

LYG je najsirovniji zdravstveni ishod: koliko dulje ljudi žive? Važan je kad nedostaju podaci o kvaliteti, pri usporedbi s publikom skeptičnom prema QALY-ju i u onkologiji gdje su krivulje preživljenja primarni izlaz ispitivanja. **evLYG** (koristi ga američki institut ICER uz trošak/QALY) postoji iz etičkog razloga: QALY-ji vrednuju godinu produljenog života prema korisnosti pacijenta, pa produljenje života osobe s invaliditetom „vrijedi manje” — evLYG svaku produljenu godinu vrednuje po fiksnoj korisnosti, uklanjajući tu diskriminaciju.

## Matematika

```
LYG = prosječno preživljenje_novo − prosječno preživljenje_komparator
    = površina između krivulja preživljenja (ograničena na vremenski horizont)

QALY prikaz produljenja života:  produljenje × korisnost pacijenta
evLYG prikaz produljenja života: produljenje × fiksna korisnost (ICER koristi ~0.851,
                                 prosječnu korisnost američke populacije)
```

Oba se [diskontiraju](../diskontiranje-i-vremenska-preferencija/) u ekonomskim modelima.

## Riješeni primjer

Algoritam ranog upozorenja na sepsu u bolnici: modeliranje pokazuje da raniji antibiotici sprječavaju 12 smrti godišnje; prosječna dob tih pacijenata daje po 8 preostalih godina života uz korisnost 0,7.

```
LYG   = 12 × 8            = 96 godina života/godišnje
QALY  = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

Uz 20.000 £ po QALY-ju, QALY okvir vrednuje preživljenje na 1,34 mil. £/godišnje; evLYG okvir na 1,63 mil. £. Razlika je upravo etički sud o tome vrijedi li godina života s korisnošću 0,7 70 % „pune” godine. Ozbiljni dosjei iskazuju oboje.

## Veza sa softverskim inženjerstvom

- Analiza preživljenja je zajednički alat: Kaplan-Meierove krivulje za pacijente i za *usluge* (vrijeme do kvara, vrijeme do odljeva) ista su matematika. „Dobivene servisne godine” iz ulaganja u pouzdanost = površina između krivulja preživljenja sustava s i bez — poštenije uokvirivanje od točkovnih tvrdnji o MTTF-u.
- evLYG nosi upozorenje o dizajnu metrika i za inženjerstvo: svaka metrika produktivnosti koja pondera učinak faktorom „kvalitete tima” sustavno će podcjenjivati poboljšanja za ograničene ili tim koji se muče — ponekad namjerno želite varijantu jednake vrijednosti.

## Zamke

- **Medijan naspram prosjeka preživljenja**: ekonomski modeli trebaju prosjek (površina ispod krivulje); ispitivanja često naslovljavaju medijan. Jako se razlikuju u asimetričnim distribucijama.
- **Ekstrapolacija izvan praćenja u ispitivanju** dominira modeliranim LYG-om u kroničnoj bolesti — navedite model ekstrapolacije i testirajte ga u [analizi osjetljivosti](../analiza-osjetljivosti/).
- **Tvrdnja o spriječenim smrtima iz opservacijskih podataka prije/poslije** bez prilagodbe za sastav slučajeva i sekularne trendove.

## Izvori

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
