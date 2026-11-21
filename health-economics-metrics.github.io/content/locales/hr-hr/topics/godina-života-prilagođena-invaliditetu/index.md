# Godina života prilagođena invaliditetu (DALY)

DALY je jedna izgubljena godina zdravog života — zrcalna slika [QALY-ja](../godina-života-prilagođena-kvaliteti/) sa strane tereta. Dok QALY-ji broje *stečeno* zdravlje, DALY-ji broje zdravlje *izgubljeno* zbog bolesti; intervencije se vrednuju **izbjegnutim** DALY-jima.

## Zašto je važno

DALY je standard globalnog zdravlja (WHO, studija Global Burden of Disease i većina zdravstvenih ministarstava zemalja niskog i srednjeg dohotka planiraju u DALY-jima). Ako vaš softver cilja međunarodne zdravstvene sustave, donatore ili programe usklađene sa WHO-om, jezik vrijednosti su izbjegnuti DALY-ji, a ne dobiveni QALY-ji. Povijesno mjerilo WHO-CHOICE: intervencija koja izbjegne DALY za manje od 1× BDP-a po stanovniku je „vrlo isplativa”, 1–3× BDP-a po stanovniku „isplativa” (WHO sada ne preporučuje kruto korištenje tih pojaseva, ali u praksi su i dalje sveprisutni).

## Matematika

```
DALY = YLL + YLD

YLL (izgubljene godine života)       = smrti × standardni očekivani životni vijek u dobi smrti
YLD (godine života s invaliditetom)  = prevalencija × težina invaliditeta

težina invaliditeta ∈ [0, 1], 0 = potpuno zdravlje, 1 = jednako smrti
(težine objavljuje studija Global Burden of Disease)
```

## Riješeni primjer

Platforma za podsjetnike na probir u nekoj regiji povećava rano otkrivanje bolesti. Godišnje sprječava 10 prijevremenih smrti (svaka gubi 20 godina u odnosu na standardni očekivani životni vijek) i sprječava 200 ljudi da godinu dana žive sa stanjem čija je težina invaliditeta 0,2.

```
Izbjegnuti YLL = 10 × 20        = 200
Izbjegnuti YLD = 200 × 0.2      = 40
Izbjegnuti DALY-ji             = 240 godišnje
```

Ako rad platforme košta 600.000 $ godišnje, trošak po izbjegnutom DALY-ju je 600.000 / 240 = **2.500 $**. U zemlji s BDP-om po stanovniku od 8.000 $ to je znatno ispod mjerila od 1× BDP-a — „vrlo isplativo” prema WHO-CHOICE.

## Veza sa softverskim inženjerstvom

- Digitalno zdravlje usmjereno na financijere globalnog zdravlja (Gavi, Global Fund, nacionalni programi) treba iskazati učinak kao **trošak po izbjegnutom DALY-ju** — to je metrika u kojoj recenzenti prijava već razmišljaju.
- DALY je i koristan predložak za *obračun tereta* u inženjerstvu: incidenti, nepouzdane izgradnje i trenje naslijeđenog koda su „godine života s invaliditetom” baze koda — inventar tereta ponderiran mukom govori gdje sanacija kupuje najviše „zdravih inženjerskih godina”, kao što tablice tereta GBD-a usmjeravaju zdravstvenu potrošnju.

## Zamke

- **Dobiveni QALY-ji ≠ izbjegnuti DALY-ji brojčano** — različite težine, različite tablice smrtnosti, različite konvencije (DALY-ji su povijesno koristili dobno ponderiranje i diskontiranje unutar same mjere). Ne pretvarajte ležerno.
- **Korištenje pragova u višekratnicima BDP-a kao pečata** — sam WHO upozorava da zanemaruju proračune i oportunitetni trošak; vidi [pragove spremnosti na plaćanje](../pragovi-spremnosti-na-plaćanje/).
- **Tvrdnja o DALY-jima na razini populacije iz učinkovitosti po korisniku** bez množenja prihvaćenošću i pridržavanjem — vidi [doseg i pravednost](../doseg-i-pravednost/).

## Izvori

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
