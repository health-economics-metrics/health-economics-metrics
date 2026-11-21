# Trošak odgode (CoD)

Trošak odgode je ekonomska vrijednost izgubljena po jedinici vremena u kojoj funkcionalnost, proizvod ili usluga *nije* isporučena. To je najjači most između metrika softverske isporuke i zdravstvene ekonomije: pretvara „isporučili smo kasno” u valutu — ili u QALY-je.

## Zašto je važno

Reinertsenovo pravilo: „Ako kvantificirate samo jednu stvar, kvantificirajte trošak odgode.” Većina organizacija zna koliko projekt košta, ali ne koliko košta mjesec odgode, pa optimiziraju proračune dok krvare vremensku vrijednost. Za zdravstveni softver ulozi su doslovni: svakog tjedna kad je poboljšanje puta odgođeno, pacijenti dulje čekaju u lošijim zdravstvenim stanjima. CoD je najjači matematički okvir za predstavljanje NHS-ovim dionicima jer cijeni *odsutnost* vašeg softvera.

## Matematika

```
CoD = korist po jedinici vremena propuštena dok nije isporučeno   (£/tjedan ili QALY/tjedan)

Ukupni gubitak od odgode = CoD × trajanje odgode

Za određivanje prioriteta, vidi wsjf-and-cd3.md: CD3 = CoD / trajanje.
```

Za klinički softver, izrazite i u zdravlju kao i u novcu:

```
CoD_zdravlje = pacijenti pogođeni tjedno × QALY dobitak po pacijentu
CoD_novac    = CoD_zdravlje × λ (prag spremnosti na plaćanje, £20k–30k/QALY)
               + propuštene operativne uštede tjedno
```

## Riješeni primjer

**Operativno**: softver štedi 200 £ po pacijentu na putu; trust obradi 50 takvih pacijenata tjedno.

```
CoD = 200 × 50 = £10,000/tjedan
Odgoda nabave od 10 tjedana košta 200 × 50 × 10 = £100,000 izbjegivog rasipanja.
```

**Klinički**: poboljšanje trijaže uklanja 5 tjedana čekanja (korisnost 0,68 → 0,80 ranije) za 100 pacijenata tjedno:

```
QALY dobitak po pacijentu = (5/52) × 0.12 ≈ 0.0115
CoD_zdravlje = 100 × 0.0115 = 1.15 QALY-ja/tjedan
CoD_novac    = 1.15 × £20,000 ≈ £23,000/tjedan zdravstvene vrijednosti
```

Šestomjesečna odgoda uvođenja „košta” ~30 QALY-ja — argument koji preoblikuje klizanje IT puštanja u rad u klinički događaj. (Mjerilo za opseg: slavna Black Swan Farmingova analiza Maerska pronašla je pojedinačne funkcionalnosti s CoD ≈ 200 tis. $/tjedan koje su čekale 38 tjedana.)

## Veza sa softverskim inženjerstvom

CoD je metrika koja čini [DORA vrijeme isporuke](../dora-metrike/) i [učinkovitost toka](../metrike-toka/) financijski čitljivima: vrijeme isporuke × CoD = novac (ili zdravlje) spaljen u redovima. Uporabe:

- **Određivanje prioriteta**: rangirajte posao po CoD/trajanje ([WSJF/CD3](../wsjf-i-cd3/)) umjesto prema najglasnijem dioniku.
- **Ekonomija procesa**: dvotjedni ritam izdanja ima očekivani trošak odgode od ~1 tjedna × CoD po funkcionalnosti naspram kontinuirane isporuke — cijenite seriju.
- **Nabava**: NHS-ovi ciklusi nabave od 6–18 mjeseci imaju CoD; njegovo prikazivanje mijenja razgovore o hitnosti (vidi [analizu utjecaja na proračun](../analiza-utjecaja-na-proračun/) za parnjak pristupačnosti).

## Zamke

- **Pretpostavka linearnog CoD-a**: neki posao ima vrijednost oblikovanu rokom (regulatorni datumi — beskonačan CoD nakon datuma, nula prije) ili vrijednost koja se raspada (prozori prvog igrača). Razvrstajte profil hitnosti prije množenja.
- **CoD na izlazima koje nitko ne želi**: odgoda košta samo ako stvar ima vrijednost; odgođeno smeće je besplatno.
- **Dvostruko brojanje odgode i diskontiranja**: [diskontiranje](../diskontiranje-i-vremenska-preferencija/) već cijeni vrijeme na višegodišnjim horizontima; CoD je operativna inačica unutar horizonta. Koristite CoD za tjedne/mjesece, pomak NPV-a za godine.

## Izvori

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
