# Pragovi spremnosti na plaćanje

Prag spremnosti na plaćanje (WTP) je najviši iznos koji je donositelj odluke spreman platiti po jedinici zdravstvenog dobitka — crta koja pretvara [ICER](../inkrementalni-omjer-isplativosti/) u odluku usvojiti/odbiti.

## Zašto je važno

Prag je mjesto gdje zdravstvena ekonomija prestaje biti mjerenje i postaje politika. Svaki nacionalni sustav ima jedan, izričit ili prešutan, a poznavanje lokalnog broja govori vam točno kako cijeniti tvrdnju o zdravstvenoj vrijednosti:

| Tijelo | Prag (kako je istraženo, 2024.–2025.) |
|---|---|
| NICE (Engleska) | 20.000–30.000 £ po QALY-ju; empirijski prosječni prag odlučivanja ≈ 24.400 £ (2022.–24.); modifikatori težine podižu učinkoviti strop na ~36–51 tis. £; visoko specijalizirane tehnologije do 100 tis. £+ |
| ICER (SAD, nevladin) | mjerila cijena 100.000–150.000 $ po QALY-ju/evLYG-u; izvješćuje raspon 50–200 tis. $ |
| Kanada (CADTH / CDA-AMC) | ≈ 50.000 CAD$ po QALY-ju radni prag |
| WHO-CHOICE (povijesni, globalni) | 1–3× BDP-a po stanovniku po izbjegnutom DALY-ju (sada se ne preporučuje kao prejako gruba mjera) |
| Empirijska strana ponude UK (Claxton i sur.) | ≈ 13.000 £ po QALY-ju koji se stvarno istiskuje na margini NHS-a |

## Matematika

Prag λ ulazi u svako pravilo odlučivanja:

```
Usvojiti ako je ICER = ΔC/ΔE < λ
Ekvivalentno: usvojiti ako je NMB = λ×ΔE − ΔC > 0
```

Dvije teorije o tome što λ *jest*:

- **Strana potražnje**: što je društvo spremno platiti za zdravlje (vrijednosni sud).
- **Strana ponude**: zdravlje koje proračun trenutačno proizvodi na margini (empirijska veličina — Claxtonovih ~13 tis. £/QALY). Ako λ korišten za odluke premašuje stopu strane ponude, odobravanje nove tehnologije istiskuje više zdravlja nego što dodaje.

## Riješeni primjer

Vaša digitalna terapija daje 0,05 QALY-ja po liječenom pacijentu uz neto trošak (cijena minus odbici) od 800 £.

```
ICER = 800 / 0.05 = £16,000 po QALY-ju
```

- Engleska: ispod 20 tis. £ → financirati. Najviša obranjiva cijena: pri λ = 20.000 £, price_max = 0,05 × 20.000 + odbici = 1.000 £ + odbici.
- Američko komercijalno uokvirivanje pri 150 tis. $/QALY: cijena temeljena na vrijednosti znatno je viša.
- Prag zemlje u visini BDP-a po stanovniku od 4.000 $: isti proizvod mora koštati neto manje od ~200 $.

Isti proizvod, tri tržišta, tri cijene — prag *jest* model određivanja cijena. To je određivanje cijena temeljeno na vrijednosti, pokrenuto unatrag od λ.

## Veza sa softverskim inženjerstvom

Svaka inženjerska organizacija ima implicitni λ: prepreku pri kojoj financira alate po ušteđenom inženjerskom satu. Njegovo izričito navođenje — „financiramo sve ispod 40 £ po vjerodostojno ušteđenom inženjerskom satu” — omogućuje usporedbu platformskih ulaganja na ljestvici, baš kao što ljestvice troška po QALY-ju rangiraju zdravstvenu potrošnju. Lekcija strane ponude također se prenosi: vaš pravi unutarnji λ je ono što vaš *trenutačni* backlog proizvodi na margini, a ne ono što vodstvo kaže da vrijedi vrijeme.

## Zamke

- **Kupovina praga** među jurisdikcijama ili navođenje stropa HST-a za običan proizvod.
- **Tretiranje λ kao donje granice cijene**: prelazak praga je nužan, ne dovoljan — [utjecaj na proračun](../analiza-utjecaja-na-proračun/) i dalje može potopiti proizvod koji je po jedinici pristupačan.
- **Zanemarivanje da se pragovi pomiču**: NICE-ovi modifikatori težine (2022.) i periodična preispitivanja mijenjaju učinkoviti λ; datirajte svoje tvrdnje.
- **Uspoređivanje ICER-a s pragom u drugoj valuti bez prethodne pretvorbe**: vidi [usporedbu ICER-a među valutama](../usporedba-icer-a-među-valutama/) — metoda pretvorbe (paritet kupovne moći naspram tržišnog tečaja) metodološki je presudna, a ne detalj zaokruživanja.
- **Brkanje vrednovanja temeljenog na λ s tržišno-radnom tradicijom VSL/VPF**: potječu iz različitih teorijskih tradicija (metodologija ograničena zdravstvenim proračunom naspram otkrivenih preferencija iz kompromisa plaća-rizik) i nisu uvijek pomirljive — za alternativni pristup otkrivenih preferencija vrednovanju života vidi [vrijednost statističkog života](../vrijednost-statističkog-života/).

## Izvori

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
